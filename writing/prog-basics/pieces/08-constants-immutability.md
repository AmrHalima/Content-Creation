---
id: pb-08
order: 8
series: prog-basics
title: Constants and immutability
slug: constants-immutability
project: videos/prog-basics-08-constants-immutability/
difficulty: B
mechanic: Save
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 93
grammar: G1 G2 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed, brief was right, plus 1 proposed on-screen line
---

# P08 · Constants and immutability · [B] · Save

**Message:** a constant is a promise; immutability is enforcement. Two different ideas that get
confused because both are spelled "don't change this".

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.0 | The safest variable is the one that can't change. | Flat. It sounds like a paradox and needs no help. |
| F2 | 6.0-16.5 | A constant is a name you agree never to reassign. Python does not enforce it. Nothing stops you. The agreement is the mechanism. | "the agreement is the mechanism" is the whole frame; say it like a fact about code, not a lesson. |
| F3 | 16.5-26.5 | Immutability is different, and that one is enforced. An immutable value can't be modified after it is created. A string is one. | Slightly faster than F2; the contrast is in the pace, not in the voice. |
| F4 | 26.5-38.0 | MAX_USERS equals one hundred, and all caps is how you say constant. Then s is hi. Try to set s at zero to a capital H, and Python answers TypeError. | Read `MAX_USERS` as the name, letter by letter, then the number. |
| F5 | 38.0-45.0 | Save this for your next code review. Look for what was reassigned after it was agreed. | Instruction, no encouragement. |

**Spoken code:** `MAX_USERS` → "max underscore users" or, better for the ear, "MAX USERS";
`s[0] = 'H'` → "set s at zero to a capital H".

## On-screen text and code treatment

**F1 (G1).** Light canvas, `can't change` with **can't** in teal, and one box behind the words whose
value holds steady at `100` the whole frame while the ambient pills move. The stillness is the joke.
**F2 (G2 box, padlock).** The box with pill `MAX_USERS`, value `100`, and a small **padlock icon
drawn open** in muted `#8E8E8E` at the corner, plus the line `nothing stops you` in micro type. On
"the agreement is the mechanism" the padlock stays open: an agreement, not a wall.
**F3 (G2 row of character boxes, locked).** The `hi` string drawn as the P03 row of two boxes, each
with one character, this time with the border solid and a closed padlock. The two motifs are the
same shape, and their difference (open lock, closed lock) is the part.
**F4 (G3 code).** Petrol chamber, `main.py`:

```
MAX_USERS = 100      # convention: never reassign
s = 'hi'
s[0] = 'H'
# TypeError: 'str' object does not support item assignment
```

Teal on `MAX_USERS`, then on `s[0]`; the error line in coral `#CD3333` with the exact interpreter
text, wrapped to two timed lines if needed (never smaller than 28px).
**F5 (G5).** Headline `agreement vs enforcement`, mechanic verb `SAVE THIS` in teal, plus the line
`for your next code review` muted. Badge `PROGRAMMING BASICS · 08 · BEGINNER`.

## Cover / title card

`the safest variable is the one that can't change` cut to `the one that can't change` + badge
`PROGRAMMING BASICS 08` + `BEGINNER`.

## Post copy

**Feed caption:**

    The safest variable is the one that can't change.
    Two different ideas, one shared word. A constant is an agreement, and Python does not enforce
    it. Immutability is enforced, and a string will prove it.
    Save this for the next review.
    Part 08 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#codequality` `#codingtips`
**X:** `A constant in Python is a name you agree not to reassign. UPPER_SNAKE is the whole enforcement. An immutable type is different: s = 'hi'; s[0] = 'H' is a TypeError. Agreement vs enforcement. #python`
**LinkedIn:** the review angle is the shareable part: naming a value as a constant is documentation
that a compiler will not check. `#python` `#codereview` `#softwareengineering`

**Pinned comment:** `The follow-up nobody teaches: use a dataclass with frozen=True or a tuple when you want enforcement instead of an agreement. Ask me if you want the 45s version.`

## Accuracy

Verified on 3.13.15: `s = 'hi'; s[0] = 'H'` → `TypeError: 'str' object does not support item
assignment` (exact text, so the coral line on screen is real output). `MAX_USERS = 100` then
`MAX_USERS = 500` **succeeds silently**, which is precisely the brief's framing ("a name you agree
never to reassign") and the reason this part does not need correcting.

**PROPOSED:** put `nothing stops you` on F2's screen. It is the sentence that separates the two
concepts; without it a beginner reads a constant as Python enforcing something, and then writes
code that relies on it.
