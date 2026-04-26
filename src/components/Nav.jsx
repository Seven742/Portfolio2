import React, { useEffect, useRef, useState } from 'react';

const COLORS = {
    bg: '#000000',
    surface: '#080808',
    border: '#1a1a1a',
    accent: '#4df0c0',
    muted: '#5a6478',
};

function useScrollY() {
    const [y, setY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return y;
}

function useScrollDirection() {
    const [dir, setDir] = useState('up');
    const lastScroll = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current < 20) {
                setDir('up');
            } else if (current > lastScroll.current) {
                setDir('down');
            } else if (current < lastScroll.current) {
                setDir('up');
            }
            lastScroll.current = current;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return dir;
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth <= 768);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return isMobile;
}

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Nav() {
    const dir = useScrollDirection();
    const isMobile = useIsMobile();
    const scrollY = useScrollY();
    const scrolled = scrollY > 60;
    const isHidden = isMobile && dir === 'down';

    return (
        <nav
            className="nav-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 56px',
                borderBottom: `1px solid ${scrolled ? COLORS.border : 'transparent'}`,
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
            }}
        >
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: '0.1em', color: COLORS.accent }}>
                Koemsean
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: 36 }}>
                {sections.map((section) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        style={{
                            fontFamily: 'monospace',
                            fontSize: 11,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: COLORS.muted,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                        onMouseLeave={(e) => (e.target.style.color = COLORS.muted)}
                    >
                        {section}
                    </a>
                ))}
            </div>
        </nav>
    );
}
