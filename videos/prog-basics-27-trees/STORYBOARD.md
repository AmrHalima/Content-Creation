---
format: 1080x1920
duration: 35.5s
message: "a shape with one thing at the top and everything else below it by parentage — a node, a child, a leaf — which is how folders, pages and org charts are all the same picture"
arc: hook (folders) → the grid built downward (root, children, edges) → leaves + real-world chips + the count → list versus tree as two chambers → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 27 of 33
identity: bench-v3.0
---

# STORYBOARD — prog-basics-27-trees (prog-basics, part 27 of 33)

English master, portrait 1080x1920, `[B]` band 29-34s (ceiling 54s). Day 3 / BASICS III, STRUCTURES.
Copy source of record: `writing/prog-basics/pieces/27-trees.md`. Shape: `series-bible-day3.md` § 0/§ 2/§ 4.
Grammar: `frame-day3.md` § 5 (inherited G1/G2/G4/G5) and **§ 6 G11 `tree` — first draw anywhere; parts
28, 29 and 31 bind to this grid rather than redraw it.**

> **Durations are measured.** `studio voice` ran at the house 0.93 and printed **88 words over 5 lines /
> 29.439s of speech = 2.99 words/second** — between the two bracketing estimates, nearer the slow
> digit-heavy end than the tranche average. Each `- duration:` below is that measurement plus authored air
> (~1.0s per frame, 2.0s on F5) so every 0.5s crossfade sits inside silence and no sentence spans a cut.
> The resulting film is **35.5s**, which is **over the `[B]` band (29-34s)** by 1.5s. No word was cut,
> added or moved to reach the band (`BRIEF.md` → Runtime; the piece file's own delivery note asks for the
> measurement, not the number). Word onsets come from `studio cues` and every emphasis time in the frame
> files cites one of them.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber `#FFD166` =
the word being said, mint `#5AD6A0` = a value or what printed, `#9BA6B2` = chrome. **Part 27 raises no
error, so this film ships with zero coral** (`--err` appears nowhere in it). Every frame carries at least
two § 9 primitives and the ligature kill-list. Content lives between y 230 and y 1004; captions sit at
1024-1344; 1344-1920 stays empty.

## The mark this part draws (G11, first build)

`frame-day3.md` § 6 is the authority; these are the numbers this frame set uses, so 28/29/31 can bind to
the same board instead of re-deriving it.

- **Node** 148×96, `--panel` `#1F242C`, 3px `--line`, radius 22, G2 shadow. Value Space Grotesk 700 mint:
  6.2cqw for a single letter, 4.6cqw for `root` / `L1` / `L2`.
- **Levels** L0 y 292 · L1 y 452 · L2 y 612 · L3 y 772. Four is the ceiling (an L4 would reach 1028,
  inside the caption band). This film uses three.
- **Columns** `left = 72 + (936/n)/2 − 74 + i*(936/n)`: n=1 → 466 · n=2 → 232, 700 · n=4 → 115, 349,
  583, 817. Node centre = left + 74, so the root's centre is 540, `L`'s is 306 and `R`'s is 774; `L`'s
  two children sit at centres 189 and 423, whose midpoint is exactly **306** — the parent is above its
  children's midpoint, which is the property § 6 asks a snapshot to prove.
- **Elbows** three axis-aligned 3px `--line` divs per edge: down-stub (parent centre-x, parent bottom →
  runY), run (parent centre-x → child centre-x at runY), up-stub (child centre-x, runY → child top).
  **runY = 420 / 580 / 740**; stubs are 32px. No diagonals, no SVG, no rotation. Two runs of one parent
  share the y and meet at the parent's centre-x, so they read as one bracket, never a knot.
- **ROOT tab** mono 700 2.5cqw `--ink` on `--panel-2`, h 38, radius `12px 12px 0 0`, seated inside the
  node's top edge (a tab above the node would collide with the kicker band, which runs to x ≈ 529).
- **Chips** `NODE` / `EDGE` / `CHILD` / `LEAF` / `FOLDERS` / `HTML` / `ORG CHART` — mono 1.85cqw
  `--muted`, `data-layout-ignore`, never a number, never a colour role. `LEAF` only on childless nodes.
- **Counted lane** y 892 h 66, `--ink` labels with mint digits on P9 `count-tick`.
- **Ring** 168×116 3px `--say` at `node.left − 10`, one node per spoken clause; it is this film's only
  amber arrival on F2/F3.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 with breathing glows, every ambient loop starting and ending at
its own zero so a cut never resets the board. Cuts wipe from a different edge per frame and push out
inside the authored silence, so no sentence spans a cut. The tree is the same board from F2 to F3: F3
opens holding exactly what F2 ended with, then grows.

## Frame 1 — The hook (G1)

- scene: type alone on graphite, four display lines at 8.4cqw — `your computer's` / `folders are` / `secretly` / `a data structure.` — with the amber P1 sweep behind `secretly` and, when the sweep completes, the amber becoming that token's own background with the type flipped to `--say-ink` in the same tick. Kicker `PROGRAMMING BASICS · BASICS III · 27` + `BEGINNER` badge. No tree, no diagram, no illustration (G1 and § 8).
- duration: 4.2s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: folders are a picture
- voiceover: "Your computer's folders are secretly a data structure."
- sfx: none

## Frame 2 — The grid, built downward (G11, first draw)

- scene: the root box drops into the n=1 column (466, 292) with a `NODE` chip beside it — that is the `node` gloss, on the object, while the voice says "one box, holding one thing". On "One root at the top" the `ROOT` tab seats on the node's top edge and the `--say` ring closes around it. Then the two children drop at (232, 452) and (700, 452), one per clause, each followed by its elbow building in three 0.14s stages (down-stub → run → up-stub) at runY 420, so an edge is *built* rather than shown; a `EDGE` chip lands on the first run (the word the voice never says). `CHILD` chips flank the two new boxes. Wipe in from below.
- duration: 9.3s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-grid.html
- type: mechanism
- beat: one root, then children
- voiceover: "A tree is a hierarchy of nodes. A node is one box, holding one thing. One root at the top, and every node can have children."
- sfx: none

## Frame 3 — Leaves, real trees, the count (G11)

- scene: opens holding F2's whole board (root, two children, two elbows) and grows two more boxes under `L` only, at centres 189 and 423 (lefts 115 / 349 from the n=4 set, chosen so they sit under their own parent and their run at y 580 never touches `R`'s column). On "no children" the `--say` ring visits the three childless boxes at a walk, and each gets its `LEAF` chip under it with a mint border light as it is named — `L` gets no chip, because `L` has children, and that absence is the definition. On "Folders, HTML pages, and org charts" three `--panel-2` chips arrive at the right of the field (chips, not chambers: nothing about a DOM or a filesystem was executed here). On the last sentence the counted lane fills: `NODES 5` (left 270 / w 300) then `LEAVES 3` (left 590 / w 220), digits ticking on P9 and the `three` digit lit mint. Wipe in from the right.
- duration: 10.4s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-leaves.html
- type: mechanism
- beat: a leaf, and the count
- voiceover: "A node with no children is a leaf. Folders, HTML pages, and org charts are all trees. This one has five nodes and three leaves."
- sfx: none

## Frame 4 — A list is one line, a tree branches (G4 split)

- scene: two chambers side by side, each with a 64px `--panel-2` titlebar, a muted filename and a `PYTHON` chip, each ≤2 code lines, typed on under travelling carets (P3) — `list.py`: `nums = [1, 2, 3]` / `print(nums[1])`; `tree.py`: `kids = {'root': ['L', 'R']}` / `print(kids['root'])`. Both outputs are executed on this machine and print mint on a `--panel-2` strip under its own chamber: `2` and `['L', 'R']`. Mono caption chips read `ONE LINE` (left) and `BRANCHES` (right). On "another tree" an amber sweep runs under `['L', 'R']` in the code line and a small CSS brace-bar with an `each a node` chip appears under it, so "each branch is another tree" is a thing you can see rather than a clause. The API word `root → (L, R)` never enters a chamber; it lives in the diagram on F2/F3 and as the dict key here. Wipe in from the left.
- duration: 5.6s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-list-vs-tree.html
- type: example
- beat: proof, in two lines each
- voiceover: "A list is one line. A tree branches, and each branch is another tree."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: headline `count the leaves` (16 characters, 6.4cqw in a 176px box), the mechanic verb plate `COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 27 · BEGINNER`, kicker ending `THE ASK`. Behind the headline, on the same G11 grid and dimmed by § 1's background/border rule (never opacity), **the CTA's own shape drawn**: root at 466/292, two children at 232/700 on y 452, four at 115/349/583/817 on y 612, elbows at runY 420 and 580 (the two L1→L2 runs span 189..423 and 657..891 and never overlap). No digit appears anywhere on this frame — the silhouetted boxes carry no values — and the lower counted lane holds a single `?` chip in the slot where `LEAVES 3` sat. The quiz is answered by the viewer counting, not by the film. It holds alone under the platform chrome, no exit push.
- duration: 6.0s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "How many leaves if the root has 2 children and each child has 2 more?"
- sfx: none

## Real durations

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.200 | 4.2 | 8 | 0s → 2.80s |
| F2 | 8.277 | 9.3 | 26 | 0s → 7.98s |
| F3 | 9.408 | 10.4 | 25 | 0s → 9.16s |
| F4 | 4.565 | 5.6 | 14 | 0s → 4.32s |
| F5 | 3.989 | 6.0 | 15 | 0s → 3.74s |
| **film** | **29.439 speech** | **35.5** | **88** | |

Air ~1.0s at each cut (2.0s on the last frame, which loops under the platform's chrome) so the 0.5s
crossfade sits inside silence and no sentence spans a cut. Measured rate **2.99 words/second** at the
house `af_heart` 0.93. The film is **35.5s — above the `[B]` band (29-34s), inside the 54s ceiling**, and
`BRIEF.md` → Runtime records why nothing was cut to reach the band: F3 alone carries 25 words and three
of the part's numbers (9.4s measured), which is the digit-heavy slow end the tranche brief predicts.
