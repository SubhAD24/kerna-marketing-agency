<div align="center">
  <br />
  <h1>Kerna Marketing Agency</h1>
  <p>
    <strong>Where Strategy Meets Spark.</strong><br/>
    A premium digital experience built for a modern marketing agency.
  </p>
  <br />
  <p>
    <a href="https://kerna-marketing-agency.vercel.app/"><strong>View Live Website</strong></a>
  </p>
  <br />
  <p>
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-features">Features</a> •
    <a href="#-motion-design">Motion Design</a> •
    <a href="#-running-locally">Running Locally</a>
  </p>
  <br />
</div>

## ✦ Project Overview

**Kerna** is a high-end, multi-page marketing agency website designed to capture the essence of a modern, strategy-driven brand. I built this project from the ground up to showcase an elite standard of frontend engineering, focusing heavily on fluid motion design, meticulously crafted typography, and an immersive user experience.

Taking inspiration from industry leaders like Apple, Linear, and Stripe, the goal was to create a digital presence that feels expansive, deliberate, and undeniably premium.

---

## ✦ Tech Stack

This project was engineered using a modern, highly performant stack to ensure rapid delivery and a flawless user experience.

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (v4)
- **Typography:** Next Font (`Inter` & `DM Sans`)
- **Animation Engine:** GSAP (Core & ScrollTrigger)
- **Smooth Scrolling:** Lenis (`@studio-freight/lenis`)
- **3D Rendering:** React Three Fiber (`@react-three/fiber`, `three`)
- **Icons:** Lucide React
- **Theme Management:** `next-themes`

---

## ✦ Features

### 🌗 Robust Theme Architecture
The application features a seamless Light/Dark mode implementation:
- **Intelligent Detection:** Automatically reads and applies the user's `prefers-color-scheme` on their first visit.
- **Fluid Transitions:** Colors shift smoothly across the entire DOM during manual toggles, providing a polished, glare-free transition.
- **Persistent State:** User preferences are securely saved to `localStorage`, ensuring their chosen aesthetic remains intact across sessions.
- **Zero FOUC:** Server-side structural optimizations prevent any Flash of Unstyled Content during React hydration.

### 📑 Comprehensive Page Layouts
- **Home:** An immersive landing experience featuring a 3D Hero, interactive service cards, a step-by-step process timeline, and a dynamic scrolling marquee.
- **Work:** A detailed portfolio section designed to highlight problem/solution case studies with expansive imagery and sleek data tags.
- **Careers:** An engaging recruitment hub displaying open roles, required skill sets, and direct application pathways.
- **Contact:** A fully functional client-side form featuring instant regex validation and a highly stylized, interactive embedded map.

---

## ✦ Motion Design

To achieve a true "$10k agency" feel, I obsessed over the micro-interactions and scroll behaviors:

1. **Cinematic Hero Reveal**: The landing copy uses a custom GSAP staggered split-text animation, sliding characters into view synchronously with the 3D background rendering.
2. **Interactive Custom Cursor**: The native pointer is replaced by a dynamic orb that intelligently tracks movement via `gsap.quickTo`. It morphs seamlessly when hovering over links, expanding into a glassmorphism shell or displaying contextual "View" tooltips over portfolio items.
3. **Magnetic Buttons**: CTAs aren't static; they physically pull toward the user's cursor as they approach, utilizing elastic GSAP easing for a tactile, satisfying click experience.
4. **Infinite Parallax Marquee**: A continuous horizontal text ribbon anchors the hero section. Tied to a GSAP `ScrollTrigger`, the marquee dynamically accelerates and decelerates entirely based on the user's scroll velocity.
5. **Elevated Card Physics**: Hovering over services or job listings triggers a smooth Y-axis translation combined with an expanding, colored drop-shadow and a slow inner-image zoom scale (`scale-105`), creating intense visual depth.

---

## ✦ Running Locally

Want to inspect the codebase and experience the motion design yourself?

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/SubhAD24/kerna-marketing-agency.git
   \`\`\`
2. Navigate into the directory and install dependencies:
   \`\`\`bash
   cd kerna-marketing-agency
   npm install
   \`\`\`
3. Start the Next.js development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
