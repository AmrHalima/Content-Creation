---
format: 1080x1920
duration: 48.8s
message: "a condition picks one path, and the first match wins"
arc: hook → the fork, two paths → elif, first match wins → the code that runs both ways → the challenge
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 9 of 11
identity: bench-v2
grammar: G1 G2 G3 G5
mechanic: Challenge
---

# STORYBOARD — prog-basics-09-if-else (prog-basics, part 9 of 11)

English master, portrait 1080x1920, ~45s target and 52s ceiling. Copy source of record:
`writing/prog-basics/pieces/09-if-else.md`, with the approved TRAP correction from
`writing/prog-basics/CORRECTIONS.md` entry 2 carried on F5. Shape: bible § 3. Grammar: `frame.md` v2
§ 4 (G1 hook, G2 box variant = the two doors, G2 variant = the three doors, G3 code chamber, G5 CTA)
and § 7 (the motion primitives). Durations below are measured VO + authored air; `studio voice`
rewrites them to the measured VO length and each frame then keeps ~1.0s of that air, so the 0.5s exit
push and the next frame's 0.42s entrance wipe both sit inside silence and no sentence spans a cut.

## The meaning-carrying motion: the FORK

The whole part is one picture: a road that splits. The abstract claim ("a condition picks one path,
and the first match wins") is not captioned — it is performed, in four escalating uses of the same
object:

- **F1** the fork is *drawn*: a trunk grows down from the hook word and splits into two stroke paths
  that draw themselves. Nothing is explained yet; the shape arrives with the word `this`.
- **F2** the fork is *used*: the condition chip evaluates, the answer `True` becomes a chip and
  physically travels down the upper branch into the top door, while the lower branch desaturates, its
  caret dies and its door drops to inert. The untaken path is visibly inert, not merely unlit.
- **F3** the fork is *searched*: three doors, and a test marker runs DOWN the list asking each
  question in turn. It stops at the first `yes`. The doors after the stop are never asked — they get
  a `never checked` tag and go inert. The stop is the lesson; it must read as motion with the sound
  off.
- **F4** the fork is *in code*: the same block, run twice with two different ages. A branch rail to
  the left of the code lights the taken line and drops the other, and the terminal strip changes
  output when the value changes. `age 20 → Welcome`, `age 15 → Sorry` — both executed figures.

Per frame.md v2 § 0 principle 3, "static text on a background is a defect in this campaign".

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground `#15181D`
with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for everything
read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word being said, mint = a
value, coral = an error the interpreter raised. **This film raises no interpreter error on screen**,
so coral is not used in any frame: frame.md v2 § 1 lists 09's exception as "in the reveal text only,
never on screen", and the piece's own `SyntaxError` string stays in muted chrome type. Every frame
carries at least two § 7 primitives, and no cut lands on the previous frame's layout.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values, output and the taken path only. Content lives between y = 230 and
y = 1004; the caption band sits at 1024-1344 (campaign skin, BATCH fix #1); 1344-1920 stays empty for
the platform's own chrome.

Transitions are authored inside the frames: each frame wipes its content band in from its own edge
(`x: ±140 → 0` or `y: 90 → 0`, 0.42s `power3.out`) and pushes it out at its own end (`y: 0 → -60` +
fade, 0.3s) inside the air pad. Directions alternate — cut / left / right / up / down — and
neighbours never share an archetype, a hero position or a wipe direction (frame.md § 7). Emphasis on
a spoken phrase is always one self-contained amber plate revealed by a `clip-path` wipe, never a
sibling highlighter plate plus a colour tween on the word — that pairing failed contrast mid-tween in
pb-05 and is the reason it is the rule here.

## Frame 1 — The hook, and the fork appears (G1)

- duration: 4.6s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook · beat: recognition
- voiceover: "Every decision your app makes comes down to this."
- scene: `EVERY DECISION` and `YOUR APP MAKES` arrive as two stacked display lines from opposite
  edges; a hairline seam draws between them; then `this` lands on its own amber plate (clip-path
  wipe) on its measured word onset, and behind it the **trunk** of the fork grows downward and
  splits into **two stroke paths** that draw themselves (`pb-wirev` scaleY draws, then two rotated
  `pb-wire` arms). A small muted mono tag `TWO PATHS` appears at the split. The empty upper field is
  allowed here because the *line* is the hook (piece F1), but the fork draws under it from ~3.0s, so
  the frame is never static.
- primitives: P1 (amber plate on `this`), P4-family `wall-draw` geometry reused as trunk draw,
  P8 `arrow-run` for the two arms drawing.
- sfx: none

## Frame 2 — Two doors, one taken (G2 two doors)

- duration: 13.3s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-two-doors.html
- type: concept · beat: the mechanism
- voiceover: "A condition is a yes or no question. If it is true, this block runs. Otherwise, the other block. One path runs, the other never gets read."
- scene: the G2 chamber split into **two stacked doors**, `true` above `false`, each labelled in mono
  and each with its own name tab. A condition chip `age >= 18` arrives between them on the rail; it
  evaluates and produces the mint answer chip `True`, which **travels down the upper branch** into the
  top door (P8 + P2). On arrival the top door fills bottom-up (P6 `box-fill`) and its tab flashes
  mint. The lower branch and lower door go inert: opacity to 0.28, border drops to faint, and the
  small caret inside it stops blinking and dies. On-screen gloss line `block = the lines under it`
  rises when the word `block` is spoken (the term is never left unglossed).
- primitives: P6 `box-fill` (this door ran), P8 `arrow-run` (the answer travels the taken branch),
  P2 `drop-in` (the answer chip lands), P1 plate on the gloss.
- sfx: none

## Frame 3 — Three doors, first match wins (G2 three doors)

- duration: 9.2s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-three-doors.html
- type: mechanism · beat: the claim that trips people up
- voiceover: "More paths? Add elif. Elif means else if. The first true answer wins, the rest never get checked."
- scene: a third door enters between the two and the stack re-labels `if` / `elif` / `else` (piece
  F3). Three questions on the left of the doors (`age >= 18`, `age >= 13`, `else`), a vertical test
  rail on the far left, and a **test marker that runs down the rail** asking each door in turn:
  door 1 answers `no`, door 2 answers `YES` and the marker **stops** on it (scale pop, rail above it
  lit, rail below it never drawn), door 3 is never asked and takes a muted `never checked` tag while
  it dims. The stop is the lesson: nothing below the first `yes` moves again for the rest of the
  frame. Amber plate emphasis on the phrase `first true answer` at its measured onset.
- primitives: P5 `spill-down` (the test runs downward through the cases), P6 `box-fill` (the matched
  door fills), P1 plate, P7 `pulse-set` (the three door tabs pulse in sequence as they are asked).
- sfx: none

## Frame 4 — The code that runs both ways (G3)

- duration: 11.3s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/04-code.html
- type: example · beat: proof
- voiceover: "If age is at least eighteen, print Welcome. Otherwise print Sorry. Age twenty gives Welcome. Fifteen gives Sorry."
- scene: `main.py` chamber with the `PYTHON 3.13` chip, four code lines max plus one terminal strip
  (frame.md § 4 G3). The block types on under a moving caret (P3): `if age >= 18:`,
  `    print('Welcome')`, `else:`, `    print('Sorry')`. To the left of the code a **branch rail**
  mirrors F2's fork: the taken line lights mint, the other stays inert. Then `age = 20` drops into
  the value chip (P2) and the terminal strip prints `Welcome`; the rail re-runs with `age = 15`, the
  *other* line lights and the strip prints `Sorry`. Both outputs are executed figures, single quotes
  per BATCH fix #3, and nothing coral: both branches are correct code.
- primitives: P3 `type-on`, P2 `drop-in` (the age value), P8 `arrow-run` (the rail), P6 `box-fill`
  (the taken line), P10-free (no wrong idea to strike here).
- sfx: none

## Frame 5 — The challenge, and the trap named (G5)

- duration: 10.4s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta · beat: the ask + the warning
- voiceover: "Challenge: rewrite that as a one-liner. Show me in the comments. Warning, the obvious attempt does not parse."
- scene: headline `one line, same behavior` at 6.4cqw in a 176px box (BATCH fix #5: a wrapped CTA
  headline collides with the pill, so this is 23 characters and one line), the mechanic verb as a
  solid amber plate `SHOW ME`, and beneath it the muted micro type `the obvious attempt is a
  SyntaxError` (piece F5, verbatim). The trap is named, not hinted: the exact broken form
  `if age >= 18: print('Welcome') else: print('Sorry')` sits in muted mono and a 3px amber rule draws
  across it (P10 `strike-out`) on the word `does not parse`. No working answer is shown — the reveal
  belongs to the pinned comment after 24h. Brandline `PROGRAMMING BASICS · 09 · BEGINNER`.
- primitives: P10 `strike-out`, P1 plate on the mechanic verb, P3 type-on for the broken fragment.
- sfx: none

## Real durations

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.584 | 4.6 | 9 | 0s → 3.58s |
| F2 | 12.267 | 13.3 | 27 | 0s → 12.27s |
| F3 | 8.171 | 9.2 | 18 | 0s → 8.17s |
| F4 | 10.304 | 11.3 | 18 | 0s → 10.30s |
| F5 | 8.960 | 10.4 | 18 | 0s → 8.96s |
| **film** | **43.286 speech** | **48.8** | **90** | |

To be overwritten from the measured `studio voice` + `studio cues` output; the air rule is 1.0s per
cut and ~1.4s on the last frame, which loops under the platform's chrome.
