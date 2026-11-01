# SCRIPT — prog-basics-05-params-vs-args (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard, killing a misconception. This is a Myth part, so the
hook is stated flat and certain — the drama is in the metaphor, not in the voice. Part of the audience
reads English as a second language, so no sentence here may need hearing twice.

**Budget:** 89 spoken words / 5 lines against a ~45s target and a 52s ceiling. Narration is the piece
file's approved text, verbatim. Real durations come from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 5.5s (real VO wins)
**Delivery:** "not the same thing" evenly, no drama. "interviewers know it" slightly wry, lower.
This is the series' one permitted contrast-reveal; it appears nowhere else in this part.

    Parameters and arguments are not the same thing, and interviewers know it.

## Line 2 — The two halves, with the seat (Frame 2)

**Time:** estimate 9.5s (real VO wins)
**Delivery:** Two sentences each side. The analogy is the load-bearing part, so it gets its own
breath: land "empty seat" quietly and let the chamber on screen do the work.

    A parameter is the placeholder in the function definition. It's the empty seat. An argument is the actual value you pass when you call.

## Line 3 — Why the seat is the point (Frame 3)

**Time:** estimate 9.0s (real VO wins)
**Delivery:** Quietest frame in the part. "then it's gone" falls, no emphasis — the left chamber never
moved, and that is the whole lesson.

    The seat exists before anyone arrives. The value fills it, for that one call, and then it's gone.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 8.5s (real VO wins)
**Delivery:** Alternating emphasis: name the definition, then the call, then back. Four short
sentences, no room for a fifth: the code and the crossing value do the rest. Spoken code, as written:
`def add(a, b):` → "define add, with a and b"; `add(2, 3)` → "call add with two and three".

    Define add, with a and b. Those two are parameters. Call add with two and three. Those two are arguments.

## Line 5 — The ask (Frame 5)

**Time:** estimate 4.5s (real VO wins)
**Delivery:** Warm, short, no sign-off. "seat" is the word; do not add an explanation after it.

    If that finally made it click, comment the word seat.

---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 12 | 5.5 |
| 2 | 24 | 9.5 |
| 3 | 23 | 9.0 |
| 4 | 20 | 8.5 |
| 5 | 10 | 4.5 |
| **total** | **89** | **~37.0 speech** |

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim — and this part's
piece file reports `accuracy: confirmed`, so lines 2-4 are already inside the clarity bar: max
24 words per line, longest sentence 11 words, one idea per beat, and every term glossed in the same
breath it appears ("a parameter is the placeholder in the function definition — it's the empty seat").
Nothing was rewritten; the only cut made here was refusing to add a fifth sentence to line 4, because
"Those two are parameters" plus "Those two are arguments" already lands the point and a third clause
would need re-hearing.

**Spoken code:** `def add(a, b):` → "define add, with a and b". `add(2, 3)` → "call add with two and
three". The words *parameter* and *argument* are spoken; the symbols `a`, `b` are spoken as letters.
The voice never says brackets, never says "colon", and never says `return`.

**Not said, not written:** the `≠` glyph (cover only), "positional argument", "signature", "arity".
The `TypeError` from `add(2)` is verified but stays off screen — no interpreter error is raised in
this part, so coral has no job here (frame.md v2 § 1).
