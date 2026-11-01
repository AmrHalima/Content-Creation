---
id: pb-17
order: 7
series: prog-basics
tranche: day-2 (BASICS II)
title: Null, nil, and None
slug: null-nil-none
project: videos/prog-basics-17-null-nil-none/
difficulty: B
mechanic: Save
mode: direct-address (G8)
carrier: false                    # clones pb-14's G8 chrome verbatim; proves nothing new
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"               # documentation only — `studio voice` needs `--speed 0.93`
words: 70
target_length: ~29-34s
ceiling: 54s
grammar: G8 G8 G8 + chips G3-cutaway G5
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: videos/prog-basics-14-what-is-recursion/ — the `.g8-*` chrome block (corner brackets,
  REC strip, muted blinking dot, root-timeline timecode, BEGINNER outline chip, lower third),
  copied verbatim per frame-day2.md § 14. Chamber atoms clone pb-14's `04-cutaway.html` `.cd-*` /
  `.pb-strip` block.
---

# P17 · Null, nil, and None · [B] · Save · **direct address**

**Message:** `null`, `nil` and `None` all mean "there is no value here" — which is not the same thing
as a value that is empty, and asking nothing for a method is the crash that makes you check first.

This is the tranche's second direct-address part (after pb-14) and the first that shows a raised
error, so it is one of only two parts in Day 2 that earns coral (`frame-day2.md` § 1, WAVE2-PACKET
§ 6). The chrome is pb-14's, pixel for pixel; only the content layer is new.

The hook is the user's own line and is a true one: C. A. R. Hoare introduced null references in
**ALGOL W, 1965**, and titled his **QCon London 2009** talk *Null References: The Billion Dollar
Mistake*. Past tense is correct. Nothing on screen, in the voice or in the post copy jokes about his
death (2026-03); the Save mechanic and the billion-dollar framing carry the part.

## Final narration

Times are estimates at **3.24 words/second** (`af_heart` @ 0.93 — frame-day2 § 8/§ 12, the measured
carrier rate; the 2.4 w/s model the earlier Day 2 tables used ran ~26% long). `studio voice` syncs
frame durations to the measured VO and `studio cues` measures the words — write the **measured**
numbers into `STORYBOARD.md`, not these. Air is ~1.0s per frame, 2.0s on F5 (it loops under the
platform's chrome).

| Frame | Est. | Words | Delivery |
|---|---|---|---|
| F1 | 2.8s | The inventor of null called it his billion-dollar mistake. | Flat, near deadpan. It is a fact about a person, not a punchline, and the part earns its attention from that. Land "mistake" without leaning on it. |
| F2 | 7.1s | Null, nil, and None all mean no value here. Zero and an empty string are both values. None is the absence of one. | Three beats. Say the three names as a list of names, evenly, with the smallest gap after the first two. "absence" is the word the whole part hangs on. |
| F3 | 4.3s | Calling a method on nothing crashes your program. So check before you use it. | The first sentence lands the danger, the second is the instruction. Real stop before "So". |
| F4 | 4.6s | Set user to None, then read user dot name. Python raises AttributeError. JavaScript raises TypeError. | Matter of fact, and slightly slower on the two error names — they are different words and that difference is the point of the frame. |
| F5 | 2.8s | Save this, then tell me your worst null bug. | Verbatim, and it is the CTA mechanic. Two asks, one breath each. No added sign-off. |

**Spoken code:** `None` → "None" (capital, the literal). `user = None` → "set user to None".
`user.name` → "read user dot name", never "user name". `AttributeError` / `TypeError` → said as the
names, unsplit. `is None` is never spoken in this part — the voice keeps its approved line and the
chip pair on F3 carries it (see **Re-cut applied** below).

**Re-cut applied** — the two approved changes in `CORRECTIONS-day2.md` that name this part; both are
transcribed, neither is re-decided here. Full note in `## Re-cut applied` below.

## On-screen text and code treatment

**F1 (G8, type alone).** Direct address, chrome plus type — the one frame in this part that is type
alone, which is what the consecutive-G8 rule allows exactly once. `the inventor` / `of null` /
`called it his` / `billion-dollar` / `mistake` in five groups, left-aligned at 72px, 9cqw Space
Grotesk 700 `--ink`, P1 `say-sweep` on `billion-dollar` (the sharpest word, per § 6), which then
holds on its amber plate while `mistake` arrives plain. Chrome: corner brackets, `REC` dot
(**`--muted` `#9BA6B2`, never coral — see the coral rule note below**), timecode, `BEGINNER` outline
chip, and the lower third `PROGRAMMING BASICS · BASICS II · 17` over `Null, nil, and None`. One
muted mono attribution chip sits on the `of null` line: `1965 · ALGOL W` at 2.2cqw `--muted` with
`data-layout-ignore` — micro-type in the chrome register, the same device pb-14 used for its F5 echo,
so F1 is still the type-alone frame. Ambient: the ground grid drift and a 0.6px float on the type.
**F1's first line gets no entrance tween at all, or the cover renders blank.**

**F2 (G8 + the three-name chip row).** Type alone is not allowed twice in a row, so F2 introduces the
non-chrome element: **the chip row**. Five display lines at 5cqw (`frame-day2` § 14's finding — the
9-11cqw ramp only holds for groups of ≤14 characters, and this frame's longest group is 27):
`Null, nil, and None` / `all mean no value here` / `Zero and an empty string` / `are both values.` /
`None is the absence of one.` — with `None` always capital-N, because it is the literal. P1
`say-sweep` on `no value here`, the frame's only amber. Then three chips, 280×150px, pitch 328px,
first at x 72: `--panel` `#1F242C` on the `--ground` with 3px `--line`, radius 22, G2's shadow, the
name in Space Grotesk 700 4cqw `--ink` and its language tag in mono 1.35cqw `--muted` with
`data-layout-ignore`:

```
null   -> JAVASCRIPT              nil   -> GO · RUBY · LUA · SWIFT        None  -> PYTHON
```

They arrive one per spoken name (P2 drop-in, three chips, 0.1s apart inside one clause), which is
what makes the enumeration itself the motion. `nil` gets **no chamber anywhere in this film** —
nothing on this machine executes it, so it stays a name (§ 13, bible § 4). `null` is also PHP/Java/
C#/SQL, but the only `null` that raised an error here is JavaScript's, so that is the only tag it
carries.

**F3 (G8 + the chip pair).** Type: `calling a method` / `on nothing` / `crashes your program.` at
5cqw, then the instruction `So check before` / `you use it.` below it after a real beat. The
non-chrome element is the approved screen-text constraint, and it is the whole reason this frame
exists:

```
if user:              [struck — P10 strike-out, a 3px --say rule drawn left→right across it]
if user is None:      [lit — raised --panel-2, 3px --line, full ink]
```

Mono 2.8cqw (30px, above the floor). The struck chip sits on flat `--panel` behind a 2px
`--line-faint` border so it recedes; the correct chip is raised on `--panel-2` behind a solid 3px
`--line` and holds full ink. **No second amber plate:** the P1 strike rule is this frame's one and
only `--say` mark (§ 1, "the word the voice is on", singular — pb-14 devations 7/16), so the display
lines emphasise by scale, not colour, and nothing dims below full ink (§ 14's `opacity: 0.42`
finding: dim the container's border and background, keep the text readable). The distinction those
two chips encode — `bool(None)` and `bool('')` are **both** `False` — is not written on this frame;
it goes in the pinned comment, exactly as approved.

**F4 (G3 cutaway, not a new slide).** Two chambers over the same direct-address ground, each 880px
wide (pb-14's deviation 6: § 4's 700px forces a 33-character error line under the 28px code floor;
the chrome stays visible on all four sides), a 0.18-opacity scrim behind them only — no blur, no new
colour. Stacked at y 236 and y 516, 260px tall, clear of the lower third at 800.

```
main.py  [PYTHON]                      main.js  [JAVASCRIPT]
user = None                            const user = null;
user.name                              user.name;
AttributeError: 'NoneType' object      TypeError: Cannot read properties
has no attribute 'name'                of null (reading 'name')
```

Each chamber clones pb-14's `.cd-*` atoms: `--panel` body, 64px `--panel-2` titlebar, filename in
mono `--muted` left, language chip in `--say` on a 2px `--say` border right (§ 13 — the chip exists
precisely because this frame shows two languages and the series teaches one). P3 `type-on` reveals
the two code lines per chamber, one per spoken clause; the error strip arrives on its own error name
and is the frame's meaning: `--panel-2` with a **3px `--err` `#FF6B5A` border**, coral mono text, the
message quoted **exactly** as raised on this machine (Python 3.13.15, node v24.15.0) and wrapped at
a real space because 59 characters cannot hold at the 28px floor. The wrap is recorded in `BRIEF.md`.
`nil` appears nowhere on this frame. Same danger, different error name — which is what the title's
three names are for.

**F5 (G8 + G5).** Type: `save this, then` / `tell me your` / `worst null bug.` at 9cqw left-aligned.
Mechanic verb plate **`SAVE THIS`** in solid `--say` with `--say-ink` text, dropping in (P2) on the
spoken word "Save" — it is the frame's only amber, and the display type gets a colour-free scale
pulse instead of a second sweep. The badge lives in the chrome: the lower third kicker reads
`PROGRAMMING BASICS · BASICS II · 17` and the `BEGINNER` outline chip sits on the REC strip, so the
tranche's full badge string `PROGRAMMING BASICS · BASICS II · 17 · BEGINNER` is present as two chrome
nodes rather than as a duplicate line under the plate (§ 6, pb-14 deviation 12). No exit push: this
frame loops under the platform's chrome, so it must hold alone and stay above y 1004.

**The coral rule, stated so no cloner "fixes" it.** `--err` appears **only** on the two raised-error
strips in F4, because both interpreters genuinely raised them here (WAVE2-PACKET § 6 names 15 and 17
as the only two Day 2 parts that earn coral). The `REC` dot stays `--muted` on every frame including
F4: it is chrome, the error text is meaning, and a coral dot would teach the wrong colour meaning.
Every amber element on every frame is a word the voice is on at that second. Mint appears exactly
twice in this film — the P2 border-flash on chip arrivals — and never as decoration.

**Ligature guard (mandatory).** Every element that renders code, an error message or a chip carries
`font-variant-ligatures: none` plus `font-feature-settings: "liga" 0, "calt" 0, "dlig" 0`. This film
shows `==`, `=` and `'name'`; JetBrains Mono otherwise ligates them and a learner types what they
saw.

## Cover / title card

`the inventor of null` (cut to 5 of the hook's 9 words, lines 1-2 of F1 carry it) + badge
`PROGRAMMING BASICS · BASICS II · 17` + `BEGINNER`. Ground `--ground`, ink display type, amber plate
on `billion-dollar`, lower third and `REC` strip kept so the cover reads as a person caught
mid-sentence rather than as a title card. F1 is the cover: its first line is at rest at t=0.

## Post copy

**Feed caption:**

    The inventor of null called it his billion-dollar mistake.
    Null, nil, and None all mean the same thing: there is no value here. Zero is a value. An empty
    string is a value. None is the absence of one.
    Ask nothing for a method and the interpreter stops you. Python raises AttributeError, JavaScript
    raises TypeError, and they are not the same message. So check before you use it, and check with
    `is None`, because `if user:` cannot tell an absent user from an empty one.
    Save this, then tell me your worst null bug.

**Hashtags:** `#python` `#javascript` `#programming` `#learntocode`
**X:** `the inventor of null called it his billion-dollar mistake - null, nil and None all mean no
value here, and zero and an empty string are both values while None is the absence of one. set user
to None then read user dot name: Python raises AttributeError, JavaScript raises TypeError. so check
before you use it, with `is None`, because `if user:` cannot tell None from ''. Save this, then tell
me your worst null bug. #python`
**LinkedIn:** null is the only feature its own inventor called a mistake: Hoare added null references
to ALGOL W in 1965 and titled his QCon London 2009 talk *Null References: The Billion Dollar
Mistake*. The cost shows up in review as a missing guard, and in the interpreter as
`AttributeError: 'NoneType' object has no attribute 'name'` in Python or
`TypeError: Cannot read properties of null (reading 'name')` in JavaScript. The subtler version is
the one that never throws: `if user:` treats an empty string and an absent user the same way,
because `bool(None)` and `bool('')` are both `False`. Write `if user is None:` when you mean absent.

**Pinned comment:** `The one line that matters: bool(None) is False and bool('') is False, so `if
user:` cannot tell an absent user from an empty one - use `if user is None:` when you mean absent.
Both errors on screen are real output from this machine: Python 3.13.15 raised the AttributeError,
node v24.15.0 raised the TypeError. `nil` is Go, Ruby, Lua and Swift and I did not run it here, so
it gets a name and no chamber. Hoare put null references into ALGOL W in 1965 and called it his
billion-dollar mistake on the QCon London 2009 stage. Now: what is your worst null bug?`

## Re-cut applied

Both approved changes in `CORRECTIONS-day2.md` that name part 17, applied exactly and not re-cut
further here:

1. **Voice re-cut (§ A).** The user's `It's not zero and it's not an empty string.` became
   **"Zero and an empty string are both values. None is the absence of one."** — the
   contrast-reveal shape is rationed to one occurrence across the whole series and it is already
   spent on part 05's hook. Same fact, more accurate, and it is now executed truth
   (`None == 0` → `False`, `None == ''` → `False`). The user's `The danger: calling a method on
   nothing crashes your program, so check before you use it.` (3 clauses, 16 words) became
   **"Calling a method on nothing crashes your program. So check before you use it."** (9 + 7).
2. **Screen-text constraint (§ B).** The voice keeps its line; the **frame** carries the caveat.
   `bool(None)` and `bool('')` are both `False`, so a viewer who follows the part's own advice and
   writes `if user:` cannot tell an empty string from an absent value. F3 therefore shows the mono
   chip pair `if user:` struck through (P10 `strike-out`) beside `if user is None:` lit, and the
   pinned comment states the distinction in one line. The hook and the CTA mechanic are untouched
   and verbatim.

## Accuracy

Executed 2026-10-28 on Python 3.13.15 and node v24.15.0 and re-executed by this worker for the
shipped strings (bible § 4 ledger, `.tmp/day2_accuracy.py` / `.tmp/day2_accuracy.js`):

| claim | executed |
|---|---|
| `user = None; user.name` | `AttributeError: 'NoneType' object has no attribute 'name'` |
| `const user = null; user.name` | `TypeError: Cannot read properties of null (reading 'name')` |
| `None == 0` / `None == ''` | `False` / `False` — the identity claim holds |
| `bool(None)` / `bool('')` | `False` / `False` — **both falsy**, hence the F3 chip pair |
| `type(None).__name__` | `NoneType` (why the message reads the way it does) |
| `nil` | Go/Ruby/Lua/Swift; nothing here executes it → name chip only |
| Hoare | ALGOL W 1965; QCon London 2009, *Null References: The Billion Dollar Mistake* |

No new fact was invented for this part and nothing on screen is recalled: the two error strings, the
two `False` results and the three names are all in the ledger rows above. Coral is earned by exactly
two elements. No joke about Hoare's death appears anywhere.

## Gate state

Built to the pre-render gate; **no render, no MP4, no publish, no `preview --background`** (parallel
workers, snapshots only). Clone of pb-14's chrome, so nothing here needs a new grammar to be proved —
the check is that the chrome is pixel-identical and that the two chambers hold their messages above
the 28px floor. Parts 18 clones the same chrome next; the one number 18 needs from this build is
F4's chamber geometry, because a raised error string is 33 characters per line at best inside 880px.
