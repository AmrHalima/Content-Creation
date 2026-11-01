---
workflow: hyperframes (faceless-explainer route, retired into /hyperframes 2026-10-27)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 1 of 11
title: prog-basics-01-variable
message: "A variable is a name pointing at a value, and the name outlives the value."
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz - "What prints if score starts at 100? Drop the number below." (unchanged)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 45s
ceiling: 52s
narration: yes
audience: first-week programming learners (second audience lane, series-bible section 2)
identity: bench v2 (frame.md v2; deliberately NOT the prior 15 projects' look)
style_preset: teaching-chamber
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
captions: en
music: none
sfx: none
frames: 5
words: 91
---

## Intent

English master of part 1 of `prog-basics`, the grammar carrier for the whole 11-part batch: a
faceless explainer on **what a variable is**. No URL, no footage; every visual is invented
(G2 box motif, G3 code chamber). Portrait 1080x1920, ~45s, ceiling 52s.

The eleven angles are **pre-decided by the user**, so strategy and angle gates are collapsed
(`writing/prog-basics/series-bible.md` section 0). What this run owns: pacing, on-screen text,
visual grammar, and technical truth.

Copy source of record: `writing/prog-basics/pieces/01-variable.md`. Frame shape: bible section 3
(F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar definitions: bible section 4 and
`frame.md` section 4.

## Why this part goes first

Everything the other ten parts clone is decided here: the box motif's geometry (chamber + name tab,
frame.md v2 § 4 G2), the graphite ground with its dot grid and two glows, the code chamber with its
`main.py` titlebar and `PYTHON` language chip, the lifted caption band at y = 1024 (which is stricter
than `backend-patterns`' y = 1594), and the CTA plate. **Nothing in the campaign is judged on a green
`check` — only on pixels read at 1080x1920.**

## v2 re-pass (2026-10-27, after 16:00) — this part was built on frame.md v1

This project was assembled at 12:12; the campaign's design layer was rewritten to identity v2 at
12:57. Parts 03 (13:47) and 04 (15:41) were built after that, so 01 was the only finished part still
carrying v1. The re-pass moved it to v2 with **no spoken word changed**, so no `voice`/`cues`
cascade was implied: every frame keeps its duration (5.9 / 11.2 / 9.0 / 8.4 / 8.6, film 43.1s) and
every emphasis time still cites the same measured onset in `audio_meta.json`. Air past each VO line
is unchanged at ~1.0s (1.04 / 0.96 / 1.04 / 1.00 / 1.45), so the 0.5s crossfade still sits in silence.

Divergences found, and what replaced them (mapping taken from `videos/prog-basics-04-functions/BRIEF.md`
rather than re-derived):

| v1 in this project | v2 now |
|---|---|
| `#F5FCFD` ice canvas in F1/F2/F3/F5, `#0F1818` petrol field in F4 | one shared graphite ground `#15181D` + dot grid + amber/mint glows + the 1010 shelf rule, in all five frames (v2 § 3) |
| Inter 700 display, Caveat on the series badge | Space Grotesk 400/700 everywhere; Caveat dropped (the badge is muted mono `pb-brandline`) |
| teal `#47B5BE`/`#7BD3D8` as "the thing the voice is naming" | amber `--say` highlighter (P1) for the spoken word; **mint `--value` for values**, which v1 had no role for |
| 3-5 teal ambient pills per frame on a 12s float (v2 § 3 deletes this layer) | ground drift + glow breathing, each starting and ending at its own zero |
| label **pill** `radius 9999px` centred above the box, 1px `#EBEBEB` hairline chamber | **name tab** `12px 12px 0 0` on the chamber's top-left edge, 3px `--line`, `--panel` interior, v2 shadow |
| `rgba(255,255,255,0.05)` lift over petrol because a petrol fill on a petrol field is invisible | `--panel` `#1F242C` on `--ground` — the trap cannot recur |
| cuts between near-identical layouts, no exit | directional wipe per frame (left / right / below, alternating) + exit push `y:-60` on F1-F4; F5 stays put because it loops |
| 64 GSAP sites | 140 (03 = 91, 04 = 151) |
| caption skin: white card, Inter, teal underline (the spoken word had no @font-face at all, so it fell back to system sans) | campaign v2 skin: `rgba(21,24,29,0.72)` plate, Space Grotesk 700 at 46px with the files on disk, amber highlighter per word |
| F2 on-screen note ended "…, not the other way round" | removed — v2 § 9 bans that construction outside part 05's hook and names this phrase; replaced with `use the name, get the value` |

The two moments this part owns got the strongest motion in the film, not the most: **F2** is now a
P2 drop-in (value falls from `y:-230` on "value inside", bounce-lands on "inside,", chamber
squash-settles, border flashes mint) preceded by a blinking mint caret in the empty chamber — the
box visibly *receives*. **F3** throws the old value out of the top and drops the new one in while the
name tab carries **no transform anywhere in the frame**: it only lights amber at 6.06, on the word
"name". An amber pin ring marks it without displacing it.

`studio verify` and `studio check` were both green before and after; the pixel pass is what found the
real defects (see Gate state).

## Assets

- Fonts on disk: `SpaceGrotesk-400/700` + `JetBrainsMono-400/700`, each with its OFL notice, copied
  from `videos/prog-basics-03-strings-vs-chars/assets/fonts/` (same files parts 03/04 ship). frame.md
  v2 drops Inter and Caveat; the v1 copies of `Inter-400/700` and `Caveat-var` are still on disk but
  nothing references them — delete rather than resurrect them if a later pass tidies assets.
- No images, no BGM, no SFX, no logo. Nothing fetched over the network (known-traps section 17).

## Decisions taken in this run

- **Spoken code is written separately from screen code.** `score = 10` is spoken "score starts at
  ten", never "score equals ten". Recorded in the piece file so `studio cues` aligns to text that
  a human actually says.
- **No coral in this part.** Coral means error in the series; part 1 raises none. First coral is
  part 06 (`None`) and part 07 (`NameError`).
- **The value swap in F3 is deliberately unanimated on the label pill.** The claim is "the name
  stays", so the pill must not move while the value does. An entrance tween on the pill would
  contradict the narration.
- F4 shows **three** lines and one output line, inside `frame.md`'s 4-line cap.

## Accuracy

Verified on Python 3.13.15 (`G:\Content Creation\.tmp\verify_semantics.py`): `score = 10;
score = score + 5; print(score)` prints `15`; starting from `100` prints `105`. Both figures on
screen are executed output. The CTA's answer is `105`, held in the pinned comment for 24h.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized** (bible section 12, rule 6). `studio status`
confirms this project is the only finished part of the batch with `renders: 0` — so the render at the
end of the run is a first render for pb-01, not a replacement of a stale one.

Post-re-pass gates, as observed (not from memory): `studio verify` -> `0 high, 0 medium across 7 html
files`; `studio check` -> `check:ok(18s)`. 27 snapshots read as pixels. Four defects the green
`verify`/`check` pair did **not** see, all found in the stills and all fixed:

1. `.c3-pin` and `.c5-ring` (the two acknowledgement rings) had no `position:absolute`, so both drew
   as static blocks at the canvas's top-left corner — the v1 frame.md § 8 "orphaned unstyled element
   in the top-left corner" class, and invisible to lint because each *did* carry a class.
2. F3's `pb-rule` under the second claim floated between the chamber and the claim with nothing to
   underline; deleted, and the beat it was standing in for is now carried by the name tab lighting
   amber on the spoken word "name" (colour only — the tab still never moves).
3. F4 line 2 rendered its second `score` in `--muted`, i.e. as chrome. The name is the subject of the
   part: both `score` tokens are ink, `=`/`+` are muted, `10`/`5`/`15` are mint, and only the `+`
   borrows amber while the voice says "plus".
4. The v1 caption skin declared Inter with no `@font-face`, so the caption lane had been rendering in
   system sans since the part was built. Rebuilt from the v2 campaign skin.

Motion audit (`.tmp/pixel-audit.cjs`, 22 same-scene pairs): `motion: 0 static`, per-scene min PSNR
18.4-24.7 dB between samples 0.4s apart (part 04's own audit called 45.5 dB static and 37.9 dB
acceptable, so every scene here is well inside "moving"). Its `band: 5 empty` findings are a tool
 artefact — this build's ffmpeg `signalstats` emits no `YSTD`, so the script read NaN and called the
band empty. Measured directly: band y1024-1344 carries YMAX 197-223 in every scene (ink present), and
floor y1344-1920 is flat at Y 36 with a max of 47 (glow bleed only, nothing drawn).

Seam check against the v2 siblings, read side by side from existing snapshots (no writes into other
projects): 01's chamber/tab/mint/amber/kicker/caption-plate are indistinguishable in treatment from
03's `char` box and 04's recipe box; 01's hook sits on the same display ramp with the same amber
highlighter as 03's `one` and 04's `twice?`.
