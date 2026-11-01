---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 7 of 11
title: prog-basics-07-scope
message: "a name made inside a function lives and dies there, and the global with the same name is a different box"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz (mechanic unchanged)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~44s
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2 (frame.md v2; deliberately NOT the prior 15 projects' look)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
captions: en
music: none
sfx: none
frames: 5
words: 88
---

## Intent

English master of part 7 of `prog-basics`: scope, local vs. global. Portrait 1080x1920, ~44s,
ceiling 54s. Faceless explainer: no URL, no footage, every visual invented on the campaign's own
identity. Copy source of record: `writing/prog-basics/pieces/07-scope.md`. Shape: bible § 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook, **G2c rooms**
(this part is G2c's only user in the batch), G2 box, G3 code chamber, G5 CTA.

## Why this part does not look like the other campaigns

The batch is a different audience and the user ruled the earlier projects out as a reference:
"don't take the previous 15 videos as a reference, you are making a new content for a different
audience". So this part does not reuse the ice canvas / teal accent / Inter + Caveat / floating pill
grammar that `videos/pattern-*`, `videos/osi-layers-*` and `videos/sdlc` all share, and it does not
reuse `frame.md` v1, which mapped the workspace e-commerce brand onto this series. Identity v2
derives the look from the two bars the user set as non-negotiable: the speech must be easy to
understand, and the video must be full of motion, micro-animations and transitions.

## Hard requirements carried by every frame here

- **Clarity.** Short sentences, one idea per beat, a plain-English gloss the moment a term appears,
  nothing that needs re-hearing. Hooks and CTA mechanics are the user's words and are verbatim.
- **Motion.** Scope is drawn as a literal boundary: the function's walls are *drawn* (P4), the local
  box is created inside them and visibly destroyed when the frame returns, the global sits outside
  untouched, and the name lookup is an amber scan line that travels outward and finds nothing.
  The ground drifts and breathes with a phase that starts and ends at zero; the caption highlighter
  runs word by word; every frame carries at least two meaning primitives from frame.md v2 § 7.
  Static text on a background is treated as a defect.

## Accuracy dependency

This part ships **correction #7**, approved by the user at the gate, and the composition is authored
around the AFTER demo (see the piece file's `## Accuracy`). As briefed, `def f(): x = 1` then
`print(x)` → `NameError` was presented as a scope lesson; it is not — that code raises the same
error if `f()` is never written at all, and with `x = 99` at module level it prints `99` in silence.
Shipped instead, both executed on Python 3.13.15: `x = 99 / def f(): x = 1 / f(); print(x)` → `99`,
and a second file with no global where `print(x)` after `f()` really does raise
`NameError: name 'x' is not defined`. Hook and CTA mechanic untouched. Re-verified for this project
by `G:\Content Creation\.tmp\verify_pb07.py`.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` (the campaign's v2 faces, byte-identical to
  parts 1-3) with OFL notices. Inter and Caveat are deliberately absent: they belong to the
  workspace brand lineage, not to this series. `npx hyperframes init` succeeded, so the scaffold is
  the CLI's own; `package.json` is pinned to `hyperframes@0.8.207` to match parts 1-3 rather than
  the `0.8.208` init resolved.
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned here).
  No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions` (known-proven fix #1: the band must sit at `--cap-band-top: 1024px`).
- No network assets at all: identity v2 replaced v1's icon fetch with border-weight semantics.

## Decisions made during this build

- Narration lines 2-4 follow the campaign's clarity re-cut (`writing/prog-basics/BATCH.md` bars),
  not the piece table's longer phrasing: the piece's F3 "And if a global already carries that name,
  the outer one never changes." is a compound conditional that needs re-hearing. F1 and F5 are
  verbatim.
- F4's opener is "Outside the wall, x is ninety-nine." rather than "Top level, x is ninety-nine."
  One place gets one name: F2/F3 already teach the boundary as a wall, and "module", "outside" and
  "top level" would be three names for the same room in nine seconds.
- Coral is used exactly once in this part, on the trace strip, under real interpreter text.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.**

Measured at the gate (2026-10-27):

- film **51.7s** = 4.9 + 9.7 + 11.7 + 16.2 + 9.2; speech 46.235s over 88 words; inside the 54s
  ceiling the corrected demo needs. `length` in the frontmatter is the estimate, not the truth.
- `studio verify` → **0 high, 0 medium** across 7 html files.
- `studio check` (pin 0.8.207) → **check:ok**.
- 150 GSAP calls across the five frames (clone source `prog-basics-03`: 91).
- 22 snapshots read. Five pixel defects found and fixed (below); `pixel-audit` on 60 even samples:
  0 static pairs of 54, floor (y>1344) clean in every scene.
- Frames are generated by `.tmp/pb-run-07.mjs` from the campaign atom sheet (`.tmp/pb-lib.mjs`),
  which it only reads. Re-running that file rewrites this project's frames + STORYBOARD.md and
  nothing else — it never writes `writing/prog-basics/pieces/`.

### Pixel defects found by reading snapshots (all fixed, all re-read)

1. F3's local `x` tab sat under the `f()` room label (x-overlap in the same y band) → tab moved to
   left 340.
2. F3's "one label, two boxes" beat had only one visible label, because the dead box's tab faded to
   0 → the tab now fades to 0.26, so the pulse lands on a live label and a ghost of the dead one.
3. F3's empty-box caret blinked OFF at local 6.1 and stayed dark for the last 5.5s of the frame
   (`steps(1)` + `repeat: 7` ends on the from-value) → `repeat: 18`, so it blinks to 9.9 and holds lit.
4. F1's chamber wall was a 5px hairline that vanished at phone size → 7px, same `--line` token.
5. F5's headline at 7.2cqw left a dead band above the pills → 7.8cqw, still one line (verified).
