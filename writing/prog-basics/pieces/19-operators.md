---
id: pb-19
order: 8
series: prog-basics
tranche: day-2 (BASICS II)
title: Operators: arithmetic, logical, comparison
slug: operators
project: videos/prog-basics-19-operators/
difficulty: B
mechanic: Quiz
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 58
target_length: ~29-34s
ceiling: 54s
grammar: G1 G2b G4 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-21-arrays (G1 hook, G2b row + count-tick, G3 chamber, G5 CTA — the v2.1 atoms);
  pb-11-for-vs-while/compositions/frames/04-split.html (the v2 G4 split: two `cd-root` panels,
  own titlebars, 24px gutter)
---

# P19 · Operators · [B] · Quiz · code card

**Message:** operators come in three families — they do math, they answer true or false, they combine
checks — and the one that trips people up is the single equals sign, which stores instead of asking.

Clone, not design. Every atom here already shipped: F2 is pb-21's G2b row with `count-tick` arrivals,
F3 is pb-11's v2 split geometry, F4 is the G3 chamber with the P3 caret, F5 is the G5 CTA shell. The
tranche map (`frame-day2.md` § 11) lists 19's clone source as "pb-02's `04-split` lineage retuned v2";
pb-11's `04-split.html` *is* that retune, so this part clones the retuned version rather than the v1
original.

**The one allowed enumeration.** F2 names three families because the enumeration *is* the subject —
the Day 1 precedent is pb-02, where four types were the topic and the rest of that part stopped
listing. So nowhere else in this part may enumerate: the voice's `and, or, not` gets **no on-screen
list** (the `logical` chamber pulses three times instead, one pulse per spoken word), and F5 shows an
empty answer slot rather than a row of operator candidates.

## Final narration

Estimates below use the measured **3.24 words/second at 0.93** (`frame-day2.md` § 8/§ 12), not the
2.4 the piece files were cut with. `studio voice` measures and syncs; `studio cues` places the words;
measured onsets go into `STORYBOARD.md` and every emphasis time in the frame files cites them.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.8s | One of these operators is not what you think. | Flat, a little wry. No alarm — the reveal is two frames away. Land the plate on `not what you think`. |
| F2 | 5.3s | Arithmetic operators do math. Comparison operators return true or false. Logical operators combine conditions: and, or, not. | Three beats, one per family, each row arriving on its own word. `true or false` is said plainly, not as a question. The last three words speed up slightly — they are named, not explained. |
| F3 | 3.7s | And watch out: a single equals sign assigns, a double equals compares. | The `watch out` is the hook's payoff, so give it its own breath. `assigns` and `compares` land on the two plates. |
| F4 | 4.3s | Seven floor divided by two gives three. Seven over two gives three point five. | Two beats, deliberately parallel — the only difference the ear should catch is `floor`. Say `three point five` as a value, not as two numbers. |
| F5 | 2.4s | What's 7 % 3? Comment it. | Verbatim CTA. `%` is read as "mod" by most learners; the voice reads what is written and the screen carries the symbol. |

**Spoken code:** `x = 5` → "a single equals sign assigns" (F3 names the shape, the chamber shows the
line). `x == 5` → "a double equals compares". `7 // 2` → "seven floor divided by two". `7 / 2` →
"seven over two". `7 % 3` → verbatim in the CTA. The voice never says brackets, colons or
indentation, and never says the answer to the quiz.

**Re-cut applied:** none. Parts 12, 13, 15, 16 and **19** are the five whose explain lines already
pass the ≤14-word / ≤2-clause law (`CORRECTIONS-day2.md` § A, "untouched because they already pass"),
so all four user lines ship word-for-word. The only editorial act here is *distribution*: the explain
block's three families go to F2 and its `watch out` clause goes to F3; the example's `x = 5` versus
`x == 5` is what F3 draws, and `7 // 2` versus `7 / 2` is what F4 draws. No wording changed.

## On-screen text and code treatment

**F1 (G1).** Type alone over the ground, three groups: `One of these operators` / `is not` /
`what you think.` with the solid `--say` plate behind **not** (the knife word of the hook, swept
inside the first second of its own utterance — measured onset 1.54s, `frame-day2.md` § 6).
Badge `PROGRAMMING BASICS · BASICS II · 19` + `BEGINNER`.
Nothing illustrated — no operator glyphs appear yet, because the hook's promise is that one of them
lies, and showing the set first would spend F2.

**F2 (G2b — three rows, the part's one allowed list).** Kicker `three families of operators`. Three
chambers stacked (420x120 at `--panel` `#1F242C`, 3px `rgba(255,255,255,0.16)`, radius 22, G2 shadow,
left 72), each with its plain gloss beside it in the annotation ramp:

```
arithmetic   does math
comparison   gives true or false
logical      combines checks
```

Family names are Space Grotesk 700 in `--ink` (they are spoken words, not values, so not mint; not
code, so not mono). Glosses carry the key word in bold ink. Each row arrives on **P9 `count-tick`**
(`y: 26 → 0`, one per spoken family word) and its gloss settles 0.2s behind it. On `and, or, not` the
`logical` chamber runs **three P7 scale pulses** (1 → 1.06, 0.16s apart, no colour change) — the three
operators are heard and counted, never listed. One amber element on this frame at most, and the plate
from F1 is already gone.

**F3 (G4 split — the `=` against `==`).** pb-11's v2 idiom verbatim: two `cd-root` chambers, 456px
wide at left 72 and left 552, 24px gutter rule drawn top-down (P4), each with its own `--panel-2`
titlebar (`main.py` + `PYTHON` chip) and its own head label:

```
ASSIGNS                    compares
x = 5                      x = 5          (muted: the same line, already run)
print(x)         # 5       print(x == 5)  # True
               [ 5 ]                              [ True ]        <- mint chips
                      what it prints              (muted mono)
```

Two lines per chamber, so side-by-side is legal (`frame-day2.md` § 4: G4 is each ≤3 lines). The amber
say-plate wipes over `=` in the left chamber on "single equals sign", retires, then wipes over `==` in
the right on "double equals" — never two plates lit at once. Both chambers are one runnable program;
the muted echo line is why the right-hand `True` is honest rather than invented.

**F4 (G3 — the real surprise is that `/` changed the type).** One chamber, `main.py` + `PYTHON`, two
lines under a caret (P3 type-on), plus a terminal strip:

```
print(7 // 2)   # 3      [int]
print(7 / 2)    # 3.5    [float]
>>>             3   3.5
```

`3` and `3.5` in `--value` mint (comment values are printed values, executed); `int` and `float` as
small mono chips in `--muted` on `--panel-2` with a 2px `--line` border — chrome, not a lesson in
colour, which is why they are not mint. The `//` token takes the amber plate on "floor divided",
retires to ink, then `/` takes it on "over". The strip lands last with both printed values, so the
frame ends on "it runs, here is what came out".

**F5 (G5 — Quiz).** Headline `what's 7 % 3?` at 6.4cqw in a 176px band (13 chars, inside the ≤24-char
wrap rule). Below it the expression in mono — `7 % 3 =` — followed by an **empty dashed `--line` slot
with a dim mint caret blinking at 1s** (G2's "waiting to be filled" state), which is the whole ask made
physical. The answer `1` is **not on the frame and not in the voice** — it lives in the pinned comment.
Mechanic verb plate `COMMENT IT` in solid `--say` with `--say-ink` text, then the series line
`PROGRAMMING BASICS · BASICS II · 19 · BEGINNER`. No second plate, no operator row, no hint chip that
names the family.

**Zero coral in this part.** Nothing here raises an exception (`frame-day2.md` § 6 colour law; the
tranche list puts 19 in the no-coral nine). The `!=` / `==` / `//` glyphs are the reason the ligature
guard is mandatory: every frame carrying code sets `font-variant-ligatures: none` plus
`font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`, or JetBrains Mono fuses `==` into a single
glyph and teaches a symbol the learner cannot type.

## Cover / title card

F1 is the cover: `one of these operators / is not / what you think` with the amber plate on **not**,
badge `PROGRAMMING BASICS · BASICS II · 19 · BEGINNER`. Ink on `--ground`, no code on the cover frame
(the set is not revealed until F2).

## Post copy

**Feed caption:**

    One of these operators is not what you think.
    Arithmetic operators do math. Comparison operators return true or false. Logical operators combine conditions.
    A single equals sign assigns. A double equals compares.
    And 7 // 2 gives 3 while 7 / 2 gives 3.5 — that one changed the type, not just the number.
    What's 7 % 3?

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `one equals sign stores a value, two of them ask a question, and the learner who types the wrong one gets a syntax error three files later. 7 // 2 is 3 and it is an int. 7 / 2 is 3.5 and it is a float. what's 7 % 3? #python`
**LinkedIn:** the bug report that ends in "the developer wrote `=` where they meant `==`" is the most
common one-line defect in first-year code, and Python will not warn you when the assignment is legal;
`#python` `#programming` `#learntocode`

**Pinned comment:** `7 % 3 is 1 — % gives the remainder left after 7 // 2, and 2 fits into 7 three
times with 1 left over. The one people guess wrong on is 7 / 2: that is 3.5, and it is a float, not a
truncated 3. Next part is short-circuit evaluation, which is what `and` and `or` actually do.`

**Reply thread — hold it, do not post it unprompted** (not on screen, not in the VO): someone will
write `5 > 3 == True` and expect `True`. Executed on Python 3.13.15 it is **`False`**, because Python
chains it as `(5 > 3) and (3 == True)` and `3 == True` is `False`. Answer with the chain, not with a
"gotcha". The same file also holds `True and False` → `False` and `not 0` → `True` if the thread turns
to logical operators.

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`series-bible-day2.md` § 4, `.tmp/day2_accuracy.py`) and
re-executed for this build as `.tmp/pb19_accuracy.py` (same interpreter, all six on-screen fragments):
`x = 5` then `print(x)` → `5` (`int`); `print(x == 5)` → `True` (`bool`); `print(7 // 2)` → `3`
(`int`); `print(7 / 2)` → `3.5` (`float`); the CTA `7 % 3` → `1`, held off screen and in the pinned
comment; `True and False` → `False`; `not 0` → `True`; `5 > 3 == True` → `False` (chains as
`(5 > 3) and (3 == True)`). No fragment on screen was recalled from memory and no new fact was added,
so nothing needed a claim the ledger does not carry.

**Screen-text constraint:** the gloss `gives true or false` is lowercase prose about what a comparison
returns; the executed objects are `True`/`False`. The chamber prints `True` in its exact capitalisation
(F3), so a learner who types what they saw types valid Python. `int` and `float` appear as executed
type names only, never as a defined term — the voice does not say "type", it says the two numbers, and
the chips are what make the difference visible.

## Gate state

Built to the pre-render gate only: voice @ 0.93, cues, 5 frames, assemble, verify, check, snapshot
read. **No render, no MP4, no publish, no `preview --background`, no BGM, no SFX, no network assets.**

Snapshot-read first: (1) the three F2 rows and their glosses — the gloss lane must not collide with
the chamber column; (2) F3's `=` against `==` at the plate moments, and whether either fused into a
ligature; (3) F4's `int`/`float` chips legible at 28px+ or carrying `data-layout-ignore`; (4) that
F5's slot is empty (the answer must not be recoverable from a thumbnail).

**Measured runtime: 30.52s** (24.511s of speech: F1 2.581 / F2 9.856 / F3 4.608 / F4 5.141 / F5 2.325,
plus 1.0s authored air per frame and 2.0s on F5). Above the tranche's 30s floor, so F5's pad was not
grown and **no words were added**. Cumulative starts 0 / 3.58 / 14.44 / 20.05 / 26.19. The 3.24
words/second planning rate is too fast for this script — it measured **2.33 w/s**, because
`Arithmetic`/`Comparison`/`Logical` are long words and Kokoro leaves 0.6-0.8s at every sentence break
inside F2 (pb-21 measured 2.6 w/s the same way).

**What the snapshots showed:** the three F2 rows arrive one per family word with their glosses beside
them and nothing else enumerates (at 12.9s the `logical` chamber is mid-pulse on `not.`); F3's left
plate sits on a single `=` and the right on a two-glyph `==`, **neither fused**, and the left plate is
retired before the right lights; F4 carries `# 3 [int]` and `# 3.5 [float]` with `//` and `/`
unligated and the strip `>>> 3   3.5`; F5 holds alone with an empty dashed slot and **no `1` anywhere
in the frame**. Platform zone (1344-1920) max luma 47; no ink below y 1004 outside the caption band.

**Two traps this part paid for, for the rest of the tranche:**
1. `studio cues`'s tokenizer (`norm()`) strips everything that is not a letter, digit, apostrophe or
   hyphen, so a narration line containing `%`, `//`, `==` or `->` **as its own token loses it from the
   caption lane** — the CTA caption would have read `What's 7 3?`. Gluing the symbol to a neighbour
   (`7%`) survives; raw faster-whisper hears the word fine, so this is the aligner, not the audio.
   Part 13's narration says `n % 2 == 0` and is exposed the same way.
2. The plate-behind-text idiom fails contrast if the token darkens before the plate has covered it
   (`check` scored 1.04:1 and 1.28:1 here). Complete the wipe, *then* flip to `--say-ink`.

Gates observed at the end of the run: `studio verify` **0 high / 0 medium** across 7 html files;
`npm run check` (hyperframes@0.8.208) **`Check passed`** — Lint 0/0, Runtime 0 errors + 5
`clip_media_fit` warnings (the authored air), Layout 0 issues across 9 samples, Motion 0/0, **Contrast
29/29 WCAG AA**, Craft 0/0, Audio 0/0; 36 snapshots read. One annotation line was cut for holding
0.86s under its `line_unread` floor; the `int`/`float` chips carry that claim. All deviations,
including the `7%` caption fix and the voice `--speed 0.93` flag, are recorded in
`videos/prog-basics-19-operators/BRIEF.md`.
