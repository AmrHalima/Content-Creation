# SCRIPT — prog-basics-14-what-is-recursion (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93**, local and offline, provider pinned by `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`) through `studio voice`. **The `--speed 0.93` flag IS
passed, and must be**: the house lookup in `studio/tools/studio.mjs` misses (`.agents/design.md` nests
`voices:` under `voice:`, so the key is `voice.voices.en`) and an unflagged run silently speaks at
0.74. `… voice <dir> --speed 0.93 --dry` must print `speed=0.93` before any wav is accepted
(frame-day2 § 8, corrected by the carriers).
ElevenLabs is unusable on this machine (`.agents/design.md` voice_id empty, free-tier keys return
HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person talking straight to camera, deadpan, no smile in the voice. The hook
is a recursion joke and it only works if it is delivered as a plain statement — do not wink at it.
F2 is one breath per clause. On F3, "It stops" gets a real pause before it: that pause is where the
base case lights. F4 is counted down slowly enough to be heard as a descent, and "twenty-four" is the
unwind finishing, not a new claim. F5 is the user's CTA, asked plainly, no sign-off.

**Budget:** 86 spoken words / 5 lines against a ~39s target and a 54s ceiling. Real durations come
from `studio cues` and win.

---

## Line 1 — The hook, direct address (Frame 1)

**Time:** estimate 3.8s (real VO wins)
**Delivery:** Deadpan, flat, no wink. The joke is a plain statement. User's words, verbatim; this is
the only frame in the series allowed to end on the word it begins with.

    To understand recursion, you must first understand recursion.

## Line 2 — The definition, made physical (Frame 2)

**Time:** estimate 5.8s (real VO wins)
**Delivery:** One breath per clause. "smaller" is the word the whole part hangs on, and the arrow has
already run back into `function` by the time it lands.

    Recursion is a function calling itself on a smaller version of the same problem.

## Line 3 — Trust, then the stop (Frame 3)

**Time:** estimate 9.2s (real VO wins)
**Delivery:** Three beats, three breaths. The pause before "It stops" is the point — the `BASE` plate
lights in it. The last sentence is the unwind, so it is said slower than the first two.

    Each call trusts the next one to solve a piece. It stops when the problem is so small the answer is obvious.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 11.3s (real VO wins)
**Delivery:** Count down slowly enough to be heard as a descent: four, three, two, one. "One is the
base case" lands alone. The final "twenty-four" is the unwind finishing — no new emphasis on it, the
number is already on the board.

    Fact of four waits on fact of three, then two, then one. One is the base case. Four times three times two times one is twenty-four.

## Line 5 — The ask (Frame 5)

**Time:** estimate 2.9s (real VO wins)
**Delivery:** Verbatim, and it is the CTA mechanic. No added sign-off, because this frame loops under
the platform's chrome.

    Drop the best recursion joke you know.

---

## Word count and rate check

Measured at af_heart 0.93 (`audio_meta.json`, ASR word timings) — these replace the estimate table the
first pass carried:

| Line | Words | Speech (measured) | Last word ends | Air | Frame duration | Film start |
|---|---|---|---|---|---|---|
| 1 | 8 | 3.755 | 3.58 | 1.05 | 4.8 | 0.0 |
| 2 | 14 | 4.971 | 4.72 | 1.03 | 6.0 | 4.8 |
| 3 | 22 | 6.635 | 6.20 | 2.97 | 9.6 | 10.8 |
| 4 | 26 | 8.896 | 8.48 | 1.30 | 10.2 | 20.4 |
| 5 | 7 | 2.091 | 1.82 | 2.01 | 4.1 | 30.6 |
| **total** | **77** | **26.348** | 24.80 | **8.36** | **34.7** | |

The piece file's frontmatter says 86 words; counted against the narration table as shipped it is 77.
Recorded, not corrected: the count is a planning token, not a claim on screen, and no word was added
or removed to chase it. The piece file's 2.4 words/second model predicted 32.08s of speech for these
77 words; the audio is 26.35s (**3.10 w/s at 0.93**), so every frame duration and every emphasis time in
the composition files was re-based on the cued onsets above. F3's air is the one non-house number: the
four-step unwind needs 1.20s per step to stay legible, and 0.90s per step produced three real
`line_unread` findings. See BRIEF.md -> deviations 15-17.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and line 5 (the CTA mechanic) are the user's words, verbatim, and were not touched.
The re-cut that is already applied in the piece file (`CORRECTIONS-day2.md` § A, and reproduced in
its narration table) is the only edit to the explain lines:

- F2: the user's "Recursion is a function **that calls itself** on a smaller version of the same
  problem." (17 words) → "…a function **calling itself** on…" (13 words). Meaning, terms and order
  unchanged; it now fits § 9's ≤14-word sentence law.
- F3: "Each call trusts the next one to solve a piece, until the problem is so small the answer is
  obvious." (20 words, one trailing `until` clause) → **split into two beats**: "Each call trusts the
  next one to solve a piece." / "It stops when the problem is so small the answer is obvious." The
  words survive; the breath changes, and the split is what creates the pause the `BASE` plate lights
  in.

No hook, no CTA mechanic, no technical claim, no term and no number was altered.

Glosses, all present the moment the term appears: `recursion` → the hook itself states the shape (a
call that comes back around), then F2's arrow draws it; `function` → the word the self-loop re-enters,
so "calling itself" needs no sentence; `smaller` → the `n - 1` chip at the arc's midpoint (smaller is
a number, not a mood); `each call trusts the next` → the stack descending one card per clause;
`base case` → card 4's `BASE` plate flipping amber exactly on "It stops", plus the F4 fragment's
`n <= 1`; `stack` is never spoken — the column shows it. **"iterate" is not used anywhere in this
part**, and neither is "traverse".

Zero coral: this part raises no exception (frame-day2 § 1), so the `REC` dot and all chrome are
`--muted`. No em-dashes on screen, no "not X, it's Y" construction (that belongs to part 05's hook),
no "simply/just/easy", no "don't worry".

**Spoken code:** `fact(4)` → "fact of four". `fact(3)` → "fact of three". `fact(n - 1)` → "fact of n
minus one". `n <= 1` → spoken as "one is the base case", never as a comparison. `24` → "twenty-four".
The voice never says brackets, colons or indentation.
