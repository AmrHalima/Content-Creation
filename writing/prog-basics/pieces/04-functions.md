---
id: pb-04
order: 4
series: prog-basics
title: What is a function?
slug: functions
project: videos/prog-basics-04-functions/
difficulty: B
mechanic: Tag
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 92
grammar: G1 G2 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
---

# P04 · What is a function? · [B] · Tag

**Message:** write the steps once, name them, and one fix repairs every call.
G2 variant: the chamber holds **steps** instead of a value (a recipe card inside the same box
geometry) so the motif never changes shape.

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.0 | If you copy-paste the same code twice, you're missing something. | No accusation in the voice. It's an observation, delivered flat. |
| F2 | 6.0-16.0 | A function is a named recipe. Write the steps once, give them a name, call it whenever you need it. | "named recipe" is the keyword. |
| F3 | 16.0-25.5 | Calling it runs the steps again, as many times as you want. And fix the recipe once, every call gets fixed. | Beat before "every call gets fixed". That's the payoff, not the definition. |
| F4 | 25.5-37.0 | Define greet, taking a name. It prints Hi plus the name. Call it with Sara, call it with Omar. Two calls, one recipe. | "Two calls, one recipe" is said like a summary of the part, slower. |
| F5 | 37.0-45.0 | Who do you know that still copy-pastes? Send this to them. | Keep the CTA's mechanic exactly; the only added words are the setup question. |

**Spoken code:** `def greet(name):` → "define greet, taking a name". `greet('Sara')` → "call it with
Sara". Never "def", never "colon".

## On-screen text and code treatment

**F1 (G1).** Light canvas. `Copy-pasted` `twice?` with **twice** in teal. Sub-line at 2.0s, muted:
`you're missing something`. Nothing else on the frame.
**F2 (G2 recipe box).** Chamber with the label pill `greet`, and inside, three step lines
(`take a name`, `build Hi + name`, `print it`) entering staggered 0.08s. It is the same box, with a
recipe for contents.
**F3 (G2 + G4 hint).** The recipe box stays put and **three small call chips** arrive beneath it,
each reading `greet(...)`; on "fix the recipe once" the text inside the box changes and **all three
chips pulse in the same frame** (0.1s apart). This is the one emphasis move the part needs.
**F4 (G3 code).** Petrol chamber, `main.py`:

```
def greet(name):
    print('Hi ' + name)

greet('Sara')     # Hi Sara
greet('Omar')     # Hi Omar
```

Five lines, which is over § 4's cap of four, so the def block and the two calls are authored as
**two timed groups** (definition first, calls on their own cue) and the blank line separates them.
Teal on `greet` (the name) throughout; `name` in `#B5B5B5` until it is spoken.
**F5 (G5).** Headline `one recipe, every call`, mechanic verb `SEND THIS` in teal, plus a small tag
icon (resolved through `media-use` as an icon, never redrawn as CSS art). Badge
`PROGRAMMING BASICS · 04 · BEGINNER`.

## Cover / title card

`Copy-pasted twice?` + badge `PROGRAMMING BASICS 04` + `BEGINNER`. Teal on `twice`.

## Post copy

**Feed caption:**

    If you copy-paste the same code twice, you're missing something.
    A function is a named recipe: fix it once and every call is fixed. The part that beginners
    skip is the second half.
    Part 04 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `A function is a named recipe. Write it once, call it anywhere, and one fix repairs every call site. That's the entire argument, and copy-paste is the counter-example. #python`
**LinkedIn:** DRY as a maintenance claim, not a style preference. `#programming` `#python` `#softwareengineering` `#codequality`

**Pinned comment:** `Tag them here if you'd rather not send the video. I'll wait.`

## Accuracy

Verified: `def greet(name): print('Hi ' + name)` runs, and the two calls print `Hi Sara` /
`Hi Omar`. No correction needed. Side note, not used in the part: `greet('Sara')` returns `None`,
which is P06's material, and this series does not borrow from a later part.
