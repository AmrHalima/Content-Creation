---
version: 2.1
name: prog-basics frame (video / frame layer) — Day 2 / BASICS II tranche
campaign: prog-basics
identity: the bench
derived_from: frame.md v2 byte-for-byte, plus three marks this tranche needs
supersedes: frame.md v1 (which mapped the Halima e-commerce lineage onto this batch)
inherits: v2 § 1 palette, § 2 type ramp, § 3 ground, § 5 geometry, § 7 motion primitives and
  § 9 copy rules are UNCHANGED and are not restated here. Read v2 in full; this file is what v2
  lacks for parts 12-22. Where the two disagree, this file wins for a Day 2 part and v2 stays the
  authority for parts 01-11 (whose renders are immutable to their own sources).
adds: G6 call stack · G7 node chain · G8 direct address · the BASICS II badge · af_heart at the
  house speed instead of the 0.74 this campaign overrode it to
unit: the frame — 1080x1920 portrait only, this campaign
principle: >
  every colour means something the learner is being taught · every second has visible motion ·
  every number and fragment of output on screen is executed output, never recalled.
fonts_on_disk: Space Grotesk 400/700 (display, labels, captions) · JetBrains Mono 400/700 (code)
  — copied into each project's assets/fonts/ from
  .agents/skills/embedded-captions/modes/standard/fonts/files/ with an OFL notice beside them.
fonts_dropped: Inter and Caveat. Both are the *workspace* brand's faces (they carry the e-commerce
  lineage through all fifteen earlier projects). This series is a separate lane with its own
  audience, so it gets its own type. Nothing informational is lost: Space Grotesk holds 400 and 700,
  which is every weight this campaign used Inter for.
---

# prog-basics — Frame spec v2.1 ("the bench", BASICS II tranche)

Copy this file to `<project>/frame.md` at project start. `.agents/design.md` remains the workspace
brand truth **for brand deliverables**; this campaign deliberately does not inherit it, because the
brief for this batch is a different audience and the user ruled out the prior projects as a
reference ("don't take the previous 15 videos as a reference, you are making a new content for a
different audience"). Where v1 borrowed design.md's palette, faces and ambient pill layer, v2 is
derived from what a first-week learner on a phone at 1x actually needs.

## 0. Why this identity, in four lines

1. **One world, not five slides.** Every frame repaints the *same* ground with animations that start
   and end at zero, so the board is identical across a cut and only the content changes. That reads
   as "the teacher moved on" instead of "a new slide loaded".
2. **Colour is a lesson, not decoration.** Three colours carry meaning and they never swap roles:
   amber = the word being said right now, mint = a value, coral = an error the interpreter raised.
   A learner who understands nothing else still knows which of the three the voice is pointing at.
3. **Motion is how the abstraction is shown.** Assignment is a value *falling into* a box. Scope is a
   *wall drawn* around a room. Fall-through is a bar *spilling downward*. Static text on a background
   is a defect in this campaign, not a style.
4. **Phone-legible for a non-native ear.** Display type at 9-12cqw, code at ≥31px, captions at 46px,
   one idea per frame, no sentence that needs re-hearing (§ 7).

## 1. Palette and colour roles (quote hex verbatim, never round)

| role | token | value | what it means |
|---|---|---|---|
| ground | `--ground` | `#15181D` | the board every frame shares |
| panel | `--panel` | `#1F242C` | the interior of any box or chamber |
| panel raised | `--panel-2` | `#262C36` | titlebars, tabs, chips, the terminal strip |
| line | `--line` | `rgba(255,255,255,0.16)` | 3px box borders |
| line faint | `--line-faint` | `rgba(255,255,255,0.08)` | rails, dividers |
| ink | `--ink` | `#F4F1EA` | everything the learner reads |
| muted | `--muted` | `#9BA6B2` | chrome only: kickers, badges, filenames |
| **say** | `--say` | `#FFD166` | **the word the voice is on right now** (amber highlighter) |
| say-ink | `--say-ink` | `#22201B` | text sitting on an amber highlight |
| **value** | `--value` | `#5AD6A0` | **a value: what lives inside a box, or what printed** |
| **err** | `--err` | `#FF6B5A` | **an error the interpreter actually raised, nothing else** |

Contrast on `--ground` (measured, not assumed): ink 14.9:1 · say 11.3:1 · value 8.6:1 · muted 7.0:1 ·
err 5.1:1. On `--panel` each drops by roughly 0.6 and all stay above 4.5.

Rules that are contracts, not taste:
- **Never amber for a value and never mint for emphasis.** The two are the lesson; if a frame uses
  amber decoratively the next frame's amber highlight stops meaning "listen here".
- **Coral appears only under interpreter text.** A piece may not paint `None`, a hang, or a wrong idea
  coral to look dramatic — v1 did that in parts 06 and 11; v2 does not. Raised exceptions in this
  batch: 07 `NameError`, 08 `TypeError`, 09 (in the reveal text only, never on screen).
- One accent *arrival* per beat. Nothing else on the board changes colour at the same moment.

## 2. Type ramp (container-query units on a 1080-wide frame)

| slot | face / weight | size | notes |
|---|---|---|---|
| hook display | Space Grotesk 700 | 9-11.5cqw | line-height 1.04, tracking -0.01em, ≤7 words per group |
| concept keyword | Space Grotesk 700 | 7-8cqw | amber highlight swept behind it, ink → `--say-ink` |
| box value | Space Grotesk 700 | 9-12cqw | mint, centred |
| code | JetBrains Mono 400/700 | 2.9cqw (~31px) | floor 28px (known-traps § 13); 700 only on the token being named |
| output / terminal | JetBrains Mono 700 | 2.9cqw | mint on `--panel-2` |
| kicker, badge, language chip | JetBrains Mono 500-equivalent | 1.55cqw, tracking 0.16em, upper | `--muted`, carries `data-layout-ignore` |
| annotation line | Space Grotesk 400 | 2.9-3.2cqw | `--ink` at 78% alpha, one clause only |
| caption line | Space Grotesk 700 | 46px at 1080 wide | see § 5 |

No face is used at two roles when a token can do it instead: mono is code and chrome, grotesk is
speech and values. That split is how a learner tells "what I type" from "what it means" without
being told.

## 3. The ground (identical in every frame, so the board never reloads)

Each frame's lowest clip band paints the same ground, authored as `.gnd`:

- `--ground` fill.
- dot grid: `radial-gradient(circle, rgba(244,241,234,0.055) 2px, transparent 2px)` at 56px pitch.
- two glows: amber `rgba(255,209,102,0.10)` upper-left, mint `rgba(90,214,160,0.09)` lower-right,
  breathing opacity, plus a small positional drift.
- a 1px `--line-faint` rule at the top edge of the caption band, so captions sit on a shelf.

**Every ground animation starts and ends at its own zero.** Drift is `y: 0 → 12 → 0` with
`duration = frameDuration / 2`, `yoyo: true, repeat: 1`; glow breathing does the same. So the state
at the last frame of scene N equals the state at the first frame of scene N+1, and a cut changes only
the content — no root-level ground layer is needed, which also means a re-assembly cannot break it.

There is deliberately **no** per-frame floating pill layer (v1 had one, inherited from the prior
projects): pills drifted on a different phase in every frame, so the world visibly reset five times
per film, which is the opposite of one continuous board.

## 4. Frames: the nine grammars (G1-G5 from v2 · G6-G8 added by this tranche)

- **G1 hook** — display type over the ground, ≤7 words per group, the keyword swept amber inside the
  first second of its own utterance. Nothing illustrated. This frame is also the cover (§ 6).
- **G2 box** — the series' signature: a chamber with a **name tab**, not a centred pill.
  ```
  tab    : JetBrains Mono 700, 2.5cqw, --ink on --panel-2, 3px --line, radius 12px 12px 0 0,
           h 60px, sitting on the chamber's top-left edge (a folder tab: it belongs to this box)
  chamber: --panel, 3px --line, radius 22px, shadow 0 18px 40px -18px rgba(0,0,0,0.7)
  value  : Space Grotesk 700, 9-12cqw, --value (mint), centred
  empty  : 3px DASHED --line, no value, one dim mint caret blinking at 1s — "waiting to be filled"
  ```
  Border weight carries the second lesson (this replaces v1's padlock icon, which needed a
  network asset fetch): **thin dashed = a promise nobody enforces, thick solid double = enforced.**
  Part 08 is the only part that uses both in one frame, which is the whole point of the part.
- **G2b row** — N chambers in a line, one character or one step each, with an index strip beneath.
  Same geometry as G2 at 0.5 scale, never restyled. (Parts 03, 08, 11.)
- **G2c rooms** — a chamber *inside* a chamber: outer labelled `module`, inner labelled `f()`. The
  inner wall is drawn top→bottom as a scaleY rect, not faded in — the wall is the mechanism. (Part 07.)
- **G3 code chamber** — `--panel` with a `--panel-2` titlebar (64px): filename in mono `--muted`
  on the left, and on the right a **language chip** reading `PYTHON` or `JAVASCRIPT` in `--say` on
  a 2px `--say` border. Max 4 lines plus one terminal strip. The chip exists because this series
  teaches one language and shows another exactly once (part 10) — a viewer who types `switch(day){`
  into Python gets a syntax error and the series caused it.
- **G4 split** — two chambers side by side, each ≤3 lines, each with its own titlebar and language
  chip. Only for a real comparison (02, 06, 10, 11).
- **G5 CTA** — headline ≤9 words, the mechanic verb as a solid amber plate (`--say-ink` text on
  `--say`), and the series line `PROGRAMMING BASICS · NN · BEGINNER|INTERMEDIATE` in muted mono.
  The last frame loops under the platform's chrome, so it must hold alone and stay above y = 1004.
- **G6 call stack** *(new; parts 14, 15)* — recursion drawn as **descent, then unwinding**. A card is
  a G2 chamber at reduced scale with a name tab reading the call in mono (`fact(4)`, `fact(3)`…) and
  the pending work on its right edge in `--muted` mono (`× 4`).
  ```
  card   : --panel, 3px --line, radius 22px, h 84px, G2's shadow; each card inset +64px right of the
           one above it and +96px below. 7 cards max (230 → 902), because the column must END inside
           the content box — an eighth card is a layout error, not a taller stack.
  widths : authored per card (100% → 90.6% → 81.2% …), NEVER a width tween on a flex child (§ 7 never).
  descent: P2 drop-in per card, one card per spoken clause, arriving top-down.
  unwind : bottom-up. The bottom card's value flips to --value mint, that card dims to 0.42 (the pb-03
           dim convention), and the answer travels up with P8 arrow-run into the card above. Repeat.
  base   : a solid --say plate reading BASE on the bottom card. Amber is "the word the voice is on".
  overflow: part 15 only — the column grows to 7, the 8th arrives with a 3px --err border, and the
           terminal strip carries the raised string `RecursionError: maximum recursion depth exceeded`
           with a mono tag DEPTH 1000. Coral is legitimate here and only here: 3.13.15 raised it.
  ```
- **G7 node chain** *(new; parts 21, 22)* — a node is G2's box **split into two cells** by a 3px
  `--line-faint` hairline: left cell the value (Space Grotesk 700, `--value` mint), right cell `NEXT`
  (JetBrains Mono 400, `--muted`, a `→` glyph or the address-like `•`). Node 264×108px, radius 22px,
  G2 shadow. 4 nodes max, terminator a muted mono chip reading `None`.
  ```
  connectors: CSS-drawn — a 3px --line bar with a chevron built from two borders, in the
              UNTRANSFORMED layer. Not an SVG inside a scaled container: pb-11 found an SVG ring in a
              scaled container drifting out of the content box into the platform zone.
  walk      : a cur marker (3px --say ring around the live node) hops node→node while P9 count-tick
              steps 1 2 3 under a mono STEPS tag. steps == index is the whole lesson, shown not said.
  prepend   : one new node arrives at the head (P2 drop-in) and ONLY the first connector redraws
              (P8). Every other node holds. That stillness is the argument against the array.
  shift     : part 21's counter-argument — the G2b row, where inserting at index 1 translates every
              box from 1 onward rightward one cell in a deterministic stagger while the new box drops
              into the freed slot, and a mono tag counts MOVED 2.
  index strip: muted mono 2.2cqw under an array row, reading 0 1 2 3 4 left to right, the zero
              arriving first (P9). It re-pays part 03's zero-based beat. Below 28px it must carry
              data-layout-ignore (known-traps § 13) so it does not trip the layout gates.
  ```
- **G8 direct address** *(new; parts 14, 17, 18)* — the same ground wearing a camera, so a feed that
  has seen eleven code cards sees something shaped like a person talking to you. **It draws no face,
  no body, no avatar, no silhouette, no emoji.** The mode is chrome plus second-person copy at
  display scale; the substitution is honest because nothing in it pretends to be footage.
  ```
  brackets  : four corner brackets, 3px --line-faint, 72px arms, inset 48px from the canvas edge.
  rec strip : top strip — a 16px REC dot on a 1s yoyo blink, REC in mono 2.4cqw, and a timecode
              00:0N in JetBrains Mono 400. ALL THREE are --muted, never coral: --err is reserved for
              an error the interpreter actually raised (§ 1), and a fake red dot would teach the wrong
              colour meaning on a frame with no code on it. The blink does the work coral would.
  lower third: a --panel-2 bar, radius 12px, PROGRAMMING BASICS · BASICS II · NN in muted mono above
              the part title in Space Grotesk 700 --ink at 3.4cqw. Top edge ≤ y 940.
  the type  : the spoken line left-aligned at 72px, 9-11cqw (§ 2 ramp), ≤7 words per group, P1
              say-sweep on the word being said. Reads as a sentence addressed at you, not as G1's
              centred poster claim — that difference is why this is a separate grammar.
  timecode  : derived from the ROOT TIMELINE, via a time proxy's onUpdate reading tl.time(). Never
              Date.now() — the renderer seeks, so a wall clock gives a different frame per pass
              (known-traps § 9) and would drift off the VO on a re-render.
  F4 here   : a CUTAWAY, not a new slide. The G3 chamber at 700px wide over the direct-address ground,
              a 0.18-opacity scrim behind it only (no blur, no new colour), titlebar main.py plus the
              terminal strip, and the chrome still visible around its edges.
  ```
  **Consecutive-G8 rule.** Part 14 runs G8 on F1, F2, F3 and F5, which is exactly the "5 identical
  cards" failure § 7's join rule exists to prevent. Within this grammar a frame must differ from its
  neighbour in wipe direction **and** introduce one non-chrome element: F1 type alone, F2 the stack
  descending, F3 the stack unwinding, F5 the CTA plate. A second type-alone frame in a row is a finding.

## 5. Canvas geometry (unchanged from v1 — this is the delivery surface, not a style)

| zone | y |
|---|---|
| top chrome safe | nothing critical above 230 |
| **frame content box** | 230 → **1004** |
| caption band | `--cap-band-top: 1024px`, `--cap-band-height: 320px` |
| platform territory | 1344 → 1920, **always empty** |

Content is authored at `left: 72px; width: 936px`. The band lives in the caption skin
(`.hyperframes/caption-skin.html`), on `#captions-root`, which is more specific than the injected
`:root` tokens, so it survives every re-assembly.

## 6. Cover / title card

The **F1 frame** is the cover — G1 for a code-card part, G8 for a direct-address part. Cover text is
the hook cut to ≤6 words; the full hook is spoken. Ink on `--ground`, the sharpest word on an amber
plate. Badge line for this tranche: `PROGRAMMING BASICS · BASICS II · NN · BEGINNER|INTERMEDIATE`.
A G8 cover keeps its lower third and REC strip, so it reads as a person caught mid-sentence rather
than as a title card — which is the whole point of mixing the two modes across a feed.

Part 11's shipped CTA carries `SERIES DONE` in micro type. It is not edited: a render belongs to the
bytes it was made from (known-traps § 15). `BASICS II` on part 12 supersedes the claim in the
viewer's eye, which is how a continuation actually gets announced.

## 7. Motion — the primitives, and what each one *means*

Every frame carries all four layers: **entrance wipe**, **one ambient breath**, **emphasis on the
spoken token**, **exit push**. Beyond that, a frame must use at least two primitives from this list,
and each primitive must be doing the explaining. No primitive is allowed as garnish.

| id | what it looks like | what it teaches | GSAP shape (seek-safe) |
|---|---|---|---|
| P1 `say-sweep` | amber plate scales in left→right behind a word; the word goes `--ink` → `--say-ink` | "this word, now" | `fromTo(bar,{scaleX:0},{scaleX:1,transformOrigin:'left center',duration:0.34,ease:'power2.out'})` + a colour tween on the word |
| P2 `drop-in` | a value chip falls from above the box into it; box squash-settles; border flashes mint | assignment: a value entering a name | `fromTo(chip,{y:-210,opacity:0},{y:0,opacity:1,duration:0.46,ease:'bounce.out'})` then `to(box,{scaleY:0.96,...}){to(...,1)}` |
| P3 `type-on` | code reveals under a moving caret, one line per spoken clause | the code is being written, not displayed | ground-coloured mask over the line, `fromTo(mask,{scaleX:1,transformOrigin:'left'},{scaleX:0})` + caret `x` tween |
| P4 `wall-draw` | a wall scales down from the top and closes a room | scope is a boundary, not a vibe | `fromTo(wall,{scaleY:0,transformOrigin:'top'},{scaleY:1,duration:0.5,ease:'power3.inOut'})` |
| P5 `spill-down` | a bar runs *down* through stacked cases and lights each one | fall-through is literally downward | height tween on a bar + sequential `to(label,{color:'--err'...})` |
| P6 `box-fill` | a chamber's interior fills from the bottom | this branch ran / this one didn't | `fromTo(fill,{scaleY:0,transformOrigin:'bottom'},{scaleY:1})` + the other branch `to(...,{opacity:0.28})` |
| P7 `pulse-set` | three chips pulse one after another, 0.1s apart | one fix, every call site | `to(chip,{scale:1.08,duration:0.18,yoyo:true,repeat:1},t+i*0.1)` |
| P8 `arrow-run` | a dashed connector draws itself and a chip travels along it | data moving: back up to the caller, or out to the world | `stroke-dashoffset` on an SVG path + `MotionPath`-free `x/y` tween on the chip |
| P9 `count-tick` | index digits arrive one per beat, the zero first | zero-based counting | staggered `fromTo(digit,{y:26,opacity:0},{y:0,opacity:1},0.12 apart)` |
| P10 `strike-out` | a rule draws across a wrong idea | "not this" without saying not this | width tween on a 3px `--say` bar |

Ambient per frame: one glow breathing (9s yoyo) and — where the frame has a hero object — a 0.6px
`y` float on it. The ground's grid drift runs under everything.

**Transitions.** A frame's content layer enters with a directional wipe (`x: ±140 → 0` or
`y: 90 → 0`, 0.42s `power3.out`) and leaves with a small push (`y: 0 → -60`, 0.3s) in its last
0.3s. Direction alternates per frame, so no two joins feel the same. Because the ground persists,
the join reads as the board being turned over, not as a new scene loading. A frame that would land
on the previous frame's exact layout must differ in at least two of: archetype (G2/G2b/G2c/G3/G4),
wipe direction, hero position. That is the rule that keeps 5 frames from becoming 5 identical cards.

**Never** (known-traps § 1-3, 10-11, inherited because they are physics, not style): a `text` tween
(no TextPlugin — use a `{t,text}` step array with a time proxy), a `letterSpacing` or width/height
tween on a flex child, an `id` with no matching class rule, a transform on an `inline` span, a
delayed `fromTo` without `immediateRender: false`, `Date.now()`, `Math.random()`, a network fetch.

## 8. Voice, sound, captions

Kokoro `af_heart` at **0.93** through `studio voice`, word timings from `studio cues` aligned to the
approved script text. No BGM, no SFX in any part. Captions: the campaign skin, band at 1024, Space
Grotesk 700 at 46px, spoken word on amber, plate `rgba(21,24,29,0.72)` with a 2px `--line` border.

**How the speed actually gets chosen, because this is where a batch goes wrong.** `studio voice`
resolves it `--speed flag → .agents/design.md voices.en.speed → VOICE_DEFAULTS.en.speed (0.74)`.
It does **not** read `voice_speed` from `BRIEF.md`. The house spec says `af_heart` at `0.93`, so:

- **Never pass `--speed`.** Day 2 wants the house value, and a flag outranks it.
- A `BRIEF.md` cloned from parts 01-11 carries `voice_speed: "0.74"`, which is decorative there and
  would be a **false record**: the audio would come out at 0.93 while the brief claimed 0.74. Day 2
  briefs must say `voice_speed: "0.93"` and a worker must confirm the run printed `speed=0.93`.
- Parts 01-11 were deliberately generated at 0.74 by passing the flag (bible § 7). Do not "fix" them.
- Read the printed line before accepting 11 audio tracks:
  `node studio/tools/studio.mjs voice <dir> --dry` → expect `provider=kokoro voice=af_heart lang=en speed=0.93`.

## 9. Copy and clarity rules (this is a quality bar, not a preference)

Speech must survive being heard once at 1x by someone whose first language is not English.
- One idea per beat. A beat is what fits in one breath of narration.
- Sentence ≤14 words on the ear, ≤2 clauses, no semicolons, no "which is what lets you",
  no trailing relative clauses. If a line needs re-hearing, rewrite it.
- Every technical term gets an instant plain-English gloss in the same breath it appears
  ("a parameter — the placeholder in the definition").
- Concrete nouns over abstractions: box, seat, wall, chip, run — not "entity", "construct".
- **Hooks and CTA mechanics are the user's words and do not change.** Explain lines (F2/F3/F4) are
  fair game and are re-cut for the above.
- Contrast-reveal "it's not X, it's Y" appears once across the series, in part 05's hook. Banned
  everywhere else, including "not a bug", "not the other way round", "different for the caller".
- No em-dashes on screen. No triads except where the enumeration is the subject (02's four types,
  09's three doors). No "simply/just/easy/of course/quick tip", no AI tells.
- Beginner ≠ condescending: never "don't worry", "everyone struggles", "it's simpler than you think".
- Every number on screen is executed output (bible § 9 ledger, `.tmp/verify_v3.py`).

## 10. Pre-render self-audit (per part, before the gate)

1. `studio verify` → zero HIGH, zero MED except the accepted band keep-out.
2. `npm run check` → zero errors.
3. `snapshot --at` at every emphasis moment and **read the pixels**: nothing but the band below
   y = 1004; the ground visible under the content (a frame that paints an opaque field is a bug);
   every animated element carries a class as well as an id.
4. **Motion audit**: sample two frames 0.4s apart inside every scene and measure the pixel delta.
   A scene with no measurable change at a sampled second is a finding, not a warning.
5. All five frames carry `class="clip"`, `data-start`, a duration, and at least two § 7 primitives.

## 11. The tranche map (which part carries which mark)

Every part is still 5 frames and still F1→F5 per bible § 3. What changes is the archetype mix,
because the ask for this tranche is a feed that does not look repetitive.

| part | mode | grammar | new mark proven here | clone source (read-only) |
|---|---|---|---|---|
| 12 infinite loops | code card | G1 G3 G3-gate G5 | – | `pb-11/03-gate.html` (the re-testing gate, the stuck cycle) |
| 13 break/continue | code card | G1 G2b G3 G5 | – | `pb-11/02-walk.html` (the finite walk) |
| 14 recursion | **direct address** | **G8** + **G6** ×2 | **G6, G8** | `pb-07` G2c rooms for the nesting idea; chrome is new |
| 15 base case | code card | G1 G6 G6 G3 G5 | reuses G6 | `pb-14` once it validates |
| 16 casting/coercion | code card | G1 G2 G4 G5 | – | `pb-10/04-split.html` (two labelled titlebars) |
| 17 null/nil/None | **direct address** | **G8** + G3 cutaway | reuses G8 | `pb-14` chrome, verbatim |
| 18 comments | **direct address** | **G8** + G4 cutaway | reuses G8 | `pb-14` chrome + `pb-10` split |
| 19 operators | code card | G1 G2b G4 G3 G5 | – | `pb-02/04-split.html` lineage retuned v2 |
| 20 short-circuit | code card | G1 G3 G3 G5 | – | `pb-11/03-gate.html` (the gate that stops) |
| 21 arrays | code card | G1 G2b G7-shift G3 G5 | **G7** | `pb-03` row of boxes (same geometry at 0.5) |
| 22 linked lists | code card | G1 G7 G7 G3 G5 | **G7** | `pb-21` once it validates |

Carriers are **14, 21, 22**: they are the three parts that introduce G6, G7 and G8, so nothing else
starts until their frames have been read as snapshots. 15/17/18/20 all clone a carrier rather than
inventing.

## 12. Runtime at 0.93 (deliberate, not an accident to be corrected)

The user's Day 2 copy is leaner than Day 1's (≈70-80 words vs 87-93) and the voice runs 26% faster,
so parts land **~32-38s + air ≈ 35-41s** against Day 1's 39.0-51.7s. The user was shown that number
and chose it: **no words are added to pad the runtime.** Hooks, explains and CTAs ship as written.

- Frame durations are the measured VO plus authored air (bible § 3, pb-11's recipe): each frame gets
  ~+1.0s in `STORYBOARD.md` so the 0.5s crossfade sits inside silence and no sentence spans a cut.
  At 0.93 the VO is shorter, so **the air is what holds the shape** — do not shrink it below 1.0s to
  chase a total.
- `studio voice` syncs frame durations to the exact VO length, then `studio cues` measures the words.
  Accept what the audio measures; never hand-write a duration table.
- If a part lands **under 30s total**, stop and report instead of padding: at that length the F2/F3
  split is carrying one idea in two frames and the shape, not the copy, is what needs to change.
- Ceiling stays 54s. Nothing in this tranche approaches it.

## 13. Language labelling (the pb-10 precedent, extended)

Python is the series language; every chamber's titlebar reads `main.py` and its language chip reads
`PYTHON`. Where the user's own copy requires another language the fragment gets its own titlebar
filename and chip — part 16 shows `main.js` (`'5' + 3` → `'53'` is a JavaScript claim, and in Python
the same line raises `TypeError`, so an unlabelled chamber would teach the opposite of the part).

`nil` is Go/Ruby/Lua/Swift and **cannot be executed on this machine**, so in part 17 it appears as a
name chip only. `null` gets a real chamber because node v24.15.0 raised the real error for it
(`TypeError: Cannot read properties of null (reading 'name')`). The rule that decides which is which:
**a fragment may be drawn only if its output was produced here** (§ 0 principle, bible § 9).
