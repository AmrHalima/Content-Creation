---
format: 1080x1920
duration: 56s
message: "Layer 2 is where the seven-pair model leaks — and that is what makes it a troubleshooting tool"
arc: concept-explainer with how-to (the loose picture → the leaks → the permission → the pointing ladder → the ask)
audience: beginners who have seen the diagram and memorised the seven names
mode: autonomous
music: none
captions: en
---

# STORYBOARD — osi-layers-3-leaks

Part 3 of 3. The honest part plus the practical payoff. Frame numbering is canonical for this
part: `SCRIPT.md`'s `Frame N` labels map 1:1 onto `Frame N` here, in order. **Frames are not
built yet** — approved text only; `compositions/frames/*.html` are cloned from P1's validated
B-stage after P1's snapshot passes, per `BRIEF.md`.

## Order-independence (series rule: this part must stand alone)

Checked on paper before TTS. Required by `../../writing/osi-layers/series-bible.md` § 2.

**Check A — does any line presuppose P1 or P3?** No. Line 1 spends its first clause
re-establishing the sideways frame in its own words ("Every layer talks sideways, to the same
number on the other end") and only then says where it gets loose — so a viewer arriving here
first gets the frame before the caveat, and no earlier part is required. Line 2 opens on
Ethernet by name. Line 3 opens on ARP. Line 4 ("So the map leaks") concludes from F2–F3 inside
this part, which is the only "so" in the series. Line 5 opens on the viewer's own outage. Line 6
names a third article section, different from P1's and P2's.

**Check B — swap two claims, is the story still true?** Two swaps run:

- **Swap F2 ↔ F3** (Ethernet/Wi-Fi assumptions ↔ ARP at the seam). PASS. They are two parallel
  leaks, not a sequence; the frame that reads them ("So the map leaks") comes after both either
  way. Cost: F3 is the shorter, sharper leak, so leading with it slightly raises the abstraction
  before the concrete medium example lands — a pacing loss, not a truth loss.
- **Swap F4 ↔ F5** (the permission beat ↔ the pointing ladder). FAIL, and it is the one order
  this part depends on: F5's "Then when it breaks, you point" is what F4 buys, and F4's "Fine,
  because its job was never to describe hardware" reads as evasive if the payoff has not been
  shown yet. Order kept.

No swap creates a false claim. The load-bearing spine is only {F2, F3} → F4 → F5, with F2 and F3
interchangeable.

**Portrait grammar.** **B × 6, A × 0.** This part's argument is about a *boundary* — what sits on
the line between two bands, and where a symptom points — which needs the bands visible in one
column and the seam between them readable. Two chambers side by side would put the seam in the
wrong axis. So the matrix exception P1 uses is not reused here at all, and the densest frame is
F5 (three symptom chips pinning onto rows 7, 4 and 2 of one column). At frame-build time F5 gets
snapshotted at 1080x1920 and its three chip labels measured above the caption cap (~y 1594),
the same check P1's F6 gets; because F5 is grammar B on P1's already-validated stage, this is a
confirmation, not a risk.

## Video direction

Shared look and motion grammar for the part; per-frame Scene lines carry only the delta. Identical
to P1 and P2 by design — sibling projects, one series.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never invented):
  cream `#FFFFEB` ground, ink `#1A1A1A` type, surface-white cards with the 4px ink border, radius
  8. **`ember` `#FFA946` is the voltage**, and in this part it means specifically *the thing that
  is leaking or the row you should point at* — the dashed seam, the straddling ARP card's edge,
  one lit symptom chip at a time. **`lavender` `#F0D7FF` is the action fill**, F6's CTA pill only.
  The bands that are *intact* stay muted `#8A8A80` at ≤ 55% ink, so the leak is a colour event,
  not a caption. No `lime` / `teal` / `lavender-deep`.
- **Motion grammar + reveal model**: one camera, one grid, flat. Hard cuts and 0.35s crossfades;
  **no `rotateX/Y/Z` anywhere** (`frame.md`: flatness is load-bearing) — which is why
  `comparison-split` is unused in this part as in the others: its signature is mirrored book-open
  tilts (`split-tilt-cards`) and the pack forbids the tilt. Every entrance is a `fromTo`
  long-tail settle (`power3`, `expo.out` for a fast arrival), **no overshoot**. Reveals paced to
  the VO across the back ~50%. During a hold the only aliveness is **subtle jitter**
  (`sine-wave-loop`, low amplitude) on one held element; no lazy breathing, no back-half pan or
  push. One deliberate exception to the no-dash-dance rule: F3's seam dashes **step**, because the
  dashed line is the subject of the claim, and it steps a finite number of times on a spoken cue.
- **Rhythm / held-frame allocation**: F5 (the pointing ladder) is the energy peak and the busiest
  frame. **F4 is the deliberate held read** — a single statement card with three dashed leak ticks
  that stops moving at ~3s of 6s and stays stopped; that stillness is the concession ("fine"). F6
  is fully still. F1, F2, F3, F5 reveal to the VO throughout.
- **Caption keep-out**: bottom ~17% is the pill's; all content plans into the top ~83%, content
  caps at ~y 1594, centered hero beats anchor at y ≈ 0.42 × 1920 ≈ 806. Background fields
  (paper, hairline grid, scanlines) are exempt and full-bleed.
- **Negative list — never appears**: two side-by-side chambers (this part is B-only); the
  seven-row matrix (P1's payoff, not re-run here); the cable-retracts-into-radio morph (P2's
  payoff, not re-run here — Wi-Fi is drawn as a **contention queue** in F2, which is a different
  claim and a different picture); a "top-to-bottom" arrow anywhere; mnemonics; "it's just a
  model" or "just" anywhere; an apology for OSI; a live network capture, device mock, browser
  chrome, or real interface — every symptom shown is a typed line in a diagram, never a
  reconstructed UI; purple-blue "AI" gradient bokeh; gradient text; a redrawn logo; any on-screen
  claim the script does not make.
- **On-screen type is the hero, not the narration's echo.** The payload strings are checkable
  facts: `one wire, your schedule` / `shared air, wait your turn`, `who has 192.168.1.1?` inside
  a frame labelled `L2`, and the three symptom lines `no link` / `connection resets` /
  `certificate error`. Those stay verbatim from `series-bible.md` § 5–6, because this part's
  credibility is the point.

---

## Frame 1 — Where the picture gets loose

- scene: a host column with one arrow leaving the edge — and the far end of that arrow is visibly dashed
- duration: 9.749s
- poster: 8.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-gets-loose.html
- type: hook
- persuasion: Frame-then-fill (set the shape, then break one edge of it) + Common-belief vs reality
- beat: focus + unease
- blueprint: spatial-pan-stations (Adapt)
- focal: the dashed far end of the peer arrow
- roles: host column (7 rows, Layer 2 lit) = foreground subject · the peer arrow = foreground subject · dashed gap + question-mark peer stub = supporting · `L2` band edge = supporting · paper field = background
- sfx: none

Adapt: keep the single virtual camera traversing pre-placed labelled stations and centering each
with a callout; change it to one short lateral move along the Layer 2 row, **no zoom**, and let
the callout be the defect (the `gets loose` tag) rather than a fact. Same machinery as P1 F2 and
P2 F1, run sideways on the row this part is about — the stage is the series' continuity.

narrativeRole: Re-establishes the sideways reading for a first-time viewer of this part, then
immediately puts the camera on the place it fails — the whole part in one image.
keyMessage: "Layers peer across the wire; Layer 2's version of that picture has a loose end."

Scene 1 (0.0–1.6s): VO cue 1 "every layer talks sideways" — the seven-row column resolves in the
left 58% at ~55% ink, and the ember highlight enters on Layer 2's row only. Right 42% empty paper.
Scene 2 (1.6–5.4s): "…to the same number on the other end" — the camera **pans laterally**
(`viewport-change`, PAN mode) along row 2 as its arrow draws itself out of the chamber's right
edge (`svg-path-draw`); a matched `L2 ↔ L2` peer tag centers where the pan lands. Solid arrow,
clean, the promise stated honestly.
Scene 3 (5.4–8.2s): "layer two is where that picture gets loose" — **the last third of that
arrow breaks into dashes**, the peer tag's outline goes dashed with it, and a small `?` stub
fades up where the far end should be; a `gets loose` callout pops at the break. Ember moves from
the row onto the break, so the colour names the defect.
Scene 4 (8.2–10.0s): held read of the loose end; jitter on the dashed segment only. No exit
motion — the harness `cut` is the exit.

## Frame 2 — The two assumptions

- scene: two stacked fact cards inside one Layer 2 band, each stating what its medium assumes; three dots queue behind one slot
- duration: 9.877s
- poster: 10s
- transition_in: cut
- status: animated
- src: compositions/frames/02-two-assumptions.html
- type: feature_showcase
- persuasion: Comparison of two options + Concretization (an assumption becomes a schedule)
- beat: comprehension + recognition
- blueprint: kinetic-type-beats (Adapt)
- focal: the second card's queue diagram
- roles: card A (Ethernet) = foreground first beat · card B (Wi-Fi) = foreground second beat · three queuing dots + slot = supporting · the `same number` tag = supporting · dimmed bands above/below = background
- sfx: none

Adapt: keep the shape's spine — a flat, centred, bold-type shot where **the motion is the words
changing**, each short statement landing alone on a bare canvas as its own beat; change the
surface from pure type to one small invented diagram per statement (a straight wire / a shared
slot with a queue), and drop the spring-pop payoff ending — the payoff here is a plain `same
number` tag on a long-tail settle, not a pop.

narrativeRole: The first leak, and the most physical one: two media that cannot both be described
by one box because their assumptions about the medium are opposite.
keyMessage: "Ethernet assumes a wire you own; Wi-Fi assumes shared air you queue for — and the
model calls both Layer 2."

Scene 1 (0.0–1.6s): VO cue 1 "Ethernet is a wire" — one card rises in the upper third (hero axis
≈ 806) with the mono line `one wire, your schedule` and a straight solid stroke drawn across it
(`svg-path-draw`). Everything else is bare cream; no column yet.
Scene 2 (1.6–5.0s): "…you use when you like" — the card's label `Ethernet` settles, and the
stroke's single-owner reading is emphasised by one small solid dot riding it (`live SVG
internals`, `svg-icon-enrichment`, finite travel).
Scene 3 (5.0–8.6s): "Wi-Fi is a shared radio where you wait your turn" — the first card **slides
up as a demoted band** and the second card fills the reading position: label `Wi-Fi`, mono line
`shared air, wait your turn`, and **three dots queueing behind one open slot**
(`center-outward-expansion`, starting partially-spread and going direct-into-slot) with the slot
pulsing once on a spoken cue. The contention picture is why this frame does not reuse P2's
radio-arc morph: this is about whose turn it is, not about the shape of the antenna.
Scene 4 (8.6–11.0s): both cards stacked, one `same number` tag pinning them into the Layer 2 band
they both claim; reveals complete in the back half, then a held read with jitter on the queuing
dots only.

## Frame 3 — The seam

- scene: ARP's card straddles the line between Layer 3 and Layer 2 and refuses to drop into either box
- duration: 8.661s
- poster: 7s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-the-seam.html
- type: feature_showcase
- persuasion: Counterexample (here is when it breaks) + Progressive disclosure
- beat: puzzlement + "aha"
- blueprint: compose
- focal: the straddling ARP card
- roles: ARP card = foreground subject · the two band outlines (L3 above, L2 below) = background structure at full ink · the seam line = supporting · question/reply dot pair = supporting · `fits in neither box` tag = supporting
- sfx: none

Compose: the beat is one object that will not resolve into either of two containers — no
blueprint in the menu casts that. Built from the vocabulary: two band outlines as stacked
full-width strips, an **SVG self-draw** (`svg-path-draw`) seam between them, the ARP card
entering by a restrained settle (`spring-pop-entrance` in its smooth register, no overshoot) and
stopping **on** the line, and a two-dot call-and-response (`who has 192.168.1.1?` → reply) via
`discrete-text-sequence` so the question is legible as a Layer 3 sentence written inside a Layer 2
envelope. No camera move at all: the frame is a static diagram whose one event is a card
declining to land.

narrativeRole: The second, sharper leak — the one that shows the boxes are not exhaustive — and
the frame the campaign's honesty bar was written for.
keyMessage: "ARP asks a Layer 3 question inside a Layer 2 frame; the map has no shelf for it."

Scene 1 (0.0–1.5s): VO cue 1 "ARP asks a layer three question" — the two bands exist as outlines,
`L3` above and `L2` below, seam drawn; the ARP card enters from the top, ink-on-white, ember edge
lit, carrying the mono line `who has 192.168.1.1?`.
Scene 2 (1.5–4.2s): "…inside a layer two frame" — the card **stops on the seam**, half in each
band. Nothing resolves it. A second, smaller `L2` envelope outline is authored around the card's
lower half, on the spoken word "frame", so the two boxes visibly disagree about the same object.
Scene 3 (4.2–6.4s): "it fits in neither box" — the reply dot arrives on the L2 side, the answer
text on the L3 side, a `fits in neither box` tag settling under the seam; the bands' own labels
step brighter once, as if each claims it, then hold.
Scene 4 (6.4–8.0s): held read of the straddle. Jitter on the card only. The seam stays the
frame's spine.

## Frame 4 — Why that is allowed (deliberate held frame)

- scene: one statement card on bare cream with three dashed leak ticks under it, and nothing else
- duration: 7.04s
- poster: 5s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-the-map-leaks.html
- type: benefit_highlight
- persuasion: Distillation (compress the part to one line) + Signposting
- beat: clarity + relief
- blueprint: titlecard-reveal (Adapt)
- focal: the statement "its job was never to describe hardware"
- roles: statement card = foreground subject · three dashed ticks = supporting · field = background
- sfx: none

Adapt: keep the calm breather discipline — one clean title revealed with exactly one restrained
move, then a still hold, low motion as the payload; change the reveal from a wipe-away-to-lockup
to a single slide-up, and cast the three dashed ticks as the shape's "one stat" (they arrive,
they do not animate on). This is the part's designated held frame: F5 gets to be busy because
this one is quiet.

narrativeRole: Pre-empts the dismissal ("so the model is useless") with the honest answer: the
map was never a hardware description. It is the hinge from the leak to the tool.
keyMessage: "The leaks are a category error, not a defect — and conceding them is what lets the
map be used."

Scene 1 (0.0–1.5s): the frame clears to bare cream, hairline grid only; VO "so the map leaks" —
one statement card slides up into the upper third (hero axis ≈ 806), one move, display type:
`the map leaks`.
Scene 2 (1.5–3.4s): "fine" — the card's border steps once, and three short **dashed** ticks fade
up beneath it in a capped stagger (the three leaks this part showed, referenced as dashes rather
than re-explained). No diagram, no labels, nothing re-taught.
Scene 3 (3.4–6.0s): "because its job was never to describe hardware" — the clause resolves into
the card as a second line, and the frame **stops**. Held read to the end, jitter only. The
stillness here is the concession's tone: no drama, no motion arguing back.

## Frame 5 — Point instead (the ladder)

- scene: a blank request line on the right and three symptom chips pinning onto rows 7, 4 and 2 of the column
- duration: 13.205s
- poster: 12s
- transition_in: cut
- status: animated
- src: compositions/frames/05-point-instead.html
- type: feature_showcase
- persuasion: Numbered enumeration + Demonstration (the method run on three real symptoms)
- beat: confidence + momentum
- blueprint: grid-card-assemble (Adapt)
- focal: the three symptom chips finding their rows
- roles: host column (7 rows) = foreground subject · three symptom chips = the arriving items · the arrow leaving the edge = supporting · the unanswered request line = supporting · field = background
- sfx: click-soft

  (Exactly one cue token — the parser splits this field on commas and resolves by
  exact bundled-library key, so any prose here books extra marks or fails outright.
  `click-soft` is the dry tick P1 stamped with. It is mounted three times inside this
  frame by the root audio layer, one asset and one ledger mark: the series' fourth and
  final SFX, closing the budget in `series-bible.md` § 8.)

Adapt: keep the staggered self-assembly of list items into slots and the hold — the signature move
is the column filling itself; change the items from feature tiles into three symptom chips that
each land on a **different row of the same column** (7, 4, 2, top-down), which inverts the usual
reading order and makes the ladder a pointing instrument rather than a syllabus. Layout: a
vertical step list on one stage, no camera move after the chips are placed.

narrativeRole: The payoff that justifies the part — the corrected model's practical use — and the
only frame in the series where the viewer is handed a method instead of a picture.
keyMessage: "A symptom tells you which layer's peer conversation is broken; point from the bottom
up and act at that layer."

Scene 1 (0.0–2.0s): VO cue 1 "then when it breaks, you point" — the seven-row column resolves at
full ink, left 58%, hero axis ≈ 806; to its right a bare unanswered request line
`GET … (waiting)`. Nothing lit yet.
Scene 2 (2.0–5.4s): "a dead link sits at the bottom" — the first chip `no link` **assembles into
row 2's slot** (`center-outward-expansion`, direct-into-slot), one `tick`, and that row takes the
ember. The chips land top-of-list-first-then-bottom, so the ladder is read bottom-up on screen
while the VO says "bottom".
Scene 3 (5.4–8.4s): "connections that reset are the transport's problem" — the second chip
`connection resets` snaps into row 4's slot with its own tick and ember; row 2 demotes to muted
so only one live row exists at a time (the ember rule: at most one element per frame holds it).
Scene 4 (8.4–11.0s): "a bad certificate is the top" — the third chip `certificate error` lands on
row 7. The three rows keep their ink, the three arrows now leave the frame edge from exactly the
rows that have symptoms, and the request line is still waiting.
Scene 5 (11.0–13.0s): **held read of the three pins** — this is the frame's poster pose and the
part's takeaway image. All reveals are complete (the last chip landed at ~11s of 13s, so the back
third is the reading, not the building); jitter on the waiting request line only. No exit motion.

## Frame 6 — Land and hand off

- scene: the three pinned rows shrink into one line and the lavender pill points at the article
- duration: 7.616s
- poster: 7s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/06-land-and-hand-off.html
- type: cta
- persuasion: Callback (return to the hook's image) + Distillation
- beat: satisfaction + "now I get it"
- blueprint: titlecard-reveal (Reproduce)
- focal: the statement line "a place to point"
- roles: statement line = foreground subject · the three chips, demoted = supporting · article title card = supporting · pill = supporting · field = background
- sfx: none

Reproduce: the shape's own chain — a statement card, then a CTA card, seamed by one instant
hand-off, ending on a held card; exactly one restrained move per beat, stillness as the payload.
Kept as-is except the terminating element: the series has no logo to hold, so the chain
terminates on the article card.

narrativeRole: Lands the practical value and hands off to the **third** distinct article section
(where it leaks + the pointing method), so the three parts point at three different parts of one
article.
keyMessage: "An outage gets a place to point; the leaks and the method are written out in the
article."

Scene 1 (0.0–1.8s): VO "an outage gets a place to point" — F5's column contracts to a soft ghost
at ~20% ink, the three pinned chips visible inside it, and the statement line slides up over it
(one hand-off, `discrete-text-sequence`); the ghost is the callback, kept deliberately faint so
the words lead.
Scene 2 (1.8–5.4s): "instead of a shrug" — the line settles, one small shrug-shaped dashed curve
draws itself under it (`svg-path-draw`) and then **dissolves out**, so the joke is drawn and
undrawn in one motion. Jitter only elsewhere. This is the part's only visible humour, and it is
allowed because the line says it.
Scene 3 (5.4–8.0s): "where it leaks is in the article" — the article card rises (title `Where the
model leaks — and what to point at when something breaks`, one-line description), and the CTA pill
fills **lavender** `#F0D7FF` with ink text (the part's only lavender, the only action fill). Frame
holds still to the end; the only real exit motion in the part lives here, and the hold simply ends.

---

## Budget and pacing check

| Frame | VO line | spoken words | storyboard duration | words/sec |
| --- | --- | --- | --- | --- |
| 1 | Line 1 | 20 | 10.0s | 2.00 |
| 2 | Line 2 | 21 | 11.0s | 1.91 |
| 3 | Line 3 | 16 | 8.0s | 2.00 |
| 4 | Line 4 | 13 | 6.0s | 2.17 |
| 5 | Line 5 | 26 | 13.0s | 2.00 |
| 6 | Line 6 | 18 | 8.0s | 2.25 |

114 words / 56s = 2.04 w/s — the tightest-paced part in the series, and it earns it: the material
is a list plus a method rather than a new idea. `SCRIPT.md`'s header says 114 words / ≈57s at
2.0 w/s against a 55s target; this table is the render expectation (56s). No line exceeds the
part's own pacing (F5 is 5 scenes for 26 words, which is where the VO-sync step will most likely
stretch it — expect ~14s and a 57s landing, inside the brief's ±10%).

Grammar count: B × 6, A × 0. SFX marks: 1 (tick on F5, three uses of one asset). Series total
SFX = P1 2 + P2 1 + P3 1 = **4**, exactly the budget in `series-bible.md` § 8.
