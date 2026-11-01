# SCRIPT — prog-basics-22-linked-lists (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame-day2.md` § 8), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX.

> **STATUS — NOT YET RECORDED.** `studio voice --dry` on this project resolves `speed=0.74`, not the
> house 0.93 (see `BRIEF.md` → Blocked: the house `voices:` block is nested under `voice:`, so
> `studio/tools/studio.mjs:113` looks up `voices.en` and finds nothing). Per the tranche rule the
> audio pass was **not** run rather than generated at the wrong rate. The durations below are the
> piece file's 2.4 words/second estimates plus authored air; `studio voice` will overwrite them with
> the measured VO on the first real run.

**Voice direction:** one person at a whiteboard, laying two boxes on a row and then pointing down the
line. F1's two halves get the same weight — the array half is part 21's idea, so it gets no extra
emphasis. F3's first sentence is quick (it really is one assignment); the second slows to walking
pace, one beat per hop, and it does not resolve: the frame exits mid-count. F4's last sentence is the
whole tranche closing, so `gets it` lands flat and final on the number.

**Budget:** 84 spoken words / 5 lines against a ~44s target (the tranche's longest) and a 54s ceiling.
Real durations come from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 6.7s (real VO wins)
**Delivery:** Two beats, same weight. No smile on "treasure hunt" — it is the second half of a
comparison, not a punchline.

    An array is a row of seats. A linked list is a treasure hunt.

## Line 2 — The anatomy (Frame 2)

**Time:** estimate 8.3s (real VO wins)
**Delivery:** The first sentence settles the shape. The second names the two cells slowly, in order —
`value` then `pointer to the next node` — because the two cells light on the screen as they are named.
`pointer` is glossed by the arrow that draws itself; never say "reference".

    A linked list is a chain of nodes. Each node stores a value and a pointer to the next node.

## Line 3 — The trade (Frame 3)

**Time:** estimate 7.1s (real VO wins)
**Delivery:** Two beats in one breath-group, two beats in the frame. First sentence quick — it is one
assignment, and the motion agrees. Second sentence at walking pace, one hop per number, and it ends
unfinished on purpose.

    Adding at the front is fast. Finding the 50th means walking through 49 nodes first.

## Line 4 — The same chain as code (Frame 4)

**Time:** estimate 10.8s (real VO wins)
**Delivery:** `Here is the same chain as code` arrives with the chamber. "two pointers" is the chase —
say it evenly and let the sweep do the pointing. The last sentence is the tranche closing; land
`gets it` on the mint number and do not add "just".

    Here is the same chain as code. To reach three you follow two pointers. An array asks for index two and gets it.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 5.0s (real VO wins)
**Delivery:** Ask it like a question, not a tag line. Verbatim CTA; nothing is added to the question,
and the plate carries the verb.

    Which is faster for inserting at the front: array or linked list?

---

## Word count and rate check

| Line | Words | Est. seconds @ 2.4 w/s |
|---|---|---|
| 1 | 14 | 6.7 |
| 2 | 20 | 8.3 |
| 3 | 15 | 7.1 |
| 4 | 23 | 10.8 |
| 5 | 12 | 5.0 |
| **total** | **84** | **~37.9** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **43.9s** film. Under the 54s ceiling by ~10s.

## Clarity pass (what changed from the piece's briefed copy, and what did not)

Line 1 (the hook) and line 5 (the CTA question) are the user's words, verbatim. Line 3 already carries
the `CORRECTIONS-day2.md` § A re-cut (the 17-word `but` sentence split into beats of 6 and 11, `item`
dropped because the counter on screen is the item). Line 4 is written without "just" — forbidden
register, `frame.md` § 9. No term, keyword, hook, CTA mechanic or technical claim changed in this run.

Glosses, all present the moment the term appears: `node` → the two cells tagged `VALUE` and `NEXT` on
F2's hero (same breath as the word); `pointer` → the `→` in the right cell plus the connector that
draws itself out of it; `chain` → the row of nodes built live, one clause per node; `None` → the
terminator chip in muted mono at the tail; `50th` → the dashed empty chamber the ring reaches for;
`walk` → the ring travelling while the boxes hold, with `STEPS` counting; `index two` → the box
labelled `2` under the echo row on F4. **Neither "traverse" nor "iterate" appears anywhere in this
part** (bible-day2 § 2), and **no big-O notation** — the counted walk is the notation.
No sentence over 14 words, no semicolons, no trailing relative clauses, no em-dashes on screen, no
"not X, it's Y" construction (rationed to part 05's hook), no "simply/just/easy/of course".

**Spoken code:** the F4 tuple shape is read by the eye only — `n = (1, (2, (3, None)))` is *not*
spoken as "one inside two inside three inside nothing"; F4's voice line describes the chain instead.
`chain[1][1][0]` → "follow two pointers". `None` → "nothing". `3` → "three". The voice never says
brackets, colons or indentation.
