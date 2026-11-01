# prog-basics — CORRECTIONS LEDGER (before / after, with executed evidence)

Campaign: `prog-basics` · 11-part vertical series (1080x1920), Python code language.
Purpose: the explicit before/after record of the six technical corrections the user approved on the
2026-10-27 run. Rollup lives in `BATCH.md` § "Accuracy ledger summary"; the rules the campaign
follows are `series-bible.md` § 9 (accuracy ledger) and § 0 (scope of permitted change: polish,
pacing, on-screen text, technical accuracy — hooks not swappable, CTA mechanics not changeable).

**Every output quoted below was executed on this machine for this file, not copied from the piece
files.** Interpreter: `Python 3.13.15 (tags/v3.13.15:4061bc4, Aug 5 2026, 13:05:39) [MSC v.1944 64
bit (AMD64)]`, `C:\Users\AmrPC\AppData\Local\Programs\Python\Python313\python.exe`.
Companion JS runtime (pb-10 only): `node v24.15.0`.
Scripts: `.tmp/verify_corrections.py` (48 checks), `.tmp/verify_switch_js.js`,
`.tmp/js_chamber_snippet.js`.

**Provenance of BEFORE.** The user supplied eleven pre-written pieces; they are not kept as a
separate file on disk. Every BEFORE below is quoted from the original wording as preserved verbatim
in each piece's `## Accuracy` section and in the `series-bible.md` § 9 ledger row (cited per entry).
Where the original was a code fragment rather than a sentence, the fragment is quoted as the ledger
records it.

Ordering is by severity, not by part number.

---

## 1. pb-07 · Scope: local vs. global — **SEVERITY: BUG** (the brief as written teaches something false)

File: `writing/prog-basics/pieces/07-scope.md` · project `videos/prog-basics-07-scope/` (not started)

**BEFORE** (the brief's demo; `series-bible.md` § 9 row 07 records it as
`` `def f(): x = 1` then `print(x)` → `NameError` ``):

```
def f():
    x = 1
print(x)      # taught as "the local died with the function"
```

**AFTER** (rebuilt demo, `07-scope.md` F4, authored as two timed groups):

```
x = 99
def f():
    x = 1
f(); print(x)      # 99
print(x)           # NameError: name 'x' is not defined  [second block]
```

with narration F4: "X at the top level is ninety-nine. Inside f, x becomes one. Call f, then print
x. Still ninety-nine. Reach for f's x from outside and Python says NameError."

**Executed evidence (Python 3.13.15):**

| Fragment | Result |
|---|---|
| `def f(): x = 1` then `print(x)` — **f never called** | `NameError: name 'x' is not defined` |
| `def f(): x = 1` then `f()` then `print(x)` | `NameError: name 'x' is not defined` (identical) |
| `x = 99; def f(): x = 1; f(); print(x)` | prints `99`, returns `99` — the global never changes |
| `def f(): x = 1` with `print(x)` **inside** f | prints `1` — inside the scope the name is real |
| `x = 99; def f(): x = x + 1; f()` | `UnboundLocalError: cannot access local variable 'x' where it is not associated with a value` |
| `def f(): global x; x = 1; f()` then `print(x)` | `99` → becomes `1` with the `global` statement (escape hatch, not shown) |

**Why it matters:** the original error appears whether or not the viewer ever writes or calls `f()`,
so it teaches "scope" from a symptom that has nothing to do with scope — a beginner can reproduce it
while failing to reproduce the lesson, and can falsify the demo in ten seconds by adding `x = 99`.
The rebuilt demo shows both halves of the claim at once: the local dies inside (global stays `99`)
and the `NameError` is still on screen, in the group where it is actually caused by scope.

---

## 2. pb-09 · If/else conditionals — **SEVERITY: TRAP** (the CTA leads viewers into an error)

File: `writing/prog-basics/pieces/09-if-else.md` · project `videos/prog-basics-09-if-else/` (not started)

**BEFORE** (F5 as briefed — the CTA mechanic verbatim, nothing about the trap;
`09-if-else.md` F5 note: "Keep the mechanic word for word; the warning is one added sentence"):

> Challenge: rewrite that as a one-liner. Show me in the comments.

**AFTER** (F5 narration + F5 screen text + reveal, `09-if-else.md`):

> Challenge: rewrite that as a one-liner. Show me in the comments. Warning, the obvious attempt does
> not parse.

on F5, in muted micro type: `the obvious attempt is a SyntaxError`; pinned comment carries the
reveal after 24h.

**Executed evidence (Python 3.13.15, `compile()` per fragment):**

| Fragment | Result |
|---|---|
| `if age >= 18: print('Welcome') else: print('Sorry')` (one line) | `SyntaxError: invalid syntax` |
| `if age >= 18: print('a') elif age >= 13: print('t')` (one line) | `SyntaxError: invalid syntax` |
| `else: print('Sorry')` on its own line | `SyntaxError: invalid syntax` |
| `if age >= 18: print('Welcome')` (one line, no else) | parses OK — the one-line form that *is* legal |
| `print('Welcome' if age >= 18 else 'Sorry')` | valid; at age 20 → `Welcome`, at 15 → `Sorry` |
| `print('Welcome') if age >= 18 else print('Sorry')` | valid; at age 20 → `Welcome`, at 15 → `Sorry` |
| block form, `age = 20` / `age = 15` | `Welcome` / `Sorry` |

**Why it matters:** a challenge's replies are the comment section, and the single most likely answer
here is code that cannot run; leaving it un-warned means the part rewards a SyntaxError and other
beginners copy it, which is how the wrong shape becomes habit.

---

## 3. pb-10 · Switch statements — **SEVERITY: TRAP** (the trap is the on-screen fragment, not the CTA)

File: `writing/prog-basics/pieces/10-switch.md` · project `videos/prog-basics-10-switch/` (not started)

**BEFORE** (F4 as briefed: the `switch` fragment and Python's `match` side by side with **no
language label on either** — `series-bible.md` § 9 row 10: "the series' code language is Python
(01-09, 11)"; `10-switch.md` § Accuracy: "Unlabelled, a viewer following parts 01-09 will type
`switch(day){` into a Python REPL and get a syntax error").

**AFTER** (F4, `10-switch.md`): "Two chambers side by side, each three lines, each with its own
titlebar filename so the language is on screen (`day.js` / `day.py`)":

```
switch (day) {        match day:
  case 'sat':           case 'sat':
    ...; break;           print('weekend')
  default: ...          case _: ...
}
```

**Executed evidence:**

| Check | Result |
|---|---|
| `switch (day) { case 'sat': console.log('weekend'); break; }` fed to Python | `SyntaxError: invalid syntax` |
| `switch (day)` without `break`, day = `sat` (node v24.15.0) | `["weekend","rest","monday"]` — fall-through is real |
| same, **with** `break` | `["weekend"]` |
| `switch ('2')` with `case 2:` | `["no match"]` — `switch` compares with `===` (pinned comment's claim holds) |
| Python `match day:` / `case 'sat':` … `case _:`, day = `sat` | prints `weekend (sat)` only — no fall-through, no `break` |
| `switch (day) { … case 'sat': ...; break; default: ... }` (node v24.15.0) | `SyntaxError: Unexpected token ';'` |
| `match day: case 'sat': print(…); case _: ...` (Python) | parses OK (Ellipsis is a real statement) |

**Why it matters:** nine of the eleven parts teach Python, so an unlabelled brace-and-colon fragment
is a coin flip in the viewer's head, and the loser of that flip is a beginner with a red error and
no idea why — the series would have caused it. Labelling costs one titlebar word and keeps the
`switch` half of the debate.

**Open items on this entry, found while verifying (see § Second-order findings below):** the `...`
elision in the left chamber is not runnable JavaScript (the right chamber's `case _: ...` *is*
runnable Python), and the Accuracy section's `case _ | 'sat' | 'sun'` grouping claim is wrong.

---

## 4. pb-02 · Data types: int, float, string, boolean — **SEVERITY: POLISH** (screen-text wording)

File: `writing/prog-basics/pieces/02-data-types.md` · project `videos/prog-basics-02-data-types/` (built)

**BEFORE** (as briefed; `02-data-types.md` § Accuracy proposals 1 and 2): screen names
`int / float / string / boolean`, and the bool value shown as lowercase `true` ("the piece otherwise
invites the viewer to type it").

**AFTER** (F3 screen text): `int 5` / `float 5.0` / `str 'five'` / `bool True` — "The tags in mono,
the values in Inter 700. `True` is shown **capitalised**"; the voice keeps the spoken long names and
the title stays as briefed.

**Executed evidence (Python 3.13.15):**

| Fragment | Result |
|---|---|
| `type(5).__name__, type(5.0).__name__, type('five').__name__, type(True).__name__` | `('int', 'float', 'str', 'bool')` |
| `repr(True), repr(False)` | `('True', 'False')` |
| `print(true)` executed | `NameError: name 'true' is not defined` (it parses — the failure is at runtime) |
| `5 + 5` | `10` |
| `'5' + '5'` | `'55'` |
| `'5' * 3` (the CTA's own answer) | `'555'` — the quiz is fair |
| `5 * '5'` | `'55555'` |
| `'5' + 5` | `TypeError: can only concatenate str (not "int") to str` |

**Why it matters:** a learner who types what the screen said gets a `NameError` on the first try, on
the one line that is supposed to feel safe; and the names on screen are the names they will have to
type and search for.

---

## 5. pb-03 · Strings vs. characters — **SEVERITY: POLISH** (missing half-sentence)

File: `writing/prog-basics/pieces/03-strings-vs-chars.md` · project
`videos/prog-basics-03-strings-vs-chars/` (built)

**BEFORE** (F3 narration as briefed, ending at the zero-index beat):

> Line those symbols up and you have a string. Each one sits at a position, counting from zero.

**AFTER** (correction #3, in the VO and on screen):

> Line those symbols up and you have a string. Each one sits at a position, counting from zero. A
> slice takes the letters before its end.

on F3: an amber rule spans boxes 1 and 2 tagged `word[1:3]`, a vertical stop at index 3, box 3 dims
to 42%, and the line reads **a slice stops before its end**.

**Executed evidence (Python 3.13.15):**

| Fragment | Result |
|---|---|
| `word = 'code'; word[0]` | `'c'` |
| `word[1:3]` | `'od'`, `len(...) == 2` (index 3 excluded; equals `word[1] + word[2]`) |
| `word[1]`, `word[2]`, `word[3]` | `'o'`, `'d'`, `'e'` |
| `'code'[9]` | `IndexError: string index out of range` |
| `'code'[1:99]` | `'ode'`, **no error** |

**Why it matters:** without the exclusion, `1:3` looks like an arbitrary rule to memorise (and
"why not 4?" has no answer); with it, the slice is the same addressable-position idea the part just
taught. Both halves of the asymmetry above were deliberately held back — they would turn a 40s part
into a footnote.

---

## 6. pb-06 · Return values vs. side effects — **SEVERITY: POLISH** (an addition, and the part's strongest argument)

File: `writing/prog-basics/pieces/06-return-vs-print.md` · project
`videos/prog-basics-06-return-vs-print/` (not started)

**BEFORE** (F4 as briefed — the difference asserted, not demonstrated; `06-return-vs-print.md`
§ Accuracy: "As briefed, both functions 'look identical' and the difference is asserted"):

> Both double four, and both show eight on the screen.

**AFTER** (F4 narration + the F4 fragments):

> Both double four, and both show eight on the screen. But the print version returns None. So y
> equals double of four gives you nothing to work with.

```
def double(x):            def double(x):
    return x * 2              print(x * 2)

y = double(4)  # 8        y = double(4)  # None
```

with `None` in coral `#CD3333`.

**Executed evidence (Python 3.13.15):**

| Fragment | Result |
|---|---|
| `def double(x): return x * 2` then `y = double(4)` | `y` is `8` (`int`); **stdout empty** |
| `def double(x): print(x * 2)` then `y = double(4)` | stdout `8`; `y` is `None` |
| …then `y + 1` on the print version | `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'` |
| bare `double(4)` typed in an interactive REPL (return version) | echoes `8` |
| `double(4)` as a line in a saved `main.py` (return version) | prints nothing (`''`) |

**Why it matters:** "nothing handed back" is invisible until the caller tries to use the value, and
`y = double(4)  # None` is the one line that turns the debate from an assertion into something the
viewer can prove themselves — it is also the reason a reviewer asks for return values.

---

## Second-order findings (the files themselves, checked)

These were found by executing the piece files' own claims. **The first is a real error in a `##
Accuracy` section and should be fixed before pb-10 is authored.**

1. **`10-switch.md` § Accuracy claims `case _ | 'sat' | 'sun'` was "confirmed by running it on
   3.13.15". It was not runnable.** Python rejects it at compile time:
   `SyntaxError: wildcard makes remaining patterns unreachable`. The grouping that *does* work is
   `case 'sat' | 'sun':` (verified: `sat` → or-pattern, `sun` → or-pattern, `mon` → weekday), and
   `case 'sat' | _:` (wildcard last) also parses. Any `case _` that is not the last pattern kills
   the block. The rest of pb-10's Accuracy section held up; only this one fragment citation is wrong,
   and it is quoted in the piece as executed evidence.
2. **`07-scope.md` F4 is only true if the two groups stay separate files.** Executed as one
   `main.py` top to bottom — `x = 99`, `def f(): x = 1`, `f()`, `print(x)`, `print(x)` — the second
   `print(x)` prints `99`; **no `NameError` ever fires**, because the global `x` is still there. The
   `NameError` needs the second group to be a snippet with no global `x` (verified: `def f(): x = 1`
   / `f()` / `print(x)` alone → `NameError: name 'x' is not defined`). The prose says "two timed
   groups" and "the isolated `print(x)`", so the intent is right, but the code block as printed
   reads as one wall. When pb-07 is authored, group two needs its own visible filename (e.g.
   `f_scope.py`, no `x = 99` line) or a `# different file` marker, or the coral error comment on
   screen will be falsifiable in exactly the way the correction was meant to remove.
3. **pb-10 F4's JS chamber is not runnable either, as drawn.** `...; break;` → node v24.15.0
   `SyntaxError: Unexpected token ';'`, while the Python chamber's `case _: ...` parses fine
   (Ellipsis is a statement). An elision convention that is legal on one side of a split and illegal
   on the other is a small version of the same trap the labelling fixes; `console.log('weekend');`
   (or a styled `…` outside the code type) is the safer mark-up.
4. **pb-06's "both show eight on the screen" is context-dependent.** True in a REPL (a bare
   `double(4)` echoes `8`), false in a saved script (stdout is empty) — and the frame's own titlebar
   says `main.py`. The on-screen `# 8` comment carries the number regardless, so this is a watch
   item for the narrator line, not a correction.
5. **pb-02's proposal 1 describes a voice track the shipped part does not have.** The Accuracy note
   says "the voice says 'integer, float, string, boolean'", while the part's own F3 line and the
   built `SCRIPT.md` have the voice say "Int … float … str … bool". The screen text is right; only
   the proposal's parenthetical is stale.

---

## Approved

**The user approved all six corrections on the 2026-10-27 run**, after asking to be walked through
them, and authorised autonomous completion of the rest of the batch — the user was away while the
work proceeded. This file is the record they come back to: nothing here is a pending proposal any
more, and per `series-bible.md` § 0 the corrections touched accuracy and screen text only — no hook
was swapped, and no CTA mechanic changed (pb-09's challenge line is verbatim plus one warning
sentence; pb-07's quiz CTA is untouched; pb-10's debate CTA is untouched).

**Built projects — BEFORE or AFTER?** (`videos/prog-basics-01-variable/`,
`…-02-data-types/`, `…-03-strings-vs-chars/`; 01 and 02 predate the rewrite of the piece files, so
they were checked fragment by fragment rather than assumed.)

| Project | Verdict | Evidence on disk |
|---|---|---|
| `videos/prog-basics-01-variable/` | **AFTER / not applicable** — pb-01 carries no correction, and its two figures are the executed ones | `compositions/frames/03-name-stays.html` and `04-example.html` show `15` (executed: `score = 10; score = score + 5` → `15`); `05-quiz.html` shows the box value `100`, whose answer `105` matches `BRIEF.md` § Accuracy ("prints `15`; starting from `100` prints `105`") |
| `videos/prog-basics-02-data-types/` | **AFTER** — both pb-02 proposals are already in the pixels | `compositions/frames/03-the-four.html:74-75` — value `True` (capitalised) with tag `bool`; no `boolean`/lowercase `true` anywhere in the frames' visible text; `04-split.html:78,83-84` — `10` and `'5' + '5'` → `'55'` in single quotes; `05-quiz.html:65-67` — `'5'` `*` `3`. **Stale status text, not stale build:** `BRIEF.md:48-49` still labels both as "PROPOSED … awaiting approval at gate 2", which approval has now superseded |
| `videos/prog-basics-03-strings-vs-chars/` | **AFTER** — correction #3 shipped in VO *and* on screen | `SCRIPT.md` line 3 ends "A slice takes the letters before its end."; `STORYBOARD.md:75` carries the same line; `compositions/frames/03-row.html:182` — `a slice stops **before** its end`; `04-code.html:163-171` — `word = 'code'`, `word[0]  # 'c'`, `word[1:3]  # 'od'`; `BRIEF.md:70` states correction #3 shipped, executed on Python 3.13.15 |

**pb-06 … pb-11: nothing authored into a composition yet, so their AFTER wording lives in the piece
files and this ledger.** `videos/prog-basics-04-functions/`, `-05-params-vs-args/`,
`-06-return-vs-print/` and `-07-scope/` were scaffolded by parallel runs *while this file was being
written*; at the moment of checking, pb-06 and pb-07 already had `SCRIPT.md` carrying the AFTER
lines — pb-06 line 48 "…But the print version returns None. So y equals double of four gives you
nothing to work with." and pb-07 line 43 "Outside the wall, x is ninety-nine. Inside f, x becomes
one. Call f, then print x. Still ninety-nine. Now reach for f's x from outside: NameError." — with
`compositions/frames/` still empty in both. pb-09 and pb-10 had no project directory at all at that
moment. Re-run `node studio/tools/studio.mjs status --sync` before treating any of this as current,
and apply second-order finding 2 (give pb-07's group two its own filename, or no `x = 99` line in
scope) when its F4 frames are authored. Nothing under `videos/` was modified to produce this file,
and `BATCH.md` was read-only as well.
