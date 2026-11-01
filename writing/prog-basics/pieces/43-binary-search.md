---
id: pb-43
order: 10
series: prog-basics
tranche: day-4 (STRUCTURES I)
title: Binary search
slug: binary-search
project: videos/prog-basics-43-binary-search/
difficulty: B                      # load-bearing badge, not prose
mechanic: Challenge                # load-bearing badge, not prose
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 82
target_length: ~31s                # 82 / 3.24 = 25.3s speech + 6.0s air
ceiling: 54s
grammar: G1 G2b G2b-halves G2b-trace G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: pending-ledger           # four counted claims, including the hook's own number
ledger_placeholders: 4
notation: ALLOWED as a COMPARISON LABEL only (tranche ruling 1) — one pair, on F4. Never in narration.
clone_source: pb-21's G2b row + pb-11/pb-13's finite walk with the marker under the rail
---

# P43 · Binary search · [B] · Challenge · code card

**Message:** sort it once, then throw away half of what is left at every look — so the number of looks
grows by halving instead of by counting, and a billion items costs about thirty looks.

The tranche's Challenge part and the direct descendant of pb-13: same row, same marker, same counted
`STEPS` tag, with one new mechanism — a **half that goes away**. pb-13 cut a rail (break) and skipped a
chip (continue); here the remaining length halves per step, which is the most visually obvious idea in the
whole series and the one a learner can rebuild at a whiteboard from memory.

**Notation (tranche ruling 1), narrow form.** One comparison pair on F4: `~ log n` against the linear
scan's label, as the two ends of the counted comparison pb-37 established — the same role `O(1)` / `O(n)`
play there and no wider. Everything else in this part is counted, not symbolised: the `STEPS` tag, the
halving widths, the hook's "about 30". Narration says "halving" and never a symbol. 41 and 42 own
notation as a lesson; 34, 35, 36, 38, 39, 40 and 44 keep the total ban.

## Final narration

Budget at **3.24 words/second** (`af_heart` @ 0.93). 82 words → 25.3s speech + 6.0s air = **~31.3s**. At
3.04 w/s: ~27.0 + 6.0 = **~33.0s**. Band 29–34, nothing added.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 3.1s | Find one number among a billion in about 30 steps. | Verbatim hook. Three numbers in one line, so slow down: `a billion` then `thirty`. The claim is the trick and it must be heard as a claim. |
| F2 | 5.6s | Binary search needs the data sorted first. Then it checks the middle item and throws away one half. | `sorted first` is the condition and the thing the challenge will test. `one half` lands on the half that dims. |
| F3 | 6.8s | If your target sits lower, drop the right side. If higher, drop the left and keep going until you land on it. | Two mirrored conditions, same speed, then the walk. `drop` twice is the whole algorithm and should sound cheap. |
| F4 | 6.8s | Look for seven in one, three, five, seven, nine. The middle is five, you go right, and the next middle is seven. | Read the five values as values with a small gap at each, exactly as pb-13 read its collected list. `you go right` is the turn. |
| F5 | 3.1s | Challenge: about how many steps for 1,000 items? Comment it. | Verbatim CTA mechanic. `about` belongs in the question, so leave it in and let the answers be approximate. `1,000` is spoken "a thousand". |

**Line counts (hand-verified from the table above; a `⟪LEDGER⟫` token counts as the one word it stands
for):** F1 10 · F2 18 · F3 22 · F4 22 · F5 10 = **82 spoken words** → 25.3s speech + 6.0s air = **~31.3s
film** (~33.0s at pb-13's 3.04 w/s). `SCRIPT.md` keeps exactly 5 lines, one per frame, headings
`## Line N — Title (Frame N)` (WAVE2-PACKET § 3).

**Spoken code:** `1, 3, 5, 7, 9` → "one, three, five, seven, nine". `7` → "seven". `1,000` → "a thousand".
`bisect_left` → never read aloud; the pinned comment types it. `30` → "thirty", and it is the user's number
so it is spoken, with the run proving the arithmetic behind it (`⟪LEDGER:43⟫`).

**Re-cut applied** (logged in full). "Binary search works on sorted data." → `needs the data sorted first`,
because `works on` states a property and the part's real lesson is a precondition the challenge can catch
you ignoring. "Check the middle. If your target is smaller, discard the right half. If larger, discard the
left. Repeat." — four imperatives in a row, one of them a single verb, which is the staccato burst the AI
tells list caps at one per section → rebuilt as two beats plus one walk clause in F3, with `smaller`/
`larger` becoming `sits lower`/`higher` (same comparisons, no second meaning for "smaller" while a row of
numbers is being shrunk) and `Repeat` expanded into `keep going until you land on it` so the loop has an
end the frame can show. "Each step halves the search space, so it takes log n steps" → the halving is F3's
drawn widths and the `~ log n` label on F4; the VO never says `log n`, because a symbol read aloud by a TTS
voice is the one thing this ruling exists to prevent. Hook and CTA unchanged.

## On-screen text and code treatment

Ground, kicker `PROGRAMMING BASICS · STRUCTURES I · 43`, `BEGINNER` badge, ligature guard on all five.
**Zero coral** — nothing raises, and a failed search is not an error.

**F1 (G1, also the cover).** Three groups, the hook cut to its two numbers: `one number` (ink) /
`among a billion` (muted ink) / `about 30 looks` on the solid `--say` plate. Nothing drawn — the row
arrives on F2 and the "billion" is deliberately **not** illustrated, because a row of a billion chambers is
the lesson's opposite (pb-21's 100-variables precedent).
**F2 (G2b, sorted first).** Five chambers on pb-21's geometry holding `1 3 5 7 9` in mint, with the index
strip beneath (`0 1 2 3 4`, mono `--muted`, `data-layout-ignore`). The row arrives **already ordered**, and
a mono tag above it reads `sorted: in order already` — the gloss, same frame, 2.6cqw. Then the middle
chamber (`5`, index 2) takes a `--line` border and a marker labelled `mid` straddles its top edge (a marker
straddles an edge and never centres on a value, WAVE2-PACKET § 4), with a mono tag `1 LOOK`.
**F3 (G2b-halves, the discard).** Same row, and the mechanism twice:
```
drop right : target chip `3` sits left of the frame; the two chambers right of `mid` dim to 0.42 skin with
             their digits at full ink, then a single 3px --line bracket closes over them labelled GONE.
             Counted tag: LEFT 2 (of the five, which is the point of the step).
drop left  : mirrored beat, opposite wipe direction, the two left chambers recessed, tag LEFT 1.
```
The `--say` ring travels to the remaining middle once per beat, and the mono `STEPS` tag ticks `1` then `2`
on P9 `count-tick`. One reading line, arriving after the first bracket closes: `half gone, every step`
(ink on `every step`). No cell is deleted and no layout reflows — a dimmed sibling is the honest picture of
"a range you stopped looking at".
**F4 (G2b-trace, the worked example).** The row at full ink and the trace drawn as three states on one
band, one per spoken clause: `mid → 5`, then the right half lit, then `mid → 7` with the found chamber
flashing its border mint and the `STEPS` counter settling on `⟪LEDGER:43b⟫` (the executed look count for
the shown implementation, which the frame must match exactly). To the right of the counter, the two
comparison labels this part is licensed to carry, at identical size and identical y, one per column:
`~ log n` over the halving column and `n looks` over a ghosted linear-scan column (dashed empty chambers,
pb-22's `50th` ghost shape, `⟪LEDGER:43b⟫` values). These are the *only* two notation-ish strings in the
film and they are labels on a counted comparison, which is the narrow licence — if `n looks` reads as
notation to the user, the label becomes `5 looks` and nothing else changes.
**F5 (G5, the Challenge).** Headline `a thousand items?` (18 characters, 3 words) at 6.4cqw in the 176px
band, the muted mono chip `about how many looks` beside it, the mechanic verb plate `COMMENT IT` in solid
`--say` (the user's own closing words from the CTA), and beneath the headline a **halving bar**: one long
`--panel` bar that loses half its width four times with `STEPS` ticking `1 2 3 4` — the hint, not the
answer. The row from F4 sits dimmed at 0.42 behind it. **The number of steps for 1,000 is not on this
frame** and no chip marks it (pb-13's burned finding: a challenge whose likeliest reply is half an answer
is a bad challenge, and pb-22's: never answer their quiz on screen).

**CTA card copy, verbatim and complete:** spoken `Challenge: about how many steps for 1,000 items? Comment
it.` / headline `a thousand items?` / chip `about how many looks` / verb plate `COMMENT IT` / halving bar /
badge `PROGRAMMING BASICS · STRUCTURES I · 43 · BEGINNER`.

## Cover / title text

`a billion, in thirty looks` (5 words, the hook's two numbers, with `30` written as the word so the cover
and the VO say the same thing) + badge `PROGRAMMING BASICS · STRUCTURES I · 43` + `BEGINNER`. Amber plate
on `thirty looks`.

## Post copy

**Feed caption:**

    Find one number among a billion in about 30 steps.
    Binary search needs the data sorted first, then it checks the middle item and throws away one half.
    Target lower, drop the right side. Target higher, drop the left, and keep going until you land on it.
    Challenge: about how many steps for 1,000 items? Comment it.

**Hashtags:** `#python` `#programming` `#learntocode` `#algorithms`
**X:** `sorted row, check the middle, throw away a half. every step leaves half of what was there, so a billion items is about thirty looks and a thousand is about ⟪LEDGER:43c⟫. the precondition is the part people forget: the data has to be ordered first. challenge is in the clip, comment your number. #python`
**LinkedIn:** the interview version asks you to write it, and the failure mode is not the halving, it is
the loop bounds: `mid` from an integer division, and a range that closes on itself, which is how a
correct-looking binary search either misses the last item or never finishes. Say the precondition out loud
too - the algorithm costs nothing and buys nothing on unsorted data; `#python` `#programming`
`#algorithms`

**Pinned comment:** `About ten for a thousand, and here is the arithmetic you can do in your head: keep doubling until you pass the count - 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 is ten doublings, which is also why a billion takes about thirty. ⟪LEDGER:43c⟫ is the exact worst-case look count the run returns for 1,000 items, and the honest answer includes the two traps: the list has to be sorted, and if the item is not there you still spend the same number of looks finding out. Python ships it as bisect - ⟪LEDGER:43d⟫ the executed result of bisect_left on [1, 3, 5, 7, 9] for 7, and what it returns when the value is absent. Part 41 is the shape this makes, and part 44 is the sort nobody uses to get the row ready.`

## Accuracy

**Status: pending the Day-4 ledger run, and this part marks a number that sits inside the user's own hook.**
`about 30 steps` for a billion is a log-base-two claim (2^30 is about 1.07 billion) and the plan says
"about", so it stands as written - but it is a number, so `⟪LEDGER:43⟫` records that the run confirms the
halving count instead of my arithmetic being shipped as proven. Same for the challenge answer at 1,000
items, where "about ten" depends on whether you count the final confirming look: the pinned comment's
doubling chain is written out on purpose so a reader can check it without this file.

F4's probe sequence is the sharpest risk in the part: `[1, 3, 5, 7, 9]` with a shown implementation
(`lo=0, hi=len-1, mid=(lo+hi)//2`) visits index 2 then index 3, which is **two looks**, but an
implementation with `hi=len` settles differently, and a `bisect` call returns an index rather than a count.
The frame draws whichever trace the run prints, and the `STEPS` counter is that count. The comparison
labels `~ log n` / `n looks` are labels, not measurements.

`bisect_left` is named in the pinned comment only, and its return value for an absent item is marked rather
than recalled.

## Ledger dependencies

- `⟪LEDGER:43⟫` (F1 cover claim, F5 halving bar ticks) — confirmation of the halving count for
  1,000,000,000 items under the same implementation the frame traces. The hook keeps the user's `about 30`
  either way; the F5 bar's tick count comes from here.
- `⟪LEDGER:43b⟫` (F4 `STEPS` counter and the two label columns) — the executed probe sequence for target
  `7` in `[1, 3, 5, 7, 9]` on the chosen implementation: which indices are visited, in what order, and how
  many looks, plus the linear-scan look count for the same target. The trace and the counter must be
  numbers from the same run.
- `⟪LEDGER:43c⟫` (F5's implied answer, X line, pinned comment) — the exact worst-case look count for 1,000
  items. The comment's doubling chain stays in words so the number can be checked without the file.
- `⟪LEDGER:43d⟫` (pinned comment) — `bisect_left` on `[1, 3, 5, 7, 9]`: the executed return for `7` and for
  an absent value. Cut the `bisect` sentence if it does not come back.

## Gate state

Non-carrier. Blocks at F4 only (the trace and the counter), and F5's halving bar ticks come from
`⟪LEDGER:43⟫`; everything else, including all audio, is independent.

Snapshot-read order: (1) the **two dimmed halves** must read as "not looking there any more" while their
digits stay legible - dim the skin, never the value; (2) the **`mid` marker straddles an edge** and never
blanks the number under it; (3) the comparison label pair on F4 at identical size and y, and **nothing else
in the film carries notation**; (4) the F5 halving bar loses width four times and lands nowhere near the
answer, with nothing below y 1004; (5) zero coral, and no ghost linear-scan column overflowing its band
without `data-layout-allow-overflow`.

Runtime expectation: **~31.3s** (band 29–34). The Challenge's answer lives in the pinned comment and
nowhere on screen.
