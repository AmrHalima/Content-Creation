---
id: pb-02
order: 2
series: prog-basics
title: Data types: int, float, string, boolean
slug: data-types
project: videos/prog-basics-02-data-types/
difficulty: B
mechanic: Quiz
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 92
grammar: G1 G2 G4 G5
aspect: 1080x1920
captions: en
music: none
sfx: none
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed + 1 proposed wording tweak
---

# P02 · Data types: int, float, string, boolean · [B] · Quiz

**Message:** the type decides what an operation means. `+` on numbers adds; `+` on text glues.
**Second grammar carrier:** this is the part that proves **G4 (the split)** on 1080x1920. If the
two chambers do not read side-by-side at 45s, parts 06, 10 and 11 need re-planning.

## Final narration (approved copy)

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 HOOK | 0.0-6.0 | Why does five plus five give you fifty-five? | Dry, near-deadpan. The screen shows the quotes; the voice deliberately does not. |
| F2 CONCEPT | 6.0-15.5 | Because every value carries a type, and the type decides what the operation means. | "carries a type" is the keyword. One breath, no comma pause. |
| F3 CONCEPT | 15.5-27.0 | Four of them, every day. Int for whole numbers, float for decimals, str for text, bool for true or false. | The only enumeration in the series that is the subject itself. Even pace, no list-voice. |
| F4 EXAMPLE | 27.0-37.5 | Five plus five gives ten. Put them in quotes and plus stops adding. It glues. | "It glues" is two words, alone, and it is the punchline of the part. |
| F5 CTA | 37.5-45.0 | So: quote five, star three. What does Python give you? Comment it. | "star" for `*`, never "multiply". The answer is the quiz. |

**Spoken code:** `'5' + '5'` → "put them in quotes and plus stops adding". `'5' * 3` → "quote
five, star three". The voice never says "string literal".

## On-screen text and code treatment

**F1 (G1).** Light canvas. `Why does` then the real hook as **code**, not prose:
`'5' + '5'` in JetBrains Mono 700 at 11cqw with the **quote marks in teal** `#47B5BE` — the
quotes are the answer and they are on screen before the voice admits them. Below, in Inter 700:
`= '55'`. Ambient float as in P01.

**F2 (G2 box with a type tag).** One box, value `5` inside, plus a **second tag** on the chamber's
corner: `int`. The tag is what's new in this part's variant of the motif, and it is the visual
claim: a value and its type travel together. Keyword `type` in teal.

**F3 (G2, four boxes, staggered 0.10s).** Four small chambers in a row across the content box,
each with the corner tag and one value: `int 5` / `float 5.0` / `str 'five'` / `bool True`. The
tags in mono, the values in Inter 700. `True` is shown **capitalised** (PROPOSED, § Accuracy).

**F4 (G4 split).** Two chambers side by side, petrol, ≤3 lines each, same titlebar `main.py`:

```
5 + 5          '5' + '5'
10             '55'
```

Left chamber: `+` in teal on "stops adding". Right chamber: `+` in teal on "It glues", and the
two `'` quote pairs in teal throughout. Output lines in `#E8F6F7` on `#343434`. No coral: nothing
errors here, and coral means error in this series.

**F5 (G5).** Headline `'5' * 3` in mono at 14cqw, `*` in teal. Mechanic verb `COMMENT IT`. Badge
`PROGRAMMING BASICS · 02 · BEGINNER`.

## Measured durations (after `studio voice` + `studio cues`, part built)

| Frame | VO | Frame (VO + air) | Absolute window |
|---|---|---|---|
| F1 puzzle | 3.328 | 4.3 | 0 – 4.3 |
| F2 carries a type | 6.528 | 7.5 | 4.3 – 11.8 |
| F3 the four | 10.261 | 11.2 | 11.8 – 23.0 |
| F4 split | 7.211 | 8.2 | 23.0 – 31.2 |
| F5 quiz | 6.848 | 7.8 | 31.2 – 39.0 |
| **film** | **34.176 speech** | | **39.0s total, 76 words, 5 frames** |

G4 (the split) validated at 1080x1920: two 456px chambers with a 24px gutter, two lines each, read
cleanly in the snapshot at 30.2s, so parts 06, 10 and 11 keep the side-by-side.

Two build-time corrections to the treatment above, both found by reading pixels: every code
fragment uses Python's **single** quotes (`'5'`, `'55'`), matching the brief and the rest of the
batch, and F3's foot line reads `the value brings the tag / so + means something different` — the
drafted version was a contrast-reveal, which bible § 8 rations to a single hook in the series.

## Cover / title card

`'5' + '5' = '55'` (the code **is** the cover: a learner who can read it must stop and scroll
back) + badge `PROGRAMMING BASICS 02` + `BEGINNER`. Mono on petrol, quotes in `#7BD3D8`.

## Post copy

**Feed caption:**

    '5' + '5' gives '55', and that is not a bug. The type decides what the operation means.
    Quiz at the end. Don't spoil it in the replies.
    Part 02 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `Every value knows what type it is. That's why 5 + 5 is 10 and '5' + '5' is '55'. What is '5' * 3? #python`
**LinkedIn:** lead with the interview angle: type systems are where "obvious" code stops being
obvious, and this is the smallest possible example. `#python` `#programming` `#softwareengineering`

**Pinned comment:** `Quiz answer goes up in 24h.` Reveal: `555. In Python, a string times an int repeats the string. '5' * 3 → '555'. (And 5 * '5' works too: '55555'.)`

## Accuracy

Verified on Python 3.13.15: `5 + 5` → `10`; `'5' + '5'` → `'55'`; **the CTA's own answer
`'5' * 3` → `'555'`**, which is what makes this a fair quiz. Bonus, held in reserve: `5 * '5'`
→ `'55555'`; `'5' + 5` → `TypeError: can only concatenate str (not "int") to str`.

**PROPOSED (touches the user's wording, needs approval at gate 2):**
1. Screen shows Python's own names `int / float / str / bool`, while the voice says "integer,
   float, string, boolean". The title stays as briefed. Reason: a learner who searches will find
   `bool`, and `type(True).__name__` really is `bool`.
2. Show `True` capitalised. Python spells the literals `True`/`False`; lowercase `true` is a
   `NameError` and the piece otherwise invites the viewer to type it.
