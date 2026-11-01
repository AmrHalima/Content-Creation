# SCRIPT — repository-pattern (English master)

**Voice:** am_michael (Kokoro-82M, local — `npx hyperframes auth status` reports not signed in
to HeyGen, and `.agents/design.md` carries no ElevenLabs `voice_id`, so the free-tier 402 wall
makes Kokoro the only honest engine here. Provider pinned in `BRIEF.md`, not fallen back into.)
**Voice settings:** default (local engine), `--speed 0.74`
**Voice direction:** A senior engineer at a whiteboard who has shipped this and has also seen it
go wrong. Flat and unhurried on the mechanics; the smallest lift of dry amusement on "three
layers wearing one name". Never a lecturer, never "let's break this down", never "what is a
repository". The reversal line (Frame 3) is said **quieter** than the ones around it — the
inversion is the quiet centre of the film. The last line is stated at the same temperature as the
first: this is a tradeoff, not a verdict.

**Budget:** 148 spoken words / 7 lines. At the measured Kokoro rate from
`videos/osi-layers-1-sideways` (1.93 words per finished second) that is **~76.7s** against a
75–80s target and a 90s hard ceiling. `videos/sdlc` measured 2.18 w/s, which would land ~68s.
Real TTS durations win; `sync-durations` writes them back into `STORYBOARD.md` and every Scene
window gets re-paced against them.

---

## Line 1 — Three layers wearing one name (Frame 1)

**Time:** 0.00 – 11.9s (est.)
**Delivery:** Recognition, not accusation. The list is spoken evenly, three equal weights, and
the claim after it lands slightly slower. "one name" is the last word of the beat — let it sit.

    A service method that builds its own query, opens its own session, and maps its own rows is three layers wearing one name.

## Line 2 — The pattern splits that (Frame 2)

**Time:** 11.9 – 23.3s (est.)
**Delivery:** Plain and administrative. Three short statements, one per chamber, no build-up.
"The consumer sees only the contract" is the one that makes the pattern worth having; give it the
same weight as the other two and let the viewer notice.

    The pattern splits that. The contract is written in domain language. The implementation owns the database. The consumer sees only the contract.

## Line 3 — Watch the dependency (Frame 3)

**Time:** 23.3 – 33.7s (est.)
**Delivery:** The quietest line in the film. "Watch the dependency" is an instruction said at a
normal volume, twice as slow in feel. The clause after it is the whole pattern; deliver it as a
fact you have checked, and drop pitch on "names a table".

    Watch the dependency. The implementation answers to a contract the domain owns, so nothing in the domain names a table.

## Line 4 — The contract is two lines long (Frame 4)

**Time:** 33.7 – 44.6s (est.)
**Delivery:** Read the two signatures the way you would read them off a screen to a colleague —
slightly clipped, no ceremony. The second sentence is a piece of information, not a punchline.

    Find an order by id. Save an order. Every connection and dialect detail lives on the far side of that line.

## Line 5 — The seam goes in the wrong place (Frame 5)

**Time:** 44.6 – 56.0s (est.)
**Delivery:** This is the first failure, so it gets the film's only wry beat. "quietly becomes"
carries the dryness — a small lift, no wink at the camera. "one repository per table" lands flat,
as a description of what the viewer has actually shipped.

    Put the seam on a table instead of an aggregate, and the schema quietly becomes your domain model, one repository per table.

## Line 6 — The caller is back inside (Frame 6)

**Time:** 56.0 – 65.8s (est.)
**Delivery:** Faster and harder than Frame 5 — two named members, then the consequence. "just
further away" is the point of the whole frame: say it slowly, and stop.

    Return a query object, or a commit call, and the caller is back inside the database, just further away.

## Line 7 — What it costs, and when it pays (Frame 7)

**Time:** 65.8 – 76.7s (est.)
**Delivery:** The exhale. Even temperature, no crescendo, no slogan. The condition first, then
the price, with a real gap between the sentences. "keep honest" ends the film on a plain verb.

    It pays when storage changes apart from the use case. The price is mapping code you write twice and keep honest.

---

## Constraint audit (run against this script before any TTS was spent)

- **Contrast-reveal ban ("it's not X, it's Y"):** none anywhere. `.agents/product-marketing.md`
  Learnings records that every downstream artifact drifts into this construction, so it is banned
  outright here, not rationed — there is no hook occurrence either. Frame 3 states the rule
  positively ("answers to a contract the domain owns"); Frame 6's "just further away" is an
  addition, not a negation.
- **Em-dash ban on short copy:** none. Not in narration, not in on-screen text.
- **Triad cap (at most one list of three):** exactly one — Line 1 ("builds its own query, opens
  its own session, and maps its own rows"), and it is load-bearing because the count *is* the
  claim ("three layers"). Line 2's three role sentences are anaphora across separate sentences,
  not a comma list.
- **Negation lists / trailing pile-ons:** none. The single stated absence is Line 3's "nothing in
  the domain names a table", which is the pattern's definition rather than a marketing negative.
- **Self-answered questions and colon reveals:** none. No on-screen or spoken "The result?"
- **Stock openers:** none. No "In today's fast-paced world", no "Whether you're X or Y", no
  "unlock / seamless / robust / powerful / streamline / optimize".
- **Beginner framing:** the film never asks or answers "what is a repository?". It assumes the
  viewer has written CRUD and goes straight to session handling, dialects, aggregates, query
  objects and mapping code — the mechanics and the tradeoffs, named.
- **Neutral angle honored (user's explicit choice):** no thesis is invented to make the explainer
  "opinionated". The spine is problem → anatomy → code sketch → the two failures → the honest
  price. The single sharpest idea (the dependency direction, Frame 3) is presented as mechanics.
- **Honesty bar:** Line 7 states the cost, not only the benefit, and `capture/extracted/
  visible-text.txt` § B7 is where both halves trace to. Nothing on screen is a number the source
  did not supply — there are no invented figures, benchmarks or logos in this film.
- **Claims traceable to the source:** three layers (B1) / contract-implementation-consumer (B2) /
  dependency inversion (B3) / two-method contract (B5) / aggregate-not-table seam (B4) / query
  object and commit-call leaks (B6) / pays-when and the twice-written mapping (B7).
