import React from 'react';

const skillCategories = [
    {
        num: '01',
        title: 'Frontend Dev',
        subtitle: 'Web Interfaces & Applications',
        desc: 'Building performant, pixel-perfect, and fully responsive user interfaces using modern React ecosystem tools.',
        tags: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'Vite'],
        icon: 'terminal',
    },
    {
        num: '02',
        title: 'Data Analysis',
        subtitle: 'Queries, Logic & Visualization',
        desc: 'Structuring raw datasets, running queries, and turning numbers into actionable and visual narratives.',
        tags: ['Java', 'SQL / MySQL', 'Data Visualization', 'Data Processing', 'Analytics'],
        icon: 'analytics',
    },
    {
        num: '03',
        title: 'UI/UX Design',
        subtitle: 'Architecture & Visual Systems',
        desc: 'Crafting user journeys, interactive wireframes, and design systems with a sharp eye for typography and hierarchy.',
        tags: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems', 'Responsive UI'],
        icon: 'palette',
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 sm:py-32 px-[var(--gutter)] border-t border-[var(--rule)] relative bg-[var(--paper)]">
            <div className="max-w-[var(--max)] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--rule)]">
                    <div>
                        <div className="section-meta-label mb-2">02 / Expertise</div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-ink">
                            Skills & Stack
                        </h2>
                    </div>
                    <div className="text-sm font-mono text-ink-soft sm:text-right">
                        <span>Tools, frameworks & workflows</span>
                    </div>
                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((skill) => (
                        <div
                            key={skill.num}
                            className="hud burn p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            <div>
                                {/* Top bar of card */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-mono text-xs font-semibold text-teal tracking-[0.16em]">
                                        {skill.num} //
                                    </span>
                                    <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-lg">
                                            {skill.icon}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-tight mb-1">
                                    {skill.title}
                                </h3>
                                <div className="text-xs font-mono text-ink-soft mb-4">
                                    {skill.subtitle}
                                </div>

                                <p className="text-sm text-ink-soft/90 leading-relaxed mb-8">
                                    {skill.desc}
                                </p>
                            </div>

                            {/* Tags list */}
                            <div className="border-t border-[var(--rule)] pt-5">
                                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-soft/70 mb-3">
                                    Technologies
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-mono text-ink-soft bg-white/70 border border-[var(--rule)] px-2.5 py-1 rounded-sm group-hover:border-teal/30 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
