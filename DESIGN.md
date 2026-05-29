---
name: Doodle Portfolio
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424753'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#727785'
  outline-variant: '#c2c6d5'
  surface-tint: '#005ac1'
  primary: '#0058bd'
  on-primary: '#ffffff'
  primary-container: '#2771df'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#b51b15'
  on-secondary: '#ffffff'
  secondary-container: '#d9372b'
  on-secondary-container: '#fffbff'
  tertiary: '#765700'
  on-tertiary: '#ffffff'
  tertiary-container: '#956e00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930004'
  tertiary-fixed: '#ffdea0'
  tertiary-fixed-dim: '#fbbc06'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is built on the concept of "cozy analog digitalism." It aims to transform a standard portfolio into a tactile, hand-drawn notebook. The personality is warm, approachable, and intentionally imperfect, evoking the feeling of a collaborative team brainstorming session on physical paper.

The aesthetic blends **Brutalism** (bold strokes, high contrast, offset shadows) with **Hand-drawn Whimsy**. Every UI element should feel like it was sketched with a felt-tip marker. The goal is to lower the barrier between the creator and the viewer, fostering an emotional response of friendliness and authenticity.

## Colors

The color palette centers on a soft, off-white "Paper" background to reduce digital eye strain and enhance the notebook feel. Primary text and borders use "Charcoal" instead of pure black to maintain a softer, graphite or ink-like appearance.

The accent colors—Blue, Red, Yellow, and Green—are used sparingly as "highlighter" or "marker" accents. These should be applied to call-to-actions, category tags, and decorative squiggles to guide the user's eye through the portfolio content.

## Typography

This design system utilizes **Bricolage Grotesque** for headlines to mimic the expressive, slightly irregular nature of high-quality handwriting. It feels idiosyncratic and human. 

For body text, **Quicksand** provides a highly readable, rounded companion that maintains the "friendly" DNA without sacrificing legibility for longer project descriptions. 

- Use **display-lg** for hero sections and main titles.
- Use **headline-md** for project titles on cards.
- All caps should be reserved for **label-md** to represent "sticky note" annotations.

## Layout & Spacing

The layout follows a **Fluid Grid** but introduces "Visual Noise" to break the rigid digital box. While columns guide the placement, individual elements (cards, images, buttons) should have slight CSS transforms (rotation between -1deg and 1deg) to simulate papers scattered on a desk.

- **Grid:** 12-column layout for desktop, 4-column for mobile.
- **Rhythm:** Use an 8px base unit, but avoid perfect symmetry. If a card has 24px padding on the left, use 20px on the right to enhance the "hand-drawn" feel.
- **Margins:** Generous outer margins to allow "doodle" decorations to bleed into the whitespace.

## Elevation & Depth

Depth is achieved through **Hard Shadows** rather than blurs. This "Stamp Style" elevation uses solid color offsets to create a 3D effect that feels physical and punchy.

- **Level 1 (Cards):** 4px horizontal, 4px vertical offset shadow in Charcoal (#333333).
- **Level 2 (Buttons/Active):** 8px horizontal, 8px vertical offset shadow.
- **Interactive:** On hover, the shadow should shrink (e.g., to 2px) while the element moves down and right, simulating a button being physically pressed into the paper.
- **Glassmorphism:** Do not use. Use solid fills or very subtle 5% opacity "marker bleeds" for overlays.

## Shapes

The shape language is **Organic and Imperfect**. While the base roundedness is set to `2` (0.5rem), the implementation should use `border-radius` values that vary slightly on each corner (e.g., `20px 15px 22px 18px`) to create a "wobbly" rectangle effect.

- **Borders:** Every container must have a 2px or 3px solid Charcoal border with a "Variable Stroke" appearance if possible (using SVGs or `mask-image`).
- **Icons:** Use hand-drawn icon sets or "scribble" style glyphs.
- **Dividers:** Replace straight lines with "Squiggle" SVG paths or dashed "tear-off" lines.

## Components

### Buttons
Buttons are chunky, rectangular with rounded corners, and feature a 3px Charcoal border. They use a bold accent color background. The most distinctive feature is the "Stamp Shadow"—a solid Charcoal offset that makes the button pop. On hover, the button "wiggles" (a 2-degree rapid rotation).

### Sticky Note Cards
Used for team member profiles or project snippets. These are square-ish containers with a light Yellow (#FBBC05) or Blue (#4285F4) tint. They are slightly rotated (randomly between -2 and 2 degrees) and feature a "tape" graphic at the top or a "paperclip" icon.

### Input Fields
Inputs should look like underlined marker strokes or boxes with "sketched" borders. The focus state shouldn't be a glow, but rather the border-weight increasing or changing to a bright Blue accent.

### Chips & Tags
Small "bubble" shapes with hand-drawn borders. Used for skills (e.g., "Figma", "React"). Each chip should have a slightly different irregular radius.

### Animations
- **Drawn-in:** Lines and borders should use `stroke-dashoffset` animations to appear as if they are being drawn in real-time.
- **Wobble:** Hovering over an interactive element triggers a gentle "liquify" or "wiggle" effect.
- **Floating:** Decorative doodles (stars, arrows, clouds) in the background should have a slow, infinite floating animation.