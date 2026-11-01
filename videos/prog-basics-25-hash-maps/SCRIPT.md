# SCRIPT — prog-basics-25-hash-maps (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame-day3.md` § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` `voice_id` empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX, no network assets.

**Voice direction:** one person at a whiteboard, holding a name up and then dropping it into a row of
boxes. F1 asks a real question and lands `instantly` — do not rush it, the word is the promise. F2's two
sentences are the definition then the mechanism, and the second one is slower because the screen is
assembling while it is said. F3 is four beats: the hop in one run (`jumps straight` is one gesture, not
two), then `constant time` said plainly with no notation in the voice, then the two counts — `one bucket`
light, `all six` heavier. F4 reads the value as a value, the way part 21 read its list. F5 is the ask:
warm, two beats, nothing added.

**Budget:** 77 spoken words / 5 lines against a ~30s target (`[B]` band 29-34s) and a 54s ceiling.
Real durations come from `studio cues` / `audio_meta.json` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.4s at 3.24 w/s, 4.1s at 2.7 w/s (real VO wins)
**Delivery:** Verbatim hook. Count is 11 because `10,000` is spoken as two words. Land `instantly`.

    How does your phone find one contact among ten thousand instantly?

## Line 2 — The board (Frame 2)

**Time:** estimate 4.9s at 3.24 w/s, 5.9s at 2.7 w/s (real VO wins)
**Delivery** the first sentence is the definition the user wrote; the second is re-cut beat 1
(`CORRECTIONS-day3.md` § A, re-cut 2). `key` and `value` land on the two halves of the pair;
`position` lands the bucket row.

    A hash map stores key-value pairs. A hash function turns the key into an array position.

## Line 3 — The two counted ways (Frame 3)

**Time:** estimate 8.3s at 3.24 w/s, 10.0s at 2.7 w/s (real VO wins)
**Delivery:** Four beats. `jumps straight` is said in one run — the hop is one motion. `constant time` is
plain speech: no Big-O in the voice and none on the screen. Then the two counts, in the order the screen
shows them: one bucket, then all six.

    A lookup jumps straight to the answer instead of searching. On average, lookup takes constant time. It reads one bucket. Reading them one by one takes all six.

## Line 4 — Ages (Frame 4)

**Time:** estimate 3.7s at 3.24 w/s, 4.4s at 2.7 w/s (real VO wins)
**Delivery:** Read the value as a value, like part 21 read its list. `ages` / `Sara` / `twenty five`, and
the second sentence is the lookup, so `gives` is the verb that lands on the printed number.

    Ages is Sara twenty five. Ages at key Sara gives twenty five.

## Line 5 — Save it (Frame 5)

**Time:** estimate 3.4s at 3.24 w/s, 4.1s at 2.7 w/s (real VO wins)
**Delivery:** Verbatim CTA, two beats. `Save this` is the mechanic verb and the plate carries it; the
second beat is a confidence, not an aside.

    Save this for your next interview. It comes up a lot.

---

## Word count and rate check

| Line | Words | Est. s @ 3.24 | Est. s @ 2.7 |
|---|---|---|---|
| 1 | 11 | 3.4 | 4.1 |
| 2 | 16 | 4.9 | 5.9 |
| 3 | 27 | 8.3 | 10.0 |
| 4 | 12 | 3.7 | 4.4 |
| 5 | 11 | 3.4 | 4.1 |
| **total** | **77** | **23.8** | **28.5** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **6.0s** → **~29.8s** at the fast rate, **~34.5s** at
the slow one. `series-bible-day3.md` § 0.3: this part is digit-heavy (`twenty five` twice, `one bucket`,
`all six`), so the slow end is the planning case. Measured durations win. If the film lands **under 30s**
it is **reported and F5's pad grows** — never padded with words.

## Heading-format check

Five `## Line N — Title (Frame N)` headings for five frames, one per frame, closing paren immediately
after the frame number, no commas inside any heading (`frame-day3.md` § 13: pb-22's
`(Frame 3, two beats)` silently merged F3 into F2's wav). Frame 3 is deliberately four beats and gets
ONE heading, because it is one line of narration.

## Clarity and accuracy pass

Line 1 (hook) and line 5 (CTA mechanic) are the user's words, verbatim, untouched. Line 2 and line 3
carry `CORRECTIONS-day3.md` § A re-cut 2 exactly as written there (the 20-word three-clause sentence
split at the `so` into beats of 10 and 10); line 4 is this part's own example narration, which is
ours to author (Day 1/Day 2 precedent). No term, keyword, hook, CTA mechanic or technical claim was
changed in this run.

Glosses, each in the frame where its term appears: `key-value pairs` → the pair drawn as two chips
(`'Sara'` + `25`) on F2; `hash function` → the `HASH` box, whose interior reads `key -> position` and
carries **no number**; `array position` → the six-slot bucket row plus its index strip; `bucket` → the
slot the hop lands in, tagged `ONE POSSIBLE SLOT`; `constant time` → never notation, only the counted
pair `JUMPED 1` against `LOOKED AT 6`.

**Notation law (`frame-day3.md` § 7.2):** no `O(`, no `log n`, no bare `n` anywhere on screen or in the
voice. **Accuracy law (`series-bible-day3.md` § 4, 25's three rows):** no `hash(...)` value appears
anywhere (string hashes are randomised per process on this machine), the bucket row is never labelled as
Python's memory layout (`list(d.keys())` returns insertion order), and `KeyError: 'Zeyad'` stays off
screen — **this film ships zero coral** (`--err` appears nowhere in it).

No em-dashes on screen, no "simply/just/easy/of course/quick tip", no "don't worry", no AI tells, no
"traverse" (series-banned; this part says "reading them one by one"), no "it's not X, it's Y" (rationed
to part 05), and no three-item list (the only enumeration here — one hop, all six — is a pair, and it is
the subject).

**Spoken code:** `ages = {'Sara': 25}` → "ages is Sara twenty five". `ages['Sara']` → "ages at key Sara".
The voice never says braces, brackets or quotes.
