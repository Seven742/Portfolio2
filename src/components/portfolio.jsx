import React, { useState, useEffect, } from "react";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ContourHeroBg from "./ContourHeroBg.jsx";
import profileImg from "../assets/Koem.png";

/* ── Clean Profile Portrait Stage ── */
function ProfileStage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] flex items-center justify-center select-none py-4">
        {/* Grounding Shadow */}
        <div
          className="absolute -bottom-2 w-4/5 h-8 rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(11, 16, 38, 0.18) 0%, transparent 75%)",
            filter: "blur(12px)",
          }}
        />

        <picture className="w-full max-w-[320px] sm:max-w-[360px] h-auto block relative z-10">
          <img
            src={profileImg}
            alt="Sai Koemsean"
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            style={{
              filter: "drop-shadow(0 20px 32px rgba(10, 122, 140, 0.22)) drop-shadow(0 4px 12px rgba(11, 16, 38, 0.10))",
            }}
          />
        </picture>
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

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[90vh] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-[var(--gutter)] flex flex-col justify-between relative overflow-hidden bg-[var(--paper)]"
    >
      {/* Dynamic 3D WebGL Contour Wave Flow Field Background */}
      <ContourHeroBg />

      {/* Subtle bottom gradient to blend into paper surface */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--paper)] to-transparent pointer-events-none z-[1]" />

      <div className="max-w-[var(--max)] mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
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
              <span>Full-Stack Developer </span>
              <span className="w-8 h-px bg-teal hidden sm:block" />
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
      <div className="max-w-[var(--max)] mx-auto w-full pt-8 sm:pt-10 flex items-center justify-between text-xs font-mono text-ink-soft border-t border-[var(--rule-subtle)] relative z-10">
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
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-[var(--rule)] shadow-xl flex items-center justify-center text-ink transition-all duration-300 group hover:scale-110 hover:border-teal hover:text-teal ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
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
