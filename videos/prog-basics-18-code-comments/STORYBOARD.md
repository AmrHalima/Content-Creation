---
format: 1080x1920
duration: 33.6s
message: "a comment pays for its place by saying why; the code already says what — so when it only echoes the line, rename the line"
arc: the provocation → why a comment is allowed to exist → rename it instead → the two comments in real code → the ask, side unchosen
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 18 of 22
identity: bench-v2.1
grammar: G8 G8 G8 G4-cutaway G5
carrier: false — clones pb-14's G8 chrome and pb-10's labelled G4 split
---

# STORYBOARD — prog-basics-18-code-comments (prog-basics, part 18 of 22)

English master, portrait 1080x1920, target ~29-34s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/18-code-comments.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4
(G8 direct address, G4 split as a cutaway, G5 CTA) and § 7 (the motion primitives). Durations below
are the measured VO plus authored air, and every emphasis time in the frame files cites a measured
word onset from `audio_meta.json`.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value or what printed, coral = an error the interpreter raised. **This part raises
no exception, so it ships with zero coral**, including the `REC` dot (pb-14's finding: the 1s blink
does the work a fake red dot would). Amber is one plate at a time, in every frame.

This is the second direct-address part to ship: the same ground wearing a camera, copied verbatim from
pb-14 — four corner brackets, a `REC` strip with a muted blinking dot and a root-timeline timecode, and
a lower third reading `PROGRAMMING BASICS · BASICS II · 18` over `Comments and why they matter`. **No
face, no body, no avatar, no silhouette, no emoji.**

## The two new-ish marks here, made physical

**G4 inside a G8 cutaway (F4).** pb-14 gave F4 a single G3 chamber; this part's thesis is a comparison,
so F4 drops pb-10's labelled split — two `main.py` / `PYTHON` chambers at 456px each — under the same
0.18 scrim, with the chrome still visible on all four sides. Recorded in the piece file's
`## Customizations` and in `BRIEF.md` (the grammar's 700px single-chamber width cannot hold
`i += 1  # add 1 to i` at the 28px code floor).

**G8 with a debate that stays open (F5).** The verb plate is solid amber; the two answer chips are
unselected and the ring that travels between them comes to rest framing neither.

Wipe direction alternates exactly as pb-14 established (F1 from the left, F2 up, F3 from the right, F4
drops as a cutaway, F5 settles), and the hero position changes at every join. Consecutive-G8 rule:
F1 is the only type-alone frame; F2 brings the struck comment, F3 the relabelling chip, F5 the plate
and the chips.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and printed output only; coral `#FF6B5A` is unused here.
Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty
for the platform's own chrome. All G8 chrome carries `data-layout-ignore` and is never load-bearing.
Every frame that renders code carries the mono ligature guard (`font-variant-ligatures: none` +
`"liga" 0, "calt" 0, "dlig" 0`).

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.
Every exit push sits at `D − 0.32`. F5 holds (no exit push) because it loops under the platform's chrome.

## Frame 1 — The provocation, as direct address (G8, type alone)

- scene: the camera chrome over the ground — four corner brackets, the `REC` strip with a muted dot blinking at 1s and the timecode, `BEGINNER` outline chip, and the lower third `PROGRAMMING BASICS · BASICS II · 18` over `Comments and why they matter`. The hook arrives left-aligned at 72px in five groups of ≤14 characters, `good code` / `doesn't need` / `comments.` / `agree or` / `disagree?` at 9cqw, `comments.` on the frame's one solid `--say` plate with ink → `#22201B` text. No illustration, no face.
- duration: 4.4s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/01-address.html
- type: hook
- beat: the argument opens
- voiceover: "Good code doesn't need comments. Agree or disagree?"
- sfx: none
- beats (cued): l1 `good code` at rest t=0 (cover, no entrance tween) · "doesn't" 0.48 → l2 at 0.42 ·
  **"comments." 1.00-1.36 → P1 sweep 0.98, ink→`#22201B` 1.14, plate glow 1.34, settle 1.16** ·
  "Agree" 1.88 → l4 at 1.82 · "disagree?" 2.58 → l5 at 2.52 · exit push 4.08

## Frame 2 — A comment earns its place (G8 + the struck comment beside the good one)

- scene: the spoken line at 6cqw left-aligned, wrapped to five groups of ≤17 characters. Under it, side by side in mono 2.6cqw (28px, the floor): on the left `# add 1 to i` in `--muted`, on the right the good comment on its three lines `# retry 3 times:` / `# the payment API drops` / `# requests under load` in `--ink`. On "The code already says what it does" a P10 strike-out — a 3px `--say` rule — draws itself across the bad comment and holds. That rule is this frame's only amber, so `why` takes a colour-free scale settle instead of a plate.
- duration: 6s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-strike.html
- type: mechanism
- beat: the verdict on the echo-comment
- voiceover: "A comment earns its place by explaining why. The code already says what it does."
- sfx: none
- beats (cued): l1 0.06 ("A" 0.00) · l2 0.72 ("its" 0.78) · l3 1.52 ("explaining" 1.58) · **`why.`
  2.08-2.48 → colour-free scale settle 2.12 (no second amber plate)** · the rail + `# add 1 to i` and
  the three good-comment lines arrive 2.52-2.86 · l4 3.04 ("The" 3.10) · **l5 3.88 ("says" 3.94) and
  the P10 strike rule draws itself 3.62-4.28 across "The code already says what it does", holding to
  the cut** · "does." 4.52-4.72 · exit push 5.68

## Frame 3 — Rename it instead (G8 + the relabelling chip)

- scene: the spoken line at 6cqw in six groups. The non-chrome element is two chips and a connector, no list: `d2` in muted mono at the left, a 24px `--line` bar with a chevron, and `days_until_delivery` arriving to its right and typing itself on character by character through a `{t,text}` step array on a time proxy (no `text` tween — there is no TextPlugin). `rename` carries the frame's one P1 sweep; the chip's arrival is colour-free. Both names are identifiers, never output, so the frame makes no execution claim.
- duration: 6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-rename.html
- type: mechanism
- beat: the fix is a name
- voiceover: "If a comment explains what the code does, rename things until it explains itself."
- sfx: none
- beats (cued): l1 0.06 ("If" 0.00) · l2 0.44 ("explains" 0.48) · l3 1.20 ("the" 1.24) · **`d2` chip P2
  drop-in 1.30-1.84, over "what the code does"** · l4 2.14 · **"rename" 2.42-2.70 → P1 sweep 2.46,
  ink→`#22201B` 2.58 (the frame's only amber)** · connector draws 2.90-3.12 + chevron 3.08 ·
  `days_until_delivery` chip drops 3.14 and types itself out 3.14-4.64 across "until it explains
  itself." (3.20-4.54) · l5 3.14 ("until" 3.20) · l6 3.72 ("explains" 3.76) · exit push 5.68

## Frame 4 — The two comments in real code (G4 cutaway, not a new slide)

- scene: the 0.18 scrim drops over the same direct-address ground and **two** chambers with it — pb-10's split at 456px each, x 72 and x 552, each with a `--panel-2` titlebar reading `main.py` and a `PYTHON` chip. Left is the callback to part 12, its four rows with the row 12 left blank now filled: `i = 0` / `while i < 5:` / `    print(i)` / `    i += 1  # add 1 to i`. A mint terminal strip in its own lane under the left chamber prints `0 1 2 3 4` (executed: bible § 4 row 12). Right is the thesis: `# retry 3 times:` / `# the payment API drops` / `# requests under load` / `charge(cart)`, and **no strip, because nothing on that side is executed** (bible § 4 row 18). The chrome stays visible on all four sides. Ligature guard on every line.
- duration: 11.2s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/04-cutaway.html
- type: example
- beat: the proof, side by side
- voiceover: "Save comments for decisions, warnings, and tricky reasons. Retry three times: the payment API drops requests under load. Add one to i."
- sfx: none
- beats (cued): scrim 0.04→0.18 · left chamber drops 0.10, right chamber 0.20, over the triad
  ("Save" 0.00 … "reasons." 2.84-3.32) while its four code lines type on 0.45 / 1.00 / 1.60 / 2.25 ·
  `charge(cart)` types on 3.45 (the call exists before its comment is written) · right comment lines
  type on across the example — `# retry 3 times:` 4.05 ("Retry" 4.00) · `# the payment API drops` 5.70
  ("the payment" 5.64) · `# requests under load` 7.15 ("requests" 7.10) · **the frame's one P1 sweep
  7.62-7.88 on `requests under load`, ink→`#22201B` 7.86 ("under" 7.58 … "load." 7.90-8.26)** ·
  **`  # add 1 to i` fades in 8.80-9.10 on "Add one to i." (8.74-9.66), muted, unstruck, colourless** ·
  executed strip `0 1 2 3 4` lands 9.35, pulse 9.85 · exit push 10.88

## Frame 5 — The ask, side unchosen (G8 + G5 CTA)

- scene: back on the chrome. `agree or disagree?` / `defend your side` / `below.` at 7.5cqw left-aligned (three groups, so the plate and the chips fit above the lower third). Mechanic verb plate `DEFEND YOUR SIDE` in solid `--say` with `--say-ink` text, dropping in on the spoken verb — the frame's only amber. To the right, the two answer chips `AGREE` and `DISAGREE`, both unselected: `--panel` fill, 3px `--line` border, `--ink` text, no ring, no amber. A `--line` ring (not `--say` — two amber marks on one frame is a § 1 violation and the plate already owns the amber) slides AGREE → DISAGREE → back and comes to rest in the gap, framing neither. Badge line kept as the chrome carries it. No exit push; this frame holds and loops.
- duration: 6s
- transition_in: settle
- status: animated
- src: compositions/frames/05-ask.html
- type: cta
- beat: the debate stays open
- voiceover: "Agree or disagree? Defend your side below."
- sfx: none
- beats (cued): content settles 0.04 (no directional wipe; **no exit push — this frame loops**) ·
  l1 0.06 ("Agree" 0.00 … "disagree?" 0.60-1.00) · `AGREE` pops in unselected 0.10, `DISAGREE` 0.22 ·
  **"Defend" 1.56-1.84 → the `DEFEND YOUR SIDE` plate P2 drop-ins 1.62-2.20 (the frame's only amber)** ·
  l2 1.50 · l3 2.18 ("below." 2.22-2.52) · **the `--line` ring travels rest→AGREE 3.10-3.55,
  AGREE→DISAGREE 3.95-4.55, DISAGREE→rest 4.90-5.40 and holds in the gap framing neither, back on its
  own zero for the loop seam** · plate ambient float returns to zero by 6.0

## Real durations — measured at af_heart 0.93

VO lengths and every word onset come from `audio_meta.json` (`studio voice --speed 0.93` + `studio
cues`, ASR word timings, not estimates). Frame seconds are that measured VO plus authored air.

| Frame | VO (measured) | last word ends | air | Frame seconds | Film start | VO words |
|---|---|---|---|---|---|---|
| F1 | 3.328 | 2.88 | 1.072 | **4.4** | 0.0 | 8 |
| F2 | 4.992 | 4.72 | 1.008 | **6.0** | 4.4 | 15 |
| F3 | 4.885 | 4.54 | 1.115 | **6.0** | 10.4 | 14 |
| F4 | 9.877 | 9.66 | 1.323 | **11.2** | 16.4 | 22 |
| F5 | 2.880 | 2.52 | 3.120 | **6.0** | 27.6 | 7 |
| **film** | **25.962** | 24.32 | **7.638** | **33.6** | | **66** |

Measured rate: 66 words over 24.32s to the last word end = **2.71 w/s** at 0.93, not the 3.24 planning
number — this part's copy is comment prose with long words (`decisions`, `explaining`, `delivery`,
`requests`), and F4 alone runs 22 words / 9.66s = **2.28 w/s**. The piece file's estimate table predicted
20.4s of speech; the audio is 25.96s, so **the film is 33.6s, inside the 29-34s band, and no padding
lever had to be pulled.** No words were added or removed.

Air is not uniform, and deliberately so:

- **F1, F2, F3: 1.07 / 1.01 / 1.12s** — the house ~1.0s, enough for the 0.42s entrance wipe and the
  0.30s exit push to sit entirely inside silence (F1 speech ends 2.88 → push at 4.08; F2 4.72 → 5.68;
  F3 4.54 → 5.68).
- **F4: 1.32s.** It is a two-chamber split the viewer has to read, and the last two events (the useless
  comment at 8.80, the executed strip at 9.35) land inside the spoken "Add one to i." The frame's exit
  push sits at 10.88, after the strip has settled.
- **F5: 3.12s.** § 12's explicit lever: F5 loops under the platform's chrome, carries no exit push, and
  the ring's AGREE → DISAGREE → rest round trip runs 3.10-5.40, so the air is what the debate is held
  open in. Every ambient loop in the frame returns to its own zero by 6.0s.
