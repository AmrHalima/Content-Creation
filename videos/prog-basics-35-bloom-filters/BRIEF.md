---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 35 of 44
title: prog-basics-35-bloom-filters
message: "a row of bits that only ever flips one way — so a 'no' is a proof and a 'yes' is a report that the bits were already set, which is a different claim from 'it is in there'"
hook_source: user (pre-authored, verbatim; not rewritten)
cta_mechanic: Myth + comment ask ("Why can't a Bloom filter give false negatives? Comment your guess.")
destination: shortform-vertical (TikTok/Reels/Shorts)
aspect: 1080x1920
language: en
length: target ~32s (piece-file word count after the approved A3 edit; 3.24 w/s + 6.0s air)
ceiling: 54s
narration: yes
audience: first-week programming learners
identity: bench v2.2 (frame.md = frame-day4.md, inheriting frame-day2.md v2.1)
tranche_badge: UNDER THE HOOD
difficulty: INTERMEDIATE   # [M] from the manifest
carrier: TRUE — Wave A. Proves R3 (16 bits as two lanes of 8) and the angled fan with 18px heads plus
  the no-hash-value law. Any later bit grid, any diagonal, any arrowhead inherits this.
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"   # documentation only — pass --speed 0.93 to studio voice or you get 0.74
captions: en
music: none
sfx: none
frames: 5
grammar: G1 · G18 bit array (R3) · G19 hash fan · G18 · G5   # frame-day4 § 4 lines 249-317
pin: hyperframes@0.8.208
ledger_source: writing/prog-basics/ACCURACY-day4.md § 35
---

## Intent

English master of part 35. Copy source of record: `writing/prog-basics/pieces/35-bloom-filters.md` —
**its narration table now carries the user-approved A3 correction**, which states the filter's
configuration inside the example sentence. Use that wording verbatim; the piece file was amended for
you, so re-read its `words:` and `target_length:` rather than trusting any number in this brief.

Read in this order, and no further: `writing/prog-basics/series-bible-day4.md`, your piece file,
`frame.md` § 1 (R3) + § 3 (phone-legibility for bit grids and arrows — this is where diagonals are
licensed and paid for) + § 4 lines 249-317 + § 6 + § 9, and `WAVE2-PACKET.md` § 4-9. Figures from
`ACCURACY-day4.md` § 35.

## Resolve these ledger placeholders from ACCURACY-day4.md § 35

Pinned configuration, stated on the plate (user ruling D5): **m = 16 bits, k = 3 hashes**,
`h_i(key) = crc32(bytes([i]) + key.encode()) % 16`.

- before: `0000000000000000` → after 'cat': `0001001000000100`, bits **3, 6, 13** set (3 of 16).
- 'dog' probes positions `[3, 6, 8]` → values `[1, 1, 0]` → **bit 8 is the zero** → DEFINITELY NOT.
- One false-positive row only: `6.2% at m=16, 1 item`.
- Pinned CTA answer: a negative would need a bit UNset, and nothing in the structure clears a bit.

**The best teaching detail is executed and you should draw it:** dog's three probes already match 2 of
cat's 3 bits. Draw three arrows, two mint hits, one red-zero — and no coral (`frame-day4` § 6 bans
coral here; a zero that did not fail anything is a value state, not an error).

## Hard rules specific to this part

- **NEVER print a hash value.** The fan shows positions, not numbers out of a hash function.
- **Three arrows, three hash chips, three bits** (§ 10). A fourth arrow because "it looks better" is
  forbidden — the probe pins k = 3.
- `ACCURACY-day4.md` § 4 puts "databases and caches use it to skip expensive lookups" on the
  CANNOT-SHOW register: name chip only, no logo, no number.

## Carrier duty

You are proving **R3 and the angled fan** — the tranche's first diagonals. Report the settled cell
size, lane pitch, arrow stroke width, 18px head geometry, the SVG-vs-CSS choice you landed on, and
every divergence from `frame-day4.md` § 3 and § 4. Wave B inherits your answer on all of it.

## Boundaries

Write only inside this directory. Do not render, publish, or preview-background. Snapshots only.
No BGM, no SFX, no network assets, no font fetches. Gates: `studio assemble . --captions` →
`studio verify .` → `npm run check` → snapshots → read the PNGs. `--speed 0.93` always.

## Deviations

(empty — append every departure from the piece file here as you make it)
