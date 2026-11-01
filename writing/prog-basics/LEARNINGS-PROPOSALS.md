# prog-basics — proposed Learnings rows

Collected during the 11-part build on 2026-10-27. **Not yet in `.agents/product-marketing.md`** —
that table needs your approval and a `Document version` bump, and you were away, so the candidates
wait here with their evidence. Each one is a trap that a green `verify` + green `check` let through.

| # | Row | Evidence | Gate that missed it |
|---|---|---|---|
| 1 | A caption skin that declares a `font-family` with **no matching `@font-face`** renders in system sans. Audit `font-family` vs `@font-face` per project; `verify`'s `font-missing` only fires when a declared `@font-face` has no file on disk. | pb-01 and pb-02 both shipped captions in system sans on v1. Found by the re-pass, then confirmed series-wide with `.tmp/font-audit.mjs` (11/11 clean after). | `verify` and `check` both passed. |
| 2 | A rule using `left`/`top` with no `position:absolute` draws at 0,0 when the element carries a class — the id-less twin of the 2026-10-22 trap. | pb-01 re-pass: two rings at 0,0. pb-11: F4's six code lines had no `top`, producing 12 `content_overlap` errors. | Both gates, because the element is classed. |
| 3 | JetBrains Mono **ligates `>=` into `≥`** inside code chambers. Set `font-variant-ligatures: none`, or the video teaches a symbol that does not exist in Python. | pb-09, caught in snapshots. | `check` passes — it is a rendering behaviour, not a contract violation. |
| 4 | Screen motion by **pairwise max-luma-delta across 0.4s snapshots**, not PSNR alone. PSNR hides a dead tail; max-delta < 20 is the flag. | pb-06: F5's last 1.3s had max delta 13/255 and 0.000% pixels moving — the film's only dead scene. | `check`'s motion pass reported 0/0. |
| 5 | Sibling-plate "highlighter" emphasis fails contrast only **mid-tween**. Use a self-contained amber plate with a clip-path wipe. | pb-05: ink-on-amber and dark-on-graphite states appeared between frames. | `check` samples endpoints. |
| 6 | SVG children of **scaled containers escape authored bounds**; verify rings/arcs with a luma strip below y=1344. | pb-11: F1's spinner drifted to y≈1150-1700, into the platform overlay zone. | `check` layout pass. |
| 7 | Reserve **y ≤ 274 for the kicker row**; hero chips collide with it otherwise. | pb-09: F2/F3/F4 hero chips overlapped the kicker row. | `check` passed the first variants. |
| 8 | Frame authoring is the expensive stage, not prose. **One worker per 1-5 frames**, with the campaign fixes inlined and re-reading campaign docs forbidden. | 4 of 8 build agents this run died mid-frame-authoring (service rejections at 15-71M subagent tokens). Every one of them had already finished brief/script/storyboard/VO/cues — so a resume packet that says "author frames only, don't read BATCH.md" completes the job in a third of the context. | Process, not render. |
| 9 | Never pipe `studio render` (or `check`) through `tail`. The pipeline's exit code becomes `tail`'s, so a failed render reports success. | pb-09: `render … \| tail -4` exited 0 with an empty `renders/` dir. Re-run unmasked exited 0 with a real 48.8s file. A ffprobe sweep is what caught it. | Self-inflicted. |
| 10 | A pre-decided brief still needs an interpreter run in the copy pass. | 3 of the user's own 11 pieces carried a technical error, and the campaign's own accuracy note for pb-10 (`case _ \| 'sat' \| 'sun'`, "confirmed by running it") was itself wrong. | Nothing — this is why stage 3 exists. |
| 11 | Two audience lanes can share one voice, but not one identity: parts built before a mid-campaign design rewrite read as a different series. | pb-01/02 were v1 (ice canvas, Inter/Caveat, 63-64 motion sites) while pb-03+ were v2 (graphite, Space Grotesk, 91-266). The seam was visible side by side. | Proposed during setup; both gates green on both sides of the seam. |

## Also worth recording

- **Runtime drift.** The approved spec said ~40s; delivered range is 39.0-51.7s (mean 44.8). It came
  from protecting the "easy to understand on one listen" bar, and was flagged rather than silently
  re-cut. Re-cutting now would need a full `voice` → `cues` → `assemble` cascade per part.
- **`studio assemble` still does not emit `data-track-kind="captions"`,** and the campaign caption
  skin still has to be copied into `.hyperframes/` by hand. Both are candidates for the assemble
  post-fix list.
- **`hyperframes usage --json` returns `status: unknown (unsupported_harness)`** on this harness for
  every stage of this run, so no allowance was guessed.
