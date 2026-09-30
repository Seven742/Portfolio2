import React, { useState, useEffect } from 'react';

const sections = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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

    return (
        <>
            <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
                <nav
                    className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 py-2 px-3 sm:px-5 rounded-full transition-all duration-300 ${scrolled
                            ? 'bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_10px_30px_-10px_rgba(11,16,38,0.15)]'
                            : 'bg-white/75 backdrop-blur-md border border-[rgba(11,16,38,0.08)] shadow-[0_4px_20px_-8px_rgba(11,16,38,0.06)]'
                        }`}
                >
                    {/* Brand */}
                    <a
                        href="#home"
                        className="font-display font-extrabold text-sm sm:text-base tracking-tight text-ink uppercase px-2 py-1 flex items-center gap-2 group hover:text-teal transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal group-hover:scale-125 transition-transform" />
                        <span>Sai Koemsean</span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 text-[13px] font-medium text-ink-soft">
                        {sections.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '');
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`px-3 py-1.5 rounded-full transition-all duration-200 ${isActive
                                            ? 'text-teal font-semibold bg-teal/10'
                                            : 'hover:text-ink hover:bg-black/5'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>

                    {/* Right CTA */}
                    <div className="flex items-center gap-2">
                        <a
                            href="#contact"
                            className="hidden sm:inline-flex items-center gap-1.5 bg-ink text-white hover:bg-teal text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-colors duration-200"
                        >
                            <span>Contact</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-ink hover:bg-black/5 transition-colors focus:outline-none"
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="material-symbols-outlined text-xl">
                                {menuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl text-paper md:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col gap-6">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-teal">Navigation</span>
                    <nav className="flex flex-col gap-4">
                        {sections.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-paper hover:text-gold transition-colors flex items-center justify-between"
                            >
                                <span>{item.label}</span>
                                <span className="material-symbols-outlined text-2xl text-ink-light">arrow_forward</span>
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
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
                </div>
            </div>
        </>
    );
}
