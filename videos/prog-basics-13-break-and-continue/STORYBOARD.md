---
format: 1080x1920
duration: 31.37s
message: "break leaves the loop the instant it fires; continue drops the rest of this round and the walk goes on — use break on a find, continue on an ignore"
arc: hook → break as a rail cut → continue as a skipped chip → the code that did it → the challenge
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 13 of 22
identity: bench-v2.1
---

# STORYBOARD — prog-basics-13-break-and-continue (prog-basics, part 13 of 22)

English master, portrait 1080x1920, target ~31s (ceiling 54s). Copy source of record:
`writing/prog-basics/pieces/13-break-and-continue.md`. Shape: bible § 3. Grammar: `frame.md` v2.1 § 4
(G1 hook, G2b row ×2, G3 code chamber, G5 CTA) and § 7 (motion primitives). Durations below are the
estimates the voice run replaces with measured VO; the authored air (~1.0s per frame, ~2.0s on F5) is
added back into `- duration:` after `studio cues`, per bible-day2 § 12.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber = the word
being said, mint = a value, coral = an error the interpreter raised. **This part raises no exception, so
it ships with zero coral.** Every frame carries at least two § 7 primitives, and no cut lands on the
previous frame's layout: F2 wipes in from the left with the rail **above** the row; F3 wipes up with the
rail **below** the row and a collect lane added; F4 wipes in from the right into a chamber; F5 drops
down. The ligature guard is on all five stylesheets.

## The clone, and the two edits

pb-11's `02-walk.html` is a marker riding a rail over a row of positions, and it already carries every
atom this part needs: the `--line` rail, the stepping marker, P2 `drop-in` (value into chamber → squash
settle → mint border flash), the stop bar, the turn strip. Part 13 adds exactly two edits, one per
keyword, and each edit is the keyword:

- **break = rail cut.** The rail is two divs — head and tail — meeting at the target chamber. When
  `break` is said the tail retracts (`scaleX 1 → 0`, origin at the target) so the track stops
  mid-length, the marker lifts out of the board, and the chamber past the cut never gets its mint
  border. The walk does not finish; it *leaves*.
- **continue = skipped chip.** The marker hops over the `-1` chamber (x step plus a downward y dip)
  under a 3px `--line` dashed arc, that chamber's skin dims to 0.42 with its digit held at `--muted`
  (§ 14), and the collect lane below fills one mint digit per visit — `3 8 2 7`, the ledger's
  `[3, 8, 2, 7]`.

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows (all ambient loops start and end at
their own zero, so a cut never resets the world). Ink `#F4F1EA`; amber `FFD166` marks the spoken word
only — one `--say` plate lit at any instant; mint `#5AD6A0` marks values and printed output only;
`--panel` `#1F242C` chambers on the field with 3px `rgba(255,255,255,0.16)` hairlines (a chamber painted
in the field colour is invisible and passes both `check` and `verify`). Row grid is the carrier's:
chamber 142x152, pitch 158, first slot x 74 (span 932 inside the 936px content column). Content lives
between y = 230 and y = 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for the
platform's own chrome.

Cuts: each frame wipes its content in from a different edge and pushes out at its own end, inside the
~1s authored silence pad, so no sentence spans a cut and no join is a hard cut to an identical board.
F5 carries no exit push — it loops under the platform chrome and must hold alone.

## Frame 1 — The hook (G1)

- scene: type alone on the ground, three groups, nothing illustrated. `two tiny keywords` arrives, then the muted glue line `that save you`, then `messy loops` on the solid amber say-plate; a `--line` rule settles under it on the silent beat. A muted mono gloss `a loop runs the same lines again` lands under the plate (the hook cannot say it, so the frame does).
- duration: 3.77s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the promise
- voiceover: "Two tiny keywords that save you from messy loops."
- sfx: none

## Frame 2 — break, shown as a rail cut (G2b row)

- scene: the list `[3, -1, 8, 2, 7, 9]` as six mint chambers under a `--line` rail, a neutral `n` marker riding it, and a mono `if n == target: break` written above on P3 type-on. The marker steps onto `3`, `-1`, `8`, `2`, `7` — one chamber per beat — while a muted `target = 7` tag stands over the fifth. On the spoken word `break` the keyword chip takes the frame's only amber plate, the rail's tail retracts so the track stops at the target, the marker lifts out of the board, and the `9` chamber loses its border to `--line-faint` under a muted `never visited` tag. Annotation: `out of the loop, on the spot`.
- duration: 5.14s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-rail-cut.html
- type: mechanism
- beat: break leaves immediately
- voiceover: "Break exits the loop immediately. Use break when you've found what you need."
- sfx: none

## Frame 3 — continue, shown as a skipped chip (G2b row, mirrored)

- scene: the same six chambers, now up top with the rail and the marker **below** them and a mono `if n < 0: continue` on P3 type-on above. On `continue` the keyword plate lights, the marker hops over the `-1` slot (x step plus a downward y dip) under a 3px `--line` dashed arc, and that chamber's skin dims to 0.42 while its digit holds at `--muted`. Then each visited chamber flashes its border mint and a mint digit arrives in the lane under the rail: `3`, `8`, `2`, `7` — and the walk stops at `7` because F2 already taught `break`. Annotation: `this round only, then the next`.
- duration: 8.06s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/03-skip.html
- type: mechanism
- beat: continue skips one round
- voiceover: "Continue skips the rest of this round and jumps to the next one. Use continue to ignore items you don't care about."
- sfx: none

## Frame 4 — The code that did it (G3)

- scene: one `main.py` chamber with a `PYTHON` chip and four lines written under a caret, one per spoken clause — `for n in nums:` / `    if n < 0:` / `        continue` / `    if n == target: break`. `continue` takes a self-contained amber plate at its onset and is retired to ink before `break`'s plate sweeps, so the board never holds two. Then the terminal strip arrives: muted corner label `SEEN`, muted `#`, and `[3, 8, 2, 7]` in mint (executed). No coral.
- duration: 7.81s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: proof, and the collect result
- voiceover: "If n is less than zero, continue. If n equals the target, break. Seen keeps three, eight, two, seven."
- sfx: none

## Frame 5 — The challenge (G5 CTA)

- scene: `first even number?` at 6.4cqw in a 176px band (18 characters), a muted mono chip `using break` beside it, the challenge's own list `nums = [3, 7, 2, 8]` returned as a dimmed hint row of four chambers (skin dimmed, digits at full ink), and the mechanic verb plate `POST YOUR CODE` in solid amber — the frame's only amber — landing on the spoken verb. Badge `PROGRAMMING BASICS · BASICS II · 13 · BEGINNER`. The answer is not on the frame; it holds alone with no exit push.
- duration: 6.59s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Challenge: find the first even number in a list using break. Post your code."
- sfx: none

## Real durations

Measured on 2026-10-28 by `studio voice` (Kokoro `af_heart`, printed `speed=0.93`) + `studio cues`, which
also produced the per-word onsets every emphasis time in the frame files cites: **77 words over 5 lines,
25.365s of speech** — a measured 3.04 words/second for this part's vocabulary (the 3.24 planning number
assumes shorter words; the measured number always wins). Air is 1.0s per frame and 2.0s on F5 (which
loops under the platform's chrome and carries no exit push), so each 0.5s crossfade sits inside silence
and no sentence spans a cut.

| Frame | VO seconds | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 2.773 | 3.77 | 9 | 0s → 2.48s |
| F2 | 4.139 | 5.14 | 13 | 0s → 3.92s |
| F3 | 7.061 | 8.06 | 22 | 0s → 6.86s |
| F4 | 6.805 | 7.81 | 19 | 0s → 6.54s |
| F5 | 4.587 | 6.59 | 14 | 0s → 4.32s |
| **film** | **25.365 speech** | **31.37** | **77** | |

Cumulative starts: 0 / 3.77 / 8.91 / 16.97 / 24.78 → **31.37s**, inside the ~29-34s planning band and
above the tranche's 30s floor, so **no pad growth was needed and no words were added**.

**Runtime watch:** the plan put this part within ~0.5s of the tranche's 30s floor. The measured film is
**31.37s — above the floor, so F5's pad stayed at the authored 2.0s and no words were added**
(bible-day2 § 0.2). If a later re-voice drops it under 30s, the first lever is F5's pad, never the copy.
