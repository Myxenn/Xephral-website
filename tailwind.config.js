/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#080600',
        surface:    '#0f0d06',
        accent:     '#f59e0b',
        gold:       '#d97706',
        ink:        '#fdfaf0',
        muted:      '#78716c',
        divider:    'rgba(245,158,11,0.1)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif:   ['"Cormorant Garamond"', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl':   '2rem',
        '5xl':   '2.5rem',
        '6xl':   '3rem',
        '7xl':   '4rem',
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease-out forwards',
        'glow-breathe': 'glowBreathe 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowBreathe: {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(245,158,11,0.35))' },
          '50%':      { filter: 'drop-shadow(0 0 32px rgba(245,158,11,0.75))' },
        },
      },
    },
  },
  plugins: [],
}
