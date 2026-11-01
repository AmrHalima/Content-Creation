---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 4 of 10
title: strategy pattern
message: "Strategy is a behaviour you can swap at runtime behind one signature; the caller says what, not how."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral explainer per series-bible sections 1 and 3 — no invented contrarian hook, no beginner framing)
narration: yes
audience: backend developers who have written CRUD, have seen the UML box, and want the mechanics named precisely and the misuse called out
style_preset: code-editorial
voice: af_heart
tts_provider: kokoro
tts_speed: 0.74
captions: en
music: none
sfx: none
---

## Intent

Part 4 of the `backend-patterns` campaign: the English master of a faceless explainer on the
**Strategy pattern**. No URL, no footage — every visual is invented. Portrait 1080x1920, ~78s,
hard ceiling 90s. Every gate decision was made at campaign level
(`writing/backend-patterns/series-bible.md` §§ 1, 3, 4, 5, 6, 7, 8); nothing here re-argues it.

What this part pays, verbatim from the bible's per-part table:

> **Strategy is a behaviour you can swap at runtime behind one signature — the caller says
> what, not how.** It ends on the misuse tell: **strategies that share nothing but their
> interface, and pluggability nobody ever plugs into.**

Spine (bible § 1, uniform across all ten parts): what problem it solves → the anatomy → the
code shape → where it goes wrong. It stands alone: zero references to other parts, the problem
re-established inside the first two narration sentences, and exactly one sibling-pattern
boundary marker ("a factory picks a type to build, a strategy picks a behaviour to run"), used
to mark a boundary and never to borrow authority.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Visual grammar (bible § 4 — the lock for this part)

- **Grammar R is the spine** (caller top / seam middle / implementation bottom, stacked, arrow
  pointing down). Strategy is the cleanest fit in the whole series: the seam is a **list of
  interchangeable implementations hanging off one arrow**, so F2-F5 all carry the three-chamber
  graph and the swap is drawn as the active implementation changing, not as a new box.
- **Grammar C twice** (bible allows once or twice): F4 = the `PricingStrategy` interface,
  F5 = the `Checkout` context that holds one. One declaration per fragment, max 6 lines, load-
  bearing tokens in Ember/Lavender, everything else muted ink.
- **Grammar X is F7**, the last frame and the one the viewer screenshots: the switch that grows
  a case per behaviour (wrong shape, top) against the map that grows an entry (fixed shape,
  bottom).
- Portrait override recorded per bible § 4: stack vertically by default; F7's two chambers are
  **stacked, not side by side**, because each fragment needs 5-6 code lines and 1080px of width
  cannot hold two mono panels above the 1.4cqw legibility floor.

## Customizations

- **Voice: Kokoro `af_heart` at speed 0.74** — the campaign's chosen switch away from the house
  `voices.en = am_michael`, overriding `.agents/design.md` **for this campaign only**. The house
  spec file is not edited by this run. Alternates if `af_heart` reads wrong on camera: `af_nova`,
  `af_sky`, `bf_emma`, `bf_isabella`. Which voice was actually used is reported at the gate.
- **No BGM, no SFX** (bible § 7: parts 2-10 carry zero marks; the campaign budget is rationed
  and parallel runs must not append to `.media/manifest.jsonl`). No `media-use resolve` call was
  made for audio, and none is needed.
- **Captions ON, English**, caption-pill keep-out respected: nothing load-bearing below
  **y = 1594** on the 1920-tall canvas. Caption lane is produced by `studio assemble --captions`;
  `data-track-kind="captions"` is never hand-added.
- **The central motion is the strategy-name swap** (F5): the visible implementation name in the
  context's slot changes in place. Because the shipped GSAP has **no TextPlugin**, this is built
  as a `{t, text}` step array read by a time proxy whose `onUpdate` assigns `textContent`
  (`studio/known-traps.md` #3), never as a `text:` tween, and it is proven by snapshot at the
  seconds either side of each swap — not by `check`.
- **Every authored element carries its class, not just its id** (`known-traps.md` #1 / live
  Learnings row); ids are prefixed `<frame-id>-` per the frame-worker contract.
- Render authorized to `--quality draft` only, exactly once, at the end, through
  `studio render … --yes`. `looks`, `delivery`, publish, social set, blog and the Arabic pass are
  NOT authorized in this campaign.

## Notes

- **Two live Learnings traps bound this run** (`.agents/product-marketing.md` Learnings):
  (a) an element styled only by `id`, while the CSS rule is a class, renders unstyled at 0,0 and
  still passes `check`; (b) no TextPlugin in the shipped GSAP, so `tl.set({ text: … })` silently
  no-ops while `check` reports 0 errors. Both are addressed above.
- **Parallel-production lane** (bible § 8): this run writes ONLY inside `videos/pattern-strategy/`.
  `.agents/design.md`, `.agents/product-marketing.md`, `writing/backend-patterns/series-bible.md`,
  `studio/**` and `.media/manifest.jsonl` are read-only here; a Learnings row or brand-spec change
  is proposed in the run report, never written. No `preview --background` (port collisions and
  leaks across nine concurrent runs) — frame review is `snapshot --at`.
- **Divergence flagged, not reconciled:** part 1 (`videos/repository-pattern/BRIEF.md`, written
  the same day) records `voice: am_michael` and a two-mark SFX budget. Bible § 7 overrides both
  for parts 2-10 (`af_heart`, zero marks). Per the bible's own rule the campaign file wins and
  the project file is the exception; part 1's grammar was read before authoring and its
  `frame.md` is the same `code-editorial` preset this project builds from, so the visual grammar
  matches.
- `.agents/design.md` is copied to `design.md` at init so `hyperframes-creative`'s spec
  precedence (`frame.md` → `design.md`) picks it up.
- **Body face stays Inter.** `design.md` licenses Figtree, and there is no Figtree file on disk
  (`studio doctor`: "body (Figtree → Inter) via Inter"), so nothing in this project names it —
  an unsourced `@font-face` is `font-missing`, a HIGH `verify` finding.
- **Render usage:** `npx hyperframes usage --json` returned
  `{"status":"unknown","reason":"unsupported_harness"}` at workflow start — usage is unknown;
  no allowance is guessed. Re-checked before the render.
- `npx hyperframes skills update faceless-explainer` FAILED on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report success`).
  Authoring continues from the installed on-disk skill at
  `C:\Users\AmrPC\.qoder\skills\faceless-explainer`, not from memory. Failure surfaced here as
  required. `npx hyperframes auth status`: "Not signed in to HeyGen (non-interactive)", so voice
  falls to the local engine — which is what this brief pins.
