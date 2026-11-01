#!/usr/bin/env node
// build-word-timings.mjs — fill audio_meta.json voices[].words for Kokoro VO.
// Kokoro emits no word timestamps; we measured speech-chunk boundaries per frame
// with `ffmpeg silencedetect=noise=-38dB:d=0.06` and distribute each chunk's words
// proportionally to token length. Word text comes from STORYBOARD.md voiceover
// lines (tokenized on whitespace) so punctuation is preserved exactly.
//
//   node tools/build-word-timings.mjs
//
// CHUNKS: frame -> [[chunkStart, chunkEnd, nWords], ...] frame-relative seconds.
// Regenerate CHUNKS for any re-synthesized VO (e.g. the Arabic variant).

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

// ── measured chunk table (silencedetect -38dB d=0.06, EN master VO, 24kHz) ────
const CHUNKS = {
  1: [[0, 1.230, 4], [1.800, 3.701, 6], [3.803, 4.981, 3], [5.528, 8.513, 6]],
  2: [[0, 2.230, 6], [2.662, 3.374, 2]],
  3: [
    [0.065, 2.427, 3], [2.858, 3.809, 3], [4.146, 6.630, 12], [6.921, 7.818, 3],
    [8.126, 9.409, 4], [10.026, 10.969, 3], [11.103, 12.202, 5],
  ],
  4: [[0, 0.848, 1], [1.149, 2.274, 1], [2.398, 2.539, 1], [3.005, 4.617, 5], [5.058, 7.901, 9]],
  5: [[0, 2.299, 5], [2.704, 3.887, 3], [4.325, 6.388, 5], [6.779, 8.283, 6]],
  6: [[0.137, 1.249, 3], [1.732, 2.669, 3], [2.789, 2.945, 1], [3.435, 4.862, 4], [4.955, 7.274, 7]],
  7: [
    [0, 0.788, 1], [1.001, 1.610, 2], [2.138, 3.380, 3], [3.819, 5.092, 3],
    [5.224, 5.673, 1], [5.778, 6.950, 2], [7.478, 8.717, 6], [8.845, 12.242, 6],
  ],
  8: [[0.067, 2.021, 6], [2.363, 3.704, 5], [4.153, 6.237, 3], [6.665, 7.799, 5]],
  9: [[0, 1.572, 6], [1.953, 2.645, 3], [3.183, 5.125, 7]],
};

const r3 = (x) => Number(x.toFixed(3));

// ── voiceover lines from STORYBOARD.md, in frame order ──
const sb = readFileSync(resolve(root, "STORYBOARD.md"), "utf8");
const voLines = [...sb.matchAll(/^- voiceover: "(.+)"\s*$/gm)].map((m) => m[1]);
if (voLines.length !== 9) {
  console.error(`✗ expected 9 voiceover lines in STORYBOARD.md, found ${voLines.length}`);
  process.exit(1);
}

const metaPath = resolve(root, "audio_meta.json");
const meta = JSON.parse(readFileSync(metaPath, "utf8"));

for (const v of meta.voices) {
  const tokens = voLines[v.frame - 1].split(/\s+/).filter(Boolean);
  const chunks = CHUNKS[v.frame];
  const total = chunks.reduce((a, c) => a + c[2], 0);
  if (total !== tokens.length) {
    console.error(`✗ frame ${v.frame}: chunk word counts sum to ${total}, script has ${tokens.length}`);
    process.exit(1);
  }
  const words = [];
  let ti = 0;
  for (const [s, e, n] of chunks) {
    const slice = tokens.slice(ti, ti + n);
    ti += n;
    const weights = slice.map((t) => t.length);
    const wsum = weights.reduce((a, b) => a + b, 0);
    let acc = 0;
    for (let i = 0; i < slice.length; i++) {
      words.push({ text: slice[i], start: r3(s + ((e - s) * acc) / wsum), end: r3(s + ((e - s) * (acc + weights[i])) / wsum) });
      acc += weights[i];
    }
  }
  // clamp last word end to the measured audio duration
  const last = words[words.length - 1];
  if (last.end > v.duration_s) last.end = r3(v.duration_s);
  v.words = words;
}

writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n");
const n = meta.voices.reduce((a, v) => a + v.words.length, 0);
console.log(`✓ word timings: ${n} words across ${meta.voices.length} voices → audio_meta.json`);
