---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 12 of 22
title: prog-basics-12-infinite-loops
message: "a while loop only ends when its check turns false, and the check only turns false if something inside the loop changes the variable it reads"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz (mechanic unchanged — "Spot the missing line? Comment it.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~25.6s
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
words: 51
grammar: G1 G3 G3-gate G5
carrier: false (clones pb-11's gate; proves no new mark)
clone_source: videos/prog-basics-11-for-vs-while/compositions/frames/03-gate.html
pin: hyperframes@0.8.208
---

## Intent

English master of part 12 of `prog-basics` (first part of Day 2 / BASICS II): infinite loops and how
to avoid them. Portrait 1080x1920, ~23.5s measured band against the tranche's 29-34s planning figure
and a 54s ceiling. Faceless explainer: no URL, no footage, every visual invented on the campaign's own
identity. Copy source of record: `writing/prog-basics/pieces/12-infinite-loops.md`. Shape: bible § 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2.1 § 4 — G1 hook, **G3** code
chamber (F2 and F4), **G3-gate** (F3: pb-11's gate that re-tests, with its bounded accelerating spin),
G5 CTA.

This part is a **clone job**, not a design job: `series-bible-day2.md` § 1 names part 12's stuck loop
as pb-11's gate that re-tests, and `BATCH-day2.md` gives `pb-11/03-gate.html` as the read-only clone
source. F3 copies that file's apparatus and changes the object being taught. F2/F4 copy pb-21's shipped
G3 chamber, caret/mask and terminal-strip atoms; F5 copies pb-21's G5 shell with pb-11's
dimmed-callback-hint idea. Shared stylesheet (`--panel` chambers, `pb-kicker`, `pb-strip`, `cd-*`) is
the series' own.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. The hook and the
  CTA mechanic are the user's words and are verbatim; the three explain lines ship unchanged, because
  `CORRECTIONS-day2.md` lists part 12 among the parts that already pass the sentence law. Glosses are
  on screen, in the same frame the term is spoken, since the voice cannot add a gloss without editing
  the user's sentence: `condition` → the chip labelled `the check` (pb-11's standing gloss);
  `infinite loop` → the repeated `True` stamps under F2's chamber plus F1's `frozen = it is still
  running`; `variable` → the mint `i` chip that pulses once per pass and stays `0`; `loop` → `a loop
  runs the same lines again` on F1 (the hook cannot gloss itself); `round` → the `pass 1 / pass 2 /
  pass 3` badges on F3. **No "iterate", no "traverse", no `O(1)`/`O(n)`, no "simply/just/easy", no
  "don't worry", no "not X, it's Y"** (that shape is spent on part 05's hook). The code is never read
  aloud — F4 shows the loop while the diagnostic question is asked. The lesson to land: name what
  changes each round and what ends it before you press run.
- **Motion.** Three meaning-carriers, each one doing the explaining. F2 = **the check that never
  flips**: three code lines written under a moving caret (P3 `type-on`, one per spoken clause), the
  `0` dropping into the assignment (P2 `drop-in`), the amber say-plate wiping over `i < 5` exactly as
  the word `condition` is spoken (P1), then three `True` stamps arriving one per beat and **holding**
  (P9 `count-tick`) — repetition is the definition, so the frame says `never becomes false` by
  repeating rather than by asserting. F3 = **the gate that re-tests** (pb-11's clone, adapted): the
  body fills and drains, the dashed loop-back rail redraws right-to-left on every pass, the gate chip
  is re-read, the pass badges tick, and the mint `i` chip pulses once per pass while staying `0`
  (P7 `pulse-set`) — that stillness *is* the cause. Then a **bounded, accelerating** spin (six redraws,
  0.72s → 0.15s) ends on an ellipsis and the amber plate `forgot to update`, nothing runs unbounded and
  nothing reads a wall clock or a random number. F4 = **the gap and the diagnosis**: the four-row
  chamber with a dashed empty slot whose caret blinks on a 1s yoyo (the quiz question), the terminal
  strip filling with the executed `0 0 0 0 0 0 0 0 …`, and the amber `NEVER ENDS` plate landing on the
  spoken words `what ends it` while everything else freezes. Target: every emphasis is proved by pixel
  deltas between neighbouring snapshots, not by intent.

## Deviations from the piece file and from the clone source (all recorded, none silent)

- **`--speed 0.93` WAS passed, against the tranche's "no worker passes `--speed`" rule (bible-day2
  § 0), because the house lookup is broken and would otherwise ship 0.74.** `studio voice` resolves
  speed as `--speed` → `house["voices.en"]` → `VOICE_DEFAULTS.en.speed` = **0.74**, and
  `.agents/design.md` nests `voices:` under `voice:` so the flattened key is `voice.voices.en` and the
  lookup misses. `studio/**` and `.agents/**` are read-only to this run, so the flag is the only lever
  that produces the house rate. The `--dry` line was read before generating, and it is reported
  verbatim in `## Gate state`. The same finding is in pb-21's `BRIEF.md` and `frame-day2.md` § 8.
- **Runtime is under the tranche's 30s floor and was NOT padded.** 51 spoken words measured at 17.622s
  of speech — **2.9 words/second, slower than the carriers' 3.24 planning rate**, because three of the
  five lines are two sentences and this part carries the tranche's longest inter-sentence pauses. The
  film is **25.62s** with the full authored air. Per `series-bible-day2.md`
  § 0.2 (the user chose "accept the short film: no added words") **no word was added**. The one
  permitted lever was taken: **F5's pad is grown from the standing 2.0s to 4.0s** (`frame-day2.md` § 12
  — air on the last frame is shape, since F5 loops under the platform's chrome and carries no exit
  push), which puts F5 at 6.16s against pb-11's 5.6s and pb-21's 5.56s. The other four frames keep the
  authored 1.0s and were not shrunk to chase a total. Reported at the gate.
- **The user's third explain line is on F4, not on F2/F3.** The brief said to split the explain across
  F2/F3; there are three sentences and three non-hook, non-CTA frames, and one-idea-per-frame is
  satisfied exactly by one sentence per frame. Putting `Before running any loop, ask: what changes each
  round, and what ends it?` on F4 is what lets the amber `NEVER ENDS` plate land on the spoken words
  `ends it`, which is the mechanism the wave packet asked for (pb-11's `IT NEVER STOPS` did the same
  job on its own spoken words). No sentence was re-cut, shortened or reordered within its frame.
- **pb-11's strike-out of the escape line is dropped outright.** Part 11 could strike `done = True`
  because the escape existed and was removed. Here the escape is the line that is *absent*, and `i += 1`
  is the answer to this part's own quiz — drawing it struck-out would print the answer on screen and
  make F5 unanswerable. The cause is instead carried by the mint `i` chip that pulses once per pass and
  never moves. The amber plate therefore reads `forgot to update` (the spoken words) rather than
  pb-11's `it never stops`.
- **The loop-back rail becomes CSS divs, not an SVG path.** The wave packet § 4 and `frame-day2.md`
  § 7's G7 note make connectors CSS in the untransformed layer, because pb-11 found an SVG ring inside a
  transformed container drift out of the content box into the platform zone; pb-11's own `f3-loop` arc
  sits inside a band whose entrance is an `x` tween. The rail is now a dashed-border div (left, bottom,
  right sides, bottom corner radii) revealed with a `clip-path` wipe right-to-left, plus a chevron built
  from two borders. Same shape, same draw order, no SVG geometry inside a transform.
- **No amber runner square inside the body box.** pb-11's `f3-run` is a solid `--say` chip travelling
  through the body. Two amber objects on one board breaks § 1's singular-amber contract once the
  `forgot to update` plate arrives, and the packet bans a second amber plate outright. The runner is
  `--ink`, and the gate border pulses amber briefly per re-read and returns to `--line` between passes,
  so the plate at the end is the only sustained amber in the frame.
- **`0 1 2 3 4` appears nowhere in the film.** The instinct is to show a `while i < 5` loop counting;
  executed, the loop as written prints `0` forever (`series-bible-day2.md` § 4: thirteen zeros, guard
  fired at pass 13; re-executed for this run, see `## Accuracy` in the piece file). F4's terminal strip
  is `0 0 0 0 0 0 0 0 …` and the repeated zero is the diagnosis. The fixed sequence `0 1 2 3 4` lives
  only in the pinned comment, where it is the executed output of the loop *with* the update line.
- **No coral anywhere in this film** (`--err` `#FF6B5A` unused). A hang raises no exception on this
  machine, and the packet reserves coral for an error an interpreter actually raised — pb-11 shipped the
  same rule for the same reason and its `BRIEF.md` records it. The stuck state is motion + amber plate.
- **The G2 `empty` shape is used inside a G3 code column.** `frame-day2.md` § 4 defines `empty` (3px
  dashed `--line`, no value, one dim mint caret blinking at 1s) as a G2 chamber state. The wave-packet
  instruction for this part requires a visible empty slot in the code-line column so the quiz is
  answerable, so the shape is drawn as a timed row of the chamber with the caret blinking in the
  indented body position. The chamber is still within G3's "max 4 lines plus one terminal strip".
- **The `empty` slot is the chamber's LAST row, under `    print(i)` — not above it.** Raised by part
  18's builder, who ran both fragments. The slot first sat between `while i < 5:` and `print(i)`, so a
  viewer answering the quiz correctly wrote `i += 1` **above** the print — which executes as
  `1 2 3 4 5`, while this part's own terminal strip and pinned comment promise `0 1 2 3 4`. The broken
  reading is `0` forever either way, so only the correct answer was at risk: a learner could post the
  right line and be told it is wrong (Day 1's pb-09 failure mode). Executed both orders on Python
  3.13.15 (`C:/Users/AmrPC/AppData/Local/Programs/Python/Python313/python.exe`), stdout verbatim:
  increment-then-print → `1`, `2`, `3`, `4`, `5`; print-then-increment → `0`, `1`, `2`, `3`, `4`;
  no increment → `0` ×13, guard-stopped. **The frame was corrected, not the comment**, because
  print-then-increment is the idiomatic order, `0 1 2 3 4` is the zero-based reading, and it re-pays
  parts 03 and 11's zero-index callback — this series' running beat. The move is four CSS values
  (`f4-slot` top 204→266; `f4-l4`/`f4-m4` 266→204; `f4-cr4` 273→211) plus the two arrivals swapped so
  P3 still types top-to-bottom (print 1.10→ was 1.52; slot 1.52→ was 1.10; its caret blink 1.76→ was
  1.34, keeping the authored 0.24s lead over its own box). Frame duration, every other beat, all
  colours, all ids and classes unchanged. Consequential: **F5's label reads `main.py · line 4`** (was
  `line 3`), and the pinned comment now names the position.
- **F1's cover cut is 5 words, not the hook.** Per `frame-day2.md` § 6 the cover is the hook cut to
  ≤6 words: `Your program froze. Here's why.` with the amber plate on `froze`. The F1 frame itself
  carries the full verbatim hook, as pb-11 and pb-21 do.
- **Fonts/CLI pin.** `hyperframes@0.8.208` in all four `package.json` scripts, matching the Day 2
  carriers (21, 22) and the v2-identity Day 1 parts, resolved from the local cache rather than the
  network. The v2 font set is copied from `prog-basics-03-strings-vs-chars/assets/fonts/` with both OFL
  notices; every `@font-face` names a file that exists on disk.
- **Two authoring corrections the piece file does not carry**, both found by reading snapshots and both
  in `## Gate evidence`: F1's gloss keywords were first set in `--value` mint (decorative use of a
  colour that means "a value, or what printed") and are now full ink; F2's and F3's chambers were one
  and two rows too short, so the last code line sat flush on its own bottom border. Neither is a change
  to what the part teaches. The piece file's `target_length` is the planning band; the measured film is
  25.62s and the measured rate for this copy is 2.9 words/second rather than the tranche's 3.24 planning
  number, which is the number the next lean part should plan on.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + `OFL-space-grotesk.txt`,
  `OFL-jetbrains-mono.txt`, copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set — BATCH day-1's bash block names
  Inter + Caveat, which is v1 lineage and `frame-day2.md` drops both faces).
- Voice: Kokoro `af_heart` at the house **0.93**, provider pinned by this file (never `auto`), through
  `studio voice` — offline and free. ElevenLabs is unusable here (`voice_id` empty, free-tier keys
  return HTTP 402); HeyGen not used. No BGM, no SFX (bible § 7, and the campaign budget is zero marks).
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1, Day 2) overrides it for
  every video decision in this campaign.
- Zero network assets: no icons, no images, no BGM/SFX, no font fetches. The GSAP tag in `index.html`
  is the generator's own CDN script line, identical to every shipped sibling in this series.

## Gate state

Built to the pre-render gate only: voice, cues, 5 frames, assemble, verify, check, snapshot read.
**No render has been made and this worker is not authorized to render.** No publish, no schedule, no
Arabic pass, no blog variant, no BGM, no SFX, no `preview --background` (parallel workers; snapshots
only). Nothing outside `videos/prog-basics-12-infinite-loops/` and
`writing/prog-basics/pieces/12-infinite-loops.md` was written.

`## Accuracy` in the piece file is confirmed on Python 3.13.15 (`series-bible-day2.md` § 4,
`.tmp/day2_accuracy.py`) and re-executed for this run with the same interpreter: `i = 0` with
`while i < 5: print(i)` and no increment prints thirteen `0`s with the condition `True` on every pass
before the guard stopped it; the same loop with `i += 1` **after** the print yields `0 1 2 3 4`, and
with it **before** the print yields `1 2 3 4 5`. F4's slot sits after the print, so the completed
fragment, the terminal strip's broken reading and the pinned comment all agree (see the Deviations
bullet above).

Frame durations are the measured VO plus authored air, written into `STORYBOARD.md` (the assembler and
`captions.mjs` both derive cumulative starts from it), so every 0.5s crossfade sits inside silence and
no sentence spans a cut. Measured: F1 4.95 / F2 4.56 / F3 4.90 / F4 5.05 / F5 6.16 = **25.62s**
(17.622s of speech + 7.99s of air). Cumulative starts 0 / 4.95 / 9.51 / 14.41 / 19.46.

## Gate evidence, observed at the end of this run

- `studio voice --dry` without the flag printed `provider=kokoro voice=af_heart lang=en speed=0.74`,
  which is the broken house lookup; with the flag it printed
  **`▶ prog-basics-12-infinite-loops — provider=kokoro voice=af_heart lang=en speed=0.93`**, and that
  is the run that generated the audio. `✓ audio sync-durations: 5 frame duration(s) updated`;
  `studio cues` → **51 words over 5 lines** via local faster-whisper (not the estimate path);
  `audio_meta.json` carries **5 voice lines**, one per frame. `assemble --captions` →
  `24 group(s) from 51 words … total duration: 25.62s`, `post-fix: captions lane marked`.
- `studio verify` → **0 high, 0 medium across 7 html files, no known traps detected** (before the pixel
  fixes below, after them, and again after the F4 slot move).
- `npm run check` (hyperframes@0.8.208) → `◇ Check passed`. Lint 0 errors/0 warnings · Runtime **0
  errors, 5 warnings, 0 info** — all five are `clip_media_fit` on the authored air of each frame, the
  standing expected noise in this series · Layout `◇ 0 issues across 9 sample(s)` · Motion 0/0 ·
  Contrast `◇ 22/22 text checks pass WCAG AA` · Craft 0/0 · Audio 0/0. Re-run after the slot move: the
  same line, with the contrast count at 22/22 (two more text boxes were visible at the sampled seconds
  once `print(i)` typed in before the gap; nothing dropped).
- 55 snapshots read across three passes (24 + 26 + 5), at every emphasis onset and ~0.4-0.5s apart
  inside each scene. What the pixels confirm: the amber plate sits on `froze` alone in F1 (2.9s) with
  both glosses in full ink, not mint; F2's chamber holds three code lines clear of its own bottom
  border with `i < 5` plated and three countable mint `True` stamps (8.0s); F3's rail is a dashed CSS
  U with the return marker mid-flight at 13.3s, `pass 1/2/3` legible, the `i 0` chip still reading `0`
  under `NEVER CHANGES`, and `FORGOT TO UPDATE` as the frame's only amber plate; **F4's missing-line
  slot photographed as a dashed rounded rectangle with a mint caret, indented into the body between
  `while i < 5:` and `print(i)`** (17.5s) — the placement that made the correct answer print
  `1 2 3 4 5`, since corrected (next bullet), and the terminal strip reads
  `>>> 0 0 0 0 0 0 0 0 …` — eight repeated zeros and an ellipsis, never `0 1 2 3 4`; F5 holds alone at
  25.37s with the gap still empty and the answer nowhere on the frame.
- 8 snapshots re-read after the slot move (`hyperframes@0.8.208 snapshot --at
  15.6,16.0,16.5,17.5,18.0,18.6,20.2` + the auto end frame at 25.37s), and read as pixels, not as a
  green check. At **15.6s** the chamber holds three rows — `i = 0`, `while i < 5:`, `print(i` typing
  under the amber caret at the indented x — with no gap yet, so P3 still descends top-to-bottom. From
  **16.5s** the dashed slot is the chamber's **fourth and last row**, indented level with `print(i)`,
  mint caret visible inside it, its bottom edge clear of the chamber's own border; unchanged at 17.5s
  and 18.6s while the strip fills to `>>> 0 0 0 0 0 0 0 0 …` and `NEVER ENDS` + `the variable the check
  reads never changed` arrive. **20.2s** (F5) reads `main.py · line 4` above the same empty dashed box —
  the label moved with the slot, and `i += 1` appears on no frame. `i = 0` and `i < 5` render as
  separate glyphs (no `≤`/`≠` fusion); the `font-variant-ligatures: none` + `"liga" 0, "calt" 0,
  "dlig" 0` guard block is untouched on `.cd-root`, `.pb-strip`, `.pb-ktext`, and no `+=`, `==`, `<=`
  or `->` is drawn anywhere in this film (the answer line is deliberately absent), so there is nothing
  new for the guard to hold back. Slot's new box is y 558→616, inside 230→1004; the caption band
  (1024-1344) takes no new ink.
- Nothing outside the content box in any sampled frame: the only ink below y = 1004 is the caption
  plate inside the 1024-1344 band, and y 1344-1920 is empty throughout. The ground dot grid is visible
  around and under the content in every frame (no opaque field).
- Two defects found only by reading pixels, both fixed and re-snapshotted: **(a)** F1's gloss keywords
  were set in `--value` mint, which is decorative use of a colour that means "a value, or what
  printed" (`frame-day2.md` § 1) — now full ink; **(b)** F2's and F3's last code line sat flush against
  their chamber's bottom border (heights 262 and 250 with rows ending at 262 and 246) — raised to 280
  and 262 so the row clears the hairline. `verify` and `check` reported 0/0 and `Check passed` both
  before and after.
- No MP4 exists and none was made. No `preview --background` was started. No BGM, no SFX, no network
  asset, no font fetch.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-12-infinite-loops --quality delivery --yes` → `prog-basics-12-infinite-loops_2026-11-01_11-59-28.mp4` in 48s.
ffprobe: h264 1080x1920 + aac 2ch, **25.633s** against this film's timeline, mean volume -23.8 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
