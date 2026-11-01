# SCRIPT — prog-basics-13-break-and-continue (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** — the house value in `.agents/design.md`
(`voice → voices → en`), pinned by `BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`) and passed
explicitly as `--speed 0.93`, because `studio voice` looks the flattened key `voices.en` and misses
(see `BRIEF.md` → Deviations; `frame-day2.md` § 8). ElevenLabs is unusable on this machine
(`voice_id` empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not used. No BGM,
no SFX (bible § 7).

**Voice direction:** one person at a whiteboard with a row of boxes and a track drawn under them. F2 is
quick and flat — `immediately` is the whole lesson and the walk stops mid-sentence. F3 is the patient
half: `skips` gets a light touch, `next one` gets the lift, and `ignore` is said the way you say
"doesn't matter". F4 reads two conditions and then four values, with a small pause between each value.
F5 opens with `Challenge` like a teacher setting homework and closes flat on `Post your code`.

**Budget:** 5 lines / 77 spoken words against a ~31s target and a 54s ceiling. Real durations come from
`studio cues` and win; **nothing is padded** (bible-day2 § 0.2).

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 2.8s (real VO wins)
**Delivery:** Even, no sales voice. The two things the eye keeps are `tiny` and `messy`. User's words,
verbatim; the hook is not rewritable.

    Two tiny keywords that save you from messy loops.

## Line 2 — Break ends the walk (Frame 2)

**Time:** estimate 4.0s (real VO wins)
**Delivery:** First sentence flat and fast — the word `immediately` is the lesson, and the rail is cut
on it. Second sentence is the rule of use, unhurried, and lands on `need` as the marker leaves the
board. User's copy, unchanged.

    Break exits the loop immediately. Use break when you've found what you need.

## Line 3 — Continue skips the round (Frame 3)

**Time:** estimate 6.8s (real VO wins)
**Delivery:** One breath per sentence. Light on `skips`, a small lift on `next one`, and `ignore` said
the way you say "doesn't matter". The marker hops the `-1` chamber under the first sentence and the
mint digits land one per visit under the second. User's copy, unchanged.

    Continue skips the rest of this round and jumps to the next one. Use continue to ignore items you don't care about.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 5.9s (real VO wins)
**Delivery:** Read the two conditions as conditions, then the four values as values with a pause between
each. `continue` and `break` each get one amber plate on the word that names them.

    If n is less than zero, continue. If n equals the target, break. Seen keeps three, eight, two, seven.

## Line 5 — The challenge (Frame 5)

**Time:** estimate 4.3s (real VO wins)
**Delivery:** Verbatim CTA mechanic, asked like homework. `nums = [3, 7, 2, 8]` is never read aloud and
no answer appears on the frame.

    Challenge: find the first even number in a list using break. Post your code.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 9 | 2.8 |
| 2 | 13 | 4.0 |
| 3 | 22 | 6.8 |
| 4 | 19 | 5.9 |
| 5 | 14 | 4.3 |
| **total** | **77** | **~23.8** |

Plus ~1.0s of authored air per frame and ~2.0s on F5 → **~29.8s planned**. The measured run came in at
**25.365s of speech + 6.0s air = 31.37s** (Kokoro read this part's longer words at ~3.04 w/s, not the
3.24 planning rate), so the film is above the tranche's 30s floor: **no pad growth was needed and no
words were added** (`STORYBOARD.md` → Real durations).

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2 and 3 are the
user's explain copy, **unchanged** — `CORRECTIONS-day2.md` § A lists part 13 among the parts whose
explain lines already pass the ≤14-word / ≤2-clause law, so this part's only edit is where the four
sentences sit:

- the two `break` sentences go on **F2**, the two `continue` sentences on **F3** — one keyword per
  frame, one idea per beat, in the order the user's copy puts them.
- Line 4 is the user's own `## Example` (`if n < 0: continue`, `if n == target: break`) read aloud in the
  series' spoken-code convention, plus the collected list it prints (`seen keeps three, eight, two,
  seven`) so the strip and the voice land on the same executed fact.
- Glosses, all in the frame that says the word: `loop` → `a loop runs the same lines again` (F1, muted
  mono, since the hook cannot carry it); `break` → the rail vanishing mid-length (F2); `continue` → the
  marker hopping one chamber (F3); `round` (the user's word) → `this round only` on F3's annotation;
  `target` → the `target = 7` tag over the chamber the walk stops on (F2).
- **No "iterate"/"traverse", no `O(1)`/`O(n)`** (bible-day2 § 2). No sentence over 14 words, no
  semicolons, no trailing relative clauses, no em-dashes on screen, no "not X, it's Y" shape (spent on
  part 05's hook), no "simply/just/easy/of course/don't worry".
- Nothing on screen is invented: the walked list, `target = 7`, `[3, 8, 2, 7]` and the challenge list are
  ledger values or re-executed here (`piece ## Accuracy`).

**Spoken code:** `if n < 0:` → "if n is less than zero". `if n == target:` → "if n equals the target".
`continue` → "continue"; `break` → "break"; `seen` → "seen"; `[3, 8, 2, 7]` → "three, eight, two,
seven". `for n in nums:` and `nums = [3, -1, 8, 2, 7, 9]` are **never spoken** — the row on screen is
that list. The voice never says brackets, colons or indentation.
