# BRIEF — تحذير نصب «تحويل المكالمات»

**Campaign slug:** call-forwarding-scam
**Stage:** 5 complete. GATE 1 cleared — user asked for the full package ("all media, video, posts and article").
**Deliverable type:** written social + 75s vertical video + blog article + shareable stills, Egyptian colloquial Arabic (العامية المصرية) only. Zero English words.
**Not a product promo.** No brand, no URL, no offer. Public-interest safety warning.
**Document version:** v1 (2026-10-20)

---

## 1. Context state

`.agents/product-marketing.md` exists but describes the **engineering content studio / SDLC** audience
(fluent developers, English master + عامية مصرية variant). It does **not** cover this campaign — the
audience here is a general Egyptian Facebook/WhatsApp readership, and the job is protection, not
thought leadership.

Applied from it anyway (these are active Learnings rows, so they bind):
- Arabic must be **عامية مصرية**, never MSA stiffness, never literal translation.
- Egyptian digital writing transliterates brand names (واتساب، فيسبوك) rather than leaving latin script.

Applied from `.agents/design.md`: flat editorial tone, urgency carried by structure and short
declarative lines. Its "no exclamation marks / no hype" rule is **deliberately relaxed once** here,
and only for warning markers (🔴 ⛔), not for adjectives. Reason: the genre the post must survive in
is the Egyptian family-group warning forward, where a flat tone reads as "not important" and gets
skipped. Flagged as an open question in §7.

**Diagnosis (copywriting skill):** Situation A — brief given, no draft supplied, no writing sample.
Latitude on angle, **zero latitude on facts.** Every mechanic below comes from the user's brief and
nothing else.

---

## 2. Angle

**Message (one sentence):**
في نصب جديد بيسرق حسابات الناس الكبيرة من غير ما يطلب كود ولا كلمة سر، وبيتم عن طريق إعداد اسمه
«تحويل المكالمات» — والخطوة الوحيدة اللي بتوقفه هي إنحد يتفرج على موبايل أبوه النهارده.

**Angle:** *the scam is invisible, so the check must be done BY the child, not the parent.*

This is the load-bearing decision, and it's why this post can travel where the existing
"متديش الكود لحد" content can't.

| | What everyone already says | This post |
|---|---|---|
| Threat | someone asks you for a code | nobody asks you anything |
| Defense | say no, don't share | your parent can't say no to something that never reaches them |
| Actor | the elderly person themselves | **the adult child**, physically holding the phone |
| Failure mode | victim gets greedy/scared | victim feels **nothing**, which is the danger |

**Why this beats the obvious alternatives:**
- Rejected "protect yourself" framing: puts the burden on the person least able to carry it, and
  makes the elderly reader defensive. Defensive readers don't forward.
- Rejected "here's a scam story" framing: needs a real, sourced incident we don't have. Would be
  fabrication, and in anti-fraud advice a fabricated case gets quoted as fact.
- Chosen "you must do this check for them" framing: the reader is *already* holding their parent's
  phone half the time to fix something. Activation energy is near zero.

**Second angle decision — the anti-shame line.** The post explicitly tells the reader not to blame
the parent, and to say "ده مش غلطتك". Two reasons it's in the draft and stays:
1. Unity/identity: the share target is a family group. A post that reads as "your parents are
   dumb" has a **share cost** — nobody forwards an insult into their own family.
2. The real behavioural goal isn't the click, it's the parent disclosing early. Shame guarantees
   late disclosure, and late disclosure is what makes this scam unrecoverable.

---

## 3. Audience

- **Primary (reader/action-taker):** Egyptian adult children, roughly 25–45, who have a parent with
  a landline-or-simple smartphone and who regularly operate that phone for them. They are on
  Facebook, and they are in family WhatsApp groups.
- **Secondary (protected subject, not reader):** the parent. May read the post after being forwarded
  it. Must not feel stupid.
- **Tertiary (spread vector):** the family group itself. Content must be safe to forward verbatim.

**Share motivation:** the post's job-to-be-done for the sharer is *"prove I'm taking care of my
parents"* plus *"warn the people who owe me an explanation."* That's status + duty, not information.
Which is why the CTA ends on "ابعت البوست ده لبنتك وولدك" and "ادخل إنت اعملها بنفسك" — the forward
and the visit are both the payoff.

**Searchable or shareable:** pure **shareable**. No search-intent play here, and I'm not writing one —
there's no owned site asset this should feed unless the user says otherwise (see §7).

---

## 4. Psychology stack (marketing-psychology)

| Model | How it's used in the draft |
|---|---|
| Availability heuristic | Mechanism walked step by step in habitual present tense, so the reader can picture their own parent's phone. No invented victim. |
| Loss aversion | Framed as losing WhatsApp, the bank app, the phone number — never framed as "gain safety". |
| Protection motivation (fear + efficacy) | Threat never appears without an immediately doable action in the same section. Fear without efficacy produces denial and scroll-past. |
| BJ Fogg (B = M × A × P) | The whole post is an Ability problem. Motivation is free here. Hence: "خد الموبايل في إيدك إنت"، "٣ حاجات"، "دقيقتين". |
| Activation energy + Hick's law | Exactly 3 checks in the checklist, 3 sentences to teach the parent. Nothing to decide. |
| Unity principle | "إحنا علمناها لبعض" — the post stands inside the reader's own family habits before showing they no longer work. |
| Zeigarnik effect | Hook states an absence ("مش هتلاقي أي إشارة") which the body must close. Carries the read past the fold. |
| Regret aversion | "لو شكّيت إن في حساب وقع" section exists so a reader who already got hit has a next step and doesn't freeze. |
| Status-quo bias | Counteracted by making the check a 2-minute look at one setting rather than a security project. |

**Deliberately not used:** social proof and statistics. We have no numbers and no sourced incident.
Inventing "كل يوم ناس كتير بتتعرض" is a weasel source and it's the exact thing that discredits
anti-fraud copy when someone checks it. Marked `[NEED: proof]` in §7.

---

## 5. Structure of the long post (the atomised flagship)

1. Hook — the absence is the news (🔴)
2. The scenario, step by step (habitual present, no fabricated victim)
3. «تحويل المكالمات» explained in one plain sentence
4. The second move — كود التحقق lands on the forwarded number
5. Why nobody notices (4 bullets, the insight line: "احنا علمنا ولادنا متديش الكود لحد، والحيلة دي بتشتغل لأن مفيش حد بيسأل")
6. Human line — it's not stupidity, and the shame warning
7. 📋 «تأكد في دقيقتين» — 3 checks
8. What to do if you already suspect — 4 recovery steps
9. ⛔ Teach the parent 3 sentences
10. Close on two actions: forward, and go do it yourself

Uneven density is intentional: §2–4 (the mechanism) runs longest because that's the new information.
§8 is short because it's a checklist, not an argument.

---

## 6. Accuracy guardrails (non-negotiable — real people will act on this)

- Mechanics are **exactly** as the user stated. Nothing added about telco behaviour, country dial
  plans, or specific verification flows.
- `*21*` and `**21*` appear **once**, as named examples of what scammers push victims to dial, with a
  sentence inside the post that says outright they are examples and not instructions, and never with
  a number attached. No complete dialable sequence appears anywhere in the copy.
- No cancel-code is given. The post states the cancel code varies by carrier and by line, and routes
  to (a) the phone app's own تحويل المكالمات setting, (b) the carrier, called **from a different
  phone**. That's the safe general guidance the brief asked for.
- One implication drawn from the stated mechanism, and it's flagged here for the user to veto:
  forwarding affects **incoming** calls, so **outgoing** calls still look normal. It's definitional to
  call forwarding and it materially changes behaviour ("don't assume the line is fine because you can
  dial out"), but the user didn't state it.
- Advice against blaming the victim, and to disclose early, is behavioural — not a factual claim.
- No claims about police, banks' liability, or any authority. Not stated, not needed.
- Tone cap: caring and protective. No "هيحصل لمين غيرك", no body-count imagery, no countdown urgency.

---

## 7. Open questions for the user (blocking GATE 1 → stage 4/5)

1. **Platform / final format.** Not specified, so I defaulted to the format that actually reaches
   family groups: long-form Facebook post as the flagship, plus an Instagram caption and a WhatsApp
   broadcast. Confirm or redirect (X thread? TikTok script? Telegram channel? a printed A5 card to
   hand to parents?).
2. **Bold rendering — a real constraint, not a preference.** Facebook does not render markdown bold.
   Right now emphasis is done with 🔴 ⛔ 📋, « » quotes, and one-line breaks. If true bold is required,
   the options are: (a) `*نص*` which renders bold **only** in WhatsApp — that version is written;
   (b) an image/carousel where bold is typographic; (c) accept Facebook-native emphasis. Which one?
3. **Voice/authority of the post.** Currently unsigned — a person talking to other people. If it
   should go out as a bank, a telecom, a security page, or a named individual, the register changes
   and the credibility line changes. Who is speaking?
4. `[NEED: proof]` **Is there a real, sourced case** (a named incident, a carrier advisory, a police
   or bank notice) I can cite? One verifiable reference roughly doubles forward-rate on safety
   content and removes the "سمعت إن" smell. If not, the draft stays claim-free, which is safe but
   less sticky.
5. **Confirm the outgoing-calls line** in §6 stays or comes out.
6. **Video?** If yes, this is a `faceless-explainer` candidate (30–90s, mechanism as motion), not a
   talking-head piece. Nothing is briefed, rendered, or spent. I need an explicit go.
7. **Arabic-only, or does a companion English version exist for cross-posting?** Stated as
   Arabic-only, confirming because the workspace default is English master + عامية مصرية variant,
   and this campaign inverts it.
8. **Blog asset?** `blog/src/content/posts/{en,ar}/` exists and this is genuinely a searchable topic
   (people type the fear into a search bar). Publishing there would make it findable long after the
   feed decays. Not done. Needs approval + the deploy gate.

---

## 8. Proposed Learnings row (needs user approval + product-marketing.md version bump)

| Date | Learning | Evidence | Applies to | Status |
|---|---|---|---|---|
| 2026-10-20 | For protective/family-forward content, the actor must be the adult child, not the at-risk parent; a post that could read as insulting the parent does not get forwarded into family groups | Angle decision this campaign, untested | all AR safety/warning content | proposed |

Second candidate, also unproposed until the user answers §7.2: the workspace tone rule (no
exclamation, no hype) needs a documented exception for public-safety warnings.

---

## 9. Copy-edit pass log (what changed after the first draft, and why)

Written so stage 4/5 doesn't re-litigate settled lines.

| Line / area | Change | Reason |
|---|---|---|
| Hook | split into 3 short lines | one 30-word sentence was the only thing standing between the reader and the fold |
| Pretext | added «والحجة دي بيتغير شكلها. يوم شركة اتصالات ويوم البنك…» | without it, a reader whose parent was called by someone claiming to be from the *bank* concludes they're safe. Narrowing the pretext is the failure mode this hedge prevents. |
| «كود التحقق بيوصله» para | killed a triple «من غير ما…» pile-on, replaced with one positive picture ("قاعدة في البيت، موبايلها ساكن") | trailing pile-on + stacked negation list, both banned patterns; the picture also clears the "can the reader picture it" gate |
| «مفيش حد غبي هنا» | moved the anti-shame beat to line 99 only, left the mechanism beat here | the same point appeared twice and the second one read softer |
| `*21*` block | unchanged in content, still one mention, still self-labelled as examples | guardrail §6 |
| All markdown `**bold**` in the Facebook copy | removed | Facebook renders asterisks literally. Emphasis moved to line breaks + ⚠️. Real `*bold*` lives only in `broadcast-whatsapp-ar.md`, where WhatsApp renders it. |
| Em dashes | deleted from all three copy bodies | banned in social copy; period or line break instead |
| Spelling | «إدخل» → «ادخل» | the hamza-prefixed spelling reads MSA-corrected, which breaks the عامية register |
| IG short version | never names the code shape with characters | in 135 words there's no room for the disclaimer that makes it safe |

**Still open in the copy (not blocking, but flag if you disagree):**
- The recovery bullet «أعد تأمين واتساب وتطبيق البنك من جوه التطبيق نفسه، واقفل أي جهاز مش بتاعكم مسجّل هناك» is generic hardening advice, not a mechanic from the brief. It's safe and it's what a person does next. Say the word and it comes out.

---

## 10. Files in this campaign

**Written (Arabic only)**
- `writing/call-forwarding-scam/BRIEF.md` — this file
- `writing/call-forwarding-scam/post-long-facebook-ar.md` — flagship long-form (~٧٥٠ كلمة)
- `writing/call-forwarding-scam/post-short-instagram-ar.md` — short-form caption + 9-point X/Threads thread + hashtags
- `writing/call-forwarding-scam/broadcast-whatsapp-ar.md` — WhatsApp broadcast (real `*bold*`) + family-group message aimed at the elders themselves
- `blog/src/content/posts/ar/call-forwarding-scam.md` — the durable long-form article

**Video**
- `videos/call-forwarding-scam/renders/video.mp4` — **75s, 1080x1920 (9:16), 30fps, h264, silent**
- `videos/call-forwarding-scam/` — composition source: `index.html`, 10 frames in `compositions/frames/`, plus `BRIEF.md`, `SCRIPT.md` (narration), `STORYBOARD.md`, `design.md`, `frame.md`
- Arabic type verified in rendered frames: correct RTL direction and letter shaping, Noto Kufi + Noto Naskh subsets in `assets/fonts/`

**Stills**
- `assets/images/call-forwarding-scam/cover-9x16.png` — 1080x1920, video thumbnail / story cover
- `assets/images/call-forwarding-scam/check-card-4x5.png` — 1080x1350, the 2-minute check as an image forward (this is what elders actually engage with)
- `assets/images/call-forwarding-scam/hero-blog.png` — 1200x630, also copied to `blog/public/images/call-forwarding-scam-hero.png` and wired as the article's `hero`

Nothing published. Render was local — no credits spent.
