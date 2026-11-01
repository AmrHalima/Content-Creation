# prog-basics — CORRECTIONS LEDGER, DAY 4 (parts 34-44) — **PROPOSALS, PENDING APPROVAL**

> **Nothing in this file has been applied.** Every entry below touches the user's
> pre-authored wording, so each one is a *proposal* requiring an explicit yes before it
> reaches a `BRIEF.md`, a frame, or a voice line. Day 1 and Day 2 used this same ledger as
> the approval surface; the difference on Day 4 is that six claims are **technically wrong
> as written**, not merely unverified, so approving a frame without deciding these ships a
> tutorial error eleven times.

Before/after for every proposed edit to the user's pre-authored Day 4 copy. Same
discipline as `CORRECTIONS.md` (Day 1) and `CORRECTIONS-day2.md`: **hooks and CTA
mechanics are verbatim, no technical claim is silently altered, and nothing below is a
silent change.**

Authority to propose them at all: Day 1 bible § 0 scopes permitted change to "polish,
pacing, on-screen text, and technical accuracy", and `frame.md` § 9 states "Hooks and CTA
mechanics are the user's words and do not change. Explain lines (F2/F3/F4) are fair game
and are re-cut."

Every claim in this file was executed on Python 3.13.15 / node v24.15.0 for this file.
Evidence lives in `ACCURACY-day4.md` and is re-runnable from
`writing/prog-basics/probes-day4/` (12 probes + captured outputs).

**Verdict totals: 58 TRUE · 6 NEEDS-FIX · 6 CANNOT-SHOW (70 claims).** Day 2 needed zero
substantive changes. **Day 4 needs six**, and three of them change what a part teaches.

Severity scale used below: **HIGH** = an eleven-year-old learns something false;
**MEDIUM** = a learner is misled at the margin, or a commenter will catch it;
**LOW** = a labelling or precision issue that costs nothing once pinned.

---

## A. Voice/claim corrections — these change what the part says

| # | part | the script says | what is actually true | proposed replacement wording | severity |
|---|---|---|---|---|---|
| A1 | **41** | "O(n²) shows up with nested loops" and, as the example, "A loop inside a loop is O(n²)." | Only if the inner loop also runs over n. Executed: a loop inside a loop with a fixed inner of 3 does `96 → 192` steps when n doubles — **x2.0, i.e. linear**, not x4.0. `for i in range(n): for j in range(3)` is a shape beginners write constantly, and the sentence tells them it is quadratic. | Example plate: **"One loop over n items is O(n). A loop inside a loop, **both over n**, is O(n²)."** (two words added: "both over n"). Optional one-line gloss for the plate: *"inner loop fixed at 3? still O(n)."* | **HIGH** |
| A2 | **42** | "caching results uses more memory but saves time" + example "Store squares in a dictionary to avoid recalculating them." | The principle is sound; **the chosen example disproves it.** Measured 200k accesses: cached `squares[1000]` = **30 ns**, recomputing `1000 * 1000` = **8 ns** → the cache is **4.0× SLOWER**, and it costs **92,952 bytes** to buy that slowness. A dict lookup is not cheaper than one multiplication. | Keep the thesis line. Change the example's *frame*, not its subject: **"Store squares in a dictionary so you never recalculate — and only bother when recalculating is expensive."** If the user wants the numbers on screen, the honest pair is `92,952 bytes vs 0 extra bytes` (memory, exact) and the speed half shown on a workload where it actually pays (measured `0.1 µs cached vs 244.1 µs recomputed`, x2774). | **HIGH** |
| A3 | **35** | "Adding 'cat' sets 3 bits. Checking 'dog' finds one bit still 0, so it's definitely not there." | TRUE only for some filter sizes. With the pinned hash family, at **m = 9 and m = 19 'cat' sets only 2 bits**, because two of its three hashes land on the same slot — the example is silently dependent on a configuration the script never states. | Add the configuration to the same sentence: **"Our filter: 16 bits, 3 hashes. Adding 'cat' flips bits 3, 6 and 13. Checking 'dog' hits 3 and 6 — but bit 8 is still 0, so it's definitely not there."** The 2-of-3-hits detail is strictly better television than the original and needs no new claim. | **HIGH** |
| A4 | **39** | "The growth factor depends on the language." | Understated: it depends on **which resize** within one language. Measured CPython ratios in order: x2.000, x2.000, x1.500, x1.333, x1.250, x1.300, x1.231 — non-monotonic, and **no closed form printed correctly** (the textbook `newsize + (newsize>>4) + (newsize<9?3:6)` misfit at n=9 and again at n=17). | **"It doubles at first, then grows by smaller and smaller steps."** Removes no claim, removes the invitation to print one universal factor, and matches the measured table. | MEDIUM |
| A5 | **44** | "`[3, 1, 2]` → `[1, 3, 2]` → `[1, 2, 3]`" (shown as passes) | TRUE as the two **after-swap** states. But pass 2 compares one pair and changes nothing, so the pass-end states are `[1,2,3]` then `[1,2,3]`. Labelling the middle box "pass 1" and the last "pass 2" is false. | Voice unchanged. Screen labels **"after swap 1" / "after swap 2"**. If the part wants pass framing, show the repeat: **pass 1 `[1,2,3]` → pass 2 `[1,2,3]`, no swaps** — which is also the O(n²) lesson. | MEDIUM (screen only) |
| A6 | **36** | "every operation runs in constant time" | Constant *on average*, and only because the hash map is. It inherits 41's worst case: a colliding dict does 200 equality tests in one lookup (executed). | Add two words: **"every operation runs in constant time on average."** Alternatively leave the voice alone and put the caveat in the pinned comment — but not both parts claiming flat O(1) with no qualifier. | LOW |

## B. Screen-text constraints — the voice keeps the user's line, the frame gets guarded

| # | part | issue | what the screen does instead | severity |
|---|---|---|---|---|
| B1 | **38** | The script's own example is right, but **only** under a hash the script never names. Python's `hash(str)` is salted per process: five interpreters printed five different values for `hash('ab') % 10` (`0, 3, 4, 5, 9`), so a chamber that uses it shows a different slot on every render, and two renders of pb-38 disagree with each other. | Screen shows the toy function explicitly: **"our hash: add the letter codes, divide by 4."** `ab` = 97+98 = **195 → 195 % 4 = 3**; `cd` = 99+100 = **199 → 199 % 4 = 3**. The user's "slot 3" and "chain: ab → cd" then print exactly as scripted. Never put `hash(...)` on screen; `PYTHONHASHSEED=0` makes it stable but is not screen-safe either. A scan of five documented functions over m = 4-64 found **only this one** where the example survives — it is not an arbitrary choice. | **HIGH** |
| B2 | **38** | Chaining and open addressing were shown above with the same hash **and** same 4-slot table, so both strategies visibly begin from the same collision. Using a bigger table for the probing half silently moves `cd`'s home slot from 3 to 1 and the example no longer collides. | Chaining plate: slots `[empty, empty, empty, ab → cd]`. Open-addressing plate: `ab` home 3 (0 probes) → 3; `cd` home 3, **1 probe** → **0**. Same four boxes both times. | MEDIUM |
| B3 | **38** | At m = 4 collisions are common — `ef` also lands in slot 3 (`ab:3, cd:3, ef:3, hi:1, cat:0, dog:2`) — sitting right beside "good hash functions and resizing keep collisions rare". | Say the table is tiny on purpose: one plate chip **"our table is 4 slots — real tables are thousands, and stay mostly empty."** For contrast the same 8 words in a 100-slot table produce **zero** collisions (executed). | MEDIUM |
| B4 | **34** | After the fourth write the physical cells are **`D B C`** in slot order, while the recency reading is **`B → C → D`**. They differ, and `B C D` in the cells is something that never happened. | Cell strip draws `D B C` with `head` and `tail` both on slot 1; the logical order goes on a separate line labelled "oldest → newest". | MEDIUM |
| B5 | **37** | "item 500" is ambiguous: **index 500 needs 500 hops** (it is the 501st item); **the 500th item is index 499 = 499 hops**. Both executed. A chain of drawn boxes has to pick one. | Screen pins **"index 500 → 500 hops"** and labels each box with its **index**, never its counting number. Array side: `arr[500] → 500`, 1 dereference, 0 loop iterations. | LOW |
| B6 | **39** | Capacity built with `.append()` differs from capacity built with `list(range(n))` (`list(range(1))` = capacity 2; one append = capacity 4). The part is about `append`. | Every capacity number on screen comes from the append table (`ACCURACY-day4.md` § 39). No formula, no `getsizeof` arithmetic shown. | MEDIUM |
| B7 | **39** | The script's "capacity 4, append a 5th" is **exactly** CPython's first resize (4 → 8), so the example is ideal — but it means "spare room" is *not* what saves this particular append; the spare was already exhausted at item 4. | Show the spare column: n=1 spare **3**, n=2 spare 2, n=3 spare 1, n=4 spare **0**, n=5 resize **4 → 8**. The spare-room lesson lives in appends 2-4, and the resize lesson at 5. | LOW |
| B8 | **43** | The step-count formula that matches reality is **⌈log2(n+1)⌉**, not ⌈log2 n⌉; they disagree exactly at powers of two (n=8 → 4 probes vs formula 3; n=1024 → 11 vs 10). n=1000 → 10 either way, a coincidence that would teach the wrong rule. | Print **numbers, not formulas**: `5 items → up to 3 probes`, `1,000 → 10`, `a billion → 30`. If a formula must appear, it is ⌈log2(n+1)⌉ and gets the spoken form "ceiling of log base two of n plus one". | LOW |
| B9 | **43** | The script implies one move and a discovery; it never counts. Measured: **2 probes** (mid 2 → 5, mid 3 → 7). | Exactly **two** probe boxes. A third comparison would be invented. | LOW |
| B10 | **44** | Two drafts of this probe produced false findings of exactly the kind this file is for: (i) checking the pass-1 largest at the wrong index printed "TRUE largest is 3, got 2 → FALSE", (ii) racing `sorted()` on reversed input printed "2,045,883× slower" — reversed input is Timsort's **best** case. | The largest-bubbles claim is **TRUE** (verified at `a[n-passno]`: 3, 8, 9 locked after pass 1). For part 44's speed claim print **comparison counts only**: `499,500 vs 9,966` at n=1000. **No timed race on screen.** | MEDIUM |
| B11 | **40** | Traceback line numbers and caret rows are real output. `line 4` for `point[0] = 9` and `line 3` for `d[[1, 2]] = 3` (chamber files carry a leading comment), and the caret rows differ: `~~~~~^^^` vs `~^^^^^^^^`. | Copy both blocks from `probes-day4/out-p40_run.txt`. If a frame's chamber has a different line count, regenerate with `python p40_run.py`; never hand-edit the number or type the carets from memory. Both are legitimate `--err` coral because the interpreter raised them. | LOW |
| B12 | **42** | `sys.getsizeof(d)` = 36,952 B covers the dict container only; the 1,000 keys and 1,000 values add 28,000 B each. | Screen the honest total **92,952 bytes**, labelled "Python 3.13, 64-bit" (sizes are version- and word-size-specific). Also: `getsizeof({})` is 64 B, so recompute saves "0 **extra** bytes", not "0 bytes". | MEDIUM |
| B13 | **all parts, notation** | Day 2 banned `O(…)` outright; the user lifted it where notation is the lesson. Kokoro will not read `O(n²)` usefully. | Per-part allowance table and the exact spoken form for every permitted symbol are in `ACCURACY-day4.md` § 3. Voice lines carry `big O of n squared`; the graphic carries `O(n²)`. **`Θ` is recommended OFF screen** (pinned comment only); if overridden, it is spoken "theta of n". | MEDIUM (process) |
| B14 | **41/43, convention** | A chart plotting `log2 n` and a box counting loop passes **disagree by one**: the halving loop runs floor(log2 n)+1 times (n=8 → 4 iterations, log2 8 = 3). | One convention per frame. 41 shows the curve value (`log2 n` = 3 at n=8); 43 shows measured probe counts. Never both numbers in the same frame. | LOW |

## C. What is NOT proposed

- **No hook changes.** All eleven hooks are verbatim, including 37's combative "Arrays win
  more often than textbooks admit" and 44's "nobody uses it" (the user already tagged that
  part `Myth`, and it is a universal negative nobody can execute — see CANNOT-SHOW register).
- **No CTA mechanics changed.** 38's "chaining or open addressing", 36's quiz, 43's
  "about how many steps for 1,000 items" (answer **10**, pinned with reasoning `2^10 =
  1024 ≥ 1000`), 41's hash-map question (answer **O(1) average, O(n) worst**) all stand as
  written. Two CTAs are *stronger* than the script knew: 36's only has one answer
  **because of the `get A`** (drop it and the eviction becomes A), and 40's has an exact
  interpreter message behind it (`TypeError: unhashable type: 'list'`).
- **No Day-2 pacing re-cuts restated.** The ≤14-word / ≤2-clause sentence law applies;
  34-44's explain lines are already short except 41's, which is a four-clause list and
  will need splitting when the frames are written — that is the bible/frame owner's call,
  not a correction of fact, and it is not proposed here.
- **Nothing in section A or B has been written into any `BRIEF.md`, frame, or voice line.**
  Per B13's own constraint, project files are other agents' tokens.

## D. Open decisions the user must make before any frame is authored

| # | decision | default if the user says nothing | why it cannot be deferred |
|---|---|---|---|
| D1 | Accept A1, A2, A3 (the three **HIGH** claim fixes)? | frames screen the pinned values anyway, which means the **voice** contradicts the **screen** in 41, 42 and 35 | Eleven builders start within the hour. A screen showing "96 → 192, x2.0" next to a voice saying "a loop inside a loop is O(n²)" is the exact defect class Day 1's pb-07 rebuild was about |
| D2 | 38: approve the toy hash (`sum of letter codes, % 4`) as the on-screen function? | yes — it is the only function found where the user's own example survives | Without a named function there is **no printable slot number at all**, and 38 cannot be built |
| D3 | 42: keep the squares example and guard the screen (B12), or move the speed claim to a workload where it pays (x2774 case)? | keep squares, print **bytes only**, no stopwatch | This is the user's example and their thesis; only they can retire it |
| D4 | Notation: confirm the § 3 per-part table, in particular `Θ` staying off screen and `O(n²)` allowed in 44 | as tabulated | Determines what 41/42/43/44 voice lines say, and voice lines are re-generated once, expensively |
| D5 | 35: does the part get to state `m = 16, k = 3` on screen (adds two numbers to a plate), or is the example cut? | state them | A Bloom filter with no size is not checkable, and at m=9 the scripted sentence is simply false |

## E. Learnings row proposed (for `.agents/product-marketing.md`, user approval required, `Document version` bump)

| Date | Learning | Evidence | Applies to | Status |
|---|---|---|---|---|
| 2026-11-01 | In a code-teaching series, **the probe is as likely to be wrong as the script** — and a wrong probe manufactures a fake "correction" telling the author to fix a correct sentence. Two appeared in one Day-4 pass: bubble sort's "largest bubbles up" checked at `a[n-passno-1]` instead of `a[n-passno]` read FALSE, and a `sorted()` race on reversed input (Timsort's best case) read "2,045,883× slower". Every NEEDS-FIX verdict must therefore be reproduced a second time, at the index/units the claim actually names, before it becomes a proposal. | `writing/prog-basics/probes-day4/p44_bubble.py` § 44.3 and § 44.5 both record the corrected check; `ACCURACY-day4.md` § 44 lists both bugs by name | video, blog, any executed-claims ledger | proposed |

Second, weaker candidate from the same pass, for the same table if the user wants two:
printing an *unverifiable* default (`hash()` in Python, `Array` capacity in V8) as if it
were deterministic output is the highest-risk class in this series, because it looks like
evidence and passes every visual check — `studio verify` and `check` cannot see it, only
a re-run in a second process can (`probes-day4/p38_hash.py`, `p39_p38_js_check.mjs`).
