---
id: pb-24
order: 3
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Queues (FIFO)
slug: queues
project: videos/prog-basics-24-queues/
difficulty: B
mechanic: Tag
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 82
target_length: ~31s               # 82 / 3.24 = 25.3s speech + 6.0s air; at 2.7 w/s ~36.3s
ceiling: 54s
grammar: G1 G9-line G9-line G3 G5
marks: G9 line (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-22/03-walk-prepend.html (node row, ring, connectors)
---

# P24 · Queues (FIFO) · [B] · Tag · code card

**Message:** a line, not a pile — you join at the back and leave from the front, so the one who waited
longest is served next, and the boxes never shift.

The pair part to 23. Where a stack has one door, a queue has two, and the whole fairness claim lives in
that geometry. Day 3's first **negative space** beat: the nodes do not move, the marker does.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 12 — `Every printer, call center, and message app runs on one of these.` | 3.7s | 4.4s | Verbatim. `one of these` on the amber sweep; the triad read flat. |
| F2 | 24 — `A queue is first in, first out, like a line at a coffee shop. You enqueue at the back and dequeue from the front.` | 7.4s | 8.9s | The gloss is the user's own; `back` and `front` each land on their chip. |
| F3 | 25 — `It keeps things fair and in order. That is the right shape for tasks waiting their turn. Enqueue A, enqueue B, then dequeue gives A.` | 7.7s | 9.3s | Two re-cut beats (see below) then the example. Slow on `dequeue gives A`: the leftmost node leaves and the others hold. |
| F4 | 13 — `In Python, use a deque. Append to the right. Popleft takes the front.` | 4.0s | 4.8s | Three short beats. Say "deque" as *deck* — the frame's chip reads `DEQUE`, so nobody has to spell it. |
| F5 | 8 — `Tag a friend who always skips the line.` | 2.5s | 3.0s | Verbatim CTA. |

**Total 82 spoken words → ~31.3s** (air ≈ 6.0s). Report if the measurement lands it under 30s.

**Spoken code:** `queue.append('A')` → "append A". `queue.popleft()` → "popleft" (one word, the method
name — do not say "pop left", it is one identifier).

**Re-cut applied** (`CORRECTIONS-day3.md` § A, re-cut 1): the user's "It keeps things fair and in order,
which is perfect for tasks waiting their turn." (15 words, trailing relative clause) split into
"…fair and in order." + "That is the right shape for tasks waiting their turn." Hook and CTA verbatim.

## On-screen text and code treatment

Geometry is `frame-day3.md` § 6 / **G9 `line`**. Nodes are G7's walk size — **176×108, pitch 200,
lefts 72/272/472/672, row top 540** — do not resize them.

**F1 (G1).** Type alone: `every printer` / `call center` / `message app` as three stacked groups, then
`runs on one of these` with `one of these` on the solid `--say` plate. **No line drawn on F1.**
Kicker `PROGRAMMING BASICS · BASICS III · 24`.
**F2 (G9 line, built).** Four nodes arrive left-to-right on P2 (one per clause), each 176×108 with a
mono 700 `--value` letter `A B C D` at 3.6cqw and 24px `.g7-bar` connectors between them. Then the two
chips: `FRONT` under node 0 (left 72, y 660, width 176, centred) and `BACK` under node 3 (left 672).
Then the **service window**: a 3px `--line` vertical at left 66 running y 508→688 with an `OUT` chip at
left 96/y 696, and the intake arrow at the right end (a 60px `.g7-bar` at left 848/y 593 with an
11×11 `.g7-chev` pointing **left**, into the row) plus an `IN` chip at left 900/y 696. The window
straddles the row's left edge and covers no letter (the straddle law).
**F3 (G9 line, served — the negative-space beat).** Two beats, one frame:
```
dequeue : node A travels x: -220 / opacity 0 (0.46s power3.out) **through the window** — it leaves by
          the front. Nodes B, C and D DO NOT MOVE. Nothing slides, nothing re-flows.
front   : the FRONT chip then travels right one pitch (x 72 -> 272, 0.4s power3.out) to sit under B.
          The marker moves; the boxes hold. This is pb-22's discipline and it is the whole difference
          between 24 and 21's shift.
enqueue : one new node E drops in at the back (P2) and ONLY the last connector redraws (P8). Counted
          tags: SERVED 1 (upper lane y 288, left 270 w 300) / MOVED 0 (left 590 w 220) — pb-21's
          authored tag positions, and MOVED 0 is deliberately the same tag part 22 earned.
```
**F4 (G3).** `main.py`, chip `PYTHON`, three lines + terminal (max 4 + 1):
```
from collections import deque
queue = deque(['A', 'B'])
print(queue.popleft())   # A
```
stdout `A` in mint. Executed: `deque(); append('A'); append('B'); popleft()` → **A**. Single quotes
always. `from collections import deque` is line 1 and counts against the 4-line cap.
**No `enqueue(A)` line in the chamber** — that is pseudocode (labelling law, `frame-day3.md` § 7.3); the
words `enqueue`/`dequeue` live on the plate labels `IN`/`OUT` and in the voice.
**F5 (G5).** Headline `who skips the line?` at 6.4cqw in a 176px box (18 chars ✓), mechanic verb plate
`TAG THEM` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 24 · BEGINNER`. Below, the four
nodes dimmed via § 1's background/border rule with the `FRONT`/`BACK` chips still legible and an
`A` node half-gone through the window — the *image* of the friend who skips, not an answer to anything.

## Cover / title card

`first in, first out` (4 words, the user's own gloss) + badge `PROGRAMMING BASICS · BASICS III · 24` +
`BEGINNER`. Amber plate on `first out`. No line on the cover.

## Post copy

**Feed caption:**

    Every printer, call center, and message app runs on one of these.
    A queue is first in, first out — a line at a coffee shop. You enqueue at the back and dequeue from
    the front, so nothing that arrived first gets passed. The served node leaves and the others hold.
    Tag a friend who always skips the line.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#queue`
**X:** `a stack has one door. a queue has two: you join at the back and leave from the front. dequeue
the first node and the rest do not move - SERVED 1, MOVED 0. in python that is collections.deque and
popleft, not list.pop (which takes the wrong end). tag the friend who skips the line #python`
**LinkedIn:** a queue is the data structure that makes a promise — first in, first out — and the
implementation has to keep it. `list.pop(0)` breaks the promise silently: it is correct and O(n), and
`collections.deque` is correct and constant at both ends. `#python` `#programming` `#datastructures`

**Pinned comment:** `The one-line trap this part exists to prevent: in Python a plain list pops the WRONG end. ['A','B'].pop() gives back 'B', not 'A' - and [0] then del shifts everything. A real queue needs deque: q = deque(['A','B']); q.popleft() gives 'A' and q.append('C') joins at the back, both constant time. Two edges people hit: popping an empty deque raises IndexError: pop from an empty deque, and a plain list has no popleft at all (AttributeError), so the mistake is loud rather than silent - which is the good kind. Part 23 is the pile with one door; part 21 is the row where inserting does shift everything.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): `deque(); append('A'); append('B'); popleft()` →
**A**, `['B']` left. **`['A','B'].pop()` → `B`** — a list serves the back, which is the reason the chamber
uses `deque` and the reason the pinned comment leads with it. `deque().popleft()` on empty →
`IndexError: pop from an empty deque`; `[].popleft()` → `AttributeError: 'list' object has no attribute
'popleft'`. The user's `enqueue(A), enqueue(B), dequeue() → A` is confirmed as a *behaviour*, mapped to
`append`/`popleft` in the chamber under the labelling law.

**Screen-text constraint** (`CORRECTIONS-day3.md` § B): the `list.pop()` counter-example is
pinned-comment only. On screen it reads as the part arguing with itself.

## Gate state

**G9 `line` is unbuilt until this part.** Snapshot-read first: (1) the `MOVED 0` claim — three consecutive
samples inside the dequeue beat must show nodes B/C/D at identical x, or the part has accidentally drawn
part 21's shift; (2) the service window bar at left 66 sitting **outside** node 0's border without
covering the `A`; (3) the `FRONT` chip's 200px travel landing exactly on node 1's left. If the intake
arrow at the right end crowds the 1008 edge, report it rather than shrinking the gap — the gap is the
geometry that makes 24 readable.
