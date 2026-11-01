---
format: 1080x1920
duration: 47.0s
message: "a return hands the caller something to use; a side effect changes the world outside"
arc: claim → the value goes up → the value goes out → the proof → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 6 of 11
identity: bench-v2
grammar: G1 G4 G4 G3 G5
---

# STORYBOARD — prog-basics-06-return-vs-print (prog-basics, part 6 of 11)

English master, portrait 1080x1920, ~46s measured (target ~46s, ceiling 52s).
Copy source of record: `writing/prog-basics/pieces/06-return-vs-print.md`.
Shape: bible § 3. Grammar: `frame.md` v2 § 4 (G1 hook, G4 split, G3 code chamber, G5 CTA) and § 7
(the motion primitives). Durations below are the measured VO plus authored air; every emphasis time
in the frame files cites a measured word onset from `audio_meta.json`.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber
`#FFD166` = the word being said, mint `#5AD6A0` = a value, coral `#FF6B5A` = an exception the
interpreter raised. **This part raises no exception, so it ships no coral at all**: `None` is a value
and is mint. The piece file's coral-`None` note is identity v1 and is superseded (v2 § 1 names part
06 as the part that got it wrong). Every frame carries at least two primitives, and no cut lands on
the previous frame's layout.

## Why the motion carries the argument

The two functions have the same shape and the same output, so nothing in code can show the
difference. The board can: a value **travelling back up** into a name (return) versus a value
**leaving the box sideways and dying on a surface** (print). F4 then makes it arithmetic — the same
call, `y = double(4)`, gives `8` on one side and `None` on the other. If those two moves are not
visible, the part has asserted its own conclusion instead of proving it.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end
at their own zero, so a cut never resets the world). Content lives between y = 230 and y = 1004; the
caption band sits at 1024-1344 (campaign skin); 1344-1920 stays empty for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside
the ~1s authored air, so no sentence spans a cut and no join is a hard cut to an identical board.
F2 and F3 are both G4 splits, so they differ in wipe direction (left-in vs right-in), hero position
(caller above vs terminals below) and which panel is lit.

## Frame 1 — The claim

- scene: hook type on graphite, then two small identical chambers under it, each reading `double(4)`,
  each labelled `same` in ink. A seam draws between them on "behave" (3.20s), the two chambers push
  apart on the x-axis, and the right label flips to `different` on an amber plate on "differently"
  (4.40s). The hook's claim is drawn, not asserted.
- duration: 6.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- voiceover: "Two functions can look identical and behave completely differently."
- sfx: none
- primitives: P1 say-sweep (identical, differently), P3 type-on (the two `double(4)` lines), P7
  pulse-set (the two chambers), P10 strike-out (the seam between the panels)

## Frame 2 — The value goes up (G4, left panel live)

- scene: two chambers. Left `return x * 2` is lit; right `print(x * 2)` waits at 32% opacity. A mint
  value chip `8` rises out of the left chamber up a drawn amber arrow and lands inside the caller box
  `y` above, whose dashed border flashes mint as it fills. Kicker glosses the word: THE CALLER = THE
  CODE THAT CALLED IT.
- duration: 9.6s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-return-up.html
- type: concept
- beat: the mechanism, upward
- voiceover: "A return value hands the result back to whoever called it. The caller keeps it, stores it, builds on it."
- sfx: none
- primitives: P8 arrow-run (shaft draws, chip travels up), P2 drop-in (chip lands in `y`),
  P1 say-sweep (return, back), P6 box-fill (the caller box fills), P3 type-on

## Frame 3 — The value goes out (G4, right panel live)

- scene: the mirror of F2. Right chamber `print(x * 2)` is lit; left `return x * 2` dims to 32%. A
  mint `8` leaves the right chamber downward-outward along two drawn arrows and lands as inert text
  on a console surface (`screen`, showing the executed `8`); a second dashed surface labelled `a file`
  arrives empty, because that is the other place a side effect writes. Above the right chamber a
  ghost upward arrow draws and is struck through on "itself" (3.48s) — nothing goes up. Top-right,
  the caller box `y` stays dashed and empty with one mint caret that blinks from 2.30s to 5.66s and
  then goes still: nothing is ever going to arrive. Gloss annotation up-left, two amber highlighter
  plates: "A side effect **acts** outside the box". (As shipped there is no `None` chip here — see
  `BRIEF.md` decision 8; the value lands on this board only as the console's `8`.)
- duration: 9.4s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-print-out.html
- type: concept
- beat: the mechanism, outward
- voiceover: "A side effect is something the function does outside itself. It prints on screen. It writes a file."
- sfx: none
- primitives: P8 arrow-run (sideways, outward), P10 strike-out (the ghost upward arrow),
  P3 type-on, P1 say-sweep (outside itself), P2 drop-in (the inert landing)

## Frame 4 — The proof (G3 code chamber)

- scene: one chamber, three lines, typed twice — the same code with one word changed. Pass A
  (`def double(x):` / `    return x * 2` / `y = double(4)   # 8`): the console strip under it stays
  **empty** and dashed, and a mint `8` drops into the `y` card. Pass B starts at 5.40s: the changed
  line re-types as `    print(x * 2)` with the amber sweep on `print`, the console strip fills with
  the executed `8`, and the comment becomes `# None` — the `y` card goes back to dashed-empty with a
  blinking caret while `None` lands on it in mint. Truth carried by the board: `return` shows nothing
  and gives `8`; `print` shows `8` and gives `None`.
- duration: 13.8s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof
- voiceover: "Both functions make eight. Return hands it back to y. Print shows it, then returns None. So y equals double of four gives you nothing to work with."
- sfx: none
- primitives: P3 type-on (caret, both passes), P1 say-sweep (return → print → None), P2 drop-in
  (the `8` into `y`), P6 box-fill / empty-state (the caret box), exit push

## Frame 5 — Pick a side (G5 CTA)

- scene: `What did the caller get?` ask headline (the question the part has just answered, not a restated
  contrast), the amber plate `PICK A SIDE`, then the two pills `TEAM RETURN` / `TEAM PRINT` side by side
  with their executed price under each — `y = 8` and `y = None`, both mint, the second card dashed. The
  ring-select pulses across them on a 0.3s cycle (never both at once) at 2.10 / 3.40 and again as a tail
  cycle at 6.60 / 6.96 / 7.32, so the film's last frame is still asking; the brand line carries the
  `INTERMEDIATE` badge. Holds alone under the platform's chrome — no exit push, this one is the end.
- duration: 7.7s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "So pick a side. Team Return, or Team Print. Say why in the comments."
- sfx: none
- primitives: P7 pulse-set (the two pills), P1 say-sweep, entrance wipe + ambient float on the plate

## Cover / title card (F1 doubles as the cover)

Cover text: `look identical · behave differently` (4 words, the sharpest fragment of the hook).
Badges: `PROGRAMMING BASICS · 06` + `INTERMEDIATE`. The piece's longer cover option,
"identical on screen, different for the caller", is banned by `frame.md` v2 § 9 (the contrast-reveal
ration), so it does not appear anywhere in this part.

## Real durations

Measured by `studio voice` + `studio cues` (Kokoro `af_heart` @0.74, faster-whisper `small`), then
air added by hand — fix 6 in `BATCH.md`: air at the cut is authored, not measured.

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame | Air tail |
|---|---|---|---|---|---|
| F1 | 5.461 | 6.5 | 9 | 0s → 4.98s | 1.04s |
| F2 | 8.597 | 9.6 | 20 | 0s → 8.36s | 1.00s |
| F3 | 8.341 | 9.4 | 18 | 0s → 8.00s | 1.06s |
| F4 | 12.800 | 13.8 | 28 | 0s → 12.56s | 1.00s |
| F5 | 6.165 | 7.7 | 14 | 0s → 5.70s | 1.54s |
| **film** | **41.364 speech** | **47.0** | **89** | | |

47.0s sits inside bible § 1 (42-48s), inside the piece's 52s ceiling, and above its 46s target by
one second — the cost of the two quality bars (the `None` proof line, and one idea per beat). Every
cut is flanked by ≥1.0s of silence, so no sentence spans a cut and the 0.42s wipe-in plus 0.3s
push-out fit entirely inside quiet.
