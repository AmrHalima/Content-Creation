---
format: 1080x1920
duration: 36.3s
message: "a tree whose edges are letters, so words that start alike walk the same road — and a path can exist without being a word, which is the one thing that makes a trie more than a tree of letters"
arc: hook (addressed) → what a trie is, trunk built → the walk + the branches + the count → the cutaway proof (a path is not a word) → the ask
audience: first-week programming learners (prog-basics lane, its own identity)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 31 of 33
identity: bench-v3.0
---

# STORYBOARD — prog-basics-31-tries (prog-basics, part 31 of 33)

English master, portrait 1080x1920, `[M]` band **34-42s**, ceiling 54s. Copy source of record:
`writing/prog-basics/pieces/31-tries.md`. Grammar per `frame.md` v3.0 § 8:
`G8 · G11-trie · G11-trie · G3 cutaway · G5` — the tranche's second direct-address part (bible-day3 § 5
assigns G8 to exactly two parts, 26 and 31).

> **Durations below are the piece file's estimates** until `studio voice` measures the VO column and
> `sync-durations` writes it here; the authored air (~1.0s per frame, ~2.0s on F5) is then added back by
> hand and `assemble` is re-run. Every emphasis time in the frame files cites an onset from
> `audio_meta.json` after `studio cues`.

## Identity note

Graphite ground `#15181D`, dot grid drifting 0 → 16 → 0 and returning to its own zero inside every frame,
two breathing glows, a 1px shelf at y 1010. Space Grotesk for everything read, JetBrains Mono for code,
letters and chrome. Colour as a lesson: amber `#FFD166` = the word the voice is on, mint `#5AD6A0` = a
value or what printed, `--muted` = chrome. **Zero coral** (bible-day3 § 4c: part 31 raises no exception;
the `False` on F4 is a fact in mint, never an error in coral). Anything a viewer counts — here, the
elbow edges — is 3px `--line` (0.16), not faint.

Content lives between y 230 and y 1004; the caption band sits at 1024-1344; 1344-1920 stays empty.

## The two marks this part carries

**G8 direct address — copied verbatim from pb-14.** Ground clip, chrome clip, content clip; four corner
brackets 3px `--line-faint`, 72px arms, inset 48, the bottom pair framing y 932→1004; a REC strip with a
16px `--muted` dot blinking on a 0.5s yoyo (not coral), `REC` mono 2.4cqw and a `00:0N` timecode driven
by a time proxy off the root timeline (never a wall clock — the renderer seeks); a `BEGINNER|INTERMEDIATE`
diff chip; and the lower third `--panel-2` plate at `left:72 / top:800 / 560×96` carrying
`PROGRAMMING BASICS · BASICS III · 31` above `TRIES`. **Chrome never fades and is never pushed out**; a
G8 frame wipes only its content.

**G11-trie — bound, not redrawn.** `frame-day3.md` § 6's geometry as given (27 draws the grid
concurrently): root chip 96×96 `--panel-2` at left 466 / y 292, interior deliberately empty; `c` at 466 /
y 452; `a` at 466 / y 612; `n` `r` `t` at 154 / 466 / 778 on y 772. Nodes 148×96 `--panel`, 3px `--line`,
radius 22, G2 shadow; letters JetBrains Mono 700 5.2cqw `--value` with the ligature kill-list. Elbows:
three axis-aligned bars per edge with runs at y 420 / 580 / 740; where parent and child share a centre
the run has zero length and the edge reads as one straight bar. **The END dot — 16px `--value` at
`right:12 / top:12` — appears on `n`, `r` and `t` and NOT on `a`.** That single absence is the part.

## The vertical-budget finding (read this before cloning the grid into a G8 frame)

| element | y span | x span | source |
|---|---|---|---|
| G8 lower third | 800 → 896 | 72 → 632 | pb-14/17/18, verbatim |
| trie L3 row | 772 → 868 | 154 → 926 | `frame-day3.md` § 6 |
| lower counted lane | 892 → 958 | 270 → 810 | § 4 + the piece file |

L3 and the plate overlap over 148×68px twice (the `n` and `r` nodes), and the lane grazes the plate by
4px. The trie + lane consume y 292→958, and the plate's only licence is "top edge ≤ y 940" — no placement
clears both. F2 and F3 are therefore authored **exactly to spec, overlapping**, so the pixels show it; see
`BRIEF.md` → Deviations 1 and `Blocked`. Nothing was nudged to hide it, because 27/28/29 inherit this grid.

## Frame 1 — The hook (G8, type alone)

- scene: five display lines on the direct-address ground, `How does` / `autocomplete` / `answer before` / `you finish` / `typing?` at 9cqw, left-aligned at x 72, tops 268/372/476/580/684. Line 1 carries no entrance tween (this is the cover, so the first frame is never empty). The frame's one amber event is the P1 say-sweep under `finish`, which flips to `--say-ink` while the voice is on it. No trie on this frame.
- duration: 4.1s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- beat: the question, addressed at you
- voiceover: "How does autocomplete answer before you finish typing?"
- sfx: none

## Frame 2 — What a trie is (G8 + the trunk built)

- scene: the content layer wipes in from the LEFT. The empty root chip drops in on "a trie is a tree" (P2), then `c` arrives with its elbow drawing in three stages (P8), then `a` — parent before child, one per clause. Mono `LETTER` gloss chips land beside both letter nodes as `letter` is said. On the second sentence the 3px `--say` trunk rail draws down the shared road beside `c` and `a`, and the `PREFIX` chip arrives at its middle — the frame's one amber arrival. On the gloss beat three mono word chips `car` `cat` `can` land in the lower lane. Nothing counts yet.
- duration: 9.2s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/02-trie.html
- type: mechanism
- beat: letters on the edges, a shared road
- voiceover: "A trie is a tree where each node is a letter. Words that share a prefix share a path. A prefix is the letters a word starts with."
- sfx: none

## Frame 3 — Walking it (G8 + the trie walked)

- scene: the content layer wipes in from the RIGHT — the neighbour differs in direction AND in the non-chrome element it introduces (the ring and the per-word lighting, not the rail). Beat 1: a 168×116 `--say` ring travels root → `c` → `a`, one stop per spoken word of "walk down the typed prefix"; the boxes never move. Beat 2: on `Car` the `r` node lights (P7 pulse) and its END dot arrives last; on `cat` the `t` node; on `can` the `n` node — three dots, three real words, `a` still bare. Beat 3: the executed `completions('ca')` output `can car cat` in mono `--value` beside the trunk (alphabetised because Python sorted it, not because order matters), then `SHARED 2` and `BRANCHES 3` tick up on P9 in the lower lane, `BRANCHES 3` landing on "three ways". An `END` mono chip names the dot beside the `t` node's dot.
- duration: 11.5s
- transition_in: wipe-right
- status: animated
- src: compositions/frames/03-walk.html
- type: mechanism
- beat: walk, then list what is below
- voiceover: "To autocomplete, walk down the typed prefix, then list everything below it. Car, cat, and can start the same way. They share c, then a, and split three ways."
- sfx: none

## Frame 4 — The path that is not a word (G3 cutaway over the G8 ground)

- scene: a 0.18 scrim and a 700px `main.py` chamber with a `PYTHON` chip drop into the SAME shot — the chrome stays up around it. Four type-on lines under a caret (P3), every line executed on 3.13.15: `words = ['car', 'cat', 'can']` / `paths = {w[:2] for w in words}` / `print(paths)  # {'ca'}` / `print('ca' in words)  # False`. The mint comments land with their lines. On "without a word at the end" the frame's one amber event sweeps under `'ca' in words`, and the terminal strip prints the two real stdout lines `{'ca'}` then `False` in mint and holds. No coral: `False` is what printed, not what failed.
- duration: 6.5s
- transition_in: cutaway
- status: animated
- src: compositions/frames/04-cutaway.html
- type: example
- beat: the trap, executed
- voiceover: "A path can exist without a word at the end. Here, three dots mark three real words."
- sfx: none

## Frame 5 — The quiz (G8 + G5 plate)

- scene: headline `which shares?` at 6.4cqw in the 176px ask box (13 characters, inside the § 5 cap). Below it the drawn path: the empty `?` root chip, then `d` → `o` → `g` as three trie nodes on 3px `--line` connectors — the shape the question is about, drawn but not solved. The two candidates sit under it as **unselected** chips `'dot'` / `'cat'`, and the `COMMENT IT` plate is solid `--say` with `--say-ink` text. A 3px `--say` ring travels between the two candidates twice and rests on NEITHER (pb-22's proven move: pre-picking would answer the viewer's quiz). Everything above y 1004; the frame holds alone under the platform's chrome and carries no exit push.
- duration: 5s
- transition_in: wipe-left
- status: animated
- src: compositions/frames/05-cta.html
- type: cta
- beat: the ask
- voiceover: "Which word shares a path with 'dog': 'dot' or 'cat'?"
- sfx: none

## Real durations

| Frame | VO seconds (measured) | Frame seconds (VO + air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 3.093 | 4.1 | 8 | 0s → 2.76s |
| F2 | 8.213 | 9.2 | 28 | 0s → 8.02s |
| F3 | 10.496 | 11.5 | 29 | 0s → 10.18s |
| F4 | 5.504 | 6.5 | 17 | 0s → 5.18s |
| F5 | 2.965 | 5.0 | 10 | 0s → 2.66s |
| **film** | **30.271 speech** | **36.3** | **92** | |

Filled from `audio_meta.json` after `studio voice`, with ~1.0s air per frame and ~2.0s on F5 so every
0.5s crossfade sits inside silence and no sentence spans a cut. Expected landing: **34-40s**, inside the
`[M]` band 34-42s. If the measurement comes in under 30s it is reported, not filled (bible-day3 § 0.3):
grow F5's air first, then re-cut the frame shape, never add narration.
