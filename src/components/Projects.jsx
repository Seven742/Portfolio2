import React from 'react';
import Poster from '../assets/Poster.png';
import Poster2 from '../assets/Poster2.png';
import weatherImg from '../assets/App.png';
import University from '../assets/Kingster.png';
import Posterbot from '../assets/Posterbot.png';

const projects = [
    {
        num: '01',
        title: 'E-commerce Website',
        category: 'Web Application',
        desc: 'A full-featured React e-commerce web platform featuring product catalog browsing, dynamic shopping cart, and a custom administrative dashboard for store inventory control.',
        tech: ['React.js', 'Tailwind CSS', 'Admin Dashboard', 'JavaScript'],
        image: Poster,
        github: 'https://github.com/Seven742/E-commerce1',
        primaryAction: {
            label: 'View Code',
            href: 'https://github.com/Seven742/E-commerce1',
            icon: 'code',
        },
    },
    {
        num: '02',
        title: 'Personal Portfolio',
        category: 'Frontend & UI',
        desc: 'A responsive personal portfolio website built with React, focusing on clean typography, smooth transitions, and seamless responsive design across all devices.',
        tech: ['React.js', 'CSS Systems', 'Responsive Design'],
        image: Poster2,
        primaryAction: {
            label: 'Live Preview',
            href: 'https://personal-portfolio-olive-six.vercel.app',
            icon: 'arrow_outward',
        },
    },
    {
        num: '03',
        title: 'E-commerce Mobile App',
        category: 'Mobile Application',
        desc: 'A cross-platform React Native e-commerce mobile application featuring product catalog filtering, interactive cart state, and a modern mobile-first interface.',
        tech: ['React Native', 'Mobile UI', 'JavaScript', 'State Management'],
        image: weatherImg,
        github: 'https://github.com/Seven742/E-commerce-app',
        primaryAction: {
            label: 'View Code',
            href: 'https://github.com/Seven742/E-commerce-app',
            icon: 'code',
        },
    },
    {
        num: '04',
        title: 'University Portal',
        category: 'Web Design',
        desc: 'An educational institution website built with React and Tailwind CSS, providing clean course catalog browsing, admissions layout, and modern responsive structuring.',
        tech: ['React.js', 'Tailwind CSS', 'Web Design'],
        image: University,
        github: 'https://github.com/Seven742/University-app',
        primaryAction: {
            label: 'View Code',
            href: 'https://github.com/Seven742/University-app',
            icon: 'code',
        },
    },
    {
        num: '05',
        title: 'Khmer Learning Bot',
        category: 'Telegram Assistant',
        desc: 'An automated Telegram chatbot created to help users study and practice the Khmer language through interactive conversational exercises and lessons.',
        tech: ['Telegram Bot API', 'JavaScript', 'Chatbot Logic'],
        image: Posterbot,
        primaryAction: {
            label: 'Launch Bot',
            href: 'https://t.me/KHLearningbot',
            icon: 'smart_toy',
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 px-[var(--gutter)] border-t border-[var(--rule)] relative bg-[var(--paper)]">
            <div className="max-w-[var(--max)] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--rule)]">
                    <div>
                        <div className="section-meta-label mb-2">03 / Portfolio</div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-ink">
                            Selected Projects
                        </h2>
                    </div>
                    <div className="text-sm font-mono text-ink-soft sm:text-right">
                        <span>Web Apps · Mobile · Chatbots</span>
                    </div>
                </div>

                {/* Projects Grid: 2 columns on medium/large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((item) => (
                        <article
                            key={item.num}
                            className="hud burn flex flex-col justify-between overflow-hidden group transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Browser Header Bar */}
                            <div className="flex items-center justify-between px-4 py-2.5 bg-black/[0.04] border-b border-[var(--rule)]">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-soft bg-white/80 px-2 py-0.5 rounded-full border border-black/5">
                                    {item.category}
                                </span>
                                <span className="font-mono text-xs font-semibold text-teal">
                                    {item.num}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                                <img
                                    src={item.image}
                                    alt={`${item.title} preview`}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Body info */}
                            <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-tight group-hover:text-teal transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-ink-soft leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {item.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] font-mono text-ink-soft bg-white/80 border border-[var(--rule)] px-2 py-0.5 rounded-sm"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--rule)]">
                                        <a
                                            href={item.primaryAction.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cut-btn-solid burn text-xs py-2 px-4 group/btn"
                                        >
                                            <span>{item.primaryAction.label}</span>
                                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                                                {item.primaryAction.icon}
                                            </span>
                                        </a>

                                        {item.github && item.primaryAction.href !== item.github && (
                                            <a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cut-btn burn text-xs py-2 px-3.5"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                                <span>Source</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
