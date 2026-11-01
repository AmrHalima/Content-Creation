---
id: pb-37
order: 4
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Array vs linked list tradeoffs
slug: array-vs-linked-list
project: videos/prog-basics-37-array-vs-linked-list/
difficulty: B                      # load-bearing badge, not prose
mechanic: Debate                   # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 82
target_length: ~31s                # 82 / 3.24 = 25.3s speech + 6.0s air
ceiling: 54s
grammar: G1 G2b G7 G4-split G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: pending-ledger
ledger_placeholders: 3
notation: ALLOWED, narrowly (tranche ruling 1) — as a COMPARISON LABEL only, on F4, both sides at once.
clone_source: pb-21's G2b row + pb-22's G7 chain, both shown at 0.5 band scale in one frame
---

# P37 · Array vs linked list tradeoffs · [B] · Debate · code card

**Message:** the linked list wins the textbook argument and loses the room — one jump against a walk, and
a pointer carried per node — so for most real work the array takes it.

This part closes the 21/22 pair and it is where the tranche's notation licence first appears, which is
exactly why the licence has to be written down per part: **41 and 42 may put notation on screen as the
lesson; 37 and 43 may use it only as a comparison label; 34, 35, 36, 38, 39, 40 and 44 may not write or
say it anywhere.** A builder must not read this file and conclude the ban was lifted for Day 4.

F1 is a claim the whole film has to pay for, so F2 is the array's case, F3 the list's case, and F4 is the
head-to-head the hook rests on.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 82 words → 25.3s speech + 6.0s air = **~31.3s**, mid
band. At pb-13's slow-word 3.04 w/s: ~27.0 + 6.0 = **~33.0s**, still inside. Nothing added, nothing cut.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.2s | Arrays win more often than textbooks admit. | Verbatim hook, and it is a dare. Do not soften `win`; the debate depends on the claim being arguable. |
| F2 | 6.5s | An array reads any index in one jump. The items sit in one block, and a chip reads a block fast. | `one jump` is quick, `one block` is the reason and gets the slower breath. The word `chip` is the CPU, said plainly. |
| F3 | 7.1s | A linked list inserts cheap, once you are at the node. Reaching that node is the walk. Every node carries a pointer too. | Three beats, one per drawn thing: the insert, the walk (said at walking pace), the pointer (flat, it is a bill arriving). |
| F4 | 5.9s | Ask the list for item five hundred and it walks, node by node. The array asks once and lands. | `five hundred` is the test, `walks` is long, `once and lands` is short. The last four words should arrive well before the frame ends. |
| F5 | 3.7s | When did you actually use a linked list at work? Be honest. | Verbatim CTA mechanic. `Be honest` is the whole ask and it is the plate on screen; say it without a smile. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 7 · F2 21 · F3 23 · F4 19 · F5 12 = **82 spoken words** → 25.3s speech + 6.0s air = **~31.3s
film** (~33.0s at pb-13's 3.04 w/s). No count is inside the VO: the hop number the ledger owns stays on
F4's screen, so the audio can be generated before the run returns. `SCRIPT.md` keeps exactly 5 lines, one
per frame, headings `## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `500` → "five hundred". `nums[499]` / `head.next…` → never read aloud; F4 says what they
do. The voice is never handed `O(1)`, `O(n)`, an arrow or a bracket — notation lives on the frame only, and
`frame-day2.md` § 9's spoken-form rule applies: if a line ever has to name the class out loud it says
"big O of n", never a symbol.

**Re-cut applied** (logged in full). User's explain: "Arrays give instant access by index and sit in one
contiguous block, which CPUs love." (15 words, plus the trailing relative clause § 9 bans) → F2's two
sentences, keeping both facts and their order, with `contiguous` replaced by `in one block` and the
clause rebuilt as `and a chip reads a block fast` — the reason stated instead of the enthusiasm.
"Linked lists make inserts and deletes cheap once you're at the node, but finding it is slow and each node
costs extra memory." (24 words, three clauses) → F3's three beats, nothing dropped: `inserts cheap`, the
walk, the pointer's extra room. "For most real work, arrays win." is **not** in the narration — it is the
hook's claim restated, so it lives on F4 as the counted comparison instead, and the film spends its 32
seconds earning it. `Access item 500: array O(1), linked list O(n)` became the F4 tag pair, with the
numbers the run must return moved to screen only, never to the VO.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 37`, `BEGINNER` badge, ligature guard everywhere.
**Zero coral** — no exception is raised in this part, and the debate's heat is carried by the labels.

**F1 (G1, also the cover).** Type alone, two groups: `arrays win` on the solid `--say` plate /
`more than textbooks admit` in muted ink (7 words max per group, and the muted second line is what makes
a still read as one claim). Nothing drawn: the two structures arrive on F2 and F3.
**F2 (G2b band, the array's case).** pb-21's five-chamber row at 0.5 scale in the upper band, values in
`--value` mint, index strip beneath in mono `--muted` (`0 1 2 3 4`, `data-layout-ignore`). Two beats: a
marker jumps **straight to index 3** with no other chamber moving (the same 0.3s `--say` flash pb-21 used,
so the callback is unmistakable) and a counted tag reads `1 JUMP`; then the five chambers get a single
`--line` bracket across their outer edges with a mono tag `ONE BLOCK`, and a small chip glyph to its right
labelled `CPU` whose border lights mint once as the voice says `fast`. One reading line:
`one block, read in one run` (ink on `one block`).
**F3 (G7 band, the list's case).** Lower band, pb-22's four-node chain at node scale, and the same three
facts drawn: a new node drops at the head with **only** the first connector redrawn and the tag
`MOVED 0` (against pb-21's `MOVED 4`); then the `--say` walk ring hops head → 1 → 2 → 3 while a mono
`STEPS` tag counts 1 2 3 on P9 `count-tick`, and the attempt to reach a fifth node is a dashed ghost
chamber off the band edge with the counter still climbing when the frame exits (pb-22's unfinished-walk
beat, kept because it is the better half of "slow"); third, each node's right cell gets a small mono tag
`+1 POINTER` — 4 nodes, 4 tags, countable, `--line` and not faint (WAVE2-PACKET § 4: anything a viewer
counts gets 0.16). One reading line: `cheap to add, priced to reach`.
**F4 (G4-split, the comparison — and the only frame in Day 4 with notation outside 41/42).** Two panels,
each with its own titlebar, array row band above the left panel and chain band above the right, both
dimmed to 0.42 skin with digits and node values at full ink:
```
left  : nums[499]        →  ⟪LEDGER:37b⟫ (printed value at that index, if shown)
        LABEL: O(1)      ·  tag `1 JUMP`
right : walk 499 links   →  ⟪LEDGER:37⟫ (the exact hop count for the 500th item)
        LABEL: O(n)      ·  tag `⟪LEDGER:37⟫ HOPS`
```
The two labels sit at identical size and identical y, one per panel: they are **comparison labels**, not
the lesson, which is the narrow form the ruling allows, and they are the only two occurrences of notation
in this film. The hop count and the printed value are ledger-pending; `499` in the right panel's mono line
is the same unresolved number and must not be typed from memory. Under the pair, the counted cost line in
mono `--muted`: `+ ⟪LEDGER:37c⟫ ROOM PER NODE` (the per-node overhead, or the tag is cut and the frame
carries only the two labels and two tags).
**F5 (G5, the Debate).** Headline `used one at work?` (15 characters, 4 words) at 6.4cqw in the 176px
band. Two chips `ARRAY` / `LINKED LIST` in `--panel-2` with 3px `--line`, **unselected** — the ring
travels between them and rests on neither (pb-10's finding, and pb-16's: answering a debate on screen ends
it). The mechanic verb plate is the user's own tail, `BE HONEST`, in solid `--say`. Badge
`PROGRAMMING BASICS · STRUCTURES I · 37 · BEGINNER`, sub line `item 500, two ways`.

**CTA card copy, verbatim and complete:** spoken `When did you actually use a linked list at work? Be
honest.` / headline `used one at work?` / chips `ARRAY` `LINKED LIST` / verb plate `BE HONEST` / badge line.

## Cover / title text

`arrays win more often` (4 words, the hook's opening claim) + badge
`PROGRAMMING BASICS · STRUCTURES I · 37` + `BEGINNER`. Amber plate on `win`. No notation on the cover:
the licence is for F4's comparison pair only, and a still cannot carry a hop count.

## Post copy

**Feed caption:**

    Arrays win more often than textbooks admit.
    An array reads any index in one jump, and its items sit in one block, which is how a chip likes to read.
    A linked list inserts cheap once you are at the node, but reaching that node is a walk, and every node carries a pointer too.
    Ask for item 500 and the array jumps while the list walks. When did you actually use a linked list at work? Be honest.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures`
**X:** `the textbook trade: insert at the front and the array shifts everything, the list relinks one node. ask for item 500 and the array jumps once while the list walks the chain, node by node, each one carrying a pointer the array never pays. arrays win more often than textbooks admit. where did you actually use a list at work? #python`
**LinkedIn:** the honest version of this argument is that arrays win on reads because a block of
neighbours is what a prefetcher is built for, and lists win where you already hold the node — and that in
Python a hand-rolled list loses to both, because `list` is a dynamic array and `collections.deque` is the
block-and-relink answer that ships in the standard library. Textbooks teach the list first because it is
easy to draw, not because it wins; `#python` `#programming` `#datastructures`

**Pinned comment:** `Mine is honest: never, as a class I wrote myself. Twice as a thing I used: a scheduler's ready queue where the head moves every tick, and an LRU chain - part 36 is exactly a doubly linked list with a map bolted to it. Where the array pays the other way is the insert: nums.insert(0, x) shifts the whole block, and deque.appendleft does not. ⟪LEDGER:37⟫ and ⟪LEDGER:37c⟫ hold the hop count and the per-node room, and ⟪LEDGER:37b⟫ any measured pair - if the run returns a timing, name the machine and the input size, because a locality claim without both is a vibe.`

## Accuracy

**Status: pending the Day-4 ledger run.** Three claims in this part are numbers and are placeholders: the
hop count to reach the 500th item (whether it is 499 or 500 depends on whether the list is 1- or
0-numbered, which is the kind of off-by-one the plan's `item 500` sentence hides), the printed value at
`nums[499]` if the left panel shows one, and the per-node room. **I have deliberately kept all three out
of the narration** so the VO can be generated before the run returns, and the film's argument survives the
numbers being wrong in either direction (walk many, jump once).

The CPU-locality claim (`a chip reads a block fast`) is a mechanism, not a measurement, and it ships in
the narration and the LinkedIn line as a reason rather than as a number. It earns no screen time beyond the
`ONE BLOCK` bracket and the `CPU` chip, and if the user wants it stated as a measured difference, that
needs `⟪LEDGER:37b⟫` and a named machine.

"Arrays win" is an opinion, and it is the user's; it is argued on screen by the counted tags, and the
Debate frame never answers it.

## Ledger dependencies

- `⟪LEDGER:37⟫` (F4 right panel + hop tag; also the pinned comment's copy) — the executed count of links
  followed to reach the 500th item of a 500-node chain, and which numbering the film assumes. Decide once
  and use the same number in the panel line, the tag and the comment.
- `⟪LEDGER:37b⟫` (F4 left panel) — the printed value at that index if a value is shown at all; if it is
  not run, the panel shows the index expression only and drops the arrow. Any measured array-vs-list
  timing the pinned comment cites also lands here, with machine and input size named.
- `⟪LEDGER:37c⟫` (F4 cost tag + pinned comment) — per-node overhead in this interpreter (e.g. the size of
  a node object against the size of the bare value it holds). If it does not come back clean, cut the tag:
  the frame already carries two counted tags and the narration line `Every node carries a pointer too`
  does not need a number.

## Gate state

Non-carrier, and it is the highest-risk frame in the tranche for **legibility of the notation pair**: two
`O(...)` labels at identical size in a phone-height frame, one mint, one ink, is the moment a learner
decides this part is not for them. Snapshot-read F4 first and check that both labels sit at the same y,
inside 230→1004, and that neither collides with the hop tag. Then: (1) the **walk ring** must travel
without the nodes shifting; (2) the four `+1 POINTER` tags must not merge into a bar at phone size; (3)
the off-band dashed ghost node may overflow **only** if it carries `data-layout-allow-overflow` (that is
the accepted keep-out case, not a defect); (4) F5 chips unselected, ring resting on neither; (5) exactly
two notation strings in the whole film, both on F4 — a third is a ruling violation.

Runtime expectation: **~31.3s** (band 29–34). Only the F4 numbers block on the ledger run; audio, F1/F2/F3
and F5 are independent.
