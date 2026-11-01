# SCRIPT — prog-basics-20-short-circuit (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93**, local and offline, pinned by `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). The flag is passed explicitly (`--speed 0.93`) because
`studio voice`'s house lookup reads `voices.en` while `.agents/design.md` nests the block at
`voice.voices.en`, and an unflagged run silently falls through to 0.74 (WAVE2-PACKET § 1; the `--dry`
line is read before generating). ElevenLabs is unusable on this machine (`voice_id` empty, free-tier
keys return HTTP 402) and was not substituted. HeyGen not used. No BGM, no SFX (bible § 7).

**Voice direction:** one person at a whiteboard, slightly wry. F1's hook is a claim, so it lands flat
and lets the last three words carry the irony. F2 is the mechanism and is said evenly, with a real
stop after "known" — the letters A and B are new names and need a beat before they are used. F3 is the
payoff of the mechanism and slows a little on "before reading it". F4 reads like a result, not a
lecture: short, declarative, no drama on "nothing breaks". F5 is a joke addressed at the viewer, so it
keeps the hook's dryness.

**Budget:** 75 spoken words / 5 lines against a ~29-34s target and a 54s ceiling, at the measured
**3.24 words/second** (not the 2.4 the original estimates used). Real durations come from
`studio voice` and `studio cues` and win. **Nothing is padded** (bible-day2 § 0.2).

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.1s (real VO wins)
**Delivery:** Even, deadpan. User's words, verbatim; the hook is not rewritable. `feature` is the
irony and the only emphasis.

    Your code skips half your condition, and that's a feature.

## Line 2 — The rule, and the two letters (Frame 2)

**Time:** estimate 7.4s (real VO wins)
**Delivery:** Three beats, three breaths. Stop after "known". "Take A and B" is a setup line and is
said alone, before the conditional that uses the letters. Already re-cut for this
(`CORRECTIONS-day2.md` § A); no further change.

    With and or, the language stops as soon as the answer is known. Take A and B. If A is false, B never runs.

## Line 3 — What that buys you (Frame 3)

**Time:** estimate 4.0s (real VO wins)
**Delivery:** One sentence, one idea. Slightly slower on the last four words, because the dashed
chamber on screen is still dark there. User's words, unchanged.

    That lets you guard risky checks, like making sure something exists before reading it.

## Line 4 — The worked example (Frame 4)

**Time:** estimate 5.9s (real VO wins)
**Delivery:** Plain, factual, no drama. The three sentences land on the three things the run actually
did: the guard is false, the print never happens, nothing raised.

    Here user is None. The and stops at once, so admin is never read. Nothing prints, and nothing breaks.

## Line 5 — The tag (Frame 5)

**Time:** estimate 2.8s (real VO wins)
**Delivery:** Verbatim CTA mechanic. Dry, as if addressed to a colleague. `nested ifs` is the joke and
gets the space; no punchline delivery.

    Tag the dev who writes nested ifs for this.

---

## Word count and rate check

| Line | Words | Est. seconds at 3.24 w/s |
|---|---|---|
| 1 | 10 | 3.1 |
| 2 | 24 | 7.4 |
| 3 | 13 | 4.0 |
| 4 | 19 | 5.9 |
| 5 | 9 | 2.8 |
| **total** | **75** | **~23.1** |

Plan: 23.1s of speech + ~1.0s authored air per frame (2.0s baseline on F5) ≈ 29.1s. That is **under
the tranche's 30s floor**, so F5's pad grows (permitted lever 1, `frame-day2.md` § 12) and **no words
are added**. Measured numbers go into `STORYBOARD.md`.

## Clarity pass (what changed from the brief, and what did not)

Line 1 (the hook) and the CTA mechanic in line 5 are the user's words, verbatim. Lines 2-4 are the
piece file's copy:

- The **only** edit in this part's history is `CORRECTIONS-day2.md` § A: "In A and B, if A is false,
  B never runs." → "Take A and B. If A is false, B never runs." Three clauses became a 4-word setup
  plus an 8-word conditional, so the letters get named before they are used. The words survive.
- Line 3 and line 4's first clause are the user's own explain text, unchanged. Line 4 adds no claim
  beyond the user's example (`if user and user.is_admin:` is safe even when `user` is `None`); it says
  in plain order what the run does, and every one of those statements is executed output
  (see the piece file's `## Accuracy`).
- Glosses, all in the same frame the term appears: `condition` → `condition = the yes or no you ask`
  (F1, because the hook cannot be edited); `skips` → `skips = it never runs` (F1); `None` →
  `None = no user yet` (F3); the mechanic → the F2 eyebrow `SHORT-CIRCUIT = IT STOPS EARLY`.
  "risky" is glossed by the user's own clause and by F3's dashed chamber, which is the read that never
  happens.
- **Nothing on screen is coral.** `frame-day2.md` § 1 reserves `--err` for an exception the
  interpreter actually raised on this machine; this part raises none, so `None` is a value (mint) and
  the word "error" appears only as `NO ERROR` in muted mono. The flipped order
  (`user.is_admin and user`, which does raise `AttributeError`) is deliberately not drawn — it lives
  in the pinned comment.
- **The operand-return nuance is held back.** `and`/`or` hand back an operand, not a bool: with
  `user = None` the guard expression evaluates to `None`, and `0 or 'fallback'` → `'fallback'`. The
  part's claim ("B never runs") is unaffected, the frame has no room, and `series-bible-day2.md` § 4
  already rules it off-screen. It is recorded in the piece file's `## Accuracy` and used in the pinned
  comment's order warning.
- No sentence over 14 words, no semicolons, no trailing relative clauses, no em-dashes on screen, no
  `O(…)` notation, no "iterate", no "it's not X, it's Y" (that shape belongs to part 05's hook), no
  "simply/just/easy/of course/don't worry".

**Spoken code:** `and/or` → "and or" (the voice never says a slash). `if A and B:` → "if A and B", the
letters said as letters. `user = None` → "user is None". `user.is_admin` → "admin" (the voice never
says dots, colons, brackets or indentation). `if user:` / `if user.is_admin:` in F5 are **never
spoken** — the strike on screen is the whole argument.
