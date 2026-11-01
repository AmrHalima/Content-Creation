# Arabic video package — TEXT ONLY (عامية مصرية)

**Scope:** full Egyptian-colloquial narration script (9 lines, same frame timings as `G:\Content Creation\sdlc\SCRIPT.md`) plus the RTL on-screen-text spec for re-authoring the composition. **No composition edits, no render, no TTS generation in this session.**
**Register:** Egyptian colloquial as spoken by an Egyptian engineer. Code-switched English tech terms (sprint, deploy, review, pipeline) are kept in Latin script inside the Arabic sentence, because that is how the register actually sounds. Jokes that only work in English are replaced with Egyptian equivalents, not translated flat.
**Voice direction (for whoever records/generates later):** نِدّ لنِدّ، مهندس بيكلم مهندس. ناشف، واثق، ساخر بخفة. Punchlines تنزل flat من غير ما حد يعلنها. نفس توجيهات الـ EN master.

---

## Narration script (9 lines, timings identical to EN master)

### Line 1 — الشكل اللي أنت عارفه (Frame 1)

**Time:** 0.0 – 8.0s
**Delivery:** اعتراف دافي على «الشكل ده أنت عارفه». عدّ المراحل سريع ومتتمرّن عليه، قاله مية مرة قبل كده. ابتسامة خفيفة على «job description».

    الشكل ده أنت عارفه كويس. Plan، design، build، test، deploy، operate. عمره خمسين سنة، ولسه موجود في كل job description.

### Line 2 — نفس المتهم (Frame 2)

**Time:** 8.0 – 13.0s
**Delivery:** نزّل الريجيستر. «الـ handoff» تنزل flat ونهائية، مع نفس ساكت قبلها.

    كل الـ postmortems بتوصل لنفس المتهم. الـ handoff.

### Line 3 — الرول كول بتاع السهام الأربعة (Frame 3)

**Time:** 13.0 – 25.0s
**Delivery:** أربع محطات سريعة، واحدة لكل سهم. كل اقتباس deadpan، والسامع يكمل من حربته هو. وقفة صغيرة قبل «يوم جمعة».

    من الـ requirements للـ design: «خلّوه سريع». من الـ design للـ build: الـ mockup كان فيه state واحدة، والـ data طلعتلنا تسع حالات. من الـ build للـ test: «شغالة على جهازي». ومن الـ dev للـ ops: نزلنا الـ deploy يوم جمعة.

### Line 4 — السؤال الواحد (Frame 4)

**Time:** 25.0 – 31.0s
**Delivery:** التلات أسماء عدّ سريع وحاسم. السؤال أبطأ ومتعمّد، ده فقرات الفيديو الضهرية.

    Waterfall، Agile، DevOps. تلات إجابات على سؤال واحد: الواقع مسموحله يعدّل الخطة متأخر لإمتى؟

### Line 5 — الـ Waterfall بيجاوب (Frame 5)

**Time:** 31.0 – 39.0s
**Delivery:** عادل، مش مستهزأ. «death march بتوثيق ممتاز» هي العضة الوحيدة، ناشفة وتحت السطح.

    الـ Waterfall: عن طريق change request. الـ feedback بالشهور. منصف لما الـ requirements تكون متجمدة. ولما تكون لأ؟ death march بتوثيق ممتاز.

### Line 6 — الـ Agile بيجاوب (Frame 6)

**Time:** 39.0 – 46.0s
**Delivery:** الإيقاع يطلع. سطر طريقة الفشل هو النكتة الداخلية بتاعة التلاتة، تتقال كإنك قاعد في الـ standup ده.

    الـ Agile: كل sprint. الـ feedback بالأسابيع. طريقة الفشل الشهيرة: كل الـ ceremonies موجودة، ومن غير أي authority.

### Line 7 — الـ DevOps بيجاوب (Frame 7)

**Time:** 46.0 – 55.0s
**Delivery:** قمة الإيقاع، وبعدين آخر جملة تبطّأ عشان الوخزة. «approval يدوي واحد» واخدة micro-beat قبلها.

    الـ DevOps: كل commit. الـ feedback بالدقايق. الـ deploy بيبقى حاجة مملة، والـ rollback بيبقى مواطن درجة أولى. وطريقة الفشل: pipeline مؤتمت بالكامل، واقف في طابور approval يدوي واحد.

### Line 8 — بعدين الـ AI اتحرك (Frame 8)

**Time:** 55.0 – 64.0s
**Delivery:** «واللوب مااتحركش تقريبًا» هي المفاجأة، سيبها تعلّق نص ثانية. القائمة في الآخر متوزنة، كل عنصر مسمار.

    بعدين الـ AI جه وهدّ مرحلة الـ build خالص، واللوب مااتحركش تقريبًا. الـ review والـ approvals والـ coordination: دي الأسابيع عايشة فيها.

### Line 9 — صغّر اللوب (Frame 9)

**Time:** 64.0 – 71.0s
**Delivery:** الهبوط. «صغّر اللوب.» هي الفيديو كله في كلمتين، هادية ونهائية. سطر الـ CTA عادي ومتكلم.

    المربعات عمرها ما كانت هي الموضوع. صغّر اللوب. التفكيك الكامل في المقال.

---

## RTL on-screen-text spec

Every piece of display text in the EN composition, with its Egyptian Arabic replacement and the layout change RTL forces. Anything not listed stays as-is (background grid, tile grounds, palette, motion grammar, caption keep-out).

### Global changes

1. Root: `dir="rtl"` + `lang="ar"` on every frame document; text containers `text-align: right` by default, centered heroes stay centered.
2. Font substitution (EB Garamond and JetBrains Mono have no Arabic glyphs):
   - Display (EB Garamond role) → **Amiri** (naskh, humanist, closest in spirit to Garamond). No true Arabic italic exists: replace the italic stance with Amiri at display weight/size plus the coral ✱ or a hairline rule as the stance marker, never a synthetic skew.
   - Body (Inter role) → **IBM Plex Sans Arabic** or Noto Sans Arabic.
   - Mono labels (JetBrains Mono role) → **IBM Plex Mono Arabic** for Arabic-script labels; keep JetBrains Mono for Latin tokens (phase names, code-surface stages, WATERFALL/AGILE/DEVOPS).
3. Bidi isolation: wrap every Latin token and every chip containing `→` in `<span dir="ltr">` with `unicode-bidi: isolate`, otherwise punctuation and arrows reorder. Chips like `plan → design` either keep `dir="ltr"` verbatim or flip the arrow to `←` when fully Arabized. Pick one rule and apply it everywhere: **chips stay Latin + `dir="ltr"`** (engineers read them daily), quotes go Arabic.
4. Numerals: Western Arabic numerals (0-9) throughout, matching Egyptian engineering convention. No Eastern Arabic numerals in lockups or timings.
5. Punctuation: Arabic comma `،` and question mark `؟` in Arabic display text; keep `.` and `·` where the line is Latin.
6. Type-on reveals (`discrete-text-sequence` + caret): the caret must sit on the LEFT edge of the growing string and characters append leftward. Caret blink timing unchanged.
7. Quote cards: text right-aligned, card enters from the left side of its arrow (mirror of EN), attribution chip bottom-right of card.
8. Motion grammar, palette discipline (one coral moment per frame), holds, and the caption keep-out band are unchanged. The caption pill itself carries the Arabic VO captions, right-aligned.

### Frame-by-frame display text

| Frame | EN display text | AR replacement | RTL layout change |
|---|---|---|---|
| F1 | `✱ THE SOFTWARE DEVELOPMENT LIFE CYCLE` (kicker, type-on) | `✱ دورة حياة تطوير البرمجيات` (or keep Latin kicker; if kept, `dir="ltr"` centered) | type-on appends leftward; ✱ moves to right of string |
| F1 | tiles `plan design build test deploy operate` | keep Latin mono lowercase | cascade order mirrors: tiles land counter-clockwise (right-to-left read) |
| F1 | `est. 1970s · still in every job description` | `من السبعينيات · ولسه في كل job description` | index strip right-aligned under ring |
| F2 | display `The handoff.` | `الـ handoff.` (mixed run: isolate the Latin word) | slam lands centered; crack unchanged |
| F3 | card 1 `"make it fast."` / chip `requirements → design` | `«خلّوه سريع.»` / chip stays Latin `dir="ltr"` | card right-aligned, enters from left of arrow |
| F3 | card 2 `mockup: 1 state. data: 9 states.` / chip `design → build` | `الـ mockup: state واحدة. الـ data: تسع حالات.` / chip Latin | same |
| F3 | card 3 `"works on my machine."` / chip `build → test` | `«شغالة على جهازي.»` / chip Latin | same |
| F3 | card 4 `shipped it on a Friday.` / chip `dev → ops` | `نزلنا الـ deploy يوم جمعة.` / chip Latin | same |
| F3 | camera pan order | unchanged content | pan runs right-to-left through stations to match RTL reading |
| F4 | `WATERFALL` / `AGILE` / `DEVOPS` flashes | keep Latin mono (they are the names) | word-swap unchanged |
| F4 | kicker `✱ ONE QUESTION` | `✱ سؤال واحد` | ✱ right of string |
| F4 | question `How late is reality allowed to revise the plan?` | `الواقع مسموحله يعدّل الخطة متأخر لإمتى؟` in Amiri display | per-word reveal appends leftward; line breaks re-flow for Arabic word lengths |
| F5 | form rows `scope ___ / impact ___ / approver ___` | `النطاق ___ / الأثر ___ / المعتمِد ___` (or keep Latin rows; if kept, `dir="ltr"`) | rows right-aligned inside card |
| F5 | stamp `PENDING REVIEW` | `معلّق للمراجعة` | stamp slam enters from left (mirror of EN overshoot) |
| F5 | lockup `months` / unit `feedback latency` | `شهور` / `زمن وصول الـ feedback` | lockup keeps identical slot; figure right-aligned over rule |
| F5 | verdict `and a death march when they're not.` | `ولما تكون لأ؟ death march بتوثيق ممتاز.` | right-aligned under lockup |
| F6 | note `ceremony ✓` / `authority ✗` | `الـ ceremonies ✓` / `الـ authority ✗` (coral ✗ unchanged) | note card mirrors to left of spiral |
| F6 | lockup `weeks` | `أسابيع` | same slot |
| F7 | stages `build` / `test` / `deploy ✓` (code surface) | keep Latin mono (code surface is Latin by nature) | type-on caret on left |
| F7 | status strip `deploy: routine · rollback: first-class` | `الـ deploy: روتين · الـ rollback: مواطن درجة أولى` | strip right-aligned under title bar |
| F7 | gate label `manual approval` | `موافقة يدوية` | gate drops unchanged (vertical flow is RTL-neutral); return arrow climbs the LEFT side of the panel |
| F7 | lockup `minutes` (coral unit) | `دقايق` | same slot, coral on unit word |
| F8 | segment labels `review / approvals / coordination / build` | `review / approvals / coordination / build` keep Latin mono chips, OR Arabize as `مراجعة / اعتمادات / تنسيق / بناء`; recommend Latin chips + Arabic keyword-glow rail | bar fills right-to-left; label rail right-aligned |
| F8 | end marker `total cycle time` | `إجمالي زمن الدورة` | marker stays at the (now right-hand) start edge; it visibly does NOT move |
| F9 | line 1 `The boxes were never the point.` | `المربعات عمرها ما كانت هي الموضوع.` | right-aligned lead |
| F9 | display `Shrink the loop.` | `صغّر اللوب.` in Amiri display, largest type in the film | centered, negative tracking replaced by normal Arabic kerning (Arabic joins; do not letter-space) |
| F9 | CTA band `Read the full teardown` + ✱ | `اقرا التفكيك الكامل` + ✱ | band wipes right-to-left; ✱ on right |

### Timing note

Frame durations stay as authored (8.661 / 3.477 / 12.331 / 8.064 / 8.448 / 7.424 / 12.352 / 8.003 / 5.248s). The Arabic lines above were written to land inside the same windows at a natural Egyptian speaking pace; once a real voice exists, re-time per line exactly as the EN pass did (VO-paced reveals across the back ~50% of each frame).

---

## Render blocker

No Arabic narration can be produced on this machine. The only speech engine available is local Kokoro-82M (voice `am_michael`), which has no Arabic support, and there is no HeyGen or ElevenLabs credential present. Realistic options, with what each costs in fidelity:

1. **Cloud Arabic TTS with a credential** (HeyGen TTS/avatar or ElevenLabs multilingual). Highest convenience and consistent pacing; cost is API credits plus a credential setup. Fidelity risk: Egyptian colloquial specifically is the weak spot of most cloud voices, and code-switched Latin tokens (sprint, deploy, pipeline) frequently mispronounce; expect a casting round of 2-3 voices and manual phoneme fixes. The dry punchline timing still needs per-line direction.
2. **On-screen Arabic text with music bed, no narration.** Shippable today with zero new dependencies: the RTL spec above plus the existing percussive bed. Cost in fidelity: the entire register lives in the delivery (the flat punchlines, the beat before "الـ handoff"), and silent type loses it; reading speed also forces longer holds per frame, so the 74s cut stretches and the VO-paced reveal grammar has to be re-timed to read pace.
3. **Human voice recording** (an Egyptian engineer, one take, ~75s). Highest fidelity for colloquial code-switching and for the sardonic register; this is the only option that fully preserves what the EN voice direction asks for. Cost: scheduling, a decent mic or treated room, and one editing pass; frame timings then re-fit to the recorded line lengths, same as the EN pass did.

Recommendation when unblocked: option 3 if a speaker is reachable in a week, option 1 otherwise, option 2 only as a stopgap teaser. Until then this file stays text-only and the AR composition render stays on hold, per the brief.
