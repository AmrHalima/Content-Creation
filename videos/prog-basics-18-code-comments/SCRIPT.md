# SCRIPT — prog-basics-18-code-comments (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93**, local and offline, provider pinned by `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`) through `studio voice`. **The `--speed 0.93` flag IS
passed, and must be**: the house lookup in `studio/tools/studio.mjs` misses (`.agents/design.md` nests
`voices:` under `voice:`, so the key is `voice.voices.en`) and an unflagged run silently speaks at
0.74. `… voice <dir> --speed 0.93 --dry` must print `speed=0.93` before any wav is accepted
(frame-day2 § 8, corrected by the carriers).
ElevenLabs is unusable on this machine (`.agents/design.md` voice_id empty, free-tier keys return
HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person talking straight to camera, and they are starting an argument, not
finishing a lesson. F1 is asked flat, the way you ask a colleague — no host voice on `Agree or
disagree?`. F2 lands `why`, then a real pause; the strike is drawn in that pause. F3's `rename` is the
verb of the frame. F4 reads the triad in one breath (no list-voice), then reads the two comments as
written and lets `add one to i` hang there flat — it must not be underlined, because the flatness is
the joke. F5 repeats F1's question and it should sound like a callback; no sign-off, this frame loops.

**Budget:** 66 spoken words / 5 lines against a ~29-34s target and a 54s ceiling. Real durations come
from `studio cues` and win.

---

## Line 1 — The provocation, direct address (Frame 1)

**Time:** estimate 2.5s (real VO wins)
**Delivery:** Verbatim. Deadpan ask, no host voice. The negation is the user's and stays.

    Good code doesn't need comments. Agree or disagree?

## Line 2 — Why a comment is allowed to exist (Frame 2)

**Time:** estimate 4.6s (real VO wins)
**Delivery:** Two beats, two breaths. Land `why`. The pause after the first sentence is where the
strike rule is drawn across `# add 1 to i`.

    A comment earns its place by explaining why. The code already says what it does.

## Line 3 — Rename it instead (Frame 3)

**Time:** estimate 4.3s (real VO wins)
**Delivery:** `rename` is the verb. Do not rush the second half — the chip is still typing itself out
when the sentence ends.

    If a comment explains what the code does, rename things until it explains itself.

## Line 4 — The two comments, in real code (Frame 4)

**Time:** estimate 6.8s (real VO wins)
**Delivery:** The triad in one breath, exactly as written — it is this part's one allowed list. Then
read the good comment as written, then the bad one flat. `Add one to i` gets no emphasis: the screen is
already showing `i += 1`.

    Save comments for decisions, warnings, and tricky reasons. Retry three times: the payment API drops requests under load. Add one to i.

## Line 5 — The ask (Frame 5)

**Time:** estimate 2.2s (real VO wins)
**Delivery:** Verbatim, and it is the CTA mechanic. Same words as the end of line 1, so it reads as a
callback. No sign-off — this frame loops under the platform's chrome.

    Agree or disagree? Defend your side below.

---

## Word count and rate check

Estimated at the **measured** 3.24 words/second (frame-day2 § 8/§ 12), not the 2.4 w/s the piece-file
table was written against:

| Line | Words | Speech (est. @3.24) | Air | Frame duration | Film start |
|---|---|---|---|---|---|
| 1 | 8 | 2.5 | 1.0 | 3.5 | 0.0 |
| 2 | 15 | 4.6 | 1.0 | 5.6 | 3.5 |
| 3 | 14 | 4.3 | 1.0 | 5.3 | 9.1 |
| 4 | 22 | 6.8 | 1.8 | 8.6 | 14.4 |
| 5 | 7 | 2.2 | 3.0 | 5.2 | 23.0 |
| **total** | **66** | **20.4** | **7.8** | **28.2** | |

Measured `audio_meta.json` replaces this table; nothing here is a claim about the final film. If the
measured total lands under 30s the permitted lever is F5's pad, then frame shape — **never added words**
(frame-day2 § 12, bible-day2 § 0.2).

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and line 5 (the CTA mechanic) are the user's words, verbatim, and were not touched.
The two re-cuts already applied upstream (`CORRECTIONS-day2.md` § A, rows for part 18) are transcribed
here, not re-decided:

- F2: the user's "Comments should explain why, not what." → "A comment earns its place by explaining
  why. The code already says what it does." (8 + 7 words; contrast-reveal ban, and the second sentence
  is now the reason the first is true).
- F3: the user's "If you have to explain what the code does, …" (16 words) → "If a comment explains
  what the code does, …" (14 words; the subject moves from the writer's effort to the artifact).

F4's line is the user's third explain sentence **exactly as written**, followed by the user's own
example read aloud (`# retry 3 times: …` → "retry three times: …", `# add 1 to i` → "add one to i").
No word of any explain sentence was invented, re-cut a second time, or dropped; the example is voiced
so the punchline is heard as flat as it is written.

Glosses, all present the moment the term appears: `comment` is not defined — the frame shows one, in
mono, starting with `#`, in the same breath the word is said; `why` vs `what` is made physical by the
strike rule crossing `# add 1 to i` (P10, "not this" without saying not this) while the good comment
sits beside it unstruck; `rename things` is a chip actually relabelling itself from `d2` to
`days_until_delivery` on screen; `decisions, warnings, and tricky reasons` is the one list and the
chambers show one of each shape; "tricky reason" is glossed by `the payment API drops requests under
load` — a fact nobody can read off `charge(cart)`.

Zero coral: this part raises no exception (frame-day2 § 1), so the `REC` dot and all chrome are
`--muted`. No em-dashes on screen, no "not X, it's Y" construction anywhere in the film or its post
copy (that shape belongs to part 05's hook, and the Learnings row bans it downstream), no
"simply/just/easy/quick tip", no "don't worry". One three-item list only — the user's.

**Spoken code:** `3` → "three". `#` is never said. `i += 1`, `while i < 5:`, `print(i)`,
`charge(cart)`, `d2`, `days_until_delivery` and the printed `0 1 2 3 4` are **not** spoken — they are
on the board while the voice says the line they belong to.
