---
format: 1080x1920
duration: 78s
message: "CQRS gives reads and writes separate models, not necessarily separate databases; the command side owns the invariants, the query side is free to denormalise"
arc: concept-explainer with process (the strain → the seam → two chambers → the code on each side → what is optional → the lag → the misuse tell)
audience: experienced backend developers who have already written CRUD and want the mechanics and the misuse named precisely
mode: autonomous
music: none
captions: en
---

# STORYBOARD — pattern-cqrs (English master, part 9 of 10)

Neutral structural explainer, per `writing/backend-patterns/series-bible.md` § 1: no invented
contrarian hook, no beginner framing. The spine is the campaign's uniform payoff —
**what problem it solves → anatomy → the code shape → where it goes wrong** — and the film ends
on the misuse tell. Density carries it instead of a thesis: one sharp idea per frame.

8 frames / 150 spoken words / **77.74s** of cut against a 78s target and a 90s hard ceiling.
`SCRIPT.md`'s `Line N` maps 1:1 onto `Frame N`, in order.

## Order and dependence (bible § 2, checked on paper before any TTS was spent)

- **F1 → F2 is load-bearing.** F2 says "that seam"; the strain has to be on screen one frame
  earlier for the seam to be a response to something. Kept.
- **F2 → F3 is load-bearing.** F3 is the inside of the split F2 draws. Swapping them would put
  model shapes on screen before anything asked for them.
- **F4 ↔ F5 swap test** (command handler ↔ query handler): PASS on truth, FAIL on rhythm. The
  two halves are independent evidence, but the claim this part pays puts the invariant-owning
  side first, and F5's flat row reads as the *contrast* to F4's guard. Kept.
- **F6 ↔ F7 swap test** (what is optional ↔ what it costs): PASS. Neither depends on the other,
  but "optional" then "price" is the order a reviewer asks the questions in, so it is kept.
- **F8 depends on F2's vocabulary only.** It is the screenshot frame and the exhale.

Zero references to other parts: no "as we saw", no part numbers, no borrowed authority. The
pattern's own problem is re-established inside the first two narration lines (F1, 19 words).
Event sourcing is named once, in F6, and only to mark the boundary ("not required") — never to
borrow it as an example of the pattern working.

## Grammar decision, recorded here and measured later

- **Grammar R** (caller / the split seam / two implementations) is the spine and carries F2, the
  frame where the narration names the pattern.
- **Grammar C** twice: F4 and F5, each ≤6 lines, one declaration per fragment.
- **Grammar X** once, F8: the misuse tell as two stacked chambers, wrong shape over fixed shape.
- **Two chambers side by side, on purpose (F3).** This part is the campaign's strongest case for
  breaking `videos/sdlc`'s "stack vertically, never side-by-side" precedent (bible § 4): the
  subject IS a split, and drawing both models inside one chamber would argue against the claim
  the line is making. Portrait is 1080 wide, so the side-by-side is legal only at a two-box focal
  with short labels — F3 holds exactly two chambers (340px each) and one long sync arrow (300px
  of travel, the same measurement discipline `osi-layers-1-sideways` applied to its F6). F7
  reuses the two chambers but **stacks** them, because its subject is an interval, not a pair.
  F8 stacks, because it carries two *sequences* of content.
- `videos/repository-pattern` (part 1, the grammar carrier) is still landing frames while this
  run works. Its shipped grammar (cream paper, white chambers with a **3px ink border**, navy
  `#181715` code surface with a `#252320` title bar, one ember `#FFA946` moment per frame outside
  any code panel, EB Garamond display for the hero identifier, JetBrains Mono kicker with the
  coral ✱, muted ink darkened to `#76766E` for AA) is cloned here. Where it disagrees with the
  bible it gets flagged, not followed: its frame 01 sets a **Python** code fragment
  (`def place_order(cmd):`) while bible § 5 requires one language across all ten parts,
  **TypeScript**. This part ships TypeScript only, and the divergence is reported.

## Video direction

The whole film shares one look and one motion grammar. Per-frame Scene lines carry only delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never invented).
  Ground is cream `#FFFFEB` paper with a hairline grid; type is ink `#1A1A1A`; chambers are
  surface-white `#FFFFFF` on cream with a **3px ink border** (the house 2px signature stepped up
  one weight for legibility at 1080-wide portrait, matching part 1). The **dark chamber** is
  `#1A1A1A` with a 2px cream border — Grammar R's seam box, the write chamber and F8's ceremony
  chamber wear it. The **code surface** is the preset's warm navy `#181715` with a `#252320`
  title bar and a cream@14% hairline. **Ember `#FFA946` is the voltage**: exactly one element per
  frame holds it *outside* the code surface (the live arrow, the in-flight marker, the seam tick),
  and it never sets a headline or a body run; syntax coral/teal inside a panel is fixed decoration
  and is not counted. **Forest `#034F46`** is the inner-panel fill on dark. **Lavender
  `#F0D7FF`** is the sole primary-action fill and appears on exactly one element in the film
  (F8's corrected shape), because nothing else here is an action. Muted text uses `#76766E`, not
  `#8A8A80` — the AA floor on cream (traps #12). Syntax decoration is fixed: keywords coral,
  strings teal `#5DB8A6`.
- **Type**: EB Garamond 400 only (sentence case, negative-tracked) for a frame's hero line; Inter
  400 for reading labels; JetBrains Mono 400 for identifiers, code, chamber headers and kickers
  (uppercase, 0.16em, coral ✱). Reading text ≥ **2.6cqw (≈28px @1080)**; code lines 2.8cqw;
  tracked mono chrome may drop to 1.4cqw but carries `data-layout-ignore`.
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and 0.35s crossfades only.
  **No rotation anywhere** — `frame.md` makes flatness load-bearing (depth comes from fill
  blocking and the ink border, never `rotateX/Y/Z`). This is also why `comparison-split` is
  **rejected** for F3 despite being the on-paper fit for two paired chambers: its signature move
  is mirrored `rotateY` book-open tilts, and dropping the tilt drops the blueprint. Same ruling
  `videos/osi-layers-1-sideways` recorded for the same reason. Every entrance is a `fromTo`
  long-tail settle (`power3`, `expo.out` on a fast arrival), **no overshoot**. Reveals are paced
  to the VO across the back ~50% of each frame; nothing front-loads; during a hold the only
  allowed aliveness is **subtle jitter** (`sine-wave-loop`, low amplitude, finite) on one held
  element. No exit motion except in F8, which is the last frame.
- **In-place label swaps** (F7's read-row status, F8's screen slot) use the **time-proxy +
  reverse-search discrete sequence** (`discrete-text-sequence`), never a text tween — the shipped
  GSAP has no TextPlugin, so `tl.set({ text })` silently no-ops while `check` reports 0 errors
  (Learnings row, 2026-10-22).
- **Rhythm / held-frame allocation**: F3 (the two chambers) and F7 (the lag) are the energy
  peaks. **F6 is the deliberate held read** — the anchor database chamber pins early and only the
  option rail steps, so the stillness carries the claim ("this part is optional"). F8 is fully
  still by its last beat. F1, F2, F4, F5 keep revealing to the VO the whole way through.
- **Post-VO holds.** `studio voice` synced the frame durations to the real Kokoro lengths; four
  frames carry an explicit silent hold after the last spoken word — F2 +0.60s (the `CQRS` wordmark
  has to be readable), F6 +1.20s (the film's designated held read), F7 +1.42s (the gap needs to
  sit), F8 +1.85s (the frame the viewer screenshots). Voice lengths are untouched.
- **Caption keep-out**: bottom ~17% belongs to the caption pill. Every frame's content caps at
  **y ≈ 1594** (nothing authored below y ≈ 1520); the hero axis of any centred beat sits at
  y ≈ 0.42 × 1920 ≈ **806**. Background fields (paper, grid) are exempt and stay full-bleed. The
  densest frame (F3) is snapshotted at 1080x1920 and read before render; if either chamber is
  unstyled or illegible side by side, F3 converts to the stacked version and this line is amended.
- **Every authored element carries its class as well as its id** (traps #1): ids are prefixed
  `<frame-id>-`, classes are prefixed `.fNN-`, and no rule is ever id-only for an animated node.
- **Negative list — never appears**: two chambers side by side anywhere except F3; a second
  ember moment in one frame; rotation, gradient fills, shadows, glow on content; a redrawn logo
  (there is none); device mockups, cursors, browser chrome, invented screenshots; any on-screen
  claim the script does not make, and any script line not shown; **a message bus, queue or event
  store drawn inside the split** (they exist only in F6's unlit optional rail and F8's ceremony
  chamber, where they are named as not-required); mnemonics; beginner framing; em dashes in any
  on-screen text.
- **On-screen type is the hero, not the narration's echo.** Labels are 1-3 words (`writes`,
  `reads`, `invariant`, `mutate`, `OrderRow`, `optional`, `the gap`, `ceremony`), real code inside
  the code chambers, and nothing else. The caption track already carries the spoken sentence.

---

## Frame 1 — One class, two jobs

- scene: a single navy service chamber held centre while two labelled pulls take it in opposite directions
- voiceover: "One class answers the writes and serves the reads. The rules pull one way. The screens pull the other."
- duration: 8.341s
- poster: 7s
- transition_in: cut
- status: outline
- src: compositions/frames/01-one-class-two-jobs.html
- type: pain_point
- persuasion: Frame-then-fill (state the shape, then populate it) + Concretization (the coupling as a physical pull)
- beat: recognition + unease
- blueprint: compose
- focal: the service chamber
- roles: chamber + its two method lines = foreground subject · hero identifier `OrderService` = supporting (the name) · two pull arrows + tags = supporting (the argument) · paper field + hairline grid = background (full-bleed, unlit)
- sfx: none

narrativeRole: Re-establishes the pattern's problem from the viewer's own code, in the first
two lines, before any claim is made. No prior part is needed to understand it.
keyMessage: "One class carrying both responsibilities is a coupling, and the two jobs strain it
in opposite directions."

Scene 1 (0.0–1.42s): cream paper, hairline grid fading up; the hero identifier `OrderService`
(EB Garamond, ink) enters on "one"@0.00 via a **per-word staggered reveal**
(`dynamic-content-sequencing`) and settles above the hero axis; the kicker's coral ✱ pops first
(`spring-pop-entrance`, restrained). Layout: hero upper-third, asymmetric 60/40 with the stage
below.
Scene 2 (1.42–4.28s): the navy code chamber enters once at the hero axis (y ≈ 806) and is then
pinned; its two method lines arrive one per spoken cue — `create(cmd)` on "writes"@1.70,
`summary(q)` on "reads"@3.06 (**line-by-line fill**, `discrete-text-sequence`). Nothing else
moves; the pull arrows do not exist yet.
Scene 3 (4.28–6.0s): "the rules pull one way"@4.38 — an ink arrow **self-draws**
(`svg-path-draw`) from the chamber's top-left edge up and out and the mono tag `rules` hard-cuts
in at its tip; **subtle jitter** on the held chamber only.
Scene 4 (6.0–8.34s): "screens"@6.62 — the second arrow self-draws from the bottom-right edge in
the opposite direction, **ember** (the frame's one voltage moment: the pressure the read side is
under), with its tag `screens`; both arrows then hold still to the cut, jitter only.

## Frame 2 — The seam, and the name (Grammar R)

- scene: the chamber splits into Grammar R's three stacked boxes: caller, the dark seam, two implementations; the CQRS wordmark lands
- voiceover: "Split the model along that seam, and each side takes its own shape. Commands change state. Queries answer questions."
- duration: 10.648s (10.048s VO + 0.60s hold on the wordmark)
- poster: 8s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-the-seam-and-the-name.html
- type: product_intro
- persuasion: Signposting + Distillation (compress the term to one line)
- beat: clarity + orientation
- blueprint: grid-card-assemble (Adapt)
- focal: the seam chamber
- roles: seam chamber + its ember split tick = foreground subject · caller chamber = supporting (above) · the two implementation chambers = supporting (below, equal weight, one band) · `CQRS` wordmark = supporting (the name) · dependency arrows = supporting (the direction) · field + grid = background
- sfx: none

narrativeRole: Names the pattern and puts the spine grammar on screen exactly when the
narration names it — caller above, the seam in the middle, two implementations below, with the
dependency arrow pointing down.
keyMessage: "CQRS is a split in the model along the command/query seam."

Adapt: keep the staggered self-assembly into a vertical stack and the hold; change feature tiles
into three Grammar R chambers (caller / seam / implementations) assembled top-to-bottom, and keep
the grid flat — no `rotateY`, no tilt, no 3D.

Scene 1 (0.0–2.58s): the paper and grid carry in; the caller chamber (`caller` header, body
`OrderService`) assembles at the top third, then the **dark seam chamber** self-assembles under it
on "seam"@1.74 with an **item stagger-assemble** settle; the `CQRS` wordmark enters in EB Garamond
on "split"@0.00 so the name is on screen while the seam is being named. Layout: vertical stack,
3 depth layers, hero axis on the seam.
Scene 2 (2.58–5.52s): "each side takes its own shape"@3.36 — the two implementation chambers
assemble side by side *within* the bottom band (the spine stays vertical: this is one band, not a
second split frame), each taking an ink dependency arrow drawn down from the seam
(`svg-path-draw`); the seam's **ember** split tick lands with them — the frame's one voltage
element, and the reason the two chambers below are legal.
Scene 3 (5.52–8.0s): "commands change state"@6.16 — the left chamber brightens to full ink and
takes the mono body `handle(cmd)`; the right stays at 55% (dim-by-position).
Scene 4 (8.0–10.05s): "queries answer questions"@8.44 — the right chamber brightens and takes
`handle(q)`; both hold, arrows still.
Scene 5 (10.05–10.65s): the hold the wordmark is owed. Nothing moves but **subtle jitter** on the
seam chamber.

## Frame 3 — Two chambers, two model shapes

- scene: one write chamber and one read chamber side by side, normalised entities in the left, one flat row in the right, one sync arrow between them
- voiceover: "The write side keeps normalised entities. The read side ships flat rows, joined and pre-summed for the screen."
- duration: 9.472s
- poster: 8s
- transition_in: cut
- status: outline
- src: compositions/frames/03-two-chambers.html
- type: feature_showcase
- persuasion: Before/after by side-by-side contrast + Concretization (model shape as visible boxes)
- beat: comprehension + "aha"
- blueprint: compose
- focal: the sync arrow between the two chambers
- roles: write chamber + three entity nodes = foreground subject (equal weight) · read chamber + flat row = foreground subject (equal weight) · sync arrow + `sync` tag = the claim itself · chamber headers = supporting · field + grid = background
- sfx: none

narrativeRole: The anatomy frame, and the part's claim in one image: the two models are
visibly different shapes, and the arrow between them is the sync, not a requirement.
keyMessage: "The write model is normalised and owns the invariants; the read model is
denormalised on purpose."

Scene 1 (0.0–1.36s): the write chamber (dark, 2px cream border) assembles at the left of the
stage on "write"@0.18, header `normalised` in cream; the right half of the stage is still blank
paper. Layout: asymmetric two-column, 340px chambers, 300px of paper between them, hero axis at
y ≈ 806.
Scene 2 (1.36–3.96s): "entities"@2.08 — three entity nodes (`Order`, `OrderLine`, `Customer`)
stagger-assemble **inside** the write chamber, each with a hairline connector tick to the next —
the normalised shape, three boxes for three concepts, revealed one per beat rather than dumped.
Scene 3 (3.96–6.2s): "read side ships flat"@4.04–5.24 — the read chamber (white, 3px ink border)
assembles on the right, header `flat`, and one row bar `OrderRow` lands inside it on "rows"@5.76;
then the **ember** sync arrow self-draws across the 300px gap from the write chamber to the read
chamber (the arrow's travel is the argument, so it must be visibly long, not a stub) with its
`sync` tag hard-cutting in above the midpoint.
Scene 4 (6.2–8.74s): "joined"@6.20, "pre-summed"@7.68, "screen"@8.74 — three field chips
(`status`, `customer`, `totalCents`) assemble into the row bar one per spoken cue, so the flat
shape is still arriving in the back 50% of the frame.
Scene 5 (8.74–9.47s): held read of the pair — both chambers and the arrow still; **subtle
jitter** phase-opposed between the two chambers (`sine-wave-loop`, left `sin(t)` / right
`sin(t+π)`, 1.6px) so they never conveyor-belt together.

## Frame 4 — The command side (Grammar C)

- scene: a navy code chamber, five TypeScript lines revealing line by line behind a caret, the guard block ember-marked
- voiceover: "A command handler checks the invariants, then mutates. An order with no lines never reaches the database."
- duration: 9.195s
- poster: 7s
- transition_in: cut
- status: outline
- src: compositions/frames/04-the-command-side.html
- type: feature_showcase
- persuasion: Demonstration (show the mechanism running) + Concretization (a real guard, a real rejection)
- beat: comprehension + confidence
- blueprint: typewriter-reveal (Adapt)
- focal: the code chamber
- roles: code chamber + its 5 lines = foreground subject · caret = supporting (the typing signature) · `invariant` / `mutate` tags + lead rules = supporting · ember guard bar = the frame's one voltage moment · field + grid = background
- sfx: none

narrativeRole: Pays the code-shape half of the spine for the write side, in ≤6 lines: validate,
then mutate, and the invariant is enforced there.
keyMessage: "The command handler validates against the rules and then writes; it answers no question."

Adapt: keep the type-on-with-caret signature (the caret tracks the frontier line by line) and the
in-place reveal; change a single brand line into a five-line handler revealed one line per spoken
cue, and drop the collapse-to-brand payoff — this frame holds on the finished code, because the
code IS the point.

Scene 1 (0.0–1.26s): the navy surface (title bar `create_order_handler.ts` in mono) assembles at
the hero axis and the caret blinks at line 1 (`context-sensitive-cursor`); kicker `command side`.
Scene 2 (1.26–3.58s): "checks the invariants"@1.26–2.04 — lines 1-3 reveal in sequence with the
caret stepping down (each line's characters arrive left-to-right behind the caret); the tag
`invariant` hard-cuts in on "invariants"@2.04 with its lead rule.
Scene 3 (3.22–5.2s): "then mutates"@3.22–3.58 — line 4 reveals and the tag `mutate` lands on it
with its lead rule; the caret settles at the end of the body.
Scene 4 (5.2–8.3s): "an order with no lines"@5.38–6.32, "never reaches the database"@6.92–8.28 —
the **ember** guard bar draws down the left edge of the guard lines (one voltage element, and it
marks the invariant, not the write); no other motion.
Scene 5 (8.3–9.2s): held read of the finished handler; **subtle jitter** on the chamber only.

## Frame 5 — The query side (Grammar C)

- scene: a navy code chamber with the query handler, then a flat ember OrderRow bar assembling field chips beneath it
- voiceover: "A query handler reads a shape built for the screen and changes nothing. It can denormalise freely."
- duration: 8.299s
- poster: 6.5s
- transition_in: cut
- status: outline
- src: compositions/frames/05-the-query-side.html
- type: feature_showcase
- persuasion: Contrast (same handler shape, opposite freedom) + Progressive disclosure (field by field)
- beat: comprehension + delight
- blueprint: grid-card-assemble (Adapt)
- focal: the flat `OrderRow` bar
- roles: code chamber + its 4 lines = foreground subject · `OrderRow` bar = the payoff (ember, the one voltage moment) · three field chips = supporting (the denormalisation) · `no writes` tag = supporting · field + grid = background
- sfx: none

narrativeRole: The other half of the code shape: the query side is free to shape rows however
the screen wants, and it never mutates.
keyMessage: "The query handler returns a denormalised row and changes no state."

Adapt: keep the staggered self-assemble-and-hold signature; change a tile grid into three field
chips cascading into one flat row bar, and book-end it with the code chamber above (the array is
the setup, the joined row is the landing).

Scene 1 (0.0–1.26s): the navy surface (title bar `recent_orders_handler.ts`) assembles at the
upper third; line 1 `async handle(q: RecentOrders) {` reveals on "query handler"@0.24–0.64.
Scene 2 (1.26–3.24s): "reads a shape built for the screen"@1.26–3.24 — lines 2 and 3 reveal one
per cue; the mono tag `reads` lands beside line 2.
Scene 3 (3.24–5.2s): "changes nothing"@4.14–4.66 — line 4 (the close brace) lands and the muted
tag pill `no writes` hard-cuts in at the panel's right edge. Nothing else arrives.
Scene 4 (5.2–7.5s): "denormalise"@6.40 — the **ember** `OrderRow` bar grows in below the panel
and three field chips (`status`, `customer`, `totalCents`) **stagger-assemble** into it one per
beat, so the flat shape is still arriving in the back half.
Scene 5 (7.5–8.3s): held read of panel plus joined row; **subtle jitter** on the bar only.

## Frame 6 — What is optional (the held read)

- scene: one pinned database chamber holding both models while an option rail steps three dashed add-ons that stay unlit
- voiceover: "Both halves can share one database. No event store, no message bus, no second store. That step is optional."
- duration: 11.184s (9.984s VO + 1.20s hold)
- poster: 9s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-what-is-optional.html
- type: feature_showcase
- persuasion: Subtractive framing (define the pattern by what it does not demand) + fixed-anchor contrast
- beat: clarity + foresight
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the pinned database chamber
- roles: database chamber + two model boxes = foreground subject (pinned, never moves after Scene 1) · three dashed option chips = supporting (the cycling region, permanently unlit) · `optional` display line = supporting (the landing) · ember underline rule = the frame's one voltage moment · field + grid = background
- sfx: none

narrativeRole: The accuracy bar for the most-abused term in the series, paid as its own beat:
the split is at the model, so nothing here mandates event sourcing, a bus, or a second store.
keyMessage: "The two models may live in one database; the extra machinery is a later, optional
scaling decision."

Adapt: keep sub-shape A exactly — one element pinned once that never moves while an adjacent
region steps through discrete hard-cut states, steady cadence; change the peer-stamp column into
an option rail of three **unlit** dashed chips, cap the states at 3 (a roll-call, not a flurry),
and resolve on the display word rather than a completed lockup. The geometry law holds: the
cycling region never touches or displaces the anchor.

Scene 1 (0.0–2.3s): the dark database chamber (header `one database`) assembles once at the hero
axis and is then immovable; the two model boxes `write model` and `read model` self-assemble
**inside** it on "both halves"@0.00 and "share"@1.22 — the claim in one image before the
negations start. The option rail region is blank paper.
Scene 2 (2.3–5.14s): "no event store"@3.56–4.26 — the first dashed chip `event store` hard-cuts
into the rail region beside the chamber, muted ink on a 1px dashed border, **unlit**: no ember, no
fill, no glow. It stays.
Scene 3 (5.14–7.22s): "no message bus"@5.30–5.76, "no second store"@6.74–7.22 — the second and
third chips step in on the same cadence, same unlit state. Steady stepping, ~1s per state, no
acceleration, and the anchor has not moved since Scene 1.
Scene 4 (7.22–9.54s): "that step is optional"@8.28–9.10 — the display word `optional` (EB Garamond
italic) settles under the rail and the **ember** underline rule draws beneath it on a bounded
scaleX settle. The three dashed chips dim a further 10%.
Scene 5 (9.54–11.18s): the deliberate held read of this film. The anchor, the two model boxes and
the dim rail are all still; only **subtle jitter** on the underlined word, then nothing.

## Frame 7 — The cost being priced

- scene: the write chamber stacked above the read chamber, the sync arrow in flight, and the read row still showing the previous status for a moment before it flips
- voiceover: "One side reads what the other wrote, and the copy can lag by a moment. That gap is the price."
- duration: 9.293s (7.893s VO + 1.42s hold)
- poster: 8s
- transition_in: cut
- status: outline
- src: compositions/frames/07-the-lag.html
- type: benefit_highlight
- persuasion: Causal chain (write → sync → stale read) + Concretization (the lag as a measured interval)
- beat: unease + comprehension
- blueprint: compose
- focal: the in-flight sync marker and the row that has not caught up
- roles: write chamber (top) = foreground subject · read chamber + its row = foreground subject · in-flight ember marker = the frame's one voltage moment · `the gap` bracket + label = supporting (the interval being priced) · field + grid = background
- sfx: none

narrativeRole: Says plainly what the split costs, so the pattern is not sold as free. The lag is
not a bug in the idea; it is the thing being priced against the freedom on the read side.
keyMessage: "The read model may lag the write, and that lag is the cost of the split."

Scene 1 (0.0–2.06s): the write chamber (dark) sits at the top third carrying the written row
`status · paid`, entering on "one side"@0.00; the read chamber (white, 3px ink border) assembles
below it on "reads"@0.86 holding a status chip that reads `new` — the stale value, shown before
anything is said about staleness. Layout: stacked pair, 3 depth layers, arrow down the
centre-left.
Scene 2 (2.06–4.9s): "what the other wrote"@1.40–2.06 — the sync arrow self-draws downward;
"can lag"@3.98 — the **ember** marker travels the arrow once (a finite leg, not a loop) and the
read row still shows `new` while it is in flight.
Scene 3 (4.9–7.16s): "by a moment"@4.78–4.90 — the marker reaches the read chamber and the status
chip flips `new` → `paid` at 5.10 through the **time-proxy + reverse-search discrete sequence**
(`discrete-text-sequence`, never a text tween); "that gap"@6.30 — a bracket spans the interval
between the arrow's start and the flip, labelled `the gap` in mono.
Scene 4 (7.16–9.29s): "is the price"@7.00–7.16 — the display word `price` (EB Garamond) lands
beside the bracket; then the film's quietest hold: everything still, jitter on the read chamber
only, for the last 2.1s.

## Frame 8 — Where it goes wrong (Grammar X)

- scene: two stacked chambers, the ceremony on top (two stores, an event stream, and a screen showing no row), the honest shape below with the write handing its own result back to the screen
- voiceover: "Two stores and an event stream on a workload that never asked. A page that writes, reads back, and shows nothing."
- duration: 11.215s (9.365s VO + 1.85s hold)
- poster: 10s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/08-the-misuse-tell.html
- type: cta
- persuasion: Counterexample (here is when it breaks) + Distillation
- beat: recognition + resolve
- blueprint: compose
- focal: the top chamber's empty screen slot, then the bottom chamber's lavender pill
- roles: ceremony chamber (top, dark) = foreground subject · its two chips + empty screen slot = supporting (the mistake) · corrected chamber (bottom, white) = foreground subject (the answer) · `read your own write` lavender pill = the film's only lavender element and its one action fill · tag labels = supporting · field + grid = background
- sfx: none

narrativeRole: The misuse tell the whole campaign ends on, and the frame the viewer screenshots:
the mandatory-full-stack mistake, and the write-then-read-yourself bug it produces.
keyMessage: "CQRS goes wrong when the ceremony is treated as mandatory, and when a write reads
its own result back before the read model has caught up."

Scene 1 (0.0–3.72s): the ceremony chamber (dark) assembles across the top band; chips `two
stores`@0.00 and `event stream`@0.88 hard-cut in beside it, and the muted tag `ceremony` lands on
"workload"@2.48; "never asked"@3.38 dims both chips a further 10% — they stay, unlit, unargued
with.
Scene 2 (3.72–8.48s): "a page that writes"@5.16–6.10 — a small write box appears inside the
ceremony chamber and an arrow runs from it to a screen slot, the frame's **ember** element while
it is in flight; "reads back"@6.98 — the arrow completes; "shows nothing"@8.16–8.48 — the screen
slot's chip steps `…` → `no row` through the **time-proxy discrete sequence** (no text tween): ink
outline, empty fill, the eventual-consistency bug as an image.
Scene 3 (8.48–10.4s): the corrected shape builds in the lower band during the silent hold — the
white chamber assembles with the write handing its own result to the screen, carried on the
film's **one lavender** pill `read your own write` (`#F0D7FF` fill, ink text, 2px ink border, pill
radius). This is the frame's answer and the element the viewer screenshots.
Scene 4 (10.4–11.22s): full stop. Both chambers still, no jitter, no exit — the last frame of the
film is allowed one and chooses not to use it.

---

## Budget and pacing check

| Frame | VO line | spoken words | VO duration (real) | frame duration | running | words/sec |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Line 1 | 19 | 8.34s (ends 8.12) | 8.341s | 8.34s | 2.28 |
| 2 | Line 2 | 19 | 10.05s (ends 9.50) | 10.648s | 18.99s | 1.79 |
| 3 | Line 3 | 18 | 9.47s (ends 9.12) | 9.472s | 28.46s | 1.90 |
| 4 | Line 4 | 17 | 9.20s (ends 8.70) | 9.195s | 37.66s | 1.85 |
| 5 | Line 5 | 17 | 8.30s (ends 7.86) | 8.299s | 45.96s | 2.05 |
| 6 | Line 6 | 19 | 9.98s (ends 9.54) | 11.184s | 57.14s | 1.70 |
| 7 | Line 7 | 20 | 7.89s (ends 7.50) | 9.293s | 66.44s | 2.15 |
| 8 | Line 8 | 21 | 9.37s (ends 8.96) | 11.215s | 77.65s | 1.87 |

150 words / 77.74s cut = **1.93 words per finished second**, at the campaign's ~2.0 w/s planning
rate and against `videos/repository-pattern`'s measured 1.84 w/s. Frame durations are the real
Kokoro `af_heart` lengths at speed 0.74 as written back by `studio voice sync-durations`, plus the
four post-VO holds recorded in Video direction. The 78s brief target is met; the 90s ceiling is
not approached.

Grammar count: R × 1 (F2) · C × 2 (F4, F5) · X × 1 (F8) · two-chamber side-by-side × 1 (F3) ·
stacked pair × 2 (F7, F8) · pinned anchor + rail × 1 (F6) · single chamber × 2 (F1, F2's caller).
Blueprint count: compose × 4 (F1, F3, F7, F8) · grid-card-assemble × 2 (F2, F5) ·
typewriter-reveal × 1 (F4) · fixed-anchor-cycle × 1 (F6). Framing variety: hero+stage, vertical
stack, asymmetric two-column, code panel, panel+row, pinned anchor, stacked pair, stacked
before/after — no framing twice in a row.
SFX marks used: **0** (bible § 7 rations the campaign's marks and bars a parallel run from writing
`.media/manifest.jsonl`). BGM: none. Voice: Kokoro `af_heart`, speed 0.74.
