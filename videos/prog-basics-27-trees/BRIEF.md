---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 27 of 33
tranche: day-3 (STRUCTURES)
title: prog-basics-27-trees
message: "a shape with one thing at the top and everything else below it by parentage — a node, a child, a leaf — which is how folders, pages and org charts are all the same picture"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz ("How many leaves if the root has 2 children and each child has 2 more?")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~38s measured projection (piece file projected ~33s; band [B] is 29-34s — see Runtime)
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md; deliberately NOT the prior projects' look)
carrier: false (Day 3 has no carrier wave — bible § 0.1)
new_mark: G11 tree — FIRST DRAW. Parts 28 (BST), 29 (heap) and 31 (trie) bind to this grid, they do not redraw it
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 88
grammar: G1 G11 G11 G4 G5
pin: hyperframes@0.8.226
---

## Intent

English master of part 27 of `prog-basics` (Day 3 / BASICS III, STRUCTURES): trees. Portrait 1080x1920,
`[B]` band 29-34s, ceiling 54s. Faceless explainer: no URL, no footage, every visual invented on the
campaign's own identity. Copy source of record: `writing/prog-basics/pieces/27-trees.md`. Shape:
bible-day3 § 0/§ 2/§ 4/§ 4b/§ 4c/§ 4d + `frame-day3.md` § 5 (inherited marks) and **§ 6 G11** (the new
mark, fully derived there — this part draws it for the first time in pixels). Grammar: G1 hook,
G11 tree ×2 (F2 builds the grid downward, F3 adds leaves + chips + the counted lane), G4 split (F5? no —
F4, two chambers, cloned geometry from `pb-10/04-two-languages.html`), G5 CTA.

**This file is the no-repeat token.** Mid-run decisions get written back here, not left in chat.

## The load-bearing job: G11's geometry is copied by three other workers

`frame-day3.md` § 6 derives the grid; this project is its first rendering. What 28/29/31 inherit, verbatim:

- node **148×96**, `--panel` `#1F242C`, 3px `--line` `rgba(255,255,255,0.16)`, radius 22, G2 shadow;
  value Space Grotesk 700 mint (`--value`), 4.6cqw for a word/two chars, 6.2cqw for a single letter.
- levels **L0 292 / L1 452 / L2 612 / L3 772** (pitch 160). **Four levels is the ceiling.**
- columns `left = 72 + (936/n)/2 − 74 + i*(936/n)` → n=1 **466** · n=2 **232, 700** · n=3 **154, 466, 778**
  · n=4 **115, 349, 583, 817**. Node centre = left + 74. Right edge at n=4 is 965 ≤ 1008 ✓.
- elbow = three axis-aligned 3px `--line` divs (down-stub, run, up-stub), **runY 420 / 580 / 740**, stubs
  32px, no rotation, no SVG, no diagonals. Overlapping runs share the bar.
- ROOT name tab: mono 700 2.5cqw `--ink` on `--panel-2`, **h 38** (not G2's 60), radius `12px 12px 0 0`.
- leaf chip: mono 1.85cqw `--muted` `LEAF`, `data-layout-ignore`, 20px under the node.
- counted lane y **892 h 66**; ring = 168×116 `--say` 3px at `node.left − 10`.

My drawn tree (root → L, R; L → L1, L2) puts children at **115 / 349** (centres 189 / 423, midpoint **306**
= L's own centre) — the parent sits exactly above its children's midpoint, which is the check § 6 asks for.

## Runtime

88 spoken words. Day 2's carriers measured **2.59** and **3.50 w/s**, so the piece file's two estimates
(33.2s @3.24 and 38.5s @2.7) bracket it; 27 is digit-heavy (three numbers in F3 alone). Frame durations
come from the **measured** `audio_meta.json` + ~1.0s authored air per frame (~2.0s on F5).
**If the film lands above 34s it is over the `[B]` band — report it, do not cut words, do not pad.**
Ceiling 54s is not close.

## Colour / notation / form law as applied here

- **Zero coral.** 27 raises no error; `--err` appears nowhere in this project.
- Amber `--say` = only the word the voice is on, one arrival per beat: F1 plate on `secretly`; F2/F3 the
  `--say` ring on the node being named; F4 the sweep under `[1]` then (after it retires) under `['L', 'R']`;
  F5 the solid `COMMENT IT` plate. Nothing else is amber.
- Mint `--value` = the node values, the two printed outputs, and the counted digits.
- **No `O(`, no `log n`, no bare `n` anywhere.** 27 has no runtime claim; its count is structural.
- `root → (left, right)` is a **diagram**, never a chamber. `FOLDERS` / `HTML` / `ORG CHART` are **chips**,
  never chambers. The only chambers in this film are F4's two executed Python snippets.
- Glosses, all in the frame where the noun first appears: `node` (F2, mono `NODE` tag on the root box +
  the spoken "one box, holding one thing"), `root` (F2, the ROOT tab), `parent/child` (F2, `CHILD` chips
  flanking the L1 nodes), `edge` (F2, one `EDGE` chip on the first elbow run — the voice never says it,
  so the frame says it, per bible § 2), `leaf` (F3, `LEAF` chips on exactly the three childless nodes and
  **not** on L).

## Gate state

Built to the pre-render gate only: BRIEF, SCRIPT, STORYBOARD, 5 frames, `voice --speed 0.93`, `cues`,
`assemble --captions`, `studio verify`, `npm run check`, `snapshot --at` at every emphasis moment and
0.4s pairs inside each scene, **PNGs read by eye**. **No render, no MP4, no publish, no preview
--background, no BGM/SFX/network assets, no Arabic.** Nothing outside this directory written.

### Finish run (post-handoff, this session)

- `studio assemble videos/prog-basics-27-trees --captions` → `✓ captions lane marked` — the late frame-05
  edits had wiped the `data-track-kind="captions"` patch (known-traps #4). **The dir argument must be the
  path `videos/prog-basics-27-trees`, not the bare slug** — a bare slug resolves against the workspace root
  and exits 1 with no output (`STORYBOARD.md missing`).
- `studio verify` → **0 high / 0 medium across 7 html files**. Not evidence on its own: the pixel pass is.
- `npm run check` → first run **failed with 2 runtime errors** (`request_failed: … cdn.jsdelivr.net …
  ERR_NAME_NOT_RESOLVED` + `page_error: Cannot read properties of undefined (reading 'timeline')`), which
  also made 4 `dead_stretch` warnings and `first_frame_empty`: **with gsap undefined the whole film renders
  in its t=0 static CSS state, so a snapshot of that film proves nothing.** Fixed the same way
  `pb-23/24/29/31/34` did — vendored `assets/gsap.min.js` (GSAP **3.15.0**, md5
  `9abb8c3834399a3f6f24f1a79c17a039`, copied from `.agents/skills/talking-head-recut/assets/vendor/`) in place
  of the pinned-3.14.2 CDN tag in `index.html` **and** `compositions/captions.html`, with the shipped tag
  documented in a comment for the owner to restore before the render gate. **`studio assemble --captions`
  rewrites both tags — re-patch after any re-assembly.** Re-run: `Check passed`, 0 errors everywhere,
  contrast 3/3 → **24/24** text checks, craft 0/0 (see Deviations 9-10).

## Snapshot order for the G11 verdict (piece file § Gate state)

1. column formula: n=2 → 232/700, n=4 → 115/349/583/817, right edges ≤ 1008, parent centred over children.
2. the elbow run at y 420/580/740: two runs at one y must merge cleanly or separate visibly — never knot.
3. four levels max; a fifth would be a report, not a fix.
4. `LEAF` on exactly three nodes, never on `L`.
5. F5's diagram carries no digit.

## Deviations from the piece file (all recorded, none silent)

1. **Counted pair on screen is `NODES 5` / `LEAVES 3`, not the `LEAVES 4` / `NODES 7` of bible § 4b,
   `frame-day3.md` § 6's `counted` line, `CORRECTIONS-day3.md` § A/§ B, or the dispatcher's brief.**
   Reason, in this order: (a) F3's narration is verbatim and says *"This one has five nodes and three
   leaves"*, so a `NODES 7` tag would contradict the voice on the same beat; (b) the tree that is *drawn*
   on this film is `root → (L, R)` with two children under `L` = 5 nodes / 3 leaves (piece file § Accuracy,
   executed); (c) the 7-node/4-leaf tree is the CTA's tree, and numbering it on screen answers the quiz —
   the same anti-spoiler rule bible § 4b applies to part 23 ("must not be drawn, or F5 answers the quiz").
   `LEAVES 4` / `NODES 7` is executed and correct, and it lives in the **pinned comment** (already written
   in the piece file). **This is a finding for the dispatcher, not a private variant:** three authority
   documents and the piece file disagree, and the disagreement is about a *count label*, not about G11
   geometry — 28/29/31 are unaffected in their pixels.
2. **F1's hook is broken across four display lines** (`your computer's` / `folders are` / `secretly` /
   `a data structure.`) at 8.4cqw instead of the piece's two groups. No word changed; a 30-character group
   cannot hold 9cqw inside 936px (the § 2 ramp's ≤14-character law, and pb-22's same deviation).
3. **The cover string `folders are a tree` is not rendered on F1.** § 8 says F1 *is* the cover, and F1
   carries the verbatim hook, which never says "tree". Amber plates `secretly` (the piece's own F1 spec and
   delivery note). Recorded here as the cover/title-card text for the publish stage, where it can be a
   platform thumbnail rather than a rewrite of the hook.
4. **`CHILD` chips flank the two L1 nodes (outside edges, y-centred) instead of sitting "under" them.**
   Under the left L1 node is exactly where F3's elbow down-stub (x 306, y 548→580) and run (y 580) are
   built; an under-node chip would sit 2px on a line the viewer counts. Flanking keeps the gloss and the
   geometry. `LEAF` chips stay under their nodes (R at y 568; the two L2 nodes at y 728) — clear of every run.
5. **An `EDGE` gloss chip was added to F2's first elbow run.** The word appears in no spoken line, and
   bible § 2 lists it as a Day 3 noun that must be glossed in the frame it first appears; the frame is
   where it appears. Same move as 30's spec'd `EDGE` chips.
6. **Root node shows the value `root` under its `ROOT` tab.** § 6 mandates the tab; the box also needs an
   interior value or it reads as G2's dashed empty state. `root` is the key F4's chamber executes
   (`kids['root'] → ['L', 'R']`), so diagram and chamber teach the same word (bible § 4a).
7. **F4's two chambers are unequal width (400 / 512) with code at 2.6cqw.** pb-10's equal 456px chambers
   give a 412px line, and `kids = {'root': ['L', 'R']}` is 27 characters ≈ 489px at the § 2 ramp's
   2.9cqw. 2.6cqw = 28.1px stays above the 28px reading floor and fits inside 512−44=468. Verified by
   snapshot, not by arithmetic alone.
8. **F5 puts the `?` chip in pb-21's right-hand counted-tag slot (left 590, w 220) and moves the badge line
   to y 960.** The lower lane (892 h 66) is § 4's counted lane; the badge needs a row too and 960..1004 is
   the last clear band inside the content box.

## Voice

Kokoro `af_heart` (offline, free), provider pinned from this file by `studio voice`. ElevenLabs is
unusable here (`.agents/design.md` `voice_id` empty; free-tier keys return HTTP 402) and was **not**
substituted. HeyGen not used (needs interactive auth and bills credits). No BGM, no SFX, no network
assets, no font fetches — every `@font-face` names a file copied into `assets/fonts/` (the v2 set from
`pb-03`). `voice_speed:` above is documentation: the tool does not read it, so `--speed 0.93` is passed
explicitly (the house lookup misses on `voice.voices.en` and would otherwise speak at 0.74).
