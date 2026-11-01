---
id: pb-35
order: 2
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Bloom filters
slug: bloom-filters
project: videos/prog-basics-35-bloom-filters/
difficulty: M                      # load-bearing badge, not prose
mechanic: Myth                     # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 81
target_length: ~31s                # 81 / 3.24 = 25.0s speech + 6.0s air; long-word part, see Runtime
ceiling: 54s
grammar: G1 G2b G7 G2b G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: approved                 # CORRECTIONS-day4 § A3 landed in the VO; see ## Approved edits
ledger_placeholders: 3
notation: no O() on any surface (ACCURACY-day4 § 3, row 35). The words 16 bits / 3 hashes are allowed on the plate and in the VO; the symbols m and k are not.
clone_source: pb-21's G2b row (bit cells) + pb-22's connector bars (hash arrows)
---

# P35 · Bloom filters · [M] · Myth · code card

**Message:** a row of bits that only ever flips one way — so a "no" is a proof and a "yes" is a report
that the bits were already set, which is a different claim from "it is in there".

This is the tranche's densest structure and the one place where an eleven-second sentence can smuggle in
two ideas, so the frames are split by **direction of travel**: what a bit is (F2), what adding does (F3),
what checking does (F4). One idea each, and the asymmetry that *is* the part appears as one spoken clause
in F3 and one tag in F4, never twice in the same frame.

**The Myth, named.** The belief this part busts is that a Bloom filter is a fuzzy "probably" machine. The
truth is the opposite: its `no` is exact. The myth is carried as chrome, not as a drawn wrong answer —
`MYTH` and `REALLY` mono chips on F5 — because `--err` coral is reserved for an exception this
interpreter raised, and this part raises none. Zero coral.

**Notation (ACCURACY-day4 § 3, row 35).** The `O()` ban stands: no `O(1)`/`O(n)`/`O(kn)` anywhere in this
part — not on screen, not in narration, not in the caption, X/LinkedIn or the pinned comment. "Tiny memory"
and "one look" do the work. What § 3 does allow here, and A3 now uses, is the plain words **16 bits** and
**3 hashes** on the example plate and in the VO; the symbols `m` and `k` stay off screen. The licence for
written `O(…)` is 41/42 (notation is the lesson), 37/43 (comparison labels) and 44 (`O(n²)` and
`O(n log n)` on the slow/fast plate only).

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 81 words → 25.0s speech + 6.0s air = **~31.0s**.
This part's vocabulary is long (`structure`, `definitely`, `negative`, `functions`, `proves`), which is
the pb-13 condition that measured 3.04 w/s; at that rate the film is **~32.6s**, inside the band.
A3 moved the filter's configuration into the VO, and paying for it came out of the explain lines only:
F3 lost its `Each item runs through a few hash functions` clause (the hashes are named in F2 now) and F2's
gloss `Each one holds a zero or a one` was cut, because the screen tag `bit: one zero or one` already says
it. **No pre-approved cut remains available or needed** — the configuration sentence cannot be the trim
lever, because without `16 bits, 3 hashes` the example is false at m=9 (ACCURACY-day4 § 35). If the
measured VO comes in slower than 2.9 w/s, report it; do not add words and do not shrink air.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 4.0s | A data structure that can say 'definitely not' but only 'maybe' for yes. | Verbatim hook. `definitely not` gets the weight, `maybe` gets the second-lightest. No question voice — it is a statement. |
| F2 | 4.6s | A Bloom filter is a row of bits. Ours is 16 bits with 3 hashes. | Flat and even. The two numbers are the frame's job now: say them level, no punch, the plate labels them the same way. |
| F3 | 6.8s | Each hash points at one bit in the row. Adding cat flips bits 3, 6 and 13. Nothing writes a zero back. | Slow down on `nothing writes a zero back` — that clause is the whole part, and the arrows are still settling under it. The three indices ride in on the arrows, one number per arrow. |
| F4 | 6.2s | Checking dog hits bits 3 and 6, but bit 8 is still zero. That zero proves it was never added. | `bit 8` is the discovery. Land `proves`, and keep `never added` quiet and final. |
| F5 | 3.4s | Why can't a Bloom filter give false negatives? Comment your guess. | Verbatim CTA mechanic. Both words of `false negatives` must be audible; this is the question the comment section answers. |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 13 · F2 15 · F3 22 · F4 20 · F5 11 = **81 spoken words** → 25.0s speech + 6.0s air = **~31.0s
film** (~32.6s at pb-13's 3.04 w/s). `SCRIPT.md` keeps exactly 5 lines, one per frame, headings
`## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `bits = [0, 0, 0, 0, 0, 0]` → never read aloud; F2 says what it is in words. `'cat'` →
"cat". `'dog'` → "dog". `0` → "zero", `1` → "one". `16` → "sixteen", `3` → "three", `13` → "thirteen".
The voice never says brackets, arrows, or the count of bits now set (`BITS n OF 16` stays on screen).
**What changed with A3:** the configuration and the bit indices are in the audio deliberately. ACCURACY-day4
§ 35 shows the example is false at m=9 and m=19, so an unstated `m` is a claim that cannot survive its own
plate; § 3 row 35 licenses exactly these words ("say 16 bits, 3 hashes") and no symbol `m`/`k` and no `O()`
anywhere. Fixing a spoken number now means re-generating the VO, which is why the part carries the words
rather than a hedge.

**Re-cut applied** (logged here in full; no Day-4 corrections file is mine to edit). User's explain
"A Bloom filter uses a bit array and several hash functions to check membership in tiny memory" is a
16-word single sentence with the term `bit array` unglossed, and `frame-day2.md` § 9 caps a sentence at
14 words with an instant plain gloss. It became F2 + the first half of F3: "row of bits" replaces
"bit array" (same fact, plain words), "several" became "a few" (same fact, one beat shorter), and
membership-checking is shown rather than claimed. "If it says no, the item is definitely absent" / "If it
says yes, it might be a false positive" were kept in order and register, with `false positive` moved out
of the narration to the F5 chrome and the pinned comment: a beginner hears "false positive" as a term to
memorise, and the frame already shows the mechanism that produces it. No hook, no CTA mechanic altered.
**One technical claim did change**, and with the user's approval rather than silently: `CORRECTIONS-day4.md`
§ A3, landed below.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 35`, `INTERMEDIATE` badge, and the ligature guard are
identical chrome on all five frames (pb-13's rule: chrome never reads as "the word being said").

**F1 (G1, also the cover).** Type alone, three groups: `a structure that says` (ink) /
`definitely not` on the solid `--say` plate / `and maybe for yes` in muted ink, 14 characters or fewer
per group so nothing wraps at 10cqw. Nothing illustrated on the hook frame — the bit row arrives on F2.
**F2 (G2b, the bit row).** **Six** cells, not eight: pb-21's settled geometry caps a G2b row at six slots
(`142×152`, pitch `158`, first slot `x 74`, 936px content width — WAVE2-PACKET § 4), and six cells is
enough to hold three set and one still zero. Each cell carries a `0` in `--muted` mono at arrival, and a
mono tag above the row reads `bit: one zero or one` — the gloss, on screen, in the same frame as the term.
Corner label `BITS 0 OF 6` in mono `--muted` with `data-layout-ignore`; the count is what F3 will change,
so it must be visible before it moves.
**F3 (G7 arrows + the one-way flip).** `cat` as a mono chip at the top-left, and **three** connector bars
(3px `--line` with a two-border chevron, in the untransformed layer — never SVG in a scaled container)
running from the chip down to three of the six cells; on arrival each of those cells flips `0` → `1` in
`--value` mint and the corner count re-ticks on P9 `count-tick` to `⟪LEDGER:35a⟫` (mono `--line`, so it
is countable). The indices the arrows land on are `⟪LEDGER:35a⟫` — the run must return them **for six
slots**, or the picture and the number disagree. The second beat is the asymmetry, drawn without colour:
a `1 → 0` arrow that starts, and stops two thirds of the way, leaving a short unfilled bar with a mono
tag `no such move` in `--muted`. One reading line, arriving after the arrows settle:
`add only sets ones` (ink on `sets`).
**F4 (G2b, the read that proves).** Same six cells, holding the F3 state. `dog` arrives as a chip at the
top-right and its own arrows run down; one of them lands on a cell still holding `0`, that cell's border
flashes `--line` (not amber, not coral — a border is the arrival, amber is the voice's word), and the tag
above the row swaps from `checking dog` to `definitely not present` in ink at 3.0cqw. The counted tag
`BITS SEEN: 2 OF 3` is `⟪LEDGER:35b⟫` — the run must say how many of dog's slots were already one and
how many were zero, and the frame shows whichever two numbers come back. `cat` stays lit behind it at
full ink so the viewer can see which cells the new key is asking about.
**F5 (G5).** Headline `no means no?` (10 characters, 3 words) at 6.4cqw in the 176px band — the user's
question restated for the eye without touching the mechanic — verb plate `COMMENT IT` in solid `--say`,
badge `PROGRAMMING BASICS · STRUCTURES I · 35 · INTERMEDIATE`. Below the headline, two mono chips on
`--panel-2` with 3px `--line`: `MYTH: it guesses` and `REALLY: it reports bits`. Neither is amber, and
the ring that would otherwise select travels between them and rests on **neither** (pb-10's shipped
finding: answering the part's own question on screen kills the question). The bit row sits dimmed at 0.42
behind the plate with its digits at full ink (dim the skin, never the digits — 14 § 0.42 finding).

**CTA card copy, verbatim and complete:** spoken `Why can't a Bloom filter give false negatives? Comment
your guess.` / headline `no means no?` / verb plate `COMMENT IT` / the two myth chips / badge line.

## Cover / title text

`definitely not, maybe yes` (5 words, taken from the hook's own two phrases) + badge
`PROGRAMMING BASICS · STRUCTURES I · 35` + `INTERMEDIATE`. Amber plate on `definitely not`. The cover
carries no `it's not X` shape: that construction is spent on part 05 and banned in every other artifact
of this series.

## Post copy

**Feed caption:**

    A data structure that can say 'definitely not' but only 'maybe' for yes.
    A Bloom filter is a row of bits, and each item you add flips a few of them to one through hash functions.
    Adding only ever sets ones, so a zero you find on a later check is proof the item never went in.
    A yes only means those bits were already set. Why can't it give false negatives? Comment your guess.

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures`
**X:** `a bloom filter stores bits, not items. add cat, a few hash functions flip a few bits to 1. check dog, one of its slots is still 0, and that is proof, not a guess. but a yes only means the bits were already set. why no false negatives? comment it. #python`
**LinkedIn:** the production version of this is a cache that must not be queried for a key that does not
exist: the filter turns an expensive miss into one bit read, and the cost of a wrong yes is one wasted
lookup, while the cost of a wrong no would be a missing record you never go find. That asymmetry is why
the structure is allowed to say maybe; `#python` `#programming` `#datastructures`

**Pinned comment:** `The answer, for the ones who guessed: adding only ever turns bits on, so every item you stored left all of its own bits set. A no means at least one of those bits is zero, and a zero there means no add ever set it - which is exactly the item you are asking about. The myth to kill is the other direction: a yes is not a probability, it is a report that the bits were already on. ⟪LEDGER:35c⟫ - put the measured false-positive estimate for the exact row and hash count the film uses here, or cut this sentence; do not ship a recalled rate. Part 36 is a cache that decides what to forget, and it needs a hash map too.`

## Accuracy

**Status: ledger returned and the user ruled (CORRECTIONS-day4 § D1/D5), A3 in the VO, see the Approved
edits section below.** What the run came back with, and it is what the narration now says: **m = 16 bits,
k = 3 hashes** (`h_i(key) = crc32(bytes([i]) + key.encode()) % 16`), `cat` → bits **3, 6, 13** (row
`0001001000000100`), `dog` → probes `[3, 6, 8]` with values `[1, 1, 0]`, so bit 8 is the zero that proves
absence, and the false-positive figure for the pinned comment is **6.2% at m=16 with 1 item** (4 items
37.1%, 8 items 79.9%). The `⟪LEDGER:35a/b⟫` tokens stay in the frame copy only until the plate is redrawn at
sixteen cells, because **§ 35 also shows the scripted example is false at m=9 and m=19** (two of cat's three
hashes collide there), which is exactly why the configuration moved into the audio.

Two claims are structural rather than numeric and ship as written: `no` is exact because adding never
clears a bit, and `yes` is a report about bits rather than about membership. Those follow from the
mechanism the frame draws, and no interpreter is needed for them.

## Ledger dependencies

- `⟪LEDGER:35a⟫` (F3, two places) — **returned by ACCURACY-day4 § 35, and the six-slot condition is
  superseded.** With the pinned family at **m = 16, k = 3**, `'cat'` sets bits **3, 6 and 13** (3 of 16 on,
  row `0001001000000100`). The frame draws its three arrows to those indices and ticks the corner count to
  **3 OF 16**. The old instruction to compute on a six-slot row is dead: the VO now states 16 bits, so a
  six-cell row would contradict the audio.
- `⟪LEDGER:35b⟫` (F4) — **returned.** `'dog'` at m=16 after `'cat'` probes `[3, 6, 8]` with values
  `[1, 1, 0]`: **two already one, one still zero**, so the "one still zero" beat exists and bit **8** is the
  red zero. `BITS SEEN: 2 OF 3` prints as written.
- `⟪LEDGER:35c⟫` (pinned comment only) — **returned:** 6.2% false-positive at m=16 with 1 item stored
  (42/676 un-stored keys), rising to 37.1% at 4 items and 79.9% at 8; at m=256 with 8 items it is 3.0%. One
  row only on screen, per § 35.

## Gate state

Non-carrier. Blocks on `⟪LEDGER:35a/b⟫` at F3/F4 authoring; F1/F2/F5 and the whole audio can be produced
first, because no unresolved number is in the VO.

Snapshot-read order: (1) **F3's stopped arrow** — does the `1 → 0` bar that never completes read as
"impossible" and not as a clipped animation? (2) the **corner count tick** `BITS 0 OF 6` → the ledger
number, inside 230→1004 and at 28px or above (chrome below the floor needs `data-layout-ignore`);
(3) **F4's border flash** — must not be amber or coral; (4) the `MYTH` / `REALLY` chips, both unselected,
ring resting on neither; (5) three connector bars crossing without landing on the same slot.

Runtime expectation: **~31.0s** at 3.24 w/s, **~32.6s** at the slow-word rate — both inside 29-34 with the
81-word script above, and the film is not to be padded either way.

## Approved edits

- **A3 (CORRECTIONS-day4 § A, HIGH) landed in the VO.** Before: `Each one holds a zero or a one.` (F2) /
  `Each item runs through a few hash functions, and each points at a bit. Adding sets those bits to one,
  and nothing writes a zero back.` (F3) / `Check dog and one of its bits is still zero. A zero there proves
  it was never added.` (F4). After: `A Bloom filter is a row of bits. Ours is 16 bits with 3 hashes.` /
  `Each hash points at one bit in the row. Adding cat flips bits 3, 6 and 13. Nothing writes a zero back.` /
  `Checking dog hits bits 3 and 6, but bit 8 is still zero. That zero proves it was never added.`
- Word delta: 84 → **81** (F2 -1, F3 -4, F4 +2). All four figures are ACCURACY-day4 § 35's pinned run
  (m=16, k=3, cat `[6,3,13]`, dog `[3,6,8]` → `[1,1,0]`); nothing is recalled.
- Trimmed, explain lines only: F3's `Each item runs through a few hash functions` and F2's zero/one gloss
  (the screen tag `bit: one zero or one` carries it). Hook F1 and CTA F5 are untouched and verbatim.
- Em-dash and `it's not X, it's Y` shapes from the ledger's proposed string were rewritten out; the meaning
  is unchanged and every sentence is ≤14 words / ≤2 clauses.
- **Screen consequence (frame owner's decision, not applied here):** the VO now commits the filter to
  **16 bits**, so F2/F3/F4's six-cell G2b row and the `BITS 0 OF 6` / `BITS SEEN: 2 OF 3` tags are
  superseded by a 16-cell row (`0001001000000100`, bits 3/6/13 lit, dog's arrows hitting 3 and 6 green and
  8 red). pb-21's six-slot cap cannot hold both the spoken configuration and the picture.
