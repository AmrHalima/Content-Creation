---
id: pb-23
order: 1
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Stacks (LIFO)
slug: stacks
project: videos/prog-basics-23-stacks/
difficulty: B
mechanic: Quiz
mode: code-card
carrier: false                     # no carriers this tranche (bible-day3 § 0.1) — but this is G9 pile's first build
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 81
target_length: ~31s               # 81 / 3.24 = 25.0s speech + 6.0s air; at 2.7 w/s it is 36.0s
ceiling: 54s
grammar: G1 G9-pile G9-pile G3 G5
marks: G9 pile (new)
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-15/02-descent.html (the 84px card) + pb-21/03-shift.html (the tag lane)
---

# P23 · Stacks (LIFO) · [B] · Quiz · code card

**Message:** a pile where the only door is the top — you add at the top and take from the top, which is
why the thing you just put in is the thing that comes out, and why "undo" is a stack.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 8 — `Press Ctrl+Z and you're using a stack.` | 2.5s | 3.0s | Verbatim hook. Land `a stack` on the amber sweep. `Ctrl+Z` spoken "control Z". |
| F2 | 22 — `A stack is last in, first out, like a pile of plates. You push onto the top and pop from the top.` | 6.8s | 8.1s | Even pace. "last in, first out" is the user's own gloss of LIFO and gets no extra emphasis — the pile does the work. |
| F3 | 23 — `Undo history, the browser back button, and function calls all use stacks. Push one, push two, then pop gives two.` | 7.1s | 8.5s | The triad is read flat, one chip per item (the enumeration *is* the subject). The second sentence slows: each value drops as it is named. |
| F4 | 16 — `In Python, a list does this. Append puts it on top. Pop takes the top off.` | 4.9s | 5.9s | Three short beats, code appearing under the caret. Do **not** say "push" here — the chamber's word is `append`. |
| F5 | 12 — `After push 1, push 2, push 3, then pop: what's on top?` | 3.7s | 4.4s | Verbatim CTA. Nothing added to the question. |

**Total 81 spoken words → ~31.0s at the planning rate** (air ≈ 6.0s: ~1.0s per frame, ~2.0s on F5).
Number-heavy part: the four spoken digits may slow it toward the 2.7 w/s end, i.e. ~36s. Take the
measured `audio_meta.json`; if the film lands under 30s, grow F5's pad and report it (bible-day3 § 0.3).

**Spoken code:** `stack.append(2)` → "append two". `stack.pop()` → "pop". `# push` → not spoken.

**Re-cuts applied:** none to this part's voice. 23's three explain sentences measure 12, 10 and 12
words and pass the ≤14 law as written (`CORRECTIONS-day3.md` § A "untouched, deliberately"). The triad
in F3 is allowed because the enumeration is the subject.

## On-screen text and code treatment

Geometry is `frame-day3.md` § 6 / **G9 `pile`** in full. Do not re-derive any number.

**F1 (G1).** Type alone over the ground: `press control+z` then `you're using a stack`, the last three
words on the solid `--say` plate. **No pile on F1** — the cover is type plus badge, and the pile is what
F2 introduces (a frame that illustrates its own hook leaves nothing for the explanation beat).
Kicker: `PROGRAMMING BASICS · BASICS III · 23`.
**F2 (G9 pile, built).** Four `.pb-chamber` plates 520×84 at lefts 280, y 332/424/516/608, lid bar at
y 320, shelf at y 700. Arrival order is **bottom plate first**, one per clause: `a stack` (shelf +
empty dashed chamber), `last in, first out` (first plate drops, P2), `like a pile of plates` (second and
third), then `push` / `pop` each get a 3px `--say` border flash on the **top** plate only — never two at
once (§ 1). `TOP` chip at left 848/y 300 with a 12px CSS chevron straddling the lid's edge.
**F3 (G9 pile, operated + chips).** The pile holds. Beat 1: a chip row at the lower lane
(`UNDO HISTORY` / `BACK BUTTON` / `FUNCTION CALLS`, `--panel-2` mono `--muted`, `data-layout-ignore`)
arriving P9-staggered — these are **chips, never chambers** (bible § 4d). Beat 2: `push one` drops a
plate reading `1`, `push two` drops `2`, and `pop gives two` lifts the `2` plate out
(`x:+260, y:-150, opacity:0`) **while a mint chip `POP = 2` arrives exactly where the plate sat**. The
plate below (`1`) does not move — only the top plate ever leaves. Counted tags (upper lane y 288):
`PUSHED 2` then `POP = 2, TOP = 1`, at pb-21's authored tag positions.
**F4 (G3).** `main.py`, chip `PYTHON`, three lines + terminal (max is 4 + 1):
```
stack = []
stack.append(1)     # push
stack.append(2)     # push
print(stack.pop())  # 2
```
stdout `2` in mint on the terminal strip. P3 `type-on` per clause. Ligature kill-list on the stylesheet
(`.append`/`.pop` have no ligatures but the frame must carry the rule anyway, `frame-day3` § 2).
**No `push(1)` line** — executed: `[].push` raises `AttributeError`. The pseudocode API lives in the
`# push` / `# pop` comments and in the pile's plate labels only.
**F5 (G5).** Headline `what's on top?` at 6.4cqw in a 176px box (12 chars ✓), mechanic verb plate
`COMMENT IT` in solid `--say`, badge `PROGRAMMING BASICS · BASICS III · 23 · BEGINNER`. Behind the
headline, dimmed via § 1's background/border rule: **three intact plates `1 2 3`** with a `?` chip on the
lid and a `POP` plate label — the question drawn, **not answered**. The `POP = 2` chip from F3 must not
reappear here and no plate may be shown leaving: pb-11's rule, answering the viewer's quiz on screen is
answering their quiz.

## Cover / title card

`control+z is a stack` (4 words, cut from the hook) + badge `PROGRAMMING BASICS · BASICS III · 23` +
`BEGINNER`. Amber plate on `a stack`. No pile on the cover; the F1 rule applies.

## Post copy

**Feed caption:**

    Press Ctrl+Z and you're using a stack.
    Last in, first out — like a pile of plates. You push onto the top and pop from the top, so the value
    you just put in is the value that comes out. Undo history, the browser back button, and function
    calls all work this way.
    After push 1, push 2, push 3, then pop: what's on top?

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#stack`
**X:** `press control+z and you just popped a stack. push onto the top, pop from the top, and the last
thing in is the first thing out. undo, the back button, and every function call work like this pile.
after push 1, push 2, push 3, then pop - what's on top? #python`
**LinkedIn:** the interview version is "implement a stack that also reports its minimum in constant
time", and the answer is a second pile; the first lesson is just knowing which end you're allowed to
touch. `#python` `#programming` `#datastructures`

**Pinned comment:** `Two answers live in that question, and both are in the video. pop() gives back 3 - the top plate leaves - and 2 is now on top of what's left. Say it as PUSHED 3 / POP = 3 / TOP = 2. The edge case people hit in code: popping an empty stack. In Python [] gives IndexError: pop from empty list, and an empty collections.deque says pop from an empty deque, so check before you pop. One more thing worth knowing: Python's list does this job with append and pop (both ends are O(1) at the top), which is why nobody writes a Stack class in Python - and why the plate labels say push/pop while the chamber says append/pop. Parts 24 and 22 are the line and the chain.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (inline, bible § 4): `push(1); push(2); pop()` → **2**; the CTA's
sequence leaves `popped = 3`, `top = 2`, stack `[1, 2]`; `[].pop()` → `IndexError: pop from empty
list`; `collections.deque().pop()` → `IndexError: pop from an empty deque`; **`[].push(1)` →
`AttributeError: 'list' object has no attribute 'push'`** (the reason § 7.3's labelling law exists);
`sys.getrecursionlimit()` → `1000`, the number part 15 already shipped on a `DEPTH` chip, which is why
23's function-calls beat is a chip row and not a re-raise of anything.

No screen-text constraint was needed beyond the chamber law: the pile's plate labels are the user's API
words, and the chamber is executed Python.

## Gate state

**G9 `pile` is built here for the first time and nothing has proven it.** Snapshot-read these three
moments before anything else: (1) the `2` plate leaving while `POP = 2` arrives in its place — if the
chip lands where the plate *is going* rather than where it *was*, the part's central claim is drawn
backwards; (2) the lid bar and `TOP` chevron straddling the plate edge without covering a digit; (3) the
dashed empty chamber on F2 reading as empty, not as a bug. **If any of the authored numbers (520×84,
pitch 92, lid y 320, chip 240×64) does not survive the pixels, stop on that frame and report it — do not
invent a variant** (bible § 0.1, `frame-day3.md` § 0).
