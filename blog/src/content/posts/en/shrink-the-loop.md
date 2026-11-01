---
title: "Shrink the loop: what Waterfall, Agile, and DevOps actually disagree about"
description: "Every methodology answers one question: how late may reality revise the plan. A teardown of SDLC feedback latency, handoff failures, and why AI didn't shrink the loop."
pubDate: 2026-10-18
hero: /images/sdlc-hero.png
tags: [sdlc, process, engineering]
---

## The diagram you already know

Plan, design, build, test, deploy, operate. You have drawn this ring on a whiteboard more times than you can count, and so has everyone reading this. Fifty years old, still in every job description, still the first slide of every process deck. This article takes the diagram as read and argues with it.

The seven phases are the least interesting part of the SDLC. They are bookkeeping. The interesting part is the arrows, and the question hiding inside the methodology wars.

## Postmortems keep naming the same villain

Read a stack of postmortems from any mature engineering org and a pattern emerges. The incident rarely happened inside a phase. Nobody's build phase woke up one morning and shipped a Friday deploy disaster on its own. The damage sits at the seam between two phases, where one team's output becomes another team's input.

Requirements hands design "make it fast," which is a vibe, not a constraint. Design hands build a mockup with one state while the data model has nine. Build hands test a binary and the sentence "works on my machine." Dev hands ops a release and a Friday. Each of those handoffs is where context dies: the assumptions, the tradeoffs, the things that were obvious in the room where the decision was made, none of which travel with the artifact.

There is a structural reason for this, and it is worth naming because it explains why better people and better tools do not fix it. A handoff is a serialization boundary. Everything one side knows implicitly has to be written down, encoded into an artifact, and re-derived by the other side. Serialization loses information. The receiving side fills the gaps from its own priors, and its priors are different because it sits on the other side of the seam. Conway's law then guarantees the seams land exactly where the org chart draws them, so the handoffs were never chosen for technical reasons and cannot be repaired with technical effort.

So the phases behave. The arrows have quotes.

![The six boxes drawn quiet while every arrow between them carries a terracotta crack and a failure quote; the return loop reads months, weeks, minutes](/images/handoff-diagram.svg)

## The one question behind the methodology wars

Waterfall, Agile, DevOps. Three camps, three decades of conference talks, one actual disagreement. Each methodology is an answer to a single question: how late is reality allowed to revise the plan?

That question beats any maturity model because you can measure it in your own org. Pick the moment reality diverged from the plan: a requirement was wrong, an API changed, a customer said the quiet part out loud. Now measure how long it took that fact to revise the working plan. That duration is your feedback latency, and it is the number each methodology was actually built to move.

| Methodology | Revision mechanism | Feedback latency | Honest when | Signature failure |
|---|---|---|---|---|
| Waterfall | change request | months | requirements are frozen | death march with excellent documentation |
| Agile | sprint boundary | weeks | ceremonies carry decision rights | every ceremony kept, none of the authority |
| DevOps | commit | minutes | rollback is first-class | automated pipeline queued behind one manual approval |

## Waterfall: revision by change request

Waterfall says reality may revise the plan through a change request. The plan is frozen, deviations are paperwork, and the paperwork has a queue.

This is not stupidity. In regulated and safety-critical work the change request is the feature: the audit trail is the product, and a frozen requirements baseline is what makes certification possible at all. Waterfall is honest when requirements genuinely are frozen. When they are not, the same machinery converts every surprise into schedule, and the project becomes a death march with excellent documentation.

The failure mode is applying the process to a domain where reality keeps editing.

## Agile: revision by sprint

Agile says reality may revise the plan every sprint. The sprint boundary is a clock: at the end of every iteration the plan is legally allowed to change, and working software is the evidence that forces the change.

The ceremonies exist to manage latency. Planning loads the loop, review closes it, retro tunes it. Strip the decision rights out of those meetings and you get the failure mode every experienced engineer has lived: every ceremony kept, none of the authority. The sprint still happens, the demo still happens, the plan still cannot change, because the person who could change it sits two levels up and is not in the room. At that point the latency is whatever the org chart says it is, wearing a two-week costume.

## DevOps: revision by commit

DevOps says reality may revise the plan every commit. The plan is the pipeline. If it merges, it ships, and production is the review board.

The cultural tell is what gets treated as routine. In a working DevOps org, deploy is boring and rollback is first-class, because a cheap rollback is what makes a fast loop safe. The failure mode is the inverse of the promise: an automated pipeline, fully tested, fully instrumented, queued behind one manual approval. The latency of the whole system collapses to the latency of one human's calendar. The approval was always the bottleneck. The pipeline just made it visible.

## Why the handoffs break (the part the diagrams leave out)

Come back to the arrows with the latency lens in hand and the mechanism gets precise. Every handoff fails in one of four ways.

**Context loss.** The artifact travels, the reasoning does not. The nine data states were obvious in the design review and invisible in the mockup.

**Incentive mismatch.** Each side of a seam is measured on its own phase. Design on approval, build on velocity, test on coverage, ops on uptime. Every one of those metrics is locally rational and globally expensive, and the invoice lands on the arrow.

**Queueing.** A handoff is a queue with a batch size. Work waits in it, and the wait is pure latency: no phase is running while the artifact sits between phases. Bigger batches multiply the wait, which is why a quarter of requirements handed over at once ages worse than the same work trickled across six weeks.

**Trust boundaries.** The receiving side re-verifies because it has been burned, and re-verification is latency with a badge. Manual approvals, gate reviews, and sign-offs are trust boundaries that someone paid for once, in an incident, and that everyone now pays for forever.

Notice what is absent from that list: incompetence. Handoff failures are structural. They survive reorgs, rewrites, and heroics, which is why postmortems keep naming the same villain fifty years running.

## Then AI collapsed the build phase

Here is the lens earning its keep. AI coding tools compressed the build phase dramatically. If the methodology wars were about build throughput, cycle time should have collapsed with it. It mostly did not.

The constraint moved. When writing code was the slow part, the loop's latency lived in build. Once build approaches zero, the loop's latency is whatever was second-slowest all along: review, approvals, coordination. The same four handoff mechanisms, now carrying the entire schedule. A team that generates ten times the diff volume without changing review capacity has not sped up the loop. It has made the review queue ten times longer and called that velocity.

This is the diagnosis the postmortems have been handing us for fifty years, arriving on schedule. The weeks live in the seams.

## Shrink the loop

The boxes were never the point. Every methodology you have argued about is a bet on feedback latency, and every failure you have postmortemed happened at a handoff. So manage the two things the diagram does not show.

**Measure your latency.** Time from "reality diverged" to "the plan changed." Months, weeks, minutes: know which org you actually are, because it is usually not the one on the slide.

**Shrink the batches.** Every handoff's queueing cost scales with batch size. Smaller requirements, smaller diffs, smaller releases. It is the cheapest latency reduction available and it requires no new tooling.

**Fuse the seams you can.** The handoff that cannot lose context is the one that never happens: same people on both sides, or the author on call for the artifact's first week in production.

**Make rollback cheap, then spend the savings on trust.** Every manual gate you replace with an automated check plus a fast rollback is latency removed permanently, and review capacity returned to the humans who actually need it.

Then watch what AI does to your loop with the build phase gone. If the total barely moves, you now know where the weeks live, and the villain has a name.

Shrink the loop.
