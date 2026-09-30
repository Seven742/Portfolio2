/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#eef3f4',
          light: '#f8fafb',
          dark: '#e3ebed',
        },
        ink: {
          DEFAULT: '#0b1026',
          soft: '#4b5575',
          muted: '#717c99',
          light: '#aab3cf',
        },
        teal: {
          DEFAULT: '#0a7a8c',
          dark: '#086270',
          light: '#d2ebef',
          subtle: '#0a7a8c14',
        },
        gold: {
          DEFAULT: '#ffd43b',
          dark: '#e0b522',
          light: '#fff5cf',
        },
        rule: {
          DEFAULT: 'rgba(11, 16, 38, 0.12)',
          subtle: 'rgba(11, 16, 38, 0.06)',
          light: 'rgba(238, 243, 244, 0.18)',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Onest', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        burn: {
          '0%': { left: '-90px' },
          '100%': { left: '110%' },
        },
      },
      animation: {
        burn: 'burn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
