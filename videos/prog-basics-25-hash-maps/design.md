---
# ============================================================
# UNIVERSAL DESIGN SPEC — applies to ALL media in this workspace
# (videos, blog, images, decks). Frontmatter is the normative
# layer (exact values — quote verbatim, never round); prose is
# context. Every new HyperFrames project gets a copy of this
# file as its project-level `design.md` (see
# .qoder/agents/content-creator.md).
#
# Style lineage: **Halima E-Commerce** — oceanic teal on ice
# white, Caveat script over Inter, dual-theme, motion-first.
# Mapped 1:1 from the storefront spec in `brand_source`.
# The storefront is upstream truth; video inherits its brand,
# never the reverse.
#
# TOOLING READ: studio's frontmatter parser (projection.mjs) is line-wise
# and sees `key:` at column 0 plus ONE indented level as `a.b`. Two known
# misses: `studio voice` looks up `voices.<lang>` and `doctor` reads a
# top-level `voice_id`, so neither resolves from the nested `voice:` block
# below — keep the shape stable and fix the lookup, not this file.
# ============================================================

brand_source:
  upstream: "J:\\Halima E-commerce\\Design.md"   # storefront UI & design-system spec — re-map whenever it changes
  product: "Halima — modern luxury womenswear & lifestyle storefront"
  mapped_on: "2026-10-27"
  doctrine: >
    Boutique-clean surface, high-energy motion, handwritten brand
    moments. Three non-negotiables carried from the storefront into
    every frame: (1) teal is the only action color, (2) every frame
    is alive — nothing sits frozen while a voiceover runs, (3) light
    and dark are first-class, never an afterthought.

colors:
  # Light theme = default frame canvas. Dark theme = the alternating
  # "chamber". Pick one per frame and stay inside it; never mix at 50%.
  background: "#F5FCFD"           # Ice White — hsl(187 100% 98%) — light canvas
  background_dark: "#0F1818"      # Deep Petrol — hsl(180 27% 8%) — dark canvas / night frames
  surface: "#FFFFFF"              # card / modal / popover fill — hsl(0 0% 100%)
  surface_dark: "#343434"         # elevated charcoal card on petrol — hsl(0 0% 20.5%)
  ink: "#1A1A1A"                  # foreground on light — hsl(187 0% 10%)
  ink_dark: "#E8F6F7"             # foreground on dark (soft cyan tint) — hsl(180 60% 94%)
  muted: "#8E8E8E"                # muted-foreground light — secondary copy, SKU, timestamps
  muted_dark: "#B5B5B5"           # muted-foreground dark
  secondary: "#F7F7F7"            # secondary / muted / accent fills on light — pill tags, ghost hover
  secondary_dark: "#454545"       # same roles on dark
  accent: "#47B5BE"               # PRIMARY — Oceanic Teal hsl(187 47% 52%), the only action color
  accent_soft: "#7BD3D8"          # the same primary on dark — Luminous Aqua hsl(184 46% 65%)
  on_accent: "#002528"            # text/fill on teal (light); on dark teal use #0F1818
  danger: "#E28684"               # Warm Coral — errors, out-of-stock, low-urgency alerts (light)
  danger_dark: "#CD3333"          # Crimson — same roles on dark
  border: "#EBEBEB"               # soft border, dividers (light)
  border_dark: "rgba(255,255,255,0.1)"   # translucent white — never a solid gray on petrol
  input_dark: "rgba(255,255,255,0.15)"   # input / field outlines on dark
  ring: "#B5B5B5"                 # focus-visible ring (light); dark ring #8E8E8E
  whatsapp: "#25D366"             # brand green — hover #128C7E, glyph pure #FFFFFF
  ambient_mesh: >
    indigo rgb(99 102 241) / rose rgb(244 63 94) / violet rgb(139 92 246) /
    amber rgb(245 158 11) / cyan rgb(6 182 212) — each at /0.15 opacity, blurred, behind content
  chart_1: "#BDAE8D"            # hsl(41.1 26.6% 64.6%) warm sand · dark #775E9B — revenue series
  chart_2: "#8BA5A7"            # hsl(184.7 14.2% 60%) sage cyan · dark #A4BFB7 — orders / sales volume
  chart_3: "#5D616E"            # hsl(227.4 8.4% 39.8%) muted navy · dark #CBCFB9 — customer acquisition
  chart_4: "#D5DDC9"            # hsl(84.4 22.7% 82.8%) pale olive · dark #B987B6 — category distribution
  chart_5: "#CDD1B7"            # hsl(70.1 22.6% 76.9%) soft amber · dark #BB9A8E — inventory levels

typography:
  body: "Inter, sans-serif"                  # 400 default; 500–700 labels, buttons, data cells, captions
  body_substitutes: "Plus Jakarta Sans, Manrope"
  display: "Caveat, cursive"                 # weight 700–800, brand moments + titles ONLY — never data, code or captions
  display_substitutes: "Dancing Script, Kalam"
  mono: "JetBrains Mono, monospace"          # utility chrome only (code, meta labels) — not a brand face
  heading_defaults: "font-script font-extrabold; letter-spacing 0.1rem; line-height 1.2"
  web_scale: "h1 48.85 / h2 39.07 / h3 31.26 / h4 25.01 / h5 20 / body 16 & 14 / small 12.8 / micro 12 & 10 px"
  frame_scale: "display 128 / title 80 / subtitle 56 / heading 40 / label 28 / caption 44 / micro 22 px"
  display_tracking: "+0.02em…+0.1em — Caveat needs POSITIVE tracking; negative tracking breaks the script"
  display_line_height: "1.2 (storefront rule); 0.95 only when a single Caveat word is the hero"
  caveats_font_note: >
    Caveat ships in no project yet — `assets/fonts/` currently holds
    Inter, EB Garamond, JetBrains Mono. Fetch Caveat 400/700 woff2 into
    `studio/assets/fonts/` and copy into every project, or `verify`
    flags the `@font-face` as unsourced and the frame renders in fallback cursive.

spacing:
  base_unit: "8px"
  density: "comfortable"
  page_max_width: "1200px"
  catalog_max_width: "max-w-screen-2xl, px-4 lg:px-8"
  content_max_width: "72ch"                  # prose measure for articles
  section_gap: "64–96px (py-8 … py-16 vertical rhythm)"
  card_padding: "32px"
  element_gap: "8–16px (grid gap-4 sm:gap-6)"
  extra_scale: "13=52px, 15=60px, 18=72px, 128=512px, 144=576px"
  fixed_header: "h-16 (64px); content offset mt-24 (96px = header + 32px breathing)"

rounded:
  sm: "6px"                                  # compact inputs, small badges
  md: "10px"                                 # --radius base; default buttons, dropdowns
  lg: "14px"                                 # product cards, dialogs, selects
  xl: "18px"                                 # large modals, hero containers
  2xl: "16px"                                # order-status cards, image thumbs — YES, smaller than xl; upstream lists it this way
  3xl: "24px"                                # product gallery hero viewport
  full: "9999px"                             # FABs, CTA pills, colour swatches, badge counters

surfaces:
  level_0: "#F5FCFD"   # Ice Canvas — default frame background
  level_1: "#FFFFFF"   # Card white — content panels, modals
  level_2: "#0F1818"   # Petrol Chamber — alternating dark sections
  level_3: "#47B5BE"   # Oceanic Teal — action surfaces, keyword emphasis
  level_4: "#F7F7F7"   # Quiet Gray — tags, ghost hover, image placeholders

elevation: >
  Soft, layered, teal-tinted. Shadows are ON by default here (this reverses the
  former shadowless rule). md = 0 2px 8px -2px hsl(primary/0.15), 1px 3px 0 rgba(0,0,0,.06);
  lg = 0 8px 24px -4px hsl(primary/0.2); premium adds a 1px border ring;
  soft-xl = 0 24px 38px -8px rgba(0,0,0,.06), 0 9px 46px -10px rgba(0,0,0,.1);
  glow = 0 0 8px 2px rgba(100,200,255,0.3). On dark, tint the glow, never the black.

motion:
  tempo: "energetic"          # was "calm" — motion is the message now
  default_easing: "ease-out"
  signature_easings: "[0.23, 0.86, 0.39, 0.96] for entrances; backInOut for reveals; cubic-bezier(0.36,0.07,0.19,0.97) for error-shake"
  scene_transition: "animated"   # was "cut" — every scene boundary gets a real transition
  transition_duration_s: "0.4–0.6, authored INSIDE the inter-cut silence pad (see cuts)"
  per_frame_budget: "every frame carries all four: an entrance, an ambient layer, an emphasis move on the spoken keyword, and an exit"
  stagger: "0.06–0.12s between sibling elements; never reveal a group as one block"
  ambient_required: "a living background at all times — floating pill shapes, mesh glow drift, shimmer, or subtle-pulse badge"
  micro_interactions_required: "any UI shown on screen animates its own real states (hover, press, select, focus, loading, error)"
  keyframes: "scale-in 0.2s / slide-in-from-bottom 0.3s / error-shake 0.4s / shimmer 2s infinite / wiggle 0.5s infinite / subtle-pulse 2s infinite"
  signature_moves:
    - "hero float: y [0, 15, 0], 12s, easeInOut, repeat Infinity (+ entrance y -150→0 with rotation over 2.4s)"
    - "intro mask: circle(150%→0% at 50% 50%) clip-path, overlay 0.9s easeInOut, background 1.0s backInOut"
    - "theme switch: clip-path circle 0.4s ease-out, or circle-blur 0.5s ease-out"
    - "dual-image reveal: primary opacity 1→0 and secondary 0→1 over 300ms on hover"
    - "card lift: shadow-none → shadow-md + translateY(-4px), transition-all 300ms"
    - "FAB / CTA press: scale 1 → 1.1 with shadow-lg → shadow-xl"
    - "active swatch: border-primary + ring-2 ring-primary/30"
    - "depleted state: 45° diagonal slash across the swatch, dashed border on the size pill"
  sfx_budget: "≤4 marks per film; motion first, sound second"

captions:
  # VERTICAL: the bottom 30% of the canvas belongs to the platform
  # (title, tags, sound chip, composer icons). Nothing readable goes there.
  vertical_bottom_safe_fraction: 0.30    # 1080×1920 → 576px clear to the last pixel
  vertical_band_height_fraction: 0.1667  # 320px at 1920
  vertical_band_top_fraction: 0.5333     # band-top = H × 0.5333 → 1024px at 1920
  vertical_values: "1080×1920 → --cap-band-top: 1024px, --cap-band-height: 320px, bottom 576px empty"
  vertical_4k: "1440×2560 → --cap-band-top: 1365px, height 427px, bottom 768px empty"
  vertical_keepout: "frame content ends at band_top − 20px (y ≤ 1004 at 1080×1920)"
  top_chrome_safe_fraction: 0.12         # progress bar / back button — no critical text above y=230
  landscape: "1920×1080 → band stays 180px at the bottom (top y=900); keep 60px clear below it"
  text_per_group: "1 hook line, ≤7 words (≤9 max); a second group, not a longer first one"
  style: "Inter 700, 44px at 1080-wide; lifted surface pill, teal keyword highlight, no full-sentence caps"
  fill: "#FFFFFF (light frames) / #0F1818 at 92% + 1px rgba(255,255,255,0.1) border (dark frames)"
  highlight: "one keyword per group in #47B5BE (dark frames #7BD3D8) — the word the voice stresses"
  sync: "word-level timings only — `studio cues` then `studio assemble --captions`; never estimated blocks"

cuts:
  speech_gap_s: 1.0          # silence between one shot's last word and the next shot's first
  min_gap_s: 0.8
  rule: >
    A scene change never happens mid-sentence and never happens back-to-back with
    speech. Hold ~1s of air at every cut: the outgoing line finishes, the frame
    transitions inside that silence, the next line starts on the new frame already
    settled. Sentences do not span cuts — if a sentence would, move the cut.
  worked_example: "shot 1 VO ends 08.4s → transition 08.4–09.0s → shot 2 VO starts 09.4s"
  also_pad: "before a stat reveal, before a brand/title moment, and after a punchline"

voice:
  # Text-to-speech defaults. Read by `studio voice`, which pins the provider per
  # project from BRIEF.md frontmatter (`voice:` / `language:`) — the engine's own
  # "auto" cascade cannot reach Gemini and will pick ElevenLabs for a Kokoro voice id.
  #
  # Reality on this machine (studio doctor re-reports it; do not assume otherwise):
  #   kokoro   — local, English only, free, always works offline
  #   gemini   — the only proven Arabic (voice `Kore`); NOT in the auto cascade;
  #              free tier ≈3 requests/minute, so a 10-line narration needs pacing
  #   elevenlabs — needs a PAID key AND a non-empty voice_id below; free-tier keys
  #              reject library voices with HTTP 402 paid_plan_required
  #   heygen   — only when the host provides HEYGEN_API_BASE, or on explicit request
  provider: "elevenlabs"     # house intent; falls to the matrix above when unavailable
  model: "eleven_multilingual_v2"
  voice_id: ""               # TODO: paste your ElevenLabs voice_id (elevenlabs.io → VoiceLab)
  fallback_voice: "af_heart"  # Kokoro voice used only if ElevenLabs is unavailable
  voices:
    en: { provider: "kokoro", voice: "af_heart", speed: 0.93 }
    ar: { provider: "gemini", voice: "Kore", speed: 1.0 }
  pace_wpm: 150
  intelligibility: >
    Easy to hear is a mix spec, not a personality trait. Voice leads the mix:
    target ≈-16 LUFS integrated, true peak ≤-1 dBTP, no BGM under narration above
    -22 dB, and any music ducked -8 to -10 dB while the voice talks. If a line is
    unclear at phone volume on one listen, rewrite the line — do not raise the gain.
  diction: "spell out numbers and acronyms the way they should be said (see narration.md pronunciation table)"

tone:
  register: >
    Warm, quick, genuinely interested — the friend who already loves this thing and
    can't wait to show you why it works. Energy over authority. Concrete over clever.
  voice_of_script: "second person, active verbs, contractions always, short sentences"
  required_per_beat: "one example, analogy, or real number — an abstraction never gets a beat to itself"
  hooks: "open on a question, a stake, or a 'picture this' — never on a definition or the brand name"
  avoid: >
    dry/flat corporate phrasing ("leverages", "seamlessly", "in today's fast-paced
    world", "let's dive in"), definition-first openings, monotone equal-length
    sentences, hype without evidence, exclamation marks, and every AI tell on the
    copywriting skill blacklist
  arc: "hook → why it matters → example → payoff → one-line close; vary sentence length so it never drones"
---

# Universal Design Spec

## Overview

Halima is a modern-luxury womenswear storefront, and this workspace's media wears
its brand. Frames open on **Ice White #F5FCFD** and alternate into **Deep Petrol
#0F1818** chambers. **Inter** carries every word a viewer has to read — captions,
labels, data, code. **Caveat** carries the brand voice: extrabold, positively
tracked, line-height 1.2, used for titles and moments, never for information.
**Oceanic Teal #47B5BE** (**#7BD3D8** on petrol) is the only action colour in the
system, and it is the only colour allowed to mean "this matters."

The storefront's real signature is movement, so the videos inherit it: dual-image
hover reveals, ambient pills floating on a 12s loop, pill selectors that pop,
badges that pulse, cards that lift on a teal-tinted shadow, circular clip-path
theme transitions. A frame with nothing moving in it is off-brand here, no matter
how correct its hex values are.

## Brand mapping — storefront token → frame use

| Halima token | Value (light / dark) | In a frame |
| :--- | :--- | :--- |
| `--primary` | `#47B5BE` / `#7BD3D8` | CTA fills, keyword highlight, active chip, progress, the one accent |
| `--primary-foreground` | `#002528` / `#0F1818` | Text and icons sitting on teal |
| `--background` | `#F5FCFD` / `#0F1818` | Frame canvas — one theme per scene |
| `--card` | `#FFFFFF` / `#343434` | Content panels, quote cards, stat tiles |
| `--foreground` | `#1A1A1A` / `#E8F6F7` | Body and caption text |
| `--muted-foreground` | `#8E8E8E` / `#B5B5B5` | Timestamps, SKU/meta labels, secondary lines |
| `--border` | `#EBEBEB` / `rgba(255,255,255,.1)` | Hairlines, dividers, pill outlines |
| `--destructive` | `#E28684` / `#CD3333` | Warnings, out-of-stock, "don't do this" beats |
| `--accent` mesh | indigo/rose/violet/amber/cyan @ `/0.15` | Ambient glow layer behind the hero |
| Shadow set | teal-tinted `0 8px 24px -4px hsl(primary/.2)` | Depth on cards, modals, lifted captions |
| Radius scale | `6/10/14/18/24px`, `9999px` | Cards `14–18px`, gallery `24px`, every CTA and swatch a full pill |

## Composition rules

### Do
- Quote frontmatter hex verbatim; pick light **or** dark per scene and hold it.
- Reserve teal for action and emphasis — one accent per frame, used with intent.
- Use Caveat for a title or a brand moment, Inter for everything informational.
- Give every timed element an entrance (`scale-in` 0.2s, `slide-in-from-bottom` 0.3s) and an exit.
- Keep an ambient layer alive: floating pills (y `0→15→0`, 12s, infinite), mesh-glow drift, `shimmer`, or `subtle-pulse`.
- Stagger sibling reveals 0.06–0.12s apart so a list assembles rather than appears.
- Animate the real UI state you are showing — hover cross-fade, selected ring, pressed scale, loading spinner, error shake.
- Put ~1s of silence at every cut and transition inside it (see `cuts`).
- Lift captions into the middle band on vertical and leave the bottom 30% empty.

### Don't
- No dead frames: nothing sits static under a running voiceover.
- No second accent colour for actions; no gradients filling primary UI (mesh glows are the only gradient).
- No negative tracking or bold-weight faking on Caveat; no Caveat in captions, code, or data.
- No heavy gray drop shadows — depth is teal-tinted or none.
- No captions, numbers, or key text in the bottom 30% of a vertical canvas, or the top 12%.
- No sentence spanning a cut, and no two shots speaking back-to-back.
- No hard-petrol-on-white borders (`rgba(255,255,255,.1)` is the dark-theme border, always).
- No flat, encyclopedic narration — no beat may open on a definition.

## Motion doctrine

Motion here is a spec, not a taste. Each frame carries four layers, all seek-safe
(no `Math.random()`, no `Date.now()` — deterministic values, authored offsets):

1. **Entrance** — the frame's hero element arrives (`y:-150→0` + rotation over 2.4s,
   or `scale 0.95→1` at 0.2s). Staggered supports follow.
2. **Ambient** — a perpetual background motion (12s float, glow drift, shimmer) so the
   frame is alive while the voice explains.
3. **Emphasis** — the spoken keyword moves at the moment it is said: count-up on a
   number, ring-pop on a selection, underline draw, badge wiggle.
4. **Exit** — a masked or scaled departure into the next scene, timed inside the pad.

Micro-interactions: when the storefront itself is on screen, it must behave. Product
cards cross-fade to their second image on hover and lift on `shadow-md`; size pills
swap `outline → default`; colour swatches take `border-primary + ring-2 ring-primary/30`,
depleted ones get the 45° slash; the cart CTA shows `Loader2` spinning during an add;
the WhatsApp FAB scales `1 → 1.1` with a shadow step-up; badge counters pop when a
number changes. A static mock of a live UI reads as a broken product.

Scene transitions: circle clip-path expansion (`0.4s ease-out`, or `circle-blur` at
0.5s) is the signature; directional slides suit comparisons; a cut is only correct for
a deliberate comedic or before/after beat.

## Narration doctrine

The bar is: **informative, easy to understand, easy to hear, and never dull.**

- **Hook the listener in the first 3 seconds** — a question, a stake, or "picture
  this." Never the brand name, never a dictionary definition.
- **One idea per sentence.** If a sentence needs a comma and a semicolon, it is two
  beats.
- **Every abstraction earns an example.** "Adapters translate between interfaces" is
  dry; "it's the plug converter you carry to the airport — same socket, different
  pins" is understood. Real numbers, named objects, physical analogies.
- **Talk to one person.** "You'll notice…", "here's the part that surprises people…".
- **Vary rhythm** so it never drones: short punch, longer explanation, short payoff.
- **Say the interesting thing early** — context goes after the value, not before it.
- **Write for the ear**: read it aloud; anywhere you flatten, rewrite. Spell numbers
  and acronyms the way they should be spoken.
- **Easy to hear**: pace 150 wpm, voice-led mix (≈-16 LUFS, ≤-1 dBTP, music ducked
  -8–10 dB under narration), no SFX stacked on a keyword.
- **Air at the cuts**: leave the ~1s pad so the previous line finishes in the listener's
  head before the next one starts.

## Captions

Captions are a second, tighter script — not a transcript.

- **Hook language**: each group carries the punch of the line, ≤7 words. Split into a
  second group instead of lengthening the first.
- **Examples visible**: when the voice gives an analogy or a number, the caption shows
  it (`"same socket, different pins"`, `10× faster`), so the example lands twice.
- **Keyword emphasis**: one highlighted word per group in teal, matching the stressed
  word; count-ups and stats are captioned as the number itself.
- **Placement (vertical)**: bottom 30% of the canvas is platform territory — title,
  tags, sound chip, composer icons — and overlaps captions. Anchor the band so it
  clears it: `--cap-band-top: 1024px` on 1080×1920 (band 320px, 576px of canvas left
  empty below), frame content ends at y ≤ 1004, keep critical text out of the top 12%.
  Mid-frame captions also read better on a phone than a floor-scraping band.
- **Placement (landscape)**: bottom band as before, 60px clear below it.
- **Type & surface**: Inter 700 44px (1080-wide), white lifted pill on light frames,
  `#0F1818`/92% with a translucent white hairline on petrol, word-level timing from
  `studio cues`. Never a solid block of three lines.

## Cut pacing

Speech from one shot must not collide with the next. Author the gap, don't discover it:

| Moment | Timing |
| :--- | :--- |
| Outgoing line ends | `t` |
| Transition runs | `t` → `t + 0.6s` |
| Incoming line starts | `t + 1.0s` (min `t + 0.8s`) |

Also pad before a stat reveal, a brand lockup, and any punchline. In
`STORYBOARD.md`, state the pad per shot; in the composition it is the delta between
the last VO cue's end and the next shot's first.

## Component quick reference

- **Primary CTA:** full pill, `#47B5BE` fill, `#002528` text, h-12, Inter 600 14px, `tracking-wide`; press state scales 1→1.1; busy state spins `Loader2`.
- **Card (light):** `#FFFFFF`, radius 14–18px, 1px `#EBEBEB` border, `shadow-md` on hover, 300ms `transition-all`.
- **Card (dark):** `#343434`, radius 14–18px, `rgba(255,255,255,0.1)` border, teal-tinted glow.
- **Status badge:** `destructive` coral for out-of-stock, `secondary` gray for inactive, `outline bg-background/90` for "Only N left"; counter pills 10px on full-circle teal.
- **Size pill / swatch:** outline → filled when selected; swatches `h-10 w-10 rounded-full border-2`, active ring `ring-2 ring-primary/30`; depleted gets the diagonal slash.
- **Caption pill:** see Captions above.
- **WhatsApp FAB:** `#25D366`, hover `#128C7E`, white glyph, `h-14 w-14 rounded-full`, bottom-right z-40.
- **Nav chrome (if shown):** h-16, `bg-background/95` + `backdrop-blur`, bottom hairline; content offset 96px.

## Imagery

Storefront product photography at gallery scale (`rounded-3xl`, `aspect-[4/3]`
viewport, vertical thumbnails on the left), dual-image pairs used for hover reveals,
and flat UI captures of the real app. No stock lifestyle filler, no 3D renders, no
abstract gradient shapes standing in for product — the ambient mesh glows are the
only permitted non-photographic decoration. Logos and the DotLottie brand marks are
never redrawn: resolve them through `media-use`, and use `logo.lottie` on light,
`logoDark.lottie` on dark.

## Dual-theme usage in video

Light is the default canvas; petrol `#0F1818` is for the dramatic beat — a stat
payoff, a night-mode demo, a before/after, or the closing brand lockup. Switch
between them with the circle clip-path transition rather than a hard cut, and swap
the whole token set at once (background, card, border, foreground, primary) so a
dark frame never carries a light-theme border or a muted gray that only exists in
the other palette.

## Blog application

The blog (`blog/`) reads the same tokens: palette and typography map to CSS
variables in `blog/src/styles/global.css`, and that file is re-mirrored to the
Halima tokens above (Caveat/Inter load from the Google Fonts link in
`blog/src/layouts/Base.astro`). Never hand-pick a colour or weight there —
change the frontmatter, then re-mirror. Two known stragglers still wearing the
old lineage: `blog/public/images/handoff-diagram.svg` has EB Garamond baked into
its `<text>` nodes, and `blog/` ships light-only (the petrol `--petrol`/`--ice`
pair is used just for the footer chamber, not a real dark theme).

## Arabic

RTL layouts mirror the same tokens — no separate palette. Arabic display type
should support Arabic script (e.g., Noto Naskh Arabic for reading, or a
calligraphic face for brand moments) while keeping the same relationship: the
script face is for moments, Inter/Noto Sans Arabic carries captions, data, and UI.
Captions stay in the same lifted band; Arabic word-timing comes from `studio cues`
with the approved copy — never a transliteration.

## Tooling note — the caption band is not yet spec-driven

The caption geometry is hardcoded elsewhere and disagrees with this file until
updated: `CAPTION_BAND_FRACTION = 0.1667` in
`.agents/skills/*/scripts/lib/dimensions.mjs` (three vendored copies, and it
band-measures from the bottom edge — it sets how tall the band is, not how far it
sits off the floor), and the portrait keep-out is `H × 0.83` in
`studio/tools/verify.mjs`. This spec's geometry in those terms:
`bottom_safe = 0.30 × H`, `band_height = 0.1667 × H`, `band_top = 0.5333 × H`,
`keep-out = band_top − 20px`. So the generator needs a bottom inset it does not
currently have. Until that lands, override `--cap-band-top` / `--cap-band-height`
in `compositions/captions.html` per project — and expect `verify` to flag the
lifted band as a keep-out overflow, because its cap still sits at 83%.
