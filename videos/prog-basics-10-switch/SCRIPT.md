# SCRIPT — prog-basics-10-switch (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person stating a position and inviting the argument. Flat and mechanical on
F2, a small dry lift on "Saturday also runs Sunday" and nothing else, no lift at the end of F5.
Part of the audience reads English as a second language, so no sentence may need hearing twice.

**Budget:** 88 spoken words / 5 lines against a ~46s target and a 52s ceiling.
Real durations come from `studio cues` and win. The first pass ran 97 words and measured **45.40s** of
speech, i.e. a ~51s film — outside bible § 1's 42-48s format. Lines 2-4 were then re-cut. Nothing was
cut except gloss redundancy; every term still gets its plain-English gloss in the same breath.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 4.5s (real VO wins)
**Delivery:** Even, no punch. "just" is the whole hook, so the voice must not lean on it.

    A switch is just a tidy pile of if statements.

## Line 2 — The position (Frame 2)

**Time:** estimate 11s (real VO wins)
**Delivery:** Flat and mechanical. The definition of `case` comes **after** the example sentence, because a beat may not open on a definition (bible § 2). The last sentence is the comparison, said slightly faster.

    One subject, many cases. A case is one answer to test for. The switch runs the case that fits. An if-chain asks again every line.

## Line 3 — The trap (Frame 3)

**Time:** estimate 12s (real VO wins)
**Delivery:** "stop here" is crisp, it is the gloss. "Saturday also runs Sunday" is the part's only wry beat: say it plainly, do not underline it. The term `falling through` is not spoken; the spilling bar and the on-screen annotation name it.

    Many languages need a break, meaning stop here. Skip it and the case below runs too. Saturday also runs Sunday. Kotlin and Swift never fall through.

## Line 4 — The two languages (Frame 4)

**Time:** estimate 6.5s (real VO wins)
**Delivery:** Read them as names, not as code. Fast, evenly, one small stop before "Python". `default` is on screen but not spoken, so the line stays inside one breath.

    Switch on day, case sat, break. Python's version is match. No break needed.

## Line 5 — The debate (Frame 5)

**Time:** estimate 6s (real VO wins)
**Delivery:** The mechanic verbatim. Invitation, not encouragement.

    So: switch, or the if-else chain. What do you reach for? Argue it below.

---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 10 | 4.5 |
| 2 | 25 | 11 |
| 3 | 26 | 12 |
| 4 | 13 | 6.5 |
| 5 | 14 | 6 |
| **total** | **88** | **~40** |

Two passes were cut. The first (97 words) measured **45.40s** of speech, which with authored air is a
~51s film — outside bible § 1's 42-48s band. The second (90 words) measured 44.40s. This third cut
removes only gloss redundancy and one sentence-final pause per explain line, and re-orders line 2 so
the definition of `case` follows the example instead of opening the beat.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and line 5's mechanic are the user's words, verbatim. Lines 2-4 were re-cut for the
two quality bars: short sentences, one idea per beat, a plain gloss with every term, no compound
clauses. Term glosses, all in the same breath as the term: `case` → "one answer to test for";
`break` → "meaning stop here"; `fall through` → "the case below runs too … that is falling through";
`match` → "in Python, this is match". No accuracy correction lands in the words; the corrections land
in the on-screen code (see `BRIEF.md`).

**Spoken code:** `switch (day) {` → "switch on day". `break;` → "break". `case 'sat':` → "case sat".
`default:` → "default". `match day:` → "match day". `case _:` → never spoken; on screen it is labelled
in the annotation line, not in the voice. The voice never says braces, colons or semicolons.
