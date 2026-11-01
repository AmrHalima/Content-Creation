---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 16 of 22
title: prog-basics-16-type-casting
message: "casting is converting a type on purpose, coercion is the language doing it silently, and the two languages here disagree about the same characters"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Debate (mechanic unchanged — "Should languages coerce types automatically? Yes or no.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~29-34s
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2.1 (frame.md Day 2; deliberately NOT the prior 15 projects' look)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 62
grammar: G1 G2 G4 G5
bilingual: true (main.py/PYTHON + main.js/JAVASCRIPT; frame-day2 § 13 is this part's central rule)
clone_source: videos/prog-basics-10-switch/compositions/frames/04-two-languages.html
pin: hyperframes@0.8.208
---

## Intent

English master of part 16 of `prog-basics` (Day 2 / BASICS II): type casting and coercion. Portrait
1080x1920, ~29-34s, ceiling 54s. Faceless explainer: no URL, no footage, every visual invented on the
campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/16-type-casting.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4 example,
F5 CTA). Grammar: `frame.md` v2.1 § 4 — G1 hook, **G2 box ×2** (F2 casting, F3 coercion), **G4 split**
(F4, two labelled chambers), G5 CTA.

This is the tranche's **only bilingual part**, and the user's own example mixes the languages:
`int('5') + 3` is Python while `'5' + 3` → `'53'` is JavaScript (in Python that line raises
`TypeError: can only concatenate str (not "int") to str`, executed here). So `frame-day2.md` § 13 is
the load-bearing rule: **every chamber carries its own titlebar filename AND language chip** —
`main.py`/`PYTHON` and `main.js`/`JAVASCRIPT` — and the JS claims on F1 and F3 are labelled too. The
precedent is pb-10 (Day 1's only other bilingual part), whose `04-two-languages.html` is cloned here.

Clone sources (read-only): `videos/prog-basics-10-switch/compositions/frames/04-two-languages.html`
for the two-panel geometry (456px chambers, 24px gutter, one titlebar + one language chip per side) and
`05-cta.html` for the Debate ring that travels and releases; `videos/prog-basics-11-for-vs-while/`
`01-hook.html` (G1 type + P1 say-sweep + the CSS-only ring) and `04-split.html` (the v2 retune of the
same split); `videos/prog-basics-21-arrays/02-row.html` (the P2 drop-in: value enters chamber → chamber
squash-settles → border flashes mint) and `05-cta.html` (the Day 2 CTA shell with the BASICS II badge).
The shared stylesheet block (`--panel` chambers, `pb-kicker`, `pb-strip`, `cd-*` titlebars, `tk-*` token
colours) is the series' own, copied whole.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. Hook, explain lines,
  example and CTA mechanic are the user's words and are verbatim; `CORRECTIONS-day2.md` § A lists this
  part's explains as already passing, so **no re-cut applies**. `casting` is glossed in the user's own
  sentence ("you converting a type on purpose") and again on screen as `casting = you write the
  conversion`; `coercion` gets `coercion = the language converts it, unasked` in the same frame it is
  named. `explicit` is never left bare: F3's annotation is the conversion the viewer wrote. The word
  "implicit" does not appear anywhere in this part. **Nothing on screen teaches a Python rule using a
  JavaScript fragment or the other way round** — the chips are the clarity bar for this part, and the
  cover carries `JAVASCRIPT`.
- **Motion.** Two meaning-carriers, both physical, both from the series' own assignment idiom:
  **F2 = casting as a value entering a different container on purpose** — the `int('5')` tag arrives
  *before* the arrow draws (P8 `arrow-run`), then the value drops out of the `str` chamber, crosses and
  lands in the `int` chamber with the squash-settle and mint border flash (P2 `drop-in`, pb-21's
  gesture). **F3 = coercion as the same apparatus with nobody at the wheel** — the arrow draws itself
  with **no tag on it**, at the moment the voice says `silently`, and the value crosses anyway. The
  absence of the label is the lesson; F2 and F3 are deliberately the same layout so the one missing
  thing is what changes. F4 is P3 `type-on` under a caret, one line per spoken clause, with both answer
  strips arriving on their own spoken value. F5 is pb-10's travelling ring: YES → NO → released, resting
  on neither, still travelling while the card loops. Every emphasis is proved by pixel deltas between
  neighbouring snapshots, not by intent.

## Deviations from the piece file (all recorded, none silent)

The piece file is Day 2 vocabulary already, so these are small and each is deliberate:

- **Zero coral, and the executed `TypeError` stays off the screen.** `WAVE2-PACKET.md` § 6 and
  `frame-day2.md` § 1 name part 16 as a zero-coral part, and `--err` may only carry a message an
  interpreter raised here. Python's `TypeError: can only concatenate str (not "int") to str` *was*
  raised here, so coral would have been legal — but it is quoted in the pinned comment instead of the
  frame, because adding a third line to the Python side of the split crowds the 936px content box and
  the `8` against `'53'` contrast already carries the point. This film ships **no coral at all**.
- **The JavaScript truthiness/loose-equality evidence (`'5' == 5` → `true`, `'5' === 5` → `false`,
  `true + 1` → `2`, `'apple' + 3` → `"apple3"`) is held for the post copy, not drawn.** F3 has one
  coercion crossing and one printed answer; a second mini-chamber would make F3 a twin of F4's split,
  which § 7's join rule forbids.
- **F1 carries a `JAVASCRIPT` chip.** § 4 calls G1 "type alone, nothing illustrated", and a chip is
  chrome rather than illustration; § 13 outranks it here because the hook's two claims are JavaScript
  claims and the cover is where a viewer forms the wrong belief. Recorded under Customizations below.
- **F2/F3 are G2 boxes wearing a code titlebar** (`main.py`/`PYTHON`, `main.js`/`JAVASCRIPT`). § 4's G2
  uses a name tab, not a titlebar; the series' containers are tabbed `str`/`int`/`string`/`number`, and
  the language still has to be named somewhere on the frame that shows `int('5')`. The titlebar sits
  above the pair as a 64px `--panel-2` strip, so the tab geometry is untouched.
- **pb-10's cloned chamber fill is corrected, not copied.** `04-two-languages.html` paints its panels
  `rgba(255,255,255,0.05)` over the ground — the field colour, which is the exact invisible-chamber bug
  `WAVE2-PACKET.md` § 4 warns about. Here the chambers are `--panel` `#1F242C` with 3px
  `rgba(255,255,255,0.16)` hairlines.
- **The `…` elision mark from pb-10's split is not used.** Both of this part's fragments are complete,
  executable expressions, so nothing needs eliding.
- **pb-10's em-dash answer prompt is replaced with the spec'd `▸`** (found in the pixels at the gate, not
  in review). The clone source `04-two-languages.html` ships its terminal strips as `node &#8212; weekend`
  / `python &#8212; weekend`, and that markup was carried into F3 (`node — 2`) and F4 (`python — 8`,
  `node — '53'`). `WAVE2-PACKET.md` § 9 bans em-dashes on screen, and this part's own piece file and
  Customizations section both specify `python ▸` / `node ▸`, so the frames — not the piece file — were the
  wrong ones. All three now read `&#9656;`; cropped at 15.4s and 24.2s to confirm JetBrains Mono actually
  carries U+25B8 (a tofu box would have been worse than the dash). pb-10 is Day 1 and read-only, so the
  habit is stopped here rather than back-ported.
- **F4's `+` is now the same colour on both sides.** The Python chamber rendered its operator `--muted`
  and the JavaScript chamber rendered its operator `--ink`, on a frame whose kicker reads
  `TWO LANGUAGES · ONE SYMBOL`. The JS line was split into `tk-i / tk-m / tk-i` spans to match, so the
  only difference between the two chambers is the language and the answer. Contrast re-measured at 36/36.
- **F2/F3's crossing is a copy, not a move** — the prose above says the value "drops out of the `str`
  chamber", and the shipped gesture is a chip crossing while the source chamber keeps its value, so both
  containers end populated. Kept: that is the true semantics (`int('5')` returns a new object and leaves
  the string alone), and an emptied `str` box would teach a mutation that does not happen. The transient
  duplication at the crossing reads as a copy, which is correct.
- **F1 carries one gloss group the piece file does not list**: `• one language, two different answers`
  under a drawn rule bar. Additive on-screen only — no narration word was added, and the claim is
  JavaScript-internal (both lines are JS), so § 13 is not engaged.
- **`STORYBOARD.md`'s scene-start column is rounded** (11.00 / 19.14 / 25.58) while the assembled
  `index.html` carries the exact sums of the frame durations (10.99 / 19.12 / 25.56). `index.html` is
  authoritative; the storyboard table was not rewritten to avoid churning a file `studio voice` owns.

Nothing else changed: the hook, all three explain sentences, the example and the CTA mechanic are the
user's words, and `## Accuracy` in the piece file needed no correction.

## Customizations (this part's two-panel geometry, per series-bible § 4)

- **G4 side-by-side at two chambers is legal only at ≤3 lines per side** (Day 1 bible § 4, inherited by
  `frame-day2.md` § 4). This part shows **two fragments side by side**, one expression line plus one
  answer strip per side, inside that law. Chamber width **456px**, gutter **24px**, left at x 72 and
  right at x 552 (pb-10's settled numbers, re-measured for 456px: 72 + 456 + 24 + 456 = 1008 ≤ 1080,
  content width 936 respected).
- Titlebar 64px, `--panel-2`, filename mono `--muted` left, language chip `--say` on a 2px `--say`
  border right. Answer strip per side: 456px × 84px, `--panel-2`, mint value, mono `--muted` prompt
  reading `python ▸` / `node ▸`.
- **F2/F3 container pair:** chambers 300×190px at x 72 and x 708, name tab 60px on the left edge, arrow
  lane x 392 → 688 (296px) with the 3px `--say` wire as a CSS div and a chevron from two borders — never
  an SVG in a scaled container (pb-11's drift finding).
- F5 chips `YES` / `NO` 260×104px at x 250 and x 570; ring 288×132px travelling x 0 → 320 and releasing
  at the tail so the loop rests on neither side.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + both OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set; BATCH-day2's bash block is the
  authority, the Inter/Caveat set is v1 lineage).
- Voice: Kokoro `af_heart` **@ 0.93 through `studio voice`, always with `--speed 0.93`** (offline, free,
  provider pinned by this file — never `auto`). The house lookup in `studio.mjs` misses the nested
  `voice.voices.en` key and falls through to **0.74**, so an unflagged run is 26% slow
  (`WAVE2-PACKET.md` § 1, `frame-day2.md` § 8); `voice_speed:` here is documentation only. ElevenLabs is
  unusable on this machine (`voice_id` empty, free-tier keys → HTTP 402) and was not substituted; HeyGen
  not used. No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1, copied from
  `writing/prog-basics/frame-day2.md`) overrides it for every video decision in this campaign.
- Zero network assets: no icons, no images, no BGM/SFX, no font fetches. Every `@font-face` names a file
  in `assets/fonts/`.

## Gate state

Built to the **pre-render gate only**: voice @0.93, cues, 5 frames, assemble, verify, check, snapshot
read. **No render has been made and none is authorized by this run** — no MP4, no `renders/` output, no
publish, no schedule, no Arabic pass, no BGM, no SFX, and no `preview --background` (bible-day2 § 6 rule
4: parallel runs snapshot only).

Written back mid-run (measured, not planned) — see the `## Frame build` section below for the numbers
as observed at the end of this run.

## Frame build (measured at the gate, 2026-10-28)

**Audio rate — proven, not assumed.** `studio voice --dry` resolves to `speed=0.74` (the broken house
lookup, as documented). That is the *default*, not what this project's wavs were made with, so the rate
was tested directly: the F2 and F5 narration lines were re-synthesised offline through the pinned engine
into a scratch dir and deleted. `--speed 0.93` → **3.776s / 3.520s**; `--speed 0.74` → 5.056s / 4.693s.
`audio_meta.json` and `ffprobe` both hold 3.776 / 3.520, and all five wavs match their meta durations to
the millisecond. **The existing audio is at 0.93. No regeneration, no retime.** (Written words ÷ speech
seconds is 2.31 here against 2.89-3.23 across the tranche, but this script's code tokens are spoken as
more words than they are written — `'5' + 3` is one token and "five plus three" is four — so that ratio
is not evidence of a slow rate. Re-synthesis is.)

| Frame | VO (measured) | Frame (VO + air) | Scene start | Air |
|---|---|---|---|---|
| F1 hook | 5.205 | 6.21 | 0.00 | 1.005 |
| F2 casting | 3.776 | 4.78 | 6.21 | 1.004 |
| F3 coercion | 7.125 | 8.13 | 10.99 | 1.005 |
| F4 split | 5.440 | 6.44 | 19.12 | 1.000 |
| F5 CTA | 3.520 | 5.52 | 25.56 | 2.000 |
| **film** | **25.070 speech** | **31.080** | ends 31.08 | 6.014 |

**31.08s — over the 30s floor, so F5's pad did not have to grow and no word was added.**

Gates as observed (commands, not memory): `studio assemble --captions` → 27 groups from 58 words, total
31.08s, `+0s` vs expected, captions lane marked. `studio verify` → **0 high, 0 medium across 7 html
files, no known traps detected**. `npm run check` (pin 0.8.208) → Lint 0 errors 0 warnings; Runtime
**0 errors, 5 warnings** (all `clip_media_fit`, the authored air, expected per § 7); Layout 0 issues
across 9 samples; Motion 0/0; Contrast **36/36 pass WCAG AA**; Craft 0/0; Audio 0/0; `◇ Check passed`.

Snapshots: 100 frames on `hyperframes@0.8.208`, a ~0.4s grid inside every scene plus each emphasis
moment, read as PNGs and as 740px crops. What they proved:
- **§ 13 holds in the pixels.** F4 at 24.2s shows `main.py` + `PYTHON` on the left and `main.js` +
  `JAVASCRIPT` on the right, both chips legible at phone scale, `int('5') + 3` → `8` on the Python side
  and `'5' + 3` → `'53'` on the JavaScript side. F1 carries `JAVASCRIPT` above both claims for the whole
  hook, F2 `PYTHON`, F3 `JAVASCRIPT`. Nothing anywhere attributes `'53'` to Python.
- **The F2/F3 difference reads.** F2's arrow lane carries the solid amber `int('5')` tag before the wire
  draws; F3's identical apparatus has an empty lane at 13.8s. The missing label is visible without being
  told.
- **F5 rests on neither chip.** At 30.9s (the last sampled frame) the ring is gone and both YES and NO
  wear plain `--line` borders; the `PICK A SIDE` plate and the badge
  `PROGRAMMING BASICS · BASICS II · 16 · BEGINNER` hold.
- **Ligature guard verified by cropping, not by CSS.** All five frames carry the guard, and the only
  `->` in the project is inside a JS comment. Crops of `int('5') + 3`, `'5' + 3`, `'5' - 3` and `'53'`
  show separate parens, straight U+0027 quotes and an unfused `+` / `-`.
- **Coral: zero.** `#FF6B5A` / `--err` appears nowhere in `index.html` or `compositions/`; the two real
  interpreter messages stay in the pinned comment. Nothing crept in as drama.
- **Geometry:** nothing bright below y 1344 at any sampled time (max luma 29-40 = ground only); the only
  lit pixels in 1004-1344 are the caption band's own skin plate. The 1px `gnd-shelf` at y 1010 is the
  shared ground, present in pb-21 and pb-22, not this part's addition.
- Two low-motion samples worth naming (9.6s and 13.4s score 0.2 change against the previous frame) are
  the hold *after* a beat lands, inside the authored air — not a missing emphasis.

Two defects the pixels caught and the gates missed, both fixed above: the inherited em-dash prompts and
the split `+` colour mismatch. A third suspicion (the F4 caret colliding with the `3`) was disproved by
cropping — the caret rides the reveal edge, which is what a caret does.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-16-type-casting --quality delivery --yes` → `prog-basics-16-type-casting_2026-11-01_12-05-17.mp4` in 67s.
ffprobe: h264 1080x1920 + aac 2ch, **31.100s** against this film's timeline, mean volume -23.1 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
