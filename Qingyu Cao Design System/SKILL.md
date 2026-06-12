# SKILL — Qingyu Cao Portfolio Design System

Use this design system whenever the work is for, about, or in the visual language of **Qingyu Cao's** portfolio brand — a single-creator personal brand for a creative developer / product designer.

## What this system is for

Mockups, decks, landing pages, case studies, and prototypes that should feel like a natural extension of `qingyuportfolio.vercel.app`. Cinematic deep-purple aurora hero, airy Poppins display type at `font-normal`, glow-on-dark project cards, pill-shaped CTAs, gradient text on h2's and stats.

## Read first

1. `README.md` — voice, tone, casing, sample copy, surface rhythm, every visual rule.
2. `colors_and_type.css` — every token. Always link this file rather than hardcoding hex.
3. `ui_kits/portfolio/` — React reference recreation of all the major surfaces. Open `index.html` to see them composed.
4. `preview/` — single-purpose review cards (colors, type, spacing, components, brand, icons).

## Hard rules — never break

1. **CTAs are pills.** `border-radius: 9999px`. Never rectangular.
2. **Display headlines are `font-weight: 400`.** Never bold a hero or section h2. Card titles step up to 600.
3. **Gradients are 135°.** Always. `--gradient-secondary` for text, `--gradient-hero` for the dark band.
4. **Two card treatments only.** Light card (white + lavender border) or dark card (3-layer purple glow on `#1a1530` slab). Never mix.
5. **Icons: lucide-react, stroke 2, never filled.** No custom illustration. Real product screenshots over invented imagery.
6. **Filter chips are ALL CAPS.**
7. **No emoji in product UI.** The footer `<Heart />` is the one exception.

## Surface rhythm

A page should band: **hero (gradient + aurora) → light section → dark slab (glow cards) → soft pastel rest → charcoal footer**. Don't put two dark slabs back to back.

## Voice cheat-sheet

- First-person, builder-first. "I build, test, and ship."
- Verbs over adjectives. Specifics over abstractions (name the tools: React, Unity, Figma).
- Title Case for nav and CTAs. Sentence case for body and form placeholders.
- Ampersand `&` in titles is on-brand.
- Bilingual copy (EN/中文) flows through `useLanguage`; English-default in this system.

## Token quick reference

```css
/* Color */
--custom-purple: #8981d7;       /* primary CTA + cursor trail */
--primary-purple: #8B5CF6;      /* primary accent */
--main-blue: #4d64e6;           /* skill tile bg */
--fg: #1a1530;                  /* near-black with purple cast */

/* Gradient */
--gradient-hero;                /* 135° #271e3d → #9798ee → #233c63 */
--gradient-secondary;           /* 135° #9288e3 → #594f93 — text */

/* Glow */
--glow-rest;                    /* dark card at rest */
--glow-hover;                   /* dark card on hover, 3-layer 20→80→120px */
--glow-cta;                     /* primary CTA on dark */

/* Type */
--font-display: 'Poppins';
--font-serif: 'Tenor Sans';     /* hero spotlight only */
```

## When you build

Drop in `colors_and_type.css`, load Poppins + Tenor Sans, follow the surface rhythm, reach for `qy-grad-text` on h2's and stats, reach for the dark-card glow when something needs to feel premium. The rest follows.
