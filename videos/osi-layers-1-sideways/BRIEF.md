---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: osi-layers
part: 1 of 3
title: sideways
message: "Every OSI layer talks sideways to the same layer on the other machine — the stack is seven peer conversations, not one ladder."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 65s
angle: concept (opinionated thesis; explicitly not a layer-by-layer recital)
narration: yes
audience: beginners to networking who have seen the seven-layer diagram once and never got it to stick
style_preset: code-editorial
voice: am_michael
captions: en
music: none
---

## Intent

Part 1 of a three-part beginner series on what the OSI layers are. It is the thesis
carrier: the whole series rests on one reading — **read the diagram sideways**. Layer N
on your machine is not primarily talking to layer N-1 below it; it is talking to layer N
on the other end. The vertical ladder is plumbing; the horizontal pairs are the actual
conversations.

This part exists to make that flip land in ~65 seconds for someone who has never
internalised the model. Tone is peer-to-peer and dry, never classroom. It must stand
alone: no references to parts 2 or 3, and part 1 must be watchable in any order relative
to the others.

English only. Arabic for this campaign is a text deliverable (article + social set), not
a video variant.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- Thesis frame (`Frame 6`) uses grammar A — two host chambers side by side with one long
  horizontal peer arrow — as the payoff; every other frame uses grammar B, one host per
  frame. See `writing/osi-layers/series-bible.md`.
- Portrait override: `videos/sdlc`'s "stack vertically, never side-by-side" is local
  precedent, not law. This series' thesis is a horizontal relationship, so the two-chamber
  payoff frame is side-by-side on purpose. The densest frame is snapshot-measured at
  1080x1920 before rendering.
- Captions ON, English, caption-pill keep-out respected (content planned into the top
  ~83%, cap at y ≈ 1594 on a 1920-tall canvas).
- No BGM. Sound effects are rationed across the series (≤4 marks total), not per film.
- Hook is verbatim from the approved brief: "You've seen this stack seven times. Almost
  everyone reads it the wrong direction."

## Notes

- Render is user-gated. Nothing in this project renders to MP4 without an explicit yes.
- Voice: Kokoro `am_michael` (local). `ELEVENLABS_API_KEY` is present in the root `.env`
  but `.agents/design.md` has `voice_id: ""`, so ElevenLabs is not usable without the
  user's voice id — reported, not silently substituted.
- `npx hyperframes skills update faceless-explainer` failed twice on this machine's
  network (`curl 56` connection reset / clone timeout). Building from the installed
  skill on disk, not from memory; failure surfaced in the run report.
- Style lineage: `.agents/design.md` (cream #FFFFEB / ink #1A1A1A / lavender #F0D7FF /
  forest #034F46 / ember #FFA946) remixed onto the `code-editorial` preset. `design.md`
  is copied into this project; `frame.md` (preset + remix output) wins precedence.
- Body face stays Inter (shipped as woff2 in the preset) — `design.md` licenses it as a
  body substitute. Figtree has no font file on disk, so it is not named in `tokens.json`:
  an unsourced `@font-face` fails lint and renders as a fallback.
- Campaign-level shared grammar, claims, and constraints: `G:\Content Creation\writing\osi-layers\series-bible.md`.
- Render usage at workflow start: `{"status":"unknown","reason":"unsupported_harness"}` —
  usage is unknown; do not guess an allowance. Re-checked before render.

## Frame pass state (written back after authoring; re-check usage before rendering)

- 7/7 frames authored in `compositions/frames/`, all `status: animated` in `STORYBOARD.md`.
- `index.html` assembled by `assemble-index.mjs`: 7 frame clips (track 1), 7 voice wavs (track
  10, existing `assets/voice/0N.wav` — no audio regenerated), captions overlay (track 2,
  `captions.mjs build` → 43 groups), no BGM, 0 SFX. **Total 63.34s** against the 65s target.
- `data-track-kind="captions"` was hand-added to `#el-captions` in `index.html` (the assembler
  does not emit it; re-add after any re-assembly).
- 4 storyboard transitions injected + verified; the injection extended the roots of F1/F2/F5/F6
  by their overlap tails.
- `npm run check`: **passed, 0 errors**. 168 lint warnings, all `id_requires_css_escape` — kept
  deliberately, because the validated sibling `videos/sdlc` ships the same `<frame-id>-<element>`
  convention and every lookup is `getElementById`, never a `#id` selector. Layout, motion,
  contrast (82/82 AA) and craft sections are clean.
- Snapshots read at 18.5 / 27.5 / 39 / 51.5 / 58.5 / 61.44s; pixel measurements in
  `STORYBOARD.md` § Frame pass. Grammar A held; arrow travel 447px; nothing load-bearing below
  y=1236 in the thesis frame.
- Background preview: `http://127.0.0.1:3002/#project/osi-layers-1-sideways` (stop with
  `npx hyperframes preview --stop`).
- **Not done, by instruction: no render, no publish, no touching P2/P3.** Render is GATE 4 and is
  awaiting the user's approval.
