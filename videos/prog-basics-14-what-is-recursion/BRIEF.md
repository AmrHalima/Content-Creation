---
workflow: hyperframes (general-video / companion-shape build, direct-address mode)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 14 of 22
tranche: day-2 (BASICS II)
title: prog-basics-14-what-is-recursion
message: "a function that solves a smaller version of itself, trusting the next call, until the problem is too small to need one"
hook_source: user (pre-decided; not rewritten; verbatim)
cta_mechanic: Myth ("Drop the best recursion joke you know.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 34.7s                     # MEASURED (was ~39s target, 54s ceiling); 26.35s speech + 8.36s authored air
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2.1 (frame.md = writing/prog-basics/frame-day2.md; deliberately NOT the prior 15 projects' look)
mode_visual: direct address (G8) — no face, no avatar, no silhouette, no emoji
carrier: true                      # proves G6 call stack + G8 direct address for the tranche
grammar: G8 G8 G6+G8 G3-cutaway G8+G5
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 86
pin: hyperframes@0.8.208
---

## Intent

English master of part 14 of `prog-basics` (tranche Day 2 / BASICS II): what recursion is. Portrait
1080x1920, **34.7s measured** (target ~39s, ceiling 54s). Faceless: no URL, no footage, no presenter. This part is a **carrier** —
it is the first place **G6 call stack** (recursion as descent, then unwinding) and **G8 direct address**
(the camera-chrome substitute for a talking head) are ever built, so its frames are the reference that
parts 15, 17 and 18 will clone.

Copy source of record: `writing/prog-basics/pieces/14-what-is-recursion.md`. Shape: bible § 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Visual authority: `frame.md` (= `frame-day2.md` v2.1)
§ 4 — G8 direct address on F1, F2, F3, F5; **G6** call stack inside F3; **G3** cutaway on F4; **G5**
CTA plate inside F5. Motion: § 7 — P1 say-sweep, P2 drop-in, P3 type-on, P7 pulse-set, P8 arrow-run.

Clone sources (read-only, structure only): `videos/prog-basics-07-scope/compositions/frames/` for the
nested-chamber idea and the shared `.pb-tab` / `.pb-chamber` / `.cd-root` atoms, and
`videos/prog-basics-05-params-vs-args/compositions/frames/` for the v2 self-contained say-plate
(plate + text inside one token, so no sibling plate shares its stacking context). The ground, chip,
strip, plate and hook-type atoms are copied from those shipped files — the CSS atoms are the series'
look and were not re-derived. G8 chrome and the G6 card column are new; they are built from those same
atoms at reduced scale, per bible § 1. No frame here was authored from scratch.

CLI pin matched to the v2-identity tranche (04/05/06/08/09/10/11) at `hyperframes@0.8.208` so the
series re-renders identically; lowered from the 0.8.210 the `init` scaffold wrote.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. The hook and the
  CTA mechanic are the user's words and are verbatim. `recursion` is glossed by the hook itself (the
  joke *is* the shape: a call that comes back around); `function calling itself` is made physical by
  the self-loop on F2 with an `n - 1` chip riding inside it, so "smaller" is a number and not a mood;
  `each call trusts the next` is the stack descending one card per clause; `base case` is the card
  that stops saying `× n` and says `BASE`, lit amber exactly on "It stops" and in the shipped
  fragment's `n <= 1`; `stack` is never spoken, the column shows it. `fact(4)` → "fact of four" in
  the voice, never bracketed. Every number on screen is executed output (`fact(4)` → `24`,
  `fact(1)` → `1`, `fact(0)` → `1`; bible § 4 ledger): the descent is `4 → 3 → 2 → 1` and the unwind
  is `1 → 2 → 6 → 24`. "iterate" and "traverse" appear nowhere. No "it's not X, it's Y" (that shape
  belongs to part 05's hook), no em-dashes on screen, no "simply/just/easy", no "don't worry". The
  lesson to land: a recursive function solves a smaller version of itself and trusts the next call —
  and it only terminates because there is a case small enough to answer directly.
- **Motion.** Two meaning-carriers, both made physical. F2 = **the call that comes back to itself**:
  five CSS bars leave the word `function`, run out, down, back, up and into it (P8), running twice,
  while `smaller` takes the amber sweep (P1) and the `n - 1` chip drops into the loop's mouth (P2).
  F3 = **descent, then unwinding**: four cards drop in one per spoken clause (P2), `fact(4)` at full
  width down to `fact(1)` inset 264px; `BASE` flips to a solid amber plate on "It stops"; a P7
  pulse-set steps the four outstanding waits so the board is never dead between the descent and the
  unwind (3.80-4.52s);
  then the answer travels **bottom-up** — card 4 turns mint and dims to 0.42, `1` runs up into card 3
  (P8), card 3 shows `2`, card 2 shows `6`, card 1 shows `24`, and only the top card holds full
  opacity. The G8 chrome stays visible through all of it: a presenter with a diagram beside them, not
  a diagram that replaced the presenter. F4 = the same truth as written code (P3 type-on under a
  caret, `fact(n - 1)` swept amber on "waits on", terminal strip printing `24` in mint). Every
  emphasis is proved by pixel deltas between neighbouring snapshots, not by intent — and because
  G6/G8 have never been rendered, F3 was snapshot-read at better than one frame per second through
  both the descent and the unwind.

## Deviations from the piece file (all recorded, none silent)

The piece file is the source of record for narration, on-screen copy and treatment. These are the
departures, each forced by `frame-day2.md` v2.1 geometry, a `studio/known-traps.md` rule, or a defect
found by reading this project's own snapshots.

**Copy / narration: none.** Hook, CTA mechanic, every term and every number are the piece file's. The
re-cut already applied upstream (`CORRECTIONS-day2.md` § A) is transcribed, not re-decided.

1. **AUDIO — RESOLVED ON THE SECOND PASS, AND THE FIX IS `--speed 0.93` ON EVERY RUN.** The first pass
   of this project stopped correctly: `studio voice --dry` printed `speed=0.74` and no audio was made.
   The blocker is real and still unfixed (`studio/tools/studio.mjs` reads `voices.en`; `.agents/design.md`
   nests `voices:` under `voice:`, so the flattened key is `voice.voices.en`, the lookup misses and
   speed falls through to `VOICE_DEFAULTS.en.speed = 0.74`). **The flag is the only working route on
   this machine and it is now this project's recipe: `studio voice <dir> --speed 0.93`, always with the
   flag, dry-run first.** frame-day2 § 8 was corrected to say exactly this on 2026-10-28 (all three
   carriers proved it), so passing the flag is no longer a deviation — *omitting* it is. `voice_speed:`
   in this frontmatter remains documentation only; the tool does not read it.
   Consequence, and the reason this pass exists: **the five frames had been authored against the piece
   file's 2.4 words/second estimates. The measured audio is 26.35s of speech for those same 77 words
   (3.10 w/s), so every frame duration and every internal GSAP onset was re-based on the cued onsets in
   `audio_meta.json`.** See deviation 15.
2. **F2's display type is 6cqw (65px), not § 4's 9-11cqw.** A 14-word explain line at 9cqw needs 5-6
   wrapped lines and still overruns the 936px column (`you must first understand` is 25 characters ≈
   1360px at 9cqw). F1 keeps the 9cqw ramp because its hook wraps to ≤14 characters per line; F2's
   longer sentence drops to 6cqw to stay inside the column and above the 28px floor. **Finding for
   17/18: § 4's "9-11cqw, ≤7 words per group" only holds for groups of ≤14 characters.**
3. **F2's self-loop is five CSS bars in a reserved clear band, not an arc across the paragraph.** The
   first pass drew it over the type block and it read as a stray border box, not an arrow (found in
   the 8.6s snapshot). The fix reserves a 148px band between line 2 and line 3 and routes the loop
   out → down → back → up → into `function`. Still bars, never SVG in a scaled container (pb-11's
   drift finding, § 4's G7 rule).
4. **F3's name tab is drawn as the card's own top strip, not G2's external folder tab.** At the
   grammar's h 84px with a 96px step there is a 12px inter-card gap; a 60px external tab cannot exist
   without colliding with the card above. The tab is a 38px `--panel-2` strip with a 3px `--line`
   bottom rule, carrying the call name left and the pending work right.
5. **F3's card type is 2.6cqw (28px), not the § 2 code size.** At 2.3cqw the call names measured
   24.8px and `check` flagged eight `text_below_floor` elements. 28px is the floor; the tab grew
   36→38px to hold it.
6. **F4's chamber is 880px wide, not the 700px § 4's G8/F4 note gives.** The shipped fragment's return
   line is 46 characters; at 700px the code falls to ~23px, under the 28px floor. 880px keeps code at
   2.7cqw (29px) with the chrome still visible on all four sides.
7. **F4 has ONE say-sweep, not two.** The piece file gives `fact(n - 1)` the sweep on "waits on"; an
   earlier pass also lit `n <= 1` amber on "base case". Two `--say` plates held at once breaks § 1's
   "one accent arrival per beat", and the second sweep's mid-transition cost a real contrast failure
   (`#f4-ht2 1.97:1`). Removed; F4 now matches the piece file exactly and contrast is 30/30.
8. **The BASE plate is retired before its card dims.** § 4 says resolved cards dim to 0.42; amber says
   "the word the voice is on right now". Left alone, `BASE` sat at 0.42 opacity as dark-on-muddy
   amber and measured 2.87:1. It now collapses and returns to ink at 6.70s, just before card 4 dims
   at 7.35s. **Finding for part 15: a `--say` plate must never live inside a card that is dimming.**
9. **JetBrains Mono ligatures are switched off on every code line.** `<=` rendered as a single `≤`
   glyph in the snapshot — a character that is not valid Python, on a frame whose whole job is the
   fragment a learner types. `font-variant-ligatures: none` plus `"liga" 0, "calt" 0, "dlig" 0` on
   `.cd-line` and `.cd-rev`. **Every Day 2 part showing `<=`, `==`, `!=` or `->` needs this.**
10. **The lower third sits at y 800-896 and the bottom pair of corner brackets frames the CONTENT box
    (y 932-1004), not the canvas.** § 4 says "inset 48px from the canvas edge", which would put chrome
    at y 1872 — inside the platform territory § 5 and the pre-render audit keep empty. The reticle now
    frames the content instead. Top brackets stay at y 48 and the REC strip at y 112, both above the
    230 line, which § 5 permits because "nothing critical" lives there and none of it is critical.
11. **The G8 chrome never fades out, and never fades in a second time.** Every G8 frame holds the
    chrome at opacity 1 for its whole duration, so the camera does not switch off at a cut; the wipe
    is carried by the content layer only. This also fixed `craft.first_frame_empty` — F1 is the cover,
    so its first hook line is at rest at t=0 with no entrance tween at all.
12. **`BEGINNER` is a muted outline chip on the REC strip, not an amber badge.** § 1 allows one accent
    arrival per beat and F1's is the `recursion` plate; Day 1's amber `.pb-kbadge` would have competed
    with it. The lower third keeps the packet's exact text (`PROGRAMMING BASICS · BASICS II · 14` over
    `What is recursion?`), so the difficulty lives beside the REC dot.
13. **The REC dot blinks at 1s and is `--muted` `#9BA6B2`. Zero coral in this part.** The piece file
    already required this; restated because it is the single most likely thing a cloning worker will
    "fix" back to red.
14. **F3 was grown from the estimated 10.2s to 11.6s of air** so the four-step unwind stays readable
    (at 10.2s each resolved value held under 0.4s and `check` reported six `line_unread` warnings; the
    retime cleared them). Air is authored silence, not added words, so bible § 12's "no padding" rule
    is not touched. Film total 39.4s against the ~39s target. **Superseded by deviation 15** — the
    shape decision (F3 gets the most air of any non-CTA frame) survived the retime; the numbers did not.

15. **EVERY FRAME WAS RETIMED TO THE MEASURED AUDIO — this is now the authoritative duration table.**
    Measured VO + authored air = frame duration @ film start: F1 3.755 + 1.05 = **4.8** @ 0 · F2 4.971 +
    1.03 = **6.0** @ 4.8 · F3 6.635 + 2.97 = **9.6** @ 10.8 · F4 8.896 + 1.30 = **10.2** @ 20.4 · F5
    2.091 + 2.01 = **4.1** @ 30.6 → **film 34.7s**. No words added or removed (the user's standing
    choice); 34.7s is above the 30s floor, so § 12's padding levers were not needed. What changed inside
    the frames: every word-keyed onset (the hook lines, F2's loop, F3's descent/BASE/unwind, F4's
    type-on and printed `24`, F5's plate), all three clipband durations, `var D`, each exit-push time,
    the ground-loop durations, the REC-dot repeat, and `T0` in frames 02-05. **F3's air is deliberately
    2.97s, not 1.0s**: the first attempt at the measured rate compressed the four-step cascade to 0.90s
    per step and `check` raised three real `line_unread` findings on the travelling answers (0.33-0.37s
    on screen against its 0.40s floor). At 1.20s per step, with each value held ~0.60s at full opacity
    before its card dims, Craft is 0/0. **The beats I refused to compress: the four-card descent (one
    drop per clause at 0.10/0.80/1.50/2.10), the `BASE` plate, and the four unwind steps.**
16. **F5 carries ONE amber plate, not two.** The first pass put a P1 say-sweep on the word `joke` while
    the G5 `DROP IT` plate was already solid `--say` — two amber plates on screen at once, which
    frame-day2 § 14 names as a § 1 violation ("amber is the word the voice is on, singular"). The plate
    now drops in on the spoken verb "Drop" (cued 0.00) and is the frame's only amber; `joke` (cued 1.22)
    takes a colour-free scale pulse instead. The piece file never asked for a sweep on F5, so this moves
    toward it, not away.
17. **The travelling stack answers moved out of the tab strip.** `.f3-tv1/2/3` started one row *above*
    their card's value (`left 584 / top 556`), so at 16.4s one card showed the same digit twice, stacked
    vertically, and it read as a mis-rendered glyph. They now start **in** the source card's value row,
    110px right of the centred digit, and climb one 96px step into the next card's value row:
    `tv1 710/596 · tv2 690/500 · tv3 670/404`, each travelling `x -20, y -96` (the -20 matches the
    column's own centre drift 600→580→560→540). `verify` and `check` were clean both before and after —
    only the snapshot caught it, which is exactly why the snapshot pass is the gate.
18. **The mono ligature guard now sits on every element that renders code, not just F4's.** Added
    `font-variant-ligatures: none` + `"liga" 0, "calt" 0, "dlig" 0` to `.f3-call`, `.f3-pend` and
    `.f2-chip` as well (they render `fact(4)` / `× 4` / `n - 1`). F4's `<=` was re-read from a
    `--zoom 130,405,700,75` crop: two real characters, not a ligated glyph.
19. **Ground and REC-dot loops are derived from `D`, not hand-picked.** Each frame's grid/glow loops are
    `duration = D/4, repeat: 3` so four segments cover the frame exactly and land back on the
    from-value; the REC dot uses an odd repeat whose `(r+1) × 0.5` is ≤ D (F1 7 → 4.0s · F2 11 → 6.0 ·
    F3 17 → 9.0 · F4 19 → 10.0 · F5 7 → 4.0), so the dot sits at opacity 1 on the last frame of every
    scene and the chrome cannot pop across a cut. The first pass had `repeat: 2` on glow-a in three
    frames, which ended those frames at opacity 1 and reset to 0.55 on the next cut.

20. **FOUND BY PART 15'S CLONE, PROVED HERE IN THE PIXELS — F3's descent dealt its cards OVER the
    pile; they now come from UNDER it.** pb-15 deviation 17 named this geometry by name: `drop()`
    travels 210px while the opacity ramps, and a 96px step on an 84px card leaves 12px of clearance,
    so an arriving card spends most of its fall inside the band of the card above. Its own tab strip
    is opaque `--panel-2` with `fact(n)` and `× n` on it, so it printed those glyphs *through* the
    resting card. Confirmed in this project's own PNGs at 11.7 / 11.85 / 12.45 / 13.05s (film) before
    the change: `fact(3)` across card 1's tab, `fact(2)` across card 2's, `fact(1)`+`BASE` across card
    3's — and invisible to `verify` (0/0) and to `check` (passed, Craft 0/0, 85 snapshots read on the
    retime pass at 0.4s steps that never landed inside the 0.46s falls). **Meaning decided the fix**:
    a new call is pushed onto the pile, so the arriving card belongs *behind* the one already at rest
    — it is demoted to `z-index:-1` for exactly its own 0.46s fall and `clearProps` drops the property
    on the frame it lands. Travel, cadence, insets, widths, tab height and every duration are
    untouched, so the descent stays legible at phone width (verified on a 4-up 320px montage at
    11.7/11.85/12.45/13.05s) and the cards still rest at 262/358/454/550.
    **Why not part 15's static descending `z-index` (4/3/2/1), measured here:** a card that carries
    its own z-index re-rasterises its tab text in the opposite subpixel order — up to **130 levels on
    all four resting tab text bands at 13.65s and 14.0s** — and 4/3/2/1 also flips the inter-card
    shadow, so the card above now tints the card below (**13 levels at 20.0s**, rows 358-384). A
    paint-order-neutral static `z-index:0` kills the shadow half but keeps the rasterisation half
    (identical 20,957 changed channels at 13.65s), so the trigger is the property, not the order.
    Scoped to the fall, the resting bytes come back: **16.0 / 16.4 / 17.7 / 18.9 / 20.0s are
    byte-identical (max channel difference 0) to the pre-fix PNGs**, the G8 chrome bands (y 40-160,
    790-900, 925-1004) and everything below y 1004 are byte-identical in all 25 sampled frames, and
    the only residue is Chromium taking ~0.7s to drop the tile promotion after the last clear — the
    four tab glyph bands at 13.65s/14.0s only, no geometry, ink, colour or position change. A
    `set()`/`set()` pair was tried first and is wrong here: the resting delta was identical to the
    static case. Evidence pair: `.hyperframes/artifacts/snapshots/ghost-before/` vs `ghost-after2/`,
    re-captured post-assemble in `ghost-final/` (card column byte-identical to `ghost-after2` at all
    six re-checked times; only the caption band at 11.85s differs, which is that instant straddling a
    caption word change, not a lane change). No existing snapshot was overwritten.

## What the other eight Day 2 workers must know about G6 and G8

**FINAL — parts 15, 17 and 18 clone these numbers verbatim. They are pixel-verified, not modelled.**

*G8 chrome (identical in all five frames of this film; copy `01-address.html`'s `.g8-*` block):*
corner brackets 72×72px, 3px `--line-faint`, at `left/top` 48/48 · 960/48 · 48/932 · 960/932 (so the
bottom pair frames the CONTENT box 932→1004, not the canvas); `REC` strip at 72/112 h 40 with a 16px
`--muted` #9BA6B2 dot (never coral) blinking on a 0.5s-half-cycle yoyo and an odd repeat that ends
≤ D; timecode at 176/112 JetBrains Mono 400 2.4cqw `--muted`; `BEGINNER` outline chip at 800/110
44px tall, 2px `--line-faint`, 1.35cqw; lower third `--panel-2` at 72/800, 560×96, radius 12, kicker
1.4cqw tracking .16em over title 3.4cqw. Every chrome node carries `data-layout-ignore`. Measured
max luma in y≥1344 across 76 snapshots: **40**; ink-level pixels in 1004-1024 and in 1344-1920: **none**.
`T0` per frame at the final durations: **0 · 4.8 · 10.8 · 20.4 · 30.6**.

*G6 call stack (F3):* card h 84px, 3px `--line` border, radius 22, `--panel` #1F242C over the
#15181D ground, G2 shadow. Left insets **72 / 136 / 200 / 264** (+64 each), widths **936 / 848 / 760 /
672** (100% → 90.6% → 81.2% → 71.8%, authored per card, never a width tween), tops **262 / 358 / 454 /
550** (a 96px step) → the column rests at **262→634**. Name tab is the card's own top strip: 38px
`--panel-2` with a 3px `--line` bottom rule, call name left in mono 700 2.6cqw (28px, the floor),
pending work right in mono 400 2.6cqw `--muted` with `margin-right:16px`. Value band: `top:38px`,
height 43px, centred Space Grotesk 700 2.9cqw `--value`. Travelling answers start **in** the source
card's value row 110px right of centre (`710/596`, `690/500`, `670/404`) and travel `x -20, y -96`.
Unwind cadence **1.20s per step**, each value ~0.60s at full opacity before its card dims to 0.42,
only the top card never dims. **Part 15 with seven cards: 262 + 6×96 = 838 top, 922 bottom — that is
past the 932 corner-bracket line and inside the lower third's 800-896. Either drop the step to 78px
(262 + 6×78 = 730 → 814 bottom, still clear of 932) or drop the lower third on that frame. Do the sum.**

- **G8 chrome is one continuous shot.** Copy `01-address.html`'s `.g8-*` block verbatim into every G8
  frame, keep it at opacity 1, and do not put it in the layer your exit push transforms. F1→F2→F3→F4→F5
  all show the same brackets, the same `REC 00:NN` and the same lower third at the same pixels; that
  continuity is the whole point of the mode.
- **The timecode is `T0 + tl.time()`, and `T0` is a hand-authored film offset.** Deterministic and
  seek-safe, but not derived from the assembly: change any frame duration in `STORYBOARD.md` and you
  must re-write `T0` in every later frame. It is chrome, so a stale value is cosmetic — but it reads
  as a lie.
- **A `--say` plate inside anything you dim fails contrast.** Retire the plate, then dim.
- **G6 deals from under the pile, and the demotion is scoped to the fall (deviation 20).** Every
  arriving card crosses the band of the card above it, so it needs `z-index:-1` while it falls and no
  z-index at all once it lands: `tl.fromTo(el, {zIndex:-1}, {zIndex:-1, duration:<fall>, ease:"none",
  clearProps:"zIndex", immediateRender:false}, t)`. **Parts 15 and 22: copy this shape, not the static
  descending `z-index` in your own CSS** — at rest the two are not equivalent, because a card carrying
  a z-index re-rasterises its tab glyphs (130 levels here) and lets the card above's shadow land on
  the card below (13 levels). It is the same class of bug at 78px/6px as at 96px/12px; the fix is
  pattern-level, not a pb-14 retime.
- **Mono ligatures silently rewrite your code.** Turn them off before your first snapshot, not after.
- **G6's 96px step is arithmetic, not a suggestion.** Four cards run 262→634. If part 15 uses seven,
  230→902 leaves no room for a lower third — do the sum before you copy the geometry.
- **Snapshot at 0s if the frame is the cover.** `craft.first_frame_empty` is the only finding that
  tells you your cover is blank, and it only fires at t=0.
- **`studio verify`'s nondeterministic rule scans comments too.** A comment saying the words
  `Date.now()` is a HIGH finding. Do not name the banned call in a comment explaining why you avoided
  it.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). Every `@font-face` in every
  frame names one of those four files and nothing else (known-traps § 6).
- Voice: Kokoro `af_heart` at **0.93**, generated through `studio voice` — offline, free, provider
  pinned by this file, never `auto`. **The command that produced this film's audio is
  `node studio/tools/studio.mjs voice videos/prog-basics-14-what-is-recursion --speed 0.93`, and the
  `--speed 0.93` is load-bearing**: the house lookup misses (`.agents/design.md` nests `voices:` under
  `voice:`, so the key is `voice.voices.en`) and an unflagged run prints `speed=0.74`. Dry-run first,
  always — `… voice <dir> --dry` must print `speed=0.93` before you accept any wav.
  `studio cues` then wrote ASR word timings for all 77 words into `audio_meta.json` (5 voice lines =
  5 frames; F3's two sentences are both present, so no `SCRIPT.md` heading was silently merged).
  ElevenLabs is unusable here (`.agents/design.md` `voice_id` empty; free-tier keys return HTTP 402)
  and was not substituted. HeyGen not used.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`.
  Band top 1024, height 320, Space Grotesk 700 at 46px, spoken word on amber, plate
  `rgba(21,24,29,0.72)` with a 2px `--line` border. **Assembled**: 35 groups over 77 words on
  `data-track-kind="captions"`, lane marked by `studio assemble` (never by hand).
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1) overrides it for every
  video decision in this campaign.
- Zero network assets: no icons, no images, no BGM, no SFX, no font fetches, no avatar, no face.

## Gate state

**Carrier. Audio generated at 0.93, all five frames retimed onto the measured onsets, caption lane
built, gates re-run, 85 snapshots read as pixels. PASSED — nothing is blocked.**

Observed on this pass, with the command that produced each number:
- `node studio/tools/studio.mjs voice videos/prog-basics-14-what-is-recursion --speed 0.93 --dry` →
  `▶ prog-basics-14-what-is-recursion — provider=kokoro voice=af_heart lang=en **speed=0.93**`.
  Without the flag the same dry run prints `speed=0.74` (re-confirmed on this machine).
- `… voice … --speed 0.93` → 5 wavs (3.755 / 4.971 / 6.635 / 8.896 / 2.091s), `sync-durations: 5 frame
  duration(s) updated`, then `✓ … 77 words over 5 lines (asr)`.
- `node studio/tools/studio.mjs cues …` → `audio_meta.json` has **5 voice lines** and all 77 words with
  ASR onsets. F3's narration is complete in its own wav ("Each call … a piece." *and* "It stops …
  obvious.", 22 words), so no frame silently merged into another — `SCRIPT.md`'s headings are already
  the exact `## Line N — Title (Frame N)` form § 3 requires.
- `node studio/tools/studio.mjs assemble … --captions` → `35 group(s) from 77 words`,
  `total duration: 34.7s (expected ~34.7s, +0s)`, `✓ post-fix: captions lane marked`.
- `node studio/tools/studio.mjs verify videos/prog-basics-14-what-is-recursion` →
  **0 high, 0 medium across 7 html files** ("no known traps detected").
- `npm run check` (CLI 0.8.211, project pin 0.8.208) → **Check passed**: Lint **0 errors / 0 warnings**
  (7 files scanned) · Runtime **0 errors / 5 warnings** (all five are `clip_media_fit` on the voice
  slots — that IS the authored air, packet § 7 says expected) · Layout **0 issues across 9 samples** ·
  Motion 0/0 · **Contrast 36/36 WCAG AA** · Craft **0 errors / 0 warnings** (278 samples at 0.125s —
  the three `line_unread` findings the first retime attempt produced are gone) · Audio 0/0.
  `film_silent` / `audio_none` are gone: the film has audio.
- `npx hyperframes snapshot --at …` → **85 PNGs read** (76-time grid at 0.4s inside F3 and F4, 9 re-reads
  after the travel-chip fix, plus `--zoom` crops of the code line and card 4). Measured across all of
  them: **zero ink-level pixels in y 1004-1024 and zero in y ≥ 1344**; max luma ≥ 1344 is **40** (the
  mint glow, nothing drawn); the four stack cards rest at **262 → 634**; the F4 chamber at
  **268 → 670**; at most **one `--say` plate in the content field in any frame** (the caption band's
  own amber word is the skin's mechanism, not a second plate).

**Deviation 20 pass (deal-from-under fix, no render).** `studio assemble --captions` → 35 groups from
77 words, 34.7s, captions lane marked · `studio verify` → **0 high, 0 medium across 7 html files** ·
`npm run check` (CLI 0.8.208 pin) → **Check passed**: Lint 0/0 · Runtime 0 errors / 5 `clip_media_fit`
warnings (the authored air) · Layout 0 issues across 9 samples · Motion 0/0 · Contrast 36/36 · Craft
0/0 · Audio 0/0. Pixel proof: 25 `--at` times through the descent and the unwind, before vs after —
ghost gone at all three card boundaries, resting frames byte-identical from 16.0s, chrome bands and
everything below y 1004 byte-identical in every one of the 25.

**Why the previous pass stopped, kept for the record (the bug is still live):**
`studio/tools/studio.mjs` asks `frontmatter(.agents/design.md)["voices.en"]`, but `design.md` nests
`voices:` under `voice:`, so the flattened key is `voice.voices.en` and the lookup misses; the value is
also a YAML inline map that `safeJson()` rejects. Speed therefore falls through to
`VOICE_DEFAULTS.en.speed = 0.74`. The one-line fix (`safeJson(house['voice.voices.' + lang])`, or parse
the inline map) is in **shared production layer, outside a worker's write boundary** — it still needs
the parent's decision. Until then **every Day 2 `studio voice` run must carry `--speed 0.93`**, which
is what frame-day2 § 8 now says and what this project's recipe is.

**What a cloner must not copy from the first pass:** the duration table, `T0`, and the emphasis times in
`STORYBOARD.md`/the frame files are now measured. Re-deriving them from any piece file's 2.4 w/s
estimate table is what cost this part a full re-author.

**No render has been made here and none is authorized by this worker run.** No publish, no schedule,
no Arabic pass, no BGM, no SFX, no `preview --background` (parallel workers).

`## Accuracy` in the piece file is confirmed; re-executed on Python 3.13.15 via
`G:\Content Creation\.tmp\day2_accuracy.py` (bible § 4): `fact(4)` → `24`, `fact(1)` → `1`,
`fact(0)` → `1`, which is why the `BASE` plate sits on `n <= 1` and not on `n == 1` — `fact(0)`
terminates instead of descending into negatives. The recursion on screen is
`return 1 if n <= 1 else n * fact(n - 1)`, transcribed from the piece file, not re-typed from memory;
no new fact was needed and nothing was executed by this worker. Part 15 owns the `RecursionError`
case; this part raises nothing, so no coral is earned.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-14-what-is-recursion --quality delivery --yes` → `prog-basics-14-what-is-recursion_2026-11-01_12-01-54.mp4` in 70s.
ffprobe: h264 1080x1920 + aac 2ch, **34.700s** against this film's timeline, mean volume -23.5 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
