---
format: 1080x1920
duration: 31.08s
message: "casting is converting a type on purpose, coercion is the language doing it silently, and the two languages here disagree about the same characters"
arc: hook (JS surprises) → casting as a container you choose → coercion as the same move unasked → the two labelled answers → the debate
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 16 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-16-type-casting (prog-basics, part 16 of 22)

English master, portrait 1080x1920, target ~29-34s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/16-type-casting.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4 (G1
hook, G2 box ×2, G4 split, G5 CTA) and § 7 (the motion primitives). Durations below are the measured VO
plus authored air, and every emphasis time in the frame files cites a measured word onset from
`audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground `#15181D`
with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for everything read,
JetBrains Mono for code and chrome; colour as a lesson — amber = the word being said, mint = a value,
coral = an error the interpreter raised. **This part raises no exception on screen, so it ships with
zero coral** (the Python `TypeError` and the `int('7.5')` `ValueError` that this machine really raised
are quoted in the pinned comment instead). Every frame carries at least two § 7 primitives, and no cut
lands on the previous frame's layout: archetype, wipe direction and hero position all change between
neighbours.

**§ 13 is this part's central rule.** The user's example spans two languages, so every chamber names its
own: `main.py` + `PYTHON` on the casting side, `main.js` + `JAVASCRIPT` on the coercion side and on the
right of the split, and a `JAVASCRIPT` chip on the hook. `int('5') + 3` → `8` is Python; `'5' + 3` →
`'53'` is JavaScript and the same line raises in Python. An unlabelled chamber would teach a Python
learner something false about Python.

## The two mechanisms, made physical

F2 and F3 are **deliberately the same apparatus** so that one missing thing carries the whole lesson.
F2 (casting) puts the tag `int('5')` on the arrow *first*, then the arrow draws and the value drops out
of the `str` chamber, crosses and lands in the `int` chamber with the series' own assignment gesture
(P2 `drop-in`: squash-settle plus the mint border flash, pb-21's). F3 (coercion) runs the identical
crossing with **no tag at all** — the arrow draws itself while nobody asks, exactly when the voice says
`silently`. Two containers, one crossing, one label present and one absent: that is casting versus
coercion, shown rather than said a second time.

F4 is the payoff: two labelled chambers, `int('5') + 3` printing `8` on the left and `'5' + 3` printing
`'53'` on the right, typed on under a caret one clause per spoken line. F5 is pb-10's Debate ring — it
travels YES → NO → released and comes to rest on **neither** chip, because answering the viewer's debate
on screen would kill the debate.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only (one plate at a time); mint `#5AD6A0` marks values and printed output only; coral `#FF6B5A` is not
used in this film. Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344;
1344-1920 stays empty for the platform's own chrome. Every frame carrying code sets
`font-variant-ligatures: none` plus `font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`, so nothing
ligates into Python the learner cannot type.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
~1s authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

## Frame 1 — The hook (G1)

- scene: two JavaScript claims as display type on graphite — `'5' + 3` is `'53'`, then `'5' - 3` is `2`,
  then `yes, really.` in muted. The results are mint; `'53'` takes the solid amber cover plate. A mono
  `JAVASCRIPT` chip labels both lines, because in Python the first one raises.
- duration: 6.21s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the surprise, and the language it belongs to
- voiceover: "In JavaScript, '5' + 3 is '53', but '5' - 3 is 2. Yes, really."
- sfx: none

## Frame 2 — Casting: you ask for it (G2 box)

- scene: a `main.py` titlebar with the `PYTHON` chip above a pair of containers — `str` holding `'5'` on
  the left, `int` holding `5` on the right. The tag `int('5')` arrives on the arrow lane first (the
  request), the dashed arrow draws itself under it (P8), then the value drops out, crosses and lands in
  the second container while its border flashes mint (P2). Amber plate on `Casting`, then on `on
  purpose`, one at a time. Annotation: `casting = you write the conversion`.
- duration: 4.78s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-casting.html
- type: mechanism
- beat: the conversion somebody asked for
- voiceover: "Casting is you converting a type on purpose, like int('5')."
- sfx: none

## Frame 3 — Coercion: the same move, unasked (G2 box)

- scene: the identical pair under a `main.js` titlebar with the `JAVASCRIPT` chip, tabs `string` and
  `number` — and the arrow lane carries **no tag**. The arrow draws itself on `silently` and the value
  crosses anyway, then the strip prints `'5' - 3` → `2` in mint. Amber plate on `Coercion`, then on
  `Explicit`. Annotation: `coercion = the language converts it, unasked`.
- duration: 8.13s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-coercion.html
- type: mechanism
- beat: the conversion nobody asked for, and why explicit is safer
- voiceover: "Coercion is the language doing it silently. Explicit is safer, because coercion rules can surprise you."
- sfx: none

## Frame 4 — The two labelled answers (G4 split)

- scene: pb-10's two-panel geometry, retuned to v2.1 — two `--panel` `#1F242C` chambers, 456px each,
  24px gutter, each with its own 64px titlebar and language chip. Left `main.py` / `PYTHON` types
  `int('5') + 3` and prints `8`; right `main.js` / `JAVASCRIPT` types `'5' + 3` and prints `'53'`. P3
  type-on under a caret, one line per spoken clause, the answer strips arriving on their own spoken
  value. Annotations `you wrote the conversion` / `the language chose`, one bar across the pair:
  `ask for it, or it guesses`. Two lines per side, inside the ≤3 law.
- duration: 6.44s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-split.html
- type: example
- beat: proof, in the right language each time
- voiceover: "int('5') + 3 gives 8, while '5' + 3 in JavaScript gives '53'."
- sfx: none

## Frame 5 — The debate (G5 CTA)

- scene: `coerce types silently?` as the headline (22 characters, 6.4cqw in the 176px box) over two
  chips `YES` / `NO`, the solid amber `PICK A SIDE` plate, the badge line `PROGRAMMING BASICS · BASICS II
  · 16 · BEGINNER` and the sub line `two languages, two rules`. The amber ring travels YES → NO →
  released and rests on neither, and keeps travelling while the card loops under the platform chrome.
- duration: 5.52s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask, left open
- voiceover: "Should languages coerce types automatically? Yes or no."
- sfx: none

## Real durations

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Air | Scene start |
|---|---|---|---|---|---|
| F1 | 5.205 | 6.21 | 14 | 1.005 | 0 |
| F2 | 3.776 | 4.78 | 10 | 1.004 | 6.21 |
| F3 | 7.125 | 8.13 | 16 | 1.005 | 11.00 |
| F4 | 5.440 | 6.44 | 11 | 1.000 | 19.14 |
| F5 | 3.520 | 5.52 | 8 | 2.000 | 25.58 |
| **film** | **25.07 speech** | **31.08** | **59** | 6.01 | ends 31.08 |

Word counts are `studio cues`' ASR-aligned counts against the 62 written tokens (the `+` glyphs in F1
and F4 align to no spoken word, and F4's `int('5')` counts as one). Measured speech came in **longer
than the estimate table on F3** ("Coercion is the language doing it silently. Explicit is safer,
because…": 7.125s against 4.9s estimated) and shorter on F1/F4, which is the reason the estimates are
discarded here and the measured column is what the frame files animate against.

Air at each cut: ~1.0s (2.0s on the last frame, which loops under the platform's chrome), so the 0.5s
crossfade sits inside silence and no sentence spans a cut (BATCH-day2 fix 6). `studio voice` overwrites
the VO column with the measured durations and re-syncs the frame durations; the estimates above are only
the starting point. **If the measured film is under 30s, F5's pad grows first (air is shape, not
filler), no words are added, and the number is reported** (bible-day2 § 0.2, `frame-day2.md` § 12).
