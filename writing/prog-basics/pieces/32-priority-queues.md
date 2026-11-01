---
id: pb-32
order: 9
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Priority queues
slug: priority-queues
project: videos/prog-basics-32-priority-queues/
difficulty: M
mechanic: Debate
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 88
target_length: ~33s             # 88 / 3.24 = 27.2s speech + 6.0s air; at 2.7 w/s ~38.6s
ceiling: 54s
grammar: G1 G15 G15 G3 G5
marks: G15 service lane (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed-with-constraint
clone_source: 29's G11-heap frames (the tree half) · pb-21/03-shift.html (tag lane) · pb-15/02-descent.html (tabbed card)
---

# P32 · Priority queues · [M] · Debate · code card

**Message:** serve the most urgent, not the oldest — which is 29's heap with a job, and comes with an
executed catch: when two items share a priority, a plain tuple heap breaks the tie by **spelling**, not
by turn.

The tranche's debate, and the only part where the accuracy finding *is* the argument. Day 2's pinned
comments had to be told things; here the user's own question ("Is priority-first always fair?") gets a
real, executed answer that says *no, and in a way you did not expect*.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 10 — `An ER doesn't treat patients in the order they arrive.` | 3.1s | 3.7s | Verbatim. The hook is a negative sentence and stays exactly as written — it is not the banned contrast shape, it is a claim about a place. |
| F2 | 27 — `A priority queue serves the highest priority first. The oldest item waits its turn. It's usually built on a heap. This is that heap, with a serving order.` | 8.3s | 10.0s | Re-cut 6 then the user's own callback line, then an authored bridge that names the heap on screen. `waits its turn` is said evenly — it echoes part 24 on purpose and the debate is about that echo. |
| F3 | 29 — `Push low with five. Push urgent with one. Pop gives urgent. A heap puts the smallest number at the top. Schedulers, Dijkstra's algorithm, and notification systems rely on it.` | 8.9s | 10.7s | Three short beats for the example — one arrival, one arrival, one departure — then the convention, then the chip line read flat. |
| F4 | 15 — `Two items share priority one. The tie breaks by spelling. Low leaves before urgent.` | 4.6s | 5.6s | The finding, in three beats of five words. Do not editorialise; the counter and the chips do the arguing. |
| F5 | 7 — `Is priority-first always fair? Comment your take.` | 2.2s | 2.6s | Verbatim CTA. |

**Total 88 spoken words → ~33.1s.** Note honestly in the report: 32 carries an `[M]` tag but the user's
copy is lean, so the film sits at the **top of the `[B]` band rather than inside `[M]`'s 34-42s**. That
is allowed — the `[M]` band is an allowance, not a floor — and the correct response is **not** to add
words (bible § 0.3). It is 3s over the 30s floor and 21s under the ceiling.

**Spoken code:** `(5, 'low')` → "five, low". `heappush` → "heap push". `heappop` → "heap pop". `False` →
never appears in this part. `log n` → **not said at all in 32** (the tranche's two allowed utterances are
spent in 28 and 29).

**Re-cuts applied** (`CORRECTIONS-day3.md` § A): **re-cut 6** — the user's `…first, not the oldest` split
into two affirmative beats, removing the tranche's only "it's not X" shape (rationed to part 05's hook);
flagged as touching a writer's sentence. Plus one authored bridge beat in F2 (`This is that heap, with a
serving order.`) and the convention line in F3 (`A heap puts the smallest number at the top.`), both
needed because the example's numbers only make sense once the ordering convention is on the record.
Hook and CTA verbatim.

## On-screen text and code treatment

**G15 is `frame-day3.md` § 6 — cite it.** Short form: a two-level heap (root node at centre 540 on y 292,
two children at lefts 232 / 700 on y 452, elbows per 27), two **tuple chips** 280×64 `--panel-2` 3px
`--line` JetBrains Mono 700 2.9cqw `--ink` at left 72 / y 640 and left 72 / y 712, and a `SERVED` slot
200×84 at left 736 / y 300. Counted tags in the **upper** lane (y 288).

**Mandatory chip:** `SMALLER = EARLIER` (`--muted`, `data-layout-ignore`) beside the tuple lane. Without
it a learner who meets a system where `1` means *low* builds the inverse and blames the video (bible § 4).

**F1 (G1).** `an ER` then `doesn't treat by arrival`, amber plate on `by arrival`. No heap.
**F2 (G15, the heap gets a job).** The two-level heap drops in parent-first (P2, from **29's** frames —
same node size, same elbows, so the callback is literal and not rhetorical), and a 3px `--line` rail
draws from the root across to the `SERVED` slot. `PRIORITY` lands on the root's name tab, `QUEUE` on the
slot's tab. The `HEAP` chip (29's own word) arrives on `built on a heap` — a named callback between two
parts of the same tranche, which is what makes a series feel like one.
**F3 (G15, served out of order).** The example, physically:
```
arrive : the tuple chip (5, 'low') drops in (P2) at y 640, then (1, 'urgent') at y 712. Arrival order is
         top to bottom on screen, so the viewer can see who came first. They are NOT pushed in numeric
         order and the frame says so with a tiny ARRIVAL tab stack.
serve  : on "pop gives urgent", the (1, 'urgent') chip travels RIGHT and UP into the SERVED slot
         (0.5s power3.out) while (5, 'low') holds exactly where it is. Nothing else moves: the oldest
         item is still sitting in the intake position, which is the debate drawn.
count  : FIRST 'urgent' (left 270 / w 300) and, on the arrival beat, no second number -- the second tag
         belongs to F4's tie, so one walk never carries two counts (bible § 4b).
```
Then the chip row `SCHEDULERS` / `SHORTEST PATH` / `NOTIFICATIONS` arrives in the lower lane
(`--panel-2` mono `--muted`, `data-layout-ignore`) — **chips, never chambers**: nothing about a scheduler
or Dijkstra was executed here, and the middle chip is the gloss the voice cannot fit beside the name
`Dijkstra`.
**F4 (G3 + the tie beat).** `main.py`, chip `PYTHON`, four lines + terminal (the cap; every line
executed):
```
from heapq import heappush, heappop
q = []
heappush(q, (5, 'low')); heappush(q, (1, 'urgent'))
print(heappop(q))            # (1, 'urgent')
```
stdout `(1, 'urgent')` in mint, exactly as printed here. ⚠ Line 3 carries **two statements** because the
import plus four calls plus a print will not fit G3's cap — it is the widest fragment in Day 3 and must
be snapshot-checked inside the chamber's width, and if it is too wide the fix is to drop `q = []` onto
line 1's tail, not to shrink the type. Ligatures off; Python single quotes.
Above the chamber, the tie beat in three five-word moves: two chips `(1, 'low')` and `(1, 'urgent')`
arrive 0.2s apart (P7 `pulse-set` on each, one amber arrival per beat — they pulse, they do not light
amber), then **`low` leaves** and `urgent` holds. A one-clause annotation under them reads
`l before u` (Space Grotesk 400, `--ink` at 78%). Tag: `TIES BY SPELLING`.
**F5 (G5).** Headline `fair or first?` at 6.4cqw in a 176px box (13 chars ✓), mechanic verb plate
`COMMENT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 32 · INTERMEDIATE`. Behind it: the
two chips `(1, a)` and `(1, b)` side by side in `--muted` hairlines and a `?` over them — the tie drawn
as a question, **with no departure arrow**. Showing which one leaves answers the debate on screen
(pb-11's rule).

## Cover / title card

The cover reads **`urgent goes first`** (3 words, cut from the explain, amber plate on `first`) + badge
`PROGRAMMING BASICS · BASICS III · 32` + `INTERMEDIATE`. `not by arrival` was the obvious candidate and
it is the one shape the series has already spent — see `frame-day3.md` § 11's rationing rule. A cover
that names the rule is also weaker than one that names the fight, and the fight lives in the CTA, where
it belongs.

## Post copy

**Feed caption:**

    An ER doesn't treat patients in the order they arrive.
    A priority queue serves the highest priority first, so the oldest item waits its turn — and it is
    usually just a heap with a serving order. One thing the tidy version hides: when two items share a
    priority, Python breaks the tie by the label's spelling, not by who arrived.
    Is priority-first always fair? Comment your take.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#algorithms`
**X:** `an ER does not treat by arrival, and neither does a priority queue. push (5,'low') then
(1,'urgent') and the pop returns urgent - the heap puts the smallest number on top and that is what
"highest priority" means here. now push two items at priority 1: the tie breaks by SPELLING, so 'low'
leaves before 'urgent'. is priority-first always fair? #python`
**LinkedIn:** the system design version of this debate is "what is your priority function, and who
argued about it" — because a queue that serves by priority is a policy, and the fairness question is
never really about the data structure. Starvation is the failure mode worth naming: an item below the
current threshold can wait forever unless someone adds ageing. `#python` `#programming`
`#datastructures`

**Pinned comment:** `The part 24 answer and the part 32 answer are different questions, and that is the whole debate. FIFO is fair to waiting. Priority is fair to urgency. Neither is fair to both, which is why real schedulers mix them: give every item an ageing counter so a low-priority job eventually becomes the highest-priority job, or run strict priority with a floor so nothing starves. Two implementation facts I checked rather than recalled, both in Python 3.13: (1) with heapq you push a tuple, so ties are compared on the SECOND element - (1,'low') popped before (1,'urgent') because 'l' sorts before 'u', which is not arrival order. The standard fix is a third field: heappush(q, (priority, counter, item)) with counter += 1 per push, and then equal priorities leave in the order they arrived. (2) If your items are not orderable, the tie comparison crashes: pushing (1,{}) and (1,{'x':1}) raises TypeError: '<' not supported between instances of 'dict' and 'dict' - another reason the (priority, counter, item) shape is the one to write down. Small number meaning high priority is a convention, not a law: heapq sorts ascending, so a UI that labels 1 as LOW will surprise you, and a max-heap is built by negating on the way in.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): `heappush((5,'low'))` then `heappush((1,'urgent'))` →
first `heappop` is **`(1, 'urgent')`**, second `(5, 'low')` — the user's example, exactly, including the
label. **The tie finding:** `(1,'low')` and `(1,'urgent')` pop **`low` first, then `urgent`** — decided
by the label's spelling, not arrival; with `(priority, sequence, label)` the arrival order is restored
(`low` then `urgent` by sequence, which also happens to agree here, and the counter is what makes it
agree *for the right reason*). Ties against unorderable items raise
`TypeError: '<' not supported between instances of 'dict' and 'dict'` — **reply-thread only, never on
screen**, because Day 3 shows no coral (`frame-day3.md` § 7.1). Max-heap by negation executed:
`(-9,'urgent')` pops before `(-5,'low')`.

**Three screen-text constraints** (`CORRECTIONS-day3.md` § B): the `SMALLER = EARLIER` convention chip is
mandatory; `Dijkstra` gets a `SHORTEST PATH` gloss chip and stays a chip (nothing about it was executed);
and F5 shows the tie without resolving it.

## Gate state

**G15 is unbuilt**, and it is the tranche's only *composite* mark — 29's heap plus 24's service idea plus
a tuple chip lane — so it inherits both of their risks. Snapshot-read in this order: (1) the two tuple
chips must be legible as Python tuples at phone size, single quotes intact and **un-ligated** (a ligated
`'low'` with a smart-looking apostrophe is a defect in a code frame); (2) the departed chip lands **in
the SERVED slot and nowhere else**, while the un-served chip holds its position — if both move, the part
has drawn a queue and contradicted its own hook; (3) the arrival stack does not collide with the heap's
L1 nodes at lefts 232 / 700 (that is the composite's one real geometry risk: two lanes in one 774px box);
(4) the tie beat's two pulses are sequential and there is never more than one amber arrival; (5) the
chamber's two-statement line fits inside 936px; (6) zero coral. If the heap and the tuple lane cannot
share the frame, **report it rather than dropping either** — 29's grid decision is what four parts are
copying, and this is the part that would reveal it.
