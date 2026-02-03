---
name: Upgrade Hero Section to "Interactive Minimalist" Style
overview: Transform the Hero section into a high-end, "anti-AI" interactive experience by adding decrypted text animations, magnetic button physics, and a film grain texture, giving it a polished, hand-coded feel.
todos:
  - id: create-decrypted-text
    content: Create src/components/DecryptedText.jsx with scramble animation logic
    status: completed
  - id: create-magnetic-button
    content: Create src/components/MagneticButton.jsx using framer-motion
    status: completed
  - id: add-grain-css
    content: Add grain texture CSS to src/App.css
    status: completed
  - id: update-hero
    content: Update Hero.jsx to implement new components and refine typography
    status: completed
isProject: false
---

I will implement the "Interactive Minimalist" design to give your portfolio a professional, non-AI look.

### 1. New Components

- `**src/components/DecryptedText.jsx**`: Create a text component that "scrambles" and decodes characters (Matrix/Hacker style) on load and hover. This adds a "tech/developer" personality.
- `**src/components/MagneticButton.jsx**`: Create a button wrapper using `framer-motion`. When you hover near the button, it will magnetically snap to and follow your cursor, creating a satisfying, fluid micro-interaction.

### 2. Texture & Styling

- **Film Grain Overlay**: Add a `.bg-grain` class in `src/App.css` using a CSS-only SVG noise filter. This adds subtle texture to the background, removing the smooth "plastic" look typical of AI-generated designs.
- **Typography Refinement**: Update `Hero.jsx` to use tighter tracking (letter-spacing) for the main title and wider tracking for the subtitle, mimicking high-end editorial design.

### 3. Integration

- Update `src/components/Hero.jsx`:
  - Replace the static "Qingyu Cao" title with the `<DecryptedText>` component.
  - Wrap the "View My Work" and "Resume" buttons with `<MagneticButton>`.
  - Apply the grain texture to the hero container.
  - Keep your existing "Aurora" curtain effect as the beautiful base layer.

### 4. Why this works

This approach avoids generic assets and focuses on **behavior** and **feel**. Complex, smooth physics interactions are hard for AI to fake convincingly, making your site feel uniquely "human-made" and technically impressive.