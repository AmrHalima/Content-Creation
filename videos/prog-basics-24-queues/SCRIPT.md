# SCRIPT — prog-basics-24-queues (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame-day3.md` § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` `voice_id` empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX.

**Budget:** 82 spoken words / 5 lines against a ~31s projection and a 54s ceiling; band `[B]` 29-34s.
Real durations come from `studio voice` + `studio cues` and win.

**Voice direction:** one person at a whiteboard, laying boxes on a line and then taking the first one
off. F1's triad is read flat — it is a list of places, not three jokes — and the emphasis falls on
`one of these`. F2 slows for the gloss ("like a line at a coffee shop") and then names the two ends
evenly, because the two chips land as the words land. F3's first two sentences are the promise; the
example is the proof, and it **slows to a stop on `gives A`** — the leftmost node leaves, the others
hold. F4 is three short, flat sentences. F5 is a request, not a punchline.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 4.7s (real VO wins)
**Delivery:** Even across the three groups, then a small lift onto `one of these`. No smile on the
triad. Verbatim hook.

    Every printer, call center, and message app runs on one of these.

## Line 2 — First in, first out (Frame 2)

**Time:** estimate 9.9s (real VO wins)
**Delivery:** The gloss is the user's own; keep it inside the same breath as the definition. `back` and
`front` each land on their chip, so they get equal weight and no flourish. The four nodes arrive one per
clause, so the sentence must not run ahead of them.

    A queue is first in, first out, like a line at a coffee shop. You enqueue at the back and dequeue from the front.

## Line 3 — The line holds (Frame 3)

**Time:** estimate 10.3s (real VO wins)
**Delivery:** Two re-cut beats first (the promise), then the example. `Enqueue A` and `enqueue B` are
named, not performed twice. Slow down on the last four words — `dequeue gives A` — because that is where
the node leaves and nothing else moves.

    It keeps things fair and in order. That is the right shape for tasks waiting their turn. Enqueue A, enqueue B, then dequeue gives A.

## Line 4 — Use a deque (Frame 4)

**Time:** estimate 5.8s (real VO wins)
**Delivery:** Three short sentences, no connective tissue between them. Say `deque` as *deck* (the
`DEQUE` chip is on the frame so nobody has to spell it) and `popleft` as one word — it is one
identifier, never "pop left". Land `the front` on the mint stdout letter.

    In Python, use a deque. Append to the right. Popleft takes the front.

## Line 5 — The ask (Frame 5)

**Time:** estimate 4.5s (real VO wins)
**Delivery:** Verbatim CTA. Read it to a person, not to the camera. Nothing is added to the question and
the plate carries the verb.

    Tag a friend who always skips the line.

---

## Word count and rate check

| Line | Words | Est. s @ 3.24 | Est. s @ 2.7 |
|---|---|---|---|
| 1 | 12 | 3.7 | 4.4 |
| 2 | 24 | 7.4 | 8.9 |
| 3 | 25 | 7.7 | 9.3 |
| 4 | 13 | 4.0 | 4.8 |
| 5 | 8 | 2.5 | 3.0 |
| **total** | **82** | **25.3** | **30.4** |

Plus authored air (~1.0s per frame, ~2.0s on F5, ≈6.0s) → **~31.3s at the planning rate, ~36.4s at the
slow end.** Day 3 is the digit-heaviest tranche in the series, so the measured rate is expected at the
slow end of the two proven Day 2 carriers (2.59 and 3.50 words/second). Frame durations below are
estimates; `studio voice` overwrites them with the measurement, and the air is added after it.

## Clarity and law pass

- Hook (line 1) and CTA mechanic (line 5) are the user's words, verbatim. Line 3 already carries the
  `CORRECTIONS-day3.md` § A re-cut (the 15-word trailing "which is perfect for…" split into
  "…fair and in order." + "That is the right shape for tasks waiting their turn.").
- Every sentence ≤14 words, ≤2 clauses, no semicolons, no trailing relative clauses.
- Glosses, all in the frame the term appears: `queue` → the row being built on F2 plus the voice's own
  coffee-shop line; `front` / `back` → the two `--muted` chips under the two end nodes, arriving as the
  words arrive; `enqueue` / `dequeue` → the plate words on the diagram and the mono comment tags on the
  Python lines (`# enqueue`, `# dequeue`), never pseudocode in the chamber; `deque` → the chip on F4;
  `node` → the box the letter sits in (G7's shape, already shipped in part 22).
- **No "traverse", no "iterate", no "simply/just/easy/of course/quick tip", no "don't worry", no AI
  tells, no em-dashes on screen, no "it's not X, it's Y"** (rationed to part 05). One triad only —
  printer / call center / message app — and the enumeration *is* the subject (bible-day3 § 2).
- **Notation law:** no `O(`, no `log n`, no bare `n` on any frame or in any line of this narration. The
  counted pair `SERVED 1` / `MOVED 0` is the whole runtime claim.
- **Accuracy:** every fragment on screen comes from `series-bible-day3.md` § 4, executed 2026-11-01 on
  Python 3.13.15: `deque(); append('A'); popleft()` → **`A`**. No hash number, no unexecuted output. The
  `['A','B'].pop()` → `'B'` wrong-end trap is pinned-comment material only and appears nowhere on screen
  (`CORRECTIONS-day3.md` § B). **Zero coral** — this part raises nothing.

**Spoken code:** `queue.append('A')` → "append to the right"; `queue.popleft()` → "popleft" (one word);
`from collections import deque` is never spoken. The voice never says brackets, quotes or indentation.
