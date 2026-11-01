---
format: 1080x1920
duration: 78s
message: "The Repository Pattern pulls the use case's decisions apart from the storage layer's, and the whole of it is the direction the dependency points"
arc: concept-explainer with process (the tangle → the roles → the dependency direction → the sketch → the two failures → the cost)
audience: backend developers who have already written CRUD and want the mechanics and the tradeoffs named precisely
mode: autonomous
music: none
captions: en
---

# STORYBOARD — repository-pattern (English master)

Neutral structural explainer. The user chose this angle over the house opinionated-thesis
default, and it is honored: no invented contrarian take. Per `.agents/product-marketing.md`
Learnings (this audience skips phase-by-phase recitals), the film carries itself with **one
sharp idea per frame at high density** instead of a thesis.

Frame numbering is canonical: `SCRIPT.md`'s `Line N` maps 1:1 onto `Frame N`, in order.
7 frames / 148 spoken words.

## Order and dependence

Checked on paper before any TTS was spent.

- **F1 → F2 is load-bearing.** F2 says "splits *that*"; it needs the tangle on screen one frame
  earlier. Kept.
- **F3 depends on F2**, because it reverses the direction the chambers were just drawn in.
- **F4 ↔ F5 swap test** (the code sketch ↔ the aggregate seam): PASS on truth, FAIL on
  rhythm. Neither claim needs the other, but F4's `the line` is what F5 and F6 use as the thing
  you can put your hand through, so F4 goes first.
- **F5 ↔ F6 swap test** (the two failures): PASS. They are parallel evidence — one is *where*
  the seam goes, the other is *what leaks through* it. Kept in this order because F6 physically
  reuses F4's pinned interface panel, and F5 clears the stage first.
- **F7 depends on nothing before it** except the vocabulary. It is the exhale.

The sequence is load-bearing in exactly two places (F1→F2→F3) and free after that.

## Video direction

The whole film shares one look and one motion grammar. Per-frame Scene lines carry only delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never
  invented). `--ground` cream `#FFFFEB` is the paper; `--ink` `#1A1A1A` is type; chambers are
  surface-white `#FFFFFF` on cream with a **3px ink border** (the brand signature's
  video-scale reading of `design.md`'s 2px, exactly as `videos/osi-layers-1-sideways` shipped
  it), radius 12. Warm navy `#181715` (`frame.md` `navy`) is reserved for the code surface only,
  with a `navy-elev #252320` title bar and a `cream@14%` hairline. **Two role colors, each with
  one meaning all film:** `lavender #F0D7FF` **is the abstraction** — it fills the contract /
  interface surface wherever it appears (F2, F4, F6, F7) and nowhere else; **`ember #FFA946`
  is the live element of this beat** — the arrow that just reversed, the boundary that will not
  close, the storage chip that is being swapped out. **At most one ember element per frame**,
  outside the code surface. Inside a navy code panel, `frame.md`'s fixed syntax decoration
  applies and is exempt from that count: keywords coral, strings teal `#5DB8A6`, numbers amber
  `#E8A55A`. Muted text is `#76766E`, **not** `#8A8A80` — the lighter token fails AA on cream
  (osi1 shipped 17 contrast findings before darkening it).
- **Motion grammar + reveal model.** One camera, one grid, hard cuts plus 0.35–0.5s crossfades;
  **no rotation anywhere** and **no 3D** (`frame.md`: flatness is load-bearing; elevation is a
  hairline, never a cast shadow). Every entrance is a `fromTo` long-tail settle (`power3.out`,
  `power2.out` on short arrivals) with **no overshoot or bounce**. Reveals are **paced to the VO
  across the back ~50% of each frame** — nothing front-loads; at t=0 only what the line is
  saying at that instant exists. During a hold the only allowed aliveness is **subtle jitter**
  (`sine-wave-loop`, ≤2px, finite) on one held element; no lazy breathing, no back-half pan or
  push. Structural marks are drawn, not faded: `svg-path-draw` for the seam rule, the aggregate
  boundary and the dependency arrows. In-place label swaps use the **time-proxy + reverse-search
  discrete sequence** — there is no TextPlugin in the shipped GSAP runtime, so `tl.set({text})`
  and `tl.to({text})` silently no-op (`.agents/product-marketing.md` Learnings, 2026-10-22).
- **Layout is stacked, not paired.** Portrait 1080 wide: chambers stack vertically down the
  centre column; the two-column seam diagrams become a top/bottom pair joined by a vertical
  arrow. (Precedent note: `osi-layers-1-sideways` overrode `videos/sdlc`'s "never side-by-side"
  because its thesis was a horizontal relationship. Here the relationship is a **dependency
  direction**, which reads better down the frame's long axis — so this film stacks, and says so
  rather than inheriting the rule by accident.)
- **Rhythm / held-frame allocation.** Energy peaks at **F3** (the arrow reverses) and **F6**
  (the leak crosses the line). **F7 is the deliberate held read** — by ~6s of its 10.9s the
  storage swap is done and nothing moves but a jitter on the statement. F1, F2, F4, F5 keep
  revealing to the VO the whole way through. No frame is allowed to front-load and then idle.
- **Caption keep-out.** The bottom ~17% belongs to the caption pill. All F1–F7 content is
  planned into the top ~83%: nothing load-bearing below **y ≈ 1594**; the hero axis of any
  centred beat sits at y ≈ 0.42 × 1920 ≈ **806**. Background fields (paper, hairline grid) are
  exempt and stay full-bleed.
- **Legibility floor.** Anything the viewer must read — including every code line, since the
  code IS the argument here — sits at **≥ 2.8cqw (≈ 30px at 1080 wide)**, and code lines are cut
  to ≤ 34 characters so they never shrink to fit. JetBrains Mono kicker/index chrome may run
  1.35–1.7cqw, and every such element carries `data-layout-ignore` so it is treated as texture
  rather than a reading target.
- **Negative list — never appears:** a database cylinder, a gear, a cog, an atom, or any other
  stock tech icon (the film is type and structure, not iconography); a browser or IDE window
  with a cursor, a real screenshot, or any captured UI (nothing was captured — every visual is
  invented); the beginner card "what is a repository?"; "seamless / robust / powerful / unlock /
  streamline"; an em dash in narration or on-screen text; the contrast reveal "it's not X, it's
  Y"; a gradient fill or a box shadow; an on-screen claim the script does not say, or a spoken
  claim the picture never shows; three feature cards in a row; a UML stick figure.
- **On-screen type is the hero, not the narration's echo.** No line compresses the VO into a
  sentence. What is on screen is the *thing itself* — real signatures (`findById(id) → Order`,
  `save(order)`), real table names (`orders`, `order_lines`, `shipping_address`), and short
  mono labels (`contract`, `implementation`, `storage`, `1 repo per table`). The one exception
  is F7, where the statement IS the payload.
- **No brand end card, no CTA.** The film ends on the tradeoff, not on an ask. There is nothing
  to sell here and the brief did not ask for a link.

---

## Frame 1 — Three layers wearing one name

- scene: one method body assembles line by line on a navy code surface, and each line gets tagged with the layer it really belongs to
- duration: 10.197s
- poster: 8.5s
- transition_in: cut
- status: animated
- src: compositions/frames/01-three-layers.html
- type: hook
- persuasion: Concretization (the abstraction is introduced as a specific method body, not a definition) + Recognition (the viewer's own code, on screen)
- beat: recognition, then a flicker of "huh, that's mine"
- blueprint: grid-card-assemble (Adapt)
- focal: the method card
- roles: method card (navy code surface) = foreground subject · code lines = foreground text, arriving staggered · per-line layer tags (`use case` / `domain` / `storage`) = supporting · "3 layers · 1 name" lockup = supporting · paper field + hairline grid = background (full-bleed, unlit)
- sfx: none

Adapt: keep the staggered self-assembly into a vertical list and the hold; change tiles into
the lines of ONE method body inside one bordered surface, and tag each line instead of
highlighting it. The count in the lockup is the frame's claim, so it lands last.

narrativeRole: Grounds the whole film in an object the viewer has written, so "splits that" in
F2 has a referent on screen. Establishes the problem without naming the pattern yet.
keyMessage: "One method is quietly doing the work of three layers."

Scene 1 (0.0–1.2s): full-bleed cream paper field, hairline grid fades up; the navy card's title
bar exists with the mono filename `order_service`, and the signature line
`place_order(cmd)` types in under it. Nothing else. (VO cue 1 "A service method".)
Scene 2 (1.2–5.6s): the three body lines **stagger-assemble** one per spoken beat — `db.query(...)`
on "builds its own query" (≈1.9), `Order(row)` on "opens its own session" (≈3.6), `db.commit()`
on "maps its own rows" (≈5.2), each at `power3.out`, capped stagger so the block reads as one
method writing itself, not three separate slides. Layout: centred card, ~78% of frame width,
3 depth layers (field / card chrome / code text), hero axis ≈ 806.
Scene 3 (5.6–8.6s): VO turns to "is three layers wearing one name" — the three layer tags arrive
on the card's right edge, one per word of "three layers", hairline leader lines to the line each
one names (`discrete` arrivals, not a tween).
Scene 4 (8.6–11.9s): the **ember** lockup `3 layers · 1 name` settles at the card's lower-left on
"one name" (≈11.0) — the frame's single ember element; subtle jitter on the held card from 11.0
to the cut. Nothing else moves.

## Frame 2 — The pattern splits that

- scene: the method card divides into three stacked chambers and each one gets its role named
- duration: 12.715s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-three-roles.html
- type: product_intro
- persuasion: Distillation (the same code, re-sorted into three named responsibilities) + Concretization
- beat: order arriving out of mess
- blueprint: compose (continuous transformation, per `types/explainer.md` — each state morphs out of the previous so the viewer never loses the thread to a cut)
- focal: the contract chamber
- roles: three stacked chambers (`contract` / `implementation` / `consumer`) = foreground · the migrating code lines = supporting (they travel into the middle chamber) · lavender fill = supporting (it marks the abstraction, always and only) · field = background
- sfx: none

Compose: no blueprint casts "one object sorting itself into three bands". Built from
**`center-outward-expansion`** for the chamber split growing out of the card's own edges, plus
`discrete` label arrivals; the code lines move, the borders draw.

narrativeRole: Names the anatomy — the interface, the implementation, the consumer — as the
three roles the tangle decomposes into. This is the brief's "anatomy" beat.
keyMessage: "A contract in domain language, an implementation that owns the database, a consumer that only sees the contract."

Scene 1 (0.0–2.0s): the card from F1 holds, dimmed to ~55% ink; VO "The repository pattern
splits that" lands at ≈0.9 — the card's three bands separate on the y-axis with a
`power3.out` settle, and the borders **self-draw** (`svg-path-draw`) into three chambers.
Scene 2 (2.0–6.4s): the three role names arrive one per spoken clause across the back half —
`contract` on "written in domain language" (≈2.6), `implementation` on "owns the database"
(≈4.6), `consumer` on "only sees" (≈5.9). The contract chamber fills **lavender** here —
first and only appearance of the abstraction color as a fill, and it stays that way all film.
The code lines travel into the middle chamber (they are still the same lines, now placed).
Scene 3 (6.4–9.4s): each chamber gains one mono sub-line in its own vocabulary — `findById → Order`
/ `session, dialect, pool` / `never names a table` — arriving as discrete states, one per beat.
Scene 4 (9.4–11.4s): held read of the three-band stack; jitter on the contract chamber only.
No exit motion — the harness crossfade is the exit.

## Frame 3 — Watch the dependency

- scene: the arrow between the domain above and storage below draws downward, then a second arrow draws upward into the contract and the first is demoted to a struck ghost
- duration: 10.283s
- poster: 7.5s
- transition_in: cut
- status: animated
- src: compositions/frames/03-dependency.html
- type: feature_showcase
- persuasion: Demonstration (the rule is shown happening to the diagram, not asserted) + Frame-then-fill (draw the naive direction first, then correct it on screen)
- beat: the sharp click of the inversion
- blueprint: compose
- focal: the reversing arrow
- roles: the upward arrow = foreground subject (the ONE ember element) · downward arrow = supporting (drawn, then struck and demoted to 18% ink) · consumer/contract chamber = background (top) · storage chamber = background (bottom, dimmed) · `imports nothing` mono tag = supporting
- sfx: whoosh-short

Mark 1 of 2 for the whole film, one mount only: it lands on the reversal at local t=6.54
(root offset 25.451).

Compose: the beat is one arrow losing to another arrow. Built from **`svg-path-draw`** for both
arrows (the second draws over the first's route, reversed) and a `discrete` strike-through on
the loser. No rotation anywhere: the reversal is a new draw, not a spin of the old element.

narrativeRole: The frame that says what the pattern actually *is*. Everything else is plumbing
around this one rule — infrastructure answers to an interface the domain owns.
keyMessage: "The implementation points up at a contract the domain owns, so the domain never names a table."

Scene 1 (0.0–2.4s): two chambers from F2 survive — contract on top, storage below — everything
else clears. VO "Watch the dependency" (0.0–1.4): the two chambers are pinned, the gap between
them is empty paper. Layout: top chamber y ≈ 470, bottom chamber y ≈ 1090, the arrow corridor
runs down the centre at x = 540; hero axis ≈ 806 sits in the corridor, which is where the
argument happens.
Scene 2 (2.4–5.6s): "the implementation answers to a contract the domain owns" (≈2.3–5.6) — the
**naive downward arrow draws first** (domain → storage, ink, 3px) because that is the reading the
viewer has, and it is labelled `imports` in mono. It is the frame's counter-reading, shown so it
can be corrected, exactly as osi1's F2 performed the wrong reading before flipping it.
Scene 3 (5.6–8.4s): "so nothing in the domain names a table" (≈5.6–8.4) — the **ember upward
arrow** self-draws from the storage chamber's top edge into the contract chamber's bottom edge,
and the naive arrow is struck through and demoted to 18% ink in the same beat. The reversal is
where SFX mark 1 lands. The `imports nothing` tag settles beside the contract chamber on
"names a table" (≈7.9).
Scene 4 (8.4–10.4s): held read — the ember arrow still, the ghost struck, jitter on the contract
chamber only. The frame unmounts on the cut.

## Frame 4 — The contract is two lines long

- scene: one long code sheet travels upward past two navy panels — the interface, then the implementation — and stops on the hairline seam between them
- duration: 10.048s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-the-sketch.html
- type: feature_showcase
- persuasion: Demonstration (show the real signatures) + Progressive disclosure (read the top, then travel)
- beat: "that's all it is" — the relief of smallness
- blueprint: transcript-scroll-artifact-reveal (Adapt)
- focal: the interface panel
- roles: interface panel (lavender-edged, pinned once it arrives) = foreground subject · its two signatures = foreground text · the seam rule + its label `the line` = supporting (the artifact) · implementation panel = supporting (revealed in the back half) · field = background
- sfx: none

Adapt: keep "travel vertically along one long content surface, reading the work as evidence,
then land on one artifact"; change the artifact from a generated deliverable to **the seam
itself** — the drawn hairline the two panels share. Deviation recorded below: the traversal is
carried by the panels moving, so the camera never pans (`motion-language`: no back-half pan
disrupting the sightline).

Note (registry): `npx hyperframes add code-typing` and `--query "code snippet panel"` both
failed here — the registry host is unreachable and the item files are not cached. The code is
therefore hand-set on `frame.md`'s own `code-surface` component (warm-navy body, `navy-elev`
title bar, mono filename chip, cream@14% hairline, fixed syntax decoration coral/teal/amber),
which is the preset's documented fallback: "hand-author only when no block covers the motion you
need."

narrativeRole: Pays the brief's "code sketch" beat, and makes the size of the contract the point
— the interface is two methods, not a framework.
keyMessage: "Find an order by id, save an order; every connection and dialect detail sits on the far side of that line."

Scene 1 (0.0–1.8s): the sheet's top block arrives — the interface panel, title bar `orders`,
lavender hairline edge. VO "Find an order by id" (≈1.0): the first signature
`findById(id) → Order` writes in, line by token, `discrete` states.
Scene 2 (1.8–5.4s): "Save an order" (≈2.6): the second signature `save(order)` writes in. The
panel is now complete and **pinned — it never moves again for the rest of the film's life of this
frame.** The claim "that is the whole contract" is carried by the panel's smallness, not by a
label.
Scene 3 (5.4–8.6s): "every connection and dialect detail" (≈5.6–7.6) — the sheet **travels
upward by element motion** so the implementation panel enters from below: title bar
`orders_pg`, lines `open session`, `SELECT … orders`, `map → Order`, `commit` (syntax-decorated,
each ≥ 2.8cqw). A finite highlight band sweeps its third line while the interface dims ~18% —
`code-highlight`'s intent, hand-built since the block would not install.
Scene 4 (8.6–10.9s): "on the far side of that line" (≈9.6): the **seam rule draws horizontally
between the two panels** (`svg-path-draw`, 3px ink) and the mono label `the line` settles on it —
the frame's one ember element. Held read, jitter on the seam label only.

## Frame 5 — The seam goes in the wrong place

- scene: three table chips each sprout their own repository card, and the dashed aggregate boundary drawn around them will not close
- duration: 10.517s
- poster: 9s
- transition_in: cut
- status: animated
- src: compositions/frames/05-per-table.html
- type: pain_point
- persuasion: Demonstration by failure (build the wrong thing correctly and let it be wrong) + Concretization (real table names, real generated method names)
- beat: recognition of a codebase the viewer has seen
- blueprint: overwhelm-surround (Adapt)
- focal: the three repository cards
- roles: table chips (`orders` / `order_lines` / `shipping_address`) = background row · repository cards = foreground (three of them, each mirroring its table's name) · dashed aggregate boundary = supporting (it draws and fails to close — the frame's argument) · `1 repo per table` tag = supporting (the ember element) · the contract chamber = background (dimmed, being buried)
- sfx: none

Adapt: keep accumulation-then-elements-close-in-from-all-sides; change "recognizable product
surfaces" into table/repository pairs, and change the claustrophobic crowd into **the schema
surrounding the domain chamber** — the visual is literally "the schema becomes your domain
model". No avatar morph (there is no character in this film).

narrativeRole: The first of the two named failures, and the one practitioners meet first: the
repository drawn at table granularity rather than at the aggregate.
keyMessage: "Repository per table and the schema quietly becomes your domain model."

Scene 1 (0.0–1.6s): VO "Put the seam on a table" (0.0–1.6) — the contract chamber carries in
from F4 at the frame's upper third and is immediately demoted to ~35% ink; the three table chips
arrive below it, `center-outward-expansion`, spaced down the centre column.
Scene 2 (1.6–6.6s): "instead of an aggregate" (≈1.6–3.1) — the three repository cards
**stagger-assemble**, one per chip, and each one's name visibly inherits its table
(`orders_repo.save`, `order_lines_repo.save`, `shipping_repo.save`) on "and the schema"
(≈3.4–4.6); the name-match is the reveal, drawn as three hairline leader lines. "quietly becomes
your domain model" (≈4.6–6.6) — the chips' mono sub-labels swap by `discrete-text-sequence` from
table names to the repo names, in place, so the two vocabularies are shown collapsing into one.
Scene 3 (6.6–9.2s): "one repository per table" (≈9.2 is late; land the tag on "per table"):
the **dashed boundary draws** a rounded rectangle around all three aggregates and visibly
**fails to close** — the last edge stops short with a 60px gap. This is the consistency boundary
that no longer exists, and it is the frame's whole claim in one stroke.
Scene 4 (9.2–11.4s): the ember `1 repo per table` tag lands; the three cards creep ~24px toward
the buried chamber above (finite `nudge-curve`, not a loop) and stop. Held read on the crowd.

## Frame 6 — The caller is back inside

- scene: the pinned interface panel gains two leaked members and a line draws from them straight down past the seam into storage
- duration: 8.683s
- poster: 7s
- transition_in: cut
- status: animated
- src: compositions/frames/06-the-leak.html
- type: pain_point
- persuasion: Demonstration (the leak is drawn as a path the caller can actually walk) + Reduction (the abstraction is shown to be decoration)
- beat: the wince of having done this
- blueprint: fixed-anchor-cycle (Adapt)
- focal: the pinned interface panel
- roles: interface panel = foreground subject (pinned once, never moves — sub-shape A exactly) · the two leaked members = the cycling region (hard-cut states, not a scroll) · the crossing line = supporting (the argument: it passes THROUGH the seam) · the caller chip = supporting (it travels to the far side) · storage chamber = background (bottom)
- sfx: click-soft

Mark 2 of 2 for the whole film — ONE asset, mounted twice (the two stamps at local t=0.94 and
t=2.74; root offset 59.713). Two mounts of one file is one ledger mark, the osi1 convention.

Adapt: keep one element pinned that never moves while the adjacent region steps through discrete
hard-cut states; change the cycling region from peer stamps to **two interface members that must
not exist**, and cap the states at 2 — the claim is not "there are many leaks" but "there are the
two famous ones."

narrativeRole: The second named failure: an interface that leaks the mechanism, which is how a
repository becomes decoration while still looking like a repository.
keyMessage: "Hand back a query object or a commit call and the caller is back inside the database, just further away."

Scene 1 (0.0–1.4s): the interface panel from F4 returns **in the same place** (the seam geometry
is reused, so the viewer recognises the room), storage chamber parked below the seam line. VO
"Return a query object" begins at ≈0.6.
Scene 2 (1.4–5.0s): the two leaks **stamp as hard-cut states** on their own words, one `click-soft`
each: `find(where: Query) → Query[]` at ≈1.6 on "a query object", `commit()` at ≈3.6 on "a commit
call". The panel does not move; only the region beneath its two honest methods grows. Each stamp
arrives with a per-state width set discretely, never tweened.
Scene 3 (5.0–7.4s): "the caller is back inside the database" (≈5.2–7.4) — a hairline **crossing
line draws from the newest stamp down through the seam rule and into the storage chamber**
(`svg-path-draw`), and the caller chip `service` travels along it to the far side. This is the
frame's single **ember** element and the reversal of F3's arrow: here the dependency points the
wrong way again, in front of the viewer.
Scene 4 (7.4–9.8s): "just further away" (≈8.0–9.5) — the panel's lavender edge demotes to a plain
ink hairline (the abstraction is now decoration) and the mono tag `decoration` settles. Held read,
jitter on the caller chip only.

## Frame 7 — What it costs, and when it pays

- scene: the world clears to a two-line statement, one storage chip swaps out beneath an unmoving consumer chamber, and the frame holds
- duration: 9.579s
- poster: 8.5s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/07-what-it-costs.html
- type: benefit_highlight
- persuasion: Distillation (the film compressed into a condition and a price) + Honest Cost (naming what the viewer has to pay is what makes the claim credible to this audience)
- beat: respect for the viewer's judgement
- blueprint: titlecard-reveal (Adapt)
- focal: the two-line statement
- roles: statement lines (EB Garamond display) = foreground subject · consumer chamber = supporting (it does not move — that is the point) · the swapping storage chips (`sql` → `documents`) = supporting (the one moving thing, and the frame's ember) · `the price` mono tag = supporting · field = background
- sfx: none

Adapt: keep one clean title, exactly one restrained move per beat, then a still hold; change the
single move from a reveal into **the swap the pattern exists to make cheap** — storage changes,
the use case does not. The signature "low motion is the payload" is the point of this frame: it
is the exhale after F6.

narrativeRole: Lands the brief's "where it hurts" honestly — a condition under which the pattern
pays and the price that is always paid — and ends on the tradeoff rather than a slogan.
keyMessage: "It pays when storage changes apart from the use case; the price is mapping code you write twice."

Scene 1 (0.0–1.8s): F6's world clears with a 0.9s crossfade into the cream field; the first
statement line rises into the upper third (hero axis ≈ 806) — `It pays when storage changes
apart from the use case`, EB Garamond 400, sentence case, negative-tracked. No second element on
screen yet.
Scene 2 (1.8–5.2s): "apart from the use case" (≈2.6–4.2) — a small consumer chamber pins above
the statement's baseline and a storage chamber sits below it; the chip `sql` swaps to
`documents` by `discrete-text-sequence` (time-proxy + reverse search — no TextPlugin), and the
consumer chamber **demonstrably does not move** across the swap. The swapping chip is ember.
Scene 3 (5.2–8.0s): "The price is mapping code" (≈5.2–7.0) — a 1px hairline rule draws across,
and the second statement line settles beneath it, along with the mono tag `twice` on "you write
twice" (≈7.4).
Scene 4 (8.0–10.9s): "and keep honest" (≈7.9–9.4) — everything stops. This is the poster pose:
two serif lines, one hairline, one settled chip. Jitter ≤1.6px on the statement block only, to
the end of the film.

---

## Budget and pacing check

| Frame | VO line | spoken words | est. VO duration | running | words/sec |
| --- | --- | --- | --- | --- | --- |
| 1 | Line 1 | 23 | 11.9s | 11.9s | 1.93 |
| 2 | Line 2 | 22 | 11.4s | 23.3s | 1.93 |
| 3 | Line 3 | 20 | 10.4s | 33.7s | 1.92 |
| 4 | Line 4 | 21 | 10.9s | 44.6s | 1.93 |
| 5 | Line 5 | 22 | 11.4s | 56.0s | 1.93 |
| 6 | Line 6 | 19 | 9.8s | 65.8s | 1.94 |
| 7 | Line 7 | 21 | 10.9s | 76.7s | 1.93 |

**148 words / 76.7s** at 1.93 words per finished second — the measured Kokoro rate from
`videos/osi-layers-1-sideways` (its own table: 122 words / 63.34s). `videos/sdlc` measured 2.18
w/s, which would land this film near 68s. Either way the cut sits inside the 75–80s target
window and well under the 90s ceiling; **real TTS durations win** and are synced back by
`audio.mjs sync-durations` before assembly, so every Scene window above gets re-paced against
them rather than against this table.

Grammar count: 7 frames, 7 distinct blueprints or adaptations — `grid-card-assemble`,
`compose` ×2 (F2 sorting, F3 arrow reversal), `transcript-scroll-artifact-reveal`,
`overwhelm-surround`, `fixed-anchor-cycle`, `titlecard-reveal`. Nothing repeats an
unmodified shape.

**SFX budget: 2 marks, not per frame.** Mark 1 `whoosh-short` (F3, the reversal — one mount).
Mark 2 `click-soft` (F6, two stamps from one asset = one ledger mark, the osi1 convention).
No BGM (`music: none`).
