# SCRIPT — osi-layers-2-the-seam (EN master)

**Voice:** am_michael (Kokoro-82M, local — signed out of HeyGen, and `.agents/design.md` carries no ElevenLabs `voice_id`)
**Voice settings:** default (local engine)
**Voice direction:** Same narrator as the series, same register: a peer showing you the thing
that makes the model worth learning. Dry, unhurried, zero classroom. "And a slot can be
refilled" is the hinge — say it plainly, it does not need volume. "layer three never blinks"
is the one wry line in the part; deliver it like a fact so it stays dry.

**Budget:** 106 spoken words / 6 lines. At ~2.0 words per finished second ≈ 53s against a 55s
target (`videos/sdlc` measured 2.18 words per finished second once TTS timestamps were synced,
so the real cut should land nearer 49s). Real durations come from TTS timestamps and win.

---

## Line 1 — Hold the sideways reading (Frame 1)

**Time:** 0.0 – 8.0s
**Delivery:** Stated as settled ground, not re-litigated. A viewer may be arriving here first,
so it has to be clear. No drumroll before Line 2 — go straight into it.

    Every layer talks sideways, to the same number on the machine at the other end.

## Line 2 — A slot with a job (Frame 2)

**Time:** 8.0 – 15.0s
**Delivery:** The claim of the whole part, said once. "slot with a job" gets the weight;
"refilled" is the door into the next three frames, so let it sit for a beat.

    A layer is a slot with a job. And a slot can be refilled.

## Line 3 — HTTP moves (Frame 3)

**Time:** 15.0 – 24.0s
**Delivery:** Factual, almost a shrug. Say HTTP/3 and QUIC cleanly, no fanfare — the names are
on screen, so the voice does not need to underline them.

    For years the web spoke HTTP over TCP. Then HTTP/3 arrived and put itself on QUIC instead.

## Line 4 — The application didn't notice (Frame 4)

**Time:** 24.0 – 32.0s
**Delivery:** "Different transport, different behaviour underneath" is two beats, not one
breath. The second sentence is the payoff of the part: flat, final, no emphasis on "not".

    Different transport, different behaviour underneath. The application sent the same request and did not need to know.

## Line 5 — You already did this one (Frame 5)

**Time:** 32.0 – 44.0s
**Delivery:** Warmer, direct — the one line where the narrator talks to the viewer about their
own life. "Unplug the cable, stay on the site" is quick, almost offhand. Then slow down for the
last clause: "never blinks" is the joke and it lands by being delivered normally.

    You have done it yourself. Unplug the cable, stay on the site. Wi-Fi takes over the link, and layer three never blinks.

## Line 6 — Land and hand off (Frame 6)

**Time:** 44.0 – 54.0s
**Delivery:** Land the scale of it — "a layer at a time, in public" is the awe, delivered
quietly. The article line is an offer, not a call to action.

    That is how the web got rebuilt a layer at a time, in public. What got swapped is in the article.

---

## Constraint audit (run against this script before any TTS was spent)

- **Real names on screen (ruling 3):** HTTP, TCP, HTTP/3, QUIC, Wi-Fi, Layer 3. Nothing is
  blurred into beginner-safe paraphrase. The on-screen claim is kept to the exact ceiling set
  by the ruling: "the transport changed, the application didn't notice" (Frame 4 label).
- **Claim ceiling:** no claim that QUIC *is* the transport layer, and no claim that the far end
  was ever in the Layer 2 conversation. The Layer 4/Layer 7 blurriness is article-only
  (see `BRIEF.md` Notes).
- **Contrast-reveal ban:** no "not X, Y" / "this isn't X" constructions. Line 2 asserts
  directly.
- **Negation-list ban:** none. The two negations in the part are single and load-bearing
  ("did not need to know", "never blinks"), each carrying a fact rather than defining by
  absence.
- **Colon reveal / self-narration ban:** Line 1 originally ended with "say that and a useful
  thing follows" — cut. It was a drumroll announcing the next line instead of the next line.
  The script now has no colons, no rhetorical questions, no "here's the thing" setups.
- **Em-dash ban on short copy:** none, in narration or on screen.
- **Triad cap:** zero used.
- **No mnemonics:** none.
- **Scoped postal image:** not used in this part (it belongs to Layer 3 forwarding only, and
  this part's Layer 3 moment does not need a metaphor).
- **Sideways frame re-established in the first two VO lines:** Line 1 says it outright;
  Line 2 builds on it. A viewer arriving here first is oriented inside 8 seconds.
- **Zero references between parts:** no "part", no "as we saw", no forward promise.
