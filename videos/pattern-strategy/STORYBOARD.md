---
format: 1080x1920
duration: 78s
message: "Strategy is a behaviour you can swap at runtime behind one signature; the caller says what, not how"
arc: structural-explainer (the branch → the extraction → the anatomy → the code → the swap → tell 1 → the before/after + tell 2)
audience: backend developers who have written CRUD, have seen the UML box, and want the mechanics and the misuse named precisely
mode: autonomous
series: backend-patterns
part: 4 of 10
music: none
sfx: none
captions: en
---

# STORYBOARD — pattern-strategy

Part 4 of the `backend-patterns` campaign. English master, portrait 1080x1920, ~78s, hard
ceiling 90s. Frame numbering is canonical for this part: `SCRIPT.md`'s `Frame N` labels map 1:1
onto `Frame N` here, in order. Grammar per `writing/backend-patterns/series-bible.md` § 4:
**R** (three-chamber call graph) is the spine, **C** (code chamber) appears twice, **X**
(before/after) is the last frame.

## Order independence (series rule § 2 — checked on paper before any TTS was spent)

**Check A — does any line presuppose another part?** No. F1 opens on the object (a checkout
asking for a price), and the first two sentences (12 words) re-establish the problem before any
claim: *"Every checkout asks for a price. The answer depends on the contract."* F2 names the
move. F3 is the only place a sibling pattern appears, and it marks a boundary rather than
borrowing authority: *"A factory picks which type to build. A strategy picks which behaviour to
run."* A viewer who has never seen part 2 knows what a factory is; the line needs no prior
episode. No "as we saw", no "part", no running gag. F6 and F7 are the misuse tells, and both
stand on this film's own diagram.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F4 ↔ F5** (the interface ↔ the context). PASS on truth, FAIL on craft. Both are
  single-declaration code chambers, and neither claim depends on the other's order. Kept as
  written because F4 establishes the signature the narration calls *the seam*, and F5's whole
  beat is a slot typed as that seam — the slot reads as untyped if the interface has not landed.
- **Swap F6 ↔ F7** (tell 1 ↔ the before/after + tell 2). FAIL, deliberately. Bible § 4 fixes
  Grammar X as the final frame ("the one the viewer screenshots") and § 1 fixes the misuse tell
  as the ending; F7 carries both. F6 exists to make F7's *fixed* shape unsafe, which only works
  after the fixed shape has been shown to be reachable.

Conclusion: the sequence is load-bearing at F3→F4→F5 (anatomy before code, interface before
context) and free elsewhere.

## Grammar decisions (bible § 4, and where this part breaks local precedent)

- **R is the spine and Strategy fits it better than any other part**: the seam is not one
  implementation but a **list hanging off one arrow**. F1 (branch field), F2 (caller / seam /
  one implementation), F3 (caller / seam / three implementations + the import direction), F6
  (the same list, semantics broken) are all the three-chamber graph. The graph never disappears
  while the narration names the pattern.
- **C twice, never a full class**: F4 is the `PricingStrategy` interface (4 lines), F5 is the
  `Checkout` context (6 lines). One declaration per fragment. Both inside a dark chamber, load-
  bearing tokens in Ember `#FFA946` / Lavender `#F0D7FF`, everything else `#8A8A7A` muted ink.
- **X is F7, stacked — recorded as a portrait customization.** Bible § 4 allows side-by-side
  only when both fragments are ≤3 lines; the switch needs 4 and the map needs 4. At 1080px,
  two 4-line mono panels side by side would put each panel under the 1.4cqw legibility floor, so
  F7 stacks the wrong shape above the fixed shape. This is the `sdlc` "never side-by-side"
  precedent being *followed for a measured reason*, not inherited: at 1080x1920 vertical space is
  the scarce axis and the frame still fits 4+4 lines plus two annotations inside y ≤ 1594.
- **Measured, not assumed**: F7 (densest) and F5 (the swap) are snapshot-checked at 1080x1920
  before the render, and the strategy-name swap is proved by two snapshots on either side of a
  swap timestamp — a passing `check` is not evidence it moved.

## Video direction

One look and one motion grammar across all seven frames. Per-frame Scene lines carry only the
delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never invented):
  ground `cream #FFFFEB`, voice `ink #1A1A1A`. **Ember `#FFA946` (frame.md's `coral`) is the
  voltage** and marks only what is live in the beat: the active connector, the swapped name, the
  one marker outside a code chamber. **At most one ember element per frame** (`frame.md`:
  coral rationed to one moment; the campaign's 2px-border signature is ink on cream, cream on
  navy). `tile #D0FDF8` / `tile-strong #034F46` stay out of this part except as forest inner
  chips where a chip must read as brand-secondary; **Lavender `#F0D7FF` appears only inside
  Grammar C chambers** as the second load-bearing token class (bible § 4), never as a headline
  colour, because `design.md` makes it the primary-action hue and a diagram has no actions.
  Inactive structure (unfocused chambers, retired connectors, muted code) is `#8A8A7A`-family ink
  at ≤55% on cream — so the ember reads as current, not decorative.
- **The three-chamber chamber recipe** (`frame.md` § Shapes / design.md surfaces): caller and
  implementation are cream boxes with the **2px ink border** and radius 8; **the seam is a dark
  chamber** — `navy #181715` fill, 1px cream@14% hairline, cream text (bible § 4: "the seam box
  sits in a dark chamber"). Dependency arrows point **down**; the import arrow points **back up**
  and is drawn dashed wherever knowledge flow matters (F3, F6). No shadows, no gradients, no
  rotation.
- **Motion grammar**: one camera, one grid, hard cuts plus 0.35–0.5s crossfades only. Every
  entrance is a `fromTo` long-tail settle (`power3.out` / `expo.out` arrival, `power1.inOut` for
  fades); **no overshoot, no elastic, no `rotateX/Y/Z` anywhere** — `frame.md` bans the tilt, so
  `comparison-split`'s signature book-open tilt is explicitly dropped in F7 and its split shape
  and mirrored arrival are kept instead. Connectors arrive by `svg-path-draw` (measure
  `getTotalLength()`, dasharray→dashoffset), chips by `spring-pop-entrance` in its restrained
  register (smooth settle, scale 0.94→1), the strategy list by `center-outward-expansion` off
  the seam's spine. **All in-place text change is `discrete-text-sequence`** — a `{t, text}`
  array read by a time proxy whose `onUpdate` assigns `textContent`, reverse-searched, with a
  `min-width` on the wrap. There is **no TextPlugin in the shipped GSAP**, so a `text:` tween is
  a silent no-op that still passes `check` (`studio/known-traps.md` #3, live Learnings row).
  Reveals are paced to the VO across the back ~50% of each frame; nothing front-loads; during a
  hold the only aliveness is `sine-wave-loop` jitter at low amplitude on one held element.
- **Rhythm / held-frame allocation**: F3 (the list landing) and F5 (the swap) are the two energy
  peaks. **F4 is the deliberate held read** — by ~6s of its window the interface is complete and
  only one lavender marker stays alive; a code chamber that keeps animating stops being evidence.
  F7 is fully still in its back third by design: the last two seconds are the screenshot.
- **Caption keep-out**: content caps at **y = 1594** on the 1920 canvas; the hero axis of any
  centered beat sits at y ≈ 0.42 × 1920 ≈ 806. Kicker mono chrome sits at y ≈ 150, chambers are
  laid out inside y ∈ [150, 1560]. Background fields (paper, hairline grid) are exempt and stay
  full-bleed. Nothing load-bearing under the cap in any frame; verified per frame by snapshot.
- **Negative list — never appears**: a contrarian hook or an invented controversy; beginner
  framing ("what is a strategy?"); mnemonics; any reference to another part of the series;
  em-dashes in on-screen text or captions; a second three-item list; a fourth named box in one
  frame (bible § 4 caps it at three); a code fragment over 6 lines or showing a full class body;
  a real framework name (none is needed); an invented third-party API (every identifier belongs
  to this film's own domain model); a redrawn logo (there is none); gradient text, text shadow,
  glow, tilt; any on-screen claim the script does not make, and vice versa.
- **On-screen type is a label, never the narration's echo.** Spoken sentences live in the
  caption lane only. On screen: mono identifiers (`PricingStrategy`, `ContractPricing`,
  `price(cart)`), 2–3 word tags (`the seam`, `edits here`, `never swapped`), and real code
  inside the chambers (code is content, not narration).

## Frame 1 — The branch is the coupling

- scene: a checkout card asks for a price, and the answer's three possible owners arrive as a branch field under it
- duration: 9.685s
- poster: 8.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-the-branch.html
- type: hook
- persuasion: Frame-then-fill — stage the shape of the problem before naming it
- beat: recognition, then the small irritation of a file everyone edits
- blueprint: kinetic-type-beats (Adapt)
- focal: the call-site card
- roles: call-site card = foreground subject · branch connectors = supporting · three branch target chips = supporting · ember "edits here" marker = the frame's single voltage · paper field + hairline grid = background (full-bleed, unlit)
- sfx: none

Adapt: keep the beat relay — each short statement lands alone and holds — but the beats are
diagram elements, not words: the call card, then the branch, then the chips, then the marker.
Drop the scale-pop relay and the logo resolution; this frame has no brand to reveal.

narrativeRole: Re-establishes the problem this part exists for, inside the first two sentences.
keyMessage: "The call site has to know which rule answers."

Scene 1 (0.0–1.2s): full-bleed cream field + hairline grid; kicker `✱ STRATEGY` (JetBrains Mono,
uppercase, ember ✱) settles at y 150. The call-site card (`checkout.total()`, EB Garamond label +
mono call) arrives centre-high at y ≈ 560 via `spring-pop-entrance` (restrained) as line 1 cue 1
("Every checkout") lands.
Scene 2 (1.2–4.0s): "The answer depends on the contract" — one branch connector draws down-left
and one down-right from the card's base via `svg-path-draw`, and a cream chip lands at each end
(`standard`, `contract`) with `center-outward-expansion` from the fork point, stagger capped well
under 0.5s arrival so the pair reads as one branch, not two slides.
Scene 3 (4.0–7.2s): VO turns to "That branch inside the call site" — the two chips dim to 55% ink
and a third branch slot (an empty fork, dashed) draws in to say the field grows rather than
landing another name; the card's border thickens to the 2px ink signature (a `fromTo` on
`borderColor`, not a layout property).
Scene 4 (7.2–10.5s): "is the coupling" — the frame's **one ember element**, a small mono tag
`edits here`, settles at the fork vertex on that word, and `sine-wave-loop` jitter at low
amplitude runs on the branch group to the cut. Nothing else moves.

## Frame 2 — Behind one signature

- scene: the branch lifts out of the caller and collapses into one dark seam chamber holding a single method
- duration: 10.219s
- poster: 7.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-the-extraction.html
- type: pain_point → turn
- persuasion: Signposting — show the seam before naming it
- beat: relief of a thing getting smaller
- blueprint: spatial-pan-stations (Adapt)
- focal: the seam chamber
- roles: caller box = supporting (top) · seam chamber = foreground subject (middle, dark) · one implementation chip = supporting (bottom) · dependency connectors = foreground · retired branch stubs = background · mono `price(cart): number` = the seam's content
- sfx: none

Adapt: keep the station-to-station pan and the one-arrow-per-seam reading; change the axis from a
lateral pan to a **vertical** one (portrait, and Grammar R is stacked), and the stations are the
three chambers rather than milestones.

narrativeRole: The move itself — one sharp idea: the varying behaviour leaves the caller.
keyMessage: "Pull the behaviour out behind one signature; the caller keeps the question."

Scene 1 (0.0–2.0s): the caller box holds at y ≈ 300 with its 2px ink border, labelled `caller` in
mono; the retired branch stubs from F1 fade to 30% inside it. On "Pull the varying behaviour out"
two cream chips **travel** down-left and down-right off the caller's base and dissolve into the
seam's top edge (transform-only `x`/`y` + `opacity`; both chips are `display:inline-flex`, never
inline spans, per `known-traps.md` #2).
Scene 2 (2.0–4.6s): the seam chamber arrives at y ≈ 780 (hero axis) — navy fill, cream hairline —
and its mono content `price(cart): number` reveals left-to-right via `svg-path-draw` on a mask
line, **not** a text tween. One dependency connector draws from caller to seam.
Scene 3 (4.6–7.0s): "The call site keeps the question" — a small cream tag `what` settles on the
caller's right edge; "the implementations keep the how" — an implementation chip `ContractPricing`
arrives below the seam at y ≈ 1230 with a second connector drawn from seam to chip.
Scene 4 (7.0–9.5s): the frame's single ember: the seam→implementation connector re-colours to
ember as the active path, then `sine-wave-loop` jitter on that connector only to the cut.

## Frame 3 — A list hanging off one arrow

- scene: the seam gains a spine and three interchangeable implementations, and the import arrows point back up
- duration: 13.611s
- poster: 9s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-the-list.html
- type: product_feature (the anatomy)
- persuasion: Concrete picture + spatial metaphor made literal (one arrow, a list off it)
- beat: the click of a diagram finally matching the code
- blueprint: constellation-hub (Adapt)
- focal: the seam chamber as hub
- roles: caller box = supporting (top) · seam chamber = foreground hub (middle, dark) · three implementation chips = the orbiting set, stacked · downward dependency arrow = foreground · dashed upward import arrows = supporting · `which behaviour` mono note = supporting
- sfx: none

Adapt: keep the hub-with-nodes-and-connectors shape and the camera push-in on the hub; replace the
constellation's orbit and scatter with a **vertical stack** of three chips off the hub's spine,
because Grammar R stacks and portrait has no room for an orbit that reads as hierarchy.

narrativeRole: Names the boundary and the anatomy in one frame — the film's thesis image.
keyMessage: "The caller holds the interface; any behaviour satisfying it can stand in the slot."

Scene 1 (0.0–2.4s): three-chamber field already composed from F2's landing (caller y 270, seam
y 760, spine down to y 1500). On "A factory picks which type to build" a struck-through mono tag
`which type` appears at the caller's edge and retires at 2.2s (a within-frame seam, not an exit
tween on a clip).
Scene 2 (2.4–5.4s): "A strategy picks which behaviour to run" — the first implementation chip
`StandardPricing` slides onto the spine, then `ContractPricing`, then `SeasonalPricing`, each
arriving by `center-outward-expansion` from the spine's left edge with a 0.42s cadence; each gets
its own short connector drawn by `svg-path-draw`.
Scene 3 (5.4–8.0s): "and the caller holds only the interface" — the **solid** dependency arrow
from caller to seam is redrawn thicker in ink while the three chip connectors stay hairline, and
the implementation chips' own upward **dashed import arrows** draw toward the seam on the right
rail, showing which way knowledge flows.
Scene 4 (8.0–10.9s): "The dependency narrows to one name" — the honest cost, and the frame's one
ember moment. The camera push-in on the hub is a `scale` settle on the whole graph group to 1.03
(`power2.out`, no rotation), the **caller→seam arrow** re-colours to ember as the single
dependency that remains, and the three implementation chips' names dim one step so the lit arrow
is the sentence. `sine-wave-loop` jitter on the spine to the cut.

## Frame 4 — The seam, in four lines

- scene: a dark code chamber types out the PricingStrategy interface and one lavender marker names the method
- duration: 7.765s
- poster: 6.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-the-interface.html
- type: product_feature (Grammar C)
- persuasion: Evidence — the claim is a file you could open
- beat: calm inspection
- blueprint: typewriter-reveal (Adapt)
- focal: the interface declaration
- roles: navy code chamber = foreground subject · filename chrome `pricing-strategy.ts` = supporting · mono line gutter = supporting · lavender `one method` marker = the second token class · three `implements` chips = supporting (below, cream)
- sfx: none

Adapt: keep the progressive reveal of a line of text and the hold; drop the collapse-to-brand
resolution — the payoff here is the marker, not a logo.

narrativeRole: The code shape, first half: what the seam literally is.
keyMessage: "The seam is one method; anything that fits it is a strategy."

Scene 1 (0.0–1.4s): cream field; the navy chamber is framed in cream at y 320–900 (radius 8,
1px cream@14% hairline) with its `navy-elev` title bar and the mono filename `pricing-strategy.ts`
left-aligned. Grid line `1..4` gutter in muted ink.
Scene 2 (1.4–4.4s): the four lines arrive one per beat, each a whole line (not a character crawl):
`interface PricingStrategy {` / `  price(cart: Cart): number;` / `}` — `PricingStrategy` and
`price` in **ember**, everything else `#8A8A7A`, `Cart`/`number` in muted ink. First line lands on
"The seam is one method", the method line on "one method".
Scene 3 (4.4–6.4s): "Every strategy fits that signature" — a **lavender** hairline brackets the
method line and a lavender mono marker `one method` settles at its right; the chamber's chrome
stays still.
Scene 4 (6.4–8.0s): "or it is not a strategy" — three cream chips assemble below the chamber
(`StandardPricing`, `ContractPricing`, `SeasonalPricing`) each tethered to the bracket by a
hairline, plus one dashed chip that arrives and **fails to tether** (its connector stays dashed,
muted) — the edge case, drawn rather than asserted. Low-amplitude jitter on the tether group only.

## Frame 5 — The slot, swapped per request

- scene: the Checkout context holds the interface and its slot's strategy name changes in place, twice, while the code stays identical
- duration: 11.755s
- poster: 9s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-the-swap.html
- type: benefit (the runtime claim pays here)
- persuasion: Demonstration — the same code, a different answer
- beat: the satisfying "nothing else changed"
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the strategy slot inside the context chamber
- roles: navy context chamber = the fixed anchor · the slot's strategy name = the cycling element (discrete-text-sequence) · request chips `req 1 / req 2 / req 3` = supporting · `total(cart)` result rail = supporting · ember slot underline = the frame's single voltage · untouched code lines = background evidence
- sfx: none

Adapt: keep the pinned-centre element whose skin re-skins per beat and the clear into a closing
statement; the anchor is the code chamber, the cycling element is one identifier inside it, and
the closing statement is the connector rail rather than a brand line.

narrativeRole: The claim's second half — swappable at runtime, behind one signature.
keyMessage: "Swap the object per request; the wiring is untouched."

Scene 1 (0.0–2.2s): the chamber arrives at y 300–1010 with filename chrome `checkout.ts`; its six
lines are already typed in muted ink except the slot declaration, which reveals on
"The context holds the interface": `private s: PricingStrategy,` with `PricingStrategy` in ember.
Scene 2 (2.2–5.4s): "and calls one method" — a hairline highlight draws under
`return this.s.price(cart);` and `this.s.price` lifts to **lavender**; request chip `req 1`
settles at the chamber's left edge tethered to the slot line.
Scene 3 (5.4–8.6s): "Swap the object per request" — the slot's rendered name changes **in place**
by `discrete-text-sequence`: `StandardPricing` → `ContractPricing` → `SeasonalPricing`, each swap
on a request chip arriving (`req 2`, `req 3`) with an instant jump, monospace, `min-width` on the
wrap, and the ember underline travelling one step (x-only). No code line around it moves.
Scene 4 (8.6–11.0s): "and the behaviour changes with the wiring untouched" — the six code lines
dim to 70% except the slot and the call line (which stay full ink), and the result rail ticks
through three muted values as a `counting-dynamic-scale` settle without a counter claim (three
neutral slot markers, not numbers). `sine-wave-loop` jitter on the ember underline to the cut.

## Frame 6 — Tell one: the interface is the only thing they share

- scene: three implementations keep identical signatures while their bodies are revealed as unrelated
- duration: 11.456s
- poster: 10s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-share-nothing.html
- type: pain_point (the misuse tell)
- persuasion: Contrast of evidence — same shape, unrelated meaning, shown in one field
- beat: suspicion curdling into a code-review objection
- blueprint: grid-card-assemble (Adapt)
- focal: the signature row across three cards
- roles: three implementation cards = foreground (each with a mono signature line + a mono body fragment) · seam chamber at the top of the spine = background (dimmed, retained for continuity) · identical connectors = supporting · body fragments = the reveal · `same shape` / `unrelated` mono notes = supporting
- sfx: none

Adapt: keep the grid self-assembly and the post-assembly status flip; change tiles from feature
cards to implementation cards, and the status flip is a **de-emphasis** (bodies dim, signatures
stay lit) rather than a highlight.

narrativeRole: Misuse tell #1, stated as a checkable observation.
keyMessage: "If the strategies share nothing but the signature, substitutability is a lie."

Scene 1 (0.0–2.6s): the seam chamber holds at y 210, recessive by scale (continuity, not a new
claim — its opacity is never tweened, because a half-faded ember token fails the AA contrast gate);
three cards assemble into a vertical stack from y 420 to y 1480 by `grid-card-assemble` stagger
(0.44s cadence, capped under the 0.5s arrival limit), each cream with a 2px ink border, each
carrying the identical mono line `price(cart): number` and a different body fragment beneath:
`cart.subtotal` / `cart.subtotal * terms.discount` / `40`.
Scene 2 (2.6–5.6s): "three strategies that share nothing but the interface" — the three connector
hairlines from the seam to each card draw simultaneously (`svg-path-draw`), identical in width and
colour: the seam cannot tell them apart, and the frame says so by repetition rather than by type.
Scene 3 (5.6–8.8s): "One reads a table, one calls a provider, one returns a constant" — each body
fragment is highlighted in turn with a `css-marker-patterns` hairline swipe and lifts to full ink,
then drops back to 45%; the signature rows **stay** at full ink throughout, which is the point.
Scene 4 (8.8–11.5s): two mono notes settle in the right rail — `same shape` (level with the
signature rows) and `unrelated` (level with the bodies) — and the frame's single ember is the
`unrelated` note's marker. Held read to the cut; jitter only on the note group.

## Frame 7 — The before/after, and the seam nobody plugs into

- scene: a switch chamber that grows a case, above a strategy map that grows an entry, and the map's single entry is marked never swapped
- duration: 11.136s
- poster: 11s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/07-the-tell.html
- type: cta (the closing tell — no CTA exists; this is the screenshot frame)
- persuasion: Before/after + a cost named honestly
- beat: the dry recognition of ceremony
- blueprint: comparison-split (Adapt)
- focal: the two stacked chambers and their growth markers
- roles: switch chamber = foreground (top, wrong shape) · strategy-map chamber = foreground (bottom, fixed shape) · ember `+ case` marker = the voltage · `one entry` / `never swapped` mono notes = supporting · growth hairlines = supporting
- sfx: none

Adapt: keep the two paired panels and the mirrored arrival; **drop `split-tilt-cards`'s
rotateY book-open tilt** (`frame.md` bans tilt and shadow-driven depth) and stack the panels
vertically for portrait, per this part's recorded § 4 decision. The mirrored motion survives as
opposed `y` settles (top panel arrives from above, bottom from below) meeting at the seam between
them.

narrativeRole: Misuse tell #2 plus the counter-shape; the frame the viewer screenshots.
keyMessage: "The map grows an entry where the switch grows a case — and a seam nobody plugs into is ceremony."

Scene 1 (0.0–2.8s): top chamber (navy, `checkout.ts`, y 180–820) reveals its four switch lines
whole, muted ink with the `case` keywords in ember. A hairline gutter rule marks the file the
caller edits.
Scene 2 (2.8–5.6s): "A switch grows a new case per behaviour" — an **ember** `+ case` marker pops
onto the top chamber's fourth line slot by `spring-pop-entrance` (restrained), and a dashed fifth
slot draws below it to say *again, here*.
Scene 3 (5.6–8.6s): bottom chamber (navy, `pricing.ts`, y 900–1500) arrives from below as the
four map lines reveal whole: `const prices: Record<Plan, PricingStrategy> = {` /
`  standard: new StandardPricing(),` / `  contract: new ContractPricing(),` / `};` with
`PricingStrategy` in ember and `new …Pricing()` in lavender. A hairline `+ entry` slot draws
below the last entry — the caller is untouched, and the two chambers' growth markers are at
different depths on purpose (the switch marker is inside the file the caller owns).
Scene 4 (8.6–12.0s): "A seam nobody ever plugs into is just ceremony" — the map's entry count is
ringed by a single **ember** hairline with the mono note `never swapped` at the right; everything
else dims to 55% and holds. Final 1.6s: no new element, only `sine-wave-loop` jitter at the
minimum amplitude on the ember ring. This is the last frame, so the settle is also the closer.
