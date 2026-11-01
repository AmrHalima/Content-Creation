---
id: pb-20
order: 9
series: prog-basics
tranche: day-2 (BASICS II)
title: Short-circuit evaluation
slug: short-circuit
project: videos/prog-basics-20-short-circuit/
difficulty: M                       # the only [M] in the tranche
mechanic: Tag
mode: code-card
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 75
target_length: ~29-34s              # measured, not modelled; see Gate state
ceiling: 54s
grammar: G1 G3 G3 G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-11-for-vs-while/03-gate.html (the gate that re-tests, here stopping early)
---

# P20 · Short-circuit evaluation · [M] · Tag · code card

**Message:** `and` and `or` stop the moment the answer is settled, so a cheap check in front of a
risky one keeps the risky one from ever running.

The only **[M]** part in this tranche. The gloss bar is the same as the [B] parts — every term still
gets plain English in the same breath — but the assumption is higher: this part never explains what
`if` is, never explains what `None` means beyond `no user yet`, and it uses the letters `A` and `B`
as names without apology. That is the difference between [M] and [B] here, and nothing else.

It is not a carrier: 14, 21 and 22 already proved G6/G7/G8. 20 clones pb-11's **gate that re-tests**
and changes one thing about it — the gate **stops early**.

## Final narration

Estimated at **3.24 words/second** (`af_heart` @ 0.93, measured by the carriers; the 2.4 w/s figure in
the original estimates was wrong). `studio voice` measures and syncs, `studio cues` places the words;
measured durations go into `STORYBOARD.md`.

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 3.1s | 10 | Your code skips half your condition, and that's a feature. |
| F2 | 7.4s | 24 | With and or, the language stops as soon as the answer is known. Take A and B. If A is false, B never runs. |
| F3 | 4.0s | 13 | That lets you guard risky checks, like making sure something exists before reading it. |
| F4 | 5.9s | 19 | Here user is None. The and stops at once, so admin is never read. Nothing prints, and nothing breaks. |
| F5 | 2.8s | 9 | Tag the dev who writes nested ifs for this. |
| — | **23.1s** | **75** | |

**Measured, replacing the estimates:** 3.029 / 7.019 / 4.885 / 6.208 / 2.453 = **23.594s of speech**,
76 aligned tokens (the ASR splits `and or` and `ifs` one way and the script counts them another; the
script's 75 stands as the copy count). Frame durations with authored air: **4.03 / 8.02 / 5.89 / 7.21
/ 5.45 = 30.60s film**.

**Hook and CTA verbatim.** `Your code skips half your condition, and that's a feature.` and
`Tag the dev who writes nested ifs for this.` are the user's words and are untouched.

**Spoken code:** `and/or` → "and or" (the slash is never spoken). `if A and B:` → "if A and B" with
the letters said as letters. `user = None` → "user is None". `user.is_admin` → "admin". The voice
never says brackets, colons, dots or indentation.

**Re-cut applied** (`CORRECTIONS-day2.md` § A, part 20, the only re-cut this part carries):
"In A and B, if A is false, B never runs." → **"Take A and B. If A is false, B never runs."** The
letters get named before they are used: a 3-clause 12-word sentence becomes a 4-word setup plus an
8-word conditional. No other explain line changed.

## On-screen text and code treatment

**F1 (G1).** Type alone on `--ground`, no illustration. Three groups, each ≤4 words: `your code skips`
→ `half your condition` → `and that's a feature`, the last three words on the solid `--say` plate
(P1 `say-sweep`, inside the first second of its own utterance). Two mono glosses land beneath, in
`--muted`, arriving on their own spoken words: `condition = the yes or no you ask` and
`skips = it never runs`. Kicker `PROGRAMMING BASICS · BASICS II · 20` + badge `INTERMEDIATE` — this
part's badge is the tranche's only non-BEGINNER one and it must be readable, so the badge keeps
pb-21's `pb-kbadge` amber chip atom verbatim.

**F2 (G3, the clone).** `pb-11/compositions/frames/03-gate.html` is the source: a `main.py` chamber
with the `PYTHON` chip, P3 `type-on` under a caret, a **gate** box, a **wire**, a **body** chamber.
The change is that this gate *stops* instead of re-testing:
```
chamber : if A and B:          (one line, P3 type-on)
gate    : a box reading A = False, --value mint, border flashing --say on the beat the voice says
          "false"
wire    : draws LEFT to RIGHT out of the gate toward B — and retracts before it arrives (scaleX back
          to 0). The release IS the short circuit; nothing loops back, no arc, no pass chips.
B       : a G2 `empty` chamber — 3px DASHED --line, no value, one dim mint caret blinking at 1s.
          It never lights. It is the second half of the condition that never runs.
tag     : RAN 1 OF 2 in --muted mono, 3.0cqw (~32px), under the row. Sized up from pb-21s
          2.7cqw counted-tag atom because this tag is the part (BRIEF deviation 7). That tag is the whole part, so it is
          sized as reading text, not chrome, and carries no data-layout-ignore.
```
No `pass 1/2/3` chips, no loop arc, no exit arrow — those are pb-11's, and a `while` gate that
re-tests is not this lesson. Eyebrow: `AND&nbsp;=&nbsp;STOPS WHEN ANSWERED`.

**F3 (G3, the guard).** Same chamber atoms, different content and a different lane layout so the cut
does not land on an identical board.
```
chamber : user = None            (None in --value mint)
          if user and user.is_admin:
lane    : two chambers, left solid with None inside (--value mint), right DASHED-empty reading
          .is_admin — the read that never happens. The 24px CSS connector between them draws halfway
          and retracts (same gesture as F2's wire, one notch smaller).
plate   : one amber `--say` plate on the word `user` inside `if user and user.is_admin:`, on its
          spoken onset ("exists"), self-contained in its own token (.f3-w > .f3-hl + .f3-ht).
payoff  : a mono chip NO ERROR in --muted beside the dashed chamber. **Zero coral in this film**:
          nothing raises, so `None` is a value and goes in mint. No exception text appears anywhere.
gloss   : `None = no user yet` in mono --muted, on the spoken word "exists".
```

**F4 (G3, the runnable card).** ≤4 lines plus a terminal strip, single-quoted Python, ligature guard
on (`font-variant-ligatures: none` + `"liga" 0, "calt" 0, "dlig" 0`):
```
user = None
if user and user.is_admin:
    print('admin')
# nothing prints, no error
```
The fourth line is an ink comment in `--muted` mono (a screen label for the executed result, not
output). The terminal strip is `--panel-2` with a muted `>>>` prompt, a dim mint caret and the muted
label `(nothing)` — the empty strip is the proof, and the parentheses keep the label from being read
as printed text. Executed on Python 3.13.15: with `user = None` the branch does not run and
no exception is raised, so stdout is empty.
**One amber plate at a time:** `user and user.is_admin` takes the plate on its spoken onset ("The and
stops at once"), and the plate retires to ink before any dim begins (the pb-14 2.87:1 finding).
`None` stays mint on both lines. `print('admin')` never gets lit.

**F5 (G5, Tag).** Headline `who writes nested ifs?` at 6.4cqw (20 chars, inside the ≤24-char rule) in
a 176px band; the mechanic verb plate `TAG THEM` in solid `--say` with `--say-ink` text; badge
`PROGRAMMING BASICS · BASICS II · 20 · INTERMEDIATE`. The joke made visible, beside the plate:
```
struck : if user:                    kept : if user and user.is_admin:
         ....if user.is_admin:
         (P10 strike-out: two 5px rules, one per line, sized to their own text — 176px and 452px —
          drawn in --muted, never --say, because the TAG THEM plate owns the only amber on this frame.
          The struck block then dims at CONTAINER level: border and background down, code at full ink.)
```
The nested version is **not** wrong and gets no coral and no `X`; the strike says "this one takes two
lines where one does". Frame coordinates for the fragments, not wrapper-relative (pb-21's F5 finding).
Holds alone, no exit push.

**No notation anywhere.** No `O(…)`, no truth table, no jargon the voice does not say. No "it's not X,
it's Y" (spent on part 05's hook). No "simply", "just", "easy". No em-dashes on screen.

## Cover / title card

F1 is the cover. Cover text `your code skips half` + `that's a feature` on the amber plate, badge
`PROGRAMMING BASICS · BASICS II · 20` + `INTERMEDIATE`. Ink on `--ground`, no illustration.

## Post copy

**Feed caption:**

    Your code skips half your condition, and that's a feature.
    With and or, the language stops as soon as the answer is known.
    If A is false, B never runs. So put the cheap check first and the risky one never happens.
    Tag the dev who writes nested ifs for this.

**Hashtags:** `#python` `#programming` `#learntocode` `#codingbasics`

**X:** `if A and B: — when A is false, B is never even looked at. that is why `if user and user.is_admin` is safe when user is None. the second check never runs. tag the dev who writes nested ifs for this. #python`

**LinkedIn:** the guard clause every reviewer asks for is one `and`, not two `if`s. Python evaluates
left to right and stops when the outcome is settled, so `if user and user.is_admin:` reads as
"only ask admin of something that exists". `#python` `#programming` `#learntocode`

**Pinned comment:** `the nested version works too, it just takes two lines to say one thing. the
sharp edge is order: user and user.is_admin guards, user.is_admin and user crashes. flip them and you
have an AttributeError. part 20 of Programming Basics.`

## Accuracy

Executed 2026-10-28 on Python **3.13.15** (`series-bible-day2.md` § 4, `.tmp/day2_accuracy.py`), and
re-executed for the exact fragments this film draws:

- `user = None` → `user and user.is_admin` evaluates to **`None`**, and **no exception is raised**.
  The guard works: `if None:` does not enter the branch.
- With `A = False`, `if A and B():` leaves B's side effect **empty** (the ledger's proof) — B is
  never called. The control `A = True` records `['B ran']` and enters the branch, so the difference
  is short-circuiting and not a broken demo.
- F4's four lines as drawn: `user = None` / `if user and user.is_admin:` / `print('admin')` → stdout
  is `''` (empty), exit clean, no traceback. So "nothing prints, no error" on screen is the executed
  result, not a claim.
- The flipped order `user.is_admin and user` with `user = None` raises
  `AttributeError: 'NoneType' object has no attribute 'is_admin'` — **which is why nothing on screen
  is coral in this film**: the part never runs that line. It lives in the pinned comment only.

**Held back on purpose.** `and`/`or` return an **operand, not a bool**: `0 or 'fallback'` →
`'fallback'`, `1 and 'x'` → `'x'`, and `user and user.is_admin` with `user = None` returns `None`
rather than `False`. True, confirmed by the ledger, and deliberately **off screen** — this part's
claim is that the second half never *runs*, which holds either way, and the frame has no room for the
distinction. Recorded here so the next part (or a reply thread) can use it without re-deriving it.

## Gate state

Built to the **pre-render gate only**: voice, cues, frames, assemble, verify, check, snapshot.
No render, no MP4, no publish, no schedule, no Arabic pass, no BGM, no SFX, no `preview --background`
(parallel workers). `hyperframes@0.8.208` pinned in all four project scripts. Nothing was written
outside `videos/prog-basics-20-short-circuit/` and this file.

- `--speed 0.93` passed explicitly on every `studio voice` run (the house lookup misses
  `voice.voices.en` and would silently ship 0.74 — WAVE2-PACKET § 1). The unflagged `--dry` printed
  `speed=0.74`; the flagged run printed `speed=0.93` and that is the audio on disk.
- **Measured runtime: 23.594s of speech → 30.60s of film** (frame durations 4.03 / 8.02 / 5.89 /
  7.21 / 5.45; starts 0 / 4.03 / 12.05 / 17.94 / 25.15). `audio_meta.json` holds **5 voice lines,
  76 aligned words**. Standard air (1.0s/frame, 2.0s on F5) gave **29.59s — under the tranche's 30s
  floor**, so **F5's pad was grown to 3.0s** (permitted lever 1, `frame-day2.md` § 12) and **no words
  were added**. Reported rather than padded.
- `studio verify` → 0 high, 0 medium across 7 html files. `npm run check` → `◇ Check passed`, Lint
  0/0, Runtime 0 errors + 5 `clip_media_fit` warnings (the authored air), Layout 0 issues across 9
  samples, Motion 0/0, **Contrast 43/43 WCAG AA**, Craft 0/0, Audio 0/0.
- 50 snapshots read; six defects were found **only** in the pixels (a label behind the dashed chamber,
  a gloss overflowing its chip, a caret sitting on the say-plate, a terminal caret touching its label,
  two over-long strike rules, and four plates whose text darkened after the wipe). All six fixed and
  re-read. Detail lives in `videos/prog-basics-20-short-circuit/BRIEF.md` → `## Gate evidence`.
- Snapshot beats that carry this part: the rail stopping **short of B** (9.8s), the rail gone with B
  still dark and `RAN 1 OF 2` legible (10.5s), `None` mint against a dark dashed `.is_admin` with
  `NO ERROR` in muted (16.9s), the four-line card with `>>> (nothing)` (23.6s), and the struck nested
  fragment beside the bright guarded one-liner with `TAG THEM` as the only amber object (27.6s).
- The operand-return nuance (`user and user.is_admin` → `None`, not `False`) stays **off screen** and is
  recorded in `## Accuracy` above; the flipped order that really does raise `AttributeError` lives in
  the pinned comment only. Zero coral in the film.
