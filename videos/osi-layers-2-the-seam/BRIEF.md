---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: osi-layers
part: 2 of 3
title: the-seam
message: "Because each layer is a sideways conversation with a stable job, you can replace one layer's implementation and the layer above never notices."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 55s
angle: concept (the payoff the sideways reading buys — two worked swaps, not a recital)
narration: yes
audience: beginners to networking who have seen the seven-layer diagram once and never got it to stick
style_preset: code-editorial
voice: am_michael
captions: en
music: none
---

## Intent

Part 2. The payoff of reading sideways: if each layer's contract is with the same layer
on the other machine, then a layer is a *slot with a job*, and slots can be refilled.
Two worked swaps, named on screen in their real protocol names: **HTTP/2 over TCP becomes
HTTP/3 over QUIC**, and **Wi-Fi replaces Ethernet**. In both, the transport changed and
the application did not notice.

Stands alone. Re-establishes the sideways frame in its first two narration lines so a
viewer arriving here first is not lost. No references to parts 1 or 3.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- Real protocol names on screen (HTTP/2, HTTP/3, TCP, QUIC, Wi-Fi, Ethernet) — decided:
  named rather than blurred into beginner-safe paraphrase.
- On-screen claims stay at "the transport changed, the application didn't notice."
- Captions ON, English, top-~83% keep-out (cap at y ≈ 1594).
- No BGM; SFX rationed series-wide (≤4 marks across all three parts).

## Notes

- HOLD: the QUIC-is-both-transport-and-application-ish nuance (it sits in UDP's slot and
  blurs the L4/L7 line) is deliberately NOT stated in the video. It belongs in the
  article. The video frame that shows QUIC stays honest by claiming only what the swap
  demonstrates.
- Frame builds are gated on part 1 validating the visual grammar — this part clones
  `osi-layers-1-sideways/compositions/frames/*.html` as its starting point instead of
  re-inventing the stage. **Done 2026-10-22:** all six frames built, `index.html`
  assembled, storyboard at `status: animated`, check at 0 errors / 0 warnings.
- Render is user-gated. Nothing renders to MP4 without an explicit yes.
- Voice: Kokoro `am_michael` (local); ElevenLabs unusable here (`voice_id` empty in
  `.agents/design.md`). Skills-refresh failure and font rationale: see part 1's brief.
- Shared grammar, claims, constraints: `G:\Content Creation\writing\osi-layers\series-bible.md`.
- Render usage: `status: unknown` (`unsupported_harness`). Do not guess an allowance.

## Production log (2026-10-22)

- VO: Kokoro `am_michael`, `--speed 0.74`, 6 lines, 54.527s total (brief target ~55s).
  Ran through `.hyperframes/engine-kokoro.mjs` as the entry point — calling `audio.mjs`
  directly lets the auto order pick ElevenLabs, which fails on `am_michael`.
- Word timings are **estimated alignment** from `.hyperframes/cue-times.mjs`
  (char-proportional + fixed punctuation pauses), same as part 1: `hyperframes transcribe`
  returns `whisper_unavailable` on this machine. Not native TTS timestamps.
- SFX: 1 mark (series budget 4; P1 spent 2, this part 1, **1 left for P3**).
  `whoosh-short` → `.media/audio/sfx/sfx_002.mp3` (0.575s), mounted on F4 at 26.018s
  (= 24.618 + 1.4s offset), `data-volume 0.35`. The engine first fetched a 4.5s CC BY
  Openverse swell; discarded for series consistency with P1's 0.57s accent — the file is
  still on disk at `assets/sfx/` but is not mounted (see `audio_meta.json` `superseded`).
- Captions: 42 groups, `data-track-kind="captions"` present on `#el-captions` after
  assembly (the assembler drops it; re-add on every re-assemble).
- Three defects found only by reading snapshots, not by `check`:
  1. Five elements were written with `id="fN-*"` while the CSS rules are `.fN-*`, so they
     rendered **unstyled in the top-left corner** (default serif, position 0,0) and
     collided with each other. `check` passed the whole time. Fixed by adding the class.
  2. `.f2-slotlabel` is a bare `<span>`: GSAP wrote `transform` onto it and the browser
     ignored it (inline non-replaced elements take no transform), so the layer-4 label
     faded without sliding out. Fixed with `display: inline-block` — part 1's grammar
     already does this on every animated span.
  3. The travelling dot in F5 sat on the **layer-2** shaft (`top: 926px`, and 34px off the
     centre line). The storyboard says layer 3 never blinks. Fixed to `top: 722px`, which
     is the L3 shaft's centre (735 − 13).
- Type floor: every reading element is ≥ 2.6cqw (28px); muted mono annotation lines stay
  at 1.35–1.7cqw and carry `data-layout-ignore`, exactly part 1's split.
- Known, accepted: `content_overlap` info at t=24.813 is the F3→F4 zoom-through
  double-exposure, under 0.3s (verified at 24.62 / 24.78 / 25.05 — clean close-up by
  25.05). `connector_orphan` infos at 27.264 are the F4 peer pills being legitimately
  off-canvas mid-zoom (marked `data-layout-allow-overflow`); at 45.439 it is the F5 dot
  clip ending 0.5s before the crossfade-extended shaft.
- Preview: `npx hyperframes preview --background` → http://127.0.0.1:3003 (PID 14576).
  Part 1's preview still up on 3002 (PID 6864).
- **Not done, on purpose:** no MP4 render, no P3 frames, nothing published.
