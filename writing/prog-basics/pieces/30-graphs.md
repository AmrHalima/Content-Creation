---
id: pb-30
order: 7
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Graphs
slug: graphs
project: videos/prog-basics-30-graphs/
difficulty: B
mechanic: Debate
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 88
target_length: ~33s             # 88 / 3.24 = 27.2s speech + 6.0s air; at 2.7 w/s ~38.6s
ceiling: 54s
grammar: G1 G12 G12 G3 G5
marks: G12 graph (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-22/02-anatomy.html (.g7-bar / .g7-chev / .g7-chip) + 27's node chamber for the vertices
---

# P30 · Graphs · [B] · Debate · code card

**Message:** nodes with lines between them, and that is the whole structure — which is why a map, a
friend list and the web are the same object, and why walking one needs a memory of where you have been.

The only Day 3 part where the diagram can **fail**. A tree never loops back on itself; a graph does, and
the executed proof of that is part 12's infinite loop arriving in a new costume. That beat is what makes
this part more than three circles and three lines.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 10 — `Maps, friendships, and the internet are all the same structure.` | 3.1s | 3.7s | Verbatim. The triad is read flat — the enumeration *is* the subject, and it reappears as three chips. |
| F2 | 26 — `A graph is nodes connected by edges. Edges can have direction or weights. A node is a thing; an edge is a line to another thing.` | 8.0s | 9.6s | The user's two sentences are 7 and 6 words and pass; the third is added for the gloss law, because both technical nouns arrive in the same seven-word breath. |
| F3 | 31 — `Social networks, road maps, and the web are graphs. Most 'find the best route' problems are graph problems. But an edge can lead back where you started. Then walking never stops.` | 9.6s | 11.5s | Two user sentences, then the danger in two short beats of my own. Land `never stops` on a counter that is still climbing when the frame cuts. |
| F4 | 12 — `Three nodes, three edges. The walk stops when a node looks familiar.` | 3.7s | 4.4s | The fix, stated as a memory rather than as code vocabulary — no "visited set" phrase in the voice. |
| F5 | 9 — `Name something in daily life that's secretly a graph.` | 2.8s | 3.3s | Verbatim CTA. |

**Total 88 spoken words → ~33.2s** — the top of the `[B]` band, and at the slow rate ~38.6s it drifts
into `[M]`. Take the measurement; report it; do not cut narration. F3 is the long frame (9.6s) — if its
four beats crowd the window, the lever is F3's **shape** (split the two danger beats across F3 and F4's
arrival), decided once across the tranche rather than silently in one project.

**Spoken code:** `edges['A']` → "A's neighbours". `['B', 'C']` → "B and C". `False` → "false", and it is
said as a fact about direction, not as an error. `A → B` → "A to B".

**Re-cuts applied:** none to the user's copy. 30's four explain sentences are 7, 6, 9 and 9 words; all
pass the ≤14 law (`CORRECTIONS-day3.md` § A). The two authored beats in F3 are Day 1/Day 2 precedent for
example narration.

## On-screen text and code treatment

**G12 geometry is `frame-day3.md` § 6 — cite it, do not re-derive.** Nodes are 27's 148×96 chamber at
**A left 115 / y 360, B left 673 / y 360, C left 394 / y 700** (centres 189,408 · 747,408 · 468,748).
Connectors are **edge-to-edge `.g7-bar` divs with authored literals**, never centre-to-centre and never
SVG: `A→B` left 263 / top 406 / width 410; `A→C` left 240 / top 470 / width 280 / `rotate(50.6deg)`;
`B→C` left 696 / top 470 / width 280 / `rotate(129.4deg)`; all with `transform-origin: left center`.
Each far end carries an 11×11 `.g7-chev` (borders only). Letters `A B C` in Space Grotesk 700 6.2cqw
`--value`.

**F1 (G1).** `maps` / `friendships` / `the internet` as three groups, then `all the same structure` with
`same structure` on the amber plate. No circles.
**F2 (G12, built).** Three nodes drop in (P2, one per named thing), then each edge **draws itself** (P8)
as it is named — `A→B`, `B→C`, `A→C` — so by the end of the frame the user's example is on screen in the
user's order. Gloss chips go on the objects, not in a caption: `NODE` on each chamber's name tab and
`EDGE` at each bar's midpoint (`--muted`, `data-layout-ignore`) — the frame does the glossing the two
short sentences cannot fit (§ B). `DIRECTION` appears as a single chevron lights at the far end of one
bar, and `WEIGHT` as a `--panel-2` chip with `7` in mint at `A→B`'s midpoint.
**F3 (G12, the danger).** Two beats, same board, and this is the part's only real motion:
```
route : a ring travels A -> C (the direct edge, weight 2) and A -> B -> C (7 + 4). Tag pair on the upper
        lane (y 288): DIRECT 2 (left 270 / w 300) and VIA B 11 (left 590 / w 220) — pb-21's authored tag
        positions. Executed both ways, and 2 < 11 is the reason route-finding is a graph problem.
cycle : now A -> B -> C -> A -> B -> C ... with the ring circling and WALKED ticking past 3, 6, 9, 12
        while a mono tag reads NO END. The tag is --muted, and there is NO CORAL anywhere: the danger is
        the number, not a colour (§ 7.1 — Day 3 raises no error and shows none).
```
Counted tags for the part are `EDGES 3` / `WALKED 12` (bible § 4b). `DIRECT 2` / `VIA B 11` are the
*route* pair on the same frame; if two pairs will not both fit legibly, the shape lever is to move the
route beat to F2 — decided once, across the tranche, and reported.
**F4 (G3).** `main.py`, chip `PYTHON`, three lines + terminal (cap 4; every line executed here):
```
edges = {'A': ['B', 'C'], 'B': ['C'], 'C': []}
print(edges['A'])          # ['B', 'C']
print('A' in edges['B'])   # False
```
stdout `['B', 'C']` and `False`, both mint (a printed value, not an error — § 1's role for `--value`).
P3 `type-on`. Ligatures off. The `False` line **is** the gloss for "direction": B does not know about A.
Beside the chamber, the fix drawn small: three `SEEN` tabs landing one per node, and the ring stopping at
three.
**F5 (G5).** Headline `what else is?` at 6.4cqw in a 176px box (11 chars ✓), mechanic verb plate
`COMMENT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 30 · BEGINNER`. Behind it, the
triangle at 0.62 scale in `--muted` hairlines with **no labels and no letters** — an invitation to
over-write it with their own example, and no answer to anything.

## Cover / title card

`everything is a graph` (4 words, cut from the hook) + badge `PROGRAMMING BASICS · BASICS III · 30` +
`BEGINNER`. Amber plate on `a graph`. No triangle on the cover.

## Post copy

**Feed caption:**

    Maps, friendships, and the internet are all the same structure.
    A graph is nodes connected by edges. Edges can have direction, or they can carry a weight — and then
    the cheapest route is not the shortest one. One warning the picture hides: an edge can lead back to
    where you started, so a walk needs a memory of where it has already been.
    Name something in daily life that's secretly a graph.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` #graphs
**X:** `your friends, your city's roads and the whole web are the same object: dots with lines between
them. an edge can have direction - b knows about c but not about a - or a weight, so A to C costs 2
direct and 11 through B. one catch: an edge can lead back where you started, and then the walk never
stops. name something in daily life that's secretly a graph #python`
**LinkedIn:** "find the best route" is a graph problem in disguise more often than teams expect — the
dependency graph, the call graph, the service map, the approval chain. The part that bites in production
is the cycle: something calls back around to itself and the traversal that assumed a tree does not
terminate. `#python` `#programming` `#datastructures`

**Pinned comment:** `Honest concession first: a tree IS a graph — specifically one with no cycles and exactly one path between any two nodes. Add one edge back to an ancestor and you get two ways to reach the same place, which is what breaks a naive walk. Second: direction is the part people code wrong. edges = {'A': ['B','C'], 'B': ['C'], 'C': []} means B reaches C but not A - 'A' in edges['B'] is False here - so a friendship graph needs both directions stored (or an undirected helper) while a follow graph does not. Third, why the walk above never stops: on A->B->C->A with no memory, every node has a next one forever. Keep a seen set and the same loop visits 3 and ends; that is breadth-first search in one line. And weights change the answer: A->C direct costs 2, A->B->C costs 7 + 4 = 11, so the one-hop route is cheaper here and the route-finding algorithms exist for the cases where it is not. Daily-life answers that hold up: a follower graph, a package dependency tree gone wrong, the Metro, your board's Slack threads, the DNS.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): `edges = {'A': ['B','C'], 'B': ['C'], 'C': []}` →
**3 nodes, 3 edges**; `edges['A']` → `['B', 'C']`; `'C' in edges['A']` → **True**;
**`'A' in edges['B']` → False** (direction, executed). Weights: `w['A']['B']` → **7**, `A→C` direct
**2**, via B **11**. BFS with a seen set over `A→B→C→A` visits **`['A','B','C']`** and stops; the same
walk **without** one produces `A → B → C → A → B → C → A → B → C → A → B → C` and does not terminate —
that is `WALKED 12` on screen, and it is executed, not staged. Adding one edge to a tree
(`{'root': ['L','R'], 'L': ['R'], 'R': []}`) creates **two** ways to reach `R`, which is the pinned
comment's concession that a tree is a graph.
`Social networks, road maps, and the web are graphs` and `most 'find the best route' problems are graph
problems` are concept claims → **chips and voice, never chambers** (bible § 4d).

**Two screen-text constraints** (`CORRECTIONS-day3.md` § B): `NODE`/`EDGE` chips do the glossing the two
short sentences cannot carry, and the cycle beat is told by a counter in `--muted` with **no coral, no
red dot and no warning triangle**.

## Gate state

**G12 is unbuilt, and its rotated bars are the only `transform` on an absolutely positioned element in
the tranche.** Snapshot-read in this order: (1) each bar's far end lands on a node **border**, not inside
a chamber and not under a letter — if a bar crosses a digit it was authored centre-to-centre and the
anchor math in `frame-day3.md` § 6 was skipped; (2) `transform-origin: left center` present in the CSS
**and** not overridden by a GSAP tween (known-traps § 11: CSS and GSAP disagree on origin syntax);
(3) the three edges do not visually merge with the dot-grid at phone size (they are `--line` 0.16 for
that reason — if they still read as noise, that is a **report**, not a licence to go to 0.24 or to add
SVG); (4) `WALKED` climbing past 3 is legible as the point, not as a broken counter; (5) zero coral
pixels. Cap holds at 4 nodes / ≤5 edges / ≤1 crossing — the triangle has zero, so a worker who wants a
fourth node places it outside the hull (a legal slot is left 115 / y 700 with the anchor literals
recomputed the same way) and reports it.
