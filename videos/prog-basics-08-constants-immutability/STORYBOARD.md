---
format: 1080x1920
duration: 49s
message: "a constant is a promise Python does not check; immutability is a refusal the language makes for you"
arc: hook → the promise that does not hold → the refusal that does → the proof in code → the save
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 8 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-08-constants-immutability (prog-basics, part 8 of 11)

English master, portrait 1080x1920, 49.05s measured (target ~45s, ceiling 52s).
Copy source of record: `writing/prog-basics/pieces/08-constants-immutability.md`.
Shape: bible § 3. Grammar: `frame.md` v2 § 4 — G1 hook, G2 box (dashed), G2b row (thick solid),
G3 code chamber, G5 CTA. Durations below are the measured VO plus authored air, and every emphasis
time in the frame files cites a measured word onset from `audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground
`#15181D` with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for
everything read, JetBrains Mono for code and chrome; and colour as a lesson — amber `#FFD166` = the
word being said, mint `#5AD6A0` = a value or printed output, coral `#FF6B5A` = an error the
interpreter actually raised (exactly one here: the TypeError in F4, nowhere else).

**The border weight IS the lesson in this part.** `frame.md` § 4: thin dashed = a promise nobody
enforces, thick solid = enforced. F2 is dashed, F3 is thick solid, and F5 is the only frame in the
series that puts both weights side by side, because the whole part is that contrast. No padlock is
drawn anywhere: v1 asked for open/closed lock icons and v2 replaced them with border weight (and an
icon would need a network fetch, which this campaign does not do).

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Content lives between y = 230 and y = 1004; the
caption band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

The two load-bearing moves of this part — both are **refusal motions**, and one of them is a refusal
that fails to happen:

1. **The seal that does not hold (F2).** A dashed amber seal rule draws across the mouth of the
   `MAX_USERS` chamber. Then `500` drops straight through it: the seal thins to nothing, the chamber
   squash-settles, and the mint value swaps `100 → 500`. No error appears on the board at any point.
   That is what "Python does not check that promise" looks like — and it is executed output
   (`MAX_USERS = 100; MAX_USERS = 500` → `500`, silently, Python 3.13.15).
2. **The tile that will not open (F3, echoed in F4).** Two thick-solid chambers hold `h` and `i` over
   an index strip `0 1`. A `'H'` chip flies in from the right, hits tile 0, recoils and fades out;
   tile 0 flashes mint and three bars draw down over it. In F4 the same attempt happens inside the
   code: `'H'` on `s[0] = 'H'` lunges left at the boxed `'hi'`, is pushed back, a rule strikes the
   line through, and the real interpreter line lands in coral.

Cuts: each frame wipes its content in from a different edge (F1 left, F2 right, F3 up, F4 right onto
a different archetype, F5 down) and pushes its content layer out (`y: 0 → -60`, 0.3s) inside the ~1s
silence pad, so no sentence spans a cut and no join is a hard cut to an identical board. F1 is the
only frame whose hero gets no ambient float: the hook words hold perfectly still while the ground
moves under them, which is the joke.

## Frame 1 — The hook

- scene: three display lines arrive one after another on the graphite board, left-wiped and staggered
  word by word; `can't change` takes the amber sweep and turns ink-on-amber; then the whole board of
  words holds dead still while the grid and glows keep moving under it
- duration: 4.968s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition (and the cover)
- voiceover: "The safest variable is the one that can't change."
- sfx: none

## Frame 2 — The promise that does not hold

- scene: a dashed chamber with a `MAX_USERS` name tab and the mint value `100`; the amber dashed
  seal draws across its mouth; then `500` falls in from above, the seal thins as it passes, the
  chamber squash-settles and the value becomes `500`; the annotations `the agreement is the mechanism`
  and `nothing stops you` rise, and no error appears anywhere on the board
- duration: 10.088s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/02-constant.html
- type: concept
- beat: the surprise — a constant is not enforced
- voiceover: "A constant is a name you promise never to change. Python does not check that promise. Nothing stops you."
- sfx: none

## Frame 3 — The value that refuses

- scene: the same two-letters row from part 03, now in thick solid chambers over an index strip
  `0 1`; the headline `the value refuses` takes the amber sweep on "refuses"; then the `'H'` chip
  flies in from the right, bounces off tile 0, tile 0 flashes mint and three bars draw down over it;
  the annotation `its letters are locked` rises on "immutable" and both tiles pulse 0.1s apart on
  "stops you"
- duration: 9.555s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-tiles.html
- type: mechanism
- beat: the contrast — this one is enforced
- voiceover: "Immutable means the value itself refuses to change. A string is immutable. Python stops you."
- sfx: none

## Frame 4 — The proof in code

- scene: `main.py` code chamber, four timed lines typing on under a moving caret — `MAX_USERS = 100`
  with its convention comment, `s = 'hi'` with `'hi'` boxed, `s[0] = 'H'`, and the terminal strip
  `TypeError: 'str' object does not support item assignment` in coral; the amber token highlight runs
  `MAX_USERS` then `s[0]`; `'H'` lunges left at the boxed `'hi'` and is pushed back; a rule strikes
  the line through; the error strip lands with a shake
- duration: 13.672s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof (the only coral in the part, under real interpreter text)
- voiceover: "Max users is one hundred. All caps means constant. Now s is hi. Put a capital H at position zero. Python answers TypeError."
- sfx: none

## Frame 5 — The save card

- scene: the CTA card: headline `Constant. Or immutable.` (23 chars at 6.4cqw in a 176px box, per
  fix 5 — the piece's `agreement vs enforcement` is recorded in BRIEF.md as superseded), then the two
  border weights side by side for the first time in the series — a dashed chip `constant` and a
  7px-solid chip `immutable` — the muted line `for your next code review`, the solid amber `SAVE
  THIS` plate, and the series badge.
  The solid chip's armour ring draws over it while the dashed one stays thin; the two chips pulse
  0.1s apart; the card keeps breathing because it loops under the platform's chrome
- duration: 10.768s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Save this for your next code review. Look for a name you promised never to change. Then check if it changed."
- sfx: none

## Real durations

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.968 | 4.968 | 9 | 0s → 3.56s |
| F2 | 9.088 | 10.088 | 19 | 0s → 8.70s |
| F3 | 8.555 | 9.555 | 15 | 0s → 8.20s |
| F4 | 12.672 | 13.672 | 23 | 0s → 12.20s |
| F5 | 8.768 | 10.768 | 21 | 0s → 8.20s |
| **film** | **43.051 speech** | **49.051** | **87** | |

Air at each cut: 1.0s (2.0s on the last frame, which loops under the platform's chrome), per fix 6 —
the 0.32s exit push therefore lands entirely inside silence, and no sentence spans a cut. These are
the measured `studio voice` + `studio cues` numbers; the frame rows above are what
`studio assemble` mounts, so caption starts and frame starts are derived from the same figures.
