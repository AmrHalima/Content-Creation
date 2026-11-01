---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 23 of 33
tranche: day-3 (STRUCTURES)
title: prog-basics-23-stacks
message: "a pile where the only door is the top — you add at the top and take from the top, so the thing you just put in is the thing that comes out, which is why undo is a stack"
hook_source: user (pre-decided; verbatim, not rewritten)
cta_mechanic: Quiz ("After push 1, push 2, push 3, then pop: what's on top?")
destination: shortform-vertical (TikTok/Reels/Shorts) + LinkedIn/X repost
aspect: 1080x1920
language: en
length: 31s (est. from 81 spoken words @3.24 w/s + 6.0s air; measured value lands below after `studio voice`)
ceiling: 54s
band: "[B] 29-34s (bible-day3 § 0.3)"
narration: yes
audience: first-week programming learners — prog-basics lane, not the practitioner lane
identity: bench v3.0 (frame.md = frame-day3.md; Day 1/Day 2's look, restated for Day 3)
carrier: false (no carrier wave this tranche — but G9 `pile` is BUILT HERE for the first time)
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"
captions: en
music: none
sfx: none
frames: 5
words: 81
grammar: G1 G9-pile G9-pile G3 G5
marks: G9 pile (new, first build)
mechanic_in_publish_order: Quiz (slot 1 of the Day 3 publish order)
pin: hyperframes@0.8.226
---

## Intent

English master of part 23 of `prog-basics` — the first part of Day 3 / STRUCTURES (topics 23-33).
Portrait 1080x1920, `[B]` band 29-34s, ceiling 54s. Faceless explainer: no URL, no footage, every
visual invented on the campaign's bench identity. Copy source of record:
`writing/prog-basics/pieces/23-stacks.md`. Shape: bible-day3 § 0-§ 6 + `frame.md` v3.0 § 5-§ 6.
Grammar: G1 hook · **G9 `pile` ×2** · G3 code chamber · G5 CTA.

**G9 `pile` has never been drawn.** It is built here from already-shipped atoms only (bible-day3 § 0.1's
"reuse, do not rebuild": *G6 call-stack chambers → part 23, a pile is G6 without the staircase*):
pb-14's `.f3-card` h 84 (cards, drop-in, the under-the-pile z-scope trick) + pb-21's `.pb-chamber`
(`.pb-val`) + pb-21's `.f3-tag` counted chip + pb-15's `02-descent.html` card geometry + pb-22's
G1/G3/G5 skeletons. Every number is `frame-day3.md` § 6 G9's, not mine: plate 520×84 at left 280,
y 332/424/516/608 (pitch 92), lid 6px `--line` at left 260 w 560 y 320, `TOP` mono tag at left 848
y 300 with a 12px CSS chevron, shelf 3px `--line-faint` left 240 w 640 y 700, returned-value chip
240×64 `--panel-2`, push = P2 `drop-in` from `y:-210` `bounce.out` + lid lifts `y:-12`, pop = top plate
exits `x:+260, y:-150, opacity:0` in 0.42s `power3.out` **while** the mint chip arrives where the plate
sat, and the plate below never moves.

## The two quality bars for this part

- **Clarity.** One idea per beat, glossed in the frame it appears. `stack` = the pile of plates (F2's own
  drawing); `LIFO` = "last in, first out" (the user's own gloss, no extra emphasis — the pile does the
  work); `push`/`pop` = the plate labels (the language-neutral API words, § 4a); `append` = the Python
  word for push (F4's chamber, tagged `# push`); `pop` = F4's chamber, tagged `# pop` in the print line;
  the three uses (undo history / back button / function calls) are a **chip row**, never chambers
  (§ 4d). "Traverse"/"iterate" appear nowhere. No `O(` / `log n` / bare `n` anywhere on screen (§ 7.2) —
  this part's runtime claim is speech only ("instant" is not even said here). **Zero coral** (§ 7.1):
  nothing raises on any frame; `IndexError` on an empty pop and the `RecursionError`/`DEPTH 1000`
  material stay in the pinned comment and in part 15's shot.
- **Motion.** G9's two operations are the lesson, each proved by pixels: push = P2 drop-in + the lid
  lifts and returns; pop = the top plate leaves while `POP = 2` lands **in the slot the plate vacated**
  (the piece file names this as the make-or-break snapshot: land it where the plate is *going* and the
  part's central claim is drawn backwards). Primitives: P1 `say-sweep` (F1 hook plate), P2 `drop-in`
  (every plate), P3 `type-on` (F4's chamber + terminal), P7 `pulse-set` (the `--say` border flash on the
  top plate), P9 `count-tick` (F3's chip row + counted tags), plus each frame's entrance wipe, one
  ambient breath and exit push. No BGM, no SFX.

## Colour law applied (frame-day3 § 1 + § 7.1)

`--say` `#FFD166` = the word being said, one arrival per beat (F2's push-then-pop flashes are sequential,
never simultaneous). `--value` `#5AD6A0` = a plate's contents, the popped value, the printed `2`.
`--muted` = chrome only (plate labels, kickers, chips, the `TOP` tag). Dimming is always container
background + border (`rgba(31,36,44,0.42)` / `rgba(255,255,255,0.08)`), never `opacity` on a group, and
digits/values hold full ink. **No coral pixel in this film.**

## Deviations from the piece file and the spec (all recorded, none silent)

1. **F3's plate slots: `1` at 608 and `2` at 516, not pushed on top of F2's three-plate pile.** The piece
   file says "The pile holds" after F2, but F2 fills three of the four authored slots (608/516/424) and
   F3 needs **two free slots above** the held plates for `push one` / `push two` — the fifth slot would
   sit at y 240, inside the kicker band and the tag lane. No authored number changes (520×84, pitch 92,
   lid 320, shelf 700, chip 240×64); the pile re-establishes at the same place with a two-plate count so
   the locked counted pair can be drawn on the user's own two-push example. Reported as spec arithmetic,
   not a variant.
2. **F3's counted tags go to the LOWER lane (y 892), not the upper lane (y 288).** `frame-day3.md` § 6's
   G9 derivation itself says `counted: .f3-tag lane at y 892 h 66`; § 4's tranche grid puts part 23 in
   the upper lane and the piece file copies that. The pixels decide: the upper lane is y 288-354 and
   G9's lid is at y 320 with the top plate at 332-416 — a tag there paints over the lid and the pile's
   mouth, which is the object the tags describe. So: tags at 892 (their own lane), F3's chip row moved up
   into the free band under the shelf at 760-820, pile geometry untouched. Both tags carry **bible § 4b's
   locked pair** `PUSHED 2` / `POP = 2, TOP = 1`.
   **Finding for the dispatcher:** `frame-day3.md` § 6 G9's `counted:` line names the correct *lane* but
   the wrong *content* (`PUSHED 3 / POP = 3, TOP = 2`) — that is the CTA's three-push case, which bible
   § 4b bans from being drawn ("or F5 answers the quiz"). `CORRECTIONS-day3.md` § B line 60 repeats the
   banned pair. I followed bible § 4b (highest authority) and drew nothing of the three-push case.
3. **`DEPTH 1000` is not shown.** Bible § 4 permits the callback ("23 may show the DEPTH 1000 chip") and
   § 4d forbids a number inside a chip; a fourth counted tag would break "one counted pair per part".
   The function-calls beat is the chip row only, and nothing on this frame re-raises RecursionError.
4. **F1's spoken line writes `control Z` while the screen reads `press control+z`.** The piece's delivery
   column instructs "`Ctrl+Z` spoken 'control Z'"; the words are Kokoro's, not mine, and the hook is
   otherwise verbatim. On-screen type and the cover keep `control+z`. Consequence: the caption lane reads
   "control Z" (captions align to the approved script text), not "Ctrl+Z".
5. **F2's plates carry mono `--muted` operation labels instead of values.** G9's plate rule is "Value:
   Space Grotesk 700 `--value`" and F2 has no values yet — its beat is the shape. The three plates
   arrive blank with a right-edge `push` label (pb-14's `.f3-pend` position), and the top plate gains a
   `pop` label on "pop from the top", which is where § 4a's "plate labels are the API words" and the
   piece's F4 note ("the plate labels say push/pop while the chamber says append/pop") come from. Values
   appear on F3 (`1`, `2`) and F5 (`1 2 3`), where they are executed numbers.
6. **F5's `?` chip sits at the `TOP` tag's authored position (left 848) at 96×64, not centred on the lid
   at 240×64.** The headline box (296-472, `what's on top?` at 6.4cqw) occupies the centre band; a 240×64
   chip centred on the lid would sit on top of the question's own glyphs. The `POP` label stays on the top
   plate's right edge. No plate leaves on F5 and no `POP = 2` chip reappears (pb-11's rule).
7. **F4's terminal strip carries one output line (`2`)** — the chamber is 4 code lines + 1 strip, the G3
   maximum, and the piece's own code block is exactly that.

## Assets

- Fonts: the shipped v2 set (`SpaceGrotesk-400/700`, `JetBrainsMono-400/700` + OFL notices) copied from
  `videos/prog-basics-22-linked-lists/assets/fonts/`. Every `@font-face` names a file on disk.
- Voice: Kokoro `af_heart` at the house 0.93, offline and free, provider pinned from this file. No
  provider substituted (ElevenLabs unusable: empty `voice_id` + HTTP 402; HeyGen needs interactive auth).
  No BGM, no SFX, no network assets, no font fetches.
- Caption skin: `writing/prog-basics/caption-skin-day2.html` → `.hyperframes/caption-skin.html`. Band
  1024, Space Grotesk 700 at 46px, spoken word on amber.
- `design.md` is the workspace brand copy per the recipe; `frame.md` (v3.0, copied from `frame-day3.md`)
  overrides it for every video decision in this campaign.

## Gate state

Built to the pre-render gate only: voice @0.93, cues, 5 frames, assemble --captions, `studio verify`,
`npm run check`, `snapshot --at` read by eye. **No render has been made and none is authorized here.**
No publish, no schedule, no Arabic pass (23-33's Arabic lines 485-563 are queued, not authorized), no
BGM/SFX, no `preview --background` (ten workers are building concurrently). Only this directory was
written.

Accuracy: every number on screen comes from `series-bible-day3.md` § 4 (executed 2026-11-01, Python
3.13.15) and this piece's own Accuracy section — `push(1); push(2); pop()` → **2** with `[1]` left;
`stack.append(1)` / `stack.append(2)` / `print(stack.pop())` → stdout **2**; `[].push(1)` →
`AttributeError`, which is why no `push(1)` line exists in the chamber; the CTA's three-push answer
(3 popped, 2 on top) is **never drawn**. No interpreter was re-run to "improve" the ledger.

## Mid-run decisions (written back per the layering rule)

- `npx hyperframes skills update faceless-explainer` failed on this machine ("GitHub manifest
  unreachable — refusing to report success"). Continued from the on-disk skill at
  `.agents/skills/faceless-explainer/scripts/`, which is what pb-21/pb-22 shipped with.
- Scaffold cloned from `videos/prog-basics-22-linked-lists/` (shipped + rendered reference) with the pin
  raised to **0.8.226** in all four `package.json` scripts per packet § 0.
