# Programming Basics — Series Bible, DAY 2 (parts 12-22 · BASICS II)

Campaign: `prog-basics` · tranche: **Day 2 / BASICS II** · parts `videos/prog-basics-12-infinite-loops/`
… `videos/prog-basics-22-linked-lists/`. Written layer: `writing/prog-basics/pieces/12-*.md` …
`22-*.md`. Manifest: `writing/prog-basics/BATCH-day2.md`.

**Inherits `series-bible.md` (Day 1) in full except where this file names an override.** Day 1's
bible, `frame.md` v2 and the 11 shipped parts are read-only to this run: their renders are proof of
their own sources (known-traps § 15), so nothing here edits them.

The visual authority for this tranche is **`frame-day2.md` (v2.1)** — copy it into each project as
`frame.md`. It adds G6 call stack, G7 node chain, G8 direct address, the BASICS II badge, the 0.93
voice note (§ 8), the runtime policy (§ 12) and the language-labelling rule (§ 13). This file does
not restate it.

---

## 0. What is decided and what is not

**Collapsed by the user.** The eleven hooks, explanations, examples and CTA mechanics are
pre-authored and supplied in the request. `content-strategy`, `marketing-ideas`, `marketing-council`
and the angle pass of `copywriting` are **not** run: there is nothing to choose. Same treatment as
Day 1 (§ 0 there): `copy-editing` for rhythm and spoken delivery, the "No AI Tells" blacklist, `social`
for caption/hashtag mechanics, and an interpreter run for truth. Hooks are not swappable; CTA
mechanics are not changeable.

**Decided by the user on 2026-10-28, at the gate, before any build** (these three were asked because
they change the output, and they are now locked):

1. **Face-to-camera is a *mode*, not a face.** Parts 14, 17, 18 use **G8 direct address** — camera
   chrome, second-person display type, lower third, and the code example as a cutaway. No HeyGen
   avatar (no auth here, `HEYGEN_API_BASE` unset, would need an interactive login and bills credits),
   no drawn face, no silhouette. The user's goal was a feed that does not look repetitive; G8 changes
   the shape of the frame without inventing a presenter we cannot film.
2. **The copy ships as written.** At `af_heart` @ 0.93 the user's Day 2 scripts run ~32-38s against
   Day 1's 39-52s. The user chose **"accept ~32-38s: no added words"** over "hold ~45s by expanding".
   Nobody pads a part to match Day 1's length. Parts under 30s get reported, not filled.
3. **Run end to end, renders included.** The render gate is passed for this tranche, at
   `--quality delivery` through `studio render`, with each file ffprobed afterwards. Still not
   authorized: publish, schedule, Arabic pass, blog variants, BGM, SFX.

**Voice for this tranche: Kokoro `af_heart` at 0.93 — which is the house spec**
(`.agents/design.md` `voices.en`), not an override. Day 1 deliberately passed `--speed 0.74` to go
against house; Day 2 lets house stand, so **no worker passes `--speed` at all**. Read `frame-day2.md`
§ 8 before generating any audio: `studio voice` takes speed from the house file and ignores
`voice_speed` in `BRIEF.md`, so a cloned brief would have recorded 0.74 while shipping 0.93.

## 1. What is new to this tranche, and why it is cheap

Day 2 is harder to draw than Day 1. Variables are one box; recursion is a *process over time*, and a
linked list is a *relationship between boxes*. Three new marks carry exactly those three ideas (G6,
G7, G8), and every one of them is built from atoms the series already ships: a G6 card is a G2
chamber at reduced scale, a G7 node is a G2 chamber split down the middle, an array row is pb-03's
row of boxes, and part 12's stuck loop is pb-11's gate that re-tests. **Nothing in Day 2 re-derives
the look.** That is the whole reason this tranche is a clone job rather than a design job.

## 2. Audience lane, register, clarity

Unchanged from Day 1 § 2 and `frame-day2.md` § 9. First-week learners, second person, dense, wry, no
beat opens on a definition, every term glossed in the same breath it appears, English often heard as
a second language. Day 2 topics are the ones where a beginner's mental model actually breaks
(recursion, null, arrays vs linked lists), so the gloss bar goes up, not down:

- **Never say "O(1)" or "O(n)".** Parts 21 and 22 teach the same idea as a *counted walk* — a marker
  that hops and a `STEPS` counter, `MOVED 2`. If a part needs the word "instant", it says "instant"
  and shows the direct jump; the notation buys nothing at 45 seconds and costs the whole audience.
- "Recursion", "base case", "stack", "coercion", "null", "node", "pointer", "index" each get a plain
  gloss on first use, in the same frame, not the next one.
- The word "iterate" stays banned (Day 1 § "quality bars"). "Traverse" is also banned for 22 — say
  "walk the chain".

## 3. Copy re-cut policy for this tranche (narrow, and logged)

`frame-day2.md` § 9's sentence law is ≤14 words and ≤2 clauses. Six of the user's eleven explain
lines exceed it, and two trip the series' own contrast-reveal ban (a Learnings row in
`.agents/product-marketing.md`, recorded because the shape propagates into every downstream artifact).
Per Day 1 § 0, explain lines are fair game for pacing; hooks and CTA mechanics are not.

- Every re-cut is in **`CORRECTIONS-day2.md`** with the before/after and the reason. Nothing is
  changed silently, and no hook, no CTA mechanic, no technical claim is altered.
- Where a line is over-long but says one thing, it is **split into two beats**, not shortened: the
  words survive, the breath changes.
- The two contrast-shape lines (17, 18) are re-cut to keep the fact and drop the shape. Both are in
  explain lines, so the user's own rule authorises it — and both are flagged, because touching a
  writer's sentence is the kind of thing you tell them about.

## 4. Accuracy ledger — every claim executed on this machine, 2026-10-28

Not recalled. Python `3.13.15` and node `v24.15.0`; scripts
`G:\Content Creation\.tmp\day2_accuracy.py` (52 checks) and `.tmp\day2_chambers.py`.

| part | claim as briefed | executed result | status |
|---|---|---|---|
| 12 | `while i < 5: print(i)` with no `i += 1` | prints `0 0 0 0 0 0 0 0 0 0 0 0 0 0`, guard fired at pass 13 — it does not stop | **confirmed, and it fixes the screen**: output is `0 0 0 0 …`, never `0 1 2 3 4`. With `i += 1` → `0 1 2 3 4` |
| 12 | "the condition never becomes false… you forgot to update the variable it depends on" | the only change that ends it is the increment | confirmed |
| 13 | `break` exits immediately; `continue` skips the round | over `[3,-1,8,2,7,9]`: `seen = [3, 8, 2, 7]`, stops at target, `-1` skipped | confirmed |
| 13 | CTA: first even number using `break` | `[3,7,2,8]` → `2`; `[1,3,5]` → `None` | confirmed — pinned comment must also give the no-match answer, or the challenge has a hole |
| 13 | `n % 2 == 0` for even | `-4 % 2 == 0` → `True` | confirmed, so negative inputs do not break the intended answer |
| 14 | `def fact(n): return 1 if n <= 1 else n * fact(n-1)`; `fact(4)` → 24 | `24` | confirmed |
| 14 | base case values | `fact(0)` → `1`, `fact(1)` → `1` | confirmed; the BASE plate sits on `n <= 1` |
| 15 | `def f(n): return f(n-1)` → RecursionError | `RecursionError: maximum recursion depth exceeded`, `sys.getrecursionlimit()` → `1000` | confirmed **exact string on screen**, and the coral is legitimate here (interpreter-raised) |
| 15 | CTA: base case for summing a list | `0` on the empty list; `[4,5,6]` → `15` | confirmed, pinned answer `0` |
| 16 | JS `'5' + 3` → `'53'`, `'5' - 3` → `2` | `"53"`, `2` — the hook is literally true | confirmed, but see the labelling row below |
| 16 | Python `int('5') + 3` → 8 | `8` | confirmed |
| 16 | **Python `'5' + 3` and `'5' - 3`** | `TypeError: can only concatenate str (not "int") to str` / `TypeError: unsupported operand type(s) for -: 'str' and 'int'` | **the same source means the opposite thing by language.** Part 16 must be two labelled chambers (`main.py` / `main.js`) or the part teaches a Python learner that `'5' + 3` gives `'53'` |
| 16 | casting is deliberate | `int(5.9)` → `5` while `round(5.9)` → `6`; `int('7.5')` → `ValueError: invalid literal for int() with base 10: '7.5'` | available. Casting truncates and refuses to guess; a good one-line gloss if F2 needs teeth |
| 16 | coercion is silent | JS `'apple' + 3` → `"apple3"`, `true + 1` → `2`, `[] + 1` → `"1"`, `'5' == 5` → `true` but `'5' === 5` → `false` | confirmed; the debate CTA has real evidence behind it |
| 17 | Python `user = None; user.name` | `AttributeError: 'NoneType' object has no attribute 'name'` | confirmed as briefed |
| 17 | the same danger in JS | `null.name` → `TypeError: Cannot read properties of null (reading 'name')` | confirmed — same crash, **different error name**, so showing both earns the "Null, nil, and None" framing |
| 17 | "not zero and not an empty string" | `None == 0` → `False`, `None == ''` → `False` | confirmed as an identity claim |
| 17 | truthiness nuance | `bool(None)` → `False` and `bool('')` → `False` — **both falsy** | add as the on-screen caveat: `if user:` cannot tell them apart, so the part's own advice ("check before you use it") needs `is None` to be exact. Screen text only; a note in the pinned comment |
| 17 | `nil` | Go/Ruby/Lua/Swift only — nothing here can execute it | **chip, never a chamber** (`frame-day2.md` § 13) |
| 17 | "the inventor of null called it his billion-dollar mistake" | Hoare introduced null references in ALGOL W (1965); titled his QCon London 2009 talk *Null References: The Billion Dollar Mistake* | **verified against InfoQ/QCon/Wikipedia** — the hook stands verbatim. Past tense is correct. Hoare died 2026-03; no joke on screen about that |
| 18 | nothing to execute | the two comments are prose | N/A. The bad example `# add 1 to i` annotates the *real* `i += 1` from part 12, so the joke is a callback to executed code, and the good one states a reason a reader cannot infer from the line |
| 19 | `7 // 2` → 3, `7 / 2` → 3.5 | `3` (`int`), `3.5` (`float`) | confirmed — the type change is the surprise, so show `int`/`float` as mono chips |
| 19 | CTA `7 % 3` | `1` | confirmed, pinned answer `1` |
| 19 | `x = 5` vs `x == 5` | assignment yields `5`; comparison yields `True` | confirmed |
| 19 | bonus, off-screen | `5 > 3 == True` → **`False`** (Python chains it as `(5>3) and (3==True)`) | hold it for the reply thread; a commenter will write it |
| 20 | `if user and user.is_admin:` is safe when `user` is `None` | **no exception**, and the guard works; with `A` false, `B` is never evaluated (a side-effect list stayed empty). **CORRECTED by pb-20's re-execution: the expression returns `None`, not `False`** — this row originally read `False` because the harness wrapped it in `bool()`, which is the exact mistake § 9 forbids | confirmed, and the guard is *provable*: run the branch and show the empty side-effect list. The resolved value is `None`, so **do not print `False` on screen** |
| 20 | nuance | `and`/`or` return an **operand**, not a bool: `0 or 'fallback'` → `'fallback'`, `1 and 'x'` → `'x'`, and the row above is a live instance of it | true. Off-screen — 20's claim does not depend on it and the frame has no room. Kept for the reply thread |
| 21 | `nums = [10, 20, 30]`; `nums[1]` → 20 | `20` (`nums[0]` → `10`) | confirmed |
| 21 | CTA `nums[-1]` | `30` | confirmed, pinned answer `30` |
| 21 | "inserting in the middle means shifting everything after it" | `[10,20,30]` with `insert(1,99)` → `[10, 99, 20, 30]` | confirmed, and it counts: 2 boxes moved |
| 21 | "index that starts at zero" | `nums.index(30)` → `2`, `len` → `3` | confirmed; `nums[3]` → `IndexError: list index out of range` if the row needs an edge |
| 21 | "side by side in memory" | concept-true for an array. A Python list stores **references** side by side, not the `int` objects themselves | POLISH: the voice may say it about arrays (the data structure the part teaches); the screen must not claim Python stores the values contiguously. No wording change needed, a screen-text constraint instead |
| 22 | `1 → 2 → 3 → None` | a real chain's `repr` is exactly `1 -> 2 -> 3 -> None` | confirmed — the user's example is literally executable output |
| 22 | "adding at the front is fast" | one new node + one pointer; `(0, n)[0]` → `0` and `n[1]` → `(2, (3, None))` | confirmed |
| 22 | "finding the 50th item means walking through 49 nodes" | walking to index 2 took exactly 2 hops → **steps == index** | confirmed by construction; the `STEPS` counter is what says it, not the voice |
| 22 | the F4 chamber must be ≤4 lines and executable | `n = (1, (2, (3, None)))` / `print(n[0])` / `print(n[1][1][0])` / `print((0, n)[0])` → stdout `1`, `3`, `0` | confirmed. A `class Node` with `__repr__` is 6 lines and cannot be shown (§ G3 max 4); nested tuples are the honest executable form |

**No substantive error in this tranche's copy.** Day 1 needed three corrections including one
rebuild (pb-07's demo proved nothing); Day 2 needs none. What it needs is **labelling** (part 16) and
**screen-text constraints** (17's truthiness caveat, 21's memory claim).

## 5. Distribution note the user's own brief implies

17 and 18 are both direct-address parts and are **adjacent by number**, which is exactly the
repetition the tranche is trying to avoid. Parts are order-independent (Day 1 § 2), so the publish
order in `BATCH-day2.md` swaps them: `… 15, 16, 18, 17, 19 …`. `id` and badge number never change —
the badge carries the topic number, not the slot.

## 6. Production-line rules for this tranche

Day 1's § 12 applies verbatim. Load-bearing here:

1. **Carriers first: 14, 21, 22.** They introduce G6, G7, G8. Nothing else starts until their frames
   are validated *by snapshot*, not by `check`. A broken layout paid eleven times is the expensive
   mistake; three broken marks paid across a harder tranche is worse.
2. **One worker per project. Never one worker across projects.** (known-traps § 16: a three-project
   pass burned 26M tokens and produced zero pixels.)
3. **Read-only to a run:** `.agents/**`, `studio/**`, Day 1's bible and `frame.md` v2,
   `frame-day2.md`, `caption-skin-day2.html`, this file, and every `videos/prog-basics-0X..1X/`
   project except your own.
4. **No `preview --background` in parallel runs.** `snapshot --at` only.
5. **Batch the free gates once, at campaign level:**
   `node studio/tools/studio.mjs batch verify cues assemble check --campaign prog-basics`
   (it matches on `series:` in `BRIEF.md`, so Day 2 parts join the same batch; Day 1's 11 parts are
   already clean and will re-verify green — do not "fix" them.)
6. **Re-verify at the moment of the decision.** A green `check` an hour old is not evidence.
7. **Frame-authoring rules** — all automated by `studio verify`, all previously shipped past a green
   `check`: no `text` tween (no TextPlugin), no `letterSpacing`/flex-child width tween, class as well
   as id on every animated element, `inline-block` or block on anything moved, `immediateRender: false`
   on delayed `fromTo`, no `Date.now()`/`Math.random()`/fetch.
8. **New to this tranche:** G7 connectors and the G8 timecode are the two places a worker can break
   determinism or geometry. Connectors are CSS divs in the untransformed layer (pb-11's SVG drift),
   and the timecode reads `tl.time()`.

## 7. Queued, not authorized

Publish or schedule of any kind · the Arabic (عامية مصرية) pass for either tranche · blog variants ·
BGM/SFX · Day 3 topics (23+: lists, dicts, errors, imports, classes) · any edit to a Day 1 render.
Two proposed Learnings rows sit in `LEARNINGS-PROPOSALS.md` and in Day 1 § 10; **this run has no
authority to bump `.agents/product-marketing.md`'s version**, so nothing is written there.
