---
format: 1080x1920
duration: 31.91s
message: "Big O is a sentence about shape, not speed — how the work climbs as the input climbs, with the constants thrown away so two codes that differ by a factor of ten can share a word"
arc: hook → the axes and the shape → the two shallow shapes → the two steep shapes → the save
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 41 of 44
identity: bench-v2.2
---

# STORYBOARD — prog-basics-41-big-o-notation (prog-basics, part 41 of 44)

English master, portrait 1080x1920, target ~32s (band 29-34, ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/41-big-o-notation.md` (85 spoken words after the approved A1 fix).
Grammar: `frame.md` v2.2 § 4 **G16 `curves`** on the § 3.3 **fixed-px SVG canvas**, plus G1 hook,
G1+axes (F2), G5 CTA, and § 7's motion primitives. Durations below are estimates the voice run
replaces with measured VO; the authored air (1.0s per frame, 2.0s on F5) is added back after
`studio cues`, per `frame-day4.md` § 9.

The piece file's `grammar:` line still says `G1 G1-axes G2b-bars G2b-bars G5`. That is Day-2 labelling
from before the plot mark existed; the piece file itself authorises the swap ("If Day 4's frame spec
names a plot mark and calls 41 its carrier, the bars become lines and **every string in this file
stays as written**"). This film builds **G16 curves**, not a counted bar row. The strings did move in
one place only, and that one place is A1's own binding screen instruction — see the pair plate on F4.

## The carrier note (settled px — 37, 42, 43, 44 inherit these numbers)

This part proves the single most-reused mechanism in the tranche. Read this block as the answer, then
read the pixels.

**1. The SVG canvas (§ 3.3), verbatim and working:**

```
<svg class="g16-canvas" width="936" height="1920" viewBox="0 0 936 1920"
     style="position:absolute; left:72px; top:0">      (one per chart frame, no <text> inside)
internal x = frame x − 72        internal y = frame y          (the only conversion, done once)
no ancestor carries a scale() tween; .fN-content translates only (x/y wipes are legal)
```

§ 4's G16 block publishes its geometry in **frame coordinates** while § 3.3 fixes the canvas at
`left:72px`. Both stay true by doing the one subtraction: every § 4 x becomes `x − 72` inside the SVG,
every y is copied unchanged. That is a translation, not a re-fit — the beziers are untouched.

**2. The axes and the four curves, in BOTH coordinate systems.** Copy either column; they are the
same pixels. Axes are authored as `<path>`, not `<line>`: § 3.5's `pathLength="100"` draw-on is the
mechanism the tranche inherits, and `pathLength` on a `<line>` is an SVG2 geometry attribute that is
not dependable — on a `<path>` it is universal. One number still covers an 840px path and a 376px one.

| thing | frame coords (§ 4) | svg coords (frame − 72) | stroke |
|---|---|---|---|
| x-axis | (140,724) → (980,724) | `M 68 724 L 908 724` | 4px `--stroke` |
| y-axis | (140,724) → (140,360) | `M 68 724 L 68 360` | 4px `--stroke` |
| `O(1)` | (140,680) → (980,680) | `M 68 680 L 908 680` | 7px, round cap |
| `O(log n)` | `M 140 724 C 240 604 372 584 980 568` | `M 68 724 C 168 604 300 584 908 568` | 7px, round cap |
| `O(n)` | (140,724) → (980,456) | `M 68 724 L 908 456` | 7px, round cap |
| `O(n²)` | `M 140 724 Q 612 712 980 348` | `M 68 724 Q 540 712 908 348` | 7px, round cap |

Every curve: `pathLength="100"`, `stroke-dasharray: 100`, `stroke-dashoffset` tween `100 → 0`,
0.55s `power2.out`, `immediateRender: false`. Endpoints at the right edge are 112 / 112 / 108px apart
(§ 3 absolute 1 licences the fourth series *only* at that spacing — do not rescale the plot).

**3. HTML-over-SVG labels (§ 3.4).** The SVG draws lines; every word is an HTML `div` in the same clip
band, painted *after* the canvas in DOM order. Curve labels `.g16-clab` keep § 4's geometry —
`left:612px; width:368px; text-align:right` (ink ends at frame x 980, the curves' right edge) — and
their **size settles at 2.6cqw (28.1px), not § 5.5's 2.2cqw (23.8px)**: § 3 puts `--ink` chart labels
under the 28px reading floor, and § 5.5 already names 2.6cqw as the fix when the superscript fails the
snapshot test. Ticks and the `WORK` word are `--muted` chrome with `data-layout-ignore`:
`.g16-tick` `1×` `2×` `4×` at 2.6cqw mono 400, w 44, centred on frame x 140 / 560 / 980
(lefts 118 / 538 / 958, right edge 1002 — inside the 936 content box), top 736 h 40.
`.g16-ylab` `WORK` mono 700 2.6cqw `--muted`, left 148 top 366, never rotated.

**4. Stroke floors that survived the phone test.** 4px axes and 7px curves at `--stroke`
(rgba(255,255,255,0.30)) read at 35% thumbnail on graphite; `--line` (0.16) does not — a lone stroke
has no box to carry it and loses to the 56px dot grid (§ 2). Round caps are load-bearing: butt caps on
a 7px diagonal read as a broken line at 35%.

**5. The notation token (§ 5.5), and the one trap.**

```html
<div class="g16-clab f4-lab" id="f4-lab-n2" data-layout-ignore>O(n<sup class="pb-sup">2</sup>)</div>
```
```css
.pb-sup { display:inline-block; font-size:60%; line-height:1; vertical-align:0.5em; }
```
No caret, no `²` codepoint, **no `sups` / `font-variant-position`**. `font-feature-settings` is not
additive: a `"sups" 1` on any rule deletes `"liga" 0, "calt" 0, "dlig" 0` and re-enables
`<=` → `≤` on the same frame. The ligature guard is declared **once**, on each frame's `#root`
(`font-variant-ligatures:none; font-feature-settings:"liga" 0,"calt" 0,"dlig" 0`), and *never*
re-declared on a descendant — the property inherits, so a descendant rule can only subtract.
`inline-block` because transforms/offsets on an inline span are dropped (known-traps § 2);
`vertical-align:<length>` because it is metric-independent and seek-safe. Measured: the digit renders
at 16.9px raised 8.4px off a 28.1px baseline — legible at 100%, marginal at 35%, which is why the
token is 2.6cqw and not 2.2cqw.

**6. The chart's lane law (this is the part that saves 42/43/44 from a collision).**

| lane | what lives here on a G16 frame |
|---|---|
| 230-274 | kicker + standing `BEGINNER` plate (chrome) |
| 288-354 | **upper tag lane, left half only** — the `n = 32` chip at left 72 w 220. Its right half is **owned by the `O(n²)` curve label** (left 612, top 304), so a second chip there lands on a stroke: § 3 absolute 6, made concrete |
| 348-724 | the plot: curves, axes, and the four right-aligned labels |
| 736-776 | tick row (`1× 2× 4×`), chrome |
| 810-866 | **one reading line** (the campaign note line). § 3.6 says a chart frame has none; the piece file's gate says every symbol chip needs a plain reading line on its own frame. Resolved toward the gate, one line per frame, and it is reported as a divergence |
| 892-958 | lower tag lane — F4's measured pair only |
| 1004 | hard floor. Captions own 1024-1344; nothing in this film is below 1004 except the skin |

**7. One n, used on both chart frames.** `n = 32`, same chip, same lane, same pixels on F3 and F4, so
the two shapes are comparable rather than a layout accident. Every number on screen, from
`ACCURACY-day4.md` § 41 and nothing else: `32` (a table row), `1024 → 4096` = `x4.0` (n² at 32 → 64),
`96 → 192` = `x2.0` (a loop with an inner fixed at 3, 96 → 192), and the chrome ticks `1× 2× 4×`.
The hash-lookup counts (1 hash call, 0/1 eq tests, flat 10 → 1,000,000 keys) and the 200-keys-all-
hashing-to-7 worst case are **pinned-comment material and stay off screen**, because F5 must not carry
the answer (no chip lights, no `O(1)` marked correct).

**8. One convention per frame (B14).** This film shows the **curve value**, never the loop-pass count.
`O(log n)` here is `log2 n` (3 at n=8, 5 at n=32); a halving `while` loop would read
`floor(log2 n)+1`, one higher. Both numbers never appear in the same frame, and 43 owns the measured
probes.

## Video direction (shared by all five frames)

Ground graphite `#15181D`, the 56px dot grid drifting 0 → 16 → 0px under two breathing glows, every
ambient loop returning to its own zero so a cut never resets the world (pb-21's shipped ground CSS,
verbatim). Ink `#F4F1EA`; amber `#FFD166` = the word/curve being said, **singular**; mint `#5AD6A0` = a
value or what printed; `--stroke` `rgba(255,255,255,0.30)` = every lone line. **Zero coral** — a curve
is not an error (`frame-day4.md` § 6). Chrome kicker `PROGRAMMING BASICS · UNDER THE HOOD · 41` +
`BEGINNER` plate on all five (§ 7; the piece file's `STRUCTURES I` is Day 3's word). Content lives
between y 230 and y 1004; captions own 1024-1344; 1344-1920 stays empty.

**The VO never carries a symbol; the graphic never carries a spoken word.** The caption lane reads
`big O of n squared` while the diagram reads `O(n²)` — measured word timings, expected, not a defect,
not a patch target.

Nothing layout-tweens. Curves draw on with `pathLength`; label and chip widths are authored states;
`scaleX` / `x` / `y` / `opacity` / `stroke` / `fill` only. Amber moves *with* the voice: a curve and its
own label go `--say` together for the clause that names them, then both come back (curve →
`--stroke`, label → `--ink`). No curve is permanently amber; "the important curve" is decorative amber
and this film's whole lesson is that no shape is important.

## Frame 1 — The hook (G1, the cover)

- scene: type alone on the ground, two groups, nothing illustrated. `this code gets slow` arrives in ink at 8.4cqw, then `no stopwatch needed` arrives under it with the solid amber say-plate sweeping left-to-right behind it (P1) and the word going `--say-ink`. A 5px `--line` settle rule runs under the second group. The full hook is spoken and never pasted; the two groups are the hook cut to the group limits. No notation on this frame (§ 11.2 open, currently no), no chart, no axes — the board is still empty of structure.
- duration: 4.52s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the joke and the thesis, in the user's words
- voiceover: "How do engineers say 'this code gets slow' without a stopwatch?"
- sfx: none

## Frame 2 — The axes arrive (G1 + axes, the first half of G16)

- scene: the same ground, and the structure appears: the x-axis draws left-to-right in 0.3s, then the y-axis runs up from the same origin in 0.3s, both 4px `--stroke` paths with the § 3.5 dash draw. `WORK` settles at the top of the y-axis and the three tick labels `1× 2× 4×` arrive one per beat under the x-axis (`data-layout-ignore` chrome). The reading line `shape, not speed` arrives in the note lane with `shape` in `--ink` — the one contrast construction this film ships, and it is not in the hook. **No curve and no notation chip are on this frame yet**: the piece file's gate is that no chip may arrive before its shape exists, so F2's dim four-chip legend is dropped and the empty plot is the point. Amber never appears on this frame: the standing `BEGINNER` plate is the only amber on the board.
- duration: 7.04s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-axes.html
- type: mechanism
- beat: the sentence is about how the line climbs
- voiceover: "Big O describes how the work grows as the input grows. It drops the constants and keeps the shape."
- sfx: none

## Frame 3 — The two shallow shapes (G16)

- scene: the board continues — axes, ticks and `WORK` are already standing at t=0, no re-draw, so the join reads as the teacher moving on. On `One flat line` the `O(1)` path draws on (0.55s) 44px above the x-axis and its label arrives 0.1s later, both `--say` for the clause; on `One straight line` the flat one comes back to `--stroke`/`--ink` and `O(n)` draws from the origin up to the right and takes the amber. The `n = 32` chip lands in the **left half of the upper tag lane** (the right half belongs to the `O(n²)` label that arrives on F4) and holds on F4 unchanged — one n, both frames. The reading line `one loop, one look each` arrives in the note lane on `reading each item once`. Two shapes, two labels, two beats, equal weight; the halving and the square are not on this frame.
- duration: 7.36s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-shallow.html
- type: mechanism
- beat: flat means the same work, straight means one pass
- voiceover: "One flat line means the same work at any size. One straight line means reading each item once."
- sfx: none

## Frame 4 — The two steep shapes, and the pair that proves A1 (G16)

- scene: four curves now share the plot — F3's two stand at `--stroke` with their labels at `--ink`, so the learner sees the whole family and not two frames of fragments. On `A loop inside a loop, both over n` the `O(n²)` path draws (0.6s) — low across the first half of the width, then vertical — and its label with the real superscript arrives 0.1s behind it in amber; the note-lane reading line `a loop inside a loop, both over n` lands with the clause. On `is big O of n squared` the measured pair plate lands as **two chips side by side in the lower tag lane**: `n × n   1024 → 4096   x4.0` then, 0.4s later, `inner 3   96 → 192   x2.0` — label `--muted`, numbers `--ink`, factor `--value` mint. The x4.0 chip belongs to the amber curve, the x2.0 chip is the fixed inner loop, and the contrast between the two factors is the correction the user ruled on. Then `Halving the list each step keeps it shallow`: `O(n²)` and its label come back to rest, `O(log n)` draws steep-then-flat with its label, amber for that clause only. No number on this frame is not in the ledger; `log2 n` is never printed as a pass count.
- duration: 7.49s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-steep.html
- type: mechanism
- beat: both over n is x4.0; a fixed inner is x2.0
- voiceover: "A loop inside a loop, both over n, is big O of n squared. Halving the list each step keeps it shallow."
- sfx: none

## Frame 5 — The save (G5)

- scene: the reference card, and the frame people screenshot. `a hash map lookup?` at 6.4cqw in the 176px ask band; `SAVE THIS` as the solid amber verb plate at pb-21's proven 330/720/420/104; the four notation chips held in a row beneath the plate in the 892 lower tag lane (`O(1)` `O(n)` `O(n²)` `O(log n)`), JetBrains Mono 700 2.6cqw `--muted`, `data-layout-ignore`, arriving as one row with opacity only — **no scale, no flash, no chip lit, nothing marked correct**, because the honest answer has a worst case that part 38 owns. The series line `PROGRAMMING BASICS · UNDER THE HOOD · 41 · BEGINNER` closes the frame. No chart on F5: the shapes are the film, the question is the save. Holds alone; no exit push.
- duration: 5.50s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the save, and the legend
- voiceover: "Save this. What's the Big O of looking up a key in a hash map?"
- sfx: none

## Real durations

Measured by `studio voice` (Kokoro `af_heart`, provider pinned from `BRIEF.md`, **`--speed 0.93`
passed explicitly**) + `studio cues`. Air is 1.0s per frame and 2.0s on F5, so every 0.5s crossfade
sits inside silence and no sentence spans a cut. Filled in after the voice run.

| Frame | VO seconds | Frame seconds (VO + air) | VO words |
|---|---|---|---|
| F1 | 3.520 | 4.52 | 11 |
| F2 | 6.037 | 7.04 | 19 |
| F3 | 6.357 | 7.36 | 18 |
| F4 | 6.485 | 7.49 | 22 |
| F5 | 3.499 | 5.50 | 15 |
| **film** | **25.898 speech** | **31.91** | **85** |
