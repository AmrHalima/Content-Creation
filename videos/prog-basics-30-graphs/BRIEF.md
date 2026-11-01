---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 30 of 33
title: prog-basics-30-graphs
message: "nodes with lines between them, and that is the whole structure — which is why a map, a friend
  list and the web are the same object, and why walking one needs a memory of where you have been"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Debate ("Name something in daily life that's secretly a graph.")
cta_mechanic_unchanged: true
hook_unchanged: true
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~33s target ([B] band 29-34s; measured durations land in STORYBOARD.md)
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md; Day 3 restates Day 2's numbers)
carrier: false (no carrier wave in Day 3 — G12 is derived in frame-day3.md § 6 and unbuilt)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 88
grammar: G1 G12 G12 G3 G5
marks: G12 graph (new), G3 chamber, G5 CTA
counted_pair: EDGES 3 / WALKED 12  (bible-day3 § 4b, locked)
route_pair: DIRECT 2 / VIA B 11  (bible-day3 § 4, executed)
band: "[B] 29-34s"
pin: hyperframes@0.8.226
---

## Intent

English master of part 30 of `prog-basics` (Day 3 / STRUCTURES, 8th part in badge order): graphs.
Portrait 1080x1920, `[B]` band 29-34s, ceiling 54s. Faceless explainer: no URL, no footage, every
visual invented on the campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/30-graphs.md`. Grammar: `frame.md` v3.0 § 5 (G1 hook, G3 code chamber,
G5 CTA) and § 6 **G12 `graph`** — nodes and edges that can lie about terminating.

This is the only Day 3 part whose diagram can **fail**. A tree never loops back on itself; a graph
does. F3 runs the cycle `A→B→C→A→B→C…` with `WALKED` climbing 3 → 6 → 9 → 12 and a mono `NO END`
tag, which is part 12's infinite loop arriving in a new costume; F4 shows the fix as a memory — three
`SEEN` tabs, the ring stopping at 3. No `visited set` phrase is spoken (piece file, F4 delivery note).

Clone sources (read-only): `videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html`
for the `.g7-bar` / `.g7-chev` / `.g7-chip` atoms (the named G12 clone source, `frame-day3.md` § 6),
that project's `03-walk-prepend.html` for the travelling ring + P9 count-tick time proxy,
`04-chain-code.html` for the G3 chamber + P3 type-on masks + terminal strip, `01-hook.html` for G1 +
the self-contained say-plate, `05-cta.html` for G5, and
`videos/prog-basics-21-arrays/compositions/frames/03-shift.html` for the `.f3-tag` counted chip
(`top:288px; height:66px`, `data-layout-allow-overlap`) — including the two tag positions the piece
names (`left 270 / w 300`, `left 590 / w 220`). Node chambers are G11's 148×96 (`frame-day3.md`
§ 6 G11, part 27's size), which 28/29/31 bind to and 30 places at the authored triangle slots.

## G12 geometry, quoted (do not re-derive)

Nodes `A left 115 / y 360`, `B left 673 / y 360`, `C left 394 / y 700`, each **148×96**, centres
(189,408) (747,408) (468,748). Bars run **edge-to-edge**, authored literals, `transform-origin:
left center`, CSS divs only — never SVG in a scaled container:

| edge | left | top | width | transform | chevron (11×11) |
|---|---|---|---|---|---|
| `A→B` | 263 | 406 | 410 | none (horizontal) | x 663, y 401 |
| `A→C` | 240 | 470 | 280 | `rotate(50.6deg)` | x 501, y 704, `rotate(230.6deg)` |
| `B→C` | 696 | 470 | 280 | `rotate(129.4deg)` | x 434, y 704, `rotate(309.4deg)` |

Walk ring: **164×110** (a 148×96 node + the ±8/±7 offset that makes pb-22's `node.left − 10` rule read
on this node size), 3px `--say` border, resting at `left: node.left − 8`, `top: node.y − 7`, with `x`
tweens of exactly one A→B centre step (**558px**) — the boxes never move.

## The two quality bars for this part

- **Clarity.** One idea per beat, a gloss the moment a term appears, nothing that needs re-hearing.
  `node` and `edge` both arrive inside one seven-word breath, so the **frame** glosses them: a mono
  `NODE` tab on each chamber's name edge and a mono `EDGE` chip at each bar's midpoint (`--muted`,
  `data-layout-ignore`). `DIRECTION` is glossed by a single chevron lighting at a bar's far end plus
  the executed `False` in F4's chamber; `WEIGHT` by a `--panel-2` chip carrying a mint digit at a bar
  midpoint. `SEEN` tabs do the gloss for the memory that stops the walk — the voice never says
  "visited set". **"Traverse" and "iterate" appear nowhere** (bible-day3 § 2), **no Big-O notation
  appears anywhere** (§ 7.2), and the exact counted pair is `EDGES 3` / `WALKED 12`.
- **Motion.** Meaning-carriers, all physical: F2 = the **build** (three nodes drop in P2 one per named
  thing, then each edge draws itself P8 in the user's order `A→B`, `B→C`, `A→C`); F3 = the **danger**,
  two beats on one board — the route pair with two mint chips, then the ring circling A→B→C→A… while
  `WALKED` ticks past 3 (P9 count-tick through a time proxy, no TextPlugin) under a `NO END` tag; F4 =
  the **proof** (P3 type-on on three executed lines, stdout in mint, the mini fixed walk stopping at
  3 with three `SEEN` tabs). Primitives: P1 `say-sweep`, P2 `drop-in`, P3 `type-on`, P7 `pulse-set`,
  P8 `arrow-run`, P9 `count-tick`, plus each frame's entrance wipe, one ambient breath and exit push.

## Colour law for this part (decided, not up for taste)

**Zero coral.** Day 3 raises no error on any frame; the real `KeyError`/`TypeError` cases are
pinned-comment material. The cycle is told by a **counter climbing past 3** plus a mono `NO END` tag
in `--muted` — no red dot, no warning triangle. `--say` amber: at most one arrival per beat (F2's is
the `EDGE` sweep, F3's is the `never stops` sweep, F4's is the `node` sweep); the walk ring is an
object, not a word, and the two are never on screen amber at the same instant. `--value` mint: values
and printed output only (letters in chambers, `3`, `12`, `2`, `11`, both stdout lines, the weights).
Countables (all three edges, the ring) carry `--line` 0.16 / `--say`, never `--line-faint`.

## Accuracy (all of it executed on this machine, 2026-11-01, Python 3.13.15 — from bible § 4 and the
## piece file; no interpreter was run to "improve" it)

`edges = {'A': ['B', 'C'], 'B': ['C'], 'C': []}` → **3 nodes, 3 edges**; `print(edges['A'])` →
`['B', 'C']`; `print('A' in edges['B'])` → **False** (B does not reach A — that line *is* the gloss for
direction). Weights: `A→B` 7, `B→C` 4, `A→C` 2 → direct **2** vs via B **11**. Unweighted cycle walk
`A→B→C→A→B→C→A→B→C→A→B→C` does not terminate → **`WALKED 12`**; with a `seen` set the same loop
visits `['A','B','C']` and stops at **3**. `{'root': ['L','R'], 'L': ['R'], 'R': []}` gives two ways to
reach `R` — the pinned comment's concession that a tree **is** a graph. F4's chamber is exactly this
executed Python; the `SEEN` tabs and the diagram's letters are a diagram, not chamber code.

## Deviations from the piece file (all recorded, none silent)

- **F2's narration semicolon becomes a full stop.** The piece's third sentence is
  `A node is a thing; an edge is a line to another thing.` Spoken and captioned as
  `A node is a thing. An edge is a line to another thing.` — every word kept, no re-cut of the
  writer's sentence, and it satisfies the sentence law (bible-day3 § 11: no semicolons) in the one
  artifact where the sentence is actually rendered (audio + captions). Nothing else in the line moved.
- **F1 keeps the `same structure` plate, and the three `maps` / `friendships` / `the internet` chips
  get no amber border.** A chip per § 4d may carry no colour role, and § 1 bans two `--say` plates at
  once. The chips stay `--panel-2`/`--muted`; they pop to full ink as each word is said.
- **`WEIGHT 7` sits above `A→B`'s midpoint (y 358), not at the midpoint.** A chip centred on a bar
  breaks the bar's continuity and § 1's "a marker straddles an edge, never centres on a value"; the
  chip is a sibling at the bar's midpoint x, offset clear of the line.
- **F3's mini-graph is a scaled `0.3` copy of the same authored literals** (`transform: scale(0.3)`,
  right 664 → 940, top 486 → 720). The two ring beats cannot both own the full-size triangle inside a
  12.2s frame, so the board *shrinks* rather than being redrawn at a second geometry — one set of
  literals, no second layout to get wrong. This is a shape choice, not a variant mark: G12's geometry
  is unchanged, and F2/F3/F4 all read the same triangle.
- **`EDGES 3` is authored to keep ticking to `EDGES 4` on the cycle beat** (`A→B→C→A` adds the edge
  that closes the loop; § 4's `EDGES 6 / NODES 4` for a triangle-plus-centre). The pair stays honest at
  both moments. The rung is **not drawn** — a fourth node would be a geometry the spec does not derive.
- **`WALKED` is `--value` mint, not `--muted`.** It is a counted thing that happened, and `--value`
  owns "what printed / what a walk landed on"; the `NO END` chrome around it stays `--muted`. Nothing
  coral, nothing red, no triangle.
- **F5's background triangle is the three bars only, at 0.4 opacity (≈0.36 effective over `--panel`
  hairlines)** — the piece says 0.62 scale in `--muted` hairlines with no labels; both agree it is
  faint, unanswered context. Letters, chambers and chips are omitted entirely.
- **F4's `SEEN` tabs are `--muted` and the mini chamber's `seen` line is a diagram row, not chamber
  code** (§ 4d: a chamber shows only executed Python). The mini panel therefore reads
  `seen = {} · walk A → B → C → stop` with the stop carried by the three tabs, and the executed lines
  stay in the `main.py` chamber.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices, copied from
  `videos/prog-basics-22-linked-lists/assets/fonts/`. Every `@font-face` names a file on disk.
- Voice: Kokoro `af_heart`, local and offline, pinned by `studio voice` from this file
  (`tts_provider: kokoro`, `voice: af_heart`), generated with the explicit `--speed 0.93` flag because
  the house lookup misses (`.agents/design.md` nests `voice.voices.en`). No provider substituted.
  No BGM, no SFX, no network assets, no font fetches; `.media/manifest.jsonl` untouched.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`
  (there is no Day 3 skin and none was made). Band 1024, Space Grotesk 700 at 46px.
- `design.md` is the workspace brand copy; `frame.md` (v3.0, copied from `frame-day3.md`) overrides it
  for every video decision.

## Gate state

Built to the **pre-render gate only**: voice @0.93, cues, 5 frames, `studio assemble --captions`,
`studio verify`, `npm run check`, `snapshot --at` read by eye. **No render, no MP4, no publish, no
schedule, no `preview --background`, no Arabic.** No other project or `writing/**` file was touched.

## G12 verdict (read this before cloning G12 into another part)

FILLED AFTER THE SNAPSHOTS ARE READ.
