# Programming Basics — Series Bible, DAY 4 (parts 34-44 · UNDER THE HOOD)

Campaign: `prog-basics` · tranche: **Day 4 / ADVANCED STRUCTURES AND BIG O** · parts
`videos/prog-basics-34-circular-buffers/` … `videos/prog-basics-44-bubble-sort/`. Written layer:
`writing/prog-basics/pieces/34-*.md` … `44-*.md`. English only in this run (Syrian Arabic deferred by
the user). Worker packet: this file + `WAVE2-PACKET.md` § 1-11 (the traps are tranche-independent).

**Inherits `series-bible-day2.md` in full except where this file names an override.** Nothing here
re-argues audience, register, the five-frame shape, the ceiling, the caption skin, or the production
line. Day 1's and Day 2's bibles, `frame.md` v2, `frame-day2.md` v2.1, `caption-skin-day2.html` and
every `videos/prog-basics-01..22/` project are **read-only**: their renders are proof of their own
sources (known-traps § 15).

Visual authority for this tranche is **`frame-day4.md` v2.2** — copy it into each project as
`frame.md`, together with `frame-day2.md` v2.1, whose sections it inherits rather than restates. Where
the two disagree, v2.2 wins for parts 34-44.

---

## 0. What is decided, and what the user ruled at the gate

The eleven hooks, explanations, examples and CTA mechanics are pre-authored in
`150 Dev Shorts 14-Day Production Plan and Scripts (EN + Syrian Arabic).md` **lines 568-645**.
`content-strategy`, `marketing-ideas`, `marketing-council` and the angle pass of `copywriting` are
**not** run: there is nothing to choose. Same treatment as Day 1 § 0, Day 2 § 0 and Day 3 § 0.

Four rulings, made by the user on 2026-11-01, recorded here so no builder reopens them:

| # | ruling | consequence for a builder |
|---|---|---|
| R1 | **All six claim fixes A1-A6 are approved** and land in the spoken lines (parts 35, 36, 39, 41, 42, 44). | Your piece file's narration table already carries the corrected wording. Use it verbatim. `accuracy: pending-ledger` is retired. |
| R2 | **All fourteen screen constraints B1-B14 are binding.** | Plate text, cell states, probe counts and notation surfaces follow B, not your reading of the script. |
| R3 | **Part 42 keeps the squares example and prints BYTES ONLY.** | `92,952 bytes` vs `0 extra bytes`, labelled `Python 3.13`. No stopwatch, no timed race, no `ns` figures on screen in 42. |
| R4 | **Render gate: 11 draft MP4s, run sequentially, after the waves report.** | Builders never render. See § 6. |

**Badge for this tranche is `UNDER THE HOOD`** (`frame-day4.md` § 7), chosen over `BASICS IV` because
Day 3's ordinal is unconfirmed and a name cannot collide. Kicker:
`PROGRAMMING BASICS · UNDER THE HOOD · NN`. It is chrome, never spoken. A user override to `THE COST`
or an ordinal is a one-line sweep before the first render — **a builder never decides this locally.**

## 1. The ledger, and why this file does not copy it

`frame-day4.md` § 11.5 required a Day 4 ledger holding every counted number as executed output with
its probe path. That ledger **is `ACCURACY-day4.md`** (531 lines, 70 claims, Python 3.13.15 /
node v24.15.0, 12 re-runnable probes in `probes-day4/`).

**`ACCURACY-day4.md` § 2 is the single token source for every number and printed string in parts
34-44.** This bible deliberately does not restate those values. A second copy of a number is how this
workspace got three divergent cue-merge scripts and four hand-patched caption lanes. If you need a
figure, go read its row, and cite the probe path in your `BRIEF.md`.

- A number that is not in `ACCURACY-day4.md` § 2 **does not go on screen.** Run it
  (`C:/Users/AmrPC/AppData/Local/Programs/Python/Python313/python.exe` or node), add the row there,
  then use it. Say you did.
- `ACCURACY-day4.md` § 4 is the **CANNOT-SHOW register**: six claims with no local evidence. Those get
  a name or a chip, never a chamber with output, never a number. Notably 37's wall-clock pair and
  38's `hash(...)`.
- § 3 of that file is the **notation table**. It is tranche law and it **supersedes any
  `notation:` line in a piece file's frontmatter** that predates it — 44 is the known case (its
  frontmatter said BANNED; the table allows `O(n²)` / `O(n log n)` on the slow/fast plate).

## 2. Per-part map, with the section each worker actually reads

`frame-day4.md` § 4 owns G16-G27. The `grammar:` line in a piece file was written against Day 2's ids
and is a **sketch**; the family list below is the settled assignment. Read only your own family block.

| part | project | badge | wave | new family you must build | reused Day-2 atoms | `frame-day4.md` § 4 lines |
|---|---|---|---|---|---|---|
| 34 Circular buffers | `prog-basics-34-circular-buffers` | M · Save | **A carrier** | **G20** wrap ring · **R2** rung | G2b row, G3, G5 | 318-349 · § 1 for R2 |
| 35 Bloom filters | `prog-basics-35-bloom-filters` | M · Myth | **A carrier** | **G18** bit array (**R3**) · **G19** hash fan | G2b cells, G5 | 249-317 |
| 36 LRU cache | `prog-basics-36-lru-cache` | M · Quiz | **A carrier** | **G21** recency chain | G7 node chain, G4 split, G5 | 350-380 |
| 41 Big O notation | `prog-basics-41-big-o-notation` | B · Save | **A carrier** | **G16** curves · the fixed-px SVG canvas · notation tokens | G1 hook, G2b bars, G5 | 186-220 · § 3.3 · § 5 |
| 38 Hash collisions | `prog-basics-38-hash-collisions` | M · Quiz | **B carrier** | **G22** bucket chain (R2b) | 34's strip, G7 mini chain, pb-11 walk | 381-407 |
| 42 Time vs space | `prog-basics-42-time-vs-space` | B · Debate | **B carrier** | **G17** balance | G8 chrome, G3 cutaway, 16's chips | 221-248 · § 3 |
| 43 Binary search | `prog-basics-43-binary-search` | B · Challenge | **B carrier** | **G24** range bracket | R2 row, G2b trace, pb-13 marker | 445-486 |
| 37 Array vs linked list | `prog-basics-37-array-vs-linked-list` | B · Debate | C clone | **G26** stacked comparison (positions only) | pb-21 R1 row, pb-22 chain, 34 strip, 41/42 notation chip | 520-545 |
| 39 Dynamic arrays | `prog-basics-39-dynamic-arrays` | M · Save | C clone | none new | 34's R2 ×2, pb-21 shift law, P2 drop-in | 408-444 |
| 40 Tuples vs lists | `prog-basics-40-tuples-vs-lists` | B · Quiz | C clone | one 3-border shackle (**G27** lock) | pb-16 G4 split, v2.1 § 4 border law | 546-577 |
| 44 Bubble sort | `prog-basics-44-bubble-sort` | B · Myth | C clone | compare bracket (**G25**) | pb-21 R1 row exactly, pb-22 stillness | 487-519 |

Difficulty comes from the manifest tags, never invented: `[B]` = BEGINNER, `[M]` = INTERMEDIATE.
Word budgets and per-frame counts live in each piece file. **Over 91 spoken words is a gate item, not
a rewrite** — report it, the owner decides.

## 3. Wave gates — the reason eleven agents must not all start at once

`frame-day4.md` § 8 settles three waves, and this is the one place it is restated because it governs
**when you are allowed to start**. Eleven new families in eleven parts means a wrong rung is paid for
eleven times. Day 3 shipped eleven workers with no carrier wave and accepted the rework; Day 4 does
not, because **R2 and the fixed-px SVG canvas each appear in five parts**, so paying for them once is
enough.

- **Wave A (41, 34, 35, 36)** proves the four mechanisms: the SVG canvas + notation, R2 + the wrap
  arc, R3 + the angled fan, the promotion reorder + eviction. **Nothing else starts until their frames
  have been snapshot-READ** — not `check`-passed. `frame-day4.md` § 14's defects were all invisible to
  `check`.
- **Wave B (38, 42, 43)** proves composition laws on A's atoms.
- **Wave C (37, 39, 40, 44)** are clone jobs.
- A Wave B/C worker who finds a number in `frame-day4.md` that does not survive their own snapshot
  **reports it and stops.** A private variant is how eleven films become eleven looks.
- Between waves, the campaign owner folds the carriers' settled px into `frame-day4.md` § 4 and bumps
  its version. Workers do not edit that file.

## 4. Runtime and voice law (the trap that is still live)

`studio voice <dir> --speed 0.93` — **always the flag.** `studio.mjs:113` reads
`house[\`voices.${lang}\`]` while `.agents/design.md` nests the map at `voice.voices.en`, so the house
lookup still misses and an unflagged run silently speaks at **0.74**. `--dry` must print `speed=0.93`
before any audio is accepted. `voice_speed:` in `BRIEF.md` is documentation only.

Measured rate at 0.93 is **3.24 words/second** → spoken budget 75-91 words for a 29-34s film, with
6.0s authored air (1.0s on F1-F4, 2.0s on F5). Under 29s: grow F5's pad, then merge two beats that
carry one idea. **Never add narration.** Voice is Kokoro `af_heart`, provider pinned `kokoro`, offline
and free. No BGM. No SFX.

`SCRIPT.md` headings are exactly `## Line N — Title (Frame N)`, and `audio_meta.json` must have 5
lines. pb-22 wrote `## Line 3 — Walk (Frame 3, two beats)` and lost a fifth of the film silently.
After `studio voice`, diff line count against frame count before authoring anything.

Frame durations come from the measured `audio_meta.json` plus authored air in `STORYBOARD.md`. Never
hand-write a duration table.

## 5. Colour, in absolute terms (`frame-day4.md` § 6)

**Coral (`--err`) is legitimate in exactly one part of this tranche: 40.** Both of its TypeErrors were
executed on this machine. **34, 35, 36, 37, 38, 39, 41, 42, 43, 44 ship with zero coral** — the
overwrite in 34, the eviction in 36 and the collision in 38 are the design, not errors, and 43's
`IndexError` must not be shown. Amber is one arrival per beat, never two highlight plates behind text
at once. Mint never decorates. `--stroke` is for a lone line. No new hue enters.

## 6. Boundaries for every Day 4 worker

Write **only** inside your own `videos/prog-basics-NN-<slug>/`. Never touch another project (others
build concurrently), `writing/**`, `studio/**`, `.agents/**`, or another tranche's `frame.md`/bible.

- **Do NOT render, publish, or schedule. No MP4.** Rendering is the owner's sequential step after the
  waves report (R4), and only through `studio render <dir> --quality draft --yes`.
- **Do not run `preview --background`** (parallel workers). Snapshots only:
  `npx hyperframes snapshot --at <moment>`.
- No BGM, no SFX, no network assets, no font fetches. Every `@font-face` names a woff2 you actually
  copied into `assets/fonts/` (Space Grotesk 400/700, JetBrains Mono 400/700).
- Gates, in order: `studio assemble <dir> --captions` (never hand-assemble) → `studio verify <dir>` →
  `npm run check` → snapshots → **then read the PNGs.** `line_unread` warnings are real. A crash with
  exit `3221226505` is a known process flake: re-run `npm run check` once before treating it as a
  finding.
- Everything in `WAVE2-PACKET.md` § 4-9 still binds (chamber colours, connector-as-CSS-div, ligature
  kill, marker straddling, composition contract, the AI-tell blacklist). Day 4's exceptions to Day 2
  are only those `frame-day4.md` names: diagonals under § 3's two laws, and notation under § 5.
- **Day 3 is a reference for lane positions, never a clone source.** Its tree, bucket and pile sizes
  are unproven — it shipped without a carrier wave.

## 7. Report back, under 400 words

1. Measured per-frame durations + total film, and whether it is under 29s.
2. The exact `speed=` line your voice run printed, and `audio_meta.json`'s line count.
3. `studio verify` high/medium counts and what you did about each, plus the verbatim `npm run check` summary.
4. What you actually SAW in the snapshots at each emphasis moment; name anything outside 230→1004.
5. **Your settled px in writing** — every number your frames landed on, every divergence from
   `frame-day4.md`, every atom the next wave inherits. This is what unlocks Wave B.
6. Every deviation from your piece file, confirmed present in your `BRIEF.md` Deviations section.
7. Anything the next builder should know that you found the hard way.

## 8. Queued, not authorized

- Syrian Arabic masters for 34-44 (deferred by the user at the start of this run).
- Parts 23-33 (Day 3): **corrected 2026-11-01 19:50.** An earlier line in this file said no Day 3
  project had ever been scaffolded. That was true at 17:20 and is now false: `videos/prog-basics-23-stacks/`
  … `32-priority-queues/` exist and sit at the `assembled` stage with 5 frames and voiceovers each,
  written between 17:40 and 19:17 by a session **outside this orchestration**. Part 33 is not present
  yet. Day 4's builders do not read, clone or touch those directories — `frame-day4.md` § 10 keeps Day 3
  as a lane-position reference only, because it shipped without a carrier wave.
- Distribution set for Day 4 (captions, hashtags, pinned comments — `ACCURACY-day4.md` already holds
  the pinned answers for 35, 36, 40, 41, 43) — stage 5, after render.
- The Learnings row proposed in `CORRECTIONS-day4.md` § E: **the probe is as likely to be wrong as the
  script** (two false findings appeared in one Day-4 pass). Needs user approval and a version bump.
- A second Learnings row, from the angle pass: **`CORRECTIONS` replacement strings are drafted in prose,
  not in campaign copy law.** Four of the six approved Day-4 A-strings carried em-dashes, colons or
  over-length sentences and had to be rewritten before they could enter narration. State corrections as
  compliant strings at authoring time. Also needs user approval and a version bump.

## 9. Run state (2026-11-01, live — the crash-recovery record)

This section exists because a shutdown already cost one Day-4 run. Update it at each wave boundary.

| item | state |
|---|---|
| Gate rulings R1-R4 | **made and applied** (§ 0). Not to be reopened by a builder. |
| Narration A1-A6 | **landed** in `35, 36, 39, 41, 42, 44`; each file carries `## Approved edits` and `accuracy: approved`. Final counts: 35 = 81w/31.0s · 36 = 81w/31.0s · 39 = 88w/33.2s · 41 = 85w/32.2s · 42 = 80w/30.7s · 44 = 84w/31.9s. All inside 75-91 words. Hooks and CTAs byte-identical. |
| Screen constraints B1-B14 | **binding**, held in `ACCURACY-day4.md` + `CORRECTIONS-day4.md` § B. Not copied here. |
| Wave A projects | `34, 35, 36, 41` scaffolded + `BRIEF.md` authored. **Building now**, to the pre-render gate. |
| Wave B/C projects | **Not scaffolded yet, deliberately.** They must be scaffolded from the *post-carrier* `frame-day4.md`, so their `frame.md` carries the settled px. Scaffolding early ships seven projects on unproven numbers. |
| Stale piece-file lines a builder will meet | `grammar:` values use Day-2 ids (superseded by § 2 above); `accuracy: pending-ledger` still stands in `34, 37, 38, 40, 43` only because the angle pass touched just the six A-files — `ACCURACY-day4.md` § 2 is authoritative for those five; 35's piece file once planned a six-cell `BITS 0 OF 6` row, which **G18 / R3 (16 bits, two lanes of 8) supersedes**. |
| Open, non-blocking | Part 39 at pb-13's slow measured rate (3.04 w/s) is 34.9s — over the 34s target, far under the 54s ceiling, no trim lever left without touching A4, the hook or the CTA. Reported, not cut. |
| Badge | `UNDER THE HOOD` per § 0. A user override to `THE COST` or an ordinal is a pre-render sweep. |
