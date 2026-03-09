<div align="center">
  <br />
  <h1>Kerna Marketing Agency</h1>
  <p>
    <strong>Where Strategy Meets Spark.</strong><br/>
    A premium frontend engineering assignment built with Next.js, Tailwind CSS, and GSAP.
  </p>
  <br />
</div>

## ✦ Project Overview

This repository contains the completed frontend for the Kerna Marketing Agency assignment. The project was executed with a strict adherence to the provided Product Requirements Document (PRD), focusing on delivering a premium, "$10k+ agency" aesthetic inspired by Apple, Linear, and Stripe.

The application is thoroughly responsive, achieves high performance metrics, and features highly polished cinematic motion design.

---

## ✦ Technical Stack

The architecture strictly uses free, open-source technologies capable of permanent, static deployment.

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (v4)
- **Typography:** Next Font (`Inter` for body, `DM Sans` for headings)
- **Animation Engine:** GSAP (ScrollTrigger & core)
- **Smooth Scrolling:** Lenis (`@studio-freight/lenis`)
- **3D Rendering:** React Three Fiber (`@react-three/fiber`, `three`)
- **Icons:** Lucide React
- **Theme Management:** `next-themes`

> **Note:** No external AI website builders, locked SaaS platforms, paid templates, or premium libraries were utilized in this build.

---

## ✦ Premium Features Implemented

1. **Cinematic Hero Animation**: An Apple-style staggered text reveal synchronized with the background gradient and 3D environment loading.
2. **GSAP Magnetic Buttons**: Interactive CTAs that smoothly track cursor position for an elevated UX.
3. **Custom Interactive Cursor**: A dynamic glowing pointer that reacts contextually when hovering over links and portfolio modules.
4. **Infinite Scrolling Marquee**: A Stripe-style dynamic text ribbon with scroll-velocity parallax rendering.
5. **Fluid Motion Design**: Utilizing GSAP `power2` and `power3` easing for scrolling reveals, image zooms (`scale-105`), and elevated shadow staging.

---

## ✦ PRD Compliance & Theme Logic

This project fulfills 100% of the constraints defined in the original PRD.

### Dark/Light Theme System (Mandatory)
The application utilizes `next-themes` for robust, persistent theme switching:
- **First Visit:** Detects system preference via `prefers-color-scheme` automatically (`enableSystem={true}`).
- **Manual Toggle:** Users can manually override themes using the interactive toggle in the Navbar.
- **Persistence:** The user's explicit choice is saved instantly to `localStorage`, overriding system preferences on all subsequent visit sessions.
- **Hydration:** Includes `suppressHydrationWarning` on the HTML root element ensuring no FOUC (Flash of Unstyled Content).

### Page Implementations
- `Home (/)`: Composed of Hero, About, Services, How We Work, Why Choose Us, Previews, and Contact Section.
- `Work (/work)`: Detailed premium layouts for the 3 sample client projects showcasing problem/solution architecture.
- `Careers (/careers)`: Clean internship role cards outlining necessary skills and timelines.
- `Contact (/contact)`: Functional, client-side governed application form.

---

## ✦ Known Limitations

- **Backend Architecture:** As explicitly permitted by the PRD constraints ("No backend required"), the contact form features robust front-end regex error validation and a simulated success state, but does not route emails to a genuine external SMPT server via API routes.
- **Dynamic Routing:** Work projects and Career roles link to their respective parent routes (`/work`, `/careers`) globally rather than utilizing dynamic routing boundaries (`/work/[slug]`) to maintain the exact scope of the 4 requested required pages.

---

## ✦ Running Locally

To run this project on your local machine:

1. Clone the repository
2. Install the necessary dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the Next.js development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
