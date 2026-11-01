import fs from "node:fs";

const meta = JSON.parse(fs.readFileSync("audio_meta.json", "utf8"));
const XFADE = 0.5;

// Breath after each line, in seconds. Bigger after the beats the script
// calls a pause on: the opening silence, "why nobody feels it", and the
// three-sentence list that ends the argument.
const GAP = { "01": 1.2, "02": 0.8, "03": 0.8, "04": 0.6, "05": 0.8, "06": 1.2, "07": 0.6, "08": 0.6, "09": 1.0, "10": 2.4 };

const SLUG = {
  "01": "01-silent-phone", "02": "02-the-name", "03": "03-the-call", "04": "04-the-reroute",
  "05": "05-the-second-move", "06": "06-why-invisible", "07": "07-the-check", "08": "08-recovery",
  "09": "09-three-sentences", "10": "10-not-his-fault",
};

const r2 = (n) => Math.round(n * 100) / 100;

let t = 0;
const lines = meta.voices.map((v) => {
  const start = r2(t);
  t += v.duration_s + GAP[v.id];
  return { ...v, start, end: r2(start + v.duration_s) };
});
const total = r2(t);

// A frame covers its line, the breath after it, and overlaps the next frame's
// entrance by XFADE so the picture hands over instead of blinking out.
const frames = lines.map((l, i) => {
  const nextStart = i < lines.length - 1 ? lines[i + 1].start : total;
  const tail = i < lines.length - 1 ? XFADE : 0;
  return { ...l, dur: r2(nextStart - l.start + tail), track: i % 2 };
});

const scenes = frames
  .map(
    (f) => `      <div
        id="el-${f.id}-${SLUG[f.id].slice(3)}"
        class="scene"
        data-composition-id="${SLUG[f.id]}"
        data-composition-src="compositions/frames/${SLUG[f.id]}.html"
        data-start="${f.start}"
        data-duration="${f.dur}"
        data-track-index="${f.track}"
      ></div>`,
  )
  .join("\n\n");

const audio = lines
  .map(
    (l) => `      <audio
        id="voice-${l.id}"
        src="assets/voice/${l.id}.wav"
        data-start="${l.start}"
        data-duration="${l.duration_s}"
        data-track-index="10"
      ></audio>`,
  )
  .join("\n");

// The two handoffs that carry a diagram across the cut get a crossfade; the
// rest are hard cuts landing on the first word of the next sentence.
const hands = [
  ["03-the-call", "04-the-reroute"],
  ["04-the-reroute", "05-the-second-move"],
]
  .map(([a, b]) => {
    const at = frames.find((f) => SLUG[f.id] === b).start;
    return `        tl.to("#el-${a}", { opacity: 0, duration: ${XFADE}, ease: "power2.inOut" }, ${at});
        tl.fromTo("#el-${b}", { opacity: 0 }, { opacity: 1, duration: ${XFADE}, ease: "power2.inOut" }, ${at});
        tl.addLabel("hf:transition:${a}:${b}:crossfade", ${at});`;
  })
  .join("\n");

const html = fs
  .readFileSync("index.html", "utf8")
  .replace(/data-start="0"\s*\n(\s*)data-duration="75"/, `data-start="0"\n$1data-duration="${total}"`)
  .replace(
    /      <div\n        id="el-01-silent-phone"[\s\S]*?    <\/div>\n/,
    `${scenes}\n\n${audio}\n\n    </div>\n`,
  )
  .replace(
    /(\/\/ ── frame transitions[\s\S]*?\(function \(\) \{ var tl = window\.__timelines\["main"\];\n)[\s\S]*?(\}\)\(\);\n\s*<\/script>)/,
    `$1${hands}\n        tl.to({}, { duration: ${total} }, 0); // full-span anchor — main.duration() == composition total (Studio master duration)\n      })();\n    </script>`,
  );

fs.writeFileSync("index.html", html);
console.log(JSON.stringify({ total, frames: frames.map((f) => [f.id, f.start, f.dur]), audio: lines.map((l) => [l.id, l.start, l.duration_s]) }, null, 1));
