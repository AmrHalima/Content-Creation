---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 3 of 10
title: pattern-singleton
message: "Singleton is a lifetime decision wearing a pattern's clothes, and a DI container gives you one instance with no static."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral explainer, per series-bible sections 1 and 3 — no invented contrarian hook, no beginner framing)
narration: yes
audience: experienced backend developers who have written CRUD, have shipped a singleton they are glad about, and want the mechanics and the failure modes named precisely
style_preset: code-editorial
voice: af_heart
tts_provider: kokoro
voice_speed: 0.74
captions: en
music: none
sfx: none
---

## Intent

English master of part 3 of the ten-part `backend-patterns` series: a faceless explainer on the
**Singleton pattern**. No URL, no footage — every visual is invented. Vertical 1080x1920, ~78s,
hard ceiling 90s.

The campaign chose a **neutral structural explainer** over the house opinionated-thesis default,
and that choice is honored, not argued (`writing/backend-patterns/series-bible.md` § 1). The spine
is fixed and checkable: **what problem it solves -> the anatomy -> the code shape -> where it goes
wrong**, and the part ends on the misuse tell.

What this part pays (§ 3, part 3): **Singleton is a lifetime decision wearing a pattern's clothes
— a DI container gives you one instance with no static.** It ends on the tell: **a hidden global
dependency, and state that survives between tests.**

The accusation is stated as mechanics, never as "Singleton is evil". This audience has shipped
singletons they are glad about; what breaks is **test isolation, hidden coupling, and lifecycle**,
and that is what the frames say.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **Grammar R** (caller / seam / implementation, stacked, 2px ink chambers, seam in a dark
  chamber) is the spine and is on screen whenever narration names the anatomy. For Singleton the
  three actors are the **caller**, the class's **static holder**, and **the one instance**; the
  import arrow points back **up** to the caller, because the caller names the concrete class —
  that arrow is the hidden-dependency mechanism, not decoration.
- **Grammar C** (<=6-line TypeScript code chamber) carries the code shape: private constructor +
  static field + accessor, and later the caller's line.
- **An object-identity frame**: two call sites resolving to the same box, with `===` holding.
  The one-instance claim is worth a frame, and it is the honest proof of it.
- **Grammar X** — one before/after split, the last frame only: the private-constructor static
  holder (top, the tell) vs. a container-owned instance the caller declares (bottom). This is the
  frame the viewer screenshots.
- **No SFX anywhere** (§ 7: parts 2-10 spend none). **No BGM** (`music: none`). Default silence.
- **Captions ON, English**, keep-out respected: nothing load-bearing below **y = 1594** on the
  1920-tall canvas.
- Render authorized up to `--quality draft` only, via `studio render`, exactly once at the end.
  `looks`, `delivery`, publish, social set, blog and the Arabic pass are NOT authorized.

## Notes

- **Voice: Kokoro `af_heart` at speed 0.74.** This is the campaign's chosen switch away from
  `.agents/design.md`'s `voices.en = am_michael`, overriding the house default **for this campaign
  only** (`series-bible.md` § 7). `af_heart` is the Kokoro CLI default and already `design.md`'s
  `fallback_voice`, so the house spec file is not edited by this run. Offline and free.
- ElevenLabs stays unusable here (`design.md` carries `voice_id: ""`, free-tier keys reject
  library voices with HTTP 402). HeyGen only on explicit request. **No silent provider
  substitution** — if the `af_heart` pin fails, report it rather than falling to `am_michael`.
- **Order independence** (§ 2): zero references to other parts, no "as we saw". The first two
  narration lines re-establish the pattern's problem (~10-18 words) before any claim. No sibling
  pattern is named in this part; the DI container carries the boundary on its own.
- **Copy constraints** (§ 6): contrast-reveal construction banned (zero occurrences targeted, not
  one); no em-dashes in narration, on-screen text or captions; one triad maximum (spent on the
  anatomy); no mnemonics; no invented statistics; names follow reviewer-style TypeScript naming.
- **Two live Learnings traps bound this run** (`.agents/product-marketing.md` Learnings):
  (a) an element styled only by `id` while the CSS rule is a class renders unstyled at 0,0 and
  still passes `check` — every authored frame element carries its class, not just its id;
  (b) there is no TextPlugin in the shipped GSAP, so `tl.set({ text: ... })` silently no-ops —
  in-place label swaps use the time-proxy plus a reverse-search discrete sequence, never a text
  tween. Both are caught by snapshot, not by lint.
- **Deterministic layer only** for the pipeline: `studio voice` -> `studio cues` ->
  `studio assemble --captions`. No hand-written cue scripts; `data-track-kind="captions"` is never
  hand-added.
- **Parallel production** (§ 8): this run writes only inside `videos/pattern-singleton/`.
  `.agents/design.md`, `.agents/product-marketing.md`, the series bible, `studio/**` and
  `.media/manifest.jsonl` are read-only. No `preview --background` (port collisions); frame review
  goes through `snapshot --at`. One render, draft, at the end.
- `.agents/design.md` copied to `design.md` at init so `hyperframes-creative`'s spec precedence
  (`frame.md` -> `design.md`) picks it up.
- **Body face is Inter, never Figtree**: `design.md` licenses Figtree but no Figtree file exists on
  disk (known-traps § 6), so naming it would produce an unsourced `@font-face` and a silent
  fallback.
- **Render usage:** `npx hyperframes usage --json` returns
  `{"status":"unknown","reason":"unsupported_harness"}` — usage is unknown; never guess an
  allowance. Re-checked before the render.
- `npx hyperframes skills update faceless-explainer` **FAILED** on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report success`).
  Building from the installed on-disk skill at `C:\Users\AmrPC\.qoder\skills\faceless-explainer`,
  not from memory; failure surfaced here as required. Same for `hyperframes init`, which reported
  `Skills freshness check unavailable (offline?)`.
- **Sibling grammar source:** `videos/repository-pattern/frame.md` is byte-identical to
  `videos/osi-layers-1-sideways/frame.md` (both 21082 bytes) — the same `code-editorial` remix onto
  the same brand tokens. Frame grammar for this part therefore matches part 1 by construction
  (proven with `diff -q`, not assumed).

## Frame pass state (written back after authoring; re-check usage before rendering)

- 8/8 frames authored in `compositions/frames/`, all `status: animated` in `STORYBOARD.md`.
  Grammar R carries F3 + F6 (same chamber coordinates, deliberately), Grammar C carries F4 (5
  lines) and F5 (2 lines), Grammar X carries F8 (two stacked dark chambers).
- **156 narration words → 74.475s** measured. `studio voice` pinned `provider=kokoro
  voice=af_heart speed=0.74` from this file's frontmatter; `studio cues` measured real word
  timings with `faster-whisper:small` (no estimated fallback), and `sync-durations` rewrote all 8
  frame durations. Assembly: 8 frame clips, 8 voice wavs (track 10), 62 caption groups (track 2),
  no BGM, 0 SFX. Against the `length: 78s` expectation: **-5.525s**, inside the ~75-80 band's
  lower edge and well under the 90s ceiling.
- `transitions.mjs inject` stamped 2 crossfades (F1→F2, F7→F8, 0.5s each) and extended those two
  frame roots; `verify` confirmed both. `data-track-kind="captions"` was patched by
  `studio assemble`, and survived inject (inject never touches track 2) — confirmed by grep at
  `index.html` line 191, not assumed.
- **Bible deviations, all deliberate and recorded here rather than silently reconciled:**
  1. `series-bible.md` § 4 sets Grammar C's muted code ink at `#8A8A7A`. On the dark chambers that
     measures **4.48:1** and fails WCAG AA (the one `check` contrast warning). Muted code text on
     `#1A1A1A` / `#252320` is therefore `#8F8F84` (5.3:1 / 4.8:1) in F4, F5, F7 and F8. The
     bible's value is kept anywhere it passes. Contrast 55/55 AA after the change.
  2. § 4 says Grammar C fragments carry "one declaration per fragment". F5's is a two-declaration
     call-site pair (`const pool` / `const cfg`), because the frame's claim is that two references
     resolve to one object and a single call cannot say that. Still 2 lines, well inside the 6-line
     cap.
  3. F8 spends Lavender on the load-bearing injected parameter (Grammar C's "Ember or Lavender"
     allowance) and puts the `container` label on a Forest badge instead, so the design spec's
     "lavender is the only primary-action colour" is spent exactly once per frame.
  4. `#f08-close` ("one instance, no static") reveals at 6.90s rather than on the final word, to
     give the film's last on-screen line the ≥2s hold `check` asks for. It costs nothing: the line
     restates line 8's first half.
- **Two traps found by pixels, not by gates** (both fixed): a stray `same process` label in F7
  whose class rule had been deleted rendered unstyled over `test B`'s border — `check` and
  `studio verify` were both silent, because `verify`'s `id-without-css` scan is scoped to animated
  elements; and F4's code chamber first shipped 180px taller than its five lines needed.
- **No in-place text mutation anywhere**, so the missing-TextPlugin trap is avoided by
  construction: F7's `retries = 0` → `retries = 7` is two stacked nodes crossfading.
- `studio verify`: **0 high, 0 medium across 10 html files**. `npm run check`: **0 errors,
  0 warnings** (Lint 0/0, Runtime 0/0, Layout 0 issues / 9 samples, Motion 0/0, Contrast 55/55 AA,
  Craft 0/0).
- **`check` is flaky on this network**: one run failed to fetch `gsap@3.14.2` from the CDN
  (`net::ERR_CONNECTION_TIMED_OUT`), which blanked the runtime and produced 8 bogus `dead_stretch`
  warnings and a "Check failed". Re-run rather than "fixing" the warnings. Same caution applies to
  a render: if GSAP cannot load, every frame is blank while audio still muxes correctly, so the MP4
  is verified by extracted pixels, not just by `studio render`'s own proofs.
- **No preview server started** (campaign rule § 8.4). Frame review went through
  `snapshot --at` at 10.9 / 21.3 / 30.9 / 40.6 / 47.8 / 57.5 / 65.0 / 73.6s and the images were
  read.
- Usage at workflow start and again immediately before the render:
  `{"status":"unknown","reason":"unsupported_harness"}` — usage is unknown, no allowance guessed.

