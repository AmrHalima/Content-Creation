---
format: 1080x1920
duration: 75s
message: "النصب ده مبيطلبش من الكبير حاجة خالص — فالفحص لازم يتعمل بإيد الولد"
arc: Hook → Name → The call → The reroute → The second move → Why invisible → The check → Recovery → Teach → Close
audience: "ولاد وبنات الناس الكبيرة (٢٥–٤٥) اللي بيمسكوا موبايل أبوهوم بإيدهوم، بيتفرج على واتساب"
mode: autonomous
music: none
captions: skipped (no narration audio — on-screen type is the narration)
---

## Video direction

**Palette system** (from `frame.md`, broadside remixed onto `.agents/design.md`): two registers only,
one per frame. `dark` = ground `ink-black #1A1A1A`, text `cream #FFFFEB`, accent `fire-orange
#FFA946` (the ember of the brand, used as the single alarm hue). `orange` = ground `#FFA946`, text
`ink-black` (ink-on-fire is absolute — never cream on orange). `cream-muted #034F46` (forest) is the
only second tone and appears **once**, as the de-emphasised caption on Frame 7. No other hue.

**Type** — display role = Noto Kufi Arabic 700–900, reading role = Noto Naskh Arabic 400. Both
shipped locally as variable TTFs (`assets/fonts/`). **Arabic overrides on the preset** (written into
`frame.md` § Arabic adaptation): tracking is **0** on every Arabic run (the preset's −0.04em negative
tracking is a Latin case-signal and it visually breaks joined Arabic), `lower`/`upper` signals do not
exist for Arabic, and the IBM Plex Mono chrome role is **dropped entirely** — mono has no Arabic
coverage and any mono label would be an English word, which the brief forbids. Chrome labels are
Kufi 500 in Arabic; catalogue numerals are Eastern Arabic-Indic (٠١ ٠٢ …).
**Numerals: Eastern Arabic-Indic (٠١٢٣٤٥٦٧٨٩) everywhere, on every frame, no Latin digits.**
**Direction: `dir="rtl" lang="ar"` on every frame root.** Reading flows right→left, so "the source"
sits on the right and "where it goes" on the left in every diagram.

**Motion grammar + reveal model** — silent film: reveals pace to the **beat**, one idea per window,
never front-loaded. At t=0 only the first cue enters; each further line arrives on its own beat, with
the back 50% of most frames still developing. Eases are long-tail (`power3` default, `power4.out` for
slams); **no bounce, no `back.out`, no elastic** — this is a warning, not a product sting. During a
hold: stillness. No breathing, no drifting camera, no parallax. Only `svg-path-draw`,
`waterfall-entry`, `discrete-text-sequence`, `dynamic-content-sequencing`, `spring-pop-entrance`,
`split-tilt-cards`, `center-outward-expansion` and `anchored-layout-expand` appear here; each is
cited by name per Scene.

**Rhythm / held frames** — Frame 4 (the reroute) is the only frame with a travelling element and it
ends held for ~2s on the silent phone. Frame 6 holds on its last bullet. Frame 10 is a pure held
read: nothing moves after ~4s. Everything else reveals continuously.

**Negative list** — no horror imagery, no police/bank branding, no sirens, no red (the palette has no
red; ember does the alarm work), no skull/body-count visual, no generic bokeh, no gradient ground, no
drop shadows, no rounded surfaces (broadside is 0 radius), no real UI screenshots, no fake contact
photo of a real person. **Fabrication guard:** no statistics anywhere — the `stat-card` on Frame 7
carries the numeral ٢ because it is the *duration of the check*, not an invented figure. The dial
shapes on Frame 3 appear **only** as `*21*` / `**21*` with an on-screen label that they are a shape,
not instructions — never with a number attached, never a cancel code.

**Safety invariant:** every call to act routes to the phone's own setting or to the carrier **from a
different phone**, never to a dialled sequence.

---

## Frame 1 — Hook: the phone was silent

- scene: dark field, one line of display type slams in, then the consequence lands beneath it
- duration: 5s
- poster: 3s
- transition_in: cut
- status: animated
- src: compositions/frames/01-silent-phone.html
- blueprint: kinetic-type-beats (Adapt — silent beats, no logo payoff)
- focal: «كان ساكن»
- roles: foreground subject — the two-line display statement · supporting — Arabic kicker «تحذير» + stub rule · background — flat ink-black field with a 1px hairline grid at 30% dim
- voiceover: «التليفون كان ساكن. ومع كده، كل مكالماته كانت بتروح على رقم تاني.»

Scene 1 (0.0–1.2s): Kicker «تحذير» + the 36×2px ember rule stub enter off the right edge (`discrete-text-sequence`, one element at a time). Field is otherwise empty — the silence is the hook.
Scene 2 (1.2–2.6s): display line one `h1` lands low-left of the reading start: «التليفون **كان ساكن**» — «كان ساكن» in `fire-orange`, the rest cream. `spring-pop-entrance` with `power4.out`, no overshoot.
Scene 3 (2.6–4.0s): second line `lead` reveals under it in cream at 75%: «ومع كده، مكالماته كانت بتروح على رقم تاني.»
Scene 4 (4.0–5.0s): HELD READ. Nothing moves.

Layout: rule-of-thirds, text block on the reading-right, ~45% empty. Three depth layers (grid field, statement, kicker chrome).

## Frame 2 — The name of the thing

- scene: orange full-field cover; the setting's own name in massive ink type
- duration: 5s
- poster: 3s
- transition_in: cut
- status: animated
- src: compositions/frames/02-the-name.html
- blueprint: titlecard-reveal (Adapt — one restrained move, no brand lockup)
- focal: «تحويل المكالمات»
- roles: foreground subject — the two-word display name in ink · supporting — Arabic label «اسم الإعداد» above it, one-sentence gloss below · background — full-bleed `fire-orange` ground
- voiceover: «اسم الحاجة: تحويل المكالمات. إعداد في الخط، لو اتفعّل، أي مكالمة بتيجي لك بتروح على رقم تاني.»

Scene 1 (0.0–0.8s): orange ground already up from the cut; label «اسم الإعداد» fades in at 55% ink.
Scene 2 (0.8–2.4s): `display` «تحويل المكالمات» — ink on fire, fills the measure, enters with `anchored-layout-expand` (words expand out from the centre of the line, not a slide).
Scene 3 (2.4–4.0s): gloss line `lead` at 75% ink: «أي مكالمة بتيجي على رقمك بتتحوّل لرقم تاني. إنت مش بتسمعها.»
Scene 4 (4.0–5.0s): hold.

Layout: centered hero (portrait), name at y ≈ 0.42 × height. Density low — declarative frame, chrome bars suppressed.

## Frame 3 — The call, and the shape of the code

- scene: dark; the pretext lines stack, then the code shapes appear as artefacts with a refusal label
- duration: 8s
- poster: 6s
- transition_in: cut
- status: animated
- src: compositions/frames/03-the-call.html
- blueprint: dynamic-content-sequencing (Adapt — enumerated pretext chips, not a listicle)
- focal: the two shape tokens `*21*` / `**21*`
- roles: foreground subject — h2 «حد يكلمك ويقول: اكتب الكود ده» · supporting — three pretext chips (اتصالات / البنك / خدمة عملاء) + the two shape tokens in hairline boxes + the label «شكل. مش تعليمات.» · background — ink-black with hairline grid
- voiceover: «بيقولك أنا من شركة الاتصالات، أو من البنك، أو من خدمة العملاء. المضمون واحد: اكتب كود على الشاشة. الكود ده بيبدأ بعلامات نجوم وأرقام، من شكل كده. دي أمثلة على الشكل، مش تعليمات. متكتبوش.»

Scene 1 (0.0–1.4s): h2 `h2` (3–4 words → `h2` step) reveals on the reading-right, cream.
Scene 2 (1.4–3.4s): the three pretext chips assemble top-to-bottom (`waterfall-entry`, staggered, 1px hairline boxes, cream-muted text) — «شركة الاتصالات»، «البنك»، «خدمة عملاء أي حاجة». The point is that the caller's identity is variable.
Scene 3 (3.4–5.6s): the two shape tokens enter centre as **artefacts, not instructions**: `*21*` and `**21*` in hairline boxes, cream, with `svg-path-draw` drawing a thin ember underline beneath each.
Scene 4 (5.6–7.0s): the refusal label pops under them in `fire-orange`: «دي أمثلة على الشكل. مش تعليمات. متكتبوش.»
Scene 5 (7.0–8.0s): hold.

Layout: asymmetric 60/40 stacked for portrait — statement block right, chip rail beneath, artefact strip at the foot. Note: **no phone number is ever attached to a shape and no cancel code appears.**

## Frame 4 — The reroute (the mechanism as motion)

- scene: dark; two flat phone glyphs, a call pulse travels from her number and bends to the other number while her phone goes silent
- duration: 10s
- poster: 8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-the-reroute.html
- blueprint: compose (no registry block fits — see catalog note below)
- focal: the bent hairline path the call travels
- roles: foreground subject — the travelling call dot on the drawn path · supporting — two flat device glyphs (right = «رقم ماما», left = «رقم تاني»), an incoming-call ring, the dimming of the right glyph, one caption line · background — ink-black, single vertical hairline at centre
- voiceover: «من اللحظة دي، أي مكالمة بتيجي على رقمها مش بترن عندها. بتروح على رقم تاني. رقمه هو.»

Scene 1 (0.0–1.6s): both device glyphs enter, `waterfall-entry`, reading-right first (her phone) then left (his number). Each carries a Kufi 500 label. Flat 1px ink outlines, cream UI inside, no shadows, no photorealism.
Scene 2 (1.6–3.2s): an incoming-call ring pulses twice around the RIGHT glyph (`sine-wave-loop` limited to a finite 2 cycles inside the frame window) + caption «مكالمة داخلية على رقمها» at 75%.
Scene 3 (3.2–6.4s): `svg-path-draw` draws a hairline path out of her phone, bending left across the centre rule toward the other glyph; the call dot travels the drawn path (`coordinate-target-zoom`-free, plain path travel) and lands on the left glyph, which pops its ring.
Scene 4 (6.4–8.4s): the RIGHT glyph's ring collapses and the glyph drops to 30% opacity — silence rendered. Display line enters over it: «مفيش مكالمة بتترن عندها» with «عندها» in ember.
Scene 5 (8.4–10.0s): HELD. Path, dimmed phone, lit other phone, one line of type. Nothing else moves — this is the image the viewer should remember.

Layout: split vertically-banded for portrait (device pair in the upper 55%, statement in the lower third), stacked not side-by-wide per the portrait rule. Catalog search ran for this look (`phone call routing diagram with arrow`): `flowchart` / `flowchart-vertical` are sticky-note decision trees with cursor interaction and `hw-arrow` is a hand-drawn scribble — none of them survive the broadside flat-hairline register, so the diagram is composed from rules.

## Frame 5 — The second move: the code lands on the wrong phone

- scene: dark; the reset flow runs left of the pair, the verification code card resolves onto his number
- duration: 7s
- poster: 5s
- transition_in: cut
- status: animated
- src: compositions/frames/05-the-second-move.html
- blueprint: agent-progress-theater (Adapt — the state mutation is the demo; no agent, no UI chrome)
- focal: the code card arriving on the wrong device
- roles: foreground subject — a hairline card «كود التحقق» that arrives on the LEFT glyph · supporting — h2 ««نسيت كلمة السر»» + a three-step rail (واتساب / فيسبوك / تطبيق البنك) · background — ink-black
- voiceover: «وبيروح على واتساب أو تطبيق البنك ويدوس نسيت كلمة السر. والنظام بيبعت كود التحقق على الرقم المسجّل. والرقم المسجّل بقى بيوصل له هو.»

Scene 1 (0.0–1.6s): h2 ««نسيت كلمة السر»» slams in (`kinetic-beat-slam`), cream, on the reading-right.
Scene 2 (1.6–3.6s): the three target chips (واتساب، فيسبوك، تطبيق البنك) step in below it (`discrete-text-sequence`) — the accounts at risk, named without inventing any logo.
Scene 3 (3.6–5.6s): a code card draws itself on the LEFT glyph (her phone stays dark from Frame 4 — continuity of the dimmed state), `svg-path-draw` on its outline, then «كود التحقق» appears inside.
Scene 4 (5.6–7.0s): statement line in ember: «كود التحقق بيوصل له هو، وهي قاعدة وموبايلها ساكن.» Hold.

Layout: vertical stack — headline top, chip rail middle, device+card payoff bottom.

## Frame 6 — Why nobody notices

- scene: dark; three bullets step in, the third one (outgoing calls still work) is the trap and takes the accent
- duration: 7s
- poster: 6s
- transition_in: cut
- status: animated
- src: compositions/frames/06-why-invisible.html
- blueprint: grid-card-assemble (Adapt — three rows, not a grid)
- focal: bullet ٣
- roles: foreground subject — three-line bullet stack with the `/` ember marker · supporting — h2 «ليه محدش بيحس بيها» · background — ink-black + hairline
- voiceover: «مفيش مكالمة بتترن عندها. الموبايل ساكن والخط شكله سليم. والمكالمات الصادرة لسه شغالة عادي — التحويل على الواردة بس.»

Scene 1 (0.0–1.2s): h2 «ليه محدش بيحس بيها» reveals.
Scene 2 (1.2–2.8s): bullet ١ «مفيش مكالمة بتترن عندها» enters with the ember `/` marker.
Scene 3 (2.8–4.2s): bullet ٢ «الموبايل ساكن، والخط شكله سليم».
Scene 4 (4.2–5.8s): bullet ٣ enters **in ember**, heavier weight: «المكالمات الصادرة لسه شغالة عادي» + sub-line at 75% «تحويل المكالمات بيشتغل على الواردة بس. متتطمنش من الخط نفسه.»
Scene 5 (5.8–7.0s): HELD on bullet ٣.

Layout: full-width stacked list, left-aligned on the reading-right edge, ~50% empty below. Bullets capped at three (frame.md rule).

## Frame 7 — The two-minute check

- scene: dark documentation frame; a single big ٢ numeral card then three actions under hairline top-borders
- duration: 11s
- poster: 9s
- transition_in: cut
- status: animated
- src: compositions/frames/07-the-check.html
- blueprint: grid-card-assemble
- focal: the stat-card numeral «٢»
- roles: foreground subject — stat-card with orange «٢» + «دقيقتين» · supporting — three `stat-card` rows (top-border only), each an action · background — ink-black with the optional chrome hairline bars (this is the documentation register)
- voiceover: «تأكد في دقيقتين. تلات حاجات. خد الموبايل في إيدك إنت، وافتح إعدادات تحويل المكالمات. اسأله: في حد كلّمك وقالك اكتب كود؟ لو شكّيت، كلّم شركة الاتصالات من تليفون تاني.»

Scene 1 (0.0–1.4s): kicker «تأكد في» + the ember numeral «٢» pop (`spring-pop-entrance`) with «دقيقتين» beside it — top-border stat-card.
Scene 2 (1.4–4.4s): action row ١ under its own 1px top border: «خد الموبايل في إيدك إنت. مش بالكلام من على التليفون. دور في إعدادات التطبيق على «تحويل المكالمات»».
Scene 3 (4.4–7.2s): action row ٢: «اسأله سؤال واحد: في حد كلّمك وقالك اكتب كود على الشاشة؟ لو نعم، ده إنذار حتى لو كل حاجة تمام.»
Scene 4 (7.2–9.6s): action row ٣: «لو في رقم مش بتاعهم، أو حتى شكّيت: كلّم شركة الاتصالات من تليفون تاني، مش من تليفونه.»
Scene 5 (9.6–11.0s): a `cream-muted` (forest) footnote reveals at the foot — the only second tone in the film: «مفيش كود إلغاء ثابت. شركة الاتصالات هي اللي بتأكّده.» Hold.

Layout: stacked cards, three rows max (bullets capped at three), the numeral card is the one dense element. This is the one frame allowed to look busy.

## Frame 8 — If an account already fell

- scene: dark recovery ladder; three steps ascend, then a hotline strip lands under them
- duration: 8s
- poster: 7s
- transition_in: cut
- status: animated
- src: compositions/frames/08-recovery.html
- blueprint: waterfall-entry
- focal: step ٣ (re-secure from inside the app + evict unknown devices)
- roles: foreground subject — three-step recovery stack · supporting — h2 «لو شكّيت إن في حساب وقع خلاص» + a bottom strip with the bank-hotline line · background — ink-black
- voiceover: «ألغِ التحويل من شركة الاتصالات من تليفون تاني. بدّل كلمة سر الإيميل اللي الحسابات مربوطا بيه من تليفونك. وأعد تأمين واتساب وتطبيق البنك من جوه التطبيق نفسه، واقفل أي جهاز مش بتاعكم مسجّل هناك.»

Scene 1 (0.0–1.2s): h2 reveals, cream.
Scene 2 (1.2–3.2s): step ١ «كلّم شركة الاتصالات من تليفون تاني وإلغِ تحويل المكالمات».
Scene 3 (3.2–5.0s): step ٢ «بدّل كلمة سر الإيميل اللي الحسابات دي مربوطا بيه، من تليفونك إنت».
Scene 4 (5.0–7.0s): step ٣ **in ember** (the addition that changes behaviour): «أعد تأمين واتساب وتطبيق البنك من جوه التطبيق نفسه، واقفل أي جهاز مش بتاعكم مسجّل هناك».
Scene 5 (7.0–8.0s): bottom strip «ولو في تطبيق بنك: كلّم الرقم الساخن بتاع البنك قبل أي حاجة تانية». Hold.

Layout: vertical ladder, 3 steps, strip pinned to the foot.

## Frame 9 — Teach three sentences, not ten

- scene: dark; three quoted lines land one at a time, weight stepped down to show it is a short list on purpose
- duration: 8s
- poster: 7s
- transition_in: cut
- status: animated
- src: compositions/frames/09-three-sentences.html
- blueprint: fadelist → (no fadelist blueprint in the menu; use `grid-card-assemble` with the preset's opacity ladder)
- focal: the third sentence (disclose early)
- roles: foreground subject — three quoted spoken lines · supporting — h2 «علّم الكبير بتاعك تلات جمل» + sub-line «متحمّلهوش عشر جمل» · background — ink-black
- voiceover: «علّمه تلات جمل بس. أي مكالمة تطلب منك تكتب كود: متكتبش، اقفل، وقولي. أي حد يقول أنا من الاتصالات أو البنك: اقفل وكلّمهم إنت من الرقم الرسمي. وحسّيت بحاجة غريبة حتى لو صغيرة: قول لولادك على طول.»

Scene 1 (0.0–1.4s): h2 + sub-line «متحمّلهوش عشر جمل» at 75%.
Scene 2 (1.4–3.4s): sentence ١ at opacity 1.0: «أي مكالمة تطلب منك تكتب كود على الشاشة = متكتبش، اقفل، وقولي.»
Scene 3 (3.4–5.2s): sentence ٢ at 0.72: «أي حد يقول أنا من الاتصالات أو من البنك = اقفل وكلّمهم إنت من الرقم الرسمي.»
Scene 4 (5.2–7.0s): sentence ٣ at 1.0 and in ember: «لو حسّيت بحاجة غريبة حتى لو صغيرة = قول لولادك على طول. مفيش حاجة اسمها خجل.»
Scene 5 (7.0–8.0s): hold.

Layout: stacked quotes on the reading-right, ember rule stub above the block.

## Frame 10 — Close: it is not his fault

- scene: orange declaration; the absolving line in massive ink, then the single ask
- duration: 6s
- poster: 4s
- transition_in: cut
- status: animated
- src: compositions/frames/10-not-his-fault.html
- blueprint: kinetic-type-beats (Adapt — no payoff logo, the ask is the payoff)
- focal: «مش غلطتك»
- roles: foreground subject — display «ده مش غلطتك» · supporting — two lines: «الحيلة ذكية وبتعدي على أي حد.» and the ask «ادخل النهارده على موبايل ماما وبابا. اعمل الفحص بإيدك، مش ببعت بوست.» · background — full-bleed `fire-orange`
- voiceover: «ولو ده حصّل، أول جملة تقولها له: ده مش غلطتك. ادخل النهارده، اعمل الفحص بإيدك.»

Scene 1 (0.0–1.2s): orange ground up on the cut; ink `display` «ده **مش غلطتك**» enters (`center-outward-expansion`).
Scene 2 (1.2–3.0s): sub-line at 75% ink: «الحيلة ذكية، وبتعدي على ناس نبيهة أوي. ولو حسّ إنه غبي، المرة الجاية مبيقولكش.»
Scene 3 (3.0–4.6s): the ask lands in a hairline ink box: «ادخل النهارده على موبايل ماما وبابا. اعمل الفحص بإيدك، مش ببعت بوست.»
Scene 4 (4.6–6.0s): HELD, nothing moves. End.

Layout: centered, declarative, chrome suppressed, ~50% empty. Ink-on-fire is absolute.

---

## Fabrication & safety log (what this film refuses to say)

- No victim with a name, an age, or a story. Frame 1's «التليفون كان ساكن» is the mechanism described in habitual present, never «حصلت مرة».
- No statistic, no count, no date anywhere. The single numeral in the film (٢) is the length of the check.
- No invented carrier, bank, police, or authority voice; no advisory attributed to anyone. The narrator is an unsigned person speaking to other people (BRIEF.md default, overridable).
- `*21*` / `**21*` appear once, as labelled *shapes*, with the refusal line on the same frame. Never a number attached, never a cancel code — the film routes to the phone's own setting and to the carrier from a different phone.
- Anti-shame line is mandatory (Frame 10) — a forward that reads as an insult to parents does not get forwarded into a family group.
