---
id: pb-39
order: 6
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Dynamic arrays and resizing
slug: dynamic-arrays
project: videos/prog-basics-39-dynamic-arrays/
difficulty: M                      # load-bearing badge, not prose
mechanic: Save                     # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 88
target_length: ~33s                # 88 / 3.24 = 27.2s speech + 6.0s air
ceiling: 54s
grammar: G1 G2b G2b-grow G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: approved                 # CORRECTIONS-day4 § A4 landed in the VO; see ## Approved edits
ledger_placeholders: 2
notation: no O() on any surface (ACCURACY-day4 § 3, row 39). `amortized` is named and glossed. Growth is spoken as "doubles"; an x2 on the plate is arithmetic, not notation.
clone_source: pb-21's G2b row (the block) + pb-03's empty-chamber caret (the spare room)
---

# P39 · Dynamic arrays and resizing · [M] · Save · code card

**Message:** an array that keeps unused room on purpose, pays for one expensive copy when the room runs
out, and spreads that bill across the appends that follow — which is what `amortized` means.

This is 21's other half and 34's counterweight: pb-21 said the array shifts things, pb-34 said a ring
never moves, and here the array admits to a second cost it hides well. The Save mechanic works because
`amortized` is the word an interview will ask the viewer to define, and the film gives it a picture: one
big copy, then four free writes.

**Notation (ACCURACY-day4 § 3, row 39).** The `O()` ban stands. The plan's "the average cost stays
constant" is said in those words and drawn as counted tags; `O(1)` appears nowhere in this part, on any
surface. Growth is spoken as **"doubles"** (§ 3's prescribed spoken form, and what F4 now says), and an
`x2` on the example plate is arithmetic rather than notation. 41 and 42 own written `O(…)` as the lesson,
37 and 43 own the comparison label, and 44 owns `O(n²)` / `O(n log n)` on its slow/fast plate; nothing else
in Day 4 does.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 88 words → 27.2s speech + 6.0s air = **~33.2s**. At
the slow-word rate this part's `amortized`/`averages`/`dynamic` vocabulary invites (3.04 w/s), ~28.9 + 6.0
= **~34.9s** — past the 34s target but nowhere near the 54s ceiling, and reported rather than fixed by
cutting: **there is no pre-approved trim left in this part.** A4's sentence is the truth-condition of the
growth claim and cannot be the lever, F3's copy/free contrast is the amortized argument, and F1/F5 are
the user's verbatim hook and CTA. If the measured VO lands under 2.9 w/s, say so before anything is cut.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 3.4s | How does append stay fast when arrays have a fixed size? | Verbatim hook. `append` is the keyword and `fixed size` is the trap; give both the same weight. |
| F2 | 4.9s | A dynamic array keeps spare room. When that runs out, it asks for a bigger block. | `spare room` is the discovery and lands on the dashed empty chambers. Second sentence is the trigger, unhurried. |
| F3 | 6.5s | Then it copies everything across into the new block. That copy costs a lot, and the next few appends cost nothing. | `copies everything` is slow and total; `cost nothing` is quick and flat. The contrast is the frame, so do not stress either half more than the copy. |
| F4 | 9.6s | The new block doubles at first, then grows by smaller and smaller steps. Spread across many appends, that cost averages out to constant work per item. That is what amortized means. | The first sentence is A4, and it rides the BEFORE / AFTER strip: `doubles` on the jump, then the smaller steps, said evenly and without dwelling on either. The last five words are the gloss on the term the hook paid for. Land `amortized`, once, cleanly. |
| F5 | 2.8s | Save this for when someone asks about amortized cost. | Verbatim CTA mechanic. The second `amortized` is a callback, so say it slightly quieter than F4. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 11 · F2 16 · F3 21 · F4 31 · F5 9 = **88 spoken words** → 27.2s speech + 6.0s air = **~33.2s
film** (~34.9s at pb-13's 3.04 w/s). No capacity number is in the VO, so the audio is independent of the
ledger run; A4 put the growth *shape* into the VO, not a number. `SCRIPT.md` keeps exactly 5 lines, one
per frame, headings `## Line N — Title (Frame N)`
(WAVE2-PACKET § 3).

**Spoken code:** `nums.append(x)` → "append". `4` / `5` / `8` → the **words** ("four", "five", "eight"),
and only after the ledger run returns them; nothing in the VO reads a digit. `sys.getsizeof(nums)` → never
read aloud; it is what the strip prints. `len` → "how many it holds".

**Re-cut applied** (logged in full). "A dynamic array secretly keeps spare room." — `secretly` is
personification with no fact behind it and the series' register is wry, not cute, so it became
`keeps spare room it has not used`, which is the same reveal in plainer words. "When it fills up, it
allocates a bigger block, copies everything over, and carries on." (14 words, three verbs on one breath)
was split across F2 and F3 so `asks for a bigger block` and `copies everything across` each get a beat
and a drawn thing; `carries on` was cut because the frame keeps going and the words would only repeat it.
"One resize is expensive, but spread across many appends the average cost stays constant." (13 words,
`but` mid-sentence) → F3's second sentence + F4, split at the contrast per the Day-2 § A recipe, no words
recycled into the second half. Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 39`, `INTERMEDIATE` badge, ligature guard on all
five. **Zero coral**: no exception is raised, and a resize is not a failure.

**F1 (G1, also the cover).** Type alone, two groups: `append stays fast` / `on a fixed array?` on the
solid `--say` plate. The 100-slot log from 34 stays out of this frame; the row arrives on F2.
**F2 (G2b, the spare room).** Four filled chambers holding values in `--value` mint on pb-21's geometry,
then **two dashed empty chambers** to their right (G2's `empty` shape: 3px dashed `--line`, no value, one
dim caret blinking at 1s) — pb-03's "waiting to be filled", which is exactly what spare capacity looks
like. Two counted tags, mono `--line`: `HOLDS 4` and `ROOM 2`, plus the pair label
`⟪LEDGER:39⟫` in the corner (the executed capacity numbers for a real list at four items and after a
fifth append; both tags are that claim, and neither is typed from memory). One reading line:
`the room you did not ask for` (ink on `did not ask for`).
**F3 (G2b-grow, the copy).** The whole row translates right and down as a **block** into a longer row
(a tween on the container's x/y, never a layout reflow), and behind it the old row stays visible at 0.42
skin with its digits at full ink until the copy lands — so the viewer sees the same four values in two
places for half a second, which is what a copy is. Counted tag `COPIED 4` (mono `--line`, countable)
arriving with the last value, then the fifth append dropping into the new row on P2 `drop-in` with a
`MOVED 0` tag beside it — against pb-21's `MOVED 4`, the array's two bills named in one pair of tags.
Second beat: three more appends arrive, each one landing in room that already exists, each one getting a
mono tick `free` under it and no new row. `⟪LEDGER:39⟫` supplies the count of appends that are free before
the next copy; the frame shows the ticks it returns and no more.
**F4 (G3).** `main.py`, chip `PYTHON`, four lines plus the terminal strip — the whole frame is
ledger-pending and nothing on it goes in until the run returns:
```
nums = [1, 2, 3, 4]
⟪LEDGER:39b⟫        # capacity/size probe, before
nums.append(5)
⟪LEDGER:39b⟫        # the same probe, after
```
Terminal strip on `--panel-2`, corner label `BEFORE / AFTER`, content `⟪LEDGER:39b⟫` — two printed values,
one per probe. The strip is where A4's spoken shape becomes visible: the pair the run prints **is** the
resize, and F4's `doubles at first` line rides on it. Whatever pair the run returns is the frame, and if
the numbers do not show a jump at the fifth append
**report it rather than drawing a jump**. The one reading line over the chamber:
`one big copy, many small writes` (ink on `one big copy`).
**F5 (G5).** Headline `what amortized means` (19 characters, 3 words) at 6.4cqw in the 176px band,
mechanic verb plate `SAVE THIS` in solid `--say`, badge
`PROGRAMMING BASICS · STRUCTURES I · 39 · INTERMEDIATE`. Behind the headline, the two rows from F3 dimmed
to 0.42 with digits at full ink and the `COPIED 4` tag retired to `--muted` — the shape of the argument,
kept as the memory hook. No question on the frame: this part's mechanic is Save.

**CTA card copy, verbatim and complete:** spoken `Save this for when someone asks about amortized cost.` /
headline `what amortized means` / verb plate `SAVE THIS` / badge line.

## Cover / title text

`the copy you pay once in a while` (6 words, cut from F3 and F4's claim) + badge
`PROGRAMMING BASICS · STRUCTURES I · 39` + `INTERMEDIATE`. Amber plate on `pay once`.

## Post copy

**Feed caption:**

    How does append stay fast when arrays have a fixed size?
    A dynamic array keeps spare room it has not used, and when that room runs out it asks for a bigger block and copies everything across.
    One copy costs a lot, and the appends that fill the room cost nothing.
    Spread across many appends the cost averages out. Save this for when someone asks about amortized cost.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `append looks free because the array keeps room it has not used yet. fill it, and one append copies the whole block into a bigger one. that single write is expensive and the next few are free - average the bill across them and it is constant work per item. that is amortized. #python`
**LinkedIn:** the version of this that comes up in a review is "you said append is constant, defend it" —
and the defence is the over-allocation, not the operation: one copy of n items every so often, spread
across the several appends that follow it, so the average per append stays flat while the worst single
append is not. Saying "constant" and meaning "amortized" is the sentence that loses the room;
`#python` `#programming` `#learntocode`

**Pinned comment:** `Amortized means the cheap steps pay for the expensive one. Append into spare room and the cost is one write; the append that runs out of room copies the whole block, and that bill is spread over the appends that follow. Two numbers worth keeping: ⟪LEDGER:39⟫ — put the capacity a four item list grows to when its fifth item arrives, in the form the film prints, or cut the sentence; do not ship a recalled growth factor. And the copy is not free at scale either: on 3.13.15 a 100k collection measured nums.insert(0, x) at 44109 nanoseconds against deque.appendleft at 57, which is Day 2's own ledger and the reason a growth trick does not fix a front insert. Save it, and say amortized next time instead of constant.`

## Accuracy

**Status: ledger returned, user ruled (`CORRECTIONS-day4.md` § D), A4 in the VO, see the Approved edits
section below.** What still waits on the run is printed capacity only: three numbers in this part are executed claims and all three
are placeholders: the capacity a real list holds at four items, what it grows to when a fifth item
arrives (the plan's "capacity 4, append a 5th, and the capacity grows" plus "the growth factor depends on
the language"), and how many appends are then free. `sys.getsizeof` arithmetic and `list.__sizeof__` are
the obvious probes but they are **not** the capacity itself, so the run must state which probe it used
and the frame must label what it prints (`ROOM n` is a capacity claim, and printing bytes under that label
would be a lie).

The plan's own hedge — `the growth factor depends on the language` — was **retired by A4**, and it is now
spoken instead of parked: `The new block doubles at first, then grows by smaller and smaller steps.` The
mono chip `factor: depends on the runtime` is superseded (a hedge on screen that contradicts the VO is the
defect CORRECTIONS-day4 § D1 warns about); the plate may carry `x2` for the one resize it draws, which is
§ 3's allowed arithmetic. Nothing else about growth may print: ACCURACY-day4 § 39 measured CPython's ratios
as x2.000, x2.000, x1.500, x1.333, x1.250, x1.300, x1.231, non-monotonic, and the textbook formula misfit
the real sequence at n=9 and again at n=17, so **no formula and no universal factor on screen**, and the
capacity numbers come from the `.append()` table only (B6).

One claim here is already sourced and is **not** a placeholder: the `insert(0)` against
`deque.appendleft` measurement in the pinned comment is Day 2's own executed ledger
(`series-bible-day2.md` § 4, pb-22's pinned comment, Python 3.13.15), reused with its numbers and its
machine. Everything else numeric waits for the Day-4 run.

"Spread across many appends the average cost stays constant" is the amortized argument and it is
arithmetic on the copy the frame draws; it earns no number of its own.

## Ledger dependencies

- `⟪LEDGER:39⟫` (F2 tags `HOLDS 4` / `ROOM 2`, F3's free-append ticks, and the pinned comment's sentence) —
  the executed capacity of a CPython list holding four items, what it grows to when a fifth item
  arrives, and the count of appends that fit before the next resize, **stated as items rather than bytes**.
  If the run can only return bytes, F2's tags become one printed value and the capacity language comes out
  of the frame, and the comment's number sentence is cut.
- `⟪LEDGER:39b⟫` (F4 chamber, three places: two code lines and the strip) — the exact printed output of
  whichever capacity probe the run uses, before and after `nums.append(5)`, on a four-item list. This is
  the part's headline number: the jump from the first value to the second *is* the resize, and if the two
  values come back equal, F4 shows the copy with no capacity claim and the plan's example is reported as
  unsupported.

## Gate state

Non-carrier. Blocks at F2/F3/F4 on the capacity numbers; F1/F5, the whole of F4's narration and the audio
can be produced first.

Snapshot-read order: (1) the **two places at once** on F3 — old row at 0.42 skin, new row full, same four
digits legible in both, and nothing below y 1004 during the block translate; (2) the **dashed empty
chambers** reading as spare capacity and not as missing data (pb-03's caret must blink, not sit solid);
(3) `COPIED 4` counting the right thing; (4) `MOVED 0` on the append beat — the existing values must not
translate when a fifth arrives into real room; (5) F4's strip labelled `BEFORE / AFTER` with two values,
not one. Runtime expectation: **~33.2s** at 3.24 w/s, **~34.9s** at the slow-word rate (band 29–34, ceiling
54s; the slow-rate overshoot is reported, not fixed by cutting).

## Approved edits

- **A4 (CORRECTIONS-day4 § A, MEDIUM) landed in the VO**, on F4. Before: F4 opened `Spread across many
  appends, that cost averages out to constant work per item.` and the plan's hedge
  `the growth factor depends on the language` lived only as the screen chip
  `factor: depends on the runtime`. After: `The new block doubles at first, then grows by smaller and
  smaller steps.` spoken first, then the two original F4 sentences unchanged.
- Word delta: 80 → **88** (+13 for A4, −5 from F2's trim: `keeps spare room it has not used. When the room
  runs out` → `keeps spare room. When that runs out`). F1/F3/F5 are untouched.
- Trimmed, explain lines only: F2's 5 words above. No hook, no CTA, no cut to A4's sentence.
- `doubles` is § 3 row 39's prescribed spoken form; no symbol, no formula and no universal factor is
  spoken or printed (ACCURACY-day4 § 39: the ratios are non-monotonic and the textbook formula misfits).
- Screen instruction (binding, from A4 + B6/B7): drop the `factor: depends on the runtime` chip; the plate
  may show `x2` for the resize it draws, and every capacity figure comes from the `.append()` table.
