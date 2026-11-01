---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: osi-layers
part: 3 of 3
title: leaks
message: "The model leaks — hardest at Layer 2 — and it is still worth learning, because it gives you a way to say which part broke."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed — inherited from the campaign, not re-stated per part
aspect: 1080x1920
language: en
length: 55s
angle: concept (the honest caveat, then the payoff the caveat does not cancel)
narration: yes
audience: beginners to networking who have seen the seven-layer diagram once and never got it to stick
style_preset: code-editorial
voice: am_michael
captions: en
music: none
---

## Intent

Part 3. The honest one: the map is not the territory. Real stacks do not fill all seven
boxes cleanly, and the worst leak is Layer 2 — Ethernet and Wi-Fi are the same layer with
almost nothing else in common, ARP lives on the seam between two layers, and switches
forward on a rule that has no place in the tidy ladder. The turn: the model's job was
never to be a description of reality, it is a **shared vocabulary for pointing**, and the
payoff is that you can say *which layer broke* instead of *the internet is down*.

Stands alone. Re-establishes the sideways frame in its first two narration lines. No
references to parts 1 or 2.

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- Documented leak stays named and specific (Layer 2: Ethernet vs Wi-Fi, the ARP seam,
  the switch/broadcast-domain problem) rather than a vague "real life is messier."
- Troubleshooting payoff is the landing: point at a layer, not at "the internet."
- Captions ON, English, top-~83% keep-out (cap at y ≈ 1594).
- No BGM; SFX rationed series-wide (≤4 marks across all three parts).

## Notes

- Frame builds are gated on part 1 validating the visual grammar — this part clones
  `osi-layers-1-sideways/compositions/frames/*.html` as its starting point instead of
  re-inventing the stage. Script and storyboard exist now; frames do not.
- Every leak claim must be checkable: no invented hardware, no invented protocol behaviour,
  no numbers that were not sourced. See the glossary in the series bible.
- Render is user-gated. Nothing renders to MP4 without an explicit yes.
- Voice: Kokoro `am_michael` (local); ElevenLabs unusable here (`voice_id` empty in
  `.agents/design.md`). Skills-refresh failure and font rationale: see part 1's brief.
- Shared grammar, claims, constraints: `G:\Content Creation\writing\osi-layers\series-bible.md`.
- Render usage: `status: unknown` (`unsupported_harness`). Do not guess an allowance.
