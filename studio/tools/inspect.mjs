// Helpers shared by verify.mjs: class extraction and CSS block lookup.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

export function* htmlFiles(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith(".html")) yield p;
  }
}

export function styleText(html) {
  return [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join("\n");
}

export function selectorList(css) {
  const out = [];
  for (const m of css.matchAll(/([^{}]+)\{/g)) {
    const head = m[1].trim();
    if (!head || head.startsWith("@") || head.startsWith("/*")) continue;
    for (const s of head.split(",")) {
      const sel = s.trim().replace(/\s+/g, " ");
      if (sel) out.push(sel);
    }
  }
  return out;
}

export function blocksFor(css, selector) {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`${esc}\\s*\\{([^}]*)\\}`, "g");
  return [...css.matchAll(re)].map((m) => m[1]);
}

// id -> classes actually present on that element, whatever the attribute order.
export function classMap(html) {
  const map = new Map();
  for (const m of html.matchAll(/<(?!\!)[a-zA-Z][a-zA-Z0-9]*\b([^>]*)>/g)) {
    const attrs = m[1];
    // (?<!-) so a preview-stamped data-hf-id="hf-…" is not mistaken for id=
    const id = (attrs.match(/(?<![-\w])id="([^"]+)"/) || [])[1];
    if (!id) continue;
    const cls = (attrs.match(/\bclass="([^"]+)"/) || [])[1] || "";
    map.set(id, (map.get(id) || "").concat(" ", cls).trim());
  }
  return map;
}

export function gsapBodies(html) {
  const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).join("\n");
  return { scripts, calls: tweenCalls(scripts) };
}

// Balanced-scan of `.to( / .from( / .fromTo( / .set( / .tweenTo(` invocations.
// Returns the raw argument list per call so rules can tell a tween's vars
// object (top level) from a data array nested inside it.
export function tweenCalls(src) {
  const out = [];
  const re = /\.(to|from|fromTo|set|tweenTo|toFrom)\s*\(/g;
  let m;
  while ((m = re.exec(src))) {
    let i = re.lastIndex; // just after "("
    let depth = 1;
    const start = i;
    while (i < src.length && depth > 0) {
      const c = src[i];
      if (c === "(" || c === "[" || c === "{") depth++;
      else if (c === ")" || c === "]" || c === "}") depth--;
      i++;
    }
    out.push(src.slice(start, i - 1).replace(/\s+/g, " "));
    if (out.length > 4000) break;
  }
  return out;
}

// Property names of the tween's vars object: the keys that sit one level
// inside the call (depth 2). Lets a rule tell `{text: "…"}` in vars (a bug)
// from a `[{t, text}]` sequence array passed as data (the sanctioned shape).
export function varsProps(call) {
  const names = [];
  let d = 0;
  let mark = 0;
  for (let i = 0; i < call.length; i++) {
    const c = call[i];
    if (c === "{" || c === "[" || c === "(") {
      d++;
      mark = i + 1;
    } else if (c === "}" || c === "]" || c === ")") {
      d--;
    } else if (d === 2 && (c === "," || c === ":")) {
      if (c === ":") {
        const n = call.slice(mark, i).trim().match(/[A-Za-z_$][\w$]*$/);
        if (n) names.push(n[0]);
      }
      mark = i + 1;
    }
  }
  return names;
}

