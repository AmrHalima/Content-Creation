# SCRIPT — prog-basics-04-functions (EN master)

**Voice:** Kokoro `af_heart`, speed 0.74, local and offline, pinned by `studio voice` from
`BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person explaining something to a friend who has never coded, at a
whiteboard. Warm and quick, never careful. Part of the audience reads English as a second language,
so no sentence in this script may need hearing twice. Every sentence below is under 14 words and
under three clauses.

**Budget:** 89 spoken words / 5 lines against a ~45s target and a 52s ceiling.
Real durations come from `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 6s (real VO wins)
**Delivery:** No accusation in the voice. It's an observation, delivered flat. Verbatim from the piece file.

    If you copy-paste the same code twice, you're missing something.

## Line 2 — Concept: the named recipe (Frame 2)

**Time:** estimate 9s (real VO wins)
**Delivery:** 'named recipe' is the keyword of the part; the voice lands on it and then goes calm. The three short imperatives are the enumeration itself, so they stay in order and each gets its own breath.

    A function is a named recipe. Write the steps once. Give them a name. Call it whenever you need it.

## Line 3 — Mechanism and payoff (Frame 3)

**Time:** estimate 11s (real VO wins)
**Delivery:** The first sentence is a re-cut of the piece line so the subject is concrete: 'the steps run again' arrives after 'you call it', not before it. Beat before 'Every call gets fixed'. That's the payoff, not the definition.

    Every time you call it, the steps run again. As many times as you want. Fix the recipe once. Every call gets fixed.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 11s (real VO wins)
**Delivery:** 'Two calls, one recipe' is said like a summary of the part, slower. The split calls match the two call chips landing on screen, one after the other.

    Define greet, taking a name. It prints Hi plus the name. Call it with Sara. Call it with Omar. Two calls, one recipe.

## Line 5 — The tag (Frame 5)

**Time:** estimate 5.5s (real VO wins)
**Delivery:** Instruction, not encouragement. The question is open, then the mechanic verb lands flat. CTA mechanic verbatim.

    Who do you know that still copy-pastes? Send this to them.

---

## Word count and rate check

| Line | Words | Est. seconds |
|---|---|---|
| 1 | 10 | 6 |
| 2 | 20 | 9 |
| 3 | 24 | 11 |
| 4 | 23 | 11 |
| 5 | 12 | 5.5 |
| **total** | **89** | **~42.5** |

## Clarity pass (what changed from the piece file, and what did not)

Line 1 (the hook) and the CTA mechanics in line 5 are the user's words, verbatim. Lines 2-4 were
re-cut for the two quality bars: short sentences, one idea per beat, no compound clauses. The only
wording change is line 3's first sentence (`Calling it runs the steps again` → `Every time you call
it, the steps run again`), which puts the concrete actor first; the keyword `named recipe`, the
payoff `fix the recipe once / every call gets fixed` and `Two calls, one recipe` all keep the
piece's own words. No accuracy correction lands in this part (`## Accuracy`: confirmed).

**Spoken code:** `def greet(name):` → "define greet, taking a name". `print('Hi ' + name)` → "it
prints Hi plus the name". `greet('Sara')` → "call it with Sara". The voice never says `def`, never
says brackets, and never says colon.
