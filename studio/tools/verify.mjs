// The traps `npm run check` cannot see. Static, deterministic, zero credits —
// run it before any render.
//
//   node studio/tools/verify.mjs <projectDir> [--json]
//
// Every rule below exists because the defect shipped past a green check at least
// once in this workspace; evidence is in studio/known-traps.md.
// Exits 1 when a HIGH finding is present.

import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { isMain } from "./lib.mjs";
import { blocksFor, classMap, gsapBodies, htmlFiles, selectorList, styleText, varsProps } from "./inspect.mjs";

const HIGH = "HIGH";
const MED = "MED";
const INLINE = new Set(["span", "a", "em", "strong", "b", "i", "small", "code"]);
const TRANSFORM_KEYS = /^(?:x|y|X|Y|xPercent|yPercent|scale|scaleX|scaleY|rotation|rotationX|rotationY|skewX|skewY|transform)$/;

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const callHits = (c, id) => new RegExp(`[#.]${esc(id)}(?![\\w-])`).test(c);

export function run({ dir, json = false, quiet = false }) {
  const project = resolve(dir);
  const findings = [];
  const add = (level, rule, file, detail, hint) =>
    findings.push({ level, rule, file: relativeTo(project, file), detail, hint });

  const index = join(project, "index.html");
  const files = [...htmlFiles(join(project, "compositions"))];
  if (existsSync(index)) files.unshift(index);

  // portrait caption keep-out: the framework holds content to the top ~83%
  const aspect = readIfExists(join(project, "BRIEF.md")).match(/^aspect:\s*(\d+)x(\d+)/m);
  const cap = aspect && Number(aspect[2]) > Number(aspect[1]) ? Math.round(Number(aspect[2]) * 0.83) : null;

  for (const file of files) {
    const html = readFileSync(file, "utf8");
    const css = styleText(html);
    const sel = selectorList(css);
    const { calls, scripts } = gsapBodies(html);
    const classes = classMap(html);

    // T1 — animated element with no CSS rule at all: it renders unstyled at 0,0
    // in the default serif and collides with its siblings while `check` reports
    // zero errors (P2 shipped five of these).
    const svg = svgIds(html);
    for (const [id, cls] of classes) {
      if (skipId(id) || svg.has(id)) continue;
      const referenced = calls.some((c) => callHits(c, id)) || sel.some((s) => new RegExp(`#${esc(id)}(?![\\w-])`).test(s));
      if (!referenced) continue;
      const covered =
        sel.some((s) => new RegExp(`#${esc(id)}(?![\\w-])`).test(s)) ||
        own(cls).some((c) => sel.some((s) => new RegExp(`\\.${esc(c)}(?![\\w-])`).test(s)));
      if (covered) continue;
      add(HIGH, "id-without-css", file, `#${id} is animated but no CSS rule matches it or its classes`, "add the matching class to the element and to the CSS — an id-only element is invisible to the stylesheet");
    }

    // T2 — transforms on inline elements are ignored by the browser, so the
    // element fades without ever moving (P2's layer-4 label).
    for (const [id, cls] of classes) {
      if (skipId(id) || !INLINE.has(tagOf(html, id))) continue;
      if (!calls.some((c) => callHits(c, id) && varsProps(c).some((k) => TRANSFORM_KEYS.test(k)))) continue;
      const rules = sel.filter((s) => new RegExp(`[#.]${esc(id)}(?![\\w-])`).test(s) || own(cls).some((c) => new RegExp(`\\.${esc(c)}(?![\\w-])`).test(s)));
      const declared = rules.some((r) => blocksFor(css, r).some((b) => /display:\s*(inline-block|block|flex|grid|inline-flex)/.test(b)));
      const inline = new RegExp(`id="${esc(id)}"[^>]*style="[^"]*display:\\s*(inline-block|block|flex)`).test(html);
      if (declared || inline) continue;
      add(HIGH, "inline-transform", file, `<${tagOf(html, id)}> #${id} is transformed but has no block/inline-box display`, "add display:inline-block — transforms on inline elements are ignored");
    }

    // T3 — TextPlugin is not in the shipped bundle: a `text:` key in a tween's
    // vars is a silent no-op that still passes check. A `[{t, text}]` sequence
    // array read by a time proxy is the sanctioned shape and is not a hit.
    for (const c of calls) {
      if (varsProps(c).includes("text")) {
        add(HIGH, "text-tween", file, "GSAP tween sets `text` in its vars — TextPlugin is not shipped, so it no-ops", "swap text with a time-proxy plus a discrete sequence (known-traps.md #3)");
        break;
      }
    }

    // T4 — audio elements: missing id/start/duration means lint errors
    // media_missing_id and the render comes out silent.
    for (const m of html.matchAll(/<audio\b([^>]*)>/g)) {
      const attrs = m[1];
      const src = (attrs.match(/src="([^"]+)"/) || [])[1] || "?";
      const problems = [];
      if (!/\sid="/.test(attrs)) problems.push("no id (media_missing_id → silent render)");
      if (!/data-start="/.test(attrs)) problems.push("no data-start");
      if (!/data-(duration|end)="/.test(attrs)) problems.push("no data-duration/data-end");
      if (problems.length) add(HIGH, "audio-attrs", file, `<audio src="${src}"> ${problems.join(", ")}`, "every audio element needs id + data-start + a duration");
    }

    // T5 — @font-face referencing a file that is not on disk: renders fallback
    // and fails lint (the Figtree trap — the brand body face has no file here).
    for (const m of css.matchAll(/@font-face\s*\{[^}]*?url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
      const ref = m[1];
      if (/^(https?:|data:)/.test(ref)) continue;
      const clean = ref.replace(/^\.?\//, "");
      // sub-compositions resolve asset URLs against the project root
      if (![join(project, clean), join(dirname(file), clean)].some((p) => existsSync(p))) {
        add(HIGH, "font-missing", file, `@font-face references ${ref}, which is not on disk`, "ship the file under assets/fonts or drop the face");
      }
    }

    // T6 — the caption lane marker the assembler does not emit.
    if (file === index && /id="el-captions"/.test(html) && !/data-track-kind="captions"/.test(html)) {
      add(HIGH, "captions-lane", file, '#el-captions is missing data-track-kind="captions"', "run `studio assemble` (it patches this in)");
    }

    // T7 — a timed authored element without class="clip" loses the shared
    // full-frame box. Framework-owned mounts are exempt.
    for (const m of html.matchAll(/<(div|section)\b([^>]*\bdata-start="[^"]+"[^>]*)>/g)) {
      const attrs = m[2];
      if (/data-composition-src=|data-track-kind|class="[^"]*\b(clip|scene)\b/.test(attrs)) continue;
      const idm = (attrs.match(/\sid="([^"]+)"/) || [])[1];
      if (!idm || skipId(idm)) continue;
      add(MED, "clip-class", file, `timed <${m[1]}> #${idm} without class="clip"`, "the .clip CSS is what gives a scene its full-frame box");
    }

    // T8 — deterministic-render contract.
    if (/(?:Date\.now\(\)|Math\.random\(\)|performance\.now\(\)|\bfetch\s*\()/.test(scripts)) {
      add(HIGH, "nondeterministic", file, "timeline code uses Date.now / Math.random / performance.now / fetch", "the renderer seeks; non-deterministic logic gives different frames per pass");
    }

    // T9 — portrait keep-out, read from CSS rules and inline styles.
    if (cap) {
      for (const cm of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
        const dm = cm[2].match(/\btop:\s*(\d{3,4})px/);
        if (!dm || Number(dm[1]) <= cap) continue;
        for (const raw of cm[1].split(",")) {
          const head = raw.trim().replace(/\s+/g, " ");
          if (!/^#/.test(head) || /^:root|^html|^body/i.test(head)) continue;
          if (/caption|cap-band|keep-out/i.test(head)) continue;
          add(MED, "keep-out", file, `${head} sits at top:${dm[1]}px, past the y=${cap} caption cap`, "move it above the keep-out or mark the element data-layout-ignore");
        }
      }
      for (const sm of html.matchAll(/style="[^"]*\btop:\s*(\d{3,4})px[^"]*"/g)) {
        if (Number(sm[1]) <= cap) continue;
        add(MED, "keep-out", file, `inline style top:${sm[1]}px is past the y=${cap} caption cap`, "move it above the keep-out or mark the element data-layout-ignore");
      }
    }
  }

  const counts = { HIGH: 0, MED: 0 };
  for (const f of findings) counts[f.level] += 1;
  const summary = { project: basename(project), ok: counts.HIGH === 0, counts, findings, files: files.length };
  if (json) console.log(JSON.stringify(summary, null, 2));
  else if (!quiet) print(summary);
  return summary;
}

function skipId(id) {
  return id === "root" || id === "main" || /^(el-|hf-|caption|voice-)/.test(id);
}

function own(cls) {
  return cls.split(/\s+/).filter(Boolean);
}

function tagOf(html, id) {
  const m = html.match(new RegExp(`<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*\\sid="${esc(id)}"`));
  return m ? m[1].toLowerCase() : "";
}

function svgIds(html) {
  return new Set([...html.matchAll(/<(?:g|path|rect|circle|line|polyline|polygon|text|ellipse)\b[^>]*\sid="([^"]+)"/g)].map((m) => m[1]));
}

function relativeTo(project, file) {
  return file.replace(project, ".").replace(/\\/g, "/");
}

function print(s) {
  console.log(`${s.ok ? "✓" : "✗"} ${s.project} — ${s.counts.HIGH} high, ${s.counts.MED} medium across ${s.files} html files`);
  for (const f of s.findings) console.log(`  ${f.level.padEnd(4)} ${f.rule.padEnd(16)} ${f.file}\n         ${f.detail}\n         → ${f.hint}`);
  if (!s.findings.length) console.log("  no known traps detected");
}

function readIfExists(p) {
  try {
    return readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

if (isMain(import.meta.url)) {
  const argv = process.argv.slice(2);
  const dir = argv.find((a) => !a.startsWith("--")) || ".";
  const res = run({ dir, json: argv.includes("--json") });
  process.exit(res.ok ? 0 : 1);
}
