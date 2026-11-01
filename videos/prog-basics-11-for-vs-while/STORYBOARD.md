---
format: 1080x1920
duration: 43.9s
message: "a for loop repeats a count you already know; a while loop repeats until something changes, and if nothing ever changes it hangs"
arc: hook → mechanism A (finite walk) → mechanism B (re-testing gate, then the hang) → example → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 11 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-11-for-vs-while (prog-basics, part 11 of 11)

English master, portrait 1080x1920, target ~45s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/11-for-vs-while.md`. Shape: bible § 3. Grammar: `frame.md` v2 § 4
(G1 hook, G4 split, G3 code chamber, G5 CTA) and § 7 (the motion primitives). Durations below are
the measured VO plus authored air, and every emphasis time in the frame files cites a measured word
onset from `audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground
`#15181D` with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for
everything read, JetBrains Mono for code and chrome; and colour as a lesson — amber = the word being
said, mint = a value, coral = an error the interpreter raised. **This part raises no exception, so it
ships with zero coral.** Every frame carries at least two primitives, and no cut lands on the
previous frame's layout: archetype, wipe direction and hero position all change between neighbours.

## The two loops, made physical

This part's motion is not decoration, it is the argument. F2 is a **finite walk**: the count `3`
exists on screen before the rail is drawn, a marker labelled `i` steps across exactly three known
positions while a turn strip ticks `1/3 → 2/3 → 3/3`, and the walk stops because it was always going
to — a stop bar drops and the marker dims. F3 is a **gate that re-tests**: the body fills, the
loop-back arrow redraws itself, and the chip is re-evaluated on every pass; on the third pass `done`
flips and the rail releases through an exit arrow. Then the escape line is struck out and the same
apparatus spins in a **bounded** accelerating cycle (six passes, 0.72s → 0.15s, then an ellipsis and
an amber `IT NEVER STOPS` plate). Nothing in this film is an unbounded loop, and nothing reads
`Math.random()` or `Date.now()`.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken
word only; mint `#5AD6A0` marks values and printed output only; coral `#FF6B5A` is unused here.
Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty
for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
~1s authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

## Frame 1 — The hook (G1)

- scene: the hook line arrives as type on graphite over a slow muted spinner ring; `hang` is swept amber; two mono glosses arrive — `a loop runs the same lines again`, `a hang never stops`
- duration: 4.4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the stake
- voiceover: "Pick the wrong loop and you'll hang your program."
- sfx: none

## Frame 2 — The finite walk (G2b row, the `for` half of the split)

- scene: the count `3` lands first, above the rail, before the rail is drawn. Three chambers arrive, a marker steps across them one per turn while a strip ticks `1/3 2/3 3/3`, and the executed values `0 1 2` drop in mint. A stop bar drops and the marker dims: the walk ends because the count was settled first.
- duration: 9.9s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-walk.html
- type: mechanism
- beat: the safe half
- voiceover: "A for loop repeats a known count. You say how many before it runs. Or it walks a list, item by item."
- sfx: none

## Frame 3 — The gate that re-tests, then the hang (G3 chamber)

- scene: one chamber with a condition chip `not done` at its gate and a loop-back arrow. Pass 1, pass 2: the body fills and the chip is re-read. Pass 3: `done` flips, the chip reads `False`, the arrow releases and an exit arrow runs out. Then the escape line is struck out, the chip pins at `True`, and the cycle spins six times, faster each time, ending on an ellipsis and an amber `IT NEVER STOPS` plate while everything else freezes.
- duration: 14.2s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-gate.html
- type: mechanism
- beat: the claim, and the stake
- voiceover: "A while loop repeats until something changes. Waiting for a right answer. Retrying until it works. If that check never turns false, it never stops."
- sfx: none

## Frame 4 — The worked example (G4 split, two code chambers)

- scene: two `main.py` panels side by side, three lines each, each with a `PYTHON` chip — `for i in range(3): / print(i) / # 0 1 2` against `done = False / while not done: / done = True`. Amber plates wipe over `range(3)`, then `not done`, then `True` as each is spoken; three mint chips tick `0 1 2` under the left panel. Type-on under a caret, one line per spoken clause.
- duration: 9.8s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-split.html
- type: example
- beat: proof
- voiceover: "for i in range of three gives zero, one, two. while not done runs until somebody sets done to true."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: `Which do you use more?` over two pills `FOR` / `WHILE` carrying their own glosses, an amber ring that travels between them on the two spoken words, the `COMMENT IT` plate, and the series line with `SERIES DONE`.
- duration: 5.6s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "So which do you use more, for or while? Comment it."
- sfx: none

## Real durations

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.371 | 4.4 | 9 | 0s → VO end |
| F2 | 8.896 | 9.9 | 22 | 0s → VO end |
| F3 | 13.205 | 14.2 | 25 | 0s → VO end |
| F4 | 8.768 | 9.8 | 20 | 0s → VO end |
| F5 | 3.584 | 5.6 | 11 | 0s → VO end |
| **film** | **38.4 speech** | **43.9** | **87** | |

Air at each cut: ~1.0s (2.0s on the last frame, which loops under the platform's chrome), so the 0.5s
crossfade sits inside silence and no sentence spans a cut (BATCH.md fix 6). `studio voice` overwrites
the VO column with the measured durations and re-syncs the frame durations; the estimates above are
only the starting point.
