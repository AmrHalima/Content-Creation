# prog-basics — CORRECTIONS LEDGER, DAY 2 (parts 12-22)

Before/after for every edit to the user's pre-authored Day 2 copy. Same discipline as
`CORRECTIONS.md` (Day 1): **hooks and CTA mechanics are verbatim, no technical claim is altered, and
nothing below is a silent change.**

Authority to make them at all: Day 1 bible § 0 scopes permitted change to "polish, pacing, on-screen
text, and technical accuracy", and `frame.md` § 9 states "Hooks and CTA mechanics are the user's
words and do not change. Explain lines (F2/F3/F4) are fair game and are re-cut."

**No substantive errors found in this tranche.** Day 1 needed six corrections including one rebuilt
demo (pb-07 proved nothing as briefed). Day 2 needs nine pacing re-cuts and two shape re-cuts, and
zero changes to what any part teaches. Every claim in the table below was executed on Python
3.13.15 / node v24.15.0 for this file (`.tmp/day2_accuracy.py`, `.tmp/day2_chambers.py`).

Two items are **screen-text constraints, not voice edits** (§ B) — the narration keeps the user's
sentence, the frame is what gets guarded.

---

## A. Voice re-cuts — the ≤14-word / ≤2-clause sentence law

Split for a breath, not shortened. The words survive.

| part | BEFORE (user's copy) | AFTER | why |
|---|---|---|---|
| 14 | "Recursion is a function that calls itself on a smaller version of the same problem." | "Recursion is a function calling itself on a smaller version of the same problem." | 17 words → 13, one clause. Same sentence, one letter changed (`calls` → `calling`). |
| 14 | "Each call trusts the next one to solve a piece, until the problem is so small the answer is obvious." | "Each call trusts the next one to solve a piece. It stops when the problem is so small the answer is obvious." | 20 words across a trailing `until` clause → two beats of 11 and 12. The stop is now its own breath, which is where the stack visually unwinds. |
| 17 | "It's not zero and it's not an empty string." | "Zero and an empty string are both values. None is the absence of one." | **Contrast-reveal ban.** `.agents/product-marketing.md` Learnings rations the "it's not X" shape to one occurrence in the whole series and it is already spent on part 05's hook; the rule's listed examples include bare "not a bug" forms. Same fact, no banned shape, and it is now *more* accurate — executed: `None == 0` → `False`, `None == ''` → `False`. |
| 17 | "The danger: calling a method on nothing crashes your program, so check before you use it." | "Calling a method on nothing crashes your program. So check before you use it." | 16 words, `danger:` + `so` = 3 clauses → two beats of 9 and 7. |
| 18 | "Comments should explain why, not what." | "A comment earns its place by explaining why. The code already says what it does." | **Contrast-reveal ban**, and this one is the part's thesis. The `X, not Y` shape becomes a support instead of a contrast: the second sentence is the reason the first is true. 8 + 7 words. Hook untouched (`Good code doesn't need comments. Agree or disagree?` is verbatim). |
| 18 | "If you have to explain what the code does, rename things until it explains itself." | "If a comment explains what the code does, rename things until it explains itself." | 16 → 14 words, and the subject moves from "you have to" (the writer's effort) to "a comment" (the artifact), which is what the part is actually about. |
| 20 | "In A and B, if A is false, B never runs." | "Take A and B. If A is false, B never runs." | 3 clauses → 4-word setup plus an 8-word conditional. The letters get named before they get used. |
| 21 | "Reading by index is instant, but inserting in the middle means shifting everything after it." | "Reading by index is instant. Inserting in the middle means shifting everything after it." | 15 words on a `but` → two beats of 5 and 9. The G7-shift motion lands on the second one. |
| 22 | "Adding at the front is fast, but finding the 50th item means walking through 49 nodes first." | "Adding at the front is fast. Finding the 50th means walking through 49 nodes first." | 17 words on a `but` → two beats of 6 and 11. `item` dropped because the counter on screen is the item. |

Untouched because they already pass: parts 12, 13, 15, 16, 19 explain lines in full, and every hook
and every CTA in all eleven parts.

## B. Screen-text constraints (the voice keeps the user's line; the frame is what gets guarded)

| part | issue | what the screen does instead |
|---|---|---|
| 12 | The instinct is to show the loop's output as `0 1 2 3 4`. Executed, it is `0 0 0 0 0 0 …` forever (guard fired at pass 13). | F4's terminal strip reads `0 0 0 0 0 0 0 0 …` with an amber `NEVER ENDS` plate. The repeated zero *is* the diagnosis: the variable the condition depends on never changed. |
| 17 | "not zero and not an empty string" is true as identity, but `bool(None)` and `bool('')` are **both** `False`, so the part's own advice ("check before you use it") fails open if the viewer writes `if user:`. | F3 carries a mono chip `if user:` struck through with `is None` beside it, and the pinned comment says the distinction in one line. Voice unchanged. |
| 17 | `nil` (Go/Ruby/Lua/Swift) cannot be executed on this machine. | `nil` appears as a name chip only, never a chamber with output. `null` gets a real chamber because node raised its real message here. |
| 21 | "side by side in memory" is true of an array as a data structure; a Python list stores **references** side by side, not the `int` objects. | The row of boxes is drawn as values side by side (the concept, and what C/Java arrays do). Nothing on screen claims Python's internal layout, so the voice can say what it says. |
| 16 | The user's example mixes languages: `int('5') + 3` is Python, `'5' + 3` → `'53'` is JavaScript. In Python that same line raises `TypeError`. | Two labelled chambers (`main.py` / `main.js`, each with its language chip). Unlabelled, the part would teach a Python learner something false about Python. This is the pb-10 precedent, approved in Day 1. |
| 22 | The F4 chamber must be ≤4 lines and executable; a `class Node` with a `__repr__` is six. | Nested tuples: `n = (1, (2, (3, None)))` / `print(n[0])` / `print(n[1][1][0])` / `print((0, n)[0])` → stdout `1`, `3`, `0`. Executed here. The double bracket *is* the pointer chase, so the compromise is also the lesson. |

## Approved

The user set the tranche's three open decisions at the gate on 2026-10-28 (direct-address mode, no
added words, run through renders) and delegated the rest. These nine re-cuts are within the scope
Day 1 § 0 defines, are all reversible in one edit each, and are all listed here rather than
discovered later in a frame.
