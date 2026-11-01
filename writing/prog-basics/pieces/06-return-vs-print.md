---
id: pb-06
order: 6
series: prog-basics
title: Return values vs. side effects
slug: return-vs-print
project: videos/prog-basics-06-return-vs-print/
difficulty: M
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
accuracy: confirmed + 1 proposed addition (the strongest argument in the part)
---

# P06 · Return values vs. side effects · [M] · Debate

**Message:** a return hands the caller something to use; a side effect changes the world outside.
The only `[M]` part, so it carries the one idea that pays off in parts 07-08: **what a function
leaves behind**.

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.5 | Two functions can look identical and behave completely differently. | Neutral, almost dry. It is a claim, not a teaser. |
| F2 | 6.5-16.5 | A return value hands the result back to whoever called it. They keep it, store it, build on it. | "hands back" is the keyword, and the visual moves upward. |
| F3 | 16.5-27.0 | A side effect changes something outside the function: printing to the screen, writing a file, editing a global. Same thing on screen, nothing handed back. | Name the three effects evenly, then slow right down for the last clause. |
| F4 | 27.0-39.0 | Both double four, and both show eight on the screen. But the print version returns None. So y equals double of four gives you nothing to work with. | The turn of the part. "None" is said as the word, not as "nothing". |
| F5 | 39.0-46.0 | So pick a side: Team Return or Team Print. Say why in the comments. | Keep the mechanic exactly; "say why" is the only addition, and it upgrades the debate from one-word replies. |

**Spoken code:** `return x * 2` → "return x times two". `print(x * 2)` → "print x times two". `None`
→ "None", capitalised in the voice, never "null" and never "nothing".

## On-screen text and code treatment

**F1 (G1 + G4 preview).** Two identical chambers side by side, each with only `double(4)` on it, and
one word under each in teal: `same` / `same`. Then at 3.5s the second label flips to `different`.
The hook's claim is drawn, not asserted.
**F2 (G4 split, arrows).** Left chamber `return x * 2` with an **upward arrow** leaving the chamber
carrying a small value chip `8`; the caller box above receives it. Petrol chamber on ice canvas.
**F3 (G4 split, effects).** Right chamber `print(x * 2)` with arrows going **out sideways** into
three small terminals: screen, file, global. Nothing goes up. That asymmetry is the whole
difference and it is the reason this frame is not a code chamber.
**F4 (G3 code).** Two fragments, one timed group each:

```
def double(x):            def double(x):
    return x * 2              print(x * 2)

y = double(4)  # 8        y = double(4)  # None
```

Teal on `return` then on `print`; **`None` in coral `#CD3333`**, the only coral in the series so far
at this point, because it is the failure the part is warning about.
**F5 (G5).** Two pills, `TEAM RETURN` / `TEAM PRINT`, one of them ring-selected in teal on a 0.3s
pulse (design.md's `active swatch` state: border-primary plus a soft ring). Mechanic verb
`PICK A SIDE`. Badge `PROGRAMMING BASICS · 06 · INTERMEDIATE`.

## Cover / title card

`identical on screen, different for the caller` in two groups, or the short version
`return vs print`. Badge `PROGRAMMING BASICS 06` + `INTERMEDIATE`.

## Post copy

**Feed caption:**

    Two functions can look identical and behave completely differently.
    One hands the result back. The other just prints it, and returns None.
    Team Return or Team Print, and why. Genuinely want to hear the case for print.
    Part 06 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#softwareengineering` `#cleancode`
**X:** `def double(x): return x*2  vs  def double(x): print(x*2). Both show 8. Only one gives you y = double(4). The other gives you None. Team Return or Team Print? #python`
**LinkedIn:** this is the part's best lane: testability. "A function that only returns needs no
captured output to test." `#python` `#testing` `#softwareengineering`

**Pinned comment:** `The case for print: it's honest for things that have no result, like logging. The case against: the caller can't check it failed. Your turn.`

## Accuracy

Verified on Python 3.13.15: `double(4)` with `return` yields `8`; the `print` variant writes `8`
and evaluates to **`None`**, so `y = double(4)` binds `None`.

**PROPOSED (this is an addition to the user's explain, not a rewrite of it):** ship the `None`
line. As briefed, both functions "look identical" and the difference is asserted; with
`y = double(4)  # None` the difference is *demonstrated*, and it is the actual reason a reviewer
asks for return values. Everything else in the part stays as written.
