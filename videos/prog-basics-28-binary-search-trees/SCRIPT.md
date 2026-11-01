# SCRIPT — prog-basics-28-binary-search-trees (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame.md` v3.0 § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX.

> **STATUS — RECORDED.** `studio voice --dry` on this project resolves `speed=0.93` with the
> `--speed 0.93` flag (the unflagged house lookup still misses, because `.agents/design.md` nests
> `voices:` under `voice:`, so `studio/tools/studio.mjs:117` finds nothing). Packet § 1 requires the
> flag; the dry run printed `speed=0.93` before anything was generated.

**Voice direction:** one person at a whiteboard who has just drawn a tree and is about to make it
count. F1 is a promise, flat and unhurried — the two numbers are the whole hook, so neither gets a
 flourish. F2 splits the user's rule into its two halves and then slows to one short beat per node the
 ring lands on (`eight`, `four`, `three`). F3 says `log n` once, evenly, inside its own hedge, and then
 reads the field: the big numbers get room because they are on screen as they are said. F4 is the proof
 and lands `twenty` on the last row. F5 is read like a list being typed — one number per beat.

**Budget:** 99 spoken words / 5 lines against a ~37s target (`[M]` band 34-42s) and a 54s ceiling.
Real durations come from `studio voice`/`studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.0s (real VO wins)
**Delivery:** Verbatim hook. `a million` and `twenty` are the two numbers the film then proves; say
them evenly and let G14 do the convincing on F3.

    Search a million items in about twenty steps.

## Line 2 — The rule and the search (Frame 2)

**Time:** estimate 10.7s (real VO wins)
**Delivery:** The user's 18-word sentence, split 10 + 9 by `CORRECTIONS-day3.md` § A re-cut 4, so
`at every node` gets its own beat — that is the part's actual rule. Then three short beats, one per
node the ring lands on. The brackets of `t[1][1][0]` are never spelled out: the voice says
`left, then left`.

    A binary search tree keeps smaller values on the left. Larger ones go on the right, at every node. The root is eight. Search for three. Left, then left.

## Line 3 — The field (Frame 3)

**Time:** estimate 11.1s (real VO wins)
**Delivery:** The **one** allowed `log n` in the whole series' hedged sentence — do not paraphrase it
and do not repeat it. Last sentence is the field: read the big numbers slowly, they are on screen as
they are said.

    At each step you discard half the tree. If the tree stays balanced, a lookup takes about log n steps. One million, then five hundred thousand, then down to one.

## Line 4 — The same tree as code (Frame 4)

**Time:** estimate 7.0s (real VO wins)
**Delivery:** Land `three boxes` on the mint terminal output. `twenty` lands while the field's last
rows are still on the board, so the number has something to point at. No `just`, no `simply`.

    Here is that tree as code. It looks at three boxes and stops. That is what twenty means for a million.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 4.8s (real VO wins)
**Delivery:** Verbatim CTA. Read the numbers as a list being typed, one per beat. The shape is the
answer, so nothing on screen shows it.

    What happens if you insert 1, 2, 3, 4, 5 in that order?

---

## Word count and rate check

| Line | Words | Est. seconds @ 3.24 | Est. @ 2.7 |
|---|---|---|---|
| 1 | 8 | 2.5 | 3.0 |
| 2 | 29 | 8.9 | 10.7 |
| 3 | 30 | 9.3 | 11.1 |
| 4 | 19 | 5.9 | 7.0 |
| 5 | 13 | 4.0 | 4.8 |
| **total** | **99** | **30.6 speech** | **36.6 speech** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ 36.6s → 42.6s film depending on rate. `[M]` band is
34-42s; the measurement wins and nothing is padded or cut to fit (bible § 0.3).

## Clarity and accuracy notes for this part

Lines 1 and 5 are the user's words, verbatim. Lines 2-4 carry the `CORRECTIONS-day3.md` § A re-cut 4
and nothing else; no term, keyword, hook, CTA mechanic or technical claim was changed in this run.

- **Glosses, all in the frame where the term appears** (bible § 2): `node` → the five boxes on F2 and
  the `NODE` role of the tree; `smaller` / `larger` → the `SMALLER` / `LARGER` mono chips at the elbow
  up-stubs, landing on the same breath as the words; `root` → the root node's `ROOT` name tab;
  `balanced` → the field's constant 33px step (F3) and the quiz itself (F5); `insert` → the five number
  chips on F5, which is where the word gets its object.
- **Notation law** (bible § 0.2, `frame.md` § 7.2): `log n` is spoken exactly once, on F3, inside the
  user's own hedge. Nothing on any frame shows `O(`, `log n`, or a bare `n`. The screen shows
  `STEPS 3`, `STEPS 20`, `LOG SCALE`, `FLOOR` instead.
- **Counted pair** (bible § 4b): `STEPS` always counts **nodes visited**, never turns; the two left
  turns are two arrowheads and carry no number. F2 reads `STEPS 3`, F3/F4 read `STEPS 20` — the two
  counts never share a frame.
- **Forms** (`frame.md` § 7.3): F4's chamber is Python executed on this machine (nested tuples printing
  `8`, `4`, `3`), each line tagged with the diagram word it stands for. `SMALLER`/`LARGER`/`ROOT`/
  `LOG SCALE`/`FLOOR`/`PYTHON` are diagram plate labels and chips, never chamber code.
- **Zero coral** (`frame.md` § 7.1): `KeyError`/`AttributeError` raise nothing here, so `--err` appears
  nowhere in this film.
- **"Traverse" and "iterate" appear nowhere.** No em-dash on screen, no "not X, it's Y" (rationed to
  part 05), no three-item list (this part has none), no BGM, no SFX, no network asset.
