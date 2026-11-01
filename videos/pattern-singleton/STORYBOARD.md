---
format: 1080x1920
duration: 80s
message: "Singleton is a lifetime decision wearing a pattern's clothes, and a DI container gives you one instance with no static."
arc: concept-explainer with process (problem -> anatomy -> code shape -> where it goes wrong)
audience: backend developers who have written CRUD and shipped a singleton they are glad about
mode: autonomous
series: backend-patterns
part: 3 of 10
music: none
sfx: none
captions: en
---

# STORYBOARD — pattern-singleton

Part 3 of 10. Per-part claim (`writing/backend-patterns/series-bible.md` § 3): **Singleton is a
lifetime decision wearing a pattern's clothes; the DI container gives you one instance with no
static.** It ends on the misuse tell: **a hidden global dependency, and state that survives
between tests.**

Frame numbering is canonical: `SCRIPT.md`'s `Frame N` labels map 1:1 onto `Frame N` here, in order.
Grammar is inherited from part 1 (`videos/repository-pattern/frame.md`, byte-identical to this
project's `frame.md`) — verified by `diff`, not assumed.

## Order-independence (series rule § 2 — this part must stand alone)

Checked on paper **before** any TTS was spent.

**Check A — does any line presuppose another part?** No. F1 opens on the object (a thing a program
needs exactly one of), not on a prior claim. F2 names the lifetime, which this part then spends
six frames explaining. F6 and F7 are independent failure modes: neither says "also", "second", or
"as we saw". F8's fix refers only to "the container", a generic role, and never to a sibling
episode. **No sibling pattern is named at all** — the DI container carries the boundary alone, so
§ 2's one-name allowance goes unspent.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F6 ↔ F7** (hidden global ↔ test survival). PASS. They are parallel costs, not ordered
  steps: neither mechanism depends on the other being established first. Kept in this order only
  because F6 explains *why* the object is reachable and F7 shows *when* that reachability bites
  hardest. Minor, and F6 → F7 is the stronger read.
- **Swap F2 ↔ F3** (the lifetime claim ↔ the anatomy). FAIL, deliberately. F3's three chambers are
  the machinery F2 has just made a claim about; stating the anatomy first collapses the thesis
  into a footnote. The order is kept.

Conclusion: load-bearing in exactly one place (F2 → F3), free in one (F6 ↔ F7).

## Grammar decision (series rule § 4)

- **Grammar R** (caller / seam / implementation, stacked, 2px ink borders, the seam in a dark
  chamber) is the spine: **F3** builds it, **F6** re-uses the identical stage with the knowledge
  path lit, and **F8**'s top chamber is its static variant. For Singleton the three actors are the
  **caller**, the class's **static holder** (this is the seam, and the frame's argument is that it
  is a *fake* seam), and **the one instance**.
- **Grammar C** twice: **F4** (`config.ts`, 5 lines) and **F5** (3 lines). Never a full class, one
  declaration each.
- **Grammar X** once, at the end: **F8**, two **stacked** chambers. Not side by side — the bottom
  fragment is 4 lines, and § 4 permits the cross read only when both fragments are 3 lines or
  fewer. Recorded under `## Customizations` in `BRIEF.md`.
- **Import arrow pointing back up** appears in F3 (drawn, muted) and F6 (lit in ember). That arrow
  *is* the hidden-dependency mechanism, so it is load-bearing rather than decoration.

## Video direction

One look, one motion grammar across all eight frames. Per-frame Scene lines below carry only the
delta.

- **Palette** (from `frame.md` § Colors, brand-overridden by `design.md`; never invented):
  `--ground` cream `#FFFFEB` is the canvas, `--ink` `#1A1A1A` is type and border, dark chamber
  `#1A1A1A` with cream text and a 2px cream border. **`ember` `#FFA946` is the voltage** and marks
  exactly one live thing per frame: the refused `new`, the knowledge arrow, the keyword doing the
  work, the surviving state. **`lavender` `#F0D7FF` is the action fill**, spent once, on F8's
  "container" chip (the thing you choose instead). `forest` `#034F46` is an inner-panel fill on
  dark chambers only. Muted structure is `#8A8A80` at ≤ 60% ink so ember reads as *current*, not
  as decoration. No fourth hue, no cool gray, no pure white on cream without a border.
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and 0.35s crossfades only.
  **No rotation anywhere** — `frame.md` makes flatness load-bearing (depth comes from colour
  blocking and the 2px border, never `rotateX/Y/Z`), which is also why `comparison-split` is
  rejected as a blueprint for F8: its signature move is mirrored book-open tilts. Every entrance
  is a `fromTo` long-tail settle (`power3.out`, `expo.out` on a fast arrival), **no overshoot**.
  Reveals are paced to the VO across the back ~50% of each frame; nothing front-loads; at t=0 only
  what the line is saying at that moment exists. `immediateRender: false` on every delayed
  `fromTo` (known-traps § 10). During a hold the only aliveness is a low-amplitude `sine-wave-loop`
  jitter on one held element.
- **No text mutation anywhere.** There is no TextPlugin in the shipped GSAP (known-traps § 3), so
  every state change on screen is a **separate element** entering or leaving, never
  `tl.set({ text })` or a text tween. Where a value visibly changes (F7's `retries`), two stacked
  mono nodes crossfade. This is the deliberate avoidance of the trap, not an oversight.
- **Rhythm / held-frame allocation**: F3 (the anatomy assembles) and F6 (the knowledge arrow
  lights) are the two energy peaks. **F2 is the deliberate held read** — by ~5s the serif line is
  set and nothing moves but a jitter; the stillness carries the weight of "lifetime". F7 is still
  by the last 20%: the joke is that nothing resets. F8 is fully still once both chambers land — it
  is the screenshot frame.
- **Caption keep-out**: bottom ~17% is the pill's. All F1–F8 content is planned into the top ~83%,
  capped at **y = 1594**; the hero axis sits at y ≈ 806. Chambers, code lines, arrow labels and
  chips are placed above the cap; background fields (paper, hairline grid) are exempt and stay
  full-bleed.
- **On-screen type is the hero, not the narration's echo.** Spoken lines run 14-24 words; every
  on-screen beat is ≤ 3 words, or a mono identifier (`Config.getInstance()`, `pool === cfg`).
  Labels are `caller` / `static holder` / `one instance` — never a compressed sentence of the VO.
- **Negative list — never appears**: "Singleton is evil", or any moral accusation; a UML class
  diagram with visibility glyphs (`-`, `+`); mnemonics or coined terminology; a named DI framework
  (the container stays a role, its API is never invented); side-by-side chambers (portrait, and F8
  fails the 3-line rule); rotation, gradient fills, text shadow, box-shadow elevation; a redrawn
  logo (there is none); em-dashes in any on-screen string or caption; any on-screen claim the
  script does not say, and vice versa.

---

## Frame 1 — The thing you only want once

- scene: a cream field, a serif statement, and a second `new Config()` refused at the gate
- duration: 11.605s
- poster: 9s
- transition_in: cut
- status: animated
- src: compositions/frames/01-only-one.html
- type: hook
- persuasion: Concretization (the abstract "one instance" becomes two named objects the viewer has written) + Common-belief vs reality
- beat: recognition and orientation
- blueprint: kinetic-type-beats (Adapt)
- focal: the display statement "only one"
- roles: display statement = foreground subject · kicker = chrome · `connection pool` / `app config` chips = supporting, the concrete pair · `new Config()` line = supporting · refused `new` = accent, the single ember moment · paper field + hairline grid = background, full-bleed, unlit
- grammar: statement (pre-anatomy; no chambers yet, so F3 owns the spine's first appearance)
- sfx: none

Adapt: keep the staggered statement beats and the in-place payoff pop; drop the token-cycling
(motion-language's word-slot swap needs the time-proxy pattern this part avoids) and let the
second chip arrive as its own element.

narrativeRole: Re-establishes the pattern's problem in the first two lines, before any claim, and
names the pattern. Series rule § 2 requires this; ~16 words do it.
keyMessage: A program has things it needs exactly one of, and Singleton is how a class enforces
that about itself.

### Shot sequence

- Scene 1 (0.0–1.2s): paper field + hairline grid fade up; kicker `✱ SINGLETON` arrives on the
  coral spike, then the mono text (`spring-pop-entrance`, restrained).
- Scene 2 (1.2–3.6s): display `only one` scales in on "one of" (`power3.out`, no overshoot),
  EB Garamond 400, sentence case.
- Scene 3 (3.6–7.2s): the two concrete chips land one per spoken item — `connection pool`, then
  `app config` — stacked, hairline-ringed, muted ink. Nothing else moves while "the app config"
  finishes.
- Scene 4 (7.2–9.6s): the mono line `new Config()` slides in under the chips and settles.
- Scene 5 (9.6–12.0s): a second identical line enters below it and stops dead with an ember
  `blocked` chip on the seam between them — the single ember moment, timed to "enforcing that".
  The column holds; low-amplitude jitter on the display line only.

## Frame 2 — A lifetime decision

- scene: one serif line on cream, held almost perfectly still while a mono sub-line labels the lifetime
- duration: 11.435s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-lifetime-decision.html
- type: product_intro
- persuasion: Frame-then-fill (state the shape, then populate it) + Generalization (mechanics -> principle)
- beat: clarity and anticipation
- blueprint: titlecard-reveal (Reproduce)
- focal: the italic serif line "wearing a pattern's clothes"
- roles: display line = foreground subject · kicker = chrome · mono rail `one instance` / `whole process` / `no second` = supporting, three labels arriving one per cue · `blocked` = background residue · paper field = background
- grammar: statement
- sfx: none

Reproduce: one clean statement revealed with exactly one restrained move, then a still hold. The
low motion *is* the payload — this is the lifetime frame, and a busy one would contradict it.

narrativeRole: Lands the thesis by beat 2, as the story spine requires, before the evidence
frames start.
keyMessage: What Singleton actually fixes is a lifetime, and it fixes it by forbidding a second
instance.

### Shot sequence

- Scene 1 (0.0–2.4s): crossfade in on an empty field; kicker `THE REAL CLAIM` only.
- Scene 2 (2.4–5.2s): `one instance` mono cue lands on "One instance", then the display line
  `alive for the whole process` rises beneath it on "the whole process".
- Scene 3 (5.2–7.6s): the second `no second` cue arrives on "make a second" — three mono labels
  now form a rail; the display serif stays put.
- Scene 4 (7.6–11.0s): the italic serif line `wearing a pattern's clothes` reveals under the
  statement on "pattern's clothes", single move, then the frame is still: one jitter on the italic
  line, nothing else. Held to the cut.

## Frame 3 — Three chambers

- scene: the anatomy assembling itself top-down into three stacked chambers with arrows between
- duration: 8.512s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/03-three-chambers.html
- type: feature_showcase
- persuasion: Progressive disclosure (one chamber at a time, one arrow at a time) + Causal chain
- beat: comprehension
- blueprint: grid-card-assemble (Adapt)
- focal: the dark seam chamber `static holder`
- roles: `caller` chamber = foreground, top · `static holder` chamber = foreground subject, dark, middle · `one instance` chamber = foreground, bottom · down arrows = supporting, the dependency · up arrow `names the class` = accent, the single ember moment · paper field + grid = background
- grammar: **R** — the spine's first appearance
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; change cards to three
named chambers carrying 2px ink borders, and let the arrows draw on between them rather than
appearing with their boxes.

narrativeRole: Concretizes the pattern as a graph the viewer can point at, so F6's accusation has
a diagram to break.
keyMessage: Three actors, one direction of dependency: caller, static holder, the instance.

### Shot sequence

- Scene 1 (0.0–2.6s): `caller` chamber enters at top on "Every caller", 2px ink border, cream
  fill, hairline inner rule.
- Scene 2 (2.6–5.4s): down arrow draws on to "the same door", then the dark `static holder`
  chamber rises into the middle slot on "a static holder inside the class" — the only chamber in
  a dark room, because it is the seam.
- Scene 3 (5.4–8.0s): second down arrow, then the `one instance` chamber lands on "the one
  instance behind it". Three boxes, stacked, dependency pointing down.
- Scene 4 (8.0–10.0s): the ember up-arrow traces from the instance chamber back to the caller
  with the mono label `names the class`, timed to "behind it" — knowledge flowing the other way.
  Hold, jitter on the seam chamber only.

## Frame 4 — The shape in five lines

- scene: a dark code chamber on cream, the class assembling line by line, the two load-bearing keywords lit
- duration: 9.685s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/04-the-shape.html
- type: feature_showcase
- persuasion: Demonstration (the mechanism running as source) + Anchoring on a familiar referent
- beat: comprehension and confidence
- blueprint: typewriter-reveal (Adapt — line-by-line arrival, no caret, no brand payoff)
- focal: the `private` and `static` keywords
- roles: code chamber = foreground subject · filename chip `config.ts` = chrome · `private` = accent, ember · `static` = supporting, lavender-tinted keyword · muted tokens = supporting at `#8A8A80` · paper field = background
- grammar: **C** (5 lines, one declaration)
- sfx: none

Adapt: keep the human-pace arrival of lines and the settle; drop the caret blink and the collapse
into a brand payoff — the fragment is the show, and it holds to the cut.

narrativeRole: Turns the diagram into the exact code, so the claim is falsifiable on screen.
keyMessage: Two tokens do the whole job: a private constructor and one static field.

### Shot sequence

- Scene 1 (0.0–1.4s): the cream framing plus the dark chamber's title bar arrive; filename chip
  `config.ts` in mono, muted.
- Scene 2 (1.4–3.8s): line 1 `class Config {` on "Private constructor" the second line enters with
  `private` in ember — the single ember moment; the rest of the fragment is `#8A8A7A` muted.
- Scene 3 (3.8–6.2s): `private constructor() {}` lands on "nobody outside can call new"; the
  `static` keyword on line 2 takes a lavender tint as "One static field" is spoken.
- Scene 4 (6.2–8.6s): `static getInstance(): Config { return Config.inst; }` arrives on "holds the
  instance", then the closing brace on "hands it out".
- Scene 5 (8.6–10.0s): still. A one-time hairline underline draws beneath `private` as the frame
  holds. No typing caret after the last line.

## Frame 5 — Two names, one object

- scene: two call sites resolving to the same box, and the identity check that proves it
- duration: 7.083s
- poster: 7s
- transition_in: cut
- status: animated
- src: compositions/frames/05-one-identity.html
- type: social_proof
- persuasion: Demonstration + Counterexample-adjacent proof (the check that could have failed)
- beat: conviction and slight delight
- blueprint: none (composed from the motion vocabulary — no listed shape fits an identity proof without a tilt)
- focal: the shared instance box
- roles: two caller chips `pool` / `cfg` = foreground · connector lines = supporting · the single `Config` box = foreground subject · mono line `pool === cfg` = supporting · `true` chip = accent, the one ember moment · paper field = background
- grammar: **C** (3 lines) + identity
- sfx: none

narrativeRole: Gives the one-instance claim its honest proof, and makes "same object" a thing the
viewer saw rather than was told.
keyMessage: Two references, one object, one lifetime — and `===` is the test that says so.

### Shot sequence

- Scene 1 (0.0–2.2s): the mono fragment enters top: `const pool = Config.getInstance();` then
  `const cfg = Config.getInstance();`, timed to "Ask twice".
- Scene 2 (2.2–4.6s): two chips `pool` and `cfg` drop in below the fragment, one per declaration.
- Scene 3 (4.6–6.6s): both connectors draw down and converge on a single `Config` box on "the same
  object back" — convergence is the whole point; neither chip moves afterwards.
- Scene 4 (6.6–8.5s): `pool === cfg` prints beneath the box and the ember `true` chip pops on
  "one lifetime". Still hold, jitter on the shared box only.

## Frame 6 — Everyone can reach it

- scene: the same three-chamber stage from F3, now with three files threading the up-arrow and no signature carrying the dependency
- duration: 9.707s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/06-hidden-global.html
- type: pain_point
- persuasion: Before/after (the same diagram, now read as a liability) + Causal chain
- beat: unease and recognition
- blueprint: none (composed — the frame's job is re-lighting F3's stage, not assembling new parts)
- focal: the ember knowledge arrow
- roles: the three chambers = background structure, muted on purpose · `checkout.ts` / `audit.ts` / `mailer.ts` chips = foreground · the up-arrow = accent, ember, the one voltage · mono label `not in any signature` = supporting · the word `global` in serif = supporting
- grammar: **R** re-lit (stage continuity with F3 is deliberate — same positions, same sizes)
- sfx: none

narrativeRole: Converts F3's neutral anatomy into the first half of the misuse tell, without
inventing a villain.
keyMessage: Because any file can name the class directly, the dependency never has to be declared,
and an undocumented global is what you actually shipped.

### Shot sequence

- Scene 1 (0.0–2.2s): the F3 stage returns already assembled (continuity, not a rebuild), pushed
  to muted ink; kicker `THE COST` arrives.
- Scene 2 (2.2–5.4s): three file chips thread in from the left margin, one per spoken item, each
  drawing a thin line into the seam chamber on "call the class directly".
- Scene 3 (5.4–8.4s): the seam chamber's border lights to ember along the knowledge path as
  "so the dependency never shows in a signature" lands, and a mono callout `pay(): Result` sits
  beside a signature that visibly contains no `Config` — the absence is the finding.
- Scene 4 (8.4–11.0s): the serif word `global` fades up inside the dark chamber on "a global",
  oversized, weight 400, and the frame holds still. The ember stays on the arrow and nowhere else.

## Frame 7 — It outlives the run

- scene: two test cases in sequence over one shared instance whose state never resets
- duration: 7.211s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/07-survives-tests.html
- type: pain_point
- persuasion: Worked example with real values + Counterexample (here is when it breaks)
- beat: recognition and wry discomfort
- blueprint: none (composed — a two-case timeline on one stage has no listed shape)
- focal: the shared instance box carrying `retries = 7`
- roles: `test A` chamber = foreground, left/top · `test B` chamber = foreground, right/bottom · the arrow between them = supporting · the shared `Config` box = foreground subject · `retries = 0` then `retries = 7` = the state read, two stacked nodes (no text mutation) · `no reset` chip = accent, the one ember moment
- grammar: R-derived stage, horizontal reading of the run order
- sfx: none

narrativeRole: Makes the second half of the tell concrete and falsifiable — the exact symptom this
audience has debugged at 11pm.
keyMessage: The instance is not per test, so whatever one case wrote is sitting there for the next
one.

### Shot sequence

- Scene 1 (0.0–2.4s): `test A` chamber enters top-left on "It outlives", the shared `Config` box
  already visible at centre-bottom with `retries = 0` in muted mono.
- Scene 2 (2.4–5.0s): a connector from test A to the box, and the second mono node `retries = 7`
  crossfades over the first (two elements, never a text tween) on "State left by one case".
- Scene 3 (5.0–7.6s): `test B` chamber enters below on "in the next one" and its connector arrives
  to the *same* box, still reading `retries = 7` — the second case inherits, and the frame says so
  by not changing anything.
- Scene 4 (7.6–9.5s): the ember chip `no reset` pops on the seam between the two cases; everything
  is still for the last ~1.5s on purpose.

## Frame 8 — The lifetime, without the static

- scene: two stacked code chambers, the wrong shape over the fixed one, one lavender chip naming the container
- duration: 9.237s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-before-after.html
- type: cta
- persuasion: Before/after + Distillation (compress the part to one choice)
- beat: resolve and "now I get it"
- blueprint: none (`comparison-split` rejected: its signature move is mirrored `rotateY` book-open tilts and this pack forbids rotation; also § 4 stacks these chambers vertically)
- focal: the after chamber's `constructor(private cfg: Config)`
- roles: before chamber = foreground, top, muted chrome, label `static holder` · the `static` keyword in it = accent, ember, the thing you drop · after chamber = foreground, bottom, label `container` in the part's one lavender chip · `private cfg: Config` = supporting, lavender-tinted parameter · `one instance, no static` mono line = supporting · paper field = background
- grammar: **X** — the single before/after, and the screenshot frame
- sfx: none

narrativeRole: Pays the claim's second half and closes on the tell rather than on a moral: keep
the lifetime, move who owns it.
keyMessage: The container can give you exactly one instance with no static in the class, and then
the caller's signature tells the truth about the dependency.

### Shot sequence

- Scene 1 (0.0–2.0s): crossfade onto the cream field; the before chamber's title bar and label
  `static holder` arrive.
- Scene 2 (2.0–4.6s): the 3-line fragment types in — `class Checkout {` / `pay() { return
  Config.getInstance(); }` / `}` — with `static` lit ember as "drop the static" lands. The reach
  is visible in the body and absent from the signature; that contrast is drawn by the layout, not
  by the words.
- Scene 3 (4.6–7.6s): the after chamber rises below it, 2px ink border, and the lavender chip
  `container` pops on "Let the container". Its 4-line fragment arrives with
  `constructor(private cfg: Config) {}` highlighted lavender on "own the lifetime".
- Scene 4 (7.6–10.0s): the mono line `one instance, no static` settles under the after chamber on
  "declare the dependency", a hairline rule draws between the two chambers, and the frame is fully
  still for the last ~1.6s. No exit motion: this is the frame that gets screenshotted.
