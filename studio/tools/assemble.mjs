// Assemble index.html through the skill's deterministic assembler, then apply
// the two post-assembly fixes that every project here has had to make by hand.
//
//   node studio/tools/assemble.mjs <projectDir> [--captions] [--dry]
//
// Post-fixes (see studio/known-traps.md #4 and #9):
//   * `#el-captions` gets `data-track-kind="captions"` — the assembler does not
//     emit it, and without it Studio/the runtime cannot tell the caption lane
//     from a scene lane. Hand-added in all three OSI parts and in sdlc.
//   * every `<audio>` in index.html must carry an `id` or lint reports
//     `media_missing_id` and the render comes out silent.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { skillScript, isMain } from "./lib.mjs";

export function postFixes(project) {
  const path = join(project, "index.html");
  if (!existsSync(path)) return { ok: false, reason: "no index.html" };
  let html = readFileSync(path, "utf8");
  const applied = [];

  const before = html;
  if (/id="el-captions"/.test(html) && !/data-track-kind="captions"/.test(html)) {
    html = html.replace(/(<div[^>]*id="el-captions")/, '$1\n        data-track-kind="captions"');
    if (html !== before) applied.push("captions lane marked");
  }

  let audioFixed = 0;
  html = html.replace(/<audio(?![^>]*\bid=)([^>]*)>/g, (full, attrs) => {
    const src = (attrs.match(/src="([^"]+)"/) || [])[1] || "audio";
    const id = `el-audio-${src.replace(/^.*\/|[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
    audioFixed += 1;
    return `<audio id="${id}"${attrs}>`;
  });
  if (audioFixed) applied.push(`${audioFixed} audio element(s) given ids`);

  if (applied.length) writeFileSync(path, html);
  return { ok: true, applied };
}

export function run({ dir, captions = false, dry = false, json = false, quiet = false }) {
  const project = resolve(dir);
  const storyboard = join(project, "STORYBOARD.md");
  if (!existsSync(storyboard)) return { ok: false, reason: "STORYBOARD.md missing" };

  const steps = [];
  if (captions) {
    const cap = skillScript("faceless-explainer", "captions.mjs");
    steps.push([cap, ["build", "--storyboard", storyboard, "--audio-meta", join(project, "audio_meta.json"), "--hyperframes", ".", "--out", join(project, "caption_groups.json")]]);
  }
  const asm = skillScript("faceless-explainer", "assemble-index.mjs");
  steps.push([asm, ["--storyboard", storyboard, "--hyperframes", "."]]);

  for (const [cmd, args] of steps) {
    if (dry) {
      console.log(`node ${cmd} ${args.join(" ")}`);
      continue;
    }
    const r = spawnSync(process.execPath, [cmd, ...args], { cwd: project, encoding: "utf8" });
    const out = `${r.stdout || ""}${r.stderr || ""}`.trim();
    if (r.status !== 0) {
      console.error(out || "(no output)");
      return { ok: false, reason: `${basename(cmd)} exited ${r.status}`, output: out.split(/\r?\n/).slice(-8) };
    }
    if (!json && !quiet) console.log(out.split(/\r?\n/).slice(-6).join("\n"));
  }
  if (dry) return { ok: true, dry: true };

  const fix = postFixes(project);
  if (!json && !quiet) console.log(fix.applied?.length ? `✓ post-fix: ${fix.applied.join("; ")}` : "✓ post-fix: nothing to patch");
  return { ok: true, postFix: fix };
}

if (isMain(import.meta.url)) {
  const argv = process.argv.slice(2);
  const dir = argv.find((a) => !a.startsWith("--")) || ".";
  const res = run({ dir, captions: argv.includes("--captions"), dry: argv.includes("--dry"), json: argv.includes("--json") });
  process.exit(res.ok ? 0 : 1);
}
