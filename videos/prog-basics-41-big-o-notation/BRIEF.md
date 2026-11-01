---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 41 of 44
title: prog-basics-41-big-o-notation
message: "Big O is a sentence about shape, not speed — how the work climbs as the input climbs, with the constants thrown away so two codes that differ by a factor of ten can share a word"
hook_source: user (pre-authored, verbatim; not rewritten)
cta_mechanic: Save ("Save this. What's the Big O of looking up a key in a hash map?")
destination: shortform-vertical (TikTok/Reels/Shorts)
aspect: 1080x1920
language: en
length: target ~32s (84 words after the approved A1 edit; 3.24 w/s + 6.0s air)
ceiling: 54s
narration: yes
audience: first-week programming learners
identity: bench v2.2 (frame.md = frame-day4.md, inheriting frame-day2.md v2.1)
tranche_badge: UNDER THE HOOD
difficulty: BEGINNER   # [B] from the manifest
carrier: TRUE — Wave A, and the highest-value one. Proves the fixed-px SVG canvas (§ 3.3), the
  `pathLength` draw-on, the stroke floors, HTML-over-SVG labels, the chart's lane law, and the whole
  notation rendering including `.pb-sup`. Every use of the canvas and of notation in 37, 42, 43, 44
  inherits your answer.
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"   # documentation only — pass --speed 0.93 to studio voice or you get 0.74
captions: en
music: none
sfx: none
frames: 5
grammar: G1 (+ axes) · G16 curves · G16 · G16 · G5   # frame-day4 § 4 lines 186-220, § 3.3, § 5
pin: hyperframes@0.8.208
ledger_source: writing/prog-basics/ACCURACY-day4.md § 41
---

## Intent

English master of part 41. Copy source of record: `writing/prog-basics/pieces/41-big-o-notation.md` —
it now carries the user-approved **A1** fix, the HIGH one: "a loop inside a loop is O(n²)" became
"a loop inside a loop, **both over n**, is O(n²)", because a fixed inner loop measures x2.0, i.e.
linear. Re-read its `words:` and `target_length:`; do not trust the numbers in this brief.

Read in this order, and no further: `writing/prog-basics/series-bible-day4.md`, your piece file,
`frame.md` § 1 (rungs) + § 3 (phone-legibility for charts, and the two laws that license diagonals:
the **fixed-px SVG canvas** and the **hairline floor**) + § 4 lines 186-220 + **§ 5 in full** (the
revised notation rule) + § 6 + § 9, `WAVE2-PACKET.md` § 4-9, and `ACCURACY-day4.md` § 41 and § 3.

## Resolve the ledger placeholders from ACCURACY-day4.md § 41

The plottable table, executed — pick **one n** and use it on both frames, or the two shapes are not
comparable and the film's argument is a layout accident:

| n | O(1) | O(log n) | O(n) | O(n log n) | O(n²) |
|---|---|---|---|---|---|
| 1 | 1 | 0 | 1 | 0 | 1 |
| 2 | 1 | 1 | 2 | 2 | 4 |
| 4 | 1 | 2 | 4 | 8 | 16 |
| 8 | 1 | 3 | 8 | 24 | 64 |
| 16 | 1 | 4 | 16 | 64 | 256 |
| 32 | 1 | 5 | 32 | 160 | 1024 |
| 64 | 1 | 6 | 64 | 384 | 4096 |

- The doubling pair that proves the shape: `1024 → 4096` = **x4.0** for n×n, against `96 → 192` =
  **x2.0** for a loop with a fixed inner of 3. Screen the pair side by side; that contrast is the A1
  lesson.
- If the chart animates the *loop* rather than the formula, `O(log n)` reads 1,2,3,4,5,6,7 — one
  higher, because a halving `while` runs `floor(log2 n)+1` times. **One convention per frame** (B14);
  41 shows the curve value, 43 shows measured probes, never both.
- The CTA, measured: a dict lookup is **1 hash call** and **0 eq tests** (identity) or **1 eq test**
  (equal new object), flat from 10 keys to 1,000,000 keys.
- Pinned answer, both halves required: **O(1) average, O(n) worst**. The words "average case" and
  "worst case" must appear together, and the worst case has real evidence: a dict of 200 keys all
  hashing to 7 does **200 equality tests in one lookup**.

## Notation law (§ 5 + ACCURACY § 3) — you set the precedent for the tranche

- **The VO line never carries a symbol.** Spoken forms are `big O of one`, `big O of n`,
  `big O of n squared`, `big O of log n`. The graphic carries `O(1)`, `O(n)`, `O(n²)`, `O(log n)`.
- **Expected and correct:** the caption lane will read `big O of n squared` while the diagram reads
  `O(n²)`, because captions come from measured word timings. Do not hand-patch the caption to the
  symbol, and do not remove the symbol from the diagram to make them match.
- Real superscript via `.pb-sup` markup, never a caret: `O(n^2)` in display type reads as code and
  teaches nothing. Watch the non-additive `font-feature-settings` trap (§ 10): do not add a `sups`
  feature to a rule that already zeroes ligatures.
- `Θ` stays **off** screen (pinned comment only) — the user approved the table as written.
- Notation does not count against the word budget; the plain-English line replaces a longer clause.

## Hard rules specific to this part

- **Zero coral.** A curve is not an error; `--stroke` and `--say` cover every state.
- **No grid.** The campaign's ground IS a dot grid at 56px; a chart grid fights it. Axes only.
- Tick labels get the 28px floor, or they are `--muted` chrome with `data-layout-ignore` — and if a
  label is content, it is not chrome, so use fewer ticks.
- Amber marks *this beat's* word. A permanently amber "important curve" is decorative amber.
- Nothing layout-tweens. The curve draws on via `pathLength`; the beam widths are authored states.

## Carrier duty

You are proving the single most-reused mechanism in the tranche. Report, in writing: the SVG canvas
px, the coordinate system and how HTML labels sit over it, stroke widths that survived the phone test,
the notation token markup and its CSS, the `.pb-sup` behaviour under the feature-settings rule, the
lane law for the chart, and every divergence from `frame-day4.md` § 3 and § 5. **42, 43, 44 and 37 are
blocked on your answer.**

## Boundaries

Write only inside this directory. Do not render, publish, or preview-background. Snapshots only.
No BGM, no SFX, no network assets, no font fetches. Gates: `studio assemble . --captions` →
`studio verify .` → `npm run check` → snapshots → read the PNGs. `--speed 0.93` always.

This film is the highest risk in the tranche for going over 34s. The piece file carries a
pre-approved trim if it measures past 34s — use only that, and report before cutting anything else.

## Deviations

(empty — append every departure from the piece file here as you make it)
