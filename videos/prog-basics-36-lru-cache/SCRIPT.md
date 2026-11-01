# SCRIPT — prog-basics-36-lru-cache (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame.md` v2.2 § 9), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable on this machine
(`.agents/design.md` `voice_id` empty, free-tier keys return HTTP 402) and was not substituted.
HeyGen not used. No BGM, no SFX.

**Budget:** **81 spoken words / 5 lines** against a ~31s target (band 29-34s, ceiling 54s).
At the tranche's measured 3.24 words/second that is 25.0s speech + 6.0s authored air. Real durations
come from `studio voice` + `studio cues` and win.

**Voice direction:** one person at a whiteboard with two boxes and a pointer. F1 is a plain question,
not a tease — `throw away` gets the last breath and nothing else. F2's first sentence is flat and factual
(it is the constraint), and `least recently` gets the last breath of the frame because it is the whole
algorithm. F3's `moves` is the node travelling, so it is said with the hand, and `oldest` lands on the
tail. F4 is two beats, one per panel: `finds` on the map side, `reorders` on the chain side, and
`on average` is a small lift, not a new thought — it is the two words that make the sentence true. F5 is a
list of steps, so each comma is a real gap, and the question at the end is asked, not tagged.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 2.8s (real VO wins)
**Delivery:** Verbatim hook. Even weight across the whole question; `throw away` last and unhurried. The
word `evict` has not arrived yet, so nothing in the voice previews it.

    How does a cache decide what to throw away?

## Line 2 — The rule (Frame 2)

**Time:** estimate 5.6s (real VO wins)
**Delivery:** First sentence flat — it is a limit, not a mechanism. Second sentence opens on the event
(`when it fills`) and lands `least recently` on the tail node. The on-screen tag carries the term `evicts`
in the same breath as `throws out`, so the gloss and the term arrive together.

    An LRU cache has a fixed size. When it fills, it throws out the item used least recently.

## Line 3 — The read that reorders (Frame 3)

**Time:** estimate 5.6s (real VO wins)
**Delivery:** `moves` is spoken while the node is travelling, so the verb and the pixel agree. The second
sentence slows and lands `oldest` on the tail node, which is the one about to matter. No excitement: this
is the quiet rule that makes the next frame's cost exist.

    Every read moves that item to the front. So the back of the line is always the oldest.

## Line 4 — The two parts (Frame 4)

**Time:** estimate 7.1s (real VO wins)
**Delivery:** Two beats, one per panel, and the colour hands off between them. `finds` on the map side,
`reorders` on the chain side. `That keeps every read and write in constant time on average` is one
sentence with a small lift on `on average` — the qualifier is the honest scope, inherited from the hash
map, and it is words only: this part prints no notation anywhere.

    A hash map finds the item, and a linked list reorders it. That keeps every read and write in constant time on average.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 4.0s (real VO wins)
**Delivery:** Verbatim CTA mechanic. Four steps, read as steps, with a small gap at each comma, then the
question. `Capacity 2` is spoken "capacity two"; the letters stay letters; no bracket, colon or arrow is
read aloud anywhere in this part.

    Capacity 2: put A, put B, get A, put C. What gets evicted?

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 9 | 2.8 |
| 2 | 18 | 5.6 |
| 3 | 18 | 5.6 |
| 4 | 23 | 7.1 |
| 5 | 13 | 4.0 |
| **total** | **81** | **25.0** |

Plus authored air (1.0s per frame, 2.0s on F5) = **31.0s** film. Inside the 29-34s band; at the slow-word
rate pb-13 measured (3.04 w/s) it is ~32.6s, still inside. A6 cost 2 words and F4 is the frame that pays
them. Ceiling 54s, far away.

## Clarity pass (what changed from the piece's briefed copy, and what did not)

Line 1 (the hook) and line 5 (the CTA question) are the user's words, byte-identical to the piece file.
Lines 2, 3 and 4 are the piece file's narration table verbatim including the approved A6 correction
(`constant time on average`), which is the only wording change in this tranche's copy for this part.
Nothing was added to reach a runtime and nothing was cut.

Glosses, each present the moment the term appears: `throw away` → the dashed ghost that fades out right on
F2, in the same frame that says it; `evicts` → the mono tag `evicts: throws it out` on that ghost, so the
plain word in the voice and the term on screen arrive together (§ 9's same-breath rule); `node` → the
pb-22 two-cell box with `KEY` / `NEXT` cells; `front` → the `NEWEST` eyebrow label the promoted node
lands under; `oldest` / `back of the line` → the `OLDEST` label over the tail slot, which is where node B
ends up; `hash map` → the map panel printing `key -> node` with the executed `'A': 'node(A)'` pairs;
`linked list` → the chain panel printing `head -> A -> B -> None` with the `PREV` line drawn back;
`constant time on average` → `ONE LOOK + ONE RE-LINK` and `3 pointer writes, no scan`, both in words,
no symbol anywhere in this part.

**Spoken code:** `Capacity 2:` → "capacity two". `put A`, `put B`, `get A`, `put C` → letters stay
letters. `None` → "nothing" (never spoken here anyway — the terminator chip is read by the eye). No
bracket, colon, arrow or underscore is spoken aloud in this part. The `key -> node` and
`'A': 'node(A)'` lines on F4 are screen-only printed form, never voiced.

No sentence over 23 words. No semicolons, no em-dashes on screen, no "simply/just/easy/of course", no
"don't worry", no AI tells. **"It's not X, it's Y" appears nowhere** — the construction is rationed to one
occurrence across the series and it was spent on part 05's hook, so F4's cost line is stated plainly as
`ONE LOOK + ONE RE-LINK`. No notation: `O(1)` appears on no surface of this part, in the caption lane, or
in the plate.
