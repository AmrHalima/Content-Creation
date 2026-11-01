---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 10 of 10
title: pattern-circuit-breaker
message: "A circuit breaker fails fast and gives a dying dependency room to recover instead of piling retries on it: closed, open, half-open, with a fallback."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral explainer per series-bible sections 1 and 3 — no invented contrarian hook, no beginner framing)
narration: yes
audience: experienced backend developers who have already written CRUD and want the mechanics and the misuse named precisely
style_preset: code-editorial
voice: af_heart
tts_provider: kokoro
voice_speed: 0.74
captions: en
music: none
sfx: none
---

## Intent

Part 10 of the `backend-patterns` campaign: the English master of a faceless vertical
explainer on the **Circuit Breaker**. No URL, no footage — every visual is invented.
Portrait 1080x1920, ~78s, hard ceiling 90s.

The claim this part pays (series-bible section 3): **a circuit breaker fails fast and gives
a dying dependency room to recover, instead of piling retries on it. Closed, open,
half-open, with a fallback.** It ends on the misuse tell: **a timeout with no breaker, and
the retry storm that finishes the job the outage started.**

Spine is the campaign's uniform one — what problem it solves -> anatomy -> the code shape
-> where it goes wrong. Tone is peer-to-peer and dry; density replaces thesis, because this
series is deliberately neutral structural rather than the house opinionated angle. No
beginner framing ("what is a circuit breaker?" is banned); the viewer has seen a breaker
diagram and wants the state machine named precisely.

This is the campaign's one genuinely **stateful** pattern, so the load-bearing frame is the
three-state diagram: closed -> open (failure threshold crossed) -> half-open (a probe is
allowed) -> back to closed or open again, with every transition labelled.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **Grammar R (the spine)** — the three-chamber call graph: caller (top), the breaker seam
  (middle, dark chamber), the remote dependency (bottom), dependency arrow pointing down.
  The seam box changes state colour; `active` (Ember #FFA946) marks live/closed and the state
  changes are exactly what that token is for.
- **Grammar D (new to this part, permitted by bible section 5)** — the three-state diagram
  replaces a third code chamber. Diagrams follow the same token palette.
- **Grammar C** — one TypeScript fragment, <=6 lines: a guarded call that throws fast instead
  of waiting on the timeout.
- **Grammar X** — the before/after at the end: naive retry-with-backoff hammering a dead
  service (top) vs the breaker short-circuiting it (below).
- **Captions ON, English**, caption-pill keep-out respected: nothing load-bearing below
  **y = 1594**.
- **No BGM, no SFX** (bible section 7: parts 2-10 carry zero marks). Nothing resolved into
  `.media/manifest.jsonl` by this run.
- **Accuracy bars.** The failure threshold and the reset timeout are named as
  **configuration**, never as universal numbers; no library defaults are claimed. Retry,
  timeout, bulkhead and circuit breaker are different tools — where they are contrasted, one
  clause each, and no cross-episode references (bible section 2 bans them).
- Render authorized up to `--quality draft` only, once, via `studio render`. `looks`,
  `delivery`, publish, social set, blog and the Arabic pass are NOT authorized.

## Notes

- **Voice (pinned, never substituted):** Kokoro `af_heart` at speed 0.74 — offline, free.
  This is the campaign's chosen switch away from `am_michael` (bible section 7), and it
  **overrides `.agents/design.md`'s `voices.en = am_michael` for this campaign only**; the
  house spec file is read-only to this run. `studio voice` resolves the pin from this
  file's `voice:` + `tts_provider:`. Alternates if `af_heart` reads wrong on camera:
  `af_nova`, `af_sky`, `bf_emma`, `bf_isabella`.
- **Campaign deviation flagged, not reconciled:** part 1 (`videos/repository-pattern/BRIEF.md`)
  still carries `voice: am_michael` and a two-mark SFX budget. Per the bible, the campaign
  decision is `af_heart` + zero marks for parts 2-10, and the bible wins over a project file.
  Part 1's `frame.md` is byte-identical to `videos/osi-layers-1-sideways/frame.md` (the same
  `code-editorial` preset), so there is no competing frame grammar to follow.
- **Two live Learnings rows bind this run** (`.agents/product-marketing.md`):
  (a) an element styled only by `id` while the CSS rule is a class renders unstyled at 0,0
  and still passes `check` — every authored frame element carries its class, not just its id;
  (b) there is no TextPlugin in the shipped GSAP, so `tl.set({ text: … })` silently no-ops —
  the CLOSED -> OPEN -> HALF-OPEN label swap is exactly that banned text tween, and is built
  with the time-proxy plus reverse-search discrete sequence instead. It is proved with
  `snapshot --at` at each transition timestamp, and the pixels are read.
- `.agents/design.md` copied to `design.md` at init so `hyperframes-creative`'s spec
  precedence (`frame.md` -> `design.md`) picks it up.
- **Parallel production (8 sibling agents live):** this run writes only inside
  `videos/pattern-circuit-breaker/`. No `preview --background` (bible section 8 rule 4) —
  frame review is by `snapshot --at`. One render, at the end, draft quality.
- `npx hyperframes skills update faceless-explainer` FAILED on this machine's network
  (`Update failed: can't check skills freshness (GitHub manifest unreachable) — refusing to
  report success. Retry when online.`). Built from the installed on-disk skill at
  `C:\Users\AmrPC\.qoder\skills\faceless-explainer`, not from memory; failure surfaced here
  as required.
- **Render usage:** `npx hyperframes usage --json` returned `{"status":"unknown",
  "reason":"unsupported_harness"}` at workflow start — usage is unknown; no allowance was
  guessed. Re-checked before the render.
- **Arabic is a separate later campaign pass** (bible section 9). Nothing Arabic is authored
  here.
