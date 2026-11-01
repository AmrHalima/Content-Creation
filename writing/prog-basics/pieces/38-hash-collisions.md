---
id: pb-38
order: 5
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Hash collisions
slug: hash-collisions
project: videos/prog-basics-38-hash-collisions/
difficulty: M                      # load-bearing badge, not prose
mechanic: Quiz                     # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 78
target_length: ~30s                # 78 / 3.24 = 24.1s speech + 6.0s air; 76 with the fallback line
ceiling: 54s
grammar: G1 G2b G7 G2b+G7 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: pending-ledger           # the riskiest claim in this tranche lives in this file
ledger_placeholders: 3
notation: BANNED here (day-4 default) — no `O(1)` average-case claim on any surface. Say "one jump".
clone_source: pb-21's G2b slot row + pb-22's G7 mini chain + pb-11's finite walk (the probe)
---

# P38 · Hash collisions · [M] · Quiz · code card

**Message:** two keys can ask for the same slot, the table has to hold both, and there are two standard
answers — put a list in the slot, or keep walking for the next free one.

This is the part that explains 36's "constant time" honestly without saying it: a hash map is fast because
collisions stay rare, and the mechanism that keeps them rare is a good hash function plus a resize. F2 is
the problem, F3 the two answers, F4 the user's worked example, F5 the pick.

**Notation (tranche ruling 1).** The ban stands in full here, and it matters: the plan's sentence "so
lookups stay fast" is the amortized-constant claim, and this part says `one jump` on screen and `fast` on
the ear, with no symbol anywhere. 41 and 42 own the notation; 37 and 43 own the comparison label; nothing
else does.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 78 words → 24.1s speech + 6.0s air = **~30.1s**. At
the slow-word rate (3.04 w/s) it is ~25.7 + 6.0 = **~31.7s**. Both inside the band; the fallback line
below trims 2 words and stays ~29.4s.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.8s | What happens when two keys want the same spot? | Verbatim hook. `same spot` is the frame the whole part draws, so give it the small pause. |
| F2 | 6.8s | A collision is two keys landing on the same slot. The table cannot grow its slot, so it has to hold both. | First sentence names the term, second states the bind. Land `hold both`, not `cannot grow`. |
| F3 | 5.2s | Chaining keeps a small list inside that slot. Open addressing probes on to the next free slot. | Two beats, equal weight, one per fix. The sentence break is where the frame changes state — pb-22's F3 recipe. |
| F4 | 6.8s | Both ab and cd aim at slot ⟪LEDGER:38⟫, so that slot holds a chain. Good hash functions and resizing keep this rare. | Read `ab` and `cd` as the quoted words they are. `keep this rare` is the reassurance and it should not sound like a promise. |
| F5 | 2.5s | Chaining or open addressing: which would you pick? | Verbatim CTA mechanic. Both names must be clear; this is the question the comments answer. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 9 · F2 22 · F3 17 · F4 22 · F5 8 = **78 spoken words** → 24.1s speech + 6.0s air = **~30.1s
film** (~31.7s at pb-13's 3.04 w/s). The fallback F4 line is 20 words, which makes the part 76 → ~29.4s.
`SCRIPT.md` keeps exactly 5 lines, one per frame, headings `## Line N — Title (Frame N)`
(WAVE2-PACKET § 3).

**Spoken code:** `'ab'` → "ab", `'cd'` → "cd". `slot 3` → **the number spelled out** ("three") once the
run returns it, never a digit and never a symbol. `hash(k) % size` → never read aloud; it is what the
marker does on F2. `None` → "nothing".

**The F4 number, and its pre-approved fallback.** If the ledger run cannot return a **reproducible** slot
for `'ab'` and `'cd'` (see Accuracy — CPython randomises string hashes per process), F4's first sentence
becomes, verbatim and authorised now: `Both ab and cd aim at the same slot, so that slot holds a chain.`
(20 words, part total 76 → ~29.4s). Use that line and drop the slot tag from the frame. A builder must not
improvise a third version, and must not keep a number the run refused to reproduce.

**Re-cut applied** (logged in full). "A collision is when two keys hash to the same index." → F2's first
sentence keeps the fact with `landing on` in place of the verb `hash` (the term for the function is not the
lesson here and it would need its own gloss) and `index` → `slot`, one word all the way through this part.
"Chaining stores a small list in each slot" / "Open addressing probes for the next free slot" kept as the
two F3 beats with `inside that slot` and `on to` added for the ear. "Good hash functions and resizing keep
collisions rare, so lookups stay fast" (13 words, two clauses) → F4's second sentence, shortened to
`keep this rare`, because the lookup-speed half of it is the claim that would need notation, and the
screen's `ONE JUMP HELD` tag is where it belongs instead — said by the counted frame, not by the voice.
Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 38`, `INTERMEDIATE` badge, ligature guard on all five.
**Zero coral**: nothing raises in this part; the two keys disagreeing is not an error, and a coral slot
would teach that collisions are failures. They are arithmetic.

**F1 (G1, also the cover).** Type alone, two groups: `two keys` / `one slot?` on the solid `--say` plate —
the hook's own words cut to the collision. Nothing drawn.
**F2 (G2b, the bind).** Four slots in a row on pb-21's settled geometry (`142×152`, pitch `158`, first
`x 74`) — **four, because six is the cap and four is what a modulo-4 demo needs**; the ledger run must use
the same count (see Ledger dependencies). Two key chips, `ab` and `cd`, sit above the row, and two
connectors (3px `--line` bars with two-border chevrons, untransformed layer) both drop into the **same**
slot, which gets a `--line` double border — thickness carrying the meaning, per G2's border law, not
colour. Index strip beneath in mono `--muted`, `data-layout-ignore`: `0 1 2 3`. Counted tags, mono
`--line` so they are countable: `2 KEYS` and `1 SLOT`. One reading line: `same slot, both must fit`.
**F3 (two beats, one frame, split by the voice's sentence break).**
```
chaining        : the hit slot grows downward into a mini G7 chain — two nodes, `ab` then `cd`, value
                  cell mint, `NEXT` cell `--muted`, 176x108 nodes, 24px CSS connectors, terminator chip
                  `None`. Tag above: `CHAINING`. Only that slot grows; the other three hold still, and
                  that stillness is the argument.
open addressing : the same row, chain not shown, and a `--say` probe marker that steps slot → slot+1
                  (pb-11's finite walk, one chamber per beat) while a mono `PROBES` tag ticks 1 2 on P9
                  count-tick until it lands on an empty chamber (3px dashed --line, no value, caret
                  blinking). Tag above: `PROBE NEXT`.
```
The two beats occupy different bands of the same frame, and the frame carries exactly one reading line at
a time (`a list, right there` then `walk to the next gap`). No amber on the fixes: amber is the word the
voice is on, and it moves with the two names.
**F4 (G2b+G7, the worked example).** Back to the row, with slot `⟪LEDGER:38⟫` holding the two-node chain
drawn in F3, and the mono strip under the row: `⟪LEDGER:38b⟫` — the executed printed form of that slot's
contents. To the right, the reassurance beat the narration carries: a `resize` arrow that lifts the whole
row into a longer row (the block moves as a unit; a y/x tween on the container, not a layout reflow) and a
counted tag `collisions: rarer`. Corner tag `ONE JUMP HELD` in mono `--muted` with
`data-layout-ignore` — this is where the plan's "lookups stay fast" lives, without a symbol.
**F5 (G5, the Quiz).** Headline `which would you pick?` (21 characters, 4 words, inside the ≤24 wrap rule)
at 6.4cqw in the 176px band; two chips `CHAINING` / `OPEN ADDRESSING` in `--panel-2` with 3px `--line`,
**unselected**, ring travelling and resting on neither; verb plate `PICK ONE` in solid `--say`; badge
`PROGRAMMING BASICS · STRUCTURES I · 38 · INTERMEDIATE`. The row from F4 sits dimmed at 0.42 behind the
headline as the hint, with its chain nodes at full ink (dim the skin, not the digits).

**CTA card copy, verbatim and complete:** spoken `Chaining or open addressing: which would you pick?` /
headline `which would you pick?` / chips / verb plate `PICK ONE` / badge line.

## Cover / title text

`two keys, one slot` (4 words, the hook itself cut) + badge `PROGRAMMING BASICS · STRUCTURES I · 38` +
`INTERMEDIATE`. Amber plate on `one slot`.

## Post copy

**Feed caption:**

    What happens when two keys want the same spot?
    A collision is two keys landing on the same slot, and the table cannot grow that slot, so it holds both.
    Chaining keeps a small list inside the slot. Open addressing probes on to the next free one.
    Good hash functions and resizing keep collisions rare. Which would you pick?

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures`
**X:** `a hash turns a key into a slot number, and two keys can land on one slot. chaining parks a small list in that slot. open addressing walks to the next gap and leaves one hole behind. good hashing and a resize keep it rare, which is the only reason a dict feels instant. chaining or open addressing? #python`
**LinkedIn:** the reason this comes up in a review is a key that is nearly but not quite identical:
collisions are cheap when they are rare and expensive when an attacker can aim them, which is why
string hashing in a real runtime is seeded per process rather than deterministic; `#python`
`#programming` `#datastructures`

**Pinned comment:** `I pick chaining for the interview and open addressing for the machine: chaining is easy to reason about and its nodes can be walked, but it sprays small allocations across memory, while open addressing keeps the whole table in one block and pays for it with clustering as it fills. Two things worth saying out loud in that interview: ⟪LEDGER:38c⟫ — name what this interpreter's dict actually does before claiming it; and the reason a `dict` keyed by user-supplied strings is a denial-of-service surface is that collisions stop being random. Part 36 is the cache that needs this to stay cheap. Part 39 is the array that resizes instead of chaining.`

## Accuracy

**Status: pending the Day-4 ledger run. This file carries the tranche's riskiest claim.** The plan states
`'ab'` and `'cd'` both land in **slot 3**. Two independent problems, neither of which I am allowed to
paper over:

1. **CPython randomises `str` hashes per process** (`PYTHONHASHSEED`), so a claim about the real
   `hash('ab')` is not reproducible run to run. The demo is only honest as a *toy* hash over a stated
   table size, or with the seed pinned and said out loud.
2. **"Slot 3" depends entirely on the table size.** The same pair lands in different slots under mod 4,
   mod 8 and mod 16.

The frame draws **four** slots because four is a workable modulo for a two-character toy hash and six is
the cap the settled G2b geometry allows. The run must return: the exact hash definition used, the table
size, the resulting slot for `'ab'` and `'cd'` (which must be equal, or the part's example is wrong), and
the printed form of the chain in that slot. If the pair does not collide under the toy hash, **report it
rather than switching keys** — the CTA and the hook do not depend on which two letters collide, but F2's
picture and F4's strip both do, and a swapped pair silently changes the part's example.

The pinned comment's claim about what CPython's dict does for probing is marked, not recalled. "Lookups
stay fast" ships as a mechanism the screen shows (`ONE JUMP HELD`) with no rate claimed and no symbol
said.

## Ledger dependencies

- `⟪LEDGER:38⟫` (F2/F4 slot index, **and one place in the narration**) — the slot `'ab'` and `'cd'` both
  land in, for the exact hash and four-slot table the film draws. Must be reproduced with the toy
  definition, not a seeded `str` hash. F4's VO line waits on this; the fallback sentence in
  `## Final narration` is the authorised alternative.
- `⟪LEDGER:38b⟫` (F4 mono strip) — the executed printed contents of that slot after both inserts, in the
  form the structure actually prints (list of tuples, chain, or key order). Cut the strip if it cannot be
  printed as shown.
- `⟪LEDGER:38c⟫` (pinned comment) — what this interpreter's dict uses for collision resolution (chaining
  or open addressing, and which probing), sourced from the implementation or its changelog, not from
  memory. Cut the claim if it cannot be sourced; the comment still answers the quiz without it.

## Gate state

Non-carrier. **Do not author F2/F4 until `⟪LEDGER:38⟫` returns** — both frames draw the collision at a
specific slot, and re-drawing a ring position is cheaper than shipping a wrong one. F1/F3/F5 and 4 of 5
VO lines are independent (F4's line is the one blocked, and it has the fallback).

Snapshot-read order: (1) **both connectors landing in one slot** — if they land one chamber apart the part
has no subject; (2) the **chain growing down from one slot only** while the other three hold; (3) the
**probe walk** landing on a dashed empty chamber with `PROBES` at 2, and no amber on the fix itself;
(4) the resize beat — the row moves as a block and nothing crosses y 1004; (5) F5 chips unselected, ring on
neither. Expect medium `keep-out` hits on the growing chain if it overflows its band on purpose; those are
fine **only** with `data-layout-allow-overflow` on the element.

Runtime expectation: **~30.1s** (78 words) or **~29.4s** on the fallback line, both inside 29–34.
