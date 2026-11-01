---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 24 of 33
title: prog-basics-24-queues
message: "a line, not a pile — you join at the back and leave from the front, so the one who waited longest is served next, and the boxes never shift"
hook_source: user (pre-decided; verbatim, per bible-day3 § 0)
cta_mechanic: Tag ("Tag a friend who always skips the line.") — verbatim
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~31s projected (82 spoken words; band `[B]` 29-34s)
ceiling: 54s
narration: yes
audience: first-week programming learners (prog-basics lane, its own identity)
identity: bench v3.0 (frame.md = frame-day3.md; Day 3 restates Day 2's numbers, deliberately NOT the workspace brand spec)
carrier: false (Day 3 has no carrier wave — bible-day3 § 0.1)
new_mark: G9 `line` (fully derived in frame-day3.md § 6; this part is its first and only build)
clone_source: videos/prog-basics-22-linked-lists/compositions/frames/03-walk-prepend.html (G7 node row, .g7-bar/.g7-chev, P2 drop-in, MOVED 0) + .../04-chain-code.html (G3 chamber) + .../05-cta.html (G5) + videos/prog-basics-21-arrays/.../03-shift.html (.f3-tag lane)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 82
grammar: G1 G9-line G9-line G3 G5
counted_pair: SERVED 1 / MOVED 0 (locked, bible-day3 § 4b)
coral: zero (bible-day3 § 4c — all eleven Day 3 parts ship with zero coral)
pin: hyperframes@0.8.226
---

## Intent

English master of part 24 of `prog-basics` (Day 3 / STRUCTURES, topic 24 "What is a queue? (FIFO)").
Portrait 1080x1920, band `[B]` 29-34s, ceiling 54s. Faceless explainer: no URL, no footage, every
visual invented on the campaign's own bench identity. Copy source of record:
`writing/prog-basics/pieces/24-queues.md`. Grammar `frame-day3.md` § 5-§ 6: G1 hook, **G9 `line` ×2**
(this part is the first build of Day 3's queue mark), G3 code chamber, G5 CTA.

The pair part to 23. A stack has one door, a queue has two, and the whole fairness claim lives in that
geometry. Day 3's first **negative space** beat: the nodes do not move, the marker does — `SERVED 1`
against `MOVED 0`, and `MOVED 0` is deliberately the same tag part 22 earned.

## Locked decisions (inherited, not re-argued)

- Hook, F2/F3 explain lines, F4 example and the CTA mechanic are the user's verbatim words, already
  re-cut in `CORRECTIONS-day3.md` § A (F3's trailing relative clause split into two beats). Nothing in
  this file re-cuts them.
- Nodes are G7 walk geometry, **176×108, pitch 200, lefts 72/272/472/672, row top 540** — never resized
  (piece § "On-screen text"). Connectors are 24px CSS `.g7-bar` divs at the row centre (y 593), never
  SVG. Window bar 3px `--line` at left 66 spanning y 508→688 (it straddles node 0's edge and covers no
  letter — the straddle law). `FRONT`/`BACK` chips mono `--muted` 1.85cqw at y 660, 176 wide, centred
  under nodes 0 and 3. Intake = one 60px `.g7-bar` at left 848/y 593 with an 11×11 `.g7-chev` pointing
  **left** into the row + `IN` chip 60×44 at left 900/y 696. `OUT` chip 72×44 at left 96/y 696.
  Counted lane = `.f3-tag` at **y 892** (`SERVED 1` left 270 w 300 / `MOVED 0` left 590 w 220, pb-21's
  authored x/width).
- Colour: `--say` = the word the voice is on (one arrival per beat), `--value` = a value/what printed,
  `--err` **unused**. Every countable line is `--line` (0.16), never `--line-faint`. Dimming is done on
  background/border, never container opacity; digits stay at full colour.
- Notation: no `O(`, no `log n`, no bare `n` on any frame. The counted walk is the notation.
- Forms law (bible § 4d): the chamber shows only Python executed on this machine (`deque()` /
  `.append('A')` / `.popleft()` → `A`), single quotes, ligatures off; the diagram carries the API words
  as plate labels; `enqueue`/`dequeue` reach the code only as mono `--muted` comment tags.
- The `['A','B'].pop()` → `'B'` wrong-end counter-example is **pinned-comment only** (piece § Accuracy,
  `CORRECTIONS-day3.md` § B). It appears on no frame, in no caption, in no on-screen string.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a gloss the moment a term appears. `queue` is glossed
  by the voice's own line ("first in, first out, like a line at a coffee shop") and by the row itself;
  `front`/`back` are the two chips under the two end nodes; `deque` is the chip on F4 so nobody has to
  spell it; `node` is the box the letter lives in. "traverse"/"iterate" appear nowhere; no "not X, it's
  Y"; no AI tells; no em-dash on screen.
- **Motion.** F2 = the line **built** (four nodes arrive at the back one per clause, P2 drop-in, one
  connector redraws behind each arrival, then the window + the two end chips). F3 = the line **served**
  (the served node leaves *through the window* while B, C, D carry no tween at all; then the `FRONT`
  chip travels one 200px pitch to sit under B — the marker moves, the boxes hold; `SERVED 1`/`MOVED 0`
  on the lower lane). F4 = P3 type-on chamber with two say-sweeps (`append`, `popleft`) and the executed
  stdout. F5 = G5 CTA over the dimmed echo of the line with `A` still half-gone through the window.
  Primitives: P1 `say-sweep`, P2 `drop-in`, P3 `type-on`, P7 `pulse-set`, P8 `arrow-run`, P9
  `count-tick`, plus each frame's entrance wipe, one ambient breath and exit push.

## Deviations from the piece file (all recorded, none silent)

1. **The `enqueue E` beat on F3 is not drawn — reported as the G9 `line` finding, not quietly varied.**
   `frame-day3.md` § 6 gives the row as four 176px nodes at pitch 200 from left 72 (72→848) **plus** the
   intake arrow at 848→908 and the `IN` chip at 900→960 ("span 72 → 960, inside the 1008 right edge").
   A fifth node at pitch 200 would occupy **872→1048**: 40px past the 1008 content edge (into the
   platform's right-edge chrome zone on TikTok/Shorts) and straight on top of the intake bar and `IN`
   chip that the same derivation puts at 848→960. The mark's enqueue contract *is* drawn — on **F2**,
   where four nodes arrive at the back one per clause with one connector redrawn each time (P2+P8) — so
   F3 keeps the dequeue/travel/count beats and adds no node. See the run report; this is the finding the
   dispatcher needs, not a taste call.
2. **F3's beat order follows the voice, not the piece's block order.** The piece lists
   `dequeue → front → enqueue`; the narration is "Enqueue A, enqueue B, then dequeue gives A", so the
   two enqueue words land on nodes A and B (a `--say` border pulse on each as it is named, plus the
   intake mouth redrawing) and the departure lands on "dequeue gives A". Same precedent as pb-22's F3
   beat-order deviation.
3. **F4's chamber lines are `deque()` / `append('A')` / `print(popleft())`**, i.e. the ledger's executed
   form (bible § 4, row 24) per `WAVE3-PACKET.md` § 5 and § 4a's comment-tag law, instead of the piece
   file's `queue = deque(['A', 'B'])`. Same behaviour, same `A` output, and the API words `enqueue` /
   `dequeue` now ride the Python lines as mono `--muted` comment tags. The `['B']` leftover is not shown
   (printing a deque's repr is not in the ledger, and § 4d forbids invented output).
4. **F1's cover line.** `frame-day3.md` § 8 makes F1 the cover and F1 is the hook; the piece's "Cover /
   title card" text `first in, first out` is therefore not F1's type (F1 is the hook's four groups per
   the piece's own F1 spec). `first in, first out` is spoken on F2 and the piece's cover string stays
   available for a future static thumbnail. No line on F1, as both the piece and § 8 require.
5. **F4 carries two annotation lines** (`append joins at the back` / `popleft serves the front`) in the
   660→880 air between chamber and terminal strip — the Day 3 grid puts a chamber part's terminal at
   y 900, which leaves a 250px hole under a 336px chamber. One clause each, `--ink` at 78%, no colour
   role, nothing counted.
6. **Counted lane at y 892, not the piece's "upper lane y 288".** `frame-day3.md` § 4's Day 3 grid
   assigns lane 892 to parts 24/27/28/29/31/33 and reserves 288 for 23/25/26/30/32, and § 6's G9 `line`
   block says `counted: .f3-tag lane y 892`. Day 3's frame spec outranks the piece file; pb-21's x
   positions and widths are kept exactly.
7. **The voice flag is passed** (`--speed 0.93`), because the house lookup misses
   (`voice.voices.en` nesting, `.agents/design.md`) and an unflagged run speaks at 0.74. WAVE3-PACKET § 1
   makes the flag mandatory on this tranche; `voice_speed:` in this file is documentation only.

## Assets

- Fonts: Space Grotesk 400/700 + JetBrains Mono 400/700 + both OFL notices, copied from
  `videos/prog-basics-22-linked-lists/assets/fonts/` (the v2 set). Every `@font-face` names a file that
  exists on disk. No font fetch, no network asset, no BGM, no SFX; `.media/manifest.jsonl` untouched.
- Voice: Kokoro `af_heart` @ 0.93, offline and free, provider pinned from this file. No provider
  substituted (ElevenLabs unusable here: empty `voice_id`, HTTP 402; HeyGen needs interactive auth).
- Captions: Day 2's skin reused unchanged —
  `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`. Band 1024.
- `design.md` is the workspace brand copy per the packet; `frame.md` (= `frame-day3.md`) overrides it
  for every video decision in this campaign.

## Gate state

Built to the **pre-render gate only**: voice @0.93 → cues → 5 frames → assemble --captions → verify →
check → snapshots read by eye. **No render, no MP4, no publish, no schedule, no `preview --background`,
no Arabic (23-33's Arabic lines are queued, not authorized).** Nothing outside this directory written.
