// Workspace ledger: every project, its real state on disk, and whether the last
// render still matches its sources.
//
//   node studio/tools/status.mjs [--json] [--sync]
//
// `--sync` writes the observed state back into studio/registry.json (campaign,
// stage, artifacts, checks) and preserves anything a human typed there.

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { REGISTRY, VIDEOS, isMain } from "./lib.mjs";
import { frontmatter, readIf, renders, sourceStamp, frameCount, totalDuration } from "./projection.mjs";

const STAGES = ["brief", "storyboard", "audio", "frames", "assembled", "verified", "rendered", "delivered"];

export function loadRegistry() {
  if (!existsSync(REGISTRY)) return { version: 1, projects: {} };
  try {
    return JSON.parse(readFileSync(REGISTRY, "utf8"));
  } catch {
    return { version: 1, projects: {} };
  }
}

export function saveRegistry(reg) {
  mkdirSync(join(REGISTRY, ".."), { recursive: true });
  writeFileSync(REGISTRY, JSON.stringify(reg, null, 2) + "\n");
}

export function observe(projectDir) {
  const name = basename(projectDir);
  const brief = frontmatter(readIf(join(projectDir, "BRIEF.md")) || "");
  const storyboard = readIf(join(projectDir, "STORYBOARD.md"));
  const audioMeta = existsSync(join(projectDir, "audio_meta.json"));
  const frames = frameCount(projectDir);
  const assembled = !!readIf(join(projectDir, "index.html")) && /data-composition-src|<audio/.test(readIf(join(projectDir, "index.html")));
  const caps = existsSync(join(projectDir, "compositions", "captions.html"));
  const mp4s = renders(projectDir);
  const words = (() => {
    try {
      const m = JSON.parse(readFileSync(join(projectDir, "audio_meta.json"), "utf8"));
      const v = m.voices || [];
      return { lines: v.length, withWords: v.filter((x) => Array.isArray(x.words) && x.words.length).length };
    } catch {
      return null;
    }
  })();
  let stage = "brief";
  if (storyboard) stage = "storyboard";
  if (audioMeta) stage = "audio";
  if (frames) stage = "frames";
  if (assembled) stage = "assembled";
  if (mp4s.length) stage = "rendered";
  const status = {
    name,
    path: projectDir.replace(/\\/g, "/"),
    workflow: brief.workflow || null,
    campaign: brief.series || null,
    language: brief.language || null,
    aspect: brief.aspect || null,
    message: brief.message || null,
    frames,
    runtime_s: totalDuration(projectDir),
    captions: caps,
    voice_lines: words ? words.lines : 0,
    voiced_with_timings: words ? words.withWords : 0,
    stage,
    renders: mp4s,
    stamp: sourceStamp(projectDir),
  };
  return status;
}

export function run({ sync = false, json = false } = {}) {
  const reg = loadRegistry();
  const dirs = existsSync(VIDEOS)
    ? readDir(VIDEOS).map((d) => join(VIDEOS, d)).filter((d) => existsSync(join(d, "meta.json")) || existsSync(join(d, "hyperframes.json")))
    : [];
  const rows = dirs.map(observe);
  const stale = [];
  for (const r of rows) {
    const prev = reg.projects[r.name];
    if (prev?.render?.stamp && prev.render.stamp !== r.stamp) {
      stale.push({ project: r.name, rendered_at: prev.render.at, note: "sources changed after that render" });
    }
  }
  if (sync) {
    reg.updatedAt = new Date().toISOString();
    for (const r of rows) {
      reg.projects[r.name] = {
        ...(reg.projects[r.name] || {}),
        ...r,
        stage: r.stage,
        lastObservedAt: reg.updatedAt,
      };
    }
    saveRegistry(reg);
  }
  const summary = { projects: rows, stale, registry: REGISTRY.replace(/\\/g, "/"), synced: sync };
  if (json) console.log(JSON.stringify(summary, null, 2));
  else print(summary);
  return summary;
}

function readDir(dir) {
  try {
    return readdirSync(dir).filter((n) => !n.startsWith(".") && statSync(join(dir, n)).isDirectory());
  } catch {
    return [];
  }
}

function print(s) {
  const pad = (x, n) => String(x ?? "").slice(0, n).padEnd(n);
  console.log(`${s.projects.length} projects`);
  console.log(`${pad("project", 26)}${pad("stage", 12)}${pad("frames", 7)}${pad("runtime", 9)}${pad("captions", 9)}${pad("voiced", 9)}renders`);
  for (const r of s.projects) {
    console.log(
      `${pad(r.name, 26)}${pad(r.stage, 12)}${pad(r.frames, 7)}${pad(r.runtime_s ? `${r.runtime_s}s` : "-", 9)}${pad(r.captions ? "yes" : "no", 9)}${pad(`${r.voiced_with_timings}/${r.voice_lines}`, 9)}${r.renders.length}`,
    );
  }
  for (const st of s.stale) console.log(`  ! ${st.project}: ${st.note} (${st.rendered_at})`);
  if (s.synced) console.log(`  registry updated: ${s.registry}`);
}

if (isMain(import.meta.url)) {
  const argv = process.argv.slice(2);
  run({ sync: argv.includes("--sync"), json: argv.includes("--json") });
}
