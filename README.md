# ⚡ Sai Koemsean — Personal Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-0a7a8c?style=for-the-badge)

<p align="center">
  <b>A sleek, responsive, and animated personal developer portfolio built with React 19, Vite, and Tailwind CSS.</b>
</p>

[Features](#-features) • [Portfolio Architecture](#-portfolio-architecture) • [Getting Started](#-getting-started) • [Contact](#-contact)

</div>

---

## 📖 About This Portfolio

This repository contains the source code for the personal developer portfolio of **Sai Koemsean** (Full-Stack Developer & 3rd Year IT student at PIKT, Cambodia).

Built as a lightweight, lightning-fast Single Page Application (SPA) using **React 19** and **Vite 8**, this portfolio showcases:
- Personal profile and technical expertise
- Interactive cyber/HUD hero stages
- Selected web, mobile, and bot projects
- Smooth scroll-driven animations and micro-interactions
- Direct contact channels with one-click email copying

---

## ✨ Features of this Portfolio

### 1. 🎛️ Dual Interactive Profile Stages
The hero section features a live style toggle allowing visitors to choose between two presentation modes:
- **⬡ Cyber Deck Mode**:
  - Dual counter-rotating geometric tech rings with neon glow accents.
  - Animated vertical laser scanline overlay.
  - Floating tech orbit badges with subtle float physics.
  - Dynamic equalizer signal analyzer with 5 bouncing frequency bars and live terminal readout.
  - 3D parallax responsive to mouse movement.
- **◉ Radar HUD Mode**:
  - Technical 360° rotating radar sweep cone.
  - Radar crosshairs and telemetry card with SVG sparkline waveform.

### 2. 🌊 Scroll Experience & Micro-Interactions
- **Top Reading Progress Bar**: Real-time gradient progress bar (`Teal` ➔ `Gold`) at the top edge of the window tracking page scroll percentage.
- **Scroll Reveal System**: Intersection-based slide-up and scale-in animations for section titles and cards.
- **Floating Back-to-Top Button**: Smoothly fades into the bottom right after scrolling past 350px, featuring an SVG circular progress meter that fills according to scroll depth.
- **Technical Specialization Bars**: Animated level progress indicators in the Skills section.
- **Infinite Marquee Ticker**: Continuous seamless scroll ticker with hover-pause functionality.
- **One-Click Email Copy**: Clipboard copy button with visual state feedback on the Contact section.

---

## 🛠️ Built With

This portfolio is built purely as a frontend web application using modern tools:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/) (Fast HMR & optimized production bundling)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS custom design tokens
- **Icons & Fonts**: Google Material Symbols Outlined, Bricolage Grotesque, Onest, JetBrains Mono
- **Routing**: React Router DOM
- **Deployment**: Vercel

---

## 📁 Repository Structure

```
Portfolio2/
├── public/                 # Static assets, favicon and icons
├── src/
│   ├── assets/             # Project screenshots, banners & profile images
│   ├── components/
│   │   ├── About.jsx       # Profile summary, full-stack HUD & stats
│   │   ├── Contact.jsx     # Contact links & one-click clipboard copy
│   │   ├── Footer.jsx      # Footer with back-to-top & copyright info
│   │   ├── Nav.jsx         # Sticky floating glassmorphism navigation
│   │   ├── portfolio.jsx   # Hero, Dual ProfileStage, Marquee & Scroll engine
│   │   ├── Projects.jsx    # Selected projects grid showcase
│   │   └── Skills.jsx      # Skill categories & capability meters
│   ├── App.css             # Component level styles
│   ├── index.css           # Design tokens, HUD frames & custom keyframes
│   └── main.jsx            # React root mount & Router entry point
├── index.html              # HTML shell, fonts, SEO & OpenGraph tags
├── package.json            # Scripts & dependencies
├── tailwind.config.js      # Custom theme, colors & font families
└── vite.config.js          # Vite React plugin setup
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Seven742/Portfolio2.git
   cd Portfolio2
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be created in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact

- **Developer**: Sai Koemsean
- **Email**: [saikoemsean@gmail.com](mailto:saikoemsean@gmail.com)
- **GitHub**: [@Seven742](https://github.com/Seven742)
- **LinkedIn**: [Sai Koemsean](https://www.linkedin.com/in/sai-koemsean-07a304406/)

---

<div align="center">
  <sub>© 2025 - Present Sai Koemsean. All rights reserved.</sub>
</div>
