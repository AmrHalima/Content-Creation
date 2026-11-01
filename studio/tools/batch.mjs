// Batch runner: one gate sequence across many projects, with resume-friendly
// per-step reporting.
//
//   studio verify --all
//   studio cues assemble check --campaign osi-layers
//   studio render --projects a,b --quality draft --yes
//
// Steps: verify · cues · assemble · check · render. Anything that costs credits
// (render) needs --yes plus an explicit --quality, and is verified after the
// fact with ffprobe — a green exit code is not evidence the MP4 is good.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { VIDEOS, hfArgs, isMain, runNpx } from "./lib.mjs";
import { frontmatter, sourceStamp } from "./projection.mjs";
import { loadRegistry, observe, saveRegistry } from "./status.mjs";
import { run as runCues } from "./cues.mjs";
import { run as runAssemble } from "./assemble.mjs";
import { run as runVerify } from "./verify.mjs";

const STEPS = ["verify", "cues", "assemble", "check", "render"];

export function projects({ all = false, only = [], campaign } = {}) {
  if (!existsSync(VIDEOS)) return [];
  const dirs = readdirSync(VIDEOS)
    .filter((n) => !n.startsWith("."))
    .map((n) => join(VIDEOS, n))
    .filter((d) => statSync(d).isDirectory() && (existsSync(join(d, "meta.json")) || existsSync(join(d, "hyperframes.json"))));
  if (only.length) return dirs.filter((d) => only.includes(basename(d)));
  if (campaign) {
    return dirs.filter((d) => {
      const brief = frontmatter(readIfExists(join(d, "BRIEF.md")));
      return brief.series && brief.series === campaign;
    });
  }
  if (all) return dirs;
  return [];
}

export function run({ dir, steps, quality, yes = false, json = false }) {
  const project = resolve(dir);
  const name = basename(project);
  const out = { project: name, steps: {}, ok: true };
  for (const step of steps) {
    const t0 = Date.now();
    const r = stepOne(project, step, { quality, yes });
    out.steps[step] = { ...r, seconds: Math.round((Date.now() - t0) / 1000) };
    if (!r.ok) {
      out.ok = false;
      out.failedAt = step;
      break;
    }
  }
  if (!json && !process.argv.includes("--json")) {
    const line = Object.entries(out.steps).map(([k, v]) => `${k}:${v.ok ? "ok" : "FAIL"}${v.seconds ? `(${v.seconds}s)` : ""}`).join("  ");
    console.log(`${out.ok ? "✓" : "✗"} ${name.padEnd(26)} ${line}`);
    for (const [k, v] of Object.entries(out.steps)) {
      if (v.ok) continue;
      console.log(`    ${k}: ${v.reason || "failed"}`);
      for (const l of v.output || []) console.log(`      ${l}`);
    }
  }
  return out;
}

function stepOne(project, step, { quality, yes }) {
  switch (step) {
    case "verify": {
      const r = runVerify({ dir: project, json: false, quiet: true });
      return {
        ok: r.ok,
        reason: r.ok ? null : `${r.counts.HIGH} high-severity trap findings`,
        output: r.findings.filter((f) => f.level === "HIGH").slice(0, 8).map((f) => `${f.rule} ${f.file}: ${f.detail}`),
      };
    }
    case "cues": {
      if (!existsSync(join(project, "audio_meta.json"))) return { ok: true, skipped: "no audio_meta.json (silent film)" };
      const r = runCues({ dir: project, json: false, quiet: true });
      return { ok: r.ok, reason: r.reason ?? null, mode: r.mode, words: r.words, output: r.reason ? [r.reason] : [] };
    }
    case "assemble": {
      if (!existsSync(join(project, "STORYBOARD.md"))) return { ok: false, reason: "no STORYBOARD.md", output: [] };
      const r = runAssemble({ dir: project, captions: existsSync(join(project, "audio_meta.json")), json: false, quiet: true });
      return { ok: r.ok, reason: r.reason ?? null, output: r.output || [] };
    }
    case "check":
      return cli(project, ["check"]);
    case "render": {
      if (!yes) return { ok: false, reason: "render needs --yes (spends credits)", output: [] };
      const stampBefore = sourceStamp(project);
      const r = cli(project, ["render", "--quality", quality || "draft"]);
      if (!r.ok) return r;
      return verifyOutput(project, stampBefore, quality || "draft");
    }
    default:
      return { ok: false, reason: `unknown step ${step}`, output: [] };
  }
}

function cli(project, args) {
  const r = runNpx(hfArgs(project, ...args), {
    cwd: project,
    encoding: "utf8",
    timeout: args[0] === "render" ? 3_600_000 : 900_000,
    maxBuffer: 64 * 1024 * 1024,
  });
  const out = `${r.stdout || ""}${r.stderr || ""}`.split(/\r?\n/);
  return { ok: r.status === 0, reason: r.status === 0 ? null : `hyperframes ${args[0]} exited ${r.status}${r.error ? ` (${r.error.code || r.error.message})` : ""}`, output: out.slice(-12) };
}

// A render is only done when the file proves it: an audio stream that actually
// carries signal, and a duration matching the timeline it was rendered from.
function verifyOutput(project, stampBefore, quality) {
  const dir = join(project, "renders");
  if (!existsSync(dir)) return { ok: false, reason: "renders/ missing after a successful render", output: [] };
  const latest = readdirSync(dir)
    .filter((f) => f.endsWith(".mp4"))
    .map((f) => ({ f, mtime: statSync(join(dir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)[0];
  if (!latest) return { ok: false, reason: "no mp4 written", output: [] };
  const path = join(dir, latest.f);
  const probe = spawnSync("ffprobe", ["-v", "error", "-show_entries", "stream=codec_type", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1", path], { encoding: "utf8" });
  const loud = spawnSync("ffmpeg", ["-hide_banner", "-i", path, "-af", "volumedetect", "-f", "null", "-"], { encoding: "utf8" });
  const dur = Number((probe.stdout.match(/duration=([\d.]+)/) || [])[1] || 0);
  const hasAudio = /codec_type=audio/.test(probe.stdout);
  const mean = Number((loud.stderr.match(/mean_volume:\s*([-\d.]+)\s*dB/) || [])[1] ?? -91);
  const expected = Number((readIfExists(join(project, "index.html")).match(/id="root"[\s\S]{0,400}?data-duration="([\d.]+)"/) || [])[1] || 0);
  const problems = [];
  if (!hasAudio) problems.push("no audio stream — the render is silent");
  if (mean < -60) problems.push(`mean volume ${mean} dB — nothing audible in the mix`);
  if (expected && Math.abs(expected - dur) > 1.5) problems.push(`mp4 ${dur.toFixed(2)}s vs timeline ${expected}s — sources changed under the render`);
  const ok = problems.length === 0;
  if (ok) {
    const reg = loadRegistry();
    reg.projects[basename(project)] = {
      ...(reg.projects[basename(project)] || {}),
      ...observe(project),
      render: { at: new Date().toISOString(), file: `renders/${latest.f}`, bytes: statSync(path).size, quality, stamp: stampBefore, duration_s: dur, has_audio: hasAudio, mean_volume_db: mean },
    };
    saveRegistry(reg);
  }
  return { ok, reason: problems.join("; ") || null, file: `renders/${latest.f}`, output: [`renders/${latest.f}  ${dur.toFixed(2)}s  audio=${hasAudio}  mean=${mean}dB`] };
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
  const steps = argv.filter((a) => STEPS.includes(a));
  if (!steps.length) {
    console.error(`no step given — steps are ${STEPS.join(" · ")}`);
    process.exit(2);
  }
  const flag = (name) => {
    const i = argv.indexOf(name);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const only = (flag("--projects") || "").split(",").map((s) => s.trim()).filter(Boolean);
  const dirs = projects({ all: argv.includes("--all"), only, campaign: flag("--campaign") });
  if (!dirs.length) {
    console.error("no projects matched (use --all, --projects a,b, or --campaign <series>)");
    process.exit(2);
  }
  const results = dirs.map((d) => run({ dir: d, steps, quality: flag("--quality"), yes: argv.includes("--yes"), json: argv.includes("--json") }));
  const failed = results.filter((r) => !r.ok);
  if (argv.includes("--json")) console.log(JSON.stringify({ results, failed: failed.map((f) => `${f.project}@${f.failedAt}`) }, null, 2));
  else console.log(`\n${results.length - failed.length}/${results.length} ok${failed.length ? ` — failed: ${failed.map((f) => `${f.project}@${f.failedAt}`).join(", ")}` : ""}`);
  process.exit(failed.length ? 1 : 0);
}
