---
id: pb-27
order: 4
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Trees
slug: trees
project: videos/prog-basics-27-trees/
difficulty: B
mechanic: Quiz
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 88
target_length: ~33s             # 88 / 3.24 = 27.2s speech + 6.0s air; at 2.7 w/s ~38.5s
ceiling: 54s
grammar: G1 G11 G11 G4 G5
marks: G11 tree (new — the grid 28, 29 and 31 all inherit)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-21/02-row.html (node chamber) + pb-22/02-anatomy.html (bar/tab/chip) — the grid itself is new
---

# P27 · Trees · [B] · Quiz · code card

**Message:** a shape with one thing at the top and everything else below it by parentage — a node, a
child, a leaf — which is how folders, pages and org charts are all the same picture.

**The load-bearing part of the tranche.** G11's grid (node size, level y-values, column formula, elbow
connectors) is defined here for the first time *in pixels*, and parts 28, 29 and 31 bind to it rather
than redraw it. If this part's grid is wrong, four films are wrong. That is the no-carrier risk named in
bible § 0.1, and it is why the geometry lives in `frame-day3.md` § 6 and not in this file's prose.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 8 — `Your computer's folders are secretly a data structure.` | 2.5s | 3.0s | Verbatim. Land `secretly`. |
| F2 | 26 — `A tree is a hierarchy of nodes. A node is one box, holding one thing. One root at the top, and every node can have children.` | 8.0s | 9.6s | The middle sentence is added for the gloss law: `hierarchy` and `node` cannot both arrive un-glossed in a first-week part. Nodes drop in as it is said, parent first. |
| F3 | 25 — `A node with no children is a leaf. Folders, HTML pages, and org charts are all trees. This one has five nodes and three leaves.` | 7.7s | 9.3s | The user's own leaf gloss is the best sentence in the part — give it the whole beat. The last sentence is the counted one; land `three` on the mint digit. |
| F4 | 14 — `A list is one line. A tree branches, and each branch is another tree.` | 4.3s | 5.2s | The callback to 21 and 14. Say `each branch is another tree` slowly — it is recursion's shape again, minus the word. |
| F5 | 15 — `How many leaves if the root has 2 children and each child has 2 more?` | 4.6s | 5.6s | Verbatim CTA **even though it is 15 words** — CTA mechanics are not eligible for the ≤14 law (`CORRECTIONS-day3.md` § A). The frame carries it instead: the two conditions appear as drawn arrows, no count. |

**Total 88 spoken words → ~33.2s** — the top of the `[B]` band. The three spoken numbers in F3 are the
slow-rate risk: at 2.7 w/s this is ~38.5s and drifts into `[M]` territory. Take the measurement; report
the band it lands in rather than cutting words to hit a number.

**Spoken code:** `['L', 'R']` → "L and R" (a learner hearing "bracket L comma R" types it back wrong).
`nums[1]` → "nums at one".

**Re-cuts applied:** none. 27's four explain sentences measure 7, 11, 8 and 9 words — all pass. The only
over-law line in the part is the CTA, and it is untouchable (§ A).

## On-screen text and code treatment

**G11 grid — `frame-day3.md` § 6 is the authority. The short form:** node 148×96, `--panel`, 3px
`--line`, radius 22, value Space Grotesk 700 4.6cqw `--value`. Levels at **y 292 / 452 / 612 / 772**
(pitch 160; **four levels maximum** — an L4 would reach y 1028, inside the caption band). Columns per
level: `left = 72 + (936/n)/2 − 74 + i*(936/n)` → **n=1: 466 · n=2: 232, 700 · n=3: 154, 466, 778 ·
n=4: 115, 349, 583, 817**. Connectors are **elbows**: three axis-aligned 3px `--line` divs (down-stub,
run, up-stub) with the run at **y 420 / 580 / 740**; no diagonals, no SVG, no rotation on this mark.

**The example tree is NOT the CTA's tree.** Drawn here: `root → (L, R)` where **L has two children and
R has none** → executed **5 nodes, 3 leaves, 3 levels**. The CTA asks about the symmetric case (7 nodes,
4 leaves), which is *not drawn anywhere on this film* — otherwise F5 answers the quiz on screen (pb-11's
rule).

**F1 (G1).** Type alone: `your folders` then `are secretly a data structure`, amber sweep on `secretly`.
Kicker `PROGRAMMING BASICS · BASICS III · 27`. No tree.
**F2 (G11, built downward).** Root chamber arrives first at (466, 292) with a G2 name tab reading `ROOT`
(mono 2.5cqw `--ink` on `--panel-2`, h 38), then the two L1 nodes at 232 and 700 (y 452) — **one node
per clause**, each on P2 `drop-in`, and after each pair an elbow draws in three 0.14s stages (stub → run
→ stub) so an edge is *built*, not shown. `CHILD` chips appear under the two L1 nodes (`--muted`,
`data-layout-ignore`).
**F3 (G11, leaves + chips).** Two more nodes drop in under **L only**, at 154 and 466 (y 612, the n=3
column set is *not* used here — these are two children of one parent, so they use 115 and 349 from the
n=4 set to sit under their own parent; the worker places them under L and snapshot-checks the elbows do
not overlap). Each childless node gets a `LEAF` chip under it — **three chips, and no chip on L** (L has
children; that is the definition being drawn). Right edge: a chip row `FOLDERS` / `HTML` / `ORG CHART`
in `--panel-2` mono `--muted`, `data-layout-ignore` — three **chips**, because nothing about a DOM or an
org chart was executed here (bible § 4d). Counted tags in the lower lane (y 892):
`NODES 5` (left 270 / w 300) and `LEAVES 3` (left 590 / w 220) — pb-21's authored widths.
**F4 (G4 split).** Two chambers side by side, each ≤3 lines, each with a titlebar and a `PYTHON` chip,
cloned from `videos/prog-basics-10-switch/compositions/frames/04-two-languages.html`:
```
left  list.py                        right  tree.py
nums = [1, 2, 3]                     kids = {'root': ['L', 'R']}
print(nums[1])   # 2                 print(kids['root'])  # ['L', 'R']
```
Both outputs executed here (`2`, `['L', 'R']`), shown mint on each terminal strip. The left chamber gets
a mono caption chip `ONE LINE` and the right `BRANCHES`. A small CSS brace-bar under `['L', 'R']` with a
`each a node` chip makes "each branch is another tree" a thing you can see rather than a clause.
**F5 (G5).** Headline `count the leaves` at 6.4cqw in a 176px box (14 chars ✓), mechanic verb plate
`COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 27 · BEGINNER`. Behind the
headline, dimmed via § 1's background/border rule, **the CTA's own shape drawn** (root → two → four)
with a `?` chip on the lower lane and **no number anywhere** — the structure is the hint, the count is
the viewer's job.

## Cover / title card

`folders are a tree` (4 words, cut from the hook) + badge `PROGRAMMING BASICS · BASICS III · 27` +
`BEGINNER`. Amber plate on `a tree`. No tree on the cover — F1 is type plus badge, per § 8.

## Post copy

**Feed caption:**

    Your computer's folders are secretly a data structure.
    A tree is a hierarchy of nodes: one root at the top, and every node can have children. A node with no
    children is a leaf. Folders, HTML pages and org charts are all this shape.
    How many leaves if the root has 2 children and each child has 2 more?

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#trees`
**X:** `your folder tree is a data structure. one root, every node can have children, and a node with no
children is a leaf. a list is one line; a tree branches and each branch is another tree - which is what
made part 14 recurse. quiz: root with 2 children, each with 2 more - how many leaves? #python`
**LinkedIn:** every "how does this system hang together" diagram is a tree until someone adds a shared
dependency, and then it is a graph — which is part 30, and the reason the distinction matters in
architecture reviews rather than exams. `#python` `#programming` `#datastructures`

**Pinned comment:** `Four. The root has 2 children and each of those has 2, so the bottom row is 4 nodes and none of them has a child - that is what makes them leaves. The full count is 7 nodes, 4 leaves, 3 levels, and 6 edges (checked by building it in Python, not by guessing). Two edges people fall on: (1) a tree with only a root has 1 leaf - the root has no children, so by the definition in the video it is a leaf; (2) 3 levels is 2 edges deep, so if someone says "depth 3" and someone says "depth 2" both are counting something real and should say which. The shape in the video is deliberately not this one - it had 5 nodes and 3 leaves. Parts 28, 29 and 31 are the same picture with a rule added.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): the drawn tree (`root → L, R`; `L → L1, L2`) has
**5 nodes, 3 leaves** (`L1`, `L2`, `R`) and 3 levels; the CTA's symmetric tree has
**7 nodes, 4 leaves, 6 edges, 3 levels**; a lone root is **1 leaf**. Both chambers' outputs are executed:
`nums[1]` → `2` and `kids['root']` → `['L', 'R']`.
`Folders, HTML pages, and org charts are all trees` is a **concept claim, not executable here**, so it is
three chips and a voice line — no DOM was touched, no filesystem walked, and nothing on the frame says
otherwise (bible § 4d, `frame-day3.md` § 7.3).

## Gate state

**G11 is unbuilt, and 28/29/31 copy it. This is the frame set to read first.** Snapshot order:
(1) **the column formula** — verify n=2 lands at 232/700 and n=4 at 115/349/583/817 with right edges
inside 1008, and that a node's centre actually sits above its children's midpoint; (2) **the elbow run at
y 420/580/740** — two runs at the same y and overlapping x must merge or visibly separate, not cross
into a knot at phone size; (3) **four levels is the ceiling** — if a worker needs a fifth, the answer is
a counter, not a taller tree, and that is a report, not a fix; (4) `LEAF` chips on exactly three nodes
and **not** on `L`; (5) the F5 diagram carries no digit. Report any authored number that does not
survive the pixels (bible § 0.1: no carriers, so this file is the only proof G11 will get before four
other parts copy it).
