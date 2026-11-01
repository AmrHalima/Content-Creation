# SCRIPT — prog-basics-34-circular-buffers (EN master)

**Voice:** Kokoro `af_heart`, provider pinned `kokoro`, speed **0.93 passed explicitly** —
`studio voice <dir> --speed 0.93`. The house lookup in `studio.mjs` still reads `voices.en` while
`.agents/design.md` nests the value at `voice.voices.en`, so an unflagged run lands on 0.74
(`frame-day4.md` § 9). `--dry` must print `speed=0.93` before any audio is accepted. ElevenLabs is
unusable here (`voice_id` empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not
used. **No BGM, no SFX** (bible-day4 § 4).

**Voice direction:** one person at a whiteboard with three boxes and an arrow that curves back. F1 is
the impossibility, asked plainly, and `never grow` is the landing. F2 is the definition at an even pace,
then it slows on `wraps back` because the arc is drawing under those two words. F3's middle sentence —
the two `nothing` clauses — is said flat and fast, because it is the absence of motion; the frames do
not move either. F4 reads the letters as letters, not as a list. F5 is a save, not a question: nothing
is added after `questions`.

**Budget:** 5 frames, 78 spoken words (F1 13 · F2 22 · F3 18 · F4 19 · F5 6), measured 3.24 words/second
→ ~24.1s speech + 6.0s authored air = **~30.1s** against a 29-34s band and a 54s ceiling. No words added,
no words cut.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 4.0s (real VO wins)
**Delivery:** Verbatim user hook, not rewritable. Land `never grow` — the whole part is that one
impossibility. The words `latest 100 entries` are read as the promise, and the executed scale line on
screen (`250 writes · 100 slots · len stays 100`) is what makes it a claim instead of a trick.

    How does a log keep only the latest 100 entries and never grow?

## Line 2 — The row and the wrap (Frame 2)

**Time:** estimate 6.8s (real VO wins)
**Delivery:** First sentence is the definition, even pace, one value per beat as `A` `B` `C` land. Slow
down on `wraps back`: the return arc is drawing under exactly those two words and the counted tag
`WRAPPED 1` lands after it. `set size` is the other half of the promise — the row never gets longer.

    A circular buffer is an array with a set size. The write spot runs to the end and wraps back to zero.

## Line 3 — The overwrite (Frame 3)

**Time:** estimate 5.6s (real VO wins)
**Delivery:** `overwrites` is the word — the drop lands on it and the old value is gone before the new
one arrives. The two `nothing` clauses are flat and fast; they are the absence of motion, said without
motion, and no chamber translates anywhere in this frame while `MOVED 0` and `SIZE 3` settle under them.
The last sentence names the use, so `streaming audio` arrives as chrome, not as a claim.

    New data overwrites the oldest entry. Nothing shifts and nothing grows. That is why streaming audio uses it.

## Line 4 — The run (Frame 4)

**Time:** estimate 5.9s (real VO wins)
**Delivery:** Read the letters as letters: A, B, C, with a small pause between them. `Write D and it
lands on A` is the fourth write, and the terminal strip prints what the run actually printed —
`['D', 'B', 'C']`, slot order, not recency order. `newest three` lands on the labelled logical line
`oldest → newest  B → C → D`, which reads the other way round from the cells, and that difference is
the lesson.

    Three slots: A, B, C. Write D and it lands on A. The log now holds the newest three.

## Line 5 — The save (Frame 5)

**Time:** estimate 1.9s (real VO wins)
**Delivery:** Verbatim CTA mechanic. `Save this` opens the frame; nothing is added after `questions`.
The ring echoes behind the headline, dimmed, with the wrap arc still drawn over it.

    Save this for system design questions.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 13 | 4.01 |
| 2 | 22 | 6.79 |
| 3 | 18 | 5.56 |
| 4 | 19 | 5.86 |
| 5 | 6 | 1.85 |
| **total** | **78** | **~24.1 speech + 6.0 air** |

## Spoken code

`buf = ["A", "B", "C"]` → "Three slots: A, B, C." `i = 3 % 3` → **never spoken**; it is what the wrap
arrow does. `buf[i] = "D"` → "Write D and it lands on A." `100` in the hook → "one hundred". `deque`
is not spoken and not shown. Never a digit, bracket or percent sign read aloud.

## Screen text and clarity

- Every value on screen is executed output from `writing/prog-basics/ACCURACY-day4.md` § 34: the cell
  states `A . .` / `A B .` / `A B C` / `D B C`, `head 1 · tail 1 · count 3`, `evicted: A`, the printed
  `['D', 'B', 'C']`, and the scale line `250 writes · 100 slots · len stays 100`. Nothing is recalled.
- **No notation anywhere** (`O(1)` / `O(n)` are banned for this part by the piece file and by § 3 of the
  ledger): the claim is carried by `MOVED 0` and `SIZE 3`, the same way part 21 carried `MOVED 4`.
- Zero coral: the overwrite is the design, not an error, and this part raises no exception.
- One amber arrival per beat; the `HEAD` plate is the only amber element in F2/F3 and the counted tags
  stay muted. The standing `INTERMEDIATE` plate is chrome.
- No "simply", "just", "easy", "of course", no em-dashes on screen, no "not X, it's Y" (spent on part
  05's hook), no trailing relative clause, no three-item list used as decoration.
