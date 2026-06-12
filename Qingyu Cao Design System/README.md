# Qingyu Cao — Portfolio Design System

A design system distilled from **Qingyu Cao's** UI/UX portfolio site — a single-creator personal brand for a creative developer / product designer working across UI/UX, game design, AI tooling and creative coding.

> **One-line aesthetic.** Cinematic deep-purple aurora gradients + airy Poppins display type + glow-on-dark cards + tactile micro-interactions. Confident, builder-first, never decorative.

---

## Sources

- **Codebase:** [github.com/cqyestateyuki-prog/Qingyuportfoliosite](https://github.com/cqyestateyuki-prog/Qingyuportfoliosite) — React 19 · Vite · Tailwind v4 · Radix UI · lucide-react · framer-motion.
- **Live site:** [qingyuportfolio.vercel.app](https://qingyuportfolio.vercel.app/)
- **Token source:** `src/App.css`, mirrored verbatim into `colors_and_type.css`.
- **Owner:** Qingyu Cao · cqyestateyuki@gmail.com · [LinkedIn](https://www.linkedin.com/in/qingyu-cao-b1421b175/) · NYC.

## Brand at a Glance

- **Title:** Creative Developer & Designer.
- **Tagline:** *"A Product Designer who builds, tests, and ships."*
- **Project categories:** AI · UIUX · Product Design · Programming · Game · Research.
- **Featured work:** AI Community Platform · Music Encounter (game) · Stumbldoor · Petiboxy · Excel AI Agent · Eternal Dreams · Prime Directive · Ziplink · Fishtank.
- **Languages:** EN / 中文 (built-in i18n toggle).

---

## Index

```
README.md                ← you are here
SKILL.md                 ← Claude/Agent skill manifest
colors_and_type.css      ← all color, gradient, type, spacing, radii, shadow, motion tokens
assets/images/           ← real product imagery (drop-in for cards/decks)
preview/                 ← cards rendered in the Design System review tab
ui_kits/portfolio/       ← React (JSX) recreation of portfolio surfaces
```

---

## CONTENT FUNDAMENTALS

**Voice.** First-person, confident, builder-first. Designer who codes, not designer who decorates.

**Tone.**
- Warm-professional. Earnest with a small wink — footer says *"Made with ❤ and lots of coffee."*
- Verbs over adjectives. The hero literally bolds three: ***builds, tests, and ships*** … ***launch real products***.
- Specifics over abstraction. Skill descriptions name tools (`React`, `Unity`, `Figma`), not feelings.

**Casing.**
- **Title Case** for nav, section h2's, button labels: *"View My Work"*, *"More Projects"*, *"Get in Touch"*, *"Send Message"*, *"Resume"*.
- **Sentence case** for body and form placeholders ("Your name", "Project subject").
- **No exclamation points** in marketing copy; no decorative emoji in product UI (footer `<Heart />` is the one exception).
- Ampersand `&` used freely in titles ("Creative Developer & Designer", "Built with React & Tailwind CSS").
- Filter chips are **ALL CAPS** (`AI`, `UIUX`, `GAME`).

**Pronouns.**
- "I" / "my" for bio.
- "Let's" / "we" for collaboration invites ("Let's create something amazing together").
- "You" / "your" only inside form scaffolding.
- Never corporate "we" — this is a portfolio for one person.

**Bilingual.** Site supports EN/中文 toggle. Author copy in English first; all user-facing strings flow through `useLanguage` so they live in `src/i18n/`. Code comments are in Chinese; UI copy is English-default.

**Sample copy (verbatim).**
> "Qingyu Cao — Creative Developer & Designer."
> "A Product Designer who **builds, tests, and ships**. I combine design intuition with engineering depth to **launch real products** in fast-moving environments."
> "Let's create something amazing together."
> "© 2025 Qingyu Cao. Made with ❤ and lots of coffee."

**Numbers as proof.** Stats (`15+ Projects Completed`, `3+ Years Experience`) render in gradient text — the brand's way of saying "this matters."

---

## VISUAL FOUNDATIONS

### Color
A **single bold idea — purple, in five voices** — surrounded by white and a near-black `#1a1530` that itself has a purple cast. One signature mid-purple, **`#8981d7`** (`--custom-purple`), anchors all primary CTAs and the cursor trail.

| Role | Token | Hex |
|---|---|---|
| Primary | `--primary-purple` | `#8B5CF6` |
| Secondary | `--secondary-purple` | `#a15fdf` |
| Deep | `--dark-purple` | `#553b80` |
| Light highlight | `--light-purple` | `#C4B5FD` |
| Tint / border | `--light-lavender` | `#E0E7FF` |
| Workhorse mid | `--custom-purple` | `#8981d7` |
| Organic accent | `--lavender-green` | `#8bccb3` |
| Tile blue | `--main-blue` | `#4d64e6` |

Per-project accent gradients (game = `#FF6B6B → #4ECDC4`, plus green/pink/blue presets) override `heroGradient` / `subtitleGradient` / `underlineGradient` per case study. Documented in `PROJECT_COLOR_THEME_README.md` in the source repo.

### Gradients
Always **135°**. Four canonicals:
- `--gradient-hero` — `#271e3d → #9798ee → #233c63` — three-stop midnight aurora. Hero only.
- `--gradient-secondary` — `#9288e3 → #594f93` — the **default text gradient** for h2's, the logo and stat numbers (via `background-clip: text`).
- `--gradient-primary` — `#aa8bf1 → #8cb6fa` — lighter alternate.
- `--gradient-background` — `#667eea → #af94f1` — generic page wash.

### Typography
- **Display + body:** **Poppins** (300/400/500/600/700) — set on both `body` and all headings.
- **Serif accent:** **Tenor Sans** — used in `HeroSpotlight` for cinematic moments.
- **Inter** loaded as fallback only.

Notable: H1 and H2 use **`font-normal` (400)**, never bold — a deliberate quiet-confidence move. Card titles step up to **`font-semibold` (600)**, CTAs to **`font-medium` (500)**. All display headings use `tracking-wide` (~0.02em).

| Role | Size (mobile → desktop) | Weight |
|---|---|---|
| Hero h1 | 48 → 72px | 400 |
| Hero subtitle | 24 → 30px | 300 |
| Section h2 | 36 → 48px | 400 |
| Card title | 20px | 600 |
| Body | 16–18px | 400 |
| CTA | 18px | 500 |
| Caption | 14px | 400 |

### Backgrounds & rhythm
The page rhythms **light → dark → light → dark** for visual cadence:
- **Hero (dark).** `--gradient-hero` plus an absolutely-positioned `.hero-aurora` layer with three stacked diagonal light bands animating at 20s / 25s / 30s. Plus a film-grain SVG overlay (`bg-grain`) at 15% opacity.
- **Selected work (light).** White surface, light-lavender card borders.
- **More Projects (dark).** Custom radial + linear `--dark-section-bg` (deep purple-navy with off-center glow). Glow-on-dark cards.
- **Contact (soft).** `bg-gradient-to-br from-purple-50 to-blue-50` — pastel rest stop.
- **Footer (charcoal).** `bg-gray-900` — final close.

### Cards
Two distinct treatments — **never mixed**:
- **Light card** (`.project-card`): white bg, `1px solid --light-lavender`. Hover: `translateY(-8px)` + `0 20px 40px rgba(139,92,246,0.15)` shadow + border swaps to `--primary-purple`.
- **Dark card** (`.project-card-dark`): `rgba(255,255,255,0.04)` over the dark slab. Hover triggers a **3-layer outer glow** (20px → 80px → 120px violet) — the system's signature "luminous card" look. Lifts only 4px so the glow does the work.

Radii: cards `rounded-xl` (12px), CTAs pill (`rounded-full`), small chips `rounded-full` or `rounded-md`.

### Buttons
- **Primary CTA** is **pill-shaped** (`rounded-full px-8 py-4 text-lg font-medium`) — chunky, never rectangular. White on hero, `--custom-purple` on dark sections.
- **Secondary** is `outline` variant — `border-2 border-white text-white` on dark, `border-gray-200` on light.
- Hover: `scale(1.05)` + slight color shift. No ripple, no press flash.

### Animation
Pronounced but always **quiet** — no bounces, no springs.
- **Eases:** `ease-out` for entrances, CSS `ease` for hover.
- **Durations:** 300ms for UI, 600–1000ms for entrance fades, 20–30s for aurora loops.
- **Entrances:** opacity + 30px translateY up via `IntersectionObserver`. Slide-in-left/right for split layouts.
- **Hover lifts:** -2px (filter pills), -4px (dark cards), -8px (light cards), `scale(1.05)` (CTAs).
- **Hero loop:** triple aurora curtain layered at different speeds + mass-pulse decoratives.
- **Custom signatures:** `<SplashCursor>` global purple particle trail · `<MagicCursor>` wand sparkle on CTA hover · `<DecryptedText>` letter-scramble reveal on hero name · `<MagneticButton>` cursor magnetism.

### Iconography
Source: **lucide-react** (`Mail`, `MapPin`, `Github`, `Linkedin`, `Twitter`, `ArrowUp`, `ChevronDown`, `Download`, `Send`, `Heart`, `Menu`, `X`, `Globe`, `Palette`, `Gamepad2`, `BarChart3`, `Instagram`, `Eye`). Stroke 2, sized 16/20/24/32 by context. No filled icons. No custom illustration — placeholders are real product screenshots.

---

## How to use this system

1. Link `colors_and_type.css` and load Poppins + Tenor Sans from Google Fonts.
2. Use the tokens (`var(--primary-purple)`, `var(--gradient-hero)`, `var(--shadow-card-hover)`, etc.) — never hardcode hex.
3. For new surfaces, pick the band rhythm: hero (gradient + aurora) → light section → dark band → soft pastel → charcoal footer.
4. Reach for the dark-card glow when something needs to feel premium. Reach for gradient-text when something needs to feel branded.
5. CTAs are always pills. Headlines are always font-normal. Specifics always beat abstractions.
