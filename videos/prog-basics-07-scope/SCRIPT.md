# SCRIPT — prog-basics-07-scope (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person explaining something to a friend who has never coded, at a
whiteboard. Warm and quick, never careful. Part of the audience reads English as a second language,
so no sentence in this script may need hearing twice.

**Budget:** 88 spoken words / 5 lines against a ~44s target and a 54s ceiling.
Real durations come from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 5.5s (real VO wins)
**Delivery:** Say 'not exist' as the quoted feeling, slightly wry.

    Why does your variable not exist one line later?

## Line 2 — Concept A (Frame 2)

**Time:** estimate 9.5s (real VO wins)
**Delivery:** 'visible' is the keyword. Three short sentences.

    Scope decides where a name is visible. Inside the function, x is real. Outside, it never was.

## Line 3 — Concept B (Frame 3)

**Time:** estimate 12s (real VO wins)
**Delivery:** Flat on 'two boxes, one label' — that is the trap, and it does not need help.

    The box is made inside, and it dies inside. A global x with the same name never changed. Two boxes, one label.

## Line 4 — The example (Frame 4)

**Time:** estimate 14s (real VO wins)
**Delivery:** 'Still ninety-nine' after a real pause: that is the reveal the whole part is built on. Then NameError, said as the name.

    Outside the wall, x is ninety-nine. Inside f, x becomes one. Call f, then print x. Still ninety-nine. Now reach for f's x from outside: NameError.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 8.4s (real VO wins)
**Delivery:** Keep the mechanic; the two names are the quiz.

    Which scope error have you hit the most? Comment the name: NameError or UnboundLocalError.
---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 9 | 5.5 |
| 2 | 17 | 9.5 |
| 3 | 22 | 12 |
| 4 | 26 | 14 |
| 5 | 14 | 8.4 |
| **total** | **88** | **~49.4** |

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanics in line 5 are the user's words, verbatim. Lines 2-4 were
re-cut for the two quality bars: short sentences, one idea per beat, a plain gloss with every term,
no compound clauses. This part also ships accuracy correction #7; the composition is built around
the AFTER wording.

Two deliberate departures from the piece table, both for the heard-once bar: F3's "And if a global
already carries that name, the outer one never changes." became "A global x with the same name never
changed." (a conditional with a front-loaded 'if' needs re-hearing), and F4's opener names the place
by the thing the viewer is looking at — "Outside the wall" — instead of stacking a third synonym
("top level") on top of "module" and "outside".

Every term gets its gloss in the same breath it appears: **scope** = where a name is visible ·
**local box / the wall** = the inside of a function · **global** = "a global x with the same name",
shown in the outer room · **NameError** = the interpreter saying it has no such name, on the trace
strip.

**Spoken code:** `NameError` and `UnboundLocalError` are spoken as the names, run together, exactly
as written on screen. `x = 99` → "outside the wall, x is ninety-nine". `def f(): x = 1` → "inside f,
x becomes one". `f(); print(x)` → "call f, then print x". The voice never says parentheses or
semicolons.
