---
version: 2
name: prog-basics frame (video / frame layer)
campaign: prog-basics
identity: the bench
derived_from: first principles for this series' audience — NOT from .agents/design.md
supersedes: frame.md v1 (which mapped the Halima e-commerce lineage onto this batch)
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

# prog-basics — Frame spec v2 ("the bench")

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

## 4. Frames: the six grammars

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

The G1 frame **is** the cover, plus the series badge and difficulty badge. Cover text is the hook cut
to ≤6 words; the full hook is spoken. Ink on `--ground`, the sharpest word on an amber plate.

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

Kokoro `af_heart` at 0.74 through `studio voice` (provider pinned from `BRIEF.md`, never `auto`),
word timings from `studio cues` aligned to the approved script text. No BGM, no SFX in any part.
Captions: the campaign skin, band at 1024, Space Grotesk 700 at 46px, spoken word on amber,
plate `rgba(21,24,29,0.72)` with a 2px `--line` border.

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
