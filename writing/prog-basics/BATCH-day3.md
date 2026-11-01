# prog-basics — BATCH MANIFEST, DAY 3 (parts 23-33 · STRUCTURES)

Campaign: `prog-basics` · shared truth: `writing/prog-basics/series-bible-day3.md` · video design layer:
`writing/prog-basics/frame-day3.md` (v3.0) · change log: `writing/prog-basics/CORRECTIONS-day3.md` ·
worker packet: `writing/prog-basics/WAVE3-PACKET.md` · accuracy: bible § 4 (executed 2026-11-01).

Format: portrait 1080x1920 short-form video, **EN master only** (Arabic lines 485-563 of the plan are
queued, not authorized), Kokoro `af_heart` @ **0.93** — which must be **passed explicitly as
`--speed 0.93`**, because `studio voice`'s house lookup misses the nested `voice.voices.en` key and would
silently run 0.74. Burned word-level captions, no BGM, no SFX, no network assets. Written layer (script,
on-screen text, cover, caption/hashtags, pinned comment) lives in `pieces/NN-<slug>.md` and is the source
of record per part.

Runtime: **two bands** (bible § 0.3) — `[B]` 23/24/25/26/27/30 hold **29-34s**; `[M]` 28/29/31/32/33 are
allowed **34-42s**. Ceiling 54s. Under 30s is **reported, not filled**; nothing is ever padded with words.
All eleven parts are digit-heavy, so the 3.24 w/s planning average sits at the slow end in practice —
the measured `audio_meta.json` always wins.

Pin: **`hyperframes@0.8.226`** for all eleven (Day 2 shipped 0.8.208; `studio doctor` resolves 0.8.226).
`series: prog-basics` in every `BRIEF.md`.

## The 11

`order` is the publish sequence from bible § 5, chosen pair by pair so no two adjacent parts share a
mechanic and no two adjacent parts share a tree shape. **`id` and the badge number never move.** The one
accepted repeat is 32 → 29 (both heap-family, slots 9-10), named rather than hidden.

| order | id | title | [B]/[M] | mechanic | mode | grammar | slug | project | piece |
|---|---|---|---|---|---|---|---|---|---|
| 1 | pb-23 | Stacks (LIFO) | B | Quiz | code card | G1 **G9-pile** (from G6) G3 G5 | `stacks` | `videos/prog-basics-23-stacks/` | `pieces/23-stacks.md` |
| 2 | **pb-26** | Sets | B | Challenge | **direct address** | **G8 + G10-probe** | `sets` | `videos/prog-basics-26-sets/` | `pieces/26-sets.md` |
| 3 | pb-24 | Queues (FIFO) | B | Tag | code card | G1 **G9-line** (on G7) G3 G5 | `queues` | `videos/prog-basics-24-queues/` | `pieces/24-queues.md` |
| 4 | **pb-27** | Trees | B | Quiz | code card | G1 **G11 (draws it)** G5 | `trees` | `videos/prog-basics-27-trees/` | `pieces/27-trees.md` |
| 5 | pb-25 | Hash maps / dictionaries | B | Save | code card | G1 G2b **G10-jump** G3 G5 | `hash-maps` | `videos/prog-basics-25-hash-maps/` | `pieces/25-hash-maps.md` |
| 6 | pb-28 | Binary search trees | M | Quiz | code card | **G11-bind + G14** G3 G5 | `binary-search-trees` | `videos/prog-basics-28-binary-search-trees/` | `pieces/28-binary-search-trees.md` |
| 7 | pb-30 | Graphs | B | Debate | code card | G1 **G12** G3 G5 | `graphs` | `videos/prog-basics-30-graphs/` | `pieces/30-graphs.md` |
| 8 | **pb-31** | Tries | M | Quiz | **direct address** | **G8 + G11-bind** | `tries` | `videos/prog-basics-31-tries/` | `pieces/31-tries.md` |
| 9 | pb-32 | Priority queues | M | Debate | code card | G1 **G15** (on G11) G5 | `priority-queues` | `videos/prog-basics-32-priority-queues/` | `pieces/32-priority-queues.md` |
| 10 | pb-29 | Heaps | M | Save | code card | **G11-bind** array↔tree G3 G5 | `heaps` | `videos/prog-basics-29-heaps/` | `pieces/29-heaps.md` |
| 11 | pb-33 | Doubly linked lists | M | Save | code card | G1 **G13** (on G7) G3 G5 | `doubly-linked-lists` | `videos/prog-basics-33-doubly-linked-lists/` | `pieces/33-doubly-linked-lists.md` |

**There is no carrier wave** (bible § 0.1, § 6 rule 1 — the user traded rework risk for all-eleven-at-once).
Seven new marks G9-G15 are fully derived in `frame-day3.md` § 6 before any worker started. A worker whose
mark fails its own pixels **reports and stops on that frame**; a silent variant is how eleven films become
eleven looks. pb-27 is the G11 authority — 28, 29, 31 bind to that geometry instead of waiting on files
that are being written concurrently.

Reused, not rebuilt: G6 chambers → 23 · G7 node chain → 24, 33 · pb-03/pb-21 row of boxes → 25, 26 ·
**pb-14's G8 chrome copied verbatim → 26, 31** · 29's tree → 32's F2 (callback).

## Tranche-wide gates (bible § 4c, § 0.2, § 4a/4d)

- **Zero coral.** `--err` `#FF6B5A` means "an error this interpreter raised on this frame", and none of the
  user's eleven examples is a failure path. Every real error in the § 4 ledger (`KeyError`, `IndexError`,
  `AttributeError`, `TypeError`, the dict-tie crash) is pinned-comment/reply-thread only. A coral pixel in
  a Day 3 render is a finding, not a taste disagreement.
- **No Big-O notation on any screen, ever.** Voice may say "log n" at most once, and only in 28 and 29,
  inside the user's hedged sentence. The frame shows the counted walk. Does not carry to Day 4.
- **Chamber / diagram / chip discipline.** A `PYTHON` chamber may only show code executed on this machine
  (`stack.append(1)` + a mono `# push` tag), never the user's pseudocode API; `⇄` is a diagram glyph, not
  code; anything unexecutable (folders, DOM, org charts, Dijkstra, CPython's cache internals) is a chip.
  **No `hash(...)` value may ever appear on screen** — string hashes are randomised per process.
- **One counted pair per part, convention locked in § 4b.** `STEPS` counts nodes visited, never turns;
  24's marker travels while boxes never slide; 23's three-push CTA case is pinned-comment only.

## Stage board

Real state is on disk, not in this table. Refresh with `node studio/tools/studio.mjs status --sync` before
acting on any row; **a green cell means "not yet looked at"** (Day 1 § 12 rule 7). `wip` = a worker owns it.

| id | brief | script | storyboard | voice @0.93 | cues | frames | assemble | verify | check | snapshot | render | copy pack |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| pb-23 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-24 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-25 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-26 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-27 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-28 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-29 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-30 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-31 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-32 | wip | wip | wip | wip | wip | wip | – | – | – | – | – | – |
| pb-33 | held (worker slot) | – | – | – | – | – | – | – | – | – | – | – |

## Run record — 2026-11-01

Resumed after an accidental machine shutdown mid-tranche. **What survived the shutdown is the entire
written layer**: `series-bible-day3.md`, `frame-day3.md` v3.0 (G9-G15 fully derived), `CORRECTIONS-day3.md`,
the § 4 accuracy ledger (executed on this machine), and `pieces/23..33.md`. **Nothing in `videos/` existed
for 23-33** — `studio status --sync` walked 39 projects and showed all 22 prog-basics parts rendered,
so Day 1 and Day 2 are untouched and read-only. `WAVE3-PACKET.md` and this manifest were the two dispatcher
artifacts the plan named and the shutdown left unwritten; both now exist.

Dispatcher decisions taken on resume:
1. Concurrency capped at 10 per the user's instruction, so **pb-33 waits for the first freed slot** rather
   than starting late-by-omission. The tranche's no-carrier rule is otherwise honoured exactly.
2. Gate walk is scoped `--projects pb-23..33`, **not `--campaign prog-basics`** as bible § 6 rule 5 says —
   a campaign walk runs `cues`/`assemble` against Day 1/Day 2's rendered sources, and their renders are
   proof of their own bytes (known-traps § 15). Scoping to the 11 is the conservative read of the same rule.
3. Rendering is sequential and dispatcher-owned at `--quality delivery` (matches Day 2), after every worker
   reports; workers were forbidden to render.

## Worker survivability — measured 2026-11-01, not inferred

**A full 5-frame build overruns this harness's agent window.** Three workers died, all on
service/network faults and none on a composition fault:

| worker | died at | tokens | tool uses | disk state at death |
|---|---|---|---|---|
| build-24-queues | 93 min | 16.3M | 68 | 5 frames, 5 wavs, word-timed, **assembled** |
| build-28-bst | 98 min | 18.1M | 65 | 5 frames, 5 wavs, word-timed, **not assembled** |
| build-23-stacks | 100 min | 20.1M | 65 | 5 frames, 5 wavs, word-timed, **assembled** |

Deaths cluster at 93-100 minutes, so the ceiling is a duration limit, not flakiness. The mitigation is
**not** shorter builds — it is that `voice` → `cues` → `assemble` → `verify` → `check` → snapshots are a
cheap, resumable tail, so a **finisher dispatched into the dead worker's slot recovers ~20M tokens of
authored work** instead of re-authoring it. Three finishers ran that way. Every worker from here on is
told to **checkpoint into `BRIEF.md` as it goes**, which is what made the recovery possible: the dispatcher
read `frames=`, `wavs=`, `captionlane=` and last-write time off disk and knew exactly where each build
stopped without reading a transcript.

Consequence for Day 4: **author in two dispatches per project** (frames, then gates), or split frame
authoring one worker per frame as AGENTS.md rule 3 originally said. A single per-project worker is
reliably too big for the window.

## Not authorized

Publish or schedule of any kind · the Arabic pass for either tranche · blog variants · BGM/SFX ·
any media-use or network asset call · Day 4 topics (34+) · any edit to a Day 1 or Day 2 project, bible,
`frame.md`, or render · `.agents/product-marketing.md` version bump (proposed rows sit in
`LEARNINGS-PROPOSALS.md`).

**Observed, not acted on:** a **separate Day 4 session is building concurrently** on this machine —
`videos/prog-basics-34-circular-buffers/` (assembled), `35-bloom-filters`, `36-lru-cache`,
`41-big-o-notation` appeared at 17:29-18:42 with `part: NN of 44` briefs and a `frame.md` v2.2
"UNDER THE HOOD" tranche derived from `frame-day2.md` v2.1. That is outside this run's scope and nothing
here wrote to those directories; every Day 3 worker is explicitly fenced off them. It is recorded because
`studio status` now walks Day 3 *and* Day 4 projects, so any future gate walk must stay scoped by project
list — `--all` or `--campaign prog-basics` would `assemble` over another live session's in-flight files.
Note also that Day 4's build started from `frame-day2.md`, not `frame-day4.md`, and that bible § 0.2's
"log n" allowance **does not carry into Day 4** without a new decision.
