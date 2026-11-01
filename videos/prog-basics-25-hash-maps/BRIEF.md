---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 25 of 33
tranche: day-3 (STRUCTURES)
title: prog-basics-25-hash-maps
message: "a key is turned into a position, so finding Sara is one hop instead of reading ten thousand names — and the price of that hop is that you cannot ask who is next to Sara"
hook_source: user (pre-decided; not rewritten)
cta_mechanic: Save ("Save this for your next interview. It comes up a lot.")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 33.5s (measured; [B] band is 29-34s)
ceiling: 54s
narration: yes
audience: first-week programming learners — its own lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md v3.0; deliberately NOT .agents/design.md)
carrier: false (Day 3 has no carrier wave — bible-day3 § 0.1, § 6 rule 1)
difficulty: BEGINNER
marks: G10 jump (first build in the series)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 77
grammar: G1 G10-jump G10-jump G3 G5
pin: hyperframes@0.8.226
---

## Intent

English master of part 25 of `prog-basics` (Day 3 / STRUCTURES, `[B]`): hash maps and dictionaries.
Portrait 1080x1920, `[B]` band 29-34s, ceiling 54s. Faceless code-card explainer: no URL, no footage,
every visual invented on the campaign's own bench identity. Copy source of record:
`writing/prog-basics/pieces/25-hash-maps.md`. Shape and decisions: `writing/prog-basics/series-bible-day3.md`
§ 0 (the three locked gate decisions), § 4 (accuracy ledger, 25's five rows), § 4b (the counted pair),
§ 4c (zero coral), § 4d (chamber / diagram / chip). Grammar and geometry:
`writing/prog-basics/frame-day3.md` § 4 (canvas + Day 3's vertical plan), § 5 (G2b row, G3, G5),
**§ 6 G10 `jump`** (this part's new mark), § 7 (the three gates), § 9 (primitives), § 12 (self-audit).
WAVE2-PACKET § 4-§ 9 is inherited and not re-derived here.

The tranche's payoff part: 21's row of boxes, 23's directness and 24's counting arrive together, and it
carries **the hardest accuracy constraint in Day 3** — no `hash(...)` value may appear on screen, because
on this machine it is different every run.

Clone sources (read-only): `videos/prog-basics-21-arrays/compositions/frames/03-shift.html` for the bucket
row, the marker and **both counted tags** (that file's `.f3-box`, `.f3-idx`, `.f3-tag`, `.f3-marker`,
`.f3-ghost`, `.f3-trail`), `.../02-row.html` for `.pb-chamber` / `.pb-val` and the zero-first P9 index
arrival, `.../04-code.html` for the G3 chamber + P3 type-on + terminal strip, `.../01-hook.html` for G1 +
the self-contained say-plate, `.../05-cta.html` for G5 + the dimmed returning row, and
`videos/prog-basics-22-linked-lists/compositions/frames/03-walk-prepend.html` for the `cur` ring + the
time-proxy count-tick. Fonts are the v2 set (Space Grotesk 400/700, JetBrains Mono 400/700 + both OFL
files) copied from pb-22/`assets/fonts/`. Caption skin: `writing/prog-basics/caption-skin-day2.html` →
`.hyperframes/caption-skin.html` (Day 3 adds no caption state, so it is reused unchanged).

## The two quality bars for this part

- **Clarity.** Short sentences, one idea per beat, a gloss the moment a term appears, nothing that needs
  re-hearing; hook and CTA mechanics are the user's verbatim words. `bucket` is glossed by the row itself
  and tagged `ONE POSSIBLE SLOT`; `hash function` is the `HASH` box whose interior reads `key -> position`
  with ligatures **off** and **no digit**; `key-value pair` is drawn as two chips, not described. **No
  Big-O anywhere** (§ 7.2): "constant time" is plain speech and the notation is the counted pair
  `JUMPED 1` / `LOOKED AT 6`, which is the pair locked for part 25 in `series-bible-day3.md` § 4b.
  **Zero coral** (§ 7.1): `ages['Zeyad']` really does raise `KeyError: 'Zeyad'`, and it stays in the
  pinned comment. The row is never captioned as Python's memory layout (`list(d.keys())` returns
  insertion order — executed).
- **Motion.** Three meaning-carriers, all physical: F2 = **the board assembling** (chip, then its pair
  half, then the `HASH` box, then the six slots with the index strip ticking zero-first on P9);
  F3 beat 1 = **the hop** (one `--line` connector draws itself, the chip travels it in one 0.44s run,
  slot 5 flashes `--say` for 0.30s and returns — the boxes never move, which is what "constant time"
  means physically); F3 beat 2 = **the look** (a `--say` ring steps six authored lefts in a
  deterministic 0.12s stagger while `LOOKED AT` ticks 1→6, and stops at 6 because Sara is in the last
  slot). Primitives: P1 `say-sweep`, P2 `drop-in`, P3 `type-on`, P6 `box-fill`, P8 `arrow-run`,
  P9 `count-tick`, plus each frame's entrance wipe, one ambient breath and exit push.

## Blocked — G10's derived geometry does not survive (packet § 4, the no-carrier rule)

**This is the finding, and it is the reason frames 2 and 3 must not be rendered.** `frame-day3.md` § 6
authors five positions for one board, and two of its own objects are placed on top of two others:

1. **`hash box: 200x84 ... left 540 / y 400`** sits on **`buckets: ... top 400`**, whose slot 3 is
   548→690 and slot 4 is 706→848. The box paints buckets 3 and 4 (F2 and F3, simultaneously, and the hop
   connector starts from that box). Unavoidable as authored. Proven in the snapshots at 12.4s and 15.2s.
2. **`key chip: 240x64 ... left 420 / y 292`** sits **inside `counted: .f3-tag lane y 288 h 66`**, which
   § 6 also authors at lefts 270 (w 300) and 590 (w 220) — and § 4's vertical plan assigns 25 to that
   upper lane. The chip's rest position (420→660 × 292→356) overlaps tag A by 150px and tag B by 70px.
   Sequenced (the tags arrive after the chip departs on the hop) so F3's counted beat is clean, but the
   authored rest position is still inside a lane it does not own.
3. Secondary, from the same mark: a 240px chip cannot be centred on a 142px slot inside the 1008 content
   edge, which is what § 6/piece F5 ("the key chip still parked in slot 5", centre x 935 → right edge
   1055) asks for. F5 keeps the authored centre and carries `data-layout-allow-overflow` instead of
   moving it.

There is **no free band** for the `HASH` box anywhere § 4 leaves open between the tag lane and the row:
the row owns 400→552, the index strip owns 616→656, the gap 354→400 is 46px against a box needing 84px
plus its 60px G2 name tab. The only band that fits is **656→868** (below the index strip), which would
put `HASH` under the row and make the hop travel upward — a re-layout, i.e. exactly the quiet variant the
no-carrier rule forbids a worker from choosing alone, and one that 26 would inherit as a second look.

**What I did:** frames 2 and 3 are authored to the literal § 6 numbers (nothing moved, nothing
invented), tagged `blocked:` in `STORYBOARD.md`, and `data-layout-allow-overlap` marks the collisions so
`check` reports the frame rather than hiding it. **What the dispatcher needs to decide once, for 25 and
26 together:** a corrected `y` for the `HASH` box, a lane for the key chip that is not the counted-tag
lane, and either a narrower chip or a wider slot for F5. Frames 1, 4 and 5 are unaffected and are at the
pre-render gate.

## Deviations from the piece file (all recorded, none silent)

- **Frames 2 and 3 ship blocked on G10 geometry** (see the section above). This is a deviation from the
  piece file's `Gate state` only in the sense that it did not pass; nothing about the authored layout was
  changed to make it pass.
- **The bucket row's slot 0 is at left 74, not the 72 the piece file's F2 line and `frame-day3.md` § 6
  both print.** § 6's own row (`142` cells at `pitch 158`) cannot start at 72 and then hit 232 for slot 1
  (72+158 = 230), so `72` and the rest of the authored lefts are mutually inconsistent. pb-21's shipped,
  rendered row uses **74 / 232 / 390 / 548 / 706 / 864**, which is also § 5's G2b rule ("first left x 74")
  and the row `26` clones, so the shipped geometry wins. 2px on slot 0 only.
- **`ten thousand` is set as words, not as `10,000`.** The piece file's F1 note says the number "is spoken
  and set as type" and that it is the hook's own figure, not ledger output. F3's screen already carries no
  invented number; spelling it out also keeps Kokoro from reading `10,000` as digits and keeps a
  non-executed figure off a Day 3 frame. No word of the hook changed.
- **`one contact` gets a neutral `--line` group bar rather than a second amber event.** § 1 allows one
  `--say` arrival per beat and F1's landing word is `instantly` (the piece's own delivery note), so the
  earlier group is marked structurally, not chromatically.
- **F2's pair halves are `'Sara'` + `25` as two chips**, exactly as the piece describes ("the pair is two
  things, drawn as two things"); the second chip is 150×64 rather than a copy of the first's width,
  because it holds two characters. Sizes are the piece's own, and the row's slot geometry is untouched.
- **F3's `LOOKED AT` tag ticks `LOOKED AT 1` … `LOOKED AT 6`** through the time proxy, and the final
  state on screen is `LOOKED AT 6`. The § 4b pair is `JUMPED 1` / `LOOKED AT 6`; both are on screen
  together at the end of the frame.
- **F5's parked chip straddles slot 5's top edge** instead of covering it — the straddle law (§ 1:
  "a marker straddles an edge, never centres on a value") is the only authored rule that resolves what
  "parked in slot 5" means for a 240px chip over a 142px box holding `25`. Its centre x is the authored
  slot centre (935); its right edge (1055) is marked, not moved (deviation 3 above).
- **The voice flag was passed** — `--speed 0.93`, equal to the house value — because the sanctioned
  flagless path cannot reach it (`studio voice` resolves `--speed → house["voices.en"] → 0.74`, and
  `.agents/design.md` nests `voices:` under `voice:`, so the key that exists is `voice.voices.en`).
  Packet § 1 and `frame-day3.md` § 10 both mandate `--speed 0.93` and forbid a run at anything other than
  0.93; the `--dry` line printed `speed=0.93` with the flag and is recorded in `SCRIPT.md`.
- **Cover string kept as written** (`one hop, not ten thousand`) and recorded in `STORYBOARD.md` F1. It is
  a cover/title-card line, not a fifth display group: F1 is the hook (§ 8), and this run draws no image
  asset (packet § 12: no media-use or network calls), so there is no separate cover file to write.

## Assets

- Fonts: `SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + both OFL notices, copied from
  `videos/prog-basics-22-linked-lists/assets/fonts/`. Every `@font-face` names a file that exists on disk.
- Voice: Kokoro `af_heart` at the house 0.93, offline and free, provider pinned from this file; no
  provider substituted, no BGM, no SFX, no network assets, no font fetches. `.media/manifest.jsonl`
  untouched — there was nothing here to fetch.
- Captions: Day 2's skin, band 1024, Space Grotesk 700 at 46px, spoken word on amber.

## Gate state

Built to the pre-render gate: `voice --speed 0.93`, `cues`, 5 frames, `assemble --captions`,
`studio verify`, `npm run check`, `snapshot --at` read by eye. **No render, no publish, no schedule, no
Arabic pass, no BGM/SFX.** Frames 1, 4 and 5 are ready for the render gate; **frames 2 and 3 are blocked
on `frame-day3.md` § 6's G10 geometry and must not be rendered until § 6 is reconciled** — rendering them
proves nothing except that the collision is on screen, which is what the snapshots already show.

Accuracy: every fragment on screen comes from `series-bible-day3.md` § 4's executed 25 rows (Python
3.13.15, 2026-11-01) — `ages = {'Sara': 25}` → `ages['Sara']` = 25; `'Sara' in d` → True; `len(d)` → 4.
I ran no interpreter of my own to improve the ledger (packet § 5). The names authored into the buckets
(`Omar`, `Lina`, `Sara`) are diagram content from the piece file, not executed output, which is exactly
why the row carries `ONE POSSIBLE SLOT` and no index is described as Python's layout.
