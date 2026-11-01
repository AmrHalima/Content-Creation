---
id: pb-22
order: 11
series: prog-basics
tranche: day-2 (BASICS II)
title: Linked lists
slug: linked-lists
project: videos/prog-basics-22-linked-lists/
difficulty: B
mechanic: Quiz
mode: code-card
carrier: true                     # proves G7's node anatomy + walk + prepend
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 91
target_length: ~44s               # the tranche's longest, and the payoff of 21
ceiling: 54s
grammar: G1 G7 G7 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-21's box row (the array side of the contrast) + frame-day2.md § 4 G7
---

# P22 · Linked lists · [B] · Quiz · code card

**Message:** a chain of nodes, each holding a value and where to go next — so adding at the front is
one assignment, and reaching the fiftieth thing is forty-nine hops.

Third carrier, and the tranche's other half of part 21's trade. It proves **G7 node anatomy, the
`walk`, and `prepend`** (21 proved `shift`). Because 21 and 22 are a matched pair, this part's F4 puts
the array back on screen to lose the comparison — that is the echo the hook already set up.

No notation in this part. "Walk the chain" and a `STEPS` counter do the work that "O of n" would
have done, and the counter is the thing a learner will actually remember.

## Final narration

Estimated at 2.4 words/second (`af_heart` @ 0.93); `studio voice` measures and syncs, `studio cues`
places the words. Measured numbers go into `STORYBOARD.md`.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 6.7s | An array is a row of seats. A linked list is a treasure hunt. | Two beats, same weight. The first is part 21's idea, so it gets no extra emphasis. |
| F2 | 8.3s | A linked list is a chain of nodes. Each node stores a value and a pointer to the next node. | `value` and `pointer` are the two cells of the node lighting as they are named. |
| F3 | 7.1s | Adding at the front is fast. Finding the 50th means walking through 49 nodes first. | First sentence quick — it is one assignment. Second sentence at walking pace, one hop per number. |
| F4 | 10.8s | Here is the same chain as code. To reach three you follow two pointers. An array asks for index two and gets it. | The last sentence is the whole tranche closing. Land `gets it` on the mint number. |
| F5 | 5.0s | Which is faster for inserting at the front: array or linked list? | Verbatim CTA. The plate carries the verb; nothing is added to the question. |

**Spoken code:** `n = (1, (2, (3, None)))` → "one inside two inside three inside nothing" is *not*
spoken — F4's voice line describes the chain, and the tuple shape is read by the eye only.
`n[1][1][0]` → "follow two pointers". `None` → "nothing". `3` → "three".

**Re-cut applied** (`CORRECTIONS-day2.md` § A): "Adding at the front is fast, but finding the 50th
item means walking through 49 nodes first." split at the `but` into beats of 6 and 11, with `item`
dropped because the counter on screen is the item. F4's array line is written without "just"
(forbidden register, `frame.md` § 9).

## On-screen text and code treatment

**F1 (G1).** Two groups, `a row of seats` then `a treasure hunt`, the second on the solid `--say`
plate. Left of the first group, five small G2b boxes in a row at 0.5 scale (pb-21's row, dimmed to
0.55 — the callback is the shape, not the colour). Right of the second, three G7 nodes with the first
`--say` ring already on it. Neither diagram animates on F1; the hook frame is type plus two stills.
**F2 (G7 node anatomy).** One node, large, at hero size: 264×108px grown to 480px wide, split by a
3px `--line-faint` hairline. Left cell `2` in `--value` mint under a mono tag `VALUE`; right cell a
`→` glyph in `--muted` under a mono tag `NEXT`. On "a value" the left cell pulses once (P7
`pulse-set`), on "a pointer to the next node" a connector draws out of the right cell (P8
`arrow-run`) to a second node that arrives with it. Then a third, then the terminator chip `None` in
mono `--muted`. The chain is built live, one clause per node.
**F3 (G7 walk + prepend, two beats in one frame).**
```
walk    : the chain from F2 holds, and a cur marker (3px --say ring) hops node 0 → 1 → 2 → 3 while a
          mono STEPS tag counts 1 2 3 on P9 count-tick, one per hop. Boxes do not move; only the
          ring travels. Beside it, in mono --muted: the number it is holding, lighting mint on arrival.
          A fourth hop is attempted toward a `50th` ghost node that is off-frame, and the counter is
          still climbing when the frame exits — unfinished on purpose, because that is the lesson.
prepend : the whole chain slides DOWN one step (a y tween on the block, not a layout reflow) and one
          new node drops in at the head (P2) with its arrow redrawing (P8). Nothing else moves. Tag:
          MOVED 0, against part 21's MOVED 4. That single pair of tags is the tranche's argument.
```
The two beats are separated by the voice's sentence break, and the `MOVED 0` tag appears on
"fast". The ghost `50th` node is a dashed empty chamber (G2's `empty` shape: 3px dashed `--line`, no
value) so a learner who knows the geometry already reads "there is one more, and one more, and
one more".
**F4 (G3).** `main.py`, chip `PYTHON`, four lines plus the terminal strip — the maximum the grammar
allows, and every line was executed:
```
chain = (1, (2, (3, None)))
print(chain[0])           # 1
print(chain[1][1][0])     # 3
print((0, chain)[0])      # 0
```
stdout is `1`, `3`, `0` (executed, `.tmp/day2_chambers.py`) — shown as three mint terminal lines.
The double bracket in line 3 gets a P1 `say-sweep` on "two pointers", and a small CSS brace-bar
under `chain[1][1]` tagged `[1] = hop`. **The nested tuple is the honest executable form**: a
`class Node` with a `__repr__` is six lines and G3 caps at four, so a real class would have to be
shown lying about its length. Right edge of the frame, dimmed to 0.42, pb-21's five-box row with a
single jump arrow onto index 2 and `nums[2]  # 30` in mono — the array answering the same question in
one look. No coral: nothing raises here.
**F5 (G5).** Headline `faster at the front?` at 6.4cqw in a 176px box, mechanic verb plate
`COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS II · 22 · BEGINNER`. Below the
headline, two chips `ARRAY` / `LINKED LIST` in `--panel-2` mono — **unselected**. The ring travels
between them twice and then rests on neither, because answering the viewer's quiz on screen is
answering their quiz (the pb-11 finding, kept as a rule).

## Cover / title card

`linked list, a treasure hunt` (5 words, cut from the hook's second sentence) + badge
`PROGRAMMING BASICS · BASICS II · 22` + `BEGINNER`. Amber plate on `treasure hunt`. Written without
the "not X" shape deliberately: the contrast-reveal is rationed to one occurrence across the series
and spent on part 05's hook.

## Post copy

**Feed caption:**

    An array is a row of seats. A linked list is a treasure hunt.
    Each node holds a value and a pointer to the next one, so adding at the front is one new node and
    one arrow. Reaching the fiftieth means following forty-nine arrows first.
    Which is faster for inserting at the front?

**Hashtags:** `#python` `#programming` `#learntocode` #datastructures
**X:** `insert at the front of an array and everything after it shifts. a linked list adds one node and redraws one arrow - MOVED 0. but to reach the 50th you follow 49 pointers, and there is no shortcut. which is faster at the front? #python`
**LinkedIn:** this is the question that separates "I know what a linked list is" from "I know why
Python gives you a list instead", and the second half is in the pinned comment; `#python`
`#programming` `#datastructures`

**Pinned comment:** `Linked list wins at the front: one new node, one pointer, nothing else moves. In Python though, a list IS a dynamic array, so nums.insert(0, x) shifts every element. Measured it here on a 100k collection: list.insert(0) took 44109 nanoseconds, deque.appendleft took 57. That is why the standard library gives you collections.deque for this and you almost never hand-roll a linked list. The chain is the idea worth knowing; the deque is the thing you reach for. Part 21 is the row of seats.`

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`.tmp/day2_accuracy.py`, `.tmp/day2_chambers.py`): a real node
chain's `repr` is exactly `1 -> 2 -> 3 -> None`, which is the user's example as literal executable
output. F4's four-line chamber prints `1`, `3`, `0`. Walking to index 2 took **exactly 2 hops**, so
`steps == index` is what the `STEPS` counter says and the voice does not have to. Prepending is one
new node plus one pointer (`(0, chain)[0]` → `0`, and the old head untouched at `chain[1]` →
`(2, (3, None))`).

Two claims checked for honesty rather than correctness: the hook's "row of seats" and "treasure hunt"
are the user's, and the `MOVED 0` against part 21's `MOVED 4` is the counted result of
`insert(1, 99)` on a five-box row and a head-prepend on a four-node chain. The pinned comment carries
the `deque` caveat because a viewer who takes this part literally will write a linked list in Python
and be slower than the array they escaped — `collections.deque.appendleft` is the tool, verified on
3.13.15.

## Gate state

Carrier. Read the `walk` first: the ring must travel node→node without the nodes shifting, and if a
`y` tween on the block moves the chain on the prepend beat it will collide with the caption band.
44s puts this part at the top of the tranche's runtime range, still 10s under the ceiling.
