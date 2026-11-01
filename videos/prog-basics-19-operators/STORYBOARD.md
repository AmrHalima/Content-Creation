---
format: 1080x1920
duration: 30.52s
message: "operators come in three families — they do math, they answer true or false, they combine checks — and the single equals sign is the one that stores instead of asking"
arc: hook → the three families → the equals trap → the two divisions → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 19 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-19-operators (prog-basics, part 19 of 22)

English master, portrait 1080x1920, target ~29-34s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/19-operators.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4 (G1 hook,
**G2b rows**, **G4 split**, G3 code chamber, G5 CTA) and § 7 (motion primitives). Durations below are
the estimates the voice run replaces with measured VO; the authored air (~1.0s per frame, 2.0s+ on F5)
is added back after `studio cues`, per bible-day2 § 12.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value or what printed, coral = an error the interpreter raised. **This part raises
no exception, so it ships with zero coral.** Every frame carries at least two § 7 primitives, and no
cut lands on the previous frame's layout: F2 wipes up into three stacked rows, F3 wipes in from the
left into a two-panel split, F4 wipes from the right into a single chamber, F5 drops down.

**Every frame that carries code also kills the ligatures.** `==`, `!=` and `//` fuse in JetBrains Mono
into single glyphs, which is invalid Python to a learner who types what they saw, so each frame's
stylesheet sets `font-variant-ligatures: none` plus `font-feature-settings: "liga" 0, "calt" 0,
"dlig" 0` (§ 14).

## The enumeration rule this part is built under

F2's three families are the part's **one allowed three-item list**, because the enumeration is the
subject (the Day 1 pb-02 precedent). Everywhere else the same information is carried by motion or by
chrome instead of by listing: `and, or, not` get three scale pulses on the `logical` chamber; the two
divisions get two sequential amber plates rather than a comparison table; the quiz gets one empty
dashed slot rather than a row of operators.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only and only one plate is lit at any instant; mint `#5AD6A0` marks values and printed output only;
muted `#9BA6B2` is chrome (kickers, badges, filenames, the type chips, the echo line). `--panel`
`#1F242C` chambers on the field with 3px `rgba(255,255,255,0.16)` hairlines — a chamber in the field
colour is invisible and passes both gates. Content lives between y = 230 and y = 1004; the caption
band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

## Frame 1 — The hook (G1)

- scene: type alone on the ground, three groups, nothing illustrated — the operator set is not shown yet, because the promise is that one of them lies. `One of these` arrives, then `operators`, then `is not what you think.` with the solid amber plate wiping behind the tail on the spoken word; a hairline rule settles under the answer.
- duration: 3.58s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the promise
- voiceover: "One of these operators is not what you think."
- sfx: none

## Frame 2 — The three families (G2b rows)

- scene: three chambers stacked at `--panel` on the field, each with its plain gloss beside it — `arithmetic | does math`, `comparison | gives true or false`, `logical | combines checks`. They arrive one per spoken family word on P9 count-tick (y 26 → 0), each gloss settling 0.2s after its row. On `and, or, not` the `logical` chamber runs three P7 scale pulses — no list appears. Kicker `three families of operators`.
- duration: 10.86s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-families.html
- type: mechanism
- beat: what each kind does
- voiceover: "Arithmetic operators do math. Comparison operators return true or false. Logical operators combine conditions: and, or, not."
- sfx: none

## Frame 3 — The equals trap (G4 split)

- scene: two `main.py` chambers, 456px each, 24px gutter rule drawn top-down between them, each with its own `PYTHON` chip and its own head label — `ASSIGNS` over `x = 5` / `print(x) # 5`, `COMPARES` over a muted echo `x = 5` and `print(x == 5) # True`. P3 type-on writes each line under its own caret; an amber plate wipes over `=` as "single equals sign" is said, retires to ink, then wipes over `==` on "double equals". Two mint chips land under the chambers with what each one printed: `5`, `True`.
- duration: 5.61s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-split.html
- type: mechanism
- beat: the one that is not what you think
- voiceover: "And watch out: a single equals sign assigns, a double equals compares."
- sfx: none

## Frame 4 — The two divisions (G3)

- scene: one chamber, `main.py` + `PYTHON`, two lines written under a caret — `print(7 // 2)   # 3` with a muted mono chip `int`, then `print(7 / 2)   # 3.5` with a muted mono chip `float`. Values in mint (they are printed values), type chips in muted on `--panel-2`. The plate moves from `//` to `/` as each is spoken; the terminal strip arrives last with both outputs, `3` then `3.5`.
- duration: 6.14s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof, and the surprise is the type
- voiceover: "Seven floor divided by two gives three. Seven over two gives three point five."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: `what's 7 % 3?` at 6.4cqw in a 176px band; below it the expression in mono `7 % 3 =` followed by an **empty dashed chamber with a dim mint caret blinking at 1s** — the ask as a slot waiting to be filled, never a list of choices, and never the answer. The `COMMENT IT` plate drops in on the verb, then the series line `PROGRAMMING BASICS · BASICS II · 19 · BEGINNER`. Holds alone; no exit push.
- duration: 4.33s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "What's 7% 3? Comment it."
- sfx: none

## Real durations

Measured 2026-10-28 by `studio voice` (Kokoro `af_heart`, printed line
`provider=kokoro voice=af_heart lang=en speed=0.93`) + `studio cues`, which also produced the per-word
onsets every emphasis time in the frame files cites. Air is 1.0s per frame and 2.0s on F5 (which loops
under the platform's chrome and carries no exit push), so each 0.5s crossfade sits inside silence and
no sentence spans a cut.

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 2.581 | 3.58 | 9 | 0s → 2.30s |
| F2 | 9.856 | 10.86 | 17 | 0s → 9.60s |
| F3 | 4.608 | 5.61 | 12 | 0s → 4.12s |
| F4 | 5.141 | 6.14 | 14 | 0s → 4.84s |
| F5 | 2.325 | 4.33 | 5 | 0s → 2.10s |
| **film** | **24.511 speech** | **30.52** | **57** | |

Cumulative starts: 0 / 3.58 / 14.44 / 20.05 / 26.19 → end 30.52.

**Runtime note:** the estimate table said ~24s and the film came in at **30.52s**, so no lever was
needed — F5 keeps its authored 2.0s pad and nothing was stretched to dodge a number. The tranche's
3.24 words/second planning figure is too fast for a script that carries long words: this part measured
**2.33 words/second** (57 words / 24.511s), because `Arithmetic`/`Comparison`/`Logical` are four to
five characters each and Kokoro pauses a full 0.6-0.8s at every sentence break inside F2. pb-21 hit the
same shape (60 words → 23.13s). The lean parts are not as short as the rate table predicts.

Word timings the frames are keyed to (frame-relative, from `audio_meta.json`):
F1 `not` 1.54 → plate sweep 1.56; F2 `Arithmetic` 0.00 / `Comparison` 2.30 / `Logical` 5.76 and the
three pulses on `and,` 7.88 / `or,` 8.82 / `not.` 9.26; F3 `single` 1.24 → `=` plate 1.30, `assigns,`
2.24 → left chip, `double` 3.08 → `==` plate 3.14, `compares.` 3.74 → right chip; F4 `floor` 0.32 →
`//` plate, `three.` 1.88 → `int` chip, `over` 3.12 → `/` plate, `five.` 4.26 → `float` chip, strip
4.90; F5 `What's` 0.00 → ask, `3?` 0.80 → empty slot, `Comment` 1.52 → plate, `it.` 1.84 → series line.
