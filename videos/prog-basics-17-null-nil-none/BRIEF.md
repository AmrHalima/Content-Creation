---
workflow: hyperframes (general-video / companion-shape build, direct-address mode)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 17 of 22
tranche: day-2 (BASICS II)
title: prog-basics-17-null-nil-none
message: "null, nil and None all mean there is no value here, which is not the same as an empty value, and asking nothing for a method is what makes you check first"
hook_source: user (pre-decided; not rewritten; verbatim)
cta_mechanic: Save ("Save this, then tell me your worst null bug.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: MEASURED — see Gate state            # was ~29-34s target, 54s ceiling
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2.1 (frame.md = writing/prog-basics/frame-day2.md; deliberately NOT the prior 15 projects' look)
mode_visual: direct address (G8) — no face, no avatar, no silhouette, no emoji
carrier: false                     # clones pb-14's G8 chrome verbatim; proves no new grammar
grammar: G8 G8 G8 + chips G3-cutaway G5
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"                # documentation only; every run passes `--speed 0.93`
captions: en
music: none
sfx: none
frames: 5
words: 70
pin: hyperframes@0.8.208
---

## Intent

English master of part 17 of `prog-basics` (tranche Day 2 / BASICS II): what `null`, `nil` and
`None` mean, and why asking nothing for a method crashes a program. Portrait 1080x1920, target
~29-34s (ceiling 54s). Faceless: no URL, no footage, no presenter.

This is a **clone build**, not a carrier. The visual grammar is pb-14's, already validated:
**G8 direct address** (chrome plus second-person display type) on F1, F2, F3 and F5, and a
**G3 cutaway** on F4. `frame-day2.md` § 14 says the chrome is "to be copied verbatim by 17 and 18",
and this file's `.g8-*` block is pb-14's `01-address.html` block byte-for-byte, with only the lower
third's part number and title changed. What is new here is content only: the three-name chip row,
the struck-through `if user:` pair, and the first raised-error chambers in the series.

Copy source of record: `writing/prog-basics/pieces/17-null-nil-none.md`. Shape: bible § 3 (F1 hook,
F2+F3 concept, F4 example, F5 CTA). Visual authority: `frame.md` (= `frame-day2.md` v2.1) § 4.
Motion: § 7 — P1 say-sweep, P2 drop-in, P3 type-on, P10 strike-out. Grammar `G8 G8 G8 + chips
G3-cutaway G5`.

Two things make this part different from every other Day 2 part, and both are in the approved
ledger rather than decided here: it is one of only **two parts that earn coral** (Python 3.13.15 and
node v24.15.0 really raised both messages on this machine — WAVE2-PACKET § 6), and it is the only
part whose own advice needs an on-screen guard (`bool(None)` and `bool('')` are both `False`, so
`if user:` cannot tell absent from empty — `CORRECTIONS-day2.md` § B).

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. The hook and the
  CTA mechanic are the user's words and are verbatim. `null / nil / None` are glossed by the chip
  row itself (three names, one meaning, each tagged with the language that uses it); `no value here`
  is the plain-English gloss the voice gives in the same breath; `absence` is set against `both
  values` on F2 so the distinction is a shape on screen, not a second sentence; `method` gets its
  gloss from the code that follows it on F4 (`user.name` *is* the method call); `AttributeError` and
  `TypeError` are shown as the interpreters wrote them, which is the gloss — the message says "has no
  attribute 'name'" in English. `nil` is named, tagged and never executed, because nothing here runs
  it. Every string on screen is executed output or real source from the bible § 4 ledger. "iterate"
  and "traverse" appear nowhere; no `O(1)`-style notation appears anywhere; no em-dashes on screen;
  no "simply/just/easy"; no "don't worry"/"everyone struggles"; **no joke about Hoare's death** (he
  died 2026-03) in any register, face-cam or otherwise. The lesson to land: nothing is not an empty
  something, and you check for it by identity (`is None`) rather than by truthiness.
- **Motion.** Four meaning-carriers, each doing the explaining. F1 = the hook arriving one group per
  spoken word, with the amber plate sweeping under `billion-dollar` exactly while it is said, and the
  first line at rest at t=0 so the cover is never blank. F2 = **the enumeration itself**: three chips
  drop in one per spoken name (P2, 0.1s apart), each carrying its language tag, which is what makes
  "three names, one idea" a physical thing rather than a list of words. F3 = **the correction**:
  P10 `strike-out` draws a 3px `--say` rule left→right across `if user:` while the raised
  `if user is None:` chip holds at full ink — "not this" without saying not this. F4 = the same
  danger in two languages, typed on under a caret (P3) and then interrupted by two coral
  interpreter strips, one per error name. The G8 chrome stays visible through all of it, including
  through the cutaway. Every emphasis is proved by reading the snapshot pixels, not by intent, and
  because this is a clone the chrome is compared against pb-14's directly.

## Deviations from the piece file and from the spec (all recorded, none silent)

**Copy / narration: none.** Hook, CTA mechanic, every term, every string and every number are the
piece file's, which transcribes the two approved changes in `CORRECTIONS-day2.md` (§ A voice re-cut,
§ B screen-text constraint) without re-cutting them further.

1. **`--speed 0.93` is passed on every `studio voice` run.** Not a deviation any more —
   `frame-day2.md` § 8 was corrected to say this after all three carriers proved the house lookup
   misses (`studio.mjs` reads `voices.en`; `design.md` nests `voices:` under `voice:`, so the real
   key is `voice.voices.en`) and speed falls through to 0.74. Dry-run first; the dry run must print
   `speed=0.93` before any wav is accepted. `voice_speed:` above is documentation only — the tool
   does not read it.
2. **F4's chambers are 880px wide, not the 700px § 4's G8/F4 note gives** — inherited verbatim from
   pb-14's deviation 6 and harder here: the longest shipped line is
   `AttributeError: 'NoneType' object` (33 characters), and at 700px that is ~20px of type. 880px
   holds 2.7cqw (29px) with room to spare, and the chrome is still visible on all four sides.
3. **Each error message wraps to two lines at a real space.** `AttributeError: 'NoneType' object has
   no attribute 'name'` is 59 characters and `TypeError: Cannot read properties of null (reading
   'name')` is 52; neither fits one line at the 28px floor inside 880px. The break is after a space
   and no character, quote or spacing inside the message is changed:
   `AttributeError: 'NoneType' object` / `has no attribute 'name'` and
   `TypeError: Cannot read properties` / `of null (reading 'name')`. Nothing else in the ledger's
   strings is altered.
4. **F4 stacks the two chambers vertically rather than side by side (§ 4's G4 is not used).** At
   440px per chamber a 33-character error line would need ~12px type. Vertical stacking keeps both
   chambers at 880px and keeps both languages on screen at the same time, which is the point of the
   frame. The grammar token stays `G3-cutaway` as the user's copy specifies.
5. **The `1965 · ALGOL W` attribution is a muted micro-type chip on F1's `of null` line, at 2.2cqw
   with `data-layout-ignore`.** F1 remains this part's one type-alone frame (the consecutive-G8 rule)
   because the chip is chrome-register text, not a diagram or chamber — the same device pb-14 used
   for its F5 mono echo. It is permitted by the build brief and it is the only place the historical
   claim gets its date.
6. **The tranche badge is carried by two chrome nodes, not one duplicated line.** The brief asks F5
   for the badge `PROGRAMMING BASICS · BASICS II · 17 · BEGINNER`. Because the chrome must be
   pixel-identical to pb-14's, that string is present as the lower-third kicker
   `PROGRAMMING BASICS · BASICS II · 17` plus the separate `BEGINNER` outline chip on the REC strip
   (pb-14's deviation 12, which exists so F5's single amber arrival is the `SAVE THIS` plate). No
   second series line is drawn under the plate.
7. **F3 has one amber element, the P10 strike rule.** `frame-day2` § 7 defines P10's rule as a 3px
   `--say` bar, so the strike is this frame's only `--say` mark; the display lines that carry "So
   check before you use it" emphasise by scale instead of a second plate (§ 1, "amber is the word
   the voice is on, singular"; pb-14 deviations 7 and 16). The struck chip recedes by dimming its
   **border and background only** — its text stays at full ink, because § 14 measured `opacity:
   0.42` on a whole row at 1.3:1.
8. **F2's display type is 5cqw (54px), not § 4's 9-11cqw**, and F3's is 5cqw too. § 14's finding:
   "9-11cqw, ≤7 words per group" only holds for groups of ≤14 characters. F2's longest group,
   `None is the absence of one.`, is 27 characters and overruns the 936px column at 9cqw; at 5cqw it
   measures ~815px and stays above the 28px reading floor. F1 and F5 keep the 9cqw ramp because every
   group on them is ≤15 characters.
9. **No mint value type appears in this film.** § 1 makes `--value` mean "a value, or what printed",
   and this part's example prints nothing — it raises. So the palette here is ink, amber, muted and
   coral only, plus the two P2 border-flashes. Recorded because pb-14's frames carry mint in every
   clone-able atom and a cloner may "fix" its absence.
10. **Ground and REC-dot loops are derived from each frame's `D`, not hand-picked**, exactly as
    pb-14's deviation 19 prescribes: grid/glow loops are `duration = D/4, repeat: 3` (four segments,
    back to the from-value), and the REC dot uses an odd repeat whose `(r+1) × 0.5 ≤ D`, so the dot
    sits at opacity 1 on the last frame of every scene and the chrome cannot pop across a cut.
    `T0` in each frame is the hand-authored film offset from `STORYBOARD.md`.
11. **F4's chambers drop in 40px, not pb-14's 90px** — found only in the pixels. pb-14's single
    chamber settles at `top: 268`, so a −90px entrance never carries ink above § 5's content box.
    This part stacks two 260px chambers and the upper one settles at 232 (deviation 2/4), so at −90
    the fading `PYTHON` / `JAVASCRIPT` titlebar chips measured content ink at **y 227** at t=18.8 —
    above the 230 floor. `verify` 0/0 and `check` Layout 0 issues both said nothing. Shortening the
    travel to 40px keeps the drop, the settled geometry and the 232/512 tops, and the box is now
    clean: **zero content ink outside y 230→1004 across 151 stills**.
12. **The P1 say-plate's ink flip is a `set` placed after the plate finishes, not an overlapping
    tween** — pb-18's deviation 14, applied to pb-14's atom. Cloned verbatim, F1's plate drew
    1.72→2.02 while `--ink → #22201B` tweened 1.95→2.15, so the word sat light-on-amber as a
    *settled* state: measured **1.28:1** (`#F4F1EA` on `#FFD166`) at t=1.94 and 1.98. Now F1 sets at
    2.04 and F2 at 2.00, both strictly after their plate lands, and the flip is instantaneous: at
    t=2.04 and 6.36 the glyph pixels on amber are 100% `--say-ink` (11.29:1). Light-on-amber still
    exists *during* the 0.30s wipe and cannot be avoided — flipping earlier would put `#22201B` on
    the `#15181D` ground at 1.05:1 over the not-yet-covered part of the word. `check`'s Contrast
    module reported 40/40 pass before this change and after it; it does not sample mid-wipe.

## Chrome spec as cloned from pb-14 (what "verbatim" means here)

- The `.g8-*` block in all five of this project's frames is pb-14's, byte-for-byte: brackets
  72×72px at `left/top` 48/48 · 960/48 · 48/932 · 960/932; REC strip 72/112 h 40 with a 16px
  `#9BA6B2` dot; timecode 176/112 at 2.4cqw; `BEGINNER` chip 800/110 h 44; lower third `#262C36`
  72/800, 560×96, radius 12, kicker 1.4cqw over title 3.4cqw. Every chrome node carries
  `data-layout-ignore`. Only the kicker's part number and the title change.
- **The REC dot is never coral, even in a part that legitimately uses coral elsewhere.** Coral is
  meaning (an error an interpreter raised); the dot is chrome. This part is the first place both are
  true at once, so the rule has a real test now.
- **Chrome never fades and F1's first line gets no entrance tween.** pb-14's `craft.first_frame_empty`
  finding still governs: snapshot at t=0.
- The cutaway scrim is `#0F1216` at opacity 0.18, `left 48 / top 48 / 984×956`, and it stops at
  y 1004 so the caption band is never dimmed by it. It carries `data-layout-allow-overflow`.
- **A G8 lower third at y 800-896 is a hard ceiling for F4.** Two 260px chambers stacked from y 232
  finish at 772. Part 18's G4 cutaway is side-by-side, so it has more vertical room, but not more
  horizontal room per chamber: a 440px chamber cannot hold a 30-character code line above 28px.

## What the tranche should know about a third G8 part (after pb-14 and pb-18)

- **The lower third fits, and now there is a number for it.** `Null, nil, and None` is 19 characters
  at 3.4cqw and measures to **x 403** inside a bar whose text lane ends at x 610 (bar right edge 632)
  — 207px of headroom, and *narrower than pb-14's own* `What is recursion?` (x 417) despite being
  longer in characters, because `W`/`q` are wide. The kicker `PROGRAMMING BASICS · BASICS II · 17`
  measures to x 492. So pb-18's ~26-character cap is a character-count proxy for something that is
  really a *width* question: measure the rendered right edge, not the count.
- **Chrome identity is provable and cheap.** All 13 chrome regions diff at mean AND max channel
  difference **0** against pb-14's saved `at-0s.png`, including the lower third's right edge, which
  is exactly where pb-18's overflow showed up. Diff the regions, do not eyeball them.
- **The cutaway scrim dims the whole chrome by design, so the seam "pops" and that is correct.**
  F4's REC dot reads luma 138 against 164 on every other frame, because the 0.18 scrim paints over
  the chrome band. pb-14's own stills read the same 138-140 inside its cutaway. Do not "fix" this by
  moving the scrim behind the chrome — § 4 asks for chrome *through* the cutaway, not chrome at full
  brightness.
- **Two stacked G3 chambers buy their height by stealing the entrance travel.** Deviation 11 is the
  price: the grammar's −90px drop was sized for one chamber at top 268. A part that stacks chambers
  higher than that has to shorten the drop or lower the tops.


## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + both OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). Every `@font-face` in every
  frame names one of those four files and nothing else (known-traps § 6). No network font fetch.
- Voice: Kokoro `af_heart` at **0.93** through `studio voice --speed 0.93` — offline, free, provider
  pinned by this file, never `auto`. Dry run verified before generating. `studio cues` writes ASR word
  timings into **both** audio metas. ElevenLabs is unusable here (`design.md` `voice_id` empty;
  free-tier keys return HTTP 402) and was not substituted. HeyGen not used (no `HEYGEN_API_BASE`
  sign-in asked for, no avatar).
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`. Band
  top 1024, height 320, Space Grotesk 700 at 46px, spoken word on amber, plate
  `rgba(21,24,29,0.72)` with a 2px `--line` border. Assembled by `studio assemble --captions`, never
  by hand.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1) overrides it for every
  video decision in this campaign.
- Zero network assets: no icons, no images, no BGM, no SFX, no font fetches, no avatar, no face.

## Gate state

Built to the pre-render gate. **No render, no MP4, no publish, no schedule, no `preview
--background`, no BGM, no SFX.** Observed on this pass, with the command that produced each number.

- **Audio rate.** `node studio/tools/studio.mjs voice videos/prog-basics-17-null-nil-none --dry`
  prints `speed=0.74` with no flag (the house lookup misses, as WAVE2-PACKET § 1 says) and
  **`speed=0.93` with `--speed 0.93`**. The wavs already on disk are the 0.93 run:
  `audio_meta.json` durations **3.328 · 7.765 · 4.480 · 7.360 · 2.453 = 25.386s** over **5 voice
  lines**, identical to the measured table in `STORYBOARD.md`, and the film's 12.33 chars/s sits
  inside the confirmed 0.93 carriers (pb-14 12.68, pb-18 12.02, pb-22 12.39, pb-21 11.29) rather
  than the ~9.8 a 0.74 run gives. **No regeneration was needed.** `SCRIPT.md` headings are all
  exactly `## Line N — Title (Frame N)`; 5 headings, 5 lines, 5 frames.
- **Runtime.** F1 4.3 · F2 8.8 · F3 5.5 · F4 8.4 · F5 4.5 = **31.5s film**, above the 30s floor, so
  no padding lever was pulled and no word was added.
- `node studio/tools/studio.mjs assemble … --captions` → 34 caption groups from 70 words, voice
  track 10 × 5, captions lane marked, total 31.5s (expected ~31.5s, +0s).
- `node studio/tools/studio.mjs verify …` → **0 high, 0 medium across 7 html files, "no known traps
  detected"** — before the fixes and after them.
- `npm run check` (project pin 0.8.208) → `Lint 0 errors, 0 warnings` · `Runtime 0 error(s),
  5 warning(s)` (all five are `clip_media_fit`, i.e. the authored air, expected per WAVE2-PACKET § 7)
  · `Layout 0 issues across 9 sample(s)` · `Motion 0 errors, 0 warnings` · `Contrast 40/40 text
  checks pass WCAG AA` · `Craft 0 errors, 0 warnings` · `Audio 0 errors, 0 warnings` ·
  **`◇ Check passed`**.
- `npx --yes hyperframes@0.8.208 snapshot --at …` → **151 stills** (a 0.4s grid inside all five
  scenes plus every emphasis moment, re-shot clean after each fix), all read.
- **Chrome vs pb-14**: 13 regions (four brackets, REC dot, REC word, timecode box, `BEGINNER` chip,
  lower third's top/bottom/left/right edges, shelf rule) diffed against pb-14's saved
  `at-0s.png` — **mean 0.0000 and max 0 on every one**. Lower third's own text lane: kicker to
  x 492, title `Null, nil, and None` to x 403, against a 610px lane and a 632px bar.
- **Geometry**: content bbox across all 151 stills x 38→956, y 238→771; **0 stills with content ink
  outside y 230→1004**; 0 ink rows in y 1004→1024 (worst row luma 58, vs pb-14's 66 reference) and
  0 in y ≥ 1344 (worst 36, reference 47). The x 38 leftmost pixel is the say-plate's own 34px amber
  glow bleed — pb-14 measures the identical x 43 for the same atom, so it is the carrier's, not a
  placement error.
- **Coral census**: `#FF6B5A` appears in **17 of 151 stills, all inside F4 (t 22.68→26.8)**, first
  coral pixel always at y 393-397 (chamber A's error strip). 134 stills carry zero coral. The REC
  dot is never coral. Both strips measure **5.02:1** coral-on-`#262C36` from the rendered pixels.
- **F4 half-draw**: at every type-on midpoint (18.92 / 20.10 / 20.94 / 21.48) and end (19.12 /
  20.28 / 21.18 / 21.60) the amber caret's left edge sits **1-8px to the right of the last drawn
  glyph and 0 glyph-ink pixels fall inside the caret**. This frame has no `--say` plate behind code
  at all, which is why pb-18's 1.09:1 trap cannot occur here.
- **Motion audit**: all 44 adjacent 0.4s samples inside a scene show a measurable change (min mean
  luma delta 0.80 over y 230→1004). No dead frames.
- **Seams**: the REC dot reads at its full value on the last frame of every scene (164 on F1/F2/F3,
  138 on F4 = the same value scrimmed, matching pb-14's own 138-140 inside its cutaway).
- **Verified facts re-run at the moment of the decision** (not taken from the ledger): Python
  3.13.15 raises `AttributeError: 'NoneType' object has no attribute 'name'` and node v24.15.0
  raises `TypeError: Cannot read properties of null (reading 'name')`, both from
  `.tmp/day2_accuracy.py` / `.js`, and both quoted on screen exactly, wrapped at a real space.
  `bool(None) = False`, `bool('') = False`, `None == '' = False` — the reason `if user:` is the
  struck line and `if user is None:` the lit one. `nil` is a name chip only; nothing here executes
  Go/Ruby/Lua/Swift.

**Two defects the pixels showed and both gates missed**, fixed and recorded as deviations 11 and 12:
F4's chamber drop carried titlebar ink to y 227, and the P1 plate left light-on-amber text as a
settled state at 1.28:1 on F1 and F2.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-17-null-nil-none --quality delivery --yes` → `prog-basics-17-null-nil-none_2026-11-01_12-06-25.mp4` in 61s.
ffprobe: h264 1080x1920 + aac 2ch, **31.500s** against this film's timeline, mean volume -23.3 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
