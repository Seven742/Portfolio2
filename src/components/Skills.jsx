import React from 'react';

const skillCategories = [
    {
        num: '01',
        title: 'Full-Stack & Frontend',
        subtitle: 'Next.js, React.js & Modern Web Systems',
        desc: 'Building performant, SEO-optimized, and dynamic web applications using Next.js (App Router, SSR/SSG), React.js, and modern React architectures.',
        tags: ['Next.js', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'React Native', 'HTML5 / CSS3'],
        icon: 'layers',
    },
    {
        num: '02',
        title: 'Backend & APIs',
        subtitle: 'Express.js, Node.js & Database Architecture',
        desc: 'Architecting scalable server-side applications, RESTful APIs, routing middleware, authentication, and database schemas with SQL & MySQL.',
        tags: ['Express.js', 'Node.js', 'RESTful APIs', 'SQL / MySQL', 'Middleware & Auth', 'Database Design', 'Java'],
        icon: 'terminal',
    },
    {
        num: '03',
        title: 'UI/UX & Analytics',
        subtitle: 'Design Systems & Information Flow',
        desc: 'Crafting user journeys, interactive wireframes, and cohesive design systems in Figma, combined with analytical data querying and visualization.',
        tags: ['Figma', 'UI/UX Design', 'Design Systems', 'Wireframing', 'Data Visualization', 'Prototyping'],
        icon: 'palette',
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 sm:py-32 px-[var(--gutter)] border-t border-[var(--rule)] relative bg-[var(--paper)]">
            <div className="max-w-[var(--max)] mx-auto">
                {/* Section Header with Scroll Reveal */}
                <div className="reveal-init flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--rule)]">
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

                {/* 3 Column Grid with Staggered Scroll Reveal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((skill, index) => {
                        const proficiencies = ['95%', '92%', '88%'];
                        const prof = proficiencies[index] || '90%';

                        return (
                            <div
                                key={skill.num}
                                className="reveal-scale-init hud burn p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div>
                                    {/* Top bar of card */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-mono text-xs font-semibold text-teal tracking-[0.16em]">
                                            {skill.num} //
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300 shadow-sm group-hover:rotate-6">
                                            <span className="material-symbols-outlined text-xl">
                                                {skill.icon}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-tight mb-1 group-hover:text-teal transition-colors">
                                        {skill.title}
                                    </h3>
                                    <div className="text-xs font-mono text-ink-soft mb-4">
                                        {skill.subtitle}
                                    </div>

                                    <p className="text-sm text-ink-soft/90 leading-relaxed mb-6">
                                        {skill.desc}
                                    </p>

                                    {/* Capability Level Bar */}
                                    <div className="mb-6 p-3 bg-white/60 border border-[var(--rule)] rounded-sm">
                                        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                                            <span className="text-ink-soft uppercase font-semibold">Specialization Level</span>
                                            <span className="text-teal font-bold">{prof}</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-teal to-gold rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: prof }}
                                            />
                                        </div>
                                    </div>
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
                                                className="text-xs font-mono text-ink-soft bg-white/80 border border-[var(--rule)] px-2.5 py-1 rounded-sm group-hover:border-teal/40 hover:bg-teal hover:text-white transition-all duration-200 cursor-default"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
