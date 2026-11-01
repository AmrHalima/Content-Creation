---
version: 3.0
name: prog-basics frame (video / frame layer) — Day 3 / STRUCTURES tranche
campaign: prog-basics
identity: the bench
derived_from: frame-day2.md v2.1 (which is derived from frame.md v2), plus seven marks this tranche needs
inherits: everything Day 2 ships — palette § 1, ramp § 2, ground § 3, canvas § 5, primitives § 7,
  copy law § 9, the § 14 carrier findings. Restated here in Day 3's own words because **there is no
  carrier wave**: eleven workers start at once and none of them gets to ask a neighbour what the number
  was. Where this file and frame-day2.md disagree, this file wins for parts 23-33; Day 2 stays the
  authority for parts 12-22, whose renders are immutable to their own sources (known-traps § 15).
adds: G9 pile · G9 line · G10 jump/probe · G11 tree (and its -bst / -heap / -trie bindings) · G12 graph
  · G13 back-pointer · G14 halving field · G15 service lane · the BASICS III badge · the Day 3 colour
  law (zero coral) · the pseudocode-labeling rule · the counted-pair table
supersedes: nothing. Day 3 is additive.
unit: the frame — 1080x1920 portrait only, this campaign
principle: >
  every colour means something the learner is being taught · every second has visible motion · every
  number and fragment of output on screen is executed output, never recalled · and in this tranche
  specifically: **every new shape is derived here once, not invented eleven times.**
fonts_on_disk: Space Grotesk 400/700 (display, labels, captions) · JetBrains Mono 400/700 (code,
  chrome) — copy from `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the **v2 set** with its
  two OFL files), NOT the Inter/Caveat v1 lineage named in Day 1's bash block.
caption_skin: **reused unchanged from Day 2** — `writing/prog-basics/caption-skin-day2.html` copied to
  each project as `.hyperframes/caption-skin.html`. Day 3 adds no caption state, no new band position
  and no new word class, so forking it would only create a second file to drift.
aspect: 1080x1920 · fps 30 · frames per part 5 · voice Kokoro af_heart @ 0.93, no BGM, no SFX
---

# prog-basics — Frame spec v3.0 ("the bench", STRUCTURES tranche)

Copy this file to `<project>/frame.md` at project start. `.agents/design.md` remains the workspace
brand truth for brand deliverables; this campaign deliberately does not inherit it (Day 1's ruling,
restated in v2's header): the audience is first-week learners on a phone, not practitioners.

## 0. Read this before authoring a frame

You are one of eleven workers building simultaneously. **Nobody is proving your mark for you.** Two
rules follow:

1. **Do not re-derive a number that is in this file.** Every geometry figure below is either copied
   from a shipped Day 1/Day 2 frame (with the file named) or computed once here. If you cannot find a
   number, that is a *finding to report*, not a licence to invent.
2. **If a new mark's geometry does not survive your own snapshots, stop on that frame and report it
   loudly.** Name what you tried, what the pixels did, and which authored number is wrong. A quiet
   variant is how eleven films become eleven looks — the exact risk the user traded away carriers to
   avoid. `LEARNINGS-PROPOSALS.md` is where the reconciled version lands, after the dispatcher reads.

## 1. Palette and colour roles (quote hex verbatim, never round)

| role | token | value | what it means |
|---|---|---|---|
| ground | `--ground` | `#15181D` | the board every frame shares |
| panel | `--panel` | `#1F242C` | interior of any box, node, plate or chamber |
| panel raised | `--panel-2` | `#262C36` | titlebars, tabs, chips, terminal strips, bars in G14 |
| line | `--line` | `rgba(255,255,255,0.16)` | 3px borders **and everything a viewer counts** |
| line faint | `--line-faint` | `rgba(255,255,255,0.08)` | rails, dividers, cell hairlines — **never a countable path** |
| ink | `--ink` | `#F4F1EA` | everything the learner reads |
| muted | `--muted` | `#9BA6B2` | chrome only: kickers, badges, filenames, plate labels |
| **say** | `--say` | `#FFD166` | **the word the voice is on right now** — one arrival per beat |
| say-ink | `--say-ink` | `#22201B` | text sitting on an amber highlight |
| **value** | `--value` | `#5AD6A0` | **a value: what lives in a box, what printed, what a walk landed on** |
| err | `--err` | `#FF6B5A` | an error the interpreter actually raised — **unused in Day 3, see § 7** |

Contrast on `--ground` (measured in v2): ink 14.9:1 · say 11.3:1 · value 8.6:1 · muted 7.0:1 ·
err 5.1:1. On `--panel` each drops ~0.6 and stays above 4.5.

Contracts, not taste:
- **Never amber for a value, never mint for emphasis.** They are the lesson.
- **One accent arrival per beat.** Two `--say` plates on screen at once is a finding (pb-14's BASE plate
  and a live keyword collided twice in Day 2).
- A `--say` plate **inside an element dimming to 0.42 fails contrast** (measured 2.87:1). Retire the
  plate to ink *before* the dim begins.
- **Dimming is never `opacity` on a container.** `opacity: 0.42` on a row puts its digits at 1.3:1.
  Dim the *background and border* (`rgba(31,36,44,0.42)`, `rgba(255,255,255,0.08)`) and set the digit
  to `rgba(244,241,234,0.62)` — Day 3 needs this fourteen times (discarded tree halves, refused
  duplicates, served nodes, deleted nodes).
- **A marker straddles an edge, never centres on a value** — pb-21's first jump beat blanked the very
  number it pointed at.
- **Anything a viewer counts gets `--line` (0.16) and its own lane.** pb-21's four faint move-trails
  merged into one line mid-flight at phone size. Day 3's countables: tree edges, graph edges, back
  pointers, the 20 field rows, bucket hops, elbow runs. `--line-faint` is for cell hairlines and rails.

## 2. Type ramp (container-query units on a 1080-wide frame)

| slot | face / weight | size | notes |
|---|---|---|---|
| hook display | Space Grotesk 700 | 9-11.5cqw | line-height 1.04, tracking -0.01em, **≤7 words AND ≤14 characters per group** (v2 § 14: longer groups wrap into the element below) |
| concept keyword | Space Grotesk 700 | 7-8cqw | amber sweep behind, ink → `--say-ink` |
| hero box value | Space Grotesk 700 | 9-12cqw | mint, centred |
| node value (tree/graph/trie) | Space Grotesk 700 | 4.6cqw (~50px) | mint; single letters at 6.2cqw in a 148×96 node |
| row/chamber value | Space Grotesk 700 | 5.6cqw | pb-21's `.f2-box .pb-val` |
| code | JetBrains Mono 400/700 | 2.9cqw (~31px) | floor 28px (known-traps § 13); 700 only on the token being named |
| output / terminal | JetBrains Mono 700 | 2.9cqw | mint on `--panel-2` |
| counted tag (READS/MOVED/STEPS…) | JetBrains Mono 700 | 2.7cqw, tracking 0.16em, upper | pb-21's `.f3-tag`: h 66, `--ink`, `data-layout-allow-overlap` |
| kicker, badge, language chip | JetBrains Mono 500-equivalent | 1.55cqw, tracking 0.16em, upper | `--muted`, `data-layout-ignore` |
| cell role label (`PREV`/`NEXT`/`VALUE`) | JetBrains Mono 700 | 1.85cqw | `--muted`, `data-layout-ignore` |
| annotation line | Space Grotesk 400 | 2.9-3.2cqw | `--ink` at 78% alpha, one clause only |
| caption line | Space Grotesk 700 | 46px at 1080 wide | the Day 2 skin, band 1024 |

**Every frame that carries code needs, on its stylesheet (not just the code frame):**
```css
font-variant-ligatures: none;
font-feature-settings: "liga" 0, "calt" 0, "dlig" 0;
```
JetBrains Mono otherwise ligates `<=` into `≤` and `->` into an arrow — **invalid Python printed for a
learner to type** (v2 § 14). Day 3 is the arrow-and-comparison tranche (every structure has both), so
this is the highest-probability defect in the tranche. It is on all five frames of every part.

## 3. The ground (identical in every frame, so the board never reloads)

Unchanged. Lowest clip band of every frame paints `.gnd`: `--ground` fill · dot grid
`radial-gradient(circle, rgba(244,241,234,0.055) 2px, transparent 2px)` at 56px pitch · two breathing
glows (amber `rgba(255,209,102,0.10)` upper-left at left −150/top 210/780×780; mint
`rgba(90,214,160,0.09)` lower-right at left 620/top 600/660×660) · a 1px `--line-faint` shelf at left
60 / top 1010 / 960×1.

**Every ground animation starts and ends at its own zero**: drift `y: 0 → 12 → 0` with
`duration = frameDuration / 2`, `yoyo: true, repeat: 1`; glow breathing the same. So the last frame of
scene N equals the first of scene N+1. No root-level ground layer (a re-assembly cannot break it). No
floating pill layer — that is v1 and it made the world reset five times a film.

## 4. Canvas geometry (the delivery surface, not a style)

| zone | y |
|---|---|
| top chrome safe | nothing critical above 230 |
| **frame content box** | 230 → **1004** (774px tall) |
| caption band | `--cap-band-top: 1024px`, height 320px |
| platform territory | 1344 → 1920, **always empty** |

Content is authored `left: 72px; width: 936px; box-sizing: border-box`. Absolute children of a clip band
take **frame coordinates, not wrapper-relative** (pb-21's F5 index strip rendered at y≈120, above its own
kicker, with a green `check`).

**Day 3's vertical plan — one grid for every structure mark, so parts cut the same board:**

| lane | y | used by |
|---|---|---|
| kicker / badge band | 230 h 44 | every part (`--muted` mono 1.55cqw, `data-layout-ignore`) |
| counted-tag lane (upper) | 288 h 66 | 23, 25, 26, 30, 32 (a tag that belongs with the object) |
| structure field | 292 → 868 | G11 levels 0-3, G14's 20 rows, G12's triangle, G9's pile |
| index / role strip | see each mark | always `data-layout-ignore` |
| counted-tag lane (lower) | 892 h 66 → 958 | 24, 27, 28, 29, 31, 33 |
| terminal strip | 900 h 72 | chamber parts (G3/G4), never in the same frame as the lower lane |
| **hard floor** | 1004 | nothing load-bearing crosses it, ever |

Two consequences a worker will otherwise discover the expensive way: **a G11 tree is capped at four
levels** (an L4 would sit at y 932 and reach 1028, inside the caption band), and **a part may have a
counted-tag lane or a terminal strip on a frame, not both**.

## 5. The inherited marks, with the numbers that are already settled

Quote these; they come off shipped files.

**G1 hook** — display type over the ground, ≤7 words per group, keyword swept amber inside the first
second of its own utterance. Nothing illustrated. Also the cover (§ 8).

**G2 box / chamber** — `--panel` `#1F242C`, **3px `--line`**, radius 22px, shadow
`0 18px 40px -18px rgba(0,0,0,0.7)`; name tab JetBrains Mono 700 2.5cqw `--ink` on `--panel-2`, 3px
`--line`, radius `12px 12px 0 0`, h 60, on the chamber's **top-left edge**. Empty state: 3px **dashed**
`--line`, no value, one dim mint caret blinking at 1s. Clone `videos/prog-basics-21-arrays/compositions/frames/02-row.html`
(`.pb-chamber`, `.pb-val`).

**G2b row** — N chambers in a line with an index strip beneath. **Shipped sizes: 142×152 cells, pitch
158px, first left x 74, value at 5.6cqw** (pb-21 `.f3-box`); index strip at **y 616, mono 2.2cqw,
`data-layout-ignore`**, digits arriving on P9 with the zero first. 6 slots max inside 936 (pb-21's row
lands its sixth at 864 → right edge 1006). **Day 3 uses this exact row for buckets (25, 26) and for the
heap's array lane (29).**

**G2c rooms** — chamber inside a chamber, inner wall drawn top→bottom as a scaleY rect (P4), not faded.
Clone `videos/prog-basics-07-scope/compositions/frames/02-rooms.html`. Day 3 uses it once: **part 33's
"the node holds three things"** if a worker needs a containment beat instead of three cells.

**G3 code chamber** — `--panel` + `--panel-2` titlebar **64px**: filename mono `--muted` left, language
chip right (`PYTHON` in `--say` on a 2px `--say` border). **Max 4 code lines + 1 terminal strip.**
Python's single quotes in every fragment. Every chamber line is code **executed on this machine**; see
§ 6's pseudocode law.

**G4 split** — two chambers side by side, each ≤3 lines, each its own titlebar + chip. Clone
`videos/prog-basics-10-switch/compositions/frames/04-two-languages.html`.

**G5 CTA** — headline **≤9 words and ≤24 characters at 6.4cqw in a 176px box** (else it wraps into the
pill); the mechanic verb as a solid `--say` plate (`--say-ink` text); badge line in muted mono. Last
frame loops under platform chrome: holds alone, everything above y 1004. **Day 3 badge string:
`PROGRAMMING BASICS · BASICS III · NN · BEGINNER` (a `[B]` part) or `… · INTERMEDIATE` (a `[M]` part)**,
with the short form `PROGRAMMING BASICS · BASICS III · NN` in the kicker band and `THE ASK` as the F5
kicker — exactly pb-20/21/22's three-badge convention. **`BASICS III` is new; do not write `BASICS II`
on a Day 3 frame** — and do not touch pb-11's shipped `SERIES DONE`, which belongs to its own bytes.

**G6 call-stack card** — h 84px, `--panel`, 3px `--line`, radius 22px, G2 shadow; each card inset +64px
right and +96px down, 7 max; **widths authored per card (936 → 848 → 760 → 672), never a width tween on
a flex child**; name tab `.f2-tab` h 38 mono; pending work on the right edge in `--muted` mono
`.f2-pend`; value band `.f2-valband` h 43; amber plate `.f2-hl` bleeding `left:-9px; right:-9px`.
Clone `videos/prog-basics-15-base-case/compositions/frames/02-descent.html` (and pb-14's `03-stack.html`).
Day 3 uses it as the **atom for G9 pile**, not as a stack of calls.

**G7 node chain** — node 176×108 (row) or 264×108 (anatomy row) or 480×196 (hero), `--panel`, 3px
`--line`, radius 22px, G2 shadow, split by a 3px `--line-faint` hairline (`.g7-div`, `left:50%`,
`top:14px; bottom:14px`; hero inset 24). Value cell Space Grotesk 700 `--value`; next cell JetBrains
Mono 400 `--muted`. Connectors: **`.g7-bar` 3px `--line` divs 28px wide at the row's vertical centre
(y 593 for a row at top 540)** and **`.g7-chev` 11×11 border chevrons** — CSS divs, **never SVG in a
scaled container** (pb-11's drift finding). **Walk: 176×108 nodes at pitch 200, first left x 72, ring
196×126 at `node.left − 10`, one pitch per step, boxes never move.** Terminator chip `.g7-chip`
`--panel-2` 60×56 at y 566. Clone `videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html`
(anatomy, hero) and `.../03-walk-prepend.html` (walk, prepend, ring).

**G8 direct address** — Day 3's **26 and 31** only. Copy pb-14's chrome **verbatim**: four corner
brackets 3px `--line-faint`, 72px arms, inset 48px, framing the content box at y 932 → 1004; top REC
strip (16px dot blinking on a 1s yoyo, `REC` mono 2.4cqw, timecode `00:0N` JetBrains Mono 400) — **all
three `--muted`, never coral** (and Day 3 raises no errors anyway, § 7). Lower third `--panel-2` radius
12px, badge mono above the title in Space Grotesk 700 `--ink` 3.4cqw, top edge ≤ y 940. Spoken line
left-aligned at x 72, 9-11cqw, P1 sweep on the word being said. Timecode reads `tl.time()` through a
**time proxy** — never a wall clock (the renderer seeks). F4 is a **cutaway**: the G3 chamber at 700px
wide over the direct-address ground, a 0.18-opacity scrim only, chrome still visible around the edges.
**Chrome never fades** (one continuous shot) and **F1's first line gets no entrance tween** or the cover
renders blank. **Consecutive-G8 rule**: a frame must differ from its neighbour in wipe direction **and**
introduce one non-chrome element. Clone `videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html`
and `.../04-cutaway.html`; pb-17's `01-address.html` is the second proven copy.

## 6. Day 3's seven new marks — fully derived, no re-derivation allowed

Each is specified as: **what it draws → geometry → colour role → motion contract → the atom it is built
from → the clone source → which parts use it.** Build from the named file; change only the parts the
spec tells you to change.

### G9 `pile` — a stack you can count from the top (part 23)

**Draws:** four plates on a shelf with a lid, and one value that survives being popped.
```
plate   : .pb-chamber at 520x84, left 280 (centre x 540), y 332 / 424 / 516 / 608 (pitch 92),
          radius 22, 3px --line. Value: Space Grotesk 700 5.6cqw --value, centred.
lid     : a 6px --line bar, left 260, width 560, y 320. It is the TOP. Reads --line, never --say.
TOP tag : mono --muted 1.85cqw "TOP", left 848, y 300, data-layout-ignore, with a 12px CSS chevron
          pointing down at the lid (straddles the lid's edge, covers no digit).
shelf   : 3px --line-faint, left 240, width 640, y 700 — the plate the table holds.
counted : .f3-tag lane at y 892 h 66 -> PUSHED 3 / POP = 3, TOP = 2
```
**Colour:** the plate being operated on flashes a 3px `--say` border for 0.30s (one arrival). Returned
value = mint chip at the pile's original top position, 240×64 `--panel-2`, so `POP = 3` stays on screen
after the plate leaves.
**Motion contract:** `push` = P2 `drop-in` from `y: -210` (`bounce.out`) onto the pile top + the lid
lifts `y: -12` and returns. `pop` = the top plate exits `x: +260, y: -150, opacity: 0` (0.42s
`power3.out`) **while** the mint chip arrives in its place; the plate below does not move. Empty pile =
a dashed empty chamber (G2's `empty`) with **no caret** — nothing is waiting to be filled, that is the
point.
**Built from:** G6's `.f2-card` h 84 (no staircase, full width, 4 max) + `.pb-chamber` + `.f3-tag`.
**Clone:** `videos/prog-basics-15-base-case/compositions/frames/02-descent.html` for the card,
`videos/prog-basics-21-arrays/compositions/frames/02-row.html` for the chamber,
`.../03-shift.html` for the tag.
**Not:** a call stack. 23's function-calls beat is a **chip row** (`UNDO`, `BACK BUTTON`, `FUNCTION
CALLS`, `--panel-2` mono `--muted`), not a third diagram, and it re-pays part 15's `DEPTH 1000` chip
rather than re-raising anything.

### G9 `line` — a queue with a front, a back, and a window (part 24)

**Draws:** four nodes in a row that **never slide**, a service window at the front, an intake slot at
the back, and a marker that travels instead of the boxes.
```
nodes   : G7 walk geometry exactly — 176x108, pitch 200, lefts 72 / 272 / 472 / 672, top 540.
          Cell contents: mono 700 --value letters A B C D at 3.6cqw (pb-22's .f3-node scale).
          Single quotes in the chamber, none in the diagram: plates read A, B, C.
window  : a 3px --line vertical bar at left 66 (i.e. 6px OUTSIDE node 0's own border at x 72, still
          inside the canvas), running y 508 -> 688 (180px tall), plus an "OUT" chip: mono --muted
          1.85cqw, --panel-2, 72x44, left 96, y 696, data-layout-ignore. It straddles the row's left
          edge and covers no letter.
front   : mono --muted 1.85cqw chip "FRONT" at left 72, y 660, width 176, text-align center.
back    : same, "BACK" at left 672, y 660.
intake  : one .g7-bar, 3px --line, left 848 (node 3's right edge), width 60, y 593, with a .g7-chev
          at x 896 pointing LEFT (into the row), plus an "IN" chip 60x44 at left 900, y 696.
          Span 72 -> 960, inside the 1008 right edge.
counted : .f3-tag lane y 892 -> SERVED 1 / MOVED 0
```
**Colour:** the served node flashes a `--say` border as it is named, then leaves through the window
(`x: -220, opacity: 0`); the arriving node gets P2 `drop-in` from the right at the back. Everything
departed or refused dims via the § 1 background/border rule, never container opacity.
**Motion contract:** dequeue = the departing node moves, **every other node holds** (this is pb-22's
`MOVED 0` argument, and it is what makes 24 not look like 21's shift). Then the **FRONT chip travels**
right one pitch (200px, 0.4s `power3.out`) — the marker moves, the boxes hold. Enqueue = one new node
at the back + one 24px connector redraw (P8). Nothing else changes.
**Built from:** G7 walk + `.g7-chip` + `.f3-tag`.
**Clone:** `videos/prog-basics-22-linked-lists/compositions/frames/03-walk-prepend.html`.
**Hazard:** do not animate a `y`/`x` tween on the whole row to "advance the line". That is a shift and
it contradicts both 21 and 24; pb-22 already found that a block-level tween on the chain collides with
the caption band.

### G10 `jump` / `probe` — hashing drawn as a hop (parts 25, 26; 26 reuses it once)

**Draws:** a key chip, a `HASH` box that shows **no number**, a row of buckets, and two counted ways to
answer the same question — one hop, or read them all.
```
key chip: 240x64 --panel-2, radius 12, 3px --line, JetBrains Mono 700 2.9cqw --ink, centred at
          left 420 / y 292. Text with Python single quotes: 'Sara'.
hash box: 200x84 --panel, 3px --line, radius 22, left 540 / y 400, tab "HASH" (G2's tab geometry),
          interior mono --muted 2.2cqw "key -> position" -- the ASCII arrow with ligatures OFF,
          and NEVER a number. See § 7's law: a hash value is not on-screen output here.
buckets : G2b row, 6 slots — 142x152, pitch 158, lefts 72 / 232 / 390 / 548 / 706 / 864, top 400.
          Occupied buckets hold Space Grotesk 700 4.6cqw --value; empty ones are 3px dashed --line
          (G2's empty state, no caret).
index   : .f3-idx strip at y 616, mono 2.2cqw --muted, digits 0..5, P9 arrival, zero first,
          data-layout-ignore. It is a diagram lane: never caption it "memory".
counted : .f3-tag lane y 288 h 66 -> JUMPED 1 (left 270, w 300) / LOOKED AT 6 (left 590, w 220)
          -- pb-21's exact two-tag positions and widths.
```
**Colour:** the bucket that answers gets a 3px `--say` border for 0.30s and then back to `--line` with
its value in mint. The linear-search beat uses **no colour at all** — the counter is the point.
**Motion contract:** `jump` = the key chip travels one authored connector (a `.g7-bar` + chevron, 3px
`--line`) from HASH to **one** bucket, which flashes `--say`. Boxes never move; `JUMPED 1`. `look` = a
cur ring (G7's ring pattern, 162×172 at `bucket.left − 10`) steps all six lefts in a **deterministic
0.12s stagger**, `LOOKED AT` ticking 1→6 on P9. 26's `probe` = the same ring, one bucket, and an `IN`
mint chip. 26's refused duplicate = an arriving chip **bounces** (`scale: 1 → 0.94 → 1`, then
`x: +0` — it never enters) while `ADDED 2 / KEPT 2` ticks.
**Built from:** G2b row + `.f3-marker` + `.f3-tag` + `.g7-bar`.
**Clone:** `videos/prog-basics-21-arrays/compositions/frames/03-shift.html` (row, marker, both tags) and
`.../02-row.html` (chamber).
**Hard constraint from the ledger:** the bucket a key lands in is a **composition choice** (a fixed index
authored in the frame), never the result of `hash('Sara')`. Executed here: `hash('Sara')` returned three
different numbers in three runs (`sys.flags.hash_randomization` → 1), and Python dicts iterate in
**insertion** order. So: no `hash(...)` value on any Day 3 frame, no claim that the bucket row is
Python's layout, and the caption must not say "see, it went into slot 3 because that is where the hash
points" — it says "one possible position".

### G11 `tree` — a hierarchy with countable edges (part 27; 28, 29, 31 bind to it, they do not redraw it)

**Draws:** a root, children below it, leaves at the bottom, and **elbow connectors** so a learner reads
the same lines they read in a folder view.
```
node    : 148x96 --panel, 3px --line, radius 22, G2 shadow. Value Space Grotesk 700 4.6cqw --value;
          single letters 6.2cqw. Root node carries a G2 name tab reading ROOT (mono 2.5cqw --ink on
          --panel-2, h 38 like pb-15's .f2-tab, not 60).
levels  : L0 y 292, L1 y 452, L2 y 612, L3 y 772 (pitch 160 = node 96 + 64 gap).
          L3 bottom is 868 -> the lower tag lane 892..958 clears it. MAX FOUR LEVELS. An L4 would
          sit at 932 and run to 1028, inside the caption band. That is a layout error, not a deep tree.
columns : nodes in a level are centred as a group inside the 936 band:
          left = 72 + (936/n)/2 - 74 + i*(936/n)
          n=1 -> 466 | n=2 -> 232, 700 | n=3 -> 154, 466, 778 | n=4 -> 115, 349, 583, 817
          (n=4 right edge 965; n=3 -> 926; both <= 1008)
elbow   : THREE axis-aligned 3px --line divs per edge, no rotation, no SVG, no diagonals:
          down-stub (parent centre-x, y parentBottom -> runY), run (x parentCentre -> x childCentre at
          runY), up-stub (child centre-x, runY -> childTop). runY = 420 / 580 / 740 (the exact middle
          of each 64px gap). Overlapping runs share the same bar -- do not draw two.
leaf    : a node with no children gets a mono --muted 1.85cqw chip "LEAF" under it (y child+20,
          data-layout-ignore). Only leaves get it.
counted : lower lane y 892 -> LEAVES 4 / NODES 7 (27)
```
**Colour:** edges are `--line` (0.16) because a viewer counts paths; the hairline inside a node (if a
part splits one) is `--line-faint`. The node the voice is on gets a `--say` ring 168×116 at
`node.left − 10` (G7's ring rule, +10 bleed all sides).
**Motion contract:** descent = P2 `drop-in` per node, **parent before child**, one per spoken clause;
each elbow's three bars draw in 0.14s each (`power3.out`, stub → run → stub), so an edge is *built*,
not shown. A leaf lights mint as it is named. `STEPS`/`LEAVES` count on P9. Dim a discarded subtree via
§ 1's background/border rule.
**Built from:** `.pb-chamber` + `.g7-bar` + `.f3-tag` + `.f2-tab`.
**Clone:** `videos/prog-basics-21-arrays/compositions/frames/02-row.html` (node),
`videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html` (bar/chevron/chip/tab).
**Hazards:** (a) **depth vs the 1080-wide frame** — four levels is the ceiling, so 27's CTA tree
(root→2→4) is L0/L1/L2 and its fourth level is *implied by the counter*, not drawn; (b) at n=4 the
column pitch is 234 and the node is 148 wide, leaving an **86px gap** — an elbow run of 86px is short,
so keep the up-stub and down-stub at 32px and never let two runs overlap in the same x range; (c) a
three-child node is legal geometry but **readable at n≤4 only** — 27's "org chart" chip is where a
wider fan goes, not on the tree.

**G11-`bst` (part 28).** The same grid with an ordering law drawn: every node left of its parent gets a
mono chip `SMALLER`, right gets `LARGER` (`--muted`, 1.85cqw, `data-layout-ignore`), placed **at the
elbow's up-stub**, not on the node. 28's tree is L0 root 8, L1 4 / 12, L2 3 / 6 under the 4 (executed
insertion order `8,4,12,3,6`). The search beat: the ring visits 8 → 4 → 3 and `STEPS` ticks **1, 2, 3**
— the counter counts **nodes looked at**, and the two left-turns are drawn as two amber arrowheads,
never numbered. One frame may show `STEPS 3`; another may show the same ring against `LOOKED AT 20`.
Never both counts for the same walk.

**G11-`heap` (part 29).** The tree **plus its array**, bound by index math, and this is the part's whole
lesson: the heap is a tree you can store in a row.
```
tree    : G11 with L0 1 / L1 3, 2 / L2 7, 5 (executed: heappush 1,3,2,7,5 -> [1,3,2,7,5]).
array   : G2b row, five slots — 142x152, lefts 74 / 232 / 390 / 548 / 706, top 500, values
          1 3 2 7 5 mint; index strip y 716 mono 2.2cqw --muted 0..4, data-layout-ignore.
binding : one 3px --line stub per parent→child pair, drawn from the tree node's bottom centre straight
          down to its array slot's top centre (child of index i is 2i+1 / 2i+2: executed 1,2 / 3,4).
          The stubs are straight, so no elbows here and no crossings by construction.
counted : PATH 2 (levels 3 minus 1) / ROOT 1. And one mono chip "NOT SORTED" beside the array, because
          executed: h != sorted(h) -> True; and index 1 is 3 while index 2 is 2 -- siblings unordered.
```
`ROOT` is the only grab: the pop beat lifts the root node out and lets the last slot's value move up,
then one swap (executed: `heappop` → 1, remaining `[2,3,5,7]`, 1 sift-down swap).
**Clone:** 27's G11 frames for the tree, `pb-21/02-row.html` for the array.

**G11-`trie` (part 31).** Nodes are **letters**, so the node shrinks its value size and gains an END
flag. Same grid, `n≤4` per level, four levels max — which is exactly 2 shared letters + 3 branches:
```
L0 root chip: 96x96 --panel-2, radius 22, tab-less, interior mono --muted 1.85cqw "" (an empty square
      is the honest picture of a trie root -- it is not a letter). left 466, y 292.
L1 'c' : one node, left 466, y 452. L2 'a': one node, left 466, y 612.
L3 'n' 'r' 't': three nodes, lefts 154 / 466 / 778, y 772. Letters: JetBrains Mono 700 5.2cqw
      --value (a letter you type is code, not speech -- so mono, and ligatures off).
END dot: a 16px --value mint circle at the node's top-right (right: 12, top: 12) on nodes that finish a
      real word. Executed: path 'ca' exists True, 'ca' is a word False -> the 'a' node carries NO dot,
      the n/r/t nodes each carry one. This single dot is 31's lesson.
counted: SHARED 2 / BRANCHES 3 (lower lane 892)
```
**Motion:** letters arrive root-down one per clause (P2 + elbow draw); the autocomplete beat dims the
non-matching branches and the three surviving dots pulse once (P7 `pulse-set`, 0.1s apart).
**Hazard:** a trie wants width. Three letters at L3 is fine at n=3; **four is the cap**, so 31 may show
at most three words, and the pinned comment (not the frame) carries the "what if 500 words share `c`"
question.

### G12 `graph` — nodes and edges that can lie about terminating (part 30)

**Draws:** three node-chambers in a triangle, straight connectors with one arrowhead each, a weight
chip, and the cycle that does not stop.
```
nodes   : G11's 148x96 chamber. A left 115 / y 360, B left 673 / y 360, C left 394 / y 700.
          centres: A(189,408) B(747,408) C(468,748). Letters 6.2cqw --value.
edges   : bars run EDGE-to-EDGE, never centre-to-centre, so they never cross a digit. Derive once and
          author the literals (unit = (dx,dy)/hypot; anchor = centre +/- unit*80, i.e. just outside a
          148x96 node):
            A->B : horizontal .g7-bar, left 263, top 406, width 410. Chevron at x 663 pointing right.
            A->C : centre vector (279, 340), hypot 439.9, angle 50.6deg.
                   left 240, top 470, width 280, transform: rotate(50.6deg); transform-origin: left center.
            B->C : centre vector (-279, 340), same length, angle 129.4deg.
                   left 696, top 470, width 280, transform: rotate(129.4deg); transform-origin: left center.
          All six figures were computed for this layout -- write them as literals, compute nothing at
          runtime, and snapshot-verify that each bar's far end stops at a node border.
weight  : --panel-2 chip 60x44, mono 700 2.9cqw --value digit, at the bar midpoint,
          data-layout-ignore. Executed weights: A->B 7, A->C 2, B->C 4; and the pair the part needs:
          direct 2 vs via B 11.
bidir   : two parallel bars offset --line y 586 / y 600 (±7 from the centre), chevron at opposite ends.
counted : EDGES 3 / WALKED 12 (upper lane y 288 -- there is no tag lane below the triangle until 892,
          and the CTA chip lives there instead)
```
**Colour:** edges `--line`. The `visited` set is a **chip row**, not a colour: each node visited gets a
mono `--muted` `SEEN` tab on arrival. The runaway walk is shown by `WALKED` climbing 3 → 6 → 9 → 12
with a mono tag `NO END` — **not coral** (§ 7).
**Motion:** P8 `arrow-run` per edge, one per clause; the walk beat runs a ring node→node→node→node
(A→B→C→A→B→C…) with the counter ticking; the fixed version stops at 3 once `SEEN` lands on A.
**Built from:** `.g7-bar` + `.g7-chev` + `.g7-chip` + `.f3-tag`.
**Clone:** `videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html`.
**Hazards:** (a) **crossings at phone size** — cap 4 nodes / ≤5 edges / **≤1 crossing**; the triangle has
zero, so any worker who adds a fourth node must place it outside the triangle's convex hull (a legal
slot is left 115 / y 700 for a `D`, with straight bars recomputed by the same hypot/atan2 form);
(b) an SVG `<line>` in a scaled container drifts into the platform zone (pb-11) — Day 3's rule is
**CSS bars only, rotated by a literal transform, in the untransformed layer**; (c) a curved edge needs
SVG or a border-radius trick, and **Day 3 draws no arcs**.

### G13 `back-pointer` — the same chain, now with a second road (part 33)

**Draws:** G7's node split into **three** cells, and **two** connectors per gap so you can see both
directions.
```
node    : 176x108 (G7 walk size), --panel, 3px --line, radius 22, G2 shadow.
          cells: PREV 58 | VALUE 66 | NEXT 52 -- hairlines .g7-div at x 58 and x 124, 3px --line-faint,
          top 14 bottom 14. Cell role labels: mono 700 1.85cqw --muted "PREV"/"NEXT" at the cell top,
          data-layout-ignore. Value: Space Grotesk 700 4.2cqw --value, centred in the middle cell.
          NO DIRECTIONAL GLYPH IN ANY CELL. Not "<-", not "⇄", not "->". The connectors are the arrows.
row     : top 540 (pb-22's row). Elements: head chip 60x56 at left 72 (y 566, --panel-2 mono, reads
          "None"); nodes at 204 / 452 / 700; tail chip at 948. Gaps 72px at 132 / 380 / 628 / 876.
          Span 72 -> 1008: exactly the content band, verified.
connect : TWO bars per gap — forward .g7-bar 3px --line at y 586 with chevron at its RIGHT end; back bar
          at y 600 with chevron at its LEFT end. 66px long each (gap 72 minus 3px chevron bleed).
ring    : G7's walk ring 196×126 at node.left − 10; a back-walk uses the same ring travelling RIGHT->LEFT.
counted : 2 CHANGES / WALKS BACK (lower lane y 892)
```
**Colour:** the two reassigned connectors carry **no colour flash** — they simply redraw (P8), 0.18s
apart, and the counted tag carries the beat. Two amber events inside one beat is a § 1 violation even
when they are sequential, and a connector is neither "the word the voice is on" (amber) nor a value
(mint). The deleted node dims via § 1's background/border rule; its digits drop to
`rgba(244,241,234,0.62)`, never an `opacity` on the container.
**Motion:** the back-pointer's arrival is P8 on the **second** bar only — the forward chain is already
on screen from the F2 beat (pb-22's "stillness is the argument"). Deleting B = two bars redraw in
sequence while `2 CHANGES` ticks 1 → 2, then the ring walks
**C → A** (B is gone) and lands, proving the chain survived.
**Built from:** G7 anatomy + `.g7-div` + `.g7-bar` + `.g7-chev` + `.g7-chip`.
**Clone:** `videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html` (anatomy, chip) and
`.../03-walk-prepend.html` (ring, walk).
**Hazards:** (a) **back-pointers colliding with the node chain** — a single 24px gap cannot hold two
bars plus two chevrons, hence 72px gaps and three nodes, not four; a worker who wants four nodes must
shrink the value cell, never the gap; (b) the user's own `None ⇄ A ⇄ B ⇄ C ⇄ None` is a **diagram**, and
U+21C4's coverage in the shipped woff2 set is **unverified** (no `fontTools` on this machine) — which is
moot, because the glyph is not Python either and would be a § 7 violation inside a chamber; (c) the LRU
beat is a **chip** (`LRU CACHE`, `+1 POINTER`), never a claimed implementation.

### G14 `halving field` — a million, drawn as twenty looks (part 28)

**Draws:** twenty rows, each one "what is still standing after this look", and a bar that shortens by
the **same 33px every step**.
```
rows    : 20, pitch 36, row height 30, first top 250 -> last top 934, bottom 964 (< 1004). verified.
number  : JetBrains Mono 700 2.9cqw --value, right-aligned in a lane at left 744 width 264.
          Executed chain, all twenty, no ellipsis (250 -> 500,000 etc. are floor halvings):
          1000000 500000 250000 125000 62500 31250 15625 7812 3906 1953 976 488 244 122 61 30 15 7 3 1
          They are authored display strings, so write them with thousands separators
          (1,000,000 / 500,000 / ... / 1); the separators are presentation, the VALUES are executed.
bar     : --panel-2 with a 3px --line left edge, left 72, height 30, and this authored width per row
          (936-slot scale reduced to a 660 lane: w = max(8, round(110*log10(v)))); it is a LOG axis and
          the frame says so:
          660 627 594 561 528 494 461 428 395 362 329 296 263 229 196 162 129 93 52 8
          The first seventeen shorten by exactly 33px -- a constant step per halving is what "about
          twenty" looks like. The last three differ because 15,625 halves to 7,812.5 floored, and row 20
          is the 8px clamp. Tag once, mono --muted 1.85cqw, data-layout-ignore: LOG SCALE.
steps   : a mono 700 2.9cqw --ink counter in the upper lane (y 288) ticking 1..20 on P9, one per row.
counted : STEPS 20 / LOOKED AT 20 -- and if the frame also shows the 3-node search, that one reads
          STEPS 3. Same law, two different walks, never two counts for one walk.
```
**Colour:** numbers and the counter are mint/ink; bars are neutral `--panel-2` — **no amber on this
frame**, because there is no single word the voice is on for twenty consecutive rows; the amber belongs
to the F3 keyword beat only.
**Motion:** rows arrive top-down on the same clock as `STEPS` (0.28s apart, `power3.out`, one per
spoken beat of "at each step you discard half"). Nothing scales — the rows are pre-authored widths
revealed, never width-tweened (a width tween on a bar in a flex context is a reflow; and § 14 forbids
it). Row 7 (15,625 → 7,812) gets a 3px `--line` bracket + a mono chip `FLOOR` (`--muted`,
`data-layout-ignore`) — the one honest correction to "halving".
**Built from:** `.f3-tag` + `.g7-chip` + a new row band.
**Clone:** `videos/prog-basics-21-arrays/compositions/frames/03-shift.html` for the tag and the
staggered-arrival pattern; `videos/prog-basics-22-linked-lists/compositions/frames/03-walk-prepend.html`
for the ticking counter.
**Hazard:** twenty rows in 714px is the densest frame in the series. If the row type reads below the
28px floor at phone size, **the answer is fewer rows and a bigger counter** (report it), not 24px type
with `data-layout-ignore` — this is content, not chrome, and § 13 of known-traps is a legibility floor
for exactly this reason.

### G15 `service lane` — a heap that serves, not a queue that waits (part 32)

**Draws:** 29's tree at half scale with a departure lane on the right, and two tuple chips that arrive
in one order and leave in another.
```
heap    : G11 with L0 (540 centre) and L1 only — two nodes at lefts 232 / 700, y 452. Root node tab
          reads "ROOT". Values mono 700 (these are tuples' numbers, so code face) 4.2cqw --value.
arrival : two chips, 280x64, --panel-2, 3px --line, radius 12, JetBrains Mono 700 2.9cqw --ink, at
          left 72 / y 640 and left 72 / y 712. Text exactly as executed: (5, 'low') and (1, 'urgent').
          Single quotes. Ligatures off.
served  : a --panel-2 slot 200x84 at left 736 / y 300, tab "SERVED" mono --muted 1.85cqw, holding the
          popped label in --value mono 700 2.9cqw.
tie     : the F4 beat -- two chips (1, 'low') and (1, 'urgent') arriving 0.2s apart, and a mono
          annotation under them: "l before u" -- --ink at 78%, 2.9cqw, one clause.
counted : FIRST 'urgent' / TIES BY SPELLING (upper lane y 288)
```
**Motion:** `push` = P2 `drop-in` into the tree with a sift-up path drawn (one elbow pair, P8);
`pop` = the root travels **right and up** into the SERVED slot (a 0.5s `power3.out` x/y tween) while a
`PATH 2` tag counts the two edges a replacement would climb. The tie beat is two chips pulse (P7) then
**one** leaves — the other holds, which is the visual for "ties break by spelling, not by turn".
**Built from:** G11 + G9 line's window idea + `.g7-chip` + `.f3-tag`.
**Clone:** `videos/prog-basics-15-base-case/compositions/frames/02-descent.html` (tabbed card) and
`videos/prog-basics-21-arrays/compositions/frames/03-shift.html` (tag lane).
**Law:** 32's "smaller number = higher priority" is a **convention and must be labelled** (`SMALLER =
EARLIER`, mono `--muted`), because Python's heap orders ascending and a learner arriving from a UI that
numbers `1 = low` will build the inverse.

## 7. Colour law, Big-O law, and the pseudocode law (three gates a worker cannot talk past)

1. **Day 3 ships ZERO coral.** `--err` means "an interpreter on this machine raised this". Every one of
   the user's eleven Day 3 examples is a happy path and raises nothing. Real errors exist for these
   structures (`KeyError`, `IndexError`, the `dict`-tie `TypeError`) and they are all **pinned-comment
   or reply-thread material**, listed in `series-bible-day3.md` § 4. A Day 3 render containing a coral
   pixel is a finding, not a style choice, and `verify` cannot see it — only a snapshot can.
   Day 3's two "danger" beats therefore use **chrome, not colour**: 30's runaway walk reads
   `WALKED 12` + a mono `NO END` tag in `--muted`, and 23's empty pile reads a 3px **dashed** `--line`
   chamber. Neither may borrow coral, a red dot, or a warning triangle.
2. **No Big-O notation anywhere on screen. Ever.** No `O(`, no `O(1)`, no `O(n)`, no `O(log n)`, no
   bare `n` standing for "the count". The voice may say **"log n" at most once**, and only inside the
   user's own hedged sentences in **28** and **29**. Every other runtime claim becomes a counted pair
   (§ 4b of the bible): `JUMPED 1 / LOOKED AT 6`, `STEPS 20`, `PATH 2`, `MOVED 0`, `WALKED 12`.
3. **A chamber shows only Python executed here; a diagram may show the user's API words.** `push`,
   `pop`, `enqueue`, `dequeue`, `root → (left, right)`, `None ⇄ A ⇄ B ⇄ C`, `push('low', 5)` are
   *diagram* vocabulary — legal as plate labels and motion names, **illegal as chamber code**
   (`[].push` raises `AttributeError: 'list' object has no attribute 'push'`, executed). A chamber that
   shows the Python equivalent tags each line with the API word in a mono `--muted` comment (`# push`).
   Fragments with no output here are **chips**: `NIL`, `HTML`, `FOLDERS`, `ORG CHART`, `DIJKSTRA`,
   `LRU CACHE`, `MIN-HEAP`, `MAX-HEAP`. A fragment may be drawn in a chamber only if its output was
   produced on this machine (v2 § 13, unchanged, and now load-bearing eleven times).

## 8. Covers, badges, and the tranche map

**F1 is the cover** — G1 for a code-card part, G8 for 26 and 31. Cover text is the hook cut to ≤6
words; the full hook is spoken. Ink on `--ground`, sharpest word on an amber plate. Badge:
`PROGRAMMING BASICS · BASICS III · NN · BEGINNER|INTERMEDIATE` (a `[B]` part is BEGINNER, an `[M]` part
is INTERMEDIATE — the shipped convention from pb-20/21/22). A G8 cover keeps its lower third and REC
strip so it reads as a person mid-sentence.

| part | band | mode | grammar (F1→F5) | new marks here | clone source for the hardest frame |
|---|---|---|---|---|---|
| 23 stacks | B | code card | G1 · G9 pile · G9 pile · G3 · G5 | **G9 pile** | `pb-15/02-descent.html` (card) + `pb-21/03-shift.html` (tags) |
| 24 queues | B | code card | G1 · G9 line · G9 line · G3 · G5 | **G9 line** | `pb-22/03-walk-prepend.html` |
| 25 hash maps | B | code card | G1 · G10 jump · G10 jump · G3 · G5 | **G10 jump** | `pb-21/03-shift.html` (row, marker, both tags) |
| 26 sets | B | **direct address** | **G8** · **G10 probe** · **G10 probe** · G3 cutaway · G5 | **G10 probe** (G8 reused) | `pb-14/01-address.html` + `pb-21/03-shift.html` |
| 27 trees | B | code card | G1 · G11 · G11 · G4 · G5 | **G11 tree** | `pb-07/02-rooms.html` for containment, `pb-21/02-row.html` for nodes |
| 28 BST | M | code card | G1 · G11-bst · **G14** · **G14** · G5 | **G11-bst, G14** | `pb-21/03-shift.html` (tag lane, stagger) |
| 29 heaps | M | code card | G1 · G11-heap · G11-heap · G3 · G5 | **G11-heap** | 27's own G11 frames + `pb-21/02-row.html` |
| 30 graphs | B | code card | G1 · G12 · G12 · G3 · G5 | **G12 graph** | `pb-22/02-anatomy.html` (bar/chevron/chip) |
| 31 tries | M | **direct address** | **G8** · **G11-trie** · G11-trie · G3 cutaway · G5 | **G11-trie** (G8 reused) | `pb-14/01-address.html` + 27's G11 grid |
| 32 priority queues | M | code card | G1 · G15 · G15 · G3 · G5 | **G15 service lane** | `pb-15/02-descent.html` + `pb-21/03-shift.html` |
| 33 doubly linked lists | M | code card | G1 · G13 · G13 · G3 · G5 | **G13 back-pointer** | `pb-22/02-anatomy.html` + `pb-22/03-walk-prepend.html` |

Every part is still five frames, still F1→F5, still one idea per frame. What changes is that four of the
eleven F3/F4 beats are **the same G11 grid bound differently** — which is the whole reason the grid is
specified once, in § 6, and not four times in four heads.

## 9. Motion — the primitives, unchanged, and what each one means here

All four layers on every frame: **entrance wipe · one ambient breath · emphasis on the spoken token ·
exit push**. At least two primitives per frame, each doing the explaining. No primitive as garnish.

| id | shape | Day 3's use |
|---|---|---|
| P1 `say-sweep` | `fromTo(bar,{scaleX:0},{scaleX:1,transformOrigin:'left center',0.34,power2.out})` + colour tween | the F1 keyword, 25's "jumps straight", 29's "smallest" |
| P2 `drop-in` | `fromTo(chip,{y:-210,opacity:0},{y:0,opacity:1,0.46,bounce.out})` then a `scaleY:0.96→1` settle | push (23), enqueue (24), a node arriving (27-31), tuple chips (32) |
| P3 `type-on` | ground-coloured mask `scaleX:1→0` (left origin) + caret `x` tween | every G3 chamber |
| P4 `wall-draw` | `scaleY:0→1`, top origin | 27's level separation if a part needs a "this is a level" beat |
| P5 `spill-down` | height tween + sequential label colour | 29's sift-down; 33's "walk backwards" if drawn as a descent |
| P6 `box-fill` | `scaleY:0→1` bottom origin + the other branch `opacity:0.28` | 25's occupied vs empty bucket |
| P7 `pulse-set` | `to(chip,{scale:1.08,0.18,yoyo,repeat:1},t+i*0.1)` | 31's three END dots; 32's tie chips |
| P8 `arrow-run` | a connector draws itself (three elbow bars in order) + a chip travels | every edge, every pointer, the hash jump |
| P9 `count-tick` | staggered `fromTo(digit,{y:26,opacity:0},{y:0,opacity:1},0.12)` | **the tranche's counter** — STEPS, LOOKED AT, WALKED, LEAVES, PATH |
| P10 `strike-out` | 3px `--say` bar width tween | 26's refused duplicate; 28's "not a linked list" if a worker wants it (do not) |

Transitions unchanged: content layer enters `x: ±140 → 0` or `y: 90 → 0` at 0.42s `power3.out`, leaves
`y: 0 → -60` in the last 0.3s; direction alternates per frame; a frame landing on its neighbour's exact
layout differs in ≥2 of archetype / wipe direction / hero position.

**Never** (physics, not style): a `text` tween (no TextPlugin — use a `{t,text}` step array with a time
proxy assigning `textContent`); a `letterSpacing` or flex-child width tween; an `id` with no matching
class rule; a transform on an inline span; a delayed `fromTo` without `immediateRender: false`;
`Date.now()`, `Math.random()`, a network fetch (and note `verify`'s nondeterministic rule **scans
comments** — write "wall clock", not the function name).

## 10. Voice, captions, runtime at 0.93

Kokoro `af_heart` at **0.93** via `studio voice`, word timings from `studio cues` aligned to the
approved script text. No BGM, no SFX. Captions: Day 2's skin, band 1024, Space Grotesk 700 at 46px,
spoken word on amber, plate `rgba(21,24,29,0.72)` with a 2px `--line` border.

**The speed trap, unchanged and still fatal.** `studio voice` resolves speed as `--speed flag →
house voices.en → 0.74`, and the house lookup **misses** because `.agents/design.md` nests `voices:`
under `voice:` (the key is `voice.voices.en`). So:
```
node studio/tools/studio.mjs voice <dir> --dry          # MUST print speed=0.93, else stop
node studio/tools/studio.mjs voice <dir> --speed 0.93    # ALWAYS pass the flag
node studio/tools/studio.mjs cues  <dir>
```
`voice_speed:` in `BRIEF.md` is documentation; the tool does not read it. All three Day 2 carriers
proved this independently. ElevenLabs is unusable here (empty `voice_id`, HTTP 402 on free-tier keys);
HeyGen needs interactive auth and bills credits.

**Rate.** 3.24 w/s is the planning average; the two Day 2 carriers measured **2.59** (60 words → 23.13s)
and **3.50** (91 → 25.98) so the spread is real. Day 3 is the most number-heavy tranche in the series
and reads at the slow end — estimate each part at both 3.24 and 2.7 and let the measurement decide.
Frame durations come from `studio voice`'s sync plus authored air (**~1.0s per frame, ~2.0s on F5**;
total air ≈ 6.0s on a 5-frame part). Bands: `[B]` 29-34s, `[M]` 34-42s, ceiling 54s, and **under 30s is
reported, never padded**: grow F5's pad, then re-cut the frame shape, then say so in your report.

## 11. Copy and clarity rules (a quality bar)

Speech must survive being heard once at 1x by someone whose first language is not English.
- One idea per beat; a beat is one breath of narration.
- **Sentence ≤14 words, ≤2 clauses, no semicolons, no trailing relative clauses** ("which is what…",
  "which is perfect for…"), no "so that you can". If it needs re-hearing, split it into two beats —
  words survive, breath changes.
- Every technical term glossed **in the same frame** it appears. Day 3's list is in the bible § 2.
  Where the user's sentence cannot carry the gloss, the frame tags the object.
- Concrete nouns: pile, plate, lid, line, bucket, hop, root, leaf, trunk, branch. Not "entity",
  "construct", "abstraction".
- **Hooks and CTA mechanics are the user's words and do not change.** Explain lines are fair game and
  every re-cut is in `CORRECTIONS-day3.md`. F4's example narration is ours to author from the user's
  example — that is Day 1/Day 2 precedent (pb-21's "Nums is ten, twenty, thirty").
- **"It's not X, it's Y" appears once across the series** (part 05's hook). Banned elsewhere including
  bare forms ("not a bug", "not the oldest"). Day 3's one violation is 32's explain line and it is
  re-cut; 33's "walks backwards" is a direction, not a contrast, and stays.
- No em-dashes on screen. No triads unless the enumeration **is** the subject — Day 3's four triads
  (23's undo/back/calls, 27's folders/HTML/org charts, 30's networks/maps/web, 32's
  schedulers/Dijkstra/notifications) all qualify, and all of them are **chip rows**, not prose.
- No "don't worry", "everyone struggles", "it's simpler than you think", no AI tells.
- **Every number on screen is executed output** listed in `series-bible-day3.md` § 4 — with the two
  Day 3 exceptions written into § 6: a hash value (randomised per process, so never shown) and a
  diagram's bucket index (a composition choice, so never captioned as Python's layout).

## 12. Pre-render self-audit (per part, before the gate)

1. `studio verify <dir>` → zero HIGH, zero MED except the accepted band keep-out.
2. `npm run check` → zero errors (do not prepend a redundant `lint`).
3. `snapshot --at` every emphasis moment **and two frames 0.4s apart inside every scene**, then **read
   the PNGs**: nothing load-bearing below y 1004; nothing in 1344→1920; the ground visible under the
   content; every animated element carrying a class as well as an id; measurable change at each sampled
   second. **A green gate means "not yet looked at"** — Day 2's three carriers shipped up to four real
   defects each past `0 high / 0 med` and `Check passed`.
4. Day 3-specific pixel checks: no `O(` glyph anywhere; no coral pixel anywhere; no `⇄`/`<–` glyph in a
   chamber; no hash number; every countable connector at `--line` (0.16) and not faint; tree ≤ 4 levels;
   graph ≤ 1 crossing; G14's rows all legible at phone size; the trie's END dots on `n`/`r`/`t` and
   **not** on `a`; 23's popped value still visible after the plate leaves.
5. All five frames carry `class="clip"`, `data-start`, a duration, ≥2 § 9 primitives, and the ligature
   kill-list on their stylesheet.

## 13. Carrier findings inherited (do not rediscover any of these)

All from Day 2's carriers, all caught by reading snapshots, none by `verify` or `check`:
- **`SCRIPT.md` headings must be exactly `## Line N — Title (Frame N)`.** pb-22 wrote
  `(Frame 3, two beats)` and that frame's narration **silently merged into F2's wav** — no error, no
  warning, one fifth of the film missing from the audio. Day 3 has three parts whose F3 is deliberately
  two beats (24, 25, 33) — those get **two headings** or one frame with a single heading; never a
  heading with a comma in it.
- JetBrains Mono ligates `<=` and `->` → invalid Python. Kill-list on every frame (§ 2).
- `--line-faint` (0.08) is not countable at phone size (§ 1).
- A marker straddles an edge, never centres on a value (§ 1).
- An `opacity`-dimmed row puts its text at 1.3:1 (§ 1).
- A `--say` plate inside a 0.42-dimmed element measures 2.87:1 — retire the plate before the dim (§ 1).
- Two amber plates at once breaks § 1.
- An SVG in a scaled container drifts into the platform zone → CSS divs (Day 3: G12's rotated bars are
  the one place this is easy to repeat wrongly).
- `line_unread` warnings are real: an emphasis under ~0.4s needs a retime, not a dismissal (pb-14 grew
  F3 from 10.2 to 11.6s for six of them).
- Absolute children of a clip band take frame coordinates, not wrapper-relative.
- `opacity`/`nondeterministic` rule scans comments — no literal `Date.now()` in a code comment.
- § 4's "9-11cqw, ≤7 words per group" holds only for groups ≤14 characters.
- CTA headlines ≤24 chars at 6.4cqw in a 176px box.
- `clip_media_fit` warnings are authored air and expected; a check crash with exit `3221226505` is a
  known process flake — re-run `npm run check` once alone before treating it as a finding.

**Day 3's pre-empted risks — written down because no carrier will catch them for you.** Each of these is
a prediction, not a finding: there is no evidence yet that any of them happened, and the first worker to
prove one wrong should report it so this list becomes evidence.
- **An amber `--say` ring around a node that also carries an amber keyword sweep.** § 1 allows one
  arrival per beat; 28 and 31 are the two parts where a F2/F3 beat has a ring travelling *and* a word
  being said. The ring wins: on a ring beat, the keyword keeps `--ink`.
- **G12's rotated bars are the only `transform` on an absolutely positioned element in the tranche.**
  `transform-origin: left center` must be authored explicitly and matched in the CSS and in any GSAP
  tween (known-traps § 11: `objectPosition` / `transform-origin` fraction syntax differs between CSS and
  GSAP — pick CSS and keep it).
  This is where the class/id rule (`inline-transform`) bites hardest: the bar is a `div`, so it is fine,
  but a span wrapper is not.
- **G14's row count vs the 28px type floor** is the one place in Day 3 where the correct answer may be
  "fewer rows, report it", and `check` will happily pass 20 rows at 22px.
- **A bucket row that reads as Python's memory layout** — the caption and the frame must not both make
  that claim (§ 6's G10 law; executed insertion order).

