---
format: 1080x1920
duration: 32s
message: "a chain of nodes, each holding a value and where to go next — so adding at the front is one assignment, and reaching the fiftieth thing is forty-nine hops"
arc: hook (two shapes) → node anatomy → the trade (prepend, then the walk) → the same chain as code + the array echo → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 22 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-22-linked-lists (prog-basics, part 22 of 22)

English master, portrait 1080x1920, target ~44s (ceiling 54s) — the tranche's longest part, and the
payoff of part 21. Copy source of record: `writing/prog-basics/pieces/22-linked-lists.md`. Shape:
bible-day2 § 6. Grammar: `frame.md` v2.1 § 4 (G1 hook, **G7 node chain ×2**, G3 code chamber, G5 CTA)
and § 7 (the motion primitives).

> **Durations are measured.** Voice: Kokoro `af_heart` through `studio voice`, 84 words over 5 lines,
> 26.0s of speech; the frame durations below are that measurement plus authored air (~1.0s per frame,
> ~2.0s on F5) so every 0.5s crossfade sits inside silence. Word onsets come from `studio cues` and
> every emphasis time in the frame files cites one of them. The piece file's 2.4 words/second estimate
> (which projected ~44s) was wrong: the measured rate at the house 0.93 is **3.2 words/second**, so
> this part lands at 32s, not 44s — see `BRIEF.md` → Deviations. `studio voice` synced the VO column;
> the air was added by hand after it, so re-run `assemble` after any change to these numbers.

## Identity note

The user ruled the earlier projects out as a reference for this batch, so: graphite ground `#15181D`
with a dot grid that drifts and returns to zero inside every frame; Space Grotesk for everything read,
JetBrains Mono for code and chrome; colour as a lesson — amber = the word being said, mint = a value,
coral = an error the interpreter raised. **Part 22 raises no exception, so this film ships with zero
coral** (`--err` appears nowhere in it). Every frame carries at least two primitives, and no cut lands
on the previous frame's layout: archetype, wipe direction and hero position all change between
neighbours.

## The mark this part carries (G7, first build)

`frame-day2.md` § 4 G7 is a specification, not a screenshot — this part and pb-21 are the first to
draw it, and ten other parts clone whatever geometry is validated here. The rules this frame set
follows, in one place so the clone workers do not re-derive them:

- **A node is G2's chamber split down the middle.** 264×108 at rest, radius 22px, `--panel` `#1F242C`
  interior, 3px `--line` border, G2's shadow `0 18px 40px -18px rgba(0,0,0,0.70)`, and a 3px
  `--line-faint` hairline dividing it: left cell the value (Space Grotesk 700, `--value` mint), right
  cell the `→` (Space Grotesk 700, `--muted`). Mono tags `VALUE` / `NEXT` sit above the two cells and
  belong to the anatomy beat only — at row scale they are 13-17px chrome and must carry
  `data-layout-ignore`, so they fade out rather than shrink.
- **Height holds, width narrows.** A uniform scale of the canonical node at the size a four-node row
  needs (0.64) gives a 69px box whose cells cannot hold a ≥28px value. The row form is therefore
  **176×108** (F3) and the hook's mini form **132×54** (F1), always keeping the same radius, border,
  hairline and shadow. Never re-style the box to make it fit; narrow it.
- **Connectors are CSS divs in the untransformed layer**: a 3px `--line` bar plus a chevron built from
  two borders on a `transparent` element (`border-top`/`border-right` rotated 45°). **No SVG** —
  pb-11 proved an SVG ring inside a scaled container drifts out of the content box into the platform
  zone, and a G7 connector lives next to a hero node that scales.
- **The walk moves one element only.** The `cur` ring is a standalone 3px `--say` bordered div that
  `x`-tweens node→node; the nodes themselves carry no tween on that beat. Prove it with two snapshots
  0.4s apart: the ring's pixels move, the boxes' do not.
- **The prepend moves one node in and redraws one connector.** Do not slide the chain block: a `y`
  tween on the row contradicts `MOVED 0` and risks the caption band (band top 1024, box ends 1004).
  Reserve the head slot empty before the drop.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `#FFD166` marks the spoken word
only; mint `#5AD6A0` marks values and printed output only; `--muted` `#9BA6B2` is chrome. Content
lives between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for the
platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
~1s authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.

## Frame 1 — The hook (G1)

- scene: four display lines on graphite — `An array is` / `a row of seats.` / `A linked list is` / `a treasure hunt.` — the second group on the solid amber say-plate. Below them, two stills that never animate: left, pb-03's five-box chamber row at 0.5 (dimmed to 0.55, the callback is the shape not the colour); right, three G7 nodes with the `--say` ring already on the first. Nothing moves in either diagram.
- duration: 4.7s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: two shapes, same weight
- voiceover: "An array is a row of seats. A linked list is a treasure hunt."
- sfx: none

## Frame 2 — Node anatomy (G7, first draw)

- scene: one hero node at 480×196 (the canonical 264×108 at 1.818), split by a 3px `--line-faint` hairline. Left cell `2` in mint under a mono `VALUE` tag; right cell `→` in muted under `NEXT`. The hero settles into the middle slot of the chain row by ONE scale tween centred on its own slot (no reflow, no x/y move), then node `1` drops in at its left. On "a value" the left cell pulses once (P7) and the VALUE tag arrives; on "a pointer to the next node" the right cell pulses, a CSS connector draws out of it (P8) and node `3` arrives with it, then the muted `None` terminator chip.
- duration: 6.6s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-anatomy.html
- type: mechanism
- beat: what a node holds
- voiceover: "A linked list is a chain of nodes. Each node stores a value and a pointer to the next node."
- sfx: none

## Frame 3 — The trade: prepend, then the walk (G7, two beats in one frame)

- scene: beat 1, on "Adding at the front is fast" — the three-node chain from F2 holds at y 470 with the head slot left empty, one new node `0` drops into it (P2 bounce), exactly one connector redraws (P8), and a mono tag counts `MOVED 0` (the tranche's argument against part 21's `MOVED 4`). Nothing else on the board moves: `n1`, `n2`, `n3` and connectors `cB`, `cC`, `cD` carry no tween at all. Beat 2, on "Finding the 50th…" — a 3px `--say` ring hops node 0 → 1 → 2 → 3, one hop per number at walking pace, while a mono `STEPS` chamber ticks 1 2 3 (P9, time proxy, no TextPlugin) and a readout shows the value the ring is standing on; the boxes do not move, only the ring travels. A fourth hop is attempted toward the dashed `50th` empty chamber and the counter is still climbing when the frame exits.
- duration: 6.5s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-walk-prepend.html
- type: mechanism
- beat: one arrow redraws, forty-nine hops
- voiceover: "Adding at the front is fast. Finding the 50th means walking through 49 nodes first."
- sfx: none

## Frame 4 — The same chain as code (G3, with the array echo)

- scene: one `main.py` chamber (760px, `PYTHON` chip) with four type-on lines under a caret (P3), every line executed on 3.13.15: `chain = (1, (2, (3, None)))` / `print(chain[0])  # 1` / `print(chain[1][1][0])  # 3` / `print((0, chain)[0])  # 0`. A `--panel-2` terminal strip below it prints `1`, `3`, `0` as three mint lines. On "two pointers" an amber say-sweep (P1) runs under `chain[1][1][0]` and a small CSS brace-bar tagged `[1] = hop` sits under the double bracket. Then, dimmed to 0.42 along the bottom-right, pb-21's five-box array row with one jump arrow onto index 2 and `nums[2]  # 30` in mono — the array answering the same question in one look, landing `30` in mint on "gets it". No coral: nothing raises here.
- duration: 8.5s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-chain-code.html
- type: example
- beat: proof, and the tranche closing
- voiceover: "Here is the same chain as code. To reach three you follow two pointers. An array asks for index two and gets it."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: headline `faster at the front?` at 6.4cqw in a 176px box, two mono chips `ARRAY` / `LINKED LIST` in `--panel-2`, the `COMMENT IT` verb plate in solid `--say`, and the series line `PROGRAMMING BASICS · BASICS II · 22 · BEGINNER`. A 3px `--say` ring travels between the two chips twice and rests on **neither** — pre-picking the answer would answer the viewer's quiz for them (the pb-11 finding, kept as a rule). It holds alone under the platform's chrome and carries no exit push.
- duration: 5.7s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Which is faster for inserting at the front: array or linked list?"
- sfx: none

## Real durations

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.669 | 4.7 | 14 | 0s → 3.44s |
| F2 | 5.589 | 6.6 | 20 | 0s → 5.34s |
| F3 | 5.525 | 6.5 | 15 | 0s → 5.20s |
| F4 | 7.467 | 8.5 | 23 | 0s → 7.28s |
| F5 | 3.733 | 5.7 | 12 | 0s → 3.48s |
| **film** | **25.983 speech** | **32.0** | **84** | |

Air at each cut: ~1.0s (1.98s on the last frame, which loops under the platform's chrome), so the 0.5s
crossfade sits inside silence and no sentence spans a cut. Measured rate: **3.24 words/second** at the
house `af_heart` 0.93 — 12s shorter than the piece file's 2.4 w/s projection, which is why this part is
32s and not the ~44s the brief expected. It is above the 30s floor (`frame-day2.md` § 12), so nothing
was padded. The 5 frames and the beat order are unchanged; only the authored air is shorter.
