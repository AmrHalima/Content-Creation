---
id: pb-15
order: 4
series: prog-basics
tranche: day-2 (BASICS II)
title: Base case in recursion
slug: base-case
project: videos/prog-basics-15-base-case/
difficulty: B
mechanic: Quiz
mode: code-card
carrier: false                     # clones G6 from pb-14, which proved it
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"               # documentation only; `studio voice` needs the --speed flag
words: 53
target_length: 31.7s              # MEASURED (16.64s speech + 15.06s authored air)
ceiling: 54s
grammar: G1 G6 G6 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-14 `compositions/frames/03-stack.html` (G6 card, tab, pending slot, drop-in, dim);
  pb-21 `01-hook.html` / `04-code.html` / `05-cta.html` (the Day 2 code-card shell: pb-kicker,
  cd-root chamber, pb-strip, f5-plate). No frame here was authored from scratch.
---

# P15 · Base case in recursion · [B] · Quiz · **code card**

**Message:** the base case is the card where the descent stops; leave it out and the call stack keeps
growing until the interpreter raises.

Part 14 taught what recursion *is* and showed a stack that unwinds. This part teaches the one line you
cannot omit, by showing the same column **never stopping**. F2 is the descent that ends; F3 is the same
column with no end, running past zero into the negatives until Python raises. That pairing is the whole
part, and it is why the grammar is `G1 G6 G6 G3 G5`: G6 twice, once with a BASE plate and once without.

This is the tranche's **only coral part**. Python 3.13.15 raised the message on this machine for the
exact fragment on screen, so `--err` is legitimate here (bible-day2 § 4, `frame-day2.md` § 6) and
nowhere else in Day 2. It appears on three objects and no more: card 8's border in F3, and the raised
string in F3's and F4's terminal strips. **Mint carries no text anywhere in this film**: nothing here
ever returns a value, so a `--value` digit would be invented output. The only `--value` ink is pb-14's
0.2s drop-in border flash.

The hook is the user's, verbatim, and it says "stack overflow" while Python prints `RecursionError`.
That is a gloss, not an error in the copy: F1 pairs the two names in a muted mono chip so the learner
connects the interview word to the word their own interpreter prints. The narration is untouched.

## Final narration

Times below are the **measured** VO from `studio voice --speed 0.93` + `studio cues`, the authored air,
and the resulting frame duration (this is `STORYBOARD.md`'s table; the estimate table in the request was
written at 3.24 words/second). Air is ~1.0s per frame in the house shape; here it is grown to
2.39-3.59s per frame because this is the leanest narration in the tranche (53 words against pb-21's 60
and pb-22's 91), and at house air the film lands ~22.6s, under the 30s floor. **No words were added**
(the user's standing choice, bible-day2 § 0.2); every extra second is spent on a beat, named per frame
below.

The real speech rate is not the flat 3.24 w/s the planning table assumed. Measured per line it runs
**2.93-3.47 words/sec** (F1 3.32, F2 2.93, F3 2.99, F4 3.22, F5 3.47), mean **3.19** over 53 words /
16.64s. The two slow lines are F2 and F3, which is why F3 needed the air it has: eight drop-ins have to
fit inside 4.01s of speech.

| Frame | VO (measured) | Air | Frame | Words | Delivery |
|---|---|---|---|---|---|
| F1 | 3.008s | 2.39 | 5.4s | 10 | Even, no alarm. `stack overflow` is the only emphasis. Its pairing with `RecursionError` is screen text and pinned comment, never spoken. |
| F2 | 2.389s | 2.71 | 5.1s | 7 | One breath, no hurry. `base case` is the term and its gloss is the same clause. The BASE plate lights exactly on "stops". |
| F3 | 4.011s | 3.59 | 7.6s | 12 | Flat across the whole line. The cards keep arriving under it; the last lands on "runs out" and the error strip follows. Do not raise the voice: the coral border and the raised message say it. |
| F4 | 4.352s | 2.95 | 7.3s | 14 | Read as a rule, not a warning. "base case" lands while the dashed slot flashes, "step" and "toward" land on `f(n - 1)`. |
| F5 | 2.880s | 3.42 | 6.3s | 10 | Ask it like a question, not a tag line. The answer is neither in the voice nor on the frame. |

**Film: 16.64s speech + 15.06s air = 31.7s** (target band ~29-34s, ceiling 54s). Frame starts
0 / 5.4 / 10.5 / 18.1 / 25.4.

**Spoken code:** `f(n - 1)` → "f of n minus one", never spoken in F4's sentence but shown on screen.
`f(4)` → "f of four". `def f(n):` → never read aloud; the voice is on the rule, the screen is on the
code. `sum(nums)` / `sum([])` → "summing a list", the user's own words; the brackets are never said.
The voice never says colons, indentation or the word "RecursionError".

**Re-cut applied:** none. `CORRECTIONS-day2.md` § A lists part 15 among the parts whose explain lines
already pass the ≤14-word / ≤2-clause law, so lines 2-4 are the user's three sentences, one idea per
frame, unshortened and unreordered.

## On-screen text and code treatment

**F1 (G1).** Type alone over the ground, three centred groups at 7.4cqw (not the 9-11cqw ramp: the
first group is 21 characters and at 9cqw it needs ~1090px of a 936px column; pb-14's deviation 2
established the finding): `Forget this one thing` / `you'll get a` in `--muted` / `stack overflow` on
the solid `--say` plate with `--say-ink` text (P1 sweep inside the first second of its own utterance,
cued at 1.94-2.48). Under it a P10 settle rule (480px, `--line`), and below that the gloss
`python names it RecursionError` in JetBrains Mono 400 2.1cqw `--muted` with `data-layout-ignore`:
chrome, deliberately under the 28px reading floor. Chrome: kicker `PROGRAMMING BASICS · BASICS II · 15`
at 72/230 and a **muted outline** `BEGINNER` chip (never the amber badge: § 14, amber is singular and
this frame's amber is the hook plate). **The first hook group and the chrome are at rest at t=0 with no
entrance tween** — this frame is the cover, and pb-14's deviation 11 finding bit here first: an entered
first line rendered the cover blank. Air after the VO buys the settle rule (3.05) and the gloss (3.42).

**F2 (G6 descent, four cards).** pb-14's geometry verbatim: insets **72 / 136 / 200 / 264**, widths
**936 / 848 / 760 / 672**, tops **262 / 358 / 454 / 550** (96px step), h 84, `--panel` `#1F242C` with a
3px `rgba(255,255,255,0.16)` border on the `#15181D` ground, radius 22, G2 shadow, the name tab drawn
as the card's own 38px `--panel-2` top strip with a 3px `--line` bottom rule. Tabs read `f(4) f(3)
f(2) f(1)` in mono 700 2.6cqw; pending slots read `waits` in mono 400 2.6cqw `--muted`.
```
descent (one P2 drop-in per measured onset of line 2: The 0.00 / is 0.66 / recursion 1.22 / stops. 1.76):
  card 1  tab `f(4)`  pending `waits`   drop at 0.10
  card 2  tab `f(3)`  pending `waits`   drop at 0.66
  card 3  tab `f(2)`  pending `waits`   drop at 1.26
  card 4  tab `f(1)`  pending `waits`   drop at 1.80
base: card 4's pending slot flips to a solid --say `BASE` plate on "stops" (sweep 2.14, ink 2.32).
      It is the frame's only amber, and nothing dims, so the plate never sits inside a 0.42 card.
then: a P7 pulse-set 0.12s apart across the four `waits` (2.90-3.26) so the board is alive in the air.
```
The pending slot says `waits`, not an operation: pb-14's cards waited on `× 4`, `× 3`… because `fact`
multiplies on the way back up, while `return f(n - 1)` waits on *nothing*, which is exactly why it never
unwinds. **Every value band in this film stays empty** — nothing returns, so a mint digit would be a lie.
The kicker moves to y 186-226 (above the content line) because card 1 sits at 262 and the series' kicker
band ends at 274: a 12px collision on the widest object in the frame. Chrome is allowed above 230.

**F3 (G6 overflow, eight cards — the sum pb-14 told this part to do).** A seven-card stack breaks the
932px bracket line at pb-14's 96px step (262 + 6×96 = 838 top, 922 bottom), and eight at 96 puts the
last card at 934 → 1018, past the framework's y 1004 content limit. So this frame runs **pb-14's
recorded 78px alternative**, and because a 84px card at a 78px step would *overlap* its neighbour by
6px, the card height drops to **72px** (a 6px gap) and the value band 43 → 28px. Everything else is
pb-14's: insets +64, widths −88 per card, tab, fonts, radii, shadow, drop-in.
```
column: tops 262 / 340 / 418 / 496 / 574 / 652 / 730 / 808, h 72 -> rests 262 -> 880
tabs:   f(4) f(3) f(2) f(1) f(0) f(-1) f(-2) f(-3)   (the count passes through zero, as the
        executed fragment does; every pending slot still says `waits`)
drops:  0.10 / 0.80 / 1.18 / 1.56 / 1.96 / 2.54 / 2.92 on the measured onsets of line 3,
        card 8 on "runs" (3.16 -> 3.20)
NO BASE PLATE ANYWHERE. That absence is the frame.
card 8: 3px --err border (the only coral object with a body in the film), a single coral
        box-shadow bloom on arrival settling to 0 0 20px rgba(255,107,90,0.28)
strip:  898 -> 994, --panel-2 shelf, `RecursionError: maximum recursion depth exceeded` in --err
        at 2.8cqw (the string is 48 characters; at § 2's 2.9cqw it needs 902px of a 892px interior),
        `DEPTH 1000` muted mono on its own second row, no `>>>` prompt (it costs the 70px the
        message needs). Arrives on "out." (3.50 -> 3.62) **from above** (`y: -18 -> 0`), tag at 4.02,
        then holds ~3.2s. A `y: +40` entrance, which is safe on F4's strip, would put this strip's
        bottom border at y 1007 mid-flight: 10px of clearance is not enough for a house entrance.
paint:  the cards are dealt from UNDER the pile (descending z-index, card 1 nearest the viewer). At a
        78px step a 72px card clears its neighbour by 6px, so pb-14's 210px drop-in ghosts an arriving
        tab straight across the `waits` of the card above it unless the newer card sits behind.
```
Measured bottom edge at card 8's arrival: the column ends at **880**, the strip at **994**, and the
lowest content row in the PNGs is **993** — 11px inside the y 1004 rule, proved at the arrival second
and not from the CSS.

**F4 (G3 cutaway to code).** One `main.py` chamber, 936px wide at 72/320, h 340, `--panel-2` 64px
titlebar with the filename mono `--muted` left and the `PYTHON` chip in `--say` on a 2px `--say` border
right; four line slots, P3 type-on under a chamber-coloured mask and a caret, one per clause of line 4:
```
line 1  def f(n):                    type-on 0.30-1.02  ("Every recursive function")
line 2  [ base case goes here ]      3px DASHED --line empty slot (G2's "waiting to be filled"),
                                     muted mono label, arrives 1.30 on "needs a base case",
                                     border FLASHES --say 1.68-2.64 and returns: a colour flash,
                                     not a second filled plate, so the frame keeps one amber plate
line 3      return f(n - 1)          type-on 2.30-3.10, indent is a left offset (105px), not four
                                     literal spaces, because a flex line's anonymous text run can
                                     drop leading whitespace
line 4  f(4)                         type-on 3.96-4.30  ("it.")
plate:  `f(n - 1)` takes the frame's one --say plate on "a step that moves toward it" (3.22), and is
        RETIRED (scaleX back to 0, ink home) at 4.20-4.48, before the coral strip arrives at 4.50
strip:  690 -> 786, the same raised message in --err, tagged `DEPTH 1000 · NO BASE CASE` (4.86). The
        line is then STATIC to the exit push at 6.98 — 2.1s of dwell. It does not get F3's 5px float:
        the craft sampler counts a move as a change, and measured this 5-word line at 1.40s against
        its 1.50s floor while it was floating.
gloss:  `the step must reach the base case` in muted mono 2.1cqw, centred at 810, arriving at 5.40
        in the air. The part's real lesson is that a base case alone is not enough: a base case on
        `n == 0` called with `n = -1` also never fires. F3 proves it by counting past zero, F4 says
        it in eight words of chrome, and the pinned comment says it in full.
```
Single-quoted Python only (there is no string literal here), ≤4 lines, and the **ligature guard is on
every element that renders code** in every frame, not just this one: `font-variant-ligatures: none` plus
`font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`. JetBrains Mono otherwise fuses `<=` into `≤` and
`->` into an arrow, which is invalid Python to a learner who types what they saw. This part's chamber
happens to carry no `<=` (the missing base case is a dashed hole, not a comparison), but the guard is
still verified by cropping the pixels of the `return` line, because the next cloner's chamber will.

**F5 (G5).** The ask in two groups of ≤20 characters at 6.4cqw (`what's the base case` /
`for summing a list?` — a 38-character headline needs 1400px of a 936px column), over **two dimmed G6
echo cards**: `sum(nums)` with `waits`, and `sum([])` with `?` in its pending slot. The dim lives in the
containers' background and border (`rgba(31,36,44,0.45)` / `rgba(255,255,255,0.10)`), never
`opacity: 0.42` on the row, which would put the mono text at 1.3:1 (§ 14); the text keeps full ink. The
mechanic verb plate `COMMENT IT` (420×104, solid `--say`, `--say-ink`) drops in on the spoken verb
"Comment" (2.06) as the frame's only amber, then the series line
`PROGRAMMING BASICS · BASICS II · 15 · BEGINNER` closes at 906. **The answer is not on this frame**:
`0`, the empty-list case, belongs in the pinned comment. No exit push: F5 loops under the platform's
chrome and has to hold alone.

## Cover / title card

`Forget this one thing` (the hook's first four words, at rest at t=0) + kicker
`PROGRAMMING BASICS · BASICS II · 15` + the muted outline `BEGINNER` chip. Ground `--ground`, no amber
on the cover frame itself (the plate arrives with the word it marks, at 1.96s), so the thumbnail is
ink-on-graphite and the amber is earned by the voice. Proved by the 0s snapshot: the cover reads.

## Post copy

**Feed caption:**

    Forget this one thing and you'll get a stack overflow.
    In Python the thing you forget is the base case, and the name your interpreter prints is
    RecursionError: maximum recursion depth exceeded. f(4) calls f(3), then f(2), then all the way
    past f(0) into the negatives, because nothing ever answers without calling itself. A base case is
    not enough on its own either: the step has to head toward it, or f(-1) walks straight past a case
    written for zero. What's the base case for summing a list?

**Hashtags:** `#python` `#programming` `#learntocode` `#recursion`
**X:** `the base case is the line where a recursive function answers without calling itself. leave it
out and f(4) becomes f(3), f(2) ... straight past f(0) into the negatives until python raises
RecursionError: maximum recursion depth exceeded at depth 1000. what's the base case for summing a
list? comment it. #python`
**LinkedIn:** the interview word and the interpreter word are not the same word: candidates say "stack
overflow", CPython 3.13 prints `RecursionError: maximum recursion depth exceeded`, and the fix is one
branch that returns without calling itself. The second failure mode is rarer and worse: a base case on
`n == 0` that a step of `n - 1` never reaches, because the caller started at `-1`. `#python`
`#programming` `#learntocode`

**Pinned comment:** `The answer is 0: an empty list sums to nothing, so sum([]) returns 0 without
recursing, and sum([4, 5, 6]) comes back 15. Two things to get right, not one: the base case, and a
step that actually moves toward it. if n == 0 is a perfect base case that never fires when someone
calls you with -1. Python calls the crash a RecursionError; other languages call it a stack overflow,
which is the phrase in the hook. Part 16 is next.`

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`.tmp/pb15_accuracy.py`, re-run in this build pass):
`def f(n): return f(n-1)` called as `f(4)` raises **`RecursionError: maximum recursion depth exceeded`**
— quoted character-for-character on screen, 48 characters including the type name, and it is the only
coral in the film because an interpreter actually raised it here. `sys.getrecursionlimit()` → **`1000`**,
which is the `DEPTH 1000` tag. The CTA's answer: `sum([])` → **`0`**, and a recursive sum with base `0`
over `[4, 5, 6]` → **`15`** (both confirmed by execution). The eight-card column is a diagram of the
same descent, not a claim that the limit is eight: the count passing through `f(0)` into `f(-1)` is what
the executed fragment really does, and `DEPTH 1000` carries the true number. No notation anywhere
(`frame-day2.md` § 9): the stack's size is shown as a counted column, never as an `O(...)`.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot read.
**No render, no publish, no schedule, no BGM, no SFX, no `preview --background`** (parallel workers;
snapshots only). Numbers are in `videos/prog-basics-15-base-case/BRIEF.md` § Gate state and in the
build report; the deviations that changed what is on screen are numbered there and each one names its
cause (pb-14's geometry sum, `frame-day2.md` § 14, a `known-traps` rule, or a defect found by reading
this project's own PNGs).
