---
id: pb-42
order: 9
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Time vs space complexity
slug: time-vs-space
project: videos/prog-basics-42-time-vs-space/
difficulty: B                      # load-bearing badge, not prose
mechanic: Debate                   # load-bearing badge, not prose
mode: direct-address (G8)
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 80
target_length: ~31s                # 80 / 3.24 = 24.7s speech + 6.0s air
ceiling: 54s
grammar: G8 G8 G3-cutaway G3-cutaway G8+G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: approved                 # CORRECTIONS-day4 § A2 + the user's § D3 ruling landed in the VO
ledger_placeholders: 3
notation: ALLOWED, on screen (ACCURACY-day4 § 3, row 42). Narration carries the spoken form only, never a symbol.
clone_source: pb-14's G8 chrome verbatim + pb-17's cutaway scrim + pb-16's Debate chips
---

# P42 · Time vs space complexity · [B] · Debate · **direct address**

**Message:** two ledgers for one function — how long it takes, how much it holds — and you can move cost
between them on purpose, which is the whole argument about which one you spend first.

Second direct-address part of the series and the strongest candidate for it: the CTA asks the viewer what
*they* sacrifice, which is a question addressed at a person, not a diagram. pb-14 defines the chrome and
pb-17 defines the cutaway scrim, so this part invents nothing: corner brackets, `REC` strip in `--muted`
(never coral), timecode read off the root timeline, lower third over the title, and the code example as a
cutaway the presenter is standing next to.

**Notation licence, stated so no builder misreads it (ACCURACY-day4 § 3).** As in 41: this part's licence
covers every written surface because the trade is named by the two `O()` classes, and § 3 row 42 allows
`O(1)` and `O(n)` on the tradeoff plate plus measured numbers in the `x2774` style; 37 and 43 get comparison
labels only and 44 gets `O(n²)` / `O(n log n)` on its slow/fast plate; 34, 35, 36, 38, 39 and 40 keep the
total ban; **narration is always spoken form** — the voice here says "how long" and "how much", never a
symbol.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 80 words → 24.7s speech + 6.0s air = **~30.7s**
(the five rows sum to 24.8s with per-row rounding), low-middle of the 29–34s band. At 3.04 w/s:
~26.3 + 6.0 = **~32.3s**. Both inside, so nothing is added; if the measured film lands **under 30s**, the
lever is F5's pad (air is shape), then report. A2 cost **3 words** and F3 is the frame that pays them,
because the speed promise came out and its condition went in.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.8s | You can often trade memory for speed. Here's how. | Verbatim hook. `trade` is the word with the money in it; the two short sentences arrive as one beat and a turn. |
| F2 | 6.8s | Time complexity is how long a run takes. Space complexity is how much memory the run holds. Both grow with the input. | The two definitions are a pair, so give them identical pace and identical stress. The five-word third sentence is the hinge and it can be quick. |
| F3 | 7.1s | Store the answers and a second pass looks them up. Memory is the price. It pays only when recomputing is the expensive kind. | Cutaway arrives under `store`. Land `price`, then let `expensive kind` finish the frame quietly: the trade is real, and this example is not where it pays. |
| F4 | 5.6s | Recompute each time and you hold almost nothing. You also do the same work again, once per call. | The mirror of F3, same shape, `nothing` and `again` carrying the two halves. |
| F5 | 2.5s | Speed or memory: which do you sacrifice first? | Verbatim CTA mechanic. Both nouns clear, `sacrifice` is the word that makes it a debate, and then silence for the pad. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 9 · F2 22 · F3 23 · F4 18 · F5 8 = **80 spoken words** → 24.7s speech + 6.0s air = **~30.7s
film** (~32.3s at pb-13's 3.04 w/s). This is the tranche's lowest-risk part for the 30s floor: if the
measured film lands under 30s the lever is F5's pad, then report. `SCRIPT.md` keeps exactly 5 lines, one
per frame, headings `## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `sq = {n: n * n for n in range(1, 6)}` → never read aloud; F3 describes what it does in
plain words. `sq[5]` → "a stored answer looked up". `25` → "twenty-five", and only as a value the strip
prints under a spoken clause. The voice never says a brace, an asterisk or a symbol.

**Re-cut applied** (logged in full). "Time complexity is how long code takes. Space complexity is how much
memory it uses." — kept almost whole; `it uses` became `the run holds` so the two sentences name the same
subject twice and the pair can be heard as a pair, and `code` became `a run` because "how long code takes"
is a category error a learner will repeat (the code does not take time, this run did). "They often trade
off: caching results uses more memory but saves time, while recomputing saves memory but costs time." (21
words, three clauses, two `while`/`but` contrasts in one sentence) → split across F3 and F4 as two
mirrored frames, because the sentence is *about* the mirror and drawing it in one breath flattens the only
interesting thing about it. "Store squares in a dictionary to avoid recalculating them" stays as the cutaway
on screen and the narration says `store the answers`, which is the same claim without the noun the frame is
already showing. Hook and CTA unchanged. **One technical claim later changed with the user's approval**:
F3's second sentence promised speed the measured example does not deliver (§ A2, landed below).

## On-screen text and code treatment

**Chrome on every frame** (pb-14 verbatim): four 3px `--line-faint` corner brackets with 72px arms inset
48px; the top strip with a 16px REC dot on a 1s yoyo blink, `REC` in mono and the `00:0N` timecode read
from `tl.time()` on the root timeline (**all three `--muted`, never coral** — § 1 reserves coral for a
message an interpreter raised, and this part raises none); lower third on a `--panel-2` bar, radius 12px,
`PROGRAMMING BASICS · STRUCTURES I · 42` in muted mono above `Time vs space complexity` in Space Grotesk
700 `--ink` at 3.4cqw, top edge at or above y 940; ground grid drift and both glows returning to zero;
ligature guard on every frame's stylesheet.

**Consecutive-G8 discipline** (§ 4's rule, one type-alone frame only): F1 type alone; F2 introduces the
two-column card; F3 and F4 are cutaways wiping in opposite directions; F5 is the CTA plate. No two
neighbours share a wipe direction.
**F1 (G8).** Type alone, left-aligned at 72px, two groups: `trade memory for speed` (ink) /
`which one first?` on the solid `--say` plate. 9cqw, ≤7 words per group, P1 `say-sweep` on `trade`, plus
the 0.6px y float on the type block that pb-14 shipped.
**F2 (G8 + the two-column card).** Two `--panel` cards stacked, each with a 64px `--panel-2` titlebar:
left `TIME` with the line `how long it runs` and the chip `O(n)` at 2.9cqw mono `--say` border; right
`SPACE` with `how much it holds` and a second chip. Both chips are on-screen notation, permitted by
ruling 1 as part of the lesson, and the narration never says them. A 3px `--line` rule between the cards
and one axis label pair at 2.4cqw mono `--muted` with `data-layout-ignore`. Wipe: cards arrive top-down on
P2, one per spoken definition.
**F3 (G3 cutaway, the spend).** The chamber drops over the same ground at 700px wide with pb-17's 0.18
scrim behind it and the chrome still visible at its edges — `main.py`, chip `PYTHON`, three lines plus the
terminal strip, every printed value ledger-pending:
```
sq = {n: n * n for n in range(1, 6)}
print(sq)        # ⟪LEDGER:42⟫
print(sq[5])     # ⟪LEDGER:42⟫
```
Counted tags in mono `--line` (countable, not faint): `STORED 5` and `SECOND PASS: 1 LOOK, 0 MULTIPLIED`
— the second is `⟪LEDGER:42b⟫` and must match the dict the run prints. P3 `type-on` under the caret, one
line per spoken clause. The mint values are the printed dict and the looked-up value, and they are the
frame's proof that `looks them up` is literal.
**F4 (G3 cutaway, the save, wiping in from the opposite side).** Same chamber geometry, second snippet,
three lines plus a strip:
```
def sq(n):
    return n * n
print(sq(5))     # ⟪LEDGER:42⟫
```
Counted tags: `STORED 0` against F3's `STORED 5`, and `WORK EVERY CALL: 1 MULTIPLIED` (`⟪LEDGER:42b⟫` —
the same count pair, opposite sides). The chrome's timecode keeps running across both cutaways, which is
what makes them a cutaway and not two slides.
**F5 (G8 + G5, the Debate).** Type `which do you sacrifice first?` at 8cqw (26 characters, 5 words, inside
the group limits), two chips `SPEED` / `MEMORY` in `--panel-2` mono with 3px `--line`, **unselected** —
the ring travels between them and rests on **neither** (pb-16's shipped finding, and pb-10's: answering a
debate on screen ends the debate), mechanic verb plate `PICK A SIDE` in solid `--say`, and the lower third
staying live so the last frame still reads as a person. Sub line `two ledgers, one function`.

**CTA card copy, verbatim and complete:** spoken `Speed or memory: which do you sacrifice first?` / type
`which do you sacrifice first?` / chips `SPEED` `MEMORY` / verb plate `PICK A SIDE` / lower third.

## Cover / title text

`trade memory for speed` (4 words, the hook's own verbs and nouns) + badge
`PROGRAMMING BASICS · STRUCTURES I · 42` + `BEGINNER`. Amber plate on `speed`, lower third and `REC` strip
kept so the cover reads as a person talking and not as a title card (pb-14's cover rule).

## Post copy

**Feed caption:**

    You can often trade memory for speed. Here's how.
    Time complexity is how long a run takes. Space complexity is how much memory the run holds. Both grow with the input.
    Store the answers and a second pass looks them up, with memory as the price. Recompute and you hold almost nothing, but the work happens on every call.
    Speed or memory: which do you sacrifice first?

**Hashtags:** `#python` `#programming` `#learntocode` `#bigo`
**X:** `two ledgers for one function: how long it runs, and how much it holds. cache the squares and the second pass is a lookup with no multiply, paid for in room. recompute and you hold nothing, but every call does the work again. which do you sacrifice first? #python`
**LinkedIn:** the honest version of this debate is that the trade is rarely symmetric: memory is usually
the cheaper thing to give up until it is not, because an oversubscribed process does not slow down, it
gets killed, and a slow function just annoys somebody. Cache on the side that can recover; `#python`
`#programming` `#learntocode`

**Pinned comment:** `Memory first, almost always: it is the side that can be resized, sharded or bought, and a slow function can be profiled and fixed later. The exception that makes the argument real is a process that gets killed for its memory, and the one that makes caching a lie is a cache you never invalidate. ⟪LEDGER:42c⟫ a measured pair for the cached against the recomputed version, with machine and input size named, or no timing goes here. Part 41 is the shapes these two ledgers make, and part 35 is what you can afford to store when the answer is only a yes or a no.`

## Accuracy

**Status: ledger returned, user ruled (CORRECTIONS-day4.md § D3), A2 in the VO, see the Approved edits
section below. Still pending:** three printed values and one count pair. The squares dict, the
looked-up value, the plain-call result and the `STORED` / `MULTIPLIED` counts all come off the same run;
they are placeholders because every number on screen in this series is executed output and F3/F4's whole
argument is a pair of counts that have to agree with the snippets under them. The snippets themselves are
`⟪LEDGER:42⟫`-shaped rather than recalled: if the run prefers a hand-written dict literal to
`range(1, 6)`, it may choose, but the chamber stays at ≤4 executable lines and the printed form stays
exactly as the interpreter prints it.

Two claims are structural and are not at risk: caching trades room for repeated work, and recomputing
trades work for room. The `Both grow with the input` line is the definition of both axes and is stated as
such. The pinned comment takes the debate's side as an opinion with a named exception, and its timing offer
is marked rather than remembered.

One honesty note the screen must not overreach: F4's `def sq(n): return n * n` recomputes one multiply, so
the `WORK EVERY CALL: 1 MULTIPLIED` tag is true for the example and is *not* a claim about the general cost
of recomputation. The frame's counted tags describe the drawn snippets, and nothing on either frame says
which one wins in general — that is the debate, and it stays unanswered on screen.

**What A2 adds to that rule, and it is binding on F3/F4.** This example measures the **other** way: at
200,000 accesses the cached path is 30 ns and the multiply is 8 ns, so a stopwatch on these two snippets
contradicts the part's own thesis. The screen therefore prints **bytes only** — `92,952 bytes` stored
against `0 extra bytes` when recomputing, labelled `Python 3.13, 64-bit` (B12: the `getsizeof` container
figure of 36,952 B is the trap, and an empty dict is 64 B, hence *extra*) — and **no timed race appears on
either frame**. If the speed half of the trade is wanted as a number at all, § 2's `x2774` workload
(0.1 µs cached against 244.1 µs recomputed, a 5,000-term sum) is the only measured place it is true, and
that is a plate decision, not a narration one.

## Ledger dependencies

- `⟪LEDGER:42⟫` (F3's two printed values, F4's one printed value) — executed output of the three print
  lines as the run settles them. The same value must appear in both frames' lookups if the pair is to read
  as the same function twice; the run decides the snippet, the frame copies what it prints.
- `⟪LEDGER:42b⟫` (F3 `SECOND PASS: 1 LOOK, 0 MULTIPLIED`; F4 `STORED 0` / `WORK EVERY CALL: 1 MULTIPLIED`)
  — the counts for the chosen snippets, computed by the run. If the run will not return counts, drop both
  tags and let the two strips carry the whole comparison.
- `⟪LEDGER:42c⟫` (pinned comment, optional) — measured cached-vs-recomputed pair with machine and input
  size, or the sentence comes out.

## Gate state

Direct-address part, so it clones pb-14's chrome **verbatim** and pb-17's scrim numbers; nothing here
re-derives them. Snapshot-read order: (1) the two cutaways must not cover the lower third or the timecode,
and nothing from either chamber may sit below y 1004; (2) the two `O()` chips on F2 are the film's only
notation besides the CTA legend — a third is a ruling violation; (3) `STORED 5` on F3 and `STORED 0` on F4
must be legible as a pair across the cut, which is the argument; (4) chips unselected on F5, ring resting
on neither, chrome still live; (5) zero coral in all five frames.

Runtime expectation: **~30.7s** (band 29–34, low side). Audio and all chrome can be produced before the
run; only F3/F4's printed values and counted tags wait on it.

## Approved edits

- **A2 (CORRECTIONS-day4 § A, HIGH) plus the user's § D3 ruling landed in the VO.** Before: `That memory is
  the price you pay for the speed.` After: `Memory is the price. It pays only when recomputing is the
  expensive kind.`
- Squares example **kept**, thesis **kept**, speed promise **removed for this example** and moved to the
  condition § 2 names (ACCURACY-day4 § 42: `recomputing ... costs time: only when the recomputation is the
  expensive kind`, on screen "say *when*"). No number is spoken.
- Word delta: 77 → **80** (F3 20 → 23, Est 6.2s → 7.1s). Nothing trimmed; F1, F2, F4 and the CTA are
  untouched, and 80 sits inside the 75-91 band.
- Screen instruction (binding, from § D3 + B12, not applied here): BYTES ONLY on the trade-off pair,
  `92,952 bytes` vs `0 extra bytes`, labelled `Python 3.13, 64-bit`; **no stopwatch, no timed race**;
  `⟪LEDGER:42c⟫` stays out of the film, and the x2774 workload is the only measured speed claim if the
  frame wants one.
