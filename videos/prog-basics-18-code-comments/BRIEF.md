---
workflow: hyperframes (general-video / companion-shape build, direct-address mode)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 18 of 22
tranche: day-2 (BASICS II)
title: prog-basics-18-code-comments
message: "a comment pays for its place by saying why; the code already says what — so when it only echoes the line, rename the line"
hook_source: user (pre-decided; not rewritten; verbatim)
cta_mechanic: Debate ("Agree or disagree? Defend your side below.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 33.6s                     # MEASURED (target ~29-34s, ceiling 54s); 25.96s speech + 7.64s authored air
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2.1 (frame.md = writing/prog-basics/frame-day2.md; deliberately NOT the prior projects' look)
mode_visual: direct address (G8) — no face, no avatar, no silhouette, no emoji
carrier: false                     # clones pb-14's G8 chrome and pb-10's labelled G4 split
grammar: G8 G8 G8 G4-cutaway G5
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"                # documentation only — the tool needs the --speed flag
captions: en
music: none
sfx: none
frames: 5
words: 66
pin: hyperframes@0.8.208
---

## Intent

English master of part 18 of `prog-basics` (tranche Day 2 / BASICS II): comments and why they matter.
Portrait 1080x1920, target ~29-34s (ceiling 54s). Faceless: no URL, no footage, no presenter. This part
is a **cloner, not a carrier** — the direct-address grammar was proved by pb-14 and the labelled
two-chamber split by pb-10, so nothing here re-derives the look. What is new is the combination: **G8
wearing a G4 cutaway** instead of the G3 one pb-14 used, and a **Debate CTA that visibly refuses to
choose a side**.

Copy source of record: `writing/prog-basics/pieces/18-code-comments.md`. Shape: bible § 3 (F1 hook,
F2+F3 concept, F4 example, F5 CTA). Visual authority: `frame.md` (= `frame-day2.md` v2.1) § 4 — G8
direct address on F1, F2, F3, F5; the **G4 split** inside F4 as a cutaway; **G5** CTA plate inside F5.
Motion: § 7 — P1 say-sweep, P2 drop-in, P3 type-on, P8 bar-run, P10 strike-out.

Clone sources (read-only, structure only):
`videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html` for the `.g8-*` chrome
block — copied byte-for-byte, and its `04-cutaway.html` for the scrim + `.cd-*` chamber atoms;
`videos/prog-basics-10-switch/compositions/frames/04-two-languages.html` for the two labelled
titlebars at 456px (x 72 / x 552) and the answer-pill pattern in its `05-cta.html`;
`videos/prog-basics-05-params-vs-args/` for the v2 self-contained say-plate (plate + text inside one
token). The ground, chip, strip, plate and hook-type atoms are copied from those shipped files.

CLI pin `hyperframes@0.8.208` in all four `package.json` scripts, matched to the v2-identity tranche
(04/05/06/08/09/10/11) so the series re-renders identically; lowered from the 0.8.211 the `init`
scaffold wrote (BATCH-day2 recipe).

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, nothing that needs re-hearing — part of the audience
  reads English as a second language. The hook and the CTA mechanic are the user's words and are
  verbatim; the two explain re-cuts are the approved ones in `CORRECTIONS-day2.md` § A and nothing was
  re-cut a second time. `comment` is never defined in words — the frame shows one in mono starting with
  `#` in the same breath the word is said. `why` vs an echoing comment is made physical by the P10
  strike crossing `# add 1 to i` ("not this", without saying not this) while the good comment sits
  beside it unstruck. `rename things` is a chip relabelling itself: `d2` → `days_until_delivery`, two
  chips, no list. `decisions, warnings, and tricky reasons` is the part's **one allowed three-item
  list**, so nothing else in this film enumerates — F5's two chips are two, not three. `tricky reason`
  is glossed by the comment itself: `the payment API drops requests under load` is something nobody can
  read off `charge(cart)`. Spoken code: `3` → "three", `#` never said, and `i += 1` / `while i < 5:` /
  `print(i)` / `charge(cart)` / `d2` / `days_until_delivery` / `0 1 2 3 4` are never spoken at all.
  Every number on screen is executed output from bible § 4 (row 12: with `i += 1` → `0 1 2 3 4`), and
  the right chamber carries **no** strip because nothing on that side executes. No "it's not X, it's Y"
  anywhere including the post copy (that shape belongs to part 05's hook), no em-dashes on screen, no
  "simply/just/easy/quick tip", no "don't worry". The lesson to land: a comment that restates the line
  is a bug in the naming, and the fix is the name.
- **Motion.** Every frame is in motion under the voice, and every primitive is doing the explaining.
  F1 = the hook arriving group by group from the left, with one amber `say-sweep` on `comments.` (and no
  entrance tween on the first line, because F1 is the cover). F2 = **the verdict**: a 3px `--say` rule
  draws itself left→right across `# add 1 to i` (P10) on "The code already says what it does" and holds.
  F3 = **the fix**: a muted `d2` chip drops in (P2), a `--line` connector draws itself (scaleX on a CSS
  bar, never SVG in a scaled container), and `days_until_delivery` types itself out character by
  character through a `{t,text}` step array on a time proxy. F4 = **the proof, side by side**: scrim to
  0.18, both chambers drop, P3 type-on under a caret on five code lines, one P1 sweep on
  `# requests under load`, the useless comment fading in at the tail of its own line exactly on the
  spoken "Add one to i", and the mint strip after it. F5 = **the debate staying open**: the
  `DEFEND YOUR SIDE` plate drops in on its verb (P2), and a `--line` ring travels AGREE → DISAGREE →
  home, resting in the gap and framing neither. Every emphasis is proved by reading the snapshot PNGs,
  not by intent, and 0.4s-apart samples inside each scene prove measurable change.

## Deviations from the piece file and from the grammar (all recorded, none silent)

Copy: **none.** Hook, CTA mechanic, both approved re-cuts, every term and every fragment are the piece
file's. What follows are shape and geometry departures, each forced by `frame-day2.md` v2.1 geometry,
a `studio/known-traps.md` rule, or the packet.

1. **`--speed 0.93` is passed on every `studio voice` run.** Not a deviation any more — frame-day2 § 8
   records that the house lookup misses (`design.md` nests `voices:` under `voice:`, so the key is
   `voice.voices.en`) and an unflagged run prints `speed=0.74`. Dry run first, always.
2. **F4 is a G4 split, not the § 4 G8/F4 "700px G3 chamber".** § 4 gives the direct-address cutaway one
   chamber at 700px. This part's thesis is a comparison, so F4 drops pb-10's split: two 456px chambers
   at x 72 and x 552 (spanning 72→1008) under the same 0.18 scrim. At 700px total each side would be
   350px, giving ~19 characters at the 28px floor, and `    i += 1  # add 1 to i` is 24 — the same
   arithmetic that pushed pb-14's own chamber from 700 to 880. Chrome stays visible on all four sides.
3. **The right chamber is 4 lines, the left is 3 lines + a terminal strip** (4 rows either side, so the
   chambers stay row-aligned). § 4's G4 says ≤3 lines per side; bible § 4 permits the across layout at
   ≤3 **with a `## Customizations` record**, and pb-10 shipped 4 per side on that allowance. Recorded in
   the piece file's `## Customizations`.
4. **The right chamber carries no terminal strip.** bible § 4 row 18 is explicit: "nothing to execute —
   the two comments are prose". A strip there would be invented output, which § 9 bans. The left strip
   `>>> 0 1 2 3 4` is real (row 12, Python 3.13.15) and re-checked for this part.
5. **The bad comment annotates part 12's real `i += 1`, and pb-12's project was not on disk when this
   file was authored.** `videos/prog-basics-12-infinite-loops/` is building concurrently, so the four
   lines and the executed fact came from `series-bible-day2.md` § 4 row 12, not from 12's chamber file.
   Both fragments were re-executed locally for this part (Python 3.13.15): the left loop prints
   `0 1 2 3 4`; the right comment block parses and runs with exit 0.
6. **F4's narration reads the user's example aloud.** "Save comments for decisions, warnings, and tricky
   reasons." ships exactly as the user wrote it; the two sentences after it are the part's own example
   rendered as speech (`# retry 3 times: …` → "retry three times: …", `# add 1 to i` → "add one to i"),
   the same way pb-14 voices its example. No explain sentence was invented, shortened or re-cut.
7. **F1 wraps the hook to five groups of ≤14 characters at 9cqw; F2/F3 sit at 6cqw; F5 sits at 7.5cqw.**
   § 4's "9-11cqw, ≤7 words per group" holds only under ~14 characters (pb-14 deviation 2, and § 14
   restates it as a tranche finding). `agree or disagree?` is 18 characters, so F5 takes 7.5cqw rather
   than shrinking to a fourth row that would collide with the lower third.
8. **One amber per frame, always.** F2's amber is the P10 strike rule, so `why` gets a colour-free scale
   settle instead of a plate; F3's is the `rename` sweep, so the relabelling chip arrives colour-free;
   F5's is the `DEFEND YOUR SIDE` plate, so **the travelling ring is `--line`, not § 4 G7's `--say`** —
   two amber marks on one frame is a § 1 / § 14 violation, and a *selected* chip would have been a third
   and would also have ended the debate. No plate anywhere lives inside something that dims.
9. **F5's display type is three groups, not four.** `defend your side below.` split as
   `defend your side` / `below.` pushed the plate and the two chips into the lower third's band
   (y 800-896, chrome, position copied verbatim from pb-14). Three groups at 7.5cqw keeps plate, chips
   and ring above 800 with the chrome untouched.
10. **G8 chrome is pb-14's, verbatim, and nothing in it was retuned.** Brackets 72×72 3px
    `--line-faint` at 48/48 · 960/48 · 48/932 · 960/932 (the bottom pair framing the content box
    932→1004), `REC` strip at 72/112 with a 16px `--muted` dot on a 1s yoyo blink, timecode at 176/112
    reading `T0 + tl.time()`, `BEGINNER` outline chip at 800/110, lower third `--panel-2` 560×96 at
    72/800. Chrome never fades; F1's first line has no entrance tween. Zero coral, including the dot.
11. **Runtime is expected under 30s and will be reported, not padded.** 66 words at the measured
    3.24 w/s is ~20.4s of speech; the only permitted lever pulled is F5's pad (frame-day2 § 12), with
    extra F4 air because a two-chamber split the viewer must read is shape, not filler. No words added.
12. **Ground and REC-dot loops are derived from `D`, not hand-picked** (pb-14 deviation 19): grid/glow
    loops use `duration = D/4, repeat: 3` so four segments cover the frame and land back on the
    from-value; the REC dot uses an odd repeat whose `(r+1) × 0.5` is ≤ D, so the dot sits at opacity 1
    on the last frame of every scene and the chrome cannot pop across a cut.
13. **The lower third carries `Why comments matter`, not the full part title.** pb-14's bar is 560×96 at
    72/800 with 22px side padding, so its text lane is 516px and holds ~26 characters at 3.4cqw.
    `Comments and why they matter` is 28 and measured to **x 652 — 20px past the bar's right edge at
    632**, i.e. the title ran off its own panel. `verify` (0/0) and `check` (Layout 0 issues, 9 samples)
    were both clean; only the pixels showed it. The chrome *geometry* is untouched and still byte-
    identical to pb-14's; only the strap text is shortened. **Finding for part 17: the lower third's
    title lane caps at ~26 characters at 3.4cqw — measure your part title, do not assume it fits.**
14. **F4's amber is a text-colour tween, not a P1 plate.** With the plate shape (amber rule scaling in
    behind mono glyphs inside a 52px code line) `check` measured `#f4-ht` at **1.09:1** — light code text
    on a partly drawn amber plate. `requests under load` therefore tweens `--muted → --say → --muted`
    across the spoken clause instead: same lesson ("this is the word the voice is on"), 11.3:1 on
    `--panel`, and still exactly one amber mark in the frame. F1 and F3 keep the plate, but their ink
    flip is now a `set` placed strictly *after* the plate finishes (F1 plate 1.00→1.28, set 1.30; F3
    2.44→2.70, set 2.72), so light-on-amber is never a state. **A say-plate behind `--code` text is a
    contrast trap; a say-plate behind display text is not.**
15. **F4's terminal strip lands at local 8.20, before the useless comment, not after it.**
    `check → craft.line_unread` measured `0 1 2 3 4` on screen 1.30s against its 2.00s floor (5 words).
    Moving the arrival earlier buys the hold without lengthening the frame or shrinking any other
    frame's air; the strip's own scale pulse was dropped so nothing counts as a "change" mid-hold.
16. **F5's ring fades out in the gap instead of resting there visibly.** At 33.0s a 240×112 `--line`
    outline parked between the two chips read as a **third, blank pill** — an empty button, not an
    undecided marker. It now fades up over `AGREE`, crosses to `DISAGREE`, and fades back out at rest,
    invisible at both t=0 and t=D (so the loop seam is clean). Neither chip is ever selected: no border
    change, no amber, no ring at the loop point.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). Every `@font-face` in every
  frame names one of those four files and nothing else (known-traps § 6).
- Voice: Kokoro `af_heart` at **0.93**, generated through `studio voice` — offline, free, provider
  pinned by this file, never `auto`. The load-bearing command is
  `node studio/tools/studio.mjs voice videos/prog-basics-18-code-comments --speed 0.93`, dry-run first.
  ElevenLabs is unusable here (`.agents/design.md` `voice_id` empty; free-tier keys return HTTP 402) and
  was not substituted. HeyGen not used.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`. Band
  top 1024, height 320, Space Grotesk 700 at 46px, spoken word on amber, plate `rgba(21,24,29,0.72)`
  with a 2px `--line` border. Assembled by `studio assemble --captions` — never hand-assembled, and the
  `data-track-kind="captions"` lane is patched by `studio`, not by hand.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1) overrides it for every video
  decision in this campaign.
- Zero network assets: no icons, no images, no BGM, no SFX, no font fetches, no avatar, no face.

## Gate state

**PASSED to the pre-render gate. Audio at 0.93, five frames authored, caption lane assembled, gates
re-run after every fix, 83 snapshots read as pixels. Nothing is blocked. No render has been made and
none is authorized by this run.**

Observed on this pass, with the command that produced each number:

- `node studio/tools/studio.mjs voice videos/prog-basics-18-code-comments --dry` →
  `… provider=kokoro voice=af_heart lang=en speed=0.74` — **the live house-lookup bug, unedited**
  (frame-day2 § 8). Nothing was generated at that rate.
- `… voice videos/prog-basics-18-code-comments --speed 0.93 --dry` →
  **`▶ prog-basics-18-code-comments — provider=kokoro voice=af_heart lang=en speed=0.93`**
- `… voice videos/prog-basics-18-code-comments --speed 0.93` → 5 wavs (3.328 / 4.992 / 4.885 / 9.877 /
  2.880s), `✓ audio sync-durations: 5 frame duration(s) updated`.
- `node studio/tools/studio.mjs cues videos/prog-basics-18-code-comments` →
  **`✓ prog-basics-18-code-comments — 66 words over 5 lines (asr)`**; `audio_meta.json` carries
  **5 voice lines / 66 words** = one per frame, so no `SCRIPT.md` heading merged silently (the headings
  are the exact `## Line N — Title (Frame N)` form, packet § 3).
- Frame durations (measured VO + authored air, in `STORYBOARD.md`): **4.4 / 6.0 / 6.0 / 11.2 / 6.0 →
  film 33.6s**, starts 0 / 4.4 / 10.4 / 16.4 / 27.6. Air 1.07 / 1.01 / 1.12 / 1.32 / **3.12** (F5's pad
  is the § 12 lever and the ring's round trip lives in it). Measured rate 66 words / 24.32s to the last
  word end = **2.71 w/s**, not the 3.24 planning number — F4's comment prose runs 2.28 w/s. **Above the
  30s floor, so no padding was needed and no word was added.**
- `node studio/tools/studio.mjs assemble videos/prog-basics-18-code-comments --captions` →
  `28 group(s) from 66 words`, `total duration: 33.6s (expected ~33.6s, +0s)`,
  `✓ post-fix: captions lane marked`, voice track 5, bgm no, sfx 0.
- `node studio/tools/studio.mjs verify videos/prog-basics-18-code-comments` →
  **0 high, 0 medium across 7 html files** ("no known traps detected"), re-run after each fix.
- `npm run check` (project pin 0.8.208) → **`◇ Check passed`**: Lint **0 errors, 0 warnings** ·
  Runtime **0 error(s), 5 warning(s)** (all five `clip_media_fit` on the voice slots — that IS the
  authored air, packet § 7) · Layout **0 issues across 9 sample(s)** · Motion **0 errors, 0 warnings** ·
  Contrast **30/30 text checks pass WCAG AA** · Craft **0 errors, 0 warnings** · Audio 0/0.
  Two earlier runs are on the record and were fixed, not dismissed: Contrast
  `#f4-ht 1.09:1 (need 3:1, t=24.267s)` (deviation 14) and Craft
  `line_unread: "0 1 2 3 4" … on screen 1.30 s, under its 1.50 s floor` (deviation 15).
- `npx hyperframes snapshot --at …` → **83 PNGs read** (a 0.4s grid through all five scenes plus every
  emphasis moment, re-shot after each fix). Measured across all of them with ffmpeg-decoded pixels:
  **zero coral `#FF6B5A` pixels in every frame** (census count 0/81); **max luma y 1004→1024 = 58**
  (the ground's own shelf rule at 1010 — no ink-level pixel anywhere in the gap, count 0);
  **max luma y ≥ 1344 = 36** (glow bleed only, platform zone empty); every 0.4s sample inside every
  scene has a measurable pixel delta (min 0.27, at the F2 strike's first frame); content bbox inside
  x 72→1008, y 230→1004 for all five frames.
- **Chrome is pixel-identical to pb-14's**, proved without touching that project: its own saved
  `at-0s.png` was compared region-by-region against this film's. Mean AND max channel diff = **0** for
  all four corner brackets (48/48, 960/48, 48/932, 960/932), the `REC` dot box, the timecode box
  (both read `00:00`), the `BEGINNER` outline chip, the lower-third bar's top/bottom/left edges, and the
  shelf rule. The only differing region is the bar's right edge, where the title text differs — which is
  how deviation 13 was found.
- What the reads showed, per the report asks: at 25.3s the bad comment sits **on the same line as**
  `i += 1`, muted, and the strip under it prints `0 1 2 3 4`; at 24.4s `requests under load` is the only
  amber in the field while `charge(cart)` stays ink; at 15.1s `d2` and `days_until_delivery` are both on
  the board with one arrow between them and nothing else enumerated; at 31.35s the ring frames `AGREE`,
  at 32.2s `DISAGREE`, and at 33.0s (the loop frame) it is gone and **neither chip is selected**.

**Boundaries kept.** Written: `videos/prog-basics-18-code-comments/**` and
`writing/prog-basics/pieces/18-code-comments.md`. Nothing else. No render, no MP4, no publish, no
schedule, no `preview --background`, no BGM, no SFX, no network asset, no font fetch. pb-14 and
`frame-day2.md` were read only; the chrome problem in deviation 13 is reported here rather than fixed in
their files. **One cross-part finding for the parent, in someone else's project (not edited):**
pb-12's F4 draws its dashed empty slot at row 3, *above* `    print(i)`, while its own pinned comment
promises that filling it prints `0 1 2 3 4` — filled at row 3 the loop prints `1 2 3 4 5`. Part 18 draws
the increment at row 4 (below `print(i)`), which is the order executed here.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-18-code-comments --quality delivery --yes` → `prog-basics-18-code-comments_2026-11-01_12-07-24.mp4` in 55s.
ffprobe: h264 1080x1920 + aac 2ch, **33.600s** against this film's timeline, mean volume -23.4 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
