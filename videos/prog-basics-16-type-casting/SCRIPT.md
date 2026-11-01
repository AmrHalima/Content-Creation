# SCRIPT — prog-basics-16-type-casting (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93**, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). **`--speed 0.93` is always passed explicitly**:
`studio.mjs`'s house lookup reads the flattened key `voices.en` while `.agents/design.md` nests it under
`voice:`, so an unflagged run falls through to `VOICE_DEFAULTS.en.speed` = **0.74** and speaks 26% slow
(`WAVE2-PACKET.md` § 1, `frame-day2.md` § 8 — the carriers proved it, pb-14 stopped rather than ship it).
`voice_speed: "0.93"` in `BRIEF.md` is documentation; the tool does not read it. ElevenLabs is unusable
on this machine (`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not
substituted. HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard with two labelled jars on it. F1 is deadpan — the two
answers are the joke and the voice must not sell them. F2 is the calm half: `on purpose` is the whole
distinction, so it slows there. F3 is the same sentence shape with the wheel empty, quiet on
`silently`. F4 reads the two values as values with a small stop before `while`, because that is where
the language changes. F5 asks the question and does not answer it; no rise on `no`.

**Budget:** 62 spoken words / 5 lines against a ~29-34s target (measured rate 3.24 words/second at 0.93)
and a 54s ceiling. Real durations come from `studio cues` and win. **Nothing is padded and no word is
added** (bible-day2 § 0.2): if the film lands under 30s, F5's pad grows and the number is reported.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 5.9s (real VO wins)
**Delivery:** Even, no punch, no alarm. `Yes, really.` is its own beat and lands flat. User's words,
verbatim; the hook is not rewritable.

    In JavaScript, '5' + 3 is '53', but '5' - 3 is 2. Yes, really.

## Line 2 — Casting: you ask for it (Frame 2)

**Time:** estimate 3.4s (real VO wins)
**Delivery:** One breath. `on purpose` is the distinction the whole part is built on, so it is said
slightly slower than the rest. `int('5')` is read as a name, not spelled. User's words, verbatim, and
`CORRECTIONS-day2.md` § A leaves this line untouched.

    Casting is you converting a type on purpose, like int('5').

## Line 3 — Coercion: the language does it, and why explicit wins (Frame 3)

**Time:** estimate 4.9s (real VO wins)
**Delivery:** Two sentences, two gears. The first is the definition and stays quiet on `silently`, while
the unlabelled arrow draws itself. The second is the warning; `surprise` lands with both answers already
on screen. No re-cut — the `because` clause is the reason the first clause is true.

    Coercion is the language doing it silently. Explicit is safer, because coercion rules can surprise you.

## Line 4 — The worked example, in two languages (Frame 4)

**Time:** estimate 5.6s (real VO wins)
**Delivery:** Read the values as values: eight, then fifty three. A small stop before `while`, because
the language changes there, and `in JavaScript` is what makes the second answer true. User's example,
verbatim.

    int('5') + 3 gives 8, while '5' + 3 in JavaScript gives '53'.

## Line 5 — The debate (Frame 5)

**Time:** estimate 2.5s (real VO wins)
**Delivery:** Ask it like a question, not a tag line, and let the frame hold open. Mechanic unchanged;
the ring on screen travels and releases rather than picking.

    Should languages coerce types automatically? Yes or no.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 15 | 5.9 (≈19 spoken: the symbols read as "five plus three", "fifty three") |
| 2 | 10 | 3.4 |
| 3 | 16 | 4.9 |
| 4 | 13 | 5.6 (≈18 spoken, same reason) |
| 5 | 8 | 2.5 |
| **total** | **62** | **~22.3 speech → ~28.3 film with air** |

The 62 written tokens under-count the two code-bearing lines: `'5' + 3` is five spoken words, `'53'` is
two, `int('5')` is two. That is why this part measures closer to 24s of speech than to 19.

## Clarity pass (what changed from the brief, and what did not)

**Nothing in the narration changed.** The hook, all three explain sentences, the example and the CTA
mechanic are the user's words; `CORRECTIONS-day2.md` § A records part 16's explain lines as already
passing the ≤14-word / ≤2-clause law, and `frame-day2.md` § 9 leaves them alone. No term, no claim, no
keyword and no mechanic was altered.

Glosses, each arriving in the same breath as its term, all on the frame that names it:
`casting` → "you converting a type on purpose" (the user's own clause) plus the on-screen
`casting = you write the conversion`; `coercion` → "the language doing it silently" plus
`coercion = the language converts it, unasked`; `explicit` → the `int('5')` tag the viewer can see
written on F2's arrow. **"implicit" is never used**; **"iterate" is never used**; there is no "not X,
it's Y" construction anywhere in this part (that shape is rationed to part 05's hook).

**Language labelling is this part's clarity bar** (`frame-day2.md` § 13). The user's example spans two
languages, so every screen says which one it is: F1's chip `JAVASCRIPT`, F2's titlebar `main.py`/`PYTHON`,
F3's and F4-right's `main.js`/`JAVASCRIPT`, F4-left's `main.py`/`PYTHON`. Python's `'5' + 3` raises
`TypeError: can only concatenate str (not "int") to str` (executed on Python 3.13.15), so an unlabelled
chamber would teach a Python learner a JavaScript rule.

**Spoken code:** `int('5') + 3` → "int five plus three". `'5' + 3` → "five plus three". `'53'` → "fifty
three". `'5' - 3` → "five minus three". The voice never says quotes, parentheses or brackets, and never
says `float`, `==` or `===` — those live in the post copy only.
