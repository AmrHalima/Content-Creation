---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 11 of 11
title: prog-basics-11-for-vs-while
message: "a for loop repeats a count you already know; a while loop repeats until something changes, and if nothing ever changes it hangs"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz (mechanic unchanged — "Which do you use more? For or while?")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~45s
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
words: 87
grammar: G1 G4 G3 G5
pin: hyperframes@0.8.208
---

## Intent

English master of part 11 of `prog-basics` (final part of the tranche): for loops vs. while loops.
Portrait 1080x1920, ~45s, ceiling 54s. Faceless explainer: no URL, no footage, every visual invented
on the campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/11-for-vs-while.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4
example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook, **G4 split (F4)**, G3 code chamber, G5 CTA.

Clone source for CSS atoms and motion idiom: `videos/prog-basics-03-strings-vs-chars/` (same shared
stylesheet, same caption lane, same ground). Split geometry taken from
`videos/prog-basics-02-data-types/compositions/frames/04-split.html` (structure only — that file is
identity v1) and retuned to v2; v2 split idiom matched to `videos/prog-basics-06-return-vs-print/`
`02-return-up.html` (two `cd-root` panels, 456px wide, 24px gutter, `PYTHON` chip per panel).
CLI pin matched to the v2-identity tranche (04/05/06/08/09/10) at hyperframes@0.8.208 so the series
re-renders identically; raised from the 0.8.207 init pin during the frame-authoring run.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. Hooks and CTA
  mechanics are the user's words and are verbatim. "loop" is glossed on F1's own screen
  (`a loop runs the same lines again`); "hang" is glossed beside it (`a hang never stops`);
  "counter" is the on-screen `turn 1/2/3` strip, never spoken; "range" is glossed by the
  `three steps from zero` tag and by the executed `# 0 1 2`; "condition" is spoken as **the check**
  and shown on the chip as `not done`. The word "iterate" does not appear anywhere in this part.
  The lesson to land: `for` when you already know how many times or when you walk a list, `while`
  when you repeat until something changes — and a `while` with no way out never stops.
- **Motion.** Two meaning-carriers, both made physical: F2 = `for` as a **finite walk** (a marker
  labelled `i` steps across exactly three known positions while a turn counter ticks, and the walk
  ENDS because the count was settled before it started — a stop bar drops and the marker fades);
  F3 = `while` as a **gate that re-tests** (the body fills, the loop-back arrow redraws, the chip is
  re-evaluated every pass, and on the third pass `done` flips and the rail visibly releases through an
  exit arrow). The hook's stake is then shown: the escape line is struck out, the chip pins at
  `True`, and the cycle runs a **bounded, accelerating** spin that ends on an ellipsis and an amber
  `IT NEVER STOPS` plate. Target: match or exceed the 164 GSAP sites of
  `videos/prog-basics-05-params-vs-args/`. Every emphasis is proved by pixel deltas between
  neighbouring snapshots, not by intent.

## Deviations from the piece file (all recorded, none silent)

The piece file predates `frame.md` v2; its colour and canvas words are v1 vocabulary. Per the batch
rule that frame.md v2 is the only visual authority, and mapping via
`videos/prog-basics-04-functions/BRIEF.md`:

- "Petrol canvas (the one dark hook in the batch)" → v2 graphite ground `#15181D` in every frame;
  there is no light or petrol frame in the campaign.
- `hang` in teal `#7BD3D8` → `hang` on the solid amber plate (v2 § 6: the sharpest word of the hook);
  ice-white `#E8F6F7` → v2 ink `#F4F1EA`.
- **The coral `#CD3333` chamber edge on "it never stops" is dropped outright.** frame.md § 1 names
  part 11 as one of the two v1 parts that painted a hang coral for drama and forbids it: coral is
  only ever interpreter-raised error text, and this part raises none. The stuck state is carried by
  motion (accelerating cycle) plus an amber say-plate on the spoken words `never stops`.
- Spinner ring in `#B5B5B5` → `--muted` `#9BA6B2` (v2 has no other grey).
- "Teal on `range(3)` then on `not done`" → amber say-plates on those tokens at their spoken onsets,
  because amber is "the word the voice is on right now". Implemented as a **self-contained plate with
  a clip-path wipe** per token (the `videos/prog-basics-05-params-vs-args/` finding: a highlighter
  plate that sits in the same stacking context as a sibling plate fails contrast only MID-TWEEN).
- F4's output comment `# 0 1 2` in ice-white → mint `--value` on the `# ` (v2 § 1: a printed value is
  a value). Matches how pb-03 renders `'c'` and `'od'`.
- F5's pill ring "selected in teal" → v2's amber ring, and it **travels** FOR → WHILE instead of
  selecting one, because pre-picking an answer would answer the viewer's quiz for them.
- F2/F3 re-cut for one-hearing clarity: the piece's F2 opener was a 21-word sentence with an
  `or when` compound clause; it is now three short sentences. "collection" → "list". `condition`
  is spoken as "that check". No term, keyword, hook or CTA mechanic changed; `## Accuracy` needed no
  correction and every fragment on screen was re-executed (see Gate state).

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). BATCH.md's bash block still
  names Inter + Caveat from `videos/pattern-singleton/` — that is the v1 lineage and frame.md v2
  drops both faces.
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned by this
  file — never `auto`). No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2) overrides it for every
  video decision in this campaign.
- Zero network assets: no icons, no images, no BGM/SFX, no font fetches.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No publish, no schedule, no Arabic pass, no BGM,
no SFX. `## Accuracy` in the piece file is confirmed; re-executed on Python 3.13.15 via
`G:\Content Creation\.tmp\pb11_accuracy.py` — `range(3)` → `0 1 2` (stops before 3),
`while not done` with `done = True` inside exits after exactly 1 pass, a `while` whose condition never
flips ran 500000 passes and would still be running, and a retrying `while` released on pass 3.

## Frame build (authored 2026-10-27, frames stage)

Narration was **not** touched: `SCRIPT.md`, `assets/voice/*.wav`, `cue_times.json` and both audio metas
are the prior run's, so no `studio voice` / `studio cues` re-pass was needed.

Frame durations are the measured VO plus authored air, written into `STORYBOARD.md` (the assembler and
`captions.mjs` both derive cumulative starts from it): F1 4.4 / F2 9.9 / F3 14.2 / F4 9.8 / F5 5.6 =
**43.9s** (target ~45, ceiling 54). Air is 1.03 / 1.00 / 1.00 / 1.03 / 2.02s, so every 0.5s crossfade
sits inside silence and no sentence spans a cut. F5 gets the long pad because it loops under the
platform's chrome and carries no exit push.

Frames: `01-hook` G1, `02-walk` G2b row (the finite walk), `03-gate` G3 chamber (the re-testing gate +
the bounded hang), `04-split` G4 (two `main.py` chambers, 456px + 24px gutter + own `PYTHON` chip,
retuned from the v1 pb-02 geometry), `05-cta` G5. Chambers are `--panel` `#1F242C` on the `#15181D`
field with 3px `rgba(255,255,255,0.16)` hairlines (never a field-coloured chamber). Zero coral.
Say-plates are self-contained inside their own token (`.f4-w > .f4-hl + .f4-ht`), wiped with a
clip-path, so no sibling plate shares their stacking context.

Gate evidence, observed at the end of this run:
`studio verify` → 0 high, 0 medium across 7 html files. `studio check` (hyperframes@0.8.208) → ok:
Lint 0/0, Runtime 0 errors + 5 `clip_media_fit` warnings (the authored air, same as every shipped
sibling), Layout 0 errors, Motion 0/0, Contrast 65/65 WCAG AA, Craft 0/0, Audio 0/0.
56 snapshots: no luma above 100 anywhere below y = 1344 (platform territory empty); worst
neighbouring-second PSNR inside a scene 33.9 dB (the F5 tail hold, which must hold alone), every
other intra-frame pair ≤ 28.6 dB; every frame join 17–22 dB.

Two fixes found only by reading pixels, both recorded so no later part repeats them:
(a) an SVG ring inside a scaled container drifted out of the content box (its dashed arc was landing
at y ≈ 1150–1700), so F1's spinner is CSS dashed borders on a div instead;
(b) `.f4-line` had no `top` of its own — the position lived on the `.f4-l1/2/3` classes that only the
masks carried, so all six code lines stacked at one static position and `check` reported 12
`content_overlap` errors. Timed visuals need their position class as well as their id.
