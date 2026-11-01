---
id: pb-44
order: 11
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Bubble sort
slug: bubble-sort
project: videos/prog-basics-44-bubble-sort/
difficulty: B                      # load-bearing badge, not prose
mechanic: Myth                     # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 84
target_length: ~32s                # 84 / 3.24 = 25.9s speech + 6.0s air
ceiling: 54s
grammar: G1 G2b G2b-trace G4-split G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: approved                 # CORRECTIONS-day4 § A5 ruled (screen labels only); VO unchanged
ledger_placeholders: 2
notation: `O(n²)` and `O(n log n)` ALLOWED on the F4 slow/fast plate only (ACCURACY-day4 § 3, row 44). Spoken forms are `big O of n squared` / `big O of n log n`, and this part's VO says neither; no `O()` on any other surface.
clone_source: pb-21's G2b row (the swap) + pb-13's `n` marker on a rail + pb-16's chip pair
---

# P44 · Bubble sort · [B] · Myth · code card

**Message:** it works, it is the easiest sort to watch, and the reason nobody ships it is that every pass
compares neighbours again, so the work grows with the square of the count — learn the swap, then use the
sort your language already carries.

The tranche's last film and its Myth part: the belief being busted is not that bubble sort is slow, it is
that a sort you learn first is a sort you use. F2 draws the mechanism, F3 draws the user's three states,
F4 shows what they cost and what real code reaches for, F5 asks which sort the viewer actually uses. The
plan's own line "It's easy to understand but slow, O(n²), so real code uses faster sorts" is the sentence
this file had to rebuild twice: the banned register word stays out of the VO, and the symbol now has a
licensed home on one plate (§ 3 row 44) while the narration keeps the counted words.

**Notation (ACCURACY-day4 § 3, row 44).** The user lifted Day 2's ban where notation is the lesson, and this
part got a narrow slice of it: **`O(n²)` and `O(n log n)` are allowed on the F4 slow/fast plate only**,
spoken as "big O of n squared" and "big O of n log n" if a line ever has to say them. **This part's
narration does not** — A5 was ruled screen-only, so F4 keeps the user's counted words `the square of the
count` and no symbol is ever spoken here. Nothing else in the film carries `O(…)`: not F1, not F2, not F3's
trace, not the cover, and § 3 keeps `Θ` off screen everywhere in Day 4 (pinned comment only). The Day-2
device stays as the claim's home: the counted tag `⟪LEDGER:44b⟫ PAIRS` beside the plate's symbols, the two
of them saying the same fact in the two registers a [B] part has to serve.

**Difficulty and mechanic badges are load-bearing.** `[B]` on a part that names a quadratic cost is a
deliberate pairing in the plan, and it holds because the film never asks the viewer to compute a rate — it
asks them to watch three boxes swap and count comparisons.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 84 words → 25.9s speech + 6.0s air = **~31.9s**. At
pb-13's slow-word 3.04 w/s: ~27.6 + 6.0 = **~33.6s**. Band 29–34, nothing added, no cut needed.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.5s | The sorting algorithm everyone learns and nobody uses. | Verbatim hook, deadpan. `everyone learns` and `nobody uses` get equal weight; the joke is the balance, not a punch. |
| F2 | 7.1s | Bubble sort walks the list and swaps neighbours that sit out of order. The largest value ends each pass at the far right. | First sentence at walking pace, one swap per beat. `far right` lands on the chamber that just took it. |
| F3 | 6.2s | Three, one, two. One swap puts one first. The next swap puts three last, and two rises into the middle. | The three values are read as values, with a gap at each comma, exactly as pb-13 read its collected list. Then two beats, one per swap. |
| F4 | 7.4s | Every pass compares neighbours, so the pairs grow with the square of the count. Real code reaches for the sort the language already ships. | `the square of the count` is the claim and it must be crisp. The second sentence is flat and final, because it is the myth landing. |
| F5 | 2.8s | Which sort do you actually use in real life? | Verbatim CTA mechanic. `actually` carries the ask; nothing after it is emphasised. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 8 · F2 23 · F3 20 · F4 24 · F5 9 = **84 spoken words** → 25.9s speech + 6.0s air = **~31.9s
film** (~33.6s at pb-13's 3.04 w/s). Every swap state and comparison count is on screen, never in the VO,
so the audio is independent of the ledger run. `SCRIPT.md` keeps exactly 5 lines, one per frame, headings
`## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `[3, 1, 2]` → "three, one, two". `sorted(nums)` → "the sort the language already ships";
the name is typed on screen and never spoken. `1, 2, 3` → "one, two, three". No bracket, no arrow and no
symbol is read aloud, and the voice never says a class name or a rate.

**Re-cut applied** (logged in full). "Bubble sort walks through the list, swapping neighbors that are out
of order." (a trailing `-ing` pile-on, the shape the AI-tells list bans) → `walks the list and swaps
neighbours that sit out of order`, two verbs, one clause each, same facts. "The largest value bubbles to
the end each pass." → `The largest value ends each pass at the far right`: the metaphor `bubbles` is kept
visually (the F2 swap rises rightward) rather than in the VO, where it would be the word the learner
misquotes, and `far right` is a place the frame can light. **"It's easy to understand but slow"** →
`Every pass compares neighbours, so the pairs grow with the square of the count`: `easy` is on this
series' banned register list, and the fix is the fact the adjective was standing in for — the cost, with
its mechanism named, in the same length of breath. **"O(n²)"** → the counted tag on F4 plus those spoken
words; § 3 now also lets the plate print the symbol next to it, which changes no word of the VO. "so real
code uses faster sorts" → `Real code reaches for the sort the language
already ships`, which is the same claim with an object the pinned comment can name. Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 44`, `BEGINNER` badge, ligature guard on all five.
**Zero coral**: a slow algorithm is not an error, and nothing raises in this part.

**F1 (G1, also the cover).** Type alone, two groups: `everyone learns this sort` (ink) /
`nobody ships it` on the solid `--say` plate — the hook's two halves cut to fit the group limits, and the
verb changed only where the eye needed a shorter word (`uses` → `ships`, screen text only; the VO keeps the
user's `uses`).
**F2 (G2b, the walk and the swap).** Three chambers on pb-21's geometry holding `3` `1` `2` in mint, with
the index strip beneath (mono `--muted`, `data-layout-ignore`) and a neutral `--panel-2` marker labelled
`i` riding the rail above (marker is chrome, never amber). Two beats: the marker steps one position (P9
count-tick on a mono `STEP` tag), and the pair under it **translates across one pitch each** to swap —
authored end positions per chamber, a deterministic exchange, no layout reflow, no `Math.random()` stagger
— while a mono tag `SWAPPED` lands once. Then the arrival claim: the chamber holding `3` settles at the far
right, takes a 3px `--line` border and a mono tag `LOCKED`, and the reading line above it reads `the tail is
sorted now`. Amber is reserved for the word the voice is on: one `--say` plate on `swaps` as it is spoken,
retired to ink before `largest` is swept.
**F3 (G2b-trace, the user's example).** Three states on one band, one row per state, each state arriving
under its spoken clause:
```
state 1 : 3 1 2        tag `START`
state 2 : 1 3 2        tag `AFTER SWAP 1`   (a[0]=3 > a[1]=1, swapped)
state 3 : 1 2 3        tag `AFTER SWAP 2`   (a[1]=3 > a[2]=2, swapped)
```
The three rows are the plan's example, and **the tags were this part's accuracy risk** — the plan's
`→` chain reads like two passes, and the trace on the shown implementation is two *swaps inside pass 1*.
**A5 is now ruled (CORRECTIONS-day4 § D): the labels are `AFTER SWAP 1` / `AFTER SWAP 2`, never
`PASS 1` / `PASS 2`.** The run settled it the other way from the plan's reading: the pass-end states are
`[1, 2, 3]` then `[1, 2, 3]`, because pass 2 compares one pair and swaps nothing, so a per-pass plate of
these three rows would print a state that never happened. **The spoken line does not change** — F3's
delivery is the same, and the narration never said "pass" for these two boxes. If the part later wants pass
framing, the honest plate is the repeat (`pass 1 [1,2,3]` → `pass 2 [1,2,3]`, no swaps), which is also the
O(n²) lesson. Digits that did not move stay at full ink; only the two chambers that
exchanged carry a 3px `--line` trail, and a counted tag under the band reads
`⟪LEDGER:44b⟫ COMPARISONS`.
**F4 (G4-split, the bill and the alternative).** Two panels, each with its own titlebar, opposite wipes,
nothing amber:
```
left  : the pair grid — a square of `--panel` cells, one per neighbour comparison the run returns
        (`⟪LEDGER:44b⟫` cells filled for this input), mono tag `PAIRS GROW` above it
right : main.py, chip PYTHON, two lines plus a strip:
        nums = [3, 1, 2]
        print(sorted(nums))   # ⟪LEDGER:44c⟫
        mono tag under the strip: `SHIPS WITH PYTHON`
```
One reading line across the pair: `learn the swap, use the sort you have` (ink on `the sort you have`) —
the myth, stated as practice rather than as a denial. The right panel's printed value is a ledger entry: it
is what the interpreter prints, in its own form, and it is the series' first `sorted()` appearance, so the
`PYTHON` chip is doing labelling work (bible-day2 § 2 / `frame-day2.md` § 13).
**F5 (G5, the Myth).** Headline `which sort do you use?` (23 characters, 5 words — inside the ≤24 wrap
rule) at 6.4cqw in the 176px band; two mono chips on `--panel-2` with 3px `--line`:
`MYTH: a sort you ship` and `REALLY: a sort you draw`, neither selected and no amber on either (the ring
travels once and rests on neither — pb-10's finding, and the myth is the viewer's to answer, not the
frame's); mechanic verb plate `NAME ONE` in solid `--say`; badge
`PROGRAMMING BASICS · STRUCTURES I · 44 · BEGINNER`; sub line `sorted, or something else`.

**CTA card copy, verbatim and complete:** spoken `Which sort do you actually use in real life?` / headline
`which sort do you use?` / the two myth chips / verb plate `NAME ONE` / sub line / badge line.

## Cover / title text

`the sort nobody ships` (4 words, from the hook's second half) + badge
`PROGRAMMING BASICS · STRUCTURES I · 44` + `BEGINNER`. Amber plate on `nobody ships`. No notation, and no
strike-through on the cover: the myth is a chip inside the film, not a crossed-out word on a still.

## Post copy

**Feed caption:**

    The sorting algorithm everyone learns and nobody uses.
    Bubble sort walks the list and swaps neighbours that sit out of order, and the largest value ends each pass at the far right.
    Every pass compares neighbours again, so the pairs grow with the square of the count. That is why real code reaches for the sort the language already ships.
    Which sort do you actually use in real life?

**Hashtags:** `#python` `#programming` `#learntocode` `#algorithms`
**X:** `bubble sort is the easiest sort to watch: compare two neighbours, swap them if they are out of order, and the biggest value walks itself to the end. three values need two swaps and one pass. a thousand values need ⟪LEDGER:44b⟫ pairs - or cut that clause if the run does not return it. learn the mechanism, then call sorted. which sort do you actually use? #python`
**LinkedIn:** the reason it stays on the curriculum is that it makes the two ideas a learner needs before
anything else - a comparison and a swap - visible in isolation, which quicksort hides behind recursion the
series has already had to teach separately in part 14. Keep it for the whiteboard and let the runtime's own
sort do the work; `#python` `#programming` `#algorithms`

**Pinned comment:** `Mine: sorted() and list.sort, which is Timsort - it looks for runs that are already ordered and merges them, so sorted data costs almost nothing and random data does not degrade the way a neighbour swap does. The one place I have written a bubble-shaped loop on purpose is a tiny fixed list where the swap is the point of the exercise, like teaching a comparison. Two honest numbers: ⟪LEDGER:44b⟫ the comparison count this film's trace returns for three items, and what the same pass count becomes at a thousand, or cut both. If you reached for something else, say which - part 43 is what binary search needs you to do first, and part 41 is the shape all of this makes.`

## Accuracy

**Status: ledger returned, user ruled (`CORRECTIONS-day4.md` § D, item A5), see the Approved edits section
below. The risk here was labelling, not arithmetic, and it is resolved.** The plan's
example `[3, 1, 2] → [1, 3, 2] → [1, 2, 3]` is correct as a **swap-by-swap** trace of pass 1: comparing
`3` and `1` gives the second row, comparing `3` and `2` gives the third. Read as **two passes**, the same
chain is wrong, because after one pass the list is already sorted and pass 2 makes no swaps — and the plan's
other line, "the largest value bubbles to the end each pass", is exactly the sentence that invites the
misreading. F3's tags are therefore **written**: `AFTER SWAP 1` / `AFTER SWAP 2`, per A5. The run returned
the state list (`[3,1,2]` → `[1,3,2]` → `[1,2,3]`), 3 comparisons and 2 swaps for `[3, 1, 2]`, and pass 2
performing zero swaps, so the per-pass plate is ruled out and `⟪LEDGER:44b⟫` now only owes the counted tags,
not the wording.

Everything numeric in the caption, the X line and the comment is marked: the "half a million pairs at a
thousand" figure and the comment's two numbers need `⟪LEDGER:44b⟫`, and the `sorted()` print needs
`⟪LEDGER:44c⟫`. The X line currently carries a recalled figure — **if the run does not return it, replace
that clause with `a thousand values need a pass per item` and ship no number.**

The one non-numeric claim is kept because it is verifiable from the standard library's existence: Python
ships a sort, and this part's advice is to use it. Timsort is named in the pinned comment with its
run-merging behaviour described in words; if that description is wanted as a citation rather than a
sentence, it belongs in the comment's next revision, not on screen.

## Ledger dependencies

- `⟪LEDGER:44a⟫` (F3's two state tags) — **returned and ruled, no longer open.** ACCURACY-day4 § 44's trace
  gives the row after each swap for `[3, 1, 2]`: `AFTER SWAP 1` = `1 3 2` (a[0]=3 > a[1]=1), `AFTER SWAP 2`
  = `1 2 3` (a[1]=3 > a[2]=2). A5's ruling sets the label wording; the rows in F3's block already match.
- `⟪LEDGER:44b⟫` (F3 `COMPARISONS` tag, F4's pair-grid cell count, the X line's figure, the pinned
  comment's two numbers) — swaps, comparisons and passes for `[3, 1, 2]`, **including whether pass 2
  performs zero swaps**, plus the comparison count at a thousand items if any caption or comment number is
  to survive. **A5 settled the pass-vs-swap labelling this placeholder was guarding** (3 comparisons,
  2 swaps, pass 2 swaps nothing); § 44 also returns `499,500` comparisons at n=1000 against `n log2 n` =
  `9,966`, and B10 forbids a timed race for those two.
- `⟪LEDGER:44c⟫` (F4 right panel strip) — the printed output of `sorted([3, 1, 2])` exactly as this
  interpreter prints a list of ints.

## Gate state

Non-carrier. Blocks at F3/F4 on `⟪LEDGER:44b/c⟫` (44a returned and ruled by A5); F1/F2/F5 and all audio
are independent.

Snapshot-read order: (1) the **swap translate** — two chambers exchanging authored positions with nothing
else moving, and no chamber ending outside the six-slot band; (2) the **`LOCKED` border** on the far-right
chamber after the first pass, which is the claim F2's second sentence makes; (3) F3's three rows read as a
sequence top-to-bottom at phone size, with the tags legible and reading **`AFTER SWAP 1` / `AFTER SWAP 2`**
(A5: a `PASS` word on either box is a defect, not a style choice);
(4) the F4 grid and strip pair — one counted claim per panel, nothing below y 1004; (5) F5 chips
unselected, ring resting on neither, zero coral, and **no `O(…)` string anywhere except F4's slow/fast
plate** (§ 3 row 44 allows `O(n²)` and `O(n log n)` there and nowhere else in this film).

Runtime expectation: **~31.9s** (84 / 3.24 = 25.9s speech + 6.0s air; band 29–34). Last part of the
tranche, and the only one whose central
number is a labelling question instead of a measurement. **A5 changed no word of the VO**, so the audio and
its 84-word budget are untouched by the ruling.

## Approved edits

- **A5 (CORRECTIONS-day4 § A, MEDIUM) landed as a screen instruction only, exactly as the user ruled.**
  Before: F3's two boxes were tagged `⟪LEDGER:44a⟫`, with the file's own guard "must say `SWAP 1` /
  `SWAP 2` and not `PASS 1` / `PASS 2` unless the run returns otherwise". After: tags read
  **`AFTER SWAP 1`** (`1 3 2`) and **`AFTER SWAP 2`** (`1 2 3`); the pass reading is ruled out because pass 2
  compares one pair and swaps nothing.
- Spoken word count: **84, unchanged.** No row, no Est., no frontmatter `words:` moved. F2's
  `The largest value ends each pass at the far right` and F4's `Every pass compares neighbours` stay as
  written, because they speak the pass *rule*, not these two boxes.
- Notation frontmatter and the two notation paragraphs corrected to ACCURACY-day4 § 3 row 44: `O(n²)` and
  `O(n log n)` are licensed on F4's slow/fast plate only, spoken forms `big O of n squared` /
  `big O of n log n`, and this part's VO says neither.
- Screen, from B10: the slow/fast plate's numbers are comparison counts only, `499,500` against `9,966` at
  n=1000; **no timed race on screen** (a reversed-input race against `sorted()` measured 2,045,883× on
  Timsort's best case and is a probe artifact, not a fact).
