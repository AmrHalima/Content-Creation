---
format: 1080x1920
duration: 31.15s
message: "a cache that forgets the thing you touched longest ago — and the reason it can decide that cheaply is two structures working as one, a map to find and a chain to order"
arc: hook (what leaves) → the rule, two nodes, full → the read that reorders → the two parts side by side → the quiz
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 36 of 44
identity: bench-v2.2
---

# STORYBOARD — prog-basics-36-lru-cache (prog-basics, part 36 of 44)

English master, portrait 1080x1920, ~31.0s (ceiling 54s, band 29-34s). Copy source of record:
`writing/prog-basics/pieces/36-lru-cache.md` (carries the approved A6 edit: *constant time on average*,
81 spoken words). Grammar: `frame.md` v2.2 § 4 **G21 recency chain** (the mark this part proves), plus
G1 hook, **G4 split** chrome for a map panel and a chain panel, G5 CTA. Ledger:
`writing/prog-basics/ACCURACY-day4.md` § 36 — every number and printed string on screen is that probe's
executed output (`put(A,1)`/`put(B,2)`/`get(A)`/`put(C,3)`, the four recency states, the map contents,
`EVICTED: B`, `3 pointer writes, no scan`).

> **Durations are measured.** Voice: Kokoro `af_heart` through `studio voice`, 81 words over 5 lines,
> `--speed 0.93` passed explicitly. The frame durations below are the measured VO plus authored air
> (1.0s per frame, 2.0s on F5) so every 0.5s crossfade sits inside silence. Word onsets come from
> `studio cues` and every emphasis time in the frame files cites one of them.

## Identity note

Graphite ground `#15181D`, drifting dot grid that returns to its own zero inside every frame, Space
Grotesk for everything read and JetBrains Mono for code and chrome, amber = the word the voice is on,
mint = a value or what printed. **Zero coral in this part** (`frame-day4` § 6: 36 evicts, and evicting is
the design, not an error) — `--err` appears nowhere in the five frames. **No notation anywhere** (§ 5 row
36: constant time stays in words; no `O(` glyph in any frame, caption or plate).

## The marks this part carries (G21, first build — Wave A carrier)

This frame set is the first to draw the recency chain, so the numbers below are what parts 37 and 38
inherit. All are pb-22's shipped atoms, re-laned, not re-styled:

- **Node: 176x108, radius 22, `--panel` interior, 3px `--line` border, G2's shadow, split by a 3px
  `--line-faint` hairline** into a left cell (Space Grotesk 700, mint, 3.6cqw) and a right `→` cell
  (JetBrains Mono 400, `--muted`, 3.2cqw). pb-22's F3 row form, verbatim.
- **Row lane: node top 400 (→508), slot lefts 72 / 272 / 472 / 672 at pitch 200.** pb-22's row moved up
  70px so the key chips get the 340 lane (G21). Slot 0 = head (NEWEST), slot 1 = tail (OLDEST), slot 2 =
  the `None` terminator, slot 3 = the **park slot** a promoted node steps into before it sweeps left, and
  the slot the eviction ghost fades from.
- **Connectors are CSS divs, never SVG: 24px `.g7-bar` (3px `--line`) at the node's right edge,
  top 453, plus an 11x11 `.g7-chev` at +12x / −5y.** Slot 0→1 bar at 248, 1→2 at 448.
- **Key chips (the map side, drawn onto the chain): 96x44 `.g7-chip` at top 340, centred over each node
  (lefts 112 / 312), `--panel-2`, 2px `--line`, radius 12, mono 400 2.2cqw `--muted`, with a 3px
  `--line` vertical pointer 12px tall at the chip's centre x from chip bottom (384) to node top (400).**
  A chip and its node are **siblings that share the same x tween** — never a child of a translating
  container (G21's hazard), so frame coordinates stay true.
- **Promotion is right-to-left (pb-21's law, nothing lands on an occupied slot): the promoted node steps
  +400 to the park slot first, THEN the displaced node tweens +200, THEN the promoted node sweeps −600
  into the freed head slot.** 0.34s `power3.inOut` each, the arriving node flashes mint (P2's border
  flash). Distances are exact multiples of the 200 pitch.
- **Eviction fades inside the content box: x +140 with opacity 1→0 over the first 60% of a 0.5s tween,
  so it is fully invisible by frame x 988.** A node parked at slot 3 (left 672) ends at 812 with its
  right edge at 988 — 20px inside the 1008 content edge, so nothing leaves the frame and no
  `data-layout-allow-overflow` claim is needed.
- **The executed state plate: mono 2.6cqw (28px, at the reading floor, so no `data-layout-ignore`),
  rows at 38px pitch from top 630, op in `--muted` 400, `->` in `--muted`, recency state in mint 700.**
  One row per operation, performed one op then read — the plate shows *different* states per row
  (`A` / `B -> A` / `A -> B`), which is the guard against the eager-evaluation bug the probe recorded.

## Video direction (shared by all five frames)

Content lives between y 230 and y 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for
platform chrome. Each frame wipes its content in from a different edge and pushes out inside its own
authored silence, so no sentence spans a cut and no join lands on an identical board (archetype, wipe
direction and hero position all change between neighbours).

**The eviction is never performed in this film.** The quiz asks which item leaves, so F2 draws the rule
as a dashed ghost that fades (no value, no event) and F4's plate leaves `put(C,3)`'s state cell an empty
dashed slot. `EVICTED: B` and the `C -> A` state are the pinned comment's, not the film's — the decision
logged in the piece file under Accuracy, kept here.

## Frame 1 — The hook (G1, the cover)

- scene: type alone on the ground, three lines, nothing illustrated — `a cache`, then `full of things`, then `what leaves?` landing last on the solid amber say-plate (`--say-ink` text, P1 sweep left-to-right). The hook words are cut for the eye; the sentence is spoken whole. Kicker `PROGRAMMING BASICS · UNDER THE HOOD · 36` with the amber `INTERMEDIATE` plate beside it.
- duration: 3.3s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: a full thing that has to choose
- voiceover: "How does a cache decide what to throw away?"
- sfx: none

## Frame 2 — The rule, two nodes, full (G7 chain, G21 first draw)

- scene: the chain lane at top 400 with key chips at 340 pointing down into their nodes. `A` drops into the head slot on "fixed size" (P2, mint border flash); B `put(B,2)` makes B the new head, so `B` drops into the reserved head slot and A slides to the tail — one connector redraws (P8), the muted `None` terminator chip arrives after the tail. Cells carry mono `KEY` / `NEXT` labels. Two counted tags in the lower lane: `USED: A new, B older` and `FULL 2 OF 2`. The eviction **rule** is drawn as a 3px dashed empty chamber at the park slot sliding out right and fading to zero opacity inside the content box (x +140, gone by 988) with a mono tag `evicts: throws it out` — no item leaves, because nothing has been read yet. The executed plate prints two rows: `put(A,1) -> A` and `put(B,2) -> B -> A`.
- duration: 7.25s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-rule.html
- type: mechanism
- beat: fixed size, oldest goes
- voiceover: "An LRU cache has a fixed size. When it fills, it throws out the item used least recently."
- sfx: none

## Frame 3 — The read that reorders (G21 promote)

- scene: same row, now holding `B -> A`. On "read" the 3px `--say` ring (196x126 at node.left − 10) runs down the connector to node `A` (P8 arrow-run) and the chip pointer to A lights with it. Then the promotion, three moves, never a layout reflow: A steps +400 into the park slot, B slides +200 into the vacated tail slot, A sweeps −600 into the head slot and its border flashes mint; the `NEWEST` / `OLDEST` eyebrow labels hold (they name the slots, so the swap reads as a promotion), the tail tag re-ticks from `USED: A new, B older` to `USED: B oldest`, and the plate adds the third row `get(A) -> A -> B`. One reading line: `a read is also a write`, ink on `also`. Nothing is evicted on this frame.
- duration: 6.23s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-promote.html
- type: mechanism
- beat: the reversal is the lesson
- voiceover: "Every read moves that item to the front. So the back of the line is always the oldest."
- sfx: none

## Frame 4 — The two parts (G4 split: map panel, chain panel)

- scene: two titled panels, no code chamber and no language chip (nothing here was executed as a script). Map panel (`map`) prints `key -> node` then the executed `'A': 'node(A)',` / `'B': 'node(B)'}`; chain panel (`chain`) prints `head -> A -> B -> None`, the `PREV <- A <- B` hairline drawn back along it, and the pinned cost line `3 pointer writes, no scan`. The colour hands off mid-sentence: mint on the map's values, `--say` on the chain's order for the half-second each word is spoken. The plate's fourth row arrives as the frame's last object: `put(C,3) -> FULL` with its state cell a 3px dashed empty slot — the waiting `put C`, which never enters. Reading line in ink at 3.0cqw `map finds it · chain orders it`, counted tag `ONE LOOK + ONE RE-LINK` in the lower lane.
- duration: 8.49s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-two-parts.html
- type: example
- beat: a map to find, a chain to order
- voiceover: "A hash map finds the item, and a linked list reorders it. That keeps every read and write in constant time on average."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: headline `which one leaves?` at 6.4cqw in the 176px band, then two chips `A` / `B` in `--panel-2` with 3px `--line`, **unselected**: the ring travels A → B and is released, resting on neither (answering the viewer's quiz on screen is answering their quiz). Beneath them the dimmed chain from F3/F4 holds as the board — container skin at 0.42, every digit and letter at full ink — with the `put C` chip parked outside it at the park slot, unlit, unlinked. Then the `COMMENT IT` verb plate in solid `--say` and the series line `PROGRAMMING BASICS · UNDER THE HOOD · 36 · INTERMEDIATE`. No eviction anywhere. Holds alone under the platform's chrome; no exit push.
- duration: 5.88s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Capacity 2: put A, put B, get A, put C. What gets evicted?"
- sfx: none

## Real durations

Measured by `studio voice` (Kokoro `af_heart`, `--speed 0.93` passed explicitly — the dry run printed
`provider=kokoro voice=af_heart lang=en speed=0.93`) + `studio cues` (real faster-whisper ASR, 81 words
aligned to the approved script text, both audio metas written). Air is 1.0s per frame and 2.0s on F5, so
each 0.5s crossfade sits inside silence and no sentence spans a cut.

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 2.304 | 3.30 | 9 | 0s → 2.00s |
| F2 | 6.251 | 7.25 | 18 | 0s → 5.94s |
| F3 | 5.227 | 6.23 | 18 | 0s → 4.80s |
| F4 | 7.488 | 8.49 | 23 | 0s → 7.14s |
| F5 | 3.883 | 5.88 | 13 | 0s → 3.58s |
| **film** | **25.153 speech** | **31.15** | **81** | |

Cumulative starts: 0 / 3.30 / 10.55 / 16.78 / 25.27. Measured rate **3.22 words/second** (81 / 25.153),
within a hair of the tranche's 3.24 — the piece file's ~31.0s projection is 31.15s on the real audio.
**Inside the 29-34s band**, above the 29s floor, so no pad was grown and no word was touched. Word onsets
come from `studio cues` and every emphasis time in the frame files cites one of them.
