import React, { useState, useEffect, useRef } from 'react';

const COLORS = {
    bg: '#000000',
    card: '#0d0d0d',
    border: '#1a1a1a',
    accent: '#4df0c0',
    muted: '#5a6478',
    white: '#f0f4ff',
};

const contacts = [
    { icon: 'mail', label: 'Email', value: 'saikoemsean@gmail.com', href: 'mailto:saikoemsean@gmail.com', target: '_blank' },
    { icon: 'code', label: 'GitHub', value: 'github.com/Seven742', href: 'https://github.com/Seven742', target: '_blank' },
    { icon: 'link', label: 'LinkedIn', value: 'linkedin.com/in/sai-koemsean-07a304406', href: 'https://www.linkedin.com/in/sai-koemsean-07a304406/', target: '_blank' },
    { icon: 'public', label: 'Facebook', value: 'facebook.com/saikoemsean', href: 'https://web.facebook.com/Seven3.0.1', target: '_blank' },
];


function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

function Reveal({ children, delay = 0, style = {} }) {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 0.85s ${delay}s ease, transform 0.85s ${delay}s ease`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function SectionLabel({ children }) {
    return (
        <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.accent, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: COLORS.accent }} />
            {children}
        </div>
    );
}

function ContactRow({ icon, label, value, href, target }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered ? '#101418' : COLORS.card,
                border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                transition: 'all 0.3s',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: COLORS.accent }}>{icon}</span>
                <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.muted }}>{label}</div>
                    <div style={{ fontFamily: 'monospace', fontSize: 13, color: COLORS.white, marginTop: 3 }}>{value}</div>
                </div>
            </div>
            <span style={{ color: hovered ? COLORS.accent : COLORS.muted, transform: hovered ? 'translate(2px,-2px)' : 'none', transition: 'all 0.2s', fontSize: 20 }} className="material-symbols-outlined">north_east</span>
        </a>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="contact-section" style={{ padding: '0 56px 120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <style>{`
                @media (max-width: 768px) {
                    .contact-section {
                        grid-template-columns: 1fr !important;
                        padding: clamp(80px, 10vw, 120px) clamp(24px, 5vw, 40px) !important;
                    }
                    .contact-section > div {
                        width: 100%;
                    }
                }
            `}</style>
            <Reveal>
                <SectionLabel>Contact</SectionLabel>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(64px,9vw,120px)', lineHeight: 0.88, color: COLORS.white }}>
                    Let's<br /><span style={{ color: COLORS.accent }}>Work.</span>
                </h2>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 18, color: COLORS.muted, marginTop: 20 }}>
                    Open to projects, collaborations & opportunities.
                </p>
            </Reveal>
            <Reveal delay={0.15}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {contacts.map((contact, index) => <ContactRow key={index} {...contact} />)}
                </div>
            </Reveal>
        </section>
    );
}
