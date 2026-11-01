---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 34 of 44
title: prog-basics-34-circular-buffers
message: "a fixed row with a write spot that returns to the start — so the newest thing lands on the oldest thing, and the log holds its size forever without moving anything"
hook_source: user (pre-authored, verbatim; not rewritten)
cta_mechanic: Save ("Save this for system design questions.")
destination: shortform-vertical (TikTok/Reels/Shorts)
aspect: 1080x1920
language: en
length: target 30s (78 words @ 3.24 w/s = 24.1s speech + 6.0s air)
ceiling: 54s
narration: yes
audience: first-week programming learners
identity: bench v2.2 (frame.md = frame-day4.md, inheriting frame-day2.md v2.1)
tranche_badge: UNDER THE HOOD
difficulty: INTERMEDIATE   # [M] from the manifest
carrier: TRUE — Wave A. Proves R2 (the new default rung, 112 pitch, x 100) + the wrap arc, the head
  marker and the overwrite/lost-value exit. Wave B's 38, 39, 43 and 44's strip sizing inherit this.
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"   # documentation only — pass --speed 0.93 to studio voice or you get 0.74
captions: en
music: none
sfx: none
frames: 5
words: 78
grammar: G1 · G2b · G20 wrap ring · G3 · G5   # frame-day4.md § 4 lines 318-349 owns G20; § 1 owns R2
pin: hyperframes@0.8.208
ledger_source: writing/prog-basics/ACCURACY-day4.md § 34   # the only token source for your numbers
---

## Intent

English master of part 34 of `prog-basics` (first part of Day 4 / UNDER THE HOOD). Portrait 1080x1920,
~30s, five frames, faceless explainer: no URL, no footage, every visual invented on the campaign's own
identity. Copy source of record: `writing/prog-basics/pieces/34-circular-buffers.md`.

Read in this order, and no further: `writing/prog-basics/series-bible-day4.md` (all of it), your piece
file, `frame.md` (= frame-day4 v2.2) § 1 for R2 + § 3 + § 4 lines 318-349 + § 6 + § 9, and
`writing/prog-basics/WAVE2-PACKET.md` § 4-9 (the geometry numbers and traps are tranche-independent).
`ACCURACY-day4.md` § 34 for every figure. Open `frame-day2.md` v2.1 only for a section v2.2 says it
inherits and does not restate.

## Resolve these ledger placeholders from ACCURACY-day4.md § 34

The piece file carries `ledger_placeholders: 2`. They resolve to executed output, already measured:

- The four per-step states, verbatim: `A . .` / `A B .` / `A B C` / `D B C` with `head`/`tail`/`count`
  and `evicted: A` on step 4. Probe `probes-day4/p34_circular_buffer.py`.
- The scale claim: `250 writes · 100 slots · len stays 100`.

**B4 binding (user ruling R2):** after the fourth write the physical cells read **`D B C`** in slot
order, while the recency reading is **`B → C → D`**. They differ. Draw `D B C` in the strip with
`head` and `tail` both on slot 1, and put the logical order on a separate line labelled
`oldest → newest`. A strip showing `B C D` is showing something that never happened.

## Carrier duty

You are proving **R2** — the rung five later parts reuse. When you finish, report the settled px for
the cell, the pitch, the first-slot x, the head/tail marker geometry and the wrap arc, plus every
divergence from `frame-day4.md` § 1. Wave B does not start until you do.

## Boundaries

Write only inside this directory. Do not render, publish, or preview-background. Snapshots only.
No BGM, no SFX, no network assets, no font fetches. Gates in order: `studio assemble . --captions` →
`studio verify .` → `npm run check` → `npx hyperframes snapshot --at <each emphasis moment>` → read the
PNGs. Pass `--speed 0.93` to `studio voice` and confirm `--dry` printed `speed=0.93`.

## Deviations

- **GSAP is loaded from `assets/gsap.min.js`, not the CDN** (index.html AND compositions/captions.html).
  The vendored file is GSAP **3.15.0**, md5 `9abb8c3834399a3f6f24f1a79c17a039` — the same copy
  `prog-basics-23/24/27/29/31` vendor, not the pinned 3.14.2. Reason: `cdn.jsdelivr.net` does not
  resolve on this machine (the failure that killed the last run's check), and a network fetch in a
  composition is banned by the render contract anyway. `.hyperframes/caption-skin.html` keeps the CDN
  tag on purpose — frame.md's frontmatter says the Day-2 skin is reused UNCHANGED, and it is the
  writing/ source of truth, not a composition in the render graph. Consequence: **`studio assemble
  --captions` rewrites both tags back to the CDN — re-patch after any re-assembly.** This run did NOT
  re-assemble (the caption lane is already built on the settled cue files; re-assembling risks the lane).
- **The ring is built on R2, not R1.** `frame-day4.md` § 4 G20 says "three R1 cells at lefts 74 / 232 /
  390" and § 1's rung rule says ≤6 cells → R1; this project's carrier duty (BRIEF `carrier:`, § 8's
  Wave-A row) is to prove **R2**. Settled: 96×110 cells at lefts 100 / 212 / 324, top 400. Every G20
  number that derives from R1 geometry is re-derived for R2 (arc endpoints, marker straddle) and
  reported; nothing was invented that R1 could not have produced.
- **`SIZE 3` / `MOVED 0` are in the UPPER tag lane (288) in F3, not G20's lower lane.** G20 puts 34's
  tags low because "the arc owns the upper band" — that is true only of F2, which is the frame that
  draws the arc. F3 has no arc, and its lower lane is taken by `OVERWROTE A`. F2 keeps `WRAPPED 1` in
  the lower lane exactly as G20 says.

## Run log

| when | what | what the gate said |
|---|---|---|
| 2026-11-01 (resume 3) | Fixed the runtime error: `compositions/captions.html` still carried the jsdelivr GSAP tag; now `assets/gsap.min.js` (local 3.15.0, md5 verified against pb-27's identical copy). index.html was already local. No re-assembly (it would restore the CDN tag). | `npm run check` Runtime section: **0 errors, 5 warnings** — all five are the authored-air `clip_media_fit` warnings, expected per the resume brief; the `ERR_NAME_NOT_RESOLVED` runtime failure is gone. |
| 2026-11-01 (resume 3) | Fixed the layout error: `text_occluded #f3-tail inside #f3-b1 "TAIL"` at t=16.445/20.099. Cause = paint order (the TAIL marker sat before the chambers in F3's DOM, so opaque `--panel` chamber b1 covered it). Fix = `z-index: 3` on `.pb-marker` (and the same on `.f2-marker`, so the atom carries the rule instead of the DOM accident) + TAIL raised 370→362 so its own label clears the `B` glyph box while still straddling the cell's top edge. | `npm run check` → **Check passed. Layout 0 errors / 0 warnings / 5 info.** The 4 F4 `text_occluded` infos are the P3 type-on mask and caret mid-sweep (the shipped pb-21/pb-22 atom carries no allow-occlusion attr — left as-is deliberately); the 1 `container_overflow` info is F2's `y: 90` entrance wipe. Contrast 43/43 AA. Lint 0/0, Motion 0/0, Craft 0/0, Audio 0/0. |
| 2026-11-01 (resume 3) | Ran `node studio/tools/studio.mjs verify videos/prog-basics-34-circular-buffers` (step 3). Did NOT re-run `studio assemble` — the caption lane and index are already assembled and re-assembly re-injects the CDN tag; verified `index.html` carries `data-track-kind="captions"` on `#el-captions` by hand. | `✓ prog-basics-34-circular-buffers — 0 high, 0 medium across 7 html files / no known traps detected`. Nothing to clear. |
| 2026-11-01 (resume 3) | Confirmed `meta.json` is NOT required by the pinned CLI 0.8.208 (step 4). Evidence: both `check` and `inspect` resolve and run the project with no meta.json present, and identity lives in `.hyperframes/history-id` + `video-state.json` (`historyId` UUID + per-file hashes), not in meta.json. `inspect` printed the project name from the directory. **Not created.** All four Wave-A Day-4 projects (34/35/36/41) lack it — a scaffold difference from Day 2 (pb-21/22 have it) and Day 3 (27/29 have it), not a defect in this project. If the desktop app later wants a human id, it is a one-line file: `{"id": "prog-basics-34-circular-buffers", "name": "prog-basics-34-circular-buffers", "createdAt": …}`. | `hyperframes inspect` → 0 errors / 0 warnings / 5 info, project resolved without meta.json. |

