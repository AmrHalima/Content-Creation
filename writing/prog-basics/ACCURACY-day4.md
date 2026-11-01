# prog-basics — ACCURACY LEDGER, DAY 4 (parts 34-44 · ADVANCED STRUCTURES AND BIG O)

Every claim below was **executed on this machine**, not recalled. This is the only
token source for numbers and printed strings in parts 34-44.

- Python `3.13.15 (tags/v3.13.15:4061bc4, Aug 5 2026, MSC v.1944 64 bit (AMD64))`
- node `v24.15.0`
- Probes: `G:\Content Creation\writing\prog-basics\probes-day4\` (12 files). Captured
  stdout of each run is saved beside it as `out-<probe>.txt`.
- Re-run everything:
  `cd "G:\Content Creation\writing\prog-basics\probes-day4" && for f in p34_circular_buffer p35_bloom_filter p36_lru_cache p37_walk p38_hash p39_capacity p40_run p41_growths p42_time_space p43_binary p44_bubble; do python $f.py; done && node p39_p38_js_check.mjs`

**The house rule this file exists for:** no invented output. If a number is not in
§ 2 below, it does not go on screen — run it and add the row.

## 1. Verdict totals

| verdict | rows | meaning for the builder |
|---|---|---|
| **TRUE** | 58 | put the printed value on screen exactly as written |
| **NEEDS-FIX** | 6 | the script's claim is wrong or under-determined as written. Screen the pinned value, and see `CORRECTIONS-day4.md` — the voice line is the user's and is not yours to rewrite |
| **CANNOT-SHOW** | 6 | no local evidence exists. Name/chip only, never a chamber with output, never a number |
| **total** | **70** | |

Three claims that were **technically wrong as written** (not merely unverified):
35's Bloom example without its `m`/`k`, 41's "a loop inside a loop is O(n²)", and 42's
squares cache, which measures **slower** than not caching. All three are in
`CORRECTIONS-day4.md` as proposals.

---

## 2. The ledger

### 34 — Circular buffers · probe `p34_circular_buffer.py`

| claim as the script words it | executed result | verdict | on screen |
|---|---|---|---|
| Hook: "keep only the latest 100 entries and never grow" | 250 writes into a 100-slot ring: `len(cells)` stays `100`, `count` 100, contents equal the last 100 (`line151`…`line250`) | TRUE | `250 writes · 100 slots · len stays 100` |
| "the write position wraps back to the start after reaching the end" | `tail` 0→1→2→**0**→1 across writes A,B,C,D | TRUE | tail arrow wrapping cell 2 → cell 0 |
| "New data overwrites the oldest" | the D write evicted `A` | TRUE | `evicted: A` |
| "Size 3: write A, B, C, then D overwrites A" | per-step states below | TRUE | the 4-row table |
| "It never grows or shifts" | array length 3 after 4 writes; no element ever moved index | TRUE | `never grows · never shifts` |

**Per-step states a frame can draw (executed, verbatim):**

| step | wrote | cells[0,1,2] | head | tail | count | evicted | oldest→newest |
|---|---|---|---|---|---|---|---|
| 1 | A | `A . .` | 0 | 1 | 1 | — | A |
| 2 | B | `A B .` | 0 | 2 | 2 | — | A→B |
| 3 | C | `A B C` | 0 | 0 | 3 | — | A→B→C |
| 4 | D | `D B C` | 1 | 1 | 3 | **A** | B→C→D |

`cells after the four writes, literally: ['D', 'B', 'C']`

**BUILDER TRAP (mine, caught at first read):** after step 4 the physical slots are
`D B C`, not `B C D`. Draw the slot strip as `D B C` with head/tail markers on slot 1,
and put the recency reading `B → C → D` on a separate labelled line. A frame that shows
`B C D` in the cells is showing something that never happened.

```python
SIZE = 3
class Ring:
    def __init__(s, n): s.cells, s.head, s.tail, s.count = [None]*n, 0, 0, 0; s.n = n
    def write(s, item):
        if s.count == s.n: s.evicted = s.cells[s.tail]; s.head = (s.head+1) % s.n
        else: s.evicted = None
        s.cells[s.tail] = item; s.tail = (s.tail+1) % s.n
        s.count = min(s.count+1, s.n)
r = Ring(3)
for ch in "ABCD": r.write(ch); print(ch, r.cells, "head", r.head, "tail", r.tail, "evicted", r.evicted)
```

### 35 — Bloom filters · probe `p35_bloom_filter.py`

Pinned configuration (the script states none, so the ledger does): **m = 16 bits, k = 3
hashes, `h_i(key) = zlib.crc32(bytes([i]) + key.encode()) % 16` for i = 0,1,2** — three
separate functions salted by index, deterministic across runs and machines.

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "a bit array and several hash functions" | 16 bits, k=3, functions written above | TRUE | `m = 16 bits · k = 3 hashes` |
| **"Adding 'cat' sets 3 bits"** | TRUE only for some `m`. At **m = 9 and m = 19 'cat' sets 2 bits, not 3** (two hashes land on the same bit). Example is under-determined as written | **NEEDS-FIX** → TRUE at m=16 | `bits 3, 6, 13` (3 distinct) |
| "Checking 'dog' finds one bit still 0, so it's definitely not there" | dog probes positions `[3, 6, 8]` → bit values `[1, 1, 0]` → DEFINITELY NOT | TRUE | bit **8** is the zero |
| "If it says no, the item is definitely absent" | bits are only ever set to 1, never cleared; after 5 more inserts 'cat' still probes all-1 | TRUE | `NO = certain` |
| "If it says yes, it might be a false positive" | at m=16: 1 item → 42/676 un-stored keys say MAYBE (6.2%); 4 items → 251/676 (37.1%); 8 items → 540/676 (79.9%). At m=256 with 8 items: 20/676 (3.0%) | TRUE | one row only: `6.2% at m=16, 1 item` |
| CTA "Why can't a Bloom filter give false negatives?" | provable: a negative would need a bit UNset, and nothing in the structure clears a bit | TRUE | pinned answer, one line |
| "Databases and caches use it to skip expensive lookups" | no local evidence | **CANNOT-SHOW** | name chip only |

**Bit arrays, verbatim:** before `0000000000000000` → after 'cat' `0001001000000100`
(3 of 16 set) → after 5 more inserts `1111101110111110`.

The best teaching detail in this part, and it is executed: **dog's three probes already
match 2 of cat's 3 bits** (`[3, 6]`). Only one zero is needed to say "definitely not",
because **all k must be 1** — that single fact is also the CTA's answer. Draw dog's three
arrows with two green hits and one red zero.

```python
import zlib
def positions(key, m, k=3): return [zlib.crc32(bytes([i]) + key.encode()) % m for i in range(k)]
m = 16; bits = [0]*m
for p in positions("cat", m): bits[p] = 1
print("".join(map(str, bits)), positions("cat", m), positions("dog", m),
      [bits[p] for p in positions("dog", m)])
# 0001001000000100 [6, 3, 13] [3, 6, 8] [1, 1, 0]
```

### 36 — LRU cache · probe `p36_lru_cache.py`

Hand-rolled `Node` + hash map + doubly linked list with head/tail sentinels, exactly as
the explain line describes. Front = most recently used, back = least.

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "evicts the least recently used item when it's full" | `put C` evicted **B** | TRUE | `EVICTED: B` |
| "Every read moves an item to the front" | `get A` turned `B → A` into `A → B` | TRUE | the reversal is the whole lesson |
| "Combine a hash map … with a doubly linked list" | built and run; map holds `key → node`, list holds recency | TRUE | two labelled lanes |
| "every operation runs in constant time" | a put/get touches **3 pointer fields** regardless of capacity; never a scan | TRUE, with 41's caveat: it is O(1) *average*, inherited from the hash map (see 41 row) | `3 pointer writes, no scan` |
| "Capacity 2: put A, put B, get A, then put C evicts B" | full sequence below | TRUE | table |
| CTA "What gets evicted?" | `B`; without the `get A`, the answer becomes `A` (executed) | TRUE | `B` — and the counterfactual is the reason it is a quiz |

| op | recency front→back | hash map points at | size |
|---|---|---|---|
| `put(A,1)` → room free, inserted | `A` | `{A: node(A)}` | 1 |
| `put(B,2)` → room free, inserted | `B → A` | `{A: node(A), B: node(B)}` | 2 |
| `get(A)` → hit, A moved to front | `A → B` | `{A: node(A), B: node(B)}` | 2 |
| `put(C,3)` → **FULL, evicted B** | `C → A` | `{A: node(A), C: node(C)}` | 2 |

**BUILDER TRAP:** do not build the four-op list eagerly and then print states
(`[c.put("A"), c.put("B"), c.get("A"), c.put("C")]` runs all four before the first read
and prints `C → A` four times). That is exactly what this probe did on its first run; the
fixed version performs one op, then reads. Verify your per-step plate shows **four
different states**.

### 37 — Array vs. linked list · probe `p37_walk.py`

501-node list built with `__slots__`, plus `list(range(501))`.

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "Arrays give instant access by index" | `arr[500]` → `500`, 1 pointer dereference, **0 loop iterations** | TRUE | `1 step` |
| "Access item 500: array O(1), linked list O(n)" | index 500 = **500 hops**; the 500th item = index 499 = **499 hops** | **NEEDS-FIX** (label ambiguity) | pin `index 500 → 500 hops` |
| — same, as a rule | hops == index, for a singly linked list from head (0 hops for index 0) | TRUE | `hops == index` |
| "inserts and deletes cheap once you're at the node" | splice after index 250 = 2 pointer writes + 1 new node | TRUE | `2 writes + 1 node` |
| "but finding it is slow" | reaching that node cost **250 hops** first | TRUE | `250 hops to get there` |
| "each node costs extra memory" | `Node.__slots__` = **48 bytes** vs **8 bytes** per array slot; 501 nodes = **24,048 B** vs list object **4,072 B** = **5.91×** | TRUE | `48 B vs 8 B per item` |
| "sit in one contiguous block, which CPUs love" | not measurable here; and a Python list stores **references** side by side, not the `int` objects (Day-2 §4 row for part 21 established this constraint) | **CANNOT-SHOW** | draw boxes side by side as the *concept*; nothing on screen may claim Python's internal layout |
| "For most real work, arrays win" | the part's thesis, an opinion | **CANNOT-SHOW** | as stated, no number attached |

Wall clock was also measured (`array[500]` 0.0059 s / 200k reads) and is **explicitly not
a screen claim** — it is machine-specific, and a head-pointer read measured *faster* than
the array index, which would invert the lesson if anyone printed it. Use the hop counts.

```python
class Node:
    __slots__ = ("value", "next")
    def __init__(s, v, n=None): s.value, s.next = v, n
head = Node(500)
for v in range(499, -1, -1): head = Node(v, head)
hops, cur = 0, head
for _ in range(500): cur = cur.next; hops += 1
print(hops, cur.value)                     # 500 500
```

### 38 — Hash collisions · probe `p38_hash.py` (+ `p39_p38_js_check.mjs`)

**THE TRAP, and this is the part where an eleven-year-old's tutorial would have shipped a
lie.** Five fresh interpreters, default seed:

```
hash('ab')%10 -> 9  hash('cd')%10 -> 9
hash('ab')%10 -> 4  hash('cd')%10 -> 8
hash('ab')%10 -> 5  hash('cd')%10 -> 0
hash('ab')%10 -> 3  hash('cd')%10 -> 7
hash('ab')%10 -> 0  hash('cd')%10 -> 2
distinct values seen for hash('ab') % 10: ['0', '3', '4', '5', '9']
```

Python's `hash(str)` is salted per process (`PYTHONHASHSEED`). `crc32` gave `5, 4` in all
five runs. **A builder who writes `hash('ab') % 10` into a chamber produces a different
slot on every render, and two renders of pb-38 will disagree with each other.** With
`PYTHONHASHSEED=0` it is stable (`1` and `1` — it collides, in slot 1), but any render
that forgets the env var silently changes the number, so it is not screen-safe either.

**Deterministic hash pinned for the frame** (this is the function the screen shows):

```
h(key) = sum(ord(c) for c in key) % 4          # "add the letter codes, divide by 4"
'ab' → 97 + 98 = 195 → 195 % 4 = 3
'cd' → 99 + 100 = 199 → 199 % 4 = 3
```

The script's example **survives verbatim**. `ab` and `cd` really do both land in slot 3.
A scan of five documented functions (sum-of-ord, Horner base-31, djb2, crc32, base-26)
over table sizes m = 4…64 returned **exactly one** hit: sum-of-ord at m = 4. It is the
only honest reading of the user's own example — `195` and `199` differ by 4, so they
collide precisely when `m` divides 4.

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "'ab' and 'cd' both land in slot 3" **via Python's `hash()`** | salted per process; 5 distinct values in 5 runs | **CANNOT-SHOW** | never print `hash(...)` |
| same claim under the pinned toy hash | `195 % 4 = 3`, `199 % 4 = 3` | TRUE | `ab → 3`, `cd → 3` |
| "slot 3 holds a chain: ab → cd" | chaining table, m=4, executed: slot 0 empty, slot 1 empty, slot 2 empty, **slot 3: `ab -> cd`** | TRUE | `slot 3: ab → cd` |
| "Chaining stores a small list in each slot" | each slot is a list; longest chain 2, slots used 1 of 4 | TRUE | 4 slots, 3 empty |
| "Open addressing probes for the next free slot" | same hash, **same m = 4**: `ab` home 3, 0 probes, lands 3 · `cd` home 3, **1 probe**, lands **0** | TRUE | `3 → probe → 0` |
| "Good hash functions and resizing keep collisions rare" | true of a real table; **the demo table makes collisions common** — `ef` also lands in slot 3 (`'ab':3,'cd':3,'ef':3,'hi':1,'cat':0,'dog':2`) | TRUE (screen constraint) | do not imply m=4 is rare-collision; say "our table is tiny on purpose" |
| CTA "Chaining or open addressing: which would you pick?" | opinion | — | verbatim |

Chaining and open addressing are shown with the **same function and the same table size**,
so the two strategies visibly start from the identical collision. (An earlier draft used
m = 6 for probing, which moved `cd`'s home slot to 1 and quietly broke the example.)
For reference, the same 8 words in a 100-slot table under this function:
`ab 95, cd 99, ef 3, hi 9, cat 12, dog 14, red 15, blue 24` — no collision at all, which
is the "rare" claim earned honestly.

### 39 — Dynamic arrays and resizing · probe `p39_capacity.py` (+ `.mjs`)

`sys.getsizeof` on CPython 3.13 reports the **allocated** block, so capacity is exact:
`capacity = (getsizeof - 56) / 8` (header 56 B, pointer 8 B, measured).

| n items | capacity | getsizeof | resize here? | spare |
|---|---|---|---|---|
| 1 | **4** | 88 | YES 0→4 | 3 |
| 2 | 4 | 88 | no | 2 |
| 3 | 4 | 88 | no | 1 |
| 4 | 4 | 88 | no | **0** |
| **5** | **8** | 120 | **YES 4→8** | 3 |
| 6-8 | 8 | 120 | no | 2→0 |
| 9 | **16** | 184 | YES 8→16 | 7 |
| 16 | 16 | 184 | no | 0 |
| 17 | 24 | 248 | YES 16→24 | 7 |
| 24 | 24 | 248 | no | 0 |

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "A dynamic array secretly keeps spare room" | after 1 append CPython reserves 4 slots → **3 spare**; appends 2, 3, 4 allocate nothing | TRUE | `4 slots for 1 item` |
| "Capacity 4, append a 5th item, and the capacity grows" | 4 appends → capacity **4** exactly; 5th append → **8** | TRUE | `4 → 8` |
| "it allocates a bigger block, copies everything over" | the n=5 resize copies **4** elements | TRUE | `copy 4 items` |
| "One resize is expensive, but spread across many appends the average cost stays constant" | 64 appends: **8 resizes**, **176 elements copied**, **2.75 copies per append** | TRUE | `176 copies / 64 appends = 2.75` |
| "The growth factor depends on the language" | TRUE but understated. Within CPython alone the ratio is **x2.000, x2.000, x1.500, x1.333, x1.250, x1.300, x1.231** — non-monotonic, **no single factor** | **NEEDS-FIX** | `x2 for the resize you show` |
| a **JS** capacity number | not obtainable: `a.capacity` undefined, `Reflect.ownKeys` gives indices + `length` only | **CANNOT-SHOW** | keep the language hedge as words, never as a number |

Two hard constraints from this part:

1. **Build the list with `.append()`.** Capacity via `list(range(n))` is a *different*
   sequence (measured: `list(range(1))` has capacity 2, one append has capacity 4). The
   part is about `append`, so every plate number must come from an append-built list.
2. **Print no growth formula.** This probe first cross-checked the textbook
   `newsize + (newsize>>4) + (newsize < 9 ? 3 : 6)` against reality and it **misfit**
   (predicted 15 at n=9, measured 16; again at n=17). The measured sequence
   `4, 8, 16, 24, 32, 40, 52, 64` is the authority. A guessed formula printed as fact is
   the exact defect this ledger exists to prevent — and note the ~1.125 asymptote is
   **not** something these measurements demonstrate, so it does not go on screen either.

### 40 — Tuples vs. lists · probe `p40_run.py` (4 chambers, each run as a FILE)

Tracebacks were captured from fresh interpreters running separate chamber files, because a
traceback raised inside a runner's own `try/except` would print the *runner's* line, not
the lesson's. Text below is verbatim stderr.

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "`point[0] = 9` raises a TypeError" | see block below | TRUE | exact block |
| "A tuple is immutable: once created, it's fixed" | `point` stays `(3, 4)`, `len` 2 | TRUE | `point = (3, 4)` unchanged |
| "A list is mutable: add, remove, change items" | `nums[1] = 99` → `[10, 99, 30]` · `append(40)` → `[10, 99, 30, 40]` · `remove(99)` → `[10, 30, 40]` | TRUE | three lines |
| "A tuple of hashable items can even be a dictionary key" | `location[(3,4)] = "the point at 3, 4"` → prints `the point at 3, 4`, dict repr `{(3, 4): 'the point at 3, 4', (0, 0): 'origin'}` | TRUE | that repr |
| CTA "Can a list be a dictionary key? Yes or no." | `d[[1, 2]] = 3` → **No**, exact message below | TRUE | `NO` + block |
| bonus nuance (a commenter will raise it) | `hash(((1, 2), [3]))` → `TypeError: unhashable type: 'list'` — a tuple is hashable only if **its items are** | TRUE | pinned-comment line |

**Verbatim block 1 — the part's own example** (`--err` coral, legitimate: interpreter-raised):

```
Traceback (most recent call last):
  File "main.py", line 4, in <module>
    point[0] = 9
    ~~~~~^^^
TypeError: 'tuple' object does not support item assignment
```

**Verbatim block 2 — the CTA:**

```
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    d[[1, 2]] = 3
    ~^^^^^^^^
TypeError: unhashable type: 'list'
```

The `~~~~~^^^` row is real (PEP 657 fine-grained locations, Python 3.11+) and **the tilde
and caret counts differ between the two blocks** — copy them, never type them from
memory. `line 4` / `line 3` are the true line numbers of the chamber files (they carry a
leading comment). If a frame's chamber has a different line count, regenerate with
`python p40_run.py`; do not hand-adjust the number.

### 41 — Big O notation · probe `p41_growths.py`

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "Big O describes how runtime grows as input grows" | definition; the loop counters below are the operational meaning | TRUE | — |
| "O(1) is constant" | counter `count_constant(n)` = **1** at every n | TRUE | `1` |
| "O(n) grows in a straight line" | `n`: 1, 2, 4, 8, 16, 32, 64 → same | TRUE | the column |
| **"O(n²) shows up with nested loops" / "a loop inside a loop is O(n²)"** | n×n at 64 = **4096** steps, but a loop inside a loop with a **fixed inner of 3** = **192**. Doubling n: n×3 → `96 → 192` = **x2.0 (linear)**; n×n → `1024 → 4096` = **x4.0** | **NEEDS-FIX** — false for the very common `for i: for j in range(3)` shape | `x4` vs `x2` side by side |
| "O(log n) halves the work each step" | TRUE as behaviour. Counting caveat: a halving `while` loop runs **floor(log2 n)+1** times (n=8 → 4 iterations, log2 8 = 3) | TRUE (+convention note) | pick one convention per frame, never both |
| "It ignores constants and focuses on the trend" | see 41.5: a lookup is 1 hash call at 10 keys and at 1,000,000 | TRUE | — |
| chart values | full table below | TRUE | table |
| CTA "Big O of looking up a key in a hash map" | **O(1) average, O(n) worst** | TRUE | pinned answer, both halves |

**Exact, plottable, no fudging:**

| n | O(1) | O(log n) | O(n) | O(n log n) | O(n²) |
|---|---|---|---|---|---|
| 1 | 1 | 0 | 1 | 0 | 1 |
| 2 | 1 | 1 | 2 | 2 | 4 |
| 4 | 1 | 2 | 4 | 8 | 16 |
| 8 | 1 | 3 | 8 | 24 | 64 |
| 16 | 1 | 4 | 16 | 64 | 256 |
| 32 | 1 | 5 | 32 | 160 | 1024 |
| 64 | 1 | 6 | 64 | 384 | 4096 |

(If the chart animates the *loop* instead of the formula, `O(log n)` reads 1,2,3,4,5,6,7 —
one higher, per the convention note above.)

**The CTA, measured.** A `Counting` key class tallies every `__hash__`/`__eq__` a dict
performs, counters reset per lookup:

| keys | lookup of the SAME object | lookup of an EQUAL new object |
|---|---|---|
| 10 | 1 hash, **0** eq | 1 hash, **1** eq |
| 1,000 | 1 hash, 0 eq | 1 hash, 1 eq |
| 100,000 | 1 hash, 0 eq | 1 hash, 1 eq |
| 1,000,000 | 1 hash, 0 eq | 1 hash, 1 eq |

Flat at one hash call and at most one equality test across a 100,000× size change — that
is the measured O(1). (A first draft of this probe printed "1 and 1" for the identity
case; the real number is **0** eq tests, because CPython short-circuits on object
identity. Fixed, and it is the kind of error this section exists to catch.)

**What "average" is hiding** — all executed, use it as the pinned comment:

1. worst case **O(n)**: a dict of 200 keys that all hash to 7 does **200 equality tests in
   ONE lookup** (50 keys → 50, 800 → 800 — linear in n, and counters reset *after* the
   build so this counts the lookup alone);
2. it assumes a good hash **and** a resized table keeping the load factor low;
3. "constant" counts comparisons, not wall clock: a bigger table costs more cache misses
   per lookup even at 1 comparison. The part's own line "it ignores constants" is exactly
   why the answer is O(1) while a real lookup is not free.

### 42 — Time vs. space complexity · probe `p42_time_space.py`

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "Time complexity is how long code takes. Space complexity is how much memory it uses." | definitions; the pair below makes them concrete | TRUE | two labelled lanes |
| "caching results uses more memory" | squares 1..1000: **1,000 items**, container **36,952 B** + keys **28,000 B** + values **28,000 B** = **92,952 B** (90.8 KiB). Recomputed version stores **0** extra bytes | TRUE | `92,952 bytes` |
| **"but saves time"** | for *this* example it does not. 200,000 accesses: cached **30 ns each** vs recomputed **8 ns each** → the cached path is **4.0× SLOWER** | **NEEDS-FIX** | print the BYTES pair, not a stopwatch |
| "They often trade off" | true when the saved work is big: an `lru_cache` over a 5,000-term sum ran **0.1 µs** cached vs **244.1 µs** recomputed (200 calls, `CacheInfo(hits=200, misses=1, currsize=1)`) | TRUE | `x2774 when the work is big` |
| "recomputing saves memory but costs time" | saves memory: always (0 B). Costs time: only when the recomputation is the expensive kind | TRUE (conditional) | say *when* |

The **container-only figure is a trap**: `sys.getsizeof(d)` = 36,952 B understates the
real cost of the cached version by ~2.5× because the dict header does not include the
1,000 key `int`s and 1,000 value `int`s. Both figures are in the probe output; **92,952
is the honest one.** Sizes are CPython-64-bit specific — label them `Python 3.13`.

Note also `getsizeof({})` = 64 B: an empty dict is not 0 bytes, so a frame that draws
"cache = 0 → 92,952" is fine but "recompute = literally nothing stored" should read
**0 extra bytes**, not 0 bytes total.

This part's example is *sound pedagogy with a false demonstration*, which is why it is a
proposal in `CORRECTIONS-day4.md` rather than a silent edit: the principle is right, the
`i*i` workload is the one workload where the trade loses. The safe screen form is
**bytes stored vs work repeated**, with the work big enough to matter.

### 43 — Binary search · probe `p43_binary.py`

| claim | executed result | verdict | on screen |
|---|---|---|---|
| Hook "one number among a billion in about 30 steps" | measured worst case over 1e9 = **30 probes**; `log2(1e9) = 29.8974`; `2^30 = 1,073,741,824 > 1e9` | TRUE | `30` |
| "Binary search works on sorted data" | on unsorted `[5,1,9,3,7]`, searching for the **present** value 1 returns **found = False** | TRUE, and dramatic | `it just says NOT FOUND` |
| "Check the middle" | probe 1: `lo 0, hi 4, mid (0+4)//2 = 2 → arr[2] = 5` | TRUE | mid box on index 2 |
| "If your target is smaller, discard the right half" | executed mirror: 5 < 7 → discard **left**, `lo = 3`. Both directions are the same rule | TRUE | the half that greys out |
| "Each step halves the search space, so it takes log n steps" | measured worst-case probes: n=5→3, 8→**4**, 1000→**10**, 1023→10, 1024→**11**, 1e6→20, 1e9→30. The closed form that matches is **⌈log2(n+1)⌉**, not ⌈log2 n⌉ | TRUE (+formula note) | show the number, not the formula |
| "the middle is 5, go right, found 7" | 2 probes total: `mid 2 → 5 (< 7)`, `mid 3 → 7 (== target)` | TRUE | **exactly 2 probe boxes** |
| CTA "about how many steps for 1,000 items?" | **10** (worst case, measured over all 1,000 values plus both miss cases); best case 1 probe | TRUE | pinned answer `10` |

**The probe table, verbatim — this is the storyboard's source:**

| probe | lo | hi | mid | arr[mid] | what happens |
|---|---|---|---|---|---|
| 1 | 0 | 4 | 2 | 5 | `< 7` → discard LEFT, `lo = 3` |
| 2 | 3 | 4 | 3 | 7 | `== target` → **FOUND** |

Your expectation was right: **2 probes, confirmed.** The script implies one move and a
discovery; a frame animating three comparisons would be inventing a step.

**⌈log2(n+1)⌉ matters** because the two formulas disagree exactly at powers of two:
n = 8 needs **4** probes but ⌈log2 8⌉ says 3; n = 1024 needs **11** but ⌈log2 1024⌉ says
10. n = 1000 is *not* a power of two, so the CTA's answer is 10 either way — a coincidence
that would teach the wrong formula if the frame showed both columns.

### 44 — Bubble sort · probe `p44_bubble.py`

| claim | executed result | verdict | on screen |
|---|---|---|---|
| "walks through the list, swapping neighbors that are out of order" | 3 comparisons, 2 swaps, every one logged | TRUE | the comparison lines |
| "The largest value bubbles to the end each pass" | `[3,1,2]`→3 locked; `[5,1,4,2,8,3]`→8 locked; `[9..1]`→9 locked; all sorted at the end | TRUE | `3`, `8`, `9` |
| **"`[3,1,2]` → `[1,3,2]` → `[1,2,3]`"** | the chain is TRUE **as the two after-swap states**. Pass-end states are `[[1,2,3],[1,2,3]]` — pass 2 changes nothing | **NEEDS-FIX** (labelling) | label `AFTER SWAP 1` / `AFTER SWAP 2` |
| "It's easy to understand but slow, O(n²)" | worst/average O(n²); **best case O(n) with the early-exit flag, O(n²) without it** (n=3 sorted: 2 comps vs 3) | TRUE (+variant note) | `n(n-1)/2` |
| "real code uses faster sorts" | n=1000 worst case: **499,500 comparisons**; `n log2 n` = **9,966** → **50×** more work | TRUE | `499,500 vs 9,966` |
| Hook "nobody uses it" | a universal negative about other people's code; the user already tags the part `Myth` | **CANNOT-SHOW** | hook verbatim, no number |

**Every comparison executed, `[3, 1, 2]`:**

```
pass 1
  compare a[0]=3 > a[1]=1 -> SWAP -> [1, 3, 2]
  compare a[1]=3 > a[2]=2 -> SWAP -> [1, 2, 3]
  end of pass 1: [1, 2, 3]
pass 2
  compare a[0]=1 > a[1]=2? no -> [1, 2, 3]
  end of pass 2: [1, 2, 3]
  no swaps in this pass -> already sorted, stop early (this variant only)
final: [1, 2, 3] | comparisons: 3 | swaps: 2
```

The script's two intermediate states are **verified TRUE**, and the honest label for them
is `AFTER SWAP`, not `PASS`. Two acceptable plates: (a) three boxes `[3,1,2] → [1,3,2] →
[1,2,3]` captioned AFTER SWAP 1 / AFTER SWAP 2; (b) pass boxes `[1,2,3]` and `[1,2,3]`,
where the *repeated* state is itself the "this is slow" lesson. What is not acceptable is
`[1,3,2] = PASS 1, [1,2,3] = PASS 2`.

**Real counts, both variants** (worst = fully reversed, best = sorted):

| n | textbook: comps / swaps | early-exit: comps / swaps | best textbook | best early-exit |
|---|---|---|---|---|
| 3 | 3 / 3 | 3 / 3 | 3 / 0 | **2** / 0 |
| 5 | 10 / 10 | 10 / 10 | 10 / 0 | **4** / 0 |
| 10 | 45 / 45 | 45 / 45 | 45 / 0 | **9** / 0 |

Worst case equals `n(n-1)/2` exactly at n = 3, 5, 10, 20, 40 (3, 10, 45, 190, 780 — all
`match True`), and swaps equal comparisons on a fully reversed input.
Doubling test: 10→20 is `45 → 190` (**x4.22**), 40→80 is `780 → 3160` (**x4.05**),
converging to x4. Use one doubling pair plus `n(n-1)/2` — never a bare `n²`.

**Two probe bugs worth recording, because both would have become bogus "corrections":**

1. A first draft checked the pass-1 largest at `a[n-passno-1]` instead of `a[n-passno]`
   and printed **"largest after pass 1 = 2 (true largest 3) → FALSE"** for all three
   inputs. The script's claim is TRUE; **the probe was wrong**, and the ledger nearly
   shipped a correction telling the user to fix a correct sentence.
2. A first draft staged a race against reversed input and printed `2,045,883x slower`.
   Reversed input is Timsort's *best* case (it detects a descending run and reverses in
   O(n)), so that ratio was an artifact of the comparison, not a fact. The portable claim
   is the comparison count (499,500 vs 9,966), which needs no stopwatch. Do not put a
   timed race for part 44 on screen.

---

## 3. Notation policy — the un-ban, decided per part

Day 2's copy rule forbade writing or saying `O(1)`/`O(n)` anywhere. **The user has lifted
the ban for Day 4 where notation is the lesson.** It is not lifted by default.

| part | is notation the subject? | allowed on screen | where | spoken in the VO line |
|---|---|---|---|---|
| 34 | no | none | — | — |
| 35 | no | none (`k`, `m` only if the plate labels them "3 hashes", "16 bits") | example plate | avoid; say "16 bits, 3 hashes" |
| 36 | references it obliquely | none; say "constant time" as words | — | — |
| 37 | **references it** | `O(1)` and `O(n)` as **two chips on the example plate only** | example plate | "big O of one" / "big O of n" |
| 38 | no | none | — | — |
| 39 | no | none; `x2` for a growth factor is arithmetic, not notation | example plate | "doubles" |
| 40 | no | none | — | — |
| 41 | **YES — the subject** | `O(1)`, `O(n)`, `O(n²)`, `O(log n)`, and `O(n log n)` if the CTA plate uses it | hook/example/curve labels/CTA | all spelled out, table below |
| 42 | **YES — the subject** | `O(1)`, `O(n)` for the two curves, and `x2774`-style measured numbers | tradeoff plate | spelled out |
| 43 | **references it** | `O(log n)` as one chip beside the halving picture; `⌈log2(n+1)⌉` **not** on screen (use `10` / `30`) | explain plate | "big O of log n" |
| 44 | **references it** | `O(n²)` and `O(n log n)` on the slow/fast plate | explain plate | "big O of n squared" / "big O of n log n" |

**Exact spoken form for every symbol allowed.** The line handed to `studio voice` must
carry the spelled text; the graphic carries the symbol.

| screen | VO text (what goes in the narration string) | read as | plain-words meaning the VO should land |
|---|---|---|---|
| `O(1)` | `big O of one` | "big O of one" | "the same work, no matter the size" |
| `O(n)` | `big O of n` | "big O of n" | "one step per item" |
| `O(n²)` | `big O of n squared` | "big O of n squared" | "a loop inside a loop over the same size" |
| `O(log n)` | `big O of log n` | "big O of log n" | "it cuts the work in half every step" |
| `O(n log n)` | `big O of n log n` | "big O of n log n" | "n steps, each costing log n" |
| `Θ(n)` | `theta of n` | "theta of n" | **not recommended on screen — see below** |
| `⌈log₂ n⌉` | — | "ceiling of log base two of n" | do not use; print `10` or `30` |
| `≤` / `≥` | `at most` / `at least` | — | never say "less than or equal to" in a short |

**Production consequence builders must not discover at the render gate:** captions come
from the VO's word timings (`studio cues` measures the spoken audio). So in parts 41, 42,
43 and 44 **the caption lane will read `big O of n squared` while the diagram reads
`O(n²)`.** That is correct and expected. Do not hand-patch the caption to the symbol — it
would desync from the measured word timings — and do not "fix" the mismatch by removing
the symbol from the diagram. If a symbol must appear *in* the caption, it has to be in the
spoken line too, which means saying it twice.

Kokoro (`am_michael`, the working English voice) will not read `O(n²)` usefully: the
superscript `²` is likely skipped entirely, and a bare `O(n)` risks "oh n". Hence the
spelled VO text above.

**On `Θ`:** technically the series is teaching tight bounds — "O(n) grows in a straight
line" is `Θ(n)` — so `Θ` is the more honest symbol. **Recommendation: do not put it on
screen.** These are `[B]`-level parts for beginners, and introducing a second asymptotic
alphabet in a 60-second short costs more clarity than the precision buys. Put it where the
beginners who care will find it: a one-line pinned comment, e.g. *"Pedants: these are
really Θ (tight bounds). Big O is an upper bound, so 'O(1) lookup' is true even when the
worst case is worse — which is the CTA's whole point."* If the user overrides this and
wants `Θ` on screen, the spoken form is `theta of n`.

---

## 4. CANNOT-SHOW register (name/chip only, never a chamber with output)

| part | claim | why it cannot be executed here |
|---|---|---|
| 35 | "Databases and caches use it to skip expensive lookups" | industry usage; no local artefact. Chip with names (e.g. "caches", "dialects"), no logo, no number |
| 37 | arrays "sit in one contiguous block, which CPUs love" | cache behaviour is not measurable as a lesson number here; and a Python list stores **references**, not the ints (Day-2 §4, part 21 precedent). Draw side-by-side boxes as the *concept* |
| 37 | the wall-clock pair (0.0059 s vs 0.0026 s / 200k) | machine-specific, and the linked **head** read measured *faster* than the array index — printing it would invert the lesson |
| 38 | `hash('ab') % 10` as a printed slot | Python salts it per process; 5 runs produced 5 different values |
| 39 | a JS array capacity number | V8 exposes nothing (`a.capacity` undefined; `Reflect.ownKeys` has indices + `length` only). The script's "depends on the language" hedge stays as words |
| 44 | "nobody uses it" | universal negative about other people's code. The user already tags the part `Myth`, so the hook is deliberately provocative — leave it, attach no number |

## 5. Notation and register notes specific to this tranche

- Parts **34-40** can keep Day 2's no-notation rule with no cost to the lesson; only 37
  and 43 need one chip, and 44 one chip.
- 41's CTA and 42's debate both *require* the plain-words gloss in the VO or the part
  becomes symbol-recitation for a `[B]` audience. The gloss column above is that text.
- The words "average case" and "worst case" must appear together in 41's CTA plate — one
  without the other is the hole a commenter will find.
