---
id: pb-07
order: 7
series: prog-basics
title: "Scope: local vs. global"
slug: scope
project: videos/prog-basics-07-scope/
difficulty: B
mechanic: Quiz
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
target_length: 46s
words: 96
grammar: G1 G2 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: BRIEF EXAMPLE WAS MISLEADING, rebuilt (approved at gate 2)
---

# P07 · Scope: local vs. global · [B] · Quiz

**Message:** a name created inside a function lives and dies there, and the global of the same name
is a different box.
**This is the part where the user's example does not demonstrate the claim.** Rebuilt here; the
rebuild needs approval before it is authored into the composition (bible § 9).

## Final narration

| Frame | Time | Words | Delivery |
|---|---|---|---|
| F1 | 0.0-6.5 | Why does your variable not exist one line later? | Say "not exist" as the quoted feeling, slightly wry. |
| F2 | 6.5-16.0 | Scope decides where a name can be seen. Inside this function, the name is real. Outside it, the name never was. | "seen" is the keyword. |
| F3 | 16.0-26.5 | The box is created inside, and it dies inside. And if a global already carries that name, the outer one never changes. Two boxes, one label. | The turn. Flat on "two boxes, one label". |
| F4 | 26.5-39.0 | X at the top level is ninety-nine. Inside f, x becomes one. Call f, then print x. Still ninety-nine. Reach for f's x from outside and Python says NameError. | "Still ninety-nine" after a real pause: that's the reveal the whole part is built on. |
| F5 | 39.0-46.0 | Which scope error have you hit the most? Comment the name: NameError or UnboundLocalError. | Keep the mechanic; the two names are the quiz. |

**Spoken code:** `NameError` and `UnboundLocalError` are spoken as the names, run together, exactly
as written on screen. `x = 99` → "x at the top level is ninety-nine".

## On-screen text and code treatment

**F1 (G1).** Light canvas, `it exists here` above a teal bracket and `not here` below it in muted
`#8E8E8E`, with a thin chamber wall drawn between them. The line, not the word, carries the hook.
**F2 (G2 rooms).** The box motif **inside** a smaller chamber: an outer room labelled `module`, an
inner room labelled `f()`, and one box `x = 1` sitting in the inner room. On "outside it, the name
never was" a search line sweeps the outer room and finds nothing.
**F3 (G2 rooms, two boxes).** Two boxes now, both labelled `x`: one in `f()` holding `1`, one in
`module` holding `99`. The inner one fades out at the moment the frame's function "returns" (the
dies-inside beat), while the outer one is untouched. Same label, teal on both, which is the trap.
**F4 (G3 code).** Petrol chamber, `main.py`:

```
x = 99
def f():
    x = 1
f(); print(x)      # 99
print(x)           # NameError: name 'x' is not defined  [second block]
```

Authored as **two timed groups**, not one six-line wall: group one ends with `# 99` in teal; group
two replaces the chamber with the isolated `print(x)` after `f()`'s `x` has been deleted, and the
error comment in coral `#CD3333` with the exact text `name 'x' is not defined`. Coral is reserved
for errors, and this is one.
**F5 (G5).** Headline `which one bites you`, two mono chips `NameError` / `UnboundLocalError`,
mechanic verb `COMMENT THE NAME`. Badge `PROGRAMMING BASICS · 07 · BEGINNER`.

## Cover / title card

`created inside, died inside` + badge `PROGRAMMING BASICS 07` + `BEGINNER`.

## Post copy

**Feed caption:**

    Why does your variable not exist one line later?
    Scope. A name made inside a function dies inside it, and the global with the same name was a
    different box the whole time.
    Which scope error do you hit more: NameError or UnboundLocalError?
    Part 07 of 11: programming basics.

**Hashtags:** `#python` `#programming` `#learntocode` `#debugging`
**X:** `x = 99, then def f(): x = 1, then f(), then print(x): still 99. The local box was created inside and died inside. Two boxes, one label. That's scope. #python`
**LinkedIn:** the second-order lesson: prefer local so bugs stay close to home. `#python`
`#programming` `#softwareengineering`

**Pinned comment:** `UnboundLocalError is the sneaky one: assign to x anywhere inside the function and Python decides x is local before it ever reads the outer one. Name the line that got you.`

## Accuracy — the one substantive correction in this batch

**As briefed, the example does not prove the claim.** `def f(): x = 1` followed by `print(x)` raises
`NameError` because `x` was never defined at module level, not because of scope; a viewer can
reproduce that error having never written `f()` at all. And with a global `x` in play, the same code
prints the **global** in silence. Verified on 3.13.15: with `x = 99` outside, `f()` assigns `1`,
then `print(x)` → `99`. And `x = x + 1` inside a function →
`UnboundLocalError: cannot access local variable 'x' where it is not associated with a value`,
which is a genuine scope error and is what the CTA's second option refers to.

The rebuilt demo keeps the hook, keeps the CTA mechanic, and swaps an unfalsifiable example for one
a viewer can run and check. `print(x)` reaching for a dead local is still shown, labelled as such,
in F4's second group, so the `NameError` the brief asked for is on screen too.
