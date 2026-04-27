import React from 'react';

const COLORS = {
    bg: '#000000',
    surface: '#080808',
    border: '#1a1a1a',
    accent: '#4df0c0',
    accent2: '#4db8f0',
    muted: '#5a6478',
    white: '#f0f4ff',
};

const stats = [
    { num: '3rd', label: 'Year at PIKT' },
    { num: 3, label: 'Disciplines' },
    { icon: 'all_inclusive', label: 'Curiosity' },
    { num: 'KH', label: 'Kampong Thom' },
];

function SectionLabel({ children }) {
    return (
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.accent, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: COLORS.accent }} />
            {children}
        </div>
    );
}

function CtaButton({ href, children }) {
    const [hovered, setHovered] = React.useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: hovered ? COLORS.accent2 : COLORS.accent,
                color: COLORS.bg,
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '15px 26px',
                textDecoration: 'none',
                fontWeight: 600,
                transform: hovered ? 'translateY(-2px)' : 'none',
                transition: 'all 0.2s ease',
            }}
        >
            {children}
        </a>
    );
}

function StatCard({ num, icon, label }) {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered ? '#161b22' : COLORS.surface,
                border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
                padding: '28px 24px',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: COLORS.accent, lineHeight: 1, marginBottom: 10 }}>
                {icon ? <span className="material-symbols-outlined" style={{ fontSize: 48 }}>{icon}</span> : num}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.muted }}>{label}</div>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="about-section" style={{ padding: '140px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <style>{`
                @media (max-width: 768px) {
                    .about-section {
                        grid-template-columns: 1fr !important;
                        padding: clamp(60px, 8vw, 120px) clamp(24px, 5vw, 40px) !important;
                    }
                    .about-stat-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            <div>
                <SectionLabel>About Me</SectionLabel>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(34px,3.5vw,52px)', lineHeight: 1.1, color: COLORS.white, marginBottom: 26 }}>
                    Crafting with <em style={{ color: COLORS.accent, fontStyle: 'italic' }}>data</em> & design.
                </h2>
                <p style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: 1.9, color: COLORS.muted, marginBottom: 14 }}>
                    I'm a 3rd year Information Technology student at the Polytechnic Institute Of Kampong Thom Province (PIKT), passionate about the intersection of data, design, and technology.
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: 1.9, color: COLORS.muted, marginBottom: 32 }}>
                    I believe great interfaces tell stories — and great data does too. My work bridges analytical thinking with visual communication.
                </p>
                <CtaButton href="#contact">Get in Touch →</CtaButton>
            </div>
            <div className="about-stat-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </section>
    );
}

