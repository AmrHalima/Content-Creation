---
id: pb-03
order: 3
series: prog-basics
title: Strings vs. characters
slug: strings-vs-chars
project: videos/prog-basics-03-strings-vs-chars/
difficulty: B
mechanic: Save
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 40s
words: 80
grammar: G1 G2 G2b G3 G5
aspect: 1080x1920
captions: en
music: none
sfx: none
identity: bench-v2
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed, plus correction #3 shipped (the slice end is excluded, in the VO and on screen)
---

# P03 · Strings vs. characters · [B] · Save

**Message:** a string is a row of characters, and each character sits at an index that starts at zero
**Grammar:** G1 G2 G2b G3 G5 (frame.md v2 § 4).

## Final narration (approved copy)

| Frame | Seconds | Words | Delivery |
|---|---|---|---|
| F1 HOOK | 5.8 | A string isn't one thing. It's a lot of tiny things in a row. | Second sentence a touch faster. 'in a row' lands as the boxes arrive. |
| F2 CONCEPT | 6.9 | A character is one symbol. One letter, one digit, even one space. | Flat and quiet: this is the smallest thing in the part, so the voice goes calm, not careful. |
| F3 CONCEPT | 12.5 | Line those symbols up and you have a string. Each one sits at a position, counting from zero. A slice takes the letters before its end. | 'counting from zero' is the keyword of the part. The last sentence is correction #3: said plainly, and the bracket is already on screen when it lands. |
| F4 EXAMPLE | 7.6 | Word is code. Position zero gives you c. Slice one to three gives you od. | Slow on 'od'. Three short sentences, no room for a fourth: the code and the bracket do the rest. |
| F5 CTA | 7.3 | Save this. Then slice your own name. Position zero is the first letter. | Instruction, not encouragement. No lift at the end. |

**Spoken code:** `word = 'code'` → "word is code". `word[0]` → "position zero". `word[1:3]` → "slice one to three". The voice never says brackets, and never says slice notation.

## On-screen text and code treatment (identity v2)

**F1 (G1 hook).** Display type on the graphite ground: `A string isn't` / `one thing.` with
`one` swept amber at its measured onset, then `tiny things in a row` as the third group. Sub-line
in muted mono: `one box per character`.

**F2 (G2 single box).** One chamber, tab `char`, value `c` in mint falling into it on "one symbol"
(primitive P2, bounce settle, chamber squash). Three chips arrive under it on "letter / digit /
space": `A letter`, `7 digit`, `_ space`. Annotation: the smallest thing in a string.

**F3 (G2b row + index strip).** Four chambers carrying `c o d e`, arriving 0.14s apart, with an index
strip `0 1 2 3` ticking in under them on "each one sits at a position". `0` turns amber on "start
counting at zero". Then the bracket: an amber rule spans boxes 1 and 2 tagged `word[1:3]`, a vertical
stop draws at index 3, box 3 and its digit drop to 42% opacity, and the line reads **a slice stops
before its end**. That is correction #3 as a picture.

**F4 (G3 code chamber).** `main.py`, language chip `PYTHON 3.13`, three lines typed on under a
moving caret (P3):

```
word = 'code'
word[0]        # 'c'
word[1:3]      # 'od'
```

`[0]` turns amber when "position zero" is spoken, `[1:3]` when "slice one to three" is spoken, the
comment values `'c'` and `'od'` in mint. No coral: nothing raises here.

**F5 (G5 CTA).** Headline `Slice your own name`, amber plate `SAVE THIS`, note `position zero is the
first letter, every time`, and a four-box row spelling `n a m e` with a single amber index `0` under
the first box. Badge `PROGRAMMING BASICS · 03 · BEGINNER`. All of it above y = 1004.

## Measured durations

| Frame | VO | Frame (VO + air) | Absolute window |
|---|---|---|---|
| F1 | 4.800 | 5.8 | 0 – 5.8 |
| F2 | 5.909 | 6.9 | 5.8 – 12.7 |
| F3 | 11.520 | 12.5 | 12.7 – 25.2 |
| F4 | 6.635 | 7.6 | 25.2 – 32.8 |
| F5 | 5.888 | 7.3 | 32.8 – 40.1 |
| **film** | **34.752 speech** | | **40.1s total, 80 words, 5 frames** |

## Cover / title card

`a string is a row` + badge `PROGRAMMING BASICS 03` + `BEGINNER`. Ink on the graphite ground, the sharpest word on an amber plate, no illustration.

## Post copy

**Feed caption (TikTok / Reels — hook inside the first 125 chars):**

    A string isn't one thing. It's a row of characters, and each one has an index from zero.
    That's where slicing comes from. Save it for the next time word[1:3] surprises you.
    Part 03 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingtips`
**X:** `word = 'code'. word[0] is 'c' and word[1:3] is 'od' because the end index is excluded. Zero-indexing isn't a quirk, it's the whole addressing scheme. #python`
**LinkedIn:** The teachable moment is the off-by-one: an index addresses one thing, a slice addresses a run that stops before its end. `#python` `#programming` `#learntocode`

**Pinned comment:** `Try it: what is your name at index 0, and what is name[1:3]? Answer below and I'll reply to the odd ones.`

## Accuracy

Verified on Python 3.13.15 (`.tmp/verify_v3.py`): `'code'[0]` → `'c'`;
`'code'[1:3]` → `'od'`, length 2. The brief's example is correct as written.

**Correction #3 (shipped here, pending the user's veto at the gate).** The narration and the screen
now say that the slice stops *before* the end index. Without it `1:3` looks arbitrary and the piece's
own claim (positions are addressable) is what makes the exclusion explainable. Held back on purpose:
`'code'[9]` → `IndexError: string index out of range` while `'code'[1:99]` → `'ode'` with no error —
naming both turns a 40s part into a footnote.
