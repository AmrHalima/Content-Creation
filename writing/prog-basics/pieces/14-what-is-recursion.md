---
id: pb-14
order: 3
series: prog-basics
tranche: day-2 (BASICS II)
title: What is recursion?
slug: what-is-recursion
project: videos/prog-basics-14-what-is-recursion/
difficulty: B
mechanic: Myth
mode: direct-address (G8)
carrier: true                     # proves G6 call stack + G8 direct address for the tranche
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"               # the house value; `studio voice` takes it from .agents/design.md
words: 86
target_length: ~39s
ceiling: 54s
grammar: G8 G8 G6+G8 G3-cutaway G8+G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-07 G2c rooms (nesting idea); chrome is new — this file defines it
---

# P14 · What is recursion? · [B] · Myth · **direct address**

**Message:** a function that solves a smaller version of itself, trusting the next call, until the
problem is too small to need one.

This is the tranche's first carrier. It proves **G8 direct address** (the face-to-camera substitute
the user chose for 14/17/18) and **G6 call stack** (recursion drawn as descent then unwinding).
Nothing else in Day 2 starts until its frames are read as snapshots.

The hook is a recursion joke, and it is the part's best line, so it stays exactly as written and is
the only frame in the series allowed to end on the word it begins with.

## Final narration

Times are estimates at 2.4 words/second (`af_heart` @ 0.93). `studio voice` syncs frame durations to
the measured VO and `studio cues` measures the words — write the **measured** numbers into
`STORYBOARD.md`, not these. Air is ~1.0s per frame, 2.0s on F5 (it loops under the platform's chrome).

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 3.8s | To understand recursion, you must first understand recursion. | Deadpan. Do not wink at it. The joke only lands if the voice treats it as a plain statement. |
| F2 | 5.8s | Recursion is a function calling itself on a smaller version of the same problem. | One breath per clause. "smaller" is the word the whole part hangs on. |
| F3 | 9.2s | Each call trusts the next one to solve a piece. It stops when the problem is so small the answer is obvious. | Three beats. "It stops" gets a real pause before it — that pause is where the base case lights. |
| F4 | 11.3s | Fact of four waits on fact of three, then two, then one. One is the base case. Four times three times two times one is twenty-four. | Count down slowly enough to be heard as a descent. The final "twenty-four" is the unwind finishing, not a new claim. |
| F5 | 2.9s | Drop the best recursion joke you know. | Verbatim, and it is the CTA mechanic. No added sign-off. |

**Spoken code:** `fact(4)` → "fact of four". `fact(n-1)` → "fact of n minus one". `n <= 1` → spoken
as "one is the base case", never as a comparison. `24` → "twenty-four".

**Re-cut applied** (`CORRECTIONS-day2.md` § A): the user's "Recursion is a function that calls itself
on a smaller version of the same problem." (17 words) became "…a function calling itself on…" (13);
and "Each call trusts the next one to solve a piece, until the problem is so small the answer is
obvious." (20 words, trailing `until`) split into two beats. Meaning, terms and order unchanged.

## On-screen text and code treatment

**F1 (G8).** Direct address, chrome only — the one frame in this part that is type alone (the
consecutive-G8 rule allows exactly one). `to understand recursion` / `you must first understand` /
`recursion` in three groups, left-aligned at 72px, 10cqw Space Grotesk 700 `--ink`, the second
`recursion` on a solid `--say` plate with `--say-ink` text. Chrome: corner brackets, `REC` dot
(**`--muted`, never coral** — § 1 reserves coral for a raised error, and the 1s blink is what reads
as live), timecode, and the lower third `PROGRAMMING BASICS · BASICS II · 14` over the title
`What is recursion?`. Ambient: the ground grid drift, plus a 0.6px y float on the type block.
**F2 (G8).** Type alone is not allowed twice in a row, so F2 introduces the non-chrome element: a
**self-loop arrow** drawn from CSS bars (not SVG in a scaled container — pb-11's drift finding) that
leaves the word `function`, arcs right and down, and re-enters it, running once per spoken clause via
P8 `arrow-run`. The word `smaller` gets P1 `say-sweep`. A mono chip at the arrow's midpoint reads
`n - 1` in `--muted`: the smaller version is a number, not a mood.
**F3 (G6 descent + unwind, over G8 chrome).** Four cards, not the seven the grammar allows — four is
what `fact(4)` needs and what fits the content box (230 → 902 with 96px steps).
```
descent (over "Each call trusts the next one to solve a piece"):
  card 1  tab `fact(4)`   pending `× 4`   left 72px,  width 100%
  card 2  tab `fact(3)`   pending `× 3`   left 136px, width 90.6%
  card 3  tab `fact(2)`   pending `× 2`   left 200px, width 81.2%
  card 4  tab `fact(1)`   pending `BASE`  left 264px, width 71.8%
  one P2 drop-in per clause; widths are authored per card, never a width tween.
base: card 4's `BASE` flips to a solid --say plate on "It stops".
unwind (over "the answer is obvious"): card 4's value becomes `1` in --value mint, the card dims to
  0.42, and `1` travels up into card 3 (P8); card 3 shows `2`, dims; card 2 shows `6`; card 1 shows
  `24`. Each answer is mint because it is a value, and only the top card stays at full opacity.
```
The direct-address chrome **stays visible** while this happens. That is the mode: a presenter with a
diagram beside them, not a diagram that replaced the presenter.
**F4 (G3 cutaway).** The chamber drops over the same ground at 700px wide with a 0.18-opacity scrim
behind it (no blur, no new colour), titlebar `main.py`, chip `PYTHON`:
```
def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)

fact(4)      # 24
```
P3 `type-on` reveals line 1 then line 2 under the caret; the terminal strip below prints `24` in
`--value` mint (executed: `fact(4)` → `24`, and `fact(0)`/`fact(1)` → `1`, which is why the `BASE`
plate in F3 is on `n <= 1` and not on `n == 1`). `fact(n - 1)` inside the return line gets a P1
say-sweep on "waits on", because that call *is* the wait.
**F5 (G8 + G5).** Type: `drop the best recursion joke you know` at 9cqw. Mechanic verb plate
`DROP IT` in solid `--say`. The badge line stays. Because F5 loops, it also carries the part's own
joke as a small mono echo under the plate: `to understand recursion, you must first understand
recursion` at 2.2cqw `--muted` with `data-layout-ignore` — under the 28px type floor on purpose,
because it is a caption for people who rewind, not load-bearing text.

## Cover / title card

`you must first understand recursion` (cut to 6 of the hook's 9 words) + badge
`PROGRAMMING BASICS · BASICS II · 14` + `BEGINNER`. Ground `--ground`, amber plate on the second
`recursion`, lower third and `REC` strip kept so the cover reads as a person, not a title card.

## Post copy

**Feed caption:**

    To understand recursion, you must first understand recursion.
    A recursive function calls itself on a smaller version of the same problem, and trusts the next
    call to finish the piece. It only works because there is a case small enough to answer directly.
    What is the best recursion joke you know?

**Hashtags:** `#python` `#programming` `#learntocode` `#recursion`
**X:** `recursion is a function that calls itself on a smaller version of the same problem. fact(4) waits on fact(3), then two, then one, and one is where it stops - four times three times two times one is 24. Drop the best recursion joke you know. #python`
**LinkedIn:** the base case is the part juniors omit, and the symptom is a `RecursionError` three
frames deep in a stack trace nobody reads; `#python` `#programming` `#learntocode`

**Pinned comment:** `I will start: to understand recursion, you must first understand recursion. The tell that you wrote it correctly: one branch returns without calling yourself. Part 15 is next, and it is what happens when that branch is missing.`

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`.tmp/day2_accuracy.py`): `fact(4)` → `24`; `fact(0)` → `1`;
`fact(1)` → `1`. The one-branch base case `1 if n <= 1` is therefore shown at `n <= 1`, not `n == 1`,
which is what the shipped fragment says and what makes `fact(0)` terminate instead of descending into
negatives. `def f(n): return f(n-1)` with no base case → `RecursionError: maximum recursion depth
exceeded` at the default limit of 1000 — that is part 15's frame, not this one, so **no coral appears
in part 14** (there is no raised error to earn it).

## Gate state

Carrier. Build to snapshot-read, then stop: parts 15, 17, 18 clone this file's chrome, and 21/22 are
carriers of their own. No render until the three carriers are read.
