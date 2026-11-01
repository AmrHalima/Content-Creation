---
format: 1080x1920
duration: 79.5s
message: "Builder constructs an object step by step and keeps it unfinished until build() checks the invariants once, which is the cure for a telescoping constructor and for objects that are live before they are valid."
arc: structural-explainer (problem → shape → anatomy → misuse tell), the campaign's uniform payoff order
audience: experienced backend developers who have written CRUD and met a long constructor
mode: autonomous
music: none
captions: en
series: backend-patterns
part: 6 of 10
---

# STORYBOARD — pattern-builder

Part 6 of 10. English master. Frame numbering is canonical for this part: `SCRIPT.md`'s
`Frame N` labels map 1:1 onto `Frame N` here, in order. Shared truth lives in
`../../writing/backend-patterns/series-bible.md`; nothing below re-argues it.

## Order-independence (series rule: this part must stand alone)

Checked on paper **before** any TTS was spent (bible §2).

**Check A — does any line presuppose a later or earlier part?** No. F1 opens on the object
(the overload pile), not on a claim from another episode. F2 names the second half of the
same problem. F3–F5 build the shape from nothing but the caller's own view. F6 states the
anatomy and marks the one permitted boundary ("A factory picks which type") without
borrowing authority from the factory part. F7 and F8 are the misuse tells and need no
prior context. No "as we saw", no part numbers, no running gag.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F1 ↔ F2** (the pile ↔ the half-valid object). FAIL, and cheaply: F2's "Drop the
  overloads" is a response to the pile F1 just showed. The order is kept.
- **Swap F4 ↔ F5** (accumulation ↔ build checks once). FAIL. F5's payoff is that the state
  F4 spent the frame accumulating is validated in one place at the end; said first, "once"
  has nothing to be once about.

Conclusion: the sequence is load-bearing in F1→F2 and F4→F5, and free elsewhere (F3 could
lead F1 and the film would still be true, but the spine order — problem, anatomy, code
shape, misuse — is the campaign's, so it is kept).

## Grammar assignment (bible §4)

- **Grammar C** ×2, never a third: F1 the telescoping overload pile, F3 the fluent chain.
  Each ≤6 visual lines, one declaration per fragment, load-bearing tokens in Ember, the
  rest in muted ink.
- **Grammar R** ×2: F6 is the spine (caller / builder seam / product, one dependency arrow
  down, an import arrow back up). F7 re-uses the same three chambers with a fork, so the
  misuse reads as a change to the anatomy and not as a new diagram.
- **Grammar X** ×1, F8, the last frame — the one the viewer screenshots.
- **Neither grammar** (typography + one diagram): F2, F4, F5. F4/F5 together carry this
  part's **central motion** — fields accumulating in private state, then one validation at
  the end — and take the motion budget. F1/F3/F6/F7/F8 spend less.
- **Portrait decision recorded per bible §4's note:** Grammar X **stacks vertically**
  rather than going side-by-side, because the wrong fragment is 5 lines (> 3). `sdlc`'s
  "never side-by-side" is local precedent and would not have bound this either.

## Video direction

The whole part shares one look and one motion grammar. Per-frame Scene lines below carry
only the delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never
  invented): ground cream `#FFFFEB`, voice ink `#1A1A1A`. **Ember `#FFA946` is the
  voltage** and marks only what is *live in this beat* — the token the line is about, the
  unfilled slot, the still-open builder. At most one ember element per frame, and inside a
  code chamber the syntax colours are decoration (keyword ember, string teal `#5DB8A6`,
  number amber `#E8A55A`), not brand accents. **Lavender `#F0D7FF` is the action/finished
  fill** — it appears exactly once in the part, on the product chamber when `build()`
  succeeds (F5) and nowhere else. **Forest `#034F46`** is the inner panel on a dark
  chamber. Code chambers, the builder seam and every dark chamber are `#1A1A1A` with a
  2px cream border; cream chambers carry the 2px ink border (bible §4: boxes wear the ink
  border, the seam sits in a dark chamber). Inactive structure is `#76766E` on cream — the
  muted token darkened from `#8A8A80` for WCAG AA on cream, as the shipped sibling part
  had to do.
- **Type:** EB Garamond 400 for every display line (sentence case, negative-tracked,
  authority from scale), Inter 400 for body/labels, JetBrains Mono for code, field names,
  signatures and kickers. Reading text never below 28px at this canvas; small tracked mono
  kickers are chrome and carry `data-layout-ignore`.
- **Motion grammar + reveal model:** one camera, hard cuts and 0.5s crossfades only, no
  rotation anywhere (flatness is load-bearing — separation comes from fill alternation and
  the 2px border). Every entrance is a `fromTo` long-tail settle (`power3`, `expo.out` on a
  fast arrival), **no overshoot** anywhere in this part. Reveals are **paced to the VO
  across the back ~50%** of each frame; at t=0 only what the line is saying at that moment
  exists. During a hold the only aliveness is **subtle jitter** on one held element. The
  one in-place label swap in the part (F5, `— → Order`) is a **time-proxy + reverse-search
  discrete sequence**, never a text tween: there is no TextPlugin in the shipped GSAP, so
  `tl.set({ text })` would no-op silently and the film would explain Builder while showing
  a static box (`.agents/product-marketing.md` Learnings, 2026-10-22).
- **Rhythm / held-frame allocation:** F4 (accumulation) and F5 (the gate) are the two
  energy peaks and carry the sequential reveals. **F6 is the deliberate held read** — by
  ~7s of its 13.5s all three chambers and both arrows are placed and nothing moves but a
  jitter on the seam box; the anatomy has to be still long enough to be copied down. F8 is
  still by design (the screenshot frame). F1, F2, F3, F7 keep revealing to the VO the whole
  way.
- **Caption keep-out:** the pill owns the bottom ~17%. Every frame's content caps at
  **y ≈ 1594**; heroes anchor near y ≈ 806 (0.42 × 1920). Background fields (paper,
  hairline grid) are exempt and stay full-bleed. The densest frames (F4, F6, F8) are
  snapshot-measured at 1080x1920 before any render.
- **Negative list — never appears:** a third code chamber; a full class body or any
  snippet longer than 6 lines; a side-by-side Grammar X; browser chrome, cursors, device
  mocks or screenshots (nothing was captured — this part is fully invented); the
  `— figure —` placeholder pattern (there are no statistics here to stage); mnemonics; a
  purple-blue "AI" gradient or bokeh; gradient fills or text shadows (the palette is flat);
  a redrawn logo (there is none); any on-screen claim the script does not make, and vice
  versa.
- **On-screen type is the hero, not the narration's echo.** No line of `SCRIPT.md` is
  rendered as visible text. What is on screen is code (real TypeScript, exempt: code is
  content, not narration), chamber names in display, and mono field chips (`customer`,
  `line_items`, `ship_to`).

---

## Frame 1 — The overload pile

- scene: a dark code chamber fills with `Order` constructor overloads, one signature landing per spoken beat
- duration: 10.603s
- poster: 7.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-the-pile.html
- type: pain_point
- persuasion: Concretization (an abstract cost shown as the exact signatures a reviewer has written) + frame-then-fill
- beat: recognition, then the small weary amusement
- blueprint: grid-card-assemble (Adapt)
- focal: the overload list inside the code chamber
- roles: code chamber = foreground subject · paper field + hairline grid = background (full-bleed, unlit) · `Order` kicker + `5 fields / 3 optional` chip rail = supporting · the `…` comment line = supporting
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; change tiles to
**code lines assembling one signature at a time** inside one dark chamber, and cap the pile
at three visible overloads plus a reviewer's `…` comment, because the claim is "an overload
for every combination" and the ellipsis says that better than nine fake ones would.

narrativeRole: Names the first problem this pattern solves, in the viewer's own codebase.
keyMessage: "A constructor with many optional parameters grows one overload per combination."

Scene 1 (0.0–1.1s): cream paper field, hairline grid, no chamber. The `✱ BUILDER` mono
kicker and the `Order` display word enter first (top third). Nothing else exists — the VO
is still on "A builder exists".
Scene 2 (1.1–4.0s): "because constructors stop scaling" — the dark chamber rises under the
kicker (**layer-reveal**, `power3`), and the first two overload signatures **stagger
assemble** top-to-bottom (`center-outward-expansion` in its vertical-list register), each on
its spoken word. `constructor` carries the frame's one ember.
Scene 3 (4.0–7.0s): "five fields, three optional" (4.4–6.6) — the third signature lands,
then the two count chips (`5 fields`, `3 optional`) settle to the right of the chamber on
those two words. Still revealing in the back half.
Scene 4 (7.0–9.3s): "an overload for every combination" (6.9–9.1) — the `… one overload per
combination` comment line lands last, muted, at the bottom of the pile; the chamber holds
with **subtle jitter** on the chamber only. Nothing after it appears.

## Frame 2 — Live before it is valid

- scene: an Order outline with three slots filling one at a time while a reader arrow already points into it
- duration: 11.605s
- poster: 9s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-half-valid.html
- type: pain_point
- persuasion: Demonstration (show the window, don't assert it) + Signposting
- beat: recognition of a bug the viewer has shipped
- blueprint: compose
- focal: the dashed product frame and its unfilled slot
- roles: dashed `Order` frame = foreground subject · three mono slot chips = supporting · `caller reads` chip + its arrow = supporting · the gap band = background structure (dimmed)
- sfx: none

Compose: no blueprint fits — the beat is one container gaining state while a second actor
reads it mid-fill, which is neither an assembly, a traversal, nor a cycle. Built from the
vocabulary: `layer-reveal` for the frame, `spring-pop-entrance` (restrained) for each slot
chip, `svg-path-draw` for the reader arrow, `discrete-text-sequence` for the one status
label.

narrativeRole: The second half of the problem: assign-after-construction leaves a window in
which the object exists and is not usable.
keyMessage: "Set fields after construction and the object is live before it is valid."

Scene 1 (0.0–1.6s): the dashed `Order` frame stands centered on cream (2px ink border,
dashed because it is not valid yet), all three slots empty; the kicker reads `no guard yet`.
F1's chamber is gone — this is a different object, not a continuation.
Scene 2 (1.6–5.4s): "callers assign fields afterwards" (1.4–4.3) — `customer` stamps into
slot 1, `line_items` into slot 2, each on its spoken word, each a restrained pop; slot 3
`ship_to` stays visibly empty and carries the frame's one ember.
Scene 3 (5.4–8.6s): "in an order only the caller remembers" (4.5–7.6) — a `caller reads`
chip arrives at the right margin and its arrow **self-draws** into the frame at 6.6s,
before slot 3 is filled. The arrow pointing at an empty slot is the whole argument.
Scene 4 (8.6–11.4s): "the object is live before it is valid" (7.9–11.2) — `ship_to` finally
lands at 8.9 on "before", and a thin gap band under the frame labels `live` … `valid` with
the open window between them; hold on the read, jitter only.

## Frame 3 — The chain

- scene: the call chain assembles left-to-right inside a dark chamber, each link handing the same builder to the next
- duration: 7.787s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-the-chain.html
- type: feature_showcase
- persuasion: Demonstration (the mechanism, drawn as a rail) + Concretization
- beat: comprehension, the shape clicking into place
- blueprint: spatial-pan-stations (Adapt)
- focal: the chain rail and the return rail underneath it
- roles: chain chamber = foreground subject · the `returns builder` return-rail = supporting · `.build()` node = supporting (the frame's one ember) · paper field = background
- sfx: none

Adapt: keep the single virtual camera traversing pre-placed labelled stations and centring
each with one callout; change the horizontal traverse to a **vertical descent** down the
chain (portrait, and the chain reads top-to-bottom), and reduce the camera travel so the
stations step past a locked frame instead of panning in the back half. The signature
traversal is carried by the return rail drawing station to station.

narrativeRole: Introduces the builder as the thing the caller actually writes.
keyMessage: "Each call takes one piece and hands back the same builder."

Scene 1 (0.0–1.4s): dark chamber, cream hairline; `new OrderBuilder()` enters at the top of
the chamber on "moves to a builder" (1.2). Nothing below it exists yet.
Scene 2 (1.4–5.2s): "each call takes one piece" (2.3–4.4) — `.customer(c)` then `.line(l)`
then `.ship_to(s)` land one under the other, each on its beat, each indented one step so the
chain visually descends. The last one arrives in the back half on purpose.
Scene 3 (5.2–7.4s): "and hands back the same builder" (4.8–7.2) — the **return rail**
(`svg-path-draw`) draws itself down the left edge of the three links, joining them into one
lane, and a `builder` chip settles at its foot. This is the frame's payload: three calls,
one object.
Scene 4 (7.4–8.8s): `.build()` enters below the rail, ember, slightly detached from the
chain, and the frame holds; jitter on the rail only. The word "yet" is not said here, so
nothing else is claimed.

## Frame 4 — Accumulation (central motion, part 1 of 2)

- scene: the chain above, and below it a private chamber whose slots fill one by one while the product stays unwritten
- duration: 7.744s
- poster: 7.5s
- transition_in: cut
- status: animated
- src: compositions/frames/04-accumulate.html
- type: feature_showcase
- persuasion: Demonstration (the inside of the mechanism, in the same cadence as the outside)
- beat: the hinge of the film — the moment the pattern makes sense
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the private-state chamber and its slot rail
- roles: private-state chamber = pinned anchor (enters once at 0.8s and never moves) · chain echoes = supporting (the cycling region) · product frame = supporting (dashed, empty, whole frame) · `private` chip = supporting
- sfx: none

Adapt: keep sub-shape A exactly — one element pinned once that never moves while the
adjacent region steps through discrete hard-cut states at a steady cadence; change the
cycling region from a theme/roll-call to the **three slot states arriving one per spoken
piece**, and keep the pinned anchor's stillness as the claim.

narrativeRole: The accumulation itself — the reason a builder exists rather than a setter
rail: state collects somewhere the caller cannot reach, and the product is not it.
keyMessage: "Nothing is an order yet; each call adds one piece to private state."

Scene 1 (0.0–1.6s): "nothing is an order yet" (0.0–1.8) — top rail holds F3's three muted
links, the private-state chamber enters at 0.8 and is then **immovable**, and the product
frame below it is dashed and empty with an unwritten label slot. Nothing has filled.
Scene 2 (1.6–5.6s): "each call adds one piece" (2.0–4.0) — the first echo lights in the top
rail and one beat later `customer` hard-cuts into slot 1 of the private chamber; the pattern
repeats for `line_items` (3.6) and `ship_to` (4.6). Steady cadence, three discrete states,
each tied to a lit echo above it — the reveal is still running in the back half.
Scene 3 (5.6–7.4s): "to private state the caller cannot touch" (4.4–7.2) — a `private` mono
chip settles on the chamber's border at 5.9 and the caller's own arrow, drawn thin from the
top rail, **stops short** of the chamber wall (a finite `svg-path-draw`, no loop).
Scene 4 (7.4–8.8s): hold. Three filled slots, empty dashed product frame, nothing moving but
a jitter on the private chamber. This is the frame the next frame pays off.

## Frame 5 — build() checks once (central motion, part 2 of 2)

- scene: one gate closes over the private chamber, two checks tick, and the product frame gains its name
- duration: 9.216s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-build-once.html
- type: feature_showcase
- persuasion: Demonstration + Numbered enumeration (exactly two checks, no third)
- beat: the payoff, delivered quietly
- blueprint: agent-progress-theater (Adapt)
- focal: the `build()` gate node and the product label swap
- roles: `build()` gate = foreground subject (pinned centre-top) · two check rows = supporting (the cycling region) · product chamber = supporting (its label is the swap) · private chamber = background (dimmed ~45%)
- sfx: none

Adapt: keep the trigger-then-machine-works shape — one beat hands the frame to the
mechanism, statuses step, and a receipt lands checked-off; change the agent into `build()`
and the receipt into the product chamber's **label swap**, and cap the checks at two
(`missing pieces`, `bad totals`) because the line names two.

narrativeRole: The other half of the accumulation: validation happens in one place, at the
end, and nothing invalid can escape it.
keyMessage: "build() checks the invariants once, and throws before an order exists."

Scene 1 (0.0–1.4s): the private chamber from F4 carries in dimmed behind; the `build()` gate
node enters centred above it on "then build()" (0.3). One gate, one line.
Scene 2 (1.4–4.2s): "checks the invariants once" (0.9–2.6) — two check rows arrive under the
gate on their words (`missing pieces` at 1.6, `bad totals` at 2.2) and each flips to checked
(`discrete-text-sequence` on the badge, one tick each), then the gate closes with a single
bounded settle. "Once" is shown by there being no third row and no repeat.
Scene 3 (4.2–6.4s): "missing pieces, bad totals, it throws" (2.9–5.0) — a small rejected
attempt appears to the left: an unfilled slot with an ember cross and a muted `throws` tag,
and the product chamber is still unnamed at this point. The failure is shown, not asserted.
Scene 4 (6.4–8.3s): "before an order exists" (5.4–7.9) — the product chamber fills
**lavender** (the part's only lavender), and its empty label slot swaps to `Order` through
the **time-proxy + reverse-search discrete sequence** (no text tween, no TextPlugin in this
runtime). Then stillness: the frame ends on the named product.

## Frame 6 — Three chambers, one dependency

- scene: the anatomy as a vertical call graph, caller above, dark builder seam in the middle, product below, with knowledge flowing one way
- duration: 13.461s
- poster: 11s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-three-chambers.html
- type: product_intro
- persuasion: Concretization (the pattern drawn as exactly three boxes) + Boundary marking
- beat: the calm of having it written down
- blueprint: compose
- focal: the builder seam chamber
- roles: caller chamber = supporting (top) · builder seam chamber = foreground subject (dark, centred) · product chamber = supporting (bottom) · dependency arrow = foreground secondary (down) · import arrow = supporting (up, thin, dashed) · `factory / builder` chip pair = supporting
- sfx: none

Compose: the spine grammar (bible §4, Grammar R) is a call graph, not an assembly or a
cycle; built from `layer-reveal` (chambers), `svg-path-draw` (both arrows) and a restrained
`spring-pop-entrance` on the boundary chips. **Grammar R is on screen whenever the
narration names the pattern**, and this is where it names it.

narrativeRole: The anatomy, and the one boundary this part is allowed to draw against a
sibling pattern.
keyMessage: "Caller, builder, product; the product appears only at the end."

Scene 1 (0.0–2.2s): "three chambers" (0.0–1.1) — the caller chamber enters at the top third
(hero axis ≈ 806 sits on the seam, so the caller sits above it), display label `caller`. The
paper below it is empty.
Scene 2 (2.2–5.6s): "one dependency" (1.4–2.6) then "the caller chains" (3.0–4.2) — the
**builder seam** chamber arrives centre in the dark chamber grammar with its 2px cream
border, and the dependency arrow **self-draws** down from caller to seam; `OrderBuilder` in
mono on the seam, `builder` in display.
Scene 3 (5.6–9.4s): "the builder holds parts" (4.6–6.4) — three muted slot chips
(`customer`, `line_items`, `ship_to`) settle inside the seam in the same order F4 filled
them, so the two frames read as one mechanism. "The product appears only at the end"
(6.8–9.4) — the product chamber enters below with a second dependency arrow drawn to it,
`Order` in display, filled in **lavender-free** cream (F5 owned the lavender).
Scene 4 (9.4–11.6s): the **import arrow** draws back up along the right edge, thin and
dashed, seam → caller only, labelled `knows the builder` in muted mono — one direction of
knowledge, and the product knows nothing. The frame is fully placed by now.
Scene 5 (11.6–13.5s): "a factory picks which type; this picks none" (10.3–13.1) — two chips
spring-pop at the right margin, `factory: which type` above `builder: how it is assembled`,
both muted ink with the seam's edge lit once. Then **held read**: jitter on the seam box
only, no further arrival. This is the part's deliberate stillness frame.

## Frame 7 — Handed onward

- scene: the same three chambers, but the builder is passed to a second holder and builds twice
- duration: 10.325s
- poster: 7.6s
- transition_in: cut
- status: animated
- src: compositions/frames/07-handed-onward.html
- type: pain_point
- persuasion: Demonstration (run the misuse and show the second object) + Concretization
- beat: recognition of a code review comment
- blueprint: compose
- focal: the still-open seam chamber and the second product
- roles: caller chamber = background (dimmed ~40%) · seam chamber = foreground subject (ember-marked `still open`) · `next holder` chip = supporting · two product chambers = supporting (`order #1`, `order #2`) · fix chip = supporting (the closer)
- sfx: none

Compose: this is F6's grammar disturbed — reuse the same three chambers, keep their
positions, and add the fork, so the misuse reads as a change to the anatomy the viewer was
just given rather than a new diagram. Motion: `layer-reveal`, `svg-path-draw` for both
build arrows, restrained `spring-pop-entrance` for the two product chips.

narrativeRole: The first misuse tell: a builder that outlives the object it built.
keyMessage: "Pass a mutable builder onward and a second build returns a different order."

Scene 1 (0.0–2.0s): the chambers carry in from F6 with the caller dimmed to ~40%; the seam
holds its three filled slots. "Hand a mutable builder onward" (0.2–2.3) — a `next holder`
chip enters at the left margin and an arrow draws from it into the seam, so the seam now has
two owners. The seam's 2px border goes **ember**: `still open`.
Scene 2 (2.0–5.4s): "the next holder adds a line" (2.6–4.4) — a fourth slot `line #2`
hard-cuts into the seam, the first time this part has shown a state the caller never asked
for. Its arrow back up to the caller is absent; the caller cannot see this.
Scene 3 (5.4–7.8s): "then builds a different order" (4.7–7.3) — a second `build()` arrow
draws down and a second product chip `order #2` lands beside `order #1`, and the two chips
are visibly **not** the same (one slot lit in `#2`). The consequence, drawn.
Scene 4 (7.8–9.3s): "pass the finished product instead" (7.6–9.2) — a `hand on the product`
annotation settles under `order #1` in muted mono with a hairline rule, the ember leaves the
seam, and the frame holds.

## Frame 8 — Three mandatory fields (Grammar X, the screenshot)

- scene: two stacked chambers — the wrong shape, a builder chain for three required fields, above the fixed shape, one constructor call
- duration: 8.725s
- poster: 8s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/08-ceremony.html
- type: pain_point
- persuasion: Before/after contrast + Reduction (the fix is shorter than the problem)
- beat: the dry one, the one that gets screenshotted
- blueprint: compose
- focal: the height difference between the two chambers
- roles: wrong chamber = foreground subject (top, 5 lines) · fixed chamber = foreground subject (bottom, 1 line) · `ceremony` / `one call` chips = supporting · paper + grid = background
- sfx: none

Compose: the single Grammar X frame (bible §4). **Stacked vertically**, not side-by-side,
because the wrong fragment is 5 lines. `comparison-split` was considered and rejected: its
signature move is mirrored `rotateY` book-open tilts, and this pack's flatness rule forbids
rotation, so taking it would mean dropping the blueprint. The reveal is the argument: five
lines arriving above, one line arriving below, and the empty space under it.

narrativeRole: The second misuse tell, and the film's last word.
keyMessage: "A builder for three mandatory fields is ceremony; the constructor was one call."

Scene 1 (0.0–1.6s): cream field, the `✱ BUILDER` kicker, and the wrong chamber's frame
entering at the top third — empty. The title bar reads `order.ts` in mono.
Scene 2 (1.6–5.0s): "three mandatory fields need no builder at all" (0.3–4.0) — the five
lines of `new OrderBuilder().customer(c).line(l).ship_to(s).build()` **stagger assemble**
into the top chamber, one per spoken word-group, and the `ceremony` chip settles on its
title bar at 4.1, muted ink with a hairline. Still arriving in the back half.
Scene 3 (5.0–7.4s): "call the constructor once" (4.3–5.9) — the fixed chamber rises below,
small, and its single line `new Order(c, l, s)` lands whole at 5.4 with a `one call` chip;
the same three parameters as F1's third overload, so the film closes on its own opening.
The bottom chamber's unused height is visible and deliberate.
Scene 4 (7.4–9.3s): "hand over a finished order" (6.2–8.6) — a hairline rule draws between
the two chambers, both hold still, and the frame ends on the pair. Final frame, so this one
carries the only real exit: a settle, no wipe.

## Real cue map (written back after `studio voice` + `studio cues`)

Kokoro `af_heart` at speed 0.74, measured by local faster-whisper `small` and aligned onto
the approved script text. `sync-durations` has already replaced the `- duration:` fields
above; the **total is 79.46s** against the brief's 75-80s target and the 90s ceiling. Word
starts below are the authoritative reveal times — where a Scene window above disagrees, this
table wins and the frame is built from it.

| Frame | real dur | cue → word start |
| --- | --- | --- |
| 1 | 10.603s | builder 0.24 · constructors 1.90 · scaling 3.30 · Five 4.78 · three 6.30 · overload 8.10 · combination 9.44 |
| 2 | 11.605s | overloads 0.60 · assign 2.38 · fields 2.88 · afterwards 3.52 · order 5.28 · remembers 6.74 · object 8.48 · live 9.46 · before 9.92 · valid 10.86 |
| 3 | 7.787s | moves 0.88 · builder 2.02 · call 3.56 · takes 3.92 · piece 4.72 · hands 5.66 · same 6.66 |
| 4 | 7.744s | order 1.14 · yet 1.44 · adds 3.34 · one 3.80 · piece 4.16 · private 4.82 · state 5.28 · cannot 6.46 · touch 6.94 |
| 5 | 9.216s | build() 0.34 · checks 0.84 · invariants 1.94 · once 2.72 · Missing 3.82 · bad 5.34 · throws 6.76 · before 7.18 · order 7.86 · exists 8.16 |
| 6 | 13.461s | chambers 0.40 · dependency 1.76 · caller 3.64 · chains 4.02 · builder 5.16 · parts 5.90 · product 6.92 · only 7.88 · end 8.82 · factory 10.08 · type 11.38 · picks 12.46 · none 12.78 |
| 7 | 10.325s | mutable 0.56 · builder 1.00 · onward 1.42 · holder 2.98 · adds 3.42 · line 4.12 · builds 5.34 · different 6.12 · order 6.40 · finished 8.28 · product 8.64 · instead 9.24 |
| 8 | 8.725s | three 0.28 · fields 1.26 · need 2.20 · builder 2.82 · all 3.54 · Call 4.66 · constructor 5.14 · once 5.68 · hand 6.62 · order 7.88 |

Amendments the real timings force (the frame author builds these, not the windows above):

- **F1** Scene 4 runs 7.0–10.6s: the `…` comment line lands at 8.10 on "overload", then the
  pile holds with jitter for the extra 1.3s the real take bought.
- **F2** `ship_to` lands at **9.92** ("before"), not 8.9, and the `live → valid` gap band
  draws 10.4–11.0; the frame ends at 11.605.
- **F3** Scene 4 is **7.0–7.79s**: `.build()` enters at 6.94 on "builder" and the frame is
  already full, so it settles rather than arrives. No room for a late addition.
- **F4** Scene 3 is 5.6–7.0s and Scene 4 is **7.0–7.74s** — the hold is 0.7s, so the caller
  arrow must stop short by 6.94 ("touch") or it never lands.
- **F5** Scene 3 is **3.8–6.6s** (rows named on "Missing" 3.82 and "bad" 5.34) and Scene 4 is
  **6.6–9.2s**: the ember cross at 6.76 ("throws"), the lavender fill plus the
  `— → Order` discrete swap at 7.86 ("order"), held to 9.216.
- **F6** Scene 4 is **8.9–10.0s** (import arrow, in the gap after "end"), and Scene 5 is
  **10.0–13.46s**: the `factory` chip on 10.08, the `builder` chip on 12.46, then 1.0s of
  still read. The frame is still the deliberate held beat.
- **F7** Scene 3 is **5.0–7.6s** (second build arrow at 5.34, `order #2` at 6.12) and Scene 4
  is **7.6–10.3s**: annotation on 8.28, ember leaves the seam on 9.24 ("instead").
- **F8** Scene 2 ends at 5.0 with the `ceremony` chip on 3.54 ("all"); Scene 3 is
  **4.7–6.6s** (fixed chamber rises on 4.66, its one line on 5.14, `one call` chip on 5.68);
  Scene 4 is **6.6–8.7s** (hairline rule draws on 6.62, final settle ~8.0, frame ends 8.725).

## Budget and pacing check

| Frame | VO line | spoken words | duration (real VO) | running | words/sec | grammar |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Line 1 | 17 | 10.603s | 10.60s | 1.60 | C |
| 2 | Line 2 | 23 | 11.605s | 22.21s | 1.98 | — |
| 3 | Line 3 | 17 | 7.787s | 30.00s | 2.18 | C |
| 4 | Line 4 | 17 | 7.744s | 37.74s | 2.19 | — (central) |
| 5 | Line 5 | 16 | 9.216s | 46.96s | 1.74 | — (central) |
| 6 | Line 6 | 26 | 13.461s | 60.42s | 1.93 | R |
| 7 | Line 7 | 22 | 10.325s | 70.74s | 2.13 | R (disturbed) |
| 8 | Line 8 | 18 | 8.725s | 79.46s | 2.06 | X |

156 words / 79.46s = **1.96 words per finished second**, measured from the real takes —
against the campaign's ~2.0 planning rate and the sibling part's measured 1.93. Brief target
75-80s ✓, ceiling 90s ✓. The two slow frames (F1 1.60, F5 1.74) are the ones that needed the
air: F1 is the pile the viewer has to read, F5 is the payoff. Durations are the real Kokoro
lengths written back by `sync-durations`, and every Scene window above is paced to them.

Grammar count: C ×2 (F1, F3) · R ×2 (F6, F7) · X ×1 (F8) · unassigned typography/diagram ×3
(F2, F4, F5, of which F4+F5 carry the central motion). SFX marks: **0** — parts 2-10 of this
campaign are silent by bible §7, and nothing was resolved through `media-use`. No BGM.
