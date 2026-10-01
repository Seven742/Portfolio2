import React from 'react';

const facts = [
    {
        num: '3rd',
        label: 'Academic Year',
        desc: 'PIKT · Kampong Thom Province',
    },
    {
        num: 'Full',
        label: 'Stack Profile',
        desc: 'Next.js · React · Express · APIs',
    },
    {
        num: '06+',
        label: 'Projects Built',
        desc: 'Full-stack platforms, APIs & UI',
    },
    {
        num: 'KH',
        label: 'Location',
        desc: 'Kampong Thom, Cambodia',
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 sm:py-32 px-[var(--gutter)] border-t border-[var(--rule)] relative bg-[var(--paper)]">
            <div className="max-w-[var(--max)] mx-auto">
                {/* Section Header with Scroll Reveal */}
                <div className="reveal-init flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--rule)]">
                    <div>
                        <div className="section-meta-label mb-2">01 / Profile</div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-ink">
                            About Me
                        </h2>
                    </div>
                    <div className="text-sm font-mono text-ink-soft sm:text-right">
                        <span>Full-Stack Developer · PIKT Kampong Thom</span>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Editorial Narrative with Scroll Reveal */}
                    <div className="reveal-init lg:col-span-7 flex flex-col gap-6">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-snug">
                            Architecting modern full-stack systems with Next.js, React, and Express.
                        </h3>

                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            I am a 3rd year Information Technology student at the Polytechnic Institute of Kampong Thom Province (PIKT). Having cultivated strong expertise in frontend design and data analysis, I have leveled up into <span className="text-ink font-semibold">Full-Stack Development</span> — building robust, end-to-end web applications with Next.js, React.js, and Express.js.
                        </p>

                        <p className="text-sm sm:text-base text-ink-soft/90 leading-relaxed">
                            From architecting scalable REST APIs, middleware, and database logic with Node.js & Express, to crafting responsive, SEO-ready interfaces with Next.js and Tailwind CSS, I bridge clean server-side code with intuitive client-side experiences.
                        </p>

                        {/* Full-Stack Architecture Mini-HUD */}
                        <div className="reveal-scale-init grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-3 bg-white/70 border border-[var(--rule)] rounded-sm hover:border-teal/40 hover:-translate-y-1 transition-all">
                                <div className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold mb-1">Frontend</div>
                                <div className="text-xs font-semibold text-ink">Next.js & React</div>
                                <div className="text-[11px] text-ink-soft">SSR, App Router, Tailwind</div>
                            </div>
                            <div className="p-3 bg-white/70 border border-[var(--rule)] rounded-sm hover:border-teal/40 hover:-translate-y-1 transition-all">
                                <div className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold mb-1">Backend</div>
                                <div className="text-xs font-semibold text-ink">Express.js & Node</div>
                                <div className="text-[11px] text-ink-soft">REST APIs, Routing, Auth</div>
                            </div>
                            <div className="p-3 bg-white/70 border border-[var(--rule)] rounded-sm hover:border-teal/40 hover:-translate-y-1 transition-all">
                                <div className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold mb-1">Data & UI</div>
                                <div className="text-xs font-semibold text-ink">SQL & Figma</div>
                                <div className="text-[11px] text-ink-soft">MySQL, Design Systems</div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                            <a href="#projects" className="cut-btn-solid">
                                <span>Explore My Work</span>
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </a>
                            <a
                                href="https://github.com/Seven742"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cut-btn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                            <a href="#contact" className="cut-btn">
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Fact Cards with Staggered Scroll Reveal */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {facts.map((fact, index) => (
                            <div
                                key={index}
                                className="reveal-scale-init hud p-5 flex flex-col justify-between min-h-[140px] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-baseline justify-between">
                                    <span className="font-display font-extrabold text-4xl text-ink">
                                        {fact.num}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-teal font-semibold mb-1">
                                        {fact.label}
                                    </div>
                                    <div className="text-xs text-ink-soft">
                                        {fact.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
