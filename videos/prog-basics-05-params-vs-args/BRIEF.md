---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 5 of 11
title: prog-basics-05-params-vs-args
message: "the parameter is the empty seat in the definition; the argument is the value that sits in it at the call"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Comment "seat" (mechanic unchanged)
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
words: 89
---

## Intent

English master of part 5 of `prog-basics`: parameters vs. arguments. Portrait 1080x1920, ~45s,
ceiling 52s. Faceless explainer: no URL, no footage, every visual invented on the campaign's own
identity. Copy source of record: `writing/prog-basics/pieces/05-params-vs-args.md`. Shape: bible § 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook, G2 box, G2 box
(two chambers), G3 code chamber, G5 CTA. Mechanic: **Myth** — the misconception being killed is
"they're the same word for the same thing".

## Why this part does not look like the other campaigns

The batch is a different audience and the user ruled the earlier projects out as a reference:
"don't take the previous 15 videos as a reference, you are making a new content for a different
audience". So this part does not reuse the ice canvas / teal accent / Inter + Caveat / floating pill
grammar that `videos/pattern-*`, `videos/osi-layers-*` and `videos/sdlc` all share, and it does not
reuse `frame.md` v1, which mapped the workspace e-commerce brand onto this series. Identity v2
derives the look from the two bars the user set as non-negotiable: the speech must be easy to
understand, and the video must be full of motion, micro-animations and transitions.

This part is also the series' **one permitted contrast-reveal**: F1's hook "are not the same thing"
(frame.md v2 § 9). No other part may use that shape, and nothing downstream here repeats it — no
"it's not X, it's Y" in F2-F5, no "not a bug", no "different for the caller".

## The meaning-carrying motion for this part

pb-05's lesson is a transfer, so the animation is literal: the seat in `def add(a, b)` is drawn
empty (dashed border, dim mint caret), and the value `2` from `add(2, 3)` **travels into it**. F2
shows the drop-in (P2) with the border going dashed → solid. F4 shows the crossing (P8 `arrow-run`):
definition and call live as two places in the same chamber and a mint chip hops along a drawn wire
from the call into the parameter seat, then `3` into `b`. F3 holds the two chambers side by side so
the left one stays empty while the right one fills, empties and fills again — the seat is permanent,
the value is not. A frame that only states the difference in text is a defect here.

## Hard requirements carried by every frame here

- **Clarity.** Short sentences, one idea per beat, a plain-English gloss the moment a term appears,
  nothing that needs re-hearing. Hooks and CTA mechanics are the user's words and are verbatim.
  Narration is the piece file's approved 89 words, unchanged.
- **Motion.** The ground drifts and breathes in every frame with a phase that starts and ends at
  zero; the caption highlighter runs word by word; each frame carries at least two meaning
  primitives from frame.md v2 § 7; every frame wipes its content in from its own edge and pushes
  out into its own silence pad. Static text on a background is treated as a defect. Target is the
  clone source's density: 91 GSAP calls across 5 frames.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` copied from the finished v2 template
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` with OFL notices. Inter and Caveat are
  deliberately absent (frame.md v2 header drops them: they belong to the workspace brand lineage,
  not to this series), which is why the BATCH.md recipe's `pattern-singleton` Inter/Caveat copy is
  not used here.
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned here).
  No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions` (band at y=1024; the generator's built-in 1600px band sits in the
  platform overlay zone).
- No network assets at all: identity v2 replaced v1's icon fetch with border-weight semantics.

## Colour-role decision (the piece file predates identity v2)

`pieces/05-params-vs-args.md` describes its visuals in v1 words — "light canvas", "teal",
"#EBEBEB hairline", "label pill". `frame.md` v2 is the only visual authority, so the same intents
map to: dark bench ground `#15181D`, hairline `rgba(255,255,255,0.08/0.16)`, name tab instead of a
pill, and teal → **mint `#5AD6A0` for values** with **amber `#FFD166` only for the word being spoken
right now**. The piece's "colour hand-off is the lesson" is kept: `a`/`b` go amber while
"parameters" is said, `2`/`3` (mint by role, they are values) go amber while "arguments" is said,
then fall back to mint.

## Accuracy

confirmed — `def add(a, b)` with `add(2, 3)` returns `5`; calling with one argument raises
`TypeError: missing 1 required positional argument`, which is what licenses the "one seat per value"
reading on F5. No accuracy change proposed. Fragments re-executed on this machine (Python 3.13.15)
before authoring: `G:\Content Creation\.tmp\pb05_accuracy.py`.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No Arabic pass, no BGM, no SFX, no publish.
No `renders/` directory and no `.mp4` anywhere in this project (verified with
`find . -name "*.mp4"` → empty). No preview server was ever started.

## Measured state (this run)

| | |
|---|---|
| film | 42.9s (target ~45s, ceiling 52s) · 5 frames · 84 spoken words · 37.548s of speech |
| frames | 6.4 / 12.5 / 8.7 / 9.9 / 5.4s (VO + 1.0s authored air, 1.4s on the last) |
| GSAP calls | 19 + 32 + 32 + 55 + 26 = **164** (clone source pb-03: 91) |
| `studio verify` | 0 high, 0 medium across 7 html files |
| `studio check` | ok — lint 0/0, contrast 25/25 WCAG AA, layout 0 issues, motion 0, craft 0 |
| check warnings kept | 5 × `clip_media_fit` (audio shorter than its slot) — that *is* the authored air, BATCH.md fix #6 |
| snapshots read | 26 frames across 3 passes + 5 contact sheets |
| motion audit | PSNR between frames 0.4s apart: F3 26.8 dB, F4 25.3 dB, F2 (0.8s) 24.7 dB — every scene measurably moving |

## Defects found only in the pixels (a green check saw none of them)

1. **F1/F2/F5 highlighter contrast.** The clone's P1 idiom (a sibling `.pb-hl` plate + a colour
   tween on the word) put dark-on-graphite and ink-on-amber in the same transition window:
   `#f1-tx0 1.28:1`, `#f1-tx1 1.93:1`. Fixed by making each emphasised phrase one object that
   carries its own amber background and arrives by `clip-path` wipe — never a moment where the text
   is over an uncovered field. `#f2-seat`, `#f5-sw` got the same treatment before they could ship.
2. **Both inline comments were on screen from the start of their line.** `.f4-cmt` had no
   `opacity:0`, and the comment's `fromTo` carries `immediateRender:false`, so nothing hid it until
   its spoken word. The piece requires each comment to enter *only* with its own word.
3. **Three value chips stacked into one illegible glyph in F3** (known-traps #10, exactly): the
   "value leaves" `fromTo`s painted their `opacity: 1` from-state at t=0 because they lacked
   `immediateRender: false`. Visible at 1.1s, 4.1s and 6.3s; invisible to lint, layout, motion and
   contrast.
4. **A blinking caret sitting on the pixel a value lands on** (F3 right chamber, F5 middle seat) —
   the caret read as a second digit. Each caret now ends its blink cycle invisible before the value
   arrives and restarts when the seat is empty again.
5. **`a`/`b` kept `font-weight:700` after their utterance** (frame.md § 2: 700 only on the token
   being named). Now reverted with the colour.
6. **F2's `ARGUMENT` label was left pointing at nothing** once its value flew into the seat. It now
   travels with the value.

## Frame provenance

The five files in `compositions/frames/` are plain, hand-editable HTML. They were emitted once by
`.tmp/pb05-frames/build-frames.mjs`, whose only purpose was to copy the shared CSS atom block
**byte-for-byte** out of `videos/prog-basics-03-strings-vs-chars/compositions/frames/01-hook.html`
(the series' look is not re-derived per part). Edit the frame HTML directly from here on; the
generator is scratch, not a build step, and nothing in this project reads it.

