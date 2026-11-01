---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 20 of 22
title: prog-basics-20-short-circuit
message: "`and` and `or` stop the moment the answer is settled, so a cheap check in front of a risky one keeps the risky one from ever running"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Tag ("Tag the dev who writes nested ifs for this.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~30s
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
difficulty: INTERMEDIATE (the only [M] part in the Day 2 tranche; reflected in the badge text on every frame)
identity: bench v2.1 (frame.md Day 2; deliberately NOT the prior 15 projects' look)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 75
grammar: G1 G3 G3 G3 G5 (the manifest's shorthand is `G1 G3 G3 G5`; F2, F3 and F4 are all G3 chambers)
carrier: false (14/21/22 proved G6/G7/G8; 20 clones a carrier)
pin: hyperframes@0.8.208
---

## Intent

English master of part 20 of `prog-basics` (Day 2 / BASICS II): short-circuit evaluation. Portrait
1080x1920, ~30s (measured, see Gate state), ceiling 54s. Faceless explainer: no URL, no footage, every
visual invented on the campaign's own identity. Copy source of record:
`writing/prog-basics/pieces/20-short-circuit.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4
example, F5 CTA). Grammar: `frame.md` v2.1 § 4 — G1 hook, **G3 code chamber ×3** (F2 the gate that
stops early, F3 the guard, F4 the runnable card), G5 CTA.

Clone source (read-only, named by `frame-day2.md` § 11 and `BATCH-day2.md`):
`videos/prog-basics-11-for-vs-while/compositions/frames/03-gate.html` — the gate that re-tests. F2
takes that apparatus and changes the one thing that matters: **this gate stops instead of looping**.
The wire draws out of the gate and retracts before it reaches B; there is no loop-back arc, no
`pass 1/2/3` chips and no exit arrow, because a re-testing gate is part 11's lesson and not this one.
Shared atoms are copied whole, not re-derived: the `.gnd-*` ground, `.pb-kicker`/`.pb-ktext`/
`.pb-kbadge` chrome (badge copy `INTERMEDIATE`), the `.cd-root`/`.cd-bar`/`.cd-file`/`.cd-lang`/
`.cd-line` G3 chamber with the `PYTHON` chip, the `.f3-lmask` + `.f3-caret` P3 type-on pair, the
`.f3-gate`/`.f3-wire`/`.f3-body` gate apparatus, and pb-21's `.f3-tag` counted-tag atom (used for
`RAN 1 OF 2`) and `.f4-w > .f4-hl + .f4-ht` self-contained say-plate. G2 `empty` (3px **dashed**
`--line`, no value, one dim mint caret blinking at 1s) is `frame-day2.md` § 4's own definition.
Font set, caption skin and pin copied per `BATCH-day2.md`'s recipe.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing — part of the audience reads English as a second language. The hook and the
  CTA mechanic are the user's words and are verbatim. This is the tranche's **only [M] part**, so the
  assumption is higher while the gloss bar is not lower: it never explains what `if` is, never
  explains booleans, and uses `A` and `B` as names without apology (the approved re-cut is exactly
  what makes those names safe — they get named before they are used). Glosses that do appear, all in
  the same frame the term does: `condition` → `condition = the yes or no you ask` (F1, since the hook
  cannot be edited); `skips` → `skips = it never runs` (F1); `None` → `None = no user yet` (F3); the
  mechanic itself → the F2 eyebrow `SHORT-CIRCUIT = IT STOPS EARLY`. "risky checks" is glossed by the
  user's own clause ("making sure something exists before reading it") and by F3's dashed chamber,
  which is the read that never happens. No sentence over 14 words, no semicolons, no "which is what
  lets you", no em-dashes on screen, no "it's not X, it's Y" (spent on part 05's hook), no
  "simply/just/easy/of course", no `O(…)` notation anywhere.
- **Motion.** Two meaning-carriers, both made physical, plus the payoff. F2 = **the gate that stops
  early**: `A` resolves `False`, the rail runs toward `B` and **releases before it arrives** (a
  scaleX out-and-back), and `B` is a G2 `empty` dashed chamber with a blinking caret that **never
  lights** while the counted tag reads `RAN 1 OF 2` in `--muted` mono. That tag is the part, so it is
  sized as reading text. F3 = **the guard**: `None` drops into the `user` box (P2), a CSS connector
  reaches for `.is_admin` and retracts, the dashed chamber stays dark, the chip reads `NO ERROR`. F4 =
  **the run**: P3 type-on across four lines, one amber say-plate on `user and user.is_admin` at its
  spoken onset, and a terminal strip with a muted `>>>` and nothing after it. F5 = P10 `strike-out`
  across the nested-`if` fragment (the CTA's joke made visible) beside the guarded one-liner, then
  the `TAG THEM` plate. Every emphasis is proved by pixel deltas between neighbouring snapshots, not
  by intent. Zero coral in this film: nothing raises, so `None` is a **value** and goes in mint.

## Deviations from the piece file and from the clone source (all recorded, none silent)

1. **The approved re-cut is applied verbatim** (`CORRECTIONS-day2.md` § A, part 20): "In A and B, if A
   is false, B never runs." → **"Take A and B. If A is false, B never runs."** No other explain line
   was touched; hook and CTA are the user's words.
2. **`--speed 0.93` is passed explicitly**, against Day 2's "no worker passes `--speed`" line in
   `series-bible-day2.md` § 0, because the house lookup misses: `studio.mjs` reads `voices.en` while
   `.agents/design.md` nests the block at `voice.voices.en`, so an unflagged run ships 0.74 (26% slow).
   The `--dry` run is read before generating. Same finding, same fix as pb-21/22; the one-line repair
   belongs in `studio/tools/studio.mjs`, which is read-only to this run.
3. **The em-dash in F4's comment line is gone.** The frame spec asked for
   `# nothing prints — no error`; `frame-day2.md` § 9 bans em-dashes on screen, so the line reads
   `# nothing prints, no error`. Same claim, same four lines, same terminal strip.
4. **The guard's resolved value is never shown on screen.** Re-executed on Python 3.13.15:
   `user = None; user and user.is_admin` evaluates to **`None`**, not `False`, because `and` hands
   back an operand. The § 4 ledger's `→ False` is `bool(...)`-wrapped
   (`bool(u and u.is_admin)` in `.tmp/day2_accuracy.py`). Rather than print a value that would be
   wrong in the bare form and need a whole second lesson in the true one, F4 shows what is actually
   observed: the branch never runs and stdout is empty. Recorded in the piece file's `## Accuracy` as
   deliberately held back (the ledger already says off-screen).
5. **No amber plate on a mint value.** F2's `False` gets a **border and text flash** to `--say` for
   ~0.26s and returns to `--value` mint, following pb-21's recorded finding ("lights `--say` is a
   colour flash, not a filled plate"); a solid amber plate behind a mint value breaks § 1's colour
   contract.
6. **Amber stays singular.** F2/F3 eyebrows are fully `--muted` — the clone source emphasises its
   keyword in amber inside the eyebrow, which would put two amber marks on the board at once with the
   say-plate. On F5 the P10 strike rule is **drawn in `--muted`, never `--say`**, because the
   `TAG THEM` plate owns the only amber on that frame from 0.18s; and the struck block's
   **container** border/background dims while its code keeps full ink, so no plate ever sits inside a
   0.42 element (§ 14's measured 2.87:1). On F2 the say-plate retires to ink at 5.14, before the
   gate's amber border flash at 5.36.
7. **`RAN 1 OF 2` is sized up** from pb-21's 2.7cqw counted tag to 3.0cqw (~32px), still `--muted` on
   `--panel-2` with a 2px `--line` border. That tag *is* the part, so it is reading text, not chrome,
   and carries no `data-layout-ignore`.
8. **F2 drops the loop-back arc, the pass chips and the exit arrow** from its clone source (item 10
   of § 14 keeps connectors out of SVG anyway; this frame needs no connector at all). The difference
   between part 11's F3 and this frame is exactly "re-tests" versus "stops".
9. **Grammar expanded to five tokens.** `BATCH-day2.md` and `frame-day2.md` § 11 write this part as
   `G1 G3 G3 G5`, four archetypes for a five-frame film; F2, F3 and F4 are all G3 chambers, so
   `BRIEF.md` records `G1 G3 G3 G3 G5`.
10. **Runtime lands under the tranche's 30s floor at standard air** (75 spoken words ≈ 23s of speech
    + 1.0s/frame and 2.0s on F5). Permitted lever 1 is taken: **F5's pad is grown** (air is shape on
    the frame that loops under platform chrome). **No words were added** (bible-day2 § 0.2, the user's
    explicit choice) and no other frame's air was shrunk or inflated. The measured number is reported
    at the gate.
11. **Spoken forms** (documented in the piece file's `## Spoken code`, never a wording change):
    `and/or` → "and or" (the voice never says a slash); `user.is_admin` → "admin";
    `if A and B:` → "if A and B" with the letters said as letters.
12. **No coral, no BGM, no SFX, no network assets, no render.** Nothing raises in this part, so
    `--err` does not appear in any of the five frames.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + `OFL-space-grotesk.txt` /
  `OFL-jetbrains-mono.txt` copied from `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (the v2
  set; md5-verified against the source). Every `@font-face` in every frame names a file that exists on
  disk. No font fetches. Batch day2's note: Inter/Caveat are the v1 lineage and are not used here.
- Voice: Kokoro `af_heart` at **0.93** through `studio voice`, provider pinned by this file (never
  `auto`). ElevenLabs is unusable here (`voice_id` empty in `.agents/design.md`, free-tier keys return
  HTTP 402) and was not substituted; HeyGen not used. No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `frame.md` is `frame-day2.md` v2.1 copied verbatim; `design.md` is the workspace brand copy per the
  recipe and `frame.md` overrides it for every video decision in this campaign.
- Ligature guard on every frame that renders code (`font-variant-ligatures: none` +
  `"liga" 0, "calt" 0, "dlig" 0`) — `<=` and `->` must not ligate into characters a learner cannot
  type. Applied on the stylesheet of all five frames, not only the code ones, per § 14.
- Zero network assets: no icons, no images, no BGM/SFX. The GSAP tag in `index.html` is the
  generator's own CDN script line, identical to every shipped sibling in this series.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No publish, no schedule, no Arabic pass, no BGM,
no SFX, no `preview --background` (parallel workers; snapshots only). Nothing was written outside this
project directory and `writing/prog-basics/pieces/20-short-circuit.md`.

- `## Accuracy` in the piece file is **confirmed**: re-executed on Python 3.13.15 for the exact
  fragments this film draws — with `user = None` the guard expression raises nothing and the branch
  does not run (stdout `''`), and with `A = False` the second operand is never called (side-effect
  list stays `[]`, control `A = True` records `['B ran']`).
- Frame durations are the measured VO plus authored air, written into `STORYBOARD.md`: 1.0s on F1-F4
  and 3.0s on F5, so every 0.5s crossfade sits inside silence and no sentence spans a cut
  (bible-day2 § 12).

## Gate evidence, observed at the end of this run

- `studio voice` printed
  `▶ prog-basics-20-short-circuit — provider=kokoro voice=af_heart lang=en speed=0.93`. The
  **unflagged** `--dry` printed `speed=0.74` first, which is exactly why the flag is mandatory here.
  `audio_meta.json` carries **5 voice lines, one per frame, 76 aligned words**, `bgm: null`, `sfx: []`;
  `audio_engine_meta.json` carries the same 5 with words, so a later `fetch-sfx` cannot wipe them
  (known-traps § 7).
- Measured speech: F1 3.029 / F2 7.019 / F3 4.885 / F4 6.208 / F5 2.453 = **23.594s**. With air:
  **4.03 / 8.02 / 5.89 / 7.21 / 5.45 = 30.60s film**; cumulative starts 0 / 4.03 / 12.05 / 17.94 /
  25.15. Inside the ~29-34s target, above the tranche's 30s floor, far under the 54s ceiling.
- `studio assemble --captions` → `36 group(s) from 76 words → compositions/captions.html (total
  30.6s) · skin: preset skin`, 5 voice tracks on lane 10, `post-fix: captions lane marked`,
  `total duration: 30.6s (expected ~30.6s, +0s)`.
- `studio verify` → **0 high, 0 medium across 7 html files**, before the pixel pass and again after it.
- `npm run check` (hyperframes@0.8.208) → `◇ Check passed`: Lint 0 errors, 0 warnings · Runtime 0
  error(s), **5 warning(s)**, 0 info(s) (all `clip_media_fit` — the authored air on each frame, the
  same five every shipped sibling carries) · Layout **0 issues across 9 sample(s)** · Motion 0 errors,
  0 warnings · **Contrast 43/43 text checks pass WCAG AA** · Craft 0/0 · Audio 0/0.
- Two `Layout` **info** findings on the first pass were answered, not silenced:
  `container_overflow #f2-content` is the authored exit push (`data-layout-allow-overflow`), and
  `text_occluded #f5-n1 / #f5-n2` is the strike doing its job — the marker has to sit on the
  **occluded text** (`data-layout-allow-occlusion` on `#f5-n1`/`#f5-n2`, not only on the two rules),
  and Layout then reported 0 issues across 9 samples on four consecutive runs. Note that `check` is a
  9-sample net: the same two findings appeared on one run and not on the next, so re-run it before
  calling a layout finding flake.
- **50 snapshots taken and read. Six defects were found only in the pixels** — `verify` and `check`
  reported 0 high / 0 medium and `Check passed` through all of them:
  (a) F2's `B` label sat at y 648-688 *behind* the dashed chamber starting at 660, so the letter the
  whole frame is named for was half-hidden → labels moved to y 604;
  (b) F3's `None = no user yet` gloss overflowed its 290px chip on both sides (18 mono characters at
  2.7cqw ≈ 320px) → chip widened to 460px;
  (c) F4's type-on caret was still visible on top of the amber plate → its run shortened to 0.32s and
  it is hidden at 1.52, before the plate wipes at 1.62;
  (d) F4's terminal caret touched the word after it, so `>>> nothing` read as printed output → 22px
  gap, and the label is now `(nothing)`;
  (e) F5's two strike rules were both 500px, so the one across `if user:` ran far past its text →
  sized to 176px and 452px to match their lines;
  (f) every say-plate turned its text `--say-ink` *after* the wipe finished, which photographs as
  light-on-amber for ~0.2s mid-tween → the colour tween now leads the wipe on all four plates.
- What the pixels confirm at the beats that matter: at **9.8s** the rail is drawn ~55% of the way and
  **stops short of B** while the gate's border flashes amber around `False`; at **10.5s** the rail is
  gone, B is still a dashed chamber with a dim mint caret and no value, and `RAN 1 OF 2` is plainly
  legible in muted mono at phone size; at **16.9s** `None` is mint, `.is_admin` is still dark and
  `NO ERROR` is muted — **no coral anywhere in the film**; at **23.6s** the four code lines are
  complete with `# nothing prints, no error` and the strip reads `>>> (nothing)`; at **27.6s** the
  nested fragment is struck and dimmed at container level with its code at full ink, the guarded
  one-liner is bright, and `TAG THEM` is the only amber object on the frame.
- Keep-out measured from the PNGs: max luma below y = 1344 is **35.9** in every frame (platform
  territory empty), and the only thing between y = 1004 and the caption band is the 1px
  ground-coloured shelf rule at 1010. Neighbouring-sample motion deltas inside each scene run
  0.69-7.24 mean luma; the lowest pairs are the F5 tail hold (0.26-0.95), the frame that must hold
  alone.
- No MP4 exists and none was made. No `preview --background` was started.

## One thing the next builder should know

**`npx hyperframes snapshot` is not pinned and resolves to a newer CLI than the project pin.** It
reported `version: 0.8.212` here while this project pins 0.8.208, and the workspace root
`package.json` carries no hyperframes pin at all, so nothing in the project's own files would tell
you. `studio check` and `studio render` honour the pin, which means the gate and the pixels can be
describing two different engines. In a pinned project run snapshots as
`npx --yes hyperframes@0.8.208 snapshot --at …`; every PNG cited above was produced that way (the
first batch was not, and was re-taken). Second finding: **a chip is only as wide as its text** — the
pb-21 counted-tag atom copied at 2.7cqw inside a 290px box silently overflowed, and no gate saw it.
Size the box to the string, then look at it.
- Snapshot-read priorities, in order: the wire releasing **before** B is reached, `RAN 1 OF 2`
  legible at phone size, the dashed B chamber still dark at the end of F2, the single amber plate per
  frame at every emphasis second, F5's strike retired before the `TAG THEM` plate, and nothing but
  the caption band below y = 1004.

## Rendered — 2026-11-01 (delivery)

`studio render prog-basics-20-short-circuit --quality delivery --yes` → `prog-basics-20-short-circuit_2026-11-01_12-09-16.mp4` in 50s.
ffprobe: h264 1080x1920 + aac 2ch, **30.600s** against this film's timeline, mean volume -23.5 dB.
`studio verify` 0 high / 0 med immediately before the render.
The `Gate state` above is the build worker's handoff and was accurate then; the render
gate it describes has now been passed. Publish / Arabic pass / blog variant remain NOT done.
