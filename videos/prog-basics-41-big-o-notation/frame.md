---
version: 2.2
name: prog-basics frame (video / frame layer) — Day 4 / UNDER THE HOOD tranche
campaign: prog-basics
identity: the bench
derived_from: frame-day2.md v2.1 byte-for-byte, plus the marks this tranche needs
supersedes: nothing. v2.1 stays the authority for parts 12-22, v2 for 01-11; their renders are
  immutable to their own sources (known-traps § 15).
inherits: >
  UNCHANGED and NOT RESTATED here — v2.1 § 1 palette and colour roles · § 2 type ramp · § 3 the
  ground (and the rule that every ground animation returns to its own zero) · § 5 canvas geometry ·
  § 7 motion primitives P1-P10, the four mandatory layers, the wipe/push join law and the Never list ·
  § 8 voice, sound, captions (Kokoro af_heart, --speed 0.93 passed explicitly, no BGM, no SFX, Day 2's
  caption skin, band 1024) · § 9 copy and clarity rules · § 10 pre-render self-audit · § 11 F1-is-the-
  cover · § 13 language labelling · § 14 carrier findings IN FULL (the cell, colour, type, tooling and
  G8 blocks) · the WAVE2-PACKET § 4 settled geometry numbers · v2.1's runtime policy § 12. A Day 4
  worker reads this file and v2.1; where the two disagree, this file wins for parts 34-44.
adds: the G16-G27 grammar families · the cell ladder · the hairline floor · the phone-legibility law
  for charts, arrows and bit grids · the revised notation rule (the user lifted v2.1 § 9's blanket ban
  for four named parts) · the Day 4 colour law (coral in exactly one part) · the UNDER THE HOOD badge ·
  a three-wave carrier plan · the words-per-part budget.
namespace: >
  Day 4 owns **G16 through G27**. G9-G15 are Day 3's and were verified claimed on disk
  (`frame-day3.md`, 2026-11-01 15:39: G9 pile/line · G10 jump/probe · G11 tree · G12 graph ·
  G13 back-pointer · G14 halving field · G15 service lane). The Day 4 brief labelled the Big-O chart
  family "G12" — that label is **superseded by the on-disk fact** and it is G16 here. G-ids appear
  only in prose and code comments, never in a class name or a data attribute, so an id collision
  could never break a render; the family NAME is the real key.
unit: the frame — 1080x1920 portrait only, this campaign
principle: >
  every colour means something the learner is being taught · every second has visible motion ·
  every number and fragment of output on screen is executed output, never recalled ·
  and (new to this tranche, because this tranche draws cost): **a number a viewer must count is a
  promise the frame keeps at 1x on a phone, or it is not drawn at all.**
fonts_on_disk: unchanged from v2.1 — Space Grotesk 400/700, JetBrains Mono 400/700, copied per project
  into assets/fonts/, every `@font-face` naming a file that exists (known-traps § 6). No new face.
caption_skin: reused UNCHANGED from Day 2 — `writing/prog-basics/caption-skin-day2.html` copied to
  each project as `.hyperframes/caption-skin.html`. Day 4 adds no caption state and no new band
  position. Captions are one campaign-wide look; if Day 3 ships a variant skin, Day 4 does not adopt it.
---

# prog-basics — Frame spec v2.2 ("the bench", UNDER THE HOOD tranche)

Copy this file to `<project>/frame.md` at project start, together with v2.1. Parts 34-44,
`videos/prog-basics-34-circular-buffers/` … `videos/prog-basics-44-bubble-sort/`. English, 1080x1920,
five frames, ~29-34s, Python 3.13.15 only.

## 0. What Day 4 is, and the three ways it differs from Day 2

Day 2 taught *what a thing is*. Day 4 teaches *what a thing does over time and what it costs* — which
means drawing **motion across a fixed structure** (a head that wraps, a value that is lost, a half
that is thrown away) and, for the first time, **a chart**. Three honest departures, each with a fence:

1. **Diagonals and curves enter the campaign.** Day 2 allowed only axis-aligned CSS connectors; Day 3
   ruled them out outright ("three axis-aligned divs per edge, no rotation, no SVG, no diagonals").
   Day 4 cannot teach Big O or a hash fan without them. The break is paid for by two laws settled in
   § 3: the **fixed-px SVG canvas** (which removes the drift pb-11 found) and the **hairline floor**
   (which removes the phone-size mush). Neither law licenses a diagonal in a Day 2 or Day 3 frame.
2. **Notation returns, fenced.** v2.1 § 9 / WAVE2 § 9 said never write or say `O(1)`/`O(n)`. The user
   has lifted that where notation *is* the lesson. § 5 is the carve-out, the rendering and the leak
   fence. Day 3's own pixel check is "no `O(` glyph anywhere" — the two tranches cannot be confused.
3. **Eleven new families for eleven parts.** Day 2 added three marks and shipped three carriers. Here
   the carrier count is seven, run as three waves (§ 8). If that reads as slow, it is: the alternative
   is eleven builders each inventing a bit cell.

**What a Day 4 worker may NOT do:** re-derive a number that appears in this file, adopt a Day 3 atom
(Day 3 is shipping with **no carrier wave** — its geometry is unproven, so it is a *reference for
feed consistency*, never a clone source), add a hue, or add narration to reach a runtime.

## 1. The cell ladder — one place, four sizes, no fourth option

Every box-like thing in Day 4 is one of these. A builder picks a rung; a builder never types a width.
Rung 1 is pb-21's shipped number verbatim, unchanged. Rungs 2 and 3 are new, and the reason they are
new is arithmetic, not taste: **Day 4 draws 8-cell and 16-cell structures that Day 2's 6-slot row
cannot hold inside the 936px content width.**

| rung | name | cell w×h | radius | pitch | first x | n max | value type | border |
|---|---|---|---|---|---|---|---|---|
| **R1** | array cell (inherited) | **142×152** | 22 | **158** | **74** | 6 | 5.6cqw SG 700 | 3px `--line` |
| **R2** | slot cell *(new)* | **96×110** | 16 | **112** | **100** | 8 | 4.0cqw SG 700 | 3px `--line` |
| **R2b** | chain link *(new)* | **96×64** | 16 | (vertical 80) | = parent slot x | 3 high | 3.0cqw SG 700 | 3px `--line` |
| **R3** | bit cell *(new)* | **64×64** | 12 | **88** | **200** | 8 per lane, 2 lanes | 2.9cqw SG 700 | 3px `--line` |

Derived positions, so nobody measures:

- **R2 lefts** (8 slots): `100, 212, 324, 436, 548, 660, 772, 884`; last right edge 980; row span 880.
  A 6-slot R2 row uses the first six (100…660, right edge 756) and leaves 756→1008 for the tag column.
  A 4-slot R2 row uses 100…436 (right edge 532) — **left-aligned, never centred**: a half-full block
  has to *look* half-full (part 39).
- **R3 lefts** (8 per lane): `200, 288, 376, 464, 552, 640, 728, 816`; last right edge 880; lane span
  680. **Cell centres: `232 + 88k`** → 232 / 320 / 408 / 496 / 584 / 672 / 760 / 848.
  Lane pair position is authored as one variable: **lane A top 400, lane B = A + 88** (→488/552, 24px
  gutter) — or **lane A top 560** on a frame that fans into it from above (part 35), which keeps a
  200px arrow run instead of a 54px one. **16 bits are drawn as two lanes of eight, never as one row
  of sixteen** — at 58px pitch a 16-wide row gives 34px cells, and a 34px cell with a 3px border is a
  smudge at 1x.
- **R2b** hangs under an R2 slot at the *same x*, first link top = slot bottom + 16, pitch 80.

Rule: **a row never mixes rungs in one lane, and a rung is chosen by cell COUNT, not by how nice it
looks.** ≤6 → R1. 7-8 → R2. A bit grid → R3. A chain hanging inside a bucket → R2b. A fourth size is
a finding to report, not a decision to make.

### 1a. The Day 4 vertical grid

Lanes are inherited from shipped pb-21/pb-22 px except where marked *(new)*; they are deliberately
compatible with Day 3's published lane grid so the feed cuts one board.

| lane | y | notes |
|---|---|---|
| kicker / badge band | 230 h 44 | `--muted` mono 1.55cqw, `data-layout-ignore`, nowrap |
| eyebrow lane | **256 h 40** | pb-22's `.f2-eyebrow`. **exclusive with the tag lane: a frame carries an eyebrow OR tags, never both** |
| counted-tag lane (upper) | **288 h 66** → 354 | pb-21's `.f3-tag` (2px `--line` on `--panel-2`, radius 14, mono 700 2.7cqw, `--muted`) |
| **hero structure lane** | **top 400** | every rung and every node chain starts at 400. R1→552, R2→510, R3→552 (two lanes), nodes→508 |
| strip lane | R1: top 572 · R2: top 522 *(new)* · R3: none | mono 2.2cqw (R1/R2) / 1.9cqw (R3), `--muted`, `data-layout-ignore`, frame coordinates |
| trail / arc / bracket lane | **560 → 620** *(new)* | anything counted that lives under the row gets this lane, min 24px clear of the row |
| counter band | **630 h 116** | `.pb-count` pairs at left 72 and left 342 (pb-22's proven positions) |
| note / gloss line | 810 h 56 | SG 400 2.9cqw `--muted` with `strong` in `--ink`; ends 866, under Day 3's 868 field cap |
| counted-tag lane (lower) *(new)* | **892 h 66** → 958 | second tag row; **exclusive with a terminal strip** (same band). 66px clear of the 1024 band |
| **hard floor** | **1004** | nothing load-bearing crosses it, ever |

For a stacked comparison (G26, part 37 only) the grid is overridden once, exactly:
eyebrow 256 · upper structure **top 340** · its strip **502** · lower structure **top 580**
(connectors at **633**) · counters **740 h 116** → 856 · **no note line**.

## 2. Colour roles carry forward, with one new local token

`--say` / `--value` / `--err` keep v2.1's meanings exactly. Day 4 adds **no hue** and **no new role**.

**`--stroke: rgba(255,255,255,0.30)`** — the hairline floor, defined in each Day 4 frame's stylesheet
next to the v2.1 tokens, with a comment naming it `--line` at double alpha. It exists because of one
fact Day 2 never had to handle: **a box border at `--line` (0.16) survives phone size because the big
filled box carries it; a lone stroke has nothing else on its side and 0.16 loses to the 56px dot grid.**
`--line` remains the weight for box borders, chamber hairlines and the divider inside a node (all
unchanged). `--stroke` is for anything that is *only* a line.

## 3. Phone-legibility law for charts, arrows and bit grids

This is Day 4's real new risk, so it is one table and a handful of absolutes. Every number in it is
the *minimum*; a frame may go heavier, never lighter.

| thing | weight | colour | the law |
|---|---|---|---|
| axis / reference line | **4px** | `--stroke` | never `--line-faint`, never 0.16. Two axes per chart max |
| curve at rest | **7px**, round cap | `--stroke` | one curve goes `--say` per beat, and it is the one the voice names |
| curve the voice is on | 7px | `--say` | **amber = the curve being said** — P1's meaning, not a new one |
| hash / fan arrow | **4px** | `--stroke` → `--say` on the active hop | each arrow must be individually countable; 3 arrows max on a frame |
| arrowhead | 14×14 chevron (2× 4px borders) or an SVG triangle **18px wide** | same as its line | a head smaller than 18px reads as a tapered line, i.e. as *no* head |
| bit cell | 64×64, 3px `--line` | `0` = `--muted` glyph, `1` = mint fill + mint border + mint glyph | **a set bit gets a digit.** Position alone is not readable at 1x |
| chart label / tick label | **≥28px** (1.9cqw floor) | `--muted` (chrome) or `--ink` (a word you read) | 3 x-ticks max; 1 y-axis word max; **never rotated, never `transform: rotate()` on text** |
| superscript (`n²`) | 60% of the token, raised 0.5em | token's colour | see § 5 |
| a range bar / bracket | **6px** | `--ink` | eliminated area is *unmade*, not dimmed — see G24 |

Absolutes, each one a thing a builder would otherwise decide at 2am:

1. **Max three distinguishable series on a frame.** Four only in part 41's hero chart, and only with
   ≥108px of vertical separation at the right edge (which § 4's endpoint table guarantees). If a frame
   needs a fourth, it needs a second frame.
2. **Nothing is distinguished by dash pattern.** Dashed already means two things in this campaign
   (G2's empty chamber, "a promise nobody enforces", and pb-22's vacated chamber). A dashed curve or
   a dashed arrow is a meaning collision, not a style. Distinguishing is done by **shape and label**.
3. **SVG is allowed under exactly one contract**: one `<svg>` per frame, `width="936" height="1920"`,
   `viewBox="0 0 936 1920"` (px-to-unit 1:1), anchored `position:absolute; left:72px; top:0`, and
   **no ancestor element may carry a `scale()` tween** — the `.fN-content` layer may translate only
   (which is what pb-21/pb-22 already do), so internal coordinates are frame coordinates minus 72 in x.
   This is a *clarification* of pb-11's finding, not an override: what drifted was SVG **inside a
   scaled container**. Axis-aligned straight connectors stay CSS divs (`.g7-bar`, `.g7-chev`, unchanged
   geometry) — there is no reason to move proven atoms into a new medium.
4. **Every label is HTML, never `<text>`.** The SVG draws lines and curves; the words are divs in the
   same clip band after it. Reason: the campaign's type floor, `data-layout-ignore`, ligature
   suppression and the caption skin all live in CSS on HTML, and `<text>` escapes every one of them.
5. **Draw-on uses `pathLength="100"`** on every curve and arrow, with `stroke-dasharray: 100` and a
   `stroke-dashoffset` tween `100 → 0` (0.5-0.6s, `power2.out`, `immediateRender: false`). One number
   works for an 840px path and a 113px path alike, so nobody measures a path and nobody hand-tunes a
   dash. This is P8's mechanism, unchanged in meaning.
6. **A chart frame has no eyebrow and no note line.** The curve labels *are* the annotation layer.
   Two annotation systems on one chart is how a label ends up inside a stroke.
7. **Snapshot-read a chart at 100% and at 35%** (the phone thumbnail). If a stroke, a tick or a bit
   digit fails at 35%, the answer is **fewer series, fewer bits in frame, or a heavier stroke** — never
   `data-layout-ignore`, which is for chrome and hides the problem rather than fixing it.

## 4. The grammars: G16-G27

Each block is complete: what it draws, settled geometry, colour, motion, the legibility constraint,
what it is built from, and the hazard. A builder writes the HTML from here and decides nothing.

### G16 `curves` — Big-O growth drawn as lines (parts 41, 42)

**Built from:** the § 3 SVG canvas + P8 draw-on + `.f3-tag`. **Nothing in the campaign looked like this
before; part 41 is the tranche's hardest carrier.**

```
canvas  : one <svg> per § 3.3. Axes and four curves live in it. No text inside it.
origin  : graph (0,0) at frame (140, 724). x-axis to frame x 980. y-axis up to frame y 360.
axis    : <line> x 140→980 at y 724 ; <line> y 724→360 at x 140. stroke-width 4, --stroke.
curves  : authored path data, frame coordinates. COPY THESE, do not re-fit a bezier:
  O(1)      M 140 680 L 980 680                       (flat, 44px above the axis)
  O(log n)  M 140 724 C 240 604 372 584 980 568       (steep then nearly flat)
  O(n)      M 140 724 L 980 456                       (straight)
  O(n^2)    M 140 724 Q 612 712 980 348               (low for half the width, then vertical)
            — the last is drawn as O(n²) per § 5, never as "n^2" and never as the ² codepoint
labels    : HTML divs, .g16-clab: position:absolute; left:612px; width:368px; text-align:right;
            JetBrains Mono 700 2.2cqw; --ink; white-space:nowrap.
            tops — O(n²) 304 · O(n) 412 · O(log n) 524 · O(1) 638. (each sits 44px above its endpoint)
ticks     : three, .g16-tick, mono 400 1.9cqw --muted, top 736 h 40, centred at frame x 140 / 560 / 980,
            reading 1× · 2× · 4×. data-layout-ignore. Nothing between them.
y-word    : one, .g16-ylab, mono 700 1.9cqw --muted, left 148 top 366, horizontal, reading WORK.
            data-layout-ignore. It is never rotated.
```
**Colour:** all curves `--stroke` until named; the named one goes `--say` for its beat and back
(`--say` is singular — a frame with two amber curves is a finding). The label of the live curve goes
`--say` with it. A counted chip (`STEPS 3`) uses mint digits per § 4's `.pb-count`.
**Motion:** entrance = the axis draws first (scaleX on a CSS div is *not* used here; the axis is an SVG
line with the § 3.5 dash draw, 0.3s), then one curve per spoken clause, in the order the copy names
them. Emphasis: label flips to `--say` 0.1s after its curve starts drawing. Exit: standard `y: -60`.
**Legibility:** the four endpoints are 112/112/108px apart at the right edge — **do not rescale the
plot to "use more of the frame"**; that spacing is what makes four series legal under § 3 absolute 1.
**Hazard:** a builder will be tempted to add data dots, a grid, or a shaded area. No. A grid collides
with the campaign's own dot ground, and a filled area has no colour role left (`--value` would claim
the area is a value). Curves only.

### G17 `balance` — time against memory, as a measured trade-off (part 42)

**Built from:** `.pb-chamber` at 180×120 + `.f3-tag` + `.pb-count`.

```
beam    : CSS div 560×8, left 260 top 520, --panel-2 fill, 2px --line border, radius 4,
          transform-origin: center center. Tilt is a rotate tween: -6deg → +6deg → -6deg.
fulcrum : CSS triangle from borders — 64 wide × 32 tall, left 508 top 524, border-color --panel-2,
          sitting under the beam's centre. It never moves and never rotates.
pans    : two chambers 180×120, radius 22, 3px --line, --panel, G2 shadow, centred ON THE BEAM'S ENDS:
          MEMORY pan left **170**, TIME pan left **730** (beam spans 260→820). BOTH fixed in x, every
          state. Their y is AUTHORED per state and tweened with the same ease/duration as the rotate:
          level **500** · memory-heavy 456 / time-heavy **566** (±44px). Pans are NOT children of the
          beam: a child inherits rotation, and a tilted label is unreadable (§ 3 forbids rotated type).
inside  : pan label mono 700 2.2cqw --muted top 12 (MEMORY / TIME), and a mint count
          mono 700 4.2cqw top 46 h 62 — the number the probe printed for that side.
counters: two `.pb-count` at left 72 and 342, **top 740 h 116** (→856). Not the generic 630 band: a pan
          at its low state reaches 686, and a chamber sitting on a counter is a § 1a collision.
```
**Colour:** the pan the voice is on gets a 3px `--say` border for 0.3s, then back to `--line` — this is
pb-21's shipped box-flash, not a new thing. Counts are mint. Nothing is coral (42 raises no error).
**Motion:** the tilt *is* the lesson; a static tilted beam is a defect. Each tilt lands on the spoken
trade, and the two counts change while the beam is level again (never mid-tilt — a viewer cannot read a
digit that is also moving).
**Legibility:** the beam is 8px, above the 4px floor, because it is the one line the eye tracks.
**Hazard:** do not hang the pans from the beam with a chain or a string. Two floating chambers reads as
a scale; four extra divs read as a craft project.

### G18 `bit array` — sixteen on/off cells (part 35; reusable by 38's occupancy strip)

**Built from:** R3 cells. New in campaign: a grid the viewer must count *and* read state from.

```
cells   : 16 × R3 (64×64, radius 12, 3px --line, --panel), two lanes of 8 per § 1.
digit   : Space Grotesk 700 2.9cqw, centred. 0 = --muted, 1 = --value.
unset   : --panel interior, --muted "0".
set     : interior tinted rgba(90,214,160,0.22), border #5AD6A0, digit mint.
          (alpha/weight on an existing hue, exactly like pb-21's rgba(90,214,160,0.75) flash border —
          not a new colour, and mint is correct: a set bit is what lives in the cell.)
lanes   : the § 1 lane pair — 400/488 generic, 560/648 when a fan arrives from above. A frame that
          sets bits in only one lane leaves lane B present-but-zero; never hide a lane, or the 16
          stops being 16.
labels  : m = 16 / k = 3 carried as `.f3-tag` chips reading BITS 16 and SET 3 (upper tag lane 288 on a
          generic frame; **lower tag lane 892 on 35's fan frame**, which has a chip up there already).
```
**Colour:** bits never amber — amber is a word, and a bit is a state. The *hash arrows* going into a
bit go `--say` on the beat (G19), and the bit they land on flashes mint. One arrival per beat.
**Motion:** a bit flips with `scale: 1 → 1.14 → 1` over 0.2s plus a `borderColor`/`backgroundColor`
tween; the digit changes via a `{t,text}` step array on a time proxy (known-traps § 3 — no text tween)
and nothing else in the row moves. Row boxes holding still while one cell changes **is** the argument.
**Legibility:** 64px cells at 16 total is the ceiling; **a builder must not raise the bit count to 32
to look more filter-like.** The probe pins m = 16 (`probes-day4/p35_bloom_filter.py`), and § 9's
executed-output rule means an invented m is an invented claim.
**Hazard:** do not align a lane's cells with flex + `gap` and then tween one cell's `scale` — the
siblings hold, but an absolute-positioned row is what pb-21 shipped and what survives a re-assembly.
Lefts come from the § 1 table.

### G19 `hash fan` — one word, several arrows, different bits (part 35)

**Built from:** the § 3 SVG canvas + `.g7-chip` for the word chip. This is the campaign's first
angled connector, so it inherits every clause of § 3.

```
word chip : .g7-chip form — 160×56, --panel-2, 2px --line, radius 12, JetBrains Mono 400 2.9cqw --ink,
            centred at frame (540, 328) → 300..356. Text is the Python literal with quotes: 'cat'.
fan origin: frame (540, 360) — the chip's bottom centre. One origin for all arrows; they fan from a
            point, which is what "several hashes of the same key" looks like.
            The grid sits at the FAN lane pair (§ 1): lane A top 560, lane B top 648. That gives the
            arrows a 200px vertical run; at the generic lane (400) the run is 54px and the fan reads
            as three short stubs under a chip. This is the reason the lane is a variable.
arrows    : three SVG <path> lines, stroke-width 4, --stroke, pathLength 100, drawn on a 0.14s
            stagger into lane A. AUTHORED (copy, do not compute, do not re-fit):
              to bit 1 (cell centre frame x 320): d="M 540 360 C 470 430 380 500 320 558"
              to bit 4 (cell centre frame x 584): d="M 540 360 C 545 430 566 500 584 558"
              to bit 6 (cell centre frame x 760): d="M 540 360 C 610 430 700 500 760 558"
            each ends 2px above its cell's top edge (y 558 against lane A at 560).
heads     : one SVG triangle per arrow, drawn pointing +x as d="M -9 -9 L 9 0 L -9 9 Z" (18×18),
            fill --stroke, translated to the path's end point and rotated to the authored end tangent:
            θ = 136° (bit 1) · 73° (bit 4) · 44° (bit 6), where 90° is straight down. Static
            transforms on the triangle only — the canvas itself is never scaled (§ 3.3).
h1/h2/h3  : three mono 400 1.9cqw --muted chips, 44×36, --panel-2, 2px --line, radius 10, at frame
            lefts 424 / 508 / 612, top 402, centred on their own arrow's mid-run;
            data-layout-ignore. They label the arrows without inventing numbers.
tags      : BITS 16 and SET 3 in the LOWER tag lane (892 h 66), because 35's fan frame uses the whole
            upper band for the chip and the fan. One tag lane per frame, per § 1a.
```
**Colour:** arrows `--stroke`; the arrow the voice is on goes `--say` for 0.3s; the bit it lands on
flips mint (§ 1 of v2.1: one accent arrival per beat — so arrow-amber and bit-mint are sequenced
0.16s apart, never simultaneous).
**Hazard, and it is a law:** **no hash value on screen, ever.** `hash()` is randomized on this machine
(`sys.flags.hash_randomization` → 1), so a printed number is unreproducible and the bit an arrow lands
on is a **composition choice**. The frame says "one possible arrangement"; the caption may not say
"because the hash points there". Same fence Day 3 applies to its hash buckets, for the same reason.
**Fallback:** if the fan is unreadable at 35% thumbnail, switch to three **axis-aligned elbows**
(a vertical drop, a horizontal run, a vertical drop, all 4px `--stroke` CSS divs) and **report the
switch**. Do not switch silently, and do not thin the lines to make them fit.

### G20 `wrap ring` — a write head that passes the end and overwrites (part 34)

**Built from:** R1 cells verbatim + one SVG arc. The honest structure is the probe's: **3 slots**
(`probes-day4/p34_circular_buffer.py`, writes A B C D, D overwrites A).

```
ring    : three R1 cells at lefts 74 / 232 / 390, top 400 (pb-21's geometry, unchanged — this family
          re-pays a settled number, so it does not get a new one).
content : each cell holds a token, not a number: Space Grotesk 700 5.0cqw --value reading A / B / C.
          (Two-letter tokens at 5.6cqw crowd a 142px cell; 5.0cqw is the rung-1 token size.)
head    : the write-head marker — `.f3-marker`'s shape, 120×60, --panel-2, 3px --say border, radius 14,
          mono 700 2.9cqw --say, reading HEAD. Parked at **top 640 h 60** (below the row and its
          strip), and it reaches a cell by an `x` tween in 158px steps plus the same straddling `y`
          pb-21 proved (`y: -168`, so it lands on the cell's BOTTOM edge, never on its value).
          **This is the frame's only amber element.** The counted tags stay muted (§ 14's two-plate rule).
arc     : the wrap — SVG <path> d="M 461 392 C 461 300 145 300 145 392", stroke-width 4, --stroke,
          pathLength 100, drawn on 0.5s, ending in an 18px head into slot 0's top edge. The endpoints
          are slot CENTRES (74+71 and 390+71), not left edges; the apex reaches y ≈ 330.
          The arc's job is to be *counted as a return*, so it draws while HEAD moves.
          Because the arc owns the upper band, **34's wrap frame puts its tags in the LOWER lane (892)
          and leaves the 288 band empty** — a tag a viewer cannot see is a tag that teaches nothing.
lost    : the overwritten value leaves: the old token tweens { y: -46, opacity: 0 }, 0.3s, power2.in,
          and the new one drop-ins (P2, mint border flash) 0.12s later. Boxes hold still throughout.
tags    : LOWER tag lane 892 h 66 — WRAPPED 1 (left 270 w 300) and OVERWROTE A (left 590 w 220).
          Same two widths and lefts as pb-21's upper pair, one lane lower. Digits mint.
empty   : a slot that has never been written is 3px DASHED --line with a muted "—" — G2's empty state.
```
**Legibility:** the lost token must be **gone before** the new one arrives (0.12s gap). Two glyphs in
one cell at 5.0cqw is the single easiest way to make this frame unreadable, and it passes `check`.
**Hazard:** the copy also mentions a 100-slot log. Do **not** draw 100 cells. Carry it as a counted
chip reading `SLOTS 100` with `WRITES 250` — both are executed numbers from the same probe.

### G21 `recency chain` — order that reorders, and a tail that leaves (part 36)

**Built from:** pb-22's node chain verbatim (176×108, pitch 200, lefts 72/272/472/672, top 470) —
the top moves to 400 here so the key chips have their lane above; node internals, hairline divider,
`→` cell and ring geometry are unchanged. Terminator = `.g7-chip` 60×56 reading `None`.

```
nodes   : four G7 nodes, top 400 (→508). Connectors: 24px `.g7-bar` at node.right (left 248/448/648),
          top 453, 3px --line, with `.g7-chev` 11×11 at +12x/−5y. pb-22's proven numbers, shifted.
keys    : the hash map side — four key chips, `.g7-chip` form widened: 96×44, --panel-2, 2px --line,
          radius 12, mono 400 2.2cqw --muted, centred above each node (top 340), each with a 3px
          --line vertical pointer 12px tall from chip bottom to node top (axis-aligned CSS div).
order   : NEWEST and OLDEST in the **eyebrow lane (top 256 h 40)**, lefts 72 and 672, w 200 each, mono
          700 1.9cqw --muted, data-layout-ignore. They are this frame's eyebrow, so by § 1a's
          exclusivity rule **36's chain frame carries no counted-tag lane** — the numbers live in
          `.pb-count` at 630. (A tag at 288 h 66 would end at 354 and sit on the key chips at 340;
          that is the arithmetic behind the rule, not a preference.)
promote : a read promotes to the front. Order, right-to-left (pb-21's law: nothing lands on an occupied
          slot): nodes 0,1,2 tween x +200 (0.34s power3.inOut, 0.13s stagger), THEN node 3 tweens
          x -600 to the freed head slot. Every other element holds.
evict   : the tail leaves to the right: x +140 with opacity 1→0 over the first 60% of a 0.5s tween,
          so it is fully invisible by frame x 988 — inside the content box, no overflow finding,
          and no `data-layout-allow-overflow` claim to argue about.
counters: `.pb-count` pair at lefts 72 / 342, top 630: HITS and DROPPED, digits mint, label 1.7cqw.
```
**Colour:** the promoted node's border flashes mint (P2's arrival flash, proven). The **evicted node is
muted and fades — never coral.** Eviction is a designed behaviour, not an exception. A builder will
want coral here because it looks like a loss; § 6 forbids it.
**Hazard:** do not make the promoted node a child of a translating container, and do not animate the
chain with `left`. `x` tweens only, on absolutely positioned nodes, with authored end states.

### G22 `bucket chain` — two keys, one slot, a chain hanging inside (part 38)

**Built from:** R2 buckets + R2b links + one drop-and-slide.

```
buckets : six R2 cells at lefts 100/212/324/436/548/660, top 400 (→510).
          **No index strip on a chained frame.** The strip lane (522) is where the chain's first
          connector runs, and a digit under a hanging chain fights it; 38's lesson is the collision,
          not zero-based counting. (On a 38 frame with no chain, the strip is at 522 as usual.)
chain   : hangs under bucket index 2 (left 324). Links are R2b 96×64 at the SAME left as the bucket,
          first link top 526 (16px below the bucket), second top 606. Between them a 3px × 16px
          --line vertical CSS div at the slot centre x − 1.5, and the same 16px div from bucket to
          link 1. Chain bottom 670, clear of the note line at 810.
keys    : bucket interiors hold key chips, not digits: mono 700 3.0cqw --ink with Python quotes ('id').
          Two keys land in slot 2, so that bucket is drawn full and the second key visibly does not
          fit — then it travels DOWN into the chain.
birth   : a link is BORN with a scaleY 0→1 draw from its own top (P4's mechanism, transformOrigin
          'top', 0.34s) — never a fade. The vertical connector draws first, then the link. That order
          is what makes it read as "attached" rather than "appeared".
tags    : upper tag lane — SAME SLOT 2 (left 270 w 300) and LOOKED AT 2 (left 590 w 220).
```
**Colour:** the bucket that collides gets a 3px `--say` border for 0.3s (pb-21's flash) and the chain
links keep `--line` borders with mint key text. **Zero coral** — no interpreter raised anything.
**Hazard:** the third key that lands in the *same* bucket makes the chain three long, and **three links
is the rung's max** (526 → 750 with their connectors). A fourth reaches 830 and lands on the note line
at 810. If the copy needs four, report it; do not shrink R2b to 48px to squeeze one in.

### G23 `growth row` — the block fills, a bigger one is made, everything is copied (part 39)

**Built from:** two R2 rows + pb-21's right-to-left shift law + a straight-down copy travel.

```
old row : four R2 cells, lefts 100/212/324/436, top 400 (→510). Its label is a `.f3-tag`-form chip
          reading SIZE 4 at left 100 top 288 w 150 h 66 (it uses the tag lane, it does not invent one).
new row : eight R2 cells, lefts 100…884, top 620 (→730). Its label is a mono chip reading SIZE 8 at
          left 100 top 522 h 40, 1.9cqw --muted, data-layout-ignore — the strip lane, which is free
          because **39 draws no index strip** (two rows of digits would out-number the lesson).
          Same cell size as the old row on purpose: the block got *bigger by holding more*, and a
          bigger cell would claim the elements grew. A 4-cell row is left-aligned inside the 8-cell
          grid (same lefts), never centred — half a block has to look like half a block.
copy    : four mint value chips travel straight down — **Δx 0, Δy 220** (cell centre 455 → 675), 0.42s
          power2.inOut, 0.12s stagger, each landing with its new cell's border flashing
          rgba(90,214,160,0.75) and back (pb-22's exact flash pair, unchanged). The chips are a
          separate absolutely positioned layer, NOT the old cells' own spans (the old cells go empty
          and stay).
vacated : after its chip leaves, an old cell becomes 3px DASHED --line with --muted "—" — G2's empty
          state, and Day 2's proven meaning for "nothing lives here". Background to rgba(31,36,44,0.4)
          (pb-22's ghost fill). Digits are gone, so the "keep digits at full ink" rule cannot bite here.
tags    : COPIED 4 at left 270 w 300, top 288 (beside the SIZE 4 chip). No `.pb-count` on this frame:
          the counter band (630) is inside the travel lane, and 740 is under the new row.
bracket : one 3px × 16px --stroke CSS div at left 88, every 30px from y 520 to 600 — a dashed-looking
          rail is BANNED (§ 3.2), so it is a short stack of identical 16px divs, drawn once, joining the
          two rows' left edges so "these are the same four things" is visible without a line to trace.
```
**Colour:** mint for arriving values; the bracket rail is `--stroke`, never a hue of its own. Nothing
else changes colour at the same moment as a landing (§ 1's one arrival per beat).
**Hazard:** do not let the new row arrive already full. The row that will receive must be drawn as
eight **empty** cells (dashed) first, and filled by the travel — pb-21's "author the grid for n+1
before animating or it reflows", applied downward.
**Note for 39's second beat:** growth is amortized, and "amortized" is a word the copy must gloss in
the same breath (§ 9). The *frame* carries it as two counters (`COPIED 4` on a 4→8 growth vs
`COPIED 0` on seven of the eight writes) — never as `O(1) amortized`, which is not in 39's notation
allowance (§ 5).

### G24 `range bracket` — halving a visible row (part 43)

**Built from:** R2 row of 8 + three authored range bars + pb-22's ring.
**Not Day 3's G14.** Their halving field counts twenty rows of a *number*; this halves a *row the
viewer can see*, on cells Day 4 owns. Do not clone their field; do not adopt their row pitch.

```
row     : eight R2 cells, lefts 100…884, top 400 (→510), sorted values Space Grotesk 700 4.0cqw --value.
          Values are the probe's executed sorted list — never a hand-sorted guess.
          **No index strip:** the bracket owns the 522-620 band, and 43's lesson is the range, not the
          position number (34 and 22 already taught zero-based counting).
bars    : FOUR separate absolutely positioned divs, **top 600, height 6, --ink**, one per pass, never a
          width tween, never one bar with a moving transform-origin:
            pass 1  left 100 width 880    (all eight)
            pass 2  left 100 width 432    OR  left 548 width 432   (the surviving half)
            pass 3  left 324 width 208    OR  left 660 width 208   (the surviving quarter)
            hit     one cell: left = the found slot, width 96
          Each carries two 6×22 end caps rising from the bar toward the row (tops 578, at bar left and
          bar right − 6), so the range visually *holds* the cells it covers.
          The outgoing bar tweens scaleX→0 with transform-origin at the END IT RETREATS FROM;
          the incoming bar tweens scaleX 0→1 from its anchored end. 0.34s, power2.inOut, and they
          cross-fade rather than sliding one bar across the board.
          Bar top 600 is 4px above the 630 counter band — that is the whole vertical budget here, so
          **do not lower the row to "give the chart air"**.
elim    : an out-of-range cell becomes --muted digit? NO — keep the digit at full --ink (v2.1 § 14).
          Eliminated = background rgba(31,36,44,0.4) + border 3px DASHED --line. The digit stays
          readable; the *loss of solidity* is the signal, exactly as pb-22's ghost chamber proved.
mid     : the probe position — `.g7-ring` form sized to R2: 116×128 at (cell.left − 10, 391),
          3px --say border, radius 16, box-shadow 0 0 0 8px rgba(255,209,102,0.10). It HOPS cell to
          cell (x tween, one authored step per hop) and the cells hold still — pb-22's
          "the ring moves · the boxes hold still" note is this part's whole argument and is reusable.
counters: `.pb-count` pair lefts 72 / 342 top 630 — STEPS (mint digits, ticking 1 → 2 → 3) and
          ROW (8). A third chip in the upper tag lane reads HALF 4 then HALF 2.
tag     : the notation label, if 43 uses one: ONE `.f3-tag`-form chip reading O(log n), --muted,
          static, upper tag lane left 590 w 220. It never flashes amber (§ 5.4).
```
**The honest numbers:** a row of 8 takes **exactly 3 passes** (executed today: finding 70 in
`[10,20,…,80]` = 3 steps, index 6) against **7 hops** for a counted walk. `STEPS 3` vs `HOPS 7` is the
part; both are arithmetic this file can vouch for, and both must also appear in the day-4 ledger.
**Hazard:** do not add a fourth pass to "show it keeps going". 8 cells halve three times and stop; a
fourth pass is a lie about the row.

### G25 `neighbour swap` — two values trade places (part 44)

**Built from:** R1 cells (pb-21 verbatim) + pb-22's hold-still argument.

```
row     : four R1 cells, lefts 74/232/390/548, top 400 (→552). Only four: a 4-element bubble sort needs
          at most 6 swaps and typically 3 — an 8-cell row cannot finish inside one frame, and a sort
          that does not finish is not the lesson. Index strip top 572, mono 2.2cqw --muted.
values  : the digits live in their OWN absolutely positioned layer, one `.pb-val` per value at the
          cell centre — NOT inside the chambers. A swap moves digits, not boxes:
          `a[i], a[i+1] = a[i+1], a[i]` reorders contents while positions hold. That is the physical
          truth and it is pb-22's proven "boxes hold still" stance.
swap    : the two chips tween x ±158 (one pitch) over 0.4s power2.inOut. The LEFT-going chip also hops
          over: y −30 (0.18s) then y 0 (0.17s) — two authored tweens, no motion path, no keyframes.
          The two x tweens start on the same clock tick; a builder must not stagger them, or the pair
          reads as two separate moves.
compare : a 6px `--say` bracket over the pair being compared — two adjacent R1 cells span **300px**
          (pitch 158 + cell 142), so: bar left = cell.left, width 300, top 368 h 6, with 6×22 caps down
          at left+0 and left+294 (caps 368..390, ending 10px above the row's top edge).
          Amber here is correct: the voice is saying this pair. It is the frame's only amber; the
          difficulty plate is standing chrome. (On an R2 row the same bracket is width 208 with the cap
          at left+202 — 112 + 96. Never reuse one number on the other rung.)
settled : a position that will not move again gets a durable 3px #5AD6A0 border (mint = a value that
          is now final) and its strip digit goes --ink. This is what earns the name "bubble".
tags    : SWAPS 3 (left 270 w 300) and PASSES 2 (left 590 w 220), muted labels, mint digits.
```
**Colour:** no coral (nothing raises). Mint carries "finished", amber carries "being compared" — these
are two different moments and must never be on the same cell at the same time.
**Hazard:** `<=` inside a comparison label (`20 <= 30`) is the exact glyph JetBrains Mono liguates into
`≤`. Ligature suppression (§ 5.5) is already mandated on every frame carrying code, and a Day 4 frame
carrying a *comparison* is a Day 4 frame carrying code. Use `20 < 30`, or use the bracket and no
operator at all.

### G26 `stacked comparison` — two structures, two counters, one screen (part 37)

**Built from:** R1 row + G7 chain + `.pb-count` pair + § 5's notation tag. Pure composition — it is in
wave C precisely because every atom in it is already proven.

```
lanes   : per § 1a's override — upper structure top 340, its strip 502, lower structure top 580,
          connectors 633, counters 740. No note line, no terminal strip.
upper   : six R1 cells, lefts 74…864 (pb-21's full row), the indexed structure. A `JUMP` marker
          (`.f3-marker` form, 120×60, 3px --say, --panel-2) **straddles the cell's TOP edge**: parked
          at left = cell.left + 11, top 310 (so its centre sits on the 340 edge line), arriving with
          pb-21's back.out pop. It straddles top rather than bottom because this frame's strip is at
          502, and a marker on a digit hides the digit. Then it holds while the counter ticks to 1.
lower   : four G7 nodes, lefts 72/272/472/672, top 580, connectors 633. The `.g7-ring` (196×126 at
          node.left − 10, top 571) hops **three authored pitches, one per spoken hop** — the row is a
          diagram, not the list. The real length lives in the counter: `HOPS 500` for the 501-item list
          `p37_walk.py` builds. Never draw 500 nodes, and never say "the row is the list".
counters: `.pb-count` pair, lefts 72 / 342, top 740 — JUMP 1 (mint) and HOPS 500 (mint).
tags    : eyebrow lane 256 holds the two notation labels, right-aligned over their own structure:
          O(1) at left 72 w 430, O(n) at left 506 w 430, mono 700 2.2cqw --muted, static.
```
**Colour:** exactly one amber arrival per beat, alternating between the two halves of the frame so the
comparison is *narrated* by colour rather than by a caption.
**Hazard:** do not scale either structure to make both fit. R1 and G7 are the two sizes the campaign
ships; if the stack reads cramped, the frame is wrong, not the sizes.

### G27 `lock` — mutable against immutable, with a real TypeError (part 40)

**Built from:** v2.1 § 4's border law (thin dashed = unenforced, thick solid double = enforced) +
pb-16's two labelled chambers (G4 split) + one new CSS atom.

```
shackle : the lock, drawn from three borders so no asset is fetched (v1's padlock was dropped for
          needing a network fetch — this is the fix, not a return to it):
          div 44×30, box-sizing border-box, border-left/right 3px --stroke, border-top 3px --stroke,
          border-bottom none, border-radius 22px 22px 0 0. Sits centred on the tuple chamber's top
          edge, i.e. bottom edge = chamber top. Arrives with opacity + y −20 → 0 (0.28s power3.out).
          It is --stroke, never amber and never coral: a lock is chrome, not a lesson word.
chambers: G4 split, two chambers each ≤3 lines, each with a 64px --panel-2 titlebar (`main.py`) and a
          PYTHON chip. LEFT = list, 3px --line single border. RIGHT = tuple, its enforced border:
          3px --line SOLID plus a 3px --line outer ring at 5px offset (double, per v2.1 § 4) — plus the
          shackle. Same chamber size, both rows of the pair, authored from R1 proportions.
refused : the write that fails: a mint value chip drops toward the tuple chamber, stops 40px above the
          floor, nudges y −14 → 0 (0.16s, `yoyo`) and is then retired to --muted at the chamber's top.
          The chamber never changes border colour for it (that flash means "a value landed").
terminal: the G3 terminal strip (--panel-2, mono 700 2.9cqw) carries, verbatim and executed today on
          Python 3.13.15:
            TypeError: 'tuple' object does not support item assignment
          and, if the copy uses `.append`, this second one (also executed):
            AttributeError: 'tuple' object has no attribute 'append'
```
**Colour:** **coral on the interpreter text and on nothing else in the frame** — not the shackle, not
the chamber, not the refused chip. This is v2.1 § 1's rule, and 40 is the only Day 4 part that can use
it (§ 6).
**Hazard:** a builder may reach for `lock` imagery beyond the shackle (a keyhole, a chain). No: the
lock is three borders and the enforced border is the second lesson. And do not put the `TypeError` in
the caption lane — captions are verbatim VO (§ 5.7); the strip is where executed output lives.

## 5. The notation rule, revised by the user

v2.1 § 9 and WAVE2 § 9 banned `O(1)`/`O(n)` outright: *"the notation buys nothing at 45 seconds and
costs the whole audience."* The user has lifted it **for this tranche only, where notation is the
lesson**. The carve-out, stated as a fence a builder can check:

1. **Taught as notation (the symbol may be the subject):** **41** (growth curves) and **42** (the
   trade-off). These two may put `O(1)`, `O(log n)`, `O(n)`, `O(n²)` in display-adjacent labels.
2. **Used as a comparison label only:** **37** and **43**. Here a notation string may appear **only**
   as a `.f3-tag`-form or eyebrow-form chip: JetBrains Mono 700, **2.2cqw**, `--muted`, `data-layout-ignore`,
   `white-space: nowrap`, one chip per structure, **static** — it arrives once and never flashes,
   never scales, never goes amber. Amber is reserved for the counted number.
3. **Zero notation, spoken or written:** **34, 35, 36, 38, 39, 40, 44.** Seven parts. These carry the
   same idea the Day 2 device carries: a counted walk — `STEPS 3`, `HOPS 500`, `SWAPS 3`, `COPIED 4`,
   `LOOKED AT 2`, `BITS 16`. `probes-day4/` supplies the numbers. A Day 4 render of these seven parts
   containing the characters `O(` is a defect, exactly as Day 3 lists it as one of its own pixel checks.
4. **Never in a caption.** Captions are verbatim VO from `audio_meta.json`; the VO never says the
   symbol (§ 5.6). So `O(n²)` can only ever be a label div. This is why the superscript never has to
   survive the 46px caption skin.
5. **Rendering, settled.** Face **JetBrains Mono 700** (it is a token the learner will meet in docs and
   type, and § 2's split is "mono is code and chrome"). Colour `--ink` in 41/42's curve labels, `--muted`
   in 37/43's chips. Token size 2.2cqw; `white-space: nowrap` or the parens orphan onto the next line.
   Ligature suppression carries (§ 14): every frame has
   `font-variant-ligatures: none; font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`.
   **The superscript is not a font feature.** Do not reach for the `²` codepoint (a missing glyph falls
   back to another face mid-token) and do not reach for `sups` / `font-variant-position` — and note the
   CSS trap that makes this a rule rather than a preference: **`font-feature-settings` is not
   additive**, so any later `font-feature-settings: "sups" 1` silently deletes the ligature
   suppressions and re-enables `<=` → `≤` on the same frame. Superscript is markup:
   ```
   O(n<sup class="pb-sup">2</sup>)
   .pb-sup { display: inline-block; font-size: 60%; line-height: 1; vertical-align: 0.5em; }
   ```
   `inline-block` because transforms and offsets on an inline span are dropped (known-traps § 2);
   `vertical-align: <length>` because it is metric-independent and seek-safe; 60% of 2.2cqw = 1.32cqw ≈
   **14px**, which is chrome-small but *attached to a token*, so the snapshot check is at 100% and 35%
   (§ 3.7), and if the digit is not legible the answer is a bigger token (2.6cqw), not a heavier weight.
   In a G3 code chamber, real Python is real: `n ** 2` and `n*n`, never `n²` (invalid to type).
6. **Spoken vs written.** The TTS line says the plain-English claim and never the symbol: screen
   `O(1)` while the voice says *"same cost, no matter how many"*; screen `O(n²)` while the voice says
   *"twice the rows, four times the work"*. This is not a compromise, it is the tranche's clearest
   teaching device: the learner gets the word in the ear and the notation on the board, and the two
   meet once per curve. Side effect worth knowing: **notation on screen costs zero spoken words**, so
   it is the cheapest way to add precision inside § 9's word budget.
7. **The leak test, run before the render gate** (the no-notation parts are 34-40 and 44):
   ```bash
   grep -rn 'O(' videos/prog-basics-3[4-9]-*/ videos/prog-basics-40-*/ videos/prog-basics-44-*/
   ```
   must print nothing at all. Any hit in **37** or **43** must be a `--muted` static chip, checked by
   reading the rule, not by eyeballing the frame. Do the grep; do not trust an hour-old green check.

## 6. Colour law for this tranche (coral, in absolute terms)

`--say` = the word the voice is on. `--value` = a value, or what printed. `--err` = **an error an
interpreter actually raised on this machine, nothing else.** `--stroke` = a lone line (§ 2). Nothing
else may be coloured, and no new hue enters.

- **Coral is legitimate in exactly one part: 40.** Verified today on Python 3.13.15 —
  `TypeError: 'tuple' object does not support item assignment` and
  `AttributeError: 'tuple' object has no attribute 'append'`. On the interpreter text only.
- **34, 35, 36, 37, 38, 39, 41, 42, 43, 44 ship with zero coral.** Ten parts. Absolute, not
  preference, and the temptation is named because it is real:
  - **34** overwrites a log entry. That is the design, not an error.
  - **36** evicts the least-recently-used item. That is the design, not an error.
  - **38** has two keys in one bucket. Python raises nothing; a collision is normal.
  - **43** can raise `IndexError` if you probe one past the row — **do not show it.** The part is about
    halving, and a coral pixel there would teach that binary search fails.
  - **44** finishes a sort in three swaps. Nothing failed.
  - **41/42** are charts. A curve is not an error; `--stroke` and `--say` cover every state.
- Amber stays singular per beat (§ 14). Day 2 shipped a standing amber difficulty plate plus an amber
  bracket/marker in one frame (pb-21 F2/F3) — so the enforceable reading, and the one this tranche
  uses: **no two amber *highlight plates behind text* at once**, and **one amber *arrival* per beat**;
  the standing kicker plate and a single live marker/bracket are not that. When a frame has a choice,
  the marker does not go amber on a frame whose counted tag already flashed amber.
- Mint never decorates. A set bit, a landed value, a settled position, a counter digit — those are
  values. A mint border on a box because "it looked flat" is a § 1 violation.

## 7. Badge and kicker for this tranche

**Day 4 badge string: `UNDER THE HOOD`.** Short kicker:
`PROGRAMMING BASICS · UNDER THE HOOD · NN` (40 chars ≈ 508px at 1.55cqw mono — inside the 936 band with
the difficulty plate beside it). F5/G5 series line: `PROGRAMMING BASICS · UNDER THE HOOD · NN ·
BEGINNER|INTERMEDIATE` (≈661px, still inside). The F5 kicker stays `THE ASK` if Day 3's convention is
adopted campaign-wide; that is the user's call, not a builder's.

Why a **name and not an ordinal**, which is the point of the dependency flag:

- Day 3, verified on disk today, uses `BASICS III` in the kicker and `STRUCTURES` as its tranche name.
  So `STRUCTURES` is **not available** to Day 4 (its topics 23-33 are lists, dicts, classes — the very
  word), and `BASICS IV` is *available but deliberately not claimed*: taking it would make Day 4's
  badge correct only if Day 3's ordinal ships as written, and Day 3 is being authored concurrently and
  may still be amended. A name cannot skip a number, cannot collide, and reads the same after any of
  Day 3's choices.
- It is also more accurate: `BASICS IV` claims a level the user did not set; `UNDER THE HOOD` claims
  exactly what parts 34-44 do (how the structures behave, and what that costs).
- **Named fallback if the user rejects the idiom** (it is an English car idiom, and this audience hears
  English as a second language — though this string is chrome, never spoken): **`THE COST`**. Either
  string is fine; an ordinal, `STRUCTURES`, or anything containing `O(` or `BIG O` is not (the last
  would smuggle notation into the kicker of all seven no-notation parts, against § 5.3).
- **Flag for the user:** if the campaign wants `BASICS IV` for feed ordinal consistency, that is a
  campaign-level decision requiring Day 3's confirmation, and every Day 4 kicker changes in one sweep
  before the first render. Do not decide this inside a builder's session.
- Difficulty per part, from the day-4 manifest's `[B]/[M]` tags, never invented: a `[B]` part is
  BEGINNER, an `[M]` part INTERMEDIATE. 41 and 42 are the two most likely to be INTERMEDIATE; a worker
  without a manifest tag for their part reports the gap instead of guessing.

## 8. Carrier plan — three waves, seven carriers

Eleven parts, twelve families, four genuinely new *mechanisms* (fixed-px SVG canvas, the bit rung, the
angled fan, the notation token) and one new rung the other seven depend on (R2). Being honest about the
count: **this tranche wants three waves, not two.** Day 3 shipped eleven workers at once with no
carrier wave and accepted the rework; Day 4 has a cheaper option because R2 and the SVG canvas each
appear in five parts, so paying for them twice is enough.

**Wave A — 4 carriers. Nothing else starts until their frames have been snapshot-READ (not
`check`-passed; § 14's findings were all invisible to `check`).**

| part | proves | what wave B inherits from it |
|---|---|---|
| **41 Big O notation** | the fixed-px SVG canvas (§ 3.3), `pathLength` draw-on, stroke floors, HTML-over-SVG labels, the chart's lane law, and the whole notation rendering incl. `.pb-sup` | every use of the SVG canvas and of notation |
| **34 Circular buffers** | **R2** — the new default rung (112 pitch, x 100) — plus the wrap arc, the head marker and the overwrite/lost-value exit | 38, 39, 43, and 44's strip sizing |
| **35 Bloom filters** | **R3** (16 bits in two lanes of 8) and the angled fan with 18px heads + the no-hash-value law | any bit grid, any diagonal, arrowheads |
| **36 LRU cache** | the right-to-left promotion reorder and the eviction that fades inside the content box, plus key chips pointing into a chain | 37's chain, 38's chain birth, 21-family reuse |

**Wave B — 3 mid-carriers.** Each proves a *composition law* on atoms A already proved.

| part | proves |
|---|---|
| **42 Time vs space** | G17's balance — a rotate on a beam whose pan labels never rotate; the authored-y state table |
| **43 Binary search** | G24's four authored range bars, cross-fade instead of a sliding bar, and "eliminated loses solidity, keeps its digits" |
| **38 Hash collisions** | G22's hanging chain — R2b as a rung, `scaleY` birth from the top, connector-then-link ordering |

**Wave C — 4 clones.** Each part's atoms are all proven by then; these four should be pure clone jobs.

| part | clones from |
|---|---|
| **37 Array vs linked list** | pb-21's R1 row + pb-22's chain + 34's strip + 41/42's notation chip (G26's stacked lanes are the only new thing, and they are positions, not atoms) |
| **39 Dynamic arrays** | 34's R2 (twice) + pb-21's right-to-left shift law + P2 drop-in |
| **40 Tuples vs lists** | pb-16's labelled G4 split + v2.1 § 4's border law + one 3-border shackle (40's F3 shackle is the only new atom; snapshot-read it once, it is four CSS borders) |
| **44 Bubble sort** | pb-21's R1 row exactly, pb-22's "boxes hold still", and the compare bracket |

**Wave gates.** B starts only after A's four report their *settled px in writing* (each divergence,
each new number, each thing that had to change) and the campaign owner folds corrections into this
file's § 4 blocks and bumps the version. C starts after B's three have been read the same way. A Wave
B/C worker who finds a number in this file that does not survive their snapshot **reports it and stops**
— they do not ship a private variant, because a private variant is how eleven films become eleven looks.

## 9. Runtime reality: the words-per-part budget

Inherited and re-verified: `studio voice <dir> --speed 0.93`, **always the flag**. `studio.mjs:113`
still reads `house[\`voices.${lang}\`]` while `.agents/design.md` nests the map at
`voice.voices.en`, so the house lookup still misses and an unflagged run still lands on
`VOICE_DEFAULTS.en.speed` = **0.74**. `studio voice <dir> --dry` must print `speed=0.93` before any
audio is accepted. `voice_speed:` in `BRIEF.md` is documentation only.

Measured rate at 0.93: **3.24 words/second**. Air is fixed at ~1.0s per frame (F1-F4) plus ~2.0s on F5
= **6.0s**. Target film 29-34s, so:

| | arithmetic |
|---|---|
| speech window | 29 − 6 = **23.0s** … 34 − 6 = **28.0s** |
| **spoken-words budget** | 23 × 3.24 ≈ **75** … 28 × 3.24 ≈ **91** |
| per frame (5 frames, 85 words) | F1 10-12 · F2 18-20 · F3 20-22 · F4 18-20 · F5 10-12 |

- **Over 91 words is a gate item, not a rewrite.** Explain lines may be re-cut for pacing only under
  Day 2 § 3's policy, and Day 4's explain lines arrive pre-cut by the campaign owner; a frame worker
  touches nothing. Report the count; the owner decides.
- **Notation is free of budget** (§ 5.6): the symbol is a screen token, and the plain-English line
  replaces a longer spoken clause. A part that must "explain Big O in words" is a part 6 words over
  budget for no gain.
- **Under 29s:** grow F5's pad first (F5 loops under platform chrome; air there is shape — pb-11 gave
  it 2.02s, and 4.0s of F5 pad is legal). Then merge two beats that carry one idea into one frame
  (change the *shape*, never the words). Never add narration. Still under 29s → report.
- **Frame durations come from the measured `audio_meta.json`, plus authored air in `STORYBOARD.md`.**
  Never hand-write a duration table; `studio voice` syncs, `studio cues` measures.
- `SCRIPT.md` headings stay exactly `## Line N — Title (Frame N)`, and `audio_meta.json` must have 5
  lines. A sixth word of that rule's cost was one frame silently missing from a shipped film.
- Ceiling 54s, unchanged; nothing here approaches it. Floor is the 29s target, and Day 2 already
  established that a part under 30s ships *reported*, not padded with words (pb-21 at 29.13s).

## 10. Where a builder will want to improvise, and must not

| temptation | the settled answer |
|---|---|
| "this row needs 7 cells" | R2 holds 8. R1 holds 6. There is no 7-wide rung; use R2 and one dashed empty. |
| a third rung "just right" for a bit grid | R3 is 64×64 at pitch 88. 48px and 80px are the two sizes that will get suggested; both fail § 3's count test. |
| `font-size: 24px` on a tick label "because it's an axis" | 28px floor or `--muted` chrome + `data-layout-ignore`, and if the label is content it is not chrome — fewer ticks. |
| "the axis needs a grid" | The campaign's ground IS a dot grid at 56px. A chart grid fights it. Axes only. |
| `O(n^2)` because typing `^` is easier than `<sup>` | § 5.5. A caret in display type reads as code and teaches nothing; a real superscript is markup, not a glyph. |
| amber for "the important curve" | Amber is *this beat's* word. A permanently amber curve is a decorative amber, and § 1 says the next amber stops meaning "listen here". |
| coral on the eviction / the collision / the overwrite | § 6. Zero coral in ten parts, named per part. |
| "I'll widen the beam with a width tween" | Nothing layout-tweens. Authored states, `scaleX`/`rotate`/`x`/`y` only (known-traps § 11). |
| "SVG is easier for the node connectors too" | Axis-aligned connectors stay the CSS atoms pb-22 shipped, at pb-22's numbers. The canvas is for what cannot be a straight horizontal/vertical div. |
| a fourth halving pass, or 8 bubbles on screen | § 4 G24 / G25's counts. A row of 8 halves three times; a 4-cell sort is what finishes in the frame. |
| `BASICS IV` because it looks like the obvious continuation | § 7. It is a campaign decision needing Day 3's confirmation; the badge in this file is what ships. |
| matching Day 3's unproven tree/bucket sizes | Day 3 has no carrier wave. Clone Day 2's shipped px and this file's rungs; cite Day 3 only for lane *positions* that already match. |
| adding a `sups` feature for `n²` | § 5.5's non-additive `font-feature-settings` trap. |
| "one more arrow, the fan looks better with four" | Three arrows, three hash chips, three bits (§ 3.1). The probe pins k = 3. |

## 11. What this file does NOT decide (open at the gate)

1. **Badge confirmation** — `UNDER THE HOOD` vs `THE COST` vs a campaign-wide ordinal sweep (§ 7).
2. **Whether 41/42's notation also enters the F1 hook line on screen** (currently: no; hooks are the
   user's verbatim words and the hook files contain no notation).
3. **R2's suitability for a 500-item list** (part 37's counter says 500, the row shows 4). If the user
   wants the row to say N = 501 honestly, that is a copy decision, not a frame decision (§ 9's no-new-words).
4. **Whether the 4-part Wave A / 3-part Wave B / 4-part Wave C split is the schedule** — the alternative
   is Day 3's all-at-once risk, and the studio's rule says a broken layout paid eleven times is the
   expensive failure.
5. **The day-4 ledger** (`series-bible-day4.md`, another owner's file): every number this file quotes
   (3 steps on 8, `SLOTS 100`, `WRITES 250`, `BITS 16`, `SET 3`, the two 40 error strings) must appear
   there as executed output with the probe path, or it does not go on screen.
