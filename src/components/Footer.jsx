import React from 'react';

const COLORS = {
    border: '#1a1a1a',
    muted: '#5a6478',
};

export default function Footer() {
    return (
        <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: '28px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 17, letterSpacing: '0.1em', color: COLORS.muted }}>Sai Koemsean</div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: COLORS.muted, letterSpacing: '0.1em' }}>© 2025 · Information Techology · PIKT · Kampong Thom</div>
        </footer>
    );
}
