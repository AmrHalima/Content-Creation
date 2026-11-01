---
format: 1080x1920
duration: 42.9s
message: "the parameter is the empty seat in the definition; the argument is the value that sits in it at the call"
arc: myth stated → the seat and the value → why the seat survives → the code that proves it → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 5 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-05-params-vs-args (prog-basics, part 5 of 11)

English master, portrait 1080x1920, ~45s target and 52s ceiling. Copy source of record:
`writing/prog-basics/pieces/05-params-vs-args.md` (narration verbatim, 89 words). Shape: bible § 3.
Grammar: `frame.md` v2 § 4 (G1 hook, G2 box, G2 two-chamber, G3 code chamber, G5 CTA) and § 7 (the
motion primitives). Durations below are the estimated VO plus authored air; `studio voice` rewrites
them to the measured VO length and each frame then keeps ~1.0s of that air, so the 0.5s exit push and
the next frame's 0.42s entrance wipe both sit inside silence and no sentence spans a cut.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground `#15181D`
with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for everything read,
JetBrains Mono for code and chrome; and colour as a lesson — amber = the word being said, mint = a
value, coral = an error the interpreter raised (and none is raised in this part). Every frame carries
at least two primitives, and no cut lands on the previous frame's layout: archetype, wipe direction
and hero position all change between neighbours.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and output only. Content lives between y = 230 and y = 1004; the
caption band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

Transitions are authored inside the frames, not faked by a cut: each frame wipes its content band in
from its own edge (`x: ±140 → 0` or `y: 90 → 0`, 0.42s `power3.out`) and pushes it out at its own end
(`y: 0 → -60` + fade, 0.3s), inside the air pad. Directions alternate — in: cut / left / up / right /
down — so no two joins feel the same, and neighbours never share an archetype, a hero position or a
wipe direction.

The part's meaning-carrying motion, stated once here and built in the frames: **the seat is empty and
stays empty; a value crosses into it and leaves.** F2 drops the value in (P2). F3 keeps the left
chamber untouched while the right one fills, empties and refills (P2 + hold). F4 draws a wire between
the definition line and the call line and runs the value along it (P8 `arrow-run`), twice — `2` → `a`,
then `3` → `b`.

## Frame 1 — The myth, stated

- scene: `PARAMETER` and `ARGUMENT` arrive as two stacked labels from opposite edges, a hairline seam
  rule draws itself between them, an amber `≠` pops on the seam and `NOT THE SAME` takes the amber
  highlighter sweep, then `INTERVIEWERS KNOW IT` rises under it
- duration: 6.4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- voiceover: "Parameters and arguments are not the same thing, and interviewers know it."
- sfx: none

## Frame 2 — The empty seat, then the value

- scene: the G2 chamber with the name tab `a` drawn dashed and a dim mint caret blinking inside it —
  visibly empty; the amber sweep lands on `PARAMETER`; then a mint `2` chip falls into the chamber
  (P2 drop-in), the border goes solid, and the tab label swaps to `ARGUMENT`
- duration: 12.5s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-seat.html
- type: concept
- beat: the metaphor lands
- voiceover: "A parameter is the placeholder in the function definition. It's the empty seat. An argument is the actual value you pass when you call."
- sfx: none

## Frame 3 — The seat survives, the value does not

- scene: two identical chambers, `DEFINITION` and `CALL`. The left one stays empty and untouched for
  the whole frame (caret still blinking at the end). The right one takes `2`, drops it, takes `3`,
  drops it, takes `7` — only the right one ever moves
- duration: 8.7s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-two-seats.html
- type: mechanism
- beat: the claim
- voiceover: "The seat exists before anyone arrives. The value fills it, for that one call, and then it's gone."
- sfx: none

## Frame 4 — The code that proves it

- scene: `main.py` chamber, PYTHON 3.13 chip. `def add(a, b):` types on under a caret, then
  `    return a + b`, then `add(2, 3)`. The inline comment `# a, b = parameters` enters only with the
  word "parameters"; `# 2, 3 = arguments` only with "arguments". Then an amber wire draws from the
  call line up to the def line and a mint `2` travels along it into the `a` seat, then `3` into `b`
  (P8 arrow-run)
- duration: 9.9s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof
- voiceover: "Define add, with a and b. Those two are parameters. Call add with two and three. Those two are arguments."
- sfx: none

## Frame 5 — The ask

- scene: CTA: headline `the empty seat` (6.4cqw, one line), the mechanic verb as a solid amber plate
  `COMMENT "SEAT"`, three small dashed seats in a row under it — one takes a mint value and holds it,
  annotation `one seat per value`, brandline `PROGRAMMING BASICS · 05 · BEGINNER`
- duration: 5.4s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "If that finally made it click, comment the word seat."
- sfx: none

## Real durations

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 5.419 | 6.4 | 12 | 0s → 5.42s |
| F2 | 11.499 | 12.5 | 24 | 0s → 11.22s |
| F3 | 7.744 | 8.7 | 18 | 0s → 7.30s |
| F4 | 8.875 | 9.9 | 20 | 0.10s → 8.40s |
| F5 | 4.011 | 5.4 | 10 | 0s → 3.66s |
| **film** | **37.548 speech** | **42.9** | **84** | |

Measured by `studio voice` (Kokoro `af_heart` @0.74) and `studio cues` (faster-whisper `small`, asr
mode — real onsets, aligned onto the approved script text). Air at each cut: 1.0s, and 1.4s on the
last frame, which loops under the platform's chrome. The wipe in and the push out are both authored
inside that silence.

Note on the count: `pieces/05-params-vs-args.md` frontmatter says `words: 89`; the narration it
supplies tokenises to 84 spoken words (12/24/18/20/10). The narration is verbatim and untouched —
only the arithmetic label differs, and the film lands at 42.9s against a ~45s target and 52s ceiling.
