---
workflow: faceless-explainer
flow: automation
storyboard: no
mode: autonomous
series: backend-patterns
part: 7 of 10
title: pattern-adapter
message: "Adapter converts one interface into another so incompatible code can talk, and it is what lets your domain stay clean while a legacy vendor or a third-party SDK stays in the room."
destination: shortform-vertical (Reels/TikTok/Shorts) + LinkedIn/X feed
aspect: 1080x1920
language: en
length: 78s
ceiling: 90s
angle: structural (neutral explainer per series-bible sections 1 and 3 — no invented contrarian hook, no beginner framing)
narration: yes
audience: experienced backend developers who have already written CRUD and want the mechanics and the misuse named precisely
style_preset: code-editorial
voice: af_heart
voice_speed: 0.74
tts_provider: kokoro
captions: en
music: none
sfx: none
---

## Intent

The English master of part 7 of the `backend-patterns` series: a faceless explainer on the
**Adapter pattern**. No URL, no footage — every visual is invented. Vertical shortform, ~78s,
hard ceiling 90s.

Every gate decision was already made upstream (the campaign brief), so this run executes the
pipeline through to a local **draft** render without stopping for approval. The artifacts below
are the contract, not paperwork: `BRIEF.md` → `STORYBOARD.md` → `SCRIPT.md` → frames.

Spine, per `writing/backend-patterns/series-bible.md` § 1 and § 3:

1. what problem it solves (F1–F2),
2. anatomy — the three-chamber call graph with the adapter as the seam (F3–F4),
3. the code shape — a class that implements the domain interface while delegating to a vendor
   call with a different argument order and a different return type (F5–F6),
4. where it goes wrong — the wrapped API leaking through, and adapters stacked on adapters (F7–F8).

The part ends on the misuse tell. That is the series' spine and a checkable claim.

## Claim this part pays (bible § 3, part 7)

> Adapter converts one interface into another so incompatible code can talk — it is what lets
> your domain stay clean while a legacy vendor or third-party SDK stays in the room.

Misuse tell it ends on: **the wrapped API leaking through anyway, and adapters stacked on top of
adapters.**

## Visual grammar (bible § 4 — binding)

- **Grammar R is the spine**, on screen whenever the narration names the pattern: caller (top) /
  seam (middle, dark chamber) / implementation (bottom), at most three named boxes, dependency
  arrow down, import arrow back up where knowledge direction matters. Concretely for this part:
  the caller wants `PaymentGateway`, the seam is the adapter, the implementation is the vendor's
  oddly-named client.
- **Grammar C**: two code chambers, each **≤6 lines**, one declaration per fragment, load-bearing
  tokens in Ember/Lavender, the rest muted ink. The shape worth showing is a class implementing
  the domain interface while delegating to a vendor call with a different argument order and a
  different return type.
- **Grammar X**, one frame at the end: vendor types appearing in the caller's signature (leak) vs.
  the translation contained in one box.
- Stack vertically by default. `sdlc`'s "never side-by-side" is local precedent, not law.
- Nothing load-bearing below **y = 1594**.

## Boundary held without cross-reference (bible § 2)

Adapter reshapes an existing interface after the fact; a Factory decides which thing to construct.
One clause, in F2, no "as the factory episode said". Zero other references between parts; F1–F2
re-establish the problem in the first two narration lines (~10–18 words).

## Assets

(none supplied — faceless explainer; every visual is invented)

## Customizations

- **No SFX and no BGM at all** (bible § 7: parts 2–10 get none; campaign marks are rationed and
  parallel runs must not append to `.media/manifest.jsonl`). Silence is the default; nothing was
  resolved and nothing was requested.
- **Captions ON, English**, caption-pill keep-out respected: content planned into the top ~83%,
  nothing load-bearing below **y ≈ 1594** on the 1920-tall canvas.
- **Code is set mono type, not captured** — there is no real editor to screenshot.
- **The signature morph in F6 is a label swap.** Per the live Learnings rows, it is authored as a
  time-proxy plus a reverse-search discrete sequence (never `tl.set({ text: … })`, there is no
  TextPlugin in the shipped GSAP) and it is snapshot-proved to have actually moved.
- Every authored frame element carries its **class**, not just its `id` (Learnings row 1).
- Render authorized up to `--quality draft` only, via `studio render`, exactly once at the end.
  `looks`, `delivery`, publish, social set, blog deploy and the Arabic pass are NOT authorized.

## Notes

- **Voice actually used:** Kokoro `af_heart` at speed 0.74 — offline, free, English. This is the
  campaign's chosen switch away from `.agents/design.md`'s `voices.en = am_michael`, **for this
  campaign only**; the shared spec file is read to this run and is not edited. ElevenLabs stays
  unusable here (`voice_id: ""` in `.agents/design.md`, free-tier keys reject library voices with
  HTTP 402). HeyGen is not used (no `HEYGEN_API_BASE` path taken; not requested).
- `npx hyperframes auth status` / sign-in: not used for TTS — `studio voice` pins the provider
  from this file. No silent provider substitution: if the pin fails, the report says so.
- **House precedent:** `videos/repository-pattern/` (part 1, the grammar carrier),
  `videos/osi-layers-1-sideways/`, `videos/sdlc/` — same shape (vertical faceless explainer, same
  caption rule, `code-editorial` preset). `frame.md` is generated from the same preset so the ten
  parts share one look.
- `.agents/design.md` copied to `design.md` at init so `hyperframes-creative`'s spec precedence
  (`frame.md` → `design.md`) picks it up.
- **Render usage:** `npx hyperframes usage --json` returns `{"status":"unknown",
  "reason":"unsupported_harness"}` — usage is unknown; never guess an allowance. Re-checked
  before the render.
- `npx hyperframes skills update faceless-explainer` **FAILED** on this machine's network
  (`can't check skills freshness (GitHub manifest unreachable) — refusing to report success`),
  and `init` reported the same. Building from the installed on-disk skill at
  `C:\Users\AmrPC\.qoder\skills\faceless-explainer`, not from memory; failure surfaced here as
  required.
- **Parallel-production:** 8 sibling agents are running. This run writes only inside
  `videos/pattern-adapter/`. `preview --background` is NOT started (bible § 8 rule 4) — frame
  review uses `snapshot --at`.
- Two live Learnings traps bound this run (see Customizations): id-only styling, and the missing
  TextPlugin.
