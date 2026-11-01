# SCRIPT — prog-basics-21-arrays (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** — the house value in `.agents/design.md` `voices.en`,
resolved by `studio voice` from `BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). **No `--speed`
flag was passed**: a flag outranks the house spec, and Day 2 lets house stand (bible-day2 § 0,
frame-day2 § 8). ElevenLabs is unusable on this machine (`voice_id` empty, free-tier keys return HTTP
402) and was not substituted. HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard with a row of boxes drawn on it. F2 is the even,
unhurried half — the row is arriving under the first sentence and the numbering under the second. F3
changes gear: "Reading by index is instant" is said quickly, because it is a jump; the second sentence
slows down, because the boxes are moving. F4 reads the values as values, not as a list. F5 is a
question, not a tag line.

**Budget:** 5 frames, ~58 spoken tokens against a ~31s target and a 54s ceiling. The leanest part in
the tranche. Real durations come from `studio cues` and win; **nothing is padded** (bible-day2 § 0.2).

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 2.9s (real VO wins)
**Delivery:** The question is the setup, the answer is the whole part. Land `one`. User's words,
verbatim; the hook is not rewritable.

    Need 100 variables? You need one array.

## Line 2 — The row, and its numbers (Frame 2)

**Time:** estimate 8.3s (real VO wins)
**Delivery:** Even, no hurry. The five chambers arrive under "many values in order"; the index strip
arrives under the second sentence, zero first. "index" is the term and its plain gloss is already on
the screen in this same frame.

    An array holds many values in order, side by side in memory. Each has an index that starts at zero.

## Line 3 — The jump, then the cost (Frame 3)

**Time:** estimate 5.8s (real VO wins)
**Delivery:** Two beats, two speeds. "Reading by index is instant" is quick — the marker leaps and
nothing else moves. The second sentence slows down because the boxes are moving; the four boxes slide
and `MOVED 4` lands on `shifting`. Already re-cut at the `but` into two beats of 5 and 9 words
(`CORRECTIONS-day2.md` § A).

    Reading by index is instant. Inserting in the middle means shifting everything after it.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 4.6s (real VO wins)
**Delivery:** Read the values as values with a small pause between them — ten, twenty, thirty. Then
`nums[1]` is spoken as "nums at index one" and `twenty` is the mint number already sitting on the
terminal strip.

    Nums is ten, twenty, thirty. Nums at index one gives twenty.

## Line 5 — The save (Frame 5)

**Time:** estimate 3.8s (real VO wins)
**Delivery:** Verbatim CTA mechanic. `nums[-1]` spoken as "nums at minus one". The answer is not on
the frame and not in the voice.

    Save this. Quick one: what's nums[-1] in Python?

---

## Word count and rate check

| Line | Tokens | Est. seconds at 0.93 |
|---|---|---|
| 1 | 7 | 2.9 |
| 2 | 18 | 8.3 |
| 3 | 13 | 5.8 |
| 4 | 11 | 4.6 |
| 5 | 9 | 3.8 |
| **total** | **58** | **~25.4** |

Piece-file frontmatter records 71 words for the part (it counts the bracketed code token in the CTA);
the narration above is the piece file's `## Final narration` table word for word, unchanged.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2-4 are the
piece file's already re-cut copy; nothing here alters them further:

- The only edit in this part's history is `CORRECTIONS-day2.md` § A: F3's 15-word `but` sentence split
  into two beats of 5 and 9 words. The words survive; the breath changes.
- `index` gets its plain gloss on screen in the same frame the voice says it (`the index is a box's
  position number`), never in the next frame. `array` is glossed by F2's own first clause. `shift` is
  never defined — F3 shows it and counts it.
- **No "O(1)" / "O(n)" anywhere** (bible-day2 § 2): the speed claim is carried by `READS 1 MOVE`
  against `MOVED 4`, and the word "instant" is the user's own.
- "iterate"/"traverse" do not appear. No sentence over 14 words, no semicolons, no trailing relative
  clauses, no em-dashes on screen, no "not X, it's Y" shape (that belongs to part 05's hook), no
  "simply/just/easy/of course".
- **Screen-text constraint, not a voice edit** (`CORRECTIONS-day2.md` § B): the voice says "side by
  side in memory" because that is what an array is; nothing on screen claims Python's internal layout,
  so a learner who types it in Python is not taught that the ints themselves sit contiguously.

**Spoken code:** `nums = [10, 20, 30]` → "nums is ten, twenty, thirty". `nums[1]` → "nums at index
one". `nums[-1]` → "nums at minus one". `insert(1, 70)` is **never spoken** — it is what the boxes do
in F3. The voice never says brackets, colons or indentation.
