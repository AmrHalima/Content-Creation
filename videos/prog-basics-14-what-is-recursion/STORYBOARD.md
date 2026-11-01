---
format: 1080x1920
duration: 34.7s
message: "a function that solves a smaller version of itself, trusting the next call, until the problem is too small to need one"
arc: hook (the joke) → the shape (a call that comes back to itself) → descent and unwind → the code, executed → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 14 of 22
identity: bench-v2.1
grammar: G8 G8 G6+G8 G3-cutaway G8+G5
carrier: G6 call stack, G8 direct address
---

# STORYBOARD — prog-basics-14-what-is-recursion (prog-basics, part 14 of 22)

English master, portrait 1080x1920, target ~39s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/14-what-is-recursion.md`. Shape: bible § 3. Grammar: `frame.md` v2.1
§ 4 (G8 direct address, G6 call stack, G3 cutaway, G5 CTA) and § 7 (the motion primitives). Durations
below are the measured VO plus authored air, and every emphasis time in the frame files cites a
measured word onset from `audio_meta.json`.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground `#15181D`
with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for everything read,
JetBrains Mono for code and chrome; and colour as a lesson — amber = the word being said, mint = a
value, coral = an error the interpreter raised. **This part raises no exception, so it ships with zero
coral, including the `REC` dot** (that is the G8 finding: a fake red dot would teach the wrong colour
meaning on a frame with no code on it, and the 1s blink does the work).

This is the tranche's first **direct-address** part: the same ground wearing a camera. Four corner
brackets, a `REC` strip with a muted blinking dot and a root-timeline timecode, and a lower third
reading `PROGRAMMING BASICS · BASICS II · 14` over `What is recursion?`. **No face, no body, no
avatar, no silhouette, no emoji** — the mode is chrome plus second-person display type.

## The two new marks, made physical

**G6 (F3).** Recursion drawn as descent, then unwinding. Four cards — not the seven the grammar
allows, because `fact(4)` needs four and four is what fits the content box. Each card is a G2 chamber
at reduced scale with a mono name tab (`fact(4)`…`fact(1)`) and the pending work on its right edge in
muted mono (`× 4`, `× 3`, `× 2`, then `BASE`). Cards drop in top-down, one per spoken clause; widths
are authored per card (100% → 90.6% → 81.2% → 71.8%), never a width tween. On "It stops" the bottom
card's `BASE` flips to a solid amber plate. Then the answer travels **bottom-up**: card 4's value
becomes `1` in mint, the card dims to 0.42, `1` runs up into card 3 (P8), card 3 shows `2` and dims,
card 2 shows `6`, card 1 shows `24` and holds at full opacity. The direct-address chrome stays visible
through all of it.

**G8 (F1, F2, F3, F5).** Consecutive-G8 rule: exactly one frame is type alone (F1). Every G8
neighbour introduces one non-chrome element — F2 the self-loop arrow plus the `n - 1` chip, F3 the
stack, F5 the CTA plate. Wipe direction alternates (F1 from the left, F2 up, F3 from the right, F4 as
a cutaway drop, F5 down), and the hero position changes at every join.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and printed output only; coral `#FF6B5A` is unused here.
Content lives between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty
for the platform's own chrome. All G8 chrome carries `data-layout-ignore` and is never load-bearing.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
authored silence pad (see the measured table below), so no sentence spans a cut and no join is a hard
cut to an identical board. Every exit push sits at `D − 0.32`, i.e. after the last word has finished.
F5 holds (no exit push) because it loops under the platform's chrome.

## Frame 1 — The hook, as direct address (G8, type alone)

- scene: camera chrome over the ground — four corner brackets, the `REC` strip with a muted dot blinking at 1s and the timecode, and the lower third `PROGRAMMING BASICS · BASICS II · 14` over `What is recursion?`. The hook arrives left-aligned at 72px in three groups, `to understand recursion` / `you must first understand` / `recursion`, the second `recursion` on a solid amber plate with ink-to-`#22201B` text. No illustration, no face — this is the one type-alone frame the consecutive-G8 rule allows.
- duration: 4.8s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/01-address.html
- type: hook
- beat: the joke, deadpan
- voiceover: "To understand recursion, you must first understand recursion."
- sfx: none
- beats (cued): l1 at rest t=0 (cover) · "recursion," 0.62 → l2 at 0.30 · "you" 1.80 → l3 at 1.55 ·
  "understand" 2.34 → l4 at 2.15 · **"recursion." 2.92 → P1 sweep 2.82, ink→`#22201B` 3.00, plate glow
  3.20** · exit push 4.48

## Frame 2 — A function calling itself (G8 + the self-loop)

- scene: the non-chrome element arrives — a CSS-bar loop that leaves the word `function`, arcs right, down and back in, and re-enters it, running once per spoken clause (P8). A muted mono chip at the arc's midpoint reads `n - 1`: the smaller version is a number, not a mood. `smaller` takes the amber sweep (P1) and holds. Chrome stays up; the timecode keeps ticking off the root timeline.
- duration: 6.0s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-loop.html
- type: mechanism
- beat: the shape
- voiceover: "Recursion is a function calling itself on a smaller version of the same problem."
- sfx: none
- beats (cued): "function" 0.94 → l2 0.75 · "calling" 1.80 → P8 loop draws out 1.85 / down 2.13 / over
  2.27 / up 2.55 / in 2.67 / head 2.75 · **"smaller" 2.88 → P1 sweep 2.90, ink→`#22201B` 3.08** ·
  "version" 3.24 → `n - 1` chip P2 drop 3.40 · run #2 4.20-5.10 on "of the same problem." · exit 5.68

## Frame 3 — Descent, then the unwind (G6 over G8 chrome)

- scene: four stack cards drop in top-down, one per spoken clause — `fact(4)` full width with `× 4` pending, then `fact(3)` inset 64px with `× 3`, `fact(2)` with `× 2`, `fact(1)` with `BASE`. On "It stops" — the word arrives at 3.26s, straight after the real 0.68s pause the delivery asks for — the `BASE` slot flips to a solid amber plate, and it is retired (plate collapsed 4.35, back to full ink by 4.60) *before* the first card begins to dim at 5.35 (a `--say` plate inside a card dimming to 0.42 measures 2.87:1 and fails). Then the unwind: card 4's value becomes `1` in mint and the card dims to 0.42, `1` travels up into card 3, card 3 shows `2` and dims, card 2 shows `6`, card 1 shows `24` and holds at full opacity. The camera chrome stays visible beside the diagram.
- duration: 9.6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-stack.html
- type: mechanism
- beat: trust, then the stop
- voiceover: "Each call trusts the next one to solve a piece. It stops when the problem is so small the answer is obvious."
- sfx: none
- beats (cued): descent, one P2 drop-in per clause — `fact(4)` at 0.10 ("Each call"), `fact(3)` at 0.80
  ("trusts the next one"), `fact(2)` at 1.50 ("to solve"), `fact(1)` at 2.10 ("a piece.", landing 2.80
  inside the 0.68s pause) · P7 pulse-set on the four pending `× n` markers 3.80+i·0.12 · **"stops" 3.26
  → `BASE` flips to a solid `--say` plate at 3.30, ink→`#22201B` 3.48** · BASE retires 4.35 (plate
  collapses) / 4.40 (back to ink, settled 4.60) — a full 0.75s *before* card 4 starts to dim ·
  **unwind at 1.20s per step**: card4 `1` 4.75 → dims 5.35 → `1` travels up 5.40-6.04 → card3 `2` 6.00
  → dims 6.60 → `2` travels 6.65-7.26 → card2 `6` 7.20 → dims 7.80 → `6` travels 7.85-8.44 →
  **card1 `24` 8.40, holds at full opacity through the cut** · exit push 9.28

## Frame 4 — The same truth as code (G3 cutaway, not a new slide)

- scene: the cutaway drops over the same direct-address ground at 880px wide (BRIEF deviation 6 — the grammar's 700px forces the 46-character return line under the 28px code floor; the chrome stays visible on all four sides) with a 0.18-opacity scrim behind it only — no blur, no new colour. Titlebar `main.py`, chip `PYTHON`. Type-on under the caret reveals `def fact(n):` then the return line, which shows `n <= 1` as two real characters, not a ligated `<=` glyph. `fact(n - 1)` inside it takes the frame's one and only amber sweep just after "waits on", on the spoken words "fact of three", because that call is the wait. The terminal strip below prints `24` in mint on "twenty-four" — executed output.
- duration: 10.2s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/04-cutaway.html
- type: example
- beat: proof
- voiceover: "Fact of four waits on fact of three, then two, then one. One is the base case. Four times three times two times one is twenty-four."
- sfx: none
- beats (cued): "Fact of four" 0.00 → P3 type-on line 1 at 0.15 · "waits on" 0.68 → line 2 (the return
  line) types on 0.72-1.34 · **"fact of three" 1.12 → the one and only P1 sweep, on `fact(n - 1)`, at
  1.30** · "then one." 2.88 → line 3 `fact(4)` types on 2.95 · "One is the base case" 3.76 → non-colour
  scale settle on the return line 3.85 (no second amber plate) · "twenty-four" 8.14 → the inline `# 24`
  and the `>>> 24` terminal strip land 8.06 / 8.26, pulse 8.70 · exit push 9.88

## Frame 5 — The ask (G8 + G5 CTA)

- scene: back on the chrome, the non-chrome element is the CTA plate. `drop the best recursion joke you know` at 9cqw left-aligned, the mechanic verb as a solid amber `DROP IT` plate, the badge line kept, and the part's own joke echoed once in tiny muted mono under the plate (`to understand recursion, you must first understand recursion`, `data-layout-ignore`, under the 28px floor on purpose — it is for people who rewind). No exit push; this frame holds and loops. **`joke` no longer takes a second amber sweep**: the `DROP IT` plate is this frame's one and only `--say` mark, and it is lit on the spoken verb "Drop" (0.00). A sweep on `joke` put two amber plates on screen together, which frame-day2 § 14 names as a § 1 violation. `joke` gets a colour-free scale pulse instead.
- duration: 4.1s
- transition_in: settle
- status: animated
- src: compositions/frames/05-ask.html
- type: cta
- beat: the ask
- voiceover: "Drop the best recursion joke you know."
- sfx: none
- beats (cued): **"Drop" 0.00 → the `DROP IT` plate P2 drop-ins at 0.10** (one amber, on the spoken verb)
  · l1 0.08 · "recursion" 0.64 → l2 0.60 · "joke" 1.22 → colour-free scale pulse 1.24 · "you know" 1.46
  → l3 1.42 · the joke echo arrives 2.60 and holds 1.5s (no exit push — this frame loops)

## Real durations — MEASURED at af_heart 0.93

VO lengths and every word onset below are from `audio_meta.json` (`studio voice --speed 0.93` +
`studio cues`, ASR word timings, not estimates). Frame seconds are that measured VO plus authored air.

| Frame | VO (measured) | last word ends | air | Frame seconds | Film start | VO words |
|---|---|---|---|---|---|---|
| F1 | 3.755 | 3.58 | 1.05 | **4.8** | 0.0 | 8 |
| F2 | 4.971 | 4.72 | 1.03 | **6.0** | 4.8 | 14 |
| F3 | 6.635 | 6.20 | 2.97 | **9.6** | 10.8 | 22 |
| F4 | 8.896 | 8.48 | 1.30 | **10.2** | 20.4 | 26 |
| F5 | 2.091 | 1.82 | 2.01 | **4.1** | 30.6 | 7 |
| **film** | **26.348** | 24.80 | **8.36** | **34.7** | | **77** |

Measured rate: 77 words over 24.80s of speech = **3.10 w/s** at 0.93 (vs the 2.4 w/s the piece file
assumed, i.e. its table ran ~26% long, and vs the 3.24 w/s planning number — this part's copy has two
long sentences in F4, which costs a little rate). The old estimate table said 32.08s of speech for the
same 77 words; the audio is 26.35s, so **every frame was retimed to the cued onsets and no frame kept
its previous internal schedule.**

Air is not uniform, and deliberately so:

- **F1, F2: 1.05s / 1.03s** — the house ~1.0s. Enough for the 0.42s entrance wipe and the 0.30s exit
  push to sit entirely inside silence (speech ends 3.58 → push at 4.48; 4.72 → push at 5.68).
- **F3: 2.97s.** This is the frame the film exists to prove. The four-card descent, the `BASE` plate and
  the four unwind steps (`1 → 2 → 6 → 24`) all live here, and the sentence that triggers the unwind
  ("…so small the answer is obvious") only finishes at 6.20. At the house 1.0s of air the cascade ran
  0.90s per step and `check` raised three **real** `line_unread` findings on the travelling answers
  (`#f3-tv1/2/3` measured 0.33-0.37s on screen, under their 0.40s floor). The cadence is now **1.20s
  per step**, each travelling answer legible 0.59-0.64s and each resolved value held ~0.60s at FULL
  opacity before its card dims to 0.42. The last 1.5s of the cascade lands in authored silence, still
  inside the frame. This is the same lever the estimate-paced pass pulled (10.2 → 11.6 for six of the
  same findings), applied to the measured audio rather than to the model.
- **F4: 1.30s.** The chamber's three type-on lines, the single say-sweep and the printed `24` are all
  word-keyed; the extra 0.3s over the house minimum is the hold on `24` after "twenty-four" (8.48).
- **F5: 2.01s.** § 12's explicit allowance: F5 loops under the platform's chrome, so it gets no exit
  push and the most air. The tiny joke echo arrives at 2.60 and holds 1.5s.

Nothing was added to the narration to reach this length (user's standing choice: no added words).
**34.7s is above the 30s floor, so no padding lever was pulled.** Against the piece file's ~39s target
this part is 4.3s short, entirely because the 2.4 w/s model over-estimated the speech by 5.69s.
