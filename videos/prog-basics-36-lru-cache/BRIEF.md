---
workflow: hyperframes (faceless-explainer route)
flow: automation
mode: autonomous
storyboard: yes
series: prog-basics
part: 36 of 44
title: prog-basics-36-lru-cache
message: "a cache that forgets the thing you touched longest ago — and the reason it can decide that cheaply is two structures working as one, a map to find and a chain to order"
hook_source: user (pre-authored, verbatim; not rewritten)
cta_mechanic: Quiz ("Capacity 2: put A, put B, get A, put C. What gets evicted?")
destination: shortform-vertical (TikTok/Reels/Shorts)
aspect: 1080x1920
language: en
length: target ~30s (piece-file word count after the approved A6 edit; 3.24 w/s + 6.0s air)
ceiling: 54s
narration: yes
audience: first-week programming learners
identity: bench v2.2 (frame.md = frame-day4.md, inheriting frame-day2.md v2.1)
tranche_badge: UNDER THE HOOD
difficulty: INTERMEDIATE   # [M] from the manifest
carrier: TRUE — Wave A. Proves the right-to-left promotion reorder and the eviction that fades inside
  the content box, plus key chips pointing into a chain. 37's chain, 38's chain birth and G7 reuse
  inherit this.
voice: af_heart
tts_provider: kokoro
voice_speed: "0.93"   # documentation only — pass --speed 0.93 to studio voice or you get 0.74
captions: en
music: none
sfx: none
frames: 5
grammar: G1 · G21 recency chain · G21 reorder+evict · G4 split (map | list) · G5   # frame-day4 § 4 lines 350-380
pin: hyperframes@0.8.208
ledger_source: writing/prog-basics/ACCURACY-day4.md § 36
---

## Intent

English master of part 36. Copy source of record: `writing/prog-basics/pieces/36-lru-cache.md` — it now
carries the user-approved A6 edit (the operation is constant time **on average**), and its `words:` and
`target_length:` were re-counted for you. This part is pb-22's payoff: reuse its node anatomy rather
than reinventing it.

Read in this order, and no further: `writing/prog-basics/series-bible-day4.md`, your piece file,
`frame.md` § 4 lines 350-380 + § 6 + § 9 + the inherited § 14 carrier findings, `WAVE2-PACKET.md` § 4
(pb-22's G7 node numbers are the ones you must reuse: node 176×108, connectors 24px CSS divs), and
`ACCURACY-day4.md` § 36.

## Resolve the ledger placeholders from ACCURACY-day4.md § 36

The four-operation trace, executed, and **four genuinely different states**:

| op | recency front→back | map holds | size |
|---|---|---|---|
| `put(A,1)` | `A` | `{A: node(A)}` | 1 |
| `put(B,2)` | `B → A` | `{A: node(A), B: node(B)}` | 2 |
| `get(A)` → A moved to front | `A → B` | unchanged | 2 |
| `put(C,3)` → **FULL, evicted B** | `C → A` | `{A: node(A), C: node(C)}` | 2 |

Pinned: `EVICTED: B`, `3 pointer writes, no scan`. The quiz's answer is B, and the counterfactual is
why it is a quiz: **without the `get A`, the answer becomes A** (executed).

**BUILDER TRAP recorded by the probe:** do not build the four-op list eagerly and then print states —
`[c.put("A"), c.put("B"), c.get("A"), c.put("C")]` runs all four before the first read and prints
`C → A` four times. Perform one op, then read. If your plate shows four identical states, you have
this bug.

## Hard rules specific to this part

- The reversal on `get A` **is** the lesson: it must be legible as motion, not as a caption.
- The eviction fades **inside the content box**. Anything leaving the frame is a § 3 violation.
- **Zero coral** (`frame-day4` § 6): evicting is the design, not an error.
- 36's notation is BANNED on every surface — "constant time" stays words.

## Carrier duty

You are proving the promotion reorder, the eviction fade and the key-chip-into-chain pointer. Report
the settled px for node, reorder distance, fade lane and chip connector, plus every divergence. 37 and
38 inherit your chain decisions.

## Boundaries

Write only inside this directory. Do not render, publish, or preview-background. Snapshots only.
No BGM, no SFX, no network assets, no font fetches. Gates: `studio assemble . --captions` →
`studio verify .` → `npm run check` → snapshots → read the PNGs. `--speed 0.93` always.

## Deviations

(empty — append every departure from the piece file here as you make it)
