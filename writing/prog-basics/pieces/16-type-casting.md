---
id: pb-16
order: 5
series: prog-basics
tranche: day-2 (BASICS II)
title: Type casting and coercion
slug: type-casting
project: videos/prog-basics-16-type-casting/
difficulty: B
mechanic: Debate
mode: code-card
bilingual: true                   # the only part in the tranche showing two languages — frame-day2 § 13 governs it
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 62
target_length: ~29-34s            # measured, not modelled (frame-day2 § 12); leaner parts report, never pad
ceiling: 54s
grammar: G1 G2 G4 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-10-switch/compositions/frames/04-two-languages.html (the two labelled titlebars —
  BATCH-day2 calls it "04-split.html"; that is not its filename on disk) + pb-10/05-cta.html (the
  Debate ring) + pb-11/01-hook.html (G1) and pb-21/02-row.html (the P2 drop-in)
---

# P16 · Type casting and coercion · [B] · Debate · code card

**Message:** casting is you converting a type on purpose; coercion is the language doing it silently —
and the two languages in this part disagree about the same characters, so every screen says which one
it is.

This is the tranche's only bilingual part, and the user's own example mixes the two languages:
`int('5') + 3` is Python, `'5' + 3` → `'53'` is JavaScript. Executed on this machine, Python's
`'5' + 3` raises `TypeError: can only concatenate str (not "int") to str`. **An unlabelled chamber
would teach a Python learner something false about Python.** `frame-day2.md` § 13 is therefore this
part's central rule, not a footnote: every chamber carries its own titlebar filename AND language chip
(`main.py` / `PYTHON`, `main.js` / `JAVASCRIPT`). The precedent is pb-10, the only other part that
showed a second language, and pb-10's geometry is cloned here.

## Final narration

Estimated at **3.24 words/second** (`af_heart` @ 0.93 — the rate the carriers measured, not the 2.4 the
Day 2 piece files were written against; `frame-day2.md` § 8/§ 12). `studio voice` measures and syncs,
`studio cues` places the words. Write measured durations into `STORYBOARD.md`.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 5.9s | In JavaScript, '5' + 3 is '53', but '5' - 3 is 2. Yes, really. | Even, no punch. The two answers are the joke, so the voice must not lean on them. `Yes, really.` lands flat, alone, a beat after the 2. |
| F2 | 3.4s | Casting is you converting a type on purpose, like int('5'). | `on purpose` is the whole distinction — say it slightly slower. `int('5')` is read as a name, not spelled. |
| F3 | 4.9s | Coercion is the language doing it silently. Explicit is safer, because coercion rules can surprise you. | First sentence is the definition, quiet on `silently`. Second is the warning; `surprise` lands with the two answers already on screen. |
| F4 | 5.6s | int('5') + 3 gives 8, while '5' + 3 in JavaScript gives '53'. | Read the values as values. Small stop before `while`, because that is where the language changes. |
| F5 | 2.5s | Should languages coerce types automatically? Yes or no. | Verbatim CTA. Ask it, do not answer it. No rise on `no`. |

**Words:** 62 written tokens. The two code-bearing lines run longer on the ear than the token count
suggests, because `'5' + 3` is spoken as "five plus three" and `'53'` as "fifty three" — F1 is ~19
spoken words against 15 written, F4 ~18 against 13. That is the reason this part is not as short as
its word count says.

**Spoken code:** `int('5') + 3` → "int five plus three gives eight". `'5' + 3` → "five plus three in
JavaScript gives fifty three". `'5' - 3` → "five minus three is two". The voice never says quotes,
parentheses or brackets. `float('5')`, `'apple' + 3` and `true + 1` are executed in `## Accuracy` and
stay off the voice entirely.

**Re-cut applied:** none. `CORRECTIONS-day2.md` § A lists part 16's explain lines as "untouched
because they already pass" — every one is inside the ≤14-word / ≤2-clause law, and the F3 sentence's
`because` clause is the reason the first clause is true, so splitting it would cost the gloss. Hook,
explain lines, example and CTA mechanic all ship as the user wrote them.

## On-screen text and code treatment

Every fragment below is executed output from `## Accuracy`. Nothing is recalled.

**F1 (G1).** Type alone on `--ground`. Three groups, each ≤7 words and ≤14 characters per group:
`'5' + 3` `is` `'53'` then `'5' - 3` `is` `2`, then `yes, really.` in `--muted`. The results `'53'` and
`2` are `--value` mint (§ 1: a value is what printed); the cover plate is the solid `--say` amber behind
`'53'`, which is the sharpest thing in the hook. **A mono language chip `JAVASCRIPT` in `--say` on a 2px
`--say` border sits above the first line**, because both lines are JavaScript claims and in Python the
first one raises (`frame-day2.md` § 13). Kicker `PROGRAMMING BASICS · BASICS II · 16`, badge `BEGINNER`.
No illustration: G1 keeps the frame un-drawn.

**F2 (G2, casting).** The box doing the work, and the series' own assignment idiom: **a value entering a
different container on purpose.** A 64px `--panel-2` titlebar reads `main.py` in mono `--muted` with the
chip `PYTHON` on its right, so the syntax `int('5')` belongs to a named language. Under it: a left
chamber tabbed `str` holding `'5'`, a right chamber tabbed `int` holding `5`, and between them an arrow
tagged `int('5')`. P2 `drop-in`: `'5'` falls out of the left chamber, travels the arrow and lands as `5`
in the right one; the receiving chamber squash-settles and its border flashes mint. The tag arrives first
(P8 `arrow-run` draws under it) because **the conversion is asked for before it happens.** Amber say-plate
on `Casting` (0.0s) then on `on purpose`, one plate at a time. Annotation: `casting = you write the
conversion`.

**F3 (G2, coercion).** The same two chambers and the same arrow, **with nothing on it**: the titlebar now
reads `main.js` with the chip `JAVASCRIPT`, the arrow draws itself at the moment the voice says
`silently`, untagged, and `'5'` crosses as `5` (tabs `string` → `number`, both executed as `typeof`).
Under it one line and one terminal strip: `'5' - 3` → `2` (mint). The point is the missing tag — the
viewer sees a conversion nobody asked for. Amber plate on `Coercion`, then on `Explicit`. Annotation:
`coercion = the language converts it, unasked`.

**F4 (G4 split, the example).** pb-10's `04-two-languages.html` geometry, retuned to v2.1: two chambers,
456px wide, 24px gutter, each with **its own titlebar and chip** — left `main.py` / `PYTHON`, right
`main.js` / `JAVASCRIPT`. Chambers are `--panel` `#1F242C` on the `#15181D` field with 3px
`rgba(255,255,255,0.16)` hairlines (pb-10's clone still carries the v1 `rgba(255,255,255,0.05)` field
fill; that invisible-chamber bug is fixed here, not copied). Two lines per side, inside the ≤3 law:
```
main.py / PYTHON        int('5') + 3
                        out ▸ 8

main.js / JAVASCRIPT    '5' + 3
                        out ▸ '53'
```
P3 `type-on` under a caret, one line per spoken clause (`int five plus three` → the Python line, then
`gives eight` → its strip; `five plus three in JavaScript` → the JS line, then `gives fifty three` →
its strip). The two answers are mint; the Python chamber's `8` and the JS chamber's `'53'` are the part's
whole argument in two numbers. Annotations under each panel: `you wrote the conversion` / `the language
chose`, and one bar across the pair: `ask for it, or it guesses`.

**F5 (G5, the Debate).** Headline `coerce types silently?` — 22 characters at 6.4cqw in the 176px box
(the Day 1 wrap rule), four words, the user's question restated without changing its mechanic. Two chips
`YES` / `NO` in `--panel` `#1F242C` with 3px `--line`. The mechanic verb plate is the solid `--say`
`PICK A SIDE`. Badge line `PROGRAMMING BASICS · BASICS II · 16 · BEGINNER` and the sub line
`two languages, two rules`. **The amber ring travels YES → NO → released and comes to rest on NEITHER**
— pb-10's shipped finding, and it matters more here than anywhere: answering the debate on screen would
kill the debate, and "which language should guess" is the argument. The ring keeps travelling while the
card loops under the platform's chrome.

**Coral:** none, in this film, on any frame. `--err` is reserved for a message an interpreter raised on
this machine, and the two it did raise here (Python's `TypeError` on `'5' + 3`, `ValueError` on
`int('7.5')`) are held for the pinned comment rather than the screen: `frame-day2.md` § 6 and
`WAVE2-PACKET.md` § 6 name part 16 as a zero-coral part, and a third chamber line for the Python side
would crowd the split. The contrast is carried by the labels and by `8` against `'53'`, not by colour.

## Cover / title card

`'5' + 3 is '53'` (the hook cut to 5 words, the symbols read as code) + `JAVASCRIPT` chip + badge
`PROGRAMMING BASICS · BASICS II · 16` + `BEGINNER`. Amber plate on `'53'`. The label is on the cover,
not just inside the film: a viewer deciding whether to watch from the thumbnail should not learn a false
Python rule from a still.

## Post copy

**Feed caption:**

    In JavaScript, '5' + 3 is '53', but '5' - 3 is 2. Yes, really.
    Casting is you converting a type on purpose, like int('5'). Coercion is the language doing it silently.
    In Python, int('5') + 3 gives 8. In JavaScript, '5' + 3 gives '53'. Same two characters, two answers.
    Should languages coerce types automatically? Yes or no.

**Hashtags:** `#python` `#javascript` `#learntocode` `#codingbasics` `#beginners`

**X:** `'5' + 3` is `'53'` in JavaScript. In Python it is `TypeError: can only concatenate str (not "int") to
str`. Same characters, opposite rules, and a beginner who sees one without a label types it into the
other. Every snippet says which language it is. Should languages coerce types automatically? #python
#javascript

**LinkedIn:** the review comment that never ends: `if (x == 5)` against `if (x === 5)`. Executed on node
v24.15.0, `'5' == 5` is `true` and `'5' === 5` is `false`, and both are correct JavaScript. Part 16 draws
the difference as two containers instead of one argument: conversion you wrote down, versus conversion the
language chose for you. Then labels each screen with its own language, because Python raises on the line
JavaScript prints. `#python` `#javascript` `#learntocode`

**Pinned comment:** `Both answers on screen are executed here. Python 3.13.15: int('5') + 3 → 8,
float('5') + 3 → 8.0, str(5) + '3' → '53', '5' + 3 → TypeError: can only concatenate str (not "int") to
str. node v24.15.0: '5' + 3 → '53', '5' - 3 → 2, '5' * 3 → 15, true + 1 → 2. Two more that decide the
argument for us: int(5.9) → 5 while round(5.9) → 6 (int truncates toward zero, it does not round), and
int('7.5') → ValueError: invalid literal for int() with base 10: '7.5' — casting refuses to guess. An
error you can read beats a value that quietly changed. So: should languages coerce types automatically?`

## Accuracy

Executed 2026-10-28 on **Python 3.13.15** and **node v24.15.0** (`.tmp/day2_accuracy.py`,
`.tmp/day2_accuracy.js`), and re-executed for this file on the same two binaries the same day:

- **JavaScript:** `'5' + 3` → `"53"`, `'5' - 3` → `2`, `'5' * 3` → `15`, `'apple' + 3` → `"apple3"`,
  `true + 1` → `2`, `[] + 1` → `"1"`, `'5' == 5` → `true`, `'5' === 5` → `false`. The hook is literally
  true, and the loose/strict pair is the debate's evidence.
- **Python:** `int('5') + 3` → `8`, `float('5') + 3` → `8.0`, `str(5) + '3'` → `'53'`, `int(5.9)` → `5`
  (truncates toward zero) against `round(5.9)` → `6`, `int('7.5')` → `ValueError: invalid literal for
  int() with base 10: '7.5'`.
- **Python refuses the hook's line:** `'5' + 3` → `TypeError: can only concatenate str (not "int") to
  str`; `'5' - 3` → `TypeError: unsupported operand type(s) for -: 'str' and 'int'`. Both quoted exactly,
  both held off screen (see the coral note in `## On-screen text and code treatment`).
- **Type names on F2/F3's tabs**, because the tabs name the containers: `type('5').__name__` → `str`,
  `type(int('5')).__name__` → `int` (Python), `typeof '5'` → `string`, `typeof 5` → `number` (JS). Run
  for this part, not in the Day 2 ledger; reported in the build notes.
- `series-bible-day2.md` § 4 rows 16 confirmed unchanged. The bible's own labelling row ("Part 16 must be
  two labelled chambers (`main.py` / `main.js`)") is what this part ships, and `CORRECTIONS-day2.md` § B
  records the same constraint.

## Gate state

Built to the **pre-render gate only**: voice @0.93, cues, 5 frames, assemble, verify, check, snapshot
read. **No render, no MP4, no publish, no schedule, no Arabic pass, no BGM, no SFX, no network asset, no
`preview --background`** (parallel runs use `snapshot --at`, bible-day2 § 6 rule 4).

- **Audio:** `studio voice` is always run with `--speed 0.93`; the dry run must print `speed=0.93` before
  anything is generated (WAVE2-PACKET § 1 — the house lookup misses `voice.voices.en` and falls to 0.74).
  `audio_meta.json` must hold 5 voice lines, one per frame.
- **Runtime:** 62 words is the tranche's leanest script. If the measured film lands **under 30s**, grow
  F5's pad first (air is shape), report the number, and add no words (bible-day2 § 0.2,
  `frame-day2.md` § 12).
- **To snapshot-read first:** F4's two language chips (are both titlebars readable at phone size, is
  either chamber field-coloured?), the `8` against `'53'` contrast, and F5's resting state at the tail
  (the ring must be on neither chip).
- Parts of this file that are decisions rather than copy: zero coral, the equality trap held for the
  pinned comment, the JS labels on F1 and F3. All three are in `BRIEF.md`.
