import React, { useState } from 'react';

const contactChannels = [
    {
        icon: 'mail',
        label: 'Direct Email',
        value: 'saikoemsean@gmail.com',
        href: 'mailto:saikoemsean@gmail.com',
        action: 'Send Email',
    },
    {
        icon: 'terminal',
        label: 'GitHub Profile',
        value: 'github.com/Seven742',
        href: 'https://github.com/Seven742',
        action: 'View Repositories',
    },
    {
        icon: 'hub',
        label: 'LinkedIn Network',
        value: 'in/sai-koemsean-07a304406',
        href: 'https://www.linkedin.com/in/sai-koemsean-07a304406/',
        action: 'Connect',
    },
    {
        icon: 'public',
        label: 'Facebook',
        value: 'facebook.com/saikoemsean',
        href: 'https://web.facebook.com/Seven3.0.1',
        action: 'Message',
    },
];

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('saikoemsean@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="contact" className="tone-ink py-24 sm:py-36 px-[var(--gutter)] relative">
            <div className="max-w-[var(--max)] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column with Scroll Reveal */}
                    <div className="reveal-init lg:col-span-6 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4">
                                <span className="w-4 h-px bg-gold" />
                                <span>04 / Get In Touch</span>
                            </div>

                            <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-paper leading-[0.88] mb-6">
                                Let's<br />
                                <span className="text-gold">Connect.</span>
                            </h2>

                            <p className="text-base sm:text-lg text-ink-light max-w-md leading-relaxed mb-8">
                                Whether you have a full-stack project in mind, an internship opportunity, or want to collaborate on Next.js, React, or Express applications, my inbox is always open.
                            </p>
                        </div>

                        {/* Quick Email Copy Card */}
                        <div className="reveal-scale-init hud p-5 flex items-center justify-between gap-4 max-w-md hover:border-gold/50 transition-colors">
                            <div className="truncate">
                                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-light mb-1">
                                    Primary Email
                                </div>
                                <div className="text-sm font-mono text-paper font-semibold truncate">
                                    saikoemsean@gmail.com
                                </div>
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                className="cut-btn text-xs py-1.5 px-3 flex-shrink-0"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {copied ? 'check' : 'content_copy'}
                                </span>
                                <span>{copied ? 'Copied' : 'Copy'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Contact Links with Staggered Scroll Reveal */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        {contactChannels.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className="reveal-scale-init hud p-5 sm:p-6 flex items-center justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-colors duration-300">
                                        <span className="material-symbols-outlined text-xl">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-light">
                                            {item.label}
                                        </div>
                                        <div className="text-sm font-medium text-paper group-hover:text-gold transition-colors mt-0.5">
                                            {item.value}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-mono text-ink-light group-hover:text-gold transition-colors">
                                    <span className="hidden sm:inline">{item.action}</span>
                                    <span className="material-symbols-outlined text-lg transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                        north_east
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
