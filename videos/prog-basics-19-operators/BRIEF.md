---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 19 of 22
title: prog-basics-19-operators
message: "operators come in three families — they do math, they answer true or false, they combine checks — and the single equals sign is the one that stores instead of asking"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz (mechanic unchanged — "What's 7 % 3? Comment it.")
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
words: 58
grammar: G1 G2b G4 G3 G5
carrier: false
pin: hyperframes@0.8.208
---

## Intent

English master of part 19 of `prog-basics` (Day 2 / BASICS II): operators — arithmetic, comparison,
logical. Portrait 1080x1920, ~29-34s, ceiling 54s. Faceless explainer: no URL, no footage, every
visual invented on the campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/19-operators.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4 example,
F5 CTA). Grammar: `frame.md` v2.1 § 4 — G1 hook, **G2b rows** (F2, three family rows), **G4 split**
(F3, `=` against `==`), G3 code chamber (F4, the two divisions), G5 CTA (F5, Quiz).

Clone, not design. This part invents no atom: F1/F2/F4/F5 come from `videos/prog-basics-21-arrays/`
(the validated v2.1 carrier: the ground, `pb-kicker`, `pb-chamber`, `pb-strip`, `cd-*` chamber, the
P3 caret + chamber-coloured mask, the P9 `count-tick` strip, the G5 shell) and F3 comes from
`videos/prog-basics-11-for-vs-while/compositions/frames/04-split.html` (two `cd-root` panels, 456px
wide, 24px gutter, own `main.py` titlebar + `PYTHON` chip each — the v2 retune of pb-02's split, which
is what `frame-day2.md` § 11 names as 19's clone source). Nothing from Day 1's v1 geometry is reused.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. The hook and the
  CTA mechanic are the user's words and are verbatim; the explain lines ship unchanged too
  (`CORRECTIONS-day2.md` § A lists 19 among the parts that needed no re-cut). `operators` is glossed
  by F2's own three glosses (`does math` / `gives true or false` / `combines checks`) in the same frame
  each family name is said; `assigns` and `compares` are the head labels of the two chambers they name;
  `//` and `/` are distinguished on screen by the `int` / `float` chips, never by a spoken definition
  of "type". **No second enumeration anywhere:** F2's three families are the part's one allowed
  three-item list because the enumeration *is* the subject (the pb-02 precedent), so the voice's
  `and, or, not` gets three borderless scale pulses on the `logical` chamber instead of a list, and
  F5 shows one empty answer slot instead of a row of candidates. No "O(1)"/`O(n)`-style notation, no
  "iterate"/"traverse", no "simply/just/easy", no em-dashes on screen, no "it's not X, it's Y" shape
  (that is spent on part 05's hook — note F1's hook contains the user's own "is not what you think",
  which is verbatim and is not a licence to add another).
- **Motion.** Four meaning-carriers, one per concept frame: F1 = P1 `say-sweep` on the tail of the
  hook; F2 = the three rows **ticking in** on P9 `count-tick` (one row per spoken family word, gloss
  0.2s behind) plus P7 `pulse-set` ×3 on `logical` for the three spoken operators; F3 = P3 `type-on`
  per chamber under its own caret, P4 `wall-draw` for the gutter rule, and two **sequential** amber
  plates (`=` then `==`, the first retired before the second arrives); F4 = P3 `type-on` for both
  division lines with a plate that moves from `//` to `/`, then the terminal strip landing with both
  printed values. F5 = the dashed empty slot with a blinking mint caret (the "waiting to be filled"
  state, i.e. the quiz made physical) and the `COMMENT IT` plate dropping in on the verb. Every
  emphasis time in the frame files cites a measured word onset from `audio_meta.json`; nothing is
  proved by intent.

## Deviations from the piece file (all recorded, none silent)

- **`--speed 0.93` IS passed, against the tranche's original "never pass `--speed`" rule** — the house
  lookup in `studio/tools/studio.mjs` reads `voices.en`, but `.agents/design.md` nests the block under
  `voice:` so the flattened key is `voice.voices.en`, the lookup misses and speed falls through to
  `VOICE_DEFAULTS.en.speed` = **0.74**. All three carriers proved this and pb-21/pb-22 shipped the
  flag; the dry run is read before generating. `voice_speed:` in this file is documentation — the tool
  never reads it. The one-line fix (`safeJson(house['voice.voices.' + lang])`) is in
  `LEARNINGS-PROPOSALS` territory and `studio/**` is read-only to this run.
- **The example is split across two frames, its words are not split.** The user's example is
  "`x = 5` versus `x == 5`. In Python, `7 // 2` gives 3 while `7 / 2` gives 3.5." F3 draws the first
  sentence (it *is* the explain line's "watch out", so the split and the narration belong together) and
  F4 draws the second as the G3 chamber. No wording changed, nothing dropped.
- **F4's numbers are spoken as `7 floor divided by 2` / `7 over two`,** because the screen's `//` and
  `/` are one keystroke apart and the ear must not be given the same phrase twice. This is the
  series' spoken-code convention (pb-21: `nums[1]` → "nums at index one"); the written CTA line in F5
  stays the user's verbatim `What's 7 % 3? Comment it.`
- **`and, or, not` are not listed on screen** (see Clarity). One allowed three-item list per part;
  spent on the families.
- **The right G4 chamber carries a muted echo line `x = 5`** above `print(x == 5)`. Executed, the
  ledger's claim is "assign, then compare" (`x = 5` then `x == 5` → `True`); an unlabelled bare
  `x == 5` chamber would be a NameError in isolation, so the echo keeps the printed `True` honest
  rather than invented. The echo is `--muted` text, not a dimmed opacity — § 14's rule that an
  opacity-dimmed row collapses contrast.
- **Both chambers print through `print(...)`** (`print(x)` → `5`, `print(x == 5)` → `True`) rather
  than showing `x = 5  # 5`: a bare assignment prints nothing, and this campaign's comment values are
  printed values. Re-executed for this build in `.tmp/pb19_accuracy.py`.
- **Amber plates retire between beats.** § 1's "never two amber plates at once" is stricter than the
  shipped pb-11 split (whose three plates each stayed lit), so F3 wipes the `=` plate back out before
  the `==` plate arrives, and F4 does the same from `//` to `/`. One lit plate at any instant, and the
  plate is always on the token the voice is naming.
- **Zero coral**, as the tranche law requires for part 19 (nothing raises an exception here); the
  `IndexError`-style "gotcha" material is not used at all. The `%` answer `1` is off-frame (pinned
  comment), and `5 > 3 == True` → `False` is held for the reply thread only — never on screen, never
  in the VO.
- **The CTA's `%` is glued to the `7` in `SCRIPT.md` only** (`What's 7% 3? Comment it.`) — a spacing
  change, no word, symbol or order changed, and the frame, the piece file, the post copy and the pinned
  comment all carry the user's string exactly as written. Reason: `studio cues`'s tokenizer
  (`studio/tools/cues.mjs` → `norm()`) strips everything that is not a letter, digit, apostrophe or
  hyphen, so a *standalone* `%` normalizes to the empty string and is filtered out of the canonical
  word list — the caption lane would read `What's 7 3? Comment it.` and the operator would vanish from
  the only line of the film that is about an operator. Glued as `7%` the token survives
  (`norm("7%") = "7"`), the timing is unchanged and the caption keeps the glyph. Measured: raw
  faster-whisper on `assets/voice/05.wav` hears `What's / 7 / % / 3? / Comment / it.`, so the audio
  always had the word; only the caption pipeline was losing it. This is a tranche-level trap for any
  part whose narration speaks `//`, `==`, `%`, `->` or `[]` as its own token (13 says `n % 2 == 0`,
  20 says `and`/`or` — 20 is safe, 13 is not).
- **Kokoro reads `%` as "percent"**, which is not Python's meaning for the modulo operator. The CTA is
  the user's verbatim string and is not rewritable, and pb-21 set the precedent of letting the voice
  read a code token literally (`nums[-1]` → "nums minus one"). So the film repairs it without editing
  the sentence: F5 shows the expression in the code face as `7 % 3 = [ ]` and the pinned comment opens
  with the remainder explanation. Flagged rather than buried.
- **No runtime padding.** 58 words at the measured rate lands the film near or under the tranche's
  30s floor; per `series-bible-day2.md` § 0.2 and § 12 the permitted lever is F5's pad, never words,
  and the number is reported.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + both OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). Every `@font-face` names a file
  that exists in `assets/fonts/`; no font fetches.
- Voice: Kokoro `af_heart` at **0.93** through `studio voice` (offline, free, provider pinned by this
  file — never `auto`). ElevenLabs unusable here (`voice_id` empty, free-tier keys HTTP 402) and was
  not substituted; HeyGen not used. No BGM, no SFX.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1, Day 2) overrides it for
  every video decision in this campaign.
- Zero network assets: no icons, no images, no BGM/SFX, no font fetches. The GSAP tag in `index.html`
  is the generator's own CDN script line, identical to every shipped sibling in this series.

## Gate state

Built to the pre-render gate only: voice @ 0.93, cues, 5 frames, assemble, verify, check, snapshot
read. **No render has been made and this worker is not authorized to render.** No publish, no
schedule, no Arabic pass, no BGM, no SFX, no `preview --background` (parallel workers; snapshots
only). Nothing outside this project directory and `writing/prog-basics/pieces/19-operators.md` was
touched.

`## Accuracy` in the piece file is confirmed on Python 3.13.15 (`series-bible-day2.md` § 4, plus
`.tmp/pb19_accuracy.py` re-executed for this build): `print(x)` → `5` (`int`), `print(x == 5)` →
`True` (`bool`), `print(7 // 2)` → `3` (`int`), `print(7 / 2)` → `3.5` (`float`), `7 % 3` → `1` (not
on screen), `True and False` → `False`, `not 0` → `True`, `5 > 3 == True` → `False` (reply thread
only).

Frame durations are the measured VO plus authored air (~1.0s per frame, 2.0s+ on F5), written into
`STORYBOARD.md` after `studio cues`; the assembler and the caption build both derive cumulative starts
from it.

## Gate evidence, observed at the end of this run

- `studio voice --dry` with no flag printed `provider=kokoro voice=af_heart lang=en speed=0.74` — the
  documented house-lookup miss. With the flag: `▶ prog-basics-19-operators — provider=kokoro
  voice=af_heart lang=en speed=0.93`, 5 wavs, `✓ audio sync-durations: 5 frame duration(s) updated`,
  and `57 words over 5 lines (asr)`. **`audio_meta.json` carries exactly 5 voice lines**, one per
  frame, so no narration was silently merged (the pb-22 failure mode).
- Measured: F1 2.581 / F2 9.856 / F3 4.608 / F4 5.141 / F5 2.325 = **24.511s of speech**; with the
  authored air (1.0s per frame, 2.0s on F5) the film is **30.52s** — above the tranche's 30s floor, so
  F5's pad was *not* grown and no words were added. Cumulative starts 0 / 3.58 / 14.44 / 20.05 / 26.19.
- `studio assemble --captions` → `25 group(s) from 57 words … total duration: 30.52s (expected
  ~30.52s, +0s)`, `✓ post-fix: captions lane marked`.
- `studio verify` → **0 high, 0 medium across 7 html files** (re-run after the pixel fixes).
- `npm run check` (hyperframes@0.8.208) → `◇  Check passed`: Lint 0/0 · Runtime **0 errors +
  5 `clip_media_fit` warnings** (the authored air, same as every shipped sibling) · Layout **0 issues
  across 9 sample(s)** · Motion 0/0 · **Contrast 29/29 text checks pass WCAG AA** · Craft 0/0 ·
  Audio 0/0.
- 36 snapshots read across two batches. What the pixels confirmed: the three F2 rows land one per
  family word with their glosses beside them and nothing else enumerates (12.9s shows the `logical`
  chamber mid-pulse on `not.`, the only motion in that beat); F3's left chamber carries `x = 5` with
  the amber plate on a **single `=`** (16.1s) and the right chamber `print(x == 5)  # True` with the
  plate on a **two-glyph `==`** (18.4s) — neither fused, and the left plate is fully retired before
  the right one lights; F4 shows `print(7 // 2)   # 3 [int]` and `print(7 / 2)   # 3.5 [float]` with
  `//` and `/` unligated and the type chips muted on `--panel-2`, the strip `>>> 3   3.5` arriving at
  25.1s; F5 holds alone at 30.3s with an empty dashed slot, a mint caret and **no `1` anywhere**.
- Keep-out: max luma in the 1344-1920 platform zone is 47 (the mint glow, identical to pb-14's
  measurement) and 56-60 in the 1004-1024 strip; the only ink below 1004 is the caption plate inside
  the 1024-1344 band. Motion audit: PSNR between nearby samples inside each scene 21.2-30.4 dB
  (F1 1.3→1.6 = 21.7, F3 18.1→18.4 = 23.1, F4 22.0→22.4 = 26.1, F5 27.8→28.2 = 21.2), so every
  sampled second moves; the 30.2 dB pair is F5's deliberate hold.

Two defects found only by `check` and the pixels, both fixed:
(a) **a say-plate flipped its token to `--say-ink` before the plate had covered it**, which put dark
    ink on the graphite ground — `check` scored it 1.04:1 (`#f4-t1`) and 1.28:1 (`#f1-ht`); every
    plate now completes its wipe *before* the token darkens, and contrast went to 29/29. This is the
    plate-behind-text idiom every shipped part of this campaign uses, so it is a live trap for the
    other seven parts, not a defect unique to this one.
(b) an annotation line in F4 (`same two numbers, a different kind of answer`) held 0.86s against its
    1.72s `line_unread` floor, so it was cut rather than retimed — the `int`/`float` chips carry that
    claim and the frame lost nothing the voice promised.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-19-operators --quality delivery --yes` → `prog-basics-19-operators_2026-11-01_12-08-19.mp4` in 57s.
ffprobe: h264 1080x1920 + aac 2ch, **30.533s** against this film's timeline, mean volume -23.2 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
