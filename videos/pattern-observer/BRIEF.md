---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 5 of 10
title: observer
message: "Observer notifies every subscriber without the publisher knowing who they are. The decoupling is the product, and the lost causal trace is the price."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral explainer per series-bible sections 1 and 3 — no invented contrarian hook, no beginner framing)
narration: yes
audience: backend developers who have written CRUD, seen the UML box, and want the mechanics named and the misuse called out
style_preset: code-editorial
voice: af_heart
tts_provider: kokoro
captions: en
music: none
sfx: none
---

## Intent

English master of part 5 of the ten-part `backend-patterns` series: a faceless explainer on
the **Observer** pattern. No URL, no footage — every visual is invented. Portrait 1080x1920,
~78s, hard ceiling 90s, narration on, captions on, silent apart from the voice.

The claim this part pays (series-bible section 3): **notify many without the publisher knowing
who they are; the decoupling is the product, the lost causal trace is the price.** It ends on
the misuse tell: **a missing unsubscribe, and a chain of handlers nobody can step through.**
Spine is the campaign's uniform one — what problem it solves -> anatomy -> the code shape ->
where it goes wrong.

Order independence holds: the first two narration lines re-establish the problem in ~18 words
before any claim, there is no reference to any other part, and no sibling pattern is named.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **Deliberate deviation from Grammar R's vertical stack.** `series-bible.md` section 4 makes
  the three-chamber vertical call graph (caller top / seam middle / implementation bottom) the
  spine grammar, on the reasoning that every pattern in the series relates three actors. For
  Observer the honest shape is **one subject fanning out to many subscribers**, which is not a
  stack. F3 therefore draws one subject chamber with **several arrows leaving its right edge
  toward tracked mono tags** (`logger`, `email`, `metrics`): the bible's Grammar-B implied peer,
  not a second column and not a stacked trio. The dependency direction is still legible because
  the arrows leave the subject and the handler shape is named once inside it. F1 keeps the
  vertical stack (three direct calls down to three boxes), F7 stacks its two chambers, so the
  deviation is exactly one frame wide and is the fan-out itself.
- **Registry searched before hand-building, nothing adopted.** `npx hyperframes catalog
  --query "flowchart vertical process diagram"` / `"code snippet terminal window"` /
  `"diagram nodes arrows connection"` (448 blocks indexed) returned `flowchart-vertical`
  (1440x2560, decision tree with sticky-note nodes, cursor interaction and typing correction),
  `flowchart` (1920x1080, same), and `code-snippet-apple-terminal-pro` / `terminal-simulator`
  (black terminal surface, per-character shell typing). None fits: this series' grammar is
  2px/4px ink-bordered chambers in cream with a 5-line static TypeScript fragment and no cursor
  (`frame.md` § Code Surface owns the surface, not a terminal profile). Hand-set mono type per
  `frame.md` it is, same as `videos/sdlc` and `videos/osi-layers-1-sideways`.
- **Voice: Kokoro `af_heart`, speed 0.74** — the campaign's chosen switch away from the house
  `voices.en = am_michael`, per `series-bible.md` section 7. Offline and free. This overrides
  `.agents/design.md` for this campaign only; the shared spec file is not edited by this run.
- **No SFX anywhere** (series-bible section 7, parts 2-10). No BGM. Nothing was resolved
  through `media-use`, so `.media/manifest.jsonl` was not touched by this run.
- **Captions ON, English**, caption-pill keep-out respected: content planned into the top
  ~83%, nothing load-bearing below **y = 1594**.
- **The leak frame stays checkable.** F6 draws listener entries that are literally on screen
  and one count of those drawn entries. No memory figures, no percentages, no benchmark —
  names and numbers on screen trace to this film's own code (`OrderService`, `sendReceipt`).
- Render authorized up to `--quality draft` only, via `studio render`, once, at the end.
  `looks`, `delivery`, publish, social derivatives and the Arabic pass are NOT authorized.

## Notes

- **GATE decisions were made upstream** (workflow, flow, mode, series, part, aspect, language,
  length, narration, voice, captions, music, sfx, angle). This run executes the pipeline through
  to the draft render rather than stopping for approval, per the delegating instruction.
- **Part 1's frames had not landed.** `videos/repository-pattern/` at the start of this run held
  `BRIEF.md`, `design.md`, `frame.md`, `hyperframes.json` and the untouched 1.6 KB init
  `index.html` — no `compositions/frames/`. So there was nothing to compare this part's grammar
  against, and the bible (sections 4-6) plus `videos/osi-layers-1-sideways` / `videos/sdlc`
  (portrait precedent named in bible section 4) were used instead. `frame.md` here is built from
  the same `code-editorial` preset with the same brand tokens as part 1, so the two are
  reconcilable when part 1's frames exist.
- **Two live Learnings rows bind this run** (`.agents/product-marketing.md`, v3):
  (a) an element styled only by `id` while the CSS rule is a class renders unstyled at 0,0 and
  still passes `check` — every authored element carries its class as well as its id;
  (b) no TextPlugin ships, so `tl.set({ text: … })` silently no-ops — the F6 listener count and
  the F5 stack-frame labels use the sanctioned `{t, text}` step array read by a time proxy with
  `onUpdate` assigning `textContent`, never a text tween. Both are proven by snapshot, not lint.
- `studio/known-traps.md` items followed: 1 (`id-without-css`), 2 (`inline-transform` — every
  tweened span is `display:inline-block`), 3 (`text-tween`), 4 (`captions-lane` — via
  `studio assemble`, never hand-added), 5 (`audio-attrs`), 6 (`font-missing` — only faces that
  exist under `assets/fonts/` are named; Figtree is not, so body stays Inter), 9
  (`nondeterministic`), 10 (`fromTo` `immediateRender` on delayed entrances), 12 (contrast floor
  on muted ink), 13 (type floor), 14 (caption keep-out).
- `studio/SUPERSEDED.md` respected: no per-project `cue-times.mjs`, `merge-cues.mjs`,
  `engine-kokoro.mjs` or `.retime.mjs` was copied. Voice/timings/assembly go through
  `studio voice` -> `studio cues` -> `studio assemble`.
- **Render usage:** `npx hyperframes usage --json` at workflow start returned
  `{"status":"unknown","reason":"unsupported_harness"}` — usage is unknown, no allowance
  assumed. Re-checked before the render.
- `npx hyperframes skills update faceless-explainer` **FAILED** on this machine's network
  (`Update failed: can't check skills freshness (GitHub manifest unreachable) — refusing to
  report success. Retry when online.`). Built from the installed on-disk skill at
  `C:\Users\AmrPC\.qoder\skills\faceless-explainer`, not from memory; failure surfaced here as
  required. `npx hyperframes init` reported the same offline condition.
- **Parallel-production constraints honored:** writes stayed inside `videos/pattern-observer/`;
  `.agents/**`, `writing/backend-patterns/series-bible.md`, `studio/**` and
  `.media/manifest.jsonl` were read only. No `preview --background` was started (bible section 8
  rule 4) — frames were reviewed with `snapshot --at`. One render, draft, at the end.
