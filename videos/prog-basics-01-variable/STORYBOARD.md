---
format: 1080x1920
duration: 42.7s
message: "A variable is a name pointing at a value, and the name outlives the value."
arc: hook → the labeled box → the value swaps and the name stays → the worked example → the quiz
audience: first-week programming learners (prog-basics lane, series-bible section 2)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 1 of 11
---

# STORYBOARD — prog-basics-01-variable (prog-basics, part 1 of 11)

English master, portrait 1080x1920, ~45s, ceiling 52s. Copy source of record:
`writing/prog-basics/pieces/01-variable.md`. Shape: bible § 3 (F1 hook, F2+F3 concept, F4 example,
F5 CTA). Grammar definitions: bible § 4 and `frame.md` § 4. Durations below are estimates until
`studio voice` syncs them; measured VO wins, and `studio cues` supplies the word onsets.

## Order-independence (bible § 2 lineage: every part stands alone)

**Check A — does any line presuppose another part?** No. F1 opens on the object (an app remembering
something), not on a prior claim. No "as we saw", no "part 2", no callback that needs context.
The only forward reference is the *box* motif, which this part defines rather than borrows.
**Check B — swap two claims, is the story still true?**
- **Swap F2 ↔ F3.** FAIL, kept. F3 says "change what is inside", which presupposes a box that
  already has something in it.
- **Move F4 before F3.** FAIL, kept. `score = score + 5` is the demonstration *of* the claim in F3;
  showing it first turns F3 into a summary of something the viewer has already seen, which is fine
  for a recap and dead weight at 25 seconds.
- **Swap F1 ↔ F5.** FAIL, kept. The hook is the hook.
Conclusion: the order is load-bearing throughout; nothing in this part is reorderable. That is
correct for a 45-second definition and it is why this part carries the grammar rather than a variant.

## Grammar decisions (bible § 4, re-cut to frame.md v2 on the 16:00 re-pass)

- **G1 hook (F1)** — three display lines on the graphite ground, `remembers` swept amber (P1). Carries
  the cover.
- **G2 box (F2, F3)** — the motif's debut: chamber with a **name tab** on its top-left edge (not a
  centred pill), value in mint. **F3 is the same geometry with different contents and a tab that
  carries no transform at all**, which is the deliberate decision the whole part turns on: an
  entrance or movement tween on the tab would contradict "the name stays".
- **G3 code chamber (F4)** — `--panel` on the shared ground, `main.py` titlebar + `PYTHON 3.13` chip,
  3 lines typed under a caret (P3) + one terminal strip. `score` is ink in all three lines because
  the name is the subject; values are mint; only the `+` borrows amber while the voice says "plus".
  **No coral anywhere in this part**: coral means error and part 1 raises none.
- **G5 CTA (F5)** — the box returns with its given value `100`, a `+ 5` chip steps in beside it, and
  a **dashed empty chamber with a `?`** stands for what prints (v2's "waiting to be filled" grammar).
  Mechanic verb `DROP THE NUMBER BELOW` as a solid amber plate; series line in muted mono.

## Video direction (shared by all five frames) — identity v2 "the bench"

One graphite ground `#15181D` in every frame: dot grid at 56px, an amber glow upper-left and a mint
glow lower-right breathing, and the 1px shelf rule at y = 1010. Every ground animation starts and ends
at its own zero, so a cut changes only the content and the board never reloads. Space Grotesk 700
carries every word the viewer has to read; JetBrains Mono carries labels, code, chrome and the
badges. Inter and Caveat are gone (v2 drops both). Colour is a lesson: amber = the word the voice is
on, mint = a value, and this part uses no coral at all. There is **no** ambient pill layer.
Each frame carries entrance wipe + one ambient breath + emphasis on the spoken token + exit push
(F5 excepted: it loops under the platform's chrome), with the wipe direction alternating
left / right / below so no two joins feel alike. Content lives between y = 230 and y = 1004; the
caption band sits at 1024-1344; 1344-1920 stays empty.

Cuts: 0.5s crossfades authored inside the ~1s silence pad at each boundary; no sentence spans a cut.

> The per-frame notes below were drafted under frame.md v1 and still use its colour words
> ("teal"), its "label pill" and its "ice canvas". They describe *beats and timings*, which are
> unchanged; for anything visual, read frame.md v2 and the divergence table in `BRIEF.md`
> (§ v2 re-pass), which supersede them. Every onset cited below is a measured value from
> `audio_meta.json` and still holds.

## Frame 1 — The hook

- scene: the hook line arrives as type on ice, nothing illustrated, and the word `remembers` takes the teal
- duration: 5.9s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- beat: recognition
- voiceover: "Every app you use remembers things. Here's the trick behind it."
- sfx: none

Group one at 0.12s (`Every app you use`), group two at 1.0s (`remembers things`) with `remembers`
filling teal at the measured onset, sub-line `the trick behind it` in muted mono at 3.4s. The
3-second rule: visual, verbal and text overlay all hit inside the first second of audio. Ambient
pills are already floating at t=0 so the frame is never dead.

## Frame 2 — A labeled box

- scene: a value sits inside a chamber and a name drops onto it as a pill
- duration: 11.2s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-labeled-box.html
- type: concept
- beat: the metaphor lands
- voiceover: "A variable is a labeled box. Put a value inside, give the box a name, and use that name whenever you need the value."
- sfx: none

Chamber draws first (scale 0.95→1, 0.2s), `10` enters on "put a value inside", the pill `score`
drops onto the chamber's top edge on "give the box a name", and a hairline draws from pill to value
on "use that name". Stagger 0.08s between the three. The chamber is the § 3 geometry exactly; no
part may redraw it differently.

## Frame 3 — The name stays

- scene: the value swaps from 10 to 15 while the label pill does not move
- duration: 9.0s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-name-stays.html
- type: mechanism
- beat: the claim
- voiceover: "Change what is inside and the name stays the same. That is the trick: the name is not the value."
- sfx: none

The swap is deliberately boring: old value exits up, new value enters, **pill untouched**. On
"the name is not the value" a thin teal underline draws under `score` and nothing else moves, so the
last beat of the frame is the one the narration is pointing at.

## Frame 4 — The example

- scene: three lines of Python arrive in the petrol code chamber, then the output line
- duration: 8.4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-example.html
- type: example
- beat: proof
- voiceover: "Score starts at ten. Then score becomes score plus five. Print it, and you get fifteen."
- sfx: none

Line 1 on "score starts at ten"; line 2 on "score becomes score plus five", with the `+ 5` tokens
taking teal for 0.4s as they are said; line 3 on "print it"; the output `>>> 15` arrives on
"fifteen" as a separate timed element on the chamber's lower edge. Titlebar reads `main.py`.
`score` is teal in all three lines at all times: it is the name, and the name is the subject.

## Frame 5 — The quiz

- scene: the box returns with a question mark for a value and + 5 waiting beside it
- duration: 8.6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/05-quiz.html
- type: cta
- beat: the ask
- voiceover: "So: if score starts at one hundred, and you add five, what prints? Drop the number below."
- sfx: none

Headline `What prints?` in Inter 700. The box motif at 60% scale with pill `score`, value `?`, and
a `+ 5` chip stepping in on "add five". Mechanic verb `DROP THE NUMBER` in teal mono, tracked.
Badge `PROGRAMMING BASICS · 01 · BEGINNER` in muted micro type. This frame also loops under the
platform's own chrome, so nothing sits below y = 1004 and the verb must survive a square crop.

## Real durations after Step 3.1 (measured by `studio voice`/`studio cues` from the Kokoro VO, 88 words / 37.611s of speech)

| Frame | VO seconds | Frame seconds (VO + authored air) | VO words | Speech window inside the frame |
|---|---|---|---|---|
| F1 | 4.864 | 5.9 | 11 | 0s -> 4.32s (last word `it.` at 4.32) |
| F2 | 10.240 | 11.2 | 24 | 0s -> 9.50s (`value.` at 9.50) |
| F3 | 7.957 | 9.0 | 20 | 0s -> 7.18s (`value.` at 7.18) |
| F4 | 7.403 | 8.4 | 16 | 0s -> 6.46s (`fifteen.` at 6.46) |
| F5 | 7.147 | 8.6 | 17 | 0s -> 6.32s (`below.` at 6.32) |
| **total** | **37.611** | **42.7** | **88** | |

Every emphasis time in the frames below cites these **measured** onsets, not the estimates.
Air at each cut: ~1.0s (bible/design.md `cuts`), and the 0.5s crossfade is authored inside it,
so no sentence spans a cut and no two shots speak back-to-back. F5 holds an extra ~1.5s because
the last frame loops under the platform chrome.
