---
id: pb-12
order: 1
series: prog-basics
tranche: day-2 (BASICS II)
title: Infinite loops and how to avoid them
slug: infinite-loops
project: videos/prog-basics-12-infinite-loops/
difficulty: B
mechanic: Quiz
mode: code-card
carrier: false                    # clones pb-11's gate rather than proving a new mark
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 51
target_length: 25.62s measured     # planning band was ~29-34s; this copy is the leanest in the tranche
ceiling: 54s
grammar: G1 G3 G3-gate G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: videos/prog-basics-11-for-vs-while/compositions/frames/03-gate.html (the gate that
  re-tests, the bounded accelerating spin) + pb-21's G3 chamber / terminal strip / G5 CTA shell
---

# P12 · Infinite loops and how to avoid them · [B] · Quiz · code card

**Message:** a `while` loop only ends when its check turns false, and the check only turns false if
something inside the loop changes the variable it reads — so before you run a loop, name the thing
that changes and the thing that ends it.

First part of Day 2. It is the tranche's second hang: part 11 showed a `while` with no escape and
ended on `IT NEVER STOPS`; part 12 shows the same apparatus with a **counter that never moves**, so
the cause (a forgotten update) is what carries the frame rather than the drama. That is why the clone
source is pb-11's `03-gate.html`: the mechanism is already built, already snapshot-read, and already
carries the bounded-accelerating-spin rule.

## Final narration

Estimated at the carriers' measured **3.24 words/second** (`af_heart` @ 0.93, `frame-day2.md` § 8 —
not the 2.4 the first draft of this file assumed); `studio voice` measures and syncs, `studio cues`
places the words. Write measured durations into `STORYBOARD.md`.

| Frame | Est. at 3.24 w/s | Words | Delivery |
|---|---|---|---|
| F1 | 3.4s | Your program froze and your laptop fan is screaming. Here's why. | Flat, almost deadpan. The joke is in the image, not the voice. Land `froze` alone; `Here's why` is a change of gear, slightly lower. |
| F2 | 3.1s | An infinite loop happens when the condition never becomes false. | Even. `never becomes false` is the whole definition — say it slowly enough to be typed. |
| F3 | 3.4s | Usually you forgot to update the variable the condition depends on. | Slightly wry on `forgot`. The rest is plain: this is the cause, not a scolding. |
| F4 | 4.0s | Before running any loop, ask: what changes each round, and what ends it? | The question is the habit. Two short beats with a breath after `ask`. `ends it` lands last and alone. |
| F5 | 1.9s | Spot the missing line? Comment it. | Verbatim CTA. Ask it, do not sell it. |

**Spoken code:** none. The loop is never read aloud in this part — F4's narration is the diagnostic
question, and the code is what sits under it while it is asked. The voice says `condition`, `variable`
and `loop` as words, never brackets, colons or indentation. `i += 1` is never spoken (it is the quiz
answer) and never appears on screen.

## On-screen text and code treatment

No coral anywhere in this film. A hang raises no exception, and `--err` `#FF6B5A` is reserved for an
error an interpreter actually raised on this machine (`frame-day2.md` § 1, § 6 of the wave packet). The
stuck state is carried by motion (the bounded accelerating re-test) plus an amber `--say` plate on the
spoken words — exactly how pb-11 shipped its own hang, and its `BRIEF.md` records why. Every frame
carrying code sets `font-variant-ligatures: none` and `font-feature-settings: "liga" 0, "calt" 0,
"dlig" 0`, because JetBrains Mono ligates `<=` into `≤` and a learner typing `≤` gets a syntax error.

**F1 (G1).** Type alone on `--ground`, four groups, nothing illustrated: `Your program froze` /
`and your laptop fan` / `is screaming` / `Here's why`. The single amber `--say` plate (P1 `say-sweep`)
wipes behind **froze** on its own onset and the word goes `--ink` → `--say-ink`. Kicker
`PROGRAMMING BASICS · BASICS II · 12` + `BEGINNER` badge in muted mono. Two mono glosses arrive after
the plate, because the hook is verbatim and cannot gloss itself: `a loop runs the same lines again`
and `frozen = it is still running`.
**F2 (G3).** `main.py` chamber, chip `PYTHON`, three lines written under a moving caret on P3
`type-on`, one per spoken clause: `i = 0` / `while i < 5:` / `    print(i)`. The `0` is a mint
`--value` chip that drops into the assignment on P2 `drop-in` (assignment is a value entering a name,
the series' standing idiom). The amber `--say` plate wipes over **`i < 5`** as the voice says
`condition` — self-contained inside its own token so no sibling plate shares its stacking context.
Below the chamber, the chip labelled `the check` (the plain gloss `condition` needs in the same frame
it is spoken) reads `i < 5` and stamps `True`; two more `True` stamps arrive after it on P9, which is
what `never becomes false` looks like when nothing else on the board moves.
**F3 (G3-gate — the pb-11 clone).** One chamber at 700px, then the gate apparatus: the `the check`
chip at the gate, the wire, the body box that fills and drains, the loop-back arc that redraws itself
on every pass, and pass badges `pass 1` / `pass 2` / `pass 3`. The new object is the **variable**: a
mint `i` chip holding `0` that pulses once per pass (P7 `pulse-set`) and never changes — that
stillness is the cause, so the frame needs no struck-out escape line. The chip pins at `True` and the
cycle runs a **bounded, accelerating** spin (six redraws, 0.72s → 0.15s) ending on an ellipsis and the
amber plate `FORGOT TO UPDATE`, which lands on the spoken words `forgot to update`. Nothing here is an
unbounded loop; nothing reads a wall clock or a random number.
**F4 (G3).** The example, and the quiz board. `main.py` chamber, four rows in the code-line column:
`i = 0` / `while i < 5:` / `    print(i)` / **[empty slot]** — the slot is the **last** row. The slot is
G2's `empty` shape — 3px **dashed** `--line`, no value, one dim mint caret blinking on a 1s yoyo —
sitting in the indented position where the update line belongs, inside the loop body (it is a body
statement, so it is drawn after the colon, not beside the condition). It goes *after* the print because
that is the order that makes the pinned comment true: `print(i)` then `i += 1` is the loop that prints
`0 1 2 3 4`, while a slot above the print would make the viewer's correct answer print `1 2 3 4 5` and
contradict both the strip and the comment (executed both, see `## Accuracy`). The gap is drawn because
the CTA asks the viewer to spot a missing line: a quiz about a gap nobody can see is not answerable.
Below the chamber, the terminal strip on `--panel-2` prints the executed output in mint `--value`:
`0 0 0 0 0 0 0 0 …` — **never `0 1 2 3 4`**; the repeated zero is the diagnosis, since the variable the
check reads never changed. The amber plate `NEVER ENDS` arrives on the spoken words `what ends it`, in
its own lane beside the strip, and everything else freezes under it.
**F5 (G5).** Headline `spot the missing line?` (21 characters, inside the ≤24 at 6.4cqw in the 176px
band), mechanic verb plate `COMMENT IT` in solid `--say` with `--say-ink` text, and the series line
`PROGRAMMING BASICS · BASICS II · 12 · BEGINNER` in muted mono. The F4 chamber returns dimmed at 0.42
as the hint — still empty, still dashed, still with the caret blinking — so the frame asks the question
without answering it. **The answer `i += 1` is not on screen**; it lives in the pinned comment. The
frame holds alone under the platform's chrome: no exit push, content above y 1004.

## Cover / title card

`Your program froze. Here's why.` (5 words, the hook cut to ≤6) + badge
`PROGRAMMING BASICS · BASICS II · 12` + `BEGINNER`. Amber plate on **froze**, ink `#F4F1EA` on
`#15181D`. F1 is the cover.

## Post copy

**Feed caption:**

    Your program froze and your laptop fan is screaming. Here's why.
    An infinite loop happens when the condition never becomes false. Usually you forgot to update the variable the condition depends on.
    Before running any loop, ask: what changes each round, and what ends it?
    Spot the missing line?

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `while i < 5: print(i) with i starting at 0 prints 0 forever. not once, not twice — it printed thirteen times before something stopped it, and the check read True on every one of those passes. one line ends it. name it in the reply. #python`
**LinkedIn:** the debugging habit worth teaching before syntax: before you run any loop, say out loud
what changes on each round and what makes it stop. If you cannot answer either question, the loop
already knows the answer. Part 12 of Programming Basics; `#python` `#programming` `#learntocode`

**Pinned comment:** `The missing line is i += 1, inside the loop body (indented, under while) — line 4,
after the print. With it the same loop prints 0 1 2 3 4. Put it above the print and the same answer
prints 1 2 3 4 5 instead. Without it the check reads True forever and Python prints 0 forever. Part 13
is the escape hatch: break and continue.`

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`series-bible-day2.md` § 4, `.tmp/day2_accuracy.py`, 52
checks), and re-run for this file before authoring: `i = 0` with `while i < 5: print(i)` and no
increment prints `0 0 0 0 0 0 0 0 0 0 0 0 0` — thirteen zeros — with the condition evaluating `True` on
every one of those thirteen passes, and the guard had to stop it. The same loop with `i += 1` **after
the print** in the body yields `0 1 2 3 4`. So F4's terminal strip is `0 0 0 0 0 0 0 0 …`
(`CORRECTIONS-day2.md` § B records this as this part's screen-text constraint) and the `0 1 2 3 4`
sequence appears **only** in the pinned comment, where it is the fixed version's executed output.

**Both orders executed 2026-10-28 on Python 3.13.15** (`C:/Users/AmrPC/AppData/Local/Programs/Python/
Python313/python.exe`, same interpreter as above) to settle where F4's dashed slot belongs — the stdout
is verbatim:

| Fragment as the viewer would complete it | stdout |
|---|---|
| `i += 1` **above** `print(i)` | `1` `2` `3` `4` `5` |
| `print(i)` then `i += 1` (**slot below the print**) | `0` `1` `2` `3` `4` |
| no increment at all (the loop as drawn) | `0` ×13, guard-stopped; `i < 5` is `True` on every pass |

The slot therefore sits on **line 4**, after the print: it is the only placement whose completed reading
matches the pinned comment's promised `0 1 2 3 4`, it is the idiomatic print-then-increment order, and
it re-pays the zero-index callback parts 03 and 11 already made. The broken reading is unaffected by the
choice — it prints `0` forever either way — so only the *correct* answer was at risk. F5's label moved
with it (`main.py · line 3` → `line 4`).

Nothing else is invented: `0 < 5` → `True` is the first pass of the loop above, and it is the only
condition state shown. The part raises no exception, so it carries no coral and no error string. The
three explain sentences are the user's copy verbatim; `CORRECTIONS-day2.md` lists this part's explain
lines among those that **already pass** the ≤14-word / ≤2-clause law, so no re-cut was applied here.
The hook and the CTA mechanic are untouched.

## Gate state

Built to the pre-render gate: voice at 0.93, cues, 5 frames, assemble, verify, check, snapshot read.
No render, no MP4, no publish, no `preview --background`, no BGM, no SFX, no network assets.

**Runtime — measured, and under the tranche's floor.** The 51 spoken words measured at **17.622s of
speech** (2.9 words/second, not the 3.24 planning rate: three of the five lines are two sentences and
this copy carries the tranche's longest inter-sentence pauses). With the full authored air — 1.0s on
F1-F4 and F5's pad grown from the standing 2.0s to 4.0s, the one permitted lever
(`frame-day2.md` § 12) — the film is **25.62s**: F1 4.95 / F2 4.56 / F3 4.90 / F4 5.05 / F5 6.16. That
is below the 29-34s band and below the 30s floor, so per `series-bible-day2.md` § 0.2 **no word was
added** and the number is reported rather than dodged. The other four frames' air was not shrunk to
make the total look closer.

The three beats were snapshot-read and all three hold: the **empty slot** photographs as a dashed
rounded rectangle with a mint caret, indented into the body as the chamber's **last** row, under
`    print(i)`, so the quiz is answerable and its correct answer is the one the comment promises; F3's
re-test is legible mid-spin with the return marker on the rail, the `pass 1/2/3` badges countable and
the `i` chip still reading `0` under `NEVER CHANGES`; the terminal strip reads
`>>> 0 0 0 0 0 0 0 0 …`. Two defects only the pixels caught (F1's gloss keywords set in decorative mint;
F2/F3 chambers one and two rows too short, so the last code line sat on their own bottom border) were
fixed and re-snapshotted — recorded in the project's `BRIEF.md`. A third, which the gates never saw, was
raised by part 18's builder: the slot first sat **above** the print, which made the viewer's correct
answer print `1 2 3 4 5` against a comment promising `0 1 2 3 4`. Moved to line 4, re-snapshotted at
15.6 / 16.5 / 17.5 / 18.6s and read.
