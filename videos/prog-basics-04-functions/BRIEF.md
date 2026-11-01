---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 4 of 11
title: prog-basics-04-functions
message: "write the steps once, name them, and one fix repairs every call"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Tag (mechanic unchanged)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~45s
ceiling: 52s
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
words: 87
---

## Intent

English master of part 4 of `prog-basics`: what is a function. Portrait 1080x1920, ~45s, ceiling
52s. Faceless explainer: no URL, no footage, every visual invented on the campaign's own identity.
Copy source of record: `writing/prog-basics/pieces/04-functions.md`. Shape: bible § 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook, G2 recipe box,
G2 + call chips, G3 code chamber, G5 CTA.

Clone source for CSS atoms and motion idiom: `videos/prog-basics-03-strings-vs-chars/`
(verify:ok check:ok, 91 GSAP calls in its frame files). Same `frame.md` v2, same shared stylesheet,
same caption lane. Only the copy, the `fN-`/`cN-` id prefixes, the composition id, the durations and
the motion per beat change.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing. The core idea, in the learner's words: write the steps once, name them,
  call them by name — and one fix repairs every call. Hooks and CTA mechanics are the user's words
  and are verbatim.
- **Motion.** The ground drifts and breathes in every frame with a phase that starts and ends at
  zero; the caption highlighter runs word by word; each frame carries at least two meaning
  primitives from frame.md v2 § 7 plus an exit push so no join is a cut to an identical board.
  Target: match or exceed the clone source's 91 GSAP calls. Two moves are load-bearing for this
  part: one definition duplicating into two named calls, and one edit propagating to every call
  site.

## Deviations from the piece file (all recorded, none silent)

The piece file was written before `frame.md` v2; its colour and canvas words are v1 vocabulary.
Per the batch rule that frame.md v2 is the only visual authority:

- `teal` → v2 roles. `twice?` (the sharpest word of the hook, and the word the voice is on) goes on
  the amber plate (v2 § 6), not teal. `greet` keeps amber as *the named token* through F4. The
  mechanic verb plate `SEND THIS` is v2's solid amber plate, not teal.
- `#B5B5B5` for `name` → v2 `--muted` `#9BA6B2` (the palette has no other grey).
- "Light canvas" (F1) → v2 graphite ground `#15181D` in every frame; there is no light frame in the
  campaign.
- F3's "the text inside the box changes" is implemented as a status strip inside the chamber
  (`3 calls use this` → `1 edit, 3 calls fixed`) via the sanctioned time-proxy shape, plus an amber
  edit highlight on the edited step line and the required triple chip pulse at 0.1s spacing. The
  three recipe steps themselves keep their exact words so F4's approved code fragment stays the
  single true version of the recipe.
- F3's first sentence is re-cut for one-hearing clarity ("Every time you call it, the steps run
  again."), and F3/F4 are re-broken into shorter breaths. No term, no keyword, no hook and no CTA
  mechanic changed. `## Accuracy` needs no correction: verified on Python 3.13.15.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` copied from the clone source's
  `assets/fonts/` (same files as parts 01-03, OFL notices beside them). The BATCH.md bash block
  still lists Inter + Caveat from `videos/pattern-singleton/` — that is the v1 lineage and
  `frame.md` v2 drops both faces; this project follows frame.md.
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned by this
  file). No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe, but `frame.md` (v2) overrides it for this
  campaign on every video decision: palette, faces, radii, motion.
- No network assets: identity v2 replaced v1's icon fetch with border-weight semantics, so the
  piece's "small tag icon" is not fetched (see Gate state).

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No publish, no schedule, no Arabic pass,
no BGM, no SFX. The piece file's tag icon was not resolved: this campaign ships with zero network
assets, and the CTA carries the amber plate + a `tag them here` pill instead of an icon.

## Decisions written back mid-run (measured, not planned)

- Measured VO (Kokoro af_heart @0.74): 4.587 / 8.363 / 10.283 / 10.603 / 4.181 = **38.017s speech**,
  87 words. Authored air 1.0s per cut (2.0s on F5) → **film 44.1s**, scene starts 0 / 5.6 / 15.0 /
  26.3 / 37.9. Every emphasis time in the frame files is a measured onset from `audio_meta.json`.
- F3's payoff is carried by a status strip inside the chamber that swaps
  `3 calls use this` → `1 edit, 3 calls fixed` at the measured onset of "Every call" (t 8.66), via
  the time-proxy shape (known-traps #3), then the three chips pulse at 8.66 / 8.76 / 8.86.
- F4's tail was static at the first pixel audit (PSNR 45.5 dB between frames 0.4s apart at t 10.7 /
  11.1), which frame.md § 10 rule 4 treats as a finding. Fixed by two things that mean something:
  the editor cursor keeps blinking on the last line after the typing ends, and a mint run-dot
  travels the rail from the definition through both call stubs (t 10.06 → 11.16). Re-measured:
  37.9 dB.
- F5's first layout put the pill at 650 and the plate at 770 (32px apart) — cramped at phone size.
  Re-spaced to 616 / 744 with the question and chips moved up 20/30px; the brandline stays at 900,
  so the whole card still clears the 1004 content floor.
- Frames are generated from the clone's shared CSS atom block verbatim by
  `G:/Content Creation/.tmp/pb04-build-frames.mjs` (reads `01-hook.html` from part 03, appends this
  part's per-frame rules and bodies). Re-running it is how these files are reproduced.

