---
id: pb-29
order: 10
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Heaps
slug: heaps
project: videos/prog-basics-29-heaps/
difficulty: M
mechanic: Save
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 101
target_length: ~37s             # 101 / 3.24 = 31.2s speech + 6.0s air; at 2.7 w/s ~43.4s (past the [M] top — report, do not cut)
ceiling: 54s
grammar: G1 G11-heap G11-heap G3 G5
marks: G11-heap (new, inherits 27's grid)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed-with-constraint
clone_source: 27's G11 frames (the grid) + pb-21/02-row.html (the array lane)
---

# P29 · Heaps · [M] · Save · code card

**Message:** a tree with one rule — every parent smaller than its children — which puts the smallest
thing at the top where you can grab it, stores itself in a plain row, and is emphatically **not sorted**.

The hardest honesty problem in the tranche. A heap drawn as a tidy row teaches the opposite of what a
heap is, so the frame has to show a row that is visibly *not* in order while the root still holds the
answer. Day 3's only `log n` utterance besides 28's.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 10 — `How does a computer always know who's next in line?` | 3.1s | 3.7s | Verbatim. Land `always know` — the claim the root is going to earn. |
| F2 | 37 — `A heap is a tree where every parent is smaller than its children. That version is a min-heap. Flip every comparison and it is a max-heap. A parent is the box above; a child sits below it.` | 11.4s | 13.7s | The user's 17-word double-parenthetical, re-cut (re-cut 5) — and the only place Day 3 **adds** a sentence. The four beats must not be rushed: if F2 measures past ~12s, that is a frame-shape report, not a licence to cut words. |
| F3 | 29 — `The smallest item sits at the top, so you can grab it instantly. Push one, three, two, seven, five. The root is one, and the row is not sorted.` | 8.9s | 10.7s | `grab it instantly` = the single grab motion, said fast. The last sentence is the part's trap: land `not sorted` on the row, slowly. |
| F4 | 20 — `Insert and remove take log n. The longest path down is two steps. One swap did the rest.` | 6.2s | 7.4s | The **one** allowed `log n`, in the user's own words. Then the counted walk beside it — the frame shows `PATH 2`, never the notation. |
| F5 | 5 — `Save this for algorithm interviews.` | 1.5s | 1.9s | Verbatim CTA, no question attached. Give F5 its full air; it loops under the platform's chrome. |

**Total 101 spoken words → ~37.1s** — mid `[M]` band. At the slow number-heavy rate this reaches
~43s, **past the 42s top of the band and still 11s under the ceiling**: take the measurement, report the
number, and do not cut narration to sit pretty inside the band (bible § 0.3). The permitted lever is the
frame shape (merge F3's two counted beats), never the words.

**Spoken code:** `heapq.heappush(h, 3)` → "push three". `h` prints as `[1, 3, 2, 7, 5]` → "one, three,
two, seven, five" — read it as a row of numbers, not as a list, so the odd order is audible.
`log n` → "log n" (the only time in the tranche).

**Re-cuts applied** (`CORRECTIONS-day3.md` § A, re-cut 5): the 17-word sentence with two mid-sentence
parentheticals closed first, then `min-heap` as its own 5-word beat, plus **one authored bridge sentence**
for `max-heap` — the only added sentence in Day 3, flagged as touching a writer's sentence. 29's third
explain sentence (13 words) and the `log n` line (6) pass untouched.

## On-screen text and code treatment

**G11-heap is 27's grid plus its array.** Cite `frame-day3.md` § 6 rather than restating it. Short form:
node 148×96, levels y 292 / 452 (root 1 at left 466; children 3 and 2 at 232 / 700; grandchildren 7 and 5
under the 3 at 154 / 466, y 612 — the executed layout of `[1, 3, 2, 7, 5]`), elbows per `frame-day3.md`,
**plus the array lane**: five `.pb-chamber` cells 142×152, lefts 74/232/390/548/706, top 500, values in
`--value` mint at 5.6cqw, index strip at y 716 (mono 2.2cqw, `--muted`, `data-layout-ignore`) reading
`0 1 2 3 4`.

**F1 (G1).** `who's next in line?` then `a computer always knows`, amber plate on `always knows`. No
tree.

**F2 (G11-heap, rule first, array second).** Nodes drop in parent-first; the single rule is drawn, not
stated: a 3px `--line` bracket pairs each parent with its children and a mono chip between them reads
`parent ≤ child` — **the ASCII `<=`, ligatures off**, so a learner sees the characters they would type.
⚠ If `<=` renders as a single `≤` glyph on any snapshot, the ligature kill-list is missing from that
frame's stylesheet and the finding is tranche-wide, not local. `min-heap` and `max-heap` arrive as
**chips** (`--panel-2` mono `--muted`) beside their own sentence; the `max-heap` chip appears as the
authored bridge beat is spoken, and its bracket flips direction (a CSS chevron rotated 180°, authored
literally). `PARENT` and `CHILD` chips sit on the two nodes the gloss names.

**F3 (G11-heap, the array is the point).** Two beats, one board:
```
grab  : the root node's 1 lifts out and holds above the tree (y -60) while everything else stays put.
        Tag: ROOT 1 (upper lane y 288, left 270 / w 300). The row below does NOT rearrange.
proof : the array lane's five cells get a mono chip NOT SORTED, and the two children of the root get a
        paired chip: index 1 holds 3, index 2 holds 2 -- so the LEFT child is the BIGGER one. A thin
        3px --line connector drops from each array cell to the tree node it belongs to, which is the
        part's other lesson: the row IS the tree, stored without pointers.
```
The counted pair for the part stays `ROOT 1` (F3) / `PATH 2` (F4) — bible § 4b. Reading the top costs
nothing, and that is shown by the row **not rearranging** while the root lifts out: no third tag, because
a second number on the same beat is how 28's turns-versus-nodes confusion happens.

**F4 (G3).** `main.py`, chip `PYTHON`, four lines + terminal (the cap; every line executed here):
```
import heapq
h = [1, 3, 2, 7, 5]
heapq.heapify(h)         # nothing moves
print(h[0])              # 1
```
Executed: `heapify([1, 3, 2, 7, 5])` leaves the list **unchanged** (it already satisfies the rule), and
`h[0]` prints **1**. That is the chamber's quiet argument — the row is *already* a heap, so the rule is
about neighbours and not about order. Terminal `1` in mint. Ligatures off; single quotes (there are none
here — no strings).
⚠ **Why not the five pushes:** `for x in [1,3,2,7,5]: heappush(...)` is the honest build of this array
but it needs a loop line plus five calls and G3 caps at four lines, so the chamber shows the finished
row and `heapify` confirming it, while **the pile of five values lives in F3's array lane** — where it is
drawn as the tree it belongs to. Say so in the pinned comment if anyone asks.
Beside the chamber: a mono chip `PATH 2` counting the two edges down the drawn tree (3 levels − 1), and
one `.g7-bar` drawing itself from the last slot up to the root to show the sift path.

**F5 (G5).** Headline `interviews ask this` at 6.4cqw in a 176px box (18 chars ✓), mechanic verb plate
`SAVE THIS` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 29 · INTERMEDIATE`. Behind it, the
five-cell array dimmed via § 1's background/border rule with the root's `1` still lifted out and the
`NOT SORTED` chip readable — the thing worth saving, unnumbered.

## Cover / title card

`the smallest, always on top` (5 words, cut from the hook's promise) + badge
`PROGRAMMING BASICS · BASICS III · 29` + `INTERMEDIATE`. Amber plate on `on top`. No heap on the cover.

## Post copy

**Feed caption:**

    How does a computer always know who's next in line?
    A heap is a tree where every parent is smaller than its children. That rule puts the smallest item at
    the top, so grabbing it moves nothing. It stores itself in a plain row, and that row is not sorted —
    the left child can be the bigger one.
    Save this for algorithm interviews.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#heaps`
**X:** `a heap is one rule, not a sorted list. every parent is smaller than its children, so the smallest
is always at the top and taking it costs nothing. push 1, 3, 2, 7, 5 and the row reads [1, 3, 2, 7, 5] -
not sorted, and the left child is bigger than the right one. insert and remove take log n #python`
**LinkedIn:** the interview version is "when would you reach for a heap instead of sorting", and the
answer is whenever you only ever need the next extreme — a scheduler, a top-k, a merge of many streams.
Sorting is what you do when you want all of it in order. `#python` `#programming` `#datastructures`

**Pinned comment:** `The detail most explanations skip: the array is not unique. heapq.heappush of 1, 3, 2, 7, 5 gives [1, 3, 2, 7, 5], but heapq.heapify([7,5,3,1,2]) gives [1, 2, 3, 5, 7] - both are valid heaps, because the only promise is parent <= child. A heap is a partial order, so please do not read the row left to right as sorted (in the video's array, index 1 holds 3 and index 2 holds 2 - the left child is the larger one). Two more things: heapq is a MIN-heap only, so for a max-heap negate on the way in and negate on the way out; and popping the root costs one sift-down, not zero - taking 1 off [1,3,2,7,5] leaves [2,3,5,7] and that re-forming took exactly 1 swap here. Part 32 is what happens when you put that root to work as a queue. Part 21 is the row that shifts.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): `heappush` of `1,3,2,7,5` in that order →
**exactly `[1, 3, 2, 7, 5]`** and the invariant check passes (`parent ≤ children` at every index). The
layout is **order-dependent**: `heapify([7,5,3,1,2])` → `[1, 2, 3, 5, 7]`, and `[1,2,3,7,5]` /
`[1,3,2,5,7]` are also valid. **Siblings unordered** — index 1 = `3`, index 2 = `2`.
`heappop` → `1`, remaining `[2, 3, 5, 7]`, sift-down took **1 swap**; `h != sorted(h)` → **True**; index
math `2i+1 / 2i+2` → children of 0 are 1, 2 and of 1 are 3, 4 (all executed); a 5-node heap is **3
levels**, so the longest path down is **2 edges**; `heapq.heappop([])` → `IndexError: index out of
range` (reply thread only, no coral on screen).

**Three screen-text constraints** (`CORRECTIONS-day3.md` § B): the array carries a `BUILT BY PUSHING
1, 3, 2, 7, 5` chip so the layout is credited to its build order; `NOT SORTED` is mandatory beside the
row; and the frame never implies a left-to-right reading order (`parent ≤ child` is the only bracket
drawn).

## Gate state

G11-heap inherits **27's grid, which nobody has proven** — so the shared risk is 27's, and this part's
own risks are the **binding stubs** (one per parent→child pair, straight down from a tree node's bottom
centre to its array cell's top centre) and the two-face board. Snapshot-read first: (1) the five stubs do
not cross the elbow runs at y 420/580 and none of them lands on a digit; (2) the tree's layout and the
array's order agree cell-for-cell — a mismatch teaches that the row and the tree are different objects;
(3) `NOT SORTED` and `parent <= child` are both readable at phone size and the `<=` is un-ligated;
(4) the tree is only 3 levels tall here (five nodes), which is *within* 27's four-level ceiling, and a
worker who wants a seventh node must push it to a chip instead. If the binding is unreadable, **report
it** — 32's service lane is built on the same two-face idea.
