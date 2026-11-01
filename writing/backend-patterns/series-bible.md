# Backend Patterns — Series Bible (10-part structural explainer series)

Campaign: `backend-patterns`. Audience and voice come from `.agents/product-marketing.md`
and are **not** re-argued here.

| # | Slug | Pattern |
|---|------|---------|
| 1 | `videos/repository-pattern/` | Repository |
| 2 | `videos/pattern-factory/` | Factory |
| 3 | `videos/pattern-singleton/` | Singleton |
| 4 | `videos/pattern-strategy/` | Strategy |
| 5 | `videos/pattern-observer/` | Observer |
| 6 | `videos/pattern-builder/` | Builder |
| 7 | `videos/pattern-adapter/` | Adapter |
| 8 | `videos/pattern-decorator/` | Decorator |
| 9 | `videos/pattern-cqrs/` | CQRS |
| 10 | `videos/pattern-circuit-breaker/` | Circuit Breaker |

Status: part 1 built first (it is the grammar carrier); parts 2-10 in parallel production.

This file is the shared truth for all ten parts. A per-project `BRIEF.md` is that run's
record; this is what they all point at. If a project file disagrees with this one, **this
file is the campaign decision and the project file is the exception — say so out loud
rather than silently reconciling.**

---

## 1. What the series is

A **neutral structural explainer**, one pattern per part, chosen by the user over the
opinionated-thesis house default. No invented contrarian hook, and no beginner framing
either ("what is a singleton?" is banned). The viewer has written CRUD, has seen a UML
box, and wants the mechanics named precisely and the misuse called out.

The uniform payoff structure — the thing that makes ten parts feel like one channel
without pretending each one is a controversy:

> **What problem it solves -> the anatomy -> the code shape -> where it goes wrong.**

Every part ends on the misuse tell. That is the series' spine, and it is a checkable claim
rather than an opinion.

## 2. Order independence (hard rule)

Each part is watchable first, last, or alone.

- Zero references between parts. No "as we saw", no "part 4", no running gag needing prior context.
- Each part re-establishes its own pattern's problem in the first two narration lines
  (~10-18 words) before making any claim.
- Parts may name a **sibling pattern** once, only to mark a boundary ("this is not a
  factory"), and never to borrow authority ("like in the strategy episode").

## 3. Per-part claims — what each episode pays

One sharp idea per frame; the claim is what the frames are organized around.

| Part | Claim | The misuse tell it ends on |
|------|-------|----------------------------|
| 1 Repository | Keeps the domain out of the data source's business; the seam, not the swap. | A repository that is a pure pass-through to the ORM. |
| 2 Factory | Moves "which concrete type do I build" out of the caller, so the caller depends on a type, not a constructor. | A factory that forwards one argument list — ceremony with nothing to choose. |
| 3 Singleton | It is a **lifetime** decision wearing a pattern's clothes; the DI container gives you one-instance with no static. | Hidden global dependency, and state that survives between tests. |
| 4 Strategy | A behaviour you can swap at runtime behind one signature; the caller says *what*, not *how*. | Strategies that share nothing but their interface, and pluggability nobody plugs into. |
| 5 Observer | Notify many without the publisher knowing who they are. The decoupling is the product; the lost causal trace is the price. | Missing unsubscribe, and a chain of handlers nobody can step through. |
| 6 Builder | Stepwise construction where the invariants hold only at the end — the cure for telescoping constructors and half-valid objects. | A builder for three mandatory fields, and a mutable builder passed onward. |
| 7 Adapter | Converts one interface into another so incompatible code talks; what lets the domain stay clean while a legacy vendor stays in the room. | The wrapped API leaking through anyway, and adapters stacked on adapters. |
| 8 Decorator | Adds responsibility by wrapping the same type — stackable at runtime, where inheritance would have baked it in at compile time. | Twelve nested wrappers, and `wrapped instanceof Original` lying. |
| 9 CQRS | Reads and writes get separate **models**, not necessarily separate databases. Commands own invariants; queries are free to denormalise. | Treating it as mandatory two stores plus events, and the eventual-consistency UI bug. |
| 10 Circuit breaker | Fail fast and give a dying dependency room to recover, instead of piling retries on it. Closed / open / half-open, with a fallback. | A timeout with no breaker, and the retry storm that finishes the job the outage started. |

## 4. Visual grammar

Portrait **1080x1920**, captions on, content capped at the top ~83% — **nothing
load-bearing below y = 1594.**

Every pattern in this series is a relationship between three actors, so the spine grammar
is the same in all ten:

**Grammar R — the three-chamber call graph (the spine).** One frame holds at most three
named boxes: the **caller** (top), the **abstraction or seam** (middle), the
**implementation / infrastructure** (bottom), stacked vertically with the dependency arrow
pointing down and, where it matters, the import arrow pointed back up to show which way
knowledge flows. Labels are large; boxes carry the 2px ink border; the seam box sits in a
dark chamber. This is the pattern, so it is on screen whenever the narration names the
pattern.

**Grammar C — the code chamber (once or twice per part).** A mono code fragment in a dark
chamber, **max 6 lines**, one declaration per fragment, the load-bearing tokens in Ember or
Lavender and everything else in `#8A8A7A`-muted ink. Never a full class. If a shape needs
more than 6 lines, it is the wrong shape for vertical.

**Grammar X — the before/after split (one frame, the misuse tell).** Two stacked chambers:
the wrong shape on top, the fixed shape below — or side by side if the two fragments are
each 3 lines or fewer. Used once, at the end, because that is the frame the viewer
screenshots.

Portrait note (inherited from `videos/osi-layers-1-sideways`): `videos/sdlc`'s "stack
vertically, never side-by-side" is **local precedent from one film, not a house law**.
Stack vertically by default; break the rule only where a comparison genuinely reads better
across, and say so in the project's `## Customizations`.

**Measured, not assumed.** The densest frame is snapshot-checked at 1080x1920 before any
render. A passing `check` is not evidence of how it looks.

## 5. Stack and code conventions

One language across all ten parts, or the series reads as ten different channels:
**TypeScript**, backend-flavoured, no framework names unless the pattern needs one.

- Interfaces and classes named the way a reviewer would name them: `UserRepository`,
  `PaymentGateway`, `RetryPolicy`.
- Never show a snippet that has not been read for correctness. No invented APIs, no
  invented method signatures.
- Parts 9 and 10 may show a state diagram (CQRS two-model split, breaker closed/open/half-open)
  instead of a third code chamber. Diagrams follow the same token palette.

## 6. Copy constraints (all ten parts)

- **Contrast-reveal ban.** No "it's not X, it's Y" or "not because X — because Y". State
  the claim directly. Rationed to at most one occurrence in the hook, per
  `.agents/product-marketing.md`'s Learnings row.
- **Em-dash ban on short copy.** Fine in article prose; zero in on-screen text and captions.
- **Triad cap.** At most one three-item list per part, never two in a row.
- **No mnemonics** and no invented terminology.
- **Customer language** from `.agents/product-marketing.md`: tradeoffs, seam, leaks,
  ceremony, invariant, dependency, coupling. Forbidden: "In today's fast-paced world",
  "unlock", "delve", "journey", "simply put", "let's break this down", "think of it as…",
  anything that announces a lesson.
- **Names and numbers must be checkable.** No invented statistics, no unsourced benchmarks,
  no fake library versions.

## 7. Audio, captions, format — CAMPAIGN LOCK

- **Voice: Kokoro `af_heart`, speed 0.74** — the user's chosen switch for this campaign
  (`af_heart` is the CLI default and already `.agents/design.md`'s `fallback_voice`).
  Offline, free, English only. **This overrides `.agents/design.md`'s
  `voices.en = am_michael` for this campaign only**; the house spec file itself is not to
  be edited by a per-project run. Alternates if `af_heart` reads wrong on camera: `af_nova`,
  `af_sky`, `bf_emma`, `bf_isabella`. Report which was used.
- ElevenLabs stays unusable here (`voice_id: ""` and free-tier HTTP 402). HeyGen only on
  explicit request. **No silent provider substitution** — if the pin fails, say so.
- **No BGM** in any part.
- **No SFX in parts 2-10.** Campaign marks are rationed (the 3-part OSI series budgeted 4
  total); ten parts at one mark each would spend the budget on punctuation. Default is
  silence. If a part genuinely needs a mark, **report it instead of resolving one** —
  parallel runs must not append to `.media/manifest.jsonl` at the same time.
- Captions EN, on, caption-pill keep-out respected.
- Word rate for planning: **~2.0 words per finished second**. A 75-80s part carries
  ~150-160 narration words. Real durations come from `studio cues` timestamps and win.
- Formats: portrait 1080x1920 only. English masters only. The Egyptian colloquial Arabic
  RTL pass is a **later, separate campaign pass** — see section 9, do not build it now.

## 8. Parallel-production rules (this campaign runs 9 concurrent agents)

These exist because the recorded failure mode here was a multi-project pass that burned
tens of millions of subagent tokens and produced zero pixels, and because two stale
previews were previously left listening on 3002/3003.

1. **One agent = one project.** Never author two slugs in one run.
2. **Only your own directory.** Write inside `videos/<your-slug>/` and, if you must,
   `writing/backend-patterns/<your-slug>/`.
3. **Shared files are read-only to a run:** `.agents/design.md`,
   `.agents/product-marketing.md` (including its Learnings table),
   `writing/backend-patterns/series-bible.md`, `studio/**`, `.media/manifest.jsonl`.
   A Learnings row or brand-spec change needs the user's approval and a version bump, so
   **propose it in your report — do not write it.** Nine concurrent writers would silently
   overwrite each other's rows.
4. **No `preview --background`.** Use `snapshot --at` for frame review. Nine persistent
   preview servers on adjacent ports is a collision and a leak; the human preview is
   someone's foreground job.
5. **Draft render only, once, at the end**, through `studio render --quality draft --yes`.
   `looks`, `delivery`, and publish are not authorized anywhere in this campaign.
6. Batch the free gates at campaign level afterwards (`studio batch verify cues assemble
   check --campaign backend-patterns`) rather than each run holding a conversation about them.

## 9. Queued, not authorized

- **Arabic pass.** Later. Needs an Egyptian colloquial **rewrite** (عامية مصرية, never
  literal MSA translation), RTL-aware composition, and `provider: gemini`, `voice: Kore`
  pinned explicitly — Gemini is not in the engine's auto cascade and Kokoro has no Arabic.
  Its ~3 requests/minute free tier is the bottleneck, so it runs sequentially, not parallel.
  The glossary in section 6 is the seed for the code-switched term list.
- **Distribution.** No social set, no articles, no blog deploy, no publishing.
- **Higher render quality.** Draft only.
