import { useState, useEffect, useRef } from "react";
import Nav from './Nav.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import profileImg from "../assets/Koem.png";
import profileImgMobile from "../assets/Koem.png";
const COLORS = {
  bg: "#000000",
  surface: "#080808",
  card: "#0d0d0d",
  border: "#1a1a1a",
  accent: "#4df0c0",
  accent2: "#4db8f0",
  accent3: "#f0c04d",
  text: "#dce4f0",
  muted: "#5a6478",
  white: "#f0f4ff",
};


/* ── Hooks ── */
// Ref-based mouse position — zero re-renders, RAF-driven DOM updates only
function useMousePosition() {
  const posRef = useRef({ x: -100, y: -100 });
  useEffect(() => {
    const h = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return posRef; // consumers read posRef.current inside RAF loops
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useScrollDirection() {
  const [dir, setDir] = useState("up");
  const lastScroll = useRef(0);
  useEffect(() => {
    const h = () => {
      const current = window.scrollY;
      if (current < 10) { setDir("up"); return; }
      if (current > lastScroll.current && current > 100) setDir("down");
      else if (current < lastScroll.current) setDir("up");
      lastScroll.current = current;
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return dir;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth <= 768);
    h();
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return isMobile;
}

/* ── Cursor ── */
function Cursor({ mouseRef }) {
  const dotEl = useRef(null);
  const ringEl = useRef(null);
  const ring = useRef({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef();

  useEffect(() => {
    const handleMouseOver = (e) => {
      const isInteractive = !!e.target.closest('a, button, [role="button"], .interactive, [onmouseenter]');
      setHovered(isInteractive);
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  useEffect(() => {
    const animate = () => {
      const { x, y } = mouseRef.current;
      // dot snaps instantly
      if (dotEl.current) {
        dotEl.current.style.left = x + "px";
        dotEl.current.style.top = y + "px";
      }
      // ring lags behind smoothly
      ring.current.x += (x - ring.current.x) * 0.1;
      ring.current.y += (y - ring.current.y) * 0.1;
      if (ringEl.current) {
        ringEl.current.style.left = ring.current.x + "px";
        ringEl.current.style.top = ring.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouseRef]);

  return (
    <>
      <div ref={dotEl} className="cursor-el" style={{
        position: "fixed", width: 8, height: 8,
        background: COLORS.accent, borderRadius: "50%",
        pointerEvents: "none", zIndex: 9999,
        transform: `translate(-50%,-50%) scale(${hovered ? 0 : 1})`,
        opacity: hovered ? 0 : 1,
        mixBlendMode: "difference",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }} />
      <div ref={ringEl} className="cursor-el" style={{
        position: "fixed", width: 32, height: 32,
        border: `1px solid ${COLORS.accent}`,
        borderRadius: "50%", pointerEvents: "none", zIndex: 9998,
        transform: `translate(-50%,-50%) scale(${hovered ? 2.5 : 1})`,
        opacity: hovered ? 0.2 : 0.45,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
      }} />
    </>
  );
}

/* ── FadeIn wrapper ── */
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.85s ${delay}s ease, transform 0.85s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    if (isNaN(target)) { setVal(target); return; }
    let start = 0;
    const step = () => {
      start += Math.ceil((target - start) / 8) || 1;
      setVal(start);
      if (start < target) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{isNaN(target) ? target : val}{suffix}</span>;
}

/* ── Marquee ── */
function Marquee() {
  const items = ["DATA ANALYST", "UI/UX DESIGN", "JAVA", "REACT", "SQL", "FIGMA", "FRONTEND DEV", "Information Technology"];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}`, background: COLORS.bg, padding: "18px 0", position: "relative", zIndex: 10 }}>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 35s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", color: "#6e778a", padding: "0 40px", display: "flex", alignItems: "center", gap: 40 }}>
            {item}<span style={{ color: COLORS.accent, fontSize: 14 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}



/* ── Hero ── */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);
  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 1s ${delay}s ease, transform 1s ${delay}s ease`,
  });

  return (
    <section id="home" className="hero-section" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 8%", position: "relative", overflow: "hidden" }}>
      {/* Grid BG */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(77,240,192,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(77,240,192,0.03) 1px,transparent 1px)`,
        backgroundSize: "60px 60px",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%,black 0%,transparent 100%)",
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%,black 0%,transparent 100%)",
        zIndex: 0,
      }} />

      <div className="hero-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ flex: 1 }} className="hero-text">
          <div style={{ ...anim(0.1), fontFamily: "monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 30, height: 1, background: COLORS.accent }} /> Portfolio · Information Technology · PIKT
          </div>
          <h1 style={{ ...anim(0.3), fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(80px, 15vw, 180px)", lineHeight: 0.82, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
            <span style={{ color: COLORS.white }}>Sai</span><br />
            <span style={{ color: COLORS.accent }}>Koemsean</span>
          </h1>
          <p style={{ ...anim(0.5), fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(20px, 3.5vw, 42px)", color: COLORS.muted, marginTop: 24, letterSpacing: "0.02em" }}>
            3rd Year Information Technology Student
          </p>
        </div>

        <div className="hero-image-container" style={{ ...anim(0.4), position: "relative", flex: "0 0 55%", display: "flex", justifyContent: "center", transform: "translateY(60px)" }}>
          {/* Subtle Glow behind image */}
          <div style={{ position: "absolute", inset: "0", background: `radial-gradient(circle, ${COLORS.accent}12 0%, transparent 70%)`, filter: "blur(50px)", zIndex: -1 }} />
          <picture style={{ width: "70%", height: "auto" }}>
            <source media="(max-width: 768px)" srcSet={profileImgMobile} />
            <img src={profileImg} alt="Sai Koemsean" style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(70, 159, 144, 0.4))" }} />
          </picture>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="hero-bottom" style={{ position: "absolute", bottom: 60, left: "8%", right: "8%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <p className="hero-desc" style={{ ...anim(0.7), maxWidth: 280, fontFamily: "monospace", fontSize: 12, lineHeight: 1.8, color: COLORS.muted, textAlign: "left" }}>
          Turning raw data into meaningful stories — through analysis, interfaces, and design. Based in Kampong Thom, Cambodia.
        </p>
        <div className="hero-scroll-wrapper">
          <ScrollIndicator loaded={loaded} />
        </div>
      </div>
    </section>
  );
}

function ScrollIndicator({ loaded }) {
  return (
    <div style={{
      opacity: loaded ? 1 : 0,
      transform: loaded ? "translateY(0)" : "translateY(20px)",
      transition: "all 1s 1s ease",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.muted
    }}>
      <style>{`@keyframes scrollPulse{0%,100%{transform:scaleY(0.7);opacity:0.3}50%{transform:scaleY(1);opacity:1}}`}</style>
      SCROLL
      <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom,${COLORS.accent},transparent)`, transformOrigin: "top", animation: "scrollPulse 2s infinite" }} />
    </div>
  );
}
/* ── Shared ── */
function SectionLabel({ children }) {
  return (
    <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 28, height: 1, background: COLORS.accent }} />
      {children}
    </div>
  );
}

function CtaButton({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 10, background: hov ? COLORS.accent2 : COLORS.accent, color: COLORS.bg, fontFamily: "monospace", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", padding: "15px 26px", textDecoration: "none", fontWeight: 600, transform: hov ? "translateY(-2px)" : "none", transition: "all 0.2s" }}>
      {children}
    </a>
  );
}

function Divider() {
  return <div style={{ height: 1, background: COLORS.border, margin: "0 56px" }} />;
}

/* ── Root ── */
export default function Portfolio() {
  const mouseRef = useMousePosition(); // ref, not state — no re-renders
  const scrollY = useScrollY();
  const [fullscreenData, setFullscreenData] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!fullscreenData) return;
      if (e.key === 'Escape') setFullscreenData(null);
      if (e.key === 'ArrowRight' && fullscreenData.index < fullscreenData.images.length - 1) {
        setFullscreenData(prev => ({ ...prev, index: prev.index + 1 }));
      }
      if (e.key === 'ArrowLeft' && fullscreenData.index > 0) {
        setFullscreenData(prev => ({ ...prev, index: prev.index - 1 }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenData]);

  return (
    <>
      {fullscreenData && (
        <div
          className="interactive"
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClick={() => setFullscreenData(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setFullscreenData(null); }}
            style={{ position: 'absolute', top: 40, right: 40, background: 'none', border: 'none', color: COLORS.white, cursor: 'none', zIndex: 1001 }}
          >
            <span className="material-symbols-outlined interactive" style={{ fontSize: 36 }}>close</span>
          </button>

          {fullscreenData.index > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setFullscreenData(prev => ({ ...prev, index: prev.index - 1 })); }}
              style={{ position: 'absolute', left: 40, background: 'none', border: 'none', color: COLORS.white, cursor: 'none', zIndex: 1001 }}
            >
              <span className="material-symbols-outlined interactive" style={{ fontSize: 48 }}>chevron_left</span>
            </button>
          )}

          {fullscreenData.index < fullscreenData.images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setFullscreenData(prev => ({ ...prev, index: prev.index + 1 })); }}
              style={{ position: 'absolute', right: 40, background: 'none', border: 'none', color: COLORS.white, cursor: 'none', zIndex: 1001 }}
            >
              <span className="material-symbols-outlined interactive" style={{ fontSize: 48 }}>chevron_right</span>
            </button>
          )}

          <img
            src={fullscreenData.images[fullscreenData.index]}
            style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
            alt="Fullscreen"
          />
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@1,400;1,700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:${COLORS.bg};color:${COLORS.text};cursor:none;overflow-x:hidden;}
        body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:1000;opacity:0.3;}
        a{cursor:none;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:${COLORS.bg};}
        ::-webkit-scrollbar-thumb{background:${COLORS.border};}

        @media (max-width: 1024px) {
          .nav-links { gap: 20px !important; }
          .hero-section { padding: 0 5% !important; }
          .about-section, .contact-section { grid-template-columns: 1fr !important; gap: 40px !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .interactive[style*="display: grid"] { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          body { cursor: default !important; }
          .cursor-el { display: none !important; }
          .nav-container { padding: 16px 24px !important; }
          .nav-links { display: none !important; }
          .hero-content { flex-direction: column !important; text-align: center !important; }
          .hero-text { flex: none !important; margin-bottom: 40px !important; }
          .hero-image-container { flex: none !important; width: 80% !important; transform: translateY(0) !important; }
          .hero-bottom { position: static !important; margin-top: 60px !important; padding: 0 !important; flex-direction: column !important; align-items: center !important; gap: 40px !important; }
          .hero-desc { text-align: center !important; max-width: 100% !important; }
          .section-padding { padding: 100px 24px !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .about-section { padding: 100px 24px !important; }
          .contact-section { padding: 0 24px 100px !important; }
          
          .business-card { padding: 32px 20px !important; gap: 24px !important; }
          .business-header { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 16px !important; }
          .business-name { font-size: 36px !important; }
          .business-links { justify-content: center !important; flex-wrap: wrap !important; }
          .business-desc { max-width: 100% !important; text-align: center !important; }
          .business-services { align-items: center !important; }
          .business-services > div { justify-content: center !important; }
          .business-gallery-wrapper { margin: 0 -20px !important; }
          .business-gallery { padding: 0 20px !important; gap: 16px !important; }
          .business-gallery-item { flex: 0 0 240px !important; height: 320px !important; }
        }
      `}</style>
      <Cursor mouseRef={mouseRef} />
      <Nav scrollY={scrollY} />
      <Hero />
      <Marquee />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      {/* <Business setFullscreenImg={setFullscreenData} /> */}
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}
