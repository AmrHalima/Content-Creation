---
id: pb-18
order: 6
series: prog-basics
tranche: day-2 (BASICS II)
title: Comments and why they matter
slug: code-comments
project: videos/prog-basics-18-code-comments/
difficulty: B
mechanic: Debate
mode: direct-address (G8)
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"               # the house value; it must be PASSED as --speed 0.93 (frame-day2 § 8)
words: 66
target_length: ~29-34s
ceiling: 54s
grammar: G8 G8 G8 G4-cutaway G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-14's G8 chrome verbatim (videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html) + pb-10's labelled G4 split (videos/prog-basics-10-switch/compositions/frames/04-two-languages.html)
---

# P18 · Comments and why they matter · [B] · Debate · **direct address**

**Message:** a comment pays for its place by saying why; the code already says what — so when it is
only saying what, rename the code instead.

This is the second of the three direct-address parts (14 proved the chrome, 17 and 18 clone it). It
proves nothing new except one thing: **G8 carrying a G4 cutaway instead of a G3 one.** So the chrome
is copied pixel-for-pixel from pb-14 and the only new build is the two-chamber split inside the
cutaway. It is also the tranche's second **Debate** part (after 16), and the only one where the hook
itself is the argument.

The hook is verbatim and it is a provocation, so the whole part is delivered as someone inviting a
reply, not as someone landing a lesson. F5 therefore **refuses to pick a side on screen**: the moment
the frame selects `AGREE` or `DISAGREE`, the debate the part exists to start is over.

## Final narration

Times below are estimates at the **measured** 3.24 words/second (`af_heart` @ 0.93). `studio voice`
syncs frame durations to the measured VO and `studio cues` measures the words — write the **measured**
numbers into `STORYBOARD.md`, not these. Air is ~1.0s per frame, more on F4 (a chamber you have to
read is not filler) and most on F5 (it loops under the platform's chrome).

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.5s | Good code doesn't need comments. Agree or disagree? | Verbatim. Flat, and the second sentence is raised, not performed. You are asking someone at work, not hosting. |
| F2 | 4.6s | A comment earns its place by explaining why. The code already says what it does. | Two beats. Land `why`. The pause after it is where the strike is drawn across the useless comment. |
| F3 | 4.3s | If a comment explains what the code does, rename things until it explains itself. | `rename` is the verb of the frame and the word the plate sits on. Do not rush the second half — the chip is still typing itself out. |
| F4 | 6.8s | Save comments for decisions, warnings, and tricky reasons. Retry three times: the payment API drops requests under load. Add one to i. | The triad is the user's, one breath, no list-voice. Then read the two comments as written and let the last one hang there flat — `add one to i` is the punchline and it must not be underlined. |
| F5 | 2.2s | Agree or disagree? Defend your side below. | Verbatim, and it is the CTA mechanic. Same words as the end of F1, so it must sound like a callback, not a repeat. |

**Spoken code:** `# retry 3 times: …` → "retry three times: …", the `#` is never said. `3` → "three".
`# add 1 to i` → "add one to i". `i += 1`, `while i < 5:`, `print(i)`, `charge(cart)`, `d2` and
`days_until_delivery` are **never spoken** — they are what is on the board while the voice says the
line they belong to. `0 1 2 3 4` is printed output, never read aloud.

## Re-cut applied

Both approved changes from `CORRECTIONS-day2.md` § A are applied here and nothing else is: (1)
"Comments should explain why, not what." → **"A comment earns its place by explaining why. The code
already says what it does."** (contrast-reveal ban; 8 + 7 words, and the second sentence is now the
*reason* the first is true instead of a contrast against it); (2) "If you have to explain what the
code does, rename things until it explains itself." → **"If a comment explains what the code does,
rename things until it explains itself."** (16 → 14 words, and the subject moves from the writer's
effort to the artifact). The hook and the CTA mechanic are untouched, and
"Save comments for decisions, warnings, and tricky reasons." ships **exactly** as the user wrote it —
it is the part's one allowed three-item list, so nothing else in this film enumerates.

## On-screen text and code treatment

**F1 (G8, type alone).** Direct-address chrome only — the single type-alone frame the consecutive-G8
rule allows, and the cover. Hook left-aligned at 72px, 9cqw Space Grotesk 700 `--ink`, wrapped to five
groups of ≤14 characters (`good code` / `doesn't need` / `comments.` / `agree or` / `disagree?`)
because pb-14 established that § 4's ramp only holds under 14 characters. `comments.` is the sharpest
word and takes the frame's one and only P1 `say-sweep` (`--say` plate, ink → `--say-ink`). Chrome
copied verbatim from pb-14: corner brackets, `REC` strip with the muted blinking dot and the
root-timeline timecode, `BEGINNER` outline chip, lower third
`PROGRAMMING BASICS · BASICS II · 18` over the strap `Why comments matter` (the bar's 516px text lane
caps at ~26 characters at 3.4cqw — the part title `Comments and why they matter` is 28 and ran 20px past
the bar's right edge; see `## Customizations`). No face, no avatar, no
silhouette, no emoji. **F1's first line gets no entrance tween** (the cover must never render blank)
and the chrome never fades.

**F2 (G8 + the struck comment beside the good one).** Type alone is not allowed twice, so the
non-chrome element arrives: the user's two comments, in mono 2.6cqw (28px, the floor), side by side
under the sentence — `# add 1 to i` on the left in `--muted`, and on the right the good one on three
wrapped lines (`# retry 3 times:` / `# the payment API drops` / `# requests under load`) in `--ink`.
The same three lines reappear unchanged inside F4's chamber, so the wrap is not re-cut between frames.
On "The code already says what it does" a **P10 `strike-out`** (a 3px `--say` rule) draws itself across
`# add 1 to i` and holds. That rule is the frame's **one** amber: `why` therefore gets a colour-free
scale settle, not a second plate (§ 14 "never two amber plates at once"). The plate never sits inside
anything that dims.

**F3 (G8 + the rename beat).** The spoken line at 6cqw (pb-14's established size for a long explain
line), and the non-chrome element is **two chips, not a list**: `d2` in `--muted` mono on the left, a
short `--line` connector, and `days_until_delivery` arriving to its right and typing itself on
character by character through a `{t,text}` step array (no `text` tween — there is no TextPlugin).
The relabelling is the whole argument, so it is shown once, on two names. `rename` takes the frame's
one P1 sweep; the chip's arrival is colour-free. Both chips are identifiers, never output, so the
frame makes no execution claim.

**F4 (G4 cutaway, not a new slide).** The scrim and **two chambers side by side** drop over the same
direct-address ground — pb-10's split geometry (456px each, at x 72 and x 552), each with its own
`--panel-2` titlebar reading `main.py` with a `PYTHON` chip, and the chrome still visible on all four
sides behind a 0.18-opacity scrim. Left is the callback, right is the thesis:
```
LEFT   main.py / PYTHON            RIGHT  main.py / PYTHON
i = 0                              # retry 3 times:
while i < 5:                       # the payment API drops
    print(i)                       # requests under load
    i += 1  # add 1 to i           charge(cart)
>>> 0 1 2 3 4                      (no strip: nothing here executes)
```
The bad comment annotates **the real `i += 1` from part 12**, which is what makes it a joke instead of
an opinion: the line and its comment are the same sentence, and the strip under it prints `0 1 2 3 4`
(bible § 4 row 12, executed). The four rows are part 12's four rows, with the row its quiz left blank
now filled in. Motion: P3 `type-on` under a caret reveals the left chamber's four lines first, and
`  # add 1 to i` fades in at the tail of the last line exactly on the spoken "Add one to i"; the mint
strip lands just after it. The right chamber's call `charge(cart)` types on first (3.45) and its three
comment lines are written above it across "Retry three times: the payment API drops requests under
load." The frame's one amber is a P1 sweep on `# requests under load` while the voice is inside that
clause — the reason a reader cannot infer from `charge(cart)` is the thing being pointed at. No coral:
this part raises nothing. Ligature guard on every line (`<=` must never become `≤`).

**F5 (G8 + G5).** Type: `agree or disagree?` / `defend your side` / `below.` at 7.5cqw left-aligned at
72px (three groups, not four, so the plate and the chips fit above the lower third). Mechanic verb
plate **`DEFEND YOUR SIDE`** in solid `--say` with `--say-ink` text, dropping in on the spoken verb
(P2) — it is the frame's only amber. The badge stays as the chrome carries it:
`PROGRAMMING BASICS · BASICS II · 18` + `BEGINNER`. And the debate itself: **`AGREE` and `DISAGREE`
chips, both unselected** — `--panel` fill, 3px `--line` border, `--ink` text, no `.ring`, no amber.
A `--line` ring (not `--say`: two amber marks on one frame is a § 1/§ 14 violation and the verb plate
already owns the amber) fades up over AGREE, crosses to DISAGREE, and fades back out in the gap — it
**never rests framing either chip**, and is invisible at both t=0 and t=D so the loop seam is clean.
F5 holds to the last frame and carries **no exit push**, because it loops under the
platform's chrome.

## Customizations

- **G4 side-by-side inside a G8 cutaway.** `frame-day2.md` § 4 gives the G8 F4 a **700px single G3
  chamber**; a two-chamber split cannot hold this part's longest line at 700px total (456px per side
  gives 24 characters at the 28px floor, and `i += 1  # add 1 to i` is exactly 24). So the cutaway
  field is pb-10's split (two 456px chambers at x 72 / x 552, spanning 72→1008) under pb-14's
  0.18 scrim, which still leaves the brackets, `REC`, timecode and lower third visible on all sides.
  Recorded here per bible § 4, which allows the across layout only at ≤3 lines per side with a
  `## Customizations` entry — part 16 is the tranche's other split, so 16 and 18 share this geometry.
- **Both chambers are 4 rows, and only the left owns a terminal strip** (in its own lane under the
  chamber, pb-10's placement, not inside it). § 4's G4 says ≤3 lines per side; bible § 4 permits the
  across layout at ≤3 **with a `## Customizations` record**, and pb-10 shipped 4 per side on that
  allowance. The left takes 4 because it is part 12's 4-row loop with the missing row filled; the right
  takes 4 because a comment needs the call it sits above to be on the same board. Nothing executes on
  the right, so it gets no strip (bible § 4 row 18: "nothing to execute") — the asymmetry is the point:
  the left is a line you can read, the right is information you cannot get from the line.
- **The increment sits BELOW `print(i)`, one row later than part 12's empty slot.** 12's dashed gap is
  drawn at row 3, above `    print(i)`; filling *that* row makes the loop print `1 2 3 4 5`, while 12's
  own pinned comment promises `0 1 2 3 4`. Reported to the parent rather than edited: 18 draws
  `i = 0 / while i < 5: / print(i) / i += 1` because that is the order that was executed here
  (Python 3.13.15, stdout `0\n1\n2\n3\n4\n`).
- **F5's ring is `--line`, not `--say`.** G7's walk ring is amber; here the `DEFEND YOUR SIDE` plate is
  already the frame's solid amber and § 14 bans two amber plates at once. A selected chip would have
  been a third.
- **The lower third's title lane caps at ~26 characters at 3.4cqw.** pb-14's bar is 560×96 with 22px
  padding, so the strap gets 516px; `Comments and why they matter` (28) measured to x 652 against the
  bar's right edge at 632 — the title ran off its own panel, with `verify` 0/0 and `check` Layout clean.
  The strap is therefore `Why comments matter`; the chrome geometry is untouched. **Part 17's title
  (`Null, nil, and None`) is 18 characters and fits — but measure, don't assume.**
- **A `--say` plate behind mono code is a contrast trap.** Behind display text it is fine (F1, F3), but
  inside a 52px code line the mid-draw sample put light glyphs on partial amber at **1.09:1**
  (`#f4-ht`, `check` at t=24.267s). F4's amber is therefore a `--muted → --say → --muted` text-colour
  tween on the clause, and where a plate is kept the ink flip is a `set` strictly after the plate
  finishes, never a tween overlapping it.
- **Cover cut:** `good code doesn't need comments` (5 of the hook's 8 words) + the full hook spoken.

## Cover / title card

`good code doesn't need comments` + badge `PROGRAMMING BASICS · BASICS II · 18 · BEGINNER`. Ground
`--ground`, amber plate on `comments.`, lower third and `REC` strip kept so the cover reads as a
person mid-sentence, not a title card. `doesn't need` is the hook's own negation and stays verbatim;
the part adds no contrast-reveal shape anywhere else.

## Post copy

**Feed caption:**

    Good code doesn't need comments. Agree or disagree?
    A comment earns its place by explaining why. `# add 1 to i` restates the line above it, and the
    line is already `i += 1`. `# retry 3 times: the payment API drops requests under load` tells you
    something the code cannot. Rename the ones that echo. Keep the ones that argue.
    Save comments for decisions, warnings, and tricky reasons. Defend your side below.

**Hashtags:** `#python` `#programming` `#learntocode` `#codecomments`
**X:** `good code doesn't need comments. agree or disagree? a comment earns its place by explaining why - the code already says what it does. if a comment explains what the code does, rename things until it explains itself. save comments for decisions, warnings, and tricky reasons. defend your side below. #python`
**LinkedIn:** juniors write `# add 1 to i` and seniors write `# retry 3 times: the payment API drops
requests under load`. The difference is not effort, it is whether the reader could have worked the
line out — and the fix for an echoing comment is usually a better name. Agree or disagree?
`#python` `#programming` `#learntocode`

**Pinned comment:** `Not taking this one. My rule: if the comment says what the line already says, delete the comment and rename the line. The one I keep is the reason nobody can infer - how many of you have a retry count with no comment next to it, and what does the number 3 actually know? Next up: null, nil and None.`

## Accuracy

Bible § 4 row 18: **nothing to execute — the two comments are prose.** Two facts do carry the frame,
both already executed on this machine (Python 3.13.15, `.tmp/day2_accuracy.py` / `.tmp/day2_chambers.py`):

1. The left chamber is part 12's real loop. Row 12 executed `while i < 5: print(i)` with no increment
   as `0 0 0 0 …` forever, and **with `i += 1` as `0 1 2 3 4`**. That `i += 1` is the line the bad
   comment annotates, so the useless comment sits over code that already says exactly that. Part 12's
   project (`videos/prog-basics-12-infinite-loops/`) was **not on disk when this part was authored**
   (it is building concurrently), so the chamber uses the four-line shape and the executed
   `i += 1` / `0 1 2 3 4` facts from § 4 row 12 rather than reading 12's file. Recorded, not silent.
2. Every fragment shown is valid Python. Re-executed locally for this part (Python 3.13.15):
   `i = 0` / `while i < 5:` / `print(i)` / `i += 1  # add 1 to i` → stdout `0 1 2 3 4`;
   `def charge(cart): pass` / `# retry 3 times:` / `# the payment API drops` / `# requests under load`
   / `charge([])` → no output, exit 0. The `#` continuation across three lines parses as three
   comments, which is what the chamber draws.

Zero coral: nothing on this screen was raised by an interpreter, so `--err` does not appear, including
on the `REC` dot (which is `--muted` and blinks — pb-14's chrome finding). Amber plates: one at a time
in every frame. `days_until_delivery`, `d2` and `charge(cart)` are names, never output, so they make no
execution claim.

## Gate state

Cloner, not a carrier: the chrome is pb-14's, the split is pb-10's, and both are already snapshot-read.
Build to the pre-render gate (assemble → verify → check → snapshot read) and stop. **No render, no
publish, no BGM, no SFX, no preview server** (parallel workers). Runtime was *expected* under 30s from
the 3.24 w/s planning number; **the measured audio ran slower (2.71 w/s — this copy is comment prose
with long words), so the film lands at 33.6s, inside the 29-34s band, and no padding lever had to be
pulled** (`frame-day2.md` § 12). No words added, none removed.
