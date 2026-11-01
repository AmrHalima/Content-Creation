# SCRIPT — pattern-decorator (EN master, backend-patterns part 8)

**Voice:** Kokoro `af_heart`, local engine (signed out of HeyGen; `.agents/design.md` carries no
ElevenLabs `voice_id`, so ElevenLabs is unusable and is not silently substituted). Campaign lock
`af_heart` at speed **0.74** overrides the house `voices.en = am_michael` for this campaign — see
`writing/backend-patterns/series-bible.md` § 7.
**Voice settings:** default local engine, speed 0.74
**Voice direction:** One engineer explaining the shape of it at a whiteboard, then pricing it. Flat
and unhurried on the claims; the smallest emphasis in the film goes on "instead" in line 3. Never
announced, never "let's break this down", never a lesson preamble. Line 2's "seven classes" is a
fact about somebody else's codebase, delivered without smugness. Line 8 slows down and stops.

**Budget:** 143 spoken words / 8 lines. At ~2.0 words per finished second that is ~72s of narration
against a 78s target (bible § 7 word rate; real durations come from `studio cues` timestamps and
win). Ceiling 90s.

---

## Line 1 — Three behaviours, one service (Frame 1)

**Time:** 0.0 – 8.6s (estimate)
**Delivery:** Dry recognition. The three behaviours are named at even weight, no rhythm, no climb —
they are a ticket, not a list.

    You want caching, retries and logging on one service. Each one changes what the call does.

## Line 2 — Inheritance's bill (Frame 2)

**Time:** 8.6 – 17.1s (estimate)
**Delivery:** Matter of fact, this is evidence. "seven classes" gets one notch of weight and then
it is gone. The last clause lands flat — it is a description of a constraint, not a complaint.

    Inheritance answers that with a subclass per combination. Three behaviours, seven classes, picked before the program runs.

## Line 3 — The wrapper is the same type (Frame 3)

**Time:** 17.1 – 26.1s (estimate)
**Delivery:** Quieter than line 2. "wraps" is the word the frame is built on. The three verbs
("answers", "does", "calls") are three separate beats with a gap after each — the sentence is the
mechanism, so let each part of it arrive.

    A decorator wraps instead. It answers the same interface, does its own work, then calls the object inside.

## Line 4 — Order is a decision (Frame 4)

**Time:** 26.1 – 35.1s (estimate)
**Delivery:** A touch faster; this is the practical part. "a decision" is the whole point and gets
the pause after it. Do not dramatise "gets stored" — it is an observation.

    The order of the rings is a decision. Retry inside the cache, and a retried call gets stored.

## Line 5 — One ring in code (Frame 5)

**Time:** 35.1 – 43.4s (estimate)
**Delivery:** The calm of reading something out loud that has been checked. "small" is the claim,
and the chamber on screen is the proof; do not make it sound like a boast.

    One ring in code is small. The constructor takes the interface, keeps it, and calls through.

## Line 6 — The stack is one expression (Frame 6)

**Time:** 43.6 – 52.6s (estimate)
**Delivery:** Held frame, so the voice carries the motion. "still PaymentGateway" is the payoff and
gets the only real lift in the film. The last sentence is small and final.

    The stack is one expression at the call site. Its type is still PaymentGateway. Nothing downstream knows the difference.

## Line 7 — Seven classes, or three rings (Frame 7)

**Time:** 52.6 – 61.6s (estimate)
**Delivery:** The two halves are read at the same speed on purpose, so the contrast comes from the
numbers rather than from emphasis. Never a victory lap.

    Inheritance needed seven classes, fixed at compile time. Three decorators need three classes and one expression per stack.

## Line 8 — Twelve deep (Frame 8)

**Time:** 61.6 – 72.1s (estimate)
**Delivery:** Slower than the rest, and stop dead on "false". This is the tell the series ends on;
no moral, no advice, no "so be careful".

    Left unchecked, every call site adds a ring. Twelve deep, and a type check on the class you wrapped reads false.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban (bible § 6):** no "it's not X, it's Y" and no "not because X — because Y"
  anywhere. Line 2 states inheritance's answer directly; line 3 says "wraps instead", which is an
  affirmative substitution, not a reveal construction; line 7 is two parallel factual claims.
- **Em-dash ban on short copy:** zero. Not in narration, not in on-screen text, not in captions.
- **Triad cap:** exactly one three-item list, line 1 ("caching, retries and logging"), and it is
  the campaign's ring vocabulary, reused visually rather than re-listed. Line 3's three verbs are a
  sequenced mechanism (answers → does → calls), not an enumerated list, and are not adjacent to it.
- **No mnemonics, no invented terminology.**
- **Order-independence (bible § 2):** the pattern's problem is re-established inside the first two
  lines (16 words, within the ~10-18 window) before any claim. Zero references to other parts, no
  "as we saw", no sibling pattern named at all (recorded in STORYBOARD.md as a deliberate spend of
  the boundary allowance).
- **`@decorator` syntax sugar:** omitted. TypeScript/Python decorators are a definition-time
  transformation, the GoF pattern is a runtime object graph; the difference needs more than one
  clause, so it does not appear. Recorded in `BRIEF.md` `## Notes`.
- **Names and numbers checkable (bible § 6):** `seven classes` = the non-empty subsets of three
  behaviours (3 + 3 + 1 = 7), shown on screen as `2^3 − 1`; `twelve deep` is the illustrative depth
  of the misuse tell, never presented as a measurement. **No line-count claim is made about the code
  fragment:** bible § 4 caps a code chamber at 6 lines and § 5 forbids showing a full class, so the
  fragment is an excerpt (header, constructor, method header, the ring's own work, the call-through)
  and line 5 says "small" rather than a number the excerpt cannot honestly carry.
  No statistics, no benchmarks, no library versions.
- **Customer language** (`.agents/product-marketing.md`): interface, call site, type, combination,
  dependency vocabulary. Forbidden phrases absent: no "unlock", "delve", "journey", "simply put",
  "let's break this down", "think of it as", no lesson announcements.
- **Register:** no beginner framing ("what is a decorator?" never appears); the viewer is assumed to
  have written CRUD and to know what a subclass is.
