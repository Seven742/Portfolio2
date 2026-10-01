import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import profileImg from "../assets/Koem.png";

/* ── Editorial Cutout Profile Stage with Parallax, Radar Sweep & Multi-Float ── */
/* ── Editorial Cutout Profile Stage with Dual Styles (Radar HUD vs Cyber Deck) ── */
function ProfileStage() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [profileStyle, setProfileStyle] = useState("cyber"); // default to sleek new Cyber Deck style

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
    <div className="flex flex-col items-center w-full">
      {/* ── Style Switcher Toggle HUD ── */}
      <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-md border border-[var(--rule)] rounded-full shadow-sm mb-4 sm:mb-6 transition-all hover:border-teal/40">
        <button
          type="button"
          onClick={() => setProfileStyle("cyber")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
            profileStyle === "cyber"
              ? "bg-teal text-white shadow-md"
              : "text-ink-soft hover:text-ink"
          }`}
          aria-label="Cyber Deck style"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span>⬡ Cyber Deck</span>
        </button>

        <button
          type="button"
          onClick={() => setProfileStyle("radar")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all ${
            profileStyle === "radar"
              ? "bg-ink text-white shadow-md"
              : "text-ink-soft hover:text-ink"
          }`}
          aria-label="Radar HUD style"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          <span>◉ Radar HUD</span>
        </button>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[460px] lg:max-w-[500px] flex items-center justify-center select-none py-2"
      >
        {/* ── STYLE 1: RADAR HUD ── */}
        {profileStyle === "radar" && (
          <>
            {/* Background Architectural Orbital Rings & Dynamic Radar Scanner */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 transition-opacity duration-500">
              <div
                className="anim-pulse-glow w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(10, 122, 140, 0.28) 0%, rgba(255, 212, 59, 0.12) 50%, transparent 70%)",
                  filter: "blur(36px)",
                }}
              />

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

                <g className="anim-radar origin-[200px_200px]">
                  <path d="M 200 200 L 200 10 A 190 190 0 0 1 334 65 Z" fill="url(#radarSweepGrad)" />
                  <line x1="200" y1="200" x2="200" y2="10" stroke="#0a7a8c" strokeWidth="1.2" strokeOpacity="0.5" />
                </g>

                <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" />
                <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="2 4" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
              </svg>
            </div>

            {/* Cutout Portrait with Smooth 3D Parallax */}
            <div
              className="relative z-10 transition-transform duration-300 ease-out flex items-center justify-center"
              style={{
                transform: `translate(${offset.x * 12}px, ${offset.y * 12}px)`,
              }}
            >
              <div
                className="absolute -bottom-4 w-4/5 h-8 rounded-full pointer-events-none -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(11, 16, 38, 0.3) 0%, transparent 75%)",
                  filter: "blur(12px)",
                }}
              />
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

            {/* Floating Badge 1: Top-Left */}
            <div
              className="absolute top-6 -left-2 sm:-left-6 z-20 transition-transform duration-500 ease-out anim-float-1"
              style={{ transform: `translate(${offset.x * -8}px, ${offset.y * -8}px)` }}
            >
              <div
                className="hud py-2 px-3.5 flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg border border-[var(--rule)] hover:border-teal/50 transition-colors"
                style={{ clipPath: "var(--cut)" }}
              >
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
                  Full-Stack · Next.js & React
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Top-Right */}
            <div
              className="absolute top-8 -right-2 sm:-right-6 z-20 transition-transform duration-500 ease-out anim-float-2"
              style={{ transform: `translate(${offset.x * -12}px, ${offset.y * -12}px)` }}
            >
              <div
                className="bg-gold text-ink font-display font-extrabold text-xs uppercase tracking-wider py-1.5 px-3.5 shadow-md flex items-center gap-1.5 transition-transform duration-300 hover:scale-105 cursor-default"
                style={{ clipPath: "var(--cut)" }}
              >
                <span className="material-symbols-outlined text-sm">school</span>
                <span>PIKT 3rd Year</span>
              </div>
            </div>

            {/* Floating Badge 3: Bottom-Right */}
            <div
              className="absolute bottom-12 -right-2 sm:-right-4 z-20 transition-transform duration-500 ease-out anim-float-3"
              style={{ transform: `translate(${offset.x * -10}px, ${offset.y * -10}px)` }}
            >
              <div
                className="hud py-2 px-3 flex items-center gap-2 bg-white/90 backdrop-blur-md shadow-lg border border-[var(--rule)] hover:border-teal/50 transition-colors"
                style={{ clipPath: "var(--cut)" }}
              >
                <span className="text-teal font-bold font-mono text-xs">02 //</span>
                <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wider font-semibold">
                  Express.js · REST APIs
                </span>
              </div>
            </div>

            {/* Floating Telemetry Card: Bottom-Left */}
            <div
              className="absolute -bottom-4 -left-2 sm:-left-8 z-20 transition-transform duration-500 ease-out"
              style={{ transform: `translate(${offset.x * -14}px, ${offset.y * -14}px)` }}
            >
              <div
                className="hud p-3.5 sm:p-4 bg-white/95 backdrop-blur-xl border border-[var(--rule)] shadow-xl max-w-[210px] burn hover:-translate-y-1 transition-transform"
                style={{ clipPath: "var(--cut)" }}
              >
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
                  <span className="text-[10px] font-mono text-teal font-semibold">Fullstack</span>
                </div>
                <div className="hud-spark my-1.5">
                  <svg viewBox="0 0 100 20" className="w-full h-5 overflow-visible">
                    <polyline points="0,16 18,12 32,18 48,4 64,14 80,6 100,10" />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-ink-soft">
                  <span>Specialty</span>
                  <span className="font-bold text-ink">Next · React · Express</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── STYLE 2: CYBER DECK (Futuristic Hologram & Orbit System) ── */}
        {profileStyle === "cyber" && (
          <>
            {/* Concentric Rotating Tech Cyber Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              {/* Radiant Cyan & Gold Glow Aura */}
              <div
                className="w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(10, 122, 140, 0.35) 0%, rgba(255, 212, 59, 0.15) 45%, transparent 72%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Outer Counter-Rotating Geometric Ring */}
              <div className="absolute w-[360px] sm:w-[430px] h-[360px] sm:h-[430px] rounded-full border border-dashed border-teal/25 anim-spin-slow flex items-center justify-center">
                <span className="absolute -top-1.5 w-3 h-3 rounded-full bg-teal shadow-[0_0_10px_#0a7a8c]" />
                <span className="absolute -bottom-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#ffd43b]" />
                <span className="absolute -left-1.5 w-2 h-2 rounded-full bg-teal/60" />
                <span className="absolute -right-1.5 w-2 h-2 rounded-full bg-teal/60" />
              </div>

              {/* Inner High-Tech Hexagon Orbit Ring */}
              <div className="absolute w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full border border-teal/40 anim-spin-reverse flex items-center justify-center">
                <div className="w-[96%] h-[96%] rounded-full border border-[var(--rule)] opacity-60" />
              </div>
            </div>

            {/* Cutout Portrait with Holographic Scan Sheen */}
            <div
              className="relative z-10 transition-transform duration-300 ease-out flex items-center justify-center overflow-hidden rounded-2xl"
              style={{
                transform: `translate(${offset.x * 12}px, ${offset.y * 12}px)`,
              }}
            >
              {/* Laser Scanline Beam overlay */}
              <div className="anim-holo-scan z-20" />

              {/* Ground Shadow */}
              <div
                className="absolute -bottom-3 w-4/5 h-8 rounded-full pointer-events-none -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(10, 122, 140, 0.45) 0%, transparent 75%)",
                  filter: "blur(14px)",
                }}
              />

              <picture className="w-full max-w-[320px] sm:max-w-[350px] h-auto block relative z-10">
                <img
                  src={profileImg}
                  alt="Sai Koemsean"
                  className="w-full h-auto object-contain transition-all duration-500 hover:scale-[1.03]"
                  style={{
                    filter: "drop-shadow(0 20px 36px rgba(10, 122, 140, 0.35)) drop-shadow(0 4px 16px rgba(11, 16, 38, 0.15))",
                  }}
                />
              </picture>
            </div>

            {/* Cyber Orbit Capsule 1: Top-Left (Next.js 14) */}
            <div
              className="absolute top-4 -left-2 sm:-left-6 z-20 transition-transform duration-500 ease-out anim-float-1"
              style={{ transform: `translate(${offset.x * -9}px, ${offset.y * -9}px)` }}
            >
              <div className="flex items-center gap-2 py-2 px-3 bg-ink/90 text-white backdrop-blur-xl border border-teal/40 shadow-xl rounded-lg hover:border-teal transition-all">
                <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
                <span className="font-mono text-[11px] font-bold tracking-wider">
                  ▲ Next.js 14 SSR
                </span>
              </div>
            </div>

            {/* Cyber Orbit Capsule 2: Top-Right (React.js) */}
            <div
              className="absolute top-6 -right-2 sm:-right-6 z-20 transition-transform duration-500 ease-out anim-float-2"
              style={{ transform: `translate(${offset.x * -11}px, ${offset.y * -11}px)` }}
            >
              <div className="flex items-center gap-1.5 py-1.5 px-3 bg-white/95 backdrop-blur-xl border border-[var(--rule)] shadow-lg rounded-lg text-ink font-mono text-[11px] font-semibold hover:border-gold transition-colors">
                <span className="text-teal text-sm">⚛</span>
                <span>React.js Web</span>
              </div>
            </div>

            {/* Cyber Orbit Capsule 3: Bottom-Right (Express.js APIs) */}
            <div
              className="absolute bottom-14 -right-2 sm:-right-4 z-20 transition-transform duration-500 ease-out anim-float-3"
              style={{ transform: `translate(${offset.x * -13}px, ${offset.y * -13}px)` }}
            >
              <div className="flex items-center gap-2 py-1.5 px-3 bg-white/90 backdrop-blur-xl border border-[var(--rule)] shadow-lg rounded-lg text-ink hover:border-teal/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] font-bold text-ink-soft uppercase">
                  Express · REST APIs
                </span>
              </div>
            </div>

            {/* Cyber Deck Console with Live Equalizer & Terminal: Bottom-Left */}
            <div
              className="absolute -bottom-4 -left-2 sm:-left-8 z-20 transition-transform duration-500 ease-out"
              style={{ transform: `translate(${offset.x * -14}px, ${offset.y * -14}px)` }}
            >
              <div className="hud p-3.5 sm:p-4 bg-ink text-white backdrop-blur-2xl border border-teal/40 shadow-2xl rounded-xl max-w-[220px]">
                {/* Status line */}
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/10 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="text-teal font-bold tracking-wider">ONLINE</span>
                  </div>
                  <span className="text-gold font-mono">99.9% UPTIME</span>
                </div>

                {/* Animated Equalizer Signal Bars */}
                <div className="flex items-end gap-1.5 h-6 my-2 px-1">
                  <div className="w-1.5 bg-teal rounded-full eq-bar-1" />
                  <div className="w-1.5 bg-teal-400 rounded-full eq-bar-2" />
                  <div className="w-1.5 bg-gold rounded-full eq-bar-3" />
                  <div className="w-1.5 bg-teal-300 rounded-full eq-bar-4" />
                  <div className="w-1.5 bg-teal rounded-full eq-bar-5" />
                  <div className="w-1.5 bg-gold/80 rounded-full eq-bar-2" />
                  <span className="text-[10px] font-mono text-white/50 ml-auto">0.02ms</span>
                </div>

                {/* Cyber Console Footer */}
                <div className="text-[10px] font-mono text-white/70 tracking-tight flex items-center justify-between pt-1">
                  <span>RUNTIME</span>
                  <span className="text-teal font-semibold">FULLSTACK NODE</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Editorial Marquee Ticker ── */
function Marquee() {
  const items = [
    "FULL-STACK DEVELOPER",
    "NEXT.JS",
    "REACT.JS",
    "EXPRESS.JS",
    "NODE.JS",
    "RESTFUL APIS",
    "SQL / MYSQL",
    "TAILWIND CSS",
    "DATA ANALYSIS",
    "FIGMA & UI/UX",
    "PIKT KAMPONG THOM",
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
              <span>Available for Opportunities · Full-Stack Developer</span>
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
              <span>Full-Stack Developer · Next.js · React · Express</span>
            </div>

            {/* Pitch description */}
            <p className="text-sm sm:text-base lg:text-lg text-ink-soft max-w-xl leading-relaxed mb-6 sm:mb-8">
              Architecting end-to-end web applications — from scalable Express.js backends and RESTful APIs to fast, reactive Next.js & React user interfaces. Based in Kampong Thom, Cambodia.
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

/* ── Global Scroll Progress Indicator ── */
function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-teal via-teal-400 to-gold transition-all duration-75 ease-out shadow-[0_0_12px_rgba(10,122,140,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

/* ── Floating Back to Top Button with Circular Scroll Meter ── */
function FloatingScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollY > 350);
      if (totalScroll > 0) {
        setProgress(Math.min(100, Math.max(0, (scrollY / totalScroll) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-[var(--rule)] shadow-xl flex items-center justify-center text-ink transition-all duration-300 group hover:scale-110 hover:border-teal hover:text-teal ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="rgba(11, 16, 38, 0.08)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="#0a7a8c"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out"
        />
      </svg>
      <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:-translate-y-0.5">
        arrow_upward
      </span>
    </button>
  );
}

/* ── Main App Layout with Scroll Reveal Engine ── */
export default function Portfolio() {
  useEffect(() => {
    // Initial reveal trigger for elements in viewport
    const revealElements = () => {
      const targets = document.querySelectorAll(".reveal-init, .reveal-scale-init");
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.88) {
          if (el.classList.contains("reveal-init")) {
            el.classList.add("reveal-active");
          }
          if (el.classList.contains("reveal-scale-init")) {
            el.classList.add("reveal-scale-active");
          }
        }
      });
    };

    revealElements();
    window.addEventListener("scroll", revealElements, { passive: true });
    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-ink relative">
      <ScrollProgressBar />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingScrollTopButton />
    </div>
  );
}
