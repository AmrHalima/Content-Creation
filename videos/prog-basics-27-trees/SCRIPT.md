# SCRIPT — prog-basics-27-trees (EN master)

**Voice:** Kokoro `af_heart`, speed **0.93** (the house value — `BRIEF.md` `voice_speed`,
`frame-day3.md` § 10), local and offline, pinned by `studio voice` from `BRIEF.md`
(`tts_provider: kokoro`, `voice: af_heart`). `--speed 0.93` is passed explicitly because the house
lookup misses (`voice.voices.en` nesting) and the flagless path speaks at 0.74. ElevenLabs is unusable
on this machine (empty `voice_id`, HTTP 402 on free-tier keys) and was not substituted. HeyGen not
used. No BGM, no SFX.

**Voice direction:** one person at a whiteboard drawing a folder picture. F1 is deadpan — `secretly` is
the joke and it gets no extra smile. F2 sets the shape, then names the parts in order (root, then the
two children) because the boxes drop as they are named. F3's first sentence is the best line in the
part and gets the whole beat; the last sentence slows for the two numbers. F4's `each branch is another
tree` is said slowly — it is part 14's recursion shape, minus the word. F5 is asked, not tagged.

**Budget:** 88 spoken words / 5 lines against a ~33s `[B]` projection and a 54s ceiling. Real durations
come from `studio voice` + `studio cues` and win.

---

## Line 1 — Hook (Frame 1)

**Time:** estimate 3.0s at 2.7 w/s (real VO wins)
**Delivery:** Two beats, same weight. Land `secretly` — it is the word the plate is on.

    Your computer's folders are secretly a data structure.

## Line 2 — Nodes and children (Frame 2)

**Time:** estimate 9.6s at 2.7 w/s (real VO wins)
**Delivery:** The first sentence settles the shape. The middle sentence is the `node` gloss and stays a
breath of its own. The last sentence names the root, then the children, in the order the boxes drop.

    A tree is a hierarchy of nodes. A node is one box, holding one thing. One root at the top, and every node can have children.

## Line 3 — Leaves and real trees (Frame 3)

**Time:** estimate 9.3s at 2.7 w/s (real VO wins)
**Delivery:** The leaf gloss gets the whole first beat — it is the user's own line and the clearest
sentence in the part. The three chips arrive one per item, no emphasis stacked on them. The last
sentence slows for the two counted numbers, and `three` lands on the mint digit.

    A node with no children is a leaf. Folders, HTML pages, and org charts are all trees. This one has five nodes and three leaves.

## Line 4 — List versus tree (Frame 4)

**Time:** estimate 5.2s at 2.7 w/s (real VO wins)
**Delivery:** Two short statements, one per chamber. Nothing is read aloud from the code: the eye
follows the sweep, the voice says `one line` and `another tree`. `another tree` is the callback to part
14, so it is the last thing in the frame to move.

    A list is one line. A tree branches, and each branch is another tree.

## Line 5 — The quiz (Frame 5)

**Time:** estimate 5.6s at 2.7 w/s (real VO wins)
**Delivery:** Verbatim CTA, asked as a question. The two conditions are drawn as the shape behind the
headline, never counted on screen — the count is the viewer's job.

    How many leaves if the root has 2 children and each child has 2 more?

---

## Word count and rate check

| Line | Frame | Words | Est @ 3.24 | Est @ 2.7 (digit-heavy) |
|---|---|---|---|---|
| 1 | F1 | 8 | 2.5s | 3.0s |
| 2 | F2 | 26 | 8.0s | 9.6s |
| 3 | F3 | 25 | 7.7s | 9.3s |
| 4 | F4 | 14 | 4.3s | 5.2s |
| 5 | F5 | 15 | 4.6s | 5.6s |
| **total** | | **88** | **~27.1** | **~32.7** |

Plus authored air (~1.0s per frame, ~2.0s on F5) ≈ **33-39s** film. Under the 54s ceiling. `[B]` band is
29-34s; 27's three numbers in F3 are the slow-rate risk the piece file names, so the measurement decides
and the band result is reported rather than reached for by cutting words.

## Clarity pass (what did and did not change)

Line 1 (the hook) and line 5 (the CTA mechanic) are the user's words, verbatim. Lines 2-4 are the piece
file's final narration table, un-re-cut: `CORRECTIONS-day3.md` § A records that 27's explain lines pass
the ≤14-word / ≤2-clause law untouched, and § A names 27's 15-word CTA as **not eligible** for the law
because it is a CTA mechanic — the frame carries the conditions instead. No term, claim, hook or CTA
mechanic changed in this run.

Glosses, each in the frame where the noun first appears: `node` → the root box itself, tagged `NODE`,
plus "one box, holding one thing"; `root` → the `ROOT` name tab on that box; `parent` / `child` →
`CHILD` chips on the two boxes that arrived under it; `edge` → one `EDGE` chip on the first elbow, since
the voice never says the word (bible § 2 puts the frame in charge); `leaf` → `LEAF` chips on exactly the
three boxes with nothing under them, and deliberately **not** on `L`, which has children — that is the
definition being drawn. **Neither "traverse" nor "iterate" appears anywhere in this part** (banned
series-wide), and **no Big-O notation on any frame** (27 makes no runtime claim).
No "simply/just/easy/of course", no em-dashes on screen, no "don't worry", no AI tells, no "not X, it's
Y" shape (rationed to part 05). The one three-item list — folders, HTML pages, org charts — is the
enumeration *being the subject* (bible § 11), so it ships as a chip row, not as prose emphasis.

**Spoken code:** nothing in this part is read aloud. If a value ever needs saying, `['L', 'R']` → "L and
R" (a learner hearing "bracket L comma R" types it back wrong) and `nums[1]` → "nums at one". The voice
never says brackets, colons or indentation.

**Forms (bible § 4d):** `root → (L, R)` appears only as a drawn diagram, never inside a `PYTHON`
chamber; `FOLDERS` / `HTML` / `ORG CHART` are chips (no output, no number, no colour role); the only
chambers are F4's two executed snippets (`nums[1]` → `2`, `kids['root']` → `['L', 'R']`).
