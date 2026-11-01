# SCRIPT — prog-basics-41-big-o-notation (EN master)

**Voice:** Kokoro `af_heart`, provider pinned `kokoro`, speed **0.93 passed explicitly** —
`studio voice <dir> --speed 0.93`. The house lookup in `studio.mjs` still reads `voices.en` while
`.agents/design.md` nests the value at `voice.voices.en`, so an unflagged run lands on 0.74
(`frame-day4.md` § 9). `--dry` must print `speed=0.93` before any audio is accepted. ElevenLabs is
unusable here (`voice_id` empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not
used. **No BGM, no SFX** (bible-day4 § 4).

**Voice direction:** one person at a whiteboard with an empty set of axes on it. F1 is the joke and the
thesis at the same time — keep `without a stopwatch` level, do not punch it. F2 is even and unhurried;
`grows` appears twice in one sentence on purpose, say the second one slightly lower. F3 is two shapes,
two beats, equal weight, and `once` closes the frame. F4 carries the part's correction: `both over n` is
the two words A1 added, so say it level and do not rush past it, and `big O of n squared` is the phrase
to hear clearly because it is the spoken form of the chip on screen; `shallow` is quiet. F5 is a save
first and a question second, then nothing.

**Budget:** 5 frames, **85 spoken words** (F1 11 · F2 19 · F3 18 · F4 22 · F5 15), planned at 3.24
words/second → ~26.2s speech + 6.0s authored air = **~32.2s** against the 29-34s band and a 54s ceiling.
This is the highest-risk film in the tranche for going over 34s: at pb-13's slow-word 3.04 w/s the same
85 words are ~34.0s. Nothing is padded and no words are added. The one pre-approved trim if the film
measures past 34s is **F2's second sentence** (`It drops the constants and keeps the shape.`, 8 words →
77 words). The file's other former trim option is **retired** — it replaced 8 words with 9 and added one.
Report before cutting anything else.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.4s (real VO wins)
**Delivery:** Verbatim user hook, not rewritable. Two groups on screen: `this code gets slow` in ink,
`no stopwatch needed` on the amber plate. The question mark belongs to the voice, not to the screen.

    How do engineers say 'this code gets slow' without a stopwatch?

## Line 2 — The axes, and what the sentence is about (Frame 2)

**Time:** estimate 5.9s (real VO wins)
**Delivery:** Even pace. The x-axis draws under the first clause and the y-axis runs up under the second
half of it; the tick labels arrive one per beat. `keeps the shape` is the frame's axis arriving, and the
reading line `shape, not speed` lands there. No curve and no symbol on this frame yet — a chip may not
arrive before its shape exists.

    Big O describes how the work grows as the input grows. It drops the constants and keeps the shape.

## Line 3 — The two shallow shapes (Frame 3)

**Time:** estimate 5.6s (real VO wins)
**Delivery:** Two beats, equal weight. `One flat line` starts the flat draw and `O(1)` lights amber with
it; `One straight line` hands the amber over and the flat one goes back to rest. `once` closes the frame
on the counted reading line. The `n = 32` chip is on this frame and unchanged on Frame 4 — one n, or the
two shapes are not comparable.

    One flat line means the same work at any size. One straight line means reading each item once.

## Line 4 — The two steep shapes, and the measured pair (Frame 4)

**Time:** estimate 6.8s (real VO wins)
**Delivery:** `big O of n squared` is the phrase to hear clearly — it is the spoken form of the chip on
screen, and the caption lane will read these words while the diagram reads the symbol. `both over n` is
the two words A1 added and the whole correction, so say it level and do not rush past it. The measured
pair plate lands with the square: `1024 → 4096` against `96 → 192`, `x4.0` against `x2.0`. `shallow` is
quiet, and the halving curve arrives on it.

    A loop inside a loop, both over n, is big O of n squared. Halving the list each step keeps it shallow.

## Line 5 — The save (Frame 5)

**Time:** estimate 4.6s (real VO wins)
**Delivery:** Verbatim CTA mechanic, two beats. `Save this` first and alone — the verb plate lands on it.
Then the question, then nothing. The answer is not on the frame: no chip lights, no `O(1)` is marked
correct, because the honest answer has a worst case that part 38 owns.

    Save this. What's the Big O of looking up a key in a hash map?

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 11 | 3.40 |
| 2 | 19 | 5.86 |
| 3 | 18 | 5.56 |
| 4 | 22 | 6.79 |
| 5 | 15 | 4.63 |
| **total** | **85** | **~26.2 speech + 6.0 air = ~32.2** |

Piece-file frontmatter records `words: 85` and `target_length: ~32s`; the narration above is that file's
`## Final narration` table word for word, including the user-approved A1 fix in Line 4.

## Spoken code

The voice never reads a bracket, a parenthesis, a superscript or a symbol. `O(1)` → never spoken; the
screen says it while the voice says `the same work at any size`. `O(n)` → never spoken; `reading each
item once`. `O(n²)` → **`big O of n squared`** (Line 4, since A1; the older `n times n looks` phrasing is
retired). `O(log n)` → `halving the list each step` in Line 4; the authorised spoken form if it must ever
be named is `big O of log n`. `n` → "en". `32` → "thirty-two" only if a line ever says it — no line does,
the number is screen-only. `Θ` is never spoken and never on screen (pinned comment only).

**Expected at the caption gate, not a defect:** captions are measured off the VO, so the caption lane
reads `big O of n squared` while the diagram reads `O(n²)` (`ACCURACY-day4.md` § 3, production
consequence). Do not hand-patch one to the other and do not remove the symbol from the diagram.

## Screen text and clarity

- Every number on screen comes from `writing/prog-basics/ACCURACY-day4.md` § 41 and nowhere else:
  `n = 32` (a table row, on F3 **and** F4 — one n, both shapes), `1024 → 4096` = `x4.0` (n² at 32 and at
  64), `96 → 192` = `x2.0` (a loop with its inner fixed at 3), and the chrome ticks `1× 2× 4×`. The
  hash-lookup counts (1 hash call, 0 eq tests on identity, 1 on an equal new object, flat from 10 keys to
  1,000,000) and the worst case (200 keys all hashing to 7 → 200 equality tests in one lookup) are
  pinned-comment material and are **not** on screen, because F5 must not carry the answer.
- **One convention per frame (B14):** this film plots the curve value (`log2 n`), never the halving
  loop's pass count (`floor(log2 n)+1`, one higher). Both numbers never appear in one frame.
- Notation on screen: `O(1)`, `O(n)`, `O(n²)`, `O(log n)` — licensed for this part as the subject
  (`ACCURACY-day4.md` § 3, row 41). Real superscript via `.pb-sup`, never a caret, never the `²`
  codepoint, never a `sups` font feature.
- Zero coral (§ 6). Amber is the curve the voice is on, singular, and it returns to `--stroke` with its
  label returning to `--ink`; no curve is permanently amber.
- No em-dashes on screen, no "simply/just/easy/of course", no AI tells. The contrast construction
  `shape, not speed` appears once (F2's reading line); the cover string `how work grows, not how fast`
  stays in post copy rather than on the frame, so the film ships exactly one.
- Hook and CTA are the user's verbatim words and are untouched.
