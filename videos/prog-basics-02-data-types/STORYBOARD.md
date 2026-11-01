---
format: 1080x1920
duration: 39s
message: "The type decides what an operation means: plus on numbers adds, plus on text glues."
arc: the puzzle → every value carries a type → the four → plus adds / plus glues → the quiz
audience: first-week programming learners (prog-basics lane, series-bible section 2)
mode: autonomous
music: none
captions: en
series: prog-basics
part: 2 of 11
---

# STORYBOARD — prog-basics-02-data-types (prog-basics, part 2 of 11)

English master, portrait 1080x1920, ~40s, ceiling 52s. Copy source of record:
`writing/prog-basics/pieces/02-data-types.md`. Shape: bible § 3. Durations are estimates until
`studio voice` syncs them; measured VO wins.

## Order-independence

**Check A — does any line presuppose another part?** No. F1 opens on the puzzle itself. Part 1
defined "a variable is a labeled box" and this part neither repeats nor references it; the box
motif reappears because it is the series' grammar, not because it was earned earlier.
**Check B — swap two claims, is the story still true?**
- **Swap F2 ↔ F3.** FAIL, kept. F2 states that the type decides the operation; F3 then names the
  four types. Named first, they are a list; named second, they are the answer.
- **Swap F4 ↔ F5.** FAIL, kept. The quiz needs the `+` demonstration behind it to be about `*`.
- **Move F4 before F3.** PASS, not taken: the split reads better once the viewer knows which four
  types are in the room.
Conclusion: F2 → F3 is load-bearing; everything else is free.

## Grammar decisions (bible § 4)

- **G1 hook (F1)** — the code itself is the headline: `'5' + '5'` with the quote glyphs in teal,
  `= '55'` beneath. The voice says the sentence without the quotes (BRIEF § decisions).
- **G2 box + type tag (F2, F3)** — F2 introduces the corner tag (`int`), which is this part's
  addition to the motif; F3 multiplies the box into four, staggered 0.10s.
- **G4 split (F4)** — **the campaign's first side-by-side.** Two chambers, 2 lines each: `5 + 5`
  over `10`, `'5' + '5'` over `'55'`. Bible § 4 permits side-by-side only at ≤3 lines per side, and
  this is 2. If it does not read at 1080x1920, fall back to the vertical stack.
- **G5 CTA (F5)** — `'5' * 3` in mono at display size, `*` in teal, verb `COMMENT IT`.

## Video direction

Ice canvas for F1/F2/F3/F5, petrol field for F4's two chambers. Inter 700 for everything readable,
JetBrains Mono for labels/code/tags, Caveat once on the end badge. Teal is the only accent; **no
coral in this part** (nothing errors — `'5' + 5` would, and it is deliberately not shown).
Ambient: teal pills on the 12s float plus a mesh-glow drift. Content between y = 230 and y = 1004;
caption band 1024-1344; bottom 30% empty. 0.5s crossfades authored inside ~1s of air.

## Frame 1 — The puzzle

- scene: the code line is the headline, quotes in teal, and the result appears under it
- duration: 4.3s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- beat: contradiction
- voiceover: "Why does five plus five give you fifty-five?"
- sfx: none

`'5' + '5'` arrives at 0.15 (mono 700, 11cqw, quote glyphs teal), `= '55'` at 2.4 on "fifty-five".
Kicker carries the series badge and BEGINNER.

## Frame 2 — Every value carries a type

- scene: one box with a value inside and a type tag on its corner
- duration: 7.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-carries-a-type.html
- type: concept
- beat: the mechanism named
- voiceover: "Because every value carries a type, and the type decides what the operation means."
- sfx: none

Chamber + value `5` on "every value" (0.6), corner tag `int` on "carries a type" (1.6), then a teal
underline draws under the tag on "the type decides" (3.0).

## Frame 3 — The four

- scene: four boxes in a row, each with its own tag and value
- duration: 11.2s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-the-four.html
- type: taxonomy
- beat: naming
- voiceover: "Four you will use every day. Int for whole numbers, float for decimals, str for text, and bool for true or false."
- sfx: none

Four chambers across the content box, entering 0.10s apart on their own word: `int 5`, `float 5.0`,
`str 'five'`, `bool True`. `True` capitalised (accuracy proposal). Each tag in mono, each value in
Inter 700.

## Frame 4 — Plus adds, plus glues

- scene: two code chambers side by side, one numeric, one quoted
- duration: 8.2s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-split.html
- type: example
- beat: the punchline
- voiceover: "Five plus five gives ten. Put them both in quotes, and plus stops adding. It glues."
- sfx: none

Left chamber `5 + 5` → `10`; right `'5' + '5'` → `'55'`. Left line on "five plus five" (0.0), its
output on "ten" (1.4); right line on "put them both in quotes" (2.4), its output on "It glues" (5.0)
with the `+` glyph taking teal at the same moment. Both titlebars read `main.py`.

## Frame 5 — The quiz

- scene: the quoted five, a star, a three, and the ask
- duration: 7.8s
- transition_in: crossfade
- status: outline
- src: compositions/frames/05-quiz.html
- type: cta
- beat: the ask
- voiceover: "So here is the quiz. Quote five, star three. What does Python give you? Comment it."
- sfx: none

`'5' * 3` builds token by token on "quote five" (1.6), "star" (2.4), "three" (2.9); `*` in teal.
Headline `What does this give you?` on 3.4; verb `COMMENT IT` on "Comment" (5.6).

## Real durations after Step 3.1 (measured from the Kokoro VO, 76 words / 34.176s of speech)

| Frame | VO s | Frame s (VO + ~1.0s air) | Speech window inside the frame |
|---|---|---|---|
| F1 | 3.328 | 4.3 | 0 -> 2.28 (`fifty-five?` at 2.28) |
| F2 | 6.528 | 7.5 | 0 -> 5.48 (`means.`) |
| F3 | 10.261 | 11.2 | 0 -> 9.38 (`false.`) |
| F4 | 7.211 | 8.2 | 0 -> 6.36 (`glues.`) |
| F5 | 6.848 | 7.8 | 0 -> 6.22 (`it.`) |
| **total** | **34.176** | **39.0** | |

Emphasis times in the frame files cite these measured onsets (`str` at 6.08 inside F3, `+` at 4.42
inside F4, and so on), not the estimates in the Scene blocks above.
