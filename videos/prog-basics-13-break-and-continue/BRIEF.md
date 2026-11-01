---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 13 of 22
title: prog-basics-13-break-and-continue
message: "break leaves the loop the instant it fires; continue drops the rest of this round and the walk goes on — use break on a find, continue on an ignore"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Challenge (mechanic unchanged — "Challenge: find the first even number in a list using break. Post your code.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~31s
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
words: 77
grammar: G1 G2b G3 G5
carrier: false
clone_source: videos/prog-basics-11-for-vs-while/compositions/frames/02-walk.html
pin: hyperframes@0.8.208
---

## Intent

English master of part 13 of `prog-basics` (Day 2 / BASICS II): `break` and `continue`. Portrait
1080x1920, ~31s, ceiling 54s. Faceless explainer: no URL, no footage, every visual invented on the
campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/13-break-and-continue.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4
example, F5 CTA). Grammar: `frame.md` v2.1 § 4 — G1 hook, **G2b row** (F2 and F3: the same walk atom
twice, once with a rail cut, once with a skip), G3 code chamber (F4), G5 CTA (F5).

Clone source, named by `BATCH-day2.md` and `frame-day2.md` § 11:
`videos/prog-basics-11-for-vs-while/compositions/frames/02-walk.html` — Day 1's finite walk over a row of
positions (rail + marker + chambers + P2 drop-in + stop bar). This part is that atom with exactly two
edits bolted on: the rail **cut** and one chip **skipped**. Row geometry comes from the carrier
`videos/prog-basics-21-arrays/compositions/frames/02-row.html` (the proven 6-slot grid), the G3 chamber
and P3 caret/mask idiom plus the self-contained say-plate from `pb-21/04-code.html` and
`pb-22/04-chain-code.html`, the G5 shell from `pb-21/05-cta.html`. Nothing here is authored from
scratch; the shared stylesheet (`gnd-*`, `pb-kicker`, `pb-chamber`, `pb-val`, `cd-*`) is copied whole.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing that
  needs re-hearing — part of the audience reads English as a second language. The hook and the CTA
  mechanic are the user's words and are verbatim, and **no re-cut from `CORRECTIONS-day2.md` § A
  applies to this part** (all four explain sentences already pass the ≤14-word / ≤2-clause law); they
  are only split one idea per frame — F2 carries the two `break` sentences, F3 the two `continue`
  sentences. `loop` is glossed on F1's own screen; `break` is glossed by the rail vanishing, `continue`
  by the marker hopping over a chip — neither is defined in words, both are shown in the same frame the
  voice says them. `round` (the user's word) is glossed on screen as `this round only`. `target` is the
  mono tag `target = 7` standing over the chip the walk stops on. No "iterate"/"traverse", no
  `O(1)`/`O(n)`, no "simply/just/easy/of course", no em-dashes on screen, no "not X, it's Y" (that
  shape is spent on part 05's hook), no "don't worry". The lesson to land: `break` ends the whole loop
  the moment it fires, `continue` throws away only the rest of the round it is in.
- **Motion.** Two meaning-carriers, both edits of the cloned walk, plus the code being written:
  F2 = the **rail cut** — the marker steps 3 → -1 → 8 → 2 → 7 along a `--line` rail, and on the spoken
  word `break` the rail's tail retracts (`scaleX 1 → 0`) so the walk visibly stops mid-length while the
  marker lifts out of frame and the last chamber `9` never gets its mint border (tag `never visited`).
  F3 = the **skip** — the marker hops over the `-1` chamber (x step plus a y dip, yoyo) under a 3px
  `--line` dashed arc, that chamber's skin dims to 0.42 with its digit held at `--muted`, and each
  visited chip flashes its border mint while a mint digit arrives in the collect lane below: `3 8 2 7`.
  F4 = P3 `type-on` under a caret, one chamber line per spoken clause, each keyword taking exactly one
  self-contained amber `--say` plate at its onset, `continue`'s plate retired to ink before `break`'s
  sweep. F5 = the mechanic verb plate `POST YOUR CODE` (P2 drop-in) over the challenge list returned as
  a dimmed hint row. Every emphasis is proved by pixel deltas between neighbouring snapshots, not by
  intent; air is the shape, so each 0.5s crossfade sits inside silence.

## Deviations from the piece file and the clone source (all recorded, none silent)

- **`--speed 0.93` IS passed explicitly, against the tranche's original "never pass `--speed`" rule.**
  `studio voice` resolves speed as flag → `house["voices.en"]` → 0.74, and `.agents/design.md` nests the
  block under `voice:` so the flattened key is `voice.voices.en` and the lookup **misses**: an unflagged
  run silently speaks at 0.74. `frame-day2.md` § 8 was corrected on this by the three carriers (pb-14
  stopped with no audio rather than ship 0.74; pb-21/pb-22 shipped the flag). `studio/**` and
  `.agents/**` are read-only to this run, so the flag is the only lever. The `--dry` line is read before
  generating, and `voice_speed:` in this file is documentation only — the tool never reads it.
- **F2 and F3 are both G2b.** The pinned grammar list names `G2b` once; the walk atom appears twice, in
  the order the user's own copy puts the keywords (`break` is spoken first, so it is F2). To keep the
  join from landing on the previous frame's layout, F3 mirrors the apparatus — chambers up top with the
  rail and marker **below** them and a collect lane added — and wipes from a different edge (F2 from the
  left, F3 from below).
- **Row geometry is pb-21's carrier grid, not pb-11's.** pb-11's walk ships 3 chambers at 240px cells on
  a 300px pitch; this part walks a list of **six** values, which needs 6×240 = 1440px and would overflow
  the 936px content column. So the row is the tranche's settled 6-slot grid: chamber **142x152**, pitch
  **158**, first slot **x 74** (span 932). Style is pb-11/pb-21's verbatim — `--panel` `#1F242C`
  chambers, 3px `rgba(255,255,255,0.16)` hairlines, radius 22px, G2 shadow, mint `--value` digits — only
  scaled.
- **The walk marker is neutral `--panel-2` chrome, not amber.** pb-11's clone gives its marker a
  3px `--say` border and amber glyph; on this board the keyword chip already carries the frame's one
  amber plate, and § 1's colour law forbids two amber things competing for "the word the voice is on".
  The marker is therefore a `--panel-2` chip with a `--line` border and an ink `n`, plus a 2px stem
  pointing at the chamber it is on.
- **"Rail cut" is two rail divs whose tail retracts**, not a mask or an SVG slice. § 14's proven rule is
  that connectors, markers and rails are CSS divs in the untransformed layer (an SVG inside a scaled
  container drifts out of the content box into the platform zone). The rail head ends at the target's
  centre; the tail is a separate `--line` div that tweens `scaleX 1 → 0` with origin at the target, so
  the track visibly stops mid-length at the moment `break` is said.
- **The skipped chamber dims its skin, not its text.** The pinned motion is "the skipped chip dims to
  0.42"; `frame-day2.md` § 14 measured `opacity: 0.42` on a whole element putting its digits at 1.3:1.
  So `-1`'s background + border div tweens to 0.42 and the digit is a sibling that keeps full alpha in
  `--value` mint. The dim is exactly as briefed, the value stays a value, and the `skipped` tag says
  what the dim means (12.3s snapshot: `-1` is legible against the field).
- **F2 prints nothing, and carries no reading annotation.** The break-only walk the rail cut collects
  `[3, -1, 8, 2, 7]`, which is a different list from the ledger's combined `[3, 8, 2, 7]`; both were
  re-executed on this machine for this build. Rather than put an un-ledgered number on screen, F2 shows
  no collect strip — the cut is its claim, and the numbers live in F3's lane and F4's strip. F2's second
  annotation line was authored and then **deleted**: `check` measured it on screen 1.90s against a
  2.63s legibility floor (`line_unread`), and 4.14s of speech cannot hold a 10-word sentence to its
  floor. What carries that beat instead is a mono chrome tag, `5 rounds run` — the counted walk this
  tranche uses instead of notation, and true: the body runs for `3, -1, 8, 2, 7` and then break fires.
- **Whitespace between code tokens is `&nbsp;`, never a literal space.** `.f2-code`, `.f3-code` and
  `.cd-line` are `display: flex`, and a flex container **drops whitespace-only text nodes** between its
  items: `if n == target: break` written with literal spaces renders `ifn==target:break`. Found in the
  5.4s snapshot, fixed on all three frames — and the fix also cleared the `text_occluded` info on
  `#f4-l4`'s colon, which the say-plate had been reaching only because the tokens were touching. Every
  carrier uses `&nbsp;` in its code lines; none of them wrote down why.
- **F4's terminal strip is labelled `SEEN`, not `stdout`.** The chamber is capped at 4 lines (§ G3) and
  the 5th line a real `print(seen)` would need does not fit, so the strip carries the series' `# result`
  convention — muted `#`, mint `[3, 8, 2, 7]` — under a muted mono `SEEN` corner tag, i.e. the value of
  the variable the ledger executed, not an implied stdout line.
- **The amber `BEGINNER` badge is fixed chrome on F1-F4** (pb-21/pb-22 convention). It never moves and
  always reads `BEGINNER`, so it is not a `--say` plate and does not compete with the keyword plates. F5
  drops it, as pb-21's F5 does: the CTA frame carries the one amber verb plate, and the series line at
  the foot of that frame already reads `… · 13 · BEGINNER`.
- **Ligature guard on every frame's stylesheet**, not only on F4 (`frame-day2.md` § 14: a cloner will
  skip it, so it belongs on all five). JetBrains Mono otherwise fuses `<=` to `≤` and `->` to an arrow —
  invalid Python for a learner who types what they saw.
- **No coral anywhere** — `--err` is reserved for an error the interpreter actually raised and part 13
  raises none (`frame-day2.md` § 6 names 15 and 17 as the only coral parts in this tranche).
- **Zero `[` `]` mislabel risk:** every Python literal on screen is single-quoted where quoted, and the
  only list literals shown (`[3, -1, 8, 2, 7, 9]`, `[3, 8, 2, 7]`, `[3, 7, 2, 8]`) are ledger values.
- **Hook and CTA untouched**, and no explain line re-cut. F1 is the hook split into three ≤7-word
  groups; F5 is the verbatim `Challenge: find the first even number in a list using break. Post your
  code.` with the answer (`2`, and `None` for `[1, 3, 5]`) held in the pinned comment instead of on the
  frame — the Challenge mechanic needs both halves of the answer, and Day 1 learned that on pb-09.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + both OFL notices copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2 set). Every `@font-face` in every frame
  names a file that exists in `assets/fonts/`; no font fetches.
- Voice: Kokoro `af_heart` at **0.93** through `studio voice`, provider pinned by this file (never
  `auto`). ElevenLabs is unusable here (`voice_id` empty in `.agents/design.md`, free-tier keys return
  HTTP 402); HeyGen not used. No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v2.1, Day 2) overrides it for every
  video decision in this campaign.
- Zero network assets: no icons, no images, no BGM/SFX, no font fetches. The GSAP tag in `index.html` is
  the generator's own CDN script line, identical to every shipped sibling in this series.

## Gate state

Built to the **pre-render gate only**: voice @ 0.93, cues, 5 frames, assemble, verify, check, snapshot
read. **No render has been made and this worker is not authorized to render.** No MP4, no publish, no
schedule, no Arabic pass, no BGM, no SFX, no `preview --background` (parallel workers; snapshots only).

`## Accuracy` in the piece file is confirmed on Python 3.13.15: the ledger's
`seen = [3, 8, 2, 7]` over `[3, -1, 8, 2, 7, 9]` with `target = 7`, the break-only walk's
`[3, -1, 8, 2, 7]` (re-run for this build, so F2's steps are honest), and the CTA's `2` / `None` /
`bool(-4 % 2 == 0) == True`. No new fact appears on screen.

Runtime: 77 spoken words measured at **25.365s of speech** (3.04 w/s for this part's longer words, not
the 3.24 planning rate) + 6.0s authored air (1.0s per frame, 2.0s on F5) = **31.37s film** — above the
tranche's 30s floor, so **no pad growth was needed and no words were added**. Frame durations
3.77 / 5.14 / 8.06 / 7.81 / 6.59, cumulative starts 0 / 3.77 / 8.91 / 16.97 / 24.78.

## Gate evidence, observed at the end of this run

- `studio voice` printed `▶ prog-basics-13-break-and-continue — provider=kokoro voice=af_heart lang=en
  speed=0.93` (the `--dry` run before it printed `speed=0.74`, which is why the flag is always passed),
  and `studio cues` measured **77 words over 5 lines** — 5 entries in `audio_meta.json`, one per frame,
  so no line merged into another's wav (the pb-22 failure mode).
- `studio assemble --captions` → `37 group(s) from 77 words … total duration: 31.37s`, plus
  `post-fix: captions lane marked`.
- `studio verify` → **0 high, 0 medium across 7 html files**, before and after the pixel fixes.
- `npm run check` (hyperframes@0.8.208) → `◇ Check passed`: Lint 0/0 · Runtime 0 errors + 5
  `clip_media_fit` warnings (the authored air on each frame, same as every shipped sibling) · Layout 0
  errors, **1 info** (`container_overflow #f2-content` by 2.96px at 8.714s — the frame's own exit push
  lifting the full-height band during the crossfade, the shipped idiom at every sibling) · Motion 0/0 ·
  Contrast **50/50 WCAG AA** · Craft 0/0 (two `line_unread` findings were real and were fixed: F2's
  annotation deleted, F4's thesis line moved from 6.00s to 4.52s) · Audio 0/0.
- 43 snapshot moments read across four passes. What the pixels confirm: the **rail cut** at 6.7-7.0s — the
  track ends at the target against two ink notch bars, the marker is gone, `9` has dropped to a faint
  border under `NEVER VISITED`, and `5 rounds run` holds the counted claim; the **skipped chip** at
  10.35-12.3s — `-1`'s skin is visibly recessed while its digit stays readable, the hop arc sits over
  the slot, `SKIPPED` names it, and the `seen` lane reads `3 8 2 7` in order with `9` never collected;
  the **`# [3, 8, 2, 7]` strip** at 23.5s under a muted `SEEN` label, mint, inside the content box, with
  `break` on the frame's only amber plate; and at 19.4s (between the two keyword plates) the board holds
  **no amber plate at all**, which is the proof that the two never coexist.
- Nothing outside y 230→1004: the only ink below 1004 in all 40 is the caption plate inside the
  1024-1344 band, and 1344-1920 is empty in every one.
- No MP4 exists and none was made. No `preview --background` was started.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-13-break-and-continue --quality delivery --yes` → `prog-basics-13-break-and-continue_2026-11-01_12-00-56.mp4` in 56s.
ffprobe: h264 1080x1920 + aac 2ch, **31.400s** against this film's timeline, mean volume -24.4 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
