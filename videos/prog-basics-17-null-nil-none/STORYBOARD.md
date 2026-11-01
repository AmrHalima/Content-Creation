---
format: 1080x1920
duration: 31.5s
message: "null, nil and None all mean there is no value here, which is not the same as an empty value, and asking nothing for a method is what makes you check first"
arc: hook (a real person's real confession) → three names, one meaning → the danger and the correct check → the same crash in two languages → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 17 of 22
identity: bench-v2.1
grammar: G8 G8 G8 + chips G3-cutaway G5
carrier: none — clones pb-14's G8 chrome verbatim (frame-day2.md § 14)
---

# STORYBOARD — prog-basics-17-null-nil-none (prog-basics, part 17 of 22)

English master, portrait 1080x1920, target ~29-34s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/17-null-nil-none.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4
(G8 direct address, G3 code chamber, G5 CTA) and § 7 (P1 say-sweep, P2 drop-in, P3 type-on,
P10 strike-out). Durations below are the measured VO plus authored air, and every emphasis time in
the frame files cites a measured word onset from `audio_meta.json`.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value, coral = an error the interpreter raised. **This part raises two errors for
real** (Python 3.13.15 `AttributeError`, node v24.15.0 `TypeError`), so coral is earned — but on
exactly two elements, the error strips in F4. **The `REC` dot stays `--muted`: the dot is chrome, the
error text is meaning** (WAVE2-PACKET § 6, frame-day2 § 1). Mint appears nowhere as type, because this
part's example prints nothing: it raises.

Direct-address mode, cloned from pb-14: four corner brackets, a `REC` strip with a muted blinking dot
and a root-timeline timecode, and a lower third reading `PROGRAMMING BASICS · BASICS II · 17` over
`Null, nil, and None`, plus the `BEGINNER` outline chip. **No face, no body, no avatar, no silhouette,
no emoji** — the mode is chrome plus second-person display type.

## The marks this part uses

**G8 (F1, F2, F3, F5).** Consecutive-G8 rule: exactly one frame is type alone (F1). Every G8 neighbour
introduces one non-chrome element — F2 the three-name chip row, F3 the struck chip pair, F5 the CTA
plate. Wipe direction alternates (F1 from the left, F2 up, F3 from the right, F4 as a cutaway drop,
F5 a settle), and the hero position changes at every join. Chrome never fades and never pushes out.

**G3 cutaway (F4).** Not a new slide: a 0.18-opacity scrim plus **two stacked 880px chambers** over the
same ground, chrome still visible on all four sides. Two chambers rather than § 4's side-by-side G4
because a 33-character error line at 440px would fall to ~12px (BRIEF deviation 4). Each carries its
own titlebar filename and language chip, which § 13 requires as soon as a second language is on screen.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; coral `#FF6B5A` marks the two raised messages only; muted `#9BA6B2` is chrome.
Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty
for the platform's own chrome. All G8 chrome carries `data-layout-ignore` and is never load-bearing.
Every element that renders code or an error message carries the mono ligature guard
(`font-variant-ligatures: none` + `"liga" 0, "calt" 0, "dlig" 0`).

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.
Every exit push sits at `D − 0.32`, i.e. after the last word has finished. F5 holds (no exit push)
because it loops under the platform's chrome.

## Frame 1 — The hook, as direct address (G8, type alone)

- scene: camera chrome over the ground — four corner brackets, the `REC` strip with a muted dot blinking at 1s and the timecode, and the lower third `PROGRAMMING BASICS · BASICS II · 17` over `Null, nil, and None`. The hook arrives left-aligned at 72px in five groups, `the inventor` / `of null` / `called it his` / `billion-dollar` / `mistake`, with P1's amber plate sweeping under `billion-dollar` while it is said and `mistake` arriving plain. A muted mono attribution chip `1965 · ALGOL W` sits on the `of null` line at 2.2cqw with `data-layout-ignore` — the only place the historical claim gets its date. No illustration, no face: this is the one type-alone frame the consecutive-G8 rule allows.
- duration: 4.3s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/01-address.html
- type: hook
- beat: a confession about a real person, stated flat
- voiceover: "The inventor of null called it his billion-dollar mistake."
- sfx: none
- beats (cued): l1 `the inventor` at rest t=0 (cover; "The" 0.00, "inventor" 0.12) · l2 `of null` 0.45
  ("of" 0.52, "null" 0.74) and the `1965 · ALGOL W` attribution chip fades up 0.86 · l3 `called it his`
  1.00 ("called" 1.06) · l4 `billion-dollar` 1.70 ("billion-dollar" 1.78-2.58) → **P1 sweep starts
  1.72, ink→`#22201B` 1.95**, plate glow 2.10 · l5 `mistake` 2.55 ("mistake." 2.60) · exit push 3.98
  (speech ends 2.96)

## Frame 2 — Three names, one meaning (G8 + the chip row)

- scene: the non-chrome element arrives — three chips, 280×150px at pitch 328px, first at x 72, each `--panel` behind a 3px `--line` border with G2's shadow. `null` tagged `JAVASCRIPT`, `nil` tagged `GO · RUBY · LUA · SWIFT`, `None` tagged `PYTHON`. They drop in one per spoken name (P2, 0.1s apart inside the clause), which is what makes the enumeration the motion rather than a list of words. Above them the spoken line in five groups at 5cqw (BRIEF deviation 8: the 9cqw ramp only holds for groups of ≤14 characters and `None is the absence of one.` is 27): `Null, nil, and None` / `all mean no value here` / `Zero and an empty string` / `are both values.` / `None is the absence of one.`. P1 sweeps `no value here` — the frame's only amber. Chrome stays up; the timecode keeps ticking off the root timeline.
- duration: 8.8s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-names.html
- type: mechanism
- beat: three names, one idea
- voiceover: "Null, nil, and None all mean no value here. Zero and an empty string are both values. None is the absence of one."
- sfx: none
- beats (cued): l1 `Null, nil, and None` 0.05 ("Null," 0.00) · **chip 1 `null` drops in 0.10 ("Null,"
  0.00), chip 2 `nil` 0.60 ("nil," 0.56), chip 3 `None` 1.12 ("None" 1.08)** — one P2 drop per spoken
  name, the enumeration is the motion · l2 `all mean no value here` 1.20 ("all" 1.26) · **P1 sweep
  under `no value here` starts 1.68 ("no" 1.72), ink→`#22201B` 1.92** — the frame's only amber ·
  l3 `Zero and an empty string` 3.02 ("Zero" 3.10) · l4 `are both values.` 4.40 ("are" 4.48) ·
  l5 `None is the absence of one.` 5.90 ("None" 5.98) + colour-free scale pulse 6.62 ("absence" 6.68)
  · exit push 8.48 (speech ends 7.56)

## Frame 3 — The danger, then the correct check (G8 + the chip pair)

- scene: the spoken danger in three groups at 5cqw — `calling a method` / `on nothing` / `crashes your program.` — then the instruction after a beat: `So check before` / `you use it.`. The non-chrome element is the approved screen-text guard, and it is the whole reason this frame exists: two mono chips, `if user:` on flat `--panel` behind a 2px `--line-faint` border and `if user is None:` raised on `--panel-2` behind a solid 3px `--line` at full ink. P10 draws a 3px `--say` rule left→right across the first one: "not this" without saying not this. **The strike rule is this frame's only amber**, so the display lines emphasise by scale; the struck chip recedes by dimming its border and background only, never its text (§ 14's `opacity: 0.42` finding). The reason the two chips differ — `bool(None)` and `bool('')` are both `False` — is not written on this frame; it is the pinned comment's one line.
- duration: 5.5s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-check.html
- type: mechanism
- beat: the crash, and the exact check
- voiceover: "Calling a method on nothing crashes your program. So check before you use it."
- sfx: none
- beats (cued): l1 `calling a method` 0.05 ("Calling" 0.00, "method" 0.44) · l2 `on nothing` 0.68
  ("nothing" 0.94) · l3 `crashes your program.` 1.18 ("crashes" 1.24) + colour-free scale settle 1.90
  ("program." 1.94) · l4 `So check before` 2.76 ("So" 2.82 after the real stop, "check" 3.08) ·
  **the `if user:` chip drops in 2.86 and the P10 strike rule draws across it 3.35-3.68** ·
  l5 `you use it.` 3.62 ("you" 3.70) · **the `if user is None:` chip drops in 3.90, border settles
  4.50** — both chips hold to the cut · exit push 5.18 (speech ends 4.30)

## Frame 4 — The same crash in two languages (G3 cutaway, not a new slide)

- scene: the cutaway drops over the same direct-address ground — a 0.18-opacity scrim and **two stacked 880px chambers** at y 236 and y 516, 260px tall each, chrome visible on all four sides (BRIEF deviations 2 and 4). Chamber A's titlebar reads `main.py` with the chip `PYTHON`; chamber B's reads `main.js` with `JAVASCRIPT` (§ 13 — the chip exists because this series teaches one language and this frame shows two). P3 type-on reveals `user = None` then `user.name` in A, `const user = null;` then `user.name;` in B, one line per spoken clause. Then the two raised messages arrive, one per error name: `--panel-2` strips behind a 3px `--err` border, coral mono text, quoted exactly as raised on this machine and wrapped at a real space because 59 characters cannot hold at the 28px floor. `nil` appears nowhere on this frame, because nothing here executes it.
- duration: 8.4s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/04-cutaway.html
- type: example
- beat: proof, twice
- voiceover: "Set user to None, then read user dot name. Python raises AttributeError. JavaScript raises TypeError."
- sfx: none
- beats (cued): scrim fades 0.04→0.39, both chambers drop 0.08-0.50 · **A line 1 `user = None` types on
  0.12-0.56** ("Set user to None," 0.00-1.26) · **A line 2 `user.name` types on 1.32-1.72** ("read user
  dot name." 1.40-2.40) · B line 1 `const user = null;` types on 2.10-2.62 · B line 2 `user.name;`
  types on 2.72-3.02, so both chambers are written before either error is named · **A's coral strip
  lands 3.90 on "AttributeError."** · **B's coral strip lands 6.42 on "TypeError."** · one colour-free
  settle across both strips 6.90 · exit push 8.08 (speech ends 6.80, wav 7.36)

## Frame 5 — The ask (G8 + G5 CTA)

- scene: back on the chrome, the non-chrome element is the CTA plate. `save this, then` / `tell me your` / `worst null bug.` at 9cqw left-aligned (every group ≤15 characters, so this frame keeps the § 2 ramp), and the mechanic verb as a solid amber `SAVE THIS` plate that drops in (P2) on the spoken word "Save". It is the frame's only amber: the display lines get a colour-free scale pulse instead of a second sweep (§ 1, "amber is the word the voice is on, singular"). The badge is the chrome's — the lower-third kicker `PROGRAMMING BASICS · BASICS II · 17` plus the `BEGINNER` outline chip (BRIEF deviation 6). No exit push; this frame holds and loops.
- duration: 4.5s
- transition_in: settle
- status: animated
- src: compositions/frames/05-save.html
- type: cta
- beat: two asks
- voiceover: "Save this, then tell me your worst null bug."
- sfx: none
- beats (cued): content settles 0.04-0.46 · **l1 `save this, then` 0.06 ("Save" 0.00, "this," 0.26)**
  and **the `SAVE THIS` plate P2 drop-ins 0.10-0.56 on the spoken verb "Save"** (squash-settle
  0.56-0.82) — one amber, the frame's only one · l2 `tell me your` 0.88 ("tell" 0.94) ·
  l3 `worst null bug.` 1.30 ("worst" 1.38) + colour-free scale pulse 1.58 ("null" 1.64) · plate floats
  1.00→4.00 and back to zero · hold to 4.5, no exit push (this frame loops)

## Real durations — MEASURED at af_heart 0.93

VO lengths and every word onset below are from `audio_meta.json` (`studio voice --speed 0.93` +
`studio cues`, ASR word timings, not estimates). Frame seconds are that measured VO plus authored air.

| Frame | VO (measured) | last word ends | air | Frame seconds | Film start | VO words |
|---|---|---|---|---|---|---|
| F1 | 3.328 | 2.96 | 0.97 | **4.3** | 0.0 | 9 |
| F2 | 7.765 | 7.56 | 1.04 | **8.8** | 4.3 | 23 |
| F3 | 4.480 | 4.30 | 1.02 | **5.5** | 13.1 | 14 |
| F4 | 7.360 | 6.80 | 1.04 | **8.4** | 18.6 | 15 |
| F5 | 2.453 | 2.12 | 2.05 | **4.5** | 27.0 | 9 |
| **film** | **25.386** | 23.74 | **6.12** | **31.5** | | **70** |

Measured rate: 70 words over 23.74s to the last word = **2.95 w/s** at 0.93 (below the 3.24 planning
number, because this script's load-bearing words are long — `billion-dollar`, `AttributeError`,
`TypeError`, `JavaScript`, `absence` — and each one gets its own breath). `T0` per frame at these
durations: **0 · 4.3 · 13.1 · 18.6 · 27.0**.

Air is not uniform, and deliberately so: F1-F4 take the house ~1.0s, which is enough for the 0.42s
entrance wipe and the 0.30s exit push (at `D − 0.32`) to sit entirely inside silence. F5 takes 2.05s
because § 12 names it the frame that loops under the platform's chrome, so it gets no exit push and
the most air.

**The film is 31.5s, above the 30s floor, so no padding lever was pulled.** The estimate table said
27.6s; the measured audio is 3.78s longer than the model (F4 alone: 7.36s measured against 4.63s
estimated — the two error names are four syllables each), and no words were added to get here.
