---
# ============================================================
# UNIVERSAL DESIGN SPEC — applies to ALL media in this workspace
# (videos, blog, images, decks). Frontmatter is the normative
# layer (exact values — quote verbatim, never round); prose is
# context. Every new HyperFrames project gets a copy of this
# file as its project-level `design.md` (see
# .qoder/agents/content-creator.md).
# Style lineage: Wispr Flow — "cream broadsheet, dark velvet chambers".
# ============================================================

colors:
  background: "#FFFFEB"        # Lumen Cream — dominant page canvas; paper, not screen
  ink: "#1A1A1A"               # Vast Ink — primary text, borders, dark-chamber fills
  charcoal: "#222222"          # secondary button/nav text
  muted: "#8A8A80"             # Fog — captions, helper text, de-emphasized labels
  stone: "#E4E4D0"             # Lumen Stone — subtle borders, nav pill bg, muted dividers
  accent: "#F0D7FF"            # Lavender Whisper — the ONLY primary-action color
  secondary: "#034F46"         # Forest Ink — badges, inner panels on dark, secondary brand
  active: "#FFA946"            # Ember Glow — live/active states only (dots, mic indicators)
  white: "#FFFFFF"             # badge borders on dark, light text on color, icon strokes
  border: "2px solid #1A1A1A"  # signature border on cream; use 2px solid #FFFFEB on dark

typography:
  display: "EB Garamond, serif"       # weight 400 ONLY; commands through scale (32–120px), never bold
  display_alternative: "Cormorant Garamond, Playfair Display"
  body: "Figtree, sans-serif"         # 400 default body; 500–700 for nav, badges, button labels
  body_substitutes: "Inter, Plus Jakarta Sans, Manrope"
  mono: "JetBrains Mono, monospace"   # utility chrome only (meta labels, code) — not a brand face
  display_line_height: "0.85–0.95 at display sizes, 1.3 below"
  display_tracking: "-3.6px @120px, -1.92px @64px, -0.96px @32px"
  type_scale: "caption 14 / body-sm 16 / body 20 / subheading 24 / heading-sm 32 / heading 48 / heading-lg 64 / display 120"

spacing:
  base_unit: "8px"
  density: "comfortable"
  page_max_width: "1200px"
  content_max_width: "72ch"      # prose measure for articles
  section_gap: "64–96px"
  card_padding: "32px"
  element_gap: "8–16px"
  radius_cards: "32px"
  radius_buttons_inputs: "12px"
  radius_badges: "9999px"
  radius_sections: "40–80px"

surfaces:
  level_0: "#FFFFEB"   # Cream Canvas — default page background
  level_1: "#1A1A1A"   # Dark Chamber — alternating sections/cards ("velvet rooms")
  level_2: "#F0D7FF"   # Lavender Accent — highlighted panels, accent cards
  level_3: "#034F46"   # Forest Panel — badge fills, inner cards on dark

elevation: "none — deliberately shadowless; separation = flat fill + 2px ink borders + fill alternation"

motion:
  tempo: "calm"            # calm | neutral | punchy
  default_easing: "ease-out"
  scene_transition: "cut"  # cut | fade | slide | match

voice:
  # Text-to-speech defaults (ElevenLabs primary, local Kokoro fallback).
  provider: "elevenlabs"
  model: "eleven_multilingual_v2"
  voice_id: ""             # TODO: paste your ElevenLabs voice_id (elevenlabs.io → VoiceLab)
  fallback_voice: "af_heart"  # Kokoro voice used only if ElevenLabs is unavailable
  pace_wpm: 150

tone:
  register: "peer-to-peer, dry, zero hand-holding"
  avoid: "hype, exclamation marks, AI tells (see copywriting skill blacklist)"
---

# Universal Design Spec

## Overview

An editorial broadsheet rebuilt for software: a warm cream canvas (#FFFFEB) hosts
weight-400 EB Garamond at display sizes that command through sheer scale rather
than weight, while Figtree handles every interactive surface. Pages alternate
between bright cream chambers and deep near-black rooms, separated by 2px ink
borders and oversized corner radii (40–80px) that make each section feel rounded
like a polished pebble. The palette stays disciplined: cream, ink, lavender for
the one clickable thing, forest teal for inner accents, ember orange punctuating
active states.

## Composition rules

### Do
- Use Lavender Whisper #F0D7FF as the sole primary action color — never substitute another hue for CTAs.
- Set display headlines in EB Garamond weight 400 — authority comes from 64–120px scale, not font weight.
- Apply 2px solid #1A1A1A borders to all interactive elements — the thick border is a signature, not optional.
- Alternate cream #FFFFEB and dark #1A1A1A sections page-wide — every dark chamber is bookended by cream.
- Use 32px radius on standard cards, 40–80px on dark section cards; 12px on buttons/inputs; 9999px on badges.
- Use Figtree 400 as default body weight; reserve 600–700 for nav items, badges, button labels.
- Pair #F0D7FF (active/accent) with #034F46 (secondary) — complementary, not alternatives.

### Don't
- No bold/700 display headlines — the serif whispers at 400 and commands through size alone.
- No box-shadow elevation — the design is border-driven; shadows break the editorial flatness.
- No blue, green, or non-palette accent colors for actions, links, or highlights.
- No radius below 12px on buttons or below 32px on cards.
- No gradient fills — the palette is flat.
- No centered body text — left-aligned or strict measure.
- No cream-on-cream without a border or background change — contrast separation is required.

## Component quick reference

- **Primary CTA:** #F0D7FF fill, #1A1A1A text, 2px solid #1A1A1A border, 12px radius, Figtree 500 16px, padding 16px 24px.
- **Secondary button:** #FFFFEB fill, #1A1A1A text, 2px ink border, 12px radius (on dark: cream fill, 2px cream border).
- **Cream card:** #FFFFEB fill, 32px radius, 32px padding, no shadow, optional 2px ink border.
- **Dark chamber card:** #1A1A1A fill, 40–80px radius, 55–70px padding, #FFFFEB text.
- **Status badge:** #034F46 fill, #FFFFEB text, full pill, 8px 16px padding, Figtree 500 14px.
- **Platform/outline pill (on dark):** transparent fill, 1–2px #FFFFFF border, full pill, cream text.
- **Dark square tag:** #1A1A1A fill, #FFFFEB text, 8px radius (deliberate counterpoint to pills).
- **Nav:** floating cream pill, 9999px radius, 2px ink border, lavender CTA pinned right.
- **Editorial emphasis:** hand-drawn lavender SVG squiggle underline (3–4px stroke) beneath 1–2 words of a display headline.

## Imagery

Sparse and editorial: flat dark phone/device mockups with cream UI inside (never
photorealistic renders), real product icons in horizontal parades on dark
sections, blurred desaturated photo layers only inside dark feature cards behind
text. Signature graphics: curved text arcs on circular paths, lavender
hand-drawn underlines, waveform-visualizer pills. No stock photography, no
abstract gradients, no 3D renders. Logos are never redrawn — resolve them
through `media-use`.

## Blog application

The blog (`blog/`) reads the same tokens: palette and typography map to CSS
variables in `blog/src/styles/global.css`. Update that file when the tokens
above change.

## Arabic

RTL layouts mirror the same tokens — no separate palette. Arabic display font
should support Arabic script (e.g., Noto Naskh Arabic) while keeping the same
weight relationships (display stays regular weight; scale, not bold).
