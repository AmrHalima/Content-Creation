# SCRIPT — prog-basics-31-tries (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame-day3.md` § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine (`.agents/design.md`
voice_id empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX.

**Voice direction:** one person, camera on, mid-sentence — the G8 parts are addressed at you, so nothing
is announced. F1 is a real question, raised at the end on `typing?`. F2 names the shape, then the road,
then stops to define `prefix` — the definition beat is deliberately slower, because it is the added beat
and the part's noun depends on it. F3 walks: `walk down the typed prefix` at walking pace, then the three
words land one at a time (the screen lights one branch node per word), and `split three ways` is the
count. F4 is the trap: slow on `without a word at the end`, and `False` is a fact, not a failure — no
dramatic pause, just a period. F5 asks the quiz and stops; `dot` or `cat` are the user's words.

**Budget:** 92 spoken words / 5 lines against the `[M]` band 34-42s and a 54s ceiling. At the planning
average 3.24 w/s that is ~28.4s of speech + ~6.0s authored air ≈ 34.4s; at the number-heavy slow rate
2.7 w/s ≈ 40.1s. Real durations come from `studio voice` and `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 2.5s @3.24 / 3.0s @2.7 (real VO wins)
**Delivery:** Verbatim, addressed, left-aligned at x 72. No entrance tween on the first line or the cover
renders blank (pb-14's finding). Amber sweep on `finish`.

    How does autocomplete answer before you finish typing?

## Line 2 — What a trie is (Frame 2)

**Time:** estimate 8.6s @3.24 / 10.4s @2.7 (real VO wins)
**Delivery:** The user's two sentences are 11 and 8 words and pass the length law untouched. The third
beat is added for the gloss law — `prefix` is the part's load-bearing noun and arrives un-glossed. One
`--say` event on this frame (the trunk rail), arriving on the second sentence.

    A trie is a tree where each node is a letter. Words that share a prefix share a path. A prefix is the letters a word starts with.

## Line 3 — Walking it (Frame 3)

**Time:** estimate 8.9s @3.24 / 10.7s @2.7 (real VO wins)
**Delivery:** `walk down` gets the ring travelling root → `c` → `a`. `c` and `a` are said as letters, not
spelled. `Car, cat, and can` lights one branch node per word, and each node's END dot arrives last.
`split three ways` lands with `BRANCHES 3`.

    To autocomplete, walk down the typed prefix, then list everything below it. Car, cat, and can start the same way. They share c, then a, and split three ways.

## Line 4 — The path that is not a word (Frame 4)

**Time:** estimate 5.2s @3.24 / 6.3s @2.7 (real VO wins)
**Delivery:** The part's trap, in the cutaway frame. Slow on `without a word at the end` — that is the
beat the three dots pay for. `False` is read as a fact, so the terminal output lands flat and stays up.

    A path can exist without a word at the end. Here, three dots mark three real words.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 3.1s @3.24 / 3.7s @2.7 (real VO wins)
**Delivery:** Verbatim CTA, including the two candidate words exactly as the user wrote them. Ask it, do
not answer it; the ring travels twice and rests on neither candidate.

    Which word shares a path with 'dog': 'dot' or 'cat'?

---

## Word count and rate check

| Line | Words | Est. seconds @3.24 | Est. seconds @2.7 |
|---|---|---|---|
| 1 | 8 | 2.5 | 3.0 |
| 2 | 28 | 8.6 | 10.4 |
| 3 | 29 | 8.9 | 10.7 |
| 4 | 17 | 5.2 | 6.3 |
| 5 | 10 | 3.1 | 3.7 |
| **total** | **92** | **28.4** | **34.1** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **34.4s / 40.1s** film — the bottom of the `[M]` band
at the fast rate, the top of it at the slow rate, 12-20s under the ceiling. The 5 lines and the 5 frames
are 1:1 (diff checked: 5 headings, `(Frame 1)`…`(Frame 5)`, no comma in any heading).

## Clarity pass (what changed from the piece's briefed copy, and what did not)

Line 1 (the hook) and line 5 (the CTA question) are the user's words, verbatim. Lines 2-4 are the piece
file's final narration table, re-cut in `CORRECTIONS-day3.md` § A as **untouched** (part 31's three
explain sentences are 11, 8 and 12 words and all pass the ≤14-word / ≤2-clause law); the only added beat
is the `prefix` gloss, which the piece file itself authorises under the bible § 2 gloss law.

Glosses, all present in the frame the term appears: `trie` → F2's root-down build of `c a n/r/t`;
**`prefix` → F2's own third sentence plus the mono `PREFIX` chip spanning the shared trunk rail**;
`letter` → the mono `LETTER` chips on both trunk nodes; `node` → the 148×96 chambers themselves (F2's
`LETTER` chips point at them); `END` → the mono `END` chip beside the dot on F3; `leaf` → **not needed,
the word is never spoken in this part**. `walk down` is the series' approved verb — **"traverse" and
"iterate" appear nowhere**, and **no Big-O notation, no `n`, no "log n"** (that allowance belongs to 28
and 29 only). The counted pair is the locked `SHARED 2` / `BRANCHES 3`.
No sentence over 14 words, no semicolons, no trailing relative clauses, no em-dashes on screen, no
"not X, it's Y" (banned outright for Day 3), no "simply/just/easy/of course", no coral.

**Spoken code:** `words[:2]` is never spoken. `'ca'` → "c a" (two letters, not one syllable — the frame
shows two separate nodes). `False` → "false", a fact. `{'ca'}` → "c a". The voice never says brackets,
braces or colons.
