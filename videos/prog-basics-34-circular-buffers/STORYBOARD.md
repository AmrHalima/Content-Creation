---
format: 1080x1920
duration: 32.89s
message: "a fixed row with a write spot that returns to the start — so the newest thing lands on the oldest thing, and the log holds its size forever without moving anything"
arc: hook → the row and the wrap → the overwrite → the run → the save
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 34 of 44
identity: bench-v2.2
---

# STORYBOARD — prog-basics-34-circular-buffers (prog-basics, part 34 of 44)

English master, portrait 1080x1920, target ~30s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/34-circular-buffers.md`. Grammar: `frame.md` v2.2 § 4 **G20 `wrap ring`**
built on the **R2** rung (§ 1), plus G1 hook, G2b row, G3 code chamber, G5 CTA, and § 7's motion
primitives. Durations below are estimates the voice run replaces with measured VO; the authored air
(1.0s per frame, 2.0s on F5) is added back after `studio cues`, per `frame-day4.md` § 9.

## The carrier note (why this file is read as pixels first)

This part proves **R2** — the new default cell ladder (slot 96x110, radius 16, pitch 112, first x 100,
value 4.0cqw SG 700) — plus the **wrap arc**, the **HEAD marker** and the **overwrite / lost-value
exit**. Parts 38, 39, 43 and 44 inherit the strip sizing from here (`frame-day4.md` § 8), so the
settled numbers below are the report, not decoration:

- **R2 cell** 96x110, radius 16, 3px `--line` on `--panel` `#1F242C`, token 4.0cqw SG 700 `--value`.
- **R2 lefts used** 100 / 212 / 324 (3 slots); row right edge **420**, so the whole column
  **452 → 1008** is free label space — a 3-slot R2 row is *not* pb-21's 6-slot row and must not be
  centred. Cell centres x = 148 / 260 / 372; **slot centres, not lefts, are the anchor for anything
  that points at a slot**.
- **Row top 400 → bottom 510.** The R2 strip lane (top 522) is **12px** under the cell, and a
  straddling marker eats it: the counted strip line goes to the **trail/arc lane at 566** instead.
- **HEAD marker** 120x60, `--panel-2`, 3px `--say`, mono 700 2.9cqw `--say`, text `HEAD`, parked
  top 640, **lands at y −160 → top 480** so it straddles the cell's bottom edge (510), x =
  slot centre − 60 (88 / 200 / 312, 112px steps). It is 24px wider than the slot it points at.
- **TAIL marker** (new here, G20 does not define one): same 120x60 shell, 3px `--line`, mono 700
  2.9cqw `--muted`, **straddles the cell's TOP edge: top 370**, same x as HEAD. Two markers on one
  slot read as one bracketed slot; stacked below they read as two unrelated plates.
- **Wrap arc** one `<svg>` per frame, `936x1920`, `viewBox="0 0 936 1920"`, `left:72px; top:0`, no
  scaled ancestor. Path `M 300 380 C 300 296 76 296 76 380` (svg x = frame x − 72; frame endpoints
  372 and 148 = slot centres, y 380), stroke 4px `--stroke`, `pathLength=100`, draw-on 0.55s, plus an
  18px SVG triangle head `67,378 85,378 76,398` into slot 0's top edge. **Apex y ≈ 317.**
- **Token exit (the lost value)**: the overwritten glyph is a **sibling** of its chamber, tweens
  `{ y: -46, opacity: 0 }` 0.3s `power2.in` after dimming to 0.42, and the new one drop-ins **0.12s
  after the old one is gone**. Never two glyphs in one 96px cell.

**B4, the trap of this part:** after the fourth write the physical cells read `D B C` while the
recency reading is `B → C → D`. Frames show `D B C` in the cells with HEAD and TAIL both on **slot 1**
(ledger: `head 1 · tail 1 · count 3`), and the logical order lives on its own labelled line
`oldest → newest`. A strip reading `B C D` depicts something that never happened.

## Video direction (shared by all five frames)

Ground graphite `#15181D`, dot grid drifting 0 → 16 → 0 px with two breathing glows, every ambient loop
returning to its own zero so a cut never resets the world. Ink `#F4F1EA`; amber `#FFD166` = the word
being said, singular; mint `#5AD6A0` = a value or what printed; `--stroke` `rgba(255,255,255,0.30)` =
the lone arc line. **Zero coral in this part** — the overwrite is the design, not an error, and no
interpreter raised anything (`frame-day4.md` § 6). Chrome kicker `PROGRAMMING BASICS · UNDER THE HOOD · 34`
+ `INTERMEDIATE` plate on every frame (§ 7 — the piece file's `STRUCTURES I` string is Day 3's word).
Content lives between y 230 and y 1004; captions own 1024-1344; 1344-1920 stays empty.

No chamber translates in any frame. The part's argument is `MOVED 0`, and a frame that slides a box to
make a nicer composition contradicts its own tag.

## Frame 1 — The hook (G1, the cover)

- scene: type alone on the ground, four lines, nothing illustrated. `a log that`, then `never grows` with the solid amber say-plate wiping left-to-right under it, then the muted `latest 100 entries`, then `how?` landing last with the settle rule under it. The executed scale claim arrives as one mono strip: `250 writes · 100 slots · len stays 100`. The 100 entries are not drawn.
- duration: 5.33s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the impossibility
- voiceover: "How does a log keep only the latest 100 entries and never grow?"
- sfx: none

## Frame 2 — The row, and the wrap (G2b on R2 + G20 arc)

- scene: three dashed-empty R2 slots arrive on the fixed row, then `A` `B` `C` drop in one per spoken value with a mint border flash; the muted name tab `buf` sits beside the row. The amber `HEAD` plate hops slot 0 → 1 → 2 in 112px steps on the write spot, and on `wraps back` the 4px `--stroke` arc draws over the top of the row into slot 0's top edge behind an 18px head, while `write spot: 0 1 2 0 1 2` settles in the lane under the markers and the counted tag `WRAPPED 1` lands.
- duration: 7.70s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-row.html
- type: mechanism
- beat: a fixed row whose write spot returns to zero
- voiceover: "A circular buffer is an array with a set size. The write spot runs to the end and wraps back to zero."
- sfx: none

## Frame 3 — The overwrite (G20 lost value)

- scene: the same three slots holding `A B C`, HEAD back on slot 0, no box moves. On `overwrites` the `A` dims to 0.42 and leaves the chamber upward (sibling, full alpha while it fades) and `D` drop-ins 0.12s later with the mint border flash — the cells now read `D B C`. HEAD steps to slot 1 and the muted `TAIL` plate lands on the same slot from above, straddling its top edge: head and tail both on slot 1. `MOVED 0` and `SIZE 3` settle one per `nothing` clause; `OVERWROTE A` lands on the drop-in; the `oldest → newest  B → C → D` line reads opposite to the cells; `streaming audio` arrives as a mono chip beside the row; the reading line `newest lands on oldest` closes the frame.
- duration: 8.45s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-overwrite.html
- type: mechanism
- beat: newest lands on oldest, and nothing shifts
- voiceover: "New data overwrites the oldest entry. Nothing shifts and nothing grows. That is why streaming audio uses it."
- sfx: none

## Frame 4 — The run (G3)

- scene: one `main.py` chamber with the `PYTHON` chip and three lines written under a caret on P3 type-on — `buf = ["A", "B", "C"]`, `i = 3 % 3   # 0`, `buf[i] = "D"   # evicted: A`. Then the terminal strip arrives under its muted `BUF` corner label holding the executed print `['D', 'B', 'C']` in mint, the mono line `oldest → newest  B → C → D` settles beneath it, and three counted chips `head 1` `tail 1` `count 3` land on `newest three`.
- duration: 7.02s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: it runs, here is what the ring holds
- voiceover: "Three slots: A, B, C. Write D and it lands on A. The log now holds the newest three."
- sfx: none

## Frame 5 — The save (G5)

- scene: `never grows, never shifts` at 6.4cqw in the 176px band; behind it the ring of three R2 slots echoes dimmed at 0.42 with the wrap arc still drawn over it, its `D B C` tokens kept at full alpha as siblings of the dimmed chambers; the `SAVE THIS` amber verb plate lands on the mechanic verb, then the series line `PROGRAMMING BASICS · UNDER THE HOOD · 34 · INTERMEDIATE`. No quiz, no question, no chips — the mechanic is Save. Holds alone; no exit push.
- duration: 4.39s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the save
- voiceover: "Save this for system design questions."
- sfx: none

## Real durations

Measured by `studio voice` (Kokoro `af_heart` at the pinned **0.93**, passed explicitly as `--speed
0.93`) + `studio cues`. Air is 1.0s per frame and 2.0s on F5, so each 0.5s crossfade sits inside
silence and no sentence spans a cut. Filled in after the voice run.

| Frame | VO seconds | Frame seconds (VO + air) | VO words |
|---|---|---|---|
| F1 | 4.331 | 5.33 | 13 |
| F2 | 6.699 | 7.70 | 22 |
| F3 | 7.445 | 8.45 | 18 |
| F4 | 6.016 | 7.02 | 19 |
| F5 | 2.389 | 4.39 | 6 |
| **film** | **26.880 speech** | **32.89** | **78** |

Cumulative starts: 0 / 5.33 / 13.03 / 21.48 / 28.50. Measured rate here is **2.90 words/second**
(78 / 26.88), slower than the tranche's 3.24 — this part's words are long (`circular`, `overwrites`,
`streaming`) which is the piece file's own pb-13 worst case (3.04 w/s) arrived at. The film is
**32.89s, inside the 29-34s band**, so no pad was grown and no words were touched. Word onsets come
from `studio cues` (real ASR, not the char-proportional fallback) and every emphasis time in the frame
files cites them.
