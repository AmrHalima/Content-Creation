---
format: 1080x1920
duration: 25.62s
message: "a while loop only ends when its check turns false, and the check only turns false if something in the loop changes the variable it reads"
arc: hook → the definition (the check never turns false) → the cause (the variable never updates) → the broken example + the habit → the quiz
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 12 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-12-infinite-loops (prog-basics, part 12 of 22)

English master, portrait 1080x1920, the tranche's planning band is ~29-34s (ceiling 54s) and this part
lands **under** it — see `## Real durations`. Copy source of record:
`writing/prog-basics/pieces/12-infinite-loops.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4
example, F5 CTA). Grammar: `frame.md` v2.1 § 4 (G1 hook, G3 code chamber, **G3-gate** = pb-11's gate
that re-tests, G5 CTA) and § 7 (motion primitives). Durations below are the estimates the voice run
replaces with measured VO; the authored air (~1.0s per frame, grown pad on F5) is added back into
`- duration:` after `studio cues`, per bible-day2 § 12.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value or what printed, coral = an error the interpreter raised. **This part raises
no exception, so it ships with zero coral**: a hang does not raise anything, and `--err` is reserved
for text an interpreter actually produced on this machine (`frame-day2.md` § 1, § 6 of the wave
packet). The stuck state is carried by motion plus one amber say-plate per frame on the spoken words,
which is exactly how pb-11 shipped its own hang and why. Every frame carrying code disables mono
ligatures so `i < 5` renders as a learner would type it. No cut lands on the previous frame's layout:
F2 wipes in from the left, F3 from the right with a narrower chamber and the gate apparatus under it,
F4 wipes up into a full-width four-row chamber with a terminal strip, F5 drops down.

## The clone note (what this file inherits rather than re-derives)

F3 **is** `videos/prog-basics-11-for-vs-while/compositions/frames/03-gate.html` adapted: same gate that
re-tests, same loop-back arc that redraws on every pass, same pass badges, same bounded accelerating
spin (six redraws, 0.72s → 0.15s, never an unbounded loop), same ellipsis-and-plate ending. What
changes is the object being taught: pb-11's escape line `done = True` existed and got struck out,
whereas part 12 has **no escape line to strike** — the cause is a variable that never moves, so F3 adds
a mint `i` chip pinned at `0` that pulses once per pass and never increments. F2 and F4 take pb-21's
G3 chamber, caret/mask and terminal-strip atoms verbatim; F5 takes pb-21's G5 shell (headline band,
`--say` verb plate, muted series line) with pb-11's dimmed-callback-hint idea. Nothing here is
authored from scratch, and nothing here re-cuts the look.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and printed output only; `--panel` `#1F242C` chambers on the field
with 3px `rgba(255,255,255,0.16)` hairlines (a chamber painted in the field colour is invisible and
passes both `check` and `verify`). Countable things get `--line` (0.16), never `--line-faint` (0.08).
Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty
for the platform's own chrome.

## Frame 1 — The hook (G1)

- scene: type alone on the ground, four groups, nothing illustrated. `Your program froze` arrives, then `and your laptop fan`, then `is screaming`, then `Here's why` in muted ink. The amber say-plate wipes left-to-right behind `froze` on its own onset and the word flips to say-ink. Two mono glosses settle after it: `a loop runs the same lines again`, `frozen = it is still running`.
- duration: 4.95s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the stake, and the joke
- voiceover: "Your program froze and your laptop fan is screaming. Here's why."
- sfx: none

## Frame 2 — The check that never turns false (G3)

- scene: one `main.py` chamber with a `PYTHON` chip, three lines written under a moving caret on P3 type-on — `i = 0`, `while i < 5:`, `    print(i)`. The `0` drops into the assignment on P2 and turns mint. The amber say-plate wipes over `i < 5` as the voice says `condition`. Below the chamber, the chip labelled `the check` stamps `True`, then two more `True` stamps arrive after it one per beat and hold: the check is re-read and never flips.
- duration: 4.56s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/02-never-false.html
- type: mechanism
- beat: the definition
- voiceover: "An infinite loop happens when the condition never becomes false."
- sfx: none

## Frame 3 — The gate that re-tests forever (G3-gate, the pb-11 clone)

- scene: a narrower chamber at the left, and the gate apparatus under it: the `the check` chip, the wire, the body box that fills and drains, the loop-back arc that redraws itself on every pass, and pass badges `pass 1` / `pass 2` / `pass 3`. The new object is the mint `i` chip holding `0`: it pulses once per pass (P7) and never moves. The chip pins at `True`, the arc runs a bounded accelerating spin (six redraws, 0.72s to 0.15s), everything else freezes and the amber plate `forgot to update` lands on the spoken words.
- duration: 4.9s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-gate.html
- type: mechanism
- beat: the cause
- voiceover: "Usually you forgot to update the variable the condition depends on."
- sfx: none

## Frame 4 — The broken loop, and the habit (G3)

- scene: the full-width `main.py` chamber, four rows in the code-line column: `i = 0`, `while i < 5:`, `    print(i)`, then a **dashed empty slot** with one dim mint caret blinking (G2's `empty` shape, drawn in the indented position inside the body as the last row — the update line belongs after the print, because `i += 1` above the print would print `1 2 3 4 5`, not the `0 1 2 3 4` the pinned comment promises; and it stays empty — nothing names what belongs there). The terminal strip under it prints the executed output in mint: `0 0 0 0 0 0 0 0 …` — the zero repeats because the variable the check reads repeats. The amber plate `NEVER ENDS` arrives on the spoken words `what ends it`, in its own lane beside the strip.
- duration: 5.05s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/04-missing-line.html
- type: example
- beat: proof, and the quiz board
- voiceover: "Before running any loop, ask: what changes each round, and what ends it?"
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: `spot the missing line?` at 6.4cqw in the 176px band over the dimmed 0.42 four-row chamber from F4 — still dashed, still empty, still blinking, still not answered. The `COMMENT IT` amber plate lands on the mechanic verb, then the series line `PROGRAMMING BASICS · BASICS II · 12 · BEGINNER`. Holds alone; no exit push.
- duration: 6.16s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Spot the missing line? Comment it."
- sfx: none

## Real durations

Measured on 2026-10-28 by `studio voice` (Kokoro `af_heart` at the house **0.93**, printed line
`provider=kokoro voice=af_heart lang=en speed=0.93`) + `studio cues` (51 words over 5 lines, local
faster-whisper, not the estimate path), which also produced the per-word onsets every emphasis time in
the frame files cites. Air is 1.0s per frame and a grown 4.0s pad on F5 (which loops under the
platform's chrome and carries no exit push), so each 0.5s crossfade sits inside silence and no sentence
spans a cut.

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.947 | 4.95 | 11 | 0s → 3.66s |
| F2 | 3.563 | 4.56 | 10 | 0s → 3.24s |
| F3 | 3.904 | 4.90 | 11 | 0s → 3.68s |
| F4 | 4.053 | 5.05 | 13 | 0s → 3.86s |
| F5 | 2.155 | 6.16 | 6 | 0s → 1.90s |
| **film** | **17.622 speech** | **25.62** | **51** | |

Cumulative starts: 0 / 4.95 / 9.51 / 14.41 / 19.46 → 25.62.

**RUNTIME FINDING — under 30s, reported not padded.** 51 spoken words is the leanest copy in the
tranche, and the measured rate lands at 2.9 words/second rather than the carriers' 3.24 because this
part's sentences carry the tranche's longest pauses (three of the five lines are two sentences). Even
with the full authored air, and with **F5's pad grown from the standing 2.0s to 4.0s** (air there is
shape, not filler, and F5 must hold alone — 6.16s sits with pb-11's 5.6s and pb-21's 5.56s), the film
is 25.62s rather than in the 29-34s band. Per `series-bible-day2.md` § 0.2 the user chose "no added
words", so nothing was added, the other four frames' 1.0s air was not shrunk, and the number is
reported at the gate.
