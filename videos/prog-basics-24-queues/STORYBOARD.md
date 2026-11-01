---
format: 1080x1920
duration: 31.3s
message: "a line, not a pile — you join at the back and leave from the front, so the one who waited longest is served next, and the boxes never shift"
arc: hook (three places that run on a queue) → the line built, front and back and a window → the line served (the marker travels, the boxes hold) → the Python that really does it → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 24 of 33
identity: bench-v3.0
---

# STORYBOARD — prog-basics-24-queues (prog-basics, part 24 of 33)

English master, portrait 1080x1920, band `[B]` 29-34s, ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/24-queues.md`. Shape: bible-day3 § 0.3 + § 6. Grammar: `frame.md` (v3.0)
§ 5-§ 6 — G1 hook, **G9 `line` ×2 (this part is the mark's first build)**, G3 code chamber, G5 CTA.

> **Durations are measured, not invented.** `studio voice` (Kokoro `af_heart` @ 0.93) writes each frame's
> real VO length into the `- duration:` lines below; the authored air (~1.0s per frame, ~2.0s on F5,
> ≈6.0s total) is added by hand after that sync, so every 0.5s crossfade sits inside silence and no
> sentence spans a cut. Word onsets come from `studio cues`, and every emphasis time in the frame files
> cites one of them. `studio assemble --captions` is re-run after the air is added.

## Identity note

Graphite ground `#15181D` with a 56px dot grid that drifts and returns to its own zero inside every
frame, two breathing glows, a 1px shelf at y 1010. Space Grotesk for everything read, JetBrains Mono
for code and chrome. Colour as a lesson: amber `#FFD166` = the word the voice is on right now (never two
at once), mint `#5AD6A0` = a value or what printed, `--line` `rgba(255,255,255,0.16)` = anything the
viewer counts. **This part raises no exception, so `--err` appears nowhere in it — zero coral**
(bible-day3 § 4c). Content lives between y 230 and y 1004; caption band 1024-1344; 1344-1920 empty for
the platform's own chrome.

## The mark this part carries (G9 `line`, first build)

`frame-day3.md` § 6 derives the geometry; this part is the only one that uses it, and the numbers were
taken to the pixels rather than assumed:

- **The row is G7's walk geometry, unchanged** — 176×108 nodes at pitch 200, lefts 72 / 272 / 472 / 672,
  top 540 (540 chosen by the derivation, not by fit: it puts the row centre at 593, where the connectors,
  the 508→688 window and the intake arrow all meet). Cell contents are single letters `A B C D` in
  JetBrains Mono 700 `--value` at 3.6cqw. **No split hairline** — a queue node holds one thing, so the
  G7 `.g7-div` and the `→` cell are not carried over; this is the row form, not the anatomy form.
- **Connectors are 24px `.g7-bar` CSS divs at the row centre** (lefts 248 / 448 / 648, top 593) with an
  11×11 `.g7-chev` at bar-left +12 (rotate 45° = "›"). Never SVG.
- **The service window is a 3px `--line` vertical at left 66 spanning y 508→688** — 6px outside node 0's
  own border, so it straddles the row's left edge and covers no letter (the straddle law). `OUT` chip
  72×44 at left 96 / y 696.
- **`FRONT` / `BACK`** are 176-wide mono `--muted` chips at y 660, centred under nodes 0 and 3.
- **The intake mouth** is one 60px `.g7-bar` at left 848 / y 593 with a left-pointing chevron at 896
  (`.g7-chev` rotate 225°) plus an `IN` chip 60×44 at left 900 / y 696. The whole row plus mouth spans
  72→960, inside the 1008 right edge.
- **The counted pair is `SERVED 1` / `MOVED 0`** on `.f3-tag` chips in the **lower lane at y 892**
  (§ 4's grid for parts 24/27/28/29/31/33), at pb-21's authored x positions (270 w 300 / 590 w 220).
- **Motion contract:** the departing node is the *only* node that moves; every other node carries no
  tween at all. Then the `FRONT` chip travels exactly one 200px pitch. The enqueue motion is drawn where
  it can be drawn honestly — **F2's build**, four nodes arriving at the back with one connector redrawn
  per arrival (P2 + P8). A fifth node on F3 would need x 872→1048, i.e. past the 1008 content edge and
  on top of the intake arrow the same derivation places at 848→960 — reported, not quietly worked around
  (`BRIEF.md` → Deviations 1).

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows; every ambient loop starts and ends at
its own zero so a cut never resets the world. Ink `#F4F1EA`, amber only for the spoken word, mint only
for values, `--muted` `#9BA6B2` for chrome. Each frame wipes its content in from a different edge and
pushes out at its own end, inside the authored silence. Wipe directions alternate: F1 type in from the
left, F2 content from the right, F3 from the left, F4 from the right, F5 down from the top.

F2 and F3 land on the same row layout, so they differ in more than the wipe: F3 adds the counted lane at
y 892 and a note line, and its hero action is a departure rather than an arrival.

## Frame 1 — The hook (G1)

- scene: type alone on the ground — `every printer` / `call center` / `message app` as three stacked display groups read flat, then `runs on` `one of these` with `one of these` on the solid amber say-plate. No queue drawn on this frame (the piece's own rule, and § 8's cover rule). Kicker `PROGRAMMING BASICS · BASICS III · 24` with the `BEGINNER` chip.
- duration: 4.9s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: three places, one shape
- voiceover: "Every printer, call center, and message app runs on one of these."
- sfx: none

## Frame 2 — The line, with a front and a back (G9 `line`, built)

- scene: four nodes arrive left-to-right, one per clause, each dropping into the back of the row (P2 bounce, 176×108 at lefts 72 / 272 / 472 / 672, top 540) and drawing exactly one 24px connector behind it (P8). The letters are mono 700 `--value` `A B C D`. Then the service window: a 3px `--line` vertical at left 66 running y 508→688, straddling node 0's edge and covering no letter, with an `OUT` chip under it; then `FRONT` under node 0 and `BACK` under node 3; then the intake mouth — a 60px bar at 848 with a left-pointing chevron and an `IN` chip. Eyebrow `FIRST IN, FIRST OUT` in mono `--muted`.
- duration: 7.6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/02-line.html
- type: mechanism
- beat: two ends, and the shape of a line
- voiceover: "A queue is first in, first out, like a line at a coffee shop. You enqueue at the back and dequeue from the front."
- sfx: none

## Frame 3 — Served, and nothing else moves (G9 `line`, the negative-space beat)

- scene: the row holds from F2. On `Enqueue A` / `enqueue B` the two nodes take a 3px `--say` border for 0.4s each as they are named and the intake mouth redraws one connector (P8) — no node slides. On `then dequeue gives A` node A crosses the window (x -220, opacity 0, 0.46s power3.out) and leaves by the front, while B, C and D carry no tween at all; then the `FRONT` chip travels one 200px pitch to sit under B (0.4s power3.out). The marker moves, the boxes hold. Lower lane y 892: `.f3-tag` chips `SERVED 1` (left 270, w 300) and `MOVED 0` (left 590, w 220), the digits in mint, arriving on the words they count. A note line under the row — `the marker moves · the boxes hold` — carries the argument in one sentence.
- duration: 9.5s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-serve.html
- type: mechanism
- beat: the one who waited longest goes next
- voiceover: "It keeps things fair and in order. That is the right shape for tasks waiting their turn. Enqueue A, enqueue B, then dequeue gives A."
- sfx: none

## Frame 4 — In Python, a deque (G3 chamber)

- scene: one `main.py` chamber (`PYTHON` chip, 936px wide, four type-on lines under a caret, P3, ligatures off) — `from collections import deque` / `queue = deque()` / `queue.append('A')   # enqueue` / `print(queue.popleft())   # dequeue`. The comment tags are mono `--muted` and carry the API words the diagram uses; the code is the Python that was executed on this machine, and its stdout is the only output shown. A `DEQUE` chip sits above the chamber as the pronunciation gloss. Two say-sweeps (P1), one per spoken clause: `append` on "Append to the right", `popleft` on "Popleft takes the front". Two annotation lines below the chamber — `append joins at the back` / `popleft serves the front`. Terminal strip at y 900 prints `A` in mint. No coral, no error, nothing raised.
- duration: 5.2s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-deque-code.html
- type: example
- beat: the real thing, two ends
- voiceover: "In Python, use a deque. Append to the right. Popleft takes the front."
- sfx: none

## Frame 5 — The ask (G5 CTA)

- scene: headline `who skips the line?` (18 characters) at 6.4cqw in a 176px box, the mechanic verb plate `TAG THEM` in solid `--say` with `--say-ink` text, and the badge line `PROGRAMMING BASICS · BASICS III · 24 · BEGINNER`. Below them the line itself, dimmed the § 1 way — background and border only, letters still full mint, `FRONT` and `BACK` still legible — with node `A` still half-gone through the window: the image of the friend who skips, not an answer to anything. No exit push: this frame holds under the platform's chrome.
- duration: 4.1s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Tag a friend who always skips the line."
- sfx: none

## Real durations

Filled from the measurement after `studio voice`; the air is authored after that, then
`studio assemble --captions` is re-run.

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | TBD | 4.7 | 12 | TBD |
| F2 | TBD | 9.9 | 24 | TBD |
| F3 | TBD | 10.3 | 25 | TBD |
| F4 | TBD | 5.8 | 13 | TBD |
| F5 | TBD | 4.5 | 8 | TBD |
| **film** | **TBD speech** | **TBD** | **82** | |
