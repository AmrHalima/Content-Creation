---
format: 1080x1920
duration: 40.1s
message: "a string is a row of characters, and each character sits at an index that starts at zero"
arc: hook → analogy → mechanism → example → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 3 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-03-strings-vs-chars (prog-basics, part 3 of 11)

English master, portrait 1080x1920, 40.1s measured (target ~40s, ceiling 52s).
Copy source of record: `writing/prog-basics/pieces/03-strings-vs-chars.md`.
Shape: bible § 3. Grammar: `frame.md` v2 § 4 (G1 hook, G2 box, G2b row, G2c rooms, G3 code
chamber, G4 split, G5 CTA) and § 7 (the motion primitives). Durations below are the measured VO plus authored air, and every emphasis time in the frame files cites a measured word onset from `audio_meta.json`.

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
spoken word only; mint `#5AD6A0` marks values and output only; coral `#FF6B5A` marks raised
exceptions only. Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344;
1344-1920 stays empty for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside
the ~1s silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

## Frame 1 — The hook

- scene: the hook line arrives as type on graphite, `one` swept amber, then `tiny things in a row`
- duration: 5.8s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- voiceover: "A string isn't one thing. It's a lot of tiny things in a row."
- sfx: none

## Frame 2 — First half of the idea

- scene: one small chamber, one character `c` dropping into it, three chips: letter, digit, space
- duration: 6.9s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-char.html
- type: concept
- beat: the metaphor lands
- voiceover: "A character is one symbol. One letter, one digit, even one space."
- sfx: none

## Frame 3 — The mechanism

- scene: the single box multiplies into four, an index strip 0-3 ticks in, and the slice bracket stops before 3
- duration: 12.5s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-row.html
- type: mechanism
- beat: the claim
- voiceover: "Line those symbols up and you have a string. Each one sits at a position, counting from zero. A slice takes the letters before its end."
- sfx: none

## Frame 4 — The worked example

- scene: three lines of Python type on under a caret, the comments carrying 'c' and 'od' arrive with the values
- duration: 7.6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof
- voiceover: "Word is code. Position zero gives you c. Slice one to three gives you od."
- sfx: none

## Frame 5 — The save card

- scene: the CTA card: `Slice your own name`, SAVE THIS plate, a name spelled in four small boxes
- duration: 7.3s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Save this. Then slice your own name. Position zero is the first letter."
- sfx: none

## Real durations

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 4.800 | 5.8 | 14 | 0s → 4.80s |
| F2 | 5.909 | 6.9 | 12 | 0s → 5.90s |
| F3 | 11.520 | 12.5 | 26 | 0s → 11.50s |
| F4 | 6.635 | 7.6 | 15 | 0s → 6.60s |
| F5 | 5.888 | 7.3 | 13 | 0s → 5.90s |
| **film** | **34.752 speech** | **40.1** | **80** | |

Air at each cut: 1.0s (1.4s on the last frame, which loops under the platform's chrome). The wipe is
authored inside that silence.
