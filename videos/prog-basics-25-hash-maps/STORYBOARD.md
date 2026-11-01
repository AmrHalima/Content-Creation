---
format: 1080x1920
duration: 33.5s
message: "a key is turned into a position, so finding Sara is one hop instead of reading ten thousand names — and the price of that hop is that you cannot ask who is next to Sara"
arc: hook (the phone's question) → the board assembled (key, hash, buckets) → the two counted ways → the executed dict → save it
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 25 of 33
identity: bench-v3.0 (frame.md = frame-day3.md v3.0)
---

# STORYBOARD — prog-basics-25-hash-maps (prog-basics, part 25 of 33)

English master, portrait 1080x1920, `[B]` band **29-34s**, ceiling 54s. Part 25 of Day 3 / STRUCTURES.
Copy source of record: `writing/prog-basics/pieces/25-hash-maps.md`. Shape: `series-bible-day3.md` § 0.
Grammar: `frame.md` v3.0 § 5-§ 6 — G1 hook, **G10 `jump` ×2 (F2 assembles the board, F3 runs the two
counted ways)**, G3 code chamber, G5 CTA. G10 is **first built here**, and this tranche has no carrier:
`frame-day3.md` § 0 rule 2 / packet § 4 say that if the authored geometry does not survive my own
snapshots I report it and stop on that frame rather than invent a variant. **It did not survive — see
`BRIEF.md` → Blocked. Frames 2 and 3 are authored to the literal § 6 numbers and are the evidence.**

> **Durations are measured.** Voice: Kokoro `af_heart` through `studio voice --speed 0.93`, 77 words over
> 5 lines; the frame durations below are that measurement plus authored air (~1.0s per frame, ~2.0s on F5)
> so every 0.5s crossfade sits inside silence and no sentence spans a cut. Word onsets come from
> `studio cues` and every emphasis time in the frame files cites one of them.

## Identity note

Graphite ground `#15181D` with a dot grid that drifts and returns to zero inside every frame; Space
Grotesk for everything read, JetBrains Mono for code and chrome; colour as a lesson — amber `#FFD166` is
the word being said, mint `#5AD6A0` is a value or what printed, and coral is an error the interpreter
raised here. **Part 25 raises nothing on screen — `KeyError: 'Zeyad'` is real and stays in the pinned
comment — so this film ships with ZERO coral** (`--err` appears in no stylesheet in this project).
Every frame carries the ligature kill-list, at least two § 9 primitives, and no cut lands on the
previous frame's layout.

## The mark this part carries (G10 `jump`, first build) — and why it is blocked

`frame-day3.md` § 6 G10 authors five positions for one board. Two of them are the same rectangle as two
more of them:

| authored object | authored box | authored position | what it lands on |
|---|---|---|---|
| bucket row (G2b) | 142×152, pitch 158 | `top 400`, lefts 74 / 232 / 390 / 548 / 706 / 864 | — (shared grammar, 26 clones it) |
| `HASH` box | 200×84 | `left 540 / y 400` | **buckets 3 (548→690) and 4 (706→848), at their own top edge** |
| key chip | 240×64 | `left 420 / y 292` | **inside the counted-tag lane § 6 itself authors at `y 288 h 66`** (tag A 270→570, tag B 590→810) |
| counted tags | 300 / 220 wide, h 66 | `y 288`, lefts 270 / 590 | — (25 is an upper-lane part per § 4) |
| index strip | 142×40 | `y 616` | — |

The row and the tags are both fixed, shared grammar (pb-21's shipped row and tag lane), and the row's own
band 400→552 plus the index strip at 616→656 leaves no free band between the tag lane (288→354) and the
row: the 354→400 gap is 46px and the `HASH` box needs 84px plus its 60px name tab. **There is no authored
place for the `HASH` box.** Per the no-carrier rule I built the numbers exactly as written and stopped:
frames 2 and 3 carry the collision as proof rather than a quiet re-layout, so the dispatcher reconciles
§ 6 once for 25 **and 26** (26 clones the same row, ring and `probe`).

What survives unchanged, and is safe to clone: the six-slot row (142×152, pitch 158, lefts
74/232/390/548/706/864, top 400), the index strip (y 616, mono 2.2cqw, `data-layout-ignore`, zero first),
the two counted tags (pb-21's exact lefts/widths at y 288), the hop's `.g7-bar` + `.g7-chev` connector in
`--line`, the 162×172 `cur` ring at `bucket.left − 10` stepping the six authored lefts, and the dimming
rule for F5. What is wrong: the `HASH` box's `y 400`, the key chip's `y 292`, and — secondarily — a 240px
chip that cannot be centred on a 142px slot inside the 1008 right edge (§ 6's F5 "chip parked in slot 5").

## Video direction (shared by all five frames)

Ground graphite, grid drifting 0 → 16 → 0 px with breathing glows, every ambient loop starting and ending
at its own zero so a cut never resets the world. Ink `#F4F1EA`; amber marks the spoken word only; mint
marks values and printed output only; `--muted` `#9BA6B2` is chrome. Content lives between y 230 and
y 1004; the caption band sits at 1024-1344; 1344-1920 stays empty for the platform's own chrome. Each
frame wipes in from a different edge and pushes out inside its own air.

## Frame 1 — The hook (G1)

- scene: four display lines on graphite — `How does your phone` / `find one contact` / `among ten thousand` / `instantly?` — the last group on the solid amber say-plate, the third in `--muted` so the hook reads as a question with one landing word. `one contact` gets a neutral `--line` group bar (it is a counted group, not a spoken keyword, so it carries no amber). **No bucket row drawn** — the row is F2's entrance. Cover cut (≤6 words, § 8): `one hop, not ten thousand`.
- duration: 4.8s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the phone already knows
- voiceover: "How does your phone find one contact among ten thousand instantly?"
- sfx: none

## Frame 2 — The board assembled (G10 jump, first draw)

- scene: three objects arrive in this order, one per spoken clause. Key chip `'Sara'` (240×64, `--panel-2`, radius 12, 3px `--line`, JetBrains Mono 700 2.9cqw `--ink`, Python single quotes) at left 420 / y 292; on "key-value pairs" a second half-chip reading `25` in `--value` slides in beside it — the pair is two things, drawn as two things. `HASH` box (200×84, `--panel`, 3px `--line`, radius 22, G2 name tab `HASH`) at left 540 / y 400, interior mono 2.2cqw `--muted` reading `key -> position` with the ligature kill-list ON and **no digit anywhere inside it**. Bucket row top 400 (six slots): slot 1 `Omar` 30, slot 3 `Lina` 19, slot 5 `Sara` 25 (names mono `--muted`, values Space Grotesk 700 4.6cqw `--value`); slots 0, 2, 4 are G2's dashed empty state, **no caret** (nothing is waiting to be filled). Index strip 0-5 at y 616 arriving P9 with the zero first.
- duration: 6.6s
- blocked: G10 § 6 geometry — the authored `HASH` box position (left 540 / y 400) is the same rectangle as buckets 3 and 4. Built literally as evidence. See BRIEF.md → Blocked.
- transition_in: wipe-up
- status: animated
- src: compositions/frames/02-hash-board.html
- type: mechanism
- beat: a key, a rule, six slots
- voiceover: "A hash map stores key-value pairs. A hash function turns the key into an array position."
- sfx: none

## Frame 3 — The two counted ways (G10 jump, the argument)

- scene: same board, two beats. Beat 1, on "jumps straight" — a 3px `--line` connector (`.g7-bar` + one `.g7-chev`) draws from the `HASH` box to slot 5, the key chip travels along it (0.44s `power3.out`), slot 5 flashes a 3px `--say` border for 0.30s and returns to `--line`, and `JUMPED 1` lands in the upper lane (left 270, w 300, y 288). Beat 2, on "reading them one by one" — a 162×172 `--say` ring at `bucket.left − 10` steps the six authored lefts in a deterministic 0.12s stagger while `LOOKED AT` (left 590, w 220) ticks 1→6 on P9, and stops at 6 because Sara was authored into the LAST slot — the honest worst case, and the only reason the two tags are comparable. The linear beat uses no colour at all: the counter is the point. `ONE POSSIBLE SLOT` chip (`--muted` mono, `data-layout-ignore`) sits under the `HASH` box so the picture is never a claim about Python. Zero coral, no Big-O, no digit inside `HASH`.
- duration: 11.5s
- blocked: inherits frame 2's G10 collision (same board), and adds § 6's second one: the key chip's authored rest position (420/292) sits inside the counted-tag lane it must share with `JUMPED 1` / `LOOKED AT 6`. Sequenced so the tags arrive only after the chip has left that lane; the rest position itself is still wrong.
- transition_in: wipe-left
- status: animated
- src: compositions/frames/03-jump-look.html
- type: mechanism
- beat: one hop, or read them all
- voiceover: "A lookup jumps straight to the answer instead of searching. On average, lookup takes constant time. It reads one bucket. Reading them one by one takes all six."
- sfx: none

## Frame 4 — Ages, executed (G3)

- scene: one `main.py` chamber (936 wide, `PYTHON` chip, 3px `--line`, `--panel` on `--ground`, 64px titlebar) with two type-on lines under a caret (P3), both executed on this machine on Python 3.13.15: `ages = {'Sara': 25}` / `print(ages['Sara'])    # 25`. A `--panel-2` terminal strip in the 900 h 72 lane prints `25` in mint — the only number the frame adds. **No `hash(...)` line**: `hash('Sara')` returned three different numbers in three runs here (`sys.flags.hash_randomization` → 1), so any printed hash would be a lie by tomorrow. Ligature kill-list on the stylesheet.
- duration: 5.5s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/04-code.html
- type: example
- beat: it runs, here is the output
- voiceover: "Ages is Sara twenty five. Ages at key Sara gives twenty five."
- sfx: none

## Frame 5 — Save it (G5 CTA)

- scene: headline `key or position?` (15 chars) at 6.4cqw in a 176px box, the mechanic verb plate `SAVE THIS` in solid `--say` with `--say-ink` text, badge `PROGRAMMING BASICS · BASICS III · 25 · BEGINNER`, kicker `PROGRAMMING BASICS · BASICS III · 25 · THE ASK`. Behind it the bucket row returns **dimmed via § 1's background/border rule** (`rgba(31,36,44,0.42)` fill, `rgba(255,255,255,0.08)` border, digits at `rgba(244,241,234,0.62)`, values `rgba(90,214,160,0.62)`) — never container `opacity` — with the key chip still parked at slot 5 and the index strip readable. The shape worth saving; no number added, no amber plate inside the dimmed row (§ 1's 2.87:1 finding). It holds alone under the platform's chrome and carries no exit push.
- duration: 5.1s
- transition_in: wipe-down
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Save this for your next interview. It comes up a lot."
- sfx: none

## Real durations

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.797 | 4.8 | 11 | 0s → 3.40s |
| F2 | 5.611 | 6.6 | 16 | 0s → 5.24s |
| F3 | 10.304 | 11.5 | 28 | 0s → 9.98s |
| F4 | 4.523 | 5.5 | 12 | 0s → 4.00s |
| F5 | 3.051 | 5.1 | 11 | 0s → 2.74s |
| **film** | **27.286 speech** | **33.5** | **78** | |

Voice: `studio voice --speed 0.93`, five wavs, `audio_meta.json` carries one line per frame (5). Measured
rate **2.87 words/second** (78 counted word tokens over 27.286s) — the slow end of § 10's spread, exactly
as `series-bible-day3.md` § 0.3 predicted for a digit-heavy part, and 12% slower than the 3.24 planning
average. **33.5s sits inside the `[B]` 29-34s band**, so nothing was padded, no word was added, and F5's
pad (2.05s) is the only air that grew. Air at each cut ≈1.0s (F2 0.98s, F3 1.18s, F4 1.0s, F5 2.05s), so
the 0.5s crossfade sits inside silence and no sentence spans a cut. Frame 3 counted 28 tokens against the
piece file's 27 words: the ASR splits `key-value`-style tokens differently, no word was added or removed.
