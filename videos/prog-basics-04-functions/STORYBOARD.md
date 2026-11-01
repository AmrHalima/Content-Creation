---
format: 1080x1920
duration: 44.1s
message: "write the steps once, name them, and one fix repairs every call"
arc: hook → analogy → mechanism and payoff → example → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 4 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-04-functions (prog-basics, part 4 of 11)

English master, portrait 1080x1920, ~44s measured (target ~45s, ceiling 52s).
Copy source of record: `writing/prog-basics/pieces/04-functions.md`.
Shape: bible § 3. Grammar: `frame.md` v2 § 4 (G1 hook, G2 box, G3 code chamber, G5 CTA) and § 7
(the motion primitives). Durations below are the measured VO plus authored air, and every emphasis
time in the frame files cites a measured word onset from `audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground
`#15181D` with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for
everything read, JetBrains Mono for code and chrome; and colour as a lesson — amber = the word being
said, mint = a value or printed output, coral = an error the interpreter raised (none in this part).
Every frame carries at least two primitives plus an exit push, and no cut lands on the previous
frame's layout: archetype, wipe direction and hero position all change between neighbours.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end
at their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the
spoken word only; mint `#5AD6A0` marks values and output only. Content lives between y = 230 and
y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

The two load-bearing moves of this part, both literal motion:

1. **One recipe, many calls.** The recipe chamber in F2 stays on screen as F3 opens, and three call
   chips drop out of it on wires; each chip that lands re-runs the three step lines in sequence, so
   "the steps run again" is something the learner watches happen three times.
2. **One fix, every call.** In F3 a single amber edit highlight crosses one step line, the chamber's
   status strip changes, and all three chips pulse 0.1s apart. In F4 the definition and the two
   named calls are joined by a rail that draws itself, and both call lines pulse on "Two calls, one
   recipe".

Cuts: each frame wipes its content in from a different edge and pushes its content layer out
(`y: 0 → -60`, 0.3s) inside the ~1s silence pad, so no sentence spans a cut and no join is a hard
cut to an identical board.

## Frame 1 — The hook

- scene: two display lines arrive on the graphite board, `twice?` takes the amber sweep, then the muted sub-line rises
- duration: 5.6s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- voiceover: "If you copy-paste the same code twice, you're missing something."
- sfx: none

## Frame 2 — The named recipe

- scene: the chamber builds with its `greet` name tab, three step lines enter staggered, the headline `A named recipe` takes the amber sweep, then the tab pulses on "call it"
- duration: 9.4s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-recipe.html
- type: concept
- beat: the metaphor lands
- voiceover: "A function is a named recipe. Write the steps once. Give them a name. Call it whenever you need it."
- sfx: none

## Frame 3 — Run it again, fix it once

- scene: the same chamber moves up and three call chips drop onto it from wires, each landing re-runs the three steps in sequence; then one amber edit crosses one step line, the status strip changes and all three chips pulse 0.1s apart
- duration: 11.3s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-calls.html
- type: mechanism
- beat: the claim and the payoff
- voiceover: "Every time you call it, the steps run again. As many times as you want. Fix the recipe once. Every call gets fixed."
- sfx: none

## Frame 4 — The worked example

- scene: two timed groups in one code chamber — the `def greet(name):` block types on under a caret, then the two named calls type on with their printed output in mint; a rail draws from the definition down to both calls and both lines pulse
- duration: 11.6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof
- voiceover: "Define greet, taking a name. It prints Hi plus the name. Call it with Sara. Call it with Omar. Two calls, one recipe."
- sfx: none

## Frame 5 — The tag card

- scene: the CTA card: `One recipe, every call`, the question line, two small call chips that pulse in callback to F3, the SEND THIS plate and a `tag them here` pill
- duration: 6.2s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Who do you know that still copy-pastes? Send this to them."
- sfx: none

## Real durations

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 4.587 | 5.6 | 10 | 0s → 4.20s |
| F2 | 8.363 | 9.4 | 20 | 0s → 8.14s |
| F3 | 10.283 | 11.3 | 23 | 0s → 9.88s |
| F4 | 10.603 | 11.6 | 23 | 0.14s → 10.16s |
| F5 | 4.181 | 6.2 | 11 | 0s → 3.86s |
| **film** | **38.017 speech** | **44.1** | **87** | |

Air at each cut: 1.0s (2.0s on the last frame, which loops under the platform's chrome). The wipe
and the exit push are authored inside that silence. VO lengths are the measured Kokoro output from
`studio voice` / `studio cues` (`audio_meta.json`); the frame rows above are those lengths plus the
authored air, which is what `studio assemble` wrote into `index.html` (total 44.1s).
