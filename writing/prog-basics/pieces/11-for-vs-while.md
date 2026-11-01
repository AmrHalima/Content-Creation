---
id: pb-11
order: 11
series: prog-basics
title: For loops vs. while loops
slug: for-vs-while
project: videos/prog-basics-11-for-vs-while/
difficulty: B
mechanic: Quiz
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 93
grammar: G1 G4 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
---

# P11 · For loops vs. while loops · [B] · Quiz

**Message:** a for loop repeats a known count; a while loop repeats until something changes, and if
nothing ever changes it, the program hangs.
Final part of the tranche. It closes on the same beat part 03 opened (zero-based counting), which is
allowed: it re-pays its own claim, it does not reference another part.

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.0 | Pick the wrong loop and you'll hang your program. | "hang" is the keyword and the only emphasis. No alarm in the voice. |
| F2 | 6.0-16.0 | Use a for loop when you know how many times, or when you're walking through a collection. The count is settled before it starts. | Even, unhurried: this is the safe half of the part. |
| F3 | 16.0-27.5 | Use a while loop when you repeat until something changes. Waiting for valid input. Retrying until it works. And if the condition never flips, it never stops. | Three beats, three breaths. "it never stops" lands alone. |
| F4 | 27.5-38.0 | For i in range of three gives zero, one, two. While not done runs until somebody sets done to true. | Read the values with a small pause between them; the zeros are the callback to part 03. |
| F5 | 38.0-45.0 | So which do you use more, for or while? Comment it. | Keep the mechanic exactly. |

**Spoken code:** `for i in range(3):` → "for i in range of three". `while not done:` → "while not
done". `done = True` → "sets done to true".

## On-screen text and code treatment

**F1 (G1).** Petrol canvas (the one dark hook in the batch, because the stake is a hang). `you'll
hang your program` in ice-white `#E8F6F7` with **hang** in `#7BD3D8`, and a spinner ring in muted
`#B5B5B5` doing exactly one revolution over 4s, then stopping, then starting again: an ambient
layer that is also the claim.
**F2 (G4 left / G2).** A `for` chamber with a count badge `3` and three chips `0` `1` `2` arriving
under it, one per beat, in teal. The count is visible before the loop runs, which is the point.
**F3 (G4 right).** A `while` chamber with a condition chip `not done` and an arrow looping back into
itself; on "it never stops" the loop arrow keeps cycling while nothing else changes, and the coral
`#CD3333` edge on the chamber appears one beat later. The rest of the frame freezes so the loop is
the only moving thing: legal here because the freeze *is* the message.
**F4 (G3 code).** Two chambers side by side, `main.py`, three lines each:

```
for i in range(3):      done = False
    print(i)            while not done:
# 0 1 2                     done = True
```

Teal on `range(3)` then on `not done`; the output comment `0 1 2` in `#E8F6F7`.
**F5 (G5).** Two pills, `FOR` / `WHILE`, one ring-selected in teal on a 0.3s pulse. Mechanic verb
`COMMENT IT`. Badge `PROGRAMMING BASICS · 11 · BEGINNER` plus `SERIES DONE` in micro type.

## Cover / title card

`the wrong loop hangs your program` cut to `the wrong loop hangs it` + badge
`PROGRAMMING BASICS 11` + `BEGINNER`. Petrol canvas, teal on `hangs`.

## Post copy

**Feed caption:**

    Pick the wrong loop and you'll hang your program.
    For is a known count. While is a condition you expect to change, and if nothing ever changes
    it, it does not stop.
    Which do you use more?
    Part 11 of 11, and the end of this tranche.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `for i in range(3) gives 0 1 2, and you know that before it runs. while not done runs until something flips the condition, and if nothing ever does, you wrote a hang. Which do you reach for? #python`
**LinkedIn:** the input-validation case is where juniors actually pick wrong; `#python`
`#programming` `#learntocode`

**Pinned comment:** `The tell: if you can name the count before the loop starts, it is a for. If the loop is waiting for the world to change, it is a while, and it needs a way out. What is yours waiting for?`

## Accuracy

Verified on 3.13.15: `for i in range(3)` yields `0 1 2` (zero-based, and it stops **before** 3, the
same exclusion rule as part 03's slice). `while not done:` with `done` flipped inside terminates
after one pass as written. The hook's stake is literal, not rhetorical: a `while` whose condition is
never falsified is an infinite loop. No correction.
