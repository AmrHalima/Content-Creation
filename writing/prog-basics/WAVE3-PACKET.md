# prog-basics DAY 3 — WAVE 3 BUILD PACKET (read this, then your piece file)

You are building ONE HyperFrames project in `G:\Content Creation`: one of eleven parts of `prog-basics`
Day 3 (topics 23-33 · STRUCTURES, vertical 1080x1920, English master). The look is already derived; you
are cloning it, not designing it. Eleven of you run **concurrently**.

Authorities, in this order, and nothing else is negotiable:
`writing/prog-basics/series-bible-day3.md` (§ 0 decisions, § 4 accuracy ledger, § 4a-4d forms, § 6 rules)
→ `writing/prog-basics/frame-day3.md` (v3.0 — § 5 inherited marks, **§ 6 your new mark, fully derived**)
→ your piece file `writing/prog-basics/pieces/NN-<slug>.md` (source of record for your part)
→ `writing/prog-basics/CORRECTIONS-day3.md`.
`WAVE2-PACKET.md` § 4-§ 9 still holds and is inherited — read it once; Day 3 does not re-derive it.
You should **not** need `frame-day2.md` or `series-bible-day2.md`: Day 3's files restate what a Day 3
worker needs. Where Day 2 and Day 3 disagree, Day 3 wins for 23-33.

## 0. Scaffold — copy the shape, do not invent it

`videos/prog-basics-22-linked-lists/` is a shipped, rendered reference. Copy its **shape** (never edit
it — it is read-only): `package.json` (swap `name`, keep the version pin below), `hyperframes.json`,
`index.html`, `meta.json`, `compositions/captions.html`, `compositions/frames/*.html` naming
(`01-hook.html` … `05-cta.html`), `assets/fonts/*`, `caption-overrides.json`, `caption_groups.json`.

- **Pin `hyperframes@0.8.226`** in all four `package.json` scripts and in `BRIEF.md`'s `pin:`. (Day 2
  shipped 0.8.208; `studio doctor` resolves 0.8.226 today. Do not leave any script unpinned.)
- Copy `.agents/design.md` → `<proj>/design.md` and `writing/prog-basics/frame-day3.md` →
  `<proj>/frame.md` at init (`hyperframes-creative`'s precedence picks `frame.md` up).
- Write `BRIEF.md` with the Day 2 frontmatter keys (`series: prog-basics`, `part: NN of 33`, `workflow`,
  `flow: automation`, `mode: autonomous`, `aspect: 1080x1920`, `language: en`, `voice: af_heart`,
  `tts_provider: kokoro`, `voice_speed: "0.93"`, `frames: 5`, `grammar`, `length`, `ceiling: 54s`) plus
  a `Deviations` section even if empty. `BRIEF.md` is the no-repeat token: write mid-run decisions back.
- `caption-skin-day2.html` may be read and copied; there is no Day 3 skin and you are not making one.

## 1. Voice: the speed trap is still live

```bash
node studio/tools/studio.mjs voice <dir> --dry            # MUST print speed=0.93
node studio/tools/studio.mjs voice <dir> --speed 0.93     # ALWAYS pass the flag
node studio/tools/studio.mjs cues  <dir>
```
The house lookup misses (`.agents/design.md` nests `voice.voices.en`), so an unflagged run speaks at
0.74. If `--dry` prints anything but `0.93`, **stop and report**. `voice_speed:` in `BRIEF.md` is
documentation only — the tool does not read it. Then confirm `audio_meta.json` has **one line per frame
(5)**: a missing line means a frame's narration vanished silently.

## 2. `SCRIPT.md` heading format is load-bearing

Exactly `## Line N — Title (Frame N)`. pb-22 wrote `## Line 3 — Walk (Frame 3, two beats)` and frame 3's
narration merged into frame 2's wav — no error, one fifth of the film absent. Diff line count against
frame count before authoring anything.

## 3. Runtime — measured, and Day 3 has two bands

Day 2's carriers measured 60 words → 23.13s (**2.59 w/s**) and 91 words → 25.98s (**3.50 w/s**); 3.24 is
a planning average with a real ±25% spread, and **every Day 3 part is digit-heavy**, so expect the slow
end. Take durations from the **measured** `audio_meta.json`, add ~1.0s authored air per frame (~2.0s on
F5) into `STORYBOARD.md`, so each 0.5s crossfade sits inside silence and no sentence spans a cut.

- `[B]` **23, 24, 25, 26, 27, 30 → 29-34s.**
- `[M]` **28, 29, 31, 32, 33 → 34-42s allowed** (a trie or a heap genuinely needs more steps).
- Under 30s: **report it, do not fill it.** Grow F5's air first, then re-cut the frame *shape*. Never add
  narration, never shrink other frames' air below 1.0s. Ceiling 54s.

## 4. The no-carrier rule (Day 3 replaced Day 2's rule 1)

All eleven start at once, so **nothing here is proven before it is copied**. Your new mark's geometry is
fully derived in `frame-day3.md` § 6 — px, colour role, motion contract, the atom it is built from, and
a named clone source. If that geometry does not survive your own snapshots: **report the failure loudly
and stop on that frame. Do not invent a quiet variant.** A silent variant is how eleven films become
eleven looks. Reuse, do not rebuild: G6 chambers → 23 · G7 node chain → 24, 33 · pb-03/pb-21 row of
boxes → 25 buckets, 26 membership row · G8 chrome → 26, 31 **copied verbatim from pb-14** (bowl: chrome
never fades, REC dot is `--muted`, brackets at y 932→1004). G11 tree: 27 draws it; **28, 29, 31 bind to
it, they do not redraw it.**

## 5. Forms — the rule Day 2 did not need

Your user copy speaks a language-neutral API (`push`, `pop`, `enqueue`, `dequeue`, `root → (left, right)`,
`None ⇄ A ⇄ B ⇄ C`, `push('low', 5)`). Three permitted forms (bible § 4d):

| form | may contain | never contains |
|---|---|---|
| **chamber** (G3, ≤4 code lines + terminal) | Python executed on this machine, single quotes, ligatures off | pseudocode APIs, `⇄`, invented output, hash numbers |
| **diagram** (G9-G15) | the API words as plate tags, arrows as CSS bars, executed numbers as `--value` | SVG in a scaled container, unproven glyphs (`⇄`), a claimed internal layout |
| **chip** (mono `--muted` tag) | `nil`, `HTML`, `FOLDERS`, `ORG CHART`, `DIJKSTRA`, `LRU CACHE`, `MIN-HEAP`, `MAX-HEAP` | output, a number, a colour role |

A `PYTHON`-chipped chamber showing `push(1); pop()` is **a lie** — a learner types it and gets
`AttributeError`. Show the Python equivalent (`stack.append(1)`, `stack.pop()`) with a mono `--muted`
comment tag carrying the API word (`# push`), so diagram and chamber teach the same word. Anything that
cannot be executed at all is a chip, never a chamber. No `hash(...)` value may ever appear on screen
(string hashes are randomised per process — bible § 4). Do not run your own interpreter to "improve"
the ledger: every number you need is already executed in § 4 and in your piece file.

## 6. Colour law: zero coral, decided

`--say` `#FFD166` = the word the voice is on now (never two at once). `--value` `#5AD6A0` = a value, or
what printed. `--err` `#FF6B5A` = an error an interpreter actually raised **on this frame** — and Day 3's
copy raises none, so **all eleven parts ship with zero coral.** The real errors in the ledger
(`KeyError`, `IndexError`, the `dict`-tie crash) are pinned-comment and reply-thread material only. A
Day 3 render with a coral pixel is a finding, not a taste disagreement. Also inherited: anything a viewer
counts gets `--line` (0.16), not `--line-faint` (0.08), and gets its own lane; a marker straddles an edge,
never centres on a value; a `--say` plate must retire to ink before its container dims; dim a container's
border/background, keep digits at full ink.

## 7. Notation law

The screen **never** shows `O(`, `log n`, or a bare `n` — in any part. The voice may say **"log n" at most
once, and only in 28 and 29**, inside the user's own hedged sentence. Show the counted walk instead. Your
part's exact counted pair is locked in bible § 4b (e.g. 28's `STEPS` always counts *nodes visited*, never
turns; 24's marker travels while boxes never slide). Do not pick your own convention.

## 8. Type and geometry (inherited, do not re-derive)

Every frame carrying code needs `font-variant-ligatures: none` and `font-feature-settings: "liga" 0,
"calt" 0, "dlig" 0` — JetBrains Mono otherwise ligates `<=` into `≤`, which is invalid Python to a learner
who types what they saw. G3/G4 chamber `--panel` `#1F242C` on `--ground` `#15181D`, 3px
`rgba(255,255,255,0.16)` hairlines, radius 22px, 64px `--panel-2` titlebar. G2b row: 6 slots max, chamber
142×152px, pitch 158px, first slot x 74. G7 node 176×108px, connectors **24px CSS divs** — connectors,
markers and rings are CSS divs, never SVG inside a scaled container. § 4's "9-11cqw, ≤7 words" holds only
for groups of ≤14 characters. CTA headlines ≤24 characters at 6.4cqw in a 176px box. Reading text ≥28px;
smaller is chrome and needs `data-layout-ignore`. Absolute children of a clip band take **frame
coordinates, not wrapper-relative**. Day 3's own break points (frame-day3 § 6): elbow connectors on G11,
the two parallel connectors on G13, edge crossings on G12, the 20-row field on G14, and G10's bucket row
must not be labelled as Python's memory layout.

## 9. Composition contract

Every timed element: `data-start` + a duration (`data-duration`/`data-end`) + `class="clip"`. One paused
root timeline at `window.__timelines["<data-composition-id>"]`; scene timelines added to it must NOT be
paused. Deterministic only — no `Date.now()`, `Math.random()`, no fetch (**`verify`'s nondeterminism rule
scans COMMENTS, so write "wall clock" rather than the literal function name in a comment**). Root CSS at
100%, container queries for size. No text tweens / `tl.set({text})` (no TextPlugin — use a `{t,text}` step
array with a time proxy assigning `textContent`). Anything moved in x/y/scale is
`inline-block`/block/flex, never an inline span; every animated element carries a **class as well as an
id**. Delayed `fromTo` passes `immediateRender: false`. Narration goes on a separate `<audio>`.

## 10. Copy rules

Hook and CTA mechanics are the user's verbatim words — they are already in your piece file; do not touch
them, and do not re-cut the Explain lines (already re-cut in `CORRECTIONS-day3.md`). No "simply", "just",
easy", "of course", "clearly", "quick tip"; no AI tells; no em-dashes on screen; no "don't worry"/"everyone
struggles". Max one three-item list per part, only where the enumeration *is* the subject. **"It's not X,
it's Y" is banned outright** (rationed to one occurrence across the series, spent on part 05). **"Traverse"
is banned series-wide** — say "walk", "go forward and back", "read it in both directions". Gloss each Day 3
noun **in the same frame it appears** (bible § 2); where the sentence cannot carry a gloss, the frame does
it with a mono tag on the object (`NODE`, `EDGE`, `SMALLER`, `LARGER`, `END`).

## 11. Gates, in order, and what counts as evidence

```bash
node studio/tools/studio.mjs assemble <dir> --captions   # never hand-assemble; it patches the caption lane
node studio/tools/studio.mjs verify   <dir>
cd <dir> && npm run check
npx hyperframes snapshot --at <every emphasis moment>    # and 0.4s apart INSIDE each scene
```
**Then read the PNGs.** On Day 2's carriers `verify` and `check` reported 0 high / 0 med and `Check passed`
while the pixels held three and four real defects — a green gate means "not yet looked at". Check: nothing
but the caption band below y 1004; nothing in 1344→1920; the ground visible under your content; measurable
change at each sampled second (`line_unread` warnings are real: an emphasis under ~0.4s needs a retime, not
a dismissal). `clip_media_fit` warnings are the authored air and expected. Exit code `3221226505` is a known
process-level flake on this machine — re-run `npm run check` once alone before treating it as a finding.

## 12. Boundaries

Write ONLY inside your own `videos/prog-basics-NN-<slug>/`. Never touch another project (ten others are
building concurrently), `writing/**`, `studio/**`, `.agents/**`, or Day 1/Day 2's files — you may read and
copy those, never edit. **Do NOT render, publish, or schedule — no MP4.** The dispatcher renders
sequentially after every worker reports. Do not run `preview --background` (parallel workers; snapshots
only). No BGM, no SFX, no network assets, no font fetches; every `@font-face` names a file you copied.
Do not touch Arabic — topics 23-33's Arabic lines (plan 485-563) are queued, not authorized.

## 13. Report back, under 400 words

1. Measured per-frame durations + total film, and which band it should have been in (and whether it missed).
2. The exact `speed=` line your voice run printed, and `audio_meta.json`'s line count.
3. `studio verify` high/medium counts and what you did about each.
4. `npm run check` summary, verbatim.
5. What you actually SAW in the snapshots at each emphasis moment; name anything outside 230→1004.
6. Your new mark's verdict: did `frame-day3.md` § 6's derivation survive your pixels? If not, say so in
   the first line — that is the finding the dispatcher needs most.
7. Every deviation from your piece file, and confirm they are in your `BRIEF.md` Deviations section.
8. Anything the next builder should know that you found the hard way.
