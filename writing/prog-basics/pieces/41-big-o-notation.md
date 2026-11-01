---
id: pb-41
order: 8
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Big O notation
slug: big-o-notation
project: videos/prog-basics-41-big-o-notation/
difficulty: B                      # load-bearing badge, not prose
mechanic: Save                     # load-bearing badge, not prose
mode: code-card
carrier: likely                    # the first notation-bearing film; frame-day4.md's map decides
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 85
target_length: ~32s                # 85 / 3.24 = 26.2s speech + 6.0s air
ceiling: 54s
grammar: G1 G1-axes G2b-bars G2b-bars G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: approved                 # CORRECTIONS-day4 § A1 landed in the VO; counted plate numbers still pending
ledger_placeholders: 2
notation: ALLOWED, on screen (ACCURACY-day4 § 3, row 41). Narration carries the spoken form only, `big O of n squared`, never the symbol.
clone_source: pb-13's counted G2b row (the bars) + pb-21's index strip (the axis labels)
---

# P41 · Big O notation · [B] · Save · code card

**Message:** Big O is a sentence about shape, not speed — how the work climbs as the input climbs, with
the constants thrown away so two codes that differ by a factor of ten can share a word.

This is the film the series' notation ban was protecting the audience from, and it is the reason the ban
could be lifted narrowly: here the symbols are not a shortcut for "fast", they are the thing a learner will
see written on a whiteboard in every interview they ever sit. F2 builds the axes, F3 the two shallow
shapes, F4 the two steep ones, F5 asks the question the Save is for.

**Notation licence, stated so no builder misreads it (ACCURACY-day4 § 3).** In **this part and 42** the
licence covers every *written* surface — screen text, feed caption, X and LinkedIn, pinned comment —
because notation is the lesson. In **37 and 43** it is only the F4 comparison labels, and in **44** only
`O(n²)` and `O(n log n)` on the slow/fast plate. In **34, 35, 36, 38, 39 and 40 the ban is total** on every
surface. And in **narration, everywhere, always the spoken form**: this film's VO says "big O", "big O of n
squared" and "halving", and never a symbol, because the TTS voice must not be handed `O(n²)` to read. `Θ`
stays off screen (§ 3 recommendation); if it is ever overridden, it is spoken "theta of n".

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 85 words → 26.2s speech + 6.0s air = **~32.2s**
(the table below sums to ~26.3s with per-row rounding; the measured VO is what lands in `STORYBOARD.md`).
At the slow-word 3.04 w/s this part is ~28.0 + 6.0 = **~34.0s**, at the top of the band and the
highest-risk film in the tranche for going over. **Pre-approved trim if it measures past 34s:** cut F2's
second sentence `It drops the constants and keeps the shape.` (8 words) → 77 words → 23.8s + 6.0 =
**~29.8s** at 3.24, **~31.3s** at 3.04, which is the line the counted bars already prove. The other option
this file used to list, replacing F4's `keeps it shallow` half with
`Halving the list each step is the fourth shape.`, is **retired as a trim**: it is 9 words against 8, so it
adds one rather than removing one, and it was mis-stated as "8 instead of 8". Report before cutting
anything else.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 3.4s | How do engineers say 'this code gets slow' without a stopwatch? | Verbatim hook. `without a stopwatch` is the joke and the thesis; keep it level, do not punch it. |
| F2 | 5.9s | Big O describes how the work grows as the input grows. It drops the constants and keeps the shape. | `grows` twice in one sentence is deliberate; say the second one slightly lower. `keeps the shape` is the frame's axis arriving. |
| F3 | 5.6s | One flat line means the same work at any size. One straight line means reading each item once. | Two shapes, two beats, equal weight. `once` closes the frame on the counted bar. |
| F4 | 6.8s | A loop inside a loop, both over n, is big O of n squared. Halving the list each step keeps it shallow. | `big O of n squared` is the phrase to hear clearly — it is the spoken form of the chip on screen. `both over n` is the two words A1 added and the whole correction, so say it level and do not rush past it. `shallow` is quiet. |
| F5 | 4.6s | Save this. What's the Big O of looking up a key in a hash map? | Verbatim CTA mechanic, two beats. `Save this` first and alone, then the question, then nothing. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 11 · F2 19 · F3 18 · F4 22 · F5 15 = **85 spoken words** → 26.2s speech + 6.0s air = **~32.2s
film** (~34.0s at pb-13's 3.04 w/s). The F2 trim above takes it to 77 words and ~29.8s if the VO comes in
under 3.0 w/s. `SCRIPT.md` keeps exactly 5 lines, one per frame, headings `## Line N — Title (Frame N)`
(WAVE2-PACKET § 3).

**Spoken code:** `O(1)` → the voice never says it; the screen does. `n` → "en". `O(n²)` → the voice says the
§ 3 spoken form **`big O of n squared`** (F4, since A1); the older "n times n" phrasing is retired from
narration, and the chip keeps the symbol. `log n` → "halving the list each step" in F4; if a line ever has
to name it, the authorised spoken form is "big O of log n". `1,000` → "a thousand". Never read a bracket, a
superscript or a parenthesis aloud. **Expected at the caption gate, not a defect:** captions are measured
off the VO, so the caption lane will read `big O of n squared` while the diagram reads `O(n²)`
(ACCURACY-day4 § 3, production consequence). Do not hand-patch one to the other.

**Re-cut applied** (logged in full). "Big O describes how runtime grows as input grows." → `runtime`
became `the work`, because a first-week learner has not met the word as a measurement, and `O(1) is
constant, O(n) grows in a straight line, O(n²) shows up with nested loops, and O(log n) halves the work
each step.` (a 30-word sentence built on four symbols the audience cannot yet read) became F3 and F4 as
four plain descriptions, each paired with one drawn shape and one symbol label. Every symbol survived, and
none of them has to be understood to follow the sentence — which is the only way a [B] part gets away with
carrying them. "It ignores constants and focuses on the trend" → `It drops the constants and keeps the
shape`, same two facts, verbs the eye can see. Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 41`, `BEGINNER` badge, ligature guard on all five.
**Zero coral** — notation is not an error and a steep shape is not a failure.

**Bars, not curves (authored decision, so no builder makes it).** A plotted line is not one of the eight
marks in `frame-day2.md` § 4, and `frame-day4.md` is another agent's file mid-write. So F3/F4 are built
from the atom the series already ships: **counted G2b cells stacked into bars** (pb-13's row, pb-21's
pitch), which reads at phone size and needs no new geometry. If Day 4's frame spec names a plot mark and
calls 41 its carrier, the bars become lines and **every string in this file stays as written**.
**F1 (G1, also the cover).** Type alone, two groups: `this code gets slow` (ink) /
`no stopwatch needed` on the solid `--say` plate — the hook's quoted phrase and its punch, cut to fit the
group limits (the full sentence is spoken, never pasted).
**F2 (G1 axes).** The same ground with two 3px `--line` rules forming an L: the horizontal labelled
`input grows →` and the vertical labelled `work grows ↑` in mono `--muted`, 2.4cqw,
`data-layout-ignore`. (These two are glyphs used as **direction labels on an axis**, which is structural
chrome, not body-copy decoration — the Unicode ban is on arrows standing in for words in prose.) Four
label chips wait off-band in `--panel-2` mono: `O(1)` `O(n)` `O(n²)` `O(log n)` — they arrive one per
shape, and on F2 they are a legend only, dimmed to 0.42, no line drawn against them yet. One reading line:
`shape, not speed` (ink on `shape`).
**F3 (G2b-bars, the two shallow shapes).** Left group: a single chamber high bar that does not grow while
the x-axis label ticks `4 → 40 → 400`, with the chip `O(1)` lifted to full ink and a counted tag
`⟪LEDGER:41⟫ LOOKS` under it (the run returns the look count at each of the three sizes; the tag is
whatever it prints, and the claim that it stays flat is the frame's). Right group: a staircase of bars one
cell taller per step, chip `O(n)` at full ink, counted tag `n LOOKS`, and one reading line
`one loop, one look each`. Both groups sit inside 230→902, six slots max per row.
**F4 (G2b-bars, the two steep shapes).** Left: a **square** of cells, `⟪LEDGER:41⟫` cells on a side
(the n the frame draws with — the same n as F3's first tick, so the pair is comparable), filling cell by
cell on P9 `count-tick` while a mono tag counts up to `⟪LEDGER:41⟫ CELLS`, chip `O(n²)` lifted to full
ink, reading line `a loop inside a loop`. Right: a halving row — one bar of `⟪LEDGER:41⟫` cells, then
half of it retiring to 0.42 skin, then half of what is left, with a mono `HALVES` tag ticking `1 2 3` and
the chip `O(log n)` at full ink. The retiring cells keep their digits at full ink until they leave the row
(the 0.42-on-text finding), and no cell is removed by a layout reflow — each is a sibling whose own alpha
is authored.
**F5 (G5).** Headline `a hash map lookup?` (19 characters, 5 words) at 6.4cqw in the 176px band, verb
plate `SAVE THIS` in solid `--say`, badge `PROGRAMMING BASICS · STRUCTURES I · 41 · BEGINNER`, and the
four notation chips from F2 held in a row beneath the plate at 2.6cqw mono `--muted`,
`data-layout-ignore` — the legend stays on the last frame because the film is a reference card and this is
the frame people screenshot. The question's answer is **not** on the frame: no chip lights, no `O(1)` is
marked correct, since the honest answer has a worst case that part 38 owns.

**CTA card copy, verbatim and complete:** spoken `Save this. What's the Big O of looking up a key in a hash
map?` / headline `a hash map lookup?` / verb plate `SAVE THIS` / the four-chip legend / badge line.

## Cover / title text

`how work grows, not how fast` (6 words, F2's reading line expanded) + badge
`PROGRAMMING BASICS · STRUCTURES I · 41` + `BEGINNER`. Amber plate on `grows`. The four chips do **not**
go on the cover: a still with four unread symbols is a cover that tells a beginner to keep scrolling, and
they arrive in the film one per shape.

## Post copy

**Feed caption:**

    How do engineers say 'this code gets slow' without a stopwatch?
    Big O describes how the work grows as the input grows, and it drops the constants to keep the shape.
    O(1) stays flat at any size, O(n) reads each item once, O(n²) is a loop inside a loop, and O(log n) throws away half of what is left each step.
    Save this. What is the Big O of looking up a key in a hash map?

**Hashtags:** `#python` `#programming` `#learntocode` `#bigo`
**X:** `big o is a sentence about shape, not speed. same work at any size, one look per item, n times n looks for a loop inside a loop, and halving each step for a sorted hunt. constants get dropped, so the question is not how long it took but what happens when the input triples. what is the big o of a hash map lookup? #python`
**LinkedIn:** the reason interviewers keep asking it is that the shape is the only part of a performance
claim you can defend without a profiler: `O(n²)` on a small input is invisible and on a large one is an
incident, and `O(log n)` against `O(n)` is the difference between a feature that survives growth and a
rewrite. Naming the shape buys you the argument before you have the measurement; `#python`
`#programming` `#bigo`

**Pinned comment:** `Average case: one look, O(1) - the key hashes to a slot and the map goes and gets it. Worst case: O(n), and the reason is part 38 - if every key lands in the same slot, that map is a linked list and you are walking it. The sentence worth memorising is that a hash map is O(1) on average and O(n) when you are having a bad day, and the day is made of collisions and a table that never resized. ⟪LEDGER:41b⟫ if you want the measured pair for a 10k against a 1M lookup; without a machine and an input size, a timing here is a vibe. Part 43 is the halving shape, done by hand.`

## Accuracy

**Status: ledger returned, user ruled (`CORRECTIONS-day4.md` § D1, item A1) — the VO now says `both over n`.
Still pending:** counted numbers only. Nothing in this part depends on
interpreter behaviour, so the marked items are arithmetic the frame draws and must not assert from my
memory: the look count at each input size on F3, the side length and cell count of F4's square, and the
number of halvings the halving row survives. They are placeholders because **every number on screen in
this series is executed or computed output** (`frame-day2.md` § 9), and because the honest way to pick n is
whatever the bar geometry fits (six slots), which is a decision the frame makes, not the script.

The definitions ship as written and are not at risk: Big O compares growth trends and drops constants;
`O(1)` flat, `O(n)` one pass, `O(n²)` a nested pass **with both loops running over n**, `O(log n)` halving.
The A1 qualifier is the part's one factual correction: `for i in range(n): for j in range(3)` doubles its
work when n doubles (96 → 192, x2.0), so a loop inside a loop with a fixed inner is O(n), not O(n²), and the
unqualified sentence taught the wrong thing about a shape beginners write constantly. The CTA's answer in
the pinned
comment is stated with its average/worst-case split, which is the accurate form, and it hands the collision
half of that answer to part 38 rather than summarising it here.

## Ledger dependencies

- `⟪LEDGER:41⟫` (F3's `LOOKS` tag at three input sizes; F4's square side, its cell total, and the halving
  row's start count and `HALVES` ticks) — the counted numbers for whichever n the bar geometry settles on,
  computed and printed by the run rather than written in by hand. One n, used on both frames, or the two
  shapes are not comparable and the film's argument is a layout accident.
- `⟪LEDGER:41b⟫` (pinned comment, optional) — a measured 10k-vs-1M hash lookup pair **with the machine and
  input named**, or the sentence comes out. Nothing on screen depends on it, and a timing there without a
  machine is the tell this series avoids.

## Gate state

**Treat this as the tranche's notation carrier** even though `frame-day4.md` owns the map: F3/F4 are the
first frames in 44 parts where a learner who cannot read `O(n²)` has to survive being shown one, so
snapshot-read the pairing — every symbol chip must have a drawn shape and a plain reading line on the same
frame, and no chip may arrive before its shape exists. Then: (1) the flat bar must stay one cell tall while
`4 → 40 → 400` ticks, or the part's whole claim is invisible; (2) the square fills cell by cell with no
layout reflow; (3) the halving row's retiring cells keep digits at full ink while their skin dims; (4) the
F5 legend chips are chrome (`data-layout-ignore`) and none is highlighted; (5) nothing below y 1004 and no
coral.

Runtime expectation: **~32.2s**, worst measured case ~34.0s, band 29–34, with the one pre-approved trim
above (F2's second sentence, 8 words) if the VO measures slower than 3.04 w/s.

## Approved edits

- **A1 (CORRECTIONS-day4 § A, HIGH) landed in the VO.** Before: `A loop inside a loop bends the line up:
  n times n looks.` After: `A loop inside a loop, both over n, is big O of n squared.`
- Word delta: 84 → **85** (F4 21 → 22, Est 6.5s → 6.8s). F1, F2, F3 and the CTA untouched; nothing trimmed,
  because the part still sits at 85 inside the 75-91 band.
- `big O of n squared` is § 3's exact spoken text for `O(n²)`; the symbol stays on the plate only. The
  caption lane reading the words while the diagram reads the symbol is expected (§ 3), not a patch target.
- Screen instruction (binding, from A1 + B14, not applied here): the example plate may carry the gloss
  `inner loop fixed at 3? still O(n).` and the measured pair **x2.0 versus x4.0** (`96 → 192` against
  `1024 → 4096`). F4's halving row shows the curve value (`log2 n` = 3 at n=8), never the loop-pass count,
  and not both numbers in one frame.
- Also corrected in this file: the notation-licence paragraph and the retired pre-approved trim were stale
  against § 3 (44 now carries `O(n²)` / `O(n log n)` on its slow/fast plate).
