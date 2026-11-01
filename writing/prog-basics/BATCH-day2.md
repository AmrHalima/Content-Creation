# prog-basics — BATCH MANIFEST, DAY 2 (parts 12-22 · BASICS II)

Campaign: `prog-basics` · shared truth: `writing/prog-basics/series-bible-day2.md` ·
video design layer: `writing/prog-basics/frame-day2.md` (v2.1) · caption skin:
`writing/prog-basics/caption-skin-day2.html` · change log: `writing/prog-basics/CORRECTIONS-day2.md`

Format: portrait 1080x1920 short-form video, EN master, Kokoro `af_heart` @ **0.93** — which must be
**passed explicitly as `--speed 0.93`**, because `studio voice`'s house lookup misses the nested
`voice.voices.en` key and would silently run 0.74 (carriers proved it; `frame-day2.md` § 8). Burned
word-level captions, no BGM, no SFX. Written layer (script, on-screen text, cover, caption/hashtags,
pinned comment) lives in `pieces/NN-<slug>.md` and is the source of record per part.

Runtime: **~29-34s measured** per part, at 3.24 words/second. Shorter than Day 1 by the user's
explicit choice (bible-day2 § 0.2). **Nothing is padded to match.**

`series: prog-basics` in every `BRIEF.md`, so the Day 1 batch command covers both tranches.

## The 11

`order` is the publish sequence with 17 and 18 **swapped**, because both are direct-address parts and
adjacency is what the tranche exists to avoid (bible-day2 § 5). `id` and the badge number never move.

| order | id | title | [B]/[M] | mechanic | mode | grammar | slug | project | piece |
|---|---|---|---|---|---|---|---|---|---|
| 1 | pb-12 | Infinite loops and how to avoid them | B | Quiz | code card | G1 G3 G3-gate G5 | `infinite-loops` | `videos/prog-basics-12-infinite-loops/` | `pieces/12-infinite-loops.md` |
| 2 | pb-13 | Break and continue | B | Challenge | code card | G1 G2b G3 G5 | `break-and-continue` | `videos/prog-basics-13-break-and-continue/` | `pieces/13-break-and-continue.md` |
| 3 | **pb-14** | What is recursion? | B | Myth | **direct address** | **G8 + G6** | `what-is-recursion` | `videos/prog-basics-14-what-is-recursion/` | `pieces/14-what-is-recursion.md` |
| 4 | pb-15 | Base case in recursion | B | Quiz | code card | G1 G6 G3 G5 | `base-case` | `videos/prog-basics-15-base-case/` | `pieces/15-base-case.md` |
| 5 | pb-16 | Type casting and coercion | B | Debate | code card | G1 G2 G4 G5 | `type-casting` | `videos/prog-basics-16-type-casting/` | `pieces/16-type-casting.md` |
| 6 | **pb-18** | Comments and why they matter | B | Debate | **direct address** | **G8 + G4 cutaway** | `code-comments` | `videos/prog-basics-18-code-comments/` | `pieces/18-code-comments.md` |
| 7 | **pb-17** | Null, nil, and None | B | Save | **direct address** | **G8 + G3 cutaway** | `null-nil-none` | `videos/prog-basics-17-null-nil-none/` | `pieces/17-null-nil-none.md` |
| 8 | pb-19 | Operators: arithmetic, logical, comparison | B | Quiz | code card | G1 G2b G4 G3 G5 | `operators` | `videos/prog-basics-19-operators/` | `pieces/19-operators.md` |
| 9 | pb-20 | Short-circuit evaluation | M | Tag | code card | G1 G3 G5 | `short-circuit` | `videos/prog-basics-20-short-circuit/` | `pieces/20-short-circuit.md` |
| 10 | **pb-21** | Arrays | B | Save | code card | G1 G2b **G7-shift** G3 G5 | `arrays` | `videos/prog-basics-21-arrays/` | `pieces/21-arrays.md` |
| 11 | **pb-22** | Linked lists | B | Quiz | code card | G1 **G7** G3 G5 | `linked-lists` | `videos/prog-basics-22-linked-lists/` | `pieces/22-linked-lists.md` |

**Bold = a carrier.** 14 proves G6 + G8, 21 proves G7-shift, 22 proves G7 walk/prepend. Nothing else
starts until all three are snapshot-read. 15/17/18/20 clone a carrier.

Grammar already shipped in Day 1 that this tranche reuses instead of rebuilding: pb-11's
`03-gate.html` (the re-testing gate — it is part 12's whole F3), pb-11's `02-walk.html` (part 13's
list walk), pb-03's row of boxes (part 21's array row), pb-07's G2c rooms (part 14's nesting),
pb-10's `04-split.html` with two labelled titlebars (parts 16 and 18).

## Stage board

Real state is on disk, not in this table. Refresh with `node studio/tools/studio.mjs status --sync`
before acting on any row; a green cell means "not yet looked at" (Day 1 § 12 rule 7).

| id | brief | script | storyboard | voice @0.93 | cues | frames | assemble | verify | check | snapshot | render | copy pack |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| pb-12 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-13 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-14 | done | done | done | **0.93 ✓ — 5 wavs on disk, voiced 5/5** | – | **done · 5** | – | 0 high 0 med | **ok** | **read (52)** | **done · delivery** | done |
| pb-15 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-16 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-17 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-18 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-19 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-20 | – | – | – | – | – | – | – | – | – | – | **done · delivery** | – |
| pb-21 | done | done | done | **0.93 ✓** | done · 60 words | **done · G7-shift** | done | **0 high 0 med** | **ok** | **read (24)** | **done · delivery** | done |
| pb-22 | done | done | done | **0.93 ✓** | done · 84 words | **done · G7 walk** | done | **0 high 0 med** | **ok** | **read (43)** | **done · delivery** | done |

### Render run — 2026-11-01: all 11 Day 2 parts rendered at delivery

`studio render <dir> --quality delivery --yes`, run **sequentially** (one headless browser at a time),
after `studio batch verify --campaign prog-basics` → **22/22 ok**. Each MP4 was then ffprobed
independently of the tool that made it:

| part | mp4 duration | timeline | streams | mean vol | render |
|---|---|---|---|---|---|
| 12 | 25.633s | 25.62s | h264 1080x1920 + aac 2ch | −23.8 dB | 48s |
| 13 | 31.400s | 31.37s | h264 1080x1920 + aac 2ch | −24.4 dB | 56s |
| 14 | 34.700s | 34.7s | h264 1080x1920 + aac 2ch | −23.5 dB | 70s |
| 15 | 31.700s | 31.7s | h264 1080x1920 + aac 2ch | −25.0 dB | 134s |
| 16 | 31.100s | 31.08s | h264 1080x1920 + aac 2ch | −23.1 dB | 67s |
| 17 | 31.500s | 31.5s | h264 1080x1920 + aac 2ch | −23.3 dB | 61s |
| 18 | 33.600s | 33.6s | h264 1080x1920 + aac 2ch | −23.4 dB | 55s |
| 19 | 30.533s | 30.52s | h264 1080x1920 + aac 2ch | −23.2 dB | 57s |
| 20 | 30.600s | 30.6s | h264 1080x1920 + aac 2ch | −23.5 dB | 50s |
| 21 | 29.133s | 29.13s | h264 1080x1920 + aac 2ch | −23.3 dB | 45s |
| 22 | 32.000s | 32s | h264 1080x1920 + aac 2ch | −24.8 dB | 55s |

Every duration matches its timeline within one frame at 30fps (≤0.033s). Files land at
`videos/<slug>/renders/<slug>_<date>_<time>.mp4`, 4.3–5.8 MB, one render per project;
`studio status --sync` now reports `rendered` with `renders 1` for all eleven. Mean volume sits in a
tight −23 to −25 dB band across the tranche, which is what voice-only-over-silence should look like
(no BGM, no SFX, per bible § 7) — the tranche is internally consistent in speech level, so pb-21 and
pb-22 will not sound different from each other or from Day 1.

**Two stale cells corrected against disk, not against this file:** pb-14's
`BLOCKED — no audio` was already resolved by a later wave (5 wavs present, `voiced 5/5`, rendered with
audible speech), so the re-run instruction in the paragraph below is complete — **wave 2 is released**,
and the "14 has five authored frames and no voice track" note is no longer true. pb-22's cue count is
84 spoken words, not 91 (its own `BRIEF.md` → Deviations records the `CORRECTIONS-day2.md` § A re-cut).

`npx hyperframes usage --json` → `{"status":"unknown","reason":"unsupported_harness"}`. **Render spend
is not knowable from this harness**; these are local renders, so no cloud credits were drawn.

Carrier state as of 2026-10-28: **21 → 29.13s film, 22 → 32.0s film, both assembled and gated.**
**14 has five authored frames and no voice track** — its worker stopped on the speed guard rather
than shipping 0.74, which is the correct outcome and the only reason the tranche is not eleven films
at the wrong rate. Re-run 14's audio with `--speed 0.93`, then cues → assemble → verify → check →
snapshot, and only then release wave 2 (15, 17 and 18 clone 14's chrome).

pb-21 is **under the 30s floor** and reported rather than padded (bible-day2 § 0.2). Permitted levers
in `frame-day2.md` § 12: grow F5's pad first, then re-cut the frame shape; never add words.

## Per-part build recipe (one project per run)

```bash
cd "G:/Content Creation"
npx hyperframes init videos/prog-basics-NN-<slug> --non-interactive --example blank \
  --resolution portrait --skip-skills --skill hyperframes
mkdir -p videos/prog-basics-NN-<slug>/{assets/fonts,assets/voice,compositions/frames,.hyperframes}
# the v2 font set — NOT the Inter/Caveat set named in Day 1's bash block, which is v1 lineage:
cp videos/prog-basics-03-strings-vs-chars/assets/fonts/{SpaceGrotesk-400,SpaceGrotesk-700,JetBrainsMono-400,JetBrainsMono-700}.woff2 \
   videos/prog-basics-03-strings-vs-chars/assets/fonts/OFL-*.txt \
   videos/prog-basics-NN-<slug>/assets/fonts/
cp writing/prog-basics/frame-day2.md        videos/prog-basics-NN-<slug>/frame.md   # v2.1, Day 2 authority
cp .agents/design.md                        videos/prog-basics-NN-<slug>/design.md
cp writing/prog-basics/caption-skin-day2.html videos/prog-basics-NN-<slug>/.hyperframes/caption-skin.html
# then, in this order:
#   BRIEF.md  (frontmatter from pb-11's, with part/language/voice/voice_speed: "0.93"/grammar)
#   SCRIPT.md + STORYBOARD.md from pieces/NN-<slug>.md
#   node studio/tools/studio.mjs voice videos/prog-basics-NN-<slug> --dry   # MUST print speed=0.93
#   node studio/tools/studio.mjs voice  videos/prog-basics-NN-<slug> --speed 0.93   # ALWAYS pass it
#   node studio/tools/studio.mjs cues   videos/prog-basics-NN-<slug>
#   author 5 frames from the clone source named in this table
#   node studio/tools/studio.mjs assemble videos/prog-basics-NN-<slug> --captions
#   node studio/tools/studio.mjs verify  videos/prog-basics-NN-<slug>
#   npm run check            (the project's own pin)
#   npx hyperframes snapshot --at <every emphasis moment>   and READ the pixels
```

Pin `hyperframes@0.8.208` in the project's `package.json` scripts, matching the Day 1 v2-identity
parts (04/05/06/08/09/10/11) so the series re-renders identically. Verified resolvable offline on
this machine: `npx --yes hyperframes@0.8.208 --version` → `0.8.208` in 15s from cache. Do not put a
network call on the critical path of a parallel batch (known-traps § 17).

## Known-proven fixes carried by every part (found in Day 1, do not rediscover)

1. **Caption band** comes from the campaign skin (`--cap-band-top: 1024px` on `#captions-root`), never
   from the generator's `top: 1600px`. Without it `verify` reports a medium keep-out on every part.
2. **A chamber must not be field-coloured.** `--panel` `#1F242C` on `--ground` `#15181D` with 3px
   `rgba(255,255,255,0.16)` hairlines. The invisible version passed both `check` and `verify`.
3. **Python's single quotes** in every fragment (`'5'`, `'code'`); double quotes crept in once.
4. **No CustomEase** in the shipped GSAP — `power3.out` for arrivals, `back.out(1.4-1.8)` for pill pops.
5. **CTA headlines ≤24 chars at 6.4cqw** in a 176px box or they wrap into the pill.
6. **Air is authored, not measured**: `studio voice` syncs durations to the VO, then each frame gets
   ~+1.0s in `STORYBOARD.md` so the 0.5s crossfade sits inside silence.
7. **An SVG inside a scaled container drifts** out of the content box — connectors and rings are CSS
   divs/borders (directly relevant to G7's arrows this time).
8. **A highlighter plate must be self-contained inside its own token** (`.f4-w > .f4-hl + .f4-ht`),
   wiped with `clip-path`, or a sibling plate breaks contrast mid-tween.
9. **A timed visual needs its position class as well as its id** — pb-11 had six code lines stack at
   one static position while `check` reported 12 `content_overlap` errors.

## Authorized / not

Authorized by the user on 2026-10-28: build all 11 to the pre-render gate **and render them at
`--quality delivery` through `studio render`**, ffprobe each file afterwards for an h264 + aac stream
and a duration matching its timeline.

Not authorized: publish, schedule, Arabic pass, blog variants, BGM, SFX, any Day 1 edit, Day 3.
