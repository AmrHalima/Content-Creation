---
id: pb-28
order: 6
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Binary search trees
slug: binary-search-trees
project: videos/prog-basics-28-binary-search-trees/
difficulty: M
mechanic: Quiz
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 99
target_length: ~37s             # 99 / 3.24 = 30.6s speech + 6.0s air; at 2.7 w/s ~42.6s (top of [M])
ceiling: 54s
grammar: G1 G11-bst G14 G3 G5
marks: G11-bst (new, inherits 27's grid) · G14 halving field (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed-with-constraint
clone_source: 27's G11 frames (the grid) + pb-21/03-shift.html (tag lane, stagger) for G14's arrival clock
---

# P28 · Binary search trees · [M] · Quiz · code card

**Message:** a tree with a rule — smaller left, larger right, at every node — so each look throws away
half of what is left, and a million items is twenty looks instead of a million.

Two new marks at once, and one of them (G14) is the densest frame in the series. The part is also the
tranche's Big-O battleground: the hook is a counted walk already, `log n` is said exactly **once** in the
whole part, and **no notation appears anywhere on screen** (bible § 0.2).

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 8 — `Search a million items in about twenty steps.` | 2.5s | 3.0s | Verbatim. `a million` and `twenty` are the two numbers the frame then proves; say them evenly and let G14 do the convincing. |
| F2 | 29 — `A binary search tree keeps smaller values on the left. Larger ones go on the right, at every node. The root is eight. Search for three. Left, then left.` | 8.9s | 10.7s | The user's 18-word sentence split into 10 + 9 (re-cut 4). Then three short beats, one per node the ring lands on: `eight`, `four`, `three` each arrive on their own breath. |
| F3 | 30 — `At each step you discard half the tree. If the tree stays balanced, a lookup takes about log n steps. One million, then five hundred thousand, then down to one.` | 9.3s | 11.1s | The **one** allowed `log n`, inside the user's own hedge — do not paraphrase it and do not repeat it. The last sentence is the field: read the big numbers slowly, they are on screen as you say them. |
| F4 | 19 — `Here is that tree as code. It looks at three boxes and stops. That is what twenty means for a million.` | 5.9s | 7.0s | Land `three boxes` on the mint output and `twenty` on the field's last row still being visible behind the chamber. |
| F5 | 13 — `What happens if you insert 1, 2, 3, 4, 5 in that order?` | 4.0s | 4.8s | Verbatim CTA. Read the numbers as a list being typed, one per beat. |

**Total 99 spoken words → ~36.6s** — mid `[M]` band. At the slow number-heavy rate it reaches ~42s, the
top of the band; still 12s under the 54s ceiling, so **take the measurement and do not cut narration to
hit 34** (bible § 0.3). Report the band it actually lands in.

**Spoken code:** `t[1][1][0]` → "then left, then left" — the brackets are *never* spelled out (pb-22's
precedent: the double bracket is the hop, and saying "one one zero" destroys the lesson). `None` →
"nothing". `print` → "print".

**Re-cut applied** (`CORRECTIONS-day3.md` § A, re-cut 4): the 18-word compound split into 10 + 9, which
also puts `at every node` on its own beat — that is the part's actual rule, not decoration.

## On-screen text and code treatment

**G11-bst is 27's grid, not a new grid:** node 148×96, levels y 292/452/612, column lefts n=1 → 466,
n=2 → 232/700, n=3 → 154/466/778, elbow runs at y 420/580. Full spec in `frame-day3.md` § 6.
The tree drawn is the executed one: **root 8 → 4 (left), 12 (right); 4 → 3 (left), 6 (right)** — built by
inserting `8, 4, 12, 3, 6`.

**F1 (G1).** `a million items` then `about twenty steps`, amber plate on `twenty steps`. No field, no
tree — G14 is F3's entrance.
**F2 (G11-bst + the ordering law + the search).** Nodes drop in parent-first (P2), elbows draw in three
stages. `SMALLER` chips sit on the up-stub of every left edge and `LARGER` on every right edge (mono 700
1.85cqw `--muted`, `data-layout-ignore`) — the gloss law done by the frame, in the same breath as
"smaller values on the left". Then the search: a 168×116 `--say` ring at `node.left − 10` travels
**8 → 4 → 3**, and each discarded subtree dims via § 1's background/border rule (digits to
`rgba(244,241,234,0.62)`, never container `opacity`). `12` dims on "left", `6` dims on the second "left".
Counted tag (upper lane y 288, pb-21's widths): **`STEPS 3`** ticking 1, 2, 3 on P9 with the ring.
Two amber arrowheads mark the two lefts; **the turns are never numbered** (§ B: the ledger says two turns
visit three nodes, and two counts for one walk is the finding to avoid).
**F3 (G14 halving field — the hook proved).** Twenty rows, pitch 36, row h 30, first top 250, last 934
(bottom 964, inside the floor). Per row: a number lane at left 744 width 264, right-aligned, mono 700
2.9cqw `--value`; and a bar at left 72, height 30, `--panel-2` with a 3px `--line` left edge, authored
width:
```
660 627 594 561 528 494 461 428 395 362 329 296 263 229 196 162 129 93 52 8
values: 1,000,000 500,000 250,000 125,000 62,500 31,250 15,625 7,812 3,906 1,953 976 488 244
        122 61 30 15 7 3 1        (all twenty executed; 15,625 -> 7,812 is a floor)
```
Rows arrive **top-down on the same clock as the counter**, nothing scales, no width tweens. `STEPS`
ticks 1→20 in the upper lane. Two chips, both `--muted` + `data-layout-ignore`: **`LOG SCALE`** under the
bar lane (the ramp is a log axis, and the frame says so rather than letting a bar pretend to be a count)
and **`FLOOR`** with a 3px `--line` bracket on row 7. **No amber on this frame** — there is no single
word the voice is on for twenty consecutive rows, so the keyword sweep belongs to F1 and F4 only. The
first seventeen bars shorten by exactly 33px each: that constant step *is* the picture of "about twenty".
**F4 (G3).** `main.py`, chip `PYTHON`, four lines + terminal (the cap, and every line executed):
```
t = (8, (4, (3, None, None), (6, None, None)), (12, None, None))
print(t[0])           # 8
print(t[1][0])        # 4
print(t[1][1][0])     # 3
```
stdout `8`, `4`, `3` in mint. The nested tuple is the honest executable form — a real `class Node` with
insert and search is ten lines and G3 caps at four (pb-22's ruling, still true, and here the bracket
chase *is* the search path: `t[1][1]` is left-then-left). **Ligatures off** or `None, None` is fine but
any `<=` in the frame is not. A small CSS brace-bar under `t[1][1]` tagged `left, then left`.
Right edge: the 20th field row still visible, dimmed via § 1, so `twenty` has something to point at.
**F5 (G5).** Headline `what did you build?` at 6.4cqw in a 176px box (18 chars ✓), mechanic verb plate
`COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 28 · INTERMEDIATE`. Behind, the
five numbers as a **plain row of chips** `1 2 3 4 5` with a `?` chip over them — the input shown, the
shape **not** shown. Drawing them as a chain, a tree, or a line answers the quiz on screen (pb-11's rule,
and here the shape *is* the answer).

## Cover / title card

`a million, twenty steps` (4 words, cut from the hook) + badge `PROGRAMMING BASICS · BASICS III · 28` +
`INTERMEDIATE`. Amber plate on `twenty steps`. No field on the cover.

## Post copy

**Feed caption:**

    Search a million items in about twenty steps.
    A binary search tree keeps smaller values on the left and larger on the right, at every node. So each
    look throws away half of what is left. If the tree stays balanced, a lookup takes about log n steps —
    and for a million, twenty looks is the whole story.
    What happens if you insert 1, 2, 3, 4, 5 in that order?

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#algorithms`
**X:** `a million items in twenty steps. smaller goes left, larger goes right, at every node - so every
look throws away half of what is left. 1,000,000 then 500,000 then 250,000 all the way down to 1: twenty
rows, twenty looks. now insert 1 2 3 4 5 in that order and tell me what you built #python`
**LinkedIn:** the interview question is never "recite the height formula", it is "what happens when your
input arrives sorted" — and the answer is that the tree quietly becomes the list you were trying not to
walk. `#python` `#programming` `#datastructures`

**Pinned comment:** `A straight line. Insert 1, 2, 3, 4, 5 in that order and every value is bigger than the last, so every one goes right and no node ever gets a left child. Checked by building it: the tree has 5 levels and finding 5 costs 5 looks - the same walk as the linked list in part 22, wearing a tree costume. The same five numbers inserted as 3, 1, 5, 2, 4 give a tree that finds 5 in 2 looks. That gap is the entire reason self-balancing trees exist (AVL, red-black): they rotate as you insert so sorted input does not flatten them. Two honest footnotes: "about twenty" is 1,000,000 halved down to 1, which is 20 rows and 19 halvings - both true, they count different things; and finding 3 in the video's tree is 2 left turns across 3 nodes, which is why the counter on screen says STEPS 3 and counts boxes looked at, not turns.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): insertion of `8,4,12,3,6` gives root 8 with left 4 and
right 12, and finding 3 walks **8 → 4 → 3** = **3 nodes visited / 2 left turns**.
`ceil(log2(1_000_000))` → **20**; `2**20` → `1,048,576`; the floor-halving chain from 1,000,000 to 1
passes through **exactly twenty values** (listed in F3 above) in 19 halvings. Chamber outputs `8`, `4`,
`3` — all printed here. Degenerate insertion `1,2,3,4,5`: **no left child anywhere**, 5 levels, `find(5)`
visits **5**; balanced insertion `3,1,5,2,4` visits **2**.

**Two screen-text constraints** (`CORRECTIONS-day3.md` § B): `STEPS` counts nodes looked at and never
turns, and the field is labelled `LOG SCALE` + `FLOOR` so a bar is not mistaken for a count and 7,812 is
not mistaken for a rounding error in the narration.

## Gate state

**G14 is the riskiest frame in the tranche and nobody has built it.** Snapshot-read in this order:
(1) **legibility of twenty 30px rows at phone size** — if the mono number reads under the 28px floor, the
correct answer is *fewer rows and a bigger counter, then report it*, not smaller type with
`data-layout-ignore` (that flag exempts chrome from the layout gates, not content from being readable);
(2) last row bottom must be ≤ 964 and nothing may cross y 1004; (3) the `LOG SCALE` chip must be present
— an unlabelled ramp reads as a claimed proportion; (4) no amber on F3; (5) F2's `STEPS 3` and F3's
`STEPS 20` must never appear in the same frame. **If G14's row pitch or bar lane does not survive the
pixels, say so loudly and stop on that frame** — 32 and 29 copy the counting clock from it.
