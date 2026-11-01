---
id: pb-40
order: 7
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Tuples vs lists
slug: tuples-vs-lists
project: videos/prog-basics-40-tuples-vs-lists/
difficulty: B                      # load-bearing badge, not prose
mechanic: Quiz                     # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 78
target_length: ~30s                # 78 / 3.24 = 24.1s speech + 6.0s air
ceiling: 54s
grammar: G1 G4-split G2 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: pending-ledger           # two exception strings and two printed values are unresolved
ledger_placeholders: 4            # 40, 40b, 40c block the build; 40d is optional comment copy
notation: BANNED here (day-4 default, and this part has nothing to note).
clone_source: pb-08's enforced double wall (G2 border law) + pb-10/pb-16 split chrome + pb-16's YES/NO chips
---

# P40 · Tuples vs lists · [B] · Quiz · code card

**Message:** one is for values you will change and one is for values that are the fact — and the fixed one
carries a second prize: a wall the language actually enforces, and a key a dictionary can use.

The cheapest [B] part in the tranche to draw (one chamber, one wall, four lines of code) and the one with
the most exact text at stake: it ships **two interpreter strings** and both are placeholders until the run
returns them. The wall itself is pb-08's visual, already proven in the series: thick solid double =
enforced. A learner who watched part 08 will recognise the border before the word `immutable` arrives,
which is the point of building a series rather than eleven clips.

**Notation (tranche ruling 1).** The ban stands, and this part has no use for notation anyway; nothing on
any surface here says `O(1)` — not the hashability claim, not the comment.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 78 words → 24.1s speech + 6.0s air = **~30.1s**. At
pb-13's slow-word 3.04 w/s: ~25.7 + 6.0 = **~31.7s**. Band 29–34, no padding.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.5s | Lists change. Tuples don't. So why have both? | Verbatim hook, and its rhythm is the asset: two short statements then the question. Do not run the two statements together. |
| F2 | 5.9s | A list is mutable: you can add or replace items. A tuple is fixed the day it is made. | `mutable` is the term and it gets the plain half of the same sentence, so say both at the same speed. |
| F3 | 5.9s | Use a tuple for values that stay put, like one point. Keep a list for what you will edit. | `stay put` is the test you apply, `what you will edit` is the other test. Land `point`, which is the drawn chamber. |
| F4 | 6.8s | A tuple can be a dictionary key, because nothing in it moves. Try to change one item and the interpreter stops you. | First sentence is the prize. Second is the wall arriving, and `stops you` should be flat — the error does the drama. |
| F5 | 3.1s | Can a list be a dictionary key? Yes or no. | Verbatim CTA mechanic. The two answer words are the chips on screen, so keep them apart and clear. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 8 · F2 19 · F3 19 · F4 22 · F5 10 = **78 spoken words** → 24.1s speech + 6.0s air = **~30.1s
film** (~31.7s at pb-13's 3.04 w/s). `SCRIPT.md` keeps exactly 5 lines, one per frame, headings
`## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `point = (3, 4)` → "one point" is what F3 says; the literal is read by the eye. `point[0]`
→ "the first item". `3` → "three". `TypeError` → "the interpreter stops you", never the class name spoken.
The exception text is on screen only, and no narration line reads it aloud — a voice reading
`'tuple' object does not support item assignment` is 8 seconds of quoted traceback.

**Re-cut applied** (logged in full). "A list is mutable: you can add, remove, and change items." (10
words, and a three-item list that is not the subject — the subject is mutability, not an inventory of
methods) → `you can add or replace items`, two verbs, the triad cut per `frame-day2.md` § 9. "A tuple is
immutable: once created, it's fixed." → `A tuple is fixed the day it is made`, because the term
`immutable` was already taught in part 08 and re-teaching it here as a keyword would spend the frame's one
idea on a callback; `mutable` stays as the term for the list side since it is the pair the CTA turns on.
"A tuple of hashable items can even be a dictionary key." → F4's first sentence, with `hashable` moved to
a screen tag (`hashable: it has a steady number`) — the gloss in the same frame, the plain words in the
same breath, and the VO never handed a word the audience has to define twice. Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 40`, `BEGINNER` badge, ligature guard everywhere.
**Coral is on hold, not banned:** `--err` may appear on F4's error line **only** after the ledger run
returns a real raised message from this interpreter, and only on that line. Until then F4 shows the
statement without its traceback and no coral anywhere in the film.

**F1 (G1, also the cover).** Three groups, the hook's own three beats: `lists change` (ink) /
`tuples don't` (muted ink) / `why both?` on the solid `--say` plate. Nothing drawn.
**F2 (G4-split, the two walls).** Two chambers side by side, each with its own titlebar, per pb-10's
split: left `nums`, list, **3px `--line` single border** with one value arriving on P2 `drop-in` and one
existing value swapping to a new number (mint, both moves); right `point`, tuple, **thick solid double
border** — pb-08's enforced wall, same stroke weight, same radius — and the `9` that tries to land inside
it stops at the wall and leaves, so the border is doing the explaining. Mono tags under each:
`mutable: it can change` and `fixed: it cannot`. One reading line: `one wall the language holds` (ink on
`holds`).
**F3 (G2 hero, the choice).** One chamber at hero size, tab `point`, two cells split by a 3px
`--line-faint` hairline with mono labels `x` and `y` above, values `3` and `4` in mint. Tag: `a point is a
fact, not a draft` (screen only, 7 words, ink on `a fact`). To its right, a small dimmed list row with a
`+` slot, captioned `to-do: add, remove, reorder`. The frame's idea is which container matches which job,
and nothing raises and nothing moves.
**F4 (G3).** `main.py`, chip `PYTHON`, four lines plus the terminal strip, all printed values
ledger-pending:
```
point = (3, 4)
grid = {(3, 4): "top left"}
print(grid[point])     # ⟪LEDGER:40c⟫
point[0] = 9           # ⟪LEDGER:40⟫
```
P3 `type-on` under the caret, one line per spoken clause: line 1–2 under `a dictionary key`, line 3 under
`nothing in it moves`, line 4 under `stops you`. Line 3's strip value in `--value` mint (it is a printed
value); line 4's inline comment is the **exact raised string**, `⟪LEDGER:40⟫`, in `--err` coral and only
once the run proves this interpreter raises it, with the mono chip `hashable: it has a steady number`
beside it at 2.6cqw. No third error line: the plan's `point[0] = 9` is the part's example and the list-as-key
refusal belongs to F5's comment, not to a fifth line G3 does not allow.
**F5 (G5, the Quiz).** Headline `a list as a key?` (14 characters, 4 words) at 6.4cqw in the 176px band;
two chips `YES` / `NO` in `--panel-2` with 3px `--line`, **unselected**, ring travelling YES → NO →
released and resting on neither (pb-16's shipped finding: answering a quiz on screen ends it); verb plate
`YES OR NO` in solid `--say` — the user's own two words, which is why the plate is short enough to fit;
badge `PROGRAMMING BASICS · STRUCTURES I · 40 · BEGINNER`. The tuple chamber from F3 sits dimmed at 0.42
behind the headline, values at full ink, and the list row beside it at the same dim — the two candidates,
neither marked correct.

**CTA card copy, verbatim and complete:** spoken `Can a list be a dictionary key? Yes or no.` / headline
`a list as a key?` / chips `YES` `NO` / verb plate `YES OR NO` / badge line.

## Cover / title text

`lists change, tuples hold` (4 words, the hook's first two beats restated with the series' own verb) +
badge `PROGRAMMING BASICS · STRUCTURES I · 40` + `BEGINNER`. Amber plate on `tuples hold`. No `≠` glyph
(pb-05's cover found it renders unreliably in JetBrains Mono), and no notation of any kind.

## Post copy

**Feed caption:**

    Lists change. Tuples don't. So why have both?
    A list is mutable: you can add or replace items. A tuple is fixed the day it is made, and the language enforces that wall.
    Use a tuple for values that stay put, like one point on a grid. Keep a list for what you will edit.
    And a tuple can be a dictionary key, because nothing inside it moves. Can a list? Yes or no.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `a list you can edit and a tuple you cannot are not two versions of one thing. the tuple's wall is enforced by the runtime, and because nothing inside it moves, it can be a dict key. a point is a fact; a to-do list is a draft. can a list be a key? yes or no. #python`
**LinkedIn:** the practical reading is that mutability is not a property of the data, it is a promise about
who may change it: `point` is a record, `row` is a workspace, and a dict key has to be the first of those
because its slot number is derived from its contents. Python's error message says exactly that when you
get it wrong; `#python` `#programming` `#learntocode`

**Pinned comment:** `No: a list cannot be a dictionary key, because a key's slot is picked from its hash and a list can change after it lands there. ⟪LEDGER:40b⟫ — put the exact raised string here, from this interpreter, or cut the sentence. The trap in the yes-or-no: a tuple holding a list, like (1, [2]), is still refused, because the tuple is fixed but the thing inside it is not, and hashing looks at both; ⟪LEDGER:40d⟫ if the run returns that one too. Part 08 is the same wall on a constant, and part 38 is what a slot is.`

## Accuracy

**Status: pending the Day-4 ledger run, and this part is the one with exact strings at stake.** Four
things are marked: the traceback text for `point[0] = 9` (the plan calls it "a TypeError"; the class name,
the quoted object type and whether 3.13 says `item assignment` or something newer are all one string that
must be copied and not recalled), the printed value of `grid[point]`, and the two refusals the pinned
comment offers (a list as a key, and a tuple containing a list as a key).

The structural claims ship as written and need no interpreter: a list is editable in place, a tuple is not,
and a tuple's immutability is what lets a dict derive a stable slot from it. The **reason** is stated as
"nothing inside it moves", which is exactly true of the tuple itself and only true of its contents if those
are immutable too — which is why `(1, [2])` is the comment's trap rather than the film's line, and why it
is marked.

Coral stays off F4 until the run confirms a real raise; `frame-day2.md` § 1 and WAVE2-PACKET § 6 reserve
`--err` for a message this machine actually produced, and an unexecuted traceback on screen would be the
series' first colour lie.

## Ledger dependencies

- `⟪LEDGER:40⟫` (F4 line 4 inline comment, coral-gated) — the **exact** exception string raised by
  `point[0] = 9` on `point = (3, 4)`, class name and message copied from the interpreter, plus its line
  count so the strip can hold it. Until it returns, F4 shows the statement with no message and no coral.
- `⟪LEDGER:40b⟫` (pinned comment) — the exact string raised when a list is used as a dict key.
- `⟪LEDGER:40c⟫` (F4 line 3's strip value) — the printed value of `grid[point]` for
  `grid = {(3, 4): "top left"}`, which proves the tuple-as-key claim on screen. If the run cannot print
  it in the space, line 3 becomes the key insert alone.
- `⟪LEDGER:40d⟫` (pinned comment, optional) — the exact string raised for a tuple containing a list as a
  key. Cut the trap sentence if it is not returned; the comment answers the quiz without it.

*(Blocking set: `40`, `40b`, `40c`. `40d` is optional comment copy and its absence does not stop the
build.)*

## Gate state

Non-carrier, and the frame to snapshot-read first is **F2's double wall** — pb-08's stroke weight has to
match, or the callback becomes a new fact and the learner who watched 08 learns nothing from the border.
Then: (1) the rejected `9` on F2 must visibly stop and leave without the chamber translating; (2) F4's
line 4 must not exist as coral before the run; (3) the two chips on F5 unselected with the ring resting on
neither; (4) `hashable: it has a steady number` below 28px needs `data-layout-ignore`; (5) no third
container on F3 — two, one per verb.

Runtime expectation: **~30.1s** (band 29–34). Audio can be generated before the run — no placeholder
number or string is in any narration line.
