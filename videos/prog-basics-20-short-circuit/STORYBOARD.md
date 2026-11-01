---
format: 1080x1920
duration: 30.6s
message: "`and` and `or` stop the moment the answer is settled, so a cheap check in front of a risky one keeps the risky one from ever running"
arc: hook → the rule and the two letters (gate stops early) → what that buys (the guard) → example (nothing prints) → ask (tag them)
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 20 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-20-short-circuit (prog-basics, part 20 of 22)

English master, portrait 1080x1920, target ~29-34s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/20-short-circuit.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4
(G1 hook, **G3 code chamber ×3**, G5 CTA) and § 7 (the motion primitives). Durations below are the
estimates the voice run replaces with measured VO; the authored air (~1.0s per frame, plus the grown
pad on F5) is added back into `- duration:` after `studio cues`, per bible-day2 § 12.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value, coral = an error the interpreter raised. **This part raises no exception,
so it ships with zero coral**: `None` is a value and goes in mint, `NO ERROR` is chrome in `--muted`,
and the flipped order that really does raise `AttributeError` is kept off screen (pinned comment only).
Every frame carries at least two § 7 primitives, and no cut lands on the previous frame's layout: F2
wipes in from the left with the chamber high and the apparatus low, F3 wipes from the right with a
shorter chamber and a two-box lane, F4 wipes up into the tallest chamber plus a terminal strip, F5
drops down with no chamber at all.

## The gate, made to stop (the clone, and the one thing that changes)

`videos/prog-basics-11-for-vs-while/compositions/frames/03-gate.html` is the source, and its apparatus
is reused atom for atom: a `main.py` chamber with the `PYTHON` chip and P3 type-on under a caret, a
labelled **gate** box, a **wire** running out of it, and a **body** chamber on the far end. Part 11's
gate re-tests — body fills, loop-back arc redraws, chip re-read on every pass, `pass 1/2/3` chips, an
exit arrow when the condition finally flips. **Part 20's gate stops.** There is no arc, no pass chip
and no exit arrow, because nothing is ever evaluated twice. `A` resolves `False`, the wire draws out
of the gate and retracts before it reaches `B`, and `B` is a G2 `empty` chamber — 3px **dashed**
`--line`, no value, one dim mint caret blinking at 1s — that stays dark for the whole frame. The
counted tag `RAN 1 OF 2` in `--muted` mono is what says it numerically, and it is sized as reading
text (3.0cqw, ~32px) because that tag is the part. Executed on Python 3.13.15: with `A = False` the
side-effect list stays `[]` and the branch never runs; the control `A = True` records `['B ran']`.

F3 is the same idea in real code: `user` holds `None` (mint), a CSS connector reaches toward
`.is_admin` and retracts, and `.is_admin` sits in a dashed chamber that never lights, with a muted
`NO ERROR` chip beside it. F4 is the run: four lines, one amber say-plate on
`user and user.is_admin` at its spoken onset, and a terminal strip with a muted `>>>` prompt and
**nothing after it** — empty stdout is the proof, executed.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only and **only one plate is live at a time**; mint `#5AD6A0` marks values (`False`, `None`) and
printed output only; coral is unused. Chambers are `--panel` `#1F242C` on the field with 3px
`rgba(255,255,255,0.16)` hairlines and the G2 shadow, `--panel-2` titlebars at 64px with the filename
in muted mono and a `PYTHON` chip. Every frame's stylesheet carries the mono ligature guard
(`font-variant-ligatures: none` + `"liga" 0, "calt" 0, "dlig" 0`). Content lives between y = 230 and
y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

## Frame 1 — The hook (G1)

- scene: type alone on the ground, three groups, nothing illustrated. `your code skips` arrives, then `half your condition`, then `and that's a feature` with the last three words on the solid amber say-plate (P1). Two muted mono glosses land on their own spoken words: `condition = the yes or no you ask`, `skips = it never runs`. Kicker `PROGRAMMING BASICS · BASICS II · 20` with the `INTERMEDIATE` badge — the only one in the tranche.
- duration: 4.03s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the claim
- voiceover: "Your code skips half your condition, and that's a feature."
- sfx: none

## Frame 2 — The gate that stops early (G3)

- scene: a `main.py` chamber, one line typed on under the caret (`if A and B:`), then the apparatus below it. The gate box reads `A` = `False` in mint and flashes its border amber for 0.26s on the spoken word "false" (a flash, not a plate — mint stays the value colour). The wire draws out of the gate toward B and **retracts before it arrives**. B is a dashed G2 `empty` chamber with a dim mint caret blinking at 1s and never lights. The counted tag `RAN 1 OF 2` settles under the row in muted mono, sized as reading text. Eyebrow: `SHORT-CIRCUIT = IT STOPS EARLY`, fully muted.
- duration: 8.02s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-gate.html
- type: mechanism
- beat: the rule
- voiceover: "With and or, the language stops as soon as the answer is known. Take A and B. If A is false, B never runs."
- sfx: none

## Frame 3 — The guard (G3)

- scene: a shorter chamber, two lines (`user = None`, `if user and user.is_admin:`) typed on, `None` in mint both times. Below it the lane: a solid box `user` holding `None` (P2 drop-in), a 24px CSS connector reaching right toward a dashed box `.is_admin`, and the connector retracting before it lands. The dashed box never lights. A muted chip `NO ERROR` settles beside it and the gloss `None = no user yet` arrives on the spoken word "exists". One amber plate, on `user` inside the condition, at its spoken onset.
- duration: 5.89s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-guard.html
- type: mechanism
- beat: what the rule buys
- voiceover: "That lets you guard risky checks, like making sure something exists before reading it."
- sfx: none

## Frame 4 — The worked example (G3)

- scene: the tallest chamber, four lines typed on one per spoken clause — `user = None` / `if user and user.is_admin:` / `    print('admin')` / `# nothing prints, no error` (single-quoted, ligatures off). The amber say-plate wipes across `user and user.is_admin` as the voice names it, then retires to ink. The terminal strip arrives last: `--panel-2`, a muted `>>>`, and **no output** after it. Kicker `IT RUNS, NOTHING PRINTS`.
- duration: 7.21s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof
- voiceover: "Here user is None. The and stops at once, so admin is never read. Nothing prints, and nothing breaks."
- sfx: none

## Frame 5 — The tag (G5 CTA)

- scene: `who writes nested ifs?` at 6.4cqw in a 176px band. Left, the nested fragment `if user:` / `    if user.is_admin:` in a chamber with a P10 strike rule drawing across it; the rule retires to `--line` and the block dims to 0.42 with its digits at full ink before the plate lands. Right, the guarded one-liner `if user and user.is_admin:` at full ink. Then the `TAG THEM` verb plate in solid amber, and the series line `PROGRAMMING BASICS · BASICS II · 20 · INTERMEDIATE`. Holds alone; no exit push.
- duration: 5.45s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Tag the dev who writes nested ifs for this."
- sfx: none

## Real durations

Measured on 2026-10-28 by `studio voice` (Kokoro `af_heart`, printed line
`provider=kokoro voice=af_heart lang=en speed=0.93`) and `studio cues`, which produced the per-word
onsets every emphasis time in the frame files cites. **5 voices in `audio_meta.json`, one per frame**,
76 aligned words, `bgm: null`, `sfx: []`. Air is 1.0s on F1-F4 and **3.0s on F5** (grown — see the
runtime finding), so each 0.5s crossfade sits inside silence and no sentence spans a cut.

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.029 | 4.03 | 10 | 0s → 2.70s |
| F2 | 7.019 | 8.02 | 24 | 0s → 6.74s |
| F3 | 4.885 | 5.89 | 14 | 0s → 4.72s |
| F4 | 6.208 | 7.21 | 19 | 0s → 5.88s |
| F5 | 2.453 | 5.45 | 9 | 0s → 2.12s |
| **film** | **23.594 speech** | **30.60** | **76** | |

Cumulative starts: 0 / 4.03 / 12.05 / 17.94 / 25.15.

**RUNTIME — under 30s at standard air, fixed with the permitted lever, reported.** 23.594s of measured
speech + the baseline air (1.0s/frame, 2.0s on F5) is **29.59s**, below the tranche's 30s floor. Per
`frame-day2.md` § 12 lever 1, **F5's pad was grown from 2.0s to 3.0s** (F5 is the frame that loops
under the platform's chrome and carries no exit push), landing the film at **30.60s**. **No words were
added** (bible-day2 § 0.2, the user's explicit choice), no other frame's air was shrunk, and the
narration is the piece file's copy word for word. F5's extra air is filled with shape, not filler: the
strike draws, retires and dims, then the `TAG THEM` plate breathes and the series line closes.
