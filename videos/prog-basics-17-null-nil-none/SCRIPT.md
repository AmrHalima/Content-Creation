# SCRIPT — prog-basics-17-null-nil-none (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93**, local and offline, provider pinned by `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`) through `studio voice`. **The `--speed 0.93` flag IS
passed, and must be**: the house lookup in `studio/tools/studio.mjs` misses (`.agents/design.md` nests
`voices:` under `voice:`, so the key is `voice.voices.en`) and an unflagged run silently speaks at
0.74. `… voice <dir> --speed 0.93 --dry` must print `speed=0.93` before any wav is accepted
(frame-day2 § 8, corrected by the carriers).
ElevenLabs is unusable on this machine (`.agents/design.md` voice_id empty, free-tier keys return
HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person talking straight to camera, dry, unhurried, no smile in the voice.
F1 is a fact about a person, not a punchline: it is stated flat and "mistake" lands without leaning on
it. F2 is three beats — the three names are said as a list of names, evenly, with the smallest gap
after the first two; then one breath per sentence. On F3, "So" gets a real stop before it. F4 is read
like a bug report, and slightly slower on the two error names, because they are different words and
that difference is the frame. F5 is the user's CTA: two asks, one breath each, no sign-off.

**Budget:** 70 spoken words / 5 lines against a ~29-34s target and a 54s ceiling. Real durations come
from `studio cues` and win.

---

## Line 1 — The hook, direct address (Frame 1)

**Time:** estimate 2.8s (real VO wins)
**Delivery:** Flat and factual. User's words, verbatim. It is a quotation about a real person, so it
is stated, not performed. No joke about his death in any register.

    The inventor of null called it his billion-dollar mistake.

## Line 2 — Three names, one meaning (Frame 2)

**Time:** estimate 7.1s (real VO wins)
**Delivery:** Three beats. The names come as a list of names, evenly. The second sentence is the
ground, the third is the turn: "absence" is the word the whole part hangs on, and it lands last.

    Null, nil, and None all mean no value here. Zero and an empty string are both values. None is the absence of one.

## Line 3 — The danger, then the instruction (Frame 3)

**Time:** estimate 4.3s (real VO wins)
**Delivery:** The first sentence lands the danger. A real stop before "So", then the instruction,
quietly. Approved re-cut (`CORRECTIONS-day2.md` § A): the user's 3-clause "The danger: calling a
method on nothing crashes your program, so check before you use it." became two beats of 9 and 7.

    Calling a method on nothing crashes your program. So check before you use it.

## Line 4 — The same crash in two languages (Frame 4)

**Time:** estimate 4.6s (real VO wins)
**Delivery:** Like reading a bug report. `user = None` → "set user to None"; `user.name` → "read user
dot name", never "user name". Slightly slower on "AttributeError" and "TypeError" — the two names
being different is the point of the frame.

    Set user to None, then read user dot name. Python raises AttributeError. JavaScript raises TypeError.

## Line 5 — The ask (Frame 5)

**Time:** estimate 2.8s (real VO wins)
**Delivery:** Verbatim, and it is the CTA mechanic. Two asks, one breath each. No added sign-off,
because this frame loops under the platform's chrome.

    Save this, then tell me your worst null bug.

---

## Word count and rate check

Planned at the measured carrier rate, **3.24 words/second at 0.93** (frame-day2 § 8/§ 12 — the 2.4 w/s
model the Day 2 piece files were written against runs ~26% long). **The measured table is the one
below** (`audio_meta.json`, ASR word timings after `studio voice --speed 0.93` + `studio cues`); the
estimate column is kept only to show what the model got wrong.

| Line | Words | Est. speech | Measured speech | Last word ends | Air | Frame duration | Film start |
|---|---|---|---|---|---|---|---|
| 1 | 9 | 2.78 | **3.328** | 2.96 | 0.97 | 4.3 | 0.0 |
| 2 | 23 | 7.10 | **7.765** | 7.56 | 1.04 | 8.8 | 4.3 |
| 3 | 14 | 4.32 | **4.480** | 4.30 | 1.02 | 5.5 | 13.1 |
| 4 | 15 | 4.63 | **7.360** | 6.80 | 1.04 | 8.4 | 18.6 |
| 5 | 9 | 2.78 | **2.453** | 2.12 | 2.05 | 4.5 | 27.0 |
| **total** | **70** | **21.61** | **25.386** | 23.74 | **6.12** | **31.5** | |

Measured rate: 70 words over 23.74s to the last word = **2.95 w/s at 0.93** — slower than the 3.24
planning number because this script's load-bearing words are long (`billion-dollar`, `AttributeError`,
`TypeError`, `JavaScript`, `absence`) and each gets its own breath. Line 4 is the outlier: 15 words in
7.36s (2.04 w/s) against a 4.63s estimate.

**The film is 31.5s: above the 30s floor, so no padding lever was pulled and no words were added.**
The estimate had it at 27.6s; the measured audio is 3.78s longer, which is what cleared the floor.
F5 still takes the largest pad (2.05s) because § 12 says air on the looping frame is shape, not
filler.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and line 5 (the CTA mechanic) are the user's words, verbatim, and were not touched.
The two approved changes in `CORRECTIONS-day2.md` that name part 17 are transcribed here and are not
re-cut again:

- **§ A, voice.** "It's not zero and it's not an empty string." → "Zero and an empty string are both
  values. None is the absence of one." (the contrast-reveal shape is rationed to one occurrence across
  the series and part 05's hook already spent it; the replacement is also executed truth:
  `None == 0` → `False`, `None == ''` → `False`). "The danger: calling a method on nothing crashes
  your program, so check before you use it." → "Calling a method on nothing crashes your program. So
  check before you use it." (3 clauses → 9 + 7).
- **§ B, screen only.** The voice keeps its line. The **frame** carries the caveat: `bool(None)` and
  `bool('')` are both `False`, so a viewer who writes `if user:` cannot tell an empty string from an
  absent value. F3 shows `if user:` struck through beside `if user is None:`, and the pinned comment
  says the distinction in one line. Nothing about the narration changes for it.

Glosses, all present the moment the term appears: the three names are glossed by the chip row (each
tagged `JAVASCRIPT` / `GO · RUBY · LUA · SWIFT` / `PYTHON`, so the learner learns which language says
which word); `no value here` is the plain-English gloss of all three; `absence` is set against
`both values` on the same frame; `method` is glossed by the line that follows it (`user.name` *is* the
call); `AttributeError` and `TypeError` gloss themselves — the messages read "has no attribute 'name'"
and "cannot read properties of null" in English. `nil` is named and tagged but never executed, because
nothing on this machine runs Go, Ruby, Lua or Swift (`frame-day2.md` § 13).

Zero invented output: both error strings, both `False` results and the `NoneType` name come from the
bible § 4 ledger, re-executed on Python 3.13.15 and node v24.15.0. Coral appears only under
interpreter text. **"iterate" and "traverse" are not used anywhere in this part**, no `O(1)`-style
notation appears, there are no em-dashes on screen, no "it's not X, it's Y", no "simply/just/easy/of
course/quick tip", and no "don't worry"/"everyone struggles".

**Spoken code:** `None` → "None" (capital, it is the literal). `user = None` → "set user to None".
`user.name` → "read user dot name". `AttributeError` / `TypeError` → the names, unsplit. `nil` /
`null` → spoken as written. `is None` is never spoken: the voice keeps its approved line and F3's chip
pair carries it visually. The voice never says brackets, colons or semicolons.
