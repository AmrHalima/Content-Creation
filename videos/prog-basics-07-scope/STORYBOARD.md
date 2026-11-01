---
format: 1080x1920
duration: 51.7s
message: "a name made inside a function lives and dies there, and the global with the same name is a different box"
arc: hook → analogy → mechanism → example → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 7 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-07-scope (prog-basics, part 7 of 11)

English master, portrait 1080x1920, 51.7s measured (target ~44s, ceiling 54s).
Copy source of record: `writing/prog-basics/pieces/07-scope.md`.
Shape: bible § 3. Grammar: `frame.md` v2 § 4 (G1 hook, G2 box, G2b row, **G2c rooms** — this part is
its only user in the batch — G3 code chamber, G4 split, G5 CTA) and § 7 (the motion primitives).
Durations below are the measured VO plus authored air, and every emphasis time in the frame files
cites a measured word onset from `audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground
`#15181D` with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for
everything read, JetBrains Mono for code and chrome; and colour as a lesson — amber = the word being
said, mint = a value, coral = an error the interpreter raised. Every frame carries at least two
primitives, and no cut lands on the previous frame's layout: archetype, wipe direction and hero
position all change between neighbours.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end
at their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the
spoken word only; mint `#5AD6A0` marks values and output only; coral `#FF6B5A` marks the one raised
exception in this part and appears nowhere else. Content lives between y = 230 and y = 1004; the
caption band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

**Scope is drawn as a literal boundary.** The function's walls are *drawn* (P4) in the order
left → top → right → bottom, and the room closes on the word "function". The local box is created
inside the closed room (P2 drop-in) and destroyed inside it, leaving the spec's dashed empty box
with a blinking caret behind. The global of the same name sits in the outer room and is never
touched. The lookup is an amber search head that leaves the wall and runs out into empty module
space, then blinks out.

Cuts: each frame wipes its content in from a different edge and pushes it out (`y: 0 → -60`, 0.3s)
in its last 0.3s, inside the ~1s silence pad, so no sentence spans a cut and no join is a hard cut
to an identical board. F5 is the loop frame, so it holds and breathes instead of pushing out.

## Frame 1 — The hook

- scene: `it exists here`, a wall drawn between the two lines, `one line later, not here`, and a probe that cannot cross it
- duration: 4.9s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- voiceover: "Why does your variable not exist one line later?"
- sfx: none

## Frame 2 — First half of the idea

- scene: a room inside a room: the module, then f() with its walls drawn, the box x=1 inside it, and a search that leaves the wall and finds nothing
- duration: 9.7s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-rooms.html
- type: concept
- beat: the metaphor lands
- voiceover: "Scope decides where a name is visible. Inside the function, x is real. Outside, it never was."
- sfx: none

## Frame 3 — The mechanism

- scene: two boxes carrying the same tab x: the inner one is made, dies and leaves an empty dashed box; the outer one is never touched
- duration: 11.7s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-two.html
- type: mechanism
- beat: the claim
- voiceover: "The box is made inside, and it dies inside. A global x with the same name never changed. Two boxes, one label."
- sfx: none

## Frame 4 — The worked example

- scene: the rebuilt demo: x=99 outside, x=1 inside, f(); print(x) still gives 99 — then a second file with no global, where print(x) really does raise NameError
- duration: 16.2s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof
- voiceover: "Outside the wall, x is ninety-nine. Inside f, x becomes one. Call f, then print x. Still ninety-nine. Now reach for f's x from outside: NameError."
- sfx: none

## Frame 5 — The quiz card

- scene: the quiz card: NameError / UnboundLocalError pills, COMMENT THE NAME
- duration: 9.2s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Which scope error have you hit the most? Comment the name: NameError or UnboundLocalError."
- sfx: none

## Real durations

| Frame | VO seconds | Frame seconds (VO + air) | Absolute window | VO words |
|---|---|---|---|---|
| F1 | 3.883 | 4.9 | 0 – 4.9 | 9 |
| F2 | 8.661 | 9.7 | 4.9 – 14.6 | 17 |
| F3 | 10.731 | 11.7 | 14.6 – 26.3 | 22 |
| F4 | 15.168 | 16.2 | 26.3 – 42.5 | 26 |
| F5 | 7.787 | 9.2 | 42.5 – 51.7 | 14 |
| **film** | **46.230 speech** | **51.7** | **0 – 51.7** | **88** |

Air at each cut: 1.0s (1.4s on the last frame, which loops under the platform's chrome). The wipe is
authored inside that silence.

## Accuracy — the demo this frame set teaches

Correction #7 (approved). F4 group one is `x = 99` / `def f():` / `    x = 1` /
`f(); print(x)     # 99`, which prints `99` (executed, Python 3.13.15): the local never reached
the global. F4 group two is `def f():` / `    x = 1` / `f()` / `print(x)` with **no global**,
which raises `NameError: name 'x' is not defined` (executed) — the `NameError` the brief wanted,
now labelled as a dead local rather than passed off as proof of scope. Re-verified for this project
by `.tmp/verify_pb07.py`.
