# SCRIPT — pattern-factory (EN master, backend-patterns part 2)

**Voice:** af_heart (Kokoro-82M, local, speed 0.74 — signed out of HeyGen, and
`.agents/design.md` carries no ElevenLabs `voice_id`; the campaign's chosen switch away from
`am_michael`, per `writing/backend-patterns/series-bible.md` § 7)
**Voice settings:** default local engine, speed 0.74
**Voice direction:** One engineer explaining a shape they have reviewed many times. Flat and
 unhurried on the claims, the smallest lift of recognition on "the caller knows every gateway
 it can build", and the last line delivered as a fact, not a warning. Never a lecturer, never
 "let's break this down".

**Budget:** 158 spoken words / 8 lines. At the campaign's planning rate of ~2.0 words per
finished second that is ~79s of narration against the 78s target, inside the 90s ceiling. The
sibling film `videos/osi-layers-1-sideways` measured 1.93 words per finished second at the
same speed, so the real cut should land near 82s. Real durations come from `studio cues`
timestamps and win.

---

## Line 1 — The question at the call site (Frame 1)

**Time:** 0.0 – 8.5s (guide)
**Delivery:** Land the question and stop. "which concrete type" is the whole film in three
words; give it its own breath.

    A caller that builds an object answers one question first: which concrete type. The factory owns that answer.

## Line 2 — The branch in the caller (Frame 2)

**Time:** 8.5 – 20.0s (guide)
**Delivery:** Recite the three moves the way they get written, evenly, no drama. The last
sentence is the cost, said quietly.

    Today the caller does it itself. Read a config value, branch, call the constructor. Now the caller knows every gateway it can build.

## Line 3 — The move (Frame 3)

**Time:** 20.0 – 28.5s (guide)
**Delivery:** Three short statements, each its own beat. Leave a gap after "away".

    A factory takes that question away. The caller asks for a gateway. The factory decides which one.

## Line 4 — The anatomy (Frame 4)

**Time:** 28.5 – 38.0s (guide)
**Delivery:** The calmest line in the part. It is describing a diagram that is already on
screen, so nothing needs pushing.

    The dependency points down through the seam. The caller holds the interface. The factory below holds the concrete classes.

## Line 5 — The shape of the seam (Frame 5)

**Time:** 38.0 – 47.0s (guide)
**Delivery:** Matter of fact. "returns the interface" gets the only weight, and the last
sentence lands flat.

    The seam is a signature. It takes a discriminator and returns the interface. That is all the caller sees.

## Line 6 — The caller now (Frame 6)

**Time:** 47.0 – 55.0s (guide)
**Delivery:** Slightly quicker, this is the easy part now. Let "comes back" finish the line
without a push.

    So the call site is one line. The config value goes in, a gateway comes back.

## Line 7 — A new type lands (Frame 7)

**Time:** 55.0 – 66.5s (guide)
**Delivery:** The tradeoff, named once. "never heard of it" carries a dry amusement; the last
phrase is a statement about where a problem is allowed to live.

    When a new gateway lands, the change is inside the factory. Callers never heard of it, so coupling stays out of the domain.

## Line 8 — The tell (Frame 8)

**Time:** 66.5 – 78.5s (guide)
**Delivery:** The closing claim, delivered as an inspection note rather than a warning.
"nothing to choose" is the hinge; "ceremony" is the last word in the film and gets a full stop
before it.

    Here is the tell. A factory that forwards one argument list to one constructor has nothing to choose. Keep it and you have ceremony.

---

## Constraint audit (run against this script before any TTS is spent)

- **Contrast-reveal ban (series § 6):** zero occurrences, in the hook and everywhere else. No
  "it's not X, it's Y", no "not because X — because Y". Every claim is stated directly.
- **Em-dash ban on short copy:** zero in narration, therefore zero in captions, therefore zero
  in on-screen text.
- **Triad cap:** exactly one three-item list, Line 2 ("Read a config value, branch, call the
  constructor"). Line 5's "takes a discriminator and returns the interface" is a pair. No two
  lists in a row.
- **No mnemonics, no invented terminology:** `seam`, `discriminator`, `coupling`, `ceremony`,
  `call site`, `dependency` are all standard practitioner vocabulary (seam and ceremony come
  from the customer-language list in `.agents/product-marketing.md`).
- **No beginner framing:** nothing asks or answers "what is a factory?"; Line 1 opens on the
  call site's problem.
- **Order independence (series § 2):** the first two lines re-establish the problem in 18
  words before any claim. Zero references to other parts, no "as we saw". No sibling pattern
  is named (permitted once as a boundary, deliberately not taken).
- **Names and numbers must be checkable (series § 6):** every type name is real TypeScript the
  viewer could compile (`PaymentGateway`, `GatewayConfig`, `createGateway`, `StripeGateway`);
  the only numerals on screen are the ones countable in the shown code (2 named types in F2,
  1 line in F6, 3 implementations in F7, 1 argument in F8). No statistics, no benchmarks, no
  library versions.
- **Forbidden phrases:** none of "In today's fast-paced world", "unlock", "delve", "journey",
  "simply put", "let's break this down", "think of it as", and nothing that announces a lesson.
