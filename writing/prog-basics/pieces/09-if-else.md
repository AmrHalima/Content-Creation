---
id: pb-09
order: 9
series: prog-basics
title: If/else conditionals
slug: if-else
project: videos/prog-basics-09-if-else/
difficulty: B
mechanic: Challenge
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 90
grammar: G1 G2 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed, and the challenge has a trap worth naming
---

# P09 · If/else conditionals · [B] · Challenge

**Message:** a condition picks one path, and the first match wins.
G2 variant: the **two doors** (the box chamber split into two paths with one taken).

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.0 | Every decision your app makes comes down to this. | "this" gets the beat; the frame behind it is still empty when it lands. |
| F2 | 6.0-16.0 | If the condition is true, this block runs. Otherwise, the other one. One path taken, the other never looked at. | Alternate the emphasis exactly as the paths light up. |
| F3 | 16.0-25.0 | More paths? Add elif. The first match wins and the rest are not checked. | Short frame, quick line. |
| F4 | 25.0-36.5 | If age is at least eighteen, print Welcome. Otherwise print Sorry. Age twenty gives Welcome. Fifteen gives Sorry. | The two ages are the whole demo; say them plainly. |
| F5 | 36.5-45.0 | Challenge: rewrite that as a one-liner. Show me in the comments. Warning, the obvious attempt does not parse. | Keep the mechanic word for word; the warning is one added sentence, delivered as a heads-up, not a gotcha. |

**Spoken code:** `if age >= 18:` → "if age is at least eighteen". `else:` → "otherwise". `elif` →
"el-if", one word.

## On-screen text and code treatment

**F1 (G1).** Light canvas, the word `this` in teal at display scale, and nothing else until 3.0s,
when the two paths begin to draw behind it. The empty frame is allowed here because the *line* is
the hook; ambient pills still move.
**F2 (G2 two doors).** One chamber split into two stacked blocks, `true` above `false`, each labelled
in mono. A condition chip `age >= 18` arrives between them; on "this block runs" the upper block
fills teal and the lower goes to 40% opacity. On "never looked at" the lower block dims further.
**F3 (G2 three doors).** A third block `elif` enters between them and the stack re-labels
`if` / `elif` / `else`, with a teal marker that stops at the **first** match while the others stay
grey. One three-item list, and it is the subject (§ 8).
**F4 (G3 code).** Petrol chamber, `main.py`, two timed groups:

```
if age >= 18:                if age >= 18:
    print('Welcome')             print('Welcome')
else:                        else:
    print('Sorry')               print('Sorry')
# age = 20 -> Welcome        # age = 15 -> Sorry
```

Teal on `age >= 18` while it is spoken; the output comment in `#E8F6F7`. Nothing coral: both
branches are correct code.
**F5 (G5).** Headline `one line, same behavior`, mechanic verb `SHOW ME` in teal, and beneath it in
muted micro type `the obvious attempt is a SyntaxError`. Badge `PROGRAMMING BASICS · 09 · BEGINNER`.

## Cover / title card

`every decision, one line?` + badge `PROGRAMMING BASICS 09` + `BEGINNER` + a small `CHALLENGE` tag.

## Post copy

**Feed caption:**

    Every decision your app makes comes down to this.
    If the condition is true, one block runs. Otherwise the other. Add elif and the first match
    wins, which is the part that trips people up.
    Challenge: rewrite it as a one-liner. Comments only, no Googling.
    Part 09 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#codingchallenge` `#learntocode`
**X:** `if age >= 18: print('Welcome') else: print('Sorry') is a SyntaxError on one line. The form that works is inside the print. Challenge: post your one-liner. #python`
**LinkedIn:** the first-match rule is the professional lesson (condition order is logic).
`#python` `#programming` `#learntocode`

**Pinned comment (reveal after 24h):** `Both work: print('Welcome' if age >= 18 else 'Sorry') and print('Welcome') if age >= 18 else print('Sorry'). What does not work is if ... : else: on one line, and if with an elif on the same line. SyntaxError both times.`

## Accuracy

Verified on 3.13.15, all four forms executed:
`print('Welcome' if age >= 18 else 'Sorry')` → valid; `print('Welcome') if age >= 18 else
print('Sorry')` → valid; `if age >= 18: print('Welcome') else: print('Sorry')` on one line →
**SyntaxError**; `if ... : ... elif ... : ...` on one line → **SyntaxError**. `age` 20 → `Welcome`,
15 → `Sorry`.

**PROPOSED:** ship the warning line on F5 and the reveal in the pinned comment. The CTA is
unchanged, but as briefed the most likely comment on this part is broken code, and a challenge that
rewards a SyntaxError teaches the wrong shape. The trap is worth one muted line.
