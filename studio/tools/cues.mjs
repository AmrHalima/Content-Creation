// Word-level timings for a project's narration, written into BOTH audio metas.
//
// Why this exists: `hyperframes transcribe` reports whisper_unavailable on this
// machine, so every TTS pass has been landing `words: []`, and captions.mjs
// skips a film it has no words for. Previous runs solved this three separate
// times with three different per-project scripts (cue-times.mjs, merge-cues.mjs,
// tools/build-word-timings.mjs). This is the one copy.
//
// Order matters: `audio.mjs fetch-sfx` rebuilds audio_meta.json from the neutral
// audio_engine_meta.json, so a words pass that touches only the front file is
// silently undone. Both files are always written.
//
//   node studio/tools/cues.mjs <projectDir> [--model small] [--force-estimate]
//
// Sources, in preference order:
//   1. local faster-whisper (studio/tools/asr.py) — real measured timings
//   2. char-proportional estimate + fixed punctuation pauses — deterministic,
//      identical on every run, the last-resort clock used by every shipped film
//      in this workspace so far.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { TOOLS, isMain } from "./lib.mjs";
import { frontmatter, readIf, scriptLines } from "./projection.mjs";

const SENT_PAUSE = 0.34;
const CLAUS_PAUSE = 0.14;
const r3 = (x) => Number(x.toFixed(3));

// Arabic keeps diacritics/alef variants, so normalize with \p{L}, not [A-Za-z].
const norm = (t) =>
  (t || "")
    .toLowerCase()
    .replace(/[‘’`]/g, "'")
    .replace(/[^\p{L}\p{N}'-]+/gu, "")
    .replace(/\u064B|\u064C|\u064D|\u064E|\u064F|\u0650|\u0651|\u0652/g, "")
    .replace(/[\u0622\u0623\u0625\u0627]/g, "\u0627")
    .replace(/\u0624/g, "\u0648")
    .replace(/\u0626/g, "\u064A")
    .replace(/\u0629/g, "\u0647");

export function run({ dir, model = "small", forceEstimate = false, json = false, quiet = false }) {
  const project = resolve(dir);
  const metaPath = join(project, "audio_meta.json");
  const neutralPath = join(project, "audio_engine_meta.json");
  if (!existsSync(metaPath)) return fail(project, "no audio_meta.json — run audio first (or the film is silent)");

  const meta = JSON.parse(readFileSync(metaPath, "utf8"));
  const neutral = existsSync(neutralPath) ? JSON.parse(readFileSync(neutralPath, "utf8")) : null;
  const brief = frontmatter(readIf(join(project, "BRIEF.md")) || "");
  const lang = (brief.language || "en").split("-")[0];
  const script = scriptLines(readIf(join(project, "SCRIPT.md")));
  if (!script.length) return fail(project, "SCRIPT.md has no per-frame narration — nothing to time");

  const voices = meta.voices || [];
  if (!voices.length) return fail(project, "audio_meta.json has no voice lines");

  const lines = voices.map((v, i) => {
    const frame = v.frame ?? Number(v.id);
    const s = script.find((l) => l.frame === frame) ?? script[i];
    const rel = v.path || `assets/voice/${String(frame).padStart(2, "0")}.wav`;
    return {
      frame,
      id: v.id ?? String(frame).padStart(2, "0"),
      rel,
      abs: join(project, rel),
      duration_s: v.duration_s,
      text: s ? s.text : "",
    };
  });

  const missing = lines.filter((l) => !existsSync(l.abs)).map((l) => l.rel);
  if (missing.length) return fail(project, `voice files missing: ${missing.join(", ")}`);

  const asr = forceEstimate ? { ok: false, reason: "requested estimate" } : probeAsr(model);
  const results = [];
  for (const l of lines) {
    const canonical = tokens(l.text);
    if (!canonical.length) {
      results.push({ frame: l.frame, source: "none", words: 0 });
      continue;
    }
    if (asr.ok) {
      const t0 = Date.now();
      const r = asrWords(l.abs, lang, model);
      if (r.ok) {
        const words = align(canonical, r.words, l.duration_s);
        results.push({
          frame: l.frame,
          source: "asr",
          words: words.length,
          matched: words.filter((w) => w.m === 2).length,
          drift_s: r3((Date.now() - t0) / 1000),
        });
        l.words = words;
        continue;
      }
      asr.ok = false;
      asr.reason = r.error;
    }
    l.words = estimate(canonical, l.duration_s);
    results.push({ frame: l.frame, source: "estimate", words: l.words.length });
  }

  const withWords = lines.filter((l) => l.words);
  if (!withWords.length) return fail(project, "no words produced for any line");

  // write both metas; captions.mjs reads the frame-keyed one, later audio passes
  // rebuild it from the neutral one.
  for (const v of voices) {
    const frame = v.frame ?? Number(v.id);
    const l = lines.find((x) => x.frame === frame);
    if (l?.words) v.words = l.words.map(({ m, ...w }) => w);
  }
  writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n");

  let neutralPatched = 0;
  if (neutral?.voices) {
    for (const v of neutral.voices) {
      const frame = Number(v.id);
      const l = lines.find((x) => x.frame === frame || x.id === v.id);
      if (l?.words) {
        v.words = l.words.map(({ m, ...w }) => w);
        neutralPatched += 1;
      }
    }
    writeFileSync(neutralPath, JSON.stringify(neutral, null, 2) + "\n");
  }

  writeFileSync(
    join(project, "cue_times.json"),
    JSON.stringify(
      {
        generatedBy: "studio cues",
        model: asr.ok ? `faster-whisper:${model}` : `estimate (${asr.reason})`,
        language: lang,
        frames: lines
          .filter((l) => l.words)
          .map((l) => ({ frame: l.frame, duration_s: l.duration_s, words: l.words.map(({ m, ...w }) => w) })),
      },
      null,
      2,
    ),
  );

  const total = withWords.reduce((a, l) => a + l.words.length, 0);
  const sources = new Set(results.map((r) => r.source));
  const summary = {
    project: basename(project),
    ok: true,
    lines: withWords.length,
    words: total,
    mode: sources.has("asr") ? (sources.size > 1 ? "asr+estimate" : "asr") : "estimate",
    neutralPatched,
    results,
    note: asr.ok ? null : `ASR unavailable (${asr.reason}) — deterministic estimate used`,
  };
  if (!json && !quiet) print(summary, lines);
  return summary;
}

function probeAsr(model) {
  const py = process.env.STUDIO_PYTHON || "python";
  const r = spawnSync(py, ["-c", "import faster_whisper, numpy; print('ok')"], { encoding: "utf8", timeout: 90000 });
  if (r.status !== 0) return { ok: false, reason: "faster-whisper not importable" };
  // The cache must already hold the model: asr.py runs local_files_only so a
  // cold cache cannot stall a batch on this network.
  const cache = process.env.HF_HOME || join(process.env.USERPROFILE || process.env.HOME || "", ".cache", "huggingface", "hub");
  const hit = readdirSync(cache, { withFileTypes: true })
    .filter((d) => d.name.includes(`faster-whisper-${model}`))
    .some((d) => {
      const snaps = join(cache, d.name, "snapshots");
      if (!existsSync(snaps)) return false;
      return readdirSync(snaps).some((s) => existsSync(join(snaps, s, "model.bin")));
    });
  return hit ? { ok: true } : { ok: false, reason: `model "${model}" not in ${cache}` };
}

function asrWords(absPath, lang, model) {
  const py = process.env.STUDIO_PYTHON || "python";
  const r = spawnSync(py, [join(TOOLS, "asr.py"), absPath, "--language", lang, "--model", model], {
    encoding: "utf8",
    timeout: 600000,
    maxBuffer: 32 * 1024 * 1024,
  });
  if (r.status !== 0) {
    const msg = (r.stderr || "").trim().split(/\r?\n/).slice(-1)[0] || "asr failed";
    return { ok: false, error: msg.slice(0, 200) };
  }
  try {
    const parsed = JSON.parse(r.stdout);
    if (!Array.isArray(parsed.words) || !parsed.words.length) return { ok: false, error: "asr returned no words" };
    return { ok: true, words: parsed.words };
  } catch (e) {
    return { ok: false, error: `asr output unparseable: ${e.message}` };
  }
}

function tokens(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => ({ raw, key: norm(raw) }))
    .filter((t) => t.key);
}

// Align measured ASR words onto the canonical script words. ASR text is kept
// only for timing; on screen the script spelling always wins (whisper renders
// Arabic with its own orthography, and a caption must match the approved copy).
function align(canonical, heard, duration) {
  const h = heard.map((w) => ({ ...w, key: norm(w.text) })).filter((w) => w.key);
  const n = canonical.length;
  const m = h.length;
  const GAP = -1.2;
  const dp = Array.from({ length: n + 1 }, () => new Float64Array(m + 1).fill(-Infinity));
  const bt = Array.from({ length: n + 1 }, () => new Uint8Array(m + 1));
  dp[0][0] = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const cur = dp[i][j];
      if (cur === -Infinity) continue;
      if (i < n && cur + GAP > dp[i + 1][j]) {
        dp[i + 1][j] = cur + GAP;
        bt[i + 1][j] = 1;
      }
      if (j < m && cur + GAP > dp[i][j + 1]) {
        dp[i][j + 1] = cur + GAP;
        bt[i][j + 1] = 2;
      }
      if (i < n && j < m) {
        let s = -1;
        if (canonical[i].key === h[j].key) s = 2;
        else if (canonical[i].key.length > 3 && (h[j].key.startsWith(canonical[i].key) || canonical[i].key.startsWith(h[j].key))) s = 1.2;
        const v = cur + s;
        if (v > dp[i + 1][j + 1]) {
          dp[i + 1][j + 1] = v;
          bt[i + 1][j + 1] = 3;
        }
      }
    }
  }
  const pairs = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    const step = bt[i][j];
    if (step === 3) {
      pairs.push({ c: canonical[i - 1], w: h[j - 1] });
      i--;
      j--;
    } else if (step === 1) {
      i--;
    } else if (step === 2) {
      j--;
    } else {
      if (i > 0) i--;
      else j--;
    }
  }
  pairs.reverse();
  const byC = new Map(pairs.map((p) => [p.c, p]));

  // Fill unaligned canonical words by interpolation between their neighbours.
  const out = new Array(n);
  let anchorIdx = -1;
  for (let k = 0; k < n; k++) {
    if (byC.has(canonical[k])) {
      const p = byC.get(canonical[k]);
      out[k] = { text: canonical[k].raw, start: r3(clamp(p.w.start, duration)), end: r3(clamp(p.w.end, duration)), m: 2 };
      anchorIdx = k;
      continue;
    }
    const prev = anchorIdx >= 0 ? out[anchorIdx] : null;
    const nextPair = findNextAligned(byC, canonical, k);
    const from = prev ? prev.end : 0;
    const to = nextPair ? clamp(nextPair.w.start, duration) : duration;
    const span = Math.max(0.05, to - from);
    const room = (nextPair ? nextPair.ci : n) - k;
    const each = span / Math.max(1, room);
    const start = from + (k - (prev ? anchorIdx + 1 : 0)) * each;
    out[k] = {
      text: canonical[k].raw,
      start: r3(clamp(start, duration)),
      end: r3(clamp(start + each * 0.9, duration)),
      m: 1,
    };
  }
  return enforceMonotonic(out, duration);
}

function findNextAligned(byC, canonical, k) {
  for (let j = k + 1; j < canonical.length; j++) {
    const p = byC.get(canonical[j]);
    if (p) return { ...p, ci: j };
  }
  return null;
}

function clamp(t, duration) {
  return Math.max(0, Math.min(duration, t));
}

function enforceMonotonic(words, duration) {
  let prev = 0;
  for (const w of words) {
    if (w.start < prev) w.start = r3(prev);
    if (w.end <= w.start) w.end = r3(w.start + 0.05);
    if (w.end > duration) w.end = r3(duration);
    prev = w.start;
  }
  return words;
}

// Deterministic clock when no ASR is available (the model every shipped film
// here has used): time in proportion to character count, fixed air after
// sentence/clause punctuation, scaled to the measured wav length.
function estimate(canonical, duration) {
  const chars = canonical.map((t) => Math.max(1, t.key.length));
  const pauses = canonical.map((t) => (/[.!?؟]$/.test(t.raw) ? SENT_PAUSE : /[,;:]$/.test(t.raw) ? CLAUS_PAUSE : 0));
  const charTotal = chars.reduce((a, b) => a + b, 0);
  const pauseTotal = pauses.reduce((a, b) => a + b, 0);
  const secPerChar = Math.max(0.01, (duration - pauseTotal) / charTotal);
  let t = 0;
  const words = canonical.map((tok, idx) => {
    const start = t;
    const end = t + chars[idx] * secPerChar;
    t = end + pauses[idx];
    return { text: tok.raw, start: r3(start), end: r3(Math.min(end, duration)), m: 2 };
  });
  return enforceMonotonic(words, duration);
}

function fail(project, reason) {
  console.error(`✗ ${basename(project)}: ${reason}`);
  return { project: basename(project), ok: false, reason };
}

function print(summary, lines) {
  console.log(`✓ ${summary.project} — ${summary.words} words over ${summary.lines} lines (${summary.mode})`);
  for (const l of lines) {
    if (!l.words) continue;
    const first = l.words[0];
    const last = l.words[l.words.length - 1];
    console.log(
      `  frame ${String(l.frame).padStart(2)} ${String(l.duration_s).padStart(6)}s  ${l.words.length} words  ${first.start}s→${last.end}s  ${l.text.slice(0, 44)}…`,
    );
  }
  if (summary.note) console.log(`  ! ${summary.note}`);
  if (!summary.neutralPatched && lines.length) console.log("  ! audio_engine_meta.json absent or unmatched — a later audio pass will still wipe these words");
}

if (isMain(import.meta.url)) {
  const argv = process.argv.slice(2);
  const dir = argv.find((a) => !a.startsWith("--")) || ".";
  const res = run({
    dir,
    model: (argv.find((a) => a.startsWith("--model=")) || "").split("=")[1] || argv[argv.indexOf("--model") + 1] || "small",
    forceEstimate: argv.includes("--force-estimate"),
    json: argv.includes("--json"),
  });
  process.exit(res.ok ? 0 : 1);
}
