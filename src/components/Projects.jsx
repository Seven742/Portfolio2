import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Poster2 from '../assets/Poster2.png';
import weatherImg from '../assets/App.png';
import University from '../assets/Kingster.png';
import Poster from '../assets/Poster.png';
import khmerlearning from '../assets/Logo-khmer-learning1.png';

const COLORS = {
    bg: '#000000',
    card: '#0d0d0d',
    border: '#1a1a1a',
    accent: '#4df0c0',
    muted: '#5a6478',
    white: '#f0f4ff',
};

const projects = [
    {
        num: '01',
        name: 'E-commerce Website',
        desc: 'A React-based e-commerce website with a sleek, modern design. Features include product browsing, shopping cart, and a custom admin dashboard for inventory management.',
        type: 'Frontend',
        year: '2025',
        color: COLORS.accent,
        img: Poster,
        imgAlt: 'E-commerce Website mockup',
        path: 'https://github.com/Seven742/E-commerce1',
    },
    {
        num: '02',
        name: 'Portfolio Website',
        desc: 'A responsive portfolio website built with React and styled-components. Features a modern design, smooth animations, and a seamless user experience.',
        type: 'Frontend',
        year: '2025',
        color: '#4db8f0',
        img: Poster2,
        imgAlt: 'Portfolio Website mockup',
        path: 'https://personal-portfolio-olive-six.vercel.app'
    },
    {
        num: '03',
        name: 'E-commerce App',
        desc: 'A React Native e-commerce app with a clean, intuitive design. Features include product browsing, shopping cart, and a custom admin dashboard for inventory management.',
        type: 'React Native / CSS',
        year: '2026',
        color: '#b04df0',
        img: weatherImg,
        imgAlt: 'E-commerce app mockup',
        path: 'https://github.com/Seven742/E-commerce-app'
    },
    {
        num: '04',
        name: 'University Website',
        desc: 'A university website built with React and Tailwind CSS. Features a modern design, responsive layout, and a seamless user experience.',
        type: 'Frontend',
        year: '2025',
        color: '#f0c04d',
        img: University,
        imgAlt: 'University website mockup',
        path: 'https://github.com/Seven742/University-app'
    },
    {
        num: '05',
        name: 'Khmer Learning Bot',
        desc: 'A chatbot designed to help users learn the Khmer language through interactive conversations and exercises.',
        type: 'Telegram Bot',
        year: '2026',
        color: '#1A35B8',
        img: khmerlearning,
        imgAlt: 'Khmer Learning Bot mockup',
        path: 'https://t.me/KHLearningbot'
    },

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

function ProjectCard({ num, name, desc, type, year, color, img, imgAlt, delay, path }) {
    const [hov, setHov] = useState(false);
    const cardContent = (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: COLORS.card,
                border: `1px solid ${hov ? color : COLORS.border}`,
                overflow: 'hidden',
                position: 'relative',
                transition: 'border-color 0.4s',
                cursor: 'none',
                height: '100%',
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1.9 / 1' }}>
                <img
                    src={img}
                    alt={imgAlt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: hov ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.6s ease',
                        display: 'block',
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 30%, ${COLORS.bg}dd 100%)` }} />
                <div style={{ position: 'absolute', inset: 0, background: color + '22', opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />
                <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: color, border: `1px solid ${color}55`, background: COLORS.bg + 'cc', padding: '4px 12px', backdropFilter: 'blur(8px)' }}>{type}</div>
                <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, letterSpacing: '0.1em', color: COLORS.muted }}>{num}</div>
            </div>
            <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: COLORS.white, lineHeight: 1.25 }}>{name}</div>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: hov ? color : COLORS.muted, transform: hov ? 'translate(2px,-2px)' : 'none', transition: 'all 0.2s', flexShrink: 0 }}>north_east</span>
                </div>
                <p style={{ fontFamily: 'monospace', fontSize: 12, color: COLORS.muted, lineHeight: 1.7, marginBottom: 18 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: 32, height: 1, background: `linear-gradient(to right, ${color}, transparent)` }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: COLORS.muted }}>{year}</span>
                </div>
            </div>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: color, transform: hov ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'top', transition: 'transform 0.4s ease' }} />
        </div>
    );

    return (
        <Reveal delay={delay}>
            {path ? <Link to={path} style={{ textDecoration: 'none', cursor: 'none' }}>{cardContent}</Link> : cardContent}
        </Reveal>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="projects-section" style={{ padding: '140px 56px' }}>
            <style>{`
                @media (max-width: 768px) {
                    .projects-section {
                        padding: clamp(60px, 8vw, 120px) clamp(24px, 5vw, 40px) !important;
                    }
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                }
                @media (max-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <Reveal>
                    <SectionLabel>Work</SectionLabel>
                    <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px,7vw,100px)', lineHeight: 1, color: COLORS.white, marginBottom: 60 }}>
                        Selected<br />Projects
                    </h2>
                </Reveal>
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                    {projects.slice(0, 2).map((project, index) => <ProjectCard key={project.num} {...project} delay={index * 0.1} />)}
                </div>
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                    {projects.slice(2, 4).map((project, index) => <ProjectCard key={project.num} {...project} delay={0.2 + index * 0.1} />)}
                </div>
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {projects.slice(4, 6).map((project, index) => <ProjectCard key={project.num} {...project} delay={0.4 + index * 0.1} />)}
                </div>
            </div>
        </section>
    );
}
