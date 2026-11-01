---
format: 1080x1920
duration: 34s
message: "a box that refuses a duplicate and answers 'is it in there?' in one hop — which is why deleting repeats from a list is one call, and why a set has no next"
arc: hook addressed at you → what a set holds (the refused duplicate) → why it is fast, and what it costs (the probe) → the one-liner as code → the challenge
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 26 of 33
identity: bench v3.0
---

# STORYBOARD — prog-basics-26-sets (prog-basics, part 26 of 33)

English master, portrait 1080x1920, band **29-34s** (`[B]` part, `series-bible-day3.md` § 0.3), ceiling
54s. Copy source of record: `writing/prog-basics/pieces/26-sets.md`. Grammar: `frame.md` v3.0 § 5 and
§ 6 — **G8 direct address · G10 `probe` · G10 `probe` · G3 cutaway · G5**, with § 9's primitives.

This is one of Day 3's two G8 parts (the other is 31). The chrome is **copied verbatim from
`videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html` and `04-cutaway.html`**;
only the badge strings and the title change. `G10 probe` is **not proven anywhere** — its geometry comes
from `frame-day3.md` § 6, and its two atoms (the bounce that never enters, the ring that covers no
digit) are tested by reading PNGs, not by `check`.

> **Durations.** `studio voice` + `sync-durations` write the measured VO seconds into each
> `- duration:` line; the authored air (~1.0s per frame, ~2.0s on F5) is then added by hand, and
> `studio assemble` re-reads this file. Each 0.5s crossfade therefore sits inside silence and no
> sentence spans a cut.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame, two
breathing glows, a 1px `--line-faint` shelf at 60/1010/960×1. Space Grotesk for everything read,
JetBrains Mono for code, chrome and counted tags. Colour as a lesson: amber `#FFD166` is the word the
voice is on, mint `#5AD6A0` is a value or what printed, `--muted` `#9BA6B2` is chrome.
**Part 26 raises nothing, so this film ships with zero coral** — `--err` appears nowhere in it, and the
two real `TypeError`s (`unhashable type: 'list'`, `'set' object is not subscriptable`) are
reply-thread material. Content lives between y 230 and y 1004; caption band 1024-1344; 1344-1920 empty.
Every frame carries `font-variant-ligatures: none` plus the `liga/calt/dlig` kill-list on its
stylesheet, because JetBrains Mono ligates `<=` and `->` into glyphs a learner cannot type.

## The mark this part carries (G10 `probe`, first draw)

`frame-day3.md` § 6 gives the geometry; these are the numbers this film uses, so parts 25/31/32 clone
them rather than re-deriving them:

- **Row:** G2b exactly — six chambers **142×152, pitch 158, lefts 72 / 232 / 390 / 548 / 706 / 864,
  top 400**, `--panel` `#1F242C`, 3px `--line` `rgba(255,255,255,0.16)`, radius 22, G2's shadow. Values
  Space Grotesk 700 `--value` at **4.6cqw** (§ 2's node-value slot — 100 and 22 have to fit beside a
  dashed empty). Empty slots are 3px **dashed** `--line`, no value, no caret.
- **Index strip:** y **616**, mono 400 2.2cqw `--muted`, digits 0-5, P9 arrival, **zero first**,
  `data-layout-ignore`. It is a *diagram lane* and is never captioned as Python's memory layout.
- **Counted tag lane:** y **288**, h 66, pb-21's two positions and widths — tag A `left 270 / w 300`,
  tag B `left 590 / w 220`, `data-layout-allow-overlap`, mono 700 2.7cqw.
- **Probe ring:** **162×172** at `bucket.left − 10` (so slot 2's ring is at left 380, top 390), 3px
  `--say` border, radius 24, `box-shadow: 0 0 0 8px rgba(255,209,102,0.12)`, and it **hops one
  distance and stops** — the physical difference between 25's `LOOKED AT 6` and this part's `PROBED 1`.
  It straddles slot 2's border and covers no digit.
- **The refused duplicate:** a 108×58 `--panel-2` chip, mint `2`, P2 `drop-in` from `y: -210`
  (`bounce.out`), landing **straddling slot 0's top edge** (chip spans y 371-429, slot 0 starts at 400,
  the digit `2` inside starts at 451) — then `scale: 1 → 0.94 → 1` and **`x: +0`**. It never enters.
  A 3px `--say` strike-out bar (P10) runs across it while `ADDED 2` / `KEPT 2` land.
- **Not drawn, on purpose:** § 6's `key chip` and `HASH` box belong to 25's jump. A set has no key to
  hash, so this part takes the row, the ring, the strip, the tag lane and the bounce, and nothing else.

## Video direction (shared by all five frames)

Ground as above. Amber marks the spoken word only, one arrival per beat; mint marks values and printed
output only. Cuts: each frame's content wipes in from a different edge and pushes out inside its own
authored air. **The G8 chrome never fades and never pushes out** — one continuous shot across all five
frames, with the REC dot's blink and the ground's breath each returning to their own zero so the last
frame of scene N equals the first of scene N+1. The REC timecode is driven from the root timeline's
`tl.time()` through a time proxy (never the banned clock call — the renderer seeks).

## Frame 1 — The hook, addressed (G8, type alone)

- scene: the G8 viewfinder over the ground — corner brackets framing y 932→1004, the muted REC strip and `00:00` timecode, the `BEGINNER` chip, and the lower third `PROGRAMMING BASICS · BASICS III · 26` above `SETS`. Three display lines at 9cqw, left-aligned at x 72: `remove` / `duplicates` / `in one line`. Line 1 is **already on screen at t=0** (the cover; no entrance tween on it or the cover renders blank). Lines 2-3 wipe in from the left. On the spoken `one line` a P1 `say-sweep` runs under the words and they flip to `--say-ink`. Nothing else arrives — the bucket row is F2's, and a first frame that illustrates its own hook leaves the explanation beat with nothing to add.
- duration: 3.6s
- transition_in: cut
- status: built
- src: compositions/frames/01-hook.html
- type: hook
- beat: an instruction, not a question
- voiceover: "Remove duplicates from a list in one line."
- sfx: none

## Frame 2 — What a set holds (G8 + G10 probe, built)

- scene: content wipes in from the **left**. The six-slot row arrives with `2` at slot 0, `3` at slot 2, `7` at slot 4 and three dashed empty slots; the index strip arrives with it, zero first. Then the beat the part is about: a chip `2` drops in from above (P2 `bounce.out`) and lands **straddling slot 0's top edge**, never inside it; it holds, shrinks to `scale 0.94`, settles back to 1 with **`x: +0`** (it travelled nowhere), and a 3px `--say` strike-out bar runs across it (P10) while the counted tags land — `ADDED 2`, then `KEPT 2`. The digit inside slot 0 never changes and never moves. The `UNIQUE` gloss chip (`--muted`, mono, `data-layout-ignore`) sits above the row on the word `Unique`. Chrome unchanged: no fade, no push-out.
- duration: 9s
- transition_in: wipe-left
- status: built
- src: compositions/frames/02-probe.html
- type: mechanism
- beat: it refuses the duplicate
- voiceover: "A set holds unique values with no guaranteed order. Unique means no repeats. Adding the same value twice does nothing."
- sfx: none

## Frame 3 — Why it is fast, and what it costs (G8 + G10 probe, probed)

- scene: content wipes in from the **right** — the neighbour differs in direction *and* in what is new on the board (the ring, the `IN` chip, the order lane), per the consecutive-G8 rule. Beat 1: a 162×172 `--say` ring starts on slot 0 and **hops once**, to slot 2 only; slot 2 flashes a 3px `--say` border for 0.30s and returns to `--line` with its digit back at mint; an `IN` mint chip lands beside the row and `PROBED 1` arrives in the upper lane — the same physical gesture as part 25's hop, which is the point: a set is a hash map that kept no values. Beat 2: the compare gets its own thin chip lane under the row — four amber digits `1 1 2 3` arrive, the second `1` dims and a 3px `--say` strike runs across it, three mint digits `1 2 3` land, and the upper lane reads `4 IN` / `3 OUT` (executed `len(set([1,1,2,3])) → 3`). Beat 3, the order guard: a mono lane under the row reads `1 3 100 5 22 7` with a `NOT SORTED` chip — the deterministic iteration order of `{5,3,100,1,7,22}`, the honest second number beside the tidy `{1, 2, 3}`. **No string set's order appears anywhere** (it is not reproducible, and the renderer seeks).
- duration: 9.36s
- transition_in: wipe-right
- status: built
- src: compositions/frames/03-probed.html
- type: mechanism
- beat: one hop, and no order you can rely on
- voiceover: "Checking whether a value exists is fast. Great for removing duplicates and comparing groups. Four values go in, three come out."
- sfx: none

## Frame 4 — The one-liner (G3 cutaway over the G8 ground)

- scene: the cutaway, not a new shot. A 0.18 `--panel`-dark scrim fades in and the chamber drops into the same frame; the chrome stays up around its edges. `main.py`, `PYTHON` chip in `--say`, three type-on lines under a caret (P3), all executed on Python 3.13.15 here: `nums = [1, 2, 2, 3]` / `print(set(nums))  # {1, 2, 3}` / `print(len(set(nums)))  # 3`. The two inline comments and the two-row terminal strip (`{1, 2, 3}`, `3`) are mint — mint is what printed. On `no loop` a P1 `say-sweep` runs under the last four characters of line 3, inside its own 30px left inset (an overflowing plate is a contrast finding, pb-22's). Single quotes are Python's, ligatures are off, and there is **no `{[1, 2]}` line**: a list in a set raises `TypeError: unhashable type: 'list'` and Day 3 shows no coral.
- duration: 5.95s
- transition_in: cut
- status: built
- src: compositions/frames/04-cutaway.html
- type: example
- beat: one line, and no loop
- voiceover: "Set of one, two, two, three. That prints one, two, three. One line, and no loop."
- sfx: none

## Frame 5 — The challenge (G8 + G5 plate)

- scene: the ask, addressed. `THE ASK · PROGRAMMING BASICS · BASICS III · 26` in the top kicker lane (the brandline moves there in G8 mode because the lower third owns y 800→896 and the brackets own 932→1004). Headline `common items?` at 6.4cqw inside a 176px box (13 characters, inside the ≤24 law) with a `--line` rule drawing itself under it. Two `--panel-2` mono chips in `--ink`, `[1, 2, 2, 3]` tagged `a` and `[2, 2, 5]` tagged `b`, arriving **unjoined** — no `&` between them anywhere, because the one-liner is the viewer's answer and drawing it answers the challenge (pb-11's rule). The mechanic verb `POST IT` drops in as a solid `--say` plate with `--say-ink` text (P2), and the only `Challenge` mark on screen is the kicker, so the frame's one amber arrival is the plate. No exit push: this frame holds alone under the platform's chrome, and the chrome keeps blinking.
- duration: 6.05s
- transition_in: wipe-up
- status: built
- src: compositions/frames/05-cta.html
- type: cta
- beat: your one-liner
- voiceover: "Challenge: find the common items of two lists using sets. Post your one-liner."
- sfx: none

## Real durations

Filled in after `studio voice` / `studio cues`; the measured `audio_meta.json` beats every estimate
above, and the air is added by hand on top of it.

| Frame | VO seconds (measured) | Frame seconds (VO + air) | Film window | VO words |
|---|---|---|---|---|
| F1 | 2.560 | 3.6  | 0 -> 3.60 | 8 |
| F2 | 7.957 | 9.0  | 3.60 -> 12.60 | 20 |
| F3 | 8.320 | 9.36 | 12.60 -> 21.96 | 21 |
| F4 | 4.907 | 5.95 | 21.96 -> 27.91 | 16 |
| F5 | 4.864 | 6.05 | 27.91 -> 33.96 | 13 |
| **film** | **28.608 speech** | **33.96** | | **78** |
