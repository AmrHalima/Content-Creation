---
format: 1080x1920
duration: 31s
message: "a pile where the only door is the top — you add at the top and take from the top, so the thing you just put in is the thing that comes out, which is why undo is a stack"
arc: hook (type only) → the pile built (LIFO, plates, lid, push/pop) → the pile operated (push two, pop one, POP = 2) → the Python words (append/pop chamber) → the ask (an intact pile, no answer)
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 23 of 33
identity: bench-v3.0
---

# STORYBOARD — prog-basics-23-stacks (prog-basics, part 23 of 33 · Day 3 / STRUCTURES)

English master, portrait 1080x1920, `[B]` band **29-34s**, ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/23-stacks.md`. Shape: `series-bible-day3.md` § 0/§ 4/§ 4b/§ 4c/§ 4d.
Grammar: `frame.md` v3.0 § 5-§ 6 — G1 hook · **G9 `pile` ×2 (first build of the mark)** · G3 code
chamber · G5 CTA.

> **Durations are measured.** Voice: Kokoro `af_heart` at 0.93 through `studio voice`, 81 words over 5
> lines; the per-frame durations below are that measurement plus authored air (~1.0s per frame, ~2.0s on
> F5) so every 0.5s crossfade sits inside silence and no sentence spans a cut. Every emphasis time in the
> frame files cites a word onset written into `audio_meta.json` by `studio cues`. Packet § 3: this part is
> digit-heavy (four spoken numbers), so expect the slow end of the measured spread.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber `#FFD166` =
the word being said, mint `#5AD6A0` = a value or what printed, `--muted` `#9BA6B2` = chrome.
**This film ships with zero coral** (`frame.md` § 7.1, bible § 4c): nothing on any frame is an error an
interpreter raised here, so `--err` appears nowhere in it. Every frame carries at least two § 9
primitives and the ligature kill-list.

## The mark this part carries (G9 `pile`, first build)

`frame.md` § 6 G9 is the whole derivation; no number below is mine. The atoms are already shipped: the
plate is **G6's `.f3-card` h 84 without the staircase** (pb-14 `03-stack.html`), the value is pb-21's
`.pb-chamber`/`.pb-val`, the counted chip is pb-21's `.f3-tag`, the drop-in is pb-14's scoped-z-index
`drop()` (a plate pushed onto a pile emerges from *under* the lid line, so the arriving plate is demoted
for exactly the 0.46s of its fall and the property is cleared on the frame it lands).

- plate 520×84, left 280 (centre x 540), y **332 / 424 / 516 / 608** (pitch 92), radius 22, 3px `--line`,
  G2 shadow. Value centred, Space Grotesk 700 5.6cqw `--value`. Right-edge mono `--muted` API tag
  (`push`) at pb-14's `.f3-pend` position.
- lid: 6px `--line` bar, left 260, width 560, y 320. It **is** the TOP and reads `--line`, never `--say`.
- TOP tag: mono `--muted` 1.85cqw at left 848, y 300, `data-layout-ignore`, with a 12px CSS chevron that
  straddles the lid's edge and covers no digit.
- shelf: 3px `--line-faint`, left 240, width 640, y 700.
- counted pair (bible § 4b, locked): `PUSHED 2` then `POP = 2, TOP = 1`, `.f3-tag` lane at **y 892**
  (see the lane finding in `BRIEF.md` Deviations 2). The CTA's three-push case is never drawn.
- push = P2 drop-in from `y:-210` (`bounce.out`) + `scaleY` settle + the lid lifts `y:-12` and returns.
  pop = the top plate exits `x:+260, y:-150, opacity:0` in 0.42s `power3.out` **while** the 240×64
  `--panel-2` mint chip `POP = 2` arrives centred in the slot the plate vacated; the plate below holds
  absolutely still (two snapshots 0.4s apart must prove it).
- empty pile = G2's `empty` shape: 3px dashed `--line`, no value, **no caret** — nothing is waiting to be
  filled, that is the point (bible § 7.1 names this as Day 3's danger beat: chrome, not colour).

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 with breathing glows (all ambient loops start and end at their
own zero so a cut never resets the world). Content lives between **y 230 and y 1004**; caption band
1024-1344; 1344-1920 empty for the platform's chrome. Cuts: F1 type-only, F2 wipes up, F3 wipes right,
F4 wipes left, F5 drops down — F2→F3 share the pile, so they differ in wipe direction, plate count,
plate values and two added lanes (≥2 of archetype/direction/hero position, § 9).

## Frame 1 — The hook (G1)

- scene: type alone over the ground, no pile (the piece's rule: a frame that illustrates its own hook leaves nothing for the explanation beat). Two display lines: `press control+z` then `you're using a stack`, the last three words arriving on the solid `--say` plate via P1 sweep → the amber becomes the token's own background and the type flips to `--say-ink` in one instant. Kicker `PROGRAMMING BASICS · BASICS III · 23` with the `BEGINNER` badge chip.
- duration: 3.4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: you already use a stack
- voiceover: "Press control Z and you're using a stack."
- sfx: none

## Frame 2 — The pile built (G9 pile)

- scene: shelf (3px `--line-faint`, y 700) + the lid (6px `--line`, y 320) + the `TOP` tag with its 12px chevron arrive on `a stack`, with one dashed empty chamber at the bottom slot (520×84, no value, no caret). On `last in, first out` the first plate drops into 608 (P2 from y -210, bounce.out) and the dashed chamber retires as it lands. On `like a pile of plates` plates drop into 516 then 424. Each plate carries a right-edge mono `--muted` `push` tag. On `You push onto the top` the **top** plate gets one 3px `--say` border flash (0.30s), retired before `pop from the top`, which flashes the same plate once and gains a `pop` tag at its left edge — never two amber arrivals at once.
- duration: 7.3s
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-pile.html
- type: mechanism
- beat: last in, first out
- voiceover: "A stack is last in, first out, like a pile of plates. You push onto the top and pop from the top."
- sfx: none

## Frame 3 — The pile operated (G9 pile + chips + the counted pair)

- scene: the same pile in the same place — lid, TOP tag, shelf, plate geometry untouched — now holding two **valued** plates, `1` at 608 and `2` at 516. Beat 1: a chip row in the band under the shelf (y 760, `--panel-2` mono `--muted`, `data-layout-ignore`) arrives P9-staggered: `UNDO HISTORY` / `BACK BUTTON` / `FUNCTION CALLS` — chips, never chambers (bible § 4d). Beat 2: `push one` drops the `1` plate, `push two` drops the `2` plate (each with the lid lifting `y:-12` and returning), then `PUSHED 2` lands in the counted lane (y 892). On `pop gives two` the `2` plate exits `x:+260, y:-150, opacity:0` while the mint chip `POP = 2` (240×64) arrives **in the slot it vacated**, the plate `1` below does not move one pixel, and `POP = 2, TOP = 1` lands beside the first tag. Both tags hold to the cut.
- duration: 8.6s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-push-pop.html
- type: mechanism
- beat: the top plate is the only door
- voiceover: "Undo history, the browser back button, and function calls all use stacks. Push one, push two, then pop gives two."
- sfx: none

## Frame 4 — The Python words (G3)

- scene: one `main.py` chamber (760 wide, `PYTHON` chip in `--say` on a 2px `--say` border, 64px `--panel-2` titlebar) at y 380, four type-on lines under a caret (P3), one line per spoken clause, every fragment executed on this machine (bible § 4): `stack = []` / `stack.append(1)   # push` / `stack.append(2)   # push` / `print(stack.pop())  # 2`. A `--panel-2` terminal strip in the § 4 terminal lane (y 900 h 72) prints `2` in mint on `takes the top off`. **No `push(1)` line exists** — `[].push(1)` raises AttributeError, so the Python verb is `append` and the API word lives in the mono `--muted` comment tag. Ligature kill-list on the stylesheet. No coral, nothing raises.
- duration: 6.1s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: the same two verbs, in Python
- voiceover: "In Python, a list does this. Append puts it on top. Pop takes the top off."
- sfx: none

## Frame 5 — The quiz (G5 CTA)

- scene: headline `what's on top?` at 6.4cqw in a 176px box (14 characters), the mechanic verb plate `COMMENT IT` in solid `--say` with `--say-ink` text, badge `PROGRAMMING BASICS · BASICS III · 23 · BEGINNER`, kicker `… · THE ASK`. Behind and below the headline, dimmed by § 1's background/border rule (containers dim, digits hold full ink): **three intact plates `1 2 3`** on the shelf at 608/516/424 with the lid and the `POP` tag on the top plate, plus a `?` chip in the `TOP` tag's authored position at the lid's right end. Each plate brightens from the dimmed border to `--line` as its number is spoken — the question drawn, **not answered**: no plate leaves, no `POP = 2` chip reappears, and the three-push answer is never counted on screen (pb-11's rule, bible § 4b). Holds alone under the platform's chrome; no exit push.
- duration: 5.7s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "After push 1, push 2, push 3, then pop: what's on top?"
- sfx: none

## Real durations

Measured by `studio voice` (Kokoro `af_heart`, the run printed `speed=0.93`) and written into the frame
rows above by `sync-durations`; the air was added by hand afterwards, so `studio assemble` was re-run
after those changes.

**Measured rate: 3.12 words/second** — between the two Day 2 carriers (2.59 and 3.50) — so the film
lands at **31.1s**, inside the `[B]` band 29-34s and just under the piece file's ~31.0s projection.
Nothing was padded and no word was added. The piece's "81 spoken words" counts F3's sentence as 23;
as written it is **20 words**, so the film speaks **78**. No wording changed.
Air at each cut: 1.05-1.30s (2.26s on F5, which loops under the platform's chrome), so the 0.5s crossfade
sits inside silence and no sentence spans a cut.

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 2.411 | 3.4 | 8 | 0s → 2.08s |
| F2 | 6.251 | 7.3 | 22 | 0s → 6.02s |
| F3 | 7.531 | 8.6 | 20 | 0s → 7.30s |
| F4 | 5.099 | 6.1 | 16 | 0s → 4.82s |
| F5 | 3.733 | 5.7 | 12 | 0s → 3.44s |
| **film** | **25.025 speech** | **31.1** | **78** | |
