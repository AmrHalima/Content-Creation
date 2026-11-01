---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 1 of 10
title: repository pattern
message: "The Repository Pattern pulls the use case's decisions apart from the storage layer's, and the whole of it is the direction the dependency points."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: concept (neutral structural explainer — chosen deliberately over the house opinionated-thesis default)
narration: yes
audience: experienced backend developers who have already written CRUD and want the mechanics and the tradeoffs named precisely
style_preset: code-editorial
voice: af_heart
tts_provider: kokoro
captions: en
music: none
---

## Intent

The English master of a faceless explainer on the backend **Repository Pattern**. There is
no URL and no footage — every visual is invented. Vertical shortform, ~78s, hard ceiling 90s.

The user chose a **neutral structural explainer** over the house default (an opinionated
thesis), and that choice is honored, not argued. The spine is fixed:

1. what the pattern is and the problem it answers (F1-F2),
2. anatomy — interface, implementation, consumer, and the direction the dependency points
   (F3-F4),
3. the code sketch and how small the interface stays (F5),
4. the common mistakes and where it hurts, including the honest cost (F6-F7).

Two managed consequences of the neutral angle, both from `.agents/product-marketing.md`:

- **Density replaces thesis.** The Learnings table records that this audience skips
  phase-by-phase recitals. So the neutral explainer carries itself with one sharp idea per
  frame and precise naming, not by inventing a fake contrarian take.
- **No beginner framing.** Never "what is a repository?". Assume the viewer has written CRUD.
  Tradeoffs get named exactly (aggregate-vs-table seam, leaking a query object, the mapping
  layer you write twice).

Tone is peer-to-peer and dry. The AI-tell blacklist applies to narration and on-screen text.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **SFX rationed, not per frame.** Two marks budgeted for the whole film, at the two structural
  turns (the layers pulling apart, the leak). No BGM (`music: none`).
- **Captions ON, English**, caption-pill keep-out respected: content planned into the top
  ~83%, nothing load-bearing below **y ≈ 1594** on the 1920-tall canvas.
- **Code sketch is drawn, not captured** — there is no real editor to screenshot. Type the
  interface and the implementation as set mono type on the navy code surface.
- Render authorized up to `--quality draft` only, via `studio render`. `looks` and `delivery`
  are NOT authorized. Publishing, social posting and blog deploy are NOT authorized.

## Notes

- **Arabic is a separate later project.** Do not author an AR script or an RTL variant here.
- **Voice (provider pinned, never substituted):** Kokoro `am_michael` at speed 0.74 — offline,
  free. ElevenLabs is unusable here: `.agents/design.md` carries `voice_id: ""` and free-tier
  keys reject library voices with HTTP 402. `npx hyperframes auth status` reports *not signed
  in to HeyGen*, so the pipeline falls to local engines, which is what this brief wants.
- **House precedent:** `videos/osi-layers-1-sideways` and `videos/sdlc` — same shape (vertical
  faceless explainer, same voice, same caption rule). Their BRIEF.md frontmatter shape and
  frame grammar are cloned here. Per `osi-layers-1-sideways`, that project's "stack vertically,
  never side-by-side" is local precedent, not law.
- **Two live Learnings traps bound this run** (`.agents/product-marketing.md` Learnings):
  (a) an element styled only by `id`, while the CSS rule is a class, renders unstyled at 0,0 and
  still passes `check` — every authored element carries its class, not just its id;
  (b) there is no TextPlugin in the shipped GSAP setup, so `tl.set({ text: … })` silently no-ops
  — in-place label swaps use the time-proxy + reverse-search discrete sequence.
- `.agents/design.md` copied to `design.md` at init so `hyperframes-creative`'s spec precedence
  (`frame.md` → `design.md`) picks it up.
- **Render usage:** `npx hyperframes usage --json` returns `{"status":"unknown",
  "reason":"unsupported_harness"}` — usage is unknown; never guess an allowance. Re-checked
  before the render.
- `npx hyperframes skills update faceless-explainer` FAILED on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report success`).
  Building from the installed on-disk skill at `C:\Users\AmrPC\.qoder\skills\faceless-explainer`,
  not from memory; failure surfaced here as required.
