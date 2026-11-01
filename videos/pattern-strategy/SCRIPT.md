# SCRIPT — pattern-strategy (EN master, backend-patterns part 4)

**Voice:** `af_heart` (Kokoro-82M, local, speed 0.74) — pinned by `BRIEF.md` and applied by
`studio voice`, which sets `STUDIO_PROVIDER=kokoro` / `STUDIO_VOICE=af_heart` through
`studio/tools/engine.mjs`. This is the campaign's chosen switch away from the house
`voices.en = am_michael` (`writing/backend-patterns/series-bible.md` § 7), and it overrides
`.agents/design.md` for this campaign only.
**Provider status:** `npx hyperframes auth status` → "Not signed in to HeyGen (non-interactive)",
and `.agents/design.md` carries `voice_id: ""` with free-tier ElevenLabs rejecting library voices
(HTTP 402), so Kokoro is the pin, not a fallback substitution. Nothing was substituted silently;
no HeyGen generation was attempted.
**Voice settings:** engine defaults at speed 0.74.
**Voice direction:** One engineer explaining the mechanic to another at a whiteboard, dry and
unhurried. Flat on the claims, the smallest lift of amusement on "is just ceremony". Never
announces a lesson, never "let's break this down", never "think of it as". The two misuse tells
(F6, F7) land quieter than the anatomy, not louder: the payoff is an observation, not a verdict.

**Budget:** 152 spoken words / 7 lines. Calibration from the shipped sibling
`videos/osi-layers-1-sideways`: 122 words measured 63.34s of finished narration (1.93 words per
finished second); this part's own first measured pass came in at **146 words / 72.000s = 2.03
words per finished second** with `af_heart` at 0.74, i.e. 75-80s needs ~152-162 words. Line 3 was
therefore extended by the honest-cost sentence (6 words) before the render pass, landing ~75s
against a 78s brief expectation and a 90s hard ceiling. Real durations come from `studio cues`
timestamps and win; the storyboard's per-frame `duration:` fields are replaced by
`audio.mjs sync-durations`.

---

## Line 1 — The branch is the coupling (Frame 1)

**Time:** 0.0 – 10.5s (estimate)
**Delivery:** Recognition, not setup. "asks for a price" flat. The second sentence is the fact
the viewer already lives with; "is the coupling" lands quietly, as a diagnosis.

    Every checkout asks for a price. The answer depends on the contract. That branch inside the call site is the coupling.

## Line 2 — Behind one signature (Frame 2)

**Time:** 10.5 – 20.0s (estimate)
**Delivery:** The turn. Slightly quicker than line 1, because this is the relief of a thing
getting smaller. Full stop after "signature". "the how" is the last word and gets the only
emphasis in the line.

    Pull the varying behaviour out, behind one signature. The call site keeps the question. The implementations keep the how.

## Line 3 — A list hanging off one arrow (Frame 3)

**Time:** 20.0 – 31.0s (estimate)
**Delivery:** The boundary line is delivered as a fact about two different tools, with no
derision, and it is the only place a sibling pattern is named. Slow down for "and the caller
holds only the interface" — that is the thesis. The last sentence is the honest cost, said as
small print, not as an apology: the dependency does not disappear, it narrows.

    A factory picks which type to build. A strategy picks which behaviour to run, and the caller holds only the interface. The dependency narrows to one name.

## Line 4 — The seam, in four lines (Frame 4)

**Time:** 30.5 – 38.5s (estimate)
**Delivery:** Calm inspection. "one method" gets the smallest stress in the film. The closing
clause is a definition's edge, said plainly, and there is a real pause before "or it is not a
strategy".

    The seam is one method. Every strategy fits that signature, or it is not a strategy.

## Line 5 — The slot, swapped per request (Frame 5)

**Time:** 38.5 – 49.5s (estimate)
**Delivery:** The demonstration. "Swap the object per request" is the only imperative in the
script and it stays level. "with the wiring untouched" is the payoff; slower, and stop.

    The context holds the interface and calls one method. Swap the object per request, and the behaviour changes with the wiring untouched.

## Line 6 — Tell one: share nothing but the interface (Frame 6)

**Time:** 49.5 – 61.0s (estimate)
**Delivery:** Quieter than line 5. This is a code-review objection, not an accusation. Give the
three body clauses their own space, evenly, with no build toward the last one.

    The tell is three strategies that share nothing but the interface. One reads a table, one calls a provider, one returns a constant.

## Line 7 — The before/after, and the seam nobody plugs into (Frame 7)

**Time:** 61.0 – 73.0s (estimate)
**Delivery:** Two flat comparison statements, then the closer. The smallest lift of dry humour in
the film is on "just ceremony", and nothing after it. Do not sell the last word.

    A switch grows a new case per behaviour. A map of strategies grows an entry. A seam nobody ever plugs into is just ceremony.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban (bible § 6):** zero occurrences of "it's not X, it's Y" or "not because X
  — because Y". Line 3 is two affirmative parallel clauses ("A factory picks which type to build.
  A strategy picks which behaviour to run"), which marks a boundary without the reveal template.
  Line 4's "or it is not a strategy" is a conditional edge, and line 6's "share nothing but the
  interface" is the campaign's own wording of the tell. The hook ration is unused, so nothing
  downstream can trip it.
- **Em-dash ban on short copy:** none in narration, none in on-screen text, none in captions.
  (Em-dashes appear in this file's prose headings only, which are not spoken.)
- **Triad cap:** exactly one three-item list in the whole part — line 6's "one reads a table, one
  calls a provider, one returns a constant" — and no list of three appears adjacent to it in the
  narration. The three implementation names in F4/F5/F6 are diagram states shown sequentially in
  the same slot or the same spine, not a spoken or written list, so the cap is not consumed twice.
- **Order independence (bible § 2):** the problem is re-established in the first two sentences
  (12 words). Zero references to other parts. One sibling boundary marker (line 3), used to mark
  a boundary and never to borrow authority: no "like in the factory episode".
- **No mnemonics, no invented terminology:** every noun is standard — call site, coupling, seam,
  signature, interface, context, strategy, switch, ceremony. "Chamber" appears in the visual
  grammar and the storyboard only; it is never spoken.
- **Customer language used** (`.agents/product-marketing.md` / bible § 6): coupling, seam,
  ceremony. No forbidden phrase appears.
- **Names and numbers checkable:** no statistics, no benchmarks, no library versions, no
  framework names. The only numerals on screen are code punctuation and the illustrative literal
  `40` inside one strategy body, which is an invented-domain constant, not a claim about the
  world; it is labelled as such in `frame.md` terms (decoration, not a stat).
- **Every identifier belongs to this film's own domain model** (`Cart`, `PricingStrategy`,
  `Checkout`, `Plan`, `StandardPricing`, `ContractPricing`, `SeasonalPricing`, `terms.discount`),
  so no third-party API is invented. Each snippet was read for TypeScript correctness before
  being put on screen: `constructor(private s: PricingStrategy) {}` is a valid parameter property,
  `Record<Plan, PricingStrategy>` needs `Plan` declared as a union, and a class may legally
  `implement` the interface (the F4 chips assert fitting the signature, not a specific `implements`
  clause on screen).
- **No narration sentence is ever rendered as on-screen text.** Frames carry mono identifiers,
  2–3 word tags, and code; the spoken words live in the caption lane only.
