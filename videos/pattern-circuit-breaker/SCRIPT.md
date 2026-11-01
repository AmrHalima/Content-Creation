# SCRIPT — pattern-circuit-breaker (EN master)

**Voice:** af_heart (Kokoro-82M, local, offline, free — provider pinned by `studio voice` from
`BRIEF.md`: `tts_provider: kokoro`, `voice: af_heart`, speed 0.74). This is the
`backend-patterns` campaign's chosen switch away from `am_michael` and it overrides
`.agents/design.md`'s `voices.en` for this campaign only. HeyGen is not used; ElevenLabs is
unusable here (`voice_id` empty, free-tier keys reject library voices with HTTP 402) and was not
substituted silently.

**Voice settings:** default local engine, speed 0.74.

**Voice direction:** One engineer explaining a state machine to another at a whiteboard. Flat and
precise on the claims; no classroom lift, no "let's break this down". The state names land as
facts, evenly, because the diagram is doing the teaching. The only place the delivery slows on
purpose is the last clause of the last line — the storm — which is stated, not warned about.
Never announced, never hyped.

**Budget:** 150 spoken words / 7 lines. At the campaign's planning rate of ~2.0 words per finished
second that is ~75s of narration against a 76s expectation (ceiling 90s). Real durations come
from `studio cues` timestamps and win.

---

## Line 1 — The waiting (Frame 1)

**Time:** 0.00 – 5.00s (estimate; real VO wins)
**Delivery:** Dry, a statement of fact about a bad afternoon. "still waits" gets the only small
emphasis in the line.

    A dependency degrades, and every call still waits.

## Line 2 — The seam (Frame 2)

**Time:** 5.00 – 10.00s
**Delivery:** Same register, one notch faster. The name and the verb carry it; no introduction
music in the voice, no "this is a circuit breaker".

    A circuit breaker wraps the calls and fails fast.

## Line 3 — Three states (Frame 3)

**Time:** 10.00 – 29.00s
**Delivery:** The spine of the part. Four sentences, four beats, each one landed and released; the
state names even and unhurried, because the diagram is cycling underneath and the words must not
race it. Quietest line in the film on "nothing leaves". A small gap before "Succeed".

    Closed means calls flow while the breaker counts failures. Cross the configured threshold and it goes open: nothing leaves. After the reset timeout it goes half-open and lets one probe through. Succeed and it closes, fail and it opens again.

## Line 4 — Configuration (Frame 4)

**Time:** 29.00 – 39.00s
**Delivery:** Matter of fact, slightly drier — this is the accuracy guard, not a revelation. "a
guess" lands flat and stops.

    Threshold and reset timeout are configuration. Every dependency sets its own; a number copied from another service is a guess.

## Line 5 — The fallback (Frame 5)

**Time:** 39.00 – 49.00s
**Delivery:** Warmest line in the part, because it is the practical one. "the last cached value"
gets the weight; "an honest unavailable" is a small dry smile, then move on.

    An open breaker still has to answer, so the guarded call takes a fallback: the last cached value, or an honest unavailable.

## Line 6 — The code shape (Frame 6)

**Time:** 49.00 – 61.00s
**Delivery:** Read like reviewing a pull request: flat, quick on the connective words, one notch
of emphasis on "before its timeout" — that is the whole point of the frame.

    At the call site it is one wrapper. When the breaker is open the guarded call throws before its timeout, and the catch returns the fallback.

## Line 7 — Where it goes wrong (Frame 7)

**Time:** 61.00 – 76.00s
**Delivery:** The tell. No alarm, no scolding — the calm of someone describing a postmortem they
read. The second sentence is slower than the first and the film stops there.

    The usual shape is a timeout with no breaker, so one slow dependency costs every caller its patience. Add retries, and the storm finishes what the outage started.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban (bible § 6):** no "it's not X, it's Y" and no "not because X — because Y"
  anywhere, including the hook. Line 4 first draft read "settings, not constants" and was
  rewritten to "are configuration" to clear the ban outright. Zero occurrences in the film, which
  is under the rationed allowance of one.
- **Em-dash ban on short copy:** zero em dashes in narration, therefore zero in the captions, and
  none in on-screen text. Hyphenated technical terms (`half-open`, `reset timeout`, `before/after`)
  are not dashes.
- **Triad cap:** the only three-item walk is the state sequence in Line 3 (closed / open /
  half-open), which is the pattern's own vocabulary rather than a rhetorical list. Every other list
  in the part has two items (Line 5's fallback pair, Line 7's timeout-and-retries pair). No two
  lists in a row.
- **No mnemonics, no invented terminology:** `half-open`, `failure threshold`, `reset timeout`,
  `probe` and `fallback` are the pattern's standard names. Nothing coined.
- **Names and numbers checkable:** no statistics, no benchmarks, no library versions, and no
  specific numbers presented as universal. The threshold and the reset timeout are named as
  configuration in Line 4 and labelled `(configured)` on screen; no default value is asserted and
  no library is named.
- **Order independence (bible § 2):** the problem is re-established in Lines 1-2 (17 words,
  inside the 10-18 band). Zero references to other parts. **Timeout** and **retry** are named once
  each in Line 7, only to mark a boundary; **bulkhead was dropped entirely** so the boundary
  contrast never became an enumeration.
- **Forbidden AI-tells:** none of "in today's fast-paced world", "unlock", "delve", "journey",
  "simply put", "let's break this down", "think of it as"; nothing announces a lesson.
- **Customer language used** (`.agents/product-marketing.md`): dependency, seam, guarded call,
  fallback, configuration, cost.
- **Accuracy:** Line 3 describes the transitions as the pattern defines them (threshold crossing
  opens, the reset timeout permits a probe, probe success closes, probe failure re-opens). Line 6
  describes the code shape without claiming any library's API — the on-screen chip marks it a
  shape, and the fragment is read for correctness.
- **Misuse tell lands last (bible § 1):** Line 7's final clause is "the storm finishes what the
  outage started", which is the campaign's stated tell for part 10.
