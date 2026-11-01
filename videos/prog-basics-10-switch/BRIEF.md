---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 10 of 11
title: prog-basics-10-switch
message: "a switch is a tidy pile of if statements, and its one real trap is the missing break"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Debate (mechanic unchanged)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~46s
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
words: 94
grammar: G1 G4 G3 G5
---

## Intent

English master of part 10 of `prog-basics`: switch statements. Portrait 1080x1920, ~46s, ceiling
52s. Faceless explainer: no URL, no footage, every visual invented on the campaign's own identity.
Copy source of record: `writing/prog-basics/pieces/10-switch.md`. Shape: bible § 3 (F1 hook,
F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook, **G4 split** (F2),
custom fall-through mechanism (F3), G3 code chamber ×2 languages (F4), G5 CTA.

Clone source for CSS atoms and motion idiom: `videos/prog-basics-03-strings-vs-chars/`
(verify:ok check:ok). `videos/prog-basics-06-return-vs-print/` supplies the v2 treatment of the G4
split pair (`.cd-root` + panel classes, the sibling panel held at `opacity: 0.32` while the other is
live). `videos/prog-basics-02-data-types/compositions/frames/04-split.html` was read for **structure
only** — it predates identity v2 (Inter, `#0F1818` petrol field, teal `#7BD3D8`, coral `#CD3333`) and
nothing about its colour, type or chamber treatment was copied.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing. `case`, `break`, `fall through` and `match` each get a gloss in the same
  breath they appear. Hooks and CTA mechanics are the user's words and are verbatim.
- **Motion.** Bar: ≥ the sibling `prog-basics-05-params-vs-args` count of 164 GSAP sites across the
  5 frames. Two meaning-carriers are load-bearing and must read as motion, not as text:
  (1) **fall-through as a literal downward spill** — the bar runs from `case 'sat'` on down through
  `sun` and `mon`, lighting each case it passes, and a `break` chip drops in and stops it dead;
  (2) **the subject chip `day` travelling once** down the switch ladder and stopping at the match,
  while the if-chain panel re-tests a different question at every rung.

## Approved corrections implemented in this project

1. **CORRECTIONS.md § 3 (pb-10, TRAP).** F4's two chambers each carry their own visible titlebar
   filename — `day.js` (chip `JAVASCRIPT`) and `day.py` (chip `PYTHON`) — because this is the only
   part in the batch showing a non-Python fragment. Without the labels a viewer who has typed Python
   for parts 01-09 pastes `switch (day) {` into a REPL and gets `SyntaxError: invalid syntax`, and
   the series caused it. Executed here: `compile()` of that fragment on Python 3.13.15 →
   `SyntaxError: invalid syntax`.
2. **CORRECTIONS.md second-order finding 3.** The JS chamber's elided case body is drawn as a single
   `…` glyph in its own `.f4-elide` span (an elision mark, styled as chrome, not as code), never as
   three typed periods. The piece file's `...; break;` is not runnable JS — re-executed here on node
   v24.15.0: `SyntaxError: Unexpected token ';'`. The Python chamber's `case _:` body is a real
   statement (`pass`), so the elision convention is never legal on one side and illegal on the other.
3. **The piece file's own Accuracy correction** — `case _ | 'sat' | 'sun'` is not valid Python.
   Re-executed here: `SyntaxError: wildcard makes remaining patterns unreachable`. No frame groups a
   wildcard with other patterns; `case _:` appears alone as the catch-all, which parses.

## Deviations from the piece file (all recorded, none silent)

The piece file was written before `frame.md` v2; its colour and canvas words are v1 vocabulary.
Per the batch rule that frame.md v2 is the only visual authority:

- `teal` → v2 roles. The token the voice is naming goes amber `#FFD166`; a value or a run-output goes
  mint `#5AD6A0`. The mechanic verb plate `ARGUE IT BELOW` is v2's solid amber plate.
- "Light canvas" (F1) → v2 graphite ground `#15181D` in every frame; there is no light frame here.
- `#CD3333` → the v2 palette's `#FF6B5A`, **and it is not used for fall-through at all**. The piece
  file says F3's skipped case labels light coral, "the only place the series uses coral for a
  *behaviour* rather than a raised exception". frame.md v2 § 1 forbids exactly that: coral is for
  interpreter-raised text only, and pb-10 raises no exception on screen. The skipped labels light
  **amber** instead — the voice is on "the next case runs" at that instant, which is what amber means.
- `case`/`break` glosses added to F2/F3 narration (polish, permitted by bible § 0). No term, hook or
  CTA mechanic changed. F3 was re-cut into five ≤8-word breaths; the wry line "Saturday also runs
  Sunday" is kept verbatim as its own beat.
- F2 is the G4 split (`switch` vs `if-chain`), F4 is the G3 chamber pair. The piece file labels F2
  "G2 + G4" and F4 "G3, split across two languages"; BATCH's grammar row for pb-10 is `G1 G4 G3 G5`,
  so the split is F2 and the chamber is F4. Both frames are two-panel; they differ in archetype
  (chip ladder vs code chamber), wipe direction and hero position so no join lands on a twin.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices, copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` per the corrected BATCH recipe. The old
  Inter/Caveat set is dropped (`frame.md` v2 § fonts_dropped).
- Voice: Kokoro `af_heart` @0.74 through `studio voice` (offline, free, provider pinned by this file).
  No BGM, no SFX (bible § 7) — no network asset is resolved by this project.
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` v2 overrides it for every video
  decision in this campaign.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized — there is no MP4 anywhere in this project**
(`find . -name "*.mp4"` → 0; no `renders/` directory exists). No publish, no schedule, no Arabic
pass, no BGM, no SFX, no network assets, no preview server started (bible § 12 rule 4: parallel
runs use `snapshot --at`, not `preview --background`).

## Decisions written back mid-run (measured, not planned)

- **Script went through three cuts.** 97 words measured **45.40s** of speech → a ~51s film, outside
  bible § 1's 42-48s band. 90 words measured 44.40s. The shipped cut is **88 words** (the brief's
  94 lost four words to sentence-final pauses, and the `falling through` gloss moved from the voice to
  an on-screen annotation that arrives in the 0.76s gap between "too." and "Saturday"). Line 2 was also
  re-ordered so the definition of `case` follows the example: bible § 2 bans opening a beat on a
  definition.
- **Measured VO** (Kokoro `af_heart` @0.74, `studio voice`): 3.733 / 12.181 / 13.611 / 6.357 / 5.803
  = **41.683s speech**, 88 words. Authored air 1.67 / 0.92 / 0.89 / 0.94 / 1.70 → **film 47.8s**,
  scene starts 0 / 5.4 / 18.5 / 33.0 / 40.3. F1 carries the largest air because it is also the cover.
  Every emphasis time in the frame files is a measured onset from `audio_meta.json`
  (e.g. `break`@1.74, `Skip`@4.28, `Saturday`@7.74, `Kotlin`@10.66, `match`@4.14, `Argue`@4.40).
- **Motion: 211 GSAP sites** across the 5 frames (28 / 39 / 58 / 52 / 34) against the 164 bar set by
  `prog-basics-05-params-vs-args`. PSNR between frames 0.4s apart inside each scene — lower means more
  change; the siblings' band was 25-27 dB: F1 24.28 · F2 24.53 / 25.50 / 27.08 · F3 23.96 / 24.19 /
  25.14 · F4 24.05 / 27.58 · F5 24.92 (ring travel) and 28.27 (held tail).
- **Five defects found only by reading pixels**, all fixed: (1) the F2 verdict line wrapped and its
  second line crossed the caption shelf at 1010 — shortened to `one subject, many tests` /
  `a new question each line` with `white-space:nowrap`; (2) F5's selection ring sat on top of the `or`
  connector — ring geometry and connector moved into the 424-466 channel; (3) `<b>` spans inside flex
  containers lost their leading space, rendering `thecase belowran too` and `isone keyword` — fixed
  with `&nbsp;`; (4) F5's held tail measured 30.5 dB, i.e. nearly frozen, so the ring now keeps
  travelling SWITCH → IF-ELSE → released while the card loops (28.3 dB); (5) that loop came to rest
  with IF-ELSE CHAIN ringed, which answers the debate for the viewer — the release now completes at
  7.26s so the loop rests on neither side.
- **Gates as observed at the moment of writing** (`node studio/tools/studio.mjs verify
  videos/prog-basics-10-switch` → `0 high, 0 medium across 7 html files`; `node studio/tools/
  studio.mjs check videos/prog-basics-10-switch` → `check:ok`, and the full
  `hyperframes@0.8.208 check` reports **0 errors, 5 warnings** — all five are `clip_media_fit`, the
  audio slot being longer than the wav, which is the authored air itself and is present identically in
  pb-03, pb-04, pb-05 and pb-06).
- Frames are generated from the clone's shared CSS atom block verbatim by `G:/Content Creation/.tmp/
  pb10-run.mjs` (+ `pb10-lib.mjs`, `pb10-frames-a.mjs`, `pb10-frames-b.mjs`). Re-running it is how
  these files are reproduced; the atom stylesheet is read out of
  `videos/prog-basics-03-strings-vs-chars/compositions/frames/04-code.html` at build time, never
  retyped.
- `npx hyperframes init` succeeded on the network this run (pin `hyperframes@0.8.208`, the same pin as
  pb-04/05/06), so no scaffold files were copied out of the clone source. Fonts, `frame.md`,
  `design.md` and the caption skin were copied per the corrected BATCH recipe.
