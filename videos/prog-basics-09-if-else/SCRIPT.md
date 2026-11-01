# SCRIPT — prog-basics-09-if-else (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard drawing a fork in a road. Warm, quick, concrete.
Part of the audience reads English as a second language, so every sentence below is under 14 words,
has at most two clauses, and no term is said without its plain gloss in the same breath. The learner
must hear it once and get it: the condition is a yes/no question, one path runs, and the first true
answer wins.

**Budget:** 91 spoken words / 5 lines against a ~45s target and a 52s ceiling. Real durations come
from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 5s (real VO wins)
**Delivery:** Flat and certain, no build-up. `this` gets the beat and the frame behind it is still
empty when it lands. Verbatim from the piece file; the hook is the user's words.

    Every decision your app makes comes down to this.

## Line 2 — The condition, and the two paths (Frame 2)

**Time:** estimate 12s (real VO wins)
**Delivery:** The first sentence is the gloss — say `yes or no question` plainly, it is the whole
lesson in five words. Alternate the emphasis exactly as the two paths light up on screen: lift on
`true`, fall on `the other block`. The last sentence is the payoff and is said slowly.

    A condition is a yes or no question. If it is true, this block runs. Otherwise, the other block. One path runs, the other never gets read.

## Line 3 — elif, and first match wins (Frame 3)

**Time:** estimate 8s (real VO wins)
**Delivery:** `Add elif` is one short beat, then the gloss `Elif means else if` said even more
plainly, because it is the term they will search for. The stress falls on `first`. The marker on
screen stops at the first lit door at exactly this moment — the voice does not explain what the
motion already showed.

    More paths? Add elif. Elif means else if. The first true answer wins, the rest never get checked.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 8s (real VO wins)
**Delivery:** The two ages are the whole demo; say them plainly, no drama. Spoken code exactly as the
piece writes it: `if age >= 18:` → "if age is at least eighteen", `else:` → "otherwise".

    If age is at least eighteen, print Welcome. Otherwise print Sorry. Age twenty gives Welcome. Fifteen gives Sorry.

## Line 5 — The challenge (Frame 5)

**Time:** estimate 8s (real VO wins)
**Delivery:** The mechanic is word for word and does not change. The warning is one added sentence,
delivered as a heads-up, not a gotcha — a level tone, slight pause before `Warning`, and no gloating.

    Challenge: rewrite that as a one-liner. Show me in the comments. Warning, the obvious attempt does not parse.

---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 10 | 4.5 |
| 2 | 27 | 12.0 |
| 3 | 18 | 8.0 |
| 4 | 18 | 7.9 |
| 5 | 18 | 7.9 |
| **total** | **91** | **~40.3 speech** |

## Clarity pass (what changed from the piece file, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Line 5 is the
**approved AFTER version** from `writing/prog-basics/CORRECTIONS.md` entry 2 — the challenge plus the
one added warning sentence, and nothing else about it changed.

Lines 2-4 are explain lines (frame.md v2 § 9: fair game) and were re-cut so nothing needs re-hearing:

- **F2** led with the gloss instead of the term. The piece's `If the condition is true` assumes the
  learner knows "condition"; it now opens `A condition is a yes or no question.` so the term is
  defined the breath it appears. `One path taken, the other never looked at` became
  `One path runs, the other never gets read` — `gets read` is a verb a non-native ear parses
  instantly, and it also says what the interpreter literally does.
- **F3** gains the spoken gloss `Elif means else if` (the piece only writes `elif`), and its final
  clause re-cuts `the rest are not checked` to `the rest never get checked` — same claim, and `never`
  carries the stop that the motion shows.
- **F4** is the piece's line unchanged: already four short sentences, two per branch, with the ages
  spoken as numbers.
- `block` is the one term not glossed in the voice, because it is glossed on screen the moment it is
  said (`block = the lines under it`) — a spoken double gloss in F2 would push the line over two
  clauses. `one-liner` is likewise glossed on screen (headline `one line, same behavior`) rather than
  in the voice, because the CTA mechanic cannot be edited.
- **Not said, not written:** "branch", "predicate", "boolean expression", "control flow", "ternary",
  "conditional expression". The word `SyntaxError` appears only as on-screen text in F5's muted micro
  type and in the pinned comment reveal — the voice says `does not parse`, which is what the piece's
  approved AFTER line says.

**Spoken code:** `if age >= 18:` → "if age is at least eighteen". `else:` → "otherwise".
`elif` → "el-if". `print('Welcome')` → "print Welcome". The voice never says the colon, never says
brackets, and never says `>=`.
