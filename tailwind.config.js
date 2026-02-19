/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg:      '#080c10',
        surface: '#0e141c',
        border:  '#1e2a38',
        accent:  '#00e5c3',
        accent2: '#ff6b35',
        text:    '#e8edf2',
        muted:   '#5a6a7a',
        card:    '#111820',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: {
          '0%':   { left: '-100%' },
          '100%': { left: '100%' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 0.6s 0.2s forwards',
        'fade-up-2': 'fadeUp 0.7s 0.4s forwards',
        'fade-up-3': 'fadeUp 0.7s 0.6s forwards',
        'fade-up-4': 'fadeUp 0.7s 0.8s forwards',
        'fade-up-5': 'fadeUp 0.7s 1.2s forwards',
        'scroll-line': 'scrollLine 2s 1.5s infinite',
        'pulse-dot': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}
