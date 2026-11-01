---
format: 1080x1920
duration: 39.5s
message: "a tree with a rule — smaller left, larger right, at every node — so each look throws away half of what is left, and a million items is twenty looks instead of a million"
arc: hook (the promise) → the rule + the counted search → the field that proves the promise → the same tree as code → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 28 of 33
identity: bench-v3.0
band: "[M] 34-42s"
---

# STORYBOARD — prog-basics-28-binary-search-trees (prog-basics, part 28 of 33)

English master, portrait 1080x1920, `[M]` band 34-42s, ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/28-binary-search-trees.md`. Shape: `series-bible-day3.md` § 0/§ 4b/§ 6 +
`frame.md` v3.0 § 5-§ 7. Grammar: G1 hook · **G11-`bst`** (27's grid, bound not redrawn) ·
**G14 halving field** (this part's new mark) · G14+G3 · G5 CTA.

> **Durations are estimates here and measured after the fact.** Voice: Kokoro `af_heart` through
> `studio voice --speed 0.93`, 99 words over 5 lines. `studio voice` syncs the VO column into the
> `- duration:` lines below; the ~1.0s authored air (~2.0s on F5) is re-added by hand afterwards, so
> `studio assemble` is run after that edit. Every emphasis time in the frame files cites a measured
> word onset from `studio cues`.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber `#FFD166`
= the word being said, mint `#5AD6A0` = a value or what printed, `--muted` `#9BA6B2` = chrome.
**This film ships with zero coral** (`frame.md` § 7.1): a binary search tree raises nothing, and the
`KeyError` a learner can hit is pinned-comment material, never a pixel. Content lives between y 230 and
y 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for the platform.

## The two marks this part carries

**G11-`bst`** (`frame.md` § 6) — 27 draws the grid; this part binds to it and adds the ordering law.
Node 148×96, levels y 292 / 452 / 612, columns n=1 → 466, n=2 → 232/700, n=3 → 154/466/778, elbow
runY 420 / 580, three axis-aligned 3px `--line` divs per edge. The tree drawn is the executed one:
`8 → 4, 12`; `4 → 3, 6` (insertion order `8,4,12,3,6`). `SMALLER` chips sit on the up-stub of every
left edge, `LARGER` on every right edge, mono `--muted`, `data-layout-ignore`. Search beat: a 168×116
`--say` ring at `node.left − 10` travels 8 → 4 → 3 while `STEPS` ticks 1, 2, 3; discarded subtrees dim
via § 1's background/border rule (`12` dims on the first "left", `6` on the second). The two left turns
are two amber arrowheads, never a second number.

**G14 halving field** (§ 6, built here for the first time in the series) — twenty rows, pitch 36, row
height 30, first top 250, last top 934 (bottom 964). Number lane left 744 width 264, right-aligned,
JetBrains Mono 700 2.9cqw `--value`; bar left 72 height 30, `--panel-2` with a 3px `--line` left edge,
authored widths `660 627 594 561 528 494 461 428 395 362 329 296 263 229 196 162 129 93 52 8`. Rows
arrive top-down on the same clock as the `STEPS 1→20` counter in the upper lane; nothing scales, no
width tween. Chips `LOG SCALE` (under the bar lane) and `FLOOR` with a 3px `--line` bracket on row 7.
**No amber anywhere on this frame** — there is no single word the voice is on for twenty rows.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows, every ambient loop starting and
ending at its own zero so a cut never resets the world. Cuts: each frame wipes its content in from a
different edge and pushes out `y: -60` in the last 0.3s, inside the authored silence pad, so no sentence
spans a cut and no join lands on its neighbour's layout.

## Frame 1 — The hook (G1)

- scene: four display lines on graphite — `Search a million` / `items in about` / `twenty` / `steps.` — the third line's `twenty` on the solid amber say-plate, swept inside its own utterance (P1). No tree, no field: G14's entrance is F3, and G11 is F2's. Kicker band `PROGRAMMING BASICS · BASICS III · 28`; `INTERMEDIATE` chip arrives on "steps" so the cover reads as the cover.
- duration: 3.6s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the promise, in two numbers
- voiceover: "Search a million items in about twenty steps."
- sfx: none

## Frame 2 — The rule, then the search (G11-bst)

- scene: five nodes drop in parent-first (P2) into 27's grid: `8` at L0 with a `ROOT` name tab, `4` / `12` at L1, `3` / `6` at L2 under the 4. Each elbow's three `--line` bars draw stub → run → stub (P8), and the connector a value travels down keeps its amber border until that value is named (one arrival per beat, so `4` retires before `12` lights). `SMALLER` / `LARGER` mono chips land at the elbow up-stubs on the two halves of the user's split sentence. Then the search: a 168×116 `--say` ring travels 8 → 4 → 3 on "eight", "four", "three" while `STEPS` ticks 1, 2, 3 (P9, time proxy, no TextPlugin) in the upper lane at y 288; `12` dims on the first "left" and `6` on the second, by background/border, digits staying at 0.62 ink. Two amber arrowheads mark the two left turns and carry no number.
- duration: 11s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-bst.html
- type: mechanism
- beat: smaller left, larger right, at every node — and three boxes looked at
- voiceover: "A binary search tree keeps smaller values on the left. Larger ones go on the right, at every node. The root is eight. Search for three. Left, then left."
- sfx: none

## Frame 3 — The field (G14, first build)

- scene: twenty rows, the densest frame in the series. Per row a `--panel-2` bar with a 3px `--line` left edge at x 72 and the executed value right-aligned in the lane at x 744: 1,000,000 → 500,000 → 250,000 → 125,000 → 62,500 → 31,250 → 15,625 → 7,812 → 3,906 → 1,953 → 976 → 488 → 244 → 122 → 61 → 30 → 15 → 7 → 3 → 1. Rows arrive top-down on the same clock as the `STEPS` counter in the upper lane, which ticks 1→20 (P9); the first seventeen bars shorten by exactly 33px, and that constant step is the picture of "about twenty". `LOG SCALE` sits under the bar lane; a 3px `--line` bracket and a `FLOOR` chip mark row 7, where 15,625 halves to 7,812 because the odd item is the one you just read. Zero amber on this frame.
- duration: 11.45s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-field.html
- type: mechanism
- beat: a million, drawn as twenty looks
- voiceover: "At each step you discard half the tree. If the tree stays balanced, a lookup takes about log n steps. One million, then five hundred thousand, then down to one."
- sfx: none

## Frame 4 — The same tree as code (G14 + G3)

- scene: the field from F3 holding in its left column — rows 1-12 still lit, rows 13-20 dimmed by
  background/border with their digits at 0.62 ink — and a `main.py` chamber (G3, 700px, `PYTHON` chip,
  four type-on lines under a caret, P3) in the right column at x 316:
  `t = (8, (4, (3, None, None), (6, None, None)), (12, None, None))` / `print(t[0])  # 8` /
  `print(t[1][0])  # 4` / `print(t[1][1][0])  # 3`, ligatures killed on the stylesheet so `None, None`
  and every bracket read as typed. A `--panel-2` terminal strip at the lane's old y 892 prints `8`, `4`,
  `3` in mint (the strip and the counted lane are never in the same frame, `frame.md` § 4). On "three
  boxes" an amber bar under `t[1][1]` draws itself and the `left, then left` tag arrives; on "twenty"
  `STEPS 20` re-lights beside the field's last rows, so the number has something to point at.
- duration: 7.4s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof, and the counted pair again
- voiceover: "Here is that tree as code. It looks at three boxes and stops. That is what twenty means for a million."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: headline `what did you build?` (18 characters, 6.4cqw in the 176px box), the mechanic verb
  plate `COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 28 · INTERMEDIATE`.
  Between them the five input numbers as a **plain row of chips** `1 2 3 4 5`, one arrival per spoken
  digit, with a `?` chip above the row. The shape is deliberately not drawn: a chain, a line or a tree
  on this frame answers the quiz for the viewer (pb-11's rule, and here the shape *is* the answer). No
  exit push — this frame holds alone under the platform's chrome.
- duration: 6.05s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask — sorted input, and what it quietly rebuilds
- voiceover: "What happens if you insert 1, 2, 3, 4, 5 in that order?"
- sfx: none

## Real durations

| Frame | VO seconds (MEASURED) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 2.581 | 3.6 | 8 | 0s → 2.26s |
| F2 | 10.005 | 11s | 29 | 0s → 9.7s |
| F3 | 10.453 | 11.45 | 30 | 0s → 10.24s |
| F4 | 6.357 | 7.4 | 21 | 0s → 6.06s |
| F5 | 4.053 | 6.05 | 13 | 0s → 3.8s |
| **film** | **33.449 speech** | **39.5** | **101** | |

Air at each cut ~1.0s (2.0s on the last frame, which loops under the platform's chrome), so the 0.5s
crossfade sits inside silence and no sentence spans a cut. Measured rate **3.02 words/second** at
`af_heart` 0.93 — between the tranche's two carrier figures (2.59 and 3.50), and slower than 3.24
exactly as the bible's digit-heavy caveat predicts. **39.5s lands inside the `[M]` band (34-42s)**, mid
band, 14.5s under the 54s ceiling: nothing was padded, nothing was cut. The piece file's F4 line is 21
spoken words, not the 19 its table says, so the part is 101 words and not 99 (no narration text
changed — see `BRIEF.md` → Deviations). `studio voice` synced the VO column; the air above was re-added
by hand, then `studio assemble` re-ran, so index.html matches this table.
