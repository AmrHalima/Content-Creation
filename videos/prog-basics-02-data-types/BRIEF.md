---
workflow: hyperframes (faceless-explainer route, retired into /hyperframes 2026-10-27)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 2 of 11
title: prog-basics-02-data-types
message: "The type decides what an operation means: plus on numbers adds, plus on text glues."
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz - "Guess what '5' * 3 gives in Python. Comment it." (unchanged)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 40s
ceiling: 52s
narration: yes
audience: first-week programming learners (second audience lane, series-bible section 2)
style_preset: teaching-chamber
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
captions: en
music: none
sfx: none
frames: 5
words: 77
---

## Intent

English master of part 2 of `prog-basics`: a faceless explainer on **data types**. Copy source of
record: `writing/prog-basics/pieces/02-data-types.md`. Shape: bible § 3.

## Why this part is built with part 1, not after it

Part 1 carries G1/G2/G3/G5. Part 2 is the only early part that uses **G4, the split** — two
chambers side by side, ≤3 lines each. G4 is also in parts 06, 10 and 11, so a bad split here is
paid for four times. Building 01 and 02 together puts every grammar in the series in front of the
user before parts 3-11 clone anything.

## Decisions taken in this run

- **The voice does not say the quotes; the screen does.** F1 is spoken "why does five plus five give
  you fifty-five" while the frame shows `'5' + '5'` with each quoted group taking the amber say-plate
  as the voice reaches it. The mismatch is the hook: the audio states the impossible thing, the visual
  is the reason. Recorded here because it is a deliberate exception to "say what is on screen".
  (v1 put the quote glyphs in teal; identity v2 has no teal — amber is "the word being said now".)
- **Screen shows Python's own names** `int / float / str / bool` while the voice says integer,
  float, string, boolean (PROPOSED in the piece file; awaiting approval at gate 2).
- **`True` is capitalised on screen** (PROPOSED, same reason).
- **Two type tags, not one.** F2 adds the corner `type tag` to the box motif; F3 multiplies the box
  into four. Both stay inside `frame.md` § 3's geometry.
- F4's split is the first side-by-side in the campaign. If it fails at 1080x1920 the fallback is a
  vertical stack, which is the bible's default anyway.

## Assets

Space Grotesk 400/700 + JetBrains Mono 400/700, both on disk in `assets/fonts/` with OFL notices
(copied locally from `videos/prog-basics-01-variable/assets/fonts/`, not fetched). Inter, Inter's and
Caveat's files remain on disk but nothing references them any more. Caption skin from
`writing/prog-basics/caption-skin.html` (identity v2). No images, no BGM, no SFX, no network.

## Accuracy

Verified on Python 3.13.15: `5 + 5` → `10`; `'5' + '5'` → `'55'`; and the CTA's own answer
`'5' * 3` → `'555'`, which is what makes the quiz fair. `type(True).__name__` → `bool`.

## Gate state

Built to the pre-render gate only (voice, cues, frames, assemble, verify, check, snapshot).
**No render has been made and none is authorized.**

## v2 re-pass (2026-10-27, after the campaign identity rewrite)

This part was authored at 12:20 on identity **v1** (Ice `#F5FCFD` canvas, Inter + Caveat, teal as
generic emphasis, radius-9999 label pills, 3-5 ambient pills per frame, no exit push) — the same
build hour as part 01, before `frame.md` was rewritten to v2 "the bench" at ~12:57. Converted here;
**part 01's converted frames are the reference and its atom block is reused byte-for-byte** (diff of
`compositions/frames/*` lines 2-141 against `videos/prog-basics-01-variable/` is empty apart from one
trailing-whitespace line), so no CSS atom was re-derived.

- **The shipped defect: the caption skin declared `font-family:"Inter"` with no `@font-face`
  anywhere in `compositions/captions.html` or `.hyperframes/caption-skin.html`.** Both gates passed
  it; every caption in this part was rendering in system sans. Fixed by installing the campaign's v2
  skin (which declares Space Grotesk 400/700 against real files on disk) and re-running
  `studio assemble --captions`, so the regeneration is reproducible rather than hand-patched.
- `frame.md` replaced with the v2 copy (was `version: 1`, derived from `.agents/design.md`).
- Ground: graphite `#15181D` + dot grid + amber/mint breathing glows + the 1010px caption shelf,
  identical in all five frames, every ground animation zero-returning. The per-frame pill layer is
  gone (v2 § 3: it reset the world five times per film).
- Colour roles now enforced: amber = the word the voice is on, mint = a value / executed output,
  coral unused (this part raises no interpreter error). The old teal is gone from all five frames.
- F1: `'5' + '5'` as display mono over the ground, say-plates on each quoted group at 0.62/1.42,
  `'55'` dropping onto a terminal strip at 2.28. F2: the box is now a chamber with a **name tab**
  reading `int` (was a radius-9999 pill), value mint, empty chamber blinks a caret before the drop.
  F3: G2b row — four slots tick in under the spoken count and sit visibly **empty with blinking
  carets** until each type is named, then the tab drops, the value falls and the border flashes mint.
  F4 (G4 split, structure and filename kept for parts 06/10): the two panels now perform two
  different **physical** operations — the numbers fuse (chips travel, overlap, collapse to 0.18 as
  `10` prints) while the strings abut (chips slide edge-to-edge, the operator is pushed out, a
  `--line` seam shows two pieces are still two) — then P10 strikes the left `+` on "stops adding".
  F5: Caveat scribble and the teal CTA pill replaced by the amber verb plate; `PROGRAMMING BASICS ·
  02 · BEGINNER` brandline; a "here is the quiz" display line added because 0.0-2.0s was an empty
  board while the VO said exactly that.
- Exit push added to F1-F4 (0.3s `y:-60` inside each frame's air); F5 holds alone as the loop frame.
- Motion sites **63 → 159**. Narration, word timings and the audio metas are **untouched** — no
  `voice`/`cues` cascade was needed, and air per frame stays 1.24-1.64s.
- Pixel pass: 39 + 9 + 4 + 8 snapshots read. Defects found in pixels that both gates passed: the four
  index digits in F3 were stacked on one another (absolute with no `left`), the empty F3 chambers
  were near-invisible on the ground (faint border override), the amber plate on the narrow `+` glyph
  in F2 read as a blob, and F5's first two seconds were an empty board. All four fixed and re-read.
