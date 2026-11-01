# SCRIPT — prog-basics-26-sets (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (`BRIEF.md` `voice_speed`, `frame-day3.md` § 10), local and
offline, provider pinned by `studio voice` from `BRIEF.md` (`tts_provider: kokoro`, `voice: af_heart`).
ElevenLabs is unusable on this machine (`.agents/design.md` voice_id empty, free-tier keys return HTTP
402) and was not substituted. HeyGen not used. No BGM, no SFX, no network asset.

> **The speed flag is passed, on purpose.** `studio voice --dry` resolves
> `--speed flag → house["voices.en"] → VOICE_DEFAULTS.en.speed (0.74)` and the house lookup **misses**,
> because `.agents/design.md` nests `voices:` inside the top-level `voice:` block, so the key that
> exists is `voice.voices.en`. `frame-day3.md` § 10 and `WAVE3-PACKET.md` § 1 therefore make
> `--speed 0.93` mandatory — the flag set **equal to the house value**, never to 0.74, never invented.
> `--dry` on this project printed `speed=0.93` before the run.

**Voice direction:** one person, on camera, talking **to you** — this is one of Day 3's two G8 parts.
The hook is an instruction, not a question; land it flat. F2's three sentences are three separate
things, and the third one ("does nothing") is the joke — say it plainly and let the bounce do the
timing. F3 slows for the last sentence: `Four values go in, three come out` is the counted beat, and
`three` lands on the mint digit. F4 is read the way you read a line of code aloud — the numbers are
enumerated, not rushed. F5's `Challenge` is its own beat: a breath after it, then the ask.

**Budget:** 78 spoken words / 5 lines against a 29-34s band (`[B]` part, bible-day3 § 0.3) and a 54s
ceiling. The piece file's two projections: ~30.1s at 3.24 w/s, ~34.9s at 2.7 w/s. Real durations come
from `studio voice`/`studio cues` and win.

---

## Line 1 — The hook (Frame 1)

**Time:** estimate 3.0s (real VO wins)
**Delivery:** An instruction addressed at you. Even weight on both halves; `one line` is the promise,
so it gets the amber sweep and nothing else does. No smile, no lift at the end.

    Remove duplicates from a list in one line.

## Line 2 — What a set holds (Frame 2)

**Time:** estimate 6.2s (real VO wins)
**Delivery:** Three beats, three sentences. Sentence 1 states the rule and hedged it honestly —
`no guaranteed order` is said, not shouted. Sentence 2 is the gloss of `unique`, said at the same pace
as a definition would be, which is exactly why the frame carries the `UNIQUE` chip instead of a fourth
sentence. Sentence 3 is the punch and it is dry: `does nothing`.

    A set holds unique values with no guaranteed order. Unique means no repeats. Adding the same value twice does nothing.

## Line 3 — Why it is fast, and what it costs (Frame 3)

**Time:** estimate 6.5s (real VO wins)
**Delivery:** Sentence 1 is the membership claim; the ring hops on `fast`, not before it. Sentence 2 is
the two uses, said evenly, no list-y emphasis. Sentence 3 slows down and is counted: `Four` in, `three`
out, and `three` lands on the mint digit. The order guard is not spoken — the frame carries it.

    Checking whether a value exists is fast. Great for removing duplicates and comparing groups. Four values go in, three come out.

## Line 4 — The one-liner (Frame 4)

**Time:** estimate 4.9s (real VO wins)
**Delivery:** Read like code aloud: `set of one, two, two, three` — enumerate, keep the comma breaths.
`That prints one, two, three` is the payoff; the braces are never spoken (a learner who hears "curly
braces first" types them and gets a dict). `One line, and no loop` is flat and final — the part's
economy stated once, plainly, with no "just" or "simply" anywhere in it.

    Set of one, two, two, three. That prints one, two, three. One line, and no loop.

## Line 5 — The challenge (Frame 5)

**Time:** estimate 4.0s (real VO wins)
**Delivery:** `Challenge` gets its own beat and a breath after it. The question is the user's, verbatim;
`sets` is the hint and is already in the sentence. `Post your one-liner` lands on the amber plate — and
the operator itself is never said or shown, because the viewer's answer is the point.

    Challenge: find the common items of two lists using sets. Post your one-liner.

---

## Word count and rate check

| Line | Frame | Words | Est. @3.24 w/s | Est. @2.7 w/s |
|---|---|---|---|---|
| 1 | F1 | 8 | 2.5 | 3.0 |
| 2 | F2 | 20 | 6.2 | 7.4 |
| 3 | F3 | 21 | 6.5 | 7.8 |
| 4 | F4 | 16 | 4.9 | 5.9 |
| 5 | F5 | 13 | 4.0 | 4.8 |
| **total** | | **78** | **24.1 speech** | **28.9 speech** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **30.1s** at 3.24, **~34.9s** at 2.7. Both estimates
sit inside or just above the `[B]` 29-34s band; the measurement decides. Numbers are written as words
above, so the count is the count.

## Clarity and accuracy pass

Line 1 (the hook) and line 5 (the Challenge mechanic) are the user's words, **verbatim** — bible-day3
§ 0.1 and `frame-day3.md` § 11. Line 2 already carries the `CORRECTIONS-day3.md` § A re-cut 3: the
user's 15-word `and`-joined sentence split into two beats of 7 and 7 across F2/F3, so uniqueness and
membership each get their own counted tag. Zero words changed by that re-cut. The `Unique means no
repeats` sentence is the gloss law (bible-day3 § 2): `unique` is glossed in the same frame it appears.

No sentence over 14 words or over 2 clauses. No semicolons, no trailing relative clauses, no em-dashes
on screen. **"Traverse" and "iterate" appear nowhere.** No "not X, it's Y" construction (rationed to
part 05). No "simply", "just", "easy", "of course", "clearly", "quick tip", "don't worry". Max one
three-item list, and this part uses none — `removing duplicates and comparing groups` is two items.

**Nothing is written as Big-O.** The runtime claim is `PROBED 1` and the dedupe claim is
`ADDED 2 / KEPT 2` (bible-day3 § 4b, locked pair: two `add` calls, one result). No `O(`, no `log n`,
no bare `n` on any frame. **No hash value on any frame** (executed: `hash('Sara')` returned three
different numbers in three runs). **No coral**: every error this part could raise
(`TypeError: unhashable type: 'list'`, `TypeError: 'set' object is not subscriptable`) is reply-thread
material, and `--err` appears nowhere in the film.

**Spoken code:** `set(nums)` → "set of nums". `{1, 2, 3}` → "one, two, three" — the braces are never
spoken. `len(set(nums))` → not spoken at all; F4's third line is read by the eye while the voice says
`That prints one, two, three`. The `&` operator is never spoken and never drawn (F5's one-liner is the
viewer's answer).
