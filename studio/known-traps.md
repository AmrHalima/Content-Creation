# Known traps — evidence and the cheap way out

Every entry below cost real time in this workspace. `studio verify` automates the
ones marked **automated**; the rest are judgment rules for whoever authors frames.

Rules are ordered by how much they cost when missed.

---

## 1. `id-without-css` — an animated element no stylesheet rule matches · **automated**

An element carrying only `id="f4-note"` while the CSS declares `.f4-note` renders
**unstyled at 0,0 in the default serif**, on top of every other unstyled element.
`npm run check` reports 0 errors throughout.

- Evidence: `videos/osi-layers-2-the-seam` — five elements (kickers, notes, the F6
  record card) collided in the corner; found only by reading snapshots.
- Rule: every authored element gets the class as well as the id, and is verified by
  snapshot, not by lint.
- Cheap: `studio verify <dir>` before anything else.

## 2. `inline-transform` — transforms on inline elements are ignored · **automated**

GSAP writes `transform` onto a bare `<span>`; the browser drops it. The element
fades but never moves — and it still passes check.

- Evidence: P2's layer-4 label (`.f2-slotlabel`). P1's grammar already sets
  `display: inline-block` on every animated span; the clone skipped it on one.
- Rule: anything tweened in x/y/scale is `inline-block`, `block`, or flex.

## 3. `text-tween` — TextPlugin is not shipped · **automated**

`tl.to(el, { text: "QUIC" })` is a silent no-op. The runtime has no TextPlugin.

- Evidence: `videos/osi-layers-1-sideways` — a label swap passed check while not
  moving on screen.
- Sanctioned shape (used in P1/P2/P3 and `sdlc`): a `{t, text}` step array read by a
  time proxy whose `onUpdate` assigns `textContent`. `studio verify` accepts that and
  flags the tween.

## 4. `captions-lane` — the assembler does not emit `data-track-kind` · **automated**

`assemble-index.mjs` mounts `#el-captions` without `data-track-kind="captions"`.
It was hand-added in all four projects that shipped captions, and had to be re-added
after every re-assembly.

- Cheap: `studio assemble` runs the skill assembler **then** patches it. Do not hand-
  assemble.

## 5. `audio-attrs` — `<audio>` without id/start/duration renders silent · **automated**

`lint` errors `media_missing_id`, and the render comes out with no sound. Hand-written
markup is where this appears (assembled output is fine).

- Evidence: `videos/product-intro/index.html` still carries an `<audio>` with no id, no
  start and no duration (reported by `studio verify`, not yet fixed — the project is
  closed and read-only).

## 6. `font-missing` — a `@font-face` with no file on disk · **automated**

Names an unsourced family and the browser falls back; lint also fails.

- Evidence: `.agents/design.md` licenses **Figtree** as the body face; there is no
  Figtree file anywhere in the workspace. Every project that named it fell back to
  Inter. P1's brief records this explicitly.
- Rule: name only faces that exist under `assets/fonts/`, or ship the file first.
  `studio doctor` reports which brand faces are missing.

## 7. Word timings — ASR is unavailable, and the meta gets wiped · **automated**

`hyperframes transcribe` returns `whisper_unavailable` on this machine (Parakeet
download fails on the network). Kokoro and Gemini both emit `words: []`. Then
`captions.mjs` reports **"no usable words"** and skips the entire film.

Two traps in the fix:

- the neutral sidecar `audio_engine_meta.json` is what later passes rebuild from, so
  writing words into `audio_meta.json` alone is **undone by `fetch-sfx`**;
- ordering: the merge must run **after** generate and fetch-sfx, **before** captions.

- Evidence: three separate scripts solved this three times —
  `videos/osi-layers-{1,2}/.hyperframes/cue-times.mjs`,
  `videos/osi-layers-3-leaks/.hyperframes/merge-cues.mjs`,
  `videos/sdlc/tools/build-word-timings.mjs` (which hard-codes a silencedetect table
  for one film's nine lines).
- Cheap: `studio cues <dir>` — local faster-whisper (`small`, cached) measures real
  timings, aligns them onto the **approved script text** so ASR spelling never leaks
  into captions, writes **both** metas, and falls back to the deterministic
  char-proportional estimate when there is no model. Run it after every audio pass.

## 8. Provider cascade — "auto" picks a voice that cannot speak · **partly automated**

`pickProvider`'s auto order is `heygen → elevenlabs → kokoro`.

- **Gemini is not in the cascade.** Arabic must set `provider: gemini` explicitly
  (`Kore` is the only proven Arabic voice here; free tier caps at 3 requests/minute —
  a 10-line narration rate-limits mid-run).
- **Kokoro has no Arabic.** Asking it for Arabic throws "non-English needs an explicit
  --voice", which reads like a code bug but is a provider mismatch.
- **Free-tier ElevenLabs keys reject library voices** with HTTP 402
  `paid_plan_required`, and the engine swallowed the subprocess stderr so it surfaced
  as `exited with status 1`. A hand-patch to `media-use/audio/scripts/lib/tts.mjs`
  fixed the message in the workspace copy only — `studio doctor` now reports the drift
  between the three installed copies, because a `skills update` erases it.
- **`design.md` `voice_id` is empty**, so ElevenLabs cannot be used at all until the
  user's voice id is filled in. Never silently substitute a provider; report it.
- Cheap: `studio voice <dir>` pins the provider from `BRIEF.md` through
  `studio/tools/engine.mjs` (one shared adapter, replacing the per-project copies).

## 9. `nondeterministic` — wall clock, randomness, network · **automated**

The renderer seeks. `Date.now()`, `Math.random()`, `performance.now()`, or a fetch
produce different frames per pass, so a re-render is not the same film.

## 10. `fromTo` with default `immediateRender`

Paints the "from" state at t=0, so an element meant to appear at 40s is visible from
the start and stacks on its sibling.

- Evidence: `videos/sdlc` frame 04 — "DEVOPS" printed over "AGILE" from t=0.
- Rule: pass `immediateRender: false` on delayed `fromTo`, or use `from`/`to` pairs.

## 11. Layout-snapping tweens

Animating `letterSpacing` (or width/height of a flex child) reflows the layout and is
not seek-safe. Use `scaleX` settles instead. Also: `objectPosition` / `transform-origin`
fraction syntax differs between CSS and GSAP — pick one and keep it.

## 12. Contrast floor on muted text

Muted tokens at `rgba(20,19,19,0.45–0.55)` on cream fail AA (2.89–4.07:1). One shared
token caused 17 findings in `sdlc`; fixed to 0.64/0.74 while keeping the hierarchy.
`check` catches this — run it before presenting, not after rendering.

## 13. Type floor

Reading text below ~28px at 1080×1920 (≈2.6cqw) is illegible on a phone. Annotation
lines may go to 1.35–1.7cqw but must carry `data-layout-ignore` so they do not trip
the layout gates. P2's first pass shipped several reading labels at 21–27px.

## 14. Caption keep-out

The framework holds content to the top ~83% of a portrait canvas — nothing
load-bearing below **y ≈ 1594** on 1920. This is a framework rule, not a style choice,
and a series does not relieve it.

## 15. Render ≠ sources

A render is only valid for the bytes it was made from. `studio batch render` records a
content stamp of `index.html` + frames + audio metas and `studio status` flags a render
whose sources changed afterwards.

- Evidence: `osi-layers-2` had an unauthorised draft MP4 at 05:43 alongside the
  delivery render at 13:13; the earlier "no MP4s exist" check was true when said and
  stale by the time it mattered.
- Also: **a green signal means "not yet looked at"**. Re-verify at the moment of the
  decision, and read pixels (`snapshot`) rather than trusting coordinates.

## 16. Turn budget

A single agent pass burned ~26M subagent tokens, 184 tool uses and 2+ hours to reach
"three scripts and three storyboards, zero pixels". Frame authoring is the expensive
stage: one frame per worker, packets inlined, no re-reading of skill docs per worker,
and **one project per run**. Batch the gates with `studio` instead of re-asking an
agent to walk them.

## 17. The network is unreliable here

`npx hyperframes skills update` fails with `curl 56` resets; `models install parakeet`
dropped 192 MB four times; `huggingface.co` DNS intermittently fails outright.

Rules: never put a network call on the critical path of a batch; prefer cached
artefacts (faster-whisper `small` is cached, Parakeet is not); surface a skills-refresh
failure rather than reconstructing a workflow from memory.

## 18. Housekeeping that bites

- `.thumbnails/`, `.waveform-cache/`, `.hyperframes/preview/` grow per project; they
  are regenerable, never authored.
- `AGENTS.md` and `CLAUDE.md` are byte-identical per project, in two template
  generations across the workspace — they are init artifacts, not project docs. Real
  state lives in `BRIEF.md`.
- `renders/` should hold exactly one deliverable; archive the rest (the earlier run
  did this correctly with `renders/_stale-draft-*`).
