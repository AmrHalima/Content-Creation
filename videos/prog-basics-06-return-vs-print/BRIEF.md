---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 6 of 11
title: prog-basics-06-return-vs-print
message: "a return hands the caller something to use; a side effect changes the world outside"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Debate (mechanic unchanged: PICK A SIDE + Team Return / Team Print)
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
grammar: G1 G4 G4 G3 G5
words: 89
---

## Intent

English master of part 6 of `prog-basics`: return values vs. side effects. Portrait 1080x1920,
~46s, ceiling 52s. Faceless explainer: no URL, no footage, every visual invented on the campaign's
own identity. Copy source of record: `writing/prog-basics/pieces/06-return-vs-print.md`.
Shape: bible § 3 (F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4.
This is the batch's only `[M]` part and the first G4 split frame built on identity v2.

## What this part has to prove

The two functions look identical and behave differently. Saying that is weak; **showing** it is the
part. So the argument is carried by `y = double(4)` giving `None` when the function only prints
(the approved Accuracy addition), and by the G4 split: `return x * 2` sends the value **back up**
into the caller's `y`, while `print(x * 2)` throws the value **out** onto a console surface where it
sits as inert text and the caller receives nothing. Motion is the argument here, not decoration.

## Clone map (what was copied, what was re-tuned)

- Frames: `videos/prog-basics-03-strings-vs-chars/compositions/frames/` supplies the shared CSS
  atoms, the ground, the caption-lane wiring, the code chamber (F4) and the CTA (F5) idiom. Only the
  `fN-` prefixes, composition ids, durations and copy changed.
- `videos/prog-basics-02-data-types/compositions/frames/04-split.html` was used for **structure
  only** (two 456px chambers, left 72 / right 552, own titlebar per chamber, a verdict line under
  each). It is identity v1 — Inter, teal, `#0F1818` petrol field, floating orbs — so its colours,
  type scale, ground and motion were replaced with v2 (`#15181D` ground + dot grid, Space Grotesk /
  JetBrains Mono, `#1F242C` chambers with 3px `rgba(255,255,255,0.16)`, PYTHON chip) and with the
  clone source's primitives.
- Fonts: Space Grotesk 400/700 + JetBrains Mono 400/700 copied from the clone source, with the OFL
  notices. `BATCH.md`'s recipe line still says Inter + Caveat; `frame.md` v2 dropped both, so the
  recipe was followed in intent (campaign fonts, never re-authored) not in its stale filenames.

## Hard requirements carried by every frame here

- **Clarity.** Short sentences, one idea per beat, a plain-English gloss the moment a term appears,
  nothing that needs re-hearing. "Side effect" is glossed in the same breath it is used: *something
  the function does outside itself*. Hook and CTA mechanic are the user's words, verbatim.
- **Motion.** Ground drift + glow breathing in every frame (each loop starts and ends at its own
  zero), a directional wipe in and a push out per frame, and at least two meaning primitives per
  frame from `frame.md` v2 § 7 (P8 arrow-run, P3 type-on, P1 say-sweep, P10 strike-out, P2 drop-in,
  P7 pulse-set). Target ≥ the clone source's 91 GSAP calls across the 5 frames.

## Decisions taken during this run (deviations, recorded)

1. **`None` is NOT coral.** The piece file's on-screen note asks for coral `#CD3333` on `None`.
   `frame.md` v2 § 1 is the visual authority, reserves coral for text the interpreter actually
   raised, and names part 06 as the part where v1 got this wrong. `None` is a value, so it is mint
   `#5AD6A0`; the *warning* is carried by the amber highlighter plus the empty caller box, not by
   colour-role hijacking.
2. **F3 names two effects, not three.** "editing a global" is scope vocabulary that pb-07 has not
   taught yet, and a three-item enumeration in the same breath as the gloss fails the clarity bar.
   Spoken: prints on screen / writes a file. The third beat of that chamber is the strike-out
   across the upward arrow — *nothing goes up* — which is the piece's own stated reason F3 exists.
3. **F2 and F3 are both G4, so they differ in three ways** (wipe direction, hero position, panel
   emphasis): F2 is left-panel, caller above, content wiping in from the left; F3 is right-panel,
   terminals below-right, content wiping in from the right.
4. **F4's VO was re-cut for accuracy, and it touches the user's wording, so it is flagged here.**
   The piece has "Both double four, and both show eight on the screen." Executed on this machine
   (Python 3.13.15, `.tmp/verify_v6b.py`), the `return` version writes **nothing** to the console and
   binds `8`; the `print` version writes `8\n` and binds `None`. "Both show eight" would have taught
   the exact opposite of the part's point. Shipped line: "Both functions make eight. Return hands it
   back to y. Print shows it, then returns None. So y equals double of four gives you nothing to work
   with." The approved `None` proof and its plain gloss survive verbatim in spirit; this is reversible
   by re-voicing one line. F3's closing "same thing on screen, nothing handed back" was cut for the
   same reason plus one-idea-per-beat; it stays on screen as text.
5. **Duration: 47.0s** against the piece's 46s target (52s ceiling, bible § 1 range 42-48s).
6. **F3's gloss plate no longer touches the next word.** The shared `.pb-hl` highlighter bleeds
   `right: -8px`, which is exactly one space at this size, so the unplated word after a plated one had
   zero air and the gloss read "effectacts" — the one line beginners most need to parse. Fixed with a
   local `.f3-ggap { padding-left: 14px }` on the word *acts* rather than by editing the campaign
   atom. Verified by high-density `snapshot --zoom`: the plate now clears "acts", and the line break
   is unchanged (the 261px "outside the box" unit still cannot fit on line 1).
7. **The film no longer dies in its last 1.3s.** A pairwise pixel audit of 117 frames at 0.4s found
   exactly two near-static joins in the whole film, both in F5's tail (45.8→46.2 and 46.2→46.6: max
   luma delta 13/255, 0.000% of pixels moving by >24 — the pill pulses stopped at local 6.42s and the
   `PICK A SIDE` float at 6.13s). The storyboard's promised 0.3s ring-select cycle is now actually
   running to the end: alternating amber rings at local 6.60 / 6.96 / 7.32 (never both pills at once)
   and the plate float extended to `repeat: 4`. Post-fix the same joins read max delta 196-206 with
   0.30-1.07% of pixels moving by >24.
8. **F3 ships no `None` chip** (the storyboard line asked for one at 7.6s). Deliberate: decision 1
   already makes the empty caller box + blinking caret the F3 statement, and putting the value there
   would spend F4's payoff twice. `None` appears where the proof is — the F4 comment, the F4 y-card
   and the F5 price under `TEAM PRINT`, all mint.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` from the clone source with OFL notices.
  Inter and Caveat absent by design (workspace brand lineage, not this series).
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned here).
  No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions` (band top 1024px — the fix that keeps captions out of the platform
  overlay zone).
- No network assets at all.

## Accuracy

Confirmed + the approved addition shipped. Executed on this machine (Python 3.13.15,
`.tmp/verify_v6.py`): `def double(x): return x*2` → `double(4)` is `8`; the `print(x*2)` variant
writes `8` **and evaluates to `None`**, so `y = double(4)` binds `None`. Every number on screen is
executed output.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No Arabic pass, no BGM/SFX, no publishing.
