---
format: 1080x1920
duration: 33s
message: "nodes with lines between them, and that is the whole structure — which is why a map, a friend
  list and the web are the same object, and why walking one needs a memory of where you have been"
arc: hook (three things, one structure) → the graph built, glossed as it is drawn → the danger (route
  pair, then the walk that never stops) → the executed chamber + the memory that stops the walk → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 30 of 33
identity: bench-v3.0
---

# STORYBOARD — prog-basics-30-graphs (prog-basics, part 30 of 33)

English master, portrait 1080x1920, `[B]` band 29-34s, ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/30-graphs.md`. Shape: bible-day3 § 0.3 + § 6. Grammar: `frame.md` v3.0
§ 5 (G1 hook, G3 code chamber, G5 CTA) and **§ 6 G12 `graph`** — the tranche's only mark whose
diagram can fail to terminate.

> **Durations are measured.** Voice: Kokoro `af_heart` through `studio voice --speed 0.93`, 88 words
> over 5 lines. `studio voice` writes the measured speech duration into each `- duration:` line below
> via `sync-durations`; the authored air (~1.0s per frame, ~2.0s on F5) is added by hand afterwards,
> so `studio assemble --captions` is re-run after that edit. Word onsets come from `studio cues`, and
> every emphasis time in the frame files cites one of them. The piece file's estimate table (33.2s at
> the planning average, 38.6s at the slow rate) is a plan, not a measurement.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber
`#FFD166` = the word the voice is on, mint `#5AD6A0` = a value or what printed, `--muted` `#9BA6B2` =
chrome. **Part 30 raises no exception, so this film ships with zero coral**: the cycle is told by a
counter climbing past 3 and a mono `NO END` tag, never by a red pixel (`frame-day3.md` § 7.1,
bible-day3 § 4c). Every frame carries the ligature kill-list and at least two § 9 primitives, and no
cut lands on its neighbour's layout: archetype, wipe direction and hero position all change between
neighbours.

## The mark this part carries (G12, first build — geometry quoted, not derived)

`frame-day3.md` § 6 G12 is the whole derivation and this part is its only user in the tranche, so the
numbers are authored as literals exactly where the spec says to author them:

- **Nodes are G11's 148×96 chamber** at `A left 115 / y 360`, `B left 673 / y 360`, `C left 394 / y
  700` — centres (189,408) (747,408) (468,748). Letters in Space Grotesk 700 at 6.2cqw `--value`, no
  `VALUE`/`NEXT` split (that is G7's anatomy, not a graph node).
- **Edges run EDGE-to-EDGE as 3px `--line` `.g7-bar` divs with authored literals**, never
  centre-to-centre and never SVG in a scaled container: `A→B` `left 263 / top 406 / width 410`;
  `A→C` `left 240 / top 470 / width 280 / rotate(50.6deg)`; `B→C` `left 696 / top 470 / width 280 /
  rotate(129.4deg)` — all three with `transform-origin: left center` in the CSS, matched by every GSAP
  tween on the same element (known-traps § 11). Each far end carries an 11×11 `.g7-chev` built from
  two borders: A→B at x 663 (rotate 45), A→C at x 501 / y 704 (rotate 230.6), B→C at x 434 / y 704
  (rotate 309.4).
- **Crossings are the named hazard** (bible-day3 § 6 rule 8). The triangle has **zero**: A→B runs
  y 407 between the two top nodes, B→C passes left of C's right edge and right of A→C's landing edge,
  A→C passes right of B→C's landing edge. Cap holds at 4 nodes / ≤5 edges / ≤1 crossing, and this part
  stays at 3 / ≤4 / 0.
- **The walk moves one element only.** A 164×110 3px `--say` ring resting at `node.left − 8` with `x`
  tweens of exactly one centre step (**558px**); the chambers and bars carry no tween on a ring beat —
  pb-22's discipline, and the reason `WALKED` climbing is legible as walking and not as a reshuffle.
- **The `visited` set is a chip row, not a colour**: a mono `--muted` `SEEN` tab lands on each node as
  the ring reaches it, and the walk stops at 3.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows; every ambient loop starts and ends
at its own zero so a cut never resets the board. Content lives between y 230 and y 1004; the caption
band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome. The F2/F3/F4 triangle is
one layout at one scale across all three frames — shrinking it is a `scale` tween on a container, never
a second geometry.

Cuts: each frame wipes its content in from a different edge (F1 up, F2 right, F3 left, F4 down, F5
right) and pushes out `y: −60` inside its own air, so no sentence spans a cut and no join is a hard cut
to an identical board.

## Frame 1 — The hook (G1)

- scene: three mono `--panel-2` chips in a row — `maps`, `friendships`, `the internet` — each popping to
  full ink as it is named (they carry no colour role: a chip may not), and below them the display line
  `all the same structure.` with `same structure` swept onto the solid amber say-plate (P1). No
  circles, no edges — the diagram is F2's job. The chips hold still after arriving.
- duration: 4.65s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: three things, one object
- voiceover: "Maps, friendships, and the internet are all the same structure."
- sfx: none

## Frame 2 — The graph, glossed as it is drawn (G12, first draw)

- scene: the board's one layout. Three 148×96 chambers drop in one per named thing (P2, bounce) and each
  takes a `NODE` tab as it lands; then each edge draws itself (P8, `scaleX` on `transform-origin: left
  center`) in the user's order — `A→B`, `B→C`, `A→C` — with an `EDGE` chip at its own midpoint lighting
  as its bar completes. On "direction" a single far-end chevron lights amber for one beat and returns
  to `--line` (one `--say` arrival). On "weights" a `--panel-2` chip carrying a mint `7` settles clear
  above `A→B`'s midpoint. By the end of the frame the user's own example sits on screen, fully glossed,
  and `EDGES 3` arrives in the upper counted lane on the last word.
- duration: 9.85s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/02-graph.html
- type: mechanism
- beat: what the picture is, and what the lines are
- voiceover: "A graph is nodes connected by edges. Edges can have direction or weights. A node is a thing. An edge is a line to another thing."
- sfx: none

## Frame 3 — The danger (G12, two beats, one board)

- scene: beat 1, the route — the same triangle gets its three weights (mint chips `2`, `7`, `4` on the
  three edges' own midpoints) and, in the upper counted lane, the executed pair `DIRECT 2` (left 270 /
  w 300) and `VIA B 11` (left 590 / w 220) that pb-21's tag geometry carries; a short annotation names
  the two paths (`A → C` versus `A → B → C`) so `2 < 11` reads as a comparison, not as two stray tags.
  beat 2, the cycle — the `A→C` edge dims to `--line-faint` while `WALKED 3` clears the lane and a
  `--say` ring begins circling `A→B→C→A→B→C…` with the counter ticking 3 → 6 → 9 → 12 (P9, time proxy,
  no TextPlugin) under a mono `--muted NO END` tag; the board scales to 0.3 and slides left so the
  cycle lane and the chamber's home are both readable, and the walk is still running when the frame
  cuts. The rung that would close the loop is counted (`EDGES 4`), never drawn. Zero coral: the danger
  is the number.
- duration: 12.45s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-danger.html
- type: mechanism
- beat: a graph can lead back where you started
- voiceover: "Social networks, road maps, and the web are graphs. Most 'find the best route' problems are graph problems. But an edge can lead back where you started. Then walking never stops."
- sfx: none

## Frame 4 — The proof, and the memory (G3 chamber)

- scene: one `main.py` chamber (760px, `PYTHON` chip) with three type-on lines under an amber caret (P3),
  every line executed on this machine: `edges = {'A': ['B', 'C'], 'B': ['C'], 'C': []}` /
  `print(edges['A'])          # ['B', 'C']` / `print('A' in edges['B'])   # False`. A `--panel-2`
  terminal strip below prints `['B', 'C']` then `False`, both mint (a printed value, never an error).
  The `False` line *is* the gloss for direction, so a one-clause mono annotation says `B does not reach
  A` and no coral is involved. Beside the chamber, the fix drawn small: the F3 mini-graph, three `SEEN`
  tabs landing one per node, the ring stopping at three, and `WALKED 3` in the lane. Ligatures off.
- duration: 5.25s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: the run, and the memory that ends the walk
- voiceover: "Three nodes, three edges. The walk stops when a node looks familiar."
- sfx: none

## Frame 5 — The ask (G5 CTA)

- scene: headline `what else is?` at 6.4cqw in a 176px box (11 characters, inside the ≤24 law), the
  Debate verb as a solid `--say` plate `COMMENT` in `--say-ink`, the badge line
  `PROGRAMMING BASICS · BASICS III · 30 · BEGINNER`, and the kicker `… · 30 · THE ASK`. Behind it, the
  three edge bars and chevrons from F2 at faint hairline strength with **no letters, no chambers and
  no answer** — an invitation to over-write the shape with the viewer's own example. It holds alone
  under the platform's chrome and carries no exit push.
- duration: 4.95s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Name something in daily life that's secretly a graph."
- sfx: none

## Real durations (measured — filled from `audio_meta.json`, never estimated)

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.648 | 4.65 | 10 | 0s → 3.30s |
| F2 | 8.853 | 9.85 | 26 | 0s → 8.62s |
| F3 | 11.435 | 12.45 | 31 | 0s → 11.06s |
| F4 | 4.245 | 5.25 | 12 | 0s → 3.86s |
| F5 | 2.965 | 4.95 | 9 | 0s → 2.64s |
| **film** | **31.146 speech** | **37.15** | **88** | |

Measured rate: **2.82 words/second** at the house `af_heart` 0.93 — the slow end of the tranche's real
spread (Day 2's carriers measured 2.59 and 3.50), which is what the piece file predicted for a part that
says three digits in F2 alone. Result: **37.15s, above the `[B]` band (29-34s) and inside the 54s
ceiling**. This is reported, not fixed: the air is already at the floor (~1.0s per frame, 2.0s on F5),
no word was added, and cutting narration is not an available lever (bible-day3 § 0.3, WAVE3-PACKET § 3).
The piece file's own note anticipated it — "at the slow rate ~38.6s it drifts into `[M]`. Take the
measurement; report it; do not cut narration."
