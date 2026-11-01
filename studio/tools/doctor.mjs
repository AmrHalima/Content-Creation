// Environment truth for this workspace: what actually runs offline, what needs
// the network, what will silently fall back, and what will fail.
//
//   node studio/tools/doctor.mjs [--json]
//
// Run it before a batch. The point is to know the failure modes before you
// spend a render, not after.

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { DESIGN_SPEC, ENV_FILE, ROOT, SKILL_ROOTS, VIDEOS, isMain, runNpx } from "./lib.mjs";
import { frontmatter, readIf } from "./projection.mjs";

const CHECKS = [];
const check = (name, fn) => CHECKS.push({ name, fn });

function sh(cmd, args, timeout = 30000) {
  const r = spawnSync(cmd, args, { encoding: "utf8", timeout, shell: false });
  return { ok: r.status === 0, out: (r.stdout || "").trim(), err: (r.stderr || "").trim().split(/\r?\n/).slice(-1)[0] };
}

check("ffmpeg + ffprobe on PATH", () => {
  const a = sh("ffmpeg", ["-version"]);
  const b = sh("ffprobe", ["-version"]);
  return a.ok && b.ok
    ? { level: "ok", note: a.out.split(/\r?\n/)[0] }
    : { level: "block", note: "video prep, loudness checks and audio extension all need ffmpeg" };
});

check("node + npm/npx", () => {
  const a = sh(process.execPath, ["--version"]);
  const b = runNpx(["--version"], { timeout: 60000 });
  return a.ok && b.status === 0 ? { level: "ok", note: `node ${a.out}, npx ${(b.stdout || "").trim()}` } : { level: "block", note: `node ${a.ok ? a.out : "MISSING"}, npx ${b.status === 0 ? (b.stdout || "").trim() : "MISSING"} — the hyperframes CLI runs through npx` };
});

check("hyperframes CLI resolvable (npx, may need network)", () => {
  const a = runNpx(["--yes", "hyperframes", "--version"], { timeout: 180000 });
  if (a.status === 0) return { level: "ok", note: (a.stdout || "").trim() };
  return { level: "warn", note: `${(a.stderr || a.error?.message || "npx hyperframes --version failed").trim().split(/\r?\n/).slice(-1)[0]} — projects pin their own version; a cold npx cache with no network blocks every CLI command` };
});

check("ASR for word timings", () => {
  const hf = runNpx(["--yes", "hyperframes", "transcribe", "--help"], { timeout: 60000 });
  const fw = sh("python", ["-c", "import faster_whisper, numpy; print('ok')"]);
  const cache = process.env.HF_HOME || join(process.env.USERPROFILE || "", ".cache", "huggingface", "hub");
  const models = existsSync(cache) ? readdirSync(cache).filter((d) => d.includes("faster-whisper")) : [];
  const usable = models.filter((m) => {
    const snaps = join(cache, m, "snapshots");
    return existsSync(snaps) && readdirSync(snaps).some((s) => existsSync(join(snaps, s, "model.bin")));
  });
  if (usable.length) return { level: "ok", note: `faster-whisper cached: ${usable.map((u) => u.replace("models--Systran--faster-whisper-", "")).join(", ")} — studio cues can measure timings offline` };
  if (fw.ok && hf.status === 0) return { level: "warn", note: "faster-whisper importable but no model cached — run `studio cues` once with network, or expect estimate-mode captions" };
  return { level: "warn", note: "no local ASR — word timings fall back to the deterministic estimate (what every shipped film here used)" };
});

check("TTS providers", () => {
  const envKeys = existsSync(ENV_FILE)
    ? readFileSync(ENV_FILE, "utf8").split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).map((l) => l.split("=")[0])
    : [];
  const kokoro = runNpx(["--yes", "hyperframes", "tts", "--help"], { timeout: 60000 });
  const design = frontmatter(readIf(DESIGN_SPEC) || "");
  const bits = [];
  bits.push(`kokoro ${kokoro.status === 0 ? "available (English only)" : "unavailable"}`);
  if (envKeys.includes("ELEVENLABS_API_KEY")) bits.push("ELEVENLABS_API_KEY set");
  if (envKeys.includes("GEMINI_API_KEY")) bits.push("GEMINI_API_KEY set (the only proven Arabic voice)");
  if (!design.voice_id) bits.push("design.md voice_id is EMPTY → ElevenLabs cannot be used without it");
  const level = kokoro.status === 0 ? "ok" : "block";
  return { level, note: bits.join(" · ") };
});

check("provider cascade traps", () => {
  return {
    level: "info",
    note: "auto order is heygen → elevenlabs → kokoro; Gemini is NOT in it, and Kokoro has no Arabic. Arabic must set provider: gemini explicitly. Free-tier ElevenLabs keys reject library voices (HTTP 402).",
  };
});

check("brand fonts on disk", () => {
  // design.md names a display face, a body face with licensed substitutes, and
  // the Arabic pair. A family is "served" if it or a substitute has a file.
  const groups = [
    { need: ["EBGaramond", "CormorantGaramond", "PlayfairDisplay"], label: "display (EB Garamond)" },
    { need: ["Figtree", "Inter", "PlusJakartaSans", "Manrope"], label: "body (Figtree → Inter)" },
    { need: ["JetBrainsMono"], label: "mono (JetBrains Mono)" },
    { need: ["NotoKufiArabic"], label: "arabic display (Noto Kufi Arabic)" },
    { need: ["NotoNaskhArabic"], label: "arabic body (Noto Naskh Arabic)" },
  ];
  const dirs = [join(ROOT, "studio", "assets", "fonts"), join(ROOT, "assets", "fonts")];
  if (existsSync(VIDEOS)) for (const p of readdirSync(VIDEOS)) dirs.push(join(VIDEOS, p, "assets", "fonts"));
  const have = new Set();
  for (const d of dirs) {
    if (!existsSync(d)) continue;
    for (const f of readdirSync(d)) if (/\.(woff2?|ttf|otf)$/i.test(f)) have.add(f.toLowerCase());
  }
  const served = [];
  const missing = [];
  for (const g of groups) {
    const hit = g.need.find((n) => [...have].some((f) => f.startsWith(n.toLowerCase())));
    if (hit) served.push(`${g.label}${have.size && hit === g.need[0] ? "" : ` via ${hit}`}`);
    else missing.push(g.label);
  }
  if (!missing.length) return { level: "ok", note: served.join(" · ") };
  return {
    level: "warn",
    note: `no file on disk for: ${missing.join(", ")} — naming an unsourced family in a @font-face renders the fallback and fails lint`,
    fix: `drop the .woff2/.ttf into studio/assets/fonts (or a project's assets/fonts); scaffold copies from there`,
  };
});

check("design spec + marketing context", () => {
  const d = existsSync(DESIGN_SPEC);
  const p = existsSync(join(ROOT, ".agents", "product-marketing.md"));
  return d && p ? { level: "ok", note: ".agents/design.md + .agents/product-marketing.md" } : { level: "block", note: "stage 1 cannot run without product-marketing.md; every project needs design.md" };
});

check("skill copies in sync", () => {
  const existing = SKILL_ROOTS.filter((r) => existsSync(r));
  if (existing.length < 2) return { level: "ok", note: `${existing.length} skill root(s)` };
  const compare = ["faceless-explainer/SKILL.md", "hyperframes/SKILL.md", "media-use/SKILL.md", "media-use/audio/scripts/audio.mjs", "media-use/audio/scripts/lib/tts.mjs"];
  const drift = [];
  for (const rel of compare) {
    const hashes = existing.map((root) => {
      const p = join(root, rel);
      if (!existsSync(p)) return "missing";
      return `${statSync(p).size}:${simpleHash(readFileSync(p, "utf8"))}`;
    });
    if (new Set(hashes).size > 1) drift.push(`${rel}: ${hashes.join(" vs ")}`);
  }
  return drift.length
    ? { level: "warn", note: `drift between skill copies:\n      ${drift.join("\n      ")} — a hand-patch to one copy is lost on the next skills update`, fix: "re-apply the patch to every copy, or move the fix into studio/" }
    : { level: "ok", note: `${existing.length} copies identical for the compared files` };
});

check("stray state worth a look", () => {
  const notes = [];
  if (existsSync(VIDEOS)) {
    for (const p of readdirSync(VIDEOS)) {
      const dir = join(VIDEOS, p);
      if (!statSync(dir).isDirectory() || p.startsWith(".")) continue;
      const mp4s = existsSync(join(dir, "renders")) ? readdirSync(join(dir, "renders")) : [];
      if (mp4s.filter((f) => f.endsWith(".mp4")).length > 1) notes.push(`${p}: ${mp4s.filter((f) => f.endsWith(".mp4")).length} mp4s in renders/ — one deliverable, archive the rest`);
      if (existsSync(join(dir, "hyperframes.json")) && !existsSync(join(dir, "BRIEF.md"))) notes.push(`${p}: no BRIEF.md — an agent will ask the brief questions again`);
    }
  }
  return notes.length ? { level: "info", note: notes.join("; ") } : { level: "ok", note: "none" };
});

check("blog build", () => {
  const cfg = join(ROOT, "blog", "astro.config.mjs");
  if (!existsSync(cfg)) return { level: "info", note: "no blog/" };
  const t = readFileSync(cfg, "utf8");
  const site = (t.match(/BLOG_SITE_URL\s*\|\|\s*"([^"]+)"/) || [])[1] || "unknown";
  const posts = ["en", "ar"].map((l) => {
    const d = join(ROOT, "blog", "src", "content", "posts", l);
    return existsSync(d) ? readdirSync(d).filter((f) => f.endsWith(".md")).length : 0;
  });
  return { level: site.includes("example.com") ? "warn" : "ok", note: `site URL ${site} · posts en/ar: ${posts[0]}/${posts[1]} — canonicals, sitemap and hreflang are wrong until site: is the real URL` };
});

function simpleHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

export function run({ json = false } = {}) {
  const results = [];
  for (const c of CHECKS) {
    let r;
    try {
      r = c.fn();
    } catch (e) {
      r = { level: "block", note: `check crashed: ${e.message}` };
    }
    results.push({ name: c.name, ...r });
  }
  const counts = { ok: 0, warn: 0, block: 0, info: 0 };
  for (const r of results) counts[r.level] = (counts[r.level] || 0) + 1;
  const summary = { ok: counts.block === 0, counts, results };
  if (json) console.log(JSON.stringify(summary, null, 2));
  else {
    const glyph = { ok: "✓", warn: "!", block: "✗", info: "·" };
    for (const r of results) console.log(`${glyph[r.level]} ${r.name}\n    ${String(r.note).split(/\r?\n/).join("\n    ")}`);
    console.log(`\n${counts.block} blocking, ${counts.warn} warnings`);
  }
  return summary;
}

if (isMain(import.meta.url)) {
  const argv = process.argv.slice(2);
  const res = run({ json: argv.includes("--json") });
  process.exit(res.ok ? 0 : 1);
}
