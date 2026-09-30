import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import profileImg from "../assets/Koem.png";

/* ── Editorial Cutout Profile Stage with Parallax, Radar Sweep & Multi-Float ── */
function ProfileStage() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] lg:max-w-[500px] flex items-center justify-center select-none py-2"
    >
      {/* ── Background Architectural Orbital Rings & Dynamic Radar Scanner ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        {/* Ambient Soft Glow */}
        <div
          className="anim-pulse-glow w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(10, 122, 140, 0.28) 0%, rgba(255, 212, 59, 0.12) 50%, transparent 70%)",
            filter: "blur(36px)",
          }}
        />

        {/* Technical Radar Circles with Rotating Scan Sweep */}
        <svg
          className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] text-ink"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="radarSweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a7a8c" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0a7a8c" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Rotating Scanner Cone */}
          <g className="anim-radar origin-[200px_200px]">
            <path d="M 200 200 L 200 10 A 190 190 0 0 1 334 65 Z" fill="url(#radarSweepGrad)" />
            <line x1="200" y1="200" x2="200" y2="10" stroke="#0a7a8c" strokeWidth="1.2" strokeOpacity="0.5" />
          </g>

          {/* Fixed Circles & Crosshairs */}
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="2 4" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
        </svg>
      </div>

      {/* ── Cutout Portrait with Smooth 3D Parallax ── */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `translate(${offset.x * 12}px, ${offset.y * 12}px)`,
        }}
      >
        {/* Soft Ground Shadow Pedestal */}
        <div
          className="absolute -bottom-4 w-4/5 h-8 rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(11, 16, 38, 0.3) 0%, transparent 75%)",
            filter: "blur(12px)",
          }}
        />

        {/* Profile Image with Drop Shadow */}
        <picture className="w-full max-w-[320px] sm:max-w-[350px] h-auto block">
          <img
            src={profileImg}
            alt="Sai Koemsean"
            className="w-full h-auto object-contain transition-all duration-500 hover:scale-[1.02]"
            style={{
              filter: "drop-shadow(0 20px 32px rgba(10, 122, 140, 0.28)) drop-shadow(0 4px 12px rgba(11, 16, 38, 0.12))",
            }}
          />
        </picture>
      </div>

      {/* ── Floating Badge 1: Top-Left (React & Frontend with anim-float-1) ── */}
      <div
        className="absolute top-6 -left-2 sm:-left-6 z-20 transition-transform duration-500 ease-out anim-float-1"
        style={{
          transform: `translate(${offset.x * -8}px, ${offset.y * -8}px)`,
        }}
      >
        <div
          className="hud py-2 px-3.5 flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg border border-[var(--rule)] hover:border-teal/50 transition-colors"
          style={{ clipPath: "var(--cut)" }}
        >
          <span className="w-2 h-2 rounded-full bg-teal" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
            Frontend · React.js
          </span>
        </div>
      </div>

      {/* ── Floating Badge 2: Top-Right (PIKT 3rd Year with anim-float-2) ── */}
      <div
        className="absolute top-8 -right-2 sm:-right-6 z-20 transition-transform duration-500 ease-out anim-float-2"
        style={{
          transform: `translate(${offset.x * -12}px, ${offset.y * -12}px)`,
        }}
      >
        <div
          className="bg-gold text-ink font-display font-extrabold text-xs uppercase tracking-wider py-1.5 px-3.5 shadow-md flex items-center gap-1.5 transition-transform duration-300 hover:scale-105 cursor-default"
          style={{ clipPath: "var(--cut)" }}
        >
          <span className="material-symbols-outlined text-sm">school</span>
          <span>PIKT 3rd Year</span>
        </div>
      </div>

      {/* ── Floating Badge 3: Bottom-Right (Data & SQL with anim-float-3) ── */}
      <div
        className="absolute bottom-12 -right-2 sm:-right-4 z-20 transition-transform duration-500 ease-out anim-float-3"
        style={{
          transform: `translate(${offset.x * -10}px, ${offset.y * -10}px)`,
        }}
      >
        <div
          className="hud py-2 px-3 flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg border border-[var(--rule)] hover:border-teal/50 transition-colors"
          style={{ clipPath: "var(--cut)" }}
        >
          <span className="text-teal font-bold font-mono text-xs">02 //</span>
          <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wider font-semibold">
            Data & Queries
          </span>
        </div>
      </div>

      {/* ── Floating Telemetry Card: Bottom-Left ── */}
      <div
        className="absolute -bottom-4 -left-2 sm:-left-8 z-20 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${offset.x * -14}px, ${offset.y * -14}px)`,
        }}
      >
        <div
          className="hud p-3.5 sm:p-4 bg-white/95 backdrop-blur-xl border border-[var(--rule)] shadow-xl max-w-[210px] burn hover:-translate-y-1 transition-transform"
          style={{ clipPath: "var(--cut)" }}
        >
          {/* Status Header */}
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-[var(--rule)]">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink">
                Available
              </span>
            </div>
            <span className="text-[10px] font-mono text-teal font-semibold">2025</span>
          </div>

          {/* Sparkline Telemetry Waveform */}
          <div className="hud-spark my-1.5">
            <svg viewBox="0 0 100 20" className="w-full h-5 overflow-visible">
              <polyline points="0,16 18,12 32,18 48,4 64,14 80,6 100,10" />
            </svg>
          </div>

          {/* Telemetry Footer */}
          <div className="flex items-center justify-between text-[10px] font-mono text-ink-soft">
            <span>Specialty</span>
            <span className="font-bold text-ink">React / Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Editorial Marquee Ticker ── */
function Marquee() {
  const items = [
    "FRONTEND DEV",
    "DATA ANALYST",
    "UI/UX DESIGN",
    "REACT.JS",
    "JAVA",
    "SQL / MYSQL",
    "TAILWIND CSS",
    "FIGMA",
    "PIKT KAMPONG THOM",
    "INFORMATION TECHNOLOGY",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[var(--rule)] bg-white/70 py-4 relative z-10 backdrop-blur-sm">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-marquee select-none">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 font-mono text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase group"
          >
            <span className="group-hover:text-teal transition-colors">{item}</span>
            <span className="text-teal text-sm group-hover:rotate-45 transition-transform duration-300">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Hero Section ── */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const [mouseGlow, setMouseGlow] = useState({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMouseGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleHeroMouseLeave = () => {
    setMouseGlow((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="min-h-[90vh] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-[var(--gutter)] flex flex-col justify-between relative overflow-hidden bg-contours bg-[var(--paper)]"
    >
      {/* Ambient Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 -z-10"
        style={{
          opacity: mouseGlow.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${mouseGlow.x}px ${mouseGlow.y}px, rgba(10, 122, 140, 0.08), transparent 70%)`,
        }}
      />

      <div className="max-w-[var(--max)] mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Big Editorial Typography & Intro */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Status / Role pill */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-teal mb-4 sm:mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
              </span>
              <span>Available for Opportunities · PIKT Student</span>
            </div>

            {/* Huge Name Heading */}
            <h1 className="font-display-cond text-[clamp(60px,10vw,136px)] text-ink mb-4 sm:mb-6 leading-[0.86]">
              <span className="block transform hover:translate-x-1.5 transition-transform duration-300">
                Sai
              </span>
              <span className="block text-teal transform hover:translate-x-1.5 transition-transform duration-300">
                Koemsean
              </span>
            </h1>

            {/* Subtitle */}
            <div className="font-display font-semibold text-lg sm:text-2xl text-ink mb-3 sm:mb-4 tracking-tight flex items-center gap-3">
              <span className="w-8 h-px bg-teal hidden sm:block" />
              <span>3rd Year Information Technology Student</span>
            </div>

            {/* Pitch description */}
            <p className="text-sm sm:text-base lg:text-lg text-ink-soft max-w-xl leading-relaxed mb-6 sm:mb-8">
              Turning raw data into meaningful stories through analysis, interfaces, and design. Based in Kampong Thom, Cambodia.
            </p>

            {/* CTA Action Buttons with .burn shimmer effect */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#projects" className="cut-btn-solid burn group">
                <span>View Selected Work</span>
                <span className="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform">
                  arrow_downward
                </span>
              </a>
              <a href="#contact" className="cut-btn burn group">
                <span>Get in Touch</span>
                <span className="material-symbols-outlined text-base group-hover:rotate-12 transition-transform">
                  mail
                </span>
              </a>
              <a
                href="https://github.com/Seven742"
                target="_blank"
                rel="noopener noreferrer"
                className="cut-btn burn"
                aria-label="GitHub profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Cutout Profile Stage */}
          <div
            className={`lg:col-span-5 flex flex-col items-center lg:items-end justify-center transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <ProfileStage />
          </div>
        </div>
      </div>

      {/* Bottom bar indicator */}
      <div className="max-w-[var(--max)] mx-auto w-full pt-8 sm:pt-10 flex items-center justify-between text-xs font-mono text-ink-soft border-t border-[var(--rule-subtle)]">
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-sm text-teal group-hover:scale-125 transition-transform">
            location_on
          </span>
          <span>Kampong Thom, Cambodia</span>
        </div>

        <a
          href="#about"
          className="hidden sm:flex items-center gap-2 hover:text-teal transition-colors"
        >
          <span>Scroll to explore</span>
          <span className="material-symbols-outlined text-sm animate-bounce text-teal">
            arrow_downward
          </span>
        </a>
      </div>
    </section>
  );
}

/* ── Main App Layout ── */
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-ink">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
