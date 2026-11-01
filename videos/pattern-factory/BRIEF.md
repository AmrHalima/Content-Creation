---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 2 of 10
title: pattern-factory
message: "A factory moves the decision of which concrete type to build out of the caller, so the caller depends on a type rather than on a constructor."
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
captions: en
music: none
sfx: none
---

## Intent

The English master of part 2 of `backend-patterns`: a faceless explainer on the **Factory
pattern**. No URL, no footage — every visual is invented. Portrait 1080x1920, ~78s, hard
ceiling 90s.

The per-part claim is fixed by `writing/backend-patterns/series-bible.md` section 3 and is
not re-argued here: **factory moves "which concrete type do I build" out of the caller, so
the caller depends on a type rather than a constructor**, and the part ends on the misuse
tell — **a factory that forwards one argument list, ceremony with nothing to choose**.

Spine per bible section 1: what problem it solves → the anatomy → the code shape → where it
goes wrong. One sharp idea per frame. Tone peer-to-peer and dry; the AI-tell blacklist
applies to narration and on-screen text; no beginner framing.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **Grammar R** (caller / seam / implementation, stacked vertically, dependency arrow down,
  import arrow back up) is the spine grammar and is on screen whenever the narration names
  the pattern: F2, F3, F4, F6 (rail), F7.
- **Grammar C** (mono code chamber, ≤6 lines, one declaration per fragment, load-bearing
  tokens in Ember/Lavender, rest in muted ink) is used exactly twice: F5 and F6.
- **Grammar X** (before/after, two stacked chambers) is used once, on F8, the misuse tell.
- **Stacked, never side-by-side.** The bible permits a side-by-side Grammar X when both
  fragments are ≤3 lines; rejected — the two fragments on F8 read as a sequence (wrong, then
  the honest version), and portrait keeps the vertical stack.
- **No SFX, no BGM** (`music: none`, `sfx: none`). Bible section 7 rationates marks across
  the campaign and gives parts 2-10 silence. No mark is requested.
- **Captions ON, English**, keep-out respected: nothing load-bearing below **y = 1594**.
- Render authorized up to `--quality draft` only, via `studio render`, exactly once at the
  end. `looks`, `delivery`, publish, social set and the Arabic pass are NOT authorized.

## Notes

- **Voice:** Kokoro `af_heart` at speed 0.74 — offline and free. This is the campaign's
  chosen switch away from `am_michael` and it overrides `.agents/design.md`'s `voices.en`
  for this campaign only (bible section 7). The house spec file is not edited by this run.
  `npx hyperframes auth status` → *Not signed in to HeyGen (non-interactive)*, so the
  pipeline falls to local engines, which is what this brief wants. ElevenLabs is unusable
  (`.agents/design.md` carries `voice_id: ""`; free-tier keys reject library voices with
  HTTP 402). No provider was substituted silently.
- **Deterministic layer only:** `studio voice` → `studio cues` → `studio assemble
  --captions`. No hand-written cue scripts, no hand-added `data-track-kind="captions"`.
- **Part 1 comparison:** `videos/repository-pattern/` exists but its `index.html` is still
  the init stub (61 lines, `data-duration="10"`, no frames authored), so part 1's frame
  grammar has not landed. Nothing here disagrees with it. Its `frame.md` (the
  `code-editorial` preset) is adopted unchanged, so where the bible is silent this part
  follows part 1's frame grammar.
- **Two live Learnings traps** (`.agents/product-marketing.md`): (a) an element styled only
  by `id` while the CSS rule is a class renders unstyled at 0,0 and still passes `check`, so
  every authored frame element carries its class as well as its id; (b) no TextPlugin in the
  shipped GSAP, so `tl.set({ text: … })` silently no-ops — in-place label swaps use the
  time-proxy plus a reverse-search discrete sequence. Both are caught by snapshot, not lint.
- `npx hyperframes skills update faceless-explainer` FAILED on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report
  success`). Building from the installed on-disk skill at
  `C:\Users\AmrPC\.qoder\skills\faceless-explainer`, not from memory; failure surfaced as
  required. `npx hyperframes init` reported the same offline condition independently.
- **Usage:** `npx hyperframes usage --json` → `{"status":"unknown","reason":"unsupported_harness"}`.
  Usage is unknown; no allowance assumed. Re-checked before the render.
- **Parallel-production constraint:** writes confined to `videos/pattern-factory/`. No
  `preview --background` (bible section 8.4) — frame review is `snapshot --at`.
- **Frames authored in-run by this agent, not dispatched:** no subagent/Task tool is
  available in this harness, so the one-worker-per-frame dispatch of Step 5 could not run.
  The frame contract (`hyperframes/references/frame-worker-core.md`) was applied by hand,
  one frame per write.
- `.agents/design.md` copied to `design.md` at init so `hyperframes-creative`'s spec
  precedence (`frame.md` → `design.md`) picks it up.
