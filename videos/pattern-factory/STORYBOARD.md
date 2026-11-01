---
format: 1080x1920
duration: 78s
message: "A factory moves the decision of which concrete type to build out of the caller, so the caller depends on a type rather than on a constructor"
arc: concept-explainer with process (the question → the branch → the seam → the anatomy → the code shape → the payoff → the tell)
audience: experienced backend developers who have already written CRUD and want the mechanics and the misuse named precisely
mode: autonomous
music: none
captions: en
series: backend-patterns
part: 2 of 10
---

# STORYBOARD — pattern-factory (backend-patterns, part 2)

Frame numbering is canonical for this part: `SCRIPT.md`'s `Frame N` labels map 1:1 onto
`Frame N` here, in order. Grammar names (R / C / X) are the campaign's, from
`../../writing/backend-patterns/series-bible.md` § 4 — R is the spine, C is used exactly
twice (F5, F6), X once (F8).

## Order-independence (series rule: this part must stand alone)

Checked on paper before any TTS was spent, per series-bible § 2.

**Check A — does any line presuppose a later or earlier part?** No. F1 opens on the object
(the call site that has to answer a question), not on a prior claim; it re-establishes the
pattern's problem inside its first two lines (18 words). F2 critiques a shape the viewer has
already written, not one this film built. F3 names the factory for the first time and the
visual is the proof. F4-F7 each make their own claim about the same diagram. F8 is a misuse
tell that needs nothing before it but the idea of "nothing to choose". Zero "as we saw", zero
"part N", no running gag.

**Sibling-pattern boundary:** deliberately NOT taken. Series § 2 permits naming one sibling
once to mark a boundary; the claim this part pays does not need it, and 158 words has no room
for a disclaimer. No sibling is named.

**Check B — swap two claims, is the story still true?** Two swaps run:
- **Swap F5 ↔ F6** (the signature ↔ the call site). FAIL, kept. F6's line opens with "So",
  and the call site reads as the consequence of the signature; reversed, the consequence
  precedes its cause.
- **Swap F2 ↔ F3** (the branch ↔ the move). FAIL, deliberately. F3's whole job is to take the
  question away from what F2 just showed; a removal needs something on screen to remove.
- **Swap F4 ↔ F7** (anatomy ↔ payoff). PASS in logic, kept anyway: F7's "new gateway lands"
  presupposes the three-chamber stack the viewer saw in F4, and it is the softer of the two,
  so it belongs later in the energy curve.

## Video direction

The whole part shares one look and one motion grammar. Per-frame Scene lines below carry only
the delta.

- **Palette system** (frame.md `code-editorial` remixed onto `.agents/design.md`; never
  invented): `--ground` cream `#FFFFEB` is the canvas, `ink` `#1A1A1A` is type,
  **ember `#FFA946` is the single voltage moment per frame** — it marks only what is *live in
  this beat* (the branch condition, the return type, the changed box). **lavender `#F0D7FF`**
  is the emphasis fill and appears twice in the part only — the F1 hand-drawn squiggle
  underline and the F4 seam chamber's accent label — because `.agents/design.md` names the
  squiggle as its editorial-emphasis component and makes lavender the sole action colour.
  Ember remains one per frame, never two. Dark chambers are `navy` `#181715`/`#1A1A1A` with a
  cream@14% hairline. Muted structure on **cream** is `#76766E` (the workspace's AA-tested
  darkening of `#8A8A80`); muted code text **on navy** is `#8A8A80`, which clears 4.9:1 on
  dark. No fourth hue, no cool gray, no pure white except a card fill.
- **Three-chamber call graph (Grammar R) is the recurring stage.** Caller (top, cream with a
  2px ink border), seam (middle, dark chamber), implementations (bottom band, cream chips).
  Dependency arrow points **down**; a dashed return arrow points **up** on the right rail
  labelled `knows`, which is where the knowledge actually flows. Same stage in F2 (no seam),
  F3 (seam arriving), F4 (full anatomy), F6 (rail), F7 (a new entry in the bottom band).
  Boxes are stacked vertically, never side-by-side (portrait; series § 4).
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and crossfades only;
  **no rotation anywhere** (frame.md: flatness is load-bearing; depth comes from colour
  blocking and borders). Every entrance is a `fromTo` long-tail settle (`power3`, `expo.out`
  on a fast arrival); **no overshoot, no bounce, no lazy breathing**. Reveals are **paced to
  the VO across the back ~50%** of each frame; at t=0 only what the line is saying at that
  moment exists. During a hold the only aliveness is **subtle jitter** (low-amplitude
  `sine-wave-loop`, finite) on one held element. Exit motion exists only in F8; the harness
  `transition_in` is every other frame's exit. Arrows are drawn, not faded (`svg-path-draw`).
- **Rhythm / held-frame allocation**: F4 (the anatomy) and F8 (the tell) are the two
  deliberate held reads — F4 stops moving as soon as the stack is complete because it is the
  frame the viewer has to be able to photograph; F7 and F2 stay busy to the end of their
  lines. F1 is a still typographic beat with one arrival per spoken word.
- **Caption keep-out**: bottom ~17% is the pill's. All F1-F8 content plans into the top
  ~83% — content caps at **y ≈ 1594** on the 1920-tall canvas; the hero axis of a centered
  beat sits at y ≈ 0.42 × 1920 ≈ 806. Background fields (paper, hairline grid) are exempt and
  stay full-bleed.
- **Negative list — never appears**: a `<audio>` inside a frame; a fourth brand hue or a
  non-palette accent; rotation, tilt or 3D on any element; box-shadow elevation (this system
  is border-driven); gradient text or text-shadow; a browser chrome, cursor, or real
  screenshot (nothing was captured — fully invented); a mnemonic; any on-screen sentence from
  the narration; a diagram with more than three named boxes in Grammar R; **more than six
  lines or a second declaration in a Grammar C chamber**; an `it's not X, it's Y` reveal
  anywhere (series § 6).
- **On-screen type is the hero, not the narration's echo.** Real TypeScript inside the code
  chambers is content, not narration, and is allowed at full length; everything else is a
  label of ≤ 3 words (`caller`, `createGateway`, `nothing to choose`).

## Frame 1 — The question at the call site

- scene: a stacked serif question and three muted call-site chips arriving one per spoken word
- duration: 9.365s
- poster: 6s
- transition_in: cut
- status: animated
- src: compositions/frames/01-which-type.html
- type: hook
- persuasion: Question→answer pairing + Concretization (the abstract "which type" as a literal question on paper)
- beat: recognition + focus
- blueprint: kinetic-type-beats (Adapt)
- voiceover: "A caller that builds an object answers one question first: which concrete type. The factory owns that answer."
- sfx: none
- focal: the display question `which concrete type?`
- roles: question = foreground subject (EB Garamond display, ink) · call-site chip rail (`checkout.ts`, `payments.ts`, `webhooks.ts`) = supporting, muted mono · ✱ kicker = supporting chrome · `the factory` wordmark + ember underline = supporting, the frame's only ember

narrativeRole: Re-establishes the pattern's problem from nothing, and names the question the
rest of the part is about.
keyMessage: "Every call site that builds an object has to answer a question before it can build."

Adapt: keep the signature (the motion IS the words changing, one arrival per spoken beat, no
set and no surface); change the register from a punchy tagline slam to a serif statement
assembling line by line, and replace the spring-pop payoff with a plain settle.

Scene 1 (0.0–2.0s): full-bleed cream paper field + hairline grid; the ✱ kicker and its mono
text arrive on "caller" (0.20); three call-site chips stagger down a left rail on "builds"
(0.96) → "object" (1.54), restrained settle, stagger capped so they read as one rail, not three
arrivals. Layout: chips left column, the rest of the frame still empty paper.
Scene 2 (2.0–4.9s): "answers one question first" — a mono tag `one question` lands on
"question" (2.80) and a hairline rule self-draws under it on "first" (3.86). The chips hold.
Scene 3 (4.9–7.0s): the display question builds **one word per spoken word** — `which` (4.98),
`concrete` (5.22), `type?` (5.84) — EB Garamond at the `display` tier, centered on the hero
axis ≈ 806. Nothing else moves; no push.
Scene 4 (7.0–9.365s): "the factory owns that answer" — the wordmark `the factory` settles under
the question on "factory" (7.18) and the **lavender** hand-drawn squiggle underline (the
`design.md` editorial-emphasis component, 3–4px stroke) draws on to "answer" (8.60); no ember
in this frame; hold with **subtle jitter** on the wordmark only.

## Frame 2 — The branch in the caller

- scene: the caller box up top draws two arrows down onto two concrete gateway boxes, one arrow labelled with the condition
- duration: 11.051s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-the-branch.html
- type: pain_point
- persuasion: Frame-then-fill (the shape of the mess before the fix) + Demonstration (the code as a call graph, not as text)
- beat: recognition + mild unease
- blueprint: compose
- voiceover: "Today the caller does it itself. Read a config value, branch, call the constructor. Now the caller knows every gateway it can build."
- sfx: none
- focal: the caller chamber and the two arrows leaving it
- roles: caller chamber = foreground subject (cream, 2px ink border) · two dependency arrows = foreground (self-draw) · implementation chips (`StripeGateway`, `RazorpayGateway`) = supporting, bottom band · ember condition label `=== "card"` = supporting, the only ember · muted note `both named here` = supporting

narrativeRole: Shows exactly where the decision lives today, so the removal in F3 has a
visible subject.
keyMessage: "When the caller picks the type, the caller ends up naming every implementation."

Compose: no blueprint casts "a call graph drawing itself". Built from **SVG self-draw**
(`svg-path-draw`) for the two dependency arrows, **spring-pop-entrance** in its restrained
register for the chamber and the chips, and **discrete-text-sequence** (time-proxy form) for the
condition label landing on its word.

Scene 1 (0.0–1.6s): the caller chamber arrives at the upper third (hero axis ≈ 806) on "caller"
(0.68), cream with its 2px ink border, labelled `caller` in mono; empty paper below it.
Scene 2 (1.6–3.8s): "read a config value" — a mono chip `config.provider` settles inside the
chamber's footer on "config" (3.36).
Scene 3 (3.8–5.6s): "branch" (4.78) — the first arrow **self-draws** downward out of the
chamber and the ember label `=== "card"` lands on its shaft on the same word; the second arrow
begins to draw.
Scene 4 (5.6–7.6s): "call the constructor" (5.62) — two implementation chips spring into the
bottom band, `StripeGateway` then `RazorpayGateway`, each carrying a small mono `new` marker,
the second arrow completing on the second chip (5.88).
Scene 5 (7.6–11.051s): "now the caller knows every gateway it can build" — both arrowheads
pulse once (finite) on "knows" (8.48), the muted note `both named here` settles under the band
on "gateway" (9.44), then hold with **subtle jitter** on the caller chamber only.

## Frame 3 — The move

- scene: a dark seam chamber drops between the caller and the implementations and the caller's arrows stop at it
- duration: 8.128s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-takes-the-question.html
- type: product_intro
- persuasion: Concretization (the pattern named by a physical insertion) + Subtractive framing (the arrows lose their far ends)
- beat: clarity + anticipation
- blueprint: compose
- voiceover: "A factory takes that question away. The caller asks for a gateway. The factory decides which one."
- sfx: none
- focal: the dark seam chamber expanding between the caller and the implementations
- roles: seam chamber = foreground subject (navy, cream hairline, `factory` wordmark inside) · caller chamber = supporting, dimmed ~55% at first then full ink · short caller→seam arrow = supporting · seam→chip arrows = supporting · implementation chips = supporting, bottom band, unmoved

narrativeRole: Names the protagonist by performing its only action — taking the question away.
keyMessage: "The factory is the place that question moved to."

Compose: built from a **cluster→outward expansion** (`center-outward-expansion`) for the seam
chamber's arrival, arrow **retraction** as a path redraw, and the display wordmark settling
into the chamber.

Scene 1 (0.0–1.5s): F2's stack carries in dimmed to ~55%; on "factory" (0.20) a small dark
square begins to expand at the centre of the gap between caller and chips.
Scene 2 (1.5–3.2s): "away" (2.04) — the two long arrows **retract** to stubs while the seam
chamber completes its expansion; the condition label clears through a discrete swap (time
proxy), not a text tween.
Scene 3 (3.2–5.8s): "the caller asks for a gateway" — one short arrow re-draws from caller to
seam on "asks" (3.62) and the mono label `createGateway` arrives on "gateway" (4.68).
Scene 4 (5.8–8.128s): "the factory decides which one" — two arrows draw from the seam down to
the chips on "decides" (6.40), the display word `factory` settles inside the chamber on
"factory" (5.90), the caller chamber returns to full ink, and the frame holds with jitter on
the chamber only.

## Frame 4 — The anatomy (Grammar R, the spine frame)

- scene: the three-chamber stack complete, a dependency arrow down through the seam and a dashed "knows" arrow up the right rail
- duration: 10.133s
- transition_in: cut
- status: animated
- src: compositions/frames/04-the-anatomy.html
- type: feature_showcase
- persuasion: Progressive disclosure (one chamber per spoken phrase) + Distillation (the whole pattern in one diagram)
- beat: comprehension
- blueprint: grid-card-assemble (Adapt)
- voiceover: "The dependency points down through the seam. The caller holds the interface. The factory below holds the concrete classes."
- sfx: none
- focal: the completed three-chamber stack
- roles: caller chamber = foreground subject (top, cream, 2px ink border) · seam chamber = foreground subject (middle, navy, the lavender edge light) · implementation chips = supporting (bottom band) · dependency arrow (down) = foreground · dashed `knows` arrow (up, right rail) = supporting · interface label `PaymentGateway` = supporting, muted mono

narrativeRole: The definition of the pattern as a structure, and the frame every later frame
returns to.
keyMessage: "The caller depends on the interface; only the factory depends on the concrete classes."

Adapt: keep the staggered self-assembly into a vertical list and the hold; change cards into
three stacked chambers with an arrow between each pair, and add the **upward dashed `knows`
arrow** as the second half of the claim (dependency one way, knowledge the other).

Scene 1 (0.0–2.0s): the stack carries in from F3 at full strength, three chambers already
stacked; the dependency arrow **self-draws** downward out of the caller chamber on "points down"
(0.86 → 1.62), stopping short of the seam.
Scene 2 (2.0–3.4s): "through the seam" (2.16 → 2.66) — the arrow completes its run through the
middle chamber and that chamber's edge lights **once** in lavender, finite: the part's only
lavender moment.
Scene 3 (3.4–6.0s): "the caller holds the interface" — the mono label `PaymentGateway` settles
in the caller chamber's footer on "holds" (4.32 → 5.18), and a small direction marker flips to
show which way the caller's dependency points.
Scene 4 (6.0–9.2s): "the factory below holds the concrete classes" — the dashed `knows` arrow
**draws upward** on the right rail starting at "factory" (6.76), and the two chips gain their
`StripeGateway` / `RazorpayGateway` names on "concrete classes" (8.62 → 9.14); the seam chamber
carries the frame's only ember marker.
Scene 5 (9.2–10.133s): **the deliberate held read.** Everything stops — no camera, no push, no
breathing; at most a single low-amplitude jitter on the seam chamber.

## Frame 5 — The shape of the seam (Grammar C)

- scene: a dark code chamber typing the factory's signature, the return type the one ember token
- duration: 8.789s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-the-signature.html
- type: feature_showcase
- persuasion: Demonstration (the mechanism as real code) + Concretization ("the seam is a signature")
- beat: comprehension + confidence
- blueprint: typewriter-reveal (Adapt)
- voiceover: "The seam is a signature. It takes a discriminator and returns the interface. That is all the caller sees."
- sfx: none
- focal: the five-line code chamber
- roles: navy code chamber = foreground subject (title strip `gateway-factory.ts` in mono) · the typed lines = foreground text (JetBrains Mono, muted ink) · `PaymentGateway` = the single ember token · caret = supporting chrome, blinks off finitely · cream field + hairline grid = background, full-bleed

narrativeRole: Turns the diagram into something the viewer can paste, and proves the claim
about the return type.
keyMessage: "One signature, one discriminator in, the interface out."

Adapt: keep the signature move (type-on behind a caret, line by line); drop the collapse and
the brand payoff — the code stays on screen because it is the artefact. **Five lines, one
declaration** (Grammar C caps at six and forbids a full class).

Scene 1 (0.0–2.0s): cream field, then the navy chamber rises into the middle third with its
`navy-elev` title strip and mono filename on "seam" (0.24); line 1
`function createGateway(` types in behind the caret on "signature" (0.64 → 1.22).
Scene 2 (2.0–4.2s): "it takes a discriminator" — line 2 `config: GatewayConfig` types in on
"takes" (2.76) and lands on "discriminator" (3.24), the parameter in muted ink.
Scene 3 (4.2–6.0s): "and returns the interface" — line 3 `): PaymentGateway {` types in on
"returns" (4.46) and **`PaymentGateway`** settles into ember on "interface" (4.94 → 5.34).
Scene 4 (6.0–7.4s): "that is all the caller sees" — two muted lines imply the body without
showing a class: `switch (config.provider) {` (6.64) then a lone `…` (7.16).
Scene 5 (7.4–8.789s): the caret blinks off through a finite discrete sequence and the chamber
holds; **subtle jitter** only, no camera.

## Frame 6 — The caller now (Grammar C, second and last use)

- scene: the branch struck through and replaced by one call, asymmetric against the diagram rail
- duration: 6.848s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-one-line.html
- type: feature_showcase
- persuasion: Before/after (within one frame, as a seam cut) + Numbered economy (one line, shown)
- beat: satisfaction + clarity
- blueprint: compose
- voiceover: "So the call site is one line. The config value goes in, a gateway comes back."
- sfx: none
- focal: the single-line call in the code chamber
- roles: code chamber (left, 58%) = foreground subject · struck-through branch block = background, muted, clears mid-frame · ember strike rule = supporting · slim Grammar R rail (right, 42%) = supporting (caller chip + its arrow to the seam) · `PaymentGateway` return label = supporting, muted mono

narrativeRole: Pays the "so what" of the signature at the place the pattern is actually used.
keyMessage: "The call site names no constructor and holds no branch."

Compose: built from a **waterfall seam cut** (`cut-catalog.md`) between the struck-through
branch and the new call, **discrete-text-sequence** (time-proxy form) for the label swap, and a
small diagram rail echoing Grammar R. Asymmetric 58/42, 3 depth layers.

Scene 1 (0.0–1.0s): the chamber holds F5's three-line branch struck through with one ember
rule; the right rail carries the caller chip alone. Nothing new arrives at t=0 — the frame
opens on what is being removed.
Scene 2 (1.0–2.9s): "is one line" (1.34 → 1.66) — the struck block **clears** in a waterfall
cut and `const gateway = createGateway(config);` takes its place at the same centre.
Scene 3 (2.9–4.9s): "the config value goes in" — a mono chip `config` slides into the argument
slot on "goes" (3.84) and underlines on "in" (4.24).
Scene 4 (4.9–6.848s): "a gateway comes back" — `PaymentGateway` settles beneath the line in
muted mono on "comes back" (5.58 → 6.10) while the rail's caller chip brightens and its arrow
to the seam draws once; hold with jitter on the chip only.

## Frame 7 — A new type lands

- scene: the stack pinned, a third implementation enters the bottom band and only the seam changes
- duration: 9.941s
- transition_in: cut
- status: animated
- src: compositions/frames/07-one-place.html
- type: benefit_highlight
- persuasion: Demonstration + Counterexample-of-the-alternative (show the change happening rather than argue it)
- beat: momentum + confidence
- blueprint: fixed-anchor-cycle (Adapt)
- voiceover: "When a new gateway lands, the change is inside the factory. Callers never heard of it, so coupling stays out of the domain."
- sfx: none
- focal: the seam chamber's ember marker, while the caller chamber stays pinned
- roles: caller chamber = pinned anchor (top; never moves, repaints or relabels again) · bottom implementation band = the cycling region (three states) · `UpiGateway` chip = supporting, the new entry · seam chamber = foreground subject of the change · muted note `no new name here` = supporting · dashed boundary rule = supporting

narrativeRole: Converts the structure into a tradeoff the viewer recognises from their own
code review.
keyMessage: "New implementations change the factory, not the callers."

Adapt: keep the sub-shape exactly — one element pinned once that never moves again while the
adjacent region steps through discrete hard-cut states, steady cadence; change the cycling
region from peer stamps to the bottom implementation band and cap the states at three.

Scene 1 (0.0–1.0s): the F4 stack returns and the caller chamber **pins** — from this beat it
does not move, repaint or relabel on any later beat.
Scene 2 (1.0–2.4s): "lands" (1.02) — a third chip `UpiGateway` spring-pops (restrained) into
the bottom band and the band re-flows once; a third short arrow draws from the seam to it.
Scene 3 (2.4–5.4s): "the change is inside the factory" — the seam chamber gains one ember
marker `+ 1 case` on "inside" (3.18 → 3.74), the frame's only ember, while the two existing
chips stay exactly where they were.
Scene 4 (5.4–7.6s): "callers never heard of it" — a muted mono line `no new name here` settles
under the pinned caller chamber on "never" (6.04 → 6.94); the chamber itself is untouched.
Scene 5 (7.6–9.941s): "coupling stays out of the domain" — a dashed rule slides across the
seam chamber on "stays out" (8.06 → 8.54), marking the boundary where the coupling now lives;
hold with jitter on the new chip only.

## Frame 8 — The tell (Grammar X)

- scene: two stacked chambers, a factory with nothing to choose above, the honest direct call below, and one serif word to close
- duration: 11.264s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/08-nothing-to-choose.html
- type: cta
- persuasion: Common-belief vs reality (a factory always looks like the good shape) + Distillation (compress the part to one word)
- beat: unease → resolve
- blueprint: comparison-split (Adapt)
- voiceover: "Here is the tell. A factory that forwards one argument list to one constructor has nothing to choose. Keep it and you have ceremony."
- sfx: none
- focal: the top chamber's two-line factory, then the serif word `ceremony`
- roles: top navy chamber (the wrong shape) = foreground subject · its `nothing to choose` title chip = supporting · ember left-edge rule = supporting, the only ember · bottom cream chamber (the honest version) = supporting, lower half of the read · `ceremony` display word = foreground subject of the last beat · paper field + hairline grid = background, full-bleed

narrativeRole: Ends the part on the misuse tell, the frame the viewer screenshots.
keyMessage: "A factory that has nothing to choose is ceremony."

Adapt: keep the comparison structure (two surfaces, one claim between them); **stack it
vertically** instead of side-by-side per series § 4's portrait note, and **drop the blueprint's
mirrored rotateY tilt** — frame.md forbids rotation and its flatness is load-bearing, so the
comparison carries on fill alternation (navy above cream) and the ember rule instead of tilt.
Grammar X from the series bible owns this frame's surface; the blueprint owns its shape. The
one place the two disagree, recorded here and in `BRIEF.md`.

Scene 1 (0.0–1.9s): the field clears to two stacked chamber outlines inside the top 83%; the
top chamber is navy (a code surface), the bottom stays cream; a mono chip `the tell` lands in
the top chamber's title strip on "tell" (0.62).
Scene 2 (1.9–4.5s): "forwards one argument list" — the top chamber types
`function createGateway(key: string) {` (1.92 → 2.92) then
`return new StripeGateway(key);` (3.36 → 4.44), all muted except the single `key`.
Scene 3 (4.5–6.4s): "to one constructor" (4.96 → 5.64) — an ember rule draws down the
chamber's left edge and a thin rail marks the one argument passing straight through.
Scene 4 (6.4–8.8s): "has nothing to choose" (6.82 → 7.54) — the chip `nothing to choose`
settles into the title strip, and the bottom chamber arrives with
`const gateway = new StripeGateway(key);` labelled `the direct call` in muted mono.
Scene 5 (8.8–11.264s): "keep it and you have ceremony" — the serif word **ceremony** (EB Garamond, italic,
the frame's display moment) settles beneath the two chambers on "ceremony" (10.16) and holds to
the end; this is the only frame with real exit motion, and it is the last, so the hold simply
ends.
