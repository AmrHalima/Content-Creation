# SCRIPT — prog-basics-12-infinite-loops (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** — the house value, passed explicitly as `--speed 0.93`
because `studio voice`'s `voices.en` lookup misses the nested `voice.voices.en` key in
`.agents/design.md` and falls through to 0.74 (`frame-day2.md` § 8; proved by the pb-21/pb-22
carriers and by this project's own `--dry` run). Provider pinned by `BRIEF.md` (`tts_provider:
kokoro`, `voice: af_heart`), never `auto`. ElevenLabs is unusable on this machine (`voice_id` empty,
free-tier keys return HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX
(bible § 7).

**Voice direction:** one person at a whiteboard who has seen this exact disaster on their own laptop.
F1 is deadpan, almost flat — the image does the laughing, the voice does not. F2 is the definition and
gets said slowly enough to type. F3 is the cause, said without scolding. F4 is the habit: two short
questions with a breath after `ask`, and `what ends it` lands last and alone while the terminal strip
fills with zeros. F5 is a question, not a tag line.

**Budget:** 51 spoken words / 5 lines against the tranche's 29-34s planning band. This is the leanest
copy in Day 2: 51 words at the measured 3.24 words/second is ~15.7s of speech, so the film lands
**under 30s with the full authored air**, which is reported at the gate and not padded
(`series-bible-day2.md` § 0.2 — the user chose "no added words"). Real durations come from
`studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.4s (real VO wins)
**Delivery:** Flat. No alarm, no joke-landing. `froze` is the keyword and the only emphasis in the
line; it goes on the amber plate. `Here's why` is a gear change, a shade lower. User's words, verbatim.

    Your program froze and your laptop fan is screaming. Here's why.

## Line 2 — What an infinite loop is (Frame 2)

**Time:** estimate 3.1s (real VO wins)
**Delivery:** Even and slow on the last three words — this is the definition of the part. `condition`
is the term; the plain gloss `the check` is already on the screen in this same frame, and the chip
under it stamps `True` and stays `True`.

    An infinite loop happens when the condition never becomes false.

## Line 3 — Why it happens (Frame 3)

**Time:** estimate 3.4s (real VO wins)
**Delivery:** A touch wry on `forgot`, then plain. This is the cause, not a scolding. The gate
apparatus is re-testing and the `i` chip is still `0` by the time `depends on` lands, so the frame
shows the forgetting rather than saying it twice.

    Usually you forgot to update the variable the condition depends on.

## Line 4 — The habit, over the broken loop (Frame 4)

**Time:** estimate 4.0s (real VO wins)
**Delivery:** Two questions, one breath after `ask`. `what changes each round` lands while the caret
blinks in the empty slot; `what ends it` lands last and alone, and the amber `NEVER ENDS` plate arrives
on it while the terminal strip fills with repeated zeros.

    Before running any loop, ask: what changes each round, and what ends it?

## Line 5 — The quiz (Frame 5)

**Time:** estimate 1.9s (real VO wins)
**Delivery:** Ask it like a question. Mechanic unchanged. The answer is never spoken and never on
screen — it lives in the pinned comment.

    Spot the missing line? Comment it.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 11 | 3.4 |
| 2 | 10 | 3.1 |
| 3 | 11 | 3.4 |
| 4 | 13 | 4.0 |
| 5 | 6 | 1.9 |
| **total** | **51** | **~15.8 speech** |

The film is that number plus the authored air (~1.0s per frame, grown pad on F5), so ~23s. The
tranche's planning band is 29-34s and this part sits below it with the air intact.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2-4 are the
piece file's explain copy **unchanged**: `CORRECTIONS-day2.md` lists part 12 among the parts whose
explain lines already pass the ≤14-word / ≤2-clause law, so no re-cut was applied and none was needed.

- Glosses, all arriving in the same frame the term is spoken (the voice cannot carry a gloss here
  without editing the user's sentence, so the screen carries it): `condition` → the chip labelled
  `the check` (F2, and it is pb-11's standing gloss for this term); `infinite loop` → the repeated
  `True` stamps under the chamber plus F1's `frozen = it is still running`; `variable` → the mint `i`
  chip on F3 that pulses once per pass and never moves; `loop` → `a loop runs the same lines again`
  on F1's screen, since the hook cannot gloss itself; `round` → the `pass 1 / pass 2 / pass 3` badges
  on F3.
- **No "iterate", no "traverse".** No sentence over 14 words, no semicolons, no trailing relative
  clauses, no em-dashes on screen, no "not X, it's Y" shape (spent on part 05's hook), no
  "simply/just/easy/of course/clearly/quick tip", no "don't worry"/"everyone struggles".
- The code is never read aloud. F4 shows the loop while the diagnostic question is asked, so a learner
  hears the habit and reads the syntax separately rather than hearing brackets.
- `i += 1` is spoken nowhere and drawn nowhere: it is the quiz answer, and it is in the pinned comment.

**Spoken code:** none in this part. On-screen code is `i = 0`, `while i < 5:`, `    print(i)` and the
dashed empty slot where the update line belongs; the printed line is the executed `0 0 0 0 0 0 0 0 …`.
