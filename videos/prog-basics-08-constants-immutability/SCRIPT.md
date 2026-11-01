# SCRIPT — prog-basics-08-constants-immutability (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person explaining something to a friend who has never coded, at a
whiteboard. Flat and factual, never encouraging. Part of the audience reads English as a second
language, so no sentence in this script may need hearing twice. Every sentence below is 10 words or
fewer, one clause, no em-dash, no semicolon.

**Budget:** 87 spoken words / 5 lines against a ~45s target and a 52s ceiling. Real durations come
from `studio cues` and win.

**The three terms and where each one is glossed** (this is the part's clarity contract):
`constant` → "a name you promise never to change" (same breath, line 2).
`immutable` → "the value itself refuses to change" (same breath, line 3).
`reassign` → never spoken. It exists on screen only inside a Python comment, in line 4's code, after
the promise has already been said in plain words.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 4.5s (real VO wins)
**Delivery:** Flat. It sounds like a paradox and needs no help. Verbatim from the piece file.

    The safest variable is the one that can't change.

## Line 2 — A constant is a promise (Frame 2)

**Time:** estimate 8.5s (real VO wins)
**Delivery:** The first sentence is the gloss; say it level, no emphasis on the word "constant". The
second sentence is the fact that surprises people, so it drops. "Nothing stops you" is three words,
each on its own breath — the `500` value walks straight in on screen while it is said.

    A constant is a name you promise never to change. Python does not check that promise. Nothing stops you.

## Line 3 — Immutable is enforced (Frame 3)

**Time:** estimate 8s (real VO wins)
**Delivery:** Slightly faster than line 2; the contrast is in the pace, not in the voice. "refuses"
is the load-bearing word — the value is the one doing the refusing. The last three words are the
mirror of line 2's last three, and they land on the tile that will not open. `Its letters are locked`
moved off the voice and onto the screen as F3's annotation: one sentence per beat, and the border
weight is already saying it.

    Immutable means the value itself refuses to change. A string is immutable. Python stops you.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 12s (real VO wins)
**Delivery:** Five single-clause sentences, one per on-screen move. Read the name as a name, then the
number. "all caps means constant" is the shortest possible form of the piece's convention line — the
on-screen comment carries the rest. Slow down on "TypeError" and let it sit: that is the proof, and
it is real interpreter text.

    Max users is one hundred. All caps means constant. Now s is hi. Put a capital H at position zero. Python answers TypeError.

## Line 5 — The save (Frame 5)

**Time:** estimate 9s (real VO wins)
**Delivery:** Instruction, no encouragement, no lift at the end. The first sentence is the CTA
mechanic, verbatim. The last sentence turns the distinction into something to go and look for.

    Save this for your next code review. Look for a name you promised never to change. Then check if it changed.

---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 9 | 4.5 |
| 2 | 19 | 8.5 |
| 3 | 15 | 8.0 |
| 4 | 23 | 12.0 |
| 5 | 21 | 9.0 |
| **total** | **87** | **~42.0** |

## Clarity pass (what changed from the piece file, and what did not)

Line 1 (the hook) and line 5's `Save this for your next code review.` (the CTA mechanic) are the
user's words, verbatim. Lines 2-4 are explain lines and were re-cut against the one-hearing bar:

- line 2: `A constant is a name you agree never to reassign` → `... you promise never to change`,
  because "reassign" and "agree" both need a gloss of their own while "promise ... change" is its own
  gloss. `Python does not enforce it` → `Python does not check that promise`: "enforce" is the word
  the frame is building toward and it must not be spent here. `Nothing stops you` is the piece's own
  sentence and the `## Accuracy` proposal, kept word for word. `The agreement is the mechanism` moves
  off the voice and onto the screen as F2's annotation, where a learner can read it twice.
- line 3: the piece's `Immutability is different, and that one is enforced` is a compound clause and
  uses the abstract noun; it becomes `Immutable means the value itself refuses to change`, which
  glosses the term in the same breath and makes the value the actor. `A string is one.` was the
  piece's ending — three words that force the ear to reach back for a noun — so the string is named
  in its own sentence instead. `Its letters are locked` moved off the voice and onto the screen as
  F3's annotation: the thick border is already saying it, and this frame had to lose two seconds to
  the 52s ceiling.
- line 4: the piece's line is two compound clauses (`... and all caps ...`, `Try to ... and Python
  answers ...`). Split into five sentences, one per on-screen move, so no beat carries two ideas.
  `set s at zero to a capital H` → `Put a capital H at position zero`, which says the same thing
  without asking the listener to parse an assignment backwards. `all caps is how you say constant` →
  `all caps means constant`, six syllables instead of eleven, because the measured read of this line
  was running 13.7s against an 11.5s window. `MAX_USERS` is written `Max users` for the voice: the
  underscore breaks Kokoro's reading and the piece's own spoken-code note prefers "MAX USERS". The
  on-screen code keeps `MAX_USERS`.
- No accuracy correction lands in this part: every fragment was executed on Python 3.13.15
  (`.tmp/verify_pb08.py`), and the `# TypeError` line on screen is the interpreter's exact text.

**Spoken code:** `MAX_USERS = 100` → "Max users is one hundred". `s = 'hi'` → "Now s is hi".
`s[0] = 'H'` → "Put a capital H at position zero". The voice never says brackets, never says
underscore, never says "item assignment" — the terminal strip on screen carries that verbatim.
