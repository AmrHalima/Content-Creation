---
id: pb-34
order: 1
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Circular buffers
slug: circular-buffers
project: videos/prog-basics-34-circular-buffers/
difficulty: M                      # load-bearing badge, not prose
mechanic: Save                     # load-bearing badge, not prose
mode: code-card
carrier: false                     # carrier status belongs to frame-day4.md's tranche map
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 78
target_length: ~30s                # 78 / 3.24 = 24.1s speech + 6.0s authored air
ceiling: 54s
grammar: G1 G2b G2b-wrap G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: pending-ledger           # do not treat as confirmed; see ## Ledger dependencies
ledger_placeholders: 2
notation: BANNED here (day-4 default). No O() on any surface of this part.
clone_source: pb-21's box row (G2b, same geometry) + pb-22's connector bars
---

# P34 · Circular buffers · [M] · Save · code card

**Message:** a fixed row with a write spot that returns to the start — so the newest thing lands on the
oldest thing, and the log holds its size forever without moving anything.

Day 4 opens on the structure that fixes Day 2's unfinished argument: 21 and 22 both *grew* or *moved*.
A circular buffer neither grows nor shifts. It is the cheapest part in the tranche to build — a row of
three pb-21 chambers plus one connector that curves back — and it carries no new grammar.

**Notation (tranche ruling 1).** This part keeps the Day-2 ban in full: nothing here says or writes
`O(1)`/`O(n)`, on screen, in narration, in the caption, the X/LinkedIn copy or the pinned comment. The
permitted exceptions are 37 and 43 (comparison labels) and 41 and 42 (on screen). A builder reading
several piece files must not generalise those four files' licence to this one.

## Final narration

Budget at the measured **3.24 words/second** (`af_heart` @ 0.93, `frame-day2.md` § 12 — the 2.4 w/s
figure in the older piece files is wrong by ~26%). Air is ~1.0s per frame plus ~2.0s on F5, so
78 words → 24.1s speech + 6.0s = **~30.1s film**. Parts whose words are long run nearer 3.04 w/s
(pb-13 measured that); this part's worst case is then 25.7s + 6.0 = **~31.7s**, still inside 29–34s, so
no padding and no cuts. `studio voice` measures, `studio cues` places, `STORYBOARD.md` carries the
measured numbers and never these estimates.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 4.0s | How does a log keep only the latest 100 entries and never grow? | Verbatim hook. Land `never grow` — the whole part is that one impossibility. |
| F2 | 6.8s | A circular buffer is an array with a set size. The write spot runs to the end and wraps back to zero. | First sentence is the definition, even pace. Slow down on `wraps back` because the arrow is drawing under it. |
| F3 | 5.6s | New data overwrites the oldest entry. Nothing shifts and nothing grows. That is why streaming audio uses it. | `overwrites` is the word. The two `nothing` clauses are flat and fast — they are the absence of motion, said without motion. |
| F4 | 5.9s | Three slots: A, B, C. Write D and it lands on A. The log now holds the newest three. | Read the letters as letters. `newest three` lands on the mint row, and it is the claim the ledger run proves. |
| F5 | 1.9s | Save this for system design questions. | Verbatim CTA mechanic. `Save this` opens it; nothing is added after `questions`. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 13 · F2 22 · F3 18 · F4 19 · F5 6 = **78 spoken words** → 24.1s speech + 6.0s air = **~30.1s
film** (31.7s if the VO measures at pb-13's slower 3.04 w/s). `SCRIPT.md` headings stay
`## Line N — Title (Frame N)` exactly (WAVE2-PACKET § 3: a malformed heading silently deletes a frame's
audio), and the file must diff to 5 lines against 5 frames after `studio voice`.

**Spoken code:** `buf = ["A", "B", "C"]` → "Three slots: A, B, C." `i = 3 % 3` → never spoken; it is
what the wrap arrow does. `buf[i] = "D"` → "Write D and it lands on A." `100` in the hook → "one
hundred". Never a digit to the voice, never a bracket or a percent sign read aloud.

**Re-cut applied** (no Day-4 corrections file is mine to cite — every re-cut is logged here in full).
User's explain: "It never grows or shifts, which is great for streaming data, audio, and logs." →
"Nothing shifts and nothing grows. That is why streaming audio uses it." Reasons: the trailing `which
is great for…` clause is banned by `frame-day2.md` § 9 (no trailing relative clause), and the three-item
list of use cases was cut to one, because the enumeration was decoration and the part's subject is the
wrap. Also "the write position wraps back to the start after reaching the end" (13 words, one clause,
fine) became two beats so `wraps back` sits on its own breath. Meaning, terms and order are kept.
"New data overwrites the oldest" gained its object `entry` for the ear.

## On-screen text and code treatment

Every frame: the `#15181D` ground with the drifting dot grid and the two breathing glows, each returning
to its own zero; kicker `PROGRAMMING BASICS · STRUCTURES I · 34` + the `INTERMEDIATE` badge as fixed
chrome; the ligature guard (`font-variant-ligatures: none` + `font-feature-settings: "liga" 0, "calt" 0,
"dlig" 0`) on every frame's stylesheet. **Zero coral — this part raises no exception** (`--err` is
reserved for a message an interpreter actually raised on this machine, and it raised none here).

**F1 (G1, also the cover).** Type alone, three groups, nothing illustrated: `a log that never grows`
(ink) / `latest 100 entries` (muted, 14 characters — inside the wrap limit) / `how?` on the solid
`--say` plate. These are the hook's own words cut for the eye; the full sentence is spoken and is never
put on the frame whole (13 words would wrap at 10cqw). The 100 entries are **not** drawn: a row of one
hundred chambers is a different lesson and it would eat the frame (pb-21's F1 set that precedent).
**F2 (G2b row + the wrap).** Three chambers on pb-21's geometry (`142×152`, pitch `158`, first slot
`x 74`), each holding a dashed empty chamber at arrival, then `A` `B` `C` in `--value` mint, one per
spoken value. Above them a name tab `buf` (G2's folder tab, mono). The mechanism: a write marker (3px
`--say` ring, chrome-neutral when idle) steps slot 0 → 1 → 2, and on `wraps back` a **return connector**
— a 3px `--line` bar with a chevron built from two borders, in the untransformed layer, never an SVG
inside a scaled container (pb-11's drift finding) — arcs from slot 2 back over the top to slot 0. Tag
above the arc, mono `--muted`, 2.2cqw with `data-layout-ignore`: `write spot: 0 1 2 0 1 2`. It is below
the 28px floor on purpose: the counting is for the rewind crowd, and the arc is the lesson.
**F3 (G2b-wrap, the overwrite).** Same three chambers, now holding `A B C`, and the marker back on slot
0. On `overwrites` a `D` drops into slot 0 (P2 `drop-in`) while the `A` it replaces fades to 0.42 and
leaves the chamber — the digit is a sibling that keeps full alpha in `--muted` as it exits, so a value
never sits unreadable at group opacity (pb-13's finding). Chambers do not translate: nothing shifts.
Two counted tags, one per clause, in mono `--line` (0.16, countable, per WAVE2-PACKET § 4): `MOVED 0`
against pb-21's `MOVED 4` — this is the tranche's argument closing — and `SIZE 3` held steady across
both beats (the size never changes, so the tag must never change). The one reading line is
`newest lands on oldest` (ink on `oldest`). `streaming audio` arrives as a mono chip beside `SIZE 3`
when the voice says it; it is an example, so it is chrome, not a claim.
**F4 (G3).** `main.py`, chip `PYTHON`, three lines plus the terminal strip — every value on it is
**ledger-pending, do not type it in from memory**:
```
buf = ["A", "B", "C"]
i = 3 % 3              # ⟪LEDGER:34⟫
buf[i] = "D"           # ⟪LEDGER:34⟫
```
Terminal strip on `--panel-2`, corner label `BUF` in muted mono, content `⟪LEDGER:34⟫` — the executed
state of the ring after the fourth write. P3 `type-on` under the caret, one line per spoken clause.
The two inline comments are the wrap index and the slot it wrote, and the strip is the three-value state.
Nothing here is printed until the ledger run returns it; a builder who guesses `['D', 'B', 'C']` and is
wrong teaches a wrong ring.
**F5 (G5).** Headline `never grows, never shifts` (19 characters, 4 words, inside the ≤24 wrap rule) at
6.4cqw in the 176px band, mechanic verb plate `SAVE THIS` in solid `--say`, badge
`PROGRAMMING BASICS · STRUCTURES I · 34 · INTERMEDIATE`. No quiz on this part — the mechanic is Save, so
the frame carries no question and no chips, and the ring of three chambers sits dimmed at 0.42 behind the
headline as the memory hook (the wrap arc kept visible; a Save frame may echo the film, a Quiz frame may
not show an answer).

**CTA card copy, verbatim and complete:** spoken `Save this for system design questions.` / on-screen
headline `never grows, never shifts` / verb plate `SAVE THIS` / badge line as above. Nothing else is
added to the card.

## Cover / title text

`a log that never grows` (the hook cut to 5 words, the shape a still can hold) + badge
`PROGRAMMING BASICS · STRUCTURES I · 34` + `INTERMEDIATE`. Amber plate on `never grows`. Written without
the banned contrast shape and without notation: this series' only "it's not X, it's Y" was spent on part
05's hook, and the ban stands in Day 4.

## Post copy

**Feed caption:**

    How does a log keep only the latest 100 entries and never grow?
    A circular buffer is an array with a set size, and the write spot wraps back to zero when it hits the end.
    New data overwrites the oldest entry. Nothing shifts and nothing grows, which is why streaming audio runs on one.
    Save this for system design questions.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `a fixed row, a write spot that wraps back to zero. fourth write into a three slot buffer and the oldest entry is gone - nothing shifted, size still 3. pb-21 moved 4 boxes to insert one; this moves none. save it for the system design round. #python`
**LinkedIn:** the interview version of this is "design a ring buffer for a log writer", and the part that
separates an answer from a hire is what happens when the reader falls behind the writer — the buffer
either drops the oldest or tells the writer to stop, and which one you pick is the whole design talk.
`#python` `#programming` `#learntocode`

**Pinned comment:** `The 100-entry log is a ring: entry 101 lands on entry 1, and the array never resizes. In Python you get this without writing it: collections.deque with a maxlen does exactly that. ⟪LEDGER:34b⟫ — put the executed state of deque(maxlen=3) after appending A, B, C, D here, in the printed form, plus which end drops out. The follow-up a senior asks: what happens when the reader is slower than the writer. Part 39 is the array that does grow, and why paying for that growth once in a while is cheap.`

## Accuracy

**Status: pending the Day-4 ledger run.** The structural claim of this part — a write index that returns
to slot 0 by `size % size`, so the fourth write overwrites the first — is arithmetic I am not permitted
to ship as printed output. Two numbers on screen are executed claims and are placeholders: the wrap index
and the ring's printed state after four writes into three slots (plus the `deque(maxlen=3)` form the
pinned comment wants). Nothing else in this part prints a value: `MOVED 0` is a count of chambers that
translated, which the frame itself settles, and `SIZE 3` is the example size the user gave.

Hook, CTA mechanic and the size-3 A/B/C/D example are the user's words and are unchanged.

## Ledger dependencies

Placeholder ids are `⟪LEDGER:NN⟫`, letter-suffixed when a part has more than one. A piece with any
placeholder is **not** buildable past `studio voice` until every one is resolved with executed output
and the resolution written back into this file.

- `⟪LEDGER:34⟫` (F4, three places: two inline comments + the terminal strip) — the executed wrap index
  for the fourth write into a three-slot ring (`3 % 3`) and the exact printed state of the ring after
  writing A, B, C, D. Until it returns, F4 is unwritable. Note the risk: the printed form differs
  between a plain list, a `collections.deque`, and a hand-rolled class — the strip must show the same
  object the chamber builds.
- `⟪LEDGER:34b⟫` (pinned comment) — the executed printed state of `collections.deque(maxlen=3)` after
  `append` of A, B, C, D, and confirmation of which end drops. This is the part's "you do not have to
  build this" claim; it may be cut from the comment if the run does not return it.

## Gate state

Non-carrier, cheapest build in the tranche, built by cloning pb-21's row and pb-22's connector. Blocks
on the ledger run for `⟪LEDGER:34⟫` only at the F4 authoring step — F1/F2/F3/F5 can be authored first.

Beats to snapshot-read first: (1) the **return arc** — does it read as a wrap and stay inside 230→1004,
and is it a CSS bar rather than SVG in a scaled container? (2) **`MOVED 0`** — no chamber may translate
during the overwrite, or the part contradicts its own tag; (3) the exiting `A` — legible while fading,
never at 0.42 group opacity with its digit inside; (4) never two amber plates at once. A green
`verify`/`check` means "not yet looked at" on all four.

Runtime expectation: **~30.1s at 3.24 w/s** (29–34s band, low side). If the measured VO lands the film
under 30s, grow F5's pad first, then report — do not add words and do not shrink the other frames' air
(`frame-day2.md` § 12, the user's own choice).
