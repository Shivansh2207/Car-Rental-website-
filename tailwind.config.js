/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium dark-and-light visual system
        graphite: {
          DEFAULT: '#101214', // Midnight Graphite
          50: '#f6f7f7',
          100: '#e2e4e5',
          200: '#c5c8ca',
          300: '#9da2a6',
          400: '#6f757b',
          500: '#4b5158',
          600: '#393e44',
          700: '#2a2e33',
          800: '#1a1d20',
          900: '#101214',
          950: '#08090a',
        },
        charcoal: {
          DEFAULT: '#181B1F', // Deep Charcoal
        },
        ivory: {
          DEFAULT: '#F5F2EB', // Warm Ivory
          50: '#fdfdfb',
          100: '#F5F2EB',
          200: '#ece6d8',
          300: '#ddd4bd',
        },
        'soft-white': '#FCFCFA',
        'road-grey': '#70757D',
        accent: {
          DEFAULT: '#F97316', // Accent Orange
          hover: '#EA580C',
          soft: '#FB923C',
          muted: '#FDBA74',
        },
        sage: '#98A592', // Muted Sage
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(16, 18, 20, 0.12)',
        card: '0 10px 40px -16px rgba(16, 18, 20, 0.18)',
        glow: '0 0 0 1px rgba(249, 115, 22, 0.25), 0 8px 30px -8px rgba(249, 115, 22, 0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(112,117,125,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(112,117,125,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'route-dash': {
          '0%': { 'stroke-dashoffset': '1000' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        'pulse-once': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 600ms ease-out forwards',
        'route-dash': 'route-dash 3s ease-out forwards',
        'pulse-once': 'pulse-once 600ms ease-out',
      },
    },
  },
  plugins: [],
};
