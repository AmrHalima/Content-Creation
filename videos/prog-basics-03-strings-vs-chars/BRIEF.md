---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 3 of 11
title: prog-basics-03-strings-vs-chars
message: "a string is a row of characters, and each character sits at an index that starts at zero"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Save (mechanic unchanged)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~40s
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
words: 80
---

## Intent

English master of part 3 of `prog-basics`: strings vs. characters. Portrait 1080x1920,
~40s, ceiling 52s. Faceless explainer: no URL, no footage, every visual invented on the
campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/03-strings-vs-chars.md`. Shape: bible § 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4.

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
- **Motion.** The ground drifts and breathes in every frame with a phase that starts and ends at
  zero; the caption highlighter runs word by word; each frame carries at least two meaning
  primitives from frame.md v2 § 7. Static text on a background is treated as a defect.


## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` copied from
  `.agents/skills/embedded-captions/modes/standard/fonts/files` with OFL notices. Inter and Caveat
  are deliberately absent: they belong to the workspace brand lineage, not to this series.
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned here).
  No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`.
- No network assets at all: identity v2 replaced v1's icon fetch with border-weight semantics.

## Accuracy

confirmed, plus correction #3 shipped (the slice end is excluded, in the VO and on screen). Every fragment on screen was executed on this machine (Python 3.13.15, Node v24.15.0)
— `G:\Content Creation\.tmp\verify_v3.py` and `.tmp\v4.py`.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.**
