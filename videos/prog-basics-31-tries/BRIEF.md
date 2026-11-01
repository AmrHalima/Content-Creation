---
workflow: hyperframes (general-video / direct-address mode)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 31 of 33
title: prog-basics-31-tries
message: "a tree whose edges are letters, so words that start alike walk the same road — and a path can exist without being a word, which is the one thing that makes a trie more than a tree of letters"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Quiz ("Which word shares a path with 'dog': 'dot' or 'cat'?")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: MEASURED — see Gate state        # [M] band 34-42s, 54s ceiling
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md; deliberately NOT .agents/design.md)
carrier: false (Day 3 has no carrier wave — bible-day3 § 0.1)
grammar: G8 · G8+G11-trie · G8+G11-trie · G3-cutaway · G8+G5
marks: G8 direct address (reused, copied verbatim from pb-14) · G11-trie (new, inherits 27's grid)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 92
pin: hyperframes@0.8.226
---

## Intent

English master of part 31 of `prog-basics` (Day 3 / STRUCTURES): tries. Portrait 1080x1920, `[M]` band
34-42s, ceiling 54s. Faceless explainer with **direct address** — one of exactly two G8 parts in the
tranche (26 and 31, bible-day3 § 5). Copy source of record: `writing/prog-basics/pieces/31-tries.md`.
Grammar per `frame.md` v3.0 § 8's tranche map: `G8 · G11-trie · G11-trie · G3 cutaway · G5`.

The lesson is one pixel-level detail: the `END` dot sits on `n`, `r` and `t` and **not** on `a`, because
executed Python says the path `'ca'` exists (`True`) while `'ca'` is not a word (`False`). Everything
else in this film is scaffolding for that dot.

Clone sources (read-only): `videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html`
and `.../04-cutaway.html` for the **G8 chrome, copied verbatim** (second proven copy: pb-17/18, and all
fifteen shipped G8 frames put the lower third at `left:72 / top:800 / 560x96`);
`videos/prog-basics-21-arrays/compositions/frames/03-shift.html` for `.f3-tag` (counted tags, the authored
widths 300/220 at x 270/590); `videos/prog-basics-22-linked-lists/compositions/frames/02-anatomy.html`
for `.g7-bar`/`.g7-chev`/`.g7-chip` and the node chamber; `.../05-cta.html` for the G5 plate + the
travelling ring that rests on neither chip.

`G11-trie` geometry is taken **as given** from `frame-day3.md` § 6 (27 draws the grid concurrently;
28/29/31 bind to it, they do not redraw it): root chip 96×96 `--panel-2` at left 466 / y 292 with an
empty interior, `c` at 466 / y 452, `a` at 466 / y 612, three branch nodes at 154 / 466 / 778 on y 772,
nodes 148×96, elbows with runs at y 420 / 580 / 740, letters JetBrains Mono 700 5.2cqw `--value`,
END dot 16px `--value` at `right:12 / top:12`.

## The two quality bars for this part

- **Clarity.** `prefix` is the part's load-bearing noun and arrives un-glossed in the user's two
  sentences, so F2 carries the added third beat ("A prefix is the letters a word starts with") plus the
  mono gloss chips `LETTER` ×2 and `PREFIX`. `END` names the dot on F3. `leaf` is never said in this
  part, so § 6's `LEAF` chip rule does not fire here (and could not: see Deviations). No Big-O
  notation, no `n`, no "log n" (that allowance belongs to 28 and 29 only). "Traverse" appears nowhere;
  the verb is `walk down`.
- **Motion.** F2 builds the trunk (P2 `drop-in` parent-before-child + elbows drawn in three stages, P8);
  the amber rail arrives as the frame's one `--say` event. F3 walks a 168×116 ring root → `c` → `a`,
  lights the three branches one per named word with each END dot arriving last (P7 `pulse-set`, 0.1s
  apart), and counts `SHARED 2` / `BRANCHES 3` on P9. F4 is P3 type-on under a caret with the terminal
  output. F5's ring travels twice and rests on neither candidate. Wipe directions alternate: F1 left,
  F2 left, F3 right, F4 chamber-drop, F5 left — and F2/F3 differ in wipe direction **and** in the
  non-chrome element they introduce (the rail + gloss chips vs the ring + dimming), per the
  consecutive-G8 rule.

## Deviations from the piece file (all recorded, none silent)

1. **BLOCKING FINDING — G8's lower third and the four-level G11-trie grid cannot both live in the
   content box.** The chrome reserves `left:72 / top:800 / 560x96` (pb-14/17/18 verbatim, fifteen shipped
   frames) = y 800→896 across x 72→632. § 6's trie puts L3 nodes at y 772→868 across x 154→926, so `n`
   and `r` (two of the three branch nodes, the ones carrying END dots) sit **on** the plate; and the
   lower counted lane at y 892→958 grazes the plate's bottom edge by 4px at x 270→632. Every l3 placement
   allowed by `frame-day3.md` § 5 ("top edge ≤ y 940") overlaps one of the two, because the trie + lane
   together consume 292→958. **Both geometries were authored exactly as specified on F2 and F3; nothing
   was nudged to hide it.** See `Blocked` below for what the dispatcher must decide.
2. **F2's `LETTER` chips sit beside the trunk (x 632) rather than "under both letter nodes".** Under `c`
   is the `c → a` elbow (a vertical `--line` bar at x 540 through y 548→612) and under `a` is the L2→L3
   run at y 740 with its three up-stubs; an opaque `--panel-2` chip in either place breaks a countable
   edge. Same lane, same size, same `--muted` role, no overlap.
3. **F2's `--say` rail is drawn in the clear lane at x 442 (a 3px vertical spanning exactly `c`.top →
   `a`.bottom) rather than literally "behind" the nodes.** A 3px bar behind an opaque chamber is
   invisible; and on the trunk's own centre-line it would be drawn over the `c → a` connector. It still
   spans exactly the two shared levels, so it still *is* the "same road".
4. **F3's completion list (`can car cat`) is placed in the clear right lane beside the trunk (x 660,
   y 622) instead of "the lower lane".** The lower lane is already fully subscribed on F3 by the two
   locked counted tags (`SHARED 2` at 270/300, `BRANCHES 3` at 590/220).
5. **F4's chamber keeps the piece's 700px width by compacting the comment gutter to two spaces**
   (`print(paths)  # {'ca'}`), because § 6's G3 comment alignment (column 29) needs 37 characters and
   37 × 0.6em at the 28px type floor is 695px — wider than the 640px code lane inside a 700px chamber.
   pb-14 answered the same problem by widening its chamber to 880px; part 31 keeps the briefed 700px and
   changes only whitespace.
6. **F4's terminal strip carries the two real stdout lines** `{'ca'}` and `False` (what running those
   four lines actually prints), while the inline comments stay mint. One terminal block, four code lines:
   the G3 cap.
7. **F1's hook is broken across five display lines** `How does` / `autocomplete` / `answer before` /
   `you finish` / `typing?`, with the sweep on `finish` inside line 4. 8 words in 54 characters will not
   fit two lines at the § 2 ramp (9-11cqw, ≤14 characters per group), and five lines at pitch 104 from
   y 268 end at 788 — the last block height that clears the l3 plate. The piece's own grouping
   (`before you finish`, then `typing?`) survives in reading order across lines 3-5. No word changed.
8. **No `LEAF` chip anywhere.** § 6's rule ("a mono chip `LEAF` under it, y child+20") would land at
   y 888→922, on top of the counted lane, and the word `leaf` is never spoken in this part, so the gloss
   law never fires. Recorded because 27's four-leaf tree can use that rule and 31's cannot.
9. `--diff` chrome chip reads `INTERMEDIATE` (the `[M]` badge, § 5 G5) where pb-14 read `BEGINNER`. It
   is 12 characters at 1.35cqw, so its right edge reaches x ≈ 961 and grazes the top-right bracket's
   3px border at x 960 by about 1px over 10px of height. Both are `--muted`/`--line-faint` chrome; left
   verbatim, flagged for the dispatcher.

## Blocked

**F2 and F3 are authored to spec and stop at the pre-render gate with finding 1 unresolved.** This is
the packet § 4 / `frame-day3.md` § 0.2 path: report loudly, do not invent a quiet variant. The three
candidate resolutions all belong to the dispatcher because 27/28/29/31 share the grid:

- (a) move part 31's lower counted lane and L3 row up (breaks § 6's locked levels for four parts);
- (b) let the two G8 parts drop the lower third on diagram frames (breaks "chrome never fades" and makes
  31's chrome differ from 26's);
- (c) let the trie be **three** levels on F2/F3 (e.g. `c a` as one node — wrong, it deletes the counted
  `SHARED 2`) or cut the branch row to the frame's upper half.

Nothing here is fixed by shrinking the plate: the plate is 560 wide × 96 tall and the trie's L3 row spans
x 154→926, so no `top` value ≤ 940 clears it.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + both OFL notices, copied with the project
  shape. Every `@font-face` names a file on disk.
- Voice: Kokoro `af_heart` at the house 0.93, offline and free, pinned by `studio voice` from this file
  (`tts_provider: kokoro`, `voice: af_heart`). ElevenLabs is unusable here (empty `voice_id`, HTTP 402 on
  free-tier keys); HeyGen needs interactive auth and bills credits. No provider substituted, no BGM, no
  SFX, no network assets, no font fetches.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html` (Day 3
  adds no caption state, § frontmatter `caption_skin`).
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v3.0, copied from `frame-day3.md`)
  overrides it for every video decision in this campaign.

## Gate state

Built to the pre-render gate: voice @0.93, cues, 5 frames, `assemble --captions`, `studio verify`,
`npm run check`, `snapshot --at` read by eye. **No render, no publish, no preview, no schedule.** F2/F3
carry the blocking finding above. Ten other Day 3 workers are building concurrently; nothing outside
`videos/prog-basics-31-tries/` was written.

Accuracy: every fragment on screen is the bible-day3 § 4 ledger's executed output for part 31 (Python
3.13.15). No number was recalled and none was re-derived by running my own interpreter.
