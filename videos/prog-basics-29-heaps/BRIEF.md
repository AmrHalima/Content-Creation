---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 29 of 33
title: prog-basics-29-heaps
difficulty: M
mechanic: Save
band: 34-42s ([M])
message: "a tree with one rule — every parent smaller than its children — which puts the smallest thing at the top where you can grab it, stores itself in a plain row, and is emphatically not sorted"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Save ("Save this for algorithm interviews.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 38.6s (measured; see Runtime)
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md; Day 3 restates Day 2's numbers)
carrier: false (Day 3 runs with NO carrier wave — bible-day3 § 0.1)
grammar: G1 G11-heap G11-heap G3 G5
pin: hyperframes@0.8.226
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 99
cover_text: "the smallest, always on top"
---

## Intent

English master of part 29 of `prog-basics` (Day 3 / STRUCTURES, part 29 of 33): heaps. Portrait
1080x1920, `[M]` band 34-42s, ceiling 54s. Faceless code-card explainer: no URL, no footage, every
visual on the bench v3.0 identity. Copy source of record: `writing/prog-basics/pieces/29-heaps.md`.
Grammar: `frame.md` (v3.0) § 5 inherited marks + § 6 **G11-`heap`** (this part's new mark) + G3 chamber
+ G5 CTA.

Hero: the **array ↔ tree binding** — the same object read as a row and as a tree. 27 draws the shared
G11 grid (concurrently); 29 binds to it and does not redraw or restyle it.

Counted pair (bible § 4b, locked): `ROOT 1` (F3, the value) / `PATH 2` (F4, edges down = 3 levels − 1).
No third number tag on either frame.

Notation law (bible § 0.2, § 7.2): F4 speaks the tranche's second-and-last allowed **"log n"** — inside
the user's own hedged sentence — and the screen shows **no notation at all**, only the counted walk.

Colour law (bible § 4c, § 7.1): **zero coral**. `heappop([])` → IndexError is reply-thread material and
never enters a frame.

Forms (bible § 4d): F4 is a **chamber** (real `heapq`, executed on this machine); the tree/array board
is a **diagram**; `MIN-HEAP`, `MAX-HEAP`, `PYTHON` are **chips**. The API word `push` appears as a
diagram plate and as a spoken word, never inside the `PYTHON`-chipped chamber (the chamber uses
`heapq.heappush`/`heapify`, which is what actually runs here).

Clone sources (read-only): `frame-day3.md` § 6 G11-`heap` (the binding spec) + § 6 G11 (the grid, which
27 draws) · `videos/prog-basics-21-arrays/compositions/frames/02-row.html` + `03-shift.html` (`.pb-chamber`
142×152, `.f3-tag`, `.f3-idx`) · `videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html`
(bar / chevron / chip / tab atoms) · `videos/prog-basics-22-linked-lists/compositions/frames/04-chain-code.html`
(G3 chamber, P3 type-on masks, terminal strip).

## Part traps this build is written against (bible § 4, 29's rows)

- `[1, 3, 2, 7, 5]` is **confirmed but order-dependent**: `heappush` of 1,3,2,7,5 gives exactly this;
  `heapify([7,5,3,1,2])` gives `[1,2,3,5,7]`. So the board credits the build order with a mono chip
  (`built by pushing 1, 3, 2, 7, 5`) and never says "the heap looks like this".
- **Siblings are not ordered**: index 1 holds `3`, index 2 holds `2` — the LEFT child is the BIGGER one.
  Every `--say`/`--value` accent sits on `parent <= child`; none sits on a left-to-right reading, and the
  only bracket drawn pairs a parent with its children.
- `heappop` → `1`, remaining `[2, 3, 5, 7]`, **1 sift-down swap** — root-only claim. The heap array is
  **not sorted** (`h != sorted(h)` → True), so no frame draws a sorted row of boxes. `NOT SORTED` sits
  beside the row on F3, F5.
- `heapify([1,3,2,7,5])` leaves the list **unchanged** — that is F4's chamber argument.
- Ligature kill-list on all five frames: the chip `parent <= child` must read as the five ASCII
  characters `parent <= child`, never as a single `≤` glyph.

## Mark finding — `frame-day3.md` § 6's G11-`heap` geometry does NOT survive as authored

Reported loudly per § 0 rule 2 and packet § 4, before any pixel was painted. Three authored numbers in
the G11-`heap` block are mutually incompatible:

1. **`array: … top 500` collides with `tree: G11 with L0 1 / L1 3, 2 / L2 7, 5`.** G11's authored levels
   are L0 292, L1 452, L2 612 with node height 96 → the tree occupies y 292→708. An array lane at top 500
   (cells 142×152 → 500→652, index strip 716) sits **inside** the tree's L1 (452→548) and L2 (612→708)
   bands, and shares their x columns (both own left 232). A two-face board cannot have both.
2. **"The stubs are straight, so no elbows here and no crossings by construction" is false.** Node
   centre-x per § 6's own column formula: index0 540, index1 306, index2 774, index3 228, index4 540.
   G2b cell centre-x (lefts 74/232/390/548/706, width 142): 145, 303, 461, 619, 777. Only index 1
   coincides (306 vs 303). A straight vertical from a node's bottom centre to *its own* cell's top centre
   therefore exists for one of five pairs. Worse, indices 0 and 4 are in the **same tree column** (both
   centre 540) while a single array row cannot put two cells in one column without overlapping — so no
   column assignment makes all five stubs straight. The authored claim is not reachable.
3. **`ROOT 1` at "upper lane y 288, left 270 / w 300" collides with the root node** (left 466, y
   292→388): 270+300 = 570 overlaps 466→570. And the piece's own grab beat asks for the root's value to
   lift to `y -60`, which lands it at 232 — inside the 230→274 kicker band / "top chrome safe" zone (§ 4).

Resolution shipped here (local, documented, **not** offered as series grammar): the tree keeps the
authored grid **exactly** so 29 binds to 27's shape rather than redrawing it; the array keeps the
authored G2b cell size, pitch and lefts but moves **below** the tree (top 736, § 4's structure field ends
868); the binding is drawn by **matched mono index digits on both faces** (each node carries its slot
number, each cell carries the same number in the same style) rather than by straight stubs; and 29's
counted tags use **§ 4's lower lane (y 892)**, which already lists part 29 as one of its users, instead
of the upper lane. If the dispatcher prefers straight stubs, the cost is one of the two faces' authored
grids — say which, and 29 re-cuts F3/F5 in one pass. **Part 32's G15 service lane is built on the same
two-face idea and must not clone these numbers until this is reconciled.**

## Runtime (measured)

Kokoro `af_heart` @ **0.93** through `studio voice`, 99 spoken words. Measured per-frame VO and the
authored air are in `STORYBOARD.md`'s real-durations table. Film ≈ 38.6s → inside the `[M]` 34-42s band.
The piece file projected 101 words and ~37s at 3.24 w/s, warning of ~43s at 2.7 w/s; the measurement
landed mid-band, so no frame-shape re-cut was needed and **no word was cut or added**.

## Deviations from the piece file (all recorded, none silent)

- **F3's array lane sits below the tree, not at § 6's `top 500`**, and the five straight binding stubs are
  replaced by matched mono index digits on each face (finding 1 and 2 above).
- **`ROOT 1` uses § 4's lower counted lane (y 892) instead of the upper lane (y 288)**; the lifted root
  value is held in a `--panel-2` mint readout chip **beside** the root (G9's returned-value atom) instead
  of `y -60` above the tree, which would put it in the top chrome safe zone (finding 3).
- **No LEAF chips on F3/F2**: 29's narration never says "leaf", and § 6's leaf chip collides with the
  array lane and the elbow runs on this board. The chip is 27's counted beat.
- **F4's drawn "sift path" `.g7-bar` becomes a two-edge level ladder** in the free column beside the
  chamber (F4 is a G3 frame; the tree is not on this board, and drawing a second tree would break the
  single-idea-per-frame rule). `PATH 2` counts it.
- **F4 also carries the executed one-swap pop row** `[5,3,2,7] → [2,3,5,7]` as four mini cells in the same
  column, because "One swap did the rest" is F4's own clause and a chamber comment cannot show it without
  breaking G3's 4-line cap (the piece's own ⚠ note explains why the five pushes are not in the chamber).
- **`LEFT` / `RIGHT` gloss tags live inside the two child nodes** (pb-22's in-node `VALUE`/`NEXT`
  precedent) instead of a paired chip under them, because the gap under L1 is occupied by the elbow run.
- **`MIN-HEAP` / `MAX-HEAP` chips stack in the free band right of the root** (x 640→1008, y 292→396) with
  the flip chevron on the rule chip, rather than "beside their own sentence" at an unassigned position.
- Word count 99, not the frontmatter's 101: F4's line is 18 words as written in the piece's own narration
  table (its column header said 20). No word changed, added or dropped.
- `design.md` (workspace brand) is copied in per packet § 0 but overridden by `frame.md` (v3.0) for every
  video decision, which is Day 1's ruling restated in `frame-day3.md`'s header.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices, copied from
  `videos/prog-basics-22-linked-lists/assets/fonts/`. Every `@font-face` names a file on disk. No font
  fetch, no network asset, no BGM, no SFX. `.media/manifest.jsonl` untouched — nothing here to fetch.
- Voice: Kokoro `af_heart` at 0.93, offline and free, provider pinned from this file. No provider
  substituted. ElevenLabs unusable (empty `voice_id`, HTTP 402 on free-tier keys); HeyGen not requested.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` (Day 3
  reuses it unchanged, `frame-day3.md` frontmatter).

## Gate state

Built to the **pre-render gate only**: voice @0.93 → cues → 5 frames → `studio assemble --captions` →
`studio verify` → `npm run check` → `snapshot --at` read by eye. **No render, no MP4, no publish, no
schedule, no `preview --background`, no Arabic pass.** Nothing outside this directory was written.
Accuracy: every on-screen number comes from `series-bible-day3.md` § 4's executed 2026-11-01 Python
3.13.15 ledger (heappush order, heapify no-op, `h[0]` → 1, heappop → 1 leaving [2,3,5,7] in 1 swap,
index math 2i+1/2i+2, 3 levels → 2 edges) — re-run here only where the piece reproduces the snippet.
