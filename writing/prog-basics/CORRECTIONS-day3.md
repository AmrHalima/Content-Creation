# prog-basics — CORRECTIONS LEDGER, DAY 3 (parts 23-33)

Before/after for every edit to the user's pre-authored Day 3 copy. Same discipline as
`CORRECTIONS.md` (Day 1) and `CORRECTIONS-day2.md`: **hooks and CTA mechanics are verbatim, no
technical claim is altered, nothing below is a silent change.**

Authority: Day 1 bible § 0 scopes permitted change to "polish, pacing, on-screen text, and technical
accuracy"; `frame-day3.md` § 11 states hooks and CTA mechanics do not change and explain lines
(F2/F3/F4) are fair game.

Word counts below were measured with a token regex on this machine (Python 3.13.15), not eyeballed.
Every technical claim was executed here; the results live in `series-bible-day3.md` § 4.

**Summary: 7 voice re-cuts (parts 24, 25, 26, 28, 29, 32, 33), 11 screen-text constraints, and 1 added
bridge sentence (part 29 — the only place Day 3 adds a word).** No part's *teaching* is changed.
Nothing in this file touches a hook. Nothing in this file touches a CTA mechanic. Day 2 needed zero
accuracy corrections; Day 3 needs zero too, but it needs **labelling** (§ B/§ C) in eleven places
instead of Day 2's two, because its API names are not Python and its counts are not self-evident.

Sentences that already pass untouched: every hook (7-12 words), every CTA mechanic, and the explain
lines of **23, 27, 30, 31** in full, plus 24's first two sentences, 25's first and last, 26's first and
last, 28's second and third, 29's third, 32's second and third, 33's first and last.

---

## A. Voice re-cuts — the ≤14-word / ≤2-clause sentence law

Split for a breath, not shortened. The words survive unless the row says otherwise.

| # | part | BEFORE (user's copy) | AFTER | why |
|---|---|---|---|---|
| 1 | 24 | "It keeps things fair and in order, which is perfect for tasks waiting their turn." (15) | "It keeps things fair and in order." (7) + "That is the right shape for tasks waiting their turn." (10) | 15 words on a **trailing relative clause** — "which is…" is named in the law's ban list. Two beats, all content words kept; `perfect` → `the right shape` because a queue is not perfect at anything and the frame shows the ordering. |
| 2 | 25 | "A hash function turns the key into an array position, so lookup jumps straight to the answer instead of searching." (20, 3 clauses) | "A hash function turns the key into an array position." (10) + "A lookup jumps straight to the answer instead of searching." (10) | 20 words, `so` + `instead of` = three clauses in one breath. Split at the `so`, which is dropped; nothing else changes. **This is the part's thesis line and the two beats are the two screen marks** (`JUMPED 1` lands on beat 2's verb). |
| 3 | 26 | "Adding the same value twice does nothing, and checking whether a value exists is fast." (15) | "Adding the same value twice does nothing." (7) + "Checking whether a value exists is fast." (7) | 15 words joined by `and`, and it is **two different lessons in one breath** — uniqueness and membership. Splitting gives each its own counted tag (`ADDED 2 / KEPT 2`, then the probe). Zero words changed. |
| 4 | 28 | "A binary search tree keeps smaller values on the left and larger on the right of every node." (18) | "A binary search tree keeps smaller values on the left." (10) + "Larger ones go on the right, at every node." (9) | 18 words, a compound object read as one run-on. The split puts `every node` on its own beat, which is the part's actual rule (it holds *at each node*, not just at the root) and is where the SMALLER/LARGER chips land. |
| 5 | 29 | "A heap is a tree where every parent is smaller (min-heap) or larger (max-heap) than its children." (17 + two mid-sentence parentheticals) | "A heap is a tree where every parent is smaller than its children." (13) + "That version is a min-heap." (5) + **"Flip every comparison and it is a max-heap."** (8, authored) | 17 words with the comparison term (`than its children`) stranded four words after `smaller`, and **two parentheticals that cannot be spoken**. The sentence is re-closed first; `min-heap` becomes its own 5-word beat. ⚠ **This is the only added sentence in Day 3.** `max-heap` cannot survive as an echo of `min-heap`'s structure without a verb of its own, and the alternative — dropping it — loses a term the user chose. Flagged as touching a writer's sentence. |
| 6 | 32 | "A priority queue serves the item with the highest priority first, not the oldest." (14) | "A priority queue serves the highest priority first." (8) + "The oldest item waits its turn." (6) | Not over the length law. **This is the tranche's only "it's not X" shape** and the construction is rationed to one occurrence across the series, already spent on part 05's hook (`.agents/product-marketing.md` Learnings). The tail `not the oldest` becomes its own affirmative sentence, which is also better for the debate CTA: `waits its turn` echoes part 24's fairness and lets the viewer hear the tension instead of being told it. ⚠ Flagged: this removes a shape the writer chose, not just a breath. `the item with the` is also dropped — 5 words of scaffolding around one noun. |
| 7 | 33 | "You can traverse in both directions and delete a node without searching for its predecessor." (15) | "You can go forward and back." (6) + "And you can delete a node without hunting for the one before it." (13) | 15 words, two unrelated abilities in one breath, **and two vocabulary violations**: `traverse` is banned series-wide from Day 2 § 2 (say "walk"/"go"), and `predecessor` is an unglossed jargon term in a first-week part (gloss law, § 2). `searching` → `hunting` so the line does not collide with parts 25/28/30, where "search" is the technical verb being taught. ⚠ Flagged: `traverse` was the writer's word. It is replaced by the series' own glossary rule, not by preference. |

**Untouched, deliberately, and worth naming:**
- **27's CTA is 15 words** ("How many leaves if the root has 2 children and each child has 2
  more?") — over the law and **not eligible**, because it is a CTA mechanic. The screen carries it
  instead: `LEAVES 4` / `NODES 7` as counted tags, and the two-level condition drawn as L0→L1→L2.
- **23's triad** ("Undo history, the browser back button, and function calls all use stacks.") — 12 words,
  three items, but the enumeration **is** the subject (the same exception as 09's three doors), and it is
  drawn as a chip row rather than spoken as a list with emphasis on each.
- **30's and 32's triads** likewise (networks/maps/web; schedulers/Dijkstra/notifications).
- **33's hook** ("A linked list that can walk backwards.", 7 words) — the tranche's natural contrast
  shape, and it is a **direction, not a "not X"**. Kept verbatim. It is also why re-cut 7 says
  "go forward and back" rather than reaching for a negative.
- **24's fairness** — stated positively in the user's own words ("keeps things fair and in order"), so it
  needs no shape surgery. Day 3's fairness argument is made by **32's executed tie-break**, not by
  rhetoric (§ C below).

## B. Screen-text constraints (the voice keeps the user's line; the frame is what gets guarded)

| part | issue | what the screen does instead |
|---|---|---|
| 23 | `push` is **not Python**: `[].push(1)` → `AttributeError: 'list' object has no attribute 'push'` (executed). The user's example is a language-neutral API. | The pile keeps `PUSH`/`POP` as plate labels; the G3 chamber shows `stack.append(1)` / `stack.pop()` with a mono `# push` / `# pop` tag on each line. Never `push(1)` inside a `PYTHON`-chipped chamber. `frame-day3.md` § 7.3 |
| 23 | The CTA has **two right numbers**: `pop()` returns 3 *and* leaves 2 on top. | F3 shows both, mint chip `POP = 3` where the plate was, and the plate below reading `TOP = 2`. A frame that shows only one makes the pinned comment look wrong. |
| 24 | `['A','B'].pop()` returns **'B'**, not 'A' (executed) — a list serves the wrong end. | 24's chamber is `collections.deque` and `popleft()`. The `list.pop()` counter-example is **pinned-comment only**; on screen it would look like the part contradicting itself. |
| 25 | `hash('Sara')` returned **three different numbers in three runs** (`sys.flags.hash_randomization` → 1), and dict keys iterate in **insertion** order. | No hash value on any frame. The `HASH` box's interior reads `key -> position` with no digits, and the bucket index is authored as a picture ("one possible position"), never captioned as memory. Same class of constraint as pb-21's "side by side in memory". |
| 26 | `set([1,2,2,3])` prints `{1, 2, 3}` — which **looks sorted**, in a part whose first sentence says order is not guaranteed. | Keep the executed `{1, 2, 3}` (it is real output) and add the deterministic counter-example beside it: `{5,3,100,1,7,22}` iterates as `1 3 100 5 22 7`. Never a **string** set's order — it changed across three runs here and the renderer seeks. |
| 27 | `root → (left, right)` is not code; folders/HTML/org charts are not executable claims on this machine. | Diagram + chip row (`FOLDERS`, `HTML`, `ORG CHART`). The chamber shows the executed leaf count from a real 7-node tree (`LEAVES 4`, `NODES 7`), not a fake `repr`. |
| 28 | The user's "go left, then left again" is **two turns**, but the walk **visits three nodes** (executed path `8 → 4 → 3`). | `STEPS` counts nodes looked at, always, and ticks **3**. The two lefts are two arrowheads, never a second number. The pinned comment owns the distinction before the comments do. |
| 28 | "a million items in about twenty steps" — the halving field is 20 values but **19 halvings**, and 15,625 halves to **7,812.5**. | G14 shows all twenty executed rows with `STEPS` reaching **20** (a look per row, the binary-search count), tags `FLOOR` once at row 7, and labels the bar lane `LOG SCALE`. "19 halvings" is the *other* correct number and it belongs in the pinned comment. |
| 29 | `[1, 3, 2, 7, 5]` is the **only correct-looking** heap array, but the layout depends on build order: `heapify([7,5,3,1,2])` → `[1, 2, 3, 5, 7]`. | The frame credits the order: a mono chip reads `BUILT BY PUSHING 1, 3, 2, 7, 5`. And `NOT SORTED` beside the array, because executed `h != sorted(h)` → True, and index 1 holds **3** while index 2 holds **2** — siblings unordered. No frame may imply the row reads left to right in order. |
| 30 | A graph walk **does not terminate** on `A→B→C→A` without a visited set (executed: `A → B → C → A → B → C → A → B → C → A → B → C`). | That runaway *is* F3, with `WALKED 12` and a mono `NO END` tag in `--muted`. **No coral** (`frame-day3.md` § 7.1) and no warning triangle: the danger is told by the counter, which is also part 12's callback. |
| 30 | "A graph is nodes connected by edges" leaves **both** terms un-glossed in one 7-word breath. | The frame glosses: each circle carries a `NODE` tab and each connector an `EDGE` chip (`--muted`, `data-layout-ignore`). Same move as pb-22's `VALUE`/`NEXT`. Voice unchanged. |
| 31 | A learner will read "each node is a letter" as "a path is a word". | Executed and drawn: `ca` path exists **True**, `ca` is a word **False**. The `END` dot sits on `n`/`r`/`t` only. This is the mark that makes 31 more than a tree with letters. |
| 32 | `1` meaning "highest priority" is a **convention**, not a law (`(1,'urgent')` beat `(5,'low')` because Python's heap is ascending). | A mono chip `SMALLER = EARLIER` on the tuple lane. Without it a viewer who meets a UI where `1 = low` builds the inverse and blames the part. |
| 32 | Equal priorities do **not** go first-in-first-out: `(1,'low')` popped before `(1,'urgent')` — decided by the **label's spelling**. | F4 shows the tie beat with `TIES BY SPELLING` and a one-clause annotation `l before u`. This is the part's debate evidence, and it is executed, not asserted. |
| 33 | `None ⇄ A ⇄ B ⇄ C ⇄ None` is not code, and U+21C4's coverage in the shipped woff2 set is **unverified** (no `fontTools` here). | Two one-way CSS connectors per gap (±7px offsets), chevrons built from borders. **No directional glyph in any cell.** The chamber shows the executed dict-node chain printing `A -> B -> C` and `C -> B -> A`. |
| 33 | "It's half of how an LRU cache works" — the *behaviour* is executable, the implementation is not. | The screen shows the executed `OrderedDict` recency order (`['b','c','a']`, victim `b`) and a chip `LRU CACHE`. It never claims CPython builds it that way (`functools._lru_cache_wrapper.__doc__` does not mention a linked list). And "the other half" is named as **part 25's hash map** — a callback, not a claim. |
| 33 | "The cost is extra memory for the second pointer" invites a byte count. | `+1 POINTER` as a field-count chip. **No `sys.getsizeof` on any frame** — it compares *containers* (dict vs tuple), not pointers, and the number would teach the wrong thing. |

## C. The labelling rule this tranche needs and Day 2 did not

Day 2's chambers were real Python in every part. Day 3's user copy is written in a **language-neutral
data-structures API** (`push`/`pop`/`enqueue`/`dequeue`, `root → (left, right)`, `None ⇄ A ⇄ B ⇄ C`,
`push('low', 5)`), none of which is Python except `pop`. So the tranche adopts three forms, defined in
`series-bible-day3.md` § 4d and enforced by `frame-day3.md` § 7.3:

| form | may show | never shows |
|---|---|---|
| **diagram** (G9-G15) | the user's API words as plate labels; CSS connectors as arrows; executed numbers | SVG in a scaled container, unproven glyphs, a claimed internal layout |
| **chamber** (G3/G4) | Python executed on this machine, single quotes, ligatures off, `# push` style tags | pseudocode presented as Python, invented output, hash values |
| **chip** | `NIL` `HTML` `FOLDERS` `ORG CHART` `DIJKSTRA` `LRU CACHE` `MIN-HEAP` `MAX-HEAP` | output, a number, a colour role |

The deciding rule is unchanged from pb-10/pb-17 and Day 2 § 13: **a fragment may be drawn in a chamber
only if its output was produced here.** What is new is how often Day 3 has to say "chip".

## Approved

The user set Day 3's three open decisions at the gate on 2026-11-01 (design the marks and run with no
carrier wave; say "log n" at most once and never write Big-O; `[B]` 29-34s with `[M]` allowed 34-42s and
no padding ever), and delegated the rest. Seven re-cuts are inside Day 1 § 0's scope, each reversible in
one edit, and all listed here rather than discovered later in a frame.

Three of them change a writer's *sentence*, not just its breath, and are named individually: **29** (one
authored bridge sentence for `max-heap`), **32** (the `not the oldest` tail removed for the series-wide
contrast rationing), **33** (`traverse` replaced by the series glossary rule). If the user wants any of
the originals back, the cost is one narration line re-recorded for that part and the counted tags
unchanged — the frames were authored around the beats, not the words.
