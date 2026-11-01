# prog-basics DAY 2 — WAVE 2 BUILD PACKET (read this, then your piece file)

You are building ONE HyperFrames project in `G:\Content Creation`, one of eight remaining parts of
`prog-basics` Day 2 (parts 12-22, vertical 1080x1920, Python). The look is already proven; you are
cloning it, not designing it. Read `writing/prog-basics/frame-day2.md` (v2.1) and
`writing/prog-basics/series-bible-day2.md` before writing anything. Your piece file under
`writing/prog-basics/pieces/` is the source of record for your part.

## 1. Audio: the speed trap that would have sunk the tranche

`studio voice` resolves speed as `--speed flag → house voices.en → 0.74`. The house lookup **misses**
(`.agents/design.md` nests `voices:` under `voice:`, so the key is `voice.voices.en`), so an
unflagged run silently speaks at 0.74.

```bash
node studio/tools/studio.mjs voice <dir> --dry      # MUST print speed=0.93
node studio/tools/studio.mjs voice <dir> --speed 0.93    # ALWAYS pass the flag
node studio/tools/studio.mjs cues  <dir>
```

- **Always pass `--speed 0.93`.** Never 0.74 (that is Day 1's override), never unset (that is 0.74).
- If the dry run prints anything but `0.93`, **stop and report**. Do not generate audio at the wrong
  rate. `voice_speed:` in your `BRIEF.md` is documentation only — the tool does not read it.
- After generating, confirm `audio_meta.json` has **one line per frame (5)**. A missing line means a
  frame's narration vanished silently (see § 3).

## 2. Runtime is MEASURED, not estimated — 3.24 words/second at 0.93

Every piece file's estimate table was written assuming 2.4 w/s and is ~26% too long. Actual carriers:
pb-21 = 60 spoken words → 23.13s speech → **29.13s film**; pb-22 = 91 words → 25.98s → **32.0s film**.
So plan on **29-34s** for a Day 2 part. That is the user's explicit choice: **no words added, ever.**

Take durations from the measured `audio_meta.json`, then add ~1.0s authored air per frame (~2.0s on
F5) into `STORYBOARD.md`, so every 0.5s crossfade sits inside silence and no sentence spans a cut.
If your film lands **under 30s**: grow F5's pad first (air is shape, not filler), and if that is not
enough, report it — do not add narration and do not shrink the other frames' air.

## 3. `SCRIPT.md` heading format is load-bearing

Headings must be exactly `## Line N — Title (Frame N)`. pb-22 wrote `## Line 3 — Walk (Frame 3, two
beats)` and **frame 3's narration silently merged into frame 2's wav**: no error, no warning, one
fifth of the film simply absent from the audio. After `studio voice`, diff line count against frame
count before authoring anything.

## 4. Geometry numbers the carriers settled (do not re-derive, do not "improve")

- **G3/G4 chamber**: `--panel` `#1F242C` on `--ground` `#15181D`, 3px `rgba(255,255,255,0.16)`
  hairlines, radius 22px, titlebar `--panel-2` 64px with filename mono `--muted` + language chip.
  A chamber in the field colour is invisible and passes both `verify` and `check`.
- **G2b array row**: 6 slots max, chamber **142×152px**, pitch **158px**, first slot x 74. pb-03's
  196px cells cannot hold six inside the 936px content width.
- **G7 node**: **176×108px**, value|hairline|next cells, connectors **24px CSS divs** between them;
  4 nodes + a 110px terminator span x 72 → 982. Walk ring 196×126px at `node.left − 10`, stepping one
  200px pitch. Hero→rest is a single `scale` tween, default centre origin, authored so its centre *is*
  the slot's centre.
- **Connectors/markers/rings are CSS divs, never SVG inside a scaled container** — that drifts them
  out of the content box into the platform zone (pb-11's finding, still true).
- **Anything a viewer has to COUNT gets `--line` (0.16), not `--line-faint` (0.08)**, and gets its own
  lane. Faint trails merge into one line at phone size.
- **A marker straddles an edge, never centres on a value** — it will blank the number it points at.
- **A `--say` amber plate inside an element that dims to 0.42 fails contrast** (measured 2.87:1).
  Retire the plate to ink before the dim starts. **Never two amber plates at once** — amber is "the
  word the voice is on", singular.
- `opacity: 0.42` on a whole echo row puts its text at 1.3:1. Dim the container's border/background;
  keep digits at full ink.

## 5. Type

- **Every frame carrying code needs** `font-variant-ligatures: none` **and**
  `font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`. JetBrains Mono otherwise ligates `<=` into
  `≤` and `->` into an arrow, which is **invalid Python to a learner who types what they saw**.
- § 4's "9-11cqw, ≤7 words per group" holds only for groups of ≤14 characters. Longer words wrap.
- CTA headlines ≤24 characters at 6.4cqw in a 176px box. Reading text ≥28px; smaller is chrome and
  needs `data-layout-ignore`.
- Absolute children of a clip band take **frame coordinates, not wrapper-relative** — pb-21's F5 index
  strip rendered at y≈120 above its own kicker with a green `check`.

## 6. Colour law (no exceptions you are allowed to make)

`--say` `#FFD166` = the word the voice is on right now. `--value` `#5AD6A0` = a value, or what
printed. `--err` `#FF6B5A` = **an error an interpreter actually raised on this machine, nothing else**
— so: coral is legitimate in **15** (RecursionError) and **17** (AttributeError, and JS TypeError),
and forbidden everywhere else in this tranche, including for drama, a REC dot, a "wrong idea", or a
hang. Parts 12, 13, 14, 16, 18, 19, 20, 21, 22 ship with **zero coral**.

## 7. Gates, in order, and what counts as evidence

```bash
node studio/tools/studio.mjs assemble <dir> --captions   # never hand-assemble; it patches the caption lane
node studio/tools/studio.mjs verify   <dir>
cd <dir> && npm run check
npx hyperframes snapshot --at <every emphasis moment>    # and 0.4s apart INSIDE each scene
```
**Then read the PNGs.** `verify` and `check` reported 0 high / 0 med and `Check passed` on all three
carriers while the pixels held three and four real defects. A green gate means "not yet looked at".
Check: nothing but the caption band below y 1004; nothing in 1344→1920; the ground visible under your
content; every animated element carrying a class as well as an id; measurable change at each sampled
second (`line_unread` warnings are real — an emphasis holding under ~0.4s needs a retime, not a
dismissal).

`check` flakes: `clip_media_fit` warnings are the authored air and expected. A crash with exit
`3221226505` is a known process-level flake on this machine — re-run `npm run check` alone once
before treating it as a composition finding.

## 8. Composition contract

Every timed element: `data-start` + a duration + `class="clip"`. One paused root timeline per
composition at `window.__timelines["<data-composition-id>"]`; scene timelines added to it must NOT be
paused. Deterministic only — no `Date.now()`, `Math.random()`, no fetch (**note: `verify`'s
nondeterministic rule scans COMMENTS, so write "wall clock" rather than the literal function name in
a comment**). Root CSS at 100%, container queries for size. No text tweens / `tl.set({text})` (no
TextPlugin — use a `{t,text}` step array with a time proxy assigning `textContent`). Anything moved in
x/y/scale is `inline-block`/block/flex, never an inline span. Delayed `fromTo` passes
`immediateRender: false`.

## 9. Copy rules

Hooks and CTA mechanics are the user's verbatim words — they are already in your piece file, do not
touch them. Explain lines were already re-cut for pacing in `CORRECTIONS-day2.md`; do not re-cut them
again. No "simply", "just", "easy", "of course", "clearly", "quick tip", no AI tells, no em-dashes on
screen, no "don't worry"/"everyone struggles". Max one three-item list per part, and only where the
enumeration *is* the subject. "It's not X, it's Y" is banned outright (rationed to one occurrence
across the series, spent on part 05's hook). No invented output: every number or printed line on
screen must be executed output listed in `series-bible-day2.md` § 4 — if you need a fact that is not
there, run it through `C:/Users/AmrPC/AppData/Local/Programs/Python/Python313/python.exe` (or node)
and say so in your report. No notation: never say or write `O(1)`/`O(n)`; use a counted walk.

## 10. Boundaries

Write ONLY inside your own `videos/prog-basics-NN-<slug>/`. Never touch another project (others are
building concurrently), `writing/**`, `studio/**`, `.agents/**`, or Day 1's `frame.md`/bible. Do NOT
render, publish, or schedule — no MP4. Do not run `preview --background` (parallel workers; snapshots
only). No BGM, no SFX, no network assets, no font fetches; every `@font-face` names a file you copied.

## 11. Report back, under 400 words

1. Measured per-frame durations + total film (and whether it is under 30s).
2. The exact `speed=` line your voice run printed, and `audio_meta.json`'s line count.
3. `studio verify` high/medium counts and what you did about each.
4. `npm run check` summary, verbatim.
5. What you actually SAW in the snapshots at each emphasis moment; name anything outside 230→1004.
6. Every deviation from your piece file, and confirm they are in your `BRIEF.md` Deviations section.
7. Anything the next builder should know that you found the hard way.
