# Premium Minimalist Portfolio — Editorial Design System

A modern, editorial, restrained React portfolio website engineered with the aesthetics of a high-end human product designer. Built with strict monochrome contrast, typographic hierarchy, Apple-inspired liquid glass surfaces, and buttery smooth momentum scrolling.

---

## ✦ Design Philosophy

- **Human-Crafted Restraint**: Zero random neon blobs, zero purple gradients, zero excessive 3D gimmicks, zero generic glassmorphism.
- **Strict Monochrome Color System**: True obsidian `#09090b` and museum paper `#fcfcfc`, balanced with calibrated neutral gray steps.
- **Typographic Rigor**: High-contrast editorial headlines (`-0.035em` to `-0.04em` tracking), micro-labels with wide letter spacing (`0.12em`), and generous whitespace.
- **Apple-Inspired Liquid Glass UI**: Multi-layered backdrop blurs (`20px`), subtle 1px hair-line borders, and delicate specular rim highlights (`inset 0 1px 0 0 rgba(255, 255, 255, 0.14)`).
- **Smooth Momentum Interaction**: Integrated with Lenis for natural inertia and Apple-style scroll-linked hero scaling.
- **Tactile Micro-Physics**: Optional programmatic Web Audio synthesizer feedback (subtle haptic clicks) and interactive liquid glass shader lab.

---

## ✦ Page Structure & Key Features

1. **Liquid Glass Sticky Navigation**:
   - Shrinks and condenses smoothly on scroll.
   - Pulsing availability indicator (`Available for Q2/Q3`).
   - Quick Command Palette trigger (`⌘K`).
   - Theme Switcher (Obsidian Dark / Paper Light).
   - Audio feedback toggle.
   - Fully responsive mobile drawer.

2. **Editorial Hero Section**:
   - Eyebrow: `FRONTEND DEVELOPER · DESIGN ENGINEER`
   - Editorial Headline: *"Building digital experiences with code & design."*
   - Clear placeholders: `[YOUR NAME]`, `[YOUR ROLE]`, `[SHORT INTRODUCTION]`.
   - Apple-style scroll interaction: Hero smoothly scales down and translates as you scroll down.
   - Quick actions: *Explore Work*, *Get in Touch*, and *Copy Email* with instant tactile feedback.

3. **Editorial About Section**:
   - Two-column asymmetric layout with section marker (`01 / ABOUT`).
   - Live local time clock widget (synced with your specified timezone).
   - Metadata blocks: `Location`, `Focus`, `Currently`, `Ethos`.
   - Core engineering principles breakdown.

4. **Vertical Selected Work Showcase**:
   - **NOT** a generic card grid.
   - Each project is presented like an editorial case-study preview.
   - Bespoke interactive preview mockups:
     - **01. Aura Spatial OS**: Mini spatial window manager with draggable tabs and code inspector.
     - **02. Synthesis Variable Specimen**: Interactive variable typography workbench with live weight & slant sliders.
     - **03. Velocity Real-Time Telemetry**: Latency-critical financial telemetry terminal with live oscillating sparklines.
     - **04. Mono Atelier & Objects**: Editorial luxury showroom with isometric / plan wireframe angle toggles.
   - Deep-dive **Case Study Drawer / Modal** for inspecting challenges, architecture, and verified metrics.

5. **Technical Capabilities Matrix**:
   - 4 categories: Frontend Architecture, Design Engineering, Performance & Graphics, Engineering Practices.
   - Real-time search filter.

6. **Career Experience Timeline**:
   - Chronological editorial timeline with expandable achievement milestones.

7. **Tactile Interaction Lab**:
   - Live interactive playground for testing liquid glass shaders, specular reflection angles, backdrop blur values, and spring physics.

8. **Contact & Dispatch Section**:
   - Direct email copy button with toast notification.
   - Client inquiry form with instant validation and simulated transmission state.
   - Social channels: GitHub, X / Twitter, LinkedIn, Read.cv.

9. **Live In-Browser Customizer**:
   - Floating widget at the bottom-left allowing you to type your real name, role, and intro in real-time to preview your customized portfolio instantly, plus export as JSON.

10. **Spotlight Command Palette (`⌘K` / `Ctrl+K`)**:
    - Fast keyboard navigation across all sections and actions.

---

## ✦ Quick Start

```bash
# 1. Navigate to the project directory
cd minimal-portfolio

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✦ How to Customize Placeholders

All portfolio content is centralized in a single clean configuration file:

📁 **`src/data/portfolioData.js`**

Simply update the fields:

```javascript
export const portfolioConfig = {
  personal: {
    name: "[YOUR NAME]",              // e.g. "Alex Morgan"
    role: "[YOUR ROLE]",              // e.g. "Frontend Architect & Design Engineer"
    eyebrow: "FRONTEND DEVELOPER · DESIGNER",
    location: "[LOCATION]",           // e.g. "San Francisco, CA"
    timezone: "America/Los_Angeles",
    status: "[CURRENT STATUS]",       // e.g. "Available for select Q2/Q3 engagements"
    email: "[YOUR EMAIL]",
  },
  hero: {
    headline: "Building digital experiences with code & design.",
    paragraph: "[SHORT INTRODUCTION]",
  },
  // Add or edit projects, capabilities, and experience here...
};
```

You can also test your customizations live in the browser using the **Quick Customize Placeholders** button in the bottom-left corner of the page.
