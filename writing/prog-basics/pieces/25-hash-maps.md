---
id: pb-25
order: 5
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Hash maps / dictionaries
slug: hash-maps
project: videos/prog-basics-25-hash-maps/
difficulty: B
mechanic: Save
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 77
target_length: ~30s               # 77 / 3.24 = 23.8s speech + 6.0s air; at 2.7 w/s ~34.5s
ceiling: 54s
grammar: G1 G10-jump G10-jump G3 G5
marks: G10 jump (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed-with-constraint
clone_source: pb-21/03-shift.html (bucket row, marker, both tags) + pb-03/03-row.html (row of boxes)
---

# P25 · Hash maps / dictionaries · [B] · Save · code card

**Message:** a key is turned into a position, so finding Sara is one hop instead of reading ten thousand
names — and the price of that hop is that you cannot ask "who is next to Sara".

The tranche's payoff part: 21's row of boxes, 23's directness and 24's counting arrive together. It is
also the part with the **hardest accuracy constraint in Day 3** — the hash number cannot be shown,
because on this machine it is different every run.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 11 — `How does your phone find one contact among ten thousand instantly?` | 3.4s | 4.1s | Verbatim; `10,000` is spoken "ten thousand", which is why the count is 11 and not 10. Land `instantly`. |
| F2 | 16 — `A hash map stores key-value pairs. A hash function turns the key into an array position.` | 4.9s | 5.9s | The first sentence is the definition the user wrote; the second is re-cut beat 1. `key` and `value` land on the two halves of the key chip and the bucket. |
| F3 | 27 — `A lookup jumps straight to the answer instead of searching. On average, lookup takes constant time. It reads one bucket. Reading them one by one takes all six.` | 8.3s | 10.0s | Four beats. `jumps straight` is the hop motion — say it in one run. `constant time` is plain speech, no notation, and the counted pair appears on the hop, not on the phrase. |
| F4 | 12 — `Ages is Sara twenty five. Ages at key Sara gives twenty five.` | 3.7s | 4.4s | Read the value as a value, like pb-21 read its list. |
| F5 | 11 — `Save this for your next interview. It comes up a lot.` | 3.4s | 4.1s | Verbatim CTA, two beats. |

**Total 77 spoken words → ~29.8s** (air ≈ 6.0s). This is the leanest part of the tranche by design; if
the measurement lands it **under 30s, report it and grow F5's pad** — do not add narration
(bible-day3 § 0.3).

**Spoken code:** `ages = {'Sara': 25}` → "ages is Sara twenty five". `ages['Sara']` → "ages at key Sara".

**Re-cut applied** (`CORRECTIONS-day3.md` § A, re-cut 2): the user's 20-word three-clause line split at
the `so` into beats of 10 and 10 across F2 and F3. Hook and CTA verbatim.

## On-screen text and code treatment

Geometry is `frame-day3.md` § 6 / **G10 `jump`**. The bucket row is pb-21's shipped row: **142×152,
pitch 158, lefts 72/232/390/548/706/864, top 400**, index strip at **y 616** (mono 2.2cqw,
`data-layout-ignore`) reading `0 1 2 3 4 5`, arriving P9 with the zero first.

**F1 (G1).** Two groups: `one contact` then `among ten thousand`, with `instantly` on the solid `--say`
plate. **No row drawn** — the row is F2's entrance. The `10,000` number is *spoken and set as type*, and
it is the hook's own number, not an executed output; it is the only figure on a Day 3 frame that is not
in the ledger, and it belongs to the user's sentence.
**F2 (G10 jump, assembled).** Three objects arrive in this order, one per clause:
```
key chip  : 240x64 --panel-2, radius 12, 3px --line, mono 700 2.9cqw --ink, left 420 / y 292, reading
            'Sara' with Python single quotes. On "key-value pairs" a second half-chip reading 25 in
            --value slides in beside it: the pair is two things, drawn as two things.
hash box  : 200x84 --panel, 3px --line, radius 22, G2 name tab reading HASH, left 540 / y 400,
            interior mono 2.2cqw --muted reading: key -> position     <-- NO DIGIT. Ever.
buckets   : the six-slot row, top 400. Occupied: slot 1 = Omar, slot 3 = Lina, slot 5 = Sara, values
            30 / 19 / 25 in --value at 4.6cqw. Slots 0, 2, 4 are G2's dashed empty state, no caret.
```
**F3 (G10 jump, the two counted ways).** Same board, two beats:
```
hop  : a 3px --line connector (a .g7-bar with one .g7-chev) draws from the HASH box to slot 5; the key
       chip travels along it (0.44s power3.out) and slot 5 flashes a 3px --say border for 0.30s, then
       back to --line. Tag: JUMPED 1 (upper lane y 288, left 270 / w 300).
scan : a cur ring (162x172 at bucket.left - 10) steps slots 0,1,2,3,4,5 in a deterministic 0.12s
       stagger, ticking LOOKED AT 1..6 (left 590 / w 220). It stops at 6 because Sara is in the LAST
       slot -- the honest worst case, and the only reason the two tags are comparable.
```
Nothing on this frame is coral, and no digit appears inside the HASH box. A mono chip under the box
reads `ONE POSSIBLE SLOT` (`--muted`, `data-layout-ignore`) so the picture is not a claim about Python.
**F4 (G3).** `main.py`, chip `PYTHON`, two lines + terminal (max 4 + 1):
```
ages = {'Sara': 25}
print(ages['Sara'])    # 25
```
stdout `25` in mint, P3 `type-on`. Ligature kill-list on the stylesheet. **No `hash(...)` line**: the
ledger shows `hash('Sara')` returned three different numbers in three runs here
(`sys.flags.hash_randomization` → 1), so any printed hash would be a lie by tomorrow.
**F5 (G5).** Headline `key or position?` at 6.4cqw in a 176px box (15 chars ✓), mechanic verb plate
`SAVE THIS` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 25 · BEGINNER`. Behind it, the
bucket row dimmed via § 1's background/border rule with the key chip still parked in slot 5 and the
index strip readable — the shape worth saving, no number added.

## Cover / title card

`one hop, not ten thousand` (5 words, cut from the hook and its own number) + badge
`PROGRAMMING BASICS · BASICS III · 25` + `BEGINNER`. Amber plate on `one hop`. Deliberately **not** the
"not X" contrast frame — the phrase is the counted pair, and the construction is rationed to part 05.

## Post copy

**Feed caption:**

    How does your phone find one contact among 10,000 instantly?
    A hash map stores key-value pairs. A hash function turns the key into an array position, so a lookup
    jumps straight to the answer instead of searching. One bucket read, instead of all of them.
    Save this for your next interview. It comes up a lot.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#dictionary`
**X:** `ages['Sara'] is one hop, not a search. a hash function turns the key into a position and the
lookup lands there - JUMPED 1 where reading one by one reads all six. the catch: no order, and you
cannot ask who is next to Sara. save it, it comes up a lot #python`
**LinkedIn:** the interview follow-up is always "what happens on a collision", and the honest answer is
that a hash map is a hash function *plus* a plan for the times two keys land in the same slot. This part
draws the hop and leaves the collision for the next tranche. `#python` `#programming`
`#datastructures`

**Pinned comment:** `Saved for the interview question that follows this one: what is NOT free. (1) Order: a hash map gives you the value for a key, not a sequence - so the part's row of buckets is a diagram of positions, not a lineup. In CPython dicts do remember insertion order, and hash('Sara') here printed a different number in each of three runs (hash randomisation is on), so no version of this video shows a hash value. (2) Collisions: two keys can land in the same slot and the map has to cope - that is what 'on average' means in the narration. (3) A missing key: ages['Zeyad'] raises KeyError: 'Zeyad', which is the error people actually hit, and 'Zeyad' in ages is the quiet version. Parts 26 and 21 are the set and the array.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): `ages = {'Sara': 25}` → `ages['Sara']` = **25**;
`'Sara' in d` → True; `len(d)` → 4. The constraints that shaped the frame are from the same run:
`hash('Sara')` → `3665690163685261309`, then `4748693981889467389`, then `-5781353187566291885`
(**randomised per process**, `sys.flags.hash_randomization` → 1), and
`list({'Sara':…,'Omar':…,'Lina':…,'Amr':…}.keys())` → **insertion order, not hash order**.
`ages['Zeyad']` → `KeyError: 'Zeyad'` (real, deliberately off-screen — Day 3 ships zero coral,
`frame-day3.md` § 7.1).

**Three screen-text constraints** (`CORRECTIONS-day3.md` § B): no hash digit anywhere; the bucket index is
a composition choice labelled `ONE POSSIBLE SLOT`; and the row is never captioned as Python's memory
layout. The `LOOKED AT 6` tag is honest because Sara is authored into the **last** slot (worst case).

## Gate state

**G10 `jump` is unbuilt until this part.** Read these snapshots first: (1) the hop connector landing on
slot 5's **edge**, not over the `25` (the straddle law) — if the chip covers the value, move the chip's
resting y, never the ring's; (2) the scan ring stepping six authored lefts without reflowing the row;
(3) the HASH box interior reading `key -> position` with ligatures **off** (otherwise it renders as a
single arrow glyph and the frame teaches a symbol no learner can type); (4) no digit inside HASH at all.
If the two tags `JUMPED 1` / `LOOKED AT 6` do not both fit pb-21's authored tag widths, report it — do
not shrink the type below the 28px floor.
