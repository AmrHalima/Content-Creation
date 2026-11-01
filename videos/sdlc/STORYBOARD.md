---
format: 1080x1920
duration: 74s
message: "Every methodology is a different answer to 'how late may reality revise the plan,' and what breaks are the handoffs between phases."
arc: "Hook → Handoffs (pain) → The question (concept) → Waterfall → Agile → DevOps → AI twist (implication) → Land (thesis + CTA)"
audience: experienced developers and engineers who already know the SDLC diagram
mode: autonomous
music: none
---

## Video direction

- **Palette system (from `frame.md`, code-editorial — atoms sacred):** cream `#FAF9F5` is the ground everywhere; navy `#181715` only on frame 4 (statement ground for gravity) and frame 7's pipeline code-surface; ink `#141413` is the voice; coral `#CC785C` is rationed to exactly ONE moment per frame — F1 the ✱ kicker spike, F2 the crack, F3 the currently-flared arrow (one lit at a time, coral hands off as the camera moves), F5 the stamp, F6 the "authority ✗", F7 the latency unit "minutes", F8 the AI spark, F9 the CTA band. Content gathers on tile `#EFE9DE` half-steps. Elevation is 1px hairline + at most one soft warm shadow. Type by role: EB Garamond 400 sentence-case display (italic for stances), Inter 400 body, JetBrains Mono kickers/labels/code. Syntax colors (teal strings, amber numbers, status green `#5DB872`) live only on the navy code surface.
- **Portrait canvas 1080x1920:** stack vertically, never side-by-side; centered heroes anchor at y ≈ 0.42 × height; the "straight line" (F5) runs as a vertical gated column; the pipeline (F7) is a vertical navy panel with the return arrow climbing its side; long kinetic lines break into 2–3 short stacked lines.
- **Caption keep-out:** bottom ~17% of canvas reserved for the caption pill; all primary content caps at the band top; background layers (grid, paper texture, navy grounds) may stay full-bleed.
- **Motion grammar:** `power3` long-tail settles everywhere (smooth beats bouncy); reveals are VO-paced — each element enters when the spoken line names it, spread across the back ~50% of each frame; internal seams are velocity-matched cuts; the single sanctioned overshoot in the whole film is F5's stamp slam (a deliberate bell-hit). Holds are still — at most a subtle low-amplitude finite jitter on the held focal; no lazy breathing, no back-half pans/pushes, no `repeat`/`yoyo`, no `Math.random`/`Date.now`.
- **Rhythm / held-frame allocation:** F2 (5s) and F4's question (last 1.4s) are the deliberate breathers; F8's push-in lands and holds; F9 holds to the end (only frame with no exit — the harness transition is every other frame's exit).
- **Negative list:** no pure white/black/cool gray; no fourth brand hue; no gradients/glows/heavy shadows/tilt on content; no purple-blue "AI" gradient cliché (F8's AI is the coral ✱ spark + mono label only); no browser chrome, real cursors, nav bars; no invented figures — latency reads as qualitative units (months/weeks/minutes), chart segments are label-only; no front-load-then-freeze (slideshow) and no everything-floating (screensaver); no em dashes in on-screen short copy; on-screen display is sentence case, never title case.

## Frame 1 — The diagram you know

- scene: The canonical SDLC loop assembles itself on cream paper — six hairline phase tiles (plan, design, build, test, deploy, operate) cascade clockwise into a ring joined by mono arrows
- voiceover: "You know this diagram. Plan, design, build, test, deploy, operate. Fifty years old, and still in every job description."
- duration: 8.661s
- poster: 6s
- transition_in: cut
- status: animated
- src: compositions/frames/01-the-diagram.html
- type: hook
- persuasion: Anchoring on a familiar referent + concept announcement
- beat: recognition
- blueprint: grid-card-assemble (Adapt — keep the staggered-cascade signature; the cascade resolves into a ring of six phase tiles joined by mono arrows, not a grid)
- focal: the assembled SDLC ring
- roles: cream paper + hairline grid = background · ring of six phase tiles + arrows = foreground subject · ✱ mono kicker + "est. 1970s" index strip = supporting chrome

narrativeRole: Proves fluency in the first two seconds. The diagram the viewer already knows assembles itself with zero explanation, no "what is SDLC" framing.
keyMessage: Here is the shared artifact the whole video will argue with.

Scene 1 (0.0–1.6s): cream ground with a low-opacity hairline grid; only the ✱ kicker types on with caret up top ("✱ THE SOFTWARE DEVELOPMENT LIFE CYCLE", mono uppercase) as the VO says "You know this diagram." — type-on with caret (`discrete-text-sequence` + `context-sensitive-cursor`). Centered, top third.
Scene 2 (1.6–5.6s): the six phase tiles cascade clockwise into a ring, each tile landing exactly on its spoken word ("plan… design… build… test… deploy… operate") — staggered arrival (`waterfall-entry` discipline, per-item on the VO cue); mono arrow segments SVG-self-draw between settled tiles (`svg-path-draw`). Ring centered at y ≈ 0.42, ~55% of frame height, 3 depth layers (grid / ring / kicker).
Scene 3 (5.6–8.0s): as the VO lands "still in every job description," a thin mono index strip fades in under the ring ("est. 1970s · still in every job description"); everything settles and holds still — no drift, no breathing. Held read.

## Frame 2 — The same villain

- scene: The assembled loop dims onto a tile ground; one coral crack spikes across a single arrow; the EB Garamond display "The handoff" lands with the crack
- voiceover: "Postmortems keep naming the same villain. The handoff."
- duration: 3.477s
- poster: 3.5s
- transition_in: cut
- status: animated
- src: compositions/frames/02-the-handoff.html
- type: pain_point
- persuasion: Counterintuitive claim + concretization (the arrow becomes the villain)
- beat: surprise + recognition
- blueprint: kinetic-type-beats (Adapt — one slam beat instead of a multi-beat build; the display line lands over a dimmed set and the frame holds)
- focal: the coral crack across one arrow + "The handoff." display
- roles: dimmed F1 ring on tile ground = background (~40% opacity) · coral crack = foreground accent · display line = foreground subject
- sfx: thud

narrativeRole: Flips the diagram. Attention moves from the boxes everyone lists to the arrows nobody celebrates. The thesis lands by beat 2 (reverse iceberg).
keyMessage: Failures live in the handoffs between phases, not inside the phases.

Scene 1 (0.0–1.8s): hard cut; the ring from frame 1 is still visible but dims to ~40% on a tile ground (background now); as the VO says "Postmortems keep naming the same villain," a single coral crack SVG-self-draws across the requirements→design arrow (`svg-path-draw`), landing sharp.
Scene 2 (1.8–3.2s): half-beat of stillness, then on "The handoff." the EB Garamond display line slams in near-full-bleed across the ring center (one kinetic hit, smooth `power3` settle — the thud sfx lands with it); the crack stays coral, the only voltage.
Scene 3 (3.2–5.0s): held read — everything still; at most a subtle finite jitter on the crack (low amplitude, `sine-wave-loop` register). No camera. The stillness after the slam is the beat.

## Frame 3 — The four-arrow roll call

- scene: Same loop on one oversized canvas; a single virtual camera pans arrow to arrow (requirements→design, design→build, build→test, dev→ops); each arrow flares and drops a mono quote card
- voiceover: "Requirements to design: 'make it fast.' Design to build: the mockup had one state, the data has nine. Build to test: 'works on my machine.' Dev to ops: shipped it on a Friday."
- duration: 12.331s
- poster: 8s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/03-roll-call.html
- type: pain_point
- persuasion: Worked examples in the audience's native language (each quote is a lived meme)
- beat: recognition + wry unease
- blueprint: spatial-pan-stations (Reproduce — stations are the four handoff arrows on one oversized loop canvas, one virtual camera, held landing on the last)
- focal: the four mono quote cards, one per arrow
- roles: oversized loop canvas (world wrapper) = background + pan stage · lit arrow (coral, one at a time) = foreground accent per station · quote card + attribution chip = foreground subject per station
- sfx: tick

narrativeRole: Evidence for frame 2's claim, at one handoff every three seconds. Dense on purpose; the viewer supplies their own war story at each stop.
keyMessage: Every arrow has a signature failure mode you have personally lived.

Stage: one oversized `.world` canvas holds the whole loop at ~2× the viewport; a single virtual camera pans station to station (`viewport-change` — pan/focus-lock, velocity-matched between stations). Portrait: the pan path runs diagonally/vertically through the ring, never a wide lateral sweep.
Scene 1 (0.0–3.0s): the zoom-through lands on arrow 1; the arrow flares coral as the VO says "Requirements to design" and the quote card pops beside it — mono "make it fast." in a tile card with hairline border + attribution chip "requirements → design" (spring-free smooth settle, `power3`).
Scene 2 (3.0–6.0s): camera pans to arrow 2 (velocity-matched; coral hands off — arrow 1 cools to ink as arrow 2 flares, one coral at a time); card: "mockup: 1 state. data: 9 states." chip "design → build" — lands on the VO's "one state… nine."
Scene 3 (6.0–9.0s): pan to arrow 3; card: "works on my machine" chip "build → test" — deadpan mono, lands with the quote.
Scene 4 (9.0–12.0s): pan to arrow 4; card: "shipped it on a Friday." chip "dev → ops"; after the line lands the camera eases out just enough to show all four arrows lit at once — the whole loop, annotated with its own failures. Held read; no further motion.

## Frame 4 — The one question

- scene: Typographic pivot on navy (the gravity ground): WATERFALL / AGILE / DEVOPS hard-cut in mono, then clear; the EB Garamond italic question builds line by line: "How late is reality allowed to revise the plan?"
- voiceover: "Waterfall, Agile, DevOps. Three answers to one question: how late is reality allowed to revise the plan?"
- duration: 8.064s
- poster: 4.5s
- transition_in: cut
- status: animated
- src: compositions/frames/04-the-question.html
- type: product_intro
- persuasion: Frame-then-fill (state the shape, then populate it across the next three frames)
- beat: clarity + anticipation
- blueprint: kinetic-type-beats (Adapt — in-place flash word-swaps for the three names, then a per-word build of the question; the breather frame of the film)
- focal: the italic question
- roles: navy ground = background (the one statement frame on navy, for gravity) · three mono names = foreground (they clear) · ✱ kicker = chrome (the frame's single coral) · italic question = foreground subject

narrativeRole: Names the protagonist. The idea — feedback latency as the real axis of the methodology wars — is introduced as the lens the rest of the video runs through.
keyMessage: Waterfall vs Agile vs DevOps is a debate about when change is allowed to arrive.

Scene 1 (0.0–2.2s): hard cut to navy; the three names hard-cut/flash word-swap at center, each filling the frame on its spoken beat — "WATERFALL" → "AGILE" → "DEVOPS" (mono, cream, `discrete-text-sequence`; the swap itself is the beat, no fades).
Scene 2 (2.2–4.6s): the names clear (scale-swap handoff); a ✱ mono kicker tracks in above center ("✱ ONE QUESTION"); as the VO asks it, the EB Garamond italic question reveals per-word — "How late is reality allowed to revise the plan?" — stacked in 2–3 short lines, centered y ≈ 0.42, ~78% width (`dynamic-content-sequencing` / per-word staggered reveal).
Scene 3 (4.6–6.0s): the question completes and holds — the deliberate breather. Still frame, cream italic on navy, no motion at all. Let it read.

## Frame 5 — Waterfall answers

- scene: Shared morph stage: the loop unrolls into a straight gated line on cream; a change-request form stamps itself at a gate; the latency lockup reads serif figure over mono unit "MONTHS"
- voiceover: "Waterfall: through a change request. Feedback in months. Honest when requirements are frozen. A death march when they're not."
- duration: 8.448s
- poster: 5.5s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/05-waterfall.html
- type: feature_showcase
- persuasion: Comparison setup (first of three answers on one consistent stage) + concretization (the stamped form)
- beat: comprehension + fair-mindedness
- blueprint: compose (loop→line in-frame transform; guest beats: the press-slam stamp and the qualitative latency lockup)
- focal: the stamped change-request form on the gated line
- roles: cream ground + hairline grid = background · vertical gated phase column = foreground subject (the shared morph stage, established here) · change-request form + coral stamp = foreground accent (the frame's single coral is the stamp) · latency lockup "months" = supporting
- sfx: stamp

narrativeRole: First answer, given honestly — the regulated/safety-critical case is named, not strawmanned. The stage (one diagram morphing per methodology) is established here.
keyMessage: Waterfall budgets change through ceremony; feedback arrives in months.

Stage contract (frames 5–7): one consistent morph stage — the same six phase tiles rearrange per methodology, and the latency lockup holds the same slot under it, stepping months → weeks → minutes. Keep the lockup position and tile styling identical across the three frames; only the geometry and the stamp/overlay change. Portrait: the "straight line" is a VERTICAL gated column, phases stacked top→bottom.
Scene 1 (0.0–2.0s): push-slide UP lands; the loop re-forms small at top and unrolls downward into the vertical gated column — tiles reposition along the spine, gate bars re-draw between them (`svg-path-draw` + transform-only reposition, `anchored-layout-expand` discipline); VO "Waterfall: through a change request."
Scene 2 (2.0–4.5s): a hairline change-request form card slides in beside the build→test gate (mono rows: "scope ___ / impact ___ / approver ___"); the coral stamp slams onto it — "PENDING REVIEW" — the film's one sanctioned overshoot, a deliberate bell-hit (`press-release-spring` impact), stamp sfx lands with it; VO "Feedback in months."
Scene 3 (4.5–6.5s): the latency lockup reveals in its fixed slot beneath the column — serif figure "months" over a 1px rule with a mono unit label "feedback latency" (qualitative; no invented numerals); VO "Honest when requirements are frozen."
Scene 4 (6.5–8.0s): the verdict line snaps in under the lockup, Inter body ink: "and a death march when they're not." Held read; stage geometry freezes for the push-slide handoff to frame 6.

## Frame 6 — Agile answers

- scene: Same stage: the straight line coils into a sprint spiral; the latency unit steps down to "WEEKS"; a hairline overlay note lands: "ceremony ✓ authority ✗"
- voiceover: "Agile: every sprint. Feedback in weeks. The failure mode is keeping every ceremony and none of the authority."
- duration: 7.424s
- poster: 5s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/06-agile.html
- type: feature_showcase
- persuasion: Parallel structure with a twist (each answer arrives with its own failure mode)
- beat: comprehension + wry recognition
- blueprint: compose (line→coil transform on the shared stage; the latency lockup token-steps in place)
- focal: the sprint spiral + the ceremony/authority note
- roles: cream ground = background · spiral of sprint arcs with phase tiles riding it = foreground subject · latency lockup "weeks" (same slot as F5) = supporting · hairline note card with coral "✗" = foreground accent (the frame's single coral)

narrativeRole: Second answer, tighter loop, and the sharpest in-joke of the three — Agile-in-name-only. The parallel run starts to escalate.
keyMessage: Agile buys feedback at sprint cadence, and decays into ritual when teams keep the meetings but lose the decision rights.

Scene 1 (0.0–2.2s): push-slide UP; the vertical column recoils into a sprint spiral — the same tiles, the spine re-laid as a descending coil path that SVG-draws itself while tiles ride to their new slots (`svg-path-draw` + transform reposition); VO "Agile: every sprint. Feedback in weeks."
Scene 2 (2.2–4.2s): the latency lockup token-steps in place — "months" swaps to "weeks" in the identical slot (in-place token cycle, `discrete-text-sequence`); the swap is the beat, no camera move.
Scene 3 (4.2–7.0s): as the VO names the failure mode, a hairline note card lands beside the spiral, stacked mono lines: "ceremony ✓" (ink) over "authority ✗" (coral — the frame's one voltage); held read, stage geometry frozen for the next push-slide.

## Frame 7 — DevOps answers

- scene: Same stage: the coil compresses into one horizontal pipeline strip on a navy code surface (build → test → deploy ✓, looping under itself); latency unit "MINUTES"; mono status strip: "deploy: routine · rollback: first-class"
- voiceover: "DevOps: every commit. Feedback in minutes. Deploy gets boring, rollback gets first-class. The failure mode is an automated pipeline queued behind one manual approval."
- duration: 12.352s
- poster: 6s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/07-devops.html
- type: feature_showcase
- persuasion: Escalation peak of the parallel run + counterexample (CI/CD theater)
- beat: momentum + conviction
- blueprint: compose (coil→pipeline transform; the stage's fastest tempo, jamming at the end)
- focal: the navy pipeline panel with its stalled manual gate
- roles: cream ground = background · vertical navy code-surface panel = foreground subject · mono stage labels + status strip = chrome · latency lockup "minutes" with coral unit = supporting (the frame's single coral)

narrativeRole: Third answer at peak tempo — the shortest loop, and its own hypocrisy (automation with a human gate bolted back on). Completes the mechanism run.
keyMessage: DevOps makes change continuous; what remains is approval latency wearing a pipeline costume.

Portrait staging: the pipeline is a vertical navy panel (code-surface treatment: `navy-elev` title bar, cream@14% hairline, 8px radius) with mono stages stacked build → test → deploy ✓ and the return arrow climbing the panel's side back to build.
Scene 1 (0.0–2.5s): push-slide UP; the coil compresses into the navy panel; inside it the mono stages type on with caret — "build" → "test" → "deploy ✓" — each on its VO beat ("every commit"), the ✓ drawing itself in status green (`discrete-text-sequence` + `svg-path-draw`).
Scene 2 (2.5–5.0s): the return arrow self-draws up the panel's side (deploy loops to build — the cycle made literal); the status strip writes beneath the title bar: "deploy: routine · rollback: first-class"; VO "Deploy gets boring, rollback gets first-class."
Scene 3 (5.0–7.0s): latency lockup token-steps to "minutes" in the fixed slot — the unit word in coral, this frame's one voltage; VO "Feedback in minutes" (line order: lockup steps as the words land).
Scene 4 (7.0–9.0s): the jam — a hairline gate drops across the panel mid-flow, mono label "manual approval"; the flow chevrons above it stall (finite dash-flow that decelerates to a stop, never a loop); VO "…queued behind one manual approval." Held read on the stalled pipeline.

## Frame 8 — Then AI moved

- scene: One stacked horizontal bar of where cycle time actually lives (review / approvals / coordination / build); a coral "AI" spark collapses the build segment to a sliver; the bar's total length barely changes; the camera pushes into the surviving segments
- voiceover: "Then AI collapsed the build phase, and the loop barely moved. Review, approvals, coordination: that's where the weeks live."
- duration: 8.003s
- poster: 6s
- transition_in: push-slide UP
- status: animated
- src: compositions/frames/08-ai-twist.html
- type: benefit_highlight
- persuasion: Demonstration (the chart carries the argument) + causal chain
- beat: surprise + foresight ("aha")
- blueprint: dataviz-countup (Adapt — keep chart-as-hero and the push-in landing; the count-up ring becomes a qualitative stacked-bar collapse, no invented numerals)
- focal: the stacked cycle-time bar whose build segment collapses while the total holds
- roles: cream ground + hairline grid = background · stacked bar (4 labeled segments) = foreground subject · segment labels = supporting · coral ✱ AI spark = accent (the frame's single coral)
- sfx: keyboard

narrativeRole: The lens pays off in the present tense — it predicts the AI-era bottleneck. Qualitative data-viz only, no invented figures (frame.md hard rule).
keyMessage: Compressing build exposed that the latency was in the human handoffs all along.

Scene 1 (0.0–2.5s): push-slide UP onto a full-width horizontal stacked bar (portrait: the bar spans ~86% width at y ≈ 0.42); the four segments fill left→right in a scaleX stagger as their labels land — "review / approvals / coordination / build" (`stat-bars-and-fills`); the build segment sits at the end, sized visually dominant; VO "Then AI collapsed the build phase."
Scene 2 (2.5–5.5s): the coral ✱ spark strikes the build segment (one keyboard-ish tick of light) and the segment collapses to a sliver — anchored scaleX with the neighbors sliding in the SAME tween so the seam never separates (`anchored-layout-expand` discipline); a hairline "total cycle time" end-marker visibly does NOT move; VO "and the loop barely moved."
Scene 3 (5.5–9.0s): camera pushes in on the three surviving segments (`coordinate-target-zoom`); each label keyword-glow-steps as the VO names it — "Review, approvals, coordination" (`asr-keyword-glow` on the word rail); lands on the group and holds; VO "that's where the weeks live." Held read, no drift.

## Frame 9 — Shrink the loop

- scene: Stage clears to cream; the frame 1 loop returns small and centered (callback), now with its arrows emphasized in ink; two lines snap in ("The boxes were never the point." / display: "Shrink the loop."); one coral-callout band beneath: "Read the full teardown" with the ✱ spike mark
- voiceover: "The boxes were never the point. Shrink the loop. The full teardown is in the article."
- duration: 5.248s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/09-shrink-the-loop.html
- type: cta
- persuasion: Distillation (compress to one line) + callback to the hook's loop
- beat: resolve + clarity
- blueprint: kinetic-type-beats (Reproduce — closing beats snap one by one onto the payoff, resolving on the CTA lockup)
- focal: "Shrink the loop." display + coral CTA band
- roles: cream ground = background · small callback ring (ink, arrows drawn heavier) = supporting · two display lines = foreground subject · coral-callout band + ✱ = the frame's single coral

narrativeRole: Lands the thesis as a portable one-liner and routes the fluent viewer to the article for the long argument. Single coral moment of the close.
keyMessage: Treat the SDLC as a feedback loop and shorten the latency wherever it lives.

Scene 1 (0.0–2.0s): cut to cleared cream; the frame-1 ring returns small in the upper third (callback), its arrows re-drawn heavier in ink (`svg-path-draw`); line one snaps in beneath it on the VO — "The boxes were never the point." (Inter lead, smooth settle).
Scene 2 (2.0–4.0s): the EB Garamond display lands near-full-bleed at y ≈ 0.42 — "Shrink the loop." — sentence case, negative-tracked, the largest type in the film; VO lands with it.
Scene 3 (4.0–7.0s): the coral-callout band wipes in below the display: "Read the full teardown" + the ✱ spike mark on its single emphasis beat (fade + scale 0.92→1, never spins); VO "The full teardown is in the article." This is the only frame with no exit — everything holds still to the last frame.
