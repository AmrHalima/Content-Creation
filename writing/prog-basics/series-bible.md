# Programming Basics — Series Bible (11-part short-form learner series)

Campaign: `prog-basics`. Parts: `videos/prog-basics-01-variable/` …
`videos/prog-basics-11-for-vs-while/`. Written layer: `writing/prog-basics/pieces/`.
Manifest: `writing/prog-basics/BATCH.md`.
Status: stage 3-4. Angles pre-decided by the user; strategy/angle gate collapsed (see § 0).

This file is the shared truth for all eleven parts. A per-part `BRIEF.md` is that run's
record; this is what they all point at. If a part file disagrees with this one, **this file
is the campaign decision and the part file is the exception — say so out loud rather than
silently reconciling.**

---

## 0. What is decided and what is not

**Collapsed by the user, not by this run.** The eleven hooks, explanations, examples and CTA
mechanics are pre-authored. `content-strategy`, `marketing-ideas`, `marketing-council` and the
angle pass of `copywriting` were **not** run: there is nothing to choose. What was run instead:
`copy-editing` (rhythm, length, spoken delivery), the "No AI Tells" blacklist, and
`social` (caption/hashtag mechanics). Scope of permitted change: polish, pacing, on-screen
text, and **technical accuracy** (§ 9). Hooks may not be swapped; CTA mechanics may not change.

**Not collapsed, and now the campaign's own decisions:** format/runtime (§ 1), audience lane
(§ 2), visual grammar (§ 4), language lock (§ 7), and the accuracy corrections (§ 9), which
are **proposals pending user approval** because they touch the user's wording.

## 1. Format

**Primary deliverable: rendered vertical short-form video**, 1080x1920, **42-48s**, plus the
written layer (script, on-screen text, cover, caption/hashtags) that each video is built from.

Why this and not written-only:
- 15 of the 17 projects already in `videos/` are exactly this artefact, and `studio/` exists to
  make the eleventh film cheaper than the first. Written-only would leave the production layer
  idle and the batch unpublishable.
- The format tags are comment-section mechanics (Quiz/Save/Tag/Myth/Debate/Challenge) — they
  only work on a native vertical feed: TikTok, Reels, Shorts, with a LinkedIn/X repost of the
  same file.
- `.agents/product-marketing.md` already names the 60-90s vertical social clip as the use case;
  this series cuts it to ~45s because the payload is one concept, not a thesis.

Consequences: narration is required (so `studio voice` + `studio cues` + burned captions), the
code example is a *visual*, and the CTA is a card, not a spoken sign-off.

## 2. Audience lane (the one real conflict in this brief)

`.agents/product-marketing.md` states the primary use case as "experienced developers … not a
beginner's tour", and its words-to-avoid list bans beginner framing ("what is SDLC?"). Eleven
of these titles are beginner framing by design: *What is a variable?*, *What is a function?*.

**Campaign decision:** this is a **second audience lane** — first-week learners — sitting
beside the practitioner lane, the way `osi-layers` (a beginner series) already sits beside
`backend-patterns`. The practitioner lane is not being replaced or re-argued here; the context
document's pending "audience-lane rewrite" (its Changelog, v1-v3) is the right place to settle
it, and that needs the user's approval and a version bump. **Proposed Learnings row is in
§ 10; do not treat it as written.**

What carries over unchanged from the house voice, and it is what keeps this lane from reading
as generic edutainment:
- Second person, active verbs, contractions, short sentences. No lecture register.
- Density: ~45 seconds must still earn ~45 seconds. No "in this video", no restating the title.
- Wry, never cute. No exclamation marks, no "let's dive in", no emojis in spoken copy.
- **No beat may open on a definition** (design.md). Every part opens on the user's hook, which
  is already a question, a stake, or a contradiction. Definitions arrive as an analogy
  (a box, a recipe, a seat) or after an example.

## 3. Uniform part shape (the spine that makes 11 parts one channel)

```
F1 HOOK      the user's hook line, kinetic type, nothing else on screen     ~7s
F2 CONCEPT   the first half of the explain: the analogy named and shown     ~9s
F3 CONCEPT   the second half: the mechanism, the thing that makes it work   ~9s
F4 EXAMPLE   the code chamber, typed then run, output appears               ~11s
F5 CTA       the engagement card: question restated + the mechanic verb     ~8s
```

Five frames per part, ~44s, ~88 narration words at the campaign rate of **2.0 words per
finished second**. F5 is always the CTA and always carries the difficulty badge, because on a
feed the last frame is also the one looping under the platform chrome.

The explain text may be re-cut across F2/F3 freely (it is polish, not substance), but never
compressed into one frame: one idea per frame is the rule that makes a 45s part legible.

## 4. Visual grammar (new series; the `backend-patterns` grammars do not apply)

`backend-patterns` § 4 is a three-actor call graph. These parts have no call graph — the
subject is a single value and a name. The series grammar:

**G1 — hook type.** One claim, max 7 words per group, Inter 700 at display scale, on the light
canvas. The keyword the voice stresses goes teal. No illustration, no decoration: the hook
frame is the only frame allowed to be type alone. It is also the cover frame (§ 6).

**G2 — the box.** The series' signature graphic: a **label pill above a rounded chamber with a
value sitting inside**. One name, one value. Everything in this series that involves a name
pointing at a value is drawn with this shape: variables (01), the four types as four boxes with
different contents (02), a string as a row of boxes each holding one character (03), the
parameter as an **empty** box and the argument as the value dropped into it (05), the local box
inside a smaller room that closes (07), the box with a padlock (08). The box is never drawn
twice with different geometry.

**G3 — the code chamber (once per part, always F4).** Petrol `#0F1818` chamber, `#141413`
titlebar reading `main.py`, JetBrains Mono, **max 4 lines**, plus one output line in a terminal
style below. Colour roles are fixed: default value `#E8F6F7`, muted `#B5B5B5`, **teal `#7BD3D8`
for the token the voice is naming right now**, **coral `#CD3333` for an error and only for an
error**. Never a full program, never more than one function, never a snippet that has not been
executed (§ 9).

**G4 — the split (only where the part is a comparison).** Two chambers side by side, each ≤3
lines, one label each: `5 + 5` over `10`, `'5' + '5'` over `'55'`; `return` over `print`;
`for` over `while`; `switch` over `match`. Parts 02, 06, 10, 11 use it. Portrait note inherited
from `osi-layers-1-sideways`: stack vertically by default; two *short* fragments read better
across, and side-by-side is permitted **only** at ≤3 lines per side, recorded in the part's
`## Customizations`.

**G5 — the CTA card.** The question restated in ≤9 words, the mechanic verb in teal
("DROP THE NUMBER", "SAVE THIS", "PICK A SIDE", "TAG THEM"), and the `[B]`/`[M]` badge. It must
stay legible with the platform's own overlay on top of it, which is what § 5's geometry is for.

**Ambient layer (design.md non-negotiable):** every frame carries a live background — floating
teal pill shapes on the 12s `hero float` loop, or mesh-glow drift. Nothing sits frozen under a
running voiceover. Each frame still carries all four layers: entrance, ambient, emphasis on the
spoken keyword, exit.

## 5. Canvas geometry (overrides one stale line in `backend-patterns` § 4)

Portrait 1080x1920 per current `.agents/design.md` (mapped to the Halima lineage 2026-10-27):

| Zone | Value |
|---|---|
| Top chrome safe (progress bar, back button) | nothing critical above y = 230 |
| Frame content box | y 230 → **1004** |
| Caption band | `--cap-band-top: 1024px`, height 320px (band 1024 → 1344) |
| Platform territory | bottom 30%, y 1344 → 1920, **always empty** |

`backend-patterns` § 4 says "nothing load-bearing below y = 1594", which is the *framework*
keep-out (H x 0.83), not this spec's lifted band. **This campaign uses the lifted band** and
therefore obeys the stricter y ≤ 1004. Known and accepted consequence: `studio verify` reports a
medium keep-out hit on the caption band because its own cap still sits at 83% (design.md's
"Tooling note" records this gap). Medium keep-out on the band is **expected, not a defect**;
HIGH findings are not. Do not "fix" it by pushing captions back down to 1600px — that is where
the platform draws its own UI.

The content box is only ~774px tall, so: code chambers are ≤4 lines, the box motif is sized in
cqw, and reading text stays ≥28px (known-traps § 13).

## 6. Cover / title card

The F1 hook frame **is** the cover, with two additions kept out of the video's caption path: a
series badge (`PROGRAMMING BASICS · NN`) and the difficulty badge. Cover text is the hook, cut
to ≤6 words — the full hook is spoken, the cover carries the sharpest fragment. Per-part cover
text is in each piece file; no part ships without it.

## 7. Audio, captions, language — CAMPAIGN LOCK

- **Voice: Kokoro `af_heart`, speed 0.74** — same switch as `backend-patterns`, offline, free,
  English only, already proven on 10 rendered parts. Local, so 11 parts cost nothing and no
  network is on the critical path (known-traps § 17).
  **This overrides `.agents/design.md`'s `voices.en` for this campaign only**; the spec file is
  not edited by a campaign run. Alternates if `af_heart` reads too low for a beginner register:
  `af_nova`, `af_sky`, `bf_emma`, `bf_isabella` — report which was used, never substitute
  silently.
- **ElevenLabs is unusable here**: `.agents/design.md` `voice.voices…voice_id` is empty and
  free-tier keys reject library voices with HTTP 402 (`studio doctor` re-reports this). HeyGen
  only on explicit request.
- **No BGM. No SFX in any part.** Eleven parts at one mark each would spend the campaign budget
  on punctuation; the house rule is motion first, sound second. If a part genuinely needs a
  mark, **report it instead of resolving one.**
- Captions EN, burned, word-level timing from `studio cues` (never estimated blocks), aligned to
  the **approved** script text so ASR spelling never reaches the screen.
- **English masters only.** The Egyptian colloquial (عامية مصرية) RTL pass is queued (§ 11), not
  in this batch: it needs a rewrite rather than a translation, `provider: gemini` + `voice:
  Kore` pinned explicitly (Gemini is not in the auto cascade and Kokoro has no Arabic), and its
  ~3 requests/minute free tier makes 11 parts a serial job, not a parallel one.

## 8. Copy constraints

- **Contrast-reveal rationed.** "It's not X, it's Y" appears at most once across the whole
  series, in a hook, per the Learnings row in `.agents/product-marketing.md`. Part 05's
  "the empty seat / the person who sits in it" is the one allowed instance; nothing downstream
  may reuse the shape.
- **No em-dashes** in on-screen text or captions. Fine in this bible's prose.
- **No triads in a row**, max one three-item list per part. Part 02 names four types (it is the
  subject), so nothing else in 02 may enumerate.
- **Spoken code is not written code.** Every piece file carries a `Spoken code` line: how each
  fragment is said (`score = score + 5` is "score becomes score plus five"; `print` is "print").
  design.md's diction rule applies: spell out what should be spoken, and never let the VO read a
  symbol the viewer cannot hear.
- **No invented output.** If a screen shows `15`, `15` is what Python prints (verified, § 9).
- Forbidden register: "simply", "just", "easy", "of course", "clearly", "quick tip",
  "game-changer", any AI tell on the `copywriting` blacklist, and any line that announces a
  lesson ("let's break this down", "in this video").
- Beginner ≠ condescending: never say "don't worry", "everyone struggles", or "it's simpler than
  you think". State the mechanic and move on.

## 9. Accuracy ledger

Every code claim below was executed on this machine (`Python 3.13.15`,
`G:\Content Creation\.tmp\verify_semantics.py`) — not recalled. Three pieces needed a fix to
stay true; the rest were confirmed. **The corrections marked PROPOSED touch the user's wording
and need approval at gate 2; nothing downstream ships them silently.**

| Part | Claim | Verified result | Status |
|---|---|---|---|
| 01 | `score = 10; score = score + 5; print(score)` | `15` | confirmed |
| 01 | CTA: starts at 100 → ? | `105` | confirmed; `105` is the pinned answer |
| 02 | `'5' * 3` in Python (the CTA's own answer) | `'555'` | confirmed; CTA is sound |
| 02 | Python type names | `int, float, str, bool`; literals `True`/`False` | PROPOSED: screen says `bool`, voice says "boolean"; the capitalisation is worth one on-screen beat |
| 02 | `'5' + 5` | `TypeError: can only concatenate str (not "int") to str` | available as an alternate line |
| 03 | `word[0]`, `word[1:3]` | `'c'`, `'od'` | confirmed |
| 03 | *why* `1:3` gives `'od'` | end index excluded | PROPOSED: add the exclusion (the example is unexplained without it). Bonus, not used: `word[9]` → `IndexError`, but `word[1:99]` → `'ode'`, no error |
| 04 | `greet('Sara')`, `greet('Omar')` | `Hi Sara`, `Hi Omar` | confirmed |
| 05 | parameter = placeholder, argument = value | `add(2, 3)` → `5`; wrong arity → `TypeError` | confirmed |
| 06 | `return x*2` vs `print(x*2)` | return gives `8`; the print version **returns `None`** | PROPOSED: say so. It is the actual argument for Team Return and the brief omits it |
| 07 | `def f(): x = 1` then `print(x)` → `NameError` | `NameError: name 'x' is not defined` | **MISLEADING AS WRITTEN** — PROPOSED fix below |
| 08 | `MAX_USERS = 100` as "a name you agree never to reassign" | `MAX_USERS = 500` succeeds, no error | confirmed; the brief's framing is already right. PROPOSED: make "nothing stops you" explicit |
| 08 | `s = 'hi'; s[0] = 'H'` | `TypeError: 'str' object does not support item assignment` | confirmed; exact text on screen |
| 09 | one-liner challenge | `print('Welcome' if age >= 18 else 'Sorry')` ✔ ; `print('Welcome') if … else print('Sorry')` ✔ ; **`if age >= 18: … else: …` on one line = SyntaxError**; one-line `if/elif` = SyntaxError | PROPOSED: name the trap under the CTA. The most likely comment is broken code |
| 10 | `switch(day){ case 'sat': … break; default: … }` | real keyword in JS/Java/C#/C/PHP; fallthrough without `break` is real | confirmed **but** the series' code language is Python (01-09, 11). PROPOSED: label the fragment `javascript`, keep Python's `match`/`case` (verified, 3.10+, no fallthrough) as the second chamber, or the piece contradicts the rest of the series |
| 10 | "in *many* languages you need a break" | Kotlin `when` and Swift `switch` do not fall through | confirmed as worded — keep "many", never "all" |
| 11 | `for i in range(3)` | yields `0 1 2` | confirmed; show the values, it re-pays part 03's zero-index beat |
| 11 | `while not done:` | correct | confirmed |

**Part 07, the one substantive error.** As briefed, `def f(): x = 1` followed by `print(x)`
raises `NameError` **because `x` was never defined at module level** — not because of scope. A
viewer can reproduce the error without ever writing `f()`. And with a global `x = 99` present,
the same code prints `99` in silence (verified): the local never leaks, which is exactly the
thing the piece is claiming. So the example as written proves nothing and can be falsified by
anyone who tries it. Shipped shape instead: `x = 99` outside, `def f(): x = 1`, call `f()`, then
`print(x)` → `99`, and the line "the box was created inside, and it died inside". The scope
claim survives; the demonstration finally supports it. The CTA ("comment the error name you've
seen the most") is untouched.

## 10. Proposed Learnings rows (for user approval, version bump on `.agents/product-marketing.md`)

*Nothing here is written to the context document. This run has no authority to bump its version.*

1. **Two audience lanes, one voice.** A learner series can keep the house register (second
   person, dense, wry, no beat opening on a definition) without keeping the practitioner
   audience — the constraint that carries is the *density*, not the *expertise*. Evidence:
   `prog-basics` 11 parts built on `osi-layers`' precedent after the "not a beginner's tour"
   line was read as a blocker.
2. **A hook pre-decided by the user is still editable for truth.** The accuracy ledger (§ 9)
   caught three claims that would have shipped a falsifiable demo. When the brief is
   pre-authored, the copy pass must include an interpreter run, not only a read.

## 11. Queued, not authorized

- **Arabic pass.** Later, separate, sequential (Gemini rate limit), rewrite not translation.
- **Distribution.** Nothing is scheduled, posted, or pushed. Captions and hashtags in the piece
  files are copy waiting for a decision.
- **Blog.** No article variants this run. A `blog/src/content/posts/en|ar/` companion per part
  would be a second campaign pass (and the site URL is still the placeholder
  `https://blog.example.com`, so canonicals would be wrong — `studio doctor` reports it).
- **Render quality above draft.** Not authorized anywhere in this campaign.
- **Part 12+.** The natural next tranche (lists, dicts, errors, imports, classes) is deliberately
  not pre-written here: adding topics to the batch is a strategy decision that belongs to the
  user, and `BATCH.md` has room for it.

## 12. Production-line rules (11 parts, so these are load-bearing)

1. **Parts 01 and 02 are the grammar carriers.** Nothing else starts until 01's frames validate
   § 3's shape and § 5's geometry at 1080x1920 by *snapshot*, not by `check`. A broken layout
   paid for eleven times is the expensive mistake in this campaign.
2. **One project per part, one run per project.** Write only inside `videos/prog-basics-NN-*/`.
3. **Shared files are read-only to a run:** `.agents/design.md`,
   `.agents/product-marketing.md` (including Learnings), this bible, `studio/**`,
   `.media/manifest.jsonl`.
4. **No `preview --background`** in parallel runs; `snapshot --at` for frame review (two stale
   previews were once left on 3002/3003).
5. **Free gates get batched once, at campaign level:**
   `node studio/tools/studio.mjs batch verify cues assemble check --campaign prog-basics`.
6. **No render without the user's explicit approval,** always via `studio render --quality draft
   --yes`. Draft only.
7. **Re-verify at the moment of decision.** A green `check` from earlier in a run is not
   evidence: three defects in this workspace shipped past a passing `check`.
8. **Frame-authoring rules, all four automated by `studio verify` and all four previously
   shipped past a green `check`** (known-traps § 1-3, 10-11): never tween `letterSpacing`
   (layout snap, not seek-safe); no `tl.set({text})` (no TextPlugin); every animated element
   carries a **class** as well as an id; anything tweened in x/y/scale is `inline-block` or
   block; delayed `fromTo` passes `immediateRender: false`.
