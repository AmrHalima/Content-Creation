---
format: 1080x1920
duration: 79s
message: "Observer notifies every subscriber without the publisher knowing who they are; the decoupling is the product and the lost causal trace is the price"
arc: structural-explainer (the problem -> the list -> the fan-out -> the code -> price one -> price two -> the tell)
audience: backend developers who have written CRUD and seen the UML box
mode: autonomous
music: none
captions: en
---

# STORYBOARD — pattern-observer

Part 5 of 10 in `backend-patterns`. Frame numbering is canonical for this part: `SCRIPT.md`'s
`Frame N` labels map 1:1 onto `Frame N` here, in order. Spine is the campaign's uniform one
(`writing/backend-patterns/series-bible.md` section 1): what problem it solves -> the anatomy ->
the code shape -> where it goes wrong, ending on the misuse tell.

## Order-independence (series rule: this part must stand alone)

Checked on paper **before** any TTS is spent, per `series-bible.md` section 2.

**Check A — does any line presuppose a later or earlier part?** No. F1 opens on the object (an
order that changed state and the code that has to tell people), not on a claim from another part.
F2 names the pattern and re-states the mechanism in its own words. F3 through F7 each re-state
what is on screen. No "as we saw", no "part 4", no running gag. **No sibling pattern is named at
all** — the boundary this part most wants to draw (against a message bus) would need a second
film's vocabulary to be honest, so it is left out rather than gestured at.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F4 <-> F5** (the code shape <-> the lost trace). FAIL, and it must. F5 reads a call stack
  made of the handlers F4 just put on screen; without `notify` walking a list there is nothing for
  the stack to be full of. The order is load-bearing here and kept.
- **Swap F2 <-> F3** (the list <-> the fan-out). PASS but rejected. They are the same structure
  seen twice: F2 says the subject holds a collection, F3 says it therefore never names a
  consumer. Reversing them puts the payoff before the mechanism, which is the mistake the series'
  spine exists to prevent.

Conclusion: the sequence is load-bearing in exactly one place (F4 -> F5) and free elsewhere.
F5 and F6 are parallel costs, not ordered steps, and could trade places without a false claim.

## Video direction

The whole part shares one look and one motion grammar. Per-frame Scene lines below carry only
the delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden in `design.md`; never invented):
  `--ground` cream `#FFFFEB` is the canvas, `--ink` `#1A1A1A` is type and the chamber border.
  **`ember` `#FFA946` is the voltage** and marks only what is *live in this beat*: the arrow that
  is firing, the entry that was just added, the dropped return value. At most one element per
  frame holds it. **`lavender` `#F0D7FF` is the action fill** and appears on the F7 "fixed" chamber
  edge and nowhere else, because `design.md` makes it the only primary-action colour.
  **`forest` `#034F46` is the dark chamber fill** for the code surface (`frame.md` § code-surface:
  warm navy `#181715` body with `navy-elev` title strip is the preset's own code ground — this
  series uses the ink/forest dark chamber so the ten parts read as one channel).
  Inactive structure (unfocused boxes, retired entries, the stack's own chrome) is `muted`
  `#8A8A80` on cream at >= 55% ink alpha so it clears the AA floor (trap 12).
- **Chamber grammar** (bible section 4): boxes are cream or dark chambers with a 4px ink border,
  radius 8, no shadow, no gradient. The stack is vertical by default; **F3 is the one deliberate
  break** and is recorded in `BRIEF.md` `## Customizations`. Every box label is >= 2.4cqw; mono
  is for identifiers and code, EB Garamond for statements, Inter for prose labels.
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and 0.5s crossfades only;
  no rotation anywhere (flatness is load-bearing — depth comes from colour blocking and the ink
  border). Every entrance is a `fromTo` long-tail settle (`power3.out`), **no overshoot**. Reveals
  are **paced to the VO across the back ~50%** of each frame; nothing front-loads; at t=0 only
  what the line is saying at that moment exists. During a hold the only aliveness allowed is
  **subtle jitter** (`sine-wave-loop`, low amplitude) on one held element. Any delayed `fromTo`
  passes `immediateRender: false` (trap 10). **Text changes are never tweens** — there is no
  TextPlugin in the shipped GSAP (trap 3, Learnings 2026-10-22), so F5's stack frames and F6's
  held-count use the sanctioned `{t, text}` step array read by a time proxy whose `onUpdate`
  assigns `textContent`. Every animated element carries its **class as well as its id**
  (trap 1, Learnings 2026-10-22), and every tweened span is `display:inline-block` (trap 2).
- **Rhythm / held-frame allocation**: F3 (the fan-out) and F6 (the leak) are the two energy peaks.
  **F5 is the deliberate held read** — by ~6s of its window the stack is complete, one muted note
  lands, and nothing moves but a jitter on the stack; the stillness is the point (you cannot trace
  it). F7 is fully still once both chambers are on screen. F1, F2, F4 keep revealing to the VO the
  whole way through.
- **Caption keep-out**: bottom ~17% is the pill's. All F1-F7 content is planned into the top
  ~83% — content caps at y 1594 on the 1920-tall canvas; the hero axis of any centred beat sits at
  y ~ 0.42 x 1920 ~ 806. Background fields (paper texture, hairline grid) are exempt and stay
  full-bleed.
- **Negative list — never appears**: a second column of boxes beside the subject (the fan-out is
  one chamber plus arrows into a tracked tag rail); side-by-side chambers anywhere, including F7
  (stacked); a message bus, queue, or broker; any memory figure, percentage, latency or benchmark
  (nothing in this part is measured, so nothing is claimed); mnemonics or GoF citations on screen;
  a device mock, browser chrome, cursor, or real screenshot (nothing was captured — fully
  invented); purple-blue "AI" gradient bokeh; gradient fill or text shadow; a redrawn logo (there
  is none); any on-screen claim the script does not say, and vice versa.
- **On-screen type is the hero, not the narration's echo.** No sentence from the VO is set as
  display text. The text on screen is identifiers (`notify`, `subscribe`, `sendReceipt`,
  `handlers`), tags (`logger`, `email`, `metrics`), and <= 3-word beats (`the list`, `no names`,
  `no trace`, `still held`, `handle dropped`).

---

## Frame 1 — The sender grows

- scene: OrderService at the top with three call arrows running down to three boxes; a fourth arrow draws itself and the sender's edge swells
- duration: 9.045s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/01-direct-calls.html
- type: hook
- persuasion: Concrete scenario + recognition of the viewer's own code
- beat: recognition
- blueprint: grid-card-assemble (Adapt)
- focal: the `OrderService` box and its three down-arrows
- roles: OrderService box = foreground subject · three consumer boxes + arrows = midground · paper field + hairline grid = background (full-bleed, unlit) · "sender grows" chip = supporting
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; change the surface
from a grid of tiles to one call graph — a box on top, three boxes below it, arrows drawn on
between — and cap the count at three because the narration says three.

narrativeRole: Re-establishes the problem the pattern answers, in the first two lines, before any
claim (series rule).
keyMessage: "Written as direct calls, the sender carries every consequence."

Scene 1 (0.0-1.1s): full-bleed cream paper field, hairline grid, nothing else. On cue 1 ("An
order shipped") the `OrderService` chamber settles into the upper third (hero axis y ~806), ink
border, mono identifier inside. Left-aligned kicker above it.
Scene 2 (1.1-4.0s): on "three listeners want to know" the three consumer chambers **stagger into
slot** below it in a vertical stack (direct-into-slot, stagger well under the arrival limit so the
three read as one group), each with a mono tag; the three call arrows **self-draw** top-down
(`svg-path-draw`) one per box, muted ink, no ember yet.
Scene 3 (4.0-7.6s): VO turns ("Calling them directly means each new listener edits the sender")
— a **fourth arrow draws itself** from the same box into empty space and stops with no box at its
end; the frame waits for its word rather than filling with motion.
Scene 4 (7.6-10.4s): the **restrained settle** of the `sender grows` chip at the sender's right
edge, ember-filled, the frame's single ember element; **subtle jitter** on the sender chamber from
9s to the cut; nothing else moves.

## Frame 2 — The subject keeps a list

- scene: the same chamber, now a dark chamber, and a handlers collection assembling entry by entry inside it
- duration: 9.771s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-the-list.html
- type: product_intro
- persuasion: Substitution (the calls become one collection)
- beat: comprehension
- blueprint: grid-card-assemble (Adapt)
- focal: the `handlers` collection inside the subject chamber
- roles: dark subject chamber = foreground subject · handler entries (mono rows) = midground · `state changed` / `notify` labels = supporting · paper field = background
- sfx: none

Adapt: keep the per-item stagger-assemble signature; the grid becomes one collection inside one
chamber, assembling top-down, and the count is the three entries plus the unnamed fourth from F1.

narrativeRole: Names the mechanism — the knowing moves into a list the subject owns.
keyMessage: "The subject holds the listeners instead of calling them."

Scene 1 (0.0-1.2s): the field holds; the cream sender chamber from F1 **cross-dissolves into the
dark chamber** in place (same box, same position, ink fill, cream 2px inner edge) — the seam is
the change, so nothing moves positionally.
Scene 2 (1.2-4.6s): on "moves the knowing into a list" a mono `handlers` rail assembles inside the
chamber, one row per spoken beat, entries arriving by **stagger-assemble** from the chamber's
inner edge; the row type is set in JetBrains Mono, cream on ink.
Scene 3 (4.6-8.0s): VO turns ("The subject holds the listeners and calls each one when its state
changes") — the chamber's title strip ticks to `state changed` and a single muted `notify` marker
appears at the rail's foot; **no arrows yet** (F3 owns the fan-out).
Scene 4 (8.0-10.4s): held read of the populated chamber; **subtle jitter** on the rail only.

## Frame 3 — The fan-out (the product)

- scene: the dark subject chamber on the left spine with three arrows leaving its right edge into tracked mono tags
- duration: 9.429s
- poster: 7.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-fan-out.html
- type: benefit_highlight
- persuasion: Progressive disclosure (each arrow lands on its spoken tag)
- beat: conviction
- blueprint: center-outward-expansion (Adapt)
- focal: the three arrows leaving the subject chamber
- roles: subject chamber = foreground subject · three arrows + tag pills = midground · `(order: Order) => void` chip + `no names` beat = supporting · paper field = background
- sfx: none

Adapt: keep the outward-growth signature (arrows grow from the chamber's edge rather than bursting
from a shared center) and the vertical spine; change the destination from symmetric satellites to
**one tracked tag rail at the right margin**, because the claim is that the subject does not know
who is on the rail — an unordered ring would look like it does.

narrativeRole: Pays the part's claim: the decoupling is the product.
keyMessage: "The publisher notifies its list without naming anyone on it."

Scene 1 (0.0-1.3s): only the subject chamber and its `handlers` rail exist (carried from F2); the
field is unchanged. Line cue 1 ("A listener is one method behind an interface") — the mono chip
`(order: Order) => void` settles at the chamber's foot, and the chamber's own border goes ember for
one beat: the shape is what the subject knows.
Scene 2 (1.3-5.2s): three arrows **grow outward from the chamber's right edge** one per spoken cue,
each ending at a tracked mono tag pill (`logger`, then `email`, then `metrics`) arriving by
**restrained spring-pop settle**; the first arrow is ember (the one firing), the other two muted
ink. Nothing appears at the arrows' far ends but the tag — no box, no owner.
Scene 3 (5.2-7.4s): VO turns ("The subject notifies its list and never names who is on it") — a
small `notify` marker ticks along the ember arrow's length once (`sine-wave-loop` is not wanted
here; it is a single finite travel), and the beat `no names` settles under the tag rail.
Scene 4 (7.4-9.8s): held read of the field; **subtle jitter** on the arrow group only.

## Frame 4 — Two methods

- scene: a dark code chamber, subscribe assembling line by line, then notify under it; the handler type as a mono chip
- duration: 10.901s
- poster: 10s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-subscribe-notify.html
- type: feature_showcase
- persuasion: Concretization (the claim becomes readable code)
- beat: comprehension
- blueprint: compose
- focal: the five-line TypeScript fragment
- roles: code chamber (ink body, elevated title strip) = foreground subject · mono code lines = midground · `type OrderHandler` chip = supporting · paper field = background
- sfx: none

Compose: no blueprint fits a static five-line code reveal that must land two declarations on two
spoken cues; built from the motion vocabulary (`layer-reveal` per line, `per-word staggered
reveal` avoided because code tokens must not reflow).

narrativeRole: The code shape — Grammar C, once per part, max six lines, one handler.
keyMessage: "Subscribe and notify are the whole mechanism, and subscribe hands back the undo."

Scene 1 (0.0-1.4s): the field holds; a cream frame with an ink code chamber inside it (title strip
in the elevated fill, filename-less mono label `OrderService`) settles into the vertical centre,
empty. Nothing on the chamber face yet.
Scene 2 (1.4-5.0s): on "Two methods carry it" the type chip `type OrderHandler = (order: Order) =>
void` lands above the chamber in muted mono; then `subscribe(` opens and its three lines
**layer-reveal** one per spoken cue (`this.handlers.push(h);` then the returned closure line then
the closing brace), keywords in ember, everything else cream-on-ink, identifiers never recoloured.
Scene 3 (5.0-9.0s): VO turns ("Notify walks the list and calls each one") — `notify(order: Order)`
reveals in two lines under subscribe; a thin ember rule ticks across the `for` line once, and a
muted 2-line count of the rail's entries is not shown (no numbers on this frame).
Scene 4 (9.0-11.9s): held read of the complete five-line fragment; **subtle jitter** on the chamber
only; no further reveals.

## Frame 5 — The lost trace (price one)

- scene: a debugger-style stack of handler frames under a notify frame, with no caller anywhere in it
- duration: 9.728s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-no-trace.html
- type: pain_point
- persuasion: Contradiction of expectation (the stack should explain itself)
- beat: doubt
- blueprint: grid-card-assemble (Adapt)
- focal: the stack column of four mono frames
- roles: stack column = foreground subject · frame labels (time-proxy discrete sequence) = midground · `no caller` note = supporting · paper field + grid = background
- sfx: none

Adapt: keep the staggered assembly of a vertical list; change tiles to debugger stack rows and
change the payload from enumeration to **one label swap per row** — the rows cycle which handler
they are, which is the whole complaint, and per trap 3 the swap is a time-proxy + discrete
sequence, never a text tween.

narrativeRole: The first price of the decoupling.
keyMessage: "A stack of handlers says nothing about who fired, or how many are attached."

Scene 1 (0.0-1.3s): the field holds. On cue 1 ("The tradeoff is paid in tracing") the stack column's
frame opens as an empty ruled rail in the upper-middle, `stack` in mono at its head.
Scene 2 (1.3-5.4s): on "A stack full of handlers" four rows **stagger-assemble** downward: `notify`
at the foot of the order, then three handler rows whose text cycles
`sendReceipt -> logOrder -> recordMetric -> sendReceipt` on the discrete sequence, each row's swap
landing on its own spoken word. Rows are muted ink; none carries the sender's name.
Scene 3 (5.4-7.8s): VO turns ("says nothing about who fired, or how many are still attached") — the
`no caller` note settles under the rail in muted mono, the rail's top edge gets a struck-through
empty slot (the frame that would name the trigger is absent, and the absence is drawn rather than
asserted), and a short muted rail of tick marks appears at the column's foot for the attached count
— tick shapes with no numeral, because nothing here is measured.
Scene 4 (7.8-10.2s): **held read** — this part's deliberate stillness. By ~8.5s nothing on the
frame moves except a **subtle jitter** on the stack column.

## Frame 6 — The leak (price two, the memorable frame)

- scene: a handlers list growing row by row while the objects its entries point at go out and are drawn gone
- duration: 19.413s
- poster: 13s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-the-leak.html
- type: pain_point
- persuasion: Consequence made visible
- beat: concern
- blueprint: ticker-takeover (Adapt)
- focal: the growing `handlers` list and its struck-through partner boxes
- roles: handlers list (dark chamber) = foreground subject · the held-count lockup = midground · ghost partner boxes + `gone` marks = supporting · partner column + paper field = background
- sfx: none

Adapt: keep the signature — a rail that keeps arriving while the read stays fixed — and change the
register from promotional ticker to an accumulating list with no relief; the entries do not scroll
off, they stack, because the claim is that they are never removed.

narrativeRole: The second price, and the misuse the part ends on.
keyMessage: "A listener added and never removed keeps its subject alive after its view is gone."

Scene 1 (0.0-1.4s): the dark `handlers` chamber sits left of centre with one row inside it, and a
mono `view` box opposite it joined by one arrow. On cue 1 ("The second cost leaks") the join gets a
single ember tick at the list end: the newest entry is live.
Scene 2 (1.4-5.6s): on "A listener added on mount and never removed" a **second row arrives** and
the count lockup's mono figure ticks to `2` via the discrete sequence; a second partner box enters,
each arrival bringing its own arrow.
Scene 3 (5.6-10.2s): VO turns ("keeps its subject alive after its view is gone") — the partner boxes
**retire in place**: fill drops to a muted outline, each gains a struck-through `gone` mark, and the
list rows that point at them stay exactly as solid as they were. Nothing leaves the list. That
contrast is the frame.
Scene 4 (10.2-13.4s): on "Each mount registers again, and the earlier entry stays" a third row
arrives while the second keeps its ink, and the count ticks to `3`; the arrows are drawn one per
registration so the accumulation is visible, not asserted.
Scene 5 (13.4-16.6s): on "The list grows, and its entries point at nothing" a fourth row arrives and
the count ticks to `4` while all four partner boxes now read `gone`. The list is the only thing still
wearing ink.
Scene 6 (16.6-18.1s): held read; **subtle jitter** on the list chamber only. The count stops
changing; the figure on screen is the number of rows drawn, nothing more.

## Frame 7 — The missing half (the misuse tell)

- scene: two stacked code chambers, the wrong mount with its return value dropped, the fixed mount with the handle kept and run on unmount
- duration: 9.131s
- poster: 9s
- transition_in: crossfade
- status: animated
- src: compositions/frames/07-unsubscribe.html
- type: cta
- persuasion: Before / after contrast on one line of code
- beat: resolution
- blueprint: comparison-split (Adapt)
- focal: the two stacked chambers and the single line that differs
- roles: wrong chamber (top) = foreground subject · fixed chamber (bottom) = foreground subject · `handle dropped` note + the ember marker on the discarded return = supporting · paper field = background
- sfx: none

Adapt: keep the blueprint's before/after logic and its mirrored entrance; **reject its signature
mirrored `rotateY` book-open tilt** (the pack forbids rotation anywhere in this part) and stack the
two chambers vertically instead of side by side, which portrait wants anyway. Entrance becomes a
mirrored `fromTo` settle from opposite edges with no tilt.

narrativeRole: Lands the misuse tell and the fix shape.
keyMessage: "Subscribe returns a detach, and the scope that subscribed runs it on teardown."

Scene 1 (0.0-1.5s): on cue 1 ("The tell is the missing half") the top chamber settles from the
upper edge — title strip `mount`, three lines of mono code, the subscribe call discarding its
return; an ember marker sits on the discarded value (the frame's single ember element) and the
muted note `handle dropped` lands under it.
Scene 2 (1.5-5.2s): VO turns ("Subscribe hands back a detach") — the bottom chamber settles from the
lower edge, lavender 2px inner edge, `mount` + `unmount` strips, four mono lines, the same call now
assigned to `off`. The two chambers differ in exactly the line the voice names.
Scene 3 (5.2-8.6s): on "the scope that subscribed runs it on teardown" a short muted rule draws
between `off` in the bottom chamber and `unmount(): void { off(); }`, so the pairing is a drawn
line, not a claim.
Scene 4 (8.6-10.9s): **held read** of both chambers; nothing moves. The exit is the film's end, so
this frame carries the only real fade-out (the last 0.4s of the root).

---

## Budget and pacing check

| Frame | Words | Est. seconds (1.93 w/s, calibrated on `videos/osi-layers-1-sideways`) |
|---|---|---|
| F1 | 20 | 10.4 |
| F2 | 20 | 10.4 |
| F3 | 19 | 9.8 |
| F4 | 23 | 11.9 |
| F5 | 20 | 10.4 |
| F6 | 30 | 15.5 |
| F7 | 21 | 10.9 |
| **Total** | **153** | **~79.3s** against the 78s target and the 90s ceiling |

Real durations come from `studio cues` / `audio.mjs sync-durations` and win. The Scene windows
above are re-scaled to the synced durations before frames are authored, and the assembled total is
reported against the ceiling.

## Constraint audit (against series-bible section 6)

- **Contrast-reveal ban:** no "it's not X, it's Y" and no "not because X" anywhere in narration or
  on-screen text. F1's "Calling them directly means each new listener edits the sender" states the
  mechanism directly; F3's "never names who is on it" is a plain negation of a capability, not a
  rhetorical reversal. Zero occurrences even in the hook.
- **Em-dash ban on short copy:** none in narration, none in on-screen text, none in captions.
  (Em-dashes appear in this storyboard's prose only, which is not on screen.)
- **Triad cap:** one, F1's three listener tags, and it is never recited as a spoken list
  ("three listeners" is a count). F3 names the same three on screen as the tags it must draw; no
  narration line lists three items.
- **No mnemonics, no invented terminology:** nothing coined; every term on screen is
  `subscribe`, `notify`, `handlers`, `mount`, `unmount`, `detach`, or a name this film defines.
- **Customer language:** decoupling, coupling, seam, leak, dependency, tradeoff, invariant (not
  used), ceremony (not used). Forbidden phrasing absent: no "simply", no "let's break this down",
  no "think of it as", no "journey", no lesson announcements.
- **Names and numbers checkable:** the only numerals on screen are (a) the count of rows drawn in
  F6's list, and (b) the identifier names used in F4/F7's fragments. No memory figure, percentage,
  latency, benchmark, library or version appears anywhere.
- **No beginner framing:** nothing defines the pattern's name or asks what it is; F1 assumes the
  viewer has written the direct-call version.

## Authoring pass state

- 7/7 frames authored in `compositions/frames/`, all `status: animated`.
