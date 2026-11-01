# SCRIPT — prog-basics-30-graphs (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame-day3.md` § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). The `--speed 0.93` flag is passed explicitly because the
house lookup misses (`.agents/design.md` nests `voices:` under `voice:`, so `voices.en` resolves to
nothing and an unflagged run speaks at 0.74). ElevenLabs is unusable on this machine (empty `voice_id`,
HTTP 402 on free-tier keys) and was not substituted. HeyGen not used. No BGM, no SFX.

**Voice direction:** one person at a whiteboard, putting three dots down and joining them. F1 is read
**flat** — the three-item enumeration is the subject, not a build-up. F2 slows on the two gloss
sentences because the screen is tagging the objects as they are named. F3 turns: two user sentences at
example pace, then the danger in two short beats, and `never stops` lands on a counter that is still
climbing when the frame cuts — do not resolve it. F4 is the calm fix, one clause per number. F5 is a
question asked of the viewer, not a tag line.

**Budget:** 88 spoken words / 5 lines against a ~33s `[B]`-band target and a 54s ceiling.
Real durations come from `studio voice`'s measurement plus authored air and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.7s (real VO wins)
**Delivery:** Verbatim. Read the three items at the same pitch; the point is that they are one object,
so nothing gets a comedic bump. `same structure` is the only thing the screen highlights.

    Maps, friendships, and the internet are all the same structure.

## Line 2 — Nodes and edges (Frame 2)

**Time:** estimate 9.6s (real VO wins)
**Delivery:** The user's two sentences (7 and 6 words) carry the definition and the two extras; the
third and fourth sentences are the gloss law doing its job — say them slower and plainer, because the
`NODE` tab lands on a chamber as "a node is a thing" is said, and each `EDGE` chip lights as its own
bar draws. `weights` is plural and flat: the `WEIGHT 7` chip is the gloss, not a footnote.

    A graph is nodes connected by edges. Edges can have direction or weights. A node is a thing.
    An edge is a line to another thing.

## Line 3 — Where it can lead back (Frame 3)

**Time:** estimate 11.5s (real VO wins)
**Delivery:** Two user sentences first, at example pace — the three `WHERE` chips pop as each is named,
and `DIRECT 2` / `VIA B 11` are already on the board when the second sentence says *best route*. Then
the danger, in two of my own short beats: `But an edge can lead back where you started` is the cycle
closing, and `Then walking never stops` is said over a ring that is still going with the counter past
6. Do not slow down for the punch; the counter does the work.

    Social networks, road maps, and the web are graphs. Most 'find the best route' problems are graph
    problems. But an edge can lead back where you started. Then walking never stops.

## Line 4 — Three nodes, three edges (Frame 4)

**Time:** estimate 4.4s (real VO wins)
**Delivery:** The proof. `Three nodes, three edges` lands on the two counted chips while the chamber is
typing. The second sentence is the fix stated as a memory, not as code vocabulary — the words "visited
set" are never spoken; three `SEEN` tabs and the ring stopping at 3 say it. Land `familiar` on the
third tab.

    Three nodes, three edges. The walk stops when a node looks familiar.

## Line 5 — The ask (Frame 5)

**Time:** estimate 3.3s (real VO wins)
**Delivery:** Verbatim CTA, Debate mechanic. Ask it and stop; the `COMMENT` plate carries the verb so
the sentence stays exactly the user's.

    Name something in daily life that's secretly a graph.

---

## Word count and rate check

| Line | Frame | Words | Est @3.24 w/s | Est @2.7 w/s |
|---|---|---|---|---|
| 1 | F1 | 10 | 3.1 | 3.7 |
| 2 | F2 | 26 | 8.0 | 9.6 |
| 3 | F3 | 31 | 9.6 | 11.5 |
| 4 | F4 | 12 | 3.7 | 4.4 |
| 5 | F5 | 9 | 2.8 | 3.3 |
| **total** | | **88** | **27.2 speech** | **32.5 speech** |

Plus authored air (~1.0s per frame, ~2.0s on F5 ≈ 6.0s) → **~33s** at the planning rate, **~38.6s** at
the slow rate. Day 3 is the tranche's most number-heavy and 30 says three digits in F2 alone, so both
ends of the band were planned for; the measured `audio_meta.json` decides, and the result is reported
rather than adjusted. No word was added to fill or trimmed to fit.

## Clarity pass (what changed from the piece's briefed copy, and what did not)

Line 1 (the hook) and line 5 (the CTA question) are the user's words, verbatim. Lines 2-4 are the
piece file's final narration table, unchanged except that F2's third sentence is delivered with a full
stop where the piece wrote a semicolon — every word kept, no re-cut of the writer's sentence
(`BRIEF.md` → Deviations). Nothing in `CORRECTIONS-day3.md` § A re-cut 30's explain lines: its four
sentences are 7, 6, 9 and 9 words and all pass the ≤14-word / ≤2-clause law, and the two authored beats
in Line 3 follow Day 1/Day 2 precedent for example narration (pb-21's "Nums is ten, twenty, thirty").

Glosses, all present in the frame the term appears: `node` → a mono `NODE` tab on each chamber;
`edge` → a mono `EDGE` chip at each bar's midpoint; `direction` → one chevron lighting at a bar's far
end, plus the executed `False` in F4's chamber (B does not know about A); `weight` → a `--panel-2` chip
carrying a mint digit at `A→B`'s midpoint; `walk` → the ring travelling while the nodes hold still,
with `WALKED` counting; the memory that stops it → three `SEEN` tabs, one per node. **Neither
"traverse" nor "iterate" appears anywhere in this part** (bible-day3 § 2), and **no Big-O notation is
spoken or shown** (§ 7.2) — the counted pair `EDGES 3` / `WALKED 12` is the notation. No sentence over
14 words, no semicolons, no trailing relative clauses, no em-dashes on screen, no "it's not X, it's Y"
(rationed to part 05), no "simply/just/easy/of course/clearly/quick tip", no coral (Day 3 raises
nothing).

**Spoken code:** `edges['A']` → "A's neighbours"; `['B', 'C']` → "B and C"; `False` → "false", said as
a fact about direction and never as an error; `A → B` → "A to B". The chamber's Python is read by the
eye; the voice describes what it proves rather than dictating brackets.
