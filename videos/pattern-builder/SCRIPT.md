# SCRIPT — pattern-builder (EN master, backend-patterns part 6)

**Voice:** `af_heart` (Kokoro-82M, local, speed 0.74) — the `backend-patterns` campaign's
pinned switch away from `am_michael` (series bible §7). Signed out of HeyGen
(`npx hyperframes auth status`: not signed in, non-interactive), and `.agents/design.md`
carries `voice_id: ""`, so ElevenLabs is unusable; Kokoro is the provider this part runs
on, and it is the pinned one, not a substitution.

**Voice settings:** Kokoro defaults at `--speed 0.74`.

**Voice direction:** One engineer explaining a shape to another at the same whiteboard.
Flat and unhurried on the claims, the smallest lift of amusement on "one overload per
combination". No announcement of lessons, never "let's break this down". The line that
lands the payoff ("build() checks the invariants once") is delivered quieter than the one
before it, not louder.

**Budget:** 152 spoken words / 8 lines. At the campaign's ~2.0 words per finished second
that is ~76s; the calibrated rate from the sibling film `videos/osi-layers-1-sideways` is
1.93 words per finished second at the same engine and speed, which projects ~79s. Both
inside the brief's 75-80s against a 90s ceiling. Real durations come from `studio cues` /
`sync-durations` timestamps and win.

---

## Line 1 — The overload pile (Frame 1)

**Time:** 0.0 – 9.3s (estimate; real VO wins)
**Delivery:** Dry, factual. "stop scaling" is the claim, said once and flatly. The second
sentence is a count of someone else's mess, not a complaint.

    A builder exists because constructors stop scaling. Five fields, three optional, and an overload for every combination.

## Line 2 — The half-valid object (Frame 2)

**Time:** 9.3 – 20.7s
**Delivery:** Slightly quicker, this is the familiar shame. Land "valid" last and stop; the
two clauses are the whole problem statement.

    Drop the overloads and callers assign fields afterwards, in an order only the caller remembers. The object is live before it is valid.

## Line 3 — The chain (Frame 3)

**Time:** 20.7 – 29.5s
**Delivery:** Matter of fact, this is the shape. "the same builder" is the mechanism, so it
gets the clearest stress in the line.

    So construction moves to a builder. Each call takes one piece and hands back the same builder.

## Line 4 — Accumulation (Frame 4)

**Time:** 29.5 – 38.3s
**Delivery:** The hinge of the film. Slow down. "Nothing is an order yet" is said almost as
an reassurance; "cannot touch" lands hard and clean.

    Nothing is an order yet. Each call adds one piece to private state the caller cannot touch.

## Line 5 — build() checks once (Frame 5)

**Time:** 38.3 – 46.6s
**Delivery:** Quietest two sentences in the film. "once" is the payload. The second sentence
is a statement of fact about a thrown error, delivered without drama.

    Then build() checks the invariants once. Missing pieces, bad totals, it throws before an order exists.

## Line 6 — Three chambers (Frame 6)

**Time:** 46.6 – 60.1s
**Delivery:** Name the anatomy in the order the diagram shows it, evenly, no crescendo. The
last sentence is the boundary against the sibling pattern: brisk, throwaway, one clause —
do not sell it, and do not lean on any other episode for authority.

    Three chambers, one dependency. The caller chains, the builder holds parts, the product appears only at the end. A factory picks which type; this picks none.

## Line 7 — Handed onward (Frame 7)

**Time:** 60.1 – 69.4s
**Delivery:** The turn to misuse, so a touch drier. "a different order" is the consequence
and gets the emphasis. The final clause is the fix, said plainly.

    Hand a mutable builder onward and the next holder adds a line, then builds a different order. Pass the finished product instead.

## Line 8 — Ceremony (Frame 8)

**Time:** 69.4 – 78.7s
**Delivery:** The line the viewer screenshots. Flat, short, and then silence: "Call the
constructor once. Hand over a finished order."

    And three mandatory fields need no builder at all. Call the constructor once, hand over a finished order.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban (bible §6):** no "it's not X, it's Y" and no "not because X —
  because Y" anywhere in the nine lines. Claims are stated directly ("A builder exists
  because constructors stop scaling", "three mandatory fields need no builder at all").
- **Em-dash ban on short copy:** none in narration and none planned in on-screen text or
  captions. Ellipsis in the F1 code comment is the reviewer's `…`, not a dash.
- **Triad cap:** exactly one three-item list, Frame 6 ("The caller chains, the builder
  holds parts, the product appears only at the end"). Frame 2 and Frame 5 carry two-item
  lists; Frame 1 carries two numbers.
- **Order independence (bible §2):** Lines 1-2 re-establish this pattern's problem in 18
  then 22 words before any claim is made. Zero references to other parts: no "as we saw",
  no part numbers, no running gag. Factory is named once, in Frame 6, only to mark the
  boundary, with no appeal to another episode.
- **No beginner framing:** never "what is a builder?"; the viewer is assumed to have
  written CRUD and met a long constructor.
- **No mnemonics, no invented terminology, no invented numbers:** the only figure on screen
  is `5 fields / 3 optional`, which is this part's own worked example (`Order`) and is used
  consistently in F1, F2, F4 and F8. No statistics, no benchmarks, no library versions.
- **Customer language used:** ceremony (F8), invariant(s) (F5), dependency (F6), seam (F6
  on-screen), leaks (F7 on-screen), tradeoffs (not needed, not forced).
- **Forbidden phrases absent:** "in today's fast-paced world", "unlock", "delve",
  "journey", "simply put", "let's break this down", "think of it as", any lesson
  announcement.
- **Code correctness:** all three fragments were read as TypeScript before being written
  into frames. `Order` overloads `(c, l, s)` in F1 and the fixed call `new Order(c, l, s)`
  in F8 are the same three-parameter signature, so the close resolves the open.
