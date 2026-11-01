# SCRIPT — pattern-cqrs (EN master, backend-patterns part 9)

**Voice:** `af_heart` (Kokoro-82M, local, speed 0.74 — the campaign's chosen switch for
`backend-patterns`, overriding `.agents/design.md`'s `voices.en = am_michael` for this campaign
only). `npx hyperframes auth status` reports *not signed in to HeyGen*, so the pipeline runs on
local engines, which is what `BRIEF.md` wants. ElevenLabs stays unusable here (`voice_id: ""` in
the house spec, free-tier keys reject library voices with HTTP 402). **No substitution.**

**Voice settings:** Kokoro default stability; `--speed 0.74` (the campaign lock).

**Voice direction:** One engineer explaining the split to another at a whiteboard, dry and
precise. No lecture register, no announced lesson, never "let's break this down". The claim
frames (F2, F3) land flat and fast; the honesty beats (F6, F7) land slower and quieter than the
ones before them; F8 is delivered like naming a colleague's mistake, without smugness.

**Budget:** 150 spoken words / 8 lines. At ~2.0 words per finished second that is ~75s of
narration against a 78s target and a 90s hard ceiling. Calibration: `videos/repository-pattern`
(part 1) measured the same rate at 148 words. Real durations come from `studio cues` timestamps
and win.

**The acronym is never spoken.** `CQRS` is the on-screen wordmark in Frame 2; narration says
"the seam", "the split", "the command side", "the query side" (house precedent: `videos/sdlc`
never says "SDLC" either). See `BRIEF.md` ## Customizations.

---

## Line 1 — One class, two jobs (Frame 1)

**Time:** 0.00 – 9.5s (estimate; real VO wins)
**Delivery:** Plain statement of a fact about the viewer's own code. The two short sentences
after it are the pull: let them land as opposites, same speed, no drama.

    One class answers the writes and serves the reads. The rules pull one way. The screens pull the other.

## Line 2 — The seam, and the name (Frame 2)

**Time:** 9.5 – 19.0s
**Delivery:** The turn of the film, so slightly quieter than line 1. Land "its own shape" and
leave a gap. The last two sentences are a definition read twice as fast as a definition usually
gets.

    Split the model along that seam, and each side takes its own shape. Commands change state. Queries answer questions.

## Line 3 — Two chambers, two model shapes (Frame 3)

**Time:** 19.0 – 28.0s
**Delivery:** Matter of fact, this is anatomy. "normalised" and "flat" are the two words doing
the work; give each a beat.

    The write side keeps normalised entities. The read side ships flat rows, joined and pre-summed for the screen.

## Line 4 — The command side (Frame 4)

**Time:** 28.0 – 36.5s
**Delivery:** Deadpan. The second sentence is a concrete rejection, so let it land like a
checksum, not a warning.

    A command handler checks the invariants, then mutates. An order with no lines never reaches the database.

## Line 5 — The query side (Frame 5)

**Time:** 36.5 – 45.0s
**Delivery:** Same shape as line 4 on purpose, opposite freedom. Small lift of amusement on
"freely".

    A query handler reads a shape built for the screen and changes nothing. It can denormalise freely.

## Line 6 — What is optional (Frame 6)

**Time:** 45.0 – 54.5s
**Delivery:** The most important sentence in the film for accuracy, so slow down. The three
"no" items are one list, said evenly, none of them punched. "optional" gets the last beat and a
stop.

    Both halves can share one database. No event store, no message bus, no second store. That step is optional.

## Line 7 — The cost being priced (Frame 7)

**Time:** 54.5 – 64.5s
**Delivery:** Honest, flat, no apology. "by a moment" is the whole caveat; keep it small. The
final clause is the price being named out loud.

    One side reads what the other wrote, and the copy can lag by a moment. That gap is the price.

## Line 8 — Where it goes wrong (Frame 8)

**Time:** 64.5 – 75.0s
**Delivery:** Naming a mistake without smugness. Two images, no bridge between them: the first
ends on "asked", the second lands the bug and simply stops.

    Two stores and an event stream on a workload that never asked. A page that writes, reads back, and shows nothing.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban (bible § 6):** zero occurrences of "it's not X, it's Y" or "not because
  X — because Y", including the hook, though the campaign allows one there. Every claim is
  stated directly; the negations in lines 6 and 8 are plain statements of what is absent, not a
  reveal construction.
- **Em-dash ban on short copy:** none in narration, none in on-screen text or captions.
- **Triad cap:** exactly one three-item list in the film, line 6 ("no event store, no message
  bus, no second store"). No second list anywhere, and no two in a row.
- **No mnemonics, no invented terminology.** "Read model", "command handler", "query handler",
  "invariant", "denormalise" are the industry's words.
- **Order independence (bible § 2):** the pattern's problem is re-established in line 1 (19
  words) before any claim. No "as we saw", no part numbers, no sibling pattern borrowed for
  authority. Event sourcing is named once, in line 6, only to mark that it is not required.
- **Accuracy bars (this part's specific brief):** line 6 denies the three false requirements
  explicitly (event sourcing, a message bus, a second store). Line 7 says the lag plainly and
  names it as the price. Nothing anywhere claims a bus or an event store is part of the pattern,
  and no frame draws one inside the split.
- **No invented statistics, no unsourced benchmarks, no fake library versions.** The only
  numerals on screen are code identifiers and the campaign's own part number.
- **Customer language** from `.agents/product-marketing.md`: seam, invariant, denormalise,
  coupling (shown, not named), ceremony (shown, not named). Forbidden phrases
  ("simply put", "unlock", "delve", "journey", "let's break this down", "think of it as")
  appear nowhere.
- **Visible text is never a narration sentence** — labels are 1-3 words or real code; the
  caption track already prints the spoken line.
