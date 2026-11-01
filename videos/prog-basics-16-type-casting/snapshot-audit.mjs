// Snapshot audit for pb-16: geometry keeps (nothing load-bearing under y=1004, nothing at all in
// 1344-1920) plus a measurable per-frame change score between neighbours inside each scene.
// Run: node snapshot-audit.mjs   (reads .hyperframes/artifacts/snapshots/<id>/frame-*.png)
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";

const dir = process.argv[2] || ".hyperframes/artifacts/snapshots/6b7c8126-06a7-4d2b-9762-481bcab16817";
const files = readdirSync(dir).filter((f) => /^frame-\d+-at-[\d.]+s\.png$/.test(f))
  .sort((a, b) => parseFloat(a.match(/at-([\d.]+)s/)[1]) - parseFloat(b.match(/at-([\d.]+)s/)[1]));

const SCALE = 4; // sample every 4th pixel row/col for speed
function ppm(path) {
  const buf = execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-i", `${dir}/${path}`, "-f", "image2", "-c:v", "ppm", "-"], {
    maxBuffer: 1 << 28, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"],
  });
  let p = 0;
  const tok = () => { while (p < buf.length && buf[p] <= 32) p++; const s = p; while (p < buf.length && buf[p] > 32) p++; return buf.slice(s, p).toString(); };
  const magic = tok(); if (magic !== "P6") throw new Error("not P6: " + magic);
  const w = parseInt(tok(), 10), h = parseInt(tok(), 10); tok(); // maxval
  return { w, h, data: buf.slice(p), stride: w * 3 };
}
const lumaAt = (img, x, y) => {
  const i = y * img.stride + x * 3;
  return 0.2126 * img.data[i] + 0.7152 * img.data[i + 1] + 0.0722 * img.data[i + 2];
};

const scenes = [[0, 6.21], [6.21, 10.99], [10.99, 19.12], [19.12, 25.56], [25.56, 31.08]];
const sceneOf = (t) => scenes.findIndex(([a, b]) => t >= a - 0.001 && t < b) ;

let prev = null, prevT = null;
const rows = [];
for (const f of files) {
  const t = parseFloat(f.match(/at-([\d.]+)s/)[1]);
  const img = ppm(f);
  let maxBelow1004 = 0, lit1004 = 0, maxBelow1344 = 0, lit1344 = 0, maxBand = 0;
  let delta = null;
  for (let y = 0; y < img.h; y += SCALE) {
    for (let x = 0; x < img.w; x += SCALE) {
      const L = lumaAt(img, x, y);
      if (y > 1004) { if (L > maxBelow1004) maxBelow1004 = L; if (L > 120) lit1004++; }
      if (y > 1344) { if (L > maxBelow1344) maxBelow1344 = L; if (L > 120) lit1344++; }
      if (y > 1004 && y <= 1344) { if (L > maxBand) maxBand = L; }
      if (prev && x / SCALE % 3 === 0 && y / SCALE % 3 === 0) {
        const P = lumaAt(prev, x, y);
        delta = (delta || 0) + Math.abs(L - P);
      }
    }
  }
  const n = Math.ceil(img.h / SCALE) * Math.ceil(img.w / SCALE) / 9;
  rows.push({ t, scene: sceneOf(t) + 1, maxBelow1004: Math.round(maxBelow1004), lit1004,
    maxBelow1344: Math.round(maxBelow1344), lit1344, maxBand: Math.round(maxBand),
    change: delta == null ? null : (delta / n).toFixed(1) });
  prev = img; prevT = t;
}
console.log("t      scn  maxLuma>1004  lit>120  maxLuma>1344  lit>1344  maxLumaBand  changeVsPrev");
for (const r of rows) {
  console.log(`${String(r.t).padEnd(6)} ${String(r.scene).padStart(2)}   ${String(r.maxBelow1004).padStart(6)}        ${String(r.lit1004).padStart(6)}     ${String(r.maxBelow1344).padStart(6)}         ${String(r.lit1344).padStart(6)}      ${String(r.maxBand).padStart(6)}        ${r.change}`);
}
const worst = rows.filter((r) => r.change != null && r.scene > 1);
const quiet = worst.filter((r) => Number(r.change) < 0.5);
console.log("\nsamples with almost no change vs previous:", quiet.map((r) => `${r.t}s(scn${r.scene}) ${r.change}`).join(", ") || "none");
console.log("pixels above luma 120 below y=1344 anywhere:", rows.reduce((a, r) => a + r.lit1344, 0));
