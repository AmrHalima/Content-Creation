---
format: 1080x1920
duration: 31.7s
message: "the base case is the card where the descent stops; leave it out and the call stack keeps growing until the interpreter raises"
arc: hook → the descent that stops → the column that runs out → example → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 15 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-15-base-case (prog-basics, part 15 of 22)

English master, portrait 1080x1920, target ~29-34s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/15-base-case.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4 — G1
hook, **G6 call stack twice** (F2 descent, F3 run-out), G3 code chamber, G5 CTA. Durations below are
**the measured VO from `studio cues` plus authored air**, per `WAVE2-PACKET.md` § 2 and frame-day2
§ 12; every emphasis time in the frame files cites a measured word onset from `audio_meta.json`.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value, coral = an error the interpreter raised. **This is the one part in the
tranche that earns coral**: Python 3.13.15 raised `RecursionError` on this machine for the exact
fragment on screen (bible-day2 § 4). It appears on card 8's border and on the two terminal strips,
nowhere else. **Mint appears zero times**: no card in this film ever returns a value, so there is no
printed value to draw (F2's valbands stay empty by design — the lesson is the stop, not the return).
Every frame carries at least two § 7 primitives, and no cut lands on the previous frame's layout: F1
type alone, F2 the column arriving and ending, F3 the column overrunning, F4 a chamber, F5 the plate.

## The G6 geometry this part had to solve (read before editing F3)

pb-14 proved G6 at four cards with a 96px step (tops 262/358/454/550 → 634) and told part 15 to do the
sum. Eight cards at 96px put the last card at 934 → 1018, past the framework's y 1004 content limit.
So F3 runs **pb-14's recorded 78px alternative** with the card height taken 84 → 72px (a 72px card at
a 78px step keeps a 6px gap instead of overlapping), and the terminal strip sits **898 → 994** below
it: card tops **262 / 340 / 418 / 496 / 574 / 652 / 730 / 808**, bottoms **880**. Left insets and
widths keep pb-14's increments (+64 left, −88 width), so card 8 is 320px wide — still enough for
`f(-3)` plus `waits` at the 28px floor. **F2 keeps pb-14's four-card numbers verbatim.**

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops are `D/4` with
`repeat: 3`, so four segments cover each frame exactly and land back on their from-value — a cut never
resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word only and **never two plates at
once**; coral `#FF6B5A` is the raised message and card 8's border only; `--panel` `#1F242C` chambers
on the field with 3px `rgba(255,255,255,0.16)` hairlines (a field-coloured chamber is invisible and
passes both gates). Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344;
1344-1920 stays empty for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge (F2 up, F3 right, F4 left, F5 down) and
pushes out `y → -60` inside its own air, so no sentence spans a cut and no join is a hard cut to an
identical board.

## Frame 1 — The hook (G1)

- scene: type alone on the ground, three groups, nothing illustrated. `Forget this one thing` arrives, then `you'll get a` in `--muted`, then `stack overflow` on the solid amber say-plate (P1 sweep inside the first second of its own utterance). A settle rule runs under it (P10) and a muted mono gloss pairs the two names of the crash: `python names it RecursionError`. Kicker `PROGRAMMING BASICS · BASICS II · 15` with a muted outline `BEGINNER` chip.
- duration: 5.4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the stake
- voiceover: "Forget this one thing and you'll get a stack overflow."
- sfx: none

## Frame 2 — The descent that stops (G6)

- scene: four G6 cards drop in one per spoken clause at pb-14's verbatim geometry (insets 72/136/200/264, widths 936/848/760/672, tops 262/358/454/550, h 84, 38px name tab as the card's own top strip). Tabs read `f(4) f(3) f(2) f(1)` in mono 700, pending slots read `waits` in `--muted`. On "stops" the fourth card's pending slot flips to a solid `--say` `BASE` plate — the frame's only amber, and it is on the word the voice is on. Valbands stay empty: this frame is about the stop, not the return. Ambient float on card 1.
- duration: 5.1s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-descent.html
- type: mechanism
- beat: the base case is where it stops
- voiceover: "The base case is where recursion stops."
- sfx: none

## Frame 3 — The column runs out (G6 overflow)

- scene: eight cards on the 78px step descend one per measured word onset, counting past zero into the negatives: `f(4) f(3) f(2) f(1) f(0) f(-1) f(-2) f(-3)`. Every pending slot says `waits` and no BASE plate appears anywhere — that absence is the frame. Card 8 arrives with a 3px `--err` border (the only coral card in the film) and the terminal strip below the column carries `RecursionError: maximum recursion depth exceeded` in `--err` with a muted mono `DEPTH 1000` tag on its second row. The strip holds inside the content box (898 → 994, lowest measured content row 993) and is readable for over a second before the exit push. Cards are dealt from under the pile (descending `z-index`) so an in-flight card never ghosts its tab across the card above it.
- duration: 7.6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-runout.html
- type: mechanism
- beat: the crash, drawn
- voiceover: "Without it, the function calls itself until the call stack runs out."
- sfx: none

## Frame 4 — The worked example (G3)

- scene: one `main.py` chamber with the `PYTHON` chip, four lines. P3 type-on under a caret, one line per spoken clause: `def f(n):`, then `    return f(n - 1)` (four literal spaces of indentation, single-quoted Python, ligature guard on), then a 3px **dashed empty slot** labelled `base case goes here` in muted mono — G2's "waiting to be filled" convention, its border flashing amber on "a base case" (a colour flash, not a second plate), then `f(4)`. `f(n - 1)` takes the frame's one amber say-plate on "a step that moves toward it". The terminal strip carries the raised message in `--err` with the tag `DEPTH 1000 · NO BASE CASE`; the amber plate is retired before the coral strip arrives.
- duration: 7.3s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof, and the rule
- voiceover: "Every recursive function needs a base case and a step that moves toward it."
- sfx: none

## Frame 5 — The quiz (G5)

- scene: the ask in two ≤20-character groups — `what's the base case` / `for summing a list?` at 6.4cqw — over two dimmed G6 echo cards, `sum(nums)` and `sum([]) ` with a `?` in their pending slots (the quiz, posed not answered). The dim is on the containers' background and border per frame-day2 § 14; the mono text stays at full ink. The mechanic verb plate `COMMENT IT` drops in on the spoken verb (P2) as the frame's only amber, then the series line `PROGRAMMING BASICS · BASICS II · 15 · BEGINNER` closes. The answer (`0` on the empty list) is in the pinned comment, never on this frame. F5 loops under the platform's chrome, so it holds alone.
- duration: 6.3s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "What's the base case for summing a list? Comment it."
- sfx: none

## Real durations

Measured VO (from `studio cues`) + authored air = frame duration, cumulative film start:

| Frame | VO seconds | Air | Frame seconds | VO words | Film start |
|---|---|---|---|---|---|
| F1 | 3.008 | 2.39 | 5.4 | 10 | 0.0 |
| F2 | 2.389 | 2.71 | 5.1 | 7 | 5.4 |
| F3 | 4.011 | 3.59 | 7.6 | 12 | 10.5 |
| F4 | 4.352 | 2.95 | 7.3 | 14 | 18.1 |
| F5 | 2.880 | 3.42 | 6.3 | 10 | 25.4 |
| **film** | **16.64 speech** | **15.06 air** | **31.7** | **53** | |

Measured by `studio voice --speed 0.93` (5 wavs: 3.008 / 2.389 / 4.011 / 4.352 / 2.88) and
`studio cues` (53 words over **5 lines** = 5 frames, so no `SCRIPT.md` heading was silently merged).
`studio voice` wrote the VO column into `- duration:`; the air was then added back per frame and every
internal onset in the frame files is keyed to a cued word, not to an estimate.

**31.7s is above the 30s floor and inside the tranche's 29-34s band** — no words added (the user's
standing choice, bible-day2 § 0.2). The air is 1.5× the house ~1.0s because this is the tranche's
leanest narration (53 words vs pb-21's 60); at the house air the film lands ~22.6s. What each extra
second buys: F1 the settle rule + the `RecursionError` gloss after the hook ends; F2 the four drop-ins
at ~0.5s spacing + the BASE sweep + a P7 pulse-set across the four `waits` so the board is alive
between the VO and the cut; F3 eight drop-ins + the coral arrival + **3.2s of hold on a 48-character
error line** (the packet's own rule: an emphasis under ~0.4s is a retime finding); F4 four type-on
passes + the dashed-slot flash + the strip; F5 the plate drop and the loop hold under the platform's
chrome (§ 12's first lever).
