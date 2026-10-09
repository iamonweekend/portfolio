/**
 * PORTFOLIO DATA & CONTENT CONFIGURATION
 * 
 * High-end editorial portfolio content.
 * All fields with brackets [LIKE THIS] can be customized directly by the user.
 */

export const portfolioConfig = {
  // Personal & Brand Identity
  personal: {
    name: "Alex Morgan", // Replace with [YOUR NAME]
    handle: "alexmorgan",
    role: "Frontend Architect & Design Engineer", // Replace with [YOUR ROLE]
    eyebrow: "FRONTEND DEVELOPER · DESIGN ENGINEER",
    location: "San Francisco, CA", // Replace with [LOCATION]
    timezone: "America/Los_Angeles",
    timezoneAbbr: "PST",
    status: "Available for select Q2/Q3 engagements", // Replace with [CURRENT STATUS]
    email: "alex.morgan.design@example.com", // Replace with [YOUR EMAIL]
    github: "https://github.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    readcv: "https://read.cv",
  },

  // Hero Section
  hero: {
    headline: "Building digital experiences with code & design.",
    headlineAlt: "I build digital experiences that feel simple.",
    paragraph:
      "A frontend architect and design engineer focused on high-performance interfaces, design systems, and fluid micro-interactions. Merging typography, ergonomics, and clean code to craft software that feels natural and enduring.",
    ctaPrimary: "Explore Work",
    ctaSecondary: "Get in Touch",
    availabilityPill: "Available for select advisory & product work",
  },

  // About Section
  about: {
    sectionNumber: "01",
    sectionTitle: "ABOUT",
    leadStatement:
      "I operate at the intersection of product design and systems engineering, transforming complex concepts into calm, tactile digital surfaces.",
    narrative: [
      "With over eight years of experience building modern web products, I specialize in crafting fluid client-side architectures, rigorous design token systems, and interfaces that respect human attention.",
      "I believe the best interfaces are quiet. They don't scream for engagement; they respond with instantaneous tactile clarity, sub-50ms latency, and typographic restraint."
    ],
    metadata: [
      {
        label: "LOCATION",
        value: "San Francisco, CA / Remote",
        helper: "Open to global collaborations",
      },
      {
        label: "FOCUS",
        value: "Design Systems & Frontend Architecture",
        helper: "React · TypeScript · CSS Systems",
      },
      {
        label: "CURRENTLY",
        value: "Staff Design Engineer @ Stealth",
        helper: "Advising early-stage founders",
      },
      {
        label: "ETHOS",
        value: "Restraint · Latency-Critical UX · 60fps",
        helper: "Craft without unnecessary noise",
      },
    ],
    principles: [
      {
        title: "Sub-50ms Response",
        desc: "Latency is the primary determinant of tangible UI quality. Interfaces must react before the brain expects them to.",
      },
      {
        title: "Typographic Hierarchy",
        desc: "True hierarchy is forged through scale, weight, and whitespace—never gratuitous gradients or decorative noise.",
      },
      {
        title: "Deterministic Systems",
        desc: "Design tokens and atomic components should guarantee visual coherence and effortless engineering velocity.",
      },
    ],
  },

  // Selected Work / Projects (Vertical Showcase)
  projects: [
    {
      id: "aura-os",
      index: "01",
      year: "2026",
      title: "Aura Spatial OS",
      tagline: "Minimalist spatial desktop environment for modern web applications.",
      category: "Frontend Architecture · Design System",
      description:
        "An exploration into zero-friction multitasking on the web. Engineered with custom physics-driven window choreography, client-side state persistence, and an ultra-restrained liquid glass interface.",
      technologies: ["React 19", "TypeScript", "Tailwind / CSS Modules", "Web Animations API", "Zustand"],
      metrics: ["< 14kb bundle chunk", "60fps window management", "Zero layout shift"],
      previewType: "desktop-os",
      accentRgb: "255, 255, 255",
      link: "https://example.com/aura",
      github: "https://github.com/example/aura",
      caseStudy: {
        challenge:
          "Traditional web applications trap users inside rigid full-page layouts. The goal was to build a fluid spatial multitasking environment that runs at 60fps directly within browser constraints without WebGL overhead.",
        architecture:
          "Utilized React 19 concurrent features combined with fine-grained DOM transform matrices. Built an isolated window state machine managing z-index layering, dock snap zones, and memory-safe iframe isolation.",
        outcome:
          "Featured across top design communities. Achieved 99.8% fluid frame rates on standard laptops with a minified runtime under 14KB.",
      },
    },
    {
      id: "synthesis-type",
      index: "02",
      year: "2025",
      title: "Synthesis Variable Specimen",
      tagline: "Algorithmic typography laboratory and variable font inspection tool.",
      category: "Creative Engineering · Tooling",
      description:
        "A precision instrument for typographers and product designers to dissect optical axes, variable font weight matrices, and sub-pixel hinting with instantaneous tactile feedback.",
      technologies: ["React", "Variable Font API", "Canvas 2D", "CSS Houdini", "Web Workers"],
      metrics: ["Real-time 120Hz interpolation", "Zero garbage collection pauses", "SVG vector glyph export"],
      previewType: "typography-specimen",
      accentRgb: "235, 235, 240",
      link: "https://example.com/synthesis",
      github: "https://github.com/example/synthesis",
      caseStudy: {
        challenge:
          "Existing web font inspection tools are either static specimen sheets or bloated desktop applications. Typographers needed a lightweight, tactile browser workbench that updates optical sizing in real time.",
        architecture:
          "Decoupled font glyph vector calculations into dedicated Web Workers. Used CSS custom properties connected directly to pointer gestures to manipulate variable axes without triggering React re-renders.",
        outcome:
          "Adopted by independent digital type foundries as their primary web specimen preview tool.",
      },
    },
    {
      id: "velocity-telemetry",
      index: "03",
      year: "2025",
      title: "Velocity Real-Time Telemetry",
      tagline: "High-frequency financial telemetry & latency-critical dashboard.",
      category: "Enterprise Systems · Performance",
      description:
        "A dark-mode telemetry workstation engineered for low-latency market intelligence. Streamlines 50,000 live price ticks per second into an understated, distraction-free visual cadence.",
      technologies: ["React", "TypeScript", "WebSocket Workers", "Canvas Rendering", "OffscreenCanvas"],
      metrics: ["50k ticks/sec throughput", "8ms chart frame times", "100% accessible contrast"],
      previewType: "telemetry-terminal",
      accentRgb: "255, 255, 255",
      link: "https://example.com/velocity",
      github: "https://github.com/example/velocity",
      caseStudy: {
        challenge:
          "Financial dashboards frequently suffer from visual fatigue, neon clutter, and UI thread stutter when handling high-throughput market feeds.",
        architecture:
          "Architected a hybrid rendering pipeline: React manages the shell and accessible controls, while an OffscreenCanvas worker handles sparklines and order books with zero garbage collection overhead.",
        outcome:
          "Reduced UI thread utilization by 78% compared to the legacy trading client while establishing an elegant, monochrome aesthetic.",
      },
    },
    {
      id: "mono-commerce",
      index: "04",
      year: "2024",
      title: "Mono Atelier & Objects",
      tagline: "Editorial commerce platform for bespoke architectural objects.",
      category: "E-Commerce · Interaction Design",
      description:
        "A calm, gallery-grade digital showroom for limited physical works. Elevates product storytelling through asymmetric editorial spreads, progressive image preloading, and invisible checkout friction.",
      technologies: ["React", "Next-gen CSS", "Intersection Observer", "Web Payments API", "Frictionless Cart"],
      metrics: ["99 Core Web Vitals", "Sub-100ms page transitions", "0.00 cumulative layout shift"],
      previewType: "editorial-commerce",
      accentRgb: "245, 245, 245",
      link: "https://example.com/mono",
      github: "https://github.com/example/mono",
      caseStudy: {
        challenge:
          "Luxury physical craft demands a digital home that matches its physical materiality without relying on heavy video assets or slow 3D renderers.",
        architecture:
          "Implemented progressive image decoding using blurhash representations and strict aspect-ratio containers to guarantee zero cumulative layout shift (CLS). Built an inline quick-drawer cart.",
        outcome:
          "Increased conversion rate by 41% and reduced bounce rates while maintaining an austere, museum-grade aesthetic.",
      },
    },
  ],

  // Skills & Capabilities
  skills: {
    sectionNumber: "02",
    sectionTitle: "CAPABILITIES",
    intro:
      "A disciplined technical foundation built on web fundamentals, design systems, and rendering performance.",
    categories: [
      {
        title: "Frontend Architecture",
        desc: "Scalable client-side applications built for longevity and velocity.",
        items: [
          "React 19 & Next.js",
          "TypeScript (Strict)",
          "State Management & Statecharts",
          "Web Standards & Modern DOM",
          "Progressive Enhancement",
          "Micro-Frontends & Monorepos",
        ],
      },
      {
        title: "Design Engineering",
        desc: "Bridging the gap between Figma craft and production code.",
        items: [
          "Design Systems & Token Architecture",
          "Micro-Interactions & Spring Physics",
          "Accessible UI (WCAG 2.2 AAA)",
          "Editorial & Responsive Layouts",
          "Design Tooling Integration",
          "Component API Design",
        ],
      },
      {
        title: "Performance & Graphics",
        desc: "Ensuring every frame renders within the 16.6ms budget.",
        items: [
          "Core Web Vitals Optimization",
          "Canvas 2D & OffscreenCanvas",
          "CSS Animation & Web Animations API",
          "Memory & GC Profiling",
          "Bundle Shrinking & Tree-Shaking",
          "Zero-Layout-Shift Patterns",
        ],
      },
      {
        title: "Engineering Practices",
        desc: "Predictable, maintainable, and well-tested codebases.",
        items: [
          "Vitest & Component Testing",
          "End-to-End Testing (Playwright)",
          "Continuous Delivery & CI Pipelines",
          "Semantic Versioning & Changelogs",
          "Automated Accessibility Auditing",
          "Documentation as Code",
        ],
      },
    ],
  },

  // Experience & Career Timeline
  experience: {
    sectionNumber: "03",
    sectionTitle: "EXPERIENCE",
    intro: "A track record of engineering impact at high-craft product teams.",
    roles: [
      {
        period: "2024 — PRESENT",
        title: "Staff Design Engineer",
        company: "Stealth Systems",
        location: "San Francisco, CA",
        summary:
          "Leading frontend architecture and design systems for next-generation developer tooling. Driving UI performance and cross-functional design alignment.",
        highlights: [
          "Architected multi-tenant design system deployed across 4 flagship web applications.",
          "Reduced client bundle size by 35% and improved First Contentful Paint by 420ms.",
          "Partnered directly with founding designers to establish company-wide typographic and motion standards.",
        ],
      },
      {
        period: "2022 — 2024",
        title: "Senior Frontend Engineer",
        company: "Studio Mono",
        location: "New York, NY",
        summary:
          "Engineered high-profile web experiences, bespoke design tools, and editorial platforms for global architecture and culture clients.",
        highlights: [
          "Shipped over 12 bespoke web platforms with average Lighthouse performance scores > 96.",
          "Built custom micro-interaction library reducing motion implementation cycle times by 50%.",
          "Mentored junior engineers and led weekly code and design critique sessions.",
        ],
      },
      {
        period: "2020 — 2022",
        title: "Frontend Developer & Designer",
        company: "Horizon Labs",
        location: "Remote",
        summary:
          "Developed core design system components and user-facing dashboards for enterprise analytics software.",
        highlights: [
          "Transitioned legacy codebase to modern TypeScript and unified component library.",
          "Designed and shipped data visualization dashboards used by over 80,000 weekly active users.",
          "Authored accessibility guidelines to achieve full WCAG AA compliance.",
        ],
      },
    ],
  },

  // Interactive Lab / Craft Showcase
  lab: {
    badge: "INTERACTIVE EXPERIMENT",
    title: "Tactile Interaction Lab",
    subtitle:
      "A live playground demonstrating micro-interaction physics, liquid glass refractions, and sub-pixel spring curves.",
  },

  // Contact Section
  contact: {
    sectionNumber: "04",
    sectionTitle: "CONTACT",
    headline: "Let's build something exceptional together.",
    subtext:
      "Currently considering select design engineering advisory, architectural consulting, and full-time senior staff positions.",
    email: "alex.morgan.design@example.com",
    responseTime: "Typically replies within 24–48 hours",
  },
};
