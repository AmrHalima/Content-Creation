---
id: pb-13
order: 2
series: prog-basics
tranche: day-2 (BASICS II)
title: Break and continue
slug: break-and-continue
project: videos/prog-basics-13-break-and-continue/
difficulty: B
mechanic: Challenge
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 77
target_length: ~31s                # 77 words at the measured 3.24 w/s + 6s authored air
ceiling: 54s
grammar: G1 G2b G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-11-for-vs-while/02-walk.html (the finite walk over a row of positions)
---

# P13 · Break and continue · [B] · Challenge · code card

**Message:** two keywords change what a loop does with the rest of its own run — `break` leaves the
loop immediately, `continue` abandons this round only and the walk goes on.

The first non-carrier of the tranche, and the cheapest one: its whole visual argument is pb-11's finite
walk (a marker over a rail of positions) with exactly two edits bolted on — a **rail cut** and a
**skipped chip**. Those two edits are the two keywords, and neither needs a new grammar.

The Challenge mechanic is the one place Day 1 got burned (pb-09): a challenge whose most likely reply is
half an answer is a bad challenge. So the pinned comment carries **both** halves — the number the loop
finds, and what the loop says when nothing matches.

## Final narration

Estimated at **3.24 words/second** (`af_heart` @ 0.93, measured by the carriers — every Day 2 piece
file's original 2.4 w/s table ran ~26% long). `studio voice` measures and syncs, `studio cues` places
the words; write the measured durations into `STORYBOARD.md`.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.8s | Two tiny keywords that save you from messy loops. | Even, no sales voice. `tiny` and `messy` are the two things the eye keeps; the rest is glue. Verbatim hook. |
| F2 | 4.0s | Break exits the loop immediately. Use break when you've found what you need. | First sentence is flat and fast — the word `immediately` is the whole lesson. Second sentence is the rule of use, unhurried. |
| F3 | 6.8s | Continue skips the rest of this round and jumps to the next one. Use continue to ignore items you don't care about. | One breath per sentence. Land `skips`, then `next`, then `ignore`. Nothing else in the line is emphasized. |
| F4 | 5.9s | If n is less than zero, continue. If n equals the target, break. Seen keeps three, eight, two, seven. | Read the two conditions as conditions, then the four values as values with a small pause between them. |
| F5 | 4.3s | Challenge: find the first even number in a list using break. Post your code. | Verbatim CTA mechanic. `Challenge` opens it, `Post your code` closes it, and nothing in between is emphasized. |

**Measured by the build** (`studio voice` @ 0.93 + `studio cues`, 77 words over 5 lines): VO
2.773 / 4.139 / 7.061 / 6.805 / 4.587 = **25.365s of speech** — 3.04 w/s, not 3.24, because this part's
words are long (`immediately`, `continue`, `Challenge`). With the authored air (1.0s per frame, 2.0s on
F5) the frame durations are **3.77 / 5.14 / 8.06 / 7.81 / 6.59 = 31.37s**, above the tranche's 30s floor,
so no pad growth was needed and no words were added.

**Spoken code:** `if n < 0:` → "if n is less than zero". `if n == target:` → "if n equals the target".
`continue` → "continue". `break` → "break". `seen` → "seen". `[3, 8, 2, 7]` → "three, eight, two,
seven". The voice never says brackets, colons or indentation, and never reads the `nums =
[3, -1, 8, 2, 7, 9]` literal aloud — the row on screen is that list.

**No re-cut applies to this part.** All four explain sentences are already ≤14 words / ≤2 clauses
(`CORRECTIONS-day2.md` § A lists part 13 as untouched); they are simply split one idea per frame — F2
carries the two `break` sentences, F3 the two `continue` sentences. Hook and CTA are verbatim.

## On-screen text and code treatment

Every frame: the `#15181D` ground with the drifting dot grid and the two breathing glows, all returning
to their own zero; kicker `PROGRAMMING BASICS · BASICS II · 13` + the amber `BEGINNER` badge as fixed
chrome (identical on all five frames, so it never reads as "the word being said"); the ligature guard
(`font-variant-ligatures: none` + `font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`) on **every**
frame's stylesheet, not only the code one. **Zero coral — this part raises no exception.**

**F1 (G1 hook, also the cover).** Three groups of the hook, `--ground` only, nothing illustrated:
`two tiny keywords` (ink) / `that save you` (muted, so the still reads as two lines) / `messy loops` on
the solid `--say` plate. P1 `say-sweep` inside the first second of the utterance; a 480px `--line` rule
settles under it on the silent beat.

**F2 (G2b — pb-11's walk, with the rail CUT).** The list `[3, -1, 8, 2, 7, 9]` as six chambers on the
tranche's 6-slot grid (142x152, pitch 158, first slot x 74), values mint, sitting under a `--line` rail
with a neutral `--panel-2` marker labelled `n` riding it (marker is chrome, never amber — amber is the
keyword's alone). The marker steps 3 → -1 → 8 → 2 → 7, one chip per beat. A muted mono `target = 7` tag
stands over the fifth chamber. Then the mechanism:
```
cut    : the rail is split into a head (up to the target) and a tail (target → end). On the spoken
         word `break` the tail retracts (scaleX 1 → 0, origin left) so the walk visibly stops
         mid-length, and the marker lifts out of the frame (y -150, opacity 0).
untouched: the 9th chamber never gets a mint border flash; its border drops to --line-faint and a
          muted tag `never visited` settles under it. No new number is printed.
```
The keyword chip `break` (mono, `--panel-2`, 3px `--line`) carries the single amber plate of this frame,
swept at `break`'s onset and pulsed once when the voice says the word again. The one reading line is
`exit as soon as it fires` (ink on `exit`), which arrives before the cut and therefore survives to it;
the counted tag `5 rounds run` (mono `--muted`, chrome) lands with the cut — the body ran for `3, -1, 8,
2, 7` and then break fired. P3 type-on writes `if n == target: break` above the row, with `&nbsp;`
between every token (a flex line drops literal spaces).

**F3 (G2b — the same walk, reordered so the board reads as turned over, not reloaded).** The collect
lane moves **above** the row and the row drops ~150px, so F3 never lands on F2's layout (and it wipes up
where F2 wiped in from the left): code line at y 292, keyword chip 366, `seen` lane 452-524, hop arc
542-602, rail 616 with the marker **under** it (stem reaching up into the chamber), row 700-852, tags
below that. Beats:
```
skip   : on `continue` the marker hops OVER the `-1` chamber (x step of two pitches plus a y rise of
         34, yoyo) while a 3px --line arc (rounded top, no base) arrives over that slot, and a muted
         mono `skipped` tag lands under it.
dim    : the skipped chamber's skin (background + border) fades to 0.42; its `-1` digit is a sibling
         that keeps full alpha in --value mint instead of riding the group opacity (frame-day2 § 14:
         0.42 on the whole element puts the text at 1.3:1, and a value that stops being mint would be
         a colour lie — the tag is what says it was dropped).
collect: each visited chamber flashes its border mint (P2's assignment gesture) and a mint digit
         arrives in the lane above, one per visit — 3, 8, 2, 7 — closed by the muted tag
         `kept, in order`. The walk stops at 7 because F2 already taught `break`: the marker dims to
         0.35 and the `9` chamber loses only its border.
```
`continue` gets its own single amber plate at its spoken onset, pulsed once on the second mention. The
two reading lines are `this round only, then the next` (on `this round`, 1.44) and `drop the round, keep
the walk going` (on `ignore`, 5.06) — both hold past the `line_unread` floor.

**F4 (G3 code chamber).** `main.py`, `PYTHON` chip, four lines, P3 type-on under a caret, one line per
spoken clause:
```
for n in nums:
    if n < 0:
        continue
    if n == target: break
```
`continue` (line 3) and `break` (line 4) each take a self-contained `--say` plate inside its own token
(`.f4-w > .f4-hl + .f4-ht`, clip-wiped, amber becoming the token's own background with `--say-ink`
text). `continue`'s plate is **retired to ink before** `break`'s sweep starts — never two amber plates
on the board at once. Terminal strip below the chamber, `--panel-2`, corner label `SEEN` in muted mono,
content `# [3, 8, 2, 7]` with the `#` muted and the list in `--value` mint (executed: `seen` = that
list). No coral; the strip is the answer to what the loop collected, not an error.

**F5 (G5 CTA).** Headline `first even number?` at 6.4cqw in a 176px band (18 characters, inside the
≤24 wrap rule), the muted mono chip `using break` beside it, the challenge's own list back as a dimmed
hint row — four chambers `3 7 2 8` with `nums =` in muted mono above them, dimmed through the chamber
skin so the digits stay readable — and the mechanic verb plate `POST YOUR CODE` in solid `--say`, the
frame's only amber. Badge `PROGRAMMING BASICS · BASICS II · 13 · BEGINNER`. **The answer is not on the
frame**: no mint highlight on which chip is picked, no `2` announced. No exit push — this frame loops
under the platform's chrome and holds alone.

## Cover / title card

`two tiny keywords · messy loops` (the hook cut to 5 words across the two ink lines; the middle clause
is muted so a still reads the claim, not the glue) + badge `PROGRAMMING BASICS · BASICS II · 13` +
`BEGINNER`. Amber plate on `messy loops` — the sharpest word of the hook, and the pain the part removes.

## Post copy

**Feed caption:**

    Two tiny keywords that save you from messy loops.
    break exits the loop immediately. continue skips the rest of this round and jumps to the next one.
    Use break when you've found what you need. Use continue to ignore items you don't care about.
    Challenge: find the first even number in a list using break. Post your code.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`
**X:** `break leaves the loop the instant it fires. continue drops the rest of one round and the walk goes on. walk [3, -1, 8, 2, 7, 9] with both and you collect [3, 8, 2, 7] — it stops at the 7 and never sees the 9. challenge: first even number, using break. #python`
**LinkedIn:** the practical version of this is the flag variable. a loop that hunts for one match either
carries a `found` boolean through every round or just breaks on sight; a loop that has to ignore bad
input either nests its whole body inside an `if` or puts `continue` at the top. both keywords exist to
keep one round short. the challenge in the clip is the two-line version of that.
`#python` `#programming` `#learntocode`

**Pinned comment:** `Two answers, because the second one is where the code breaks. For nums = [3, 7, 2, 8] the loop prints 2 and leaves. For nums = [1, 3, 5] there is no even number, so set found = None before the loop and it prints None instead of an undefined variable — and remember -4 is even: -4 % 2 == 0 is True. Part 12 is the loop that never ends; part 14 is what happens when a function calls itself.`

## Accuracy

Executed 2026-10-28 on Python 3.13.15 (`series-bible-day2.md` § 4, `.tmp/day2_accuracy.py`), and
re-run inside this build for the exact strings on screen:

- walking `[3, -1, 8, 2, 7, 9]` with `if n < 0: continue` and `if n == target: break` at `target = 7`
  collects **`seen = [3, 8, 2, 7]`** — it stops AT the target and never reaches the `9`. That is the
  literal text on F4's strip and the digit sequence on F3's collect lane.
- the break-only walk the F2 rail cut draws (`for n in nums:` … `if n == target: break`, no
  `continue`) collects `[3, -1, 8, 2, 7]`: re-executed in this project's build, so F2's marker really
  does step onto `-1` there. **No number is printed on F2** — the strip is F4's claim.
- CTA answer: first even in `[3, 7, 2, 8]` is **`2`**; `[1, 3, 5]` gives **`None`** with `found`
  initialised before the loop; `bool(-4 % 2 == 0)` is **`True`**, so negative inputs do not break the
  intended test (all three from the ledger).

Nothing on screen is recalled: the list literal, `target = 7`, the collected list and the CTA's list are
all ledger entries or re-executed here.

## Gate state

Built to the **pre-render gate only**: voice @ 0.93, cues, 5 frames, assemble, verify, check, snapshot
read. **No render, no MP4, no publish, no schedule, no Arabic pass, no BGM, no SFX, no
`preview --background`** (parallel workers; snapshots only).

Beats to snapshot-read first, in this order: (1) the **rail cut** — is the tail visibly gone and the
marker gone with it, and is the `9` still on the board but unflooded? (2) the **skipped chip** — is
`-1`'s digit still legible while its skin is at 0.42? (3) the **`# [3, 8, 2, 7]`** strip — right order,
mint, inside 230→1004? (4) **never two amber plates at once** in F4 (sample between `continue`'s retire
and `break`'s sweep). A green `verify`/`check` means "not yet looked at" on all four of these.

Runtime: measured **31.37s** (25.365s speech + 6.0s air), above the 30s floor, so F5's pad stayed at the
authored 2.0s and **no words were added** (bible-day2 § 0.2). Ceiling stays 54s.

**Gate outcome, observed at the end of the build:** `studio verify` 0 high / 0 medium across 7 html
files; `npm run check` → `Check passed` with 0 errors, 5 `clip_media_fit` warnings (the authored air),
1 layout info (F2's exit push lifting the full-height band 2.96px mid-crossfade), Contrast 38/38 WCAG
AA, Craft 0/0 after two real `line_unread` fixes. 43 snapshot moments read: the rail cut is visible at
6.7-7.0s (track ends against two ink notch bars, marker gone, `9` recessed under `NEVER VISITED`); the
skipped chip at 10.35-12.3s (`-1`'s body recessed, its digit legible, `SKIPPED` under it, `seen` lane
reading `3 8 2 7` with the `9` never collected); the `# [3, 8, 2, 7]` strip at 23.5s under a muted
`SEEN` label, mint, inside the content box; and 19.4s proves the plate rule — between `continue`'s
retire and `break`'s sweep the board holds **no** amber plate at all. Two findings only pixels caught:
a flex code line drops literal whitespace between tokens (`ifn==target:break` until every gap became
`&nbsp;`), and F2's second annotation could not reach its legibility floor inside 4.14s of speech, so it
was cut in favour of the counted tag `5 rounds run`.
