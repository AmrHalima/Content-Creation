---
id: pb-26
order: 2
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Sets
slug: sets
project: videos/prog-basics-26-sets/
difficulty: B
mechanic: Challenge
mode: direct-address            # G8 (bible-day3 § 5: the tranche's two G8 parts are 26 and 31)
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 78
target_length: ~30s             # 78 / 3.24 = 24.1s speech + 6.0s air; at 2.7 w/s ~34.9s
ceiling: 54s
grammar: G8 G10-probe G10-probe G3-cutaway G5
marks: G10 probe (new) · G8 reused from pb-14
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed-with-constraint
clone_source: pb-14/01-address.html + 04-cutaway.html (chrome, verbatim) · pb-21/03-shift.html (probe row)
---

# P26 · Sets · [B] · Challenge · **direct address**

**Message:** a box that refuses a duplicate and answers "is it in there?" in one hop — which is why
deleting repeats from a list is one call, and why a set has no "next".

One of Day 3's two G8 parts. Chosen for the mode because 26's diagram is the tranche's smallest (it is
25's bucket row, reused once) and a Challenge lands better spoken *at* someone than printed on a card.
Chrome is copied from pb-14 verbatim; **nothing in the chrome is redesigned here.**

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 8 — `Remove duplicates from a list in one line.` | 2.5s | 3.0s | Verbatim hook, addressed, left-aligned at x 72. No entrance tween on the first line or the cover renders blank (pb-14's finding). |
| F2 | 20 — `A set holds unique values with no guaranteed order. Unique means no repeats. Adding the same value twice does nothing.` | 6.2s | 7.4s | The gloss is added for the gloss law — `unique` is an abstract adjective and the first sentence is the user's. Then re-cut beat 1. |
| F3 | 21 — `Checking whether a value exists is fast. Great for removing duplicates and comparing groups. Four values go in, three come out.` | 6.5s | 7.8s | Re-cut beat 2 gets the probe hop. The last beat is the counted one: slow, and land `three` on the mint digit. |
| F4 | 16 — `Set of one, two, two, three. That prints one, two, three. One line, and no loop.` | 4.9s | 5.9s | The cutaway chamber. `no loop` is the part's economy stated once, plainly. |
| F5 | 13 — `Challenge: find the common items of two lists using sets. Post your one-liner.` | 4.0s | 4.8s | Verbatim CTA mechanics. Read `Challenge` as its own beat. |

**Total 78 spoken words → ~30.1s** (air ≈ 6.0s). Under 30s on measurement → grow F5's pad and report.

**Spoken code:** `set(nums)` → "set of nums". `{1, 2, 3}` → "one, two, three" (the braces are never
spoken — a learner who hears "curly braces first" types them as a dict).

**Re-cut applied** (`CORRECTIONS-day3.md` § A, re-cut 3): the user's 15-word `and`-joined sentence split
into two beats of 7 and 7 across F2/F3, because uniqueness and membership are two lessons and each got
its own counted tag. Zero words changed. Hook and CTA verbatim.

## On-screen text and code treatment

**G8 chrome, copied verbatim from `videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html`:**
four corner brackets (3px `--line-faint`, 72px arms, inset 48, framing y 932→1004) · REC strip with a
16px dot blinking on a 1s yoyo, `REC` mono 2.4cqw, timecode `00:0N` in JetBrains Mono 400 — **all three
`--muted`**, no coral, no fake red dot (§ 7.1: Day 3 raises nothing) · lower third `--panel-2` radius 12
with `PROGRAMMING BASICS · BASICS III · 26` in muted mono above `SETS` in Space Grotesk 700 `--ink` at
3.4cqw, top edge ≤ y 940 · **chrome never fades** (one continuous shot) · timecode from `tl.time()` via a
time proxy, never a wall clock.

Probe geometry is `frame-day3.md` § 6 / **G10 `probe`**: the six-slot row 142×152 at lefts
72/232/390/548/706/864, top 400, index strip y 616 with `data-layout-ignore`.

**F1 (G8, type alone).** `remove duplicates` then `in one line`, with `one line` swept amber (P1).
Nothing else — the bucket row is F2's arrival, and a first frame that illustrates its own hook leaves
the explanation beat with nothing to add.
**F2 (G8 + probe board, built).** Wipe enters from the **left**. The bucket row arrives with three values
in it (`2` at slot 0, `3` at slot 2, `7` at slot 4 — mint at 4.6cqw) and the other three slots dashed
empty. Then the beat the part is about: a chip `2` arrives at slot 0's edge and **bounces**
(`scale: 1 → 0.94 → 1`, then `x: +0` — it never enters the chamber) while a mono tag reads
`ADDED 2` and the slot's digit holds at `2`. Second tag: `KEPT 2`. The `UNIQUE` chip sits above the row
(`--muted`, `data-layout-ignore`) as the same-breath gloss.
**F3 (G8 + probe board, probed).** Wipe enters from the **right** (the neighbour differs in direction
*and* content, per the consecutive-G8 rule). Beat 1: a cur ring (162×172 at `bucket.left − 10`) hops to
slot 2 only, and an `IN` mint chip lands beside the row — `PROBED 1`, the same physical gesture as 25's
hop, which is the point: **a set is a hash map with the values thrown away.** Beat 2: a small two-list
compare — `4 IN` / `3 OUT` in the upper tag lane (y 288, pb-21's tag widths), driven by the executed
`len(set([1,1,2,3])) → 3` from 4 inputs. Beat 3 (the order guard): a mono lane under the row reading
`1 3 100 5 22 7` with a `NOT SORTED` chip — the executed iteration order of `{5,3,100,1,7,22}`, which is
what keeps "no guaranteed order" from being contradicted by the tidy `{1, 2, 3}`.
**F4 (G3 cutaway over the G8 ground).** Chamber at 700px wide, centred, 0.18-opacity scrim behind it
only, chrome visible around its edges. `main.py`, chip `PYTHON`, three lines + terminal (cap 4):
```
nums = [1, 2, 2, 3]
print(set(nums))        # {1, 2, 3}
print(len(set(nums)))   # 3
```
stdout `{1, 2, 3}` and `3` in mint. **Python single quotes, ligatures off.** No `{[1,2]}` line — a list
in a set raises `TypeError: unhashable type: 'list'` and Day 3 shows no coral.
**F5 (G8 + G5 plate).** The CTA plate `POST IT` in solid `--say` over the direct-address ground, the
headline `common items?` at 6.4cqw in a 176px box (13 chars ✓), and the two lists shown as chips:
`[1, 2, 2, 3]` / `[2, 2, 5]` in `--panel-2` mono `--ink`, **unjoined**. No `&` between them on screen:
the one-liner is the viewer's answer, and drawing it answers the challenge (pb-11's rule).

## Cover / title card

`delete the repeats` (3 words, cut from the hook) + lower third `PROGRAMMING BASICS · BASICS III · 26` +
`BEGINNER`. Amber plate on `repeats`. The cover keeps the REC strip and brackets, so it reads as a
person caught mid-sentence rather than a title card — which is the reason the mode exists in a feed of
code cards.

## Post copy

**Feed caption:**

    Remove duplicates from a list in one line.
    A set holds unique values with no guaranteed order: add the same value twice and nothing happens.
    Checking whether something is inside is one hop, because a set is a hash map that kept no values.
    Challenge: find the common items of two lists using sets. Post your one-liner.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#sets`
**X:** `duplicates in a list? set(nums) and they are gone - adding the same value twice does nothing,
the set just keeps it once. membership is one hop, same gesture as ages['Sara'] in part 25. the price:
no order you can rely on. challenge: common items of two lists with sets, post your one-liner #python`
**LinkedIn:** a set is the smallest useful answer to "have I seen this before", and it is the structure
behind half the dedupe code in production pipelines. The one-liner in the comments is fine; the follow-up
question is what happens when the items are not hashable. `#python` `#programming` `#datastructures`

**Pinned comment:** `The one-liner: set(a) & set(b) - or set(a).intersection(b) if you want to read it out loud. Tested on a = [1, 1, 2, 3] and b = [2, 2, 3, 9] it gives {2, 3}. Three edges to know: (1) no overlap gives set(), not {} and not an error - so `if common:` is the check, not `if common is not None:`. (2) The answer is de-duplicated twice over: [1,1,2] & [1,2,2] is {1, 2}, so a set cannot tell you HOW MANY shared items you have - use a counter for that. (3) Order is not guaranteed: {1, 2, 3} prints tidy for small ints, but set([5,3,100,1,7,22]) came out of Python here as {1, 3, 100, 5, 22, 7}. And you cannot put a list in a set at all - {[1,2]} raises TypeError: unhashable type: 'list'. Part 25 is the hash map a set is built from.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): `set([1,2,2,3])` → **`{1, 2, 3}`** (repr, exactly as
spoken); `len(set([1,1,2,3]))` → **3** from 4 in; `{1,2}.add(2)` → `{1, 2}` (nothing happens, as the
user's line says); `2 in st` → True; `set([1,1,2,3]) & set([2,2,3,9])` → **`{2, 3}`**, and
`.intersection(b)` identical; empty/no-overlap → **`set()`**.
The order guard is the same run's other number: `{5,3,100,1,7,22}` iterates
**`1 3 100 5 22 7`** (deterministic across three runs here, because `hash(int) == int`).
Off-screen by decision: `set()['x']` → `TypeError: 'set' object is not subscriptable`,
`{[1,2]}` → `TypeError: unhashable type: 'list'`, and **any string set's order** (it changed across
three runs — `['bb','cc','aa']`, `['cc','bb','aa']`, `['aa','bb','cc']` — and the renderer seeks, so a
non-reproducible order must never be drawn).

**Two screen-text constraints** (`CORRECTIONS-day3.md` § B): the tidy `{1, 2, 3}` is kept *beside* the
`NOT SORTED` counter-example, and the challenge's `&` is never drawn on F5.

## Gate state

G8 chrome is **proven** (pb-14, pb-17, pb-18 shipped it) — copy it, do not redesign it. **G10 `probe` is
not proven anywhere**: it is 25's hop with a new arrival, and it is the part a reader will judge as
"just a set". Snapshot-read first: (1) the bounce — the duplicate chip must visibly *not* enter, and if
it settles inside slot 0 the part teaches the opposite of itself; (2) the `PROBED 1` ring landing on slot
2's edge with no digit covered; (3) the `NOT SORTED` lane reading as chrome, not as a second answer;
(4) F2/F3 differing in wipe direction and carrying different non-chrome elements, or the
consecutive-G8 rule makes this five identical cards. Report any of these that fail rather than
inventing a variant (bible § 0.1).
