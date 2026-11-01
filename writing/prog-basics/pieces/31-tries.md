---
id: pb-31
order: 8
series: prog-basics
tranche: day-3 (STRUCTURES)
title: Tries
slug: tries
project: videos/prog-basics-31-tries/
difficulty: M
mechanic: Quiz
mode: direct-address            # G8 (bible-day3 § 5: the tranche's two G8 parts are 26 and 31)
carrier: false
language: en
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
words: 92
target_length: ~34s             # 92 / 3.24 = 28.4s speech + 6.0s air; at 2.7 w/s ~40.1s
ceiling: 54s
grammar: G8 G11-trie G11-trie G3-cutaway G5
marks: G11-trie (new, inherits 27's grid) · G8 reused from pb-14
aspect: 1080x1920
cta_mechanic_unchanged: true
hook_unchanged: true
accuracy: confirmed
clone_source: pb-14/01-address.html + 04-cutaway.html (chrome) · 27's G11 grid for the trie levels
---

# P31 · Tries · [M] · Quiz · **direct address**

**Message:** a tree whose edges are letters, so words that start alike walk the same road — and a path
can exist without being a word, which is the one thing that makes a trie more than a tree of letters.

The second G8 part. The mode works here because the trie's hero is a **still** (five nodes, two shared
levels) that sits comfortably inside the chrome, exactly as pb-14's descending stack did — so G8 +
diagram is precedent, not improvisation.

## Final narration

| Frame | Words | Est @3.24 | Est @2.7 | Delivery |
|---|---|---|---|---|
| F1 | 8 — `How does autocomplete answer before you finish typing?` | 2.5s | 3.0s | Verbatim, addressed, left-aligned at x 72, **no entrance tween on the first line** or the cover renders blank (pb-14's finding). |
| F2 | 28 — `A trie is a tree where each node is a letter. Words that share a prefix share a path. A prefix is the letters a word starts with.` | 8.6s | 10.4s | The user's two sentences are 11 and 8 and pass. The third beat is added for the gloss law — `prefix` is the part's load-bearing noun and arrives un-glossed. |
| F3 | 29 — `To autocomplete, walk down the typed prefix, then list everything below it. Car, cat, and can start the same way. They share c, then a, and split three ways.` | 8.9s | 10.7s | `walk down` gets the ring travelling; `c` and `a` are said as letters, not spelled; `three ways` lands with the three branches. |
| F4 | 17 — `A path can exist without a word at the end. Here, three dots mark three real words.` | 5.2s | 6.3s | The part's trap, in the cutaway frame. Slow on `without a word at the end` — that is the beat the dots pay for. |
| F5 | 10 — `Which word shares a path with 'dog': 'dot' or 'cat'?` | 3.1s | 3.7s | Verbatim CTA, including the two candidate words as the user wrote them. |

**Total 92 spoken words → ~34.4s** — the bottom of the `[M]` band, which is where a trie belongs: at
29s the shared trunk is a blur. At the slow rate ~40.1s, still inside the band and 14s under the ceiling.

**Spoken code:** `words[:2]` → never spoken. `'ca'` → "c a" (two letters, not "ca" as a syllable — the
frame shows two separate nodes). `False` → "false", said as a fact, not as a failure. `{'ca'}` → "c a".

**Re-cuts applied:** none to the user's copy. 31's three explain sentences are 11, 8 and 12 words and all
pass; `walk down` is already the series' approved verb (not `traverse`). The one added beat is the
`prefix` gloss (`CORRECTIONS-day3.md` § A, "untouched, deliberately" + § B gloss-by-frame rule).

## On-screen text and code treatment

**G8 chrome, copied verbatim from `videos/prog-basics-14-what-is-recursion/compositions/frames/01-address.html`**
(second proven copy: `videos/prog-basics-17-null-nil-none/compositions/frames/01-address.html`): four
corner brackets 3px `--line-faint`, 72px arms, inset 48, framing y 932→1004 · REC strip with a 16px dot
blinking on a 1s yoyo, `REC` mono 2.4cqw, timecode `00:0N` in JetBrains Mono 400, **all three `--muted`**
(no coral, no fake red dot — § 7.1) · lower third `--panel-2` radius 12 with
`PROGRAMMING BASICS · BASICS III · 31` in muted mono above `TRIES` in Space Grotesk 700 `--ink` 3.4cqw,
top edge ≤ y 940 · **chrome never fades** · timecode from `tl.time()` through a time proxy (write
"wall clock" in any comment, never the function name).

**G11-trie grid** (cite `frame-day3.md` § 6): root chip 96×96 `--panel-2` at left 466 / y 292,
**interior empty** — an empty square is the honest picture of a trie root, because the root is not a
letter. `'c'` at 466 / y 452, `'a'` at 466 / y 612, then three nodes at **154 / 466 / 778** on y 772
carrying `n` `r` `t`. Letters are **JetBrains Mono 700 5.2cqw `--value`** — a letter you type is code, so
mono, and the ligature kill-list is on the stylesheet. Nodes are 27's 148×96 chambers; connectors are
27's elbows (runs at y 420 / 580 / 740).

**END dot:** a 16px `--value` circle at each node's top-right (`right: 12; top: 12`). It appears on **`n`,
`r` and `t` only** — and **not on `a`**, which is the part's argument drawn as one pixel-level detail.
Snapshot-verify this specific absence; `verify` and `check` cannot see it.

**F1 (G8, type alone).** `before you finish` then `typing?`, amber sweep on `finish`. No trie.
**F2 (G8 + trie, built).** Wipe enters from the **left**. The empty root chip arrives on `a trie is a
tree`, then `c` drops with its elbow drawing in three stages, then `a`. `LETTER` chips sit under both
letter nodes (the gloss law, `--muted`, `data-layout-ignore`). On the second sentence the shared trunk
gets a 3px `--say` **vertical rail** drawn behind `c` and `a` only (one amber arrival; the rail *is* the
"same road"), and the `PREFIX` chip spans that rail. On the gloss beat the word list appears in the
lower lane as three mono chips `car` `cat` `can` (`--panel-2`, `--ink`).
**F3 (G8 + trie, walked).** Wipe enters from the **right** (neighbour differs in direction **and** in
non-chrome element — the consecutive-G8 rule; here the new element is the ring plus the dimming).
Beat 1: a 168×116 `--say` ring travels root → `c` → `a` on `walk down the typed prefix`. Beat 2: the
three branch nodes light mint one per named word, each with its END dot arriving last. Beat 3: a
`?`-free completion list `can car cat` in mono `--value` at the lower lane — the executed
`completions('ca')` output, alphabetised because Python sorted it, not because order matters.
Counted tags (lower lane y 892): **`SHARED 2`** (left 270 / w 300) and **`BRANCHES 3`** (left 590 /
w 220) — pb-21's authored widths.
**F4 (G3 cutaway over the G8 ground).** Chamber at 700px wide, centred, 0.18 scrim behind it only, chrome
still visible at its edges. `main.py`, chip `PYTHON`, four lines + terminal (the cap; every line
executed here):
```
words = ['car', 'cat', 'can']
paths = {w[:2] for w in words}
print(paths)                 # {'ca'}
print('ca' in words)         # False
```
stdout `{'ca'}` and `False` in mint. The `False` is the whole beat: **the two-letter path exists as a set
member while `'ca'` is not one of the words**, and `len(paths)` → 1 is why there is one trunk and not
three. Ligatures off, Python single quotes.
**F5 (G8 + G5 plate).** CTA plate `COMMENT IT` in solid `--say`, headline `which shares?` at 6.4cqw in a
176px box (13 chars ✓). Below it `dog` as a **drawn path** (`d` → `o` → `g`, three nodes) and the two
candidates `dot` / `cat` as **unselected chips**, with the trie's `?` chip resting on the empty root
square. No shared segment is highlighted: the ring may travel twice and then rest on **neither**, which
is pb-22's proven move for an on-screen quiz.

## Cover / title card

`autocomplete knows the road` (5 words, cut from the hook's promise) + lower third
`PROGRAMMING BASICS · BASICS III · 31` + `INTERMEDIATE`. Amber plate on `the road`. Cover keeps the REC
strip and brackets so it reads as a person mid-sentence.

## Post copy

**Feed caption:**

    How does autocomplete answer before you finish typing?
    A trie is a tree where each node is a letter, and words that share a prefix share a path. Walk down
    what you typed, then list everything below it. One catch: a path can exist without being a word, so
    the tree marks the nodes that finish something real.
    Which word shares a path with 'dog': 'dot' or 'cat'?

**Hashtags:** `#python` `#programming` `#learntocode` `#datastructures` `#trie`
**X:** `autocomplete answers before you finish because the dictionary is a tree of letters. car, cat and
can share c then a and split three ways - SHARED 2, BRANCHES 3. you walk to the prefix and list
everything under it. the catch: a path can exist without being a word. which shares a path with dog:
dot or cat? #python`
**LinkedIn:** the production version of this is search-as-you-type over a real lexicon, and the reason
it stays fast is that the shared prefix is paid for once at index time rather than on every query.
The follow-up question is memory: a trie trades space for that speed, and most teams reach for a
compressed form (or an SQLite FTS index) long before a naive tree. `#python` `#programming`
`#datastructures`

**Pinned comment:** `dot - and it shares TWO letters, not one: d then o, splitting only at the third (g vs t). cat shares zero and hangs off a different child of the root, so the only place dog and cat meet is the empty root square, which is true of every pair in a trie and is why we count from the first letter. The edge case that catches people: a trie happily stores a path that is not a word. 'ca' is a real path in part 31's tree and is not in the list ['car','cat','can'] - Python said False for exactly that - so an autocomplete that lists "everything below it" must carry a marker on nodes that finish a real entry, or it will offer you 'ca' as a suggestion. Two more: a trie is not a spell-checker, because it only knows what you put into it, and if you insert 500 words starting with 'c' the frame above would need 500 branches - which is why real ones are drawn as one trunk plus a count, and why Radix tries collapse single-child chains.`

## Accuracy

Executed 2026-11-01, Python 3.13.15 (bible § 4): a trie built from `['car','cat','can']` has **one**
child at the root (`c`), **one** child under `c` (`a`), and **three** under `a` (`n`, `r`, `t`) → **5
letter nodes** plus the root and three end markers. `completions('ca')` → `['can','car','cat']`;
`completions('c')` → the same three; **`completions('d')` → `[]`**. The trap, executed: **path `'ca'`
exists → True, `'ca'` is a word → False**, while `'car'` is a word → True. Chamber lines run here:
`{w[:2] for w in words}` → `{'ca'}` and `'ca' in words` → `False`. Trie of `['dog','dot','cat']`:
root children `['c','d']`; shared-prefix length `dog`~`dot` → **2**, `dog`~`cat` → **0**;
`completions('do')` → `['dog','dot']`.
Autocomplete products (`SEARCH BOX`, `SPELL CHECKER`, `PHONE CONTACTS`) are **chips, never chambers** —
no app was opened to produce a number (bible § 4d).

## Gate state

G8 chrome is proven (pb-14/17/18) — copy it. **G11-trie is not proven anywhere**, and it inherits 27's
grid, which is also unproven. Snapshot-read in this order: (1) **the END dot is on `n`/`r`/`t` and absent
on `a`** — a dot on `a` deletes the part's whole point; (2) the empty root square reads as intentional
(not as a missing node) — if it looks broken, the fix is a `ROOT` tab, and that is a report, not a
silent change; (3) the mono letters are not ligated and `c` / `a` are visibly two nodes, not one
two-letter box; (4) **width**: three branches at L3 is the plan's cap (four children maximum per level),
so a fourth word is a chip, not a branch; (5) the `--say` trunk rail behind `c`/`a` does not collide with
the elbow runs at y 420/580, and there is only one amber arrival per beat; (6) F2 and F3 differ in wipe
direction and non-chrome element, or this is five identical cards. If the trie cannot live inside the
chrome at 1080 wide, **say so loudly** — 27/28/29 copy this grid decision.
