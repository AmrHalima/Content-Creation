---
format: 1080x1920
duration: 47.8s
message: "a switch is a tidy pile of if statements, and its one real trap is the missing break"
arc: hook → position → trap → two languages → ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 10 of 11
identity: bench-v2
---

# STORYBOARD — prog-basics-10-switch (prog-basics, part 10 of 11)

English master, portrait 1080x1920, ~47s (target ~46s, ceiling 52s).
Copy source of record: `writing/prog-basics/pieces/10-switch.md`.
Shape: bible § 3. Grammar: `frame.md` v2 § 4 — G1 hook (F1), **G4 split** (F2, the comparison frame),
custom fall-through mechanism (F3), G3 code chamber ×2 (F4), G5 CTA (F5); § 7 for the primitives.
Durations below are the measured VO plus authored air, and every emphasis time in the frame files
cites a measured word onset from `audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground
`#15181D` with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for
everything read, JetBrains Mono for code and chrome; and colour as a lesson — amber = the word being
said, mint = a value or printed output, coral = an error the interpreter raised. **pb-10 raises no
exception on screen, so it uses no coral anywhere** (the piece file's v1 note to light the skipped
cases `#CD3333` is superseded by frame.md v2 § 1; they light amber instead). Every frame carries at
least two primitives, and no cut lands on the previous frame's layout: archetype, wipe direction and
hero position all change between neighbours.

## Language labelling (the approved correction for this part)

pb-10 is the only part in the batch that shows a non-Python fragment. Every frame that shows code or
code-shaped chrome carries its language: F3's chamber is `day.js` + `JAVASCRIPT`, F4 pairs
`day.js`/`JAVASCRIPT` with `day.py`/`PYTHON`. F2 shows **no code syntax at all** — its chips are
plain-language words in Space Grotesk, because mono is code and grotesk is meaning (frame.md § 2), so
there is nothing to mis-paste. The JS chamber's elided body is a single `…` glyph in muted chrome
colour, never three typed periods: `...; break;` is a `SyntaxError` in node and the fragment must not
look runnable.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and output only; coral `#FF6B5A` reserved for raised exceptions and
unused in this part. Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344;
1344-1920 stays empty for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
~1s silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

Wipe directions, in order: F1 cut-in · F2 from the left · F3 from below · F4 from the right ·
F5 from above.

## Frame 1 — The hook (G1)

- scene: the hook in three display lines on graphite; under it an untidy pile of three grey `if` chips
  (`if mon`, `if tue`, `if sat`), each rotated a fraction off-square. On "if statements" they square up,
  then collapse into one solid amber plate reading `switch`.
- duration: 5.4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- primitives: P1 say-sweep TRAVELLING `switch` → `tidy` with the voice (each highlight leaves as the voice
  moves on, so amber keeps meaning "now"), staggered off-square arrival of the three `if` chips, square-up
  + collapse into one plate, ambient float on the plate, exit push
- voiceover: "A switch is just a tidy pile of if statements."
- sfx: none

## Frame 2 — The position (G4 split)

- scene: two panels, plain language only (Space Grotesk, no syntax anywhere, so nothing here can be
  mis-pasted). LEFT `SWITCH · named once`: a `day is sat` subject box above a ladder of `case mon` /
  `case tue` / `case sat` / `default`; the mint `sat` chip travels down the lane beside the rungs, past
  two non-matches, and STOPS on `case sat`, which fills amber while the other three dim to 42%.
  RIGHT `IF-CHAIN · asked again`: `is day mon` / `is day tue` / `is day sat` / `else anything`, each rung
  arriving with its OWN amber `?` badge one beat after the next, and the lane beside it deliberately empty
  under the label `no shared subject`. A centre seam rule draws between the panels; the verdict lines read
  `one subject, many tests` and `a new question each line`.
- duration: 13.1s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-one-subject.html
- type: concept
- beat: the claim
- primitives: P8 the subject chip travelling the ladder while the rail draws itself behind it, P7 pulse-set
  on the rungs as `case` is defined (border and scale only, never the glyphs, so the word is not re-flashed
  mid-read), sequential 42% dim of the non-matching rungs, per-rung `?` badge pops at 0.44s spacing on the
  if-chain side, exit push
- voiceover: "One subject, many cases. A case is one answer to test for. The switch runs the case that fits. An if-chain asks again every line."
- sfx: none

## Frame 3 — The trap (fall-through, the part's strongest frame)

- scene: one chamber titled `day.js` / `JAVASCRIPT`. Four stacked rows `case 'sat': → weekend`,
  `case 'sun': → rest`, `case 'mon': → monday`, `default: → any other day`, with a `break;` chip seated at
  the RIGHT END of the first row (execution order reads left to right) and a dashed ghost of the same box
  left behind when it is removed. Beat 1: with `break;` in place the amber bar runs to the first row and
  stops dead on it; the run strip shows `weekend`. Beat 2: on "Skip it" the chip lifts out and the amber
  bar SPILLS DOWN through `sun` and `mon`, lighting each label as it passes; the run strip grows word by
  word to `weekend rest monday`. Beat 3: the annotation `the case below ran too` arrives in the gap between
  "too." (6.98) and "Saturday" (7.74) — the term is named on screen, not in the voice. Beat 4: `Saturday
  also runs Sunday` — the three rungs pulse as a chain and their printed words go amber. Beat 5: the
  `break;` chip drops back, the bar snaps back to one row, the extra printed words retract, and a
  `Kotlin` / `Swift` chip pair arrives turning mint above `these two stop after one case`.
- duration: 14.5s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-fall-through.html
- type: mechanism
- beat: the trap
- primitives: P5 spill-down (height tween on the amber bar + sequential label colour tweens), P2 drop-in
  and lift-out of the `break;` chip, P6 fill of the run strip one printed word at a time, P7 pulse-set
  chain across the three rungs, P10 retract of the bar, exit push
- voiceover: "Many languages need a break, meaning stop here. Skip it and the case below runs too. Saturday also runs Sunday. Kotlin and Swift never fall through."
- sfx: none

## Frame 4 — The two languages (G3 ×2)

- scene: two code chambers side by side, each with its own titlebar so the language is on screen.
  LEFT `day.js` + `JAVASCRIPT`: `switch (day) {` / `  case 'sat': …` / `    break;` / `  default: …`, with
  `case`, `break` and `default` each going amber on their spoken word, and the `…` a single U+2026 glyph in
  chrome grey (`.f4-elide`) so the shorthand can never be mistaken for runnable code. RIGHT `day.py` +
  `PYTHON`: `match day:` / `  case 'sat':` / `    print('weekend')` / `  case _: pass` — `match` and `_`
  go amber on their words, and the Python side carries no elision mark at all. Type-on per line under a
  travelling caret (P3); the run strip under each prints `weekend` in mint (both executed). The two
  annotations read `the break is required` and, swept amber on "No break needed", `no break to forget`;
  a held line under the pair reads `same job, two spellings`. No `paste this into Python` warning appears:
  this part raises no interpreter error, so it uses no coral anywhere.
- duration: 7.3s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-two-languages.html
- type: example
- beat: proof
- primitives: P3 type-on in both chambers (caret x-tween + clip-path wipe, eight lines), P1 say-sweep on
  `case` / `break` / `default` / `match` / `_` in spoken order, scale pulse on `break`, P6 arrival of both
  run strips, exit push
- voiceover: "Switch on day, case sat, break. Python's version is match. No break needed."
- sfx: none

## Frame 5 — The debate (G5)

- scene: the CTA card. Headline `Switch or if-else?` at 6.4cqw in a 176px box (fix 5: one line, no
  collision with the plate). Two pills `SWITCH` and `IF-ELSE CHAIN` arrive on their spoken words with an
  `or` connector between them; an amber ring travels SWITCH → IF-ELSE and then LETS GO at 4.94s, because
  the viewer is the one who picks. Solid amber plate `ARGUE IT BELOW`, sub-line `the whole debate is
  one keyword`, brandline `PROGRAMMING BASICS · 10 · BEGINNER`. The card loops under the platform's
  chrome, so the ring keeps travelling SWITCH → IF-ELSE → released while it holds, and the frame comes to
  rest on NEITHER side.
- duration: 7.5s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- primitives: P7 pulse-set on the two pills, ring travel and RELEASE (opacity + scale, no layout tween),
  plate pop (`back.out(1.6)`), `or` pulse and pill-border alternation through the held tail, ambient float
  on plate and pills. NO exit push: this frame holds alone under the platform's chrome.
- voiceover: "So: switch, or the if-else chain. What do you reach for? Argue it below."
- sfx: none

## Real durations

Measured through `studio voice` (Kokoro `af_heart` @0.74) and `studio cues`; these numbers are the
real wavs, not estimates.

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame | Scene start (film time) |
|---|---|---|---|---|---|
| F1 | 3.733 | 5.4 | 10 | 0s → 3.30s | 0.0 |
| F2 | 12.181 | 13.1 | 25 | 0s → 11.84s | 5.4 |
| F3 | 13.611 | 14.5 | 26 | 0s → 13.26s | 18.5 |
| F4 | 6.357 | 7.3 | 13 | 0s → 5.96s | 33.0 |
| F5 | 5.803 | 7.5 | 14 | 0s → 5.32s | 40.3 |
| **film** | **41.683 speech** | **47.8** | **88** | | |

Air at each cut: ~0.9s (1.7s on the last frame, which loops under the platform's chrome). The 0.5s
crossfade sits entirely inside that silence, so no sentence spans a cut (BATCH.md known-proven fix 6).
The film lands at 47.8s, inside bible § 1's 42-48s band; the first script cut would have landed at
~51s and was trimmed to get here.

## Customizations

- **G4 side-by-side at portrait:** bible § 4 allows two chambers across only at ≤3 lines per side.
  F2's panels are 3 ladder rows + 1 catch-all row of *plain-language chips* (not code) at 456px each,
  and F4's chambers are 4 code lines of ≤18 characters each at 2.9cqw (≈31px), which measures 335px
  inside the 416px usable panel width. Both fit the phone-legibility floor (known-traps § 13), so
  side-by-side is kept here rather than stacking.
- **No coral in this part** (see Identity note). The piece file's v1 colour instruction is superseded.
