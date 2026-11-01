# SCRIPT — pattern-singleton (EN master)

**Voice:** af_heart (Kokoro-82M, speed 0.74, local — signed out of HeyGen, and `.agents/design.md`
carries no ElevenLabs `voice_id`). This is the `backend-patterns` campaign's chosen switch away
from the house default `am_michael` (`series-bible.md` § 7); it overrides `voices.en` for this
campaign only and does not edit the house spec.

**Voice settings:** Kokoro default engine settings, speed 0.74 (house value, unchanged).

**Voice direction:** One engineer explaining a thing they have both used and been bitten by. Flat
and unhurried on the claims, the smallest lift of amusement on "with a good name". Never a lecture,
never "let's break this down", no exclamation anywhere. The accusation lines (F6, F7) land *quieter*
than the anatomy lines — the point is a mechanism, not a verdict. Line 2 is the thesis and gets the
most space.

**Budget:** 156 spoken words / 8 lines. At the campaign's planning rate of ~2.0 words per finished
second that is ~78s of narration against an 80s expectation; the sibling film `videos/osi-layers-1`
measured 1.93 words per finished second once TTS timestamps were synced, which puts the real cut
near 81s. Hard ceiling is 90s. Real durations come from `studio cues` timestamps and win.

---

## Line 1 — The thing you only want once (Frame 1)

**Time:** 0.0 – 12.0s (guide)
**Delivery:** Dry recognition, and no rush: the first two sentences are the problem the series rule
makes this part re-establish before it claims anything. "one of" gets the only emphasis. Name
"Singleton" plainly, without ceremony.

    Some things a program should only ever have one of. A connection pool, the app config. Singleton is a class enforcing that about itself.

## Line 2 — A lifetime decision (Frame 2)

**Time:** 12.0 – 23.0s (guide)
**Delivery:** The thesis, so give it room. Three separate statements, each allowed to sit. Land
"whole process" flat, and let "wearing a pattern's clothes" be the quietest line in the film — it
is the one idea the viewer is meant to keep, so it must not be sold.

    One instance, alive for the whole process. Nobody else gets to make a second. That is a lifetime decision wearing a pattern's clothes.

## Line 3 — Three chambers (Frame 3)

**Time:** 23.0 – 33.0s (guide)
**Delivery:** Matter-of-fact, slightly faster, this is bookkeeping. Keep the three named actors
audibly separate: a small gap after "door", another after "class". Do not let "static holder" blur.

    Every caller reaches the same door: a static holder inside the class, and the one instance behind it.

## Line 4 — The shape in five lines (Frame 4)

**Time:** 33.0 – 43.0s (guide)
**Delivery:** Precise, like reading code aloud to a colleague. "private" is the load-bearing word
and gets the smallest pause after it. Flat on "hands it out" — the accessor is unremarkable, and
sounding unimpressed is the point.

    Private constructor, so nobody outside can call new. One static field holds the instance the class hands out.

## Line 5 — Two names, one object (Frame 5)

**Time:** 43.0 – 51.5s (guide)
**Delivery:** This line is a proof, so deliver it like one: unhurried, and stop cleanly after
"back". "one lifetime" is the last beat and lands low.

    Ask twice and you get the same object back. Two references pointing at one lifetime.

## Line 6 — Everyone can reach it (Frame 6)

**Time:** 51.5 – 62.5s (guide)
**Delivery:** Quieter than the anatomy frames. This is the first half of the accusation and it is a
fact about signatures, not a opinion about taste. Give "never shows in a signature" real weight,
then let "A global, with a good name" land with the dryest possible tone — the smallest smirk in
the film is allowed here and nowhere else.

    Any file can call the class directly, so the dependency never shows in a signature. A global, with a good name.

## Line 7 — It outlives the run (Frame 7)

**Time:** 62.5 – 72.0s (guide)
**Delivery:** Conspiratorial but not dramatic — every engineer in the audience has debugged this at
eleven at night. "sitting there" is the image; let it be plain. End the second sentence slightly
early and leave the pause.

    It outlives the test run too. State left by one case is sitting there in the next one.

## Line 8 — The lifetime, without the static (Frame 8)

**Time:** 72.0 – 82.0s (guide)
**Delivery:** The close, so the calmest voice in the film. Two short imperatives, no build-up, no
crescendo. "drop the static" is the sharpest cut; "declare the dependency" is where the film ends,
and it should sound like someone pointing at a signature and shrugging.

    Keep the one instance, drop the static. Let the container own the lifetime and the caller declare the dependency.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban (series § 6):** zero occurrences. No "it's not X, it's Y" and no "not
  because X — because Y" anywhere, including the hook. Every claim is stated directly: line 2 says
  what it *is*, line 8 says what to *do*. Nothing is rationed because nothing was spent.
- **Em-dash ban on short copy (series § 6):** zero em-dashes in narration, and therefore zero in
  the captions generated from it. Zero in on-screen strings too (see `STORYBOARD.md`). The middle
  dot `·` is used on screen instead, never in speech.
- **Triad cap (series § 6):** exactly one three-item enumeration, in line 3 (caller / static holder
  / instance) — spent on the anatomy, which is the frame the grammar exists for. Line 2 was
  rewritten from a three-clause list into three separate sentences so that no second triad sits
  next to it. Line 6's and line 7's structures are two-part. Nothing has two lists in a row.
- **No beginner framing (series § 1):** never "what is a Singleton". Line 1 names the problem in
  terms of code the viewer has written; the audience is assumed fluent.
- **No manufactured controversy (series § 1):** the accusation is stated as mechanics — reach
  without declaration (line 6) and state that outlives a run (line 7). Nothing calls the pattern
  bad, and no line implies the viewer was wrong to use it.
- **Order independence (series § 2):** the first two lines (16 words) re-establish the pattern's
  problem before any claim. Zero references to other parts, no "as we saw", no "next time". No
  sibling pattern is named, so § 2's one-boundary allowance goes unspent; the DI container carries
  the boundary without borrowing authority from part 1 or 2.
- **Customer language (series § 6):** dependency, signature, lifetime, global, instance,
  container. No forbidden phrase appears ("simply", "journey", "unlock", "delve", "let's break
  this down", "think of it as", "in today's fast-paced world").
- **Names and numbers checkable (series § 6):** no statistics, no benchmarks, no versions, no
  invented library APIs. `Config`, `Checkout`, `getInstance`, `connection pool` are ordinary
  reviewer-style names; the only numerals on screen are code values (`retries = 7`), not claims
  about the world.
- **No mnemonics, no invented terminology (series § 6):** none, and none teased.
- **Silent frames:** none — all eight frames carry narration, so `SCRIPT.md` and `STORYBOARD.md`
  map 1:1 on `Frame N`.
