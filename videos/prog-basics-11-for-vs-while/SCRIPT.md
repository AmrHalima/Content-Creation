# SCRIPT — prog-basics-11-for-vs-while (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard, showing a friend two shapes. Calm on the `for` half
— that is the safe half. The last four words of F3 are the whole stake, so they land alone and flat:
no alarm, no drama.

**Budget:** 87 spoken words / 5 lines against a ~45s target and a 54s ceiling. Real durations come
from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 4s (real VO wins)
**Delivery:** Even. "hang" is the keyword and the only emphasis in the line. No alarm in the voice.
User's words, verbatim.

    Pick the wrong loop and you'll hang your program.

## Line 2 — The safe shape (Frame 2)

**Time:** estimate 9.7s (real VO wins)
**Delivery:** unhurried and flat — this is the half that never surprises you. Three short sentences,
one breath each. "known count" is the term and the count badge is already on screen when it lands.

    A for loop repeats a known count. You say how many before it runs. Or it walks a list, item by item.

## Line 3 — The shape that waits, and the hang (Frame 3)

**Time:** estimate 11s (real VO wins)
**Delivery:** Four beats, four breaths. The first three are ordinary. The last sentence slows and
"it never stops" lands alone — the spinner is already cycling faster by then.

    A while loop repeats until something changes. Waiting for a right answer. Retrying until it works. If that check never turns false, it never stops.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 9s (real VO wins)
**Delivery:** Read the values with a small pause between them — zero, one, two. The zeros are the
callback to part 03. "sets done to true" is the escape route, said plainly.

    for i in range of three gives zero, one, two. while not done runs until somebody sets done to true.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 5s (real VO wins)
**Delivery:** Ask it like a question, not a tag line. Mechanic unchanged.

    So which do you use more, for or while? Comment it.

---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 9 | 4.0 |
| 2 | 22 | 9.7 |
| 3 | 25 | 11.0 |
| 4 | 20 | 9.0 |
| 5 | 11 | 5.0 |
| **total** | **87** | **~38.7** |

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2-4 were
re-cut for the two quality bars:

- The piece's F2 opener was 21 words with a `when … or when …` compound clause — the one sentence in
  the part that needed hearing twice. It is now three sentences of 7, 7 and 8 words.
- "collection" → **list**, and the walk is said as "item by item" so the gloss arrives in the same
  breath as the term.
- "if the condition never flips" → **"if that check never turns false"**. `condition` is the only
  jargon word in the piece's F3; the chip on screen carries `not done` and the label "the check",
  so the term is never needed on the ear. `flips` → `turns false`, which matches what the chip
  visibly does.
- "Waiting for valid input" → **"waiting for a right answer"** (`valid` is jargon and gains nothing).
- Line 4 keeps the piece's own words and its delivery note (pauses between the values).

Glosses, all present the moment the term appears: `loop` → "runs the same lines again" (on-screen,
F1, since the hook cannot be edited); `hang` → "a hang never stops" (F1); `known count` → the `3`
badge that arrives before the rail (F2); `range` → "three steps from zero" + executed `# 0 1 2`
(F2/F4); `counter` → the `turn 1/2/3` strip, shown not spoken; `condition` → "the check" (F3).
**"iterate" is not used anywhere in this part.** No sentence over 14 words, no semicolons, no
trailing relative clauses, no em-dashes on screen, no "not X, it's Y" construction (that belongs to
part 05's hook), no "simply/just/easy".

**Spoken code:** `for i in range(3):` → "for i in range of three". `while not done:` → "while not
done". `done = True` → "somebody sets done to true". The voice never says brackets, colons or
indentation.
