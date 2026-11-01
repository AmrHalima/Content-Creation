---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 8 of 11
title: prog-basics-08-constants-immutability
message: "a constant is a promise Python does not check; immutability is a refusal the language makes for you"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Save (mechanic unchanged)
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
words: 87
---

## Intent

English master of part 8 of `prog-basics`: constants and immutability. Portrait 1080x1920, ~45s,
ceiling 52s. Faceless explainer: no URL, no footage, every visual invented on the campaign's own
identity. Copy source of record: `writing/prog-basics/pieces/08-constants-immutability.md`. Shape:
bible § 3 (F1 hook, F2+F3 concept, F4 example, F5 CTA). Grammar: `frame.md` v2 § 4 — G1 hook,
G2 box (dashed border), G2b row (thick solid border), G3 code chamber, G5 CTA.

This is a **Save** mechanic. The bookmarkable payload is one distinction people actually get wrong:
naming something `MAX_USERS` asks you to behave; a string will not let you behave badly. Everything
in this part is built to land that one difference.

Clone source for CSS atoms and motion idiom: `videos/prog-basics-03-strings-vs-chars/`
(verify:ok check:ok, 91 GSAP calls). Motion density bar set by
`videos/prog-basics-04-functions/compositions/frames/` (151 GSAP sites across 5 frames). Same
`frame.md` v2, same shared stylesheet, same caption lane. Only the copy, the `fN-`/`cN-` id
prefixes, the composition id, the durations and the motion per beat change.

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a plain gloss the moment a term appears, nothing
  that needs re-hearing. The three hard terms and their in-breath glosses:
  *constant* — "a name you promise never to change"; *immutable* — "the value itself refuses to
  change"; *reassign* — never spoken, it appears only inside a Python comment on the code screen
  next to the promise already defined. Hook and CTA mechanic are the user's words and are verbatim.
  Sentence count per frame ≤4, longest sentence 10 words, zero compound clauses, zero em-dashes.
- **Motion.** The two meaning-carriers are **refusal motions**, and they are the only two moves in
  this part:
  1. **The seal that does not hold** (F2). A dashed seal rule draws across the mouth of the
     `MAX_USERS` chamber, then `500` drops straight through it, the seal thins to nothing, and the
     value swaps `100 → 500` with no error anywhere on the board. That is what "Python does not
     enforce it" looks like.
  2. **The tile that will not open** (F3, echoed in F4). Two letter tiles `h` and `i` sit in thick
     solid chambers. A `'H'` chip flies in from the right, hits tile 0, recoils and fades; tile 0
     flashes mint and three bars draw down over it. In F4 the same refusal happens inside the code:
     `'H'` on `s[0] = 'H'` lunges left at the boxed `'hi'`, is pushed back, the box's border goes
     thick, a rule strikes the line out, and the real TypeError lands.
  Target: match or exceed pb-04's 151 GSAP sites across 5 frames. Every frame carries ≥2 § 7
  primitives, an entrance wipe from a different edge than its neighbour, and an exit push inside the
  authored silence.

## Deviations from the piece file (all recorded, none silent)

The piece file was written before `frame.md` v2; its colour and canvas words are v1 vocabulary. Per
the batch rule that frame.md v2 is the only visual authority — and using the same mapping part 04
recorded:

- `teal` → v2 roles. The sharpest word of the hook (`can't change`) takes the amber plate; the
  mechanic verb plate `SAVE THIS` is v2's solid amber plate, not teal. Mint is reserved for values
  (`100`, `500`, `h`, `i`, printed output); coral appears exactly once, under the real TypeError.
- `#8E8E8E` / "micro type" → v2 `--muted` `#9BA6B2`, at the 28px reading floor, never below it.
- `#CD3333` error → v2 `--err` `#FF6B5A` (the palette's only coral, 5.1:1 on the ground).
- "Light canvas" (F1) → v2 graphite ground `#15181D` in every frame; there is no light frame in the
  campaign.
- **F2/F3 padlock icons are not drawn.** v1 asked for an open padlock on F2 and a closed one on F3;
  `frame.md` v2 § 4 replaced that motif with border weight ("thin dashed = a promise nobody
  enforces, thick solid double = enforced") precisely because the icon needs a network asset fetch.
  This part ships zero network assets, so F2 is a dashed chamber and F3 a thick-solid row. The
  "open/closed" story is carried instead by the two refusal motions above, which is stronger than an
  icon and needs no fetch.
- **F1's "box behind the words holding `100`" is dropped** — `frame.md` § 4 G1 says the hook frame
  is type over the ground and "nothing illustrated". The `100` value instead arrives in F2, which is
  the frame that argues about it. "The stillness is the joke" survives as motion *absence*: F1 is the
  only frame whose hero gets no ambient float, so the words sit still while the ground moves under
  them.
- **F5's headline** `agreement vs enforcement` (24 chars) becomes `Constant. Or immutable.` (23
  chars, 3 words): batch fix 5 says a CTA headline that must sit on one line stays under ~24
  characters at 6.4cqw, and the two terms are what a viewer is saving this to look for. The v1 "vs"
  comparison survives as the two chambers side by side, one dashed, one thick-solid — which is
  `frame.md` § 4's stated reason for part 08 being the only part that uses both weights in one frame.
- F3's narration is re-cut into four short breaths so `immutable` is glossed in the same sentence it
  appears in, and F4's is re-cut from one compound clause into five single-clause sentences. No term,
  keyword, hook or CTA mechanic changed. `## Accuracy` needs no correction — see below.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` copied from the clone source's
  `assets/fonts/` (same files as parts 01-04, OFL notices beside them). The BATCH.md bash block still
  lists Inter + Caveat from `videos/pattern-singleton/` — that is the v1 lineage and `frame.md` v2
  drops both faces; this project follows frame.md, exactly as parts 03 and 04 did.
- Voice: Kokoro `af_heart` at 0.74 through `studio voice` (offline, free, provider pinned by this
  file). ElevenLabs stays unusable here (`design.md` voice_id empty, free-tier keys return 402) and
  was not substituted. HeyGen not used. No BGM, no SFX (bible § 7).
- Caption skin: `writing/prog-basics/caption-skin.html` → `.hyperframes/caption-skin.html` before
  `studio assemble --captions`. Band at 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe, but `frame.md` (v2) overrides it for this
  campaign on every video decision: palette, faces, radii, motion.

## Accuracy

Confirmed on this machine (Python 3.13.15) — `.tmp/verify_pb08.py`, run in full:

- `MAX_USERS = 100; MAX_USERS = 500` → `500`, no error, silently. This is F2's refusal-that-does-not-
  happen and it is real.
- `s = 'hi'; s[0] = 'H'` → `TypeError: 'str' object does not support item assignment` — exact
  interpreter text, which is the coral line on screen.
- `s = 'hi'; s = 'HI'` → `'HI'`. Rebinding the name is allowed; mutating the value is not. Not
  spoken (one frame, one idea) but it is why `s[0]` is boxed separately from `s`.
- `'hi'[0], 'hi'[1], len('hi')` → `('h', 'i', 2)` — the two tiles and the index strip.
- Pinned-comment claim, checked so the follow-up is honest: `@dataclass(frozen=True)` then
  `cfg.max_users = 500` → `FrozenInstanceError: cannot assign to field 'max_users'`;
  `t = (1, 2); t[0] = 9` → `TypeError: 'tuple' object does not support item assignment`. Neither is
  on screen; the piece's own `## Accuracy` is intact.

## Gate state

Built to the pre-render gate only: voice, cues, frames, assemble, verify, check, snapshot.
**No render has been made and none is authorized.** No publish, no schedule, no Arabic pass,
no BGM, no SFX, no network assets of any kind.

## Decisions written back mid-run (measured, not planned)

- Authored air: +1.0s per cut, +2.0s on F5 (bible/BATCH fix 6), so the 0.5s crossfade sits inside
  silence and no sentence spans a cut. VO lengths land via `studio voice` → `sync-durations` and the
  STORYBOARD frame rows were re-cut on top of the measured numbers.
- Every emphasis time in the frame files is a measured onset from `audio_meta.json`, not a guess.
- **Air was applied to the STORYBOARD frame rows** (VO + 1.0s, +2.0s on F5 → 4.968 / 10.088 / 9.555 /
  13.672 / 10.768 = 49.051s film). `captions.mjs` and `assemble-index.mjs` both derive cumulative
  starts from those rows, so caption starts and frame starts stay on the same clock; the `check`
  runtime warnings `clip_media_fit` ("audio is 3.97s, its slot is 4.97s") are the authored silence,
  not a defect. The `## Real durations` table now carries the measured numbers.
- Frames authored: 174 GSAP sites across 5 files (F1 23, F2 32, F3 42, F4 49, F5 28) against the
  ~150 target.
- **F5's second chip label** is `the language says no`, not `python will not let you` — the longer
  string wrapped to two lines at 380px and collided with the `SAVE THIS` plate in the snapshots.
  The dashed chip's border was lifted to `rgba(255,255,255,0.34)` (from the 0.16 hairline) so the
  thin-vs-thick contrast still reads at phone size; the solid chip keeps its 7px border + mint ring.
- **Words are separated by real spaces, not `&nbsp;`** in F1/F3 headlines: an `&nbsp;` inside the
  word span before an amber highlight made the highlight box overlap the previous word's text box
  and `check` failed `text_occluded`. Same fix applies to any frame that puts a `.pb-hl` after a
  word span.
- Dropped after the pixels were read: F1's annotation line (could not hold its 1.95s legibility
  floor inside a 4.968s frame) and F4's second note (same reason). F2's `a constant` plate became a
  `MAX_USERS` tab pulse — the plate sat in the hover path of the falling `500`.
- Mint stays mint: F3's closing ambient move on the `h` tile is a scale pulse, not a colour yoyo
  (a mint→ink yoyo put white text where a value should be).
