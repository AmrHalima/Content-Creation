# SCRIPT — prog-basics-23-stacks (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame.md` v3.0 § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX.

> **Headings are load-bearing.** Each line is exactly `## Line N — Title (Frame N)` — the closing paren
> must follow the frame number. A comma inside the parens makes `audio.mjs` skip that frame and merge its
> narration into the previous wav with no error (`frame-day3.md` § 13, pb-22's missing fifth of a film).
> F3 is deliberately two beats and gets **one** heading, never `## Line 3 — … (Frame 3, two beats)`.

**Voice direction:** one person at a bench, laying plates on a shelf. F1 lands `a stack` on the amber
sweep. F2 is even — "last in, first out" is the user's own gloss of LIFO and gets no special weight,
because the pile is what carries it. F3's triad is read flat, one chip per item (the enumeration *is*
the subject); the second sentence slows, and each value drops as it is named. F4 is three short beats,
and the chamber's word here is `append` — **do not say "push" on F4**. F5 is asked, not performed: the
question is the whole frame, and nothing is added to it.

**Budget:** 81 spoken words / 5 lines against a ~31s target (`[B]` band 29-34s) and a 54s ceiling.
Real durations come from `studio voice`'s sync plus authored air, and they win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.0s (real VO wins)
**Delivery:** Verbatim hook. Two beats, level. Land `a stack` on the amber sweep. `Ctrl+Z` is written
here as it must be spoken (`control Z`) — the screen type keeps `press control+z`.

    Press control Z and you're using a stack.

## Line 2 — The pile (Frame 2)

**Time:** estimate 8.1s (real VO wins)
**Delivery:** Even pace. The shelf and the empty dashed chamber arrive on `a stack`; the first plate
drops on `last in, first out`; the second and third on `like a pile of plates`. Then `push` and `pop`
each get one amber border flash on the **top** plate only, in sequence — never two at once.

    A stack is last in, first out, like a pile of plates. You push onto the top and pop from the top.

## Line 3 — Push, push, pop (Frame 3)

**Time:** estimate 8.5s (real VO wins)
**Delivery:** Beat 1 is the triad, read flat, one chip arriving per item. Beat 2 slows: each plate drops
as it is named, and `pop gives two` is the frame's point — the top plate leaves and the mint chip lands
**in the slot the plate vacated**, while the plate below does not move.

    Undo history, the browser back button, and function calls all use stacks. Push one, push two, then pop gives two.

## Line 4 — The Python words (Frame 4)

**Time:** estimate 5.9s (real VO wins)
**Delivery:** Three short beats under a caret. `Append puts it on top` types the two `append` lines;
`Pop takes the top off` types the print line and lands the mint `2` on the terminal strip. The chamber's
verbs are `append` and `pop`; the `# push` tags are chrome and are never spoken.

    In Python, a list does this. Append puts it on top. Pop takes the top off.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 4.4s (real VO wins)
**Delivery:** Verbatim CTA, nothing added to the question. The pile behind it stays intact: three plates
`1 2 3`, no plate leaving, no answer on screen.

    After push 1, push 2, push 3, then pop: what's on top?

---

## Word count and rate check

| Line | Words | Est. @3.24 w/s | Est. @2.7 w/s |
|---|---|---|---|
| 1 | 8 | 2.5 | 3.0 |
| 2 | 22 | 6.8 | 8.1 |
| 3 | 23 | 7.1 | 8.5 |
| 4 | 16 | 4.9 | 5.9 |
| 5 | 12 | 3.7 | 4.4 |
| **total** | **81** | **25.0 speech** | **29.9 speech** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **31.0s** at the planning rate, **~35.9s** at the slow
digit-heavy rate. `frame.md` v3.0 § 10 and packet § 3: take the measured `audio_meta.json`; if the film
lands under 30s, grow F5's air and report it — never add narration.

## Clarity and copy check (what is verbatim, what is ours)

Line 1 (hook) and line 5 (CTA mechanic) are the user's words. The hook's only change is `Ctrl+Z` →
`control Z` in the *spoken* column, which is the piece file's own delivery instruction; on-screen type and
the cover keep `control+z`. Lines 2-4 are the user's explain lines, untouched — `CORRECTIONS-day3.md` § A
records 23's three explain lines (12, 10, 12 words) as "untouched, deliberately", and § C's 23 rows are
screen constraints, not voice changes.

Glosses, all inside the frame where the term appears: `stack` → the pile of plates F2 draws; `LIFO` →
the user's own "last in, first out"; `push`/`pop` → mono plate labels on the pile (the language-neutral
API, § 4a) and `# push` comments on the chamber lines; `append` → F4's chamber word, spoken on its own
beat; the three uses → the chip row `UNDO HISTORY` / `BACK BUTTON` / `FUNCTION CALLS` (chips, never
chambers, § 4d). **Neither "traverse" nor "iterate" appears.** **No `O(`, no `log n`, no bare `n`.**
**No coral anywhere** — nothing on any frame raises an error, so `--err` is unused (bible § 4c, § 7.1).
No sentence over 14 words or over 2 clauses, no semicolons, no trailing relative clauses, no em-dashes on
screen, no "not X, it's Y", no "simply/just/easy/of course/clearly/quick tip", no "don't worry".

**Spoken code:** `stack.append(2)` → "append"; `stack.pop()` → "pop"; `# push` and `# 2` → not spoken.
The voice never says brackets, dots or parentheses.
