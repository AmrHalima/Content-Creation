# Product Marketing Context

**Document version:** v3
**Last updated:** 2026-10-22

> Bootstrapped by the agent from a completed user briefing (no interview possible in this
> session). Sections below marked *(inferred)* are agent judgment and should be corrected
> by the user at the next `/product-marketing` pass. Everything else is settled by the user.

## Product Overview
**One-liner:** Bilingual (English + Egyptian Arabic) engineering content studio output — this package: an opinionated SDLC explainer video, article, and social set.
**What it does:** Produces media (video, article, social posts, supporting images) about software engineering topics for a fluent practitioner audience. English is the master language; Egyptian colloquial Arabic (عامية مصرية) is the localized variant, not a literal translation.
**Product category:** Technical content / developer education media.
**Product type:** Content package (video + written + social).
**Business model:** *(inferred)* Audience-building / thought leadership; no direct monetization specified.

## Target Audience
**Target companies:** Software teams of any size; no specific company profile given.
**Decision-makers:** N/A — readers/viewers are the audience, not buyers.
**Primary use case:** Experienced developers and engineers who already know what SDLC means and want tradeoffs, sharp takes, and reality checks — not a beginner's tour.
**Jobs to be done:**
- Help me see SDLC methodology debates (Agile vs Waterfall vs DevOps) more clearly, fast.
- Give me ammunition/language for process arguments at my team.
- Respect my time: dense, opinionated, no hand-holding.
**Use cases:**
- 60–90s teaser video consumed on social.
- Article read by engineers evaluating or defending their team's process.
- Social posts (LinkedIn, X thread, short-form captions) driving to the video/article.

## Problems & Pain Points
**Core problem:** Most SDLC content is phase-by-phase recital aimed at beginners; it reads as beneath an experienced engineer and gets skipped.
**Why alternatives fall short:**
- Listicle "7 phases of SDLC" content — zero tension, zero opinion.
- Methodology evangelism (Agile-worship or DevOps-worship) — practitioners know every methodology breaks somewhere.
**What it costs them:** Time; credibility if they share weak content with peers.
**Emotional tension:** Frustration with process theater; the gap between the diagram and where work actually breaks.

## Differentiation
**Key differentiators:**
- Opinionated angle over taxonomy; assumes fluency from the first second.
- Bilingual with genuine Egyptian colloquial Arabic that reads like an Egyptian engineer talking — RTL-aware video variant.
**How we do it differently:** Solve the "sophisticated audience × 60–90s runtime" tension with a sharp thesis, not compression of a beginner script.
**Why that's better:** Practitioners share takes, not tutorials.

## Customer Language
**Words to use:** tradeoffs, reality, breaks, process theater, ceremony, feedback loops, deploy, rollback, scope. Egyptian Arabic: engineer-speak code-switched with English tech terms (سبرنت، ديبوي، ريفيو) — this is how Egyptian devs actually talk.
**Words to avoid:** "In today's fast-paced world", "unlock", "delve", "journey", "revolutionize", beginner framing ("what is SDLC?"), corporate Agile marketing-speak.
**Glossary:**
| Term | Meaning |
|------|---------|
| SDLC | Software Development Life Cycle — plan, design, build, test, deploy, operate/maintain |
| عامية مصرية | Egyptian colloquial Arabic; the required register for the AR variant (not MSA) |

## Brand Voice
| Attribute | Means | Doesn't mean | Example line |
|-----------|-------|--------------|--------------|
| Opinionated | Takes a position, names tradeoffs | Contrarian for its own sake | *(to be set from shipped copy)* |
| Peer-to-peer | Talks like a senior engineer, not a lecturer | Jargon-dumping to signal status | |
| Dense | High information per second/line | Rushed or clipped | |
| Wry | Dry humor about process reality | Cynical or nihilistic | |

**Tone by context:**
- Video: fast, hook-driven, confident.
- Article: argued, with concrete failure modes.
- Social: punchy; thread = escalating take; captions = hook + CTA.
**Terms we own:** *(none yet)*
**Never use (and why):** AI-tell blacklist from `/copywriting`; MSA stiffness in the Arabic variant (breaks the "Egyptian engineer talking" requirement).

## Goals
**Business goal:** Ship the three deliverables (video MP4, social set, article + images) in EN master + AR variant.
**Conversion action:** *(inferred)* Watch the video, read the article, engage/share.
**Current metrics:** None yet.

## Learnings
*Decisions and tested lessons. Newest first. Keep it to about 20 active entries.*
| Date | Learning | Evidence | Applies to | Status |
|------|----------|----------|------------|--------|
| 2026-10-22 | An element styled only by `id` while the CSS rule is a class renders unstyled at 0,0 in default serif and passes `check` silently. Every authored frame element must carry the class, not just the id, and be verified by snapshot rather than by lint. | OSI P2 `videos/osi-layers-2-the-seam` — five such elements (kickers, notes, the F6 record card) collided in the top-left corner while check reported 0 errors | video (all HyperFrames compositions); check is not evidence of correct styling | active |
| 2026-10-22 | The shipped HyperFrames/GSAP setup includes no TextPlugin, so `tl.set({ text: … })` silently no-ops at runtime while `npm run check` still reports 0 errors. In-place label swaps must use a time-proxy plus a reverse-search discrete sequence, never a text tween. | OSI P1 `videos/osi-layers-1-sideways` — a label swap passed check while not moving on screen; validated by snapshot, not by lint | video (all HyperFrames compositions); check is not evidence of runtime text change | active |
| 2026-10-18 | For this audience, an opinionated angle beats a phase listicle in short runtime | User briefing decision (pre-approved) | video, social, article | active |
| 2026-10-18 | Arabic variant must be عامية مصرية, RTL-aware; never literal MSA translation | User briefing decision | all AR deliverables | active |

## Changelog
*Newest first. One line per revision: what changed and why.*
- v3 (2026-10-22) — One change only: added the Learnings row on `id`-styled elements rendering unstyled at 0,0 while `check` passes, approved by the user. No other section touched — the proposed audience-lane rewrite is still unapproved and will take the next version number.
- v2 (2026-10-22) — One change only: added the 2026-10-22 Learnings row on the missing TextPlugin / silent `tl.set({ text })` no-op, approved by the user. No other section touched — the proposed audience-lane rewrite is still unapproved and will take the next version number.
- v1 (2026-10-18) — Initial context, bootstrapped from the user's completed SDLC-package briefing.
