---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 28 of 33
tranche: day-3 (STRUCTURES)
title: prog-basics-28-binary-search-trees
message: "a tree with a rule — smaller left, larger right, at every node — so each look throws away half of what is left, and a million items is twenty looks instead of a million"
hook_source: user (pre-authored, verbatim — bible § 0)
cta_mechanic: Quiz ("What happens if you insert 1, 2, 3, 4, 5 in that order?") — verbatim
destination: shortform-vertical (Reels/Shorts/TikTok), 1080x1920
aspect: 1080x1920
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 101
grammar: G1 · G11-bst · G14 · G14+G3 · G5
marks: G11-bst (BIND to § 6's grid, not redrawn) · G14 halving field (built here first)
pin: hyperframes@0.8.226
length: 39.5s measured (23.4-42s band [M] — lands INSIDE the band)
ceiling: 54s
carrier: false
identity: bench v3.0 (frame.md = frame-day3.md v3.0; deliberately NOT the Day 1 look)
---

## Intent

Day 3 / STRUCTURES, part 28: binary search trees, 1080x1920 English master, Quiz mechanic, `[M]` band.
Copy source of record: `writing/prog-basics/pieces/28-binary-search-trees.md`. Gates were approved by
the user before this tranche fired (bible § 0), so this project was built autonomously to the
pre-render gate only: **no render, no MP4, no publish, no preview, no BGM/SFX, no network asset.**

Two new marks at once. G11-`bst` is **27's grid, taken as given** — node 148×96, levels y 292 / 452 /
612, columns n=1 → 466, n=2 → 232,700, n=3 → 154,466,778, elbow runY 420 / 580 — and this part binds to
it rather than inventing a tree of its own. G14 `halving field` is the tranche's densest frame and is
built here first, from § 6's derivation, to be cloned by 32 and 29.

Measured rate: 101 words / 33.449s speech = **3.02 w/s**, the expected digit-heavy slow end (bible
§ 0.3). Per-frame VO + ~1.0s authored air (~2.0s on F5) → **39.5s**, inside the 34-42s `[M]` band,
12.5s under the 54s ceiling. Nothing was padded and no word was cut to hit a band.

## Locked decisions for this part (bible § 0.2 / § 4b / § 4c / § 4d)

- **Counted pair:** `STEPS 3` on F2 (finding 3 in the 8-root tree: 8 → 4 → 3) and `STEPS 20` on F3
  (the field). **`STEPS` always counts NODES VISITED, never turns.** The voice says "left, then left"
  (two turns) while the counter climbs to 3; the pinned comment owns that gap. Turns are drawn as two
  amber arrowheads, never numbered.
- **Notation law:** the screen shows no `O(`, no `log n`, no bare `n`, anywhere in the film. The voice
  says `log n` **once** (F3, inside the user's own hedge). `LOG SCALE` + `FLOOR` are chips, not counts.
- **Zero coral.** `KeyError`/`AttributeError` appear on no frame. `--err` is not referenced in any
  stylesheet here.
- **Forms:** F4's chamber is real executed Python (`class Node` semantics drawn as the nested tuple that
  the executed `8 → 4 → 3` walk actually is). `SMALLER`, `LARGER`, `ROOT`, `NODE`, `LOG SCALE`, `FLOOR`,
  `PYTHON`, `COMMENT IT` are plate tags / chips. No pseudocode API is shown as chamber code.
- **Colour law:** anything counted gets `--line` (0.16) and its own lane; a marker straddles an edge;
  dimming is background/border + digits at `rgba(244,241,234,0.62)`, never container `opacity`; one
  `--say` arrival per beat; no amber at all on F3.

## Geometry actually authored (so the clone worker does not re-derive it)

**G11-`bst`, § 6's grid read as CENTRES** (the reading that makes § 6's own n=4 hazard true: at n=4 the
gap between adjacent node *edges* is `936/4 − 148 = 86`, exactly the "86px gap" the hazard names — so
`466` is the centre of a single node, not its left edge). Node lefts therefore:

```
8  : left 392, top 292          (centre 466)
4  : left 158, top 452          12 : left 626, top 452   (centres 232, 700)
3  : left  81, top 612          6  : left 393, top 612   (centres 155, 467)
```

Elbow bars are three axis-aligned CSS divs per edge, 3px `--line`, no rotation, no SVG. The two
L1 runs **abut at x 466** (no overlap, per § 6's hazard), and the two L2 runs are 72px each:

```
8→4 : down-stub x 464 y 388 h 32 · run x 232 y 420 w 234 · up-stub x 230 y 420 h 32
8→12: down-stub x 464 y 388 h 32 · run x 466 y 420 w 234 · up-stub x 698 y 420 h 32
4→3 : down-stub x 230 y 548 h 32 · run x  82 y 580 w  72 · up-stub x 152 y 580 h 32
4→6 : down-stub x 230 y 548 h 32 · run x 232 y 580 w  72 · up-stub x 464 y 580 h 32
```

- Search ring 168×116 `--say`, at `node.left − 10`, hops 8 → 4 → 3 on "eight.", "Left,", "left."
- `SMALLER` chips on the two left up-stubs, `LARGER` on the two right up-stubs, mono 700 1.85cqw
  `--muted`, `data-layout-ignore`.
- Two amber arrowheads (one per left turn) on the two traversed runs. Never a second counter.
- **Ring colour (§ 13's pre-empted risk):** the ring carries the `--say` border as its own marker and
  no keyword sweep exists anywhere on F2 — so on every ring beat the keyword stays `--ink`. The two
  amber arrowheads are the only other amber and they land on the same two beats as the two hops.

**G14 `halving field`, § 6 as written** — 20 rows, pitch 36, row h 30, first top 250, last top 934,
bottom 964. Number lane left 744 width 264 right-aligned mono 700 2.9cqw `--value`. Bar left 72, height
30, `--panel-2` + a 3px `--line` left edge, authored widths
`660 627 594 561 528 494 461 428 395 362 329 296 263 229 196 162 129 93 52 8`. `STEPS` ticks 1→20 in
the upper lane on the **same clock** (`row k at 0.40 + 0.28k`, last row at 5.72s). `LOG SCALE` under the
bar lane, `FLOOR` + a 3px `--line` bracket on row 7 (`15,625 → 7,812` is a floor; the odd item is the
one you just read). No amber on F3.
**Verdict: the derivation survived the pixels** — 20 rows at 30px in a 714px field read at ≥28px and
the whole field ends 40px above the hard floor. (What the read actually found is in `Gate state` below;
the two authored numbers that needed a worker's eye are the `FLOOR` bracket's x and the `LOG SCALE`
chip's y, both chrome.)

## Frame-by-frame, as built

- **F1 (G1, 3.6s).** Hook split across three display groups at 9.2cqw — `Search a million` /
  `items in about` / `twenty steps.` — the third group carrying the solid `--say` plate (12 characters
  at plate size is exactly the § 2 "≤14 characters per group" limit, so the plate cannot wrap). Cover
  crop-safe: all three lines sit inside 300-644, and the cover text `a million, twenty steps` is a
  four-token subset of them. No field, no tree (G14 is F3's entrance, the piece is explicit).
- **F2 (G11-bst, 11.0s).** Nodes drop parent-first (P2), elbows draw stub→run→stub (P8). The rule
  sentence paints `SMALLER` / `LARGER` on the up-stubs; the search sentence moves the ring 8 → 4 → 3 on
  `eight.` (6.58), `Left,` (8.60) and `left.` (9.40) while `STEPS 3` ticks 1, 2, 3 on P9. `12` dims on
  the first left, `6` on the second, via background/border with digits at 0.62 ink.
- **F3 (G14, 11.45s).** Twenty rows arriving top-down on the counter's clock; two mint scale-pulses on
  the two number beats (6.80 "One million," → row 1; 9.86-10.24 "down to one." → row 20) because the
  voice is naming those rows — scale, never colour, so the frame keeps its no-amber rule.
- **F4 (G14 tail + G3, 7.4s).** `main.py`, `PYTHON` chip, four type-on lines + terminal, all executed:
  the nested tuple split at its own comma boundaries across three lines so 2.9cqw fits the 660px
  chamber, then `print(t[1][1][0])   # 3`. Brace-bar under `t[1][1]` + a `left, then left` tag. The
  field holds on the right: rows 1-12 retired, **rows 13-20 still visible and dimmed** with
  `STEPS 20` in the upper lane, so `twenty` (4.86) has something to point at.
- **F5 (G5, 6.05s).** Headline `what did you build?` (18 chars ✓ at 6.4cqw in a 176px box), verb plate
  `COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 28 · INTERMEDIATE`, and the
  five inputs as a **plain row of chips** `1 2 3 4 5` arriving one per spoken digit with a `?` chip over
  them. The shape is deliberately not shown — the shape *is* the answer (pb-11's rule).

## Voice

`studio voice --dry` **with** `--speed 0.93` printed `speed=0.93`; the unflagged dry run on this project
printed `speed=0.74`, which is § 1's live trap (the house lookup misses because `.agents/design.md`
nests `voices:` under `voice:`). Per packet § 1 the flag was therefore passed on the real run, and the
only line that matters — `▶ prog-basics-28-binary-search-trees — provider=kokoro voice=af_heart
lang=en speed=0.93` — is what the run printed. `voice_speed:` above is documentation; the tool does not
read it. Kokoro is offline and free; no provider was substituted, ElevenLabs was not attempted
(`voice_id` empty, free-tier 402), HeyGen was not used. `audio_meta.json` carries **5 voice lines,
one per frame** (`studio voice` then ran `cues`, which aligned 101 words onto the approved script text).

## Deviations

1. **F4's chamber is 660px wide, not pb-22's 760**, and the tuple is split across three code lines.
   Reason: the piece requires "the 20th field row still visible" on the right edge, and G14's number
   lane is authored at left 744. A 760 chamber ends at 832 and would sit under it. The split is at the
   tuple's own top-level commas, so the code is still the executed shape.
2. **`STEPS 20` shares F4 with the terminal strip.** § 4 says "a part may have a counted-tag lane or a
   terminal strip on a frame, not both". The tag lives in the UPPER lane (y 288) and the strip in the
   terminal lane (y 900) — two different lanes, and § 4's ban is written against the lower tag lane
   (892 h 66) colliding with the strip (900 h 72). This is a judgement call, made visible here: the
   alternative was dropping `twenty`'s referent, which is the whole reason F4 keeps the field at all.
3. **F4 prints one line, not three.** The piece's F4 table lists `print(t[0])`, `print(t[1][0])`,
   `print(t[1][1][0])`. Three prints plus the tuple will not fit four lines at 2.9cqw in a 660px
   chamber, and adding lines breaks G3's cap. The two discarded outputs (8, 4) are exactly what F2's
   ring and `STEPS 3` already proved; `# 3` remains on the line and the terminal prints `3`.
4. **The two arrowheads live on the traversed runs, not on the up-stubs** (x 356 and x 155). On the
   up-stub they would sit 8px from the `SMALLER` chips, which occupy that stub from y 454. A marker
   must not crowd a label; both still straddle their edge and cover no value.
5. **F2's `SMALLER`/`LARGER` chips are at the top of each up-stub (y 454/614), not mid-stub.** § 6's
   intent is "at the elbow's up-stub" and is preserved; the mid-stub position (y 434) measured a 2px
   overlap with the run bar at y 420-423.
6. **F5 shows no badge chip on the kicker band.** § 5 G5's three-badge convention puts the short form
   in the kicker and `THE ASK` as F5's kicker — done — and `INTERMEDIATE` in the brand line; § 5's
   `[M]` badge string is `… · 28 · INTERMEDIATE`, which is what the brand line carries. The BEGINNER
   amber kicker chip that pb-20/21 shipped is not drawn, because an amber plate in the kicker would be
   a second `--say` arrival on a frame whose plate is the answer verb. Day 3's own § 1 rule wins.
7. **`words: 101`** (the piece's frontmatter said 99 and its F4 table said 19 words). 101 is the word
   count `studio cues` aligned onto the approved script text and is what `audio_meta.json` carries.
   No narration text changed.
8. **GSAP is loaded from `assets/vendor/gsap.min.js`, not the jsdelivr CDN tag** (added by the finish
   worker at 19:20). Reason: this machine currently has no DNS, so the CDN tag made every snapshot a
   blank ground and every pixel review impossible; the vendored file is gsap **3.14.2**, the exact
   version the CDN tag names. This *tightens* packet § 12 ("no network assets") rather than loosening
   it, and it is the one deviation the dispatcher may want to revert for tranche uniformity — the
   other ten parts still carry the CDN tag from pb-22's shape.

## Gate state

**RESUMED 19:20 by the finish worker (previous worker died at ~18:49 with no index.html).**

- `studio assemble --captions` — DONE at 19:20. `index.html` did not exist on disk (the packet's
  "not yet assembled" was in fact "never assembled"); the assembler wrote it. 48 caption groups from
  101 words; `compositions/captions.html` + `caption_groups.json` created; post-fix reported
  `captions lane marked`. Total assembled duration **39.5s (expected ~39.5s, +0s)**.
- `studio verify` — **0 high, 0 medium across 7 html files**, no traps.
- `npm run check` (pin 0.8.226) — Lint 0/0, Layout 0 issues / 9 samples, Motion 0/0, Audio 0/0,
  Contrast 0/0, Craft 5 warnings. **Runtime: 2 errors, both `net::ERR_NAME_NOT_RESOLVED` for
  `https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js`** — this machine has no DNS right now
  (`curl` to the same host fails resolution), and the second error (`Cannot read properties of
  undefined (reading 'timeline')`) is the follow-on of gsap being absent. Not a composition defect.
- **Consequence for the pixel review:** with no gsap the root timeline never registers and every
  snapshot is a blank ground (proved: `--at 1.8` returned only the dot grid + shelf). So the finish
  worker vendored the byte-identical **gsap 3.14.2** (same version the CDN tag names, copied from
  `videos/pattern-builder/assets/js/gsap.min.js`) to `assets/vendor/gsap.min.js` and pointed
  `index.html` + `compositions/captions.html` at it, so `check` and `snapshot` measure real animated
  state offline. See Deviation 8. To restore the shipped scaffold shape, swap the two script tags back
  to the CDN URL (pb-22's tag, with its `integrity` attribute) — one line each, no other change.

Built to the pre-render gate only: scaffold, BRIEF/SCRIPT/STORYBOARD, 5 frames, `voice --speed 0.93`,
`cues`, `assemble --captions`, `verify`, `npm run check`, `snapshot --at` at every emphasis moment plus
0.4s apart inside each scene, and the PNGs read by eye. **No render, no MP4, no publish, no
`preview --background`, no BGM/SFX, no network asset, nothing written outside this directory.**

## Findings for the dispatcher (what the pixels said, after both green gates)

_(filled in at the end of the run — see the worker report.)_
