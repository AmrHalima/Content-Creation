---
format: 1080x1920
duration: 76s
message: "A circuit breaker fails fast and gives a dying dependency room to recover instead of piling retries on it: closed, open, half-open, with a fallback."
arc: problem → the seam → the three states → configuration → the fallback → the code shape → the misuse tell
audience: backend developers who have written CRUD and want the mechanics and the misuse named precisely
mode: autonomous
music: none
captions: en
series: backend-patterns
part: 10 of 10
---

# STORYBOARD — pattern-circuit-breaker (backend-patterns, part 10 of 10)

English master, portrait 1080x1920, ~76s, ceiling 90s. Frame numbering is canonical for this
part: `SCRIPT.md`'s `Frame N` labels map 1:1 onto `Frame N` here, in order. Spine is the
campaign's uniform one (`writing/backend-patterns/series-bible.md` § 1): what problem it solves
-> the anatomy -> the code shape -> where it goes wrong, ending on the misuse tell.

## Order-independence (series rule § 2 — this part must stand alone)

**Check A — does any line presuppose another part?** No. F1 opens on the object (a call waiting
on its timeout), not on a prior claim. The only sibling patterns named are **timeout** and
**retry**, and each gets one clause to mark a boundary (F7), never to borrow authority. No
"as we saw", no "part N", no running gag. Bulkhead is deliberately absent: naming a fourth tool
would turn the boundary contrast into an enumeration.
**Problem re-established in the first two lines:** 8 + 9 = 17 words, inside the § 2 band of
10-18.

**Check B — swap two claims, is the story still true?**
- **Swap F4 ↔ F5** (configuration ↔ fallback). PASS. They are independent properties of the
  same machine; neither depends on the other's order, and the fallback does not need the
  threshold named first.
- **Swap F3 ↔ F4.** FAIL, kept. F4's whole line refers to "threshold and reset timeout" as the
  things F3 just walked through; naming them before they have been seen would be jargon.
- **Move F7 earlier.** FAIL, kept. The misuse tell only lands after the viewer knows what the
  breaker was for.

Conclusion: the order is load-bearing at F2 → F3 → F4 (the anatomy in sequence) and free at
F4/F5. No swap makes a false claim true.

## Grammar decisions (bible § 4, and where this part extends it)

- **Grammar R is the spine** and appears whenever narration names the pattern: **F1** (caller /
  the missing seam / dependency), **F2** (the same graph with the breaker seated in the seam,
  ember = live), **F7** (the two stacked shapes). The three chambers are caller (top), breaker
  seam (middle, dark chamber), remote dependency (bottom), dependency arrow pointing down.
- **Grammar D — the three-state diagram (F3).** Bible § 5 permits parts 9 and 10 to show a state
  diagram instead of a third code chamber. This is the campaign's one genuinely stateful
  pattern, so F3 is the load-bearing frame: CLOSED -> OPEN (configured threshold crossed) ->
  HALF-OPEN (one probe allowed) -> back to CLOSED or OPEN, each transition labelled. Same token
  palette as every other frame.
- **Grammar C — one code chamber only (F6), 6 lines.** The other code-shaped idea (what the
  guard does) is folded into F6's own build rather than a second chamber, keeping the "once or
  twice per part" cap at once.
- **Grammar X — the before/after split (F7), used once, at the end.** Stacked vertically (top =
  the wrong shape, below = the breaker short-circuiting it), per the bible's portrait default.
  **No side-by-side override is taken by this part** — the two shapes here are a sequence of
  attempts versus one decision, which reads downward.
- **Ember = state.** `.agents/design.md`'s `active` token (#FFA946) marks the breaker's live
  state; it is the one element per frame that is "live in this beat". Ember is never decoration
  here and never more than one element per frame.

## Real durations after Step 3.1 (measured by `studio cues` from the Kokoro VO, 153 words / 76.16s)

| Frame | Absolute window | Duration | VO words |
|---|---|---|---|
| F1 | 0.000 – 4.288 | 4.288s | 8 |
| F2 | 4.288 – 8.213 | 3.925s | 9 |
| F3 | 8.213 – 28.864 | 20.651s | 40 |
| F4 | 28.864 – 40.171 | 11.307s | 20 |
| F5 | 40.171 – 50.646 | 10.475s | 22 |
| F6 | 50.646 – 61.825 | 11.179s | 26 |
| F7 | 61.825 – 76.161 | 14.336s | 28 |

Scene windows below are **frame-relative** and cite the measured word onsets from
`audio_meta.json` (e.g. F3 `open:` lands at 7.68 inside the frame, 15.89 absolute).

## Video direction

The whole part shares one look and one motion grammar. Per-frame Scene lines carry only the
delta.

- **Palette system** (from `frame.md` § Colors, brand-overridden by `design.md`; never invented):
  cream `#FFFFEB` is the ground, ink `#1A1A1A` is type and the dark chamber fill, warm-navy
  `#181715`/`#252320` only inside the code chamber, muted `#8A8A80` for anything that is not the
  live beat. **Ember `#FFA946` is the state token** — `design.md` reserves `active` for
  live/active, so in this part it marks exactly one thing per frame: the breaker's current state
  (its readout, or the live transition row's edge). Never decoration, never two in one frame,
  never a headline. **Lavender `#F0D7FF`** appears twice in the film and nowhere else: the
  `guess` marker in F4 and the `fallback` branch chip in F5, because `design.md` makes it the
  highlighted-panel/accent fill and those are the two "this is the choice" moments. Forest
  `#034F46` is an inner-panel fill on dark chambers only. Fixed syntax colours (keyword ember,
  string teal `#5DB8A6`, number amber `#E8A55A`) exist only inside the code chamber.
- **Motion grammar + reveal model**: one camera, one grid, hard cuts and 0.5s crossfades only;
  no rotation anywhere (`frame.md`: flatness is load-bearing — depth comes from fill alternation
  and the hairline border, never `rotateX/Y/Z`). Every entrance is a `fromTo` long-tail settle
  (`power3`, `expo.out` on a fast arrival) — **no overshoot in this part**, which is why
  `comparison-split` was rejected for F7: its signature move is mirrored `rotateY` book-open
  tilts, the pack forbids the tilt, and Grammar X wants a vertical stack anyway. Reveals are
  **paced to the measured VO across the back ~50%** of each frame; nothing front-loads; at t=0
  only what the line is saying at that moment exists. During a hold the only aliveness allowed is
  **subtle jitter** (`sine-wave-loop`, low amplitude, finite) on one held element. SVG arrows are
  built with `svg-path-draw` (finite, un-draw only as a deliberate reveal), state and label flips
  with `discrete-text-sequence` (time proxy + reverse search — **TextPlugin is not shipped**).
  Exit motion exists only in F7; every other frame's exit is the injected `transition_in`.
- **Rhythm / held-frame allocation**: F3 (the state machine) is the energy peak and the only
  frame allowed to keep developing for 20s. **F2 is the deliberate quiet beat** — three chambers
  seat, one readout lights, and the frame holds; the stillness makes the seam read as a fact
  before the machine gets complicated. F4 is the second held read (two settings, then still). F1,
  F5, F6, F7 keep revealing to the VO the whole way through.
- **Caption keep-out**: bottom ~17% is the pill's. All F1–F7 content is planned into the top
  ~83% — nothing load-bearing below **y = 1594**; a centered hero sits at y ≈ 0.42 × 1920 ≈ 806.
  Background fields (paper, hairline grid) are exempt and stay full-bleed.
- **Density / framing variety** (never the same framing twice in a row): F1 asymmetric 70/30
  (one long arrow + a queue column) · F2 stacked tri-chamber, centered spine · F3 anchor chamber
  + transition rail, stacked 40/60 bands · F4 full-width strip of two dial rows · F5
  rule-of-thirds with a right-hand branch rail · F6 code chamber framed in cream, near
  full-bleed · F7 two stacked bands (Grammar X).
- **Negative list — never appears**: the "it's not X, it's Y" construction anywhere downstream of
  the hook (zero occurrences in this part); em dashes in on-screen text; a number presented as a
  universal threshold or a library default (both config values stay unnumbered and are labelled
  `configured`); a real library name or logo (nothing here is attributed to resilience4j,
  Polly, hystrix or any other project); invented statistics, counts presented as data, or
  benchmarks — retry/pip quantities are drawing devices, never claims; browser chrome, nav bars,
  cursors, device mocks or stock filler (nothing was captured; every visual is invented);
  purple-blue "AI" gradient bokeh; gradient fills or text shadows; lazy breathing; a back-half
  slow pan or push; screensaver motion (everything floating independently); the slideshow
  failure mode (front-load by ~25% then freeze); a narration sentence printed as on-screen text —
  captions already do that, so the screen carries labels, state names and code only.
- **On-screen type is the mechanism, not the narration's echo.** The words on screen are state
  names (`CLOSED`, `OPEN`, `HALF-OPEN`), actor names (`caller`, `breaker`, `gateway.charge`),
  transition causes (`threshold · configured`, `reset timeout elapsed`, `probe succeeded`,
  `probe failed`), setting identifiers (`failureThreshold`, `resetTimeout`) and code. The line is
  never compressed and printed.

## Frame 1 — The waiting

- scene: a call hangs on its timeout while more calls queue behind it, and the queue is the damage
- duration: 4.288s
- transition_in: cut
- status: animated
- src: compositions/frames/01-the-waiting.html
- type: pain_point
- persuasion: Concretization (an abstract cascade becomes a visible queue) + progressive disclosure
- beat: recognition and unease
- blueprint: grid-card-assemble (Adapt)
- voiceover: "A dependency degrades, and every call still waits."
- sfx: none

Adapt: keep the staggered self-assembly into a vertical stack and the hold; the tiles become
queued calls stacking downward behind one hanging call, and the count is capped at what portrait
can hold. No numbers are claimed, so the queue is a shape, not a statistic.

narrativeRole: Re-establishes the problem from scratch, in the viewer's own terms, before any
claim is made.
keyMessage: "A slow dependency is not one slow call; it is every call that waits behind it."

- focal: the one hanging call on its timeout bar
- roles: caller chip = foreground subject (upper-left) · timeout arrow + bar = foreground subject's
  path · dependency chip = supporting, bottom of the arrow · queue column (three pending call chips)
  = supporting, right third · paper field + hairline grid = background, full-bleed, unlit ·
  `TIMEOUT` mono readout = supporting chrome

Scene 1 (0.0–0.82s): full-bleed cream field, hairline grid fades up; `caller` chip settles
upper-left via a `fromTo` long-tail settle (`power3`) on "dependency" (0.20). Nothing else exists.
Asymmetric 70/30, 3 depth layers.
Scene 2 (0.82–2.30s): on "degrades" (0.82) the `gateway.charge` dependency chip seats at the lower
right of the column and the connector between them **self-draws** downward (`svg-path-draw`), so
the dependency arrow's direction is established before anything waits on it. The line is thin ink
at 32% until it is lit.
Scene 3 (2.30–3.50s): on "every call" (2.30) three pending call chips **stagger** into the right
column one per spoken word-beat (`center-outward-expansion`, index-derived cadence, capped well
under the ~0.5s arrival limit so they read as a queue, not three slides); the lead call's timeout
bar starts filling along the connector.
Scene 4 (3.50–4.288s): on "waits" (3.50) the `TIMEOUT` mono readout appears beside the bar and the
bar keeps creeping toward its bound; the frame is still incomplete at the cut — the wait is the
point, so the bar deliberately does not finish before F2's crossfade. No camera move, no breathing.

## Frame 2 — The seam

- scene: the same call graph, and a breaker chamber seats itself between caller and dependency
- duration: 3.925s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-the-seam.html
- type: product_intro
- persuasion: Frame-then-fill (state the shape, then populate it)
- beat: clarity
- blueprint: grid-card-assemble (Adapt)
- voiceover: "A circuit breaker wraps the calls and fails fast."
- sfx: none

Adapt: the assembly is three chambers seating one at a time (caller, then the dark seam chamber,
then the dependency) with the dependency arrow drawing down through the seam; the signature
stagger is kept, the surface becomes Grammar R.

narrativeRole: Names the protagonist and puts it in the right place in the graph — between the
caller and the dependency, on the seam.
keyMessage: "The breaker is a seam around one dependency's calls, and its job is to fail fast."

- focal: the dark breaker chamber seating itself in the middle of the spine
- roles: breaker chamber (dark, cream 2px edge, `CLOSED` readout) = foreground subject, centred at
  the hero axis · `caller` chip = supporting, top · `gateway.charge` chip = supporting, bottom ·
  two connector arrows (caller→breaker→dependency) = foreground path · `seam` mono label =
  supporting annotation, `data-layout-ignore` · paper field + grid = background, full-bleed

Scene 1 (0.0–1.10s): `caller` chip is already seated up top (it carried over from F1's position) and
`breaker` kicker clears; on "circuit" (0.18) the dark chamber begins its arrival from a hair of
scale, `expo.out`, landing on "breaker" (0.60). It is the frame's only ember moment from here on,
via its readout.
Scene 2 (1.10–2.38s): on "wraps" (1.10) the two connectors **self-draw** (`svg-path-draw`) so the
chamber is visibly *in* the path rather than beside it, and the `seam` mono label draws its hairline
bracket on "the calls" (1.96). Dependency chip is present but muted.
Scene 3 (2.38–3.56s): on "fails fast" (2.74) the `CLOSED` readout lights ember and the top connector
brightens to full ink — one beat, no travel, then **still**. The quiet held read of the part: three
chambers, one lit state, nothing moving for the last ~0.7s.

## Frame 3 — Three states

- scene: the breaker box holds its place at the centre while its state label and colour cycle CLOSED, OPEN, HALF-OPEN, and each transition arrow draws itself with its reason
- duration: 20.651s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-three-states.html
- type: feature_showcase
- persuasion: Demonstration (show the mechanism running) + progressive disclosure
- beat: comprehension
- blueprint: fixed-anchor-cycle (Adapt)
- voiceover: "Closed means calls flow while the breaker counts failures. Cross the configured threshold and it goes open: nothing leaves. After the reset timeout it goes half-open and lets one probe through. Succeed and it closes, fail and it opens again."
- sfx: none

Adapt: keep the signature move exactly — one element pinned while the region around it cycles
through discrete states, with the anchor's stillness carrying the claim. The pinned element is
the breaker chamber; the cycling region is its state label plus state colour plus which arrow is
lit. Change: the cycled surface is a state diagram, and each flip is labelled with its cause.
**The label swap CLOSED → OPEN → HALF-OPEN is the whole video; it is built as the sanctioned
discrete sequence (time proxy + reverse search), never as a text tween.**

narrativeRole: The anatomy. The state machine is the pattern, so this frame is the one the viewer
should be able to redraw from memory.
keyMessage: "Closed counts, open refuses, half-open probes, and the transitions are the whole design."

- focal: the pinned breaker chamber and the state word inside it
- roles: breaker chamber (dark, centred on the hero axis) = foreground subject, **pinned, never
  moves after Scene 1** · state readout `CLOSED/OPEN/HALF-OPEN` = foreground subject's face, the
  film's one ember element and the only thing that changes in place · failure pip rail +
  `threshold · configured` bracket = supporting (left of the chamber) · reset-timeout bar =
  supporting (under the chamber) · caller chip above + `gateway.charge` chip below = supporting
  spine · four transition rows (cause labels) = supporting rail, lower band · paper field + grid =
  background, full-bleed

**State readout is a `discrete-text-sequence` (time proxy + reverse search), never a text tween** —
TextPlugin is not shipped and `tl.set({ text })` no-ops while `check` stays green
(`.agents/product-marketing.md` Learnings, `studio/known-traps.md` #3). The five discrete states,
each cued on its measured word: `0.00 CLOSED` · `7.68 OPEN` · `12.86 HALF-OPEN` · `17.14 CLOSED` ·
`19.48 OPEN`. Each flip is paired with a 1-frame opacity blink on the readout and with exactly one
transition row lighting, so the swap is legible as a state change rather than a text edit. Proof
snapshots (absolute): 10.2 CLOSED · 17.2 OPEN · 22.2 HALF-OPEN · 26.2 CLOSED · 28.4 OPEN.

Scene 1 (0.0–0.86s): chamber is already pinned dead-centre at the hero axis (y ≈ 806) from F2's
landing, `CLOSED` readout ember, and the `caller` / `gateway.charge` spine chips are in place; on
"Closed" (0.12) the failure rail's empty slots and the transition rail's four row shells fade up at
25% ink so the viewer sees the shape of what is about to be walked. Asymmetric stacked bands:
chamber band ~40%, rail band ~60%. Nothing else enters.
Scene 2 (0.86–2.34s): on "calls flow" (0.86) a call pip travels caller → chamber → dependency and a
second follows at 1.40 — the path is alive because the state says it is. Layout unchanged.
Scene 3 (2.34–4.80s): on "counts" (2.82) three pips fill the failure rail, one per beat
(2.82 / 3.40 / 3.90), `power3` settle, no bounce. The rail is the only thing growing.
Scene 4 (4.80–8.20s): on "Cross" (4.80) the `threshold · configured` bracket draws itself
(`svg-path-draw`) around the rail and the fourth pip lands past it (6.22); on "goes" (7.46) →
**readout flips CLOSED → OPEN at 7.68** and row 1 (`closed → open`, `threshold crossed`) steps from
muted to full ink. The label `configured` is the accuracy guard and must be legible.
Scene 5 (8.76–10.60s): on "nothing leaves" (8.76) an outgoing pip stops at the chamber edge and
retracts back up the arrow, and the chamber→dependency connector dims to 20% — the refusal is shown
by the path closing, not by a badge. Held for ~1s; only a subtle jitter on the chamber.
Scene 6 (10.60–13.22s): on "After the reset timeout" (10.60) the reset-timeout bar begins filling
under the chamber and row 2 (`open → half-open`, `reset timeout elapsed`) enters muted; the bar
completes exactly on **the flip to HALF-OPEN at 12.86**, row 2 lights. No number is printed on the
bar — it is a duration, not a value.
Scene 7 (13.66–16.44s): on "one probe" (14.36) a single pip leaves the chamber and travels down the
restored connector (`spring-pop-entrance` in its restrained register for the pip, `power3`
travel) — exactly one, because the state allows exactly one. Row 3 shell (`half-open → closed`)
enters at 16.44.
Scene 8 (16.44–20.651s): on "Succeed" (16.44) row 3 readies; **readout flips HALF-OPEN → CLOSED at
17.14** and row 3 lights; on "fail" (18.60) row 4 (`half-open → open`, `probe failed`) enters and
**readout flips CLOSED → OPEN again at 19.48** with row 4 lighting — the machine's two possible
answers shown one after the other. The last ~1.1s holds still on OPEN with the full rail visible so
the diagram can be read; the injected crossfade is the exit.

## Frame 4 — Configuration

- scene: two labelled settings rail beside the diagram, each named and neither numbered
- duration: 11.307s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-configuration.html
- type: feature_showcase
- persuasion: Signposting + contrast of two options (a tuned value vs a copied one)
- beat: confidence
- blueprint: compose
- voiceover: "Threshold and reset timeout are configuration. Every dependency sets its own; a number copied from another service is a guess."
- sfx: none

narrativeRole: Holds the accuracy bar on screen: the two numbers a team actually tunes, named as
settings, never as universal values, and never attributed to a library.
keyMessage: "The threshold and the reset timeout are per-dependency settings, not constants."

- focal: the two setting rails, `failureThreshold` and `resetTimeout`
- roles: two dark setting rows (identifier + empty rail) = foreground subject, stacked full-width ·
  marker dots on each rail = supporting · `payments` / `search` service chips = supporting ·
  `configured` mono tags = supporting annotation, `data-layout-ignore` · the dashed copy arrow =
  foreground path in the back third · lavender `guess` chip = the frame's accent (its only
  lavender moment, and the frame has **no ember at all**, keeping the state token exclusive to
  F2/F3/F5) · paper field + grid = background, full-bleed

Scene 1 (0.0–1.16s): cream field, hairline grid; on "Threshold" (0.00) the first dark row slides up
into the upper band and its mono identifier `failureThreshold` lands with it — the row is a shell
with an empty rail, so nothing reads as a value yet. Full-width strip framing, 3 depth layers.
Scene 2 (1.16–2.78s): on "reset timeout" (1.16) the second row seats below it, `resetTimeout`; both
rails stay empty. On "configuration" (2.78) the `configured` mono tags draw onto both row ends
together (a hairline bracket each, `svg-path-draw`) — the accuracy guard is on screen before any
comparison is made.
Scene 3 (4.90–7.24s): the line's second sentence starts (4.90) and `payments` / `search` service
chips fade in at the head of each rail; a marker dot arrives on each rail at a visibly different
position (`center-outward-expansion`, two items only) and the row that owns which becomes obvious
without a number. Held ~1s on "own" (6.88).
Scene 4 (7.84–10.92s): on "copied" (8.30) a dashed arrow **self-draws** from the first marker to the
second — the copy is the mistake; on "guess" (10.10) the lavender `guess` chip spring-pops onto the
arrow's midpoint in its restrained register (smooth settle, no overshoot) and the frame holds still
on "a guess." (10.64–10.92). No jitter elsewhere; the last beat is the read.

## Frame 5 — The fallback

- scene: with the breaker open, the call still returns an answer, drawn as the fallback branch
- duration: 10.475s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-the-fallback.html
- type: benefit_highlight
- persuasion: Question→answer pairing + before/after (fast failure alone vs fast failure with an answer)
- beat: practicality
- blueprint: compose
- voiceover: "An open breaker still has to answer, so the guarded call takes a fallback: the last cached value, or an honest unavailable."
- sfx: none

narrativeRole: The payoff that makes failing fast shippable, and the honest cost of omitting it.
keyMessage: "Without a fallback, a breaker only converts a slow failure into a fast one."

- focal: the refused call coming back with an answer instead of a hang
- roles: breaker chamber (dark, `OPEN` readout in ember) = foreground subject, pinned on the spine ·
  `caller` chip above = supporting · `gateway.charge` chip below = supporting, kept but dimmed to
  20% because nothing reaches it · branch rail (right of the chamber) = foreground path ·
  lavender `fallback` chip = the frame's accent · `cached value` + `unavailable` answer chips =
  supporting, two items only · paper field + grid = background, full-bleed

Scene 1 (0.0–1.14s): the spine is already composed (camera pinned), `OPEN` readout lit ember from
F3's landing state; on "open breaker" (0.22) a call pip leaves `caller` and travels down to the
chamber edge. Rule-of-thirds: spine on the left two-thirds, branch rail held in reserve on the
right third.
Scene 2 (1.14–3.06s): on "still has to answer" (1.14–2.52) the pip is refused at the edge and comes
straight back up — the return is fast, so the travel is short and quick (`expo.out`), and the
downward connector to `gateway.charge` sits dark. The dependency is never reached, and the frame
says so with an empty path rather than a badge.
Scene 3 (3.06–5.42s): on "takes" (4.24) the branch rail **self-draws** rightward out of the chamber
and on "fallback" (4.86) the lavender `fallback` chip seats at its head — this is the frame's answer
to "what does the caller get".
Scene 4 (6.14–10.475s): on "last" (6.14) then "cached" (6.72) the `cached value` chip arrives on the
branch; on "honest" (8.70) the second answer chip, `unavailable`, arrives beneath it — two options,
never three. Both branch chips then hold while a pip returns to `caller` (9.26–10.18) so the
frame ends on the caller *having an answer*; subtle jitter on the `fallback` chip only, then still.

## Frame 6 — The code shape

- scene: six lines of TypeScript seat in a dark chamber, the throw-fast guard as the lit token
- duration: 11.179s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-the-code-shape.html
- type: social_proof
- persuasion: Worked example + demonstration
- beat: concreteness
- blueprint: typewriter-reveal (Adapt)
- voiceover: "At the call site it is one wrapper. When the breaker is open the guarded call throws before its timeout, and the catch returns the fallback."
- sfx: none

Adapt: keep the signature move — a line being typed as a human would, line by line, and held.
Change: there is no brand payoff at the end; the typed artifact *is* the payoff, and the caret
retires once the guard line lands. Grammar C caps the fragment at 6 lines, one declaration.
Mono chip names it a shape, not a library, because the API is illustrative.

narrativeRole: The code shape — how small the wrapper is at the call site.
keyMessage: "One wrapper, and the open state throws before the timeout instead of after it."

- focal: the six-line fragment, specifically the guarded call line
- roles: warm-navy code surface (`#181715`, cream@14% hairline, `navy-elev` title bar) = foreground
  subject, near full-bleed inside the cream frame · filename chip `charge.ts` = mono chrome ·
  `shape, not a library` mono note = chrome, `data-layout-ignore` (it is the honesty guard: the API
  name is illustrative, no library is claimed) · six code lines = foreground subject's body · ember
  underline on the guard line = the frame's one ember moment · caret = chrome · paper field =
  background, full-bleed behind the framed panel

Scene 1 (0.0–1.06s): cream field; on "call site" (0.38) the navy panel rises into the frame with its
title bar, empty, `power3`, framed by ~4.2cqw of cream on every side; on "site" (0.68) the
`charge.ts` filename chip seats in the title bar. No code yet — a panel, not a slide.
Scene 2 (1.38–2.48s): on "one wrapper" (1.66–2.02) **line 1 types on** character-by-character behind
a block caret (`discrete-text-sequence`, deterministic; the caret is a static block that steps
line-to-line, never a CSS blink). Muted ink `#8A8A80` for everything that is not load-bearing.
Scene 3 (3.40–4.72s): on "breaker is open" (3.68–4.72) lines 2 and 3 type on in sequence; the
keyword tokens land in ember per `frame.md`'s fixed syntax role and the guarded call's own identifier
stays ink, so the eye reads the shape rather than the colour.
Scene 4 (5.24–8.20s): on "throws" (6.22) the **ember underline draws** beneath the guard line
(`svg-path-draw`, finite, one hand-off) and holds — this is the frame's single ember moment and it
marks exactly the words "before its timeout"; lines 4–5 arrive at 8.56 on "the catch".
Scene 5 (8.56–11.179s): line 6 (`return cachedQuote`) types on across "returns the fallback"
(9.36–10.34); the caret retires (a single fade, not a loop) and the finished fragment holds for the
last ~0.8s so it can be read. Syntax decoration only inside the panel: strings teal `#5DB8A6`,
numbers amber `#E8A55A`, keywords ember — the muted body ink stays `#8A8A80`.

## Frame 7 — Where it goes wrong

- scene: the naive retry-with-backoff shape hammering a dead dependency above, the breaker short-circuiting it below
- duration: 14.336s
- transition_in: crossfade
- status: animated
- src: compositions/frames/07-where-it-goes-wrong.html
- type: branding
- persuasion: Before/after + counterexample (here is when it breaks)
- beat: recognition and resolve
- blueprint: compose
- voiceover: "The usual shape is a timeout with no breaker, so one slow dependency costs every caller its patience. Add retries, and the storm finishes what the outage started."
- sfx: none

narrativeRole: The misuse tell the whole part was built to pay, and the frame the viewer
screenshots. Grammar X, used once, at the end.
keyMessage: "A timeout bounds one call. Retries without a breaker turn an outage into a storm."

- focal: the top band's converging retry bars, then the bottom band's single stopped call
- roles: top dark chamber (`TIMEOUT · NO BREAKER` kicker + three caller rows, each with a long
  hanging bar) = foreground subject · `down` dependency chip = foreground subject's victim ·
  retry segments on each bar = supporting, arriving in a **fixed scripted sequence** (three rows,
  +1 then +1, index-derived — never a random or counted-up statistic) · bottom dark chamber
  (`BREAKER` kicker, one caller row + the seam) = foreground subject of the final beat · ember stop
  marker at the seam = the frame's one ember moment · `fallback` answer chip = supporting · paper
  field + grid = background, full-bleed · both bands stacked vertically per Grammar X

Scene 1 (0.0–1.02s): cream field; on "shape" (0.60) the top chamber rises into the upper band with
its mono kicker `timeout · no breaker` — the tell's name is on screen before the tell is argued.
Two stacked bands, asymmetric 55/45, 3 depth layers.
Scene 2 (1.40–3.30s): on "timeout" (1.52) one long hanging bar draws left-to-right inside the
chamber, and on "no breaker" (2.48–2.78) the kicker's `no` word steps to full ink. The bar is slow
on purpose: it is the thing the viewer already knows.
Scene 3 (3.88–5.84s): on "slow dependency" (4.52) the `down` chip seats at the chamber's lower edge
with a muted 2px ink border; the bar reaches it. "costs" (5.84) is the turn.
Scene 4 (5.84–8.62s): on "every caller" (6.62 / 7.14 / 7.64) three caller rows **stagger** into the
chamber, each bringing its own long bar toward `down` — the pile-up, one row per spoken beat, so the
back half of the frame is still building.
Scene 5 (9.46–11.14s): on "retries" (9.98) every bar gains one retry segment, and on the beat at
10.62 another — a fixed six marks, index-derived, deterministic. Nothing counts up and no number is
printed: the density is the claim.
Scene 6 (11.14–12.50s): on "storm" (11.52) all six bars converge on `down` and its border steps to
full ink; **at the same beat the bottom chamber enters** with kicker `breaker`, so the answer is on
screen while the consequence lands.
Scene 7 (12.50–14.336s): on "outage" (13.04) one pip leaves the bottom chamber's caller row and
**stops dead at the seam**, where the ember marker blooms (the part's last ember, one element); on
"started" (13.58) the `fallback` answer chip returns beside the caller and everything holds still for
the final ~0.75s. This frame alone gets a quiet settle-out, since the injected crossfade has nowhere
to go — the film ends on the stopped call.

## Production status

- Step 3.1 audio: 7 voice wavs from Kokoro `af_heart` @ 0.74 via `studio voice` (provider pinned from
  `BRIEF.md`, reported not substituted); `bgm: disabled`; **0 SFX cues** (bible § 7 for parts 2-10);
  `studio cues` measured **153 words over 7 lines** and wrote both audio metas.
- Durations above are real, from `audio.mjs sync-durations`. Total 76.161s against a 76s expectation.
- Step 5: 7 frames authored in `compositions/frames/`; F3's five state flips built as discrete
  sequences, proved by snapshot at 10.2 / 17.2 / 22.2 / 26.2 / 28.4s.

