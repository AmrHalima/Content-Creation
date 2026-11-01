---
id: pb-05
order: 5
series: prog-basics
title: Parameters vs. arguments
slug: params-vs-args
project: videos/prog-basics-05-params-vs-args/
difficulty: B
mechanic: Myth
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 89
grammar: G1 G2 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
---

# P05 · Parameters vs. arguments · [B] · Myth

**Message:** the parameter is the placeholder in the definition; the argument is the value at the call.
This part owns the series' **one** permitted contrast-reveal (in the hook, "are not the same
thing"), so no other part may use the shape (bible § 8).

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.5 | Parameters and arguments are not the same thing, and interviewers know it. | "not the same thing" evenly, no drama. "interviewers know it" slightly wry, lower. |
| F2 | 6.5-17.0 | A parameter is the placeholder in the function definition. It's the empty seat. An argument is the actual value you pass when you call. | Two sentences each side. The analogy is the load-bearing part, so it gets its own breath. |
| F3 | 17.0-25.5 | The seat exists before anyone arrives. The value fills it, for that one call, and then it's gone. | Quietest frame in the part. |
| F4 | 25.5-37.0 | Define add, with a and b. Those two are parameters. Call add with two and three. Those two are arguments. | Alternating emphasis: name the definition, then the call, then back. |
| F5 | 37.0-45.0 | If that finally made it click, comment the word seat. | Warm, short, no sign-off. |

**Spoken code:** `def add(a, b):` → "define add, with a and b". `add(2, 3)` → "call add with two and
three". The words *parameter* and *argument* are spoken; the symbols `a`, `b` are spoken as letters.

## On-screen text and code treatment

**F1 (G1).** Light canvas, two words stacked as labels, not a sentence: `PARAMETER` / `ARGUMENT`,
separated by a hairline `#EBEBEB`, with **not the same** in teal across the seam. Sub-line muted at
2.4s: `interviewers know it`.
**F2 (G2, the empty box).** The box motif with the label pill `a` and **nothing inside** — the chamber
is visibly empty, dashed 2px `#EBEBEB` border instead of the solid one. Then the value `2` drops in
and the border goes solid. The empty chamber is the parameter; the value is the argument.
**F3 (G2, timed).** Two identical chambers: left labelled `definition` sitting empty the whole time,
right labelled `call` receiving `2`, then `3`, then a different value. Only the right one moves.
**F4 (G3 code).** Petrol chamber, `main.py`:

```
def add(a, b):      # a, b = parameters
    return a + b

add(2, 3)           # 2, 3 = arguments
```

Teal on `a` and `b` while "parameters" is spoken, then teal on `2` and `3` while "arguments" is
spoken, and the two inline comments enter only with their own word. The colour hand-off *is* the
lesson; without it the two terms look identical.
**F5 (G5).** Headline `the empty seat`, mechanic verb `COMMENT "SEAT"` in teal. Badge
`PROGRAMMING BASICS · 05 · BEGINNER`.

## Cover / title card

`Parameter ≠ Argument` (the math glyph only on the cover, never in narration) + badge
`PROGRAMMING BASICS 05` + `BEGINNER`. Alternative cover if the glyph renders badly in JetBrains
Mono: `the empty seat`.

## Post copy

**Feed caption:**

    Parameters and arguments are not the same thing, and interviewers know it.
    Parameter: the placeholder in the definition. Argument: the value you pass at the call.
    The seat and the person who sits in it.
    Part 05 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#interviewquestions` `#learntocode`
**X:** `def add(a, b): a and b are parameters. add(2, 3): 2 and 3 are arguments. The seat vs the person who sits in it. If you have ever called both "arguments", this is the fix. #python`
**LinkedIn:** interview-prep framing, which is what makes this shareable outside a beginner feed.
`#python` `#programming` #technicalinterview

**Pinned comment:** `One word only: seat. And if you have been corrected on this in an interview, say which role.`

## Accuracy

Verified: `def add(a, b)` with `add(2, 3)` returns `5`; calling with one argument raises
`TypeError: missing 1 required positional argument`, which confirms the "one seat per value"
reading. The brief's distinction is textbook-correct. No change proposed beyond the CTA's own
word (`seat`), which is kept exactly.
