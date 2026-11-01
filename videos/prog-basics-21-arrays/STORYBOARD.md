---
format: 1080x1920
duration: 29.13s
message: "one name for many values, laid out in order, so reading any position is a jump — and the price for that jump is paid when you insert in the middle"
arc: hook → the row and its numbers → the jump, then the cost → example → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 21 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-21-arrays (prog-basics, part 21 of 22)

English master, portrait 1080x1920, target ~31s (ceiling 54s) — the leanest part in the tranche. Copy
source of record: `writing/prog-basics/pieces/21-arrays.md`. Shape: bible § 3. Grammar: `frame.md`
v2.1 § 4 (G1 hook, G2b row, **G7 `shift`**, G3 code chamber, G5 CTA) and § 7 (motion primitives).
Durations below are the estimates the voice run replaces with measured VO; the authored air (~1.0s per
frame, 2.0s on F5) is added back into `- duration:` after `studio cues`, per bible-day2 § 12.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value, coral = an error the interpreter raised. **This part raises no exception,
so it ships with zero coral.** Every frame carries at least two § 7 primitives, and no cut lands on
the previous frame's layout: F2 wipes up, F3 wipes in from the left and drops the row a notch, F4
wipes from the right into a chamber, F5 drops down.

## The carrier note (why this file is read as pixels first)

This part proves **G7's `shift`** for the tranche. Parts 13, 15, 16, 19, 20 and 22 clone what the
chamber, the counted tag and the stagger look like once they validate here, and pb-22 (running in
parallel) answers this part's `MOVED 4` with its own `MOVED 0` — the two counts are the tranche's
central argument, so the geometry is load-bearing across ten films. The row is authored on a 6-slot
grid (chamber 142x152, pitch 158, first slot x 74) so that inserting a sixth box fits the 936px
content column at both states; the shift translates boxes at index 1,2,3,4 right by exactly **+158px**
each — fixed authored offsets, never a width, flex or letterSpacing tween. Index digits belong to the
slots, not to the boxes, which is what makes the re-settle land on `1` under the new box instead of
one off. Snapshot-read before reporting: the strip arriving, the jump, the stagger (can you count four
boxes move?), the re-settled labels, and whether the ghost trails are visible against the ground at
all — a `--line-faint` trail that photographs as nothing is a finding, not a nitpick.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and printed output only; `--panel` `#1F242C` chambers on the field
with 3px `rgba(255,255,255,0.16)` hairlines (a chamber painted in the field colour is invisible and
passes both `check` and `verify`). Content lives between y = 230 and y = 1004; the caption band sits
at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

## Frame 1 — The hook (G1)

- scene: type alone on the ground, three groups, nothing illustrated. `Need 100 variables?` arrives, then `You need`, then `one array` on the solid amber say-plate; the plate wipes left-to-right on the spoken word.
- duration: 3.84s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the promise
- voiceover: "Need 100 variables? You need one array."
- sfx: none

## Frame 2 — The row, and its numbers (G2b)

- scene: five chambers land left-to-right on P2 drop-in, one per word across "many values in order", values `20 40 60 80 100` in mint, each chamber squash-settling with a mint border flash. An amber bracket spans the row with the tag `one name: scores`. Then the index strip arrives beneath them on P9 count-tick, `0` first, each digit under its box, on "an index that starts at zero", and the plain gloss `the index is a box's position number` settles last.
- duration: 7.85s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-row.html
- type: mechanism
- beat: many values, one name, numbered from zero
- voiceover: "An array holds many values in order, side by side in memory. Each has an index that starts at zero."
- sfx: none

## Frame 3 — The jump, then the cost (G7 shift)

- scene: the same row, two beats. Beat 1 — a marker `[3]` waiting under the strip's 3 leaps up onto box 3, which lights amber for 0.3s while every other box holds; the muted tag `READS 1 MOVE` settles in. Beat 2 — boxes at index 4,3,2,1 translate right exactly one cell (fixed +158px, authored right-to-left stagger, 0.13s apart) leaving four faint ghost trails with a rightward chevron behind them, the new `70` drops into the freed slot 1, the strip re-ticks and the digit `5` arrives at the newly exposed slot, and the amber tag `MOVED 4` lands on `shifting`.
- duration: 6.44s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-shift.html
- type: mechanism
- beat: the trade — one jump versus four moves
- voiceover: "Reading by index is instant. Inserting in the middle means shifting everything after it."
- sfx: none

## Frame 4 — The worked example (G3)

- scene: one `main.py` chamber with a `PYTHON` chip, two lines written under a caret on P3 type-on — `nums = [10, 20, 30]` then `print(nums[1])     # 20`. Amber say-plates wipe over `nums[1]` as it is spoken, then the terminal strip arrives with `20` in mint under a muted `>>>` prompt.
- duration: 5.44s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof, and the CTA's setup
- voiceover: "Nums is ten, twenty, thirty. Nums at index one gives twenty."
- sfx: none

## Frame 5 — The save (G5 CTA)

- scene: `what is nums[-1]?` at 6.4cqw in a 176px band over the dimmed 0.42 row of five chambers, `-1` under the last box and that box's positive digit removed (the hint, not the answer); the `SAVE THIS` amber plate lands on the mechanic verb, then the series line `PROGRAMMING BASICS · BASICS II · 21 · BEGINNER`. Holds alone; no exit push.
- duration: 5.56s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Save this. Quick one: what's nums[-1] in Python?"
- sfx: none

## Real durations

Measured on 2026-10-28 by `studio voice` (Kokoro `af_heart` at the house **0.93**) + `studio cues`,
which also produced the per-word onsets every emphasis time in the frame files cites. Air is 1.0s per
frame and 2.0s on F5 (which loops under the platform's chrome and carries no exit push), so each 0.5s
crossfade sits inside silence and no sentence spans a cut.

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 2.837 | 3.84 | 7 | 0s → 2.50s |
| F2 | 6.848 | 7.85 | 20 | 0s → 6.54s |
| F3 | 5.440 | 6.44 | 14 | 0s → 5.32s |
| F4 | 4.437 | 5.44 | 11 | 0s → 4.14s |
| F5 | 3.563 | 5.56 | 8 | 0s → 3.16s |
| **film** | **23.125 speech** | **29.13** | **60** | |

**RUNTIME FINDING — under 30s, reported not padded.** 29.13s lands below the 30s floor the tranche set
for itself, even though the air is exactly the authored spec (1.0s/frame, 2.0s on F5 — never shrunk).
Per `series-bible-day2.md` § 0.2 and this part's `## Gate state`, **no words were added** and the air
was not inflated to dodge the number: the fix at this length is the frame shape, which is a human
decision, so it is reported at the gate rather than solved here. Cumulative starts: 0 / 3.84 / 11.69 /
18.13 / 23.57.

Second finding, blocking for the whole tranche: `studio voice` resolved **0.74**, not the house 0.93.
`.agents/design.md` carries the value at `voice → voices → en`, which `frontmatter()` flattens to
`voice.voices.en`, while `cmdVoice` looks up `voices.en` and falls through to
`VOICE_DEFAULTS.en.speed` (0.74). design.md's own header comment names this miss and says "keep the
shape stable and fix the lookup, not this file" — and `studio/**` is read-only to this run, so the
audio was generated with an explicit `--speed 0.93` (the printed line read
`provider=kokoro voice=af_heart lang=en speed=0.93`). That is the house number exactly, but every other
part in this tranche needs the same flag until `studio/tools/studio.mjs` reads
`voice.voices.<lang>`.
