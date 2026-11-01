---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 6 of 10
title: builder
message: "Builder constructs an object step by step and keeps it unfinished until build() checks the invariants once, which is the cure for a telescoping constructor and for objects that are live before they are valid."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral structural explainer — bible §1; no invented contrarian hook, no beginner framing)
narration: yes
audience: experienced backend developers who have already written CRUD and seen a UML box, and want the mechanics named precisely and the misuse called out
style_preset: code-editorial
voice: af_heart
tts_provider: kokoro
voice_speed: 0.74
captions: en
music: none
sfx: none
---

## Intent

Part 6 of the `backend-patterns` campaign: the English master of a faceless vertical
explainer on the **Builder pattern**. No URL, no footage — every visual is invented.
Portrait 1080x1920, ~75-80s, hard ceiling 90s. Campaign lock:
`writing/backend-patterns/series-bible.md` (sections 3, 4, 5, 6, 7, 8 are binding).

The claim this part pays (bible §3): **stepwise construction where the invariants hold
only at the end — the cure for telescoping constructors and half-valid objects.** It ends
on the misuse tell: **a builder for three mandatory fields, and a mutable builder passed
onward instead of finished.**

Spine, in this order: what problem it solves → the anatomy → the code shape → where it
goes wrong. One sharp idea per frame. The angle is neutral by campaign decision, so
density and precise naming carry it instead of a thesis; no "what is a builder?" framing
and no invented controversy.

**Per-part grammar assignment (bible §4):**

- **Grammar R** is the spine (caller / builder seam / product) and is on screen whenever
  the narration names the pattern — F6, and F7 reuses its chambers for the hand-off tell.
- **Grammar C** twice, ≤6 lines of TypeScript each: F1 the telescoping overload pile,
  F3 the `new OrderBuilder().customer(…).line(…).build()` chain. The pile is honest at
  two overloads plus a reviewer-recognized comment ellipsis, not a fake method.
- **Grammar X** once, at the end: F8, wrong shape above, fixed shape below.
- **The accumulation itself is the central motion** — F4/F5: field chips landing one by
  one into the builder's private state, then `build()` checking once. Motion budget goes
  there, not on scene decoration.

**Boundary (bible §2):** Builder vs Factory is one sentence apart and both exist in this
series. F6 states the difference in one clause ("a factory picks which type; this picks
none") and borrows no authority from a sibling part. Zero cross-references anywhere.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **Voice: Kokoro `af_heart` at speed 0.74**, offline and free. This is the campaign's
  chosen switch away from `.agents/design.md`'s `voices.en = am_michael`, and it holds
  **for this campaign only** — the house spec file is not edited by a per-project run
  (bible §7 + §8 rule 3). ElevenLabs remains unusable (`voice_id: ""`, free-tier 402).
- **No BGM, no SFX** (bible §7: parts 2-10 are silent by default; campaign marks are
  rationed and parallel runs must not append to `.media/manifest.jsonl`). Nothing was
  resolved through `media-use` for audio, and nothing needed resolving.
- **Portrait stack, not split.** Grammar X stacks its two chambers vertically because the
  wrong-shape fragment is 5 lines; the bible's side-by-side allowance applies only when
  both fragments are ≤3 lines. Recorded here as the §4 portrait note requires.
- **Captions ON, English**, keep-out respected: nothing load-bearing below y ≈ 1594.
- **No `preview --background`** (bible §8 rule 4 — nine concurrent runs, port collisions).
  Frame review is by `snapshot --at` only.
- **Render exactly once at the end**, `studio render --quality draft --yes`. `looks`,
  `delivery`, publish, social and blog are NOT authorized for this run.
- **Write scope:** `videos/pattern-builder/` only. `.agents/**`, `studio/**`,
  `writing/backend-patterns/series-bible.md` and `.media/manifest.jsonl` are read-only.

## Notes

- **Sub-agent dispatch was not available in this harness** (no Agent/Task tool), so the
  Step 5 frames were authored by the orchestrator directly, one frame per write, against
  `hyperframes/references/frame-worker-core.md`. Same contract, no packets.
- **Two live Learnings rows bound this run** (`.agents/product-marketing.md`):
  (a) an element styled only by `id` while the CSS rule is a class renders unstyled at 0,0
  and still passes `check` — every authored element carries its class as well as its id;
  (b) there is no TextPlugin in the shipped GSAP, so `tl.set({ text: … })` silently
  no-ops — **F4's in-place label swap (unfinished → Order) uses the sanctioned time-proxy
  + reverse-search discrete sequence**, because a silent no-op there would mean the film
  explains Builder while showing a static box.
- `npx hyperframes skills update faceless-explainer` **FAILED** on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report
  success`). Built from the installed on-disk skill at
  `C:\Users\AmrPC\.qoder\skills\faceless-explainer`, not from memory. Same failure at
  `npx hyperframes init` ("Skills freshness check unavailable (offline?)"). Surfaced here
  as required, and identical to what parts 1 and OSI P1 recorded.
- `npx hyperframes auth status`: **not signed in to HeyGen (non-interactive)** — the
  pipeline falls to local engines (Kokoro voice), which is exactly what this brief pins.
- **Render usage:** `npx hyperframes usage --json` returns
  `{"status":"unknown","reason":"unsupported_harness"}` — usage is unknown; never guess an
  allowance. Re-checked before the render.
- **Part 1 (`videos/repository-pattern/`) has NOT landed its frames** — its `index.html`
  is still the untouched `init` stub (61 lines, one "Title" clip, 1920x1080) and it has no
  `compositions/`, no STORYBOARD and no SCRIPT. So this part took its frame grammar from
  the bible plus the two shipped reference films (`videos/osi-layers-1-sideways`,
  `videos/sdlc`) and from part 1's `frame.md`, which is byte-identical to OSI P1's.
- `.agents/design.md` was copied to `design.md` at init so `hyperframes-creative`'s spec
  precedence (`frame.md` → `design.md`) picks it up.
- Style lineage: `.agents/design.md` (cream #FFFFEB / ink #1A1A1A / lavender #F0D7FF /
  forest #034F46 / ember #FFA946) remixed onto the `code-editorial` preset by
  `build-frame.mjs`, same as parts 1 and OSI P1. Body face stays **Inter** — Figtree has
  no file on disk, and naming an unsourced face fails lint and renders a fallback
  (`studio/known-traps.md` #6).
- **Word-rate plan:** 149 narration words across 8 lines. At the campaign's ~2.0 words per
  finished second that is ~75s; OSI P1 measured 1.93 w/s at `--speed 0.74`, which projects
  ~77s. Real durations come from `studio cues` / `sync-durations` and win.
