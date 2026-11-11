import React, { useState, useEffect, useRef } from 'react';
import {
    motion,
    AnimatePresence,
    LayoutGroup,
    MotionConfig,
    useScroll,
    useSpring,
    useMotionValue,
    useMotionTemplate,
    useMotionValueEvent,
} from 'framer-motion';

const sections = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const spring = { type: 'spring', stiffness: 380, damping: 30 };

/* ── Small helpers ─────────────────────────────────────────── */

// Static brand link (no letter animation on load or hover)
function Brand() {
    return (
        <a
            href="#home"
            className="font-display font-extrabold text-sm sm:text-base tracking-tight text-ink uppercase px-2 py-1 flex items-center gap-2 hover:text-teal transition-colors"
        >
            <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-teal animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-teal" />
            </span>
            <span>Sai Koemsean</span>
        </a>
    );
}

// Button that is gently pulled toward the cursor
function MagneticButton({ children, className, ...props }) {
    const ref = useRef(null);
    const x = useSpring(0, { stiffness: 250, damping: 15 });
    const y = useSpring(0, { stiffness: 250, damping: 15 });

    const handleMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
    };
    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            whileTap={{ scale: 0.92 }}
            className={className}
            {...props}
        >
            {children}
        </motion.a>
    );
}

// Hamburger that morphs into an X
function MenuIcon({ open }) {
    const line = 'absolute left-1/2 h-[2px] w-4 -ml-2 rounded-full bg-ink';
    return (
        <span className="relative block w-4 h-4">
            <motion.span className={line} style={{ top: 3 }} animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }} transition={spring} />
            <motion.span className={line} style={{ top: 7.5 }} animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.15 }} />
            <motion.span className={line} style={{ top: 12 }} animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }} transition={spring} />
        </span>
    );
}

/* ── Nav ───────────────────────────────────────────────────── */

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [hovered, setHovered] = useState(null);

    // Cursor spotlight inside the glass
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);
    const spotlight = useMotionTemplate`radial-gradient(140px circle at ${mouseX}px ${mouseY}px, rgba(10,122,140,0.22), transparent 70%)`;
    const [spotOn, setSpotOn] = useState(false);

    // Hide when scrolling down, reveal when scrolling up
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, 'change', (latest) => {
        const prev = scrollY.getPrevious() ?? 0;
        setHidden(latest > prev && latest > 160);
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            // Determine active section
            const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPos = window.scrollY + 200;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const handleNavMouseMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
    };

    const pillTarget = hovered ?? activeSection;

    return (
        <MotionConfig reducedMotion="user">
            <motion.header
                initial={{ y: -120, opacity: 0 }}
                animate={{ y: hidden && !menuOpen ? -120 : 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
                <motion.nav
                    initial={{ scale: 0.85 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    onMouseMove={handleNavMouseMove}
                    onMouseEnter={() => setSpotOn(true)}
                    onMouseLeave={() => {
                        setSpotOn(false);
                        setHovered(null);
                    }}
                    className={`group/nav relative pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3 sm:px-5 rounded-full
                        backdrop-blur-2xl backdrop-saturate-[1.8] border transition-[padding,background-color,box-shadow,border-color] duration-500
                        ${scrolled
                            ? 'py-1.5 bg-white/60 border-white/75 shadow-[0_12px_40px_-12px_rgba(11,16,38,0.22),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_-1px_0_0_rgba(255,255,255,0.3)]'
                            : 'py-2 bg-white/50 border-white/65 shadow-[0_8px_32px_-12px_rgba(11,16,38,0.15),inset_0_1px_0_0_rgba(255,255,255,0.85),inset_0_-1px_0_0_rgba(255,255,255,0.2)]'
                        }`}
                >
                    {/* Glass decoration layer (clipped to the pill) */}
                    <span aria-hidden className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                        {/* Top specular gradient */}
                        <span className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/5 to-transparent" />
                        {/* Cursor spotlight */}
                        <motion.span
                            className="absolute inset-0"
                            style={{ background: spotlight }}
                            animate={{ opacity: spotOn ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Periodic light sweep */}
                        <motion.span
                            className="absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                            initial={{ left: '-30%' }}
                            animate={{ left: '130%' }}
                            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 6, delay: 1.2 }}
                        />
                    </span>

                    {/* Brand */}
                    <div className="relative">
                        <Brand />
                    </div>

                    {/* Desktop Navigation Links */}
                    <LayoutGroup id="nav">
                        <motion.div
                            className="relative hidden md:flex items-center gap-1 text-[13px] font-semibold text-ink/80"
                            initial="hidden"
                            animate="show"
                            variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } } }}
                        >
                            {sections.map((item) => {
                                const id = item.href.replace('#', '');
                                const isActive = activeSection === id;
                                const showPill = pillTarget === id;
                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onMouseEnter={() => setHovered(id)}
                                        variants={{
                                            hidden: { opacity: 0, y: -12 },
                                            show: { opacity: 1, y: 0, transition: spring },
                                        }}
                                        className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-200 ${isActive ? 'text-teal' : 'hover:text-ink'
                                            }`}
                                    >
                                        {/* Liquid pill that slides between links */}
                                        {showPill && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 -z-0 rounded-full bg-white/80 border border-white/90 shadow-[0_4px_14px_-4px_rgba(10,122,140,0.3),inset_0_1px_0_rgba(255,255,255,1)]"
                                                transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                        {/* Active dot */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-dot"
                                                className="absolute left-1/2 -bottom-0.5 -ml-[2px] w-1 h-1 rounded-full bg-teal z-10"
                                                transition={spring}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </LayoutGroup>

                    {/* Right CTA */}
                    <div className="relative flex items-center gap-2">
                        <MagneticButton
                            href="#contact"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.65, ...spring }}
                            className="group/cta relative overflow-hidden hidden sm:inline-flex items-center gap-1.5 bg-ink text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[0_6px_20px_-6px_rgba(11,16,38,0.5)]"
                        >
                            {/* Fill that rises on hover */}
                            <span className="absolute inset-0 bg-teal translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full" />
                            <span className="relative">Contact</span>
                            <span className="relative material-symbols-outlined text-[14px] transition-transform duration-300 group-hover/cta:rotate-45">
                                arrow_outward
                            </span>
                        </MagneticButton>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setMenuOpen(!menuOpen)}
                            whileTap={{ scale: 0.85 }}
                            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/50 border border-white/70 hover:bg-white/80 transition-colors focus:outline-none"
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            <MenuIcon open={menuOpen} />
                        </motion.button>
                    </div>
                </motion.nav>
            </motion.header>

            {/* Mobile Navigation Overlay — circular reveal from the menu button */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ clipPath: 'circle(0% at 92% 5%)' }}
                        animate={{ clipPath: 'circle(150% at 92% 5%)' }}
                        exit={{ clipPath: 'circle(0% at 92% 5%)' }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 bg-ink/90 backdrop-blur-2xl text-paper md:hidden flex flex-col justify-between p-8 pt-28 overflow-hidden"
                    >
                        {/* Ambient glow blobs */}
                        <motion.div
                            aria-hidden
                            className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-teal/40 blur-3xl"
                            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            aria-hidden
                            className="absolute bottom-10 -right-16 w-64 h-64 rounded-full bg-gold/20 blur-3xl"
                            animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <motion.div
                            className="relative flex flex-col gap-6"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={{
                                show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
                                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                            }}
                        >
                            <motion.span
                                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                                className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal"
                            >
                                Navigation
                            </motion.span>
                            <nav className="flex flex-col gap-4">
                                {sections.map((item, i) => (
                                    <div key={item.label} className="overflow-hidden">
                                        <motion.a
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            variants={{
                                                hidden: { y: '110%', rotate: 4 },
                                                show: { y: 0, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } },
                                            }}
                                            className="group font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-paper hover:text-gold transition-colors flex items-center justify-between"
                                        >
                                            <span className="flex items-baseline gap-3">
                                                <span className="text-xs font-mono text-ink-light">0{i + 1}</span>
                                                {item.label}
                                            </span>
                                            <span className="material-symbols-outlined text-2xl text-ink-light group-hover:text-gold group-hover:translate-x-1 transition-all">
                                                arrow_forward
                                            </span>
                                        </motion.a>
                                    </div>
                                ))}
                            </nav>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.55 } }}
                            exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
                            className="relative border-t border-white/10 pt-6 flex flex-col gap-4"
                        >
                            <div className="text-xs text-ink-light font-mono">
                                sai.koemsean@gmail.com · Kampong Thom, KH
                            </div>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="cut-btn-solid justify-center text-center w-full"
                            >
                                <span>Get In Touch</span>
                                <span className="material-symbols-outlined text-base">mail</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </MotionConfig>
    );
}
