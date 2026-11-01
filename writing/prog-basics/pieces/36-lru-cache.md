---
id: pb-36
order: 3
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: LRU cache
slug: lru-cache
project: videos/prog-basics-36-lru-cache/
difficulty: M                      # load-bearing badge, not prose
mechanic: Quiz                     # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 81
target_length: ~31s                # 81 / 3.24 = 25.0s speech + 6.0s air
ceiling: 54s
grammar: G1 G7 G7 G4-split G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: approved                 # CORRECTIONS-day4 § A6 landed in the VO; see ## Approved edits
ledger_placeholders: 2
notation: BANNED here (day-4 default). "Constant time" in words, never `O(1)`, on any surface.
clone_source: pb-22's G7 node chain (2 nodes) + pb-10/pb-16's split chrome
---

# P36 · LRU cache · [M] · Quiz · code card

**Message:** a cache that forgets the thing you touched longest ago — and the reason it can decide that
cheaply is two structures working as one, a map to find and a chain to order.

This part is 22's payoff. pb-22 ended on "the chain is the idea worth knowing; the deque is the thing you
reach for", and here the chain earns its keep: an LRU is a doubly linked list plus a hash map, and nothing
in Day 1 or Day 2 used both in one frame. Three [M] parts in this tranche can smuggle two ideas into one
sentence; this one is split by **which part of the machine is doing the work**: F2 the rule, F3 the read
that reorders, F4 the two parts side by side.

**Why there is no code chamber in this part.** A real LRU is more lines than G3's four-line cap, and a
four-line snippet that pretends to be one teaches a fake structure (pb-22 hit the same wall with
`class Node` and solved it with nested tuples). Here there is no honest executable form that fits, so F4
uses G4's split chrome for a **map panel and a chain panel**, both diagrams, both ≤3 lines of mono. A
builder must not invent a snippet to fill the gap.

**Notation (ACCURACY-day4 § 3, row 36).** The ban stands for `O(…)`: narration says "constant time", the
screen says `ONE LOOK` / `ONE RE-LINK`, and `O(1)` appears nowhere in this part, including the caption,
X/LinkedIn and the pinned comment. § 3 names this part's spoken wording exactly: **constant time as words**,
which is what F4 says, now with the approved `on average` after it (A6) — still words, still no symbol. The
written-notation licence belongs to 41/42 (the lesson), 37/43 (comparison labels) and 44 (`O(n²)` /
`O(n log n)` on the slow/fast plate).

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 81 words → 25.0s speech + 6.0s air = **~31.0s**
(the five rows sum to 25.1s with per-row rounding; the part figure is 81 / 3.24). Inside the 29–34s band.
At the slow-word rate pb-13 measured (3.04 w/s) this part is ~26.6 + 6.0 = **~32.6s**, still inside, so
nothing is added and nothing needs cutting. A6 cost **2 words** and F4 is the frame that pays them.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.8s | How does a cache decide what to throw away? | Verbatim hook, and the phrase `throw away` is the one that carries — the term `evict` has not arrived yet. |
| F2 | 5.6s | An LRU cache has a fixed size. When it fills, it throws out the item used least recently. | First sentence flat. `least recently` is the whole algorithm and gets the last breath of the frame. |
| F3 | 5.6s | Every read moves that item to the front. So the back of the line is always the oldest. | `moves` is the node travelling. The second sentence lands `oldest` on the tail node, which is the one about to matter. |
| F4 | 7.1s | A hash map finds the item, and a linked list reorders it. That keeps every read and write in constant time on average. | Two beats, one per panel. `finds` on the map side, `reorders` on the chain side — the colour hands off between them. `on average` is the qualifier and gets a small lift; it is the two words that make the sentence true. |
| F5 | 4.0s | Capacity 2: put A, put B, get A, put C. What gets evicted? | Verbatim CTA mechanic, and it is a list of steps, so read them as steps with a small gap at each comma. `2` is spoken as "two". |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 9 · F2 18 · F3 18 · F4 23 · F5 13 = **81 spoken words** → 25.0s speech + 6.0s air = **~31.0s
film** (~32.6s at pb-13's 3.04 w/s). `SCRIPT.md` keeps exactly 5 lines, one per frame, headings
`## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `Capacity 2:` → "capacity two". `put A`, `put B`, `get A`, `put C` → "put A", "put B",
"get A", "put C" — the letters stay letters. `None` → "nothing". No bracket, no colon, no arrow is read
aloud anywhere in this part.

**Re-cut applied** (logged in full). User's explain: "An LRU cache evicts the least recently used item
when it's full." → F2 keeps both facts and splits them, because the 13-word version front-loads the term
`evicts` before the viewer has a picture for it; the plain gloss `throws out` now comes first and
`evicts` arrives as the on-screen tag in the same frame (§ 9 requires the gloss in the same breath, and
here the plain word is the one the voice says). "Combine a hash map for fast lookup with a doubly linked
list for fast reordering, and every operation runs in constant time." (18 words, two clauses, one
sentence) became F4's two sentences; "doubly" is dropped from the voice and kept on screen as the
`PREV` cell of the node, because saying "doubly linked list" to a first-week learner and drawing one in
the same four seconds is two ideas in one beat. Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 36`, `INTERMEDIATE` badge, ligature guard on every
frame. **Zero coral**: nothing raises here, and `--err` is reserved for a message this interpreter raised.

**F1 (G1, also the cover).** Type alone, two groups: `a cache full of things` / `what leaves?` on the
solid `--say` plate (hook words cut for the eye; the sentence itself is spoken whole). No chain yet — the
hook frame is type only.
**F2 (G7 chain, two nodes, the rule).** One node anatomy at hero scale first (pb-22's settled `176×108`,
value | 3px `--line-faint` hairline | next cell), then a second: `A` then `B` arriving on P2 `drop-in`,
one per clause, joined by a 24px CSS connector with a chevron. Cells are labelled `VALUE` and `NEXT` in
mono `--muted`, and a third label appears on the right of node B: the terminator chip `None`. Two mono
tags, countable so `--line` (0.16) not faint: `USED: A new, B older` and, under the row, `FULL 2 OF 2`.
The eviction rule is drawn as a **dashed ghost node leaving the tail**: a chamber with 3px dashed
`--line` and no value (G2's `empty` shape) sliding out right with a mono tag `evicts: throws it out` —
the gloss, on screen, in the frame that names it. No item actually leaves yet, because no item has been
read; the ghost is the rule, not an event.
**F3 (G7 reorder beat).** Same two nodes, and the `get A` event: a `--say` ring travels to node `A`
(P8 arrow-run along the connector), then the **chain slides down one step as a block** (a y tween on the
container, never a layout reflow — pb-22's prepend) and node `A` re-links at the head with one connector
redrawn. `MOVED 0` holds as a tag for the nodes that did not move, and the tail tag re-ticks to
`USED: B oldest`. One reading line: `a read is also a write` (ink on `also`) — which is the reason the
next frame's cost exists. Nothing is evicted on this frame either.
**F4 (G4-split, the two parts).** Two titled panels, each ≤3 mono lines, each with its own titlebar —
borrowing the split chrome for a **map** and a **chain**, with no code chamber and no language chip
claimed as executed code:
```
map panel  : key -> node      ⟪LEDGER:36⟫ (printed key list, if shown at all)
chain panel: head -> A -> B -> None, with the PREV hairline drawn back along the chain
waiting    : a chip `put C` sits OUTSIDE the chain, right of head, dimmed, unlit
```
The `put C` chip is the frame's last arrival and it never enters: F4 ends with the cache full and C
knocking. Under the panels, one line in ink at 3.0cqw: `map finds it · chain orders it` — the two ideas
named, one per panel, colour handed from mint on the map values to `--say` on the chain order for the
half-second each word is spoken. The counted tag is `ONE LOOK + ONE RE-LINK` (mono `--muted`,
`data-layout-ignore`), which is what "constant time" means without a symbol: no scan, no shift.
**F5 (G5, the Quiz).** Headline `which one leaves?` (15 characters, 3 words — inside the ≤24 rule) at
6.4cqw in the 176px band, two chips `A` / `B` in `--panel-2` with 3px `--line`, **unselected**: the ring
travels A → B → released and rests on neither, while the `put C` chip from F4 holds just outside the
dimmed chain (0.42 skin, digits at full ink). Verb plate `COMMENT IT` in solid `--say`, badge
`PROGRAMMING BASICS · STRUCTURES I · 36 · INTERMEDIATE`. **The eviction is not shown anywhere in this
film** — see the decision logged under Accuracy.

**CTA card copy, verbatim and complete:** spoken `Capacity 2: put A, put B, get A, put C. What gets
evicted?` / headline `which one leaves?` / chips `A` `B` / verb plate `COMMENT IT` / badge line.

## Cover / title text

`what does a cache throw away` (6 words, the hook's own nouns) + badge
`PROGRAMMING BASICS · STRUCTURES I · 36` + `INTERMEDIATE`. Amber plate on `throw away`.

## Post copy

**Feed caption:**

    How does a cache decide what to throw away?
    An LRU cache has a fixed size, and when it fills it throws out the item used least recently.
    Every read moves that item to the front, so the back of the line is always the oldest thing in there.
    A hash map finds the item and a linked list reorders it, which is what keeps every read and write cheap.
    Capacity 2: put A, put B, get A, put C. What gets evicted?

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures`
**X:** `a read is also a write: touching a key moves it to the front, so the tail is always the oldest thing you kept. fill it, then write one more, and the tail is what leaves. map to find, chain to reorder - that pair is why the move is cheap. capacity 2: put A, put B, get A, put C. who goes? #python`
**LinkedIn:** the version that comes out in a system design loop is "your cache is full, which entry do
you drop, and what does deciding cost you" — because LRU is the rare structure where the answer needs two
index structures and one doubly linked chain, and a candidate who can say why a plain dict and a plain
list are each half the problem has actually understood both; `#python` `#programming` `#datastructures`

**Pinned comment:** `B leaves. Put A, put B, then get A moves A to the front, so the order is A then B, and B is the least recently used item when C arrives. The trap in this quiz is that a read counts as a use: skip the get A and A is the one that goes. In Python the same ordering is already written for you: ⟪LEDGER:36⟫ — put the executed result of the two-slot OrderedDict or functools.lru_cache trace here (which keys the map holds, in printed form, and in what order), or cut this sentence. Part 35 is the other half of the cache: how to know a key is not there before you pay for the lookup. Part 38 is what happens when two keys land in the same map slot.`

## Accuracy

**Status: ledger returned, user ruled (`CORRECTIONS-day4.md` § D) — see the `on average` fix in the Approved
edits section below.** What still waits on the run is the printed form only: the one claim this part makes
about behaviour — that after
`put A, put B, get A, put C` at capacity 2 the evicted item is `B` — is deterministic from the rule the
film teaches, but it is also the pinned comment's answer, so it is marked: `⟪LEDGER:36⟫` requires the same
trace run against a real Python structure (`collections.OrderedDict` with `move_to_end`, or
`functools.lru_cache(maxsize=2)`), not against my description of it. Two things could differ: `lru_cache`
evicts on call order and its `cache_info()` counts hits and misses, and `OrderedDict` orders by insertion
or by `move_to_end(last=False)` — which one the comment names changes the printed form.

**Logged decision, not a silent one.** The plan's Example line is "Capacity 2: put A, put B, get A, then
put C evicts B", i.e. the eviction is on screen. The same plan's CTA asks the viewer which one is evicted.
Showing it and then asking is the pb-22 finding ("answering the viewer's quiz on screen is answering
their quiz"), so the film stops at the full cache with `put C` waiting outside, and the eviction result
lives in the pinned comment only. Nothing in the user's hook, explain or CTA text changed; the example was
moved, not rewritten. If the user wants the eviction drawn, the fix is the CTA question, and that is
theirs to change, not a builder's.

"Every read moves an item to the front" is a claim about LRU policy, and the frame shows it as a re-link,
so no number depends on it. "Constant time" is kept in words, and since A6 the VO says **constant time on
average**, which is the honest scope: it is inherited from the hash map, and a colliding dict does 200
equality tests in one lookup (ACCURACY-day4 § 36, § 41). The worst-case half of that is part 38's subject,
which the pinned comment hands over to.

## Ledger dependencies

- `⟪LEDGER:36⟫` (F4 map panel line, and the pinned comment) — the executed form of the two-slot LRU trace
  in whichever real Python structure the run settles: the keys the map holds and their order after
  `put A, put B, get A`, and which key a `put C` drops. If the map panel cannot print a real structure in
  ≤3 mono lines, the panel shows key chips only and the printed form stays in the comment.
- `⟪LEDGER:36b⟫` (pinned comment) — confirmation that the `get A` step reorders in the chosen structure
  (`OrderedDict.move_to_end` / `lru_cache` call order), because the quiz's whole trap is that a read is a
  use. Cut the trap sentence if the run does not prove it.

## Gate state

Non-carrier, but it is the first part in the series to put a map panel and a chain panel in one frame, so
snapshot-read it as if it were a carrier: (1) **the `put C` chip must never enter the chain** — if it
animates in, the quiz is dead and the film contradicts its own CTA; (2) the **re-link** on F3 — only the
head connector redraws, the chain moves as a block, and nothing collides with the caption band at y 1004;
(3) the **ghost dashed node** on F2 reads as a rule and not as an item that left; (4) chips unselected on
F5 with the ring resting on neither; (5) `ONE LOOK + ONE RE-LINK` is chrome, so it needs
`data-layout-ignore` if it sits below 28px.

Runtime expectation: **~31.0s** (band 29–34). Blocks at F4 only, on `⟪LEDGER:36⟫`; F1/F2/F3/F5 and the
full VO are independent of the run.

## Approved edits

- **A6 (CORRECTIONS-day4 § A, LOW) landed in the VO.** Before: `That keeps every read and write in
  constant time.` After: `That keeps every read and write in constant time on average.`
- Word delta: 79 → **81** (F4 21 → 23, Est 6.5s → 7.1s). Nothing else changed; F1, F2, F3 and the CTA are
  untouched and verbatim.
- Nothing was trimmed: 81 words sits inside the 75-91 band, and the ledger's alternative (leave the voice
  alone and carry the caveat in the pinned comment) was **not** taken, because § A's own note is that both
  parts cannot claim flat O(1) with no qualifier, and 41 already says it out loud.
- No symbol entered this part: `on average` is words, per § 3 row 36, so the caption lane and the plate
  still agree.
