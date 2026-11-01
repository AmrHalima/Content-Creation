---
id: pb-10
order: 10
series: prog-basics
title: Switch statements
slug: switch
project: videos/prog-basics-10-switch/
difficulty: B
mechanic: Debate
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 46s
words: 94
grammar: G1 G4 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed, with one framing fix (this part is the only non-Python part in the batch)
---

# P10 · Switch statements · [B] · Debate

**Message:** one value matched against many cases, and the fall-through rule is the difference
between a tidy switch and a bug.

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.0 | A switch is just a tidy pile of if statements. | "just" is doing the work; keep it, and let the rest of the part disagree with the hook. |
| F2 | 6.0-15.0 | One value, many possible matches. A switch checks it against each case and runs the match. One subject, named once. | Flat and mechanical. |
| F3 | 15.0-28.0 | In many languages you need a break, or execution falls through into the next case. That is the bug where Saturday also runs Sunday. Kotlin and Swift don't fall through. Python's version is match. | "Saturday also runs Sunday" is the only wry beat in the part; do not underline it in the voice. |
| F4 | 28.0-38.5 | Switch on day, case sat, break, default. In Python, match day, case sat, and no break needed. | Read them as names, not as code. Fast, evenly. |
| F5 | 38.5-46.0 | So: switch, or the if-else chain. What do you reach for? Argue it below. | Keep the mechanic exactly as briefed. |

**Spoken code:** `switch (day) {` → "switch on day". `break;` → "break". `case 'sat':` → "case sat".
`match day:` → "match day". `default:` → "default"; Python's `case _:` → "the catch-all case".

## On-screen text and code treatment

**F1 (G1).** Light canvas, a stack of four small grey `if` chips, and one teal `switch` chip sliding
over them at 3.0s and collapsing the stack into one. The hook is drawn as tidy.
**F2 (G2 + G4).** One value chip `day` at the top, four case chips below it (`sat`, `sun`, `mon`,
`default`), with hairlines from the value to each. On "runs the match" exactly one line fills teal
and the rest dim.
**F3 (fall-through).** The same graph with `break` **absent**: a teal bar slides from the `sat` case
**down through** `sun` and stops at `mon`, and the two skipped case labels light up in coral
`#CD3333` as they run. Then a small `break` chip drops in and stops the bar at `sat`. This is the
part's strongest frame, and the only place the series uses coral for a *behaviour* rather than a
raised exception.
**F4 (G3, split across two languages).** Two chambers side by side, each three lines, each with its
own titlebar filename so the language is on screen (`day.js` / `day.py`):

```
switch (day) {        match day:
  case 'sat':           case 'sat':
    ...; break;           print('weekend')
  default: ...          case _: ...
}
```

Teal on `break` in the left chamber (and on the `default` line), teal on `case _` in the right.
**F5 (G5).** Two pills, `SWITCH` / `IF-ELSE CHAIN`, one ring-selected in teal on a 0.3s pulse.
Mechanic verb `PICK A SIDE`. Badge `PROGRAMMING BASICS · 10 · BEGINNER`.

## Cover / title card

`switch or if-chain?` + badge `PROGRAMMING BASICS 10` + `BEGINNER` + `DEBATE`.

## Post copy

**Feed caption:**

    A switch is a tidy pile of if statements, until you forget a break.
    Then Saturday also runs Sunday. Kotlin and Swift don't fall through, Python's match doesn't
    either, and JavaScript still expects you to remember.
    Switch or if-else chain, what do you reach for?
    Part 10 of 11: programming basics.

**Hashtags:** `#javascript` `#python` `#programming` `#webdev`
**X:** `The whole switch debate is one keyword: break. Forget it and the next case runs too. Kotlin's when and Python's match don't fall through at all. Which one do you reach for? #javascript #python`
**LinkedIn:** read-above-write-below framing: a switch states that one value is the subject, which
an if-chain hides. `#javascript` `#python` `#softwareengineering`

**Pinned comment:** `If you answer "match" in Python: it only exists from 3.10, and case _ is the default. If you answer switch in JS: it compares with ===, so a string case never matches a number.`

## Accuracy

Verified: `switch` is the real keyword in JavaScript, Java, C#, C, PHP, and fall-through without
`break` is real behaviour in all of them. The absence of fall-through in Python's `match` is
confirmed by running it on 3.13.15. "In **many** languages you need a break" is correct as worded,
and the hedge is load-bearing: Kotlin's `when` and Swift's `switch` do not fall through, so "all
languages" would be false. JS `switch` uses `===`, which is what the pinned comment claims.

**CORRECTED (this paragraph previously claimed the opposite, verified 2026-10-27 on 3.13.15):**
`case _ | 'sat' | 'sun'` is NOT valid and must not reach the screen — it raises `SyntaxError:
wildcard makes remaining patterns unreachable`, because `_` already matches everything. The valid
OR-group is `case 'sat' | 'sun':`. `case _:` on its own remains valid and is still the catch-all.
If any frame shows multiple days in one case, use `'sat' | 'sun'`, never a wildcard in the group.

**PROPOSED (framing, not content):** the two chambers carry their own filenames, `day.js` and
`day.py`, because this is the only part in the batch that shows a non-Python fragment. Unlabelled,
a viewer following parts 01-09 will type `switch(day){` into a Python REPL and get a syntax error,
and the series will have caused it. The alternative is to make the part Python-only, which drops the
`switch` half of the debate, so labelling is the cheaper fix.
