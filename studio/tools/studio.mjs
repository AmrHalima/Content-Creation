// studio — the workspace's production layer.
//
// Every command here is deterministic, offline-first and cheap. It exists so a
// frame-building agent never re-solves plumbing that this workspace has already
// solved three times over, and so a batch of films can be gated in one pass
// instead of one conversation per project.
//
//   studio doctor                      what actually works on this machine
//   studio status [--sync]             every project, its real state, stale renders
//   studio verify <dir|--all>          the traps `check` cannot see (no credits)
//   studio cues <dir|--all>            measured word timings into both audio metas
//   studio assemble <dir>              index.html + the post-assembly patches
//   studio voice <dir>                 TTS with the provider pinned, then sync durations
//   studio check <dir|--all>           hyperframes check (honours each project's pin)
//   studio render <dir> --quality Q --yes   render + prove the MP4 has audio and length
//   studio batch <steps…> --all|--campaign x [--parallel 2]
//
// Exit codes: 0 clean · 1 a gate failed · 2 bad usage. Nothing here spends
// credits unless you pass render with --yes.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { DESIGN_SPEC, ROOT, VOICE_DEFAULTS, isMain, skillScript } from "./lib.mjs";
import { frontmatter } from "./projection.mjs";
import * as doctor from "./doctor.mjs";
import * as status from "./status.mjs";
import * as cues from "./cues.mjs";
import * as assemble from "./assemble.mjs";
import * as verify from "./verify.mjs";
import * as batch from "./batch.mjs";

const HELP = `studio — content production layer (workspace: ${ROOT})

  doctor                        environment truth: ASR, TTS providers, fonts, drift
  status [--sync]               all projects, real disk state, stale-render warning
  verify   <dir|--all>          the traps check misses (static, free)
  cues     <dir|--all>          word timings (faster-whisper → deterministic fallback)
  assemble <dir> [--captions]   run the skill assembler + post-assembly patches
  voice    <dir> [--provider p] [--voice v] TTS with the provider pinned, then sync durations
  check    <dir|--all>          hyperframes check on the project's pinned version
  render   <dir> --quality draft|looks|delivery --yes
  batch    <steps…> --all | --campaign <series> | --projects a,b
`;

function targets(argv, fn) {
  const dirs = batch.projects({ all: argv.includes("--all"), only: (flag(argv, "--projects") || "").split(",").map((s) => s.trim()).filter(Boolean), campaign: flag(argv, "--campaign") });
  if (!dirs.length) {
    const dir = argv.find((a) => !a.startsWith("--"));
    if (!dir) {
      console.error(HELP);
      process.exit(2);
    }
    return [dir];
  }
  return dirs;
}

function flag(argv, name) {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
}

function safeJson(s) {
  try {
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}

function cmdDoctor(argv) {
  return doctor.run({ json: argv.includes("--json") }).ok;
}

function cmdStatus(argv) {
  status.run({ sync: argv.includes("--sync"), json: argv.includes("--json") });
  return true;
}

function cmdVerify(argv) {
  const dirs = targets(argv);
  let ok = true;
  for (const d of dirs) ok = verify.run({ dir: d, json: argv.includes("--json") }).ok && ok;
  return ok;
}

function cmdCues(argv) {
  const dirs = targets(argv);
  let ok = true;
  for (const d of dirs) ok = cues.run({ dir: d, model: flag(argv, "--model") || "small", json: argv.includes("--json") }).ok && ok;
  return ok;
}

function cmdAssemble(argv) {
  const dirs = targets(argv);
  let ok = true;
  for (const d of dirs) ok = assemble.run({ dir: d, captions: argv.includes("--captions"), json: argv.includes("--json") }).ok && ok;
  return ok;
}

// TTS with the provider pinned. The engine's auto cascade cannot reach Gemini
// at all, and Kokoro has no Arabic, so the choice comes from BRIEF.md frontmatter
// (`voice:` block / `language:`) with .agents/design.md as the house default.
function cmdVoice(argv) {
  const dirs = targets(argv);
  const dryRun = argv.includes("--dry");
  let ok = true;
  for (const dir of dirs) {
    const brief = frontmatter(readIf(join(dir, "BRIEF.md")));
    const house = frontmatter(readIf(DESIGN_SPEC) || "");
    const lang = (brief.language || "en").split("-")[0];
    const fromHouse = safeJson(house[`voices.${lang}`]) || {};
    const fallback = VOICE_DEFAULTS[lang] || VOICE_DEFAULTS.en;
    const provider = flag(argv, "--provider") || brief.tts_provider || fromHouse.provider || fallback.provider;
    const voice = flag(argv, "--voice") || brief.voice || fromHouse.voice || fallback.voice;
    const speed = flag(argv, "--speed") || fromHouse.speed || (lang === "en" ? String(VOICE_DEFAULTS.en.speed) : "1.0");
    const env = {
      ...process.env,
      HF_MEDIA_ENGINE: process.env.HF_MEDIA_ENGINE || join(ROOT, "studio", "tools", "engine.mjs"),
      STUDIO_PROVIDER: provider,
      STUDIO_LANG: lang,
      STUDIO_VOICE: voice,
      STUDIO_SPEED: speed,
    };
    const steps = [
      [skillScript("faceless-explainer", "audio.mjs"), ["--script", "SCRIPT.md", "--storyboard", "STORYBOARD.md", "--hyperframes", ".", "--out", "audio_meta.json", "--speed", speed]],
      [skillScript("faceless-explainer", "audio.mjs"), ["sync-durations", "--audio-meta", "audio_meta.json", "--storyboard", "STORYBOARD.md"]],
    ];
    console.log(`▶ ${basename(dir)} — provider=${provider} voice=${voice} lang=${lang} speed=${speed}`);
    for (const [script, args] of steps) {
      if (dryRun) {
        console.log(`  HF_MEDIA_ENGINE=${env.HF_MEDIA_ENGINE} STUDIO_PROVIDER=${provider} STUDIO_VOICE=${voice} node ${script} ${args.join(" ")}`);
        continue;
      }
      const r = spawnSync(process.execPath, [script, ...args], { cwd: dir, env, encoding: "utf8", timeout: 3_600_000, maxBuffer: 64 * 1024 * 1024 });
      const out = `${r.stdout || ""}${r.stderr || ""}`.trim();
      console.log(out.split(/\r?\n/).slice(-6).join("\n"));
      if (r.status !== 0) {
        console.error(`✗ ${basename(dir)}: audio step failed (exit ${r.status}) — do not fall through to another provider silently`);
        ok = false;
        break;
      }
    }
    if (!dryRun && ok) {
      const c = cues.run({ dir, json: !!argv.includes("--json") });
      ok = c.ok && ok;
    }
  }
  return ok;
}

function cmdCheck(argv) {
  const dirs = targets(argv);
  let ok = true;
  for (const d of dirs) ok = batch.run({ dir: d, steps: ["check"], json: argv.includes("--json") }).ok && ok;
  return ok;
}

function cmdRender(argv) {
  const dirs = targets(argv);
  const quality = flag(argv, "--quality");
  if (!quality) {
    console.error("render needs --quality draft|looks|delivery");
    return false;
  }
  if (!argv.includes("--yes")) {
    console.error("render spends credits — pass --yes to confirm");
    return false;
  }
  let ok = true;
  for (const d of dirs) {
    const v = verify.run({ dir: d, json: true });
    if (!v.ok) {
      console.error(`✗ ${basename(d)}: ${v.counts.HIGH} trap findings — fix before rendering`);
      ok = false;
      continue;
    }
    ok = batch.run({ dir: d, steps: ["render"], quality, yes: true, json: argv.includes("--json") }).ok && ok;
  }
  return ok;
}

function cmdBatch(argv) {
  const steps = argv.filter((a) => ["verify", "cues", "assemble", "check", "render"].includes(a));
  if (!steps.length) {
    console.error("no step given — verify · cues · assemble · check · render");
    return false;
  }
  const dirs = targets(argv);
  const parallel = Number(flag(argv, "--parallel") || 1);
  const results = [];
  const runOne = (d) => batch.run({ dir: d, steps, quality: flag(argv, "--quality"), yes: argv.includes("--yes"), json: argv.includes("--json") });
  if (parallel > 1 && dirs.length > 1) {
    // bounded waves: a heavy render alongside an ASR pass thrashes a CPU-only box
    for (let i = 0; i < dirs.length; i += parallel) {
      results.push(...dirs.slice(i, i + parallel).map(runOne));
    }
  } else {
    results.push(...dirs.map(runOne));
  }
  const failed = results.filter((r) => !r.ok);
  if (!argv.includes("--json")) console.log(`\n${results.length - failed.length}/${results.length} ok${failed.length ? ` — failed: ${failed.map((f) => `${f.project}@${f.failedAt}`).join(", ")}` : ""}`);
  return failed.length === 0;
}

function readIf(p) {
  try {
    return readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

const COMMANDS = {
  doctor: cmdDoctor,
  status: cmdStatus,
  verify: cmdVerify,
  cues: cmdCues,
  assemble: cmdAssemble,
  voice: cmdVoice,
  check: cmdCheck,
  render: cmdRender,
  batch: cmdBatch,
};

if (isMain(import.meta.url)) {
  const [cmd, ...argv] = process.argv.slice(2);
  const known = cmd && COMMANDS[cmd];
  if (!cmd || !known) {
    console.log(HELP);
    if (cmd && !["--help", "-h"].includes(cmd)) console.error(`unknown command: ${cmd}`);
    process.exit(cmd && !known && !["--help", "-h"].includes(cmd) ? 2 : 0);
  }
  process.exit(COMMANDS[cmd](argv) ? 0 : 1);
}

export { COMMANDS };
