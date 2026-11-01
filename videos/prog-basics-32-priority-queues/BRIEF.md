---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 32 of 33
tranche: day-3 (STRUCTURES)
title: prog-basics-32-priority-queues
message: "serve the most urgent, not the oldest — which is part 29's heap with a job, and when two items share a priority a plain tuple heap breaks the tie by spelling, not by turn"
hook_source: user (pre-authored; verbatim)
cta_mechanic: Debate ("Is priority-first always fair? Comment your take.")
cta_mechanic_unchanged: true
hook_unchanged: true
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 5 frames, ~33-40s projected (88 words at 2.59-3.50 w/s + ~6s air) — measured at the voice gate, [M] band 34-42s
ceiling: 54s
narration: yes
audience: first-week programming learners — prog-basics lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md)
carrier: false (Day 3 has no carrier wave — bible § 0.1)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 88
grammar: G1 G15 G15 G3 G5
marks: G15 service lane (new, this part only)
pin: hyperframes@0.8.226
---

## Intent

English master of part 32 of `prog-basics` (Day 3 / STRUCTURES, badge order 32): priority queues.
Portrait 1080x1920, `[M]` part, band 34-42s, ceiling 54s. Faceless code-card explainer: no URL, no
footage, every visual invented on the bench identity. Copy source of record:
`writing/prog-basics/pieces/32-priority-queues.md`. Grammar: `frame-day3.md` § 6 — G1 hook,
**G15 service lane ×2 (F2, F3)**, G3 code chamber, G5 CTA.

This is the tranche's **Debate** part, and the only part where the accuracy finding *is* the argument:
bible § 4's executed tie-break (`(1,'low')` pops before `(1,'urgent')` — decided by the label's
spelling, not by arrival) answers the user's own CTA question with a real *no*. F3's counted beat and
F4's whole frame exist to show that a plain `(priority, item)` heap is not fair among equals.

## What is inherited and what is new

- **G15 `service lane`** (`frame-day3.md` § 6) is the new mark: 29's two-level heap + a departure lane
  on the right + a tuple chip lane on the left. It is the tranche's only *composite* mark, so it
  inherits G11's tree risk and G9 line's "boxes never slide" risk at once.
- **The heap is built from § 6's G11 geometry, not from pb-29's files** — 29 is being written
  concurrently. Root node 148x96 at left 466 / y 292 (centre 540), L1 nodes at lefts 232 / 700 on
  y 452, three axis-aligned 3px `--line` elbow bars per edge with `runY` 420. Node values 1 / 3 / 2
  are 29's executed `heappush` order `[1, 3, 2, 7, 5]` top two levels (bible § 4), and they are the
  *literal* callback: same node size, same elbows, same tab as 29 will ship.
- **Adjacency law (bible § 5):** 32 then 29 is the one accepted repeat in the publish order (both
  heap-family). 32's hero is therefore the **service lane with two tuple chips**, not an array↔tree
  binding: no `G2b` array row appears anywhere in this film.
- Chips, never chambers: `SCHEDULERS`, `SHORTEST PATH` (the gloss the name `Dijkstra` cannot carry in
  the sentence), `NOTIFICATIONS`, `HEAP`. Nothing about a scheduler or Dijkstra was executed here.
- **Mandatory convention chip `SMALLER = EARLIER`** beside the tuple lane (bible § 4 / CORRECTIONS § B):
  smaller number = higher priority is a convention, not a law.
- **Zero coral** (§ 7.1, bible § 4c): the real `TypeError` on unorderable ties is pinned-comment /
  reply-thread material and appears nowhere on any frame. `--err` is not declared in this project.
- No Big-O glyph anywhere; `log n` is **not said at all** in 32 (the tranche's two utterances are spent
  in 28 and 29).

## The five frames

1. **F1 (G1)** — the hook cut to six words: `an ER` / `doesn't treat` / `by arrival`, amber plate on
   `by arrival`. No heap, nothing illustrated.
2. **F2 (G15, the heap gets a job)** — the two-level heap drops in parent-first (P2), a 3px `--line`
   rail draws root → SERVED slot (P8), `PRIORITY` lands on the root's tab and `QUEUE` on the slot's,
   the `HEAP` chip arrives on "built on a heap", a `--say` ring marks the root on "highest priority".
3. **F3 (G15, served out of order)** — `(5, 'low')` drops at y 640, `(1, 'urgent')` at y 712 (arrival
   order top-to-bottom, `1st`/`2nd` tabs + `ARRIVAL` header say it is not numeric order); on "pop gives
   urgent" the `(1, 'urgent')` chip travels right and up into the SERVED slot (0.5s power3.out) and
   turns `--value` mint, while `(5, 'low')` holds exactly where it is. `FIRST 'urgent'` counts the
   serve. `SMALLER = EARLIER` beside the lane, `SCHEDULERS / SHORTEST PATH / NOTIFICATIONS` in the
   lower lane.
4. **F4 (G3 + the tie beat)** — four executed lines, every one ≤ 42 characters, comment tags carrying
   the pseudocode API words (`# push`, `# pop`); stdout `(1, 'urgent')` in mint. Above it the tie: two
   chips `(1, 'low')` / `(1, 'urgent')` pulse 0.2s apart (P7, one pulse per beat — they do not light
   amber), `low` leaves, `urgent` holds, `TIES BY SPELLING` counts it, annotation `l before u`.
5. **F5 (G5)** — `fair or first?` (13 chars, 6.4cqw, 176px box), `COMMENT` plate in solid `--say`,
   badge `PROGRAMMING BASICS · BASICS III · 32 · INTERMEDIATE`, and behind them the two chips
   `(1, a)` / `(1, b)` with a `?` over them and **no departure arrow** — pb-11's rule: showing which
   one leaves answers the debate on screen.

## Motion budget

Primitives used, all carrying meaning: P1 `say-sweep` (F1 `by arrival`, F4 underline under
`SPELLING`), P2 `drop-in` (F2 nodes parent-first, F3 tuple chips), P3 `type-on` (F4 chamber, mask +
caret), P7 `pulse-set` (F4 tie chips), P8 `arrow-run` (F2 rail, F2 elbows), P9 `count-tick` (F4's tag
arrival), plus each frame's entrance wipe, one ambient breath and exit push. **No SFX, no BGM, no
network assets** (bible § 7); the SFX budget for this tranche is unspent.

## Media

No `media-use` call was made and none is needed: the only assets are the four shipped woff2 faces
copied into `assets/fonts/` (the v2 set from pb-22, with both OFL files) and five Kokoro wavs.
`.media/manifest.jsonl` is deliberately absent — nothing was fetched.

## Voice

Kokoro `af_heart` @ **0.93** through `studio voice --speed 0.93`. ElevenLabs is unusable here
(`.agents/design.md` `voice_id` empty, free-tier keys return HTTP 402) and was **not** substituted;
HeyGen needs interactive auth and bills credits, and was not used. `studio voice --dry` must print
`speed=0.93` — the house lookup misses (`.agents/design.md` nests `voice.voices.en`), so the flag is
always passed.

## Gate state / blockers

- G15 is unbuilt anywhere in the workspace (§ 0.1, no carrier). If the heap and the tuple lane cannot
  share F3's 774px content box, **report it, do not drop either** — that is the finding the dispatcher
  needs, because 29's grid decision is what four parts are copying.
- `verify`/`check` green means "not yet looked at" (§ 11). Every emphasis moment is snapshot-read.

## Deviations from the piece file (all recorded, none silent)

1. **Cover string.** The piece file's cover column reads `urgent goes first`; F1's own spec draws the
   hook cut (`an ER` / `doesn't treat` / `by arrival`) with the single amber plate on `by arrival`.
   Drawing both would put two `--say` plates on the cover frame, which § 1 of `frame-day3.md` forbids,
   and § 8 defines cover text as "the hook cut to ≤6 words" — which is exactly what F1 already is.
   F1 follows the frame spec; `urgent goes first` stays as the post's title-card text (writing layer,
   untouched by this worker).
2. **F4 chamber line split.** The piece file's line 3 (`heappush(q, (5, 'low')); heappush(q,
   (1, 'urgent'))`) is 51 characters = ~958px at the 2.9cqw code size, wider than G3's 936px chamber.
   The piece file's own authorised fix ("drop `q = []` onto line 1's tail") is applied — line 1 becomes
   `from heapq import heappush, heappop; q = []` (42 chars) — and the freed line slot splits the two
   pushes onto lines 2 and 3, each carrying the mandated `# push` API-word comment. Four code lines
   (G3's cap), longest 42 chars, type never shrunk below 2.9cqw, every line executed per bible § 4.
3. **`PATH 2` tag not drawn.** § 6's G15 motion paragraph mentions a `PATH 2` tag on the pop beat; the
   piece file's F3 count column locks only `FIRST 'urgent'` ("the second tag belongs to F4's tie, so
   one walk never carries two counts", bible § 4b). Bible § 4b wins; the second count appears on F4 as
   `TIES BY SPELLING`.
4. **Counted-tag tracking 0.06em, not 0.16em.** § 2's ramp says 0.16em, but that value plus
   `FIRST 'urgent'` (14 chars) measures ~310px and cannot sit in the mandated 300px box at pb-21's
   measured tag widths (§ 6's G10 clause "pb-21's exact two-tag positions and widths"). pb-21's
   shipped `.f3-tag` (clone source named in § 6) uses 0.06em and fits at 269px. Colour still follows
   § 2's Day 3 value (`--ink`), not pb-21's `--muted`.
5. **Tab label size.** G11's root tab is mono 2.5cqw; `PRIORITY` (8 chars) needs ~130px and the node is
   148 wide, so `.g15-tab` is authored at 2.2cqw with 10px padding — 134px for `PRIORITY`, 66px for
   `ROOT`. Geometry (h 38, `--panel-2`, 3px `--line` under-edge, radius 18/18/0/0, on the node's top
   edge) is unchanged from § 6's G11 block.
6. **F2 root/slot tabs read `PRIORITY` / `QUEUE`, F3's read `ROOT` / `SERVED`.** F2 is the naming beat
   the piece file specifies ("`PRIORITY` lands on the root's name tab, `QUEUE` on the slot's tab");
   F3 is the running beat and takes G15's canonical labels. Same tab geometry on both frames — only
   the word changes, so no geometry variant is introduced.
7. **Served chip keeps its own tuple box and turns mint** rather than being replaced by a separate
   mint label inside the 200x84 slot. `(1, 'urgent')` is 244px wide and the slot's interior is 194px,
   so the landed chip overhangs the slot by 40px left and right and 18px below. One element, one
   landing, `--value` mint for what printed (§ 1 colour law). Snapshot-verified that it lands in the
   slot and nowhere else.
8. **`ARRIVAL` header + `1st`/`2nd` ordinal tabs** were added beside the tuple lane to say what the
   piece file asks the frame to say ("the frame says so with a tiny ARRIVAL tab stack"). They are
   `--muted` chrome, `data-layout-ignore`, and carry no count — the part's only counted tags are
   `FIRST 'urgent'` and `TIES BY SPELLING`.

## Post copy (writing layer, recorded here so the film and the caption agree)

Feed caption, X, LinkedIn and the pinned comment are in the piece file and are not re-argued here. The
pinned comment carries what the frames may not: the `(priority, counter, item)` fix, the
`(1, {})` vs `(1, {'x': 1})` `TypeError`, and the negate-to-get-a-max-heap trick.
