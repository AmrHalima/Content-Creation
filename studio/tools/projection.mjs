// Minimal frontmatter/section readers for BRIEF.md, STORYBOARD.md, SCRIPT.md.
// Only what studio needs: top YAML block, per-frame blocks, VO lines.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

export function readIf(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

export function frontmatter(text) {
  if (!text) return {};
  const body = extractBlock(text);
  if (body == null) return {};
  const out = {};
  let section = null;
  for (const raw of body.split(/\r?\n/)) {
    const line = raw.replace(/\t/g, "  ");
    if (!line.trim()) continue;
    const top = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/); // column 0
    if (top) {
      const val = unquote(top[2].trim());
      if (val === "") section = top[1];
      else {
        out[top[1]] = val;
        section = null;
      }
      continue;
    }
    if (!section) continue; // comments and deeper nesting are not read here
    const sub = line.match(/^\s+([A-Za-z0-9_]+):\s*(.*)$/);
    if (!sub) continue;
    const val = sub[2].trim();
    if (val.startsWith("{")) out[`${section}.${sub[1]}`] = inlineObject(val);
    else if (val === "") section = `${section}.${sub[1]}`;
    else out[`${section}.${sub[1]}`] = unquote(val);
  }
  return out;
}

// Line-wise scan: the fence must start a line and be only dashes. A regex with
// `---` as the terminator dies on design specs that use `# ======` rules inside
// the block (the `---` inside the comment is not a fence).
function extractBlock(text) {
  const lines = text.replace(/^/, "").split(/\r?\n/);
  if (lines[0].trim() !== "---") return null;
  const end = lines.findIndex((l, i) => i > 0 && /^-{3,}\s*$/.test(l));
  return end < 0 ? null : lines.slice(1, end).join("\n");
}


function unquote(v) {
  if (/^".*"$/.test(v) || /^'.*'$/.test(v)) return v.slice(1, -1);
  const hash = v.match(/^"([^"]*)"(?:\s*#.*)?$/); // quoted value, then a comment
  if (hash) return hash[1];
  return v.replace(/\s+#.*$/, "").trim();
}

function inlineObject(val) {
  const pairs = {};
  for (const piece of val.replace(/^\{|\}$/g, "").split(",")) {
    const p = piece.trim().match(/^([A-Za-z0-9_]+):\s*"?([^"]*)"?$/);
    if (p) pairs[p[1]] = p[2];
  }
  return JSON.stringify(pairs);
}

// `## Frame 3 — title` (or `## Frame 3: title`) blocks, in document order.
export function storyboardFrames(text) {
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const frames = [];
  let cur = null;
  for (const line of lines) {
    const h = line.match(/^##\s+Frame\s+(\d+)\b(.*)$/i);
    if (h) {
      if (cur) frames.push(cur);
      cur = { frame: Number(h[1]), heading: line.replace(/^##\s*/, "").trim(), fields: {}, scenes: [], body: [] };
      continue;
    }
    if (!cur) continue;
    if (/^##\s/.test(line)) {
      frames.push(cur);
      cur = null;
      continue;
    }
    const f = line.match(/^\s*-\s*([a-z_][a-z0-9_]*):\s*(.*)$/i);
    if (f && !/^\s{2,}/.test(line)) {
      let v = f[2].trim();
      if (/^".*"$/.test(v)) v = v.slice(1, -1);
      if (!(f[1] in cur.fields)) cur.fields[f[1]] = v;
      continue;
    }
    if (/^Scene\s+\d+\b/.test(line.trim())) cur.scenes.push(line.trim());
    cur.body.push(line);
  }
  if (cur) frames.push(cur);
  return frames;
}

// Narration text per frame, from SCRIPT.md. Two shapes are in use in this
// workspace: `## Frame N — title` headings with indented prose (P1..P3), and
// `- voiceover: "…"` lines. Both are read so cues work on either.
export function scriptLines(text) {
  if (!text) return [];
  const out = [];
  const lines = text.split(/\r?\n/);
  let cur = null;
  for (const line of lines) {
    const h = line.match(/^#{2,4}\s+.*?\(?\s*(?:frame|Frame)\s+(\d+)\s*\)?/);
    if (h) {
      if (cur && cur.text.trim()) out.push(cur);
      cur = { frame: Number(h[1]), text: "" };
      continue;
    }
    const vo = line.match(/^\s*-\s*voiceover:\s*"(.+)"\s*$/);
    if (vo) {
      const frame = out.length + 1;
      out.push({ frame, text: vo[1] });
      continue;
    }
    if (!cur) continue;
    if (/^\s*\*\*/.test(line)) continue;
    const m = line.match(/^(?: {4,}|\t)(.+)$/);
    if (m) cur.text += (cur.text ? " " : "") + m[1].trim();
  }
  if (cur && cur.text.trim()) out.push(cur);
  // de-duplicate by frame, keeping the first
  const seen = new Set();
  return out.filter((l) => (seen.has(l.frame) ? false : (seen.add(l.frame), true)));
}

export function readJson(path) {
  const t = readIf(path);
  if (t == null) return null;
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}

export function listFrames(projectDir) {
  const dir = join(projectDir, "compositions", "frames");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => join(dir, f));
}

export function renders(projectDir) {
  const dir = join(projectDir, "renders");
  if (!existsSync(dir)) return [];
  const walk = (d, rel = "") =>
    readdirSync(d).flatMap((name) => {
      const p = join(d, name);
      const r = rel ? `${rel}/${name}` : name;
      if (statSync(p).isDirectory()) return walk(p, r);
      return name.endsWith(".mp4") ? [{ path: `renders/${r}`, bytes: statSync(p).size }] : [];
    });
  return walk(dir);
}

export function sourceStamp(projectDir) {
  // Stable hash over everything that affects the rendered output, so a render
  // can be marked stale the moment its inputs change.
  const files = [
    "index.html",
    "STORYBOARD.md",
    "SCRIPT.md",
    "audio_meta.json",
    "caption_groups.json",
    "frame.md",
  ];
  const chunks = [];
  const dig = (p, label) => {
    const t = readIf(p);
    if (t != null) chunks.push(`${label}:${t.length}:${hash(t)}`);
  };
  for (const f of files) dig(join(projectDir, f), f);
  for (const f of listFrames(projectDir)) dig(f, f.replace(`${projectDir}/`, "").replace(/\\/g, "/"));
  return hash(chunks.join("|"));
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

export function frameCount(projectDir) {
  return listFrames(projectDir).length;
}

export function totalDuration(projectDir) {
  const t = readIf(join(projectDir, "index.html"));
  if (!t) return null;
  const m = t.match(/id="root"[\s\S]{0,400}?data-duration="([\d.]+)"/);
  return m ? Number(m[1]) : null;
}
