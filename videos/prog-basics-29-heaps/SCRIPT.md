# SCRIPT — prog-basics-29-heaps (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame.md` v3.0 § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` voice_id empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX.

**Budget:** 99 spoken words / 5 lines against the `[M]` band 34-42s and a 54s ceiling. Real durations
come from `studio cues` and win. The piece file projected ~37s at 3.24 w/s and warned of ~43s at the
slow number-heavy rate; the measurement lands mid-band, so no word was cut and no beat was added.

**Heading contract:** every heading is exactly `## Line N — Title (Frame N)`, the closing paren right
after the number, no comma inside the parens (`frame.md` v3.0 § 13 — pb-22 lost a whole frame this way).
Five headings, five frames, five wavs.

**Voice direction:** one person at a board, drawing a tree and then pointing out that it is also a row.
F2 carries four separate beats (rule · min-heap · max-heap · parent and child) and they must not be
rushed. F3's last sentence is the part's trap: `not sorted` lands on the row, slowly. F4 speaks the
tranche's last allowed "log n", then immediately counts the path instead.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.1s at 3.24 w/s (real VO wins)
**Delivery:** One question, even weight, no rise on the last word. The stress is on `always know` — that
is the claim the root is going to earn.

    How does a computer always know who's next in line?

## Line 2 — The rule (Frame 2)

**Time:** estimate 11.4s at 3.24 w/s (real VO wins)
**Delivery:** Four beats, one breath each, in this order: the rule, `min-heap`, `max-heap`, then the
gloss. `smaller than its children` is the sentence that carries the whole part, so it stays unbroken;
the two heap words land on their own chips. The last sentence is a gloss, said plainly: `the box above`
and `below it` are pointed at, not performed.

    A heap is a tree where every parent is smaller than its children. That version is a min-heap. Flip every comparison and it is a max-heap. A parent is the box above; a child sits below it.

## Line 3 — The top and the row (Frame 3)

**Time:** estimate 8.9s at 3.24 w/s (real VO wins)
**Delivery:** `grab it instantly` is one quick motion, said fast. Then the numbers: read them as a row of
numbers, not as a list, so the odd order is audible — `two` after `three` is the point, so do not smooth
it. The last sentence slows: `not sorted` is the finding, and it lands on the row.

    The smallest item sits at the top, so you can grab it instantly. Push one, three, two, seven, five. The root is one, and the row is not sorted.

## Line 4 — The cost (Frame 4)

**Time:** estimate 5.6s at 3.24 w/s (real VO wins)
**Delivery:** The tranche's one allowed `log n` for this part, in the user's own hedged sentence, said
flat — it is a name, not a claim to dwell on. Then the counted walk: `two steps` lands as the path ticks
once per edge. `One swap did the rest` is the closing beat, dry and short, over the row re-forming.

    Insert and remove take log n. The longest path down is two steps. One swap did the rest.

## Line 5 — The ask (Frame 5)

**Time:** estimate 1.5s at 3.24 w/s (real VO wins)
**Delivery:** Verbatim CTA, no question attached. Land `Save` on the plate. This frame loops under the
platform's chrome, so it gets its full air and holds alone.

    Save this for algorithm interviews.

---

## Word count and rate check

| Line | Words | Est. seconds @ 3.24 | Est. @ 2.7 |
|---|---|---|---|
| 1 | 10 | 3.1 | 3.7 |
| 2 | 37 | 11.4 | 13.7 |
| 3 | 29 | 8.9 | 10.7 |
| 4 | 18 | 5.6 | 6.7 |
| 5 | 5 | 1.5 | 1.9 |
| **total** | **99** | **30.5 speech** | **36.7 speech** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **36.5s** at the planning rate and **42.7s** at the
slow rate. Measured lands in between and inside the `[M]` band — see `STORYBOARD.md` → Real durations.

## Clarity and copy pass (what is verbatim, what is not)

Line 1 (hook) and line 5 (CTA mechanic) are the user's words, verbatim, untouched. Lines 2-4 are the
`CORRECTIONS-day3.md` § A re-cut 5 state (re-cut 5 is 29's: the 17-word double-parenthetical closed
first, `min-heap` as its own 5-word beat, plus the one authored bridge sentence for `max-heap` — the only
sentence Day 3 adds) and are not re-cut again here. `series-bible-day3.md` § 2: `traverse` never appears
(it is banned series-wide), and no "simply", "just", "easy", "of course", "clearly", "quick tip", no
em-dash on screen, no "don't worry", no "it's not X, it's Y" (rationed to part 05).

Glosses, all in the frame where the term appears: `tree` → the drawn G11 hierarchy itself; `parent` /
`child` → the user's own last sentence plus `PARENT` / `CHILD` tags on the two nodes it names;
`min-heap` / `max-heap` → chips, not chambers (`heapq` is a min-heap only; the negate trick is part 32's
reply-thread fact); `root` → the `ROOT` name tab on the top node plus the counted `ROOT 1`;
`node` → a box holding one value, drawn as G11's chamber; `log n` → spoken once, and the screen shows the
counted `PATH 2` walk in its place (`series-bible-day3.md` § 0.2, § 7.2 — the screen never shows any
notation).

**Spoken code:** `heapq.heappush(h, 3)` is spoken as "push three" and `h` printing `[1, 3, 2, 7, 5]` is
spoken as a row of numbers — "one, three, two, seven, five" — never as "list one three…". The chamber's
`heapify` line is not spoken at all. `log n` is said as "log n" (the only time in the tranche besides
part 28).
