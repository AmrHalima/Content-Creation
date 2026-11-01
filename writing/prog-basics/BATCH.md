# prog-basics — BATCH MANIFEST (11 parts)

Campaign: `prog-basics` · shared truth: `writing/prog-basics/series-bible.md` ·
video design layer: `writing/prog-basics/frame.md` · caption skin:
`writing/prog-basics/caption-skin.html`

Format: portrait 1080x1920 short-form video, EN master, Kokoro `af_heart` @0.74, burned word-level
captions, no BGM, no SFX. Written layer (script, on-screen text, cover, caption/hashtags, pinned
comment) lives in `pieces/NN-<slug>.md` and is the source of record for each part.

**Real state is on disk, not in this table.** Refresh with
`node studio/tools/studio.mjs status --sync` before acting on any row; a green cell means
"not yet looked at" (bible § 12 rule 7).

## The 11

`order` is the suggested publish sequence and is **free to change** — every part is
order-independent (bible § 2), so re-ordering is a one-column edit here plus a badge-number
decision, not a rebuild. `id` is stable; never renumber it.

| order | id | title | [B]/[M] | mechanic | frames | film | slug | project | piece file |
|---|---|---|---|---|---|---|---|---|---|
| 1 | pb-01 | What is a variable? | B | Quiz | 5 | 43.1s | `variable` | `videos/prog-basics-01-variable/` | `pieces/01-variable.md` |
| 2 | pb-02 | Data types: int, float, string, boolean | B | Quiz | 5 | 39.0s | `data-types` | `videos/prog-basics-02-data-types/` | `pieces/02-data-types.md` |
| 3 | pb-03 | Strings vs. characters | B | Save | 5 | 40.0s | `strings-vs-chars` | `videos/prog-basics-03-strings-vs-chars/` | `pieces/03-strings-vs-chars.md` |
| 4 | pb-04 | What is a function? | B | Tag | 5 | 44.1s | `functions` | `videos/prog-basics-04-functions/` | `pieces/04-functions.md` |
| 5 | pb-05 | Parameters vs. arguments | B | Myth | 5 | 42.9s | `params-vs-args` | `videos/prog-basics-05-params-vs-args/` | `pieces/05-params-vs-args.md` |
| 6 | pb-06 | Return values vs. side effects | M | Debate | 5 | 47.0s | `return-vs-print` | `videos/prog-basics-06-return-vs-print/` | `pieces/06-return-vs-print.md` |
| 7 | pb-07 | Scope: local vs. global | B | Quiz | 5 | 51.7s | `scope` | `videos/prog-basics-07-scope/` | `pieces/07-scope.md` |
| 8 | pb-08 | Constants and immutability | B | Save | 5 | 49.1s | `constants-immutability` | `videos/prog-basics-08-constants-immutability/` | `pieces/08-constants-immutability.md` |
| 9 | pb-09 | If/else conditionals | B | Challenge | 5 | 48.8s | `if-else` | `videos/prog-basics-09-if-else/` | `pieces/09-if-else.md` |
| 10 | pb-10 | Switch statements | B | Debate | 5 | 47.8s | `switch` | `videos/prog-basics-10-switch/` | `pieces/10-switch.md` |
| 11 | pb-11 | For loops vs. while loops | B | Quiz | 5 | 43.9s | `for-vs-while` | `videos/prog-basics-11-for-vs-while/` | `pieces/11-for-vs-while.md` |

Total runtime 493s (8m13s). Identity v2 applied to all 11 — parts 1 and 2 were built on v1 and
re-passed on 2026-10-27; both had Inter/Caveat declared and a caption skin with **no `@font-face`**,
so their captions were rendering in system sans while `verify` and `check` both passed.

Grammar used per part (bible § 4): G1 hook, G2 box, G3 code chamber, G4 split, G5 CTA.
01: G1 G2 G3 G5 · 02: G1 G2 G4 G5 · 03: G1 G2 G3 G5 · 04: G1 G2 G3 G5 · 05: G1 G2 G3 G5 ·
06: G1 G4 G3 G5 · 07: G1 G2 G3 G5 · 08: G1 G2 G3 G5 · 09: G1 G2 G3 G5 · 10: G1 G4 G3 G5 ·
11: G1 G4 G3 G5. Four parts use G4 (02, 06, 10, 11), which is why 02 was built as a sample.

## Stage board

| id | brief | script | storyboard | voice | cues | frames | assemble | verify | check | snapshot | render | copy pack |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| pb-01 | done | done | done | done | done | v2 re-pass · 140 sites | done | **0 high 0 med** | **ok** | **read (27)** | **delivered 43.1s** | done |
| pb-02 | done | done | done | done | done | v2 re-pass · 159 sites | done | **0 high 0 med** | **ok** | **read (123)** | **delivered 39.0s** | done |
| pb-03 | done | done | done | done | done | done · 91 sites | done | **0 high 0 med** | **ok** | read (prior run) | **delivered 40.0s** | done |
| pb-04 | done | done | done | done | done | done · 151 sites | done | **0 high 0 med** | **ok** | **read (31)** | **delivered 44.1s** | done |
| pb-05 | done | done | done | done | done | done · 164 sites | done | **0 high 0 med** | **ok** | **read (26)** | **delivered 42.9s** | done |
| pb-06 | done | done | done | done | done | done · 216 sites | done | **0 high 0 med** | **ok** | **read (117)** | **delivered 47.0s** | done |
| pb-07 | done | done · corrected demo | done | done | done | done · 150 sites | done | **0 high 0 med** | **ok** | **read (22)** | **delivered 51.7s** | done |
| pb-08 | done | done | done | done | done | done · 174 sites | done | **0 high 0 med** | **ok** | **read (25)** | **delivered 49.1s** | done |
| pb-09 | done | done · trap named | done | done | done | done · 213 sites | done | **0 high 0 med** | **ok** | **read (33)** | **delivered 48.8s** | done |
| pb-10 | done | done · day.js/day.py | done | done | done | done · 211 sites | done | **0 high 0 med** | **ok** | **read (78)** | **delivered 47.8s** | done |
| pb-11 | done | done | done | done | done | done · 266 sites | done | **0 high 0 med** | **ok** | **read (56)** | **delivered 43.9s** | done |

Batch gate, re-run at completion: `node studio/tools/studio.mjs batch verify check --campaign
prog-basics` → 11/11 verify:ok. `check` returned 10/11 on the first pass — pb-09 exited 3221226505
(`STATUS_STACK_BUFFER_OVERRUN`, the checker process itself died at 4s). Re-run alone it passed in
16s, so that was the known flake on this machine, not a composition finding.
**1,935 GSAP sites across the series.** Pins split 0.8.207 (pb-01, 02, 03, 07) / 0.8.208 (the rest),
left as-is deliberately: each pin is what makes that project re-render identically years later.

"copy pack" = the five required written deliverables (script, on-screen + code treatment, cover,
caption/hashtags, pinned comment) exist in the piece file for all 11.

## Per-part build recipe (parts 3-11, one project per run)

```bash
cd "G:/Content Creation"
npx hyperframes init videos/prog-basics-NN-<slug> --non-interactive --example blank \
  --resolution portrait --skip-skills --skill hyperframes
# fonts + design + frame spec + caption skin, all from the campaign, never re-authored:
# NOTE (v2): Inter and Caveat are DROPPED — they are the workspace brand's faces, and frame.md §
# fonts_dropped gives this series its own type. Copy the four v2 files + licences from pb-03, not
# the old pattern-singleton set. All of pb-03..pb-08 already ship this set.
mkdir -p videos/prog-basics-NN-<slug>/{assets/fonts,assets/voice,compositions/frames,.hyperframes}
cp videos/prog-basics-03-strings-vs-chars/assets/fonts/{SpaceGrotesk-400,SpaceGrotesk-700,JetBrainsMono-400,JetBrainsMono-700}.woff2 \
   videos/prog-basics-03-strings-vs-chars/assets/fonts/OFL-*.txt \
   videos/prog-basics-NN-<slug>/assets/fonts/
cp writing/prog-basics/frame.md   videos/prog-basics-NN-<slug>/frame.md
cp .agents/design.md              videos/prog-basics-NN-<slug>/design.md
cp writing/prog-basics/caption-skin.html videos/prog-basics-NN-<slug>/.hyperframes/caption-skin.html
# then: BRIEF.md (copy 01's frontmatter, change part/title/message/words) + SCRIPT.md +
# audio_request.json + STORYBOARD.md -> studio voice -> author 5 frames from 01/02 ->
node studio/tools/studio.mjs assemble videos/prog-basics-NN-<slug> --captions
node studio/tools/studio.mjs batch verify check --campaign prog-basics
npx hyperframes snapshot --at <each emphasis moment>   # read the pixels
```

Clone source for frames: `videos/prog-basics-01-variable/compositions/frames/` supplies G1 (hook),
G2 (box), G3 (code chamber), G5 (CTA); `videos/prog-basics-02-data-types/compositions/frames/04-split.html`
supplies G4. Copy the whole file and change the `fN-` prefix, the composition id, the durations and
the copy — the CSS atoms are the series' look and are not to be re-derived per part.

## Known-proven fixes carried by every part (found in parts 1-2, do not rediscover)

1. **The caption band.** The generator's built-in skin writes `top: 1600px`, which is inside the
   platform's own overlay zone and is not the house band. The campaign skin sets
   `--cap-band-top: 1024px` on `#captions-root` (more specific than the injected `:root` tokens),
   so the override survives every re-assembly. Without the skin, `verify` reports a medium
   keep-out hit on every part. **Candidate for `studio assemble`'s post-fix list** — see the
   report.
2. **A petrol chamber on a petrol field is invisible.** `background: #0F1818` on the `#0F1818`
   field renders as floating text with a titlebar. G3 and G4 use `rgba(255,255,255,0.05)` over the
   field plus the spec's `rgba(255,255,255,0.1)` hairline. `check` and `verify` both passed with
   the invisible version; only the snapshot showed it.
3. **Code uses Python's single quotes** (`'5'`, `'code'`, `'Welcome'`) in every fragment, matching
   the brief's own examples. Straight double quotes crept into part 02 and were fixed.
4. **design.md's signature easing array is not expressible in the shipped GSAP** (no CustomEase
   plugin). The campaign uses `power3.out` for arrivals and `back.out(1.4-1.8)` for the pill pops.
   Recorded in `frame.md` § 6.
5. **A wrapped CTA headline collides with the CTA pill.** At 7.6cqw "What does this give you?"
   wrapped into the pill below it. CTA headlines are 6.4cqw with a 176px box; keep any headline
   that must fit on one line under ~24 characters at that size.
6. **Air at the cut is authored, not measured.** `studio voice` syncs frame durations to the exact
   VO length; each frame then gets +~1.0s in `STORYBOARD.md` so the 0.5s crossfade sits inside the
   silence and no sentence spans a cut.

## Queued, not authorized (bible § 11)

**Publish or schedule of any kind** — the batch is built and rendered locally, nothing has gone to a
platform. · Arabic (عامية مصرية) pass · blog variants · parts 12+ · social scheduling tooling.

**Removed from this list on 2026-10-27:** rendering. The user authorised it explicitly before
leaving ("accept everything… finish all the work yourself"), and all 11 rendered at
`--quality delivery` through `studio render`, each ffprobed afterwards for an h264 + aac stream and a
duration matching its timeline.

## Accuracy — status

All corrections in `CORRECTIONS.md` were **approved** on 2026-10-27 and are implemented. Every claim
was executed on Python 3.13.15 (and node v24.15.0 for pb-10's JS), including by the builders
themselves, not inherited: pb-07's rebuilt scope demo, pb-09's one-liner SyntaxError, pb-10's
`case _ | 'sat' | 'sun'` (SyntaxError — `case 'sat' | 'sun':` is the valid grouping, and this
correction was itself a fix to the campaign's own earlier note), plus the pb-02 `bool`/`True`,
pb-03 slice-exclusion and pb-06 `y = double(4)  # None` additions.

## Accuracy ledger summary (bible § 9, all executed on Python 3.13.15)

8 parts confirmed as briefed. **3 parts carry a proposed correction** that needs the user's
approval before the frames are authored: **pb-07** (the scope example as written proves nothing —
rebuilt demo), **pb-09** (the one-liner challenge's most likely answer is a SyntaxError — name the
trap), **pb-10** (the only non-Python fragment in the batch — label it `day.js`). Two smaller
wording proposals: **pb-02** (`bool` on screen, `True` capitalised) and **pb-03** (say that the
slice end is excluded). **pb-06** has a proposed addition (`y = double(4)` gives `None`) that is
the part's strongest argument. Full detail in each piece file's `## Accuracy` section.
