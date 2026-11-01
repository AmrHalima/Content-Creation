---
workflow: hyperframes (general-video, companion-free)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 26 of 33
tranche: day-3 (STRUCTURES)
title: prog-basics-26-sets
message: "a box that refuses a duplicate and answers 'is it in there?' in one hop — which is why deleting repeats from a list is one call, and why a set has no next"
hook_source: user (pre-authored, verbatim; not rewritten)
cta_mechanic: Challenge ("Challenge: find the common items of two lists using sets. Post your one-liner.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 30.3s (target band 29-34s, [B])
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md)
carrier: false (Day 3 has no carrier wave; G10 probe is proven here or not at all)
grammar: G8 G10-probe G10-probe G3-cutaway G5
marks: G10 probe (new, derived in frame-day3.md § 6) · G8 reused verbatim from pb-14
clone_source: pb-14/01-address.html + 04-cutaway.html (chrome, verbatim) · pb-21/03-shift.html (probe row)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 78
pin: hyperframes@0.8.226
---

## Intent

English master of part 26 of `prog-basics` (Day 3 / STRUCTURES): sets. Portrait 1080x1920, band
**29-34s** (`[B]` part, bible-day3 § 0.3), ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/26-sets.md`. Grammar: `frame.md` v3.0 § 5 (G8 direct address, G3 cutaway,
G5 CTA) + § 6 (G10 `probe`), and § 6's tranche map row for 26: `G8 · G10 probe · G10 probe · G3
cutaway · G5`.

One of Day 3's **two G8 parts** (26 and 31, bible-day3 § 5). Chosen for the mode because this part's
diagram is the tranche's smallest — a row that refuses a duplicate — and a Challenge lands better
spoken *at* someone than printed on a card.

## Non-negotiables for this build

- **G8 chrome is COPIED VERBATIM from `videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html`
  and `04-cutaway.html`.** Nothing in it is redesigned: four corner brackets (3px `--line-faint`, 72px
  arms, inset 48, framing y 932→1004), REC strip (16px dot on a 1s yoyo, `REC` mono 2.4cqw, timecode
  `00:0N` mono 400) all three `--muted`, `.g8-diff` chip `BEGINNER`, lower third `--panel-2` r12 with
  `PROGRAMMING BASICS · BASICS III · 26` above `SETS` in Space Grotesk 700 `--ink` 3.4cqw. **Chrome
  never fades** — one continuous shot; only the badge strings and the title change.
- **F1's first line carries no entrance tween** (pb-14's finding: with one, the cover renders blank).
- **Consecutive-G8 rule**: F3 must differ from F2 in wipe direction *and* introduce a non-chrome
  element. F2 enters from the left and builds the row + the refused duplicate; F3 enters from the
  right and adds the probe ring, the `IN` chip and the `NOT SORTED` lane.
- **G10 `probe` is unproven.** Its two atoms are tested first, by reading PNGs, not by `check`:
  (1) the duplicate chip visibly does **not** enter slot 0 — if it settles inside, the part teaches
  the opposite of itself; (2) the ring lands on slot 2's edge covering no digit.
- **Zero coral** (bible-day3 § 4c). `--err` appears nowhere in this film; `TypeError: unhashable type`
  is reply-thread only.
- **No Big-O, no `n`, no `O(`** on any frame (bible-day3 § 0.2). The counted pair is
  **`ADDED 2` / `KEPT 2`** (bible-day3 § 4b, locked): two `add` calls, one result.
- **No string-set order anywhere on screen** (executed: it changed across three runs, and the renderer
  seeks). The only order shown is the deterministic `{5,3,100,1,7,22}` → `1 3 100 5 22 7`.
- **No `&` between the two lists on F5** — drawing the operator answers the challenge (pb-11's rule).

## Accuracy (every number re-executed for this build, Python 3.13.15, 2026-11-01)

`set([1, 2, 2, 3])` → `{1, 2, 3}` (repr exactly as spoken); `len(set([1, 1, 2, 3]))` → `3` from 4 in;
`{1, 2}.add(2)` → `{1, 2}`; `2 in st` → True; `{5, 3, 100, 1, 7, 22}` iterates `1 3 100 5 22 7`
(deterministic here because `hash(int) == int`); `set([1,1,2,3]) & set([2,2,3,9])` → `{2, 3}`;
no-overlap → `set()`. The bucket a value lands in is a **composition choice** — an authored diagram
position, never the result of `hash(...)`, and the row is never captioned as Python's memory layout
(frame-day3 § 6's G10 law).

## Frame plan (shape, not pixels — pixels live in the frame files)

| Frame | Mark | Content | Narration |
|---|---|---|---|
| F1 | G8 | display type alone, amber sweep on `one line` | 8 words |
| F2 | G8 + G10 probe (built) | 6-slot row, `2 3 7` in slots 0/2/4, three dashed empties, a `2` chip that bounces at slot 0's edge and never enters, `ADDED 2` / `KEPT 2`, `UNIQUE` gloss chip | 20 words |
| F3 | G8 + G10 probe (probed) | cur ring hops to slot 2, `IN` chip, `PROBED 1`; then `4 IN` / `3 OUT`; then the `1 3 100 5 22 7` lane with `NOT SORTED` | 21 words |
| F4 | G3 cutaway over G8 | `main.py`, `PYTHON` chip, 3 lines + two-row terminal strip | 16 words |
| F5 | G8 + G5 | `common items?` headline, `POST IT` plate, two unjoined list chips tagged `a` / `b`, brandline | 13 words |

## Design decisions taken mid-run (written back here, per the layering rule)

- **The `HASH` box and the key chip are not drawn.** § 6's G10 geometry includes them for part 25; the
  piece file's per-frame spec for 26 does not, and a set has no key to hash. The row, the ring, the
  index strip, the tag lane and the bounce are the mark. Nothing is invented to replace them.
- **The probe row holds `2 3 7` but the two-list compare uses `1 1 2 3`.** The executed fact behind the
  counted tag is `len(set([1,1,2,3])) → 3`. Drawing `1 1 2 3` on the `2 3 7` row would print a false
  result. So the compare gets its own thin chip lane under the row, in pb-21's tag widths, and the set
  row is explicitly a *picture*, not the result of the compare.
- **The order guard is a mono digit lane, not a chamber, and is tagged `NOT SORTED`.** It must read as
  chrome next to the row, not as a second answer.
- **F5 shows no third list.** Two chips, unjoined, plus the plate.
- **Cover text.** The piece file's `## Cover / title card` names `delete the repeats`; the piece file's
  per-frame spec for F1 says `remove duplicates` / `in one line` with the amber plate on `one line`.
  F1 is the cover (frame-day3 § 8), so the two sections of the same piece file conflict. The frame spec
  wins here: it is the sentence the voice actually says (hook verbatim), and pb-14's proven cover shows
  the spoken line rather than a paraphrase. `delete the repeats` is therefore **not drawn** and stays
  available as a still/social title. Recorded as a deviation below.
- **F1 wraps to three display lines** (`remove` / `duplicates` / `in one line`) at 9cqw, because
  `remove duplicates` is 17 characters and § 8's ≤14-character limit for a 9-11cqw group is what keeps a
  phone-legible line inside the 936px column. No word changed.

## Deviations from the piece file (all recorded, none silent)

1. **Cover text `delete the repeats` not drawn** — see the Design decisions above; the piece file's two
   sections conflict and the per-frame spec was followed. Amber plate is on `one line`, not on `repeats`.
2. **F1's hook split across three lines** rather than two (`remove duplicates` is over the 14-character
   display limit). Word order and words unchanged.
3. **F4's chamber is 820px wide, not 700px** — at 700px the comment column of
   `print(set(nums))        # {1, 2, 3}` drops code to ~26px, under the 28px type floor (known-traps
   § 13). pb-14's `04-cutaway.html` records the identical finding and widened to 880; 820 is this
   fragment's minimum, and the comment gap was cut to two spaces so the longest line stays inside the
   column.
4. **F4's terminal output is a two-row strip**, because the fragment prints two lines
   (`{1, 2, 3}` then `3`) and a single-row strip would either drop one or run them together as
   `{1, 2, 3} 3`, which is not what Python printed. Still one strip object, one arrival.
5. **F3's compare is a dedicated chip lane** (`1 1 2 3` → `1 2 3`) instead of being drawn on the set
   row — accuracy, see the design decision above.
6. **F5's two list chips carry mono `a` / `b` role tags** and F5's brandline sits at the **top** kicker
   lane (y 230) instead of y 906. Both are G8-mode collisions: pb-14's lower third occupies 800→896 and
   its corner brackets frame 932→1004, so pb-22's CTA brandline at 906→950 would sit on the chrome.
   `THE ASK` is the F5 kicker per frame-day3 § 5's G5 rule.
7. **No `KEEPS` verb on screen.** The locked counted pair is `ADDED 2` / `KEPT 2`; a third tag would put
   three numbers in a lane built for two (pb-21's geometry).

## Voice

Kokoro `af_heart`, **speed 0.93 pinned by flag** (`--speed 0.93`). `studio voice --dry` resolves the
speed as `--speed flag → house["voices.en"] → VOICE_DEFAULTS.en.speed`, and the house lookup misses
because `.agents/design.md` nests `voices:` under `voice:` — so the flagless path speaks at 0.74. The
flag is set **equal to the house value**, never to 0.74, never invented. `voice_speed:` above is
documentation; the tool does not read it. No provider substituted (ElevenLabs unusable here: empty
`voice_id`, HTTP 402 on free-tier keys). No HeyGen, no BGM, no SFX, no network asset, no font fetch.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices, copied from
  `videos/prog-basics-22-linked-lists/assets/fonts/`. Every `@font-face` names a file on disk.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`
  (copied from pb-22's resolved copy). Band top 1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` = the workspace brand copy; `frame.md` = `frame-day3.md` v3.0, which overrides it for
  every video decision in this campaign.
- `.media/manifest.jsonl` untouched — there is nothing here to fetch.

## Gate state

Built to the **pre-render** gate only: voice @0.93, cues, 5 frames, `studio assemble --captions`,
`studio verify`, `npm run check`, `snapshot --at` read by eye. **No MP4, no render, no publish, no
schedule, no `preview --background`, no Arabic.** Ten other workers are building concurrently; nothing
outside `videos/prog-basics-26-sets/` was written.
