---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 8 of 10
title: decorator
message: "The Decorator pattern adds responsibility by wrapping the same type — stackable at runtime, where inheritance would have baked it in at compile time."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral structural explainer — bible sections 1 and 3; no invented contrarian hook, no beginner framing)
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

English master of part 8 of the `backend-patterns` series: a faceless explainer on the backend
**Decorator pattern**. No URL, no footage — every visual is invented. Vertical shortform,
75-80s, hard ceiling 90s. Campaign lock: `writing/backend-patterns/series-bible.md`
(sections 3, 4, 5, 6, 7 and 8 are binding; this brief inherits them and re-argues nothing).

The spine is the series spine: **what problem it solves -> the anatomy -> the code shape ->
where it goes wrong.** Part 8 pays this claim: **a decorator adds responsibility by wrapping
the same type, stackable at runtime, where inheritance would have baked it in at compile
time**, and it ends on the misuse tell: **twelve nested wrappers nobody can debug, and
`gateway instanceof StripeGateway` reading false** — the wrapper answers the interface, it
never was the class.

Tone is peer-to-peer and dry (`.agents/product-marketing.md`). Density replaces thesis: one
sharp idea per frame, precise naming, no fake contrarian hook, no "what is a decorator?".

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **Deliberate break from grammar R's vertical stack (bible § 4).** The anatomy is drawn as
  **nested chambers** — a box inside a box inside a box (`cache` outside `retry` outside `log`
  outside the base), each ring carrying its own 2px ink border and its own label. Wrapping IS
  the shape; a vertical three-box stack would show a call graph, not containment. This is the
  portrait override the bible allows ("break the rule only where a comparison genuinely reads
  better across, and say so in the project's `## Customizations`"). Grammar R still carries
  F1 (caller / seam / implementation) and F7 (the before/after stack).
- **Grammar C twice** (the decorator class, then the composition expression), **Grammar X once**
  at the end-minus-one (inheritance explosion vs three decorators combined once).
- **No SFX** (bible § 7 bans marks for parts 2-10) and **no BGM**. Nothing is resolved into
  `.media/manifest.jsonl` by this run.
- **Captions ON, English**, caption-pill keep-out respected: content planned into the top
  ~83%, nothing load-bearing below **y = 1594** on the 1920-tall canvas.
- Render authorized up to `--quality draft` only, via `studio render`, exactly once. `looks`,
  `delivery`, publish, social and blog are NOT authorized by this run.

## Notes

- **Voice (pinned, never substituted):** Kokoro `af_heart` at speed 0.74 — offline, free. This
  is the campaign's chosen switch away from the house `voices.en = am_michael`
  (bible § 7), for this campaign only; `.agents/design.md` is not edited by this run.
  `npx hyperframes auth status` reports *Not signed in to HeyGen (non-interactive)*, so the
  pipeline falls to local engines — which is what this brief wants. ElevenLabs stays unusable
  (`voice_id: ""`, free-tier HTTP 402). If `af_heart` fails, report it; do not silently swap.
- **`@decorator` syntax sugar is deliberately omitted.** TypeScript/Python `@` decorators
  change a class or method *definition* at decoration time; the GoF pattern is a *runtime
  object graph of wrappers*. The difference needs more than one clause to say honestly, and
  part 8's runtime-vs-compile-time claim is already doing that work, so the language feature
  does not appear in narration or on screen. Recorded here as an omission, not an oversight.
- **Two live Learnings traps bound this run** (`.agents/product-marketing.md` Learnings):
  (a) an element styled only by `id`, while the CSS rule is a class, renders unstyled at 0,0 and
  still passes `check` — every authored element here carries its class, and each nested ring is
  verified by snapshot at the moment it lands (an unstyled nested box collapsing to 0,0 is
  exactly the recorded failure); (b) no TextPlugin in the shipped GSAP, so `tl.set({ text: … })`
  silently no-ops — in-place label swaps use the time-proxy + reverse-search discrete sequence.
- **Part 1 comparison:** `videos/repository-pattern/` existed at workflow start with
  `BRIEF.md`, `design.md` and `frame.md` (byte-identical to `videos/osi-layers-1-sideways/frame.md`,
  md5 `01d7c6b31c0a0988e9388ef1a343068e`), but **no `compositions/frames/` yet** — its frame
  grammar had not landed, so this part follows the bible plus the shared code-editorial
  `frame.md`. Same tokens.json brand colors as part 1, so `build-frame.mjs` reproduces the
  campaign's `frame.md` deterministically.
- **Registry searched before hand-building the code chambers.** `npx hyperframes catalog --query
  "code snippet typing"` returned 24 of 448 moves, nearest `code-typing` (token-streamed typing reveal
  with a caret that tracks the frontier) plus `code-snippet-*` VS Code/Terminal workbench blocks.
  **Not adopted:** bible § 4 grammar C fixes the code chamber to this campaign's own chrome (ink
  chamber, 2px cream border, filename title bar, ≤6 lines, load-bearing tokens in Ember/Lavender,
  one declaration per line revealed on its spoken cue), which those blocks' editor themes would
  overwrite; `videos/sdlc` and the three OSI parts shipped hand-built chambers with no registry block
  installed (`sdlc/compositions/` holds only `captions.html` + `frames/`). `npx hyperframes add` would
  also need a registry fetch this machine cannot be trusted with mid-run.
- `.agents/design.md` copied to `design.md` at init so `hyperframes-creative`'s spec precedence
  (`frame.md` → `design.md`) picks it up. `frame.md` is regenerated from the `code-editorial` preset by
  `build-frame.mjs` and is byte-identical to part 1's (md5 `01d7c6b31c0a0988e9388ef1a343068e`), so the
  series' look is one file, not ten interpretations of it.
- **Parallel-production:** this run writes only inside `videos/pattern-decorator/`. No
  `preview --background` (bible § 8.4) — frame review is `snapshot --at` only.
- **Render usage:** `npx hyperframes usage --json` returns `{"status":"unknown",
  "reason":"unsupported_harness"}` at workflow start — usage is unknown; never guess an
  allowance. Re-check before the render.
- `npx hyperframes skills update faceless-explainer` FAILED on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report success`).
  Building from the installed on-disk skill at `C:\Users\AmrPC\.qoder\skills\faceless-explainer`,
  not from memory; failure surfaced here as required.
