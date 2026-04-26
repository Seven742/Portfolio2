import React, { useState } from 'react';

const COLORS = {
    bg: '#000000',
    card: '#0d0d0d',
    border: '#1a1a1a',
    accent: '#4df0c0',
    accent2: '#4db8f0',
    accent3: '#f0c04d',
    muted: '#5a6478',
    white: '#f0f4ff',
};

const skills = [
    {
        icon: '⬡',
        title: 'Frontend Dev',
        desc: 'Building performant, pixel-perfect interfaces with React, HTML, CSS and JavaScript.',
        tags: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
        color: COLORS.accent,
    },
    {
        icon: '◎',
        title: 'Data Analyst',
        desc: 'Turning messy datasets into clear narratives through analysis and visualization.',
        tags: ['Python', 'Pandas', 'SQL', 'Matplotlib'],
        color: COLORS.accent2,
    },
    {
        icon: '◈',
        title: 'UI/UX Design',
        desc: 'Designing intuitive interfaces and experiences with strong visual hierarchy.',
        tags: ['Figma', 'Prototyping', 'Research', 'Design Systems'],
        color: COLORS.accent3,
    },
];

function SectionLabel({ children }) {
    return (
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.accent, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: COLORS.accent }} />
            {children}
        </div>
    );
}

function SkillCard({ icon, title, desc, tags, color }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered ? '#14181f' : COLORS.card,
                border: `1px solid ${hovered ? color : COLORS.border}`,
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <div style={{ fontSize: 36, marginBottom: 18, color }}>{icon}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: '0.04em', color: COLORS.white, marginBottom: 16 }}>{title}</div>
                <p style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: 1.8, color: COLORS.muted, marginBottom: 24 }}>{desc}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tags.map((tag, index) => (
                    <span key={index} style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 12px', border: `1px solid ${hovered ? color + '55' : COLORS.border}`, color: hovered ? color : COLORS.muted, transition: 'all 0.3s ease' }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="skills-section" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 56px)' }}>
            <style>{`
                @media (max-width: 1024px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .skills-grid > div {
                        width: 100% !important;
                    }
                }
            `}</style>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <SectionLabel>What I Do</SectionLabel>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px,7vw,100px)', lineHeight: 1, color: COLORS.white, marginBottom: 56 }}>
                    Skills & Expertise
                </h2>
                <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
