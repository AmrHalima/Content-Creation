# SCRIPT — prog-basics-15-base-case (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** — the house value, but it must be **passed explicitly**:
`studio voice <dir> --speed 0.93`. `studio voice` looks up `voices.en` in `.agents/design.md`, which
nests the block under `voice:` (flattened key `voice.voices.en`), so the lookup misses and an
unflagged run silently speaks at 0.74. The dry run was read before any wav was generated
(`frame-day2.md` § 8, `WAVE2-PACKET.md` § 1). Provider pinned from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`); never `auto`. ElevenLabs is unusable on this machine
(`voice_id` empty, free-tier keys return HTTP 402) and was not substituted. HeyGen not used. No BGM,
no SFX (bible § 7).

**Voice direction:** one person at a whiteboard with a column of cards on it. F2 is the calm half —
the descent that ends. F3 is the same column not ending, and the voice stays flat while it happens:
the crash is the fact, not the drama. F4 reads the code as code, no urgency. F5 asks a question and
stops.

**Budget:** 5 frames, 53 spoken words, against a ~29-34s target (`WAVE2-PACKET.md` § 2: measured
3.24 words/second at 0.93) and a 54s ceiling. This is the leanest narration in the tranche, so the
**air is what holds the shape** (frame-day2 § 12). Real durations come from `studio cues` and win;
**no words are added** (bible-day2 § 0.2, the user's standing choice).

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.1s (real VO wins)
**Delivery:** Even, no alarm. "stack overflow" is the keyword and the only emphasis in the line; the
hook is the user's words, verbatim, and its "stack overflow" is Python's `RecursionError` — that
pairing is on F1's screen in muted mono and in the pinned comment, not in the voice.

    Forget this one thing and you'll get a stack overflow.

## Line 2 — The base case, and where it stops (Frame 2)

**Time:** estimate 2.2s (real VO wins)
**Delivery:** One breath, no hurry. "base case" is the term and its gloss is the same clause ("where
recursion stops"). The four cards drop one per clause and the BASE plate lights exactly on "stops".
User's explain line, unaltered — `CORRECTIONS-day2.md` § A records that part 15 needed no re-cut.

    The base case is where recursion stops.

## Line 3 — The column runs out (Frame 3)

**Time:** estimate 3.7s (real VO wins)
**Delivery:** Flat across the whole line. The cards keep arriving under it; the last one lands on
"runs out" and the error strip follows. Do not raise the voice on "runs out" — the coral border and
the raised message say it.

    Without it, the function calls itself until the call stack runs out.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 4.3s (real VO wins)
**Delivery:** Read it as a rule, not as a warning. "base case" lands while the dashed slot is
flashing, "step" and "toward" land on `f(n - 1)`. User's explain line, unaltered.

    Every recursive function needs a base case and a step that moves toward it.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 3.1s (real VO wins)
**Delivery:** Ask it like a question, not a tag line. Mechanic unchanged; the answer is not in the
voice and not on the frame.

    What's the base case for summing a list? Comment it.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 10 | 3.1 |
| 2 | 7 | 2.2 |
| 3 | 12 | 3.7 |
| 4 | 14 | 4.3 |
| 5 | 10 | 3.1 |
| **total** | **53** | **~16.4** |

`studio voice` measures and syncs; the estimates are only the starting point. The measured speech is
longer than the raw rate because each line carries its own internal pauses.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2-4 are the
user's three explain sentences, **one idea per frame**, and `CORRECTIONS-day2.md` § A lists part 15
among the parts whose explain lines already pass the ≤14-word / ≤2-clause law — so nothing was
re-cut, shortened, merged or reordered here.

- `base case` is glossed in the same breath it appears: "the base case is **where recursion stops**".
  On screen the same frame shows it as the plate on the card that stops saying `waits`.
- `call stack` never gets a dictionary definition; F3 draws it as a column of cards that runs out of
  room, which is the gloss. The word "stack" is never used as jargon in the voice beyond the user's
  own sentence.
- `stack overflow` (hook) → `python names it RecursionError` (F1's muted mono gloss). Screen-text and
  pinned-comment work; the narration keeps the user's wording exactly.
- **`RecursionError: maximum recursion depth exceeded` is quoted character-for-character as the
  interpreter raised it** (Python 3.13.15, this machine) and is the only coral in the film. `DEPTH
  1000` is `sys.getrecursionlimit()` from the same run.
- No "it's not X, it's Y" anywhere (banned series-wide; the shape belongs to part 05's hook). No
  em-dashes on screen, no "simply/just/easy/of course", no "don't worry"/"everyone struggles", no
  three-item lists, no `O(...)` notation (there is nothing here that needs it — the stack's size is
  shown as a counted column of eight cards).
- Nothing is said about how recursion *returns* — that is part 14's lesson, and repeating it would
  crowd F3's column.

**Spoken code:** `f(n - 1)` → "f of n minus one", never spoken in F4's sentence but shown on screen.
`f(4)` → "f of four". `def f(n):` → never read aloud; the voice is on the rule, the screen is on the
code. `sum(nums)` / `sum([])` → spoken as "summing a list", the user's own words; the brackets are
never said. The voice never says colons or indentation.
