---
format: 1080x1920
duration: 40s
message: "serve the most urgent, not the oldest — which is part 29's heap with a job, and when two items share a priority a plain tuple heap breaks the tie by spelling, not by turn"
arc: a claim about a place → the heap gets a job → served out of order → the tie → the debate
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 32 of 33
identity: bench-v3.0
---

# STORYBOARD — prog-basics-32-priority-queues (prog-basics, part 32 of 33)

English master, portrait 1080x1920, `[M]` part, band 34-42s, ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/32-priority-queues.md`. Shape: `series-bible-day3.md` § 0/§ 2/§ 4/§ 4b/
§ 4c/§ 4d/§ 5. Grammar: `frame-day3.md` v3.0 § 6 — G1 hook, **G15 service lane ×2 (F2, F3)**, G3 code
chamber, G5 CTA. Motion primitives: § 9.

> **Durations are measured, then given air.** Voice: Kokoro `af_heart` through `studio voice --speed
> 0.93`; the frame durations below are the measured VO plus authored air (~1.0s per frame, ~2.0s on F5)
> so every 0.5s crossfade sits inside silence and no sentence spans a cut. Word onsets come from
> `studio cues` and every emphasis time in the frame files cites one of them. Re-run
> `studio assemble <dir> --captions` after any change to these numbers — `index.html` and the caption
> lane are generated from this column.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code, tuples and chrome; colour as a lesson — amber
`#FFD166` = the word the voice is on now (never two at once), mint `#5AD6A0` = a value or what printed,
coral = an error an interpreter actually raised. **Part 32 raises nothing on screen, so this film ships
with zero coral**: the `dict`-tie `TypeError` and the missing-key errors are reply-thread material
(`frame-day3.md` § 7.1, bible § 4c). `--err` is not declared in any frame file here.

Every code-bearing frame carries the ligature kill-list (`font-variant-ligatures: none` +
`font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`) — JetBrains Mono otherwise rewrites `->` and `<=`,
and this part prints tuples with apostrophes, where a smart-looking quote is a defect in a code frame.

## The mark this part carries (G15 `service lane`, first build)

`frame-day3.md` § 6 G15 is a specification, not a screenshot, and it is the tranche's only **composite**
mark — 29's tree plus 24's service idea plus a tuple chip lane — so it inherits both of their risks.
The rules this frame set follows, in one place so the other ten workers do not re-derive them:

- **The heap is § 6's G11 geometry, drawn from the spec, not from pb-29's files** (29 is being written
  concurrently). Node 148x96, `--panel` `#1F242C`, 3px `--line` `rgba(255,255,255,0.16)`, radius 22,
  G2 shadow. Root centred at 540 → left 466 on y 292; L1 nodes at lefts 232 / 700 on y 452 (n=2 column
  law). Values mono 700 4.2cqw `--value` (they are tuple numbers, so code face). Root tab `ROOT`, h 38.
- **Elbows are three axis-aligned 3px `--line` divs per edge, no rotation, no SVG, no diagonals**:
  down-stub at parent centre-x (538.5) from y 388 to 420, run at `runY` 420 (left 306 w 234 / left 540
  w 234), up-stub at child centre-x (304.5 / 772.5) from y 420 to 452. Overlapping runs share a bar.
- **Two lanes share one 774px box, and that is the composite's one real geometry risk.** The heap owns
  y 292→548 on the right two-thirds; the tuple chip lane owns left 72, y 640 and 712 (280x64 each);
  the `SMALLER = EARLIER` convention chip owns left 500 y 656; the `SERVED` slot owns left 736 y 300.
  Nothing in the chip lane reaches x 500 except the convention chip, and nothing above y 560 sits under
  the L1 nodes at lefts 232 / 700. Proved by snapshot, not by arithmetic.
- **Serving is one element moving.** On "pop gives urgent" the `(1, 'urgent')` chip travels right and up
  into the SERVED slot and turns `--value` mint; `(5, 'low')` holds exactly where it is and the tree
  carries no tween on that beat. If both move, the film has drawn a queue and contradicted its own hook.
- **No array row anywhere.** 32 then 29 is the one accepted adjacency in the publish order (bible § 5);
  29's hero is the array↔tree binding, so 32's hero must read differently — service lane plus tuple
  chips, no `G2b` row, no index strip, no `NOT SORTED` chip.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Content enters `x: ±140 → 0` at 0.42s `power3.out` and
leaves `y: 0 → -60` in the last 0.3s; wipe direction alternates: F1 left, F2 right, F3 up, F4 left, F5
down. Every element that moves is `inline-block`/block/flex and carries a class as well as an id. No
`text` tween, no `letterSpacing` tween, no width tween on a flex child, no wall clock, no randomness, no
fetch. Every timed visual is `class="clip"` with `data-start` plus a duration.

---

## Frame 1 — The hook (G1)

- scene: three display lines on graphite, nothing illustrated, no heap, no chips — G1 is type over the board (piece file: "No heap"). `an ER` / `doesn't treat` / `by arrival` — the hook cut to six words at 9.2cqw (every group ≤14 characters, so § 2's 9-11.5cqw band applies), the last group on the solid amber say-plate (P1 sweep, then the plate becomes the token's own background and the type flips to `--say-ink` in the same instant, so no sampled frame sits between plate and ink). Kicker `PROGRAMMING BASICS · BASICS III · 32`. No second amber object on this frame and no annotation line: `not by arrival` is the one shape the series has already spent, so it appears nowhere in the film.
- duration: 4.2s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: a place that serves by urgency
- voiceover: "An ER doesn't treat patients in the order they arrive."
- sfx: none

## Frame 2 — The heap gets a job (G15, first draw)

- scene: 29's two-level heap drops in parent-first (P2, one node per clause: root, then the two children), each elbow's three `--line` bars drawing stub → run → stub (P8, 0.14s each). Values 1 / 3 / 2 in mono 700 `--value` — 29's executed `heappush` order, top two levels. A 3px `--line` rail then draws from the root's right edge across to the `SERVED` slot and a chevron lands at the slot's border (P8). `PRIORITY` arrives on the root's tab and `QUEUE` on the slot's tab: the two halves of the term get the two halves of the drawing. A `--say` ring (168x116 at node.left − 10) marks the root on "the highest priority first" and retires before the rail beat. The `HEAP` chip (`--panel-2`, mono 700 `--muted`, `data-layout-ignore`) arrives under the tree on "built on a heap" — the literal callback to part 29's own word. No tuple chips yet: the items arrive on F3.
- duration: 11s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/02-service-lane.html
- type: mechanism
- beat: a heap, plus a serving order
- voiceover: "A priority queue serves the highest priority first. The oldest item waits its turn. It's usually built on a heap. This is that heap, with a serving order."
- sfx: none

## Frame 3 — Served out of order (G15, the example)

- scene: the same heap, same geometry, tabs back to `ROOT` / `SERVED`. Beat 1, on "Push low with five" — the tuple chip `(5, 'low')` drops into left 72 / y 640 (P2 bounce + a `scaleY` settle); beat 2, on "Push urgent with one" — `(1, 'urgent')` drops into left 72 / y 712. Both 280x64, `--panel-2`, 3px `--line`, radius 12, JetBrains Mono 700 2.9cqw `--ink`, single quotes, ligatures off. An `ARRIVAL` header with `1st` / `2nd` tabs sits beside the lane to say out loud that the arrival order is top-to-bottom and is **not** numeric order. Beat 3, on "Pop gives urgent" — `(1, 'urgent')` travels right and up into the SERVED slot (0.5s power3.out) and turns `--value` mint on landing, while `(5, 'low')` holds exactly where it is and the tree carries no tween. The counted tag `FIRST 'urgent'` arrives in the upper lane (left 270, w 300, y 288, h 66) — and no second number on this walk: the second count belongs to F4's tie. Beat 4, on "the smallest number at the top" — a `--say` ring marks the root node. Beat 5, on "A heap puts..." — the mandatory convention chip `SMALLER = EARLIER` (`--muted`, `data-layout-ignore`) lands beside the tuple lane, because a learner coming from a UI where 1 means LOW will otherwise build the inverse. Then the chip row `SCHEDULERS` / `SHORTEST PATH` / `NOTIFICATIONS` arrives in the lower lane, read flat — chips, never chambers: nothing about a scheduler or Dijkstra was executed here, and `SHORTEST PATH` is the gloss the name cannot carry in the sentence.
- duration: 13.1s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-served-out-of-order.html
- type: mechanism
- beat: who leaves first, and who waits
- voiceover: "Push low with five. Push urgent with one. Pop gives urgent. A heap puts the smallest number at the top. Schedulers, Dijkstra's algorithm, and notification systems rely on it."
- sfx: none

## Frame 4 — The tie (G3, plus the tie beat)

- scene: above the chamber, two tuple chips `(1, 'low')` and `(1, 'urgent')` arrive 0.2s apart (P7 `pulse-set` on each — they pulse, they do not light amber, so the beat keeps exactly one amber arrival). Then `low` **leaves** (`x: -220, opacity: 0`) and `urgent` holds its position; a one-clause annotation under them reads `l before u` (Space Grotesk 400, `--ink` at 78%). The counted tag `TIES BY SPELLING` sits in the upper lane (y 288, h 66) and gets the frame's one amber arrival: a 3px `--say` underline sweeping under `SPELLING` on "by spelling". Below, the G3 chamber `main.py` with the `PYTHON` chip, 936px wide, four code lines + a 72px terminal strip at y 900: `from heapq import heappush, heappop; q = []` / `heappush(q, (5, 'low'))    # push` / `heappush(q, (1, 'urgent')) # push` / `print(heappop(q))          # pop`, each type-on'd under a caret (P3), every line executed on this machine (bible § 4), the mono `--muted` comment tags carrying the pseudocode API words the voice speaks. Longest line 42 chars, so nothing is shrunk below the 2.9cqw code size. stdout `(1, 'urgent')` in mint on `--panel-2`. No coral anywhere: the frame raises nothing.
- duration: 6.6s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-tie-code.html
- type: example
- beat: not fair among equals
- voiceover: "Two items share priority one. The tie breaks by spelling. Low leaves before urgent."
- sfx: none

## Frame 5 — The debate (G5 CTA)

- scene: headline `fair or first?` (13 chars) at 6.4cqw in a 176px box, a `--line` rule under it, and behind/below it the tie drawn as a question: two chips `(1, a)` and `(1, b)` side by side in quiet hairlines with a large `?` over them. **No departure arrow and no chip leaves** — showing which one leaves answers the debate on screen (pb-11's rule), and the CTA is the argument. An amber `--say` ring travels `(1, a)` → `(1, b)` → `(1, a)` and rests on **neither**; on a ring beat the keyword keeps `--ink`, so the `?` is ink, not amber (`frame-day3.md` § 13). The mechanic verb plate `COMMENT` arrives in solid `--say` with a `--say-ink` underline on "Comment your take", and the badge line `PROGRAMMING BASICS · BASICS III · 32 · INTERMEDIATE` closes it. Kicker carries the short form `PROGRAMMING BASICS · BASICS III · 32 · THE ASK`. This frame holds alone under the platform's chrome: everything above y 1004, no exit push.
- duration: 5.1s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Is priority-first always fair? Comment your take."
- sfx: none
