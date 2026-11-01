# SCRIPT — pattern-observer (EN master)

**Voice:** af_heart (Kokoro-82M, local, speed 0.74 — signed out of HeyGen, and `.agents/design.md`
carries no ElevenLabs `voice_id`; `af_heart` is this campaign's chosen switch per
`writing/backend-patterns/series-bible.md` section 7)
**Voice settings:** default (local engine), speed 0.74
**Voice direction:** One engineer explaining a shape they have both used and been burned by. Flat
and unhurried on the mechanics, the smallest lift of amusement on "three listeners", absolutely no
classroom warmth. The two cost lines ("The tradeoff is paid in tracing", "The second cost leaks")
land quieter than the mechanism lines, not louder. The last line is a rule being handed over, not a
conclusion being celebrated.

**Budget:** 164 spoken words / 7 lines. The first pass of this film measured **2.15 words per
finished second** on `af_heart` at speed 0.74 (153 words produced 71.3s of VO), which is faster than
the campaign's planning rate of ~2.0 w/s; lines 5 and 6 were lengthened by 11 words to bring the cut
inside the brief's 75-80s window instead of padding it with silence. Real durations come from
`studio cues` timestamps and win.

---

## Line 1 — The sender grows (Frame 1)

**Time:** 0.00 – 10.40s (estimated; real VO wins)
**Delivery:** Matter of fact, like describing any Tuesday. "three listeners" gets the only
emphasis in the line. The second sentence is about the viewer's own code, delivered without
smugness.

    An order shipped, and three listeners want to know. Calling them directly means each new listener edits the sender.

## Line 2 — The subject keeps a list (Frame 2)

**Time:** 10.40 – 20.80s
**Delivery:** The naming moment, said plainly. Slightly slower on "into a list" because that is
the object the rest of the film is built on.

    Observer moves the knowing into a list. The subject holds the listeners and calls each one when its state changes.

## Line 3 — The fan-out (Frame 3)

**Time:** 20.80 – 30.60s
**Delivery:** The claim of the part. Keep it level; the conviction is in the precision, not in
volume. Land "never names" and stop.

    A listener is one method behind an interface. The subject notifies its list without naming who is on it.

## Line 4 — Two methods (Frame 4)

**Time:** 30.60 – 42.50s
**Delivery:** Reading code aloud to a colleague. No drama on "Two methods carry it". Give
"returns the way to undo it" the same weight as everything else, because Frame 7 collects on it.

    Two methods carry it. Subscribe pushes a handler and returns the way to undo it. Notify walks the list and calls each one.

## Line 5 — The lost trace (Frame 5)

**Time:** 42.50 – 52.70s (real VO wins)
**Delivery:** Quieter than line 4. This is a cost being admitted, not a complaint being performed.
"or how many are still attached" is the smallest phrase in the film.

    The tradeoff is paid in tracing. A stack full of handlers says nothing about who fired, or how many are still attached.

## Line 6 — The leak (Frame 6)

**Time:** 52.70 – 70.80s
**Delivery:** The memorable frame, so let it breathe. Four sentences, four separate beats, with a
real gap before "The list grows". Never say "leaks" like a warning label; say it like a fact about
Tuesday's on-call rotation.

    The second cost leaks. A listener added on mount and never removed keeps its subject alive after its view is gone. Each mount registers again, and the earlier entry stays. The list grows, and its entries point at nothing.

## Line 7 — The missing half (Frame 7)

**Time:** 68.40 – 79.30s
**Delivery:** The rule, handed over. Flat and final. No crescendo, no sign-off, no "and that's
Observer".

    The tell is the missing half. Subscribe hands back a detach, and the scope that subscribed runs it on teardown.

---

## Constraint audit (run against this script before any TTS is spent)

- **Contrast-reveal ban:** zero occurrences, including the hook. No "it's not X, it's Y", no
  "not because X — because Y".
- **Em-dash ban:** none in any spoken line and none in any on-screen string.
- **Triad cap:** no spoken three-item list. F1's three listeners is a count; the three tag names
  exist only on screen (one triad in the part, never two in a row).
- **Order independence:** line 1 re-establishes the problem in 20 words before any claim, names no
  other pattern, and presupposes no earlier part. No "as we saw", no "part 5", no running gag.
- **Checkable claims:** no numeral appears in any spoken line. Every identifier
  (`subscribe`, `notify`, `handler`, `detach`, `mount`, `teardown`) is defined by the code on
  F4/F7. No memory figure, percentage, or benchmark is spoken or drawn.
- **No beginner framing:** nothing asks or answers "what is the Observer pattern"; line 1 assumes
  the viewer has written the direct-call version, line 3 states the mechanism's price, not a
  definition.
- **AI-tell blacklist (shared with `copywriting`):** no "simply put", "let's break this down",
  "think of it as", "unlock", "delve", "journey", "in today's fast-paced world", no lesson
  announcement.
- **Verbatim-hook rule:** the hook is the campaign's neutral opening (problem, then mechanism),
  not an invented contrarian take — per `series-bible.md` section 1.
