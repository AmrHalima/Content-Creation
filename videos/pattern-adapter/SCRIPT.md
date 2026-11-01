# SCRIPT — pattern-adapter (EN master, backend-patterns part 7)

**Voice:** `af_heart` (Kokoro-82M, local, speed 0.74) — pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). This is the campaign's chosen switch for
`backend-patterns`, overriding `.agents/design.md`'s `voices.en = am_michael` for this campaign
only. Kokoro is offline and free; ElevenLabs is unusable here (`voice_id: ""`, and free-tier keys
reject library voices with HTTP 402); HeyGen is not requested. No provider substitution: if the
`af_heart` pin fails, the run reports it instead of falling through.

**Voice settings:** local engine defaults, speed 0.74.

**Voice direction:** One engineer explaining a shape to another at a whiteboard. Flat and unhurried
on the claims, the smallest emphasis in the film on "one interface into another" (it is a
definition, not a boast), and a dry lift on "Then the whole seam is decoration". Never announced,
never "let's break this down", never "think of it as". The three closing lines land quieter than
the anatomy, like someone naming things they have reviewed too many times.

**Budget:** 159 spoken words / 9 lines. Measured on the first TTS pass of this part, `af_heart` at
speed 0.74 delivers ~0.47s per word (133 words over 8 lines came back at 65.1s), so 159 words
should land near 74-77s of narration. Length target ~75-80s, hard ceiling 90s. Calibration from the
sibling film `videos/osi-layers-1-sideways`: 122 words in 63.3s of finished video, ~1.93 words per
finished second including holds. Real durations come from `studio cues` timestamps and win;
`studio voice` runs `sync-durations` against this file.

---

## Line 1 — Two shapes that do not fit (Frame 1)

**Time:** 0.00 – 6.40s
**Delivery:** Dry recognition, slightly faster than the rest of the film. No drama on "different".

    Your code wants one shape. The vendor's SDK hands you a different one.

## Line 2 — What the adapter does (Frame 2)

**Time:** 6.40 – 13.80s
**Delivery:** The definition, stated once, plainly. "neither side changes" is the small
load-bearing clause and gets the only real emphasis in the line.

    An adapter lets them talk, and neither side changes. It converts one interface into another.

## Line 3 — The boundary (Frame 3)

**Time:** 13.80 – 21.20s
**Delivery:** Matter of fact, a reviewer drawing a line. Do not sneer at the factory; it is a
different job, said in one clause and dropped.

    A factory picks which thing to build. An adapter reshapes a thing that already exists.

## Line 4 — The three chambers (Frame 4)

**Time:** 21.20 – 30.50s
**Delivery:** Slower across the first sentence, because the diagram is locking into place under it.
The second sentence is the thing the pattern buys, so it lands flat and final on "exists".

    That seam is where your domain stops and the vendor starts. Nothing in your code knows their
    client exists.

## Line 5 — The code shape (Frame 5)

**Time:** 30.50 – 39.80s
**Delivery:** Read it like you are reading a diff out loud to a colleague. Small pause after
"currency". "the other way round" gets the driest amusement in the film.

    The domain asks for amount, then currency. The vendor wants them the other way round, under a
    different name.

## Line 6 — The return conversion (Frame 6)

**Time:** 39.80 – 48.70s
**Delivery:** Completion, not excitement. Slow down for the last sentence: "one box".

    The answer gets converted too, back into a type you own. Every difference handled in one box.

## Line 7 — What it costs (Frame 7)

**Time:** 48.70 – 58.00s
**Delivery:** Level, no drama, the tone of someone stating a bill rather than apologising for one.
"For different reasons" is the test, so it is said evenly and left alone.

    It costs a layer you maintain on both sides. It pays when the two shapes change for different
    reasons.

## Line 8 — The leak (Frame 8)

**Time:** 58.00 – 67.30s
**Delivery:** Quieter than Frame 4. This is the tell, not a scolding. "decoration" is the last word
of the thought and gets room after it.

    It leaks when the vendor's response type shows up in your caller's signature. Then the whole
    seam is decoration.

## Line 9 — Stacked, and the rule (Frame 9)

**Time:** 67.30 – 78.10s
**Delivery:** The first sentence is weary and dry. The second is the rule, said once, evenly, with
no crescendo, and the film stops when it stops.

    Stacked adapters fail the same way, one layer down. Keep one box per pair of shapes and finish
    the translation inside it.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban ("it's not X, it's Y"):** zero occurrences, including the hook, so the
  campaign's one-occurrence allowance is unspent. Line 3 is two affirmative clauses about two
  different patterns, which is the boundary clause bible § 2 permits, not a contrast reveal.
- **Em-dash ban on short copy:** none in narration, none in on-screen text, none in captions.
- **Triad cap:** zero three-item lists. `amount, then currency` and `currency, amount` are pairs.
- **No mnemonics, no invented terminology:** none. "seam", "leak", "decoration", "coupling",
  "dependency", "ceremony" are the customer-language terms from `.agents/product-marketing.md` and
  the series bible § 6.
- **Beginner framing:** absent. No "what is an adapter", no phase recital; the script assumes the
  viewer has written the caller.
- **Order independence (bible § 2):** Lines 1-2 re-establish the problem in 13 words before the
  first claim. Zero references to other parts; `factory` appears once, to mark a boundary, never to
  borrow authority.
- **Ends on the misuse tell:** Lines 8-9 are the leak and the stack, per bible § 1 and § 3. Line 7
  is the cost, which the brand voice requires ("names tradeoffs") and which sits before the tell,
  never after it.
- **No call to action, no distribution promise:** the film stops on the rule. No article, no series
  plug, no "follow for part 8".
- **Names checkable, nothing invented as real:** `PaymentGateway`, `CheckoutService`,
  `VendorPayAdapter`, `LegacyPayAdapter`, `BankClient`, `Receipt`, `BankResponse`, `toReceipt` are
  this part's own generic vocabulary, named the way a reviewer would name them (bible § 5), not
  claims about any real vendor SDK. No statistics, no benchmarks, no library versions, no real
  vendor names.
- **TypeScript read for correctness:** every fragment shown is type-consistent with every other
  fragment in the film (`charge(amount: number, currency: string)` delegating to
  `doTransaction(currency, amount)` returning `Promise<BankResponse>`, converted by
  `toReceipt(raw: BankResponse): Receipt`, so the `async charge` method infers `Promise<Receipt>`
  and satisfies `implements PaymentGateway`). Argument order, names and return types match across
  Frames 1, 4, 5, 6, 8 and 9.
