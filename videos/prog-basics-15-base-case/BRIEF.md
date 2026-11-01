---
workflow: hyperframes (general-video / code-card build, G6 clone)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 15 of 22
tranche: day-2 (BASICS II)
title: prog-basics-15-base-case
message: "the base case is the card where the descent stops; leave it out and the call stack keeps growing until the interpreter raises"
hook_source: user (pre-decided; not rewritten; verbatim)
cta_mechanic: Quiz ("What's the base case for summing a list? Comment it.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 31.7s                     # MEASURED (target ~29-34s, ceiling 54s); 16.64s speech + 15.06s authored air
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2.1 (frame.md = writing/prog-basics/frame-day2.md; deliberately NOT the prior projects' look)
mode_visual: code card (G1 hook, no G8 chrome anywhere)
carrier: false                     # clones G6 from pb-14, which proved it
grammar: G1 G6 G6 G3 G5
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"                # documentation only; studio voice does not read this
captions: en
music: none
sfx: none
frames: 5
words: 53
pin: hyperframes@0.8.208
---

## Intent

English master of part 15 of `prog-basics` (tranche Day 2 / BASICS II): the base case in recursion.
Portrait 1080x1920, **31.7s measured** (target ~29-34s, ceiling 54s). Faceless code card: no URL, no
footage, no presenter chrome. Copy source of record: `writing/prog-basics/pieces/15-base-case.md`.
Shape: bible § 3 (F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2.1 § 4 — **G1**
hook, **G6** call stack twice (F2 the descent that stops, F3 the column that runs out), **G3** code
chamber, **G5** CTA.

This part is a **clone, not a carrier**: G6 was proven by `videos/prob-basics-14-what-is-recursion/`
`compositions/frames/03-stack.html`, which is the structural source for the card, the name tab, the
pending-work slot, the drop-in and the dim convention. pb-14 ran **G8 direct address**; this part runs
**code card**, so F1/F4/F5 clone `videos/prog-basics-21-arrays/` `01-hook.html`, `04-code.html`,
`05-cta.html` instead (the Day 2 code-card shell: `pb-kicker`, `pb-kbadge`/outline chip, `cd-root`
chamber, `pb-strip`, `f5-plate`). No frame here was authored from scratch.

**pb-14 left this part a specific instruction** (its BRIEF "What the other eight Day 2 workers must
know", G6 block): its four cards run 262 → 634 at a 96px step, and *"part 15 with seven cards:
262 + 6×96 = 838 top, 922 bottom — past the 932 corner-bracket line … Either drop the step to 78px
(262 + 6×78 = 730 → 814 bottom) or drop the lower third on that frame. Do the sum."* The sum, for
eight cards with no lower third (this part is a code card) and a terminal strip that must also fit:
see deviation 1.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. The hook and the
  CTA mechanic are the user's words and are verbatim; no re-cut applies to this part's explain lines
  (`CORRECTIONS-day2.md` § A lists 15 among the parts whose copy already passed), so each of the
  three explain sentences is placed on its own frame, one idea per frame. `base case` is glossed by
  F2's own clause ("where recursion stops") and is the amber plate on the card that stops saying
  `waits`; `call stack` is never defined in words — F3 draws the column and lets it run out;
  `stack overflow` (the interview word the hook uses) is paired on F1 with `RecursionError` (the word
  the learner's own interpreter prints) in a muted mono gloss, and the pinned comment says other
  languages name it differently. `f(4)` → "f of four", never bracketed on the ear. Every number and
  printed fragment on screen is executed output from `series-bible-day2.md` § 4:
  `RecursionError: maximum recursion depth exceeded` quoted exactly, `sys.getrecursionlimit()` →
  `1000`. **Contrast-reveal is banned**: nothing on screen or in the captions says "it's not X". No
  em-dashes on screen, no "simply/just/easy", no "don't worry", no notation. The lesson to land: a
  recursive function needs a case that answers without calling itself, and a step that heads toward
  it — without the first one, the stack grows until Python raises.
- **Motion.** Two meaning-carriers, both G6, plus the code. F2 = **the descent that stops**: four
  cards drop in one per spoken clause at pb-14's verbatim geometry (insets 72/136/200/264, widths
  936/848/760/672, tops 262/358/454/550), each carrying its call in the name tab and `waits` in
  `--muted` mono on the right edge; the fourth's pending slot flips to a solid `--say` `BASE` plate on
  the word "stops" (P1 say-sweep), and that is the frame's only amber. F3 = **the column running
  out**: eight cards descend on P2 drop-in keyed to the measured word onsets, the last four counting
  past zero into negatives (`f(0) f(-1) f(-2) f(-3)`), no BASE plate anywhere, and card 8 arrives with
  a 3px `--err` border; the terminal strip below the column carries the raised message in `--err` with
  a muted mono `DEPTH 1000` tag. F4 = the same truth as written code (P3 type-on under a caret, a
  dashed empty slot where the base case would go, `f(n - 1)` swept amber on "step… toward it"), then
  the coral strip again. Every emphasis is proved by pixel deltas between neighbouring snapshots, not
  by intent; F3 is snapshot-read at 0.4s intervals because eight drop-ins have never been on screen
  in this series.

## Deviations from the piece file (all recorded, none silent)

The piece file is the source of record for narration, on-screen copy and treatment. These are the
departures, each forced by `frame-day2.md` v2.1 geometry, pb-14's carrier findings, a
`studio/known-traps.md` rule, or a defect found by reading this project's own snapshots.

**Copy / narration: none.** Hook, CTA mechanic, every term and every printed fragment are the piece
file's and the user's. No re-cut is applied to this part (bible-day2 § 4 and `CORRECTIONS-day2.md` § A
list 15 as already passing).

1. **G6 at eight cards: the step is 78px and the card height drops 84 → 72px.** pb-14's 96px step is
   arithmetic for four cards; eight at 96 put card 8 at 934 → 1018, past the framework's y 1004
   content limit. pb-14's recorded alternative is the 78px step. At 78px a 84px card would *overlap*
   its neighbour by 6px, so the card is 72px tall (a 6px gap, against pb-14's 12px) and the valband
   shrinks 43 → 28px. Every other G6 number is pb-14's verbatim: `--panel` `#1F242C`, 3px
   `rgba(255,255,255,0.16)`, radius 22, G2 shadow, the tab drawn as the card's own 38px `--panel-2`
   top strip with a 3px `--line` bottom rule, call name left in mono 700 2.6cqw (28px floor), pending
   work right in mono 400 2.6cqw `--muted`, insets +64 per card, widths authored per card (never a
   width tween). Column: tops **262/340/418/496/574/652/730/808**, bottoms → **880**; the error strip
   runs **898 → 994** (corrected in the resume pass: that is what the CSS says, and the lowest content
   row measured in the 14.6s / 15.4s / 17.8s PNGs is **y 993**), so the frame ends **10px** inside the
   1004 rule. **F2 keeps pb-14's four-card geometry untouched** (262 → 634 at 96px, h 84) — only F3
   needed the tighter step.
2. **The error strip's message is 2.8cqw (30.2px), not § 2's 2.9cqw code size.** The raised string is
   48 characters; JetBrains Mono advances 0.6em, so at 2.9cqw the line is 902px against a 892px
   interior — it would break the 936px content column. 2.8cqw measures 871px and stays above the 28px
   floor. The `DEPTH 1000` tag therefore lives on its own second row (muted mono 2.1cqw,
   `data-layout-ignore`) rather than beside the message.
3. **No `>>>` prompt on the coral strips.** The prompt costs 70px the message needs. The strip is
   identified as terminal output by its `--panel-2` shelf and the `--err` ink, per pb-21's `pb-strip`
   idiom; the prompt stays only where there is room.
4. **`BEGINNER` is a muted outline chip on F1/F2/F3, not pb-21's solid amber `pb-kbadge`.** frame-day2
   § 14: "Never two amber plates at once — amber is 'the word the voice is on', singular." F1's amber
   is `stack overflow` and F3's arrival is the coral card, so the badge steps aside. pb-14's
   deviation 12 made the same call for the same reason and is the authority here. F4/F5 keep the
   amber badge where the frame's amber arrival is elsewhere… **no**: F4 and F5 also carry amber plates
   (`f(n - 1)` and `COMMENT IT`), so the chip is muted outline in all five frames. One contract, one
   shape.
5. **F1's hook type is 7.4cqw (80px), not § 2's 9-11.5cqw hook ramp.** The first group,
   `Forget this one thing`, is 21 characters; at 9cqw it measures ~1090px against the 936px column.
   pb-14's deviation 2 established the same finding (the ramp holds only for groups of ≤14 characters)
   and pb-21 already shipped at 8.4cqw for 19. 7.4cqw keeps every group inside the column and above
   the 28px floor.
6. **The hook's `stack overflow` is glossed, not corrected.** The user's word stays exactly as written
   and is the amber plate; Python's word appears beside it in a muted mono gloss (`python names it
   RecursionError`), and the pinned comment carries the "other languages name it differently" line.
   The narration is untouched.
7. **F2's pending-work slot reads `waits`, not an operation.** pb-14's cards wait on `× 4`, `× 3`…
   because `fact` multiplies on the way back up. This part's function is `return f(n - 1)`, which
   waits on *nothing* — which is exactly why it never unwinds. `waits` in `--muted` mono keeps the
   slot's geometry and role and invents no output. The valbands stay empty on every card in this
   film: nothing here returns, so there is no value to print (mint would be a lie).
8. **F4's chamber has a dashed empty slot on line 3.** The grammar gives "max 4 lines plus one terminal
   strip"; the lines are `def f(n):`, `    return f(n - 1)`, `f(4)` — three. The fourth slot is drawn
   as G2's *empty* convention (3px dashed `--line`, no value) labelled `base case goes here` in muted
   mono with `data-layout-ignore`, because the voice says "needs a base case" and the frame should
   show where it belongs. Its border flashes `--say` for one beat and returns: a colour flash, not a
   second filled plate (pb-21's finding), so F4 holds exactly one amber plate.
9. **F3 and F4 both carry the raised message.** The request specifies the terminal strip in both
   frames — F3 is the crash as a diagram, F4 is the crash as written code. F4's tag row adds
   `· NO BASE CASE` (muted mono, a diagnosis of the line above it, not an output).
10. **F5's hint is two dimmed G6 cards, `sum(nums)` and `sum([])` with a `?`, not the answer.** The
    answer (`0` on the empty list) is only in the pinned comment. Per § 14 the dim is on the
    container's background and border (`rgba(31,36,44,0.42)` / `rgba(255,255,255,0.08)`), never
    `opacity: 0.42` on the row, which would put the mono text at 1.3:1. The text keeps full ink.
11. **AUTHORING-RATE DEVIATION — the air is ~2.9× the house ~1.0s, and it is authored beats, not
    padding.** This part's narration is 53 words, the leanest in the tranche (pb-21 shipped 60, pb-22
    91). Measured speech is **16.64s** (3.19 w/s including each line's internal pauses), so the house
    air (1.0s/frame, 2.0s on F5) would put the film at **~22.6s, well under the 30s floor**. Per
    frame-day2 § 12 the permitted levers are, in order: grow air, then re-cut the frame shape, and
    **never add words** (the user's standing choice, bible-day2 § 0.2). Air was grown to
    **F1 +2.39 / F2 +2.71 / F3 +3.59 / F4 +2.95 / F5 +3.42 = 15.06s** and every extra second is spoken
    to by a beat: F1's settle rule and the `RecursionError` gloss after the hook ends; F2's four
    drop-ins plus the BASE sweep plus a P7 pulse-set across the four waits; F3's eight drop-ins, the
    coral arrival and **3.2s of hold on a 48-character error line** (an emphasis under ~0.4s is a
    retime finding, not noise); F4's four type-on passes, the dashed-slot flash and the strip; F5's
    plate drop and the loop hold under the platform's chrome. The film measures **31.7s**, above the
    floor and inside the tranche's 29-34s band. `check` reports Craft 0 errors / 0 warnings at
    43/43 contrast on this shape, so no `line_unread` was produced by the pacing.
12. **`BATCH-day2.md`'s grammar row for pb-15 reads `G1 G6 G3 G5` (four tags, five frames).** The
    request's `G1 G6 G6 G3 G5` stands — F2 and F3 are both G6 (descent, then run-out), which is what
    frame-day2 § 4's `overflow: part 15 only` clause describes. Reported, not silently fixed: the
    manifest is read-only to this run.
13. **Ground and badge loops are derived from each frame's `D`**, per pb-14's deviation 19: grid and
    glows run `duration = D/4, repeat: 3` so four segments cover the frame exactly and land back on
    the from-value, and no glow ends mid-breath at a cut.
14. **F2 and F3 carry their kicker ABOVE the content line (y 186-226), not in the 230 band.** pb-14's
    G6 column starts at y 262, and the series' kicker band is `left 72 / top 230 / h 44` — a card at
    262 under a band ending at 274 is a 12px collision on the widest object in the frame. Chrome is
    allowed above 230 (§ 5: "nothing critical above 230"; pb-14 put its REC strip at 112 and its
    brackets at 48), so the kicker moved up rather than the column moving down. **The column top is
    pb-14's 262, unchanged.**
15. **FOUND BY SNAPSHOT, NOT BY A GATE — the cover was blank at t=0.** The first read of
    `at-0s.png` showed nothing but the ground and the caption: F1's first hook group and its chrome
    were entering on a `fromTo` at 0.06/0.10, so the exact frame every platform uses as the thumbnail
    held no type. `verify` and `check` were both green on it (0/0, Check passed, Craft 0/0 — the
    craft sampler does not interrogate t=0 here). Fixed by putting `.f1-l1`, `#c1-ktext` and
    `#c1-badge` at rest in CSS with **no entrance tween at all**, and letting groups 2 and 3 wipe in
    on their own words — pb-14's deviation 11 finding, re-discovered here because the clone copied
    pb-21's F1, which fades its own first line in. Re-snapshotted at 0s: the cover now reads
    `Forget this one thing` with the series line and the `BEGINNER` chip.
16. **Mint in this film is the P2 arrival flash only.** pb-14's `drop()` flashes the landing card's
    border `rgba(90,214,160,0.55)` for 0.2s and settles it back to `--line` — that is the shipped
    drop-in primitive and it was cloned verbatim, so mint appears for a fifth of a second on a border
    in F2 and F3. What appears **nowhere** is a mint value or mint printed output: no card in this
    film ever returns, so every valband stays empty and `--value` never carries text. (The packet's
    colour law is about what a colour *means*; a returning value would have been invented output.)
17. **FOUND BY SNAPSHOT, NOT BY A GATE — G6 cards must be dealt from under the pile, not over it.**
    pb-14's `drop()` travels 210px while its opacity ramps, and at a 78px step a 72px card clears its
    neighbour by only 6px, so every in-flight card ghosted its tab straight across the `waits` of the
    card above it: the 11.9s, 12.7s and 13.5s PNGs show `f(3)`/`f(2)` and `f(-2)`/`f(0)` printed on top
    of each other, semi-transparent, mid-descent. `verify` 0/0 and `check` passed on all of it (the
    layout sampler only filed two info findings for it). Fixed with a descending `z-index` on the cards
    (F3 k1→k8 = 8→1, F2 k1→k4 = 4→1), so a new card emerges from **under** the one above and the stack
    reads as growing deeper. Resting pixels are unchanged — nothing overlaps at rest. **This is a
    finding for pb-14's geometry too** (its 96px step / 84px card has 12px of clearance, so the ghost
    is smaller but the same class); pb-14 is read-only to this run, so it is reported, not patched.
18. **F3's error strip enters from above, not from below.** The house strip entrance is `y: 40 → 0`,
    which is safe for F4 (rests 690 → 786) but not for F3: the strip rests at 898 → 994, only 10px
    inside the content rule, so mid-flight its bottom border measured **y 1007** in the 14.2s PNG —
    below 1004, into the 1004-1024 gap. Now `y: -18 → 0`, which also reads as the crash landing on top
    of the column. Measured lowest content row across the whole of F3 after the change: **993**.
19. **F4's coral line was under the craft dwell floor, so the frame was retimed.** The first `check`
    after the resume filed `Craft ⚠ line_unread: "RecursionError: maximum recursion depth exceeded"
    (5 words) is on screen 1.40 s, under its 1.50 s floor` at `#f4-errmsg` — the builder's pass had
    reported Craft 0/0 on the same bytes, so the sampler's dwell measure is not stable across runs.
    Fix: the say-plate now retires at 4.20/4.28 (was 4.38/4.44), the strip arrives at 4.50 (was 4.76),
    the tag at 4.86 (was 5.12), and the strip's 5px float at 5.60 is **removed** — the sampler counts a
    move as a change, and F3 keeps its float only because that strip holds 3.4s. The line is now static
    and fully opaque from 4.86 to the exit push at 6.98 (2.12s), and the plate is still home before the
    coral arrives. Craft back to 0/0, Contrast 43/43.
20. **F4 carries one extra line of chrome: `the step must reach the base case`.** The part's real
    lesson has two halves and the frames only showed one: F2/F3 prove the missing base case, but a base
    case on `n == 0` called with `n = -1` also never fires, and nothing on screen said the step has to
    *arrive* at the case. F3 proves that by counting past zero into the negatives; F4 now says it in
    eight muted-mono words at y 810 (2.1cqw, `data-layout-ignore`, so under the 28px floor on purpose
    and excluded from the craft/contrast sampling), arriving at 5.40 in the air after the VO. The
    pinned comment carries it in full. **No narration word was added** — the film still measures 31.7s.
21. **Audio rate, proved rather than asserted.** `studio voice … --dry` without the flag prints
    `speed=0.74` (the house lookup miss, `WAVE2-PACKET.md` § 1), so a dry run is not evidence about
    wavs that already exist. The evidence here is `audio_request.json` → `"speed": "0.93"`,
    `audio_engine_meta.json` → `provider=kokoro voice_id=af_heart`, and the measured rate: 53 words over
    16.64s of speech = **3.19 w/s**, per line 2.93-3.47, which sits inside the 0.93 siblings (pb-14
    2.92, pb-22 3.23, pb-13 3.04) and 25% above anything a 0.74 pass would produce. **No audio was
    regenerated and no frame was retimed**, because none of it had moved.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). Every `@font-face` in every
  frame names one of those four files and nothing else. Zero font fetches.
- Voice: Kokoro `af_heart` at **0.93** through `studio voice`, provider pinned by this file (never
  `auto`). **`--speed 0.93` is load-bearing** — the house lookup misses (`.agents/design.md` nests
  `voices:` under `voice:`, so the flattened key is `voice.voices.en`) and an unflagged dry run prints
  `speed=0.74`; the dry run was read before any wav existed. ElevenLabs is unusable here (`voice_id`
  empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`
  before `studio assemble --captions`. Band top 1024, height 320, Space Grotesk 700 at 46px, spoken
  word on amber, plate `rgba(21,24,29,0.72)` with a 2px `--line` border. The lane is marked by
  `studio assemble`, never by hand.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1) overrides it for every
  video decision in this campaign.
- Zero network assets: no icons, no images, no BGM, no SFX, no font fetches, no avatar, no face. The
  GSAP tag in `index.html` is the generator's own CDN script line, identical to every shipped sibling.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized by this run.** No publish, no schedule, no Arabic
pass, no BGM, no SFX, no `preview --background` (parallel workers; snapshots only).

Observed on the **resume pass** (2026-10-28, after deviations 17-21), each number from the command that
produced it:

- `node studio/tools/studio.mjs voice videos/prog-basics-15-base-case --dry` →
  `provider=kokoro voice=af_heart lang=en `**`speed=0.74`**. That is the house lookup miss, not this
  film's rate: the wavs on disk were made with `--speed 0.93`, which `audio_request.json` records as
  `"speed": "0.93"`, and the measured speech is 53 words / 16.64s = 3.19 w/s (per line 2.93-3.47), in
  family with pb-14 (2.92) and pb-22 (3.23). **Nothing was regenerated; no frame needed retiming.**
  See deviation 21.
- `audio_meta.json` / `audio_engine_meta.json` → **5 voice lines** for 5 frames (no `SCRIPT.md` heading
  silently merged), durations 3.008 / 2.389 / 4.011 / 4.352 / 2.88s, 53 word cues, `kokoro`/`af_heart`.
- `node studio/tools/studio.mjs assemble videos/prog-basics-15-base-case --captions` →
  `✓ captions build: 24 group(s) from 53 words`, `total duration: 31.7s (expected ~31.7s, +0s)`,
  `✓ post-fix: captions lane marked`.
- `node studio/tools/studio.mjs verify videos/prog-basics-15-base-case` →
  `✓ prog-basics-15-base-case — 0 high, 0 medium across 7 html files / no known traps detected`
  (before and after the fixes; neither the ghosted descent nor the 1007px strip bottom was in its scope).
- `npm run check` (project pin `hyperframes@0.8.208`) → `◇ Check passed`;
  lint **0 errors / 0 warnings / 0 info** (7 files) · runtime **0/5/0** (five `clip_media_fit`, which
  *is* the authored air) · layout **0/0/4 info** (`container_overflow #f1-content` at 5.283s = the exit
  push; `content_overlap #f3-k3` at 12.22s and two `text_occluded #f3-k4` at 12.328s = the in-flight
  card now passing *under* the pile, which is deviation 17 working) · motion **0/0** ·
  **contrast 43/43 WCAG AA** · craft **0 errors / 0 warnings** · audio **0/0**. The intermediate run
  before deviation 19 filed one `Craft line_unread` on `#f4-errmsg` (1.40s against a 1.50s floor); the
  retime cleared it.
- `npx --yes hyperframes@0.8.208 snapshot --at …` (the pin, not an unpinned 0.8.212) → 60 stills read as
  pixels: every emphasis moment plus 0.4s steps through F2 (5.4-10.2) and F3 (10.6-17.8), and
  `--zoom` crops of `#f4-l3` (the `return` line), `#f3-strip` and `#f4-gloss`. Measured from the PNGs
  with ffmpeg + numpy: lowest content row below y 1004 across F3/F4/F5 = **993**; max luma in the
  1004-1024 gap **≤ 58** and in 1344-1920 **≤ 36**, i.e. the shared house ground only (`.gnd-shelf` at
  y 1010 and the dot grid, byte-identical to pb-14 and pb-21 — inherited, not this part's), no ink.
  Ligature guard proved in the `#f4-l3` crop: `return f(n - 1)` renders as five separate glyphs, the
  `-` a plain hyphen-minus, no fused `≤`/`→` anywhere (this chamber carries no comparison operator at
  all, which is the point of the part).

**Colour law, restated so a later edit does not undo it:** coral `--err` `#FF6B5A` appears on exactly
three objects in this film — card 8's 3px border in F3, and the raised message in F3's and F4's
terminal strips — because Python 3.13.15 actually raised it here (`series-bible-day2.md` § 4). It is
not used for drama, not on the badge, not on the `?` hint in F5. **No mint text anywhere** (deviation
16): the only `--value` ink in the film is pb-14's 0.2s drop-in border flash, and no card ever shows
a returned value, because nothing in this part returns.

`## Accuracy` in the piece file is confirmed; re-executed on Python 3.13.15 in this run:
`def f(n): return f(n-1)` → `RecursionError: maximum recursion depth exceeded` (exact string, 48
characters, quoted on screen), `sys.getrecursionlimit()` → `1000`, counting downward from `f(4)`
through the negatives hits the limit the same way, and the CTA's answer: `sum([])` → `0` while a
recursive sum with base `0` over `[4,5,6]` → `15`.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-15-base-case --quality delivery --yes` → `prog-basics-15-base-case_2026-11-01_12-03-05.mp4` in 134s.
ffprobe: h264 1080x1920 + aac 2ch, **31.700s** against this film's timeline, mean volume -25.0 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
