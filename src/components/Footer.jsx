import React from 'react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="tone-ink border-t border-white/10 py-10 px-[var(--gutter)]">
            <div className="max-w-[var(--max)] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-light">
                <div className="flex items-center gap-3">
                    <span className="font-display font-extrabold text-lg text-paper uppercase tracking-tight">
                        Sai Koemsean
                    </span>
                    <span className="text-white/20">/</span>
                    <span>Full-Stack Dev · PIKT</span>
                </div>

                <div className="text-center sm:text-left">
                    <span>Kampong Thom, Cambodia · © {new Date().getFullYear()}</span>
                </div>

                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-1.5 text-paper hover:text-gold transition-colors py-1 px-3 rounded-full hover:bg-white/5"
                >
                    <span>Back to top</span>
                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                </button>
            </div>
        </footer>
    );
}
