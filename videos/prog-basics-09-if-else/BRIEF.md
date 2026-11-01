---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 9 of 11
title: prog-basics-09-if-else
message: "a condition picks one path, and the first match wins"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Challenge — "rewrite that as a one-liner. Show me in the comments." (mechanic unchanged, plus the approved warning sentence)
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: ~45s
ceiling: 52s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v2 (frame.md v2; deliberately NOT the prior 15 projects' look)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.74"
captions: en
music: none
sfx: none
frames: 5
words: 94
grammar: G1 G2 G3 G5
mechanic: Challenge
---

## Intent

English master of part 9 of `prog-basics`: if/else conditionals. Portrait 1080x1920, ~45s, ceiling
52s. Faceless explainer: no URL, no footage, every visual invented on the campaign's own identity.
Copy source of record: `writing/prog-basics/pieces/09-if-else.md`. Shape: bible § 3 (F1 hook,
F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook, G2 two doors, G2 three
doors, G3 code chamber, G5 CTA. Mechanic: **Challenge** — the viewer writes a one-liner and posts it.

Clone source: `videos/prog-basics-03-strings-vs-chars/` for the v2 CSS atoms, layout classes and
caption-lane wiring (copied byte-for-byte), and `videos/prog-basics-05-params-vs-args/compositions/
frames/` for the motion bar (164 GSAP sites across 5 frames) and the air convention (frame duration =
VO + ~1.0s so the 0.5s crossfade sits inside silence). Only the copy, the `fN-`/`cN-` id prefixes, the
composition ids, the durations and the motion per beat change.

## The two quality bars, applied to this part

- **Clarity.** The lesson in the learner's words: the condition is a yes/no question; if it is true
  one block runs, otherwise the other; `elif` adds more questions and the FIRST match wins — every
  question after the match is skipped. One idea per beat, ≤14 words per sentence, and an instant
  plain gloss the moment a term appears. Narration line lengths: 10 / 29 / 19 / 18 / 18 words.
- **Motion.** The FORK carries the meaning. F2 draws a rail with two arms: a mint `True` chip
  physically travels down the rail, along the taken arm, and into the block that runs, while the
  other arm and block grey out to inert and get a `not looked at` tag. F3 runs a test marker *down*
  a three-row list and **stops** at the first lit row — the stop is "first match wins", and the two
  rows below it visibly never light. F4 changes the value in the `age` box and the taken path moves.
  Target ≥164 GSAP sites; every scene must be measurably different from its neighbour 0.4s later.

## The approved correction (CORRECTIONS.md entry 2, severity TRAP) — implemented

F5 ships the AFTER version, verbatim:

> Challenge: rewrite that as a one-liner. Show me in the comments. Warning, the obvious attempt does
> not parse.

on screen, in muted type: `the obvious attempt is a SyntaxError`, plus the plain gloss
`does not parse = Python cannot read it`, plus the broken form itself drawn struck out (P10
`strike-out`) so the trap is named concretely and not softened into a hint. The CTA mechanic is
word-for-word; the warning is the one added sentence the user approved. The pinned comment in
`pieces/09-if-else.md` carries the reveal after 24h and **no working answer appears on screen** —
F5 shows only the form that breaks.

Executed on this machine (`G:\Content Creation\.tmp\pb09_accuracy.py`, Python 3.13.15):

| Fragment | Result |
|---|---|
| `if age >= 18: print('Welcome') else: print('Sorry')` (one line) | `SyntaxError: invalid syntax` |
| `if age >= 18: print('a') elif age >= 13: print('t') else: print('b')` (one line) | `SyntaxError: invalid syntax` |
| `else: print('Sorry')` on its own line | `SyntaxError: invalid syntax` |
| `if age >= 18: print('Welcome')` (one line, no else) | parses OK — the legal single-line `if` |
| `print('Welcome' if age >= 18 else 'Sorry')` | age 20 → `Welcome`, age 15 → `Sorry` (reveal only) |
| `print('Welcome') if age >= 18 else print('Sorry')` | age 20 → `Welcome`, age 15 → `Sorry` (reveal only) |
| block form, `age = 20` / `age = 15` | `Welcome` / `Sorry` (F4's on-screen figures) |
| `if/elif/else` chain, age 20 / 15 / 8 | `adult` / `teen` / `child` (F3's rows) |

## Colour and vocabulary decisions (decided here, applied, not re-derived)

- **Zero coral in this film.** frame.md v2 § 1 is explicit: 09's raised exception is "in the reveal
  text only, never on screen". The `SyntaxError` string is therefore set in `--muted` `#9BA6B2`, and
  the struck-out broken form is muted ink under an amber strike rule — never `--err`. No element in
  any frame uses `#FF6B5A`. Mint is reserved for values (`True`, `20`, `15`) and for the path that
  actually ran; amber is reserved for the word the voice is on.
- **"branch" is not used.** The piece and the frames say *path*. The four terms the audience must
  follow are `condition`, `block`, `elif`, `one-liner`, and each gets a plain gloss: `condition = a
  yes or no question`, `block = the lines under it`, `elif means else if`, `one line, same behavior`.
  Adding "branch" would be a fifth term doing the same job.
- **"yes/no" is written "yes or no"** in narration so Kokoro does not voice a slash; the on-screen
  gloss matches the spoken text so `studio cues` alignment stays honest.
- **Piece file's v1 colour words mapped** (same mapping pb-04/pb-05 recorded): "light canvas" →
  graphite ground `#15181D`; `teal` → mint `#5AD6A0` where it marks a value or the path that ran
  (F2's fill, F4's output), amber `#FFD166` where it marks the word being spoken (F1's `this`, F5's
  `SHOW ME` plate, the headline word); `#E8F6F7` output comment → `--value` mint on `--panel-2`.
- **No BGM, no SFX, no network assets, no Arabic pass, no render** (bible § 11 queue).

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` copied from
  `videos/prog-basics-03-strings-vs-chars/assets/fonts/` with both OFL notices. Inter and Caveat are
  absent by design (frame.md v2 `fonts_dropped`); the BATCH.md recipe's font line was corrected to
  this set and is what was run.
- Voice: Kokoro `af_heart` @0.74 through `studio voice` (provider pinned by this file, offline, free).
  ElevenLabs is unusable here (`design.md` voice_id empty, free-tier keys → HTTP 402) and was not
  substituted. HeyGen not used.
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band top 1024px (BATCH.md fix #1).
- G3 chamber visibility: `.cd-root` uses `--panel` `#1F242C` + 3px `--line` over the `#15181D`
  ground, which is the v2 form of BATCH.md fix #2 (a chamber must read against its field). Proven in
  the clone source's snapshots; re-checked in F4/F5 here.

## Deviations from the piece file (all recorded, none silent)

1. **F2/F3 narration re-cut** for one-hearing clarity (frame.md § 9 puts explain lines in scope, and
   the batch instruction requires a gloss the moment a term appears). F2 gains the leading gloss
   `A condition is a yes or no question.` and splits the piece's `One path taken, the other never
   looked at.` into two full sentences (`One path is taken. The other is never looked at.`) so the
   ellipted verb cannot force a re-hear. F3 splits the piece's compound line into `The first match
   wins.` + `The rest are not checked.` (piece words kept) and adds `Elif means else if, one more
   question.` F1's hook and F5's CTA mechanic are untouched, and F5 carries exactly the approved
   warning sentence. No term, keyword, number or fragment changed meaning.
2. **F4's `age = 20` / `age = 15` move out of the code lines** and into an `age` box (G2) plus one
   terminal strip, because frame.md v2 § 4 caps a G3 chamber at 4 lines + one strip and the piece
   asks for "two timed groups" of the same block. The code on screen is the piece's block verbatim.
3. **F5 shows the broken one-liner struck out** (P10). The AFTER spec names the muted warning line;
   showing the form that breaks is how the trap is named rather than hinted at, per CORRECTIONS.md
   entry 2 ("a challenge that rewards a SyntaxError teaches the wrong shape"). It never appears in
   coral and no working answer is shown.
4. `npx hyperframes skills update` was deliberately NOT run: `studio doctor` records that a
   `skills update` erases the hand-patch in the workspace copy of `media-use/.../lib/tts.mjs` that
   `studio voice` depends on, and the scaffold command already ran with `--skip-skills`. The on-disk
   `faceless-explainer` scripts (used by parts 01-08 today) are what this project runs.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No publish, no schedule, no Arabic pass, no BGM,
no SFX, no network asset fetch. `.hyperframes/` history kept.

## Frame build notes (authored 5/5, read at the pixels)

Authored frame durations (measured VO + air, written into each frame's `#root data-duration` and into
`STORYBOARD.md`, which `studio assemble` reads): F1 4.6 · F2 13.3 · F3 9.2 · F4 11.3 · F5 10.4 =
**48.8s film**, 43.286s of it speech. 213 GSAP sites across the five frames (sibling pb-07: 150).
Every sampled neighbour pair measures 17.6-25.9 dB PSNR (0.4s pairs included), so no frame is a
still card. Narration was not touched, so no voice/cues cascade was needed.

Two campaign-level findings that the other parts inherit (both were caught only by reading snapshots):

1. **JetBrains Mono ligates `>=` into `≥`.** A beginner would type the glyph, so every frame here
   carries `font-variant-ligatures: none;` on `#root`. Any part showing `>=`, `!=` or `->` needs it.
2. **The kicker row owns y 230-274.** A hero chip placed at the old `top: 248-262` sits *under*
   `PROGRAMMING BASICS · NN` and its badge, which reads as a broken layout. Content in every frame
   now starts at 292 or lower, and the F3/F4 stacks were re-flowed to keep the bottom edge above
   y = 1004 (F3 gloss 932, F4 note 916).

Also fixed here: F5's two struck-out code lines were superimposed because the per-frame rules are
keyed by class (`.f5-bl-a`) while the elements only carried the id — an id-only rule is silently
unstyled. A scan for "CSS rule never applied to any element" now returns empty for all five frames.

F5 shows the broken attempt as **two lines** (`if age >= 18: print('Welcome')` / `else: print('Sorry')`)
because the single-line form is 51 characters and does not fit 936px at the 2.9cqw / 28px code floor.
Both fragments were executed on this machine (Python 3.13.15) before being put on screen: the
single-line form raises `SyntaxError: invalid syntax`, the block form prints `Welcome` at `age = 20`
and `Sorry` at `age = 15`, and the `if/elif/else` chain prints `adult` / `teen` / `child` at 20 / 15 /
8 — which are F3's and F4's on-screen figures. No working one-liner appears in any frame.
