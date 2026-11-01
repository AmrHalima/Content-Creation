# OSI Layers — Series Bible (3-part beginner series)

Campaign: `osi-layers`. Parts: `videos/osi-layers-1-sideways/` (P1, thesis),
`videos/osi-layers-2-the-seam/` (P2, payoff), `videos/osi-layers-3-leaks/` (P3, honest).
Status: stage 4 (produce). P1 built to its pre-render gate; P2/P3 scripted and boarded only.
Nothing has rendered.

This file is the shared truth for all three parts. Per-project `BRIEF.md` files are the
run record; this is what they all point at. If a per-project file disagrees with this one,
this one is the campaign decision and the project file is the exception — say so out loud
rather than silently reconciling.

---

## 1. The one thesis

**Read the stack sideways.** Layer N on your machine is not mainly talking to layer N-1
underneath it. It is talking to **layer N on the other end**. The vertical ladder is how
the machine is built; the horizontal pairs are the conversations. The ladder is plumbing —
the pairs are the model.

Everything in the series is a consequence of that one flip:

| Part | Claim it pays | One-line job |
|------|---------------|--------------|
| P1 `sideways` | the flip itself | make the horizontal reading land in ~65s |
| P2 `the-seam` | a slot with a job can be refilled | two worked swaps, real names, nobody upstream notices |
| P3 `leaks` | the map is not the territory | name the leak honestly, then cash the vocabulary in on a real fault |

Layer groups are **cast lists, not syllabuses**. Splitting by argument (what each part
claims) rather than by layers 1-3 / 4-7 is the chosen structure: a layer-group split makes
three parts that each end mid-thought.

## 2. Order independence (hard rule)

Each part is watchable first, last, or alone.

- **Zero references between parts.** No "as we saw", no "part 2", no "next time", no
  running-gag that needs prior context.
- Each part **re-establishes the sideways frame inside its first two narration lines** —
  roughly 10-18 words, before any new claim is made.
- Each part's CTA names a **different article section**, so the three CTAs are not
  interchangeable and none of them assumes you watched another part.

Verification actually run (see run report): a swap-two-claims integrity test per part plus
a first-frame-arrival check (a viewer landing on P3's frame 1 gets the frame with no prior
knowledge).

## 3. Visual grammar

Portrait 1080x1920, captions on, content capped at the top ~83% (**nothing load-bearing
below y ≈ 1594**).

**Grammar B — one host per frame (the spine).** A single machine occupies the frame: the
seven-layer column, full width, labels large. The peer is *not* drawn as a second stack;
it is implied by a horizontal arrow that leaves the chamber's edge toward a tracked
mono tag reading the peer's role ("their layer 4"). B carries most frames because a
portrait frame cannot hold two legible seven-band stacks and still give the arrow room to
travel.

**Grammar A — two chambers (the payoff, P1's thesis frame only).** Both hosts in frame,
side by side, one long horizontal arrow between them. Used once, at the moment the thesis
lands, because that is the only moment where "there are two of them and they match" needs
to be *seen* rather than asserted.

**Portrait staging decision (landed, and the override it implies).**
`videos/sdlc/STORYBOARD.md` states "stack vertically, never side-by-side". That is **local
precedent from one film, not a house law.** This series' subject is a horizontal
relationship, so grammar A is deliberately side-by-side in portrait — the thing the sdcl
rule forbids is the thing this thesis needs. Constraints kept: the pair sits high
(centred near y ≈ 0.40 x height), the two chambers are single-layer close-ups rather than
two full stacks, and every label clears the caption band. **This is measured, not assumed**
— snapshot at 1080x1920 before any render.

Per-part use: P1 = 6 x B + 1 x A (thesis frame). P2/P3 = B spine, with the swap and the
fault-localiser staged as full-width strips (see their storyboards).

## 4. Copy constraints (all three parts)

- **Contrast-reveal ban.** No "It's not X, it's Y" / "not because X — because Y"
  constructions. The thesis is stated directly. This is the AI-tell the series is most
  likely to reach for, because the thesis *is* a contrast.
- **Em-dash ban on short copy.** Em dashes are fine in the article prose; on-screen short
  copy and captions get none. Use a period or a line break.
- **Triad cap.** At most one three-item list per part, and never two in a row. Three-part
  enumeration is the second most common AI tell after the contrast reveal.
- **No mnemonics.** Not "please do not throw sausage pizza away", not "All People Seem To
  Need Data Processing", not an invented replacement. The layers must be understood by
  their job, not memorised by a sentence. A mnemonic would be a shortcut the series then
  has to un-teach.
- **Scoped postal image.** The post-office analogy (address on the outside, contents
  unread, sorted at each stop) is allowed **only** for Layer 3 forwarding. Never for the
  whole stack, never for Layer 7. It is dropped the moment it stops mapping.
- **Customer language.** Beginner audience, but no talking down: name the real thing
  (cable, Wi-Fi, port, router, certificate), keep sentences short, define a term the first
  time it is used and then use it plainly. Forbidden framing: "In today's connected world",
  "let's break this down", "simply put", "think of the internet as…", anything that
  announces a lesson.
- **Numbers and names must be checkable.** No invented hardware, no invented protocol
  behaviour, no unsourced statistics.

## 5. The documented Layer-2 leak (P3's evidence)

Stated as fact, not vibe. All of it is textbook-checkable:

1. **Ethernet and Wi-Fi are both Layer 2 and share almost nothing else.** Ethernet is a
   wired, full-duplex, point-to-point-ish link where everyone can transmit; Wi-Fi is a
   shared radio medium where a station must contend for the air and expects to lose
   sometimes. Same layer, opposite assumptions. Wi-Fi also splits Layer 2 into sublayers,
   which is the first hint the boxes are not atomic.
2. **ARP sits on the seam.** Address Resolution Protocol maps a Layer 3 address to a Layer
   2 address, using a Layer 2 frame. It is not comfortably *in* either box; real stacks
   ship glue like this and the model has no shelf for it.
3. **A switch forwards on MAC addresses, not on anything Layer 3 says.** Whole concepts —
   broadcast domains, VLANs — are Layer 2 facts with no tidy counterpart in the ladder,
   and "Layer 2.5" jokes about MPLS exist precisely because people keep hitting this.

The honest conclusion P3 draws: the model leaked because it was drawn as a **specification
of relationships**, not as a catalogue of real hardware. Its value is that it gives you
seven places to point at. That is what makes the troubleshooting payoff possible.

## 6. Troubleshooting ladder (P3's payoff, keep it plain)

| Symptom | Point at |
|---|---|
| no link, Wi-Fi won't join, weird address | the bottom of the stack |
| it joins but can't find the far machine, or large packets vanish | the addressing / path layer |
| it connects but drops, times out, resets | the transport |
| it works but the app or the certificate complains | the top |

Deliberately phrased so a beginner can act on it. No tool names, no commands — the video
teaches the pointing, the article carries the how.

## 7. Glossary (on-screen spellings)

| Term | Say it as | Never say |
|---|---|---|
| OSI model | "the model", "the seven layers" | "the OSI protocol" (it is not a protocol) |
| peer layer | "the same layer on the other end" | "the other OSI layer" |
| encapsulation | "wrap it, unwrap it at the far end" | "header injection" |
| transport (L4) | "the conversation between two programs" / TCP | "the network cable" |
| network (L3) | "the address and the route" / IP | "the internet" |
| data link (L2) | "the link next to you" — Ethernet, Wi-Fi | "the local network" (ambiguous with L3) |
| physical (L1) | "the wire, the radio, the light" | "hardware" (too broad) |
| TCP | "the reliable one" (P1/P2), TCP (once named) | "the transport protocol" as a first mention |
| QUIC | name it plainly in P2; nuance stays in the article | a claim QUIC *is* a transport layer (blurred on purpose, documented in P2's brief) |
| application (L7) | "what your app actually says" | "the user's screen" |

## 8. Audio, captions, format

- Voice: **Kokoro `am_michael`**, local. ElevenLabs is the house primary, but
  `.agents/design.md` carries `voice_id: ""` — unusable without the user's id. No silent
  provider substitution; this is reported.
- **No BGM** in any part (`music: none` in every storyboard).
- **SFX: ≤4 marks across the whole series**, rationed at campaign level, not per film.
  Budget: P1 gets 2 (the thesis flip, the payoff arrow), P2 gets 1 (the swap landing),
  P3 gets 1 (the fault pointed at). Any additional mark needs the budget re-opened.
- Captions: EN, on, caption pill skin from the preset, keeps content above y ≈ 1594.
- Word rate for planning: **~2.0 words per finished second** of narration, so a 65s part
  carries ~130 words and a 55s part ~110. Real durations come from TTS timestamps and win.
- Formats: portrait 1080x1920 only. No Arabic video variant, no Arabic TTS.

## 9. What is deliberately NOT in the videos

- The QUIC Layer-4/Layer-7 blurriness (P2's article section carries it).
- Presentation and Session layers being largely absent from the TCP/IP stack (P3's article
  section; the video says "some of the boxes get implemented inside the application" and
  stops there).
- Sublayer decomposition (LLC/MAC), STP, link aggregation, MPLS — article only.
- Any claim that OSI is "the" model in use today. It is a way of describing models.

## 10. Video → article handoff (stage 5 preconditions)

- Two article files, **same slug** in both `blog/src/content/posts/en/` and `.../ar/`
  (the shared filename is what links them as translations).
- Arabic is an Egyptian colloquial **rewrite**, RTL-aware, not a literal translation.
- `npm run build` in `blog/` passes. Parked with `draft: true`; **never deployed** without
  an explicit yes, and `blog/astro.config.mjs`'s `site:` value stays untouched.
- Each part's CTA names a **different article section**:
  P1 → the seven pairs side by side; P2 → what actually got swapped (the QUIC seam, in
  full); P3 → where the model leaks, and the pointing method for a real fault.
