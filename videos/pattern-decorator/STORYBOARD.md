---
format: 1080x1920
duration: 78s
message: "A decorator adds responsibility by wrapping the same type — stackable at runtime, where inheritance bakes it in at compile time"
arc: concept-explainer (the problem → inheritance's bill → the wrapper → the order → the code → the stack → the bill paid → where it goes wrong)
audience: experienced backend developers who have written CRUD and want the mechanics and the misuse named precisely
mode: autonomous
music: none
captions: en
series: backend-patterns
part: 8 of 10
voice: af_heart
tts_provider: kokoro
---

# STORYBOARD — pattern-decorator

Part 8 of 10 in the `backend-patterns` campaign. Campaign lock:
`G:\Content Creation\writing\backend-patterns\series-bible.md` (sections 3-8 binding). Frame
numbering is canonical for this part: `SCRIPT.md`'s `Frame N` labels map 1:1 onto `Frame N` here,
in order. Spine: **what problem it solves -> the anatomy -> the code shape -> where it goes
wrong.** Claim (bible § 3, part 8): *Decorator adds responsibility by wrapping the same type —
stackable at runtime, where inheritance would have baked it in at compile time.* Ends on the
misuse tell: *twelve nested wrappers nobody can debug, and `instanceof` lying about what it is.*

## Order-independence (series rule: this part must stand alone)

Checked on paper **before** any TTS was spent (bible § 2).

**Check A — does any line presuppose a later or earlier part?** No. F1 opens on the object (a
service with behaviours wanted on top of it), not on a prior claim. No "as we saw", no part
numbers, no running gag. **No sibling pattern is named at all** — the boundary allowance ("this
is not an adapter") is spent on the floor: the narration is already carrying compile-time vs
runtime in F7 and adding an interface-conversion clause in F3 would cost ~9 seconds of a 78s
film to mark a boundary the viewer is not confused about. Recorded as a deliberate choice, not an
oversight.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F5 ↔ F6** (the ring class ↔ the composition expression). PASS mechanically, FAIL in
  order. The two code chambers are the same object seen from outside and inside, and L6's "still
  PaymentGateway" refers to a stack the viewer has seen built. Order kept: anatomy before
  call-site.
- **Swap F2 ↔ F3** (inheritance's bill ↔ the wrapper). FAIL, deliberately. F3's "wraps instead"
  only has a referent because F2 just staged the subclass answer. The one load-bearing seam in
  the part is F2 → F3; F1, F4, F5, F6 are parallel detail and F7/F8 are the payoff and the tell.

Conclusion: the sequence is load-bearing in exactly one place (F2 → F3) and free elsewhere.

## Grammar decision (bible § 4), recorded here, measured at snapshot

**Grammar R (the vertical three-chamber call graph) is the spine** and carries F1 (caller / seam /
implementation) and the top chamber of F7. **This part breaks from the vertical stack for its
anatomy (F3, F4, F8) and says so**: a decorator is *containment*, not a call graph. Drawing
`cache( retry( log( base ) ) )` as three boxes stacked vertically would show three collaborators,
which is the wrong claim — the whole point is that each one **is** the thing it wraps. So the
anatomy is **nested chambers**: concentric rounded rects, each ring carrying its own 2px ink
border and its own label (`cache` / `retry` / `log`), the base object at the centre. The break is
the portrait override the bible allows ("break the rule only where a comparison genuinely reads
better"), and it is written into `BRIEF.md` `## Customizations`.

**Grammar C twice**: F5 (the ring class, 6 lines) and F6 (the composition, 3 lines) — the maximum
the bible allows per part. **Grammar X once**, at F7: the inheritance explosion in the top chamber
against three decorators combined in one expression below it. Stacked vertically, not side by
side (portrait).

**The central motion is rings arriving one at a time** — F3, F4 and F8 all build nested elements,
which is exactly where the recorded failure (an unstyled nested box collapsing to 0,0 while
`check` reports 0 errors) bites. Every ring carries its class as well as its id, and every ring's
landing moment gets a snapshot read, not a lint read.

## Video direction

The whole part shares one look and one motion grammar. Per-frame Scene lines below carry only the
delta.

- **Palette system** (from `frame.md` § Colors, brand-remixed in `design.md`; never invented):
  `{colors.cream}` `#FFFFEB` is the ground of every frame, `{colors.ink}` `#1A1A1A` is type and
  the 2px chamber border. **`coral`/ember `#FFA946` is the voltage** and marks only what is live in
  the beat — the behaviour being named, the call-through token, the `7`. **`lavender` `#F0D7FF` is
  reserved for the type identity** (`implements PaymentGateway`, `: PaymentGateway`) because the
  part's claim is about the type staying the same; it never decorates. **`tile-strong`/forest
  `#034F46`** fills the innermost base chamber only (the object that actually does the work). Dark
  chambers are `ink` fill with a 2px `cream` border and `cream` type (design.md: 2px cream on
  dark). Syntax tokens inside a code chamber follow `frame.md`'s fixed decoration (keyword ember,
  string teal `#5DB8A6`, number amber `#E8A55A`), muted code ink `#8A8A80`.
- **Chamber law (this part's grammar R break)** — a ring is a `position:absolute` rounded rect at
  a fixed inset step, `border: 2px solid #1A1A1A`, `background: transparent` over the cream ground,
  label pinned to its own top-left inside edge. **Nesting is drawn by inset, never by `scale`**
  (a scaled box scales its type, and type below the legibility floor is the recorded P2 failure).
  Every ring element carries both its id and its class (`id-without-css` trap).
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and 0.5s crossfades only;
  **no rotation anywhere** (frame.md: flatness is load-bearing — depth comes from fill alternation
  and the 2px border, never `rotateX/Y/Z`). Every entrance is a `fromTo` long-tail settle
  (`power3`, `expo.out` on a fast arrival), **no overshoot** except the restrained `spring-pop`
  settle on a ring landing. Reveals are **paced to the VO across the back ~50%** of each frame;
  at t=0 only what the line is saying at that moment exists. During a hold the only aliveness
  allowed is **subtle jitter** on one held element — no lazy breathing, no back-half pan or push.
  In-place label swaps (F4's ring labels) use the **time-proxy + discrete step array** — never a
  `text` tween (no TextPlugin ships; `check` reports 0 errors on a no-op).
- **Rhythm / held-frame allocation**: F3 (the wrapper lands) and F7 (the bill) are the two energy
  peaks. **F6 is the deliberate held read** — the expression is on screen, its type annotation
  glows once, and nothing else moves. F8 closes on a hold that gets worse on purpose (the rings
  keep arriving until the centre is unreadable) and then stops dead. F1, F2, F4, F5 keep revealing
  to the VO the whole way through.
- **Caption keep-out**: bottom ~17% is the pill's. All F1-F8 content is planned into the top
  ~83% — **nothing load-bearing below y = 1594** on the 1920 canvas; a centred hero axis sits at
  y ≈ 0.42 × 1920 ≈ 806. The concentric rings in F3/F8 are centred on y ≈ 780 with the outermost
  ring's box ending by y ≈ 1500. Background fields (paper, hairline grid) are exempt and stay
  full-bleed.
- **Negative list — never appears**: the TypeScript/Python `@decorator` syntax sugar (see
  `BRIEF.md` `## Notes` — it needs more than one clause and would blur the runtime-vs-compile-time
  claim); Java I/O or any library name (bible § 5); side-by-side chambers (portrait; the before/
  after at F7 is stacked); a call graph drawn where containment is meant; mnemonics; any second
  three-item list (the one triad is L1's cache/retry/log); any on-screen claim the script does not
  say, and vice versa; browser chrome, cursors, device mocks, real screenshots (nothing was
  captured — this part is fully invented); purple-blue AI gradient bokeh; gradient fills or text
  shadows; a redrawn logo (there is none); rotation.
- **On-screen type is the hero, not the narration's echo.** The visible text is chamber labels
  (`cache`, `retry`, `log`, `StripeGateway`), mono type tags (`: PaymentGateway`), class names and
  code. Real code inside a code chamber is content, not narration echo (frame-worker-core's
  exception). No sentence from `SCRIPT.md` is rendered as display text.
- **Numbers are checkable, never invented** (bible § 6): `7` = the non-empty subsets of three
  behaviours (3 single + 3 pairs + 1 triple), shown as `2^3 − 1`; `6 lines` = the actual line
  count of the F5 fragment; `12` = the illustrative depth of the misuse tell, stated as such in
  narration and never presented as a measurement.

---

## Frame 1 — Three behaviours, one service

- scene: the caller / seam / implementation stack assembles, and three behaviour chips arrive on the rail beside it
- duration: 7.723s
- poster: 6.5s
- transition_in: cut
- status: animated
- voiceover: "You want caching, retries and logging on one service. Each one changes what the call does."
- src: compositions/frames/01-three-behaviours.html
- type: hook
- persuasion: Frame-then-fill (state the shape, then populate it)
- beat: recognition + slight unease
- blueprint: grid-card-assemble (Adapt)
- focal: the three-chamber vertical stack (grammar R)
- roles: paper field + hairline grid = background (full-bleed, unlit) · caller/seam/implementation chambers = foreground subject · cache/retry/log chips = supporting (right rail) · kicker = chrome
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; the items are three
grammar-R chambers (not cards), and the second stagger is the behaviour rail, so the frame has two
assembly waves instead of one.

narrativeRole: Re-establishes the problem the pattern answers before naming anything — one working
object, three behaviours people want bolted onto it.
keyMessage: "The behaviours are additions around a call, not changes to what the call means."

Scene 1 (0.0–1.0s): full-bleed cream paper field + hairline grid (background, unlit); kicker
`✱ DECORATOR` (mono, uppercase, muted ink) settles left on "You want" (0.24); the **caller** chamber
`ORDER SERVICE` arrives in the top slot of the vertical spine (grammar R), left-aligned, on a long-tail
settle — nothing else on screen while the line is still on "want".
Scene 2 (1.0–3.4s): the three behaviour chips enter on the right rail one per spoken behaviour —
`CACHE` at 0.52, `RETRY` at 1.74, `LOG` at 2.62 — via **item stagger-assemble** with each chip's label
taking the ember ink only while it is the one being named (one voltage at a time, settling to ink).
Asymmetric 60/40: spine left, rail right, 3 depth layers.
Scene 3 (3.4–5.0s): on "one service." (3.36–3.58) the **seam** chamber lands in the middle slot — dark
ink chamber, 2px cream border, cream mono label `PaymentGateway`, lavender `interface` tag; then the
**implementation** chamber `StripeGateway` (forest fill) lands in the bottom slot at 4.4. Two 2px ink
dependency arrows **SVG self-draw** downward between the three chambers (3.9, 4.6).
Scene 4 (5.0–7.7s): "Each one changes what the call does" (5.04–6.90) — a short ink connector strokes
from each chip to the seam chamber's edge, one per word of "what the call does" (6.08, 6.50, 6.64), the
last landing on "does."; the full stack holds from 7.1 with **subtle jitter** on the seam chamber only.

## Frame 2 — Inheritance's bill

- scene: subclass names pile up, each longer than the last, and a seven-class count lands on them
- duration: 10.368s
- poster: 6s
- transition_in: cut
- status: animated
- voiceover: "Inheritance answers that with a subclass per combination. Three behaviours, seven classes, picked before the program runs."
- src: compositions/frames/02-inheritance-bill.html
- type: pain_point
- persuasion: Numbered enumeration + statistical proof (a derived count, not a made-up one)
- beat: surprise + recognition
- blueprint: dataviz-countup (Adapt)
- focal: the `7` number-lockup
- roles: paper field = background · the pile of five widening subclass-name bars = foreground subject · 7 / "classes" lockup = the hero figure · `COMPILE TIME` mono tag = supporting · formula `2^3 − 1` = supporting
- sfx: none

Adapt: keep the count-up landing on one hero metric as the signature move; the metric is a derived
class count instead of a chart value, and the "chart" is a pile of type names that grow longer as
they combine.

narrativeRole: Names the default answer (subclassing) and shows its cost, so the pattern's
runtime claim has something concrete to be cheaper than.
keyMessage: "Inheritance fixes the combination before the program runs, and every combination is its own class."

Scene 1 (0.0–2.3s): field + kicker `INHERITANCE'S BILL`; the strip's baseline rule draws on at 0.98
("answers"); nothing else exists until "subclass" (2.26), when bar 1 `CachedStripeGateway` (mono, cream
bar, 2px ink border) arrives in the top slot of a **full-width strip** of stacked name bars.
Scene 2 (2.3–5.0s): bars 2 `LoggedStripeGateway` and 3 `RetriedStripeGateway` arrive on "per" (2.94) and
"combination." (3.30), each one wider than the last — the widening is the joke, so the bars are flush
left and grow rightward. 3 depth layers: field, rule, bars.
Scene 3 (5.0–6.6s): "Three behaviours," (5.04, 5.38) — the pair-combination bars 4 and 5 arrive; on
"seven" (6.60) the **number-lockup** `7` (EB Garamond figure, ink) pops at the top-right with its mono
`CLASSES` unit, sized to dominate the frame (squint test: the 7 wins).
Scene 4 (6.6–8.1s): "classes," (7.00) — bars 6 and 7 snap in together (the third pair and the triple),
and the mono derivation `2^3 − 1` settles under the count unit at 7.4 so the number reads as arithmetic,
not assertion.
Scene 5 (8.1–10.4s): "picked before the program runs" (8.14–9.52) — a dark ink chamber tag
`COMPILE TIME` (cream mono, 2px cream border) arrives at the foot of the strip on "before" (8.44), and
the longest bar `LoggedCachedRetriedStripeGateway` takes the frame's single ember edge at 8.88; hold from
9.6 with **subtle jitter** on that bar only.

## Frame 3 — The wrapper is the same type

- scene: rings appear one inside another around the base object, each wearing the same interface tag
- duration: 9.323s
- poster: 7.5s
- transition_in: crossfade
- status: animated
- voiceover: "A decorator wraps instead. It answers the same interface, does its own work, then calls the object inside."
- src: compositions/frames/03-the-wrapper.html
- type: product_intro
- persuasion: Concretization (abstract → tangible object) + progressive disclosure
- beat: comprehension + "aha"
- blueprint: compose
- focal: the nested chamber stack (cache ▸ retry ▸ log ▸ StripeGateway)
- roles: paper field + hairline grid = background · the four nested rings = foreground subject · the `: PaymentGateway` tag on each ring = supporting (the proof of "same type") · centre forest chip `StripeGateway` = supporting · kicker = chrome
- sfx: none

compose: no blueprint draws containment — concentric rings arriving from the centre outward,
each wearing the same type tag, is built from the motion vocabulary (`spring-pop-entrance` in its
restrained register for each ring landing, `center-outward-expansion` for the tag rail).

narrativeRole: The anatomy frame. It replaces the vertical call graph with the honest picture: a
box inside a box inside a box, every box answering the same interface.
keyMessage: "A decorator is a wrapper that implements the interface of the thing it wraps, does its own work, then delegates."

Scene 1 (0.0–1.5s): field + kicker `THE WRAPPER`; the frame is empty paper until "wraps" (1.02), when
the **base** chamber `StripeGateway` (forest fill, cream type, 2px cream border) settles dead-centre on
the hero axis (y ≈ 780). On "instead." (1.46) ring `LOG` — the innermost wrapper — arrives *around* it,
transparent fill, its own 2px ink border, mono label pinned inside its top-left edge. Centred template,
nesting drawn by inset, never by scale.
Scene 2 (1.5–4.3s): "It answers" (3.12) ring `RETRY` settles one step outside LOG with a restrained
**spring-pop settle**; "the same" (3.92) ring `CACHE` arrives outermost, and the four-box containment
reads at full size — the focal fills ~55% of the frame.
Scene 3 (4.3–6.1s): "interface," (4.26) — four lavender pills `: PaymentGateway` stagger onto the
top-right inside edge of CACHE, RETRY, LOG and the base (4.40, 4.72, 5.04, 5.36): the type identity
proved by repetition, one per box. On "own work," (5.74–6.00) a small mono `work` tick appears on each
ring's lower edge (staggered 6.0–6.4), de-emphasised ink.
Scene 4 (6.1–8.3s): "then calls the object inside." (6.96–8.26) — three thin ink delegation strokes
**SVG self-draw** inward, CACHE→RETRY (6.72), RETRY→LOG (7.36), LOG→base (7.66), each ending on the edge
of the box it wraps; the centre is the only place all three lines point.
Scene 5 (8.3–9.3s): the complete concentric stack holds and reads still — **subtle jitter** on the CACHE
ring only. No camera push, no breathing.

## Frame 4 — Order is a decision

- scene: two concentric stacks, one above the other, with retry and cache at swapped depths; an ember mark shows what ends up stored
- duration: 7.829s
- poster: 7s
- transition_in: crossfade
- status: animated
- voiceover: "The order of the rings is a decision. Retry inside the cache, and a retried call gets stored."
- src: compositions/frames/04-order-is-a-decision.html
- type: feature_showcase
- persuasion: Comparison of two options + demonstration (show the mechanism running)
- beat: comprehension + foresight
- blueprint: grid-card-assemble (Adapt)
- focal: the upper stack (retry inside cache) and its ember "stored" mark
- roles: paper field = background · upper nested stack = foreground subject · lower nested stack = the counter-option (supporting, dimmed ink) · `stored` ember chip = supporting · the mono depth labels = supporting
- sfx: none

Adapt: keep the staggered cascade-and-hold; the items are two concentric ring stacks (built ring by
ring, outer first) instead of a list, so the comparison is depth order rather than sequence.
Stacked vertically — portrait, and the two options are read one after the other.

narrativeRole: Proves the pattern's real power (and its real footgun) without a new abstraction:
the stack is chosen at build time, so reordering it is a behavioural decision.
keyMessage: "Rings compose in any order, and the order changes what gets cached, retried or logged."

Scene 1 (0.0–1.9s): field + kicker `ORDER`; the **upper stack** (the one the line is about) builds ring
by ring, outer first, in the top band (centre y ≈ 640): CACHE at 0.90 on "the order", RETRY at 1.30 on
"the rings", LOG at 1.60, base chip at 1.86 on "decision." A mono depth rail (`1` `2` `3`) sits to its
left, arriving with each ring. Asymmetric: stack left, depth rail right of it.
Scene 2 (1.9–4.6s): the **lower stack** builds in the bottom band (centre y ≈ 1150) in the swapped order
— RETRY outermost at 3.16 ("Retry"), CACHE at 3.78 ("inside"), LOG at 4.20, base at 4.52 ("cache,"). The
two stacks are the same four boxes with two rings exchanged, so the comparison is read as depth, not as
new content; the lower stack's ink sits at a de-emphasised weight so the upper one stays the focal.
Scene 3 (4.6–7.8s): "a retried call gets stored." (5.54–6.96) — an ember `stored` chip settles on the
upper stack's CACHE ring inner edge at 6.54, the frame's single voltage; nothing is marked on the lower
stack (it is the counter-option, not a claim). Hold from 7.0 with **subtle jitter** on the upper stack
only.

## Frame 5 — One ring in code

- scene: a five-line TypeScript decorator fragment types onto the dark code chamber, line by line, ending on the call-through
- duration: 7.36s
- poster: 7s
- transition_in: cut
- status: animated
- voiceover: "One ring in code is small. The constructor takes the interface, keeps it, and calls through."
- src: compositions/frames/05-one-ring.html
- type: feature_showcase
- persuasion: Worked example + signposting (the shape, then its three moving parts)
- beat: confidence
- blueprint: typewriter-reveal (Adapt)
- focal: the code chamber `logged-gateway.ts`
- roles: paper field framing the chamber = background · the navy/ink code surface + title bar + status strip = foreground subject · `implements PaymentGateway` (lavender) and `this.inner.charge(amount)` (ember) = the two load-bearing tokens · gutter rail = chrome
- sfx: none

Adapt: keep typing-as-the-engine; the granularity is one declaration line per spoken cue instead of
one character, and the caret sits on the active line. The code is real and read for correctness; the
fragment is an excerpt (5 lines) because bible § 4 caps a chamber at 6 lines and § 5 forbids showing a
full class, so the two closing braces are elided and the status strip says `fragment · 5 lines`.

narrativeRole: Shows the smallest honest version of a ring so the anatomy is not a diagram only.
keyMessage: "A ring is a class that takes the interface in its constructor and calls through to it."

Scene 1 (0.0–1.7s): cream field framing a dark **code-surface** chamber (ink fill, 2px cream border,
`navy-elev` title bar with the mono filename `logged-gateway.ts` and a status strip reading
`log: string[]`); the chamber arrives at 0.74 ("in code") empty, and the first line types on at 0.92
("code"): `class LoggedGateway implements PaymentGateway {` with `implements PaymentGateway` in
lavender. Slow **push** on the chamber from 1.26 to 1.60 as "is small" lands — then it stops.
Scene 2 (1.7–4.3s): the line rail (five mono line numbers, de-emphasised) draws at 2.86; line 2
`constructor(private inner: PaymentGateway) {}` arrives on "constructor" (2.96), its `PaymentGateway`
also lavender; line 3 `async charge(amount: number) {` arrives on "the" (4.02). A caret sits on the
active line (**type-on with caret**, one caret only).
Scene 3 (4.3–6.2s): "keeps it," (5.20–5.52) — line 4 `log.push(\`charge ${amount}\`);` arrives, its
template literal in the code surface's fixed string teal; this is the ring's *own* work, so the line is
marked in the gutter with a muted `work` tick.
Scene 4 (6.2–7.4s): "and calls through." (6.20–6.56) — line 5 `return this.inner.charge(amount);`
arrives with `this.inner.charge(amount)` in **ember**, the frame's single voltage and the whole claim of
the line; hold on the five lines, subtle jitter on the chamber only from 6.9. The two closing braces are
elided (a fragment, not a class), and the chamber's status strip says so in mono: `fragment · 5 lines`.

## Frame 6 — The stack is one expression

- scene: the nested construction builds outward from the base inside one expression, and the type annotation glows while the frame holds
- duration: 10.027s
- poster: 8s
- transition_in: crossfade
- status: animated
- voiceover: "The stack is one expression at the call site. Its type is still PaymentGateway. Nothing downstream knows the difference."
- src: compositions/frames/06-one-expression.html
- type: benefit_highlight
- persuasion: Demonstration (show the mechanism running) + callback to the ring class
- beat: conviction
- blueprint: compose
- roles: paper field = background · the code chamber holding `const gateway: PaymentGateway = new LoggedGateway(new RetriedGateway(new CachedGateway(base)))` = foreground subject · the lavender `: PaymentGateway` annotation = the payoff · a thin nesting bracket per `new` = supporting · the held field = chrome
- sfx: none

compose: a single expression that assembles from the inside out, then holds. No blueprint fits
"one line of code building nested parens".

narrativeRole: Turns the diagram into the thing a reviewer would actually read, and lands the
substitutability claim — the expression's declared type never changes however deep the stack goes.
keyMessage: "The whole stack is one value at one call site, and its type is still the interface."

Scene 1 (0.0–2.8s): field + kicker `THE CALL SITE`; the code chamber rises at 0.22 ("stack") holding one
line so far — `const gateway: PaymentGateway =` with `: PaymentGateway` in lavender (types on across
"one expression" 0.98–1.30); line 2 `new CachedGateway(` arrives at 1.88 ("at"), line 3
`new RetriedGateway(new LoggedGateway(base)));` at 2.44 ("call"), landing before "site." (2.74). A thin
ink nesting bracket is drawn per `new`, indent stepping inward — the nesting is the diagram.
Scene 2 (2.8–5.4s): "Its type is still PaymentGateway" (3.90–5.22) — nothing new arrives; the lavender
annotation on line 1 gets one **keyword glow** beat (4.88 "still" → 5.22), the only emphasis in the
frame, and the three `new` tokens hold their bracket guides so the depth stays readable.
Scene 3 (5.4–10.0s): "Nothing downstream knows the difference" (7.08–9.26) — a short ink arrow draws out
of the chamber's right edge at 7.62 to a muted mono chip `downstream` at 8.38, then the frame is **held
still** for the remaining ~1.6s (the deliberate breather of the part; the arrow does the work, the
expression does not move). No jitter after 9.4 — the hold is the point.

## Frame 7 — Seven classes, or three rings

- scene: the grammar-X split — a wall of seven subclass names on top, three decorator classes and one expression below
- duration: 11.115s
- poster: 7.5s
- transition_in: cut
- status: animated
- voiceover: "Inheritance needed seven classes, fixed at compile time. Three decorators need three classes and one expression per stack."
- src: compositions/frames/07-seven-vs-three.html
- type: benefit_highlight
- persuasion: Before/after + contrast of two options (the part's thesis, priced)
- beat: mastery
- blueprint: compose
- focal: the two stacked chambers (wrong shape above, fixed shape below)
- roles: paper field = background · top dark chamber holding the seven names = the wrong shape · bottom cream chamber holding three class chips + one expression = the fixed shape · the two mono tags `COMPILE TIME` / `RUNTIME` = supporting · the single ember marker on the expression = the voltage
- sfx: none

compose: grammar X is prescribed by the campaign bible as two stacked chambers, one frame, used
once — the frame the viewer screenshots.

narrativeRole: Pays the claim in full: what inheritance would have cost against what the decorator
stack costs, in classes and in when the choice gets made.
keyMessage: "Combining at runtime replaces a class per combination with three classes and one expression."

Scene 1 (0.0–2.0s): field + kicker `THE BILL`; on "seven" (1.36) the **top chamber** (ink fill, 2px cream
border: the wrong shape) arrives in the upper band and its seven mono subclass names stagger down its
list, one every ~0.16s (capped well under the 0.5s arrival limit so the pile reads as one accumulation),
finishing on "classes," (1.92); a mono `7` sits in its top-right corner.
Scene 2 (2.0–4.4s): "fixed at compile time" (3.12–4.28) — a `COMPILE TIME` pill (outline on dark, cream
type) settles in the chamber's foot on "compile" (3.80); the seven names stay put, no motion.
Scene 3 (4.4–7.8s): "Three decorators need three classes" (5.88–7.78) — the **bottom chamber** (cream,
2px ink border: the fixed shape) rises under the first at 5.88 ("Three"), and three class chips arrive
one per word — `CachedGateway` 6.14, `RetriedGateway` 6.60, `LoggedGateway` 7.00 — each wearing a small
lavender `: PaymentGateway` tag, so the sameness of type is still the thing being marked.
Scene 4 (7.8–10.4s): "and one expression per stack." (8.42–10.40) — one mono line types beneath the
chips: `new CachedGateway(new RetriedGateway(new LoggedGateway(base)));` with a single ember marker on
the outer `new` (9.02 "one"), the frame's only voltage; a `RUNTIME` pill settles in the chamber's foot on
"per" (9.94) so the two tags read against each other.
Scene 5 (10.4–11.1s): both chambers hold, completely still — the screenshot beat.

## Frame 8 — Twelve deep

- scene: rings keep arriving inside the last one until the centre is unreadable, a stack-trace rail counts them, and the type check comes back false
- duration: 9.003s
- poster: 7.8s
- transition_in: crossfade
- status: animated
- voiceover: "Left unchecked, every call site adds a ring. Twelve deep, and a type check on the class you wrapped reads false."
- src: compositions/frames/08-twelve-deep.html
- type: pain_point
- persuasion: Counterexample (here is when it breaks) + accumulation
- beat: unease + resolve
- blueprint: overwhelm-surround (Adapt)
- focal: the over-nested chamber stack collapsing on the centre
- roles: paper field = background · the twelve nested rings (labels legible to ring five, then unreadable by design) = foreground subject · the mono stack-trace rail (12 frames) = supporting · the code line `gateway instanceof StripeGateway // false` = the second tell · `false` in ember = the single voltage · kicker = chrome
- sfx: none

Adapt: keep accumulation-then-closing-in as the signature move; what closes in is the viewer's own
wrapper stack (each ring arriving inside the previous) rather than a crowd of surfaces, and the
crushed centre is the base object. The final frame owns the only exit in the part.

narrativeRole: The series' required ending — the misuse tell — and the honest cost of the pattern's
own virtue (adding a ring is cheap, so people keep adding them).
keyMessage: "Depth is the failure mode, and a wrapper is not an instance of the class it wraps."

Scene 1 (0.0–3.2s): field + kicker `DEPTH`; the three named rings from F3 are already seated (CACHE,
RETRY, LOG around the base) at 0.0 — the frame opens on the stack the viewer knows. "every call site adds
a ring" (1.52–3.18) — four anonymous rings puncture in *inside* the last one, each inset one step and each
wearing only a `+1` chip instead of a name (1.52, 1.82, 2.22, 2.58, plus one on "ring." at 3.02): the
accumulation is the claim, and unnamed rings are the tell.
Scene 2 (3.2–5.0s): "Twelve deep," (4.28–4.56) — the remaining rings puncture on a fast index-derived
stagger (4.28→4.9, twelve total), the centre chamber shrinking to a slot that fits `base` on one line
while every ring keeps its own 2px border; nothing scales, so the type stays at the legibility floor and
the geometry does the squeezing.
Scene 3 (5.0–7.4s): "a type check on the class you wrapped" (5.56–7.36) — a mono **stack-trace rail**
fills down the lower-right band, one row per ring (12 rows, index + `LoggedGateway.charge` /
`RetriedGateway.charge` / … on the named three, `+1.charge` on the anonymous rest), arriving every
~0.15s so the rail reads as the same accumulation the rings just made; simultaneously the code line
`gateway instanceof StripeGateway` types onto the lower-left band at 6.36.
Scene 4 (7.4–9.0s): "reads false." (7.72–8.14) — the comment `// false` arrives on "false" in **ember**
(the frame's single voltage, and the film's last word), the rail and the rings stop moving dead, and the
final frame holds still to its end — the only frame in the part that owns its own ending, and it does not
fade out.
