---
format: 1080x1920
duration: 56s
message: "Decoupling means one layer can change without the others noticing"
arc: concept-explainer with story (the promise → the slot → two swaps → the habit → the ask)
audience: beginners who have seen the diagram and memorised the seven names
mode: autonomous
music: none
captions: en
---

# STORYBOARD — osi-layers-2-the-seam

Part 2 of 3. The decoupling payoff. Frame numbering is canonical for this part: `SCRIPT.md`'s
`Frame N` labels map 1:1 onto `Frame N` here, in order. **Frames are not built yet** — this
storyboard is approved text; the `compositions/frames/*.html` are cloned from P1's validated
stage (`../osi-layers-1-sideways/compositions/frames/`) after P1 passes its snapshot, per
`BRIEF.md`.

## Order-independence (series rule: this part must stand alone)

Checked on paper before TTS. Required by `../../writing/osi-layers/series-bible.md` § 2.

**Check A — does any line presuppose P1 or P3?** No. Line 1 states the sideways reading in its
own words ("Every layer talks sideways, to the same number on the machine at the other end") —
that is P1's thesis re-established inside P2, not a reference to it; no "as before", no "like we
saw". Line 2 introduces the slot idea cold. Lines 3–5 each open with their own subject (the web,
the application, you). Line 6 generalises from what is on screen in this part only. The CTA
points at a different article section than P1's.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F3 ↔ F5** (TCP → QUIC ↔ Ethernet → Wi-Fi). PASS. They are parallel instances of one
  claim and neither depends on the other's vocabulary. Cost: F4's line ("Different transport…")
  is the *reading* of F3 specifically, so the pair (F3, F4) must move together as a block;
  F5 alone cannot precede F4. Moving the block `[F3,F4]` after F5 also passes — the two swaps
  then read as Wi-Fi first, HTTP second, which is chronologically odd but every individual
  statement stays true.
- **Swap F2 ↔ F3** (the slot idea ↔ the first swap). FAIL, mildly: F3 is the demonstration F2
  sets up ("a slot can be refilled" → watch one get refilled). F2 before F3 is kept.

No swap produces a false claim anywhere in this part. The load-bearing order is only
F1 → F2 → [F3 → F4] / F5, with the last two interchangeable as single frames.

**Portrait grammar.** This part is **grammar B throughout** (6 × B, 0 × A): its argument is
*one* pair at a time — HTTP staying put while its transport changes, Layer 3 not flinching while
the link changes. That is a single-layer claim, so a single host chamber plus an arrow leaving
the frame edge carries it, and no frame here needs the seven-row matrix. The side-by-side
exception P1 uses is deliberately **not** reused: it belongs to P1's thesis beat and reusing it
here would blunt P1's payoff. The densest frame in this part (F4, three bands) is measured
against the same caption cap (~y 1594) as P1's, but it inherits P1's validated B-stage, so the
measurement is a confirmation rather than a risk.

## Video direction

Shared look and motion grammar for the part; per-frame Scene lines carry only the delta.
Identical to P1's by design — these are sibling projects and must cut as one series.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never
  invented): cream `#FFFFEB` ground, ink `#1A1A1A` type, cards surface-white `#FFFFFF` with the
  4px ink border and radius 8. **`ember` `#FFA946` is the voltage**, and in this part it means
  specifically *the layer that is being swapped out* — TCP, then QUIC, then the cable, then the
  radio. The application's own card never wears ember; it stays ink-on-white, which is how
  "the application didn't notice" becomes a visible fact rather than a caption. **`lavender`
  `#F0D7FF` is the action fill**, F6's CTA pill only. Muted `#8A8A80` carries everything inert
  (unchanged layers, dimmed bands). No `lime` / `teal` / `lavender-deep` — stacking preset
  role-colours would read as a menu.
- **Motion grammar + reveal model**: one camera, one grid, flat. Hard cuts and 0.35s crossfades;
  **no `rotateX/Y/Z` anywhere** (`frame.md`: flatness is load-bearing), which is why
  `comparison-split` is unused in this part too — its signature is mirrored book-open tilts
  (`split-tilt-cards`) and the pack forbids them. Every entrance is a `fromTo` long-tail settle
  (`power3`, `expo.out` on a fast arrival); **no overshoot**. Reveals paced to the VO across the
  back ~50%; at t=0 only what the line is saying exists. During a hold the only aliveness is
  **subtle jitter** (`sine-wave-loop`, low amplitude) on one held element — no lazy breathing,
  no back-half pan or push. The one exception is licensed by its own blueprint: F4's single
  decelerating **zoom-out** is the shape's signature, it completes in the first third of the
  reveal and locks, and after the lock **no camera tween exists on the timeline**.
- **Rhythm / held-frame allocation**: F3 (the swap lands) is the energy peak. **F4 is the
  deliberate held read** — after its zoom-out locks at ~4s of 11s, the three bands sit and
  nothing moves but a jitter on the HTTP row; the stillness is the claim ("did not need to
  know"). F6 is fully still by design. F1, F2, F5 keep revealing to the VO throughout.
- **Caption keep-out**: bottom ~17% is the pill's. All content plans into the top ~83%; content
  caps at ~y 1594 and any centered hero beat anchors at y ≈ 0.42 × 1920 ≈ 806. Background
  fields stay full-bleed and are exempt.
- **Negative list — never appears**: two side-by-side chambers (this part is B-only, see
  above); the seven-row matrix — that is P1's payoff and copying it here would make P2 a recap;
  mnemonics; any top-to-bottom arrow (the sideways reading is assumed, never re-taught against);
  "not just… but…", "seamless", "actually", or any hedging about which layer QUIC belongs to in
  the narration (the honesty lives in the article, per `series-bible.md` § 7); a device mock,
  browser chrome, real cursor, or product screenshot — HTTP/QUIC here are **invented blocks in a
  diagram**, not reconstructed UI; purple-blue "AI" gradient bokeh; gradient text; a redrawn
  logo; any on-screen claim the script doesn't make, and any spoken claim the screen contradicts.
- **On-screen type is the hero, not the narration's echo.** Protocol names are the payload:
  `HTTP/2`, `TCP`, `HTTP/3`, `QUIC`, `Ethernet`, `Wi-Fi`, `ports 80`, `ports 443` — set in mono
  values at readable size, because naming them on screen is what makes the abstract claim
  checkable. Nothing longer than three words per beat.

---

## Frame 1 — Every layer has a partner

- scene: one host chamber with a lit Layer 4 row; an arrow leaves its right edge toward a peer tag off-frame
- duration: 6.741s
- poster: 7.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-the-promise.html
- type: hook
- persuasion: Frame-then-fill (state the shape, then populate it) + Anchoring on a familiar referent
- beat: clarity + anticipation
- blueprint: spatial-pan-stations (Adapt)
- focal: the horizontal peer arrow
- roles: host column (7 rows, one lit) = foreground subject · peer arrow = foreground subject · right-edge peer tag `transport` = supporting · dimmed off-frame chips = supporting · paper field = background
- sfx: none

Adapt: keep the single virtual camera traversing pre-placed labelled stations and centering each
one as a callout arrives; change it to **one lateral station-to-station move** inside a single
frame (host Layer 4 → the peer tag at the right margin) with no zoom, and drop the multi-station
roll-call. In P1 this blueprint ran vertically down the ladder; here the same machinery runs
**sideways**, which is the series' point made with the camera instead of the words.

narrativeRole: Re-establishes the sideways reading from scratch so this part is watchable alone,
then immediately treats it as settled so the rest of the part can spend its time on the payoff.
keyMessage: "Layers talk across the wire to the same-numbered peer — that is the frame this
video is about."

Scene 1 (0.0–1.5s): VO cue 1 "every layer talks sideways" — the host column resolves in the left
58% at ~55% ink; the ember highlight enters on Layer 4's row only. The right 42% is empty paper.
Scene 2 (1.5–5.0s): "…to the same number on the machine at the other end" — the camera **pans
laterally** (`viewport-change`, PAN mode, no scale change) along row 4 as its arrow draws itself
out of the chamber's right edge (`svg-path-draw`); the peer tag `transport` is centered as the
pan lands on it, then a "same number" mono callout pops beside it with a restrained settle.
Scene 3 (5.0–7.2s): faint ghost peer tags resolve at the row 7 and row 3 levels in the off-frame
margin at ~25% ink — the promise that this holds for every layer, stated visually, never said.
Scene 4 (7.2–9.0s): held read; jitter on the arrow head only. No exit motion.

## Frame 2 — A layer is a slot

- scene: seven empty sockets in a column, one of them open and waiting; the words "a slot can be refilled"
- duration: 5.568s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-the-slot.html
- type: product_intro
- persuasion: Concretization (a layer stops being a place and becomes a socket) + Progressive disclosure
- beat: focus + intrigue
- blueprint: grid-card-assemble (Adapt)
- focal: the open Layer 4 socket
- roles: socket column = foreground subject · open socket with ember inner edge = supporting (the single ember element) · slot labels = supporting · field + hairline grid = background
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; change filled cards
into **empty sockets** (4px ink outlines, no fill) so the frame's subject is an absence — the
assembly is of holes. Signature move preserved: items arrive in slots, staggered, and hold.

narrativeRole: Names the mechanism that makes the rest of the part possible. The protagonist of
this explainer is the idea "a layer is a slot with a job", so this is the concept-naming beat.
keyMessage: "A layer is a role something can be hired into, not a fixed thing."

Scene 1 (0.0–1.4s): VO cue 1 "a layer is a slot with a job" — the sockets **stagger-assemble**
top-down into one column, each arriving as an outline with only its mono number inside; no
labels yet. Centered, ~50% of frame width, hero axis ≈ 806.
Scene 2 (1.4–4.6s): as each spoken word lands, one socket takes its job label (`application`,
`presentation`, `session`, `transport`, `network`, `data link`, `physical`) in display type — a
per-word reveal paced to the line, so the bottom three labels are still arriving in the back 50%.
Scene 3 (4.6–6.6s): "and a slot can be refilled" — the Layer 4 socket's inner edge lights ember
and its label slides **out** of the socket, leaving it visibly open. One element moves, one
element empties; nothing else on the frame changes.
Scene 4 (6.6–8.0s): held read of the open socket. Jitter only. The unlit six are the point.

## Frame 3 — HTTP moves

- scene: HTTP pinned at the top while the block under it hard-cuts from TCP to QUIC
- duration: 12.309s
- poster: 10s
- transition_in: cut
- status: animated
- src: compositions/frames/03-http-moves.html
- type: feature_showcase
- persuasion: Demonstration (show the mechanism running) + Before/after
- beat: fascination + comprehension
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the pinned `HTTP` card
- roles: HTTP card = foreground subject (pinned once, never moves) · the transport slot below it = supporting (the cycling region) · version/label chips (`over TCP`, `over QUIC`) = supporting · two peer arrows at the right edge = supporting · dimmed column = background
- sfx: none

Adapt: keep sub-shape A exactly — one element enters once and never moves while the adjacent
region steps through discrete hard-cut states; change the cycle region from a CTA rail beneath a
wordmark to the **socket under the pinned card**, and set the state count to 2 (TCP → QUIC) with
a steady, unhurried cadence — 2 states is a swap, not a roll-call, which is the whole difference
between this frame and a feature tour.

narrativeRole: The proof of the slot idea, using the real, dated example: HTTP/2 over TCP, then
HTTP/3 over QUIC. Also quietly carries the series' honesty rule by keeping the on-screen claim
at "the transport changed, the application didn't notice" and leaving the L4/L7 blurriness of
QUIC to the article.
keyMessage: "The web moved its transport without moving the application above it."

Scene 1 (0.0–1.8s): VO cue 1 "for years the web spoke HTTP over TCP" — the pinned `HTTP` card
seats at the upper third (hero axis ≈ 806) with its peer arrow already running off the right
edge; the empty transport socket from F2 sits directly beneath it, still open.
Scene 2 (1.8–5.4s): "…over TCP" — `TCP` slides into the socket (`anchored-layout-expand`-safe:
transform-only, the socket's geometry authored expanded, never a width/height tween) and the
chip `HTTP/2 over TCP` resolves beside the card. The pinned card does not move when its slot is
filled. Nothing else arrives.
Scene 3 (5.4–8.6s): "then HTTP/3 arrived and put itself on QUIC instead" — the `TCP` block
**hard-cuts** out and `QUIC` slaps into the same geometry (`discrete-text-sequence` instant state
swap, per-state chip width set discretely); the version chip steps `HTTP/2` → `HTTP/3` in place.
Two swaps, both on the VO's own words, both in the back half of the frame.
Scene 4 (8.6–11.0s): the `HTTP` card + `QUIC` block + peer arrow hold. One restrained settle on
`HTTP/3`, then stillness with jitter on the pinned card only.

## Frame 4 — The application didn't notice (deliberate held frame)

- scene: tight on the QUIC block, one decelerating zoom-out reveals the three bands and the HTTP row still lit above
- duration: 10.325s
- poster: 10s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/04-did-not-notice.html
- type: benefit_highlight
- persuasion: Causal chain (transport changed → request unchanged → nothing above had to know) + Contrast (common belief vs reality)
- beat: conviction + "aha"
- blueprint: zoom-out-workspace-reveal (Adapt)
- focal: the `HTTP` row, revealed by the pull-back
- roles: QUIC block = foreground at open only · the three-band stack (application / transport / network) = the containing whole revealed · HTTP row = supporting hero after the lock · peer arrows = supporting · field = background
- sfx: whoosh-soft (one, on the pull-back)

Adapt: keep the signature exactly — **one** continuous decelerating zoom-out that reveals the
containing whole, then the frame locks and element-level payoff carries on; no zoom-in anywhere,
and no camera tween after the stop. Change the revealed workspace from a multi-pane tool to the
three-layer column, and change the post-lock act from a deliverable to a non-event: the HTTP row
simply stays lit, which is what "did not need to know" looks like.

narrativeRole: Turns the swap into the abstract property the series is named for — decoupling —
and is the payoff of the part.
keyMessage: "Because layers are peers across the wire, a layer can be rebuilt without asking
anyone above it."

Scene 1 (0.0–1.4s): open **tight** — the `QUIC` block fills the frame as a full-bleed macro
detail, its internal fields (ports, streams) barely legible, ink on white, 4px border cropped by
the frame. The pinned HTTP card is not yet in the world's visible range.
Scene 2 (1.4–6.0s): VO "different transport, different behaviour underneath" — **one**
decelerating zoom-out (`viewport-change`, single `.world` wrapper, `cam.scale` → 1 with the
counter-translate resolved to 0 on one shared ease, `expo.out`) reveals the containing three-band
stack: application above, transport holding TCP and QUIC as two sibling blocks below it. The
zoom ends **before** the shot does, and the frame locks. Layout after lock: stacked bands,
asymmetric 60/40 with the arrow rail on the right, 3 depth layers.
Scene 3 (6.0–8.8s): "the application sent the same request" — the HTTP row lights to full ink
(no camera move; an element-level reveal paced to the word), a `GET / ` mono request line steps
in place under it, and the two transport blocks stay visibly different below. The ember is on the
**transport** band, never on the application band.
Scene 4 (8.8–11.0s): **the held read.** Everything stops. The three bands and the unchanged
request read still, jitter on the HTTP row only, no pan, no push, no breathing. The stillness is
the argument: after two frames of swapping, the top of the stack does nothing.

## Frame 5 — You already did this one

- scene: the physical and data-link bands swap from a cable to a radio; the three bands above never move
- duration: 10.347s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/05-you-already-did-this.html
- type: social_proof
- persuasion: Demonstration + Anchoring on a familiar referent (the viewer's own laptop)
- beat: recognition + delight
- blueprint: compose
- focal: the bottom two bands changing skin
- roles: bottom band (cable → radio) = foreground subject · link band above it = supporting · the three upper bands = background (locked, dimmed 45%) · peer arrows = supporting · field = background
- sfx: none

Compose: the beat is a whole-theme reskin under a frozen upper stack — the closest shape in the
menu is `fixed-anchor-cycle`'s sub-shape B (theme morph under a pinned anchor), but the anchor
here is three bands of unchanged layers rather than one element, and the reveal wants to be read
as *you unplugging a cable*, so it is built from the vocabulary instead: **live SVG internals**
(`svg-icon-enrichment`) for the radio's oscillating arcs, a finite **theme-crossfade morph**
(`theme-crossfade-morph`) for the medium swap, and `depth-of-field-blur` to soften the unchanged
upper bands by a few px so the eye stays at the bottom. All three upper bands are pinned
screens — they never translate, never scale, never re-enter.

narrativeRole: The viewer's own body of evidence: they have swapped a Layer 2 medium mid-session
without noticing. Grounds the claim in something they can repeat today.
keyMessage: "A Layer 2 medium can be replaced under a running session, and Layer 3 does not
flinch."

Scene 1 (0.0–1.4s): VO cue 1 "you have done it yourself" — the three-band column from F4 returns
at 45% ink, and the bottom band enters full-ink: a single solid cable line with a connector chip
labelled `Ethernet`, ember-filled (this is the thing being swapped).
Scene 2 (1.4–4.2s): "unplug the cable, stay on the site" — the cable line's stroke
**retracts** along itself (`svg-path-draw` played in reverse, a finite single pass) and the
connector chip lifts out of frame; the upper bands hold exactly where they are. The site's HTTP
row stays lit — the pull-back is not re-run, the request line does not change.
Scene 3 (4.2–7.0s): "Wi-Fi takes over the link, and layer three never blinks" — radio arcs
self-draw from the same anchor point and **oscillate internally** (`svg-icon-enrichment`, finite
cycles, not a loop forever), the medium chip hard-swaps its label `Ethernet` → `Wi-Fi` in place,
and one Layer-3 row's peer arrow is re-lit with a single travelling dot to show the session still
running. Reveals land on the spoken words, so the dot is the back-third event.
Scene 4 (7.0–9.0s): held read — new medium at the bottom, three untouched bands above, jitter on
the arcs only. Honest note carried on screen: the chip reads `same number, different hardware`,
which is what the campaign is allowed to claim.

## Frame 6 — Land and hand off

- scene: the two swapped pairs stack as two clean records and the lavender pill points at the article
- duration: 9.237s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-land-and-hand-off.html
- type: cta
- persuasion: Distillation (compress the part to one line) + Generalization (two cases → a habit)
- beat: resolve + intent
- blueprint: titlecard-reveal (Adapt)
- focal: the statement line "a layer at a time, in public"
- roles: statement line = foreground subject · the two swap records = supporting · article title card = supporting · pill = supporting · field = background
- sfx: none

Adapt: keep the calm landing beat and the one-restrained-move-then-still-hold discipline, and its
card-chain resolution; change the chain from monochrome statement → CTA → wordmark to statement →
two **swap records** (`TCP → QUIC`, `Ethernet → Wi-Fi`) → article card, because this part's
payoff is a list of things that actually changed, not a brand mark. Low motion remains the
payload.

narrativeRole: Lands the professional payoff — the web got rebuilt without breaking — and hands
off to a **different** article section than P1 ("what got swapped / the QUIC seam").
keyMessage: "Layers can be replaced one at a time while the conversations keep running; the
swaps themselves are listed in the article."

Scene 1 (0.0–1.6s): the stack clears with a soft wipe; the statement line slides up into the
upper third (hero axis ≈ 806) and settles. Centered, one line, display type — the only frame in
the part with no diagram.
Scene 2 (1.6–5.2s): VO "that is how the web got rebuilt a layer at a time, in public" — two
compact mono records fade up **below** the statement, each an arrow between two names:
`TCP → QUIC` and `Ethernet → Wi-Fi`, one per spoken clause, each arriving exactly when the line
points at the article's list. They are the part's evidence kept on screen while the ask lands.
Scene 3 (5.2–8.0s): "what got swapped is in the article" — the article card rises (title
`What got swapped — and where QUIC actually lives`, one-line description), the CTA pill fills
**lavender** `#F0D7FF` with ink text (the part's only lavender). Frame holds still to the end;
this is the only frame with real exit motion and it is last, so the hold simply ends.

---

## Budget and pacing check

| Frame | VO line | spoken words | storyboard duration | words/sec |
| --- | --- | --- | --- | --- |
| 1 | Line 1 | 15 | 9.0s | 1.67 |
| 2 | Line 2 | 14 | 8.0s | 1.75 |
| 3 | Line 3 | 17 | 11.0s | 1.55 |
| 4 | Line 4 | 17 | 11.0s | 1.55 |
| 5 | Line 5 | 22 | 9.0s | 2.44 |
| 6 | Line 6 | 21 | 8.0s | 2.63 |

106 words / 56s. Two honest flags, both for the frame build (P2 is built after P1 validates):

1. **F5 and F6 are the fastest frames in the series** (2.44 and 2.63 w/s against `sdlc`'s
   measured 2.18). F6's rate is tolerable because its last line is a CTA read over a still card;
   F5's is not — it packs three actions into 9s. At build time, `sync-durations.mjs` will
   re-derive both frame durations from the real Kokoro word timings; expect F5 to grow to ~10.5s
   and the part to land near 58s. That is inside the brief's ±10% of 55s, and the fix is timing,
   not cut words. If it lands outside, the candidate trim is Line 5's "and layer three never
   blinks" clause — flagged, not pre-decided.
2. The `SCRIPT.md` header budget line (106 words / ~53s) is computed at 2.0 w/s; this table is
   the plan at the storyboard's own durations. The render expectation the assembler is graded
   against is this table: **56s, drifting toward 58s after VO sync.**

Grammar count: B × 6, A × 0. SFX marks: 1 (whoosh-soft on F4's zoom-out). Series budget is 4,
P1 spends 2, this part 1, leaving 1 for P3.
