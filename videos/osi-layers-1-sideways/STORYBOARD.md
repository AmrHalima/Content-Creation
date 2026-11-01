---
format: 1080x1920
duration: 63.3s
message: "Each OSI layer is a promise between two peers, not a step down a ladder"
arc: concept-explainer with story (the misreading → the flip → two pairs → the matrix → the ask)
audience: beginners who have seen the diagram and memorised the seven names
mode: autonomous
music: none
captions: en
---

# STORYBOARD — osi-layers-1-sideways

Part 1 of 3. Thesis carrier for the series. Frame numbering is canonical for this part:
`SCRIPT.md`'s `Frame N` labels map 1:1 onto `Frame N` here, in order.

## Order-independence (series rule: this part must stand alone)

Checked on paper **before** any TTS was spent. Two checks, both required by
`../../writing/osi-layers/series-bible.md` § 2.

**Check A — does any line presuppose a later or earlier part?** No. F1 opens on the object
(the diagram), not on a prior claim. F2 critiques a reading the viewer already has from class,
not a reading this video built one frame ago. F3 names peers for the first time and the visual
is the proof. F4 and F5 are two independent worked examples: neither says "also", "second", or
"again". F6 states the thesis in full. F7 repeats the instruction verbatim rather than
referring back to F6. Nothing in this part needs P2 or P3.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F4 ↔ F5** (transport pair ↔ address pair). PASS. They are parallel evidence, not
  ordered steps: neither outcome depends on the other, and the L→T→N→P→A→D→P chain never gets
  built, so dropping F5 before F4 breaks nothing. Costs: F5's line "Layer three is the address
  on the outside" sits *below* Layer 4 in the stack, so reading it first slightly undercuts the
  implicit downward ladder F2 just criticised. Minor, and F2 is exactly the frame that argues
  the downward order is the thing we're abandoning.
- **Swap F2 ↔ F3** (the ladder reading ↔ the flip). FAIL, and deliberately so. F3's whole job is
  to *reverse* what F2 establishes; a flip needs something to flip. The order is kept.

Conclusion: the sequence is load-bearing in exactly one place (F2 → F3) and free everywhere
else. No swap makes a false claim true-by-accident.

**Grammar decision recorded here, measured later.** `sdlc`'s video direction bans side-by-side
chambers on the vertical spine. That rule is local precedent, not law, and it was written for a
stack of *content* chambers; here the pair is a *relationship*, and a relationship drawn inside
one chamber is a different claim than the one the script makes. So this part is staged in the
**B + A hybrid** from `series-bible.md` § 3: **grammar B** (one host chamber per frame, peer
implied by an arrow leaving the chamber edge) as the spine for F1–F5 and F7, **grammar A** (two
chambers, one long horizontal peer arrow) reserved for F6 — the payoff that says *all seven at
once*. Portrait is 1080 wide, so A is only legal at a single-layer focal. The densest frame
(F6) gets snapshotted at 1080x1920 and measured before render; if the peer labels fall below
the caption cap (~y 1594) or the arrow has no travel, F6 converts to grammar B + a seven-row
peer-tag rail and this line gets amended.

## Video direction

The whole part shares one look and one motion grammar. Per-frame Scene lines below carry only
the delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden in `design.md`; never
  invented): `--ground` cream `#FFFFEB` is the canvas, `--ink` `#1A1A1A` is type.
  **`ember` `#FFA946` is the voltage** — it marks the only thing that is *live in this beat*:
  the focused row, the peer arrow, the travelling envelope. Nothing else wears it, and at most
  one element per frame holds it. **`lavender` `#F0D7FF` is the action fill** — it appears on
  the CTA pill in F7 and nowhere else, because `design.md` makes it the only primary-action
  colour. `lime` / `teal` / `lavender-deep` do **not** appear in this part; the code-editorial
  preset's role names are repainted to the cream ground, and stacking three of them would read
  as a menu, not a diagram. Inactive structure (unfocused rows, hop stations, the host column's
  chrome) is `muted` `#8A8A80` on cream at ≤ 55% ink — so the ember reads as current, not as
  decoration. Cards are surface-white `#FFFFFF` on cream, 4px ink border, radius 8 (the `pill`
  token for chips).
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and 0.35s crossfades only;
  no rotation anywhere (`frame.md`: flatness is load-bearing — depth comes from colour blocking
  and the 4px border, never `rotateX/Y/Z`). Every entrance is a `fromTo` long-tail settle
  (`power3`, `expo.out` on a fast arrival) — **no overshoot anywhere in this part**, which is
  why `comparison-split` was rejected: its signature move is mirrored `rotateY` book-open tilts
  (`split-tilt-cards`), and the pack forbids the tilt, so dropping it would drop the blueprint.
  Reveals are **paced to the VO across the back ~50%** of each frame; nothing front-loads; at
  t=0 only what the line is saying at that moment exists. During a hold the only aliveness
  allowed is **subtle jitter** (`sine-wave-loop`, low amplitude) on one held element — no lazy
  breathing, no back-half pan or push. Peer tags arrive by **`spring-pop-entrance` in its
  restrained register** (smooth settle, not the bouncy one). Exit motion exists only in F7; the
  harness `transition_in` is every other frame's exit.
- **Rhythm / held-frame allocation**: F3 (the flip) and F6 (the matrix) are the two energy
  peaks. **F5 is the deliberate held read** — by ~6s of its 10.5s the envelope has stopped, the
  letter is out, and nothing moves but a jitter on the opened envelope; the stillness is the
  joke ("only the far end opens it"). F7 is fully still by design. F1, F2, F4 keep revealing
  to the VO the whole way through.
- **Caption keep-out**: bottom ~17% is the pill's. All F1–F7 content is planned into the top
  ~83% — content caps at ~y 1594, the hero axis of any centered beat sits at y ≈ 0.42 × 1920 ≈
  806. Host columns, peer tags, and hop labels are placed above the cap; background fields
  (paper texture, hairline grid, scanlines) are exempt and stay full-bleed.
- **Negative list — never appears**: side-by-side chambers outside F6 (portrait, and the only
  place the claim needs two); mnemonics or the "please do not throw pizza at the OSI model"
  joke; any top-to-bottom arrow after F3 (the ladder reading is criticised, not modelled — it
  exists only inside F2); `Please Do Not Throw Sausage Pizza Away` / `All People Seem To Need
  Data Processing`; a device mock, browser chrome, cursor, or real screenshot (nothing was
  captured — this part is fully invented); the postal image outside F5; purple-blue "AI"
  gradient bokeh; gradient text or a text shadow; a redrawn logo (there is none to redraw);
  any on-screen claim the script doesn't say, and vice versa.
- **On-screen type is the hero, not the narration's echo.** Lines 2–7 are long; every beat has
  to be legible in ≤ 3 words. Row labels (`transport`, `network`, `application`) and peer tags
  (`ports`, `sequence`, `10.0.1.7`, `93.184.216.34`) are the text on screen, in mono for values
  and display for labels — never a compressed sentence of the VO.

---

## Frame 1 — The stack you keep seeing

- scene: the seven-layer column assembles itself, row by row, and sits there looking authoritative
- duration: 7.168s
- poster: 8s
- transition_in: cut
- status: animated
- src: compositions/frames/01-the-stack.html
- type: hook
- persuasion: Common-belief vs reality (the belief is staged as a fact, then the voice contradicts it)
- beat: recognition + slight suspicion
- blueprint: grid-card-assemble (Adapt)
- focal: the seven-row column
- roles: column = foreground subject · paper field + hairline grid = background (full-bleed, unlit) · row numbers / row labels = supporting · "7" count chip = supporting
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; change the surface
from cards to seven stacked rows of one column (no gaps wider than the 4px borders), and cap
the count at 7 rather than a wall.

narrativeRole: Establishes the object the viewer already half-knows, so the correction in F2 has
something to be about.
keyMessage: "That diagram is familiar, and familiarity is the trap."

Scene 1 (0.0–1.0s): full-bleed cream paper field, hairline grid, no column. Line 1 cue 1 ("You've
seen this stack") — Layer 7's row slides in at the top third (hero axis ≈ y 806), display label
+ mono number, via **item stagger-assemble** (`center-outward-expansion`, direct-into-slot form).
Scene 2 (1.0–2.85s): the remaining six rows **stagger-assemble** downward into their slots, one per
spoken cue as "seven times" lands (cue 2.32), the group stagger capped well under the ~0.5s arrival
limit (the rows must read as one column assembling, not seven separate slides). Layout: centered
column, ~52% of frame width, 3 depth layers (field / column chrome / row labels).
Scene 3 (2.85–5.4s): VO turns ("Almost everyone reads it the wrong direction", from 3.15) — the
column is composed and holds; the frame waits for its word rather than filling with motion.
Scene 4 (5.4–7.17s): the **restrained settle** of the "wrong direction" chip at the column's
top-right edge lands on "wrong" (5.47), ember-filled, the frame's single ember element; **subtle
jitter** on the held column from 6.9 to the cut — nothing else moves.

## Frame 2 — The ladder reading

- scene: a dotted arrow crawls down the column, one row lighting per stop, and calls the whole thing "taught this way"
- duration: 6.656s
- poster: 5.5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-the-ladder.html
- type: pain_point
- persuasion: Signposting + frame-then-fill (show the shape of the misreading before breaking it)
- beat: puzzlement → clarity of the problem
- blueprint: spatial-pan-stations (Adapt)
- focal: the downward dotted arrow
- roles: arrow = foreground subject · column (now dimmed ~55%) = background · per-stop row highlight = supporting · "taught this way" callout pill = supporting
- sfx: none

Adapt: keep the single virtual camera traversing pre-placed labelled stations and centering each
with one callout; change the traverse to a short vertical pass over 7 stations, and **reduce the
camera travel to the back-third only** (motion-language: no slow pan in the later half disrupting
the sightline) — the stations step past a locked frame instead, so the signature traversal is
carried by the arrow's own draw.

narrativeRole: Names the wrong reading precisely enough that the viewer recognises their own
study habit.
keyMessage: "Top-to-bottom is a teaching convention, not how the network runs."

Scene 1 (0.0–1.25s): the column carries in from F1, dimmed to ~55% ink; the arrow's start anchor
at Layer 7 exists. Nothing else moves — "Top to bottom," is the only thing spoken.
Scene 2 (1.25–3.7s): VO "that is how it gets taught" (1.35–3.66) — the dotted arrow
**self-draws** downward (`svg-path-draw`) past each station, and each row steps bright for one
beat as it passes (per-station label reveal, `discrete-text-sequence`); reveal cadence follows
the spoken words, so the last rows are still arriving in the back 50%.
Scene 3 (3.7–6.0s): "seven handing down to six" (4.00–6.32) — the arrow stops between rows 7 and 6, a
"7 → 6" mono tag pops at its tip on "handing" (4.55) with a **restrained settle**; the "taught
this way" callout lands beside the column on "six" (5.99).
Scene 4 (6.0–6.66s): held read, arrow and callout still, jitter only.

## Frame 3 — The flip

- scene: every down-arrow becomes a horizontal arrow, and peer tags appear off the right edge of the frame
- duration: 8.704s
- status: animated
- transition_in: crossfade
- src: compositions/frames/03-the-flip.html
- type: product_intro
- persuasion: Analogy (the stack is a set of conversations) + Concretization (abstract peer rule → named tags)
- beat: "aha" + anticipation
- blueprint: compose
- focal: the seven horizontal arrows
- roles: arrows = foreground subject · host column = background (dimmed 40%) · peer tags (`application`, `transport`, `network`) = supporting · off-frame chip = supporting
- sfx: whoosh-soft

Compose: no blueprint fits — the beat is a single in-place rotation of an entire arrow field,
which is neither an assembly, a traversal, nor a cycle. Built from the vocabulary:
**cluster→outward expansion** (`center-outward-expansion`) for the arrows growing outward from
each row's right edge, **spring-pop-entrance** (restrained register) for the peer tags arriving
on the right margin, and the rotation itself authored as a transform of the arrow group only
(the tags never rotate — `frame.md` bans rotation of type).

narrativeRole: The turn of the whole part — the moment the sideways reading is installed. It
also opens the off-frame space that P2 and P3 will return to.
keyMessage: "Each layer talks to one partner at the far end, and that partner wears the same
number."

Scene 1 (0.0–1.6s): VO line 3 cue 1 ("But each layer has a partner", −2.31) — the seven rows are
dimmed to 40%; the seven down-arrow stubs are still visible, one ember highlight entering at row 4
as the first arrow grows. Layout: host column left 62%, the right 38% still empty paper.
Scene 2 (1.6–5.5s): "same number, other end of the wire" (2.65–5.51) — each row's stub **expands
outward** into a full horizontal arrow leaving the column's right edge, staggered top-to-bottom and
paced word by word, so the last three arrows land in the back half. Peer tags arrive one per
arrow at the frame's right margin (`spring-pop-entrance`, restrained), mono for the numbers and
display for the names. The arrows deliberately **run off past the right edge** — the peer is
stated as off-frame, which is the grammar-B rule.
Scene 3 (5.5–7.9s): "that is where the message goes" (5.85–8.36, "message" on 6.96–7.96) — the
ember sweeps once along row 4's arrow (a finite `svg-path-draw` flow, not a loop), the "↔ same
number" tag settles.
Scene 4 (7.9–8.704s): held read of the flipped field; jitter on the arrow group only; no camera
move; the frame unmounts on the harness crossfade.

## Frame 4 — The transport pair

- scene: your Layer 4 card holds while the peer's facts stamp onto it — and then a hop address rewrites itself underneath
- duration: 9.963s
- poster: 8.5s
- transition_in: cut
- status: animated
- src: compositions/frames/04-the-transport-pair.html
- type: feature_showcase
- persuasion: Demonstration (show the mechanism running) + Numbered enumeration of the peer facts
- beat: comprehension + confidence
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the pinned host `transport` card
- roles: host card = foreground subject (pinned, never moves) · peer-tag chips = supporting (the cycling region) · arrow to the right margin = supporting · dimmed column = background
- sfx: tick (four short ticks, one per stamp — fetched and mounted at root, never embedded)

Adapt: keep sub-shape A exactly — one element pinned once that never moves while the adjacent
region steps through discrete hard-cut states, steady cadence; change the surface from a
composer + audience roll-call to a host Layer 4 card + a peer column of stamps, and cap the
states at 5 (3 facts + 2 ports), which reads as "these are the ones that matter", not "everyone".

narrativeRole: Grounds the peer claim in one specific pair the viewer can verify, and kills the
middlebox myth in the same beat.
keyMessage: "Layer 4 exists at both ends and nowhere in between; routers only forward."

Scene 1 (0.0–1.35s): VO "your transport layer keeps" — the host card enters once at the
upper third (hero axis ≈ 806) and is then immovable; the column sits behind it at 40%. The
right-hand peer region is empty paper.
Scene 2 (1.35–6.2s): "…ports and sequence numbers. So does theirs." (2.31–6.17) — the peer region
steps **hard-cut states** on their own words: `ports` at 2.31, `sequence` at 3.12, then the four
port values stamp one per beat of "So does theirs" (`discrete-text-sequence`, per-state chip width
set discretely, never tweened), each with one `tick`. Cadence is steady, not accelerating, and the
last stamp lands in the back 50%.
Scene 3 (6.2–8.9s): "the machines in between just forward" (6.51–9.62) — a small dashed middlebox
chip arrives **below** the arrow on "machines" (7.61), labelled `forwards`, then visibly does
nothing: no state, no glow, one ember-free muted fill. This is the frame's whole argument in a
negative.
Scene 4 (8.9–9.963s): host card + peer stamps + inert middlebox hold still; jitter on the host
card only.

## Frame 5 — The address pair

- scene: an envelope crosses a rail of three hops; each hop reads the outer label and sorts it; only the last hop opens it
- duration: 10.667s
- poster: 9s
- transition_in: cut
- status: animated
- src: compositions/frames/05-the-address-pair.html
- type: feature_showcase
- persuasion: Analogy (the letter) + Concretization (the analogy's mechanics, not its decoration)
- beat: fascination + comprehension
- blueprint: compose
- focal: the envelope
- roles: envelope = foreground subject · hop stations + rail = background (dimmed, full-width strip) · outer-label values = supporting · the opened letter = supporting
- sfx: none

Compose: the beat is an element travelling a fixed rail while three stations perform the same
action on it — no blueprint in the menu casts "relay". Built from **SVG self-draw**
(`svg-path-draw`) for the rail and hop arcs, **in-place token cycle** (`discrete-text-sequence`)
for the outer label stepping `10.0.1.7 → 172.16.254.3 → 93.184.216.34`, and a finite
`nudge-curve` (`nudge-curve`) for the envelope's slow-fast-slow leg between hops. The camera is
**locked for the entire frame** — no push, no pan — because the movement is the message and a
back-half push would disrupt the sightline; the envelope rides inside a static full-width strip.

narrativeRole: Makes Layer 3 legible with the one image the campaign allows, and pays the
campaign's own honesty bar: the postal image carries *forwarding*, nothing more.
keyMessage: "Everyone along the path reads the same outer address; only the destination opens it."

Scene 1 (0.0–1.7s): VO "layer three is the address on the outside" ("address" 1.70–2.50) — a full-width horizontal rail strip in the middle third (hero axis ≈ 806), the envelope at its left anchor, the outer label already ember-tinted on its face. Three hop stations are still unlit outlines.
Scene 2 (1.7–6.95s): "every stop reads it and sorts" (4.20–6.92) — the envelope makes three `nudge-curve` legs, station by station; each station lights to full ink on arrival, the label **cycles in place** to that hop's next-hop value, and a short sort tick marks the beat (the label swap is the reveal — nothing else arrives). The third station is reached at 6.9, inside the back 50% of the frame.
Scene 3 (6.95–9.4s): "only the far end opens the letter" (7.26–10.33, "opens" 8.74) — station 3's envelope face lifts (a finite mask slide, transforms and paint only), the letter inside appears with the **final address**, and the words stay in place; stations 1–2 relabel to `forwards` in muted ink, ember removed.
Scene 4 (9.4–10.667s): **the deliberate held read** of this part. Everything stops. The letter and the final address read still; only a low-amplitude jitter on the opened flap. No camera, no drift — this is the frame the viewer remembers, and it is remembered for being quiet after two busy frames.
## Frame 6 — Seven conversations (THESIS / payoff — grammar A)

- scene: two columns, seven rows, every row joined by its own horizontal arrow, the matrix locking
- duration: 11.051s
- poster: 10.5s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/06-seven-conversations.html
- type: branding
- persuasion: Progressive disclosure + Distillation (compress the part to one line)
- beat: conviction + delight
- blueprint: grid-card-assemble (Adapt)
- focal: the seven-row pair matrix
- roles: host column = foreground subject · peer column = foreground subject (equal weight) · seven arrows = supporting (the claim itself) · "sideways" wordmark = supporting · field = background
- sfx: tick (one tick per arrow latching — budgeted inside this frame, not per row)

Adapt: keep the staggered self-assembly into a list and the hold; change one column into
**two interleaved cascades** (host row, then its arrow, then its peer row), and keep the grid
flat — no `rotateY`, no tilt, no 3D. This is the **only grammar-A frame in the series**: two
chambers side by side, one full-length horizontal arrow per row, and a single-layer focal so
both columns stay above the caption cap. Portrait override of `sdlc`'s "never side-by-side"
rule, stated in the header above and measured before render.

narrativeRole: The payoff the whole part buys — the corrected reading, all seven rows at once,
visible as one structure instead of one trick.
keyMessage: "Read sideways, the stack is seven simultaneous conversations: one layer, one
partner, all at once."

Scene 1 (0.0–1.6s): VO "read it sideways and the stack turns into" (0–3.29) — the host column arrives from the left third, already seven rows deep, assembled with a fast capped stagger; the peer region is blank paper.
Scene 2 (1.6–7.15s): "seven conversations across the wire" (3.73–7.13) — rows pair up **one per spoken beat**: arrow 7 draws across, peer row 7 lands on "seven" (3.73); arrow 6 draws, peer row 6 lands; down the list through "conversations" (4.28–5.70) and "across the wire" (5.70–7.13), so the last pair arrives in the back half. Each arrow runs the **full horizontal gap** between the two chambers — the arrow's travel is the argument, so it must be visibly long, not a stub. Layout: asymmetric 58/42, two equal-weight columns, 3 depth layers, hero axis at ≈ 806 so the top four rows sit in the readable band and the bottom three stay above y ≈ 1594.
Scene 3 (7.15–10.0s): "one layer, one partner, all at once" (7.47–10.71) — the seven arrows light together once (a single finite sweep, no loop), all peer chips now carrying their matched numbers, the word `sideways` settling into the top rail as the only display-type line in the frame.
Scene 4 (10.0–11.051s): held read of the full matrix — this is the frame's poster pose. Nothing moves but a phase-opposed low-amplitude jitter between the two columns (`sine-wave-loop`, left `sin(t)` / right `sin(t+π)`, so it never conveyor-belts). No exit: the harness `blur-crossfade` is the exit.
## Frame 7 — Land and hand off

- scene: the matrix clears to two stacked statements and a lavender pill pointing at the article
- duration: 9.131s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/07-land-and-hand-off.html
- type: cta
- persuasion: Callback (return to the hook's image) + Distillation
- beat: satisfaction + resolve
- blueprint: titlecard-reveal (Reproduce)
- focal: the instruction line "read it sideways"
- roles: instruction line = foreground subject · article title card = supporting · pill = supporting · field = background
- sfx: none

Reproduce: one clean title, exactly one restrained move per beat, then a still hold; the second
card chains in behind it on the same geometry, with no count-up and no stat. The signature
"low motion is the payload" is the point of this frame — it is the exhale after F6.

narrativeRole: Lands the instruction as a habit the viewer can use today, and hands off to the
article — naming a section P2 and P3 will not touch.
keyMessage: "Next time you see the diagram, read it sideways; all seven pairs side by side in
the article."

Scene 1 (0.0–1.5s): F6's matrix clears with a **soft wipe** and the two remaining beats are set on the cream field, centered, hero axis ≈ 806.
Scene 2 (1.5–4.4s): "next time you see the diagram, read it sideways" (0–4.32) — the instruction line slides up and crossfades into its final two-line form (`discrete-text-sequence`, one hand-off, one move), landing "sideways" at 3.44–4.32; the ghost of two columns and one horizontal arrow stays under it at ~18% ink, so the hook's image is still on screen while the words land.
Scene 3 (4.4–7.4s): "all seven pairs, side by side" (4.66–7.33) — the ghost columns brighten once, tracking each other across the gap, and the article card rises below the instruction line (title in display, one-line description in body).
Scene 4 (7.4–9.131s): "in the article" (7.47–8.79) — the CTA pill fills **lavender** `#F0D7FF` with ink text, the only lavender in the part and the only action fill. Frame holds still to the end; this is the only frame with real exit motion, and it is the last frame, so the hold simply ends.
## Budget and pacing check

| Frame | VO line | spoken words | VO duration (real) | running | words/sec |
| --- | --- | --- | --- | --- | --- |
| 1 | Line 1 | 13 | 7.168s | 7.17s | 1.81 |
| 2 | Line 2 | 14 | 6.656s | 13.82s | 2.10 |
| 3 | Line 3 | 19 | 8.704s | 22.53s | 2.18 |
| 4 | Line 4 | 17 | 9.963s | 32.49s | 1.71 |
| 5 | Line 5 | 21 | 10.667s | 43.16s | 1.97 |
| 6 | Line 6 | 20 | 11.051s | 54.21s | 1.81 |
| 7 | Line 7 | 18 | 9.131s | 63.34s | 1.97 |

122 words / 63.34s = 1.93 words per finished second — slower than `sdlc`'s measured 2.18 w/s, on
purpose: this part is the reader's first exposure to the sideways idea, and the flip needs air.
`SCRIPT.md`'s 61s estimate at 2.0 w/s is the tight version; the brief's 65s is the upper bound;
the rendered part lands at 63.34s, inside both. Durations above are the real Kokoro lengths at
`--speed 0.74` written back by `sync-durations.mjs`, and every Scene window in this file is paced
to them.

Grammar count: B × 6 (F1, F2, F3, F4, F5, F7) + A × 1 (F6). SFX marks used in this part: 2
(whoosh-soft on F3, tick on F4 ×4 stamps and F6 ×7 latches are single `fetch-sfx` assets, each
one mark in the ledger). Total series SFX budget is 4; this part spends 2.

## Frame pass — amendments recorded while authoring (all 7 frames now `status: animated`)

`ready` is not a value in `assemble-index.mjs`'s `FRAME_STATUSES` enum (`outline | built |
animated`); an unknown value silently parses back to `outline`. `animated` is the rung that
means "HTML written + motion added, ready to assemble", so that is what the 7 entries carry.

- **F2** the dotted crawl travels the whole ladder (rows 7→1) rather than stopping between 7 and
  6 — one arrow that recites the entire misreading is the beat — and the 7→6 boundary is
  annotated with the mono tag `7 ↓ 6` on "handing" (4.554). The `taught this way` callout was
  advanced 5.99 → 5.50 so the line clears its 1.40s readability floor inside the injected
  crossfade tail.
- **F4** the peer region is four hard-cut port stamps (`443 https / 80 http / 53 dns / 22 ssh`)
  stepping under the arrow head plus a `theirs` pill, not a second card: `fixed-anchor-cycle`
  sub-shape A, one pinned anchor and a discrete stepping region.
- **F5** camera locked all frame, three `nudge-curve` legs, stations lighting on arrival. The
  outer-label cycle and the `forwards` relabel run through a time proxy + reverse search
  (`discrete-text-sequence`), because GSAP's `text` property needs TextPlugin, which the pinned
  runtime does not bundle — `tl.set({text})` is a silent no-op here.
- **F6 grammar A HELD at the full seven rows** — no conversion to the B + peer-rail fallback.
  Measured in the rendered pixels at t=51.5s: host cards x 40..320, peer chambers x 780..1040,
  every arrow an ember run of **x 328..774 = 447px of travel** (the failure case was ~120px);
  peer chambers occupy y 502..1233 and the lowest peer-label glyph row is **y=1202, i.e. 392px
  above the y≈1594 caption cap**. Deviation: the `sideways` wordmark lands at 0.658 (on the
  spoken word, Scene 1) instead of settling in Scene 3, because the frame cannot be read
  without its name.
- **F7** Scene 1's "soft wipe" is delivered as a 0.9s crossfade into the 18%-ink ghost (no shader
  wipe at this layer), and the lavender pill lands at 7.05, ~0.4s ahead of "in the article", to
  give the closing line its 2.0s before the film ends.
- **Global**: every text use of the muted token was darkened `#8A8A80` → `#76766E` to pass WCAG AA
  on cream (`check` now reports 82/82 text checks passing); card fill stays `#FFFFFF` per the
  palette system above, which overrides `frame.md`'s "no pure white" at part level. Small tracked
  kickers and rail digits are marked `data-layout-ignore` (texture), everything the viewer must
  read is ≥28px. 4 transitions injected and verified (crossfade ×3, blur-crossfade into F6).
- **SFX: 0 marks mounted.** `audio_meta.json` carries `"sfx": []` and this pass was forbidden from
  regenerating audio, so F3's whoosh-soft and F4/F6's ticks are still unfetched. The part is
  narration + captions only. This is the one budgeted item the frame pass did not deliver.
