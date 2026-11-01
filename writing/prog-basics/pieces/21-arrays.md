---
id: pb-21
order: 10
series: prog-basics
tranche: day-2 (BASICS II)
title: Arrays
slug: arrays
project: videos/prog-basics-21-arrays/
difficulty: B
mechanic: Save
mode: code-card
carrier: true                     # proves G7's shift half for the tranche
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 71
target_length: ~31s               # leanest part in the tranche; see Gate state
ceiling: 54s
grammar: G1 G2b G7-shift G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-03-strings-vs-chars row of boxes (G2b at 0.5 scale, same geometry)
---

# P21 · Arrays · [B] · Save · code card

**Message:** one name for many values, laid out in order, so reading any position is a jump — and the
price for that jump is paid when you insert in the middle.

Second carrier. It proves **G7's `shift`** and, with 22, the tranche's central contrast: a row of
seats versus a treasure hunt. 21 must be built before 22's array-side beats can clone it.

The box row here is pb-03's row of boxes. Same geometry, one notch bigger, and the index strip that
part 03 introduced is what makes "starts at zero" a callback rather than a new fact.

## Final narration

Estimated at 2.4 words/second (`af_heart` @ 0.93); `studio voice` measures and syncs, `studio cues`
places the words. Write measured durations into `STORYBOARD.md`.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.9s | Need 100 variables? You need one array. | The question is the setup, the answer is the whole part. Land `one`. |
| F2 | 8.3s | An array holds many values in order, side by side in memory. Each has an index that starts at zero. | Even, no hurry — the row is arriving under the first sentence and the strip under the second. |
| F3 | 5.8s | Reading by index is instant. Inserting in the middle means shifting everything after it. | "instant" is a jump, said quickly. The second sentence slows down because the boxes are moving. |
| F4 | 4.6s | Nums is ten, twenty, thirty. Nums at index one gives twenty. | Read the values as values, not as a list. `twenty` is the mint number on screen. |
| F5 | 3.8s | Save this. Quick one: what's nums[-1] in Python? | Verbatim CTA. `nums[-1]` spoken as "nums at minus one". |

**Spoken code:** `nums = [10, 20, 30]` → "nums is ten, twenty, thirty". `nums[1]` → "nums at index
one". `nums[-1]` → "nums at minus one". `insert(1, 99)` → never spoken; it is what the boxes do.

**Re-cut applied** (`CORRECTIONS-day2.md` § A): "Reading by index is instant, but inserting in the
middle means shifting everything after it." split at the `but` into two beats of 5 and 9 words.

## On-screen text and code treatment

**F1 (G1).** Type alone, `--ground`. Two groups: `need 100 variables?` then `you need one array` with
**one array** on the solid `--say` plate. Nothing else on the frame — the 100 variables are not drawn,
because drawing them is a different lesson and it would eat the frame.
**F2 (G2b row).** Five chambers in a row, pb-03's geometry at 0.5 scale: `20` `40` `60` `80` `100` in
`--value` mint, arriving left-to-right on P2 `drop-in`, one per spoken value, then the **index strip**
beneath them in mono `--muted` — `0` `1` `2` `3` `4` arriving on P9 `count-tick` with the zero first,
each digit landing under its box. The strip is 2.2cqw and carries `data-layout-ignore` (below the
§ 13 type floor on purpose: it is chrome for the rewind crowd). A kicker above the row reads
`one name: scores` in mono `--muted` — "many values, one name" is the sentence the hook already made.
**F3 (G7-shift).** Same five boxes, now doing two things in one frame:
```
jump   : a marker at the strip's `3` leaps straight to box 3, which lights --say for 0.3s. No box
         moves. Tag above: READS 1 MOVE (mono --muted). This is what "instant" means physically.
shift  : a new box `70` drops in at index 1 (P2), and boxes 1,2,3,4 translate RIGHT one cell width in
         a deterministic stagger — 100% authored positions, no layout tween, no Math.random stagger.
         Boxes that moved get a 3px --line-faint trail behind them. Tag: MOVED 4.
```
`MOVED 4` is counted, not decorative: four boxes sit at index 1 or later in a five-box row, so
inserting at 1 moves four. Index labels re-settle under the new arrangement. The contrast of the two
tags — `READS 1 MOVE` against `MOVED 4` — is the whole part, and it is shown without once saying
"O of n".
**F4 (G3).** `main.py`, chip `PYTHON`, two lines plus the terminal strip:
```
nums = [10, 20, 30]
print(nums[1])     # 20
```
P3 `type-on` under the caret; `20` on the terminal strip in `--value` mint (executed: `nums[1]` →
`20`, and `nums[0]` → `10`). No coral anywhere in this part — nothing raises an error.
**F5 (G5).** Headline `what is nums[-1]?` at 6.4cqw in a 176px box (the ≤24-char wrap rule from Day
1), mechanic verb plate `SAVE THIS` in solid `--say`, badge `PROGRAMMING BASICS · BASICS II · 21 ·
BEGINNER`. The answer is **not** on the frame; the row of five boxes appears dimmed at 0.42 behind the
headline with `-1` under the last one and its index digit removed, which is the hint and not the
answer.

## Cover / title card

`one array, not 100 variables` (the hook re-cut for a cover, 6 words) + badge
`PROGRAMMING BASICS · BASICS II · 21` + `BEGINNER`. Amber plate on `one array`.

## Post copy

**Feed caption:**

    Need 100 variables? You need one array.
    An array holds many values in order, side by side, and each one has an index that starts at zero.
    Reading a position is a jump. Inserting in the middle means shifting everything after it.
    What is nums[-1]?

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `nums[3] is a jump to the fourth box and nothing else moves. insert at index 1 and every box after it shifts over. that is the whole trade, and it is why part 22 exists. what is nums[-1] in python? #python`
**LinkedIn:** the interview version of this question is "why is inserting into the middle of an array
expensive", and the answer is a row of boxes moving one cell; `#python` `#programming`
`#learntocode`

**Pinned comment:** `nums[-1] is 30 — Python counts from the end when the index is negative, so -1 is the last box and not an error. The one to check next is nums[3] on a three-item array: that one does raise IndexError: list index out of range. Part 22 is the alternative, and it pays in the other direction.`

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`.tmp/day2_accuracy.py`): `nums = [10, 20, 30]` → `nums[0]`
= `10`, `nums[1]` = `20`, `nums[-1]` = `30`, `nums.index(30)` = `2`, `len(nums)` = `3`, and
`insert(1, 99)` → `[10, 99, 20, 30]` — the shifted tail is exactly the two boxes after the slot, which
is what F3's stagger shows at five boxes (`MOVED 4`). `nums[3]` → `IndexError: list index out of
range`, held for the pinned comment rather than the frame.

**One screen-text constraint, not a voice edit** (`CORRECTIONS-day2.md` § B): "side by side in
memory" is true of an array as a data structure, and what C and Java do; a Python list stores
*references* side by side, not the `int` objects. The voice says what the user wrote about arrays, and
**nothing on screen claims Python's internal layout** — the row is drawn as values because the frame
teaches the structure, and the chamber shows the values because they are the executed output.

## Gate state

Carrier. `MOVED 4` and `READS 1 MOVE` are the beats to snapshot-read first: they are the part's only
claim, and if the stagger lands two cells instead of one it reads as chaos at phone size.

**Runtime watch:** this is the leanest part of the tranche (~71 words → est. 31s with air). If the
measured VO lands the film **under 30s, report it and stop** — do not pad (bible-day2 § 0.2, the
user's own choice). The correct fix at that length is the frame shape, not more words.
