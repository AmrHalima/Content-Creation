---
format: 1080x1920
duration: 73.15s
message: "Adapter converts one interface into another so incompatible code can talk, and it is what keeps your domain clean while the vendor stays in the room"
arc: problem -> claim -> boundary -> anatomy (grammar R) -> code shape (grammar C x2) -> the honest cost -> the misuse tell (grammar X + the stack)
audience: experienced backend developers who have already written CRUD and want the mechanics and the misuse named precisely
mode: autonomous
music: none
captions: en
series: backend-patterns
part: 7 of 10
---

# STORYBOARD — pattern-adapter

Part 7 of `backend-patterns`. Grammar carrier is part 1 (`videos/repository-pattern/`); the shared
lock is `../../writing/backend-patterns/series-bible.md`, sections 3, 4, 5, 6, 7 and 8 are binding
here. `SCRIPT.md`'s `Frame N` labels map 1:1 onto `Frame N` below, in order.

Spine (bible § 1): what problem it solves (F1-F2) -> the anatomy (F3-F4) -> the code shape (F5-F6)
-> where it goes wrong (F8-F9), with the honest cost named once at F7 because this is a tradeoffs
series. The part ends on its misuse tell (bible § 3, part 7): the wrapped API leaking through
anyway, and adapters stacked on top of adapters.

## Order independence (bible § 2)

Checked on paper **before** any TTS was spent.

**Check A — does any line presuppose another part?** No. F1 opens on the object (two signatures
that do not fit), not on a prior claim. F2 names the pattern and states what it does. F3 names
**Factory once, to mark a boundary only** ("a factory picks which thing to build"), never to borrow
authority and never as "as the factory episode said". Nothing says "as we saw", "part 7", or
"next time". The problem is re-established in the first two narration lines: Line 1 is 13 words
("Your code wants one shape. The vendor's SDK hands you a different one."), inside the ~10-18 word
window, and the first claim only arrives at Line 2.

**Check B — swap two claims, is the story still true?** Four swaps run:

- **Swap F5 ↔ F6** (the adapter class ↔ the return-type conversion). PASS with cost. Both are
  evidence about the same box, in either order. Kept as is: the class first shows the call going
  out, the morph then shows the answer coming back, which is the direction the narration speaks.
- **Swap F3 ↔ F4** (the boundary ↔ the three chambers). FAIL, deliberately. F4's line begins
  "That seam", which refers to the seam F3 just named. Order kept.
- **Swap F2 ↔ F3** (the claim ↔ the factory boundary). PASS, but F3 exists to stop the viewer
  collapsing the pattern into a constructor, which only matters after the pattern has been named.
  Order kept for that reason, not because the claim would be false.
- **Move F7 (the cost) anywhere.** PASS, and it is kept where it is for one reason: the cost lands
  after the shape has been shown, so it is a bill for something the viewer can see, and it sits
  immediately before the two misuse frames so "where it goes wrong" still closes the part. F9 is
  immovable: the series rule is that every part ends on the misuse tell.

Conclusion: load-bearing in exactly one place (F3 -> F4), plus the fixed ending position of F9.

## Grammar decision, recorded here and measured later

Per bible § 4: **R is the spine** (F4, returned to at F7 and F9), **C appears twice** (F5 the
class, F6 the conversion line), **X is one frame near the end** (F8). The caller / seam /
implementation triple is on screen whenever the narration names the pattern.

Stacked vertically throughout, including F8's before/after. Bible § 4 permits a side-by-side split
when both fragments are 3 lines or fewer; F8's two fragments are 2 lines each, so the option is
open, and it is **not** taken: portrait is 1080 wide, the two fragments are ~60 characters of mono
type, and a horizontal split would drop them below the 1.4cqw legibility floor. Before over after
is also the reading order the misuse tell wants. No exception to record in `BRIEF.md`.

**F6 contains a label swap, and that is a trap, not a detail.** There is no TextPlugin in the
shipped GSAP, so `tl.set({ text: … })` no-ops while `check` reports 0 errors. The swap is authored
as the sanctioned shape: a `{t, text}` step array read by a time proxy whose `onUpdate` assigns
`textContent` (`discrete-text-sequence`), reverse-searched so it is correct under any scrub
direction. It is snapshot-checked at both sides of the swap and the pixels are read.

**Every authored element carries its class as well as its `id`** (the `id-without-css` trap: an
element styled only by `id` renders unstyled at 0,0 and passes `check`).

## Video direction

One look and one motion grammar across all nine frames; per-frame `Scene` lines carry only the
delta.

- **Palette** (from `frame.md` § Colors, brand values from `design.md`; never invented): ground
  cream `#FFFFEB`, ink `#1A1A1A` for type, dark chamber `#181715` / `#1F1D1B` / `#252320` for the
  seam box and every code surface, muted ink `#8A8A80` for inactive structure.
  **`#FFA946` (ember) is the voltage and marks exactly one thing per frame** — the thing the line is
  naming at that moment: the failed connector in F1, the cycling label in F3, the seam box in F4,
  the swapped argument pair in F5, the travelling answer in F6, the `both sides` tag in F7, the
  leaked return type in F8, the redundant adapter in F9.
  **`#F0D7FF` (lavender) is the second accent and is reserved for the domain's own side of the
  seam** — the interface name `PaymentGateway`, the converted `Promise<Receipt>`. It never marks a
  vendor element, which is what makes the leak readable at a glance. Syntax teal `#5DB8A6` and
  amber `#E8A55A` stay inside code surfaces as decoration. `#034F46` (forest) is the inner-panel
  fill on dark only. No fourth hue, no cool gray, no pure white fields, no gradient.
- **Motion grammar + reveal model**: one camera, one grid, hard cuts plus 0.4-0.5s crossfades;
  **no rotation anywhere** (`frame.md`: flatness is load-bearing; depth comes from fill alternation
  and hairline borders, never `rotateX/Y/Z`), no overshoot or bounce, no shadow, no tilt. Every
  entrance is a `fromTo` long-tail settle (`power3.out`, `expo.out` on a fast arrival). Arrows and
  connector lines are `svg-path-draw` self-draws, never scaled rectangles. Reveals are paced to the
  voiceover across the back ~50% of every frame: nothing front-loads, and at t=0 only what the line
  is saying at that moment exists. During a hold the only allowed aliveness is `sine-wave-loop`
  subtle jitter at low amplitude on one held element. No `letterSpacing` or flex-child
  width/height tweens (layout-snapping; use scale settles). Nothing animated in x/y/scale is a bare
  inline `<span>` (the `inline-transform` trap): every animated element is block, flex, or
  `inline-block`.
- **Rhythm / held-frame allocation**: F4 (the chambers locking together) and F8 (the leak) are the
  two energy peaks. **F2 is the deliberate held read** — a clean statement card, still by ~3s, so
  the middle of the part can breathe between the mismatch and the boundary. F7 is static from its
  own back third (a bill does not need motion). F9 is fully still under the closing rule.
- **Caption keep-out**: bottom ~17% belongs to the caption pill. All F1-F9 content is planned into
  the top ~83%: **nothing load-bearing below y = 1594.** Chamber stacks run from y ≈ 240 to
  y ≈ 1520; the hero axis of a centred beat sits at y ≈ 806. Background fields (paper, hairline
  grid) are exempt and stay full-bleed.
- **Legibility floor**: reading type ≥ 1.4cqw; annotation mono chrome may sit at 1.35-1.7cqw and
  carries `data-layout-ignore`. Code lines are sized to fit 1080px minus `slide-pad` at the longest
  line, so no fragment needs horizontal scroll or an ellipsis.
- **Negative list — never appears**: a second ember element in one frame; lavender on a vendor box;
  side-by-side chambers; any "it's not X, it's Y" construction on screen (zero occurrences in the
  script, so none can leak into type); em-dashes in narration, captions or on-screen text; a
  mnemonic or acronym; "what is an adapter"; a device mock, browser chrome, cursor, or real
  screenshot (nothing was captured, this part is fully invented); a redrawn logo (there is none); a
  fourth named box in any grammar-R frame; any on-screen claim the script does not say, and vice
  versa; any invented statistic, benchmark, library version, or real vendor name.
- **On-screen type is the hero, not the narration's echo.** Narration lines run 13-22 words; every
  beat has to read in ≤ 5 words. The text on screen is signatures, type names and box labels
  (`charge(amount, currency)`, `PaymentGateway`, `doTransaction`, `BankResponse`, `Receipt`,
  `caller`, `seam`, `vendor`), in JetBrains Mono for code and EB Garamond for statements — never a
  compressed sentence of the voiceover.

---

## Frame 1 — Two shapes that do not fit

- scene: two mono signature panels assemble opposite each other and the connector between them tries to draw and stops short
- duration: 5.845s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-two-shapes.html
- type: hook
- persuasion: Common-belief vs reality, staged as an object rather than a claim (the mismatch is shown, then named)
- beat: recognition, then the itch
- blueprint: kinetic-type-beats (Adapt)
- focal: the gap between the two panels
- roles: left panel `charge(amount, currency)` = foreground subject · right panel `doTransaction(currency, amount)` = foreground subject · dashed connector = supporting · kicker `THE MISMATCH` = chrome · `Promise<Receipt>` / `Promise<BankResponse>` type tags = supporting
- sfx: none

Adapt: keep the relay of short statement beats landing one at a time on a bare canvas; change the
tokens from words to two signatures, and let the frame's signature move be the connector that draws
and fails rather than a word cut.

narrativeRole: Re-establishes the problem in 13 words so the part stands alone, and puts the two
shapes the rest of the film is about on screen.
keyMessage: "Two sides that cannot call each other, and neither one is going away."

Scene 1 (0.0–1.2s): cream paper field + hairline grid, no panels. Line 1 cue 1 ("Your code wants one
shape") — the left panel settles on the hero axis (y ≈ 700) via `spring-pop-entrance` in its
restrained register, lavender edge on its type tag.
Scene 2 (1.2–3.0s): "The vendor's SDK hands you a different one" — the right panel settles below and
offset right, ember edge on its type tag; the kicker `THE MISMATCH` fades up top-left.
Scene 3 (3.0–5.0s): both panels `svg-path-draw` a dashed connector from the left toward the right and
it **stops 90px short**; the argument-order chips (`amount, currency` / `currency, amount`) step in
under their own panels, paced to the spoken words so the second is still arriving in the back 50%.
Scene 4 (5.0–6.4s): held read; `sine-wave-loop` jitter at low amplitude on the gap marker only.
Nothing else moves.

## Frame 2 — What the adapter does

- scene: a clean statement card, one line of EB Garamond, with a conversion arrow drawing between two mono type names
- duration: 8s
- poster: 5.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-converts-one-interface.html
- type: product_intro
- persuasion: Frame-then-fill (the definition is stated plainly, then the arrow shows which way the work goes)
- beat: clarity
- blueprint: titlecard-reveal (Reproduce)
- focal: the display line "converts one interface into another"
- roles: display line = foreground subject · `PaymentGateway` chip = supporting · `BankClient` chip = supporting · conversion arrow = supporting · kicker `THE ADAPTER` = chrome
- sfx: none

Reproduce: one clean title, exactly one restrained move (a wipe-up-to-reveal clearing F1's panels),
then a still hold. Low motion is the payload; this is the part's breather.

narrativeRole: States the claim once, in the bible's own words, before the anatomy earns it.
keyMessage: "It converts one interface into another, and neither side is edited."

Scene 1 (0.0–1.2s): F1's two panels clear (opacity out, no movement); the display line wipes in from
a mask at the hero axis. "An adapter lets them talk".
Scene 2 (1.2–4.2s): "and neither side changes" — the two mono chips arrive at the card's shoulders
(`PaymentGateway` left in lavender, `BankClient` right in muted ink) and the arrow between them
**self-draws from the vendor chip to the interface chip** (`svg-path-draw`), landing on "converts".
Scene 3 (4.2–6.0s): "It converts one interface into another" — the display line's last four words
settle one step larger (scale settle, never letter-spacing); ember lives only on the arrowhead.
Scene 4 (6.0–7.4s): held, still except jitter on the arrowhead. The frame waits for Frame 3's line.

## Frame 3 — Where the line is against a factory

- scene: one line pinned dead-centre while a mono label above it steps from factory to adapter
- duration: 6.869s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/03-not-a-factory.html
- type: benefit_highlight
- persuasion: Boundary marking (name the neighbouring pattern once, then put the difference in one sentence)
- beat: precision
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the pinned display line "reshapes a thing that already exists"
- roles: pinned line = foreground subject (never moves after arrival) · cycling mono label slot = the cycle · `which thing to build` / `this thing, re-fitted` sub-tags = supporting · kicker `ONE BOUNDARY` = chrome
- sfx: none

Adapt: keep the pinned anchor whose adjacent region cycles through discrete states while the anchor
itself never moves; change the cycled region from an audience roll-call to two mono labels, and cut
the cycle to two states so the boundary stays a single clause (bible § 2). The label step is a
`discrete-text-sequence` time proxy, never a text tween.

narrativeRole: Holds the boundary the series requires without cross-referencing another episode, so
the viewer cannot fold this into a constructor.
keyMessage: "Factory chooses which object to make. Adapter re-fits an object that is already there."

Scene 1 (0.0–1.0s): the pinned line arrives at the hero axis and is then immovable for the whole
frame. "A factory picks which thing to build".
Scene 2 (1.0–3.4s): the mono label slot above it steps to state 1 -> `factory`, with
`which thing to build` under it in muted ink; the ember marker is on the slot, one element only.
Scene 3 (3.4–6.0s): "An adapter reshapes a thing that already exists" — the slot steps to state 2 ->
`adapter`, sub-tag `this thing, re-fitted`; the pinned line's last word gets a small scale settle.
Scene 4 (6.0–7.4s): held on state 2; jitter only.

## Frame 4 — The three chambers (grammar R, the spine)

- scene: caller, seam and vendor lock into a vertical stack, the dependency arrow drawing down and the import arrows drawn back up on the seam only
- duration: 8.469s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-three-chambers.html
- type: feature_showcase
- persuasion: Spatial proof (the claim is drawn as a graph, so the direction of knowledge is visible rather than asserted)
- beat: the shape clicking into place
- blueprint: grid-card-assemble (Adapt)
- focal: the middle chamber (the seam, dark)
- roles: `CheckoutService` caller box = supporting (top) · `VendorPayAdapter` seam box = foreground subject (middle, dark chamber, lavender `PaymentGateway` tab) · `BankClient` vendor box = supporting (bottom) · dependency arrow = the spine · import arrow pair = supporting · kicker `THE SEAM` = chrome
- sfx: none

Adapt: keep the staggered self-assembly into a vertical stack and the hold; change tiles to three
named chambers (never a fourth), and give the assembly one arrow that draws down through them plus
the two import lines that say which box is allowed to know what.

narrativeRole: This is the pattern. Grammar R is on screen for the whole of the frame's line because
the line names the seam.
keyMessage: "Your side depends on an interface; only the adapter imports the vendor."

Scene 1 (0.0–1.4s): "That seam is where your domain stops" — the caller box settles at y ≈ 300, cream
with a 2px ink border.
Scene 2 (1.4–3.6s): "and the vendor starts" — the dark seam box settles at y ≈ 730 with its
`PaymentGateway` tab in lavender, then the vendor box at y ≈ 1150 in muted ink; the dependency arrow
**self-draws downward through all three** (`svg-path-draw`), paced so the vendor box is still
arriving in the back half.
Scene 3 (3.6–6.4s): "Nothing in your code knows their client exists" — two short import lines draw
on: one from caller down to the seam tab, one from the vendor box **up into the seam only**; the
would-be caller-to-vendor line draws and is then withdrawn (opacity out along its own path, no
movement).
Scene 4 (6.4–8.0s): the seam box takes the frame's single ember edge, because it is the thing the
line is naming.
Scene 5 (8.0–9.3s): held stack, jitter on the seam box only.

## Frame 5 — The shape (grammar C, once)

- scene: a six-line TypeScript fragment assembles line by line on a dark chamber, the swapped argument pair going ember as the line names it
- duration: 8.896s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/05-the-code-shape.html
- type: feature_showcase
- persuasion: Evidence (the pattern is small enough to photograph; showing all six lines is the argument)
- beat: "that's all it is"
- blueprint: Compose (no blueprint fits: a code chamber paced to the VO, built from `waterfall-entry` + `discrete-text-sequence` + `svg-path-draw`)
- focal: the method signature line and the delegating call
- roles: the code chamber = foreground subject · `class VendorPayAdapter implements PaymentGateway` = supporting (lavender on the interface name) · `doTransaction(currency, amount)` = the ember moment · filename chrome `vendor-pay-adapter.ts` = chrome · the two argument chips `amount, currency` / `currency, amount` = supporting
- sfx: none

narrativeRole: The code shape, the third leg of the spine, and the frame a reviewer screenshots.
keyMessage: "It implements your interface and delegates to their call, in their order, under their name."

Scene 1 (0.0–1.6s): "The domain asks for amount, then currency" — chamber opens (dark fill, cream
hairline, mono filename strip `vendor-pay-adapter.ts`); lines 1-2 arrive by `waterfall-entry`,
`PaymentGateway` in lavender, the parameter list `amount, currency` in cream.
Scene 2 (1.6–3.6s): the argument chip `amount, currency` seats under line 2 in lavender.
Scene 3 (3.6–7.0s): "The vendor wants them the other way round" — lines 3-4 arrive, and the pair
`currency, amount` inside `doTransaction(...)` flips to **ember** on "other way round"; the second
chip `currency, amount` lands beneath it, ember-edged, in the swapped order so the difference is
visible without reading.
Scene 4 (7.0–8.4s): "under a different name" — the method name `doTransaction` gets a muted
underline draw-on (`svg-path-draw`); lines 5-6 (`return toReceipt(raw);` and the closing brace)
arrive last so the back 50% is still filling.
Scene 5 (8.4–9.3s): held, jitter on the ember chip only.

## Frame 6 — The answer comes back converted (grammar C, twice; the label swap)

- scene: a vendor type enters a boxed adapter and the output label swaps from Promise&lt;BankResponse&gt; to Promise&lt;Receipt&gt;
- duration: 8.085s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-the-return-morph.html
- type: feature_showcase
- persuasion: Before/after in miniature (one arrow, one box, one label that changes)
- beat: completion, nothing leaks out of the box
- blueprint: fixed-anchor-cycle (Adapt) — the box and the arrow pinned, the output label cycling through two discrete states
- focal: the output label after the swap
- roles: input chip `Promise<BankResponse>` = supporting · the adapter box `toReceipt` = foreground subject (pinned) · output label = **the swap**, discrete sequence · `function toReceipt(raw: BankResponse): Receipt` mono line = supporting (the fragment) · ember travelling dot = the arrow's payload · kicker `CONVERTED, NOT PASSED THROUGH` = chrome
- sfx: none

narrativeRole: Names the half of the job most adapters skip, and lands the part's claim about
containment ("every difference handled in one box").
keyMessage: "The return type is translated too, and the translation ends at the box edge."

Scene 1 (0.0–1.8s): "The answer gets converted too" — the adapter box pins at the hero axis (y ≈ 760)
and stays there for the rest of the frame; the input chip `Promise<BankResponse>` settles to its left
in muted ink, and the pre-swap output label reads `Promise<BankResponse>`.
Scene 2 (1.8–4.4s): "back into a type you own" — an ember dot travels the drawn arrow into the box,
and the output label swaps state 1 -> state 2 through the time-proxy + reverse-search
`discrete-text-sequence` over
`[{t: 0, text: "Promise<BankResponse>"}, {t: 2.6, text: "Promise<Receipt>"}]`, the second state in
lavender. **This is the swap that must be snapshot-proved**, both sides.
Scene 3 (4.4–6.4s): the mono fragment line `function toReceipt(raw: BankResponse): Receipt` arrives
below the box, `Receipt` in lavender, so the declaration and the animation say the same thing.
Scene 4 (6.4–8.9s): "Every difference handled in one box" — a 2px cream border draws around the box
(`svg-path-draw` on a rect path), the box holds, and nothing else moves except jitter at the dot's
landing point.

## Frame 7 — What it costs

- scene: one pinned adapter box with two change-sources drawing arrows into it from either side, and a mono tag naming the bill
- duration: 7.915s
- poster: 7.5s
- transition_in: cut
- status: animated
- src: compositions/frames/07-the-cost.html
- type: benefit_highlight
- persuasion: Honest cost (the tradeoff named out loud, which is what separates this from a definition)
- beat: level, no drama
- blueprint: constellation-hub (Adapt)
- focal: the pinned hub box
- roles: hub box `VendorPayAdapter` = foreground subject (pinned, never moves) · `your side changes` chip = supporting (lavender edge) · `vendor changes` chip = supporting (muted ink) · `both sides` tag = the frame's single ember element · mono `maintained on both sides` caption = supporting · kicker `THE BILL` = chrome
- sfx: none

Adapt: keep nodes arriving on either side of a centre and resolving on that centre; change the
satellites from app icons to two named change-sources and the ring to two straight arrows, and drop
the camera push-in (no rotation, no zoom spectacle in this series).

narrativeRole: Names the tradeoff once, per the brand voice ("takes a position, names tradeoffs"),
between the shape and its misuse.
keyMessage: "You maintain a translation layer on both sides; that is only worth it when the shapes drift apart for different reasons."

Scene 1 (0.0–1.4s): "It costs a layer you maintain" — the hub box settles at the hero axis (y ≈ 740),
dark chamber, cream hairline, and is pinned for the frame.
Scene 2 (1.4–3.8s): "on both sides" — the two chips arrive left and right of it, and both arrows
self-draw into the box (`svg-path-draw`); the `both sides` tag pops between them in ember, the
frame's only ember element.
Scene 3 (3.8–6.4s): "It pays when the two shapes change" — each chip steps once, muted ink to full
ink, to show both sources of change arriving at the same box; reveal paced so the second step lands
in the back half.
Scene 4 (6.4–9.3s): "for different reasons" — the mono caption `maintained on both sides` fades in
under the hub, then the frame is static except jitter on the hub box.

## Frame 8 — The leak (grammar X, the one before/after frame)

- scene: two stacked code chambers, the vendor's return type in your caller's signature on top, the contained version below
- duration: 8.896s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-the-leak.html
- type: pain_point
- persuasion: Cost reveal (the misuse shown as a signature, not described)
- beat: recognition, the "oh, that's my code" moment
- blueprint: grid-card-assemble (Adapt) — two stacked chambers arriving in sequence, the second replacing the first's claim rather than sitting beside it
- focal: the top chamber's `Promise<BankResponse>`
- roles: top chamber (leak) = foreground subject · its ember `Promise<BankResponse>` = the frame's single voltage · bottom chamber (contained) = supporting · `leak` / `contained` mono tags = chrome · the caller label `CheckoutService` = supporting (repeats in both chambers, same box, same place)
- sfx: none

narrativeRole: The misuse tell the series requires the part to end on, first half: the wrapped API
leaking through anyway.
keyMessage: "If the caller's signature speaks the vendor's types, the adapter is decoration."

Scene 1 (0.0–1.4s): "It leaks when the vendor's response type" — the top chamber settles at y ≈ 420
with `CheckoutService` as its filename strip, `charge(amount, currency):` arriving in cream.
Scene 2 (1.4–3.8s): "shows up in your caller's signature" — `Promise<BankResponse>` lands at the end
of the line in **ember**, and the `leak` tag pops beside it; reveal paced so the ember is still
arriving as the word "signature" lands.
Scene 3 (3.8–6.0s): "Then the whole seam is decoration" — a section rule draws across the gap between
the chambers, and the second chamber settles at y ≈ 1020 under the same `CheckoutService` filename.
Scene 4 (6.0–8.2s): its return type `Promise<Receipt>` arrives in lavender and a short arrow from its
`VendorPayAdapter` call site draws into the box above, showing the translation is one box away.
Scene 5 (8.2–9.3s): both chambers held, no motion but jitter on the ember token. Content caps at
y ≈ 1480; the `contained` tag sits at y ≈ 1140, well above the caption keep-out.

## Frame 9 — Stacked, and the rule (the tell, second half)

- scene: a chain of adapter boxes builds downward, then the frame collapses to one sealed box under a single rule
- duration: 10.133s
- poster: 9.5s
- transition_in: cut
- status: animated
- src: compositions/frames/09-stacked-and-rule.html
- type: branding
- persuasion: Consequence + rule (show the pile, then state the one-line test a reviewer can carry)
- beat: dry recognition, then the rule said once
- blueprint: grid-card-assemble (Adapt) — a vertical list accumulating to a held, over-stuffed stack, then cleared to a single statement
- focal: the middle adapter (the frame's ember element), then the sealed box
- roles: caller chip `CheckoutService` = supporting · `VendorPayAdapter` = the first box · `LegacyPayAdapter` = **ember** (the redundant one) · `BankClient` mono line at the arrow's tip = supporting (a tip, not a fourth box) · closing display line = foreground subject after the clear
- sfx: none

narrativeRole: Closes the misuse tell and hands the viewer one checkable rule. Ends on the tell, as
the spine requires, with no reference to any other part and no call to action.
keyMessage: "Adapters stacked on adapters have no end anyone can name. One box per pair of shapes."

Scene 1 (0.0–1.6s): "Stacked adapters fail the same way" — the caller chip and the first adapter box
settle at the top of the stack; the stack uses the same chamber vocabulary as F4 so it reads as the
same graph, over-stuffed.
Scene 2 (1.6–4.2s): "one layer down" — the second adapter box `LegacyPayAdapter` settles below it and
takes the ember edge, then a third arrow draws down to the vendor's mono tip `BankClient`; the arrows
are drawn **through** the boxes so the chain looks traversed, not merely stacked.
Scene 3 (4.2–6.6s): a muted `forwards both times` tag pops beside the ember box; nothing else moves;
jitter on the chain only.
Scene 4 (6.6–8.8s): "Keep one box per pair of shapes" — the stack clears (opacity out, no movement)
and one sealed box draws itself back to the hero axis, 2px cream border, the domain name on its left
edge and the vendor name on its right, one arrow through the middle.
Scene 5 (8.8–10.8s): "and finish the translation inside it" — the display line arrives under the box
and holds; the closing kicker `ADAPTER` fades up top-left. Fully still for the last 2.0s, on the
misuse tell's remedy, which is how every part of this series ends.
