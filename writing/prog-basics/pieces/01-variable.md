---
id: pb-01
order: 1
series: prog-basics
title: What is a variable?
slug: variable
project: videos/prog-basics-01-variable/
difficulty: B
mechanic: Quiz
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 45s
words: 91
grammar: G1 G2 G3 G5
aspect: 1080x1920
captions: en
music: none
sfx: none
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
---

# P01 · What is a variable? · [B] · Quiz

**Message:** a variable is a name pointing at a value, and the name outlives the value.
**F1 is the grammar carrier for the whole series:** hook type on ice, teal keyword, ambient pill
float. Nothing starts until this part's frames read correctly at 1080x1920 by snapshot.

## Final narration (approved copy)

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 HOOK | 0.0-6.5 | Every app you use remembers things. Here's the trick behind it. | Conversational, flat on "remembers", small lift on "trick". No gap between the two sentences. |
| F2 CONCEPT | 6.5-16.0 | A variable is a labeled box. Put a value inside, give the box a name, and use that name whenever you need the value. | Slower than it feels. "labeled box" is the keyword: the visual pays it. |
| F3 CONCEPT | 16.0-25.0 | Change what is inside and the name stays the same. That is the trick: the name is not the value. | Land "the name stays", then a real beat before "the name is not the value". |
| F4 EXAMPLE | 25.0-37.0 | Score starts at ten. Then score becomes score plus five. Print it, and you get fifteen. | Read it as arithmetic, not as code. "fifteen" is the payoff, don't rush it. |
| F5 CTA | 37.0-45.0 | So: if score starts at one hundred, and you add five, what prints? Drop the number below. | Question rises, then flat and quiet on the instruction. |

**Spoken code:** `score = 10` → "score starts at ten". `score = score + 5` → "score becomes score
plus five". `print(score)` → "print it". The symbols are never read aloud as symbols.

## On-screen text and code treatment

**F1 (G1 hook, also the cover).** Light canvas `#F5FCFD`. Two groups, one line each:
`Every app you use` / `remembers things` — Inter 700, ~10cqw, ink `#1A1A1A`, **remembers** in
teal `#47B5BE`. Sub-line in micro type, muted `#8E8E8E`, appears at 1.4s: `the trick behind it`.
Ambient: three teal-tinted pills on the 12s float. Entrance 0.3s; nothing after 3.0s may still be
arriving, because 3s is the scroll decision.

**F2 (G2 box).** One box, centered in the content box (y 230-1004). Label pill on top:
`score`, JetBrains Mono 500 on `#F7F7F7`. Chamber: white `#FFFFFF`, radius 18px, teal-tinted
shadow, 1px `#EBEBEB`. Value inside: `10`, Inter 700, 12cqw. On "give the box a name" the label
pill drops onto the chamber; on "use that name" a hairline draws from pill to value.

**F3 (G2 box, same geometry, new contents).** The value swaps `10` → `15` with the name pill
**not moving** — the swap is the whole point, so the animation is deliberately boring: value
exits up, new value enters, the pill is untouched. Caption keyword **stays** in teal.

**F4 (G3 code chamber).** Petrol `#0F1818`, titlebar `main.py`, three lines, one at a time on
cue, 2.6cqw mono:

```
score = 10
score = score + 5
print(score)
```

Teal `#7BD3D8` on `score` for the full run (it is the token being named). Terminal output line
below the chamber in `#E8F6F7` on `#343434`: `>>> 15`. Nothing coral in this part: no error.

**F5 (G5 CTA card).** Light canvas. Headline `What prints?` (Inter 700, 8.4cqw), then the box
motif reused at 0.6 scale with the pill reading `score` and **`100` as its value** (the quiz states
the starting value rather than hiding it behind a `?`, so the only unknown is the result), plus a
teal `+ 5` chip stepping in beside it on "add five". Mechanic verb in teal, letterspaced mono pill.
Badge `PROGRAMMING BASICS · 01 · BEGINNER` in muted micro type. All of it above y = 1004.

## Measured durations (after `studio voice` + `studio cues`, part built)

| Frame | VO | Frame (VO + air) | Absolute window |
|---|---|---|---|
| F1 hook | 4.864 | 5.9 | 0 – 5.9 |
| F2 box | 10.240 | 11.2 | 5.9 – 17.1 |
| F3 name stays | 7.957 | 9.0 | 17.1 – 26.1 |
| F4 example | 7.403 | 8.4 | 26.1 – 34.5 |
| F5 quiz | 7.147 | 8.6 | 34.5 – 43.1 |
| **film** | **37.611 speech** | | **43.1s total, 88 words, 5 frames** |

Every emphasis cue in `videos/prog-basics-01-variable/STORYBOARD.md` and the frame files cites the
measured word onsets from `audio_meta.json` (`remembers` at 1.26, `+ 5` at 3.74, `fifteen` at 6.46),
not the estimates in the table above.

## Cover / title card

`Every app remembers things.` (5 words, the hook's sharpest fragment) + badge
`PROGRAMMING BASICS 01` + `BEGINNER`. Type alone on the ice canvas, teal on `remembers`.

## Post copy

**Feed caption (TikTok / Reels, hook inside the first 125 chars):**

    Every app you use remembers things. The mechanism is one idea: the name is not the value.
    Quiz is at the end. Answer in the comments, not the caption, so nobody spoils it.
    Part 01 of 11: programming basics, no hand-holding.

**Hashtags (3-5, IG/TikTok cap is 5):** `#python` `#programming` `#learntocode` `#codingbasics`
**X (1-2):** `#python` `#learntocode` — post: `Every app you use remembers things. The trick: a variable is a name pointing at a value, and the name outlives the value. What prints if score starts at 100? #python`
**LinkedIn (3-5):** `#programming` `#python` `#softwareengineering` `#learntocode` — lead with the
teaching angle: the box metaphor is what makes the reassignment click.

**Pinned comment (posts immediately, no answer):** `Answer to the quiz goes up in 24h. Guess first.`
Reveal text when it goes up: `105. score = 100, then score becomes score + 5, print gives 105. The name never changed, only what was inside.`

## Accuracy

Verified on Python 3.13.15: `score = 10; score = score + 5; print(score)` → `15`; starting at
`100` → `105`. Both shown numbers are executed output, not recalled. No correction.
