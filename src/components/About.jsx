import React from 'react';

const facts = [
    {
        num: '3rd',
        label: 'Academic Year',
        desc: 'PIKT · Kampong Thom Province',
    },
    {
        num: '03',
        label: 'Core Disciplines',
        desc: 'Frontend · Data · UI/UX Design',
    },
    {
        num: '05+',
        label: 'Projects Completed',
        desc: 'Web apps, Telegram bots & designs',
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
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--rule)]">
                    <div>
                        <div className="section-meta-label mb-2">01 / Profile</div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-ink">
                            About Me
                        </h2>
                    </div>
                    <div className="text-sm font-mono text-ink-soft sm:text-right">
                        <span>Information Technology · PIKT</span>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Editorial Narrative */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-snug">
                            Bridging analytical data with clean, modern interfaces.
                        </h3>

                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            I am a 3rd year Information Technology student at the Polytechnic Institute of Kampong Thom Province (PIKT), passionate about the intersection of data analysis, software development, and intuitive visual design.
                        </p>

                        <p className="text-sm sm:text-base text-ink-soft/90 leading-relaxed">
                            I believe great web applications don't just display information — they communicate clearly. Whether optimizing database queries, building responsive interfaces with React and Tailwind, or conceptualizing layouts in Figma, I focus on simplicity, clarity, and precision.
                        </p>

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

                    {/* Right Fact Cards with HUD Brackets */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {facts.map((fact, index) => (
                            <div key={index} className="hud p-5 flex flex-col justify-between min-h-[140px]">
                                <div className="flex items-baseline justify-between">
                                    <span className="font-display font-extrabold text-4xl text-ink">
                                        {fact.num}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
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
