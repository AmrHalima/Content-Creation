# Programming Basics — Series Bible, DAY 3 (parts 23-33 · STRUCTURES)

Campaign: `prog-basics` · tranche: **Day 3 / STRUCTURES** · parts `videos/prog-basics-23-stacks/`
… `videos/prog-basics-33-doubly-linked-lists/`. Written layer: `writing/prog-basics/pieces/23-*.md` …
`33-*.md`. Manifest: `writing/prog-basics/BATCH-day3.md`. Worker packet: `WAVE3-PACKET.md`.

**Inherits `series-bible-day2.md` in full except where this file names an override**, and Day 2
inherits Day 1. Nothing here re-argues audience, register, the five-frame shape, the ceiling, or the
production line. Read Day 2 § 0-§ 7 once; this file adds only Day 3's deltas.

Day 1's bible and `frame.md` v2, Day 2's bible, `frame-day2.md` v2.1, `caption-skin-day2.html` and
every `videos/prog-basics-01..22/` project are **read-only to this run**: their renders are proof of
their own sources (known-traps § 15).

The visual authority for this tranche is **`frame-day3.md` (v3.0)** — copy it into each project as
`frame.md`. It restates the Day 2 numbers a Day 3 worker needs (palette, ramp, ground, canvas,
primitives, G2/G2b/G3/G4/G5/G6/G7/G8 geometry, the § 14 carrier findings) and then adds G9-G15.
**A Day 3 worker should not need to open `frame-day2.md`.** Where Day 2 and Day 3 disagree, Day 3 wins
for parts 23-33 and Day 2 stays the authority for parts 12-22.

---

## 0. What is decided and what is not

**Collapsed by the user.** The eleven hooks, explanations, examples and CTA mechanics are pre-authored
in `150 Dev Shorts 14-Day Production Plan and Scripts (EN + Syrian Arabic).md` **lines 408-484**.
`content-strategy`, `marketing-ideas`, `marketing-council` and the angle pass of `copywriting` are
**not** run: there is nothing to choose. Same treatment as Day 1 § 0 and Day 2 § 0 — `copy-editing`
for rhythm and spoken delivery, the "No AI Tells" blacklist, `social` for caption/hashtag/pinned
mechanics, and an interpreter run for truth. Hooks and CTA mechanics are the user's verbatim words.
Lines 485-563 (Syrian Arabic) are **queued, not authorized**: not read into any Day 3 artifact, not
translated, not scheduled.

**Not a brief for hand-drawn or filmed footage.** The plan's Day 3 focus line ("draw each structure by
hand or on a tablet") is the user's own creator prep advice, the same kind Day 4's "whiteboard day"
line is. It does **not** authorize hand-drawn art, filmed paper, a tablet capture or any footage.
These are HyperFrames compositions on the bench identity, like Day 1 and Day 2. The one thing the line
*does* carry into the frames: the structures must read as **drawn objects with a few countable parts**,
not as dashboards.

**Decided by the user at the gate on 2026-11-01, before any build. These three are locked.**

1. **Design the new marks, and there is NO carrier wave.** The user knowingly accepted rework risk in
   exchange for firing all eleven workers at once. Day 2's bible could say "nothing in Day 2
   re-derives the look" because 14, 21 and 22 proved G6/G7/G8 first. Day 3 cannot. The consequence is
   load-bearing on this file: **every new mark is fully derived once, here and in `frame-day3.md`
   § 5-§ 6** — geometry in px, colour role, motion contract, the existing atom it is built from and a
   named clone source — before a worker starts. Eleven divergent trees is the failure mode this is
   trading against, and an under-specified mark is what causes it.
   Second consequence: **the no-carrier rule.** Since nothing is proven before it is copied, any worker
   whose new-mark geometry does not survive its own snapshots must **report the failure loudly**, not
   invent a quiet variant. A silent variant is how eleven films become eleven looks.
   Genuinely reusable from Day 2, do not rebuild: **G6 call-stack chambers → part 23** (a pile is G6
   without the staircase); **G7 node chain → parts 24 and 33** (33 adds the back cell and the second
   connector); **pb-03's / pb-21's row of boxes → part 25's buckets and part 26's membership row**;
   **G8 direct-address chrome → 26 and 31, copied verbatim from pb-14** (bowl: chrome never fades,
   REC dot is `--muted`, brackets at y 932→1004).
   Genuinely new: tree hierarchy (27) — which 28 BST, 29 heap and 31 trie all inherit rather than
   redraw; graph nodes+edges (30); the hash jump (25) and the set probe (26); the counted-halving
   field (28); the priority service lane (32); the back-pointer (33).
2. **Big-O: say it, never write it.** Day 2 § 2's absolute rule (never say *or* write `O(1)`/`O(n)`;
   show a counted walk) is **amended, narrowly**: the voice may say **"log n" at most once**, and only
   in **parts 28 and 29**, inside the user's own hedged sentences ("if the tree stays balanced, a
   lookup takes about log n steps"; "insert and remove take log n"). The **screen never shows any
   Big-O notation** — no `O(`, no `log n`, no `n` standing for a count — in any part. The frame shows
   the counted walk instead. Part 28's hook is already a counted walk ("a million items in about twenty
   steps"), so its F3 **proves** it: a visible field halved 1,000,000 → 500,000 → … → 1 with a `STEPS`
   counter climbing to 20. Part 25's "constant time" stays plain speech with a direct jump on screen
   (`JUMPED 1` against `LOOKED AT 6`). "Instant" (23, 29) stays plain speech with a single motion.
3. **Length bands.** Day 2 measured 29-34s per film at Kokoro `af_heart` @ 0.93. Day 3 splits the
   band by the plan's own `[B]`/`[M]` tags:
   - **`[B]` parts 23, 24, 25, 26, 27, 30 hold 29-34s** (≈78-91 spoken words + 6.0s air).
   - **`[M]` parts 28, 29, 31, 32, 33 are allowed 34-42s** (≈91-117 spoken words), because a trie or a
     heap genuinely needs more steps to draw, and at 29s the shared trunk of three words is a blur.
   Still absolute: **nothing is ever padded with words**, and anything under 30s is **reported, not
   filled**. Permitted levers, in order (Day 2 § 12): grow F5's air first (air is shape at the loop
   point), then re-cut the frame **shape** (merge two beats carrying one idea). Never add narration,
   never shrink the other frames' air below 1.0s. Ceiling stays 54s.
   **Day 3's own rate caveat:** all eleven parts are digit-heavy ("push one, push two", "one million",
   "bucket three"). The two Day 2 carriers measured 60 words → 23.13s (**2.59 w/s**) and 91 words →
   25.98s (**3.50 w/s**), so 3.24 is a *planning average* with a real ±25% spread, and a number-heavy
   part sits at the slow end. Piece files must give **spoken-word counts after numbers are written as
   words**, both estimates (3.24 and 2.7), and always take the measured `audio_meta.json` over either.

## 1. What is new to this tranche, and why it is not cheap

Day 2 was three new marks and a clone job. Day 3 is **seven** (G9-G15) and the ideas are harder to
place: a tree is a *recursive* shape, a heap is a *rule about neighbours*, a trie is a *path that is
not a word*, a graph is a shape where **walking can fail to terminate** (30's executed proof is a cycle
walked twelve times with no end). The look does not change; what changes is that the bench has to hold
*hierarchies and networks*, not just rows and stacks.

The one economy that still holds: every new mark is assembled from already-shipped atoms — the
`.pb-chamber`, the `.g7-node` cells, the `.g7-bar` + `.g7-chev` connector, the `.f3-tag` counted chip,
the `.f3-idx` index strip, the `.f2-card` stack card. `frame-day3.md` names the atom and the
project/frame to clone for each. Nothing new is a redraw of something old.

## 2. Audience lane, register, clarity

Unchanged from Day 1 § 2 / Day 2 § 2. First-week learners, second person, dense, wry, no beat opens on
a definition, English often heard as a second language.

**Gloss bar — Day 3's list, same rule as Day 2 (glossed in the same *frame* it appears, not the next
one):** **node** (a box holding one thing), **pointer** (the address of the next box — say "where to go
next"), **edge** (the line between two nodes), **leaf** (a node with no children — the user's own line
does it), **root** (the one at the top, nothing above it), **bucket** (one slot the hash can land in),
**hash** (the arithmetic that turns a key into a position), **parent/child**, **priority**, **unique**,
**prefix** (the letters a word shares from the start), **weight** (a number on an edge). Where the
user's sentence cannot carry a gloss, the **frame** does it with a mono tag on the object
(`NODE`, `EDGE`, `SMALLER`, `LARGER`, `END`), which is what pb-22's `VALUE`/`NEXT` tags already do.

Still banned: "iterate" (Day 1), **"traverse"** (Day 2 § 2 extended to the whole series — say "walk",
"go forward and back", "read it in both directions"), "entity"/"construct", "simply/just/easy/of
course/quick tip", em-dashes on screen, beginner condescension. Notation: see § 0.2 — say "log n" at
most once, in 28 and 29 only, never write it.

**Day 3's own clarity risk:** eleven parts in a row teach eleven *nouns*. The defence is that each part
names one countable object and counts it once. If a frame has both a diagram and a chamber and a tag
lane, the diagram is the lesson and the chamber is the proof.

## 3. Copy re-cut policy (unchanged, and narrower than Day 2)

Hooks and CTA mechanics are verbatim; explain lines (F2/F3/F4) are fair game for pacing; a re-cut
**splits a line into two beats rather than shortening it**; anything that touches a writer's *sentence*
(removing a shape, replacing a word the user chose) is flagged individually.

Seven voice re-cuts and eleven screen-text constraints are in **`CORRECTIONS-day3.md`**. Day 3's copy is
leaner than Day 2's per line but *tighter* — only seven of the user's twenty-odd explain sentences
break the ≤14-word / ≤2-clause law.

**"It's not X, it's Y" rationing.** The construction is spent once across the series, on part 05's
hook (`.agents/product-marketing.md` Learnings). Day 3's copy has three natural contrast shapes, and
they are handled deliberately, not by accident:
- **32 "…the highest priority first, not the oldest"** — the only genuine violation. Re-cut (§ A). This
  one is a writer's sentence and is flagged.
- **33 "walks backwards"** (hook, verbatim) — a *direction*, not a contrast. Kept, untouched, and it is
  the reason 33's explain re-cut says "go forward and back" instead of reaching for a "not".
- **24 and 32 fairness** — 24 states fairness positively ("keeps things fair and in order"), 32 asks
  about it as a CTA. Neither needs a "not". The tranche's fairness argument is made by **32's executed
  tie-break**, not by a rhetorical shape (see § 4).

## 4. Accuracy ledger — every claim executed on this machine, 2026-11-01

Not recalled. **Python 3.13.15** (`C:/Users/AmrPC/AppData/Local/Programs/Python/Python313/python.exe`).
Node on this PATH today is **v24.15.0**, the same build Day 2's ledger cites — *not* v26.3.0 as the
dispatch brief said. Nothing in Day 3 executes JavaScript, so no part depends on it; recorded because
a quoted `node` version in a language chip would be wrong.

Executed inline (stdin heredocs) rather than as `.tmp/day3_accuracy.py`: this run's write boundary is
`writing/prog-basics/` only. Every snippet a worker may need to re-run is reproduced inside the piece
file that cites it. **Machine note for workers:** Python's stdout here is cp1252 — a snippet that
prints `→` or Arabic raises `UnicodeEncodeError`. Print ASCII (`->`), or set `PYTHONIOENCODING=utf-8`.

| part | claim as briefed | executed result | status |
|---|---|---|---|
| 23 | `push(1)`, `push(2)`, `pop()` returns 2 | `stack=[]; append(1); append(2); pop()` → **2**, `[1]` left | **confirmed, and `push` is not Python** — `[].push(1)` → `AttributeError: 'list' object has no attribute 'push'`. The API names are language-neutral pseudocode; see § 4a |
| 23 | CTA: `push 1, push 2, push 3`, then `pop` — what's on top? | popped **3**; top of stack is now **2** | **the CTA has a trap and the answer is 2** — `pop()` *returns* 3 and leaves 2 on top. Pinned comment states both, or half the comments are "wrong" answers to a question that has two numbers |
| 23 | empty pile | `[].pop()` → `IndexError: pop from empty list`; `deque().pop()` → `IndexError: pop from an empty deque` | real, off-screen → reply thread only |
| 23 | function calls use stacks | `sys.getrecursionlimit()` → `1000`; part 15 already shipped `RecursionError: maximum recursion depth exceeded` | **callback, not a new claim.** 23 may show the DEPTH 1000 chip; it must not re-raise the error (that is 15's frame) |
| 24 | `enqueue(A)`, `enqueue(B)`, `dequeue()` returns A | `deque(); append('A'); append('B'); popleft()` → **'A**, `['B']` left | confirmed |
| 24 | **the wrong end** | `['A','B'].pop()` → **'B'** — a list's `pop()` serves the *back*, not the front | **the trap this part exists to prevent.** Screen constraint § 4b: 24's chamber is `deque`, and the `list.pop()` counter-example goes in the pinned comment, never on the frame (it would look like the part disagreeing with itself) |
| 24 | empty queue | `deque().popleft()` → `IndexError: pop from an empty deque`; `[].popleft()` → `AttributeError: 'list' object has no attribute 'popleft'` | real, reply thread |
| 25 | `ages = {'Sara': 25}`, `ages['Sara']` → 25 | **25** | confirmed as briefed |
| 25 | "a hash function turns the key into an array position" | `hash('Sara')` returned `3665690163685261309`, then `4748693981889467389`, then `-5781353187566291885` on three runs. `sys.flags.hash_randomization` → **1** | **contradicts any hash number on screen.** String hashes are randomised per process, so **no `hash(...)` value may ever appear on screen**, and the bucket a key lands in is a *diagram position*, not executed output. Concept stands; the number does not. § 4b |
| 25 | "so buckets are laid out like that row of boxes" | `list({'Sara':25,'Omar':30,'Lina':19,'Amr':40}.keys())` → `['Sara', 'Omar', 'Lina', 'Amr']` — **insertion order**, not hash order | CPython dicts preserve insertion order. Screen must not claim the bucket row is Python's memory layout. Same class of constraint as Day 2's "side by side in memory" (pb-21) |
| 25 | "lookup jumps straight to the answer" | `'Sara' in d` → `True`; `len(d)` → 4 | confirmed as concept; counted on screen as `JUMPED 1` vs `LOOKED AT 6` |
| 25 | missing key | `ages['Zeyad']` → `KeyError: 'Zeyad'` | **real, and deliberately off-screen** (§ 4c colour law: Day 3 ships zero coral) |
| 26 | `set([1,2,2,3])` gives `{1, 2, 3}` | repr is exactly **`{1, 2, 3}`**; `len(set([1,1,2,3]))` → 3 from 4 in | confirmed as briefed. **But** `{5,3,100,1,7,22}` iterates as **`[1, 3, 100, 5, 22, 7]`** — not sorted. The small-int case only *looks* sorted; that counter-example is deterministic across runs, so it is the honest second number on screen |
| 26 | "no guaranteed order" | string sets are worse: `list({'bb','aa','cc'})` came back `['bb','cc','aa']`, `['cc','bb','aa']`, `['aa','bb','cc']` on three runs | true, and **never put a string set's order on screen** — it is not reproducible, and the renderer seeks |
| 26 | "adding the same value twice does nothing" | `{1,2}.add(2)` → `{1, 2}`, len 2 | confirmed |
| 26 | CTA challenge: common items of two lists with sets | `set([1,1,2,3]) & set([2,2,3,9])` → **`{2, 3}`**; `set(a).intersection(b)` → same | confirmed. Edges the pinned comment must carry: empty or no-overlap → **`set()`** (not `{}`, not an error); and `set(a) & set(b)` **de-duplicates the answer**, so `[1,1,2]` vs `[1,2,2]` gives `{1, 2}` |
| 26 | set anatomy | `{[1,2]}` → `TypeError: unhashable type: 'list'`; `set()['x']` → `TypeError: 'set' object is not subscriptable` | reply thread: "you cannot put a list in a set", "a set has no position, so there is no `set[0]`" — both real, both off-screen |
| 27 | CTA: root with 2 children, each with 2 more — how many leaves? | built it: **leaves 4**, **nodes 7**, **edges 6**, **levels 3** | confirmed. Edge case the pinned comment must give: **a lone root is 1 leaf** (it has no children) — that is the answer some will argue, and the level-vs-edge off-by-one (3 levels, 2 edges deep) is the other |
| 27 | `root → (left, right)` | not Python; a real class `repr` was built to render `root -> (left, right)` | **diagram, never a chamber** (§ 4d) |
| 27 | "folders, HTML pages, org charts are trees" | not executable here as a claim about DOM/org charts | **chips, never chambers** (Day 2 § 13's `nil` precedent, extended) |
| 28 | root is 8, search 3: go left, then left again | inserting `8,4,12,3,6` gives root 8, left 4, right 12; find(3) path **8 → 4 → 3** | **confirmed as a shape, contradicted as a count**: the voice's two *turns* visit **3 nodes**. The `STEPS` counter counts nodes (3), the voice says "left, then left". § 4b; the pinned comment must own this or the comments will |
| 28 | "a million items in about twenty steps" | `ceil(log2(1_000_000))` → **20**; `2**20` → **1048576**; floor-halving 1,000,000 reaches 1 through **exactly 20 values** (`1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61, 30, 15, 7, 3, 1`) — i.e. 19 halvings, 20 things looked at | **the hook stands and G14 is fully executed.** The field must show all 20 rows, `STEPS` counting *looks* (1→20); "19 halvings" is the other correct number and belongs in the pinned comment. `15625 → 7812` is a **floor** (the odd item is the one you just read) — tag it once on row 7 |
| 28 | CTA: insert 1,2,3,4,5 in that order | degenerate tree: every node has **only a right child**, **no left child anywhere**, 5 levels, and `find(5)` visits **5 nodes**. Balanced insertion `3,1,5,2,4` → `find(5)` visits **2** | **that IS the answer and the tranche's best joke**: you just rebuilt part 22's linked list. Pinned comment says it plainly and adds the fix's *name* (a self-balancing tree) without notation |
| 29 | min-heap `[1, 3, 2, 7, 5]`, root 1 | `heappush` of `1,3,2,7,5` in that order → **exactly `[1, 3, 2, 7, 5]`**; invariant check `parent ≤ children` → **valid** | **confirmed as briefed — and it is order-dependent.** `heapify([7,5,3,1,2])` → **`[1, 2, 3, 5, 7]`**, a different array for the same numbers, also valid. `[1,2,3,7,5]` and `[1,3,2,5,7]` are valid too. Screen says "one build order gives this", never "the heap looks like this" |
| 29 | "every parent is smaller than its children" | index 1 = **3**, index 2 = **2** — both children of 1, and the left is *bigger* | **siblings are not ordered.** This is the part's real lesson and it is executed: the mint/amber tags go on `parent ≤ child`, never on left-to-right reading order |
| 29 | "the smallest sits at the top, grab it instantly" | `heappop([1,3,2,7,5])` → **1**, remaining **`[2, 3, 5, 7]`**, sift-down took **1 swap**; `h != sorted(h)` → **True** | confirmed for the **root only**. The heap array is not sorted, and the screen must not imply it is (a sorted row of boxes would teach 29 wrongly and 21's lesson second-hand) |
| 29 | "insert and remove take log n" | a 5-node heap is **3 levels**, so the longest path down is **2 edges** → `PATH 2` on screen | the one permitted "log n" for 29, with the counted path beside it |
| 29 | empty heap | `heappop([])` → `IndexError: index out of range` | reply thread |
| 29 | max-heap | `heapq` is min-heap only; negating priorities works: `(-9,'urgent')` pops before `(-5,'low')` | **chip** (`MIN-HEAP` / `MAX-HEAP` labels, 29's re-cut), and the negate trick is 32's reply-thread fact |
| 30 | `A → B`, `B → C`, `A → C` | `g = {'A': ['B','C'], 'B': ['C'], 'C': []}` — **3 nodes, 3 edges**; `g['A']` → `['B','C']`; `'C' in g['A']` → `True`; `'A' in g['B']` → **False** | confirmed, and the last cell is the gloss for "direction": **B does not reach A** |
| 30 | "edges can have weights" | `w['A']['B']` → **7**; `A→C` direct **2** vs via B **11** | confirmed — a real best-route pair, executed, safe on screen |
| 30 | "find the best route problems are graph problems" | with a visited set BFS visits `['A','B','C']` once; on `A→B→C→A` **without** one, the walk is `A → B → C → A → B → C → A → B → C → A → B → C` and never stops | **the part's best executed beat, and part 12's callback** — a graph can have cycles, so walking needs a `visited` set or you get the infinite loop. Screen: the loop, then the set |
| 30 | "a tree is not a graph" — *not claimed*, but a commenter will | `{'root': ['L','R'], 'L': ['R'], 'R': []}` gives **two ways to reach R** — which is exactly what a tree forbids | the pinned comment must concede it: **a tree is a graph** with one path between any two nodes and no cycles |
| 31 | `car`, `cat`, `can` share `c → a` | trie of those three: root has one child `c`; `c` has one child `a`; `a` has **`n`, `r`, `t`** → **5 letter nodes** (+ the root, + 3 end markers) | confirmed exactly. `completions('ca')` → `['can','car','cat']`; `completions('d')` → **`[]`** |
| 31 | the trie's real trap | path `'ca'` exists → **True**, but `'ca'` is a word → **False** | **this is the mark** (`END` dot on the nodes that are actually words), and it is the reason a trie is not "just a tree of letters". Executed; safe on screen |
| 31 | CTA: which shares a path with `dog` — `dot` or `cat`? | trie of `dog, dot, cat`: `dog`~`dot` share **2 letters (`do`)**, `dog`~`cat` share **0** | **answer: `dot`, and it shares two, not one.** `completions('do')` → `['dog','dot']`. Pinned states the assumption (sharing starts at the root) and the no-match edge (share 0 → they hang off different children of the root) |
| 32 | `push('low',5)`, `push('urgent',1)`, `pop()` → `'urgent'` | `heappush((5,'low'))`, `heappush((1,'urgent'))`; first `heappop` → **`(1, 'urgent')`** | confirmed as briefed — **and note the convention**: smaller number = higher priority. Not universal; labelled on screen (`SMALLER = EARLIER`) |
| 32 | **what happens on equal priority** | `(1,'low')` vs `(1,'urgent')` → pops **`low` then `urgent`** — decided by **the label's spelling**, not by arrival. With `(prio, seq, label)`: **`low` then `urgent` by sequence**; and `(1,{})` vs `(1,{'x':1})` → `TypeError: '<' not supported between instances of 'dict' and 'dict'` | **the finding that feeds the debate CTA.** A plain `(priority, item)` heap is *not* fair among equals — ties break alphabetically, and unorderable items crash. `collections.deque`/a sequence counter is the fix. This is the pinned comment's evidence and 32's F3 counted beat |
| 32 | "usually built on a heap" | true, and 29 already shipped it — 32's F2 is **29's tree with a service-order lane bolted on** | callback, not a new claim |
| 32 | "schedulers, Dijkstra, notification systems" | not executable here | **chips, never chambers**, and `Dijkstra` gets a mono gloss tag `SHORTEST PATH` on frame (gloss law § 2) |
| 33 | `None ⇄ A ⇄ B ⇄ C ⇄ None` | dict-node chain: forward **`A -> B -> C`**, backward **`C -> B -> A`**, `head['prev'] is None` → **True**, `tail['next'] is None` → **True** | behaviour confirmed. **`⇄` is not code and never enters a chamber** — it is a diagram glyph, and the shipped font set's coverage of U+21C4 was *not* verified (no `fontTools` here). Draw two one-way CSS connectors offset ±7px instead (§ 4d) |
| 33 | "delete a node without searching for the one before it" | `b['prev']['next'] = b['next']` ; `b['next']['prev'] = b['prev']` → **2 assignments**, then forward `A -> C` and backward `C -> A` both still intact | confirmed, and the two-assignment count is the on-screen number (`2 CHANGES`) against part 22's one |
| 33 | CTA: "half of how an LRU cache works" | `OrderedDict` a,b,c → `move_to_end('a')` → order **`['b','c','a']`**, victim **`b`**; `popitem(last=False)` → **`('b', 1)`**. `lru_cache(maxsize=2)` after calls 1,2,3 → `CacheInfo(hits=0, misses=3, maxsize=2, currsize=2)`; then asking 2 → **hits=1** | **confirmed as behaviour, and "half" is literally right**: the ordered chain is one half, **part 25's hash map is the other**. What is *not* executable here is how CPython builds it — `functools._lru_cache_wrapper.__doc__` does **not** mention a linked list — so "the standard library's cache is a doubly linked list" is a **documentation claim: chip, never chamber, and never in the pinned comment as fact** |
| 33 | "the cost is extra memory for the second pointer" | deliberately **not measured**: `sys.getsizeof` compares *containers* (dict vs tuple), not pointers, and would print a number that teaches the wrong thing | **screen constraint**: count fields, never bytes — a third cell in the node, tagged `+1 POINTER`. No `getsizeof` on any frame |

### 4a. The labelling rule Day 3 needs and Day 2 did not

Day 2's chambers were always real Python. Day 3's user copy speaks a **language-neutral API**:
`push`, `pop`, `enqueue`, `dequeue`, `root → (left, right)`, `None ⇄ A ⇄ B ⇄ C`, `push('low', 5)`.
`push` is not a Python list method (executed above), and `⇄` is not code at all. So:

- **A diagram may use the user's API names.** Plate labels `PUSH`, `POP`, `ENQUEUE`, `DEQUEUE`,
  `FRONT`, `BACK`, `TOP`, `ROOT`, `LEAF`, `EDGE`, `NEXT`, `PREV` are fine — they name the *shape*.
- **A `main.py` chamber may only show code whose output was produced here**, and it must show the
  Python *equivalent*, not the pseudocode. `stack = []` / `stack.append(1)` / `stack.append(2)` /
  `stack.pop()` → `2` is a legal chamber; `push(1); push(2); pop()` in a `PYTHON`-chipped chamber is
  **a lie** — a learner types `push` into Python and gets `AttributeError`.
- Where a chamber shows the Python equivalent of a pseudocode API, each line gets a **mono `--muted`
  comment tag with the API word** (`# push`, `# pop`), so the diagram and the chamber teach the same
  word. This is how Day 3 keeps § 0.1's "draw the structure" promise without faking output.
- Any fragment that cannot be executed at all (folders as trees, DOM, org charts, Dijkstra, Go's
  `nil`, CPython's cache internals) is a **chip, never a chamber**.

### 4b. Counted-beat honesty (the Day 3 version of `MOVED 4`)

Every part gets **one counted pair**, and the two numbers must be counted the same way. Locked here so
eleven workers do not each pick a convention:

| part | tag A | tag B | how it is counted (executed) |
|---|---|---|---|
| 23 | `PUSHED 2` | `POP = 2, TOP = 1` | one motion per operation, on **F3's** two-push example (the user's). The CTA's three-push case (`POP = 3 / TOP = 2`) is **pinned-comment only** — it must not be drawn, or F5 answers the quiz |
| 24 | `SERVED 1` | `MOVED 0` | the marker travels; **boxes never slide** (pb-22's discipline) |
| 25 | `JUMPED 1` | `LOOKED AT 6` | 6 buckets: one hop vs reading each |
| 26 | `ADDED 2` | `KEPT 2` | a refused duplicate: two `add` calls, one result |
| 27 | `LEAVES 4` | `NODES 7` | both from the executed tree |
| 28 | `STEPS 3` (find 3 in the 8-root tree) / `STEPS 20` (the field) | `DEGENERATE 5` vs `BALANCED 2` | `STEPS` **always counts nodes visited**, never turns. Turns are shown by arrowheads, not a number |
| 29 | `ROOT 1` | `PATH 2` | root is the value; PATH is edges down = 3 levels − 1 |
| 30 | `EDGES 3` | `WALKED 12` | 12 visited the cycle 4× and did not stop; the `visited` set version reaches `3` and stops |
| 31 | `SHARED 2` | `BRANCHES 3` | `c → a` is 2 shared letters; `a` forks to `n`, `r`, `t` |
| 32 | `FIRST 'urgent'` | `TIES BY SPELLING` | executed: `(1,'low')` beat `(1,'urgent')` |
| 33 | `2 CHANGES` | `WALKS BACK` | two assignments delete B; forward and back both still read |

### 4c. Colour law for this tranche — **zero coral, decided**

`--err` `#FF6B5A` means "an error the interpreter actually raised" and Day 3's copy raises **none**:
every one of the user's eleven examples is a happy path. Real errors exist on this machine for almost
every part (`KeyError`, `IndexError`, `TypeError`, the `dict`-tie crash) — and none of them belongs on
a Day 3 frame, because importing an unbriefed error would change what the part teaches, which is
exactly what § 1's "never paint a wrong idea coral for drama" rule protects.

So: **all eleven Day 3 parts ship with zero coral.** Every real error in the table above is
reply-thread or pinned-comment material. `frame-day3.md` § 7 restates this as a hard gate rule so a
worker cannot "find" a use for it, and a Day 3 render with a coral pixel is a finding, not a taste
disagreement. This also means Day 3 cannot borrow pb-15's overflow beat or pb-17's crash chamber.

### 4d. Chips, diagrams, chambers — the three permitted forms

| form | may contain | never contains |
|---|---|---|
| **chamber** (G3, ≤4 code lines + terminal) | Python executed here, single quotes, ligatures off | pseudocode APIs, `⇄`, invented output, hash numbers |
| **diagram** (G9-G15) | the user's API words as plate tags, arrows as CSS bars, executed numbers as `--value` | SVG in a scaled container, glyphs whose font coverage is unproven (`⇄`), a claimed internal layout |
| **chip** (mono `--muted` name tag) | `nil`, `HTML`, `FOLDERS`, `ORG CHART`, `DIJKSTRA`, `LRU CACHE`, `MIN-HEAP`, `MAX-HEAP` | output, a number, a colour role |

## 5. Distribution note — the mechanic adjacency, and the publish order

Day 3's mechanics: **Quiz 23, 27, 28, 31** · **Tag 24** · **Save 25, 29, 33** · **Challenge 26** ·
**Debate 30, 32**. In badge order that collides once — **27 then 28 are both Quiz** — and it repeats a
*shape* four times (27, 28, 29, 31 all draw a G11 tree), which is Day 3's version of Day 2's
two-direct-address-parts-adjacent problem.

**G8 direct address is assigned to exactly two parts: 26 (Sets) and 31 (Tries).** Chosen because 26's
diagram is the tranche's smallest (a row that refuses a duplicate — it is G10's probe, reused) and a
Challenge lands better addressed at you, and because 31's hero is one five-node still whose trunk reads
fine inside G8's chrome (pb-14 already ran a descending G6 stack *inside* G8 frames, so G8 + diagram is
precedented). 26 and 31 are non-adjacent in badge order and stay non-adjacent in the publish order.
Both copy pb-14's chrome verbatim; neither may put coral anywhere (§ 4c).

**Publish order (ids and badge numbers never change — the badge carries the topic number):**

`23, 26, 24, 27, 25, 28, 30, 31, 32, 29, 33`

Why, checked pair by pair: no two adjacent parts share a **mechanic** (Q,Chal,Tag,Q,Save,Q,Deb,Q,Deb,
Save,Save — the only repeat-adjacent pair is 29/33, both Save, and they differ in every other axis);
no two adjacent parts share a **tree shape** (27 at slot 4, 28 at 6, 31 at 8, 29 at 10 — separated by
25, 30 and 32); the four Quizzes land at slots 1, 4, 6, 8; and the two G8 parts land at slots 2 and 8.
The one accepted repeat is **32 then 29** (both heap-family) at slots 9-10: 32's hero is the service
lane with two tuple chips, 29's is the array↔tree binding, so the frames do not read as the same shot.
It is named here rather than hidden, and breaking it costs a Save/Save or a Quiz/Quiz adjacency.

## 6. Production-line rules for this tranche

Day 1 § 12 and Day 2 § 6 apply verbatim. Load-bearing, restated because they changed today:

1. **No carriers. All eleven start at once.** Replaces Day 2 § 6 rule 1. `frame-day3.md` carries the
   whole derivation; a worker who finds a mark's geometry unworkable **reports it and stops on that
   frame**, it does not invent a variant. The dispatcher reads eleven reports and reconciles.
2. **One worker per project** (known-traps § 16: three projects in one pass = 26M tokens, zero pixels).
   Frame authoring may be split one worker per frame if the dispatcher chooses.
3. **Read-only to this run:** `.agents/**`, `studio/**`, `writing/prog-basics/*` (Day 1/Day 2 files
   included — you may read and copy them, never edit), every `videos/prog-basics-01..22/` project,
   `frame-day2.md`, `caption-skin-day2.html`, and the Day 3 plan's Arabic lines 485-563.
4. **No `preview --background` in parallel runs.** `snapshot --at` only, and read the PNGs.
5. **Batch the free gates once, campaign level:**
   `node studio/tools/studio.mjs batch verify cues assemble check --campaign prog-basics`
   — it matches on `series:`, so Day 3 joins the same batch. **Day 1's 11 and Day 2's 11 are already
   rendered and clean; never "fix" them** (their renders belong to their own bytes, known-traps § 15).
   Expect the batch to walk 33 projects: the run is long, and a per-project failure in an old part is
   not your finding.
6. **Re-verify at the moment of the decision.** A green `check` an hour old is not evidence; three
   defects shipped past a passing `check` in this workspace.
7. **Frame-authoring rules** — all automated by `studio verify`, all previously shipped past a green
   `check`: no `text` tween (no TextPlugin), no `letterSpacing`/flex-child width tween, class as well
   as id on every animated element, `inline-block`/block/flex on anything moved, `immediateRender:
   false` on delayed `fromTo`, no wall clock, no randomness, no fetch.
8. **New to this tranche (the places a worker can break geometry):** elbow connectors on G11; the
   two parallel connectors on G13; graph edge crossings on G12; the 20-row field on G14; and the
   bucket row on G10, which must not be labelled as Python's memory layout (§ 4).

## 7. Queued, not authorized

Publish or schedule of any kind · the Arabic (عامية مصرية / Syrian) pass for either tranche · blog
variants · BGM/SFX · any media-use or network asset call · Day 4 topics (34+: sorting, recursion
depth, Big-O proper — where § 0.2's "log n" allowance does **not** carry forward without a new
decision) · any edit to a Day 1 or Day 2 project, bible, `frame.md`, or render.

Three proposed Learnings rows sit in `LEARNINGS-PROPOSALS.md`. **This run has no authority to bump
`.agents/product-marketing.md`'s version** (it is v3, and its changelog makes each row a version
decision), so nothing is written there.
