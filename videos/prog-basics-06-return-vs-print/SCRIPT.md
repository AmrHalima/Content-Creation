# SCRIPT — prog-basics-06-return-vs-print (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard, showing two functions that look the same and are
not the same. Flat and factual on the hook, then the turn lands on "None". No encouragement, no
warm-up. Part of the audience reads English as a second language, so no line may need hearing twice.

**Budget:** 89 spoken words / 5 lines against a ~46s target and a 52s ceiling.
Real durations come from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 5s (real VO wins)
**Delivery:** Dry. It is a claim, not a teaser. Tiny lift on "differently".

    Two functions can look identical and behave completely differently.

## Line 2 — Concept A: return (Frame 2)

**Time:** estimate 9s (real VO wins)
**Delivery:** "hands the result back" is the keyword of the frame and the arrow travels on it.
The second sentence is three quick even beats, no rush.

    A return value hands the result back to whoever called it. The caller keeps it, stores it, builds on it.

## Line 3 — Concept B: side effect (Frame 3)

**Time:** estimate 9s (real VO wins)
**Delivery:** The first sentence is the gloss and must not be rushed — it is the hardest phrase in
the batch. Then two short, plain effects. The verdict that closed this line in the piece ("same thing
on screen, nothing handed back") is spoken one frame later, where F4 opens on it; saying it twice
cost 3.5s of a 46s part and gave F3 two ideas instead of one. On screen it still appears.

    A side effect is something the function does outside itself. It prints on screen. It writes a file.

## Line 4 — The proof (Frame 4)

**Time:** estimate 13s (real VO wins)
**Delivery:** The turn of the part. "None" is said as the word, never as "nothing". Let the last
sentence sit: it is the reason anyone asks for return values.

    Both functions make eight. Return hands it back to y. Print shows it, then returns None. So y equals double of four gives you nothing to work with.

## Line 5 — The debate (Frame 5)

**Time:** estimate 7s (real VO wins)
**Delivery:** Instruction, not cheerleading. No lift at the end.

    So pick a side. Team Return, or Team Print. Say why in the comments.
---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 9 | 5 |
| 2 | 20 | 9 |
| 3 | 18 | 9 |
| 4 | 28 | 13 |
| 5 | 14 | 7 |
| **total** | **89** | **~43** |

Campaign rate is ~2.3 words per finished speech second (measured on part 03: 80 words / 34.75s),
so speech lands near 42s and the film lands near 47s with 1.0s of authored air at every cut.

## Clarity pass (what changed from the piece, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words. Line 5 is re-broken into
three short sentences around the same mechanic ("pick a side", both team names) because a colon in
the middle of a spoken sentence is what makes ears reach for the rewind.

Lines 2, 3 and 4 are explain lines, so they are re-cut for the two quality bars, and nothing was
added or removed in substance:

- **2:** "They keep it…" became "The caller keeps it…". A pronoun whose nearest noun is *function*
  would be heard as *the function keeps it*, which is the opposite of the lesson.
- **3:** "side effect" is glossed in the first five words — something the function does outside
  itself — and the piece's three-term list ("printing to the screen, writing a file, editing a
  global") is cut to two. "a global" is scope vocabulary that pb-07 has not taught yet, so it was
  un-glossed jargon; the slot it vacated is where the visual makes the real point (nothing goes up).
  The line's closing verdict ("same thing on screen, nothing handed back") moved into F4's first two
  sentences, which already say it, so F3 carries one idea instead of two. It stays on screen.
- **4:** re-cut for **truth**, not just pacing. The piece's line said "Both double four, and both
  show eight on the screen", and the second half is not what happens: executed on this machine
  (`.tmp/verify_v6b.py`, Python 3.13.15), `def double(x): return x * 2` followed by
  `y = double(4)` writes **nothing** to the console and binds `8`, while the `print(x * 2)` variant
  writes `8\n` and binds `None`. Saying "both show eight" would have taught the wrong thing — the
  whole difference is that one puts the number on a screen and the other puts it in a name. The new
  line states the true contrast in four sentences of 4, 6, 6 and 13 words and keeps the user's
  approved `None` payoff and its plain-English gloss ("nothing to work with") untouched. It also
  drops the piece's "But", which made the sentence start by arguing.

**Spoken code** (per the piece file): `return x * 2` → "return x times two". `print(x * 2)` →
"print x times two". `None` → "None", capitalised in the voice, never "null", never "nothing".
`y = double(4)` → "y equals double of four". The voice never says brackets or symbols.
