# SCRIPT — prog-basics-19-operators (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93**, local and offline, provider pinned by `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). The flag **is** passed: `studio voice`'s house lookup
reads `voices.en` while `.agents/design.md` nests the value at `voice.voices.en`, so an unflagged run
silently speaks at 0.74 (`frame-day2.md` § 8, proved by all three carriers). ElevenLabs is unusable on
this machine (`voice_id` empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not
used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard with three labels and one warning. F1 is flat and
slightly wry — no alarm, the reveal is two frames away. F2 is three even beats, one per family, the
same rhythm each time. F3's `watch out` gets its own breath, then `assigns` and `compares` land as
facts, not as a lecture. F4 says two near-identical sentences on purpose; the only syllable that
changes is `floor`, so it is not rushed. F5 is a question, not a tag line, and the answer is never
spoken.

**Budget:** 58 spoken words / 5 lines against a ~29-34s target and a 54s ceiling. Real durations come
from `studio cues` and win; **nothing is padded** (`series-bible-day2.md` § 0.2).

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 2.8s (real VO wins)
**Delivery:** Even. The whole line is one breath; the plate lands on `not what you think`. User's
words, verbatim — the hook is not rewritable.

    One of these operators is not what you think.

## Line 2 — The three families (Frame 2)

**Time:** estimate 5.3s (real VO wins)
**Delivery:** Three beats, three arrivals. Each family word is the beat the row lands on. `true or
false` is said flatly, as a pair of values, not as a question. The last three words run a touch
faster — they are named, not explained, and the chamber pulses once per word instead of the screen
listing them.

    Arithmetic operators do math. Comparison operators return true or false. Logical operators combine conditions: and, or, not.

## Line 3 — Equals against double equals (Frame 3)

**Time:** estimate 3.7s (real VO wins)
**Delivery:** `And watch out` is the hook's payoff and gets its own breath. Then two short clauses,
each landing on the plate of the chamber it names: `assigns` on the left, `compares` on the right.
User's explain line, verbatim, no re-cut.

    And watch out: a single equals sign assigns, a double equals compares.

## Line 4 — The two divisions (Frame 4)

**Time:** estimate 4.3s (real VO wins)
**Delivery:** Two parallel sentences. Say `three` as a whole number and `three point five` as one
value, not as two digits. The chips `int` and `float` are on screen for the difference; the voice does
not define either word.

    Seven floor divided by two gives three. Seven over two gives three point five.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 1.9s (real VO wins)
**Delivery:** Ask it. Mechanic unchanged; the answer is not spoken and not on the frame. The `%` is
glued to the `7` with no space — **the words, the symbols and the order are the user's verbatim CTA**,
and `studio cues`'s tokenizer normalizes a standalone `%` to nothing (it keeps only letters, digits,
apostrophe and hyphen), which would silently drop the operator out of the caption lane. `7%` survives
as one token, so the caption reads `What's 7% 3? Comment it.` and the frame itself shows the properly
spaced `what's 7 % 3?`.

    What's 7% 3? Comment it.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 9 | 2.8 |
| 2 | 17 | 5.3 |
| 3 | 12 | 3.7 |
| 4 | 14 | 4.3 |
| 5 | 6 | 1.9 |
| **total** | **58** | **~18.0 speech** |

Plus the authored air (~1.0s per frame, 2.0s+ on F5) → **~24-29s film**, i.e. this part sits at or
below the tranche's 30s floor by design. Per `frame-day2.md` § 12 the only permitted lever is F5's
pad; no words are added and the measured number is reported.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2-4 are the
piece file's explain and example lines **unchanged** — `CORRECTIONS-day2.md` § A records part 19 among
the parts whose explain lines already pass the ≤14-word / ≤2-clause law, so nothing was re-cut, and no
re-cut applies.

- Glosses, all present the moment the term appears: `arithmetic` → `does math` (F2, same row),
  `comparison` → `gives true or false`, `logical` → `combines checks`, `=` → `assigns`, `==` →
  `compares` (F3's two chamber heads). `int` / `float` are shown as executed type names beside the
  printed values, never defined in words, because the voice's job here is the two numbers.
- **One enumeration only:** F2's three families (the subject itself). The voice's `and, or, not` is
  answered by three pulses on the `logical` chamber, not by a second list, and F5's quiz is one empty
  slot rather than a row of operator choices.
- No sentence over 14 words, no semicolons, no trailing relative clauses, no em-dashes on screen, no
  "it's not X, it's Y" shape anywhere but the user's own hook, no "simply/just/easy/of course", no
  "don't worry"/"everyone struggles". No notation of any kind.
- **Spoken code** (the convention pb-21 set): `7 // 2` → "seven floor divided by two"; `7 / 2` →
  "seven over two"; `x = 5` / `x == 5` are not read as symbols at all in F3 — the line names the
  shapes ("a single equals sign", "a double equals") because that is the user's own sentence. The
  voice never says brackets, colons or indentation, never says "float division" or "floor operator",
  and never says the answer to the quiz.
- **`%` is read by Kokoro as "percent"** (measured: whisper hears `7 / % / 3` in `assets/voice/05.wav`
  at 0.34-0.80s), which is the literal reading of the user's own CTA string and is not Python's
  meaning. The CTA is not rewritable, so the film repairs it visually and in the reply lane instead:
  F5 shows the expression in code face as `7 % 3 = [ ]`, the caption keeps the glyph, and the pinned
  comment opens with "`%` gives the remainder left after `7 // 2`". Recorded in `BRIEF.md`
  → Deviations; reported at the gate.
