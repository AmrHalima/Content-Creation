---
id: pb-33
order: 11
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Doubly linked lists
slug: doubly-linked-lists
project: videos/prog-basics-33-doubly-linked-lists/
difficulty: M
mechanic: Save
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 93
target_length: ~35s             # 93 / 3.24 = 28.7s speech + 6.0s air; at 2.7 w/s ~40.4s
ceiling: 54s
grammar: G1 G13 G13 G3 G5
marks: G13 back-pointer (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed-with-constraint
clone_source: pb-22/02-anatomy.html (node, cells, chip) + pb-22/03-walk-prepend.html (ring, walk)
---

# P33 · Doubly linked lists · [M] · Save · code card

**Message:** every node remembers the way it came, so you can walk the chain from either end and unhook a
node without hunting for its neighbour — and the price is one more pointer in every box.

Day 3 closes on Day 2's last part: 22's chain, with a second road. Because it is a callback, the forward
chain is **already on screen** when this part starts, and the only new object is the back connector.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 7 — `A linked list that can walk backwards.` | 2.2s | 2.6s | Verbatim hook, and the tranche's natural direction word — `walks backwards` is a direction, not a contrast, so it survives untouched. |
| F2 | 22 — `Each node stores pointers to both the next and the previous node. A pointer is where to go next. This node keeps two.` | 6.8s | 8.1s | The user's sentence (12 words) passes; the two short beats are the gloss law, because `pointer` is the noun the whole tranche leans on and `both` is the part's claim. |
| F3 | 23 — `You can go forward and back. And you can delete a node without hunting for the one before it. Two changes delete B.` | 7.1s | 8.5s | Re-cut 7's two beats, then the counted beat — land `Two changes` on the two connectors redrawing, one after the other. |
| F4 | 31 — `Forward, A then B then C. Back, C then B then A. The cost is extra memory for the second pointer. The other half is a hash map. That is part twenty-five.` | 9.6s | 11.5s | Walk the prints first, name the cost, then the callback. `twenty-five` is said as a number and shown as a badge, so a viewer who has not seen 25 is not lost. |
| F5 | 10 — `Save this. It's half of how an LRU cache works.` | 3.1s | 3.7s | Verbatim CTA. |

**Total 93 spoken words → ~34.7s** — inside the `[M]` band and 19s under the ceiling. F4 is the long
frame (9.6s) because it carries the walk, the cost and the callback; if it crowds the terminal strip,
the lever is F4's shape (the callback badge belongs on F5's dimmed row instead), reported once and
applied across the tranche.

**Spoken code:** `node['prev']` → "the one before". `node['next']` → "the one after". `None` → "nothing".
`{'v': 'B', 'prev': 'A', 'next': 'C'}` → never read aloud; F4's voice says what the chain *does*.
`LRU` → "el-ar-you".

**Re-cut applied** (`CORRECTIONS-day3.md` § A, **re-cut 7**): the user's "You can traverse in both
directions and delete a node without searching for its predecessor." (15 words, two unrelated abilities,
plus two vocabulary violations — `traverse` is banned series-wide from Day 2 § 2 and `predecessor` is an
unglossed jargon term) became "You can go forward and back." + "And you can delete a node without
hunting for the one before it." `searching` → `hunting` so the line does not collide with "search", which
parts 25/28/30 are teaching as a technical verb. Flagged as touching a writer's sentence. Hook and CTA
verbatim; 33's other two explain sentences (12 and 9 words) pass untouched.

## On-screen text and code treatment

**G13 is `frame-day3.md` § 6 — cite it, do not re-derive.** The short form: node **176×108** split into
**three cells, 58 | 66 | 52**, with two 3px `--line-faint` hairlines at x 58 and x 124 (`.g7-div`,
`top: 14px; bottom: 14px`); cell role labels `PREV` / `NEXT` in mono 700 1.85cqw `--muted` at the cell
tops, `data-layout-ignore`; value centred in the middle cell at 4.2cqw `--value`. Row top **540**.
Head chip `None` 60×56 `--panel-2` at left **72** (y 566); nodes at **204 / 452 / 700**; tail chip at
**948** → the span is exactly 72 → 1008. Each of the four 72px gaps (at 132 / 380 / 628 / 876) carries
**two** 3px `--line` bars: forward at **y 586**, back at **y 600**, chevrons at opposite ends
(11×11 `.g7-chev`, borders only). Walk ring 196×126 at `node.left − 10`.

**No directional glyph anywhere in this part.** Not `⇄`, not `←`, not `->` inside a cell. The user's
`None ⇄ A ⇄ B ⇄ C ⇄ None` is a **diagram**, and U+21C4's coverage in the shipped woff2 set is unverified
(no `fontTools` on this machine) — the two CSS connectors replace it, are already proven atoms, and are
what a learner will actually recognise as "two roads". (Inside the *chamber*, ASCII `->` is fine — with
ligatures off it renders literally, which is Day 2's ruling.)

**F1 (G1).** `a linked list` then `walks backwards`, amber plate on `backwards`, with a single mint
`.g7-bar` and one chevron drawn **right-to-left** beneath the type — the arrow is the hook's own motion,
and it is the only illustration F1 gets.
**F2 (G13, anatomy).** 22's node, opened up to hero size and then settled into the chain (one `scale`
tween, default centre origin, authored so its centre *is* the slot's centre — pb-22's proven move).
Cells light in the order named: `PREV` chip, then the value, then `NEXT`. `+1 POINTER` arrives as a mono
chip over the third cell (`--muted`, `data-layout-ignore`) — **a field count, never bytes**.
Then two more nodes build rightward, one per clause, and the two terminator chips (`None` at both ends)
close the row: `head['prev'] is None` and `tail['next'] is None` are both executed True, so the two
`None` chips are output, not decoration.
**F3 (G13, the second road + the deletion).** Two beats, one board, the whole part:
```
road   : the SECOND bar draws itself in every gap (P8, right to left, 0.18s apart) while the forward
         bars hold. This is the only new object in the part and it arrives alone — the forward chain is
         already on screen from F2, which is what makes "backwards" a change rather than a rebuild.
walk   : the ring travels C -> B -> A, right to left, and WALKS BACK ticks. Boxes do not move (pb-22's
         discipline) — the marker travels.
delete : two reassignments, drawn as two CONNECTORS redrawing in sequence: the A->C bar appears and then
         the C->A bar appears. No colour flash on either bar (frame-day3 § 6: a connector is neither the
         word being said nor a value, and two amber events in one beat is a § 1 violation). B dims via
         § 1's background/border rule, its letter dropping to rgba(244,241,234,0.62), never container
         opacity. Tag: 2 CHANGES ticking 1 -> 2.
```
Counted pair (lower lane y 892): **`2 CHANGES`** (left 270 / w 300) / **`WALKS BACK`** (left 590 /
w 220) — pb-21's authored widths. `2 CHANGES` is deliberately counted against **22's `MOVED 0`** and
**21's `MOVED 4`**: the series now has three counted facts about inserting and deleting, and a viewer who
watched Day 2 will feel the row land in place.
**F4 (G3).** `main.py`, chip `PYTHON`, three lines + terminal (cap 4; every line executed here):
```
node = {'v': 'B', 'prev': 'A', 'next': 'C'}
print(node['prev'])    # A
print(node['next'])    # C
```
stdout `A` then `C` in mint. Three lines is the honest ceiling: a real `class Node` with `prev`, `next`
and a walk is six-plus lines and G3 caps at four — pb-22's ruling, still true, and the dict shape is
executable rather than a lie about length. The two printed letters **are** the two pointers, so the
compromise is also the lesson. Beside the chamber: the walked prints as two mono lanes, `A -> B -> C` and
`C -> B -> A`, both executed, and the cost chip `+1 POINTER`.
Then the callback: a `LRU CACHE` chip (`--panel-2` mono `--muted`) and a small badge reading `25` —
**chips, never chambers.** The screen shows the executed recency order beside them (`b c a`, victim `b`),
because that *was* produced here; what it must not show is any claim about how CPython builds a cache.
**F5 (G5).** Headline `why two roads?` at 6.4cqw in a 176px box (13 chars ✓), mechanic verb plate
`SAVE THIS` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 33 · INTERMEDIATE`. Behind it, the
three-node row dimmed via § 1 with both connector pairs visible, `B` still in place, and the `25` badge
unreadable at full strength — the hint being that this structure pairs with something, not which
something.

## Cover / title card

`walk it both ways` (4 words, cut from the explain rather than the hook, so the cover carries the ability
and the hook carries the surprise) + badge `PROGRAMMING BASICS · BASICS III · 33` + `INTERMEDIATE`. Amber
plate on `both ways`. Two CSS connectors with opposite chevrons, no glyph.

## Post copy

**Feed caption:**

    A linked list that can walk backwards.
    Every node keeps two pointers: the one after and the one before. So you can go forward and back, and
    you can delete a node without hunting for the one before it — two assignments and both roads hold.
    The price is an extra pointer in every box.
    Save this. It's half of how an LRU cache works.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#linkedlist`
**X:** `part 22 could only go one way. give every node a second pointer and you can walk the chain
backwards, and deleting a node is two assignments - b's previous points to b's next, b's next points to
b's previous, done. no search for the one before it. the cost is one more pointer per box. that ordering
trick is half of an LRU cache #python`
**LinkedIn:** the reason a real LRU cache is a hash map plus a doubly linked list, and why neither half
does it alone: the map gives you "find the entry" in one hop (part 25) and the chain gives you
"unhook this entry and remember what was touched last" without a scan (this part). Drop the chain and
you rescan to find the least-recent entry; drop the map and you walk to find the key. `#python`
`#programming` `#datastructures`

**Pinned comment:** `Half, literally: an LRU cache is this chain plus part 25's hash map. The map answers "do I already have key X" in one hop; the chain answers "who did I touch least recently" without scanning, because touching a node is just unhitching it and re-hitching it at the front - two pointer changes each way, and that is the whole reason the second pointer is worth its memory. What I checked rather than recalled, on Python 3.13: an OrderedDict filled a, b, c then move_to_end('a') reads back in order b, c, a, and the eviction victim is b - popitem(last=False) hands you ('b', 1). functools.lru_cache(maxsize=2) after calls 1, 2, 3 reports 3 misses and currsize 2 (so 1 was dropped), and asking for 2 then reports a hit. Note the boundary of that claim: the BEHAVIOUR is verified here; how CPython builds it internally is not something this video checked, so do not take "lru_cache is a doubly linked list" from me as a source - the standard library docs are. In your own code, reach for OrderedDict.move_to_end or lru_cache rather than hand-rolling one, and know that lru_cache is thread-safe while a hand-rolled cache usually is not. The bug to avoid when you do write the unlink yourself: the two reassignments must both happen, or the chain tears and the backward walk stops short of the head. Part 22 is the one-way version; part 21 is the array this beats at the front.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): a dict-node chain walks **`A -> B -> C`** forward and
**`C -> B -> A`** backward; `head['prev'] is None` → **True** and `tail['next'] is None` → **True** (both
terminator chips are executed output); deleting `B` with exactly **two assignments**
(`b['prev']['next'] = b['next']`; `b['next']['prev'] = b['prev']`) leaves forward **`A -> C`** and
backward **`C -> A`**, both intact — the chain survives the deletion, which is the claim the ring's
`C → A` walk draws. Chamber prints `A` and `C`, executed. LRU behaviour executed:
`OrderedDict` a,b,c → `move_to_end('a')` → keys **`['b','c','a']`**, victim **`b`**,
`popitem(last=False)` → **`('b', 1)`**; `lru_cache(maxsize=2)` after calls 1,2,3 →
`CacheInfo(hits=0, misses=3, maxsize=2, currsize=2)`, and asking 2 next → **hits=1**.

**Three screen-text constraints** (`CORRECTIONS-day3.md` § B): (1) `⇄` is a diagram, never a chamber, and
no directional glyph sits in a cell; (2) the *implementation* of `lru_cache` was **not** executable here
(`functools._lru_cache_wrapper.__doc__` does not mention a linked list), so the screen shows a `LRU
CACHE` chip plus the executed recency order, and the pinned comment draws that boundary explicitly;
(3) `+1 POINTER` counts fields, and **no `sys.getsizeof` number appears anywhere** — it compares
containers, not pointers, and would teach the wrong thing.

## Gate state

**G13 is unbuilt and it is the mark most likely to fail at phone size**, because it puts two 3px bars in
every gap. Snapshot-read in this order: (1) the forward and back bars stay **14px apart** and read as two
roads — if they merge into one line, that is a **report**; the fix is the gap width (72px is authored) or
the chevron size, and it is **never** a move to `--line-faint` (the countable-mark law) and never a
switch to SVG in a scaled container (pb-11's drift); (2) the 58px `PREV` cell does not crowd its label —
if `PREV` will not fit, the answer is to put the role label above the node instead of inside the cell,
and report the change; (3) the deleted node dims by background/border, **not container opacity**, and its
letter stays at 0.62 ink or better; (4) the back-walk ring lands **on A**, not in a gap; (5) the two
`None` chips sit at 72 and 948 with the row's right edge at 1008, so nothing crosses the band; (6) zero
coral. Then check the series seam: `2 CHANGES` must read as the third counted tag beside 22's `MOVED 0`
and 21's `MOVED 4` — same tag size, same lane, same font, or Day 3's closing callback is a different
object.
