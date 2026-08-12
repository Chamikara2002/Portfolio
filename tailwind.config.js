/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020c1b',
          900: '#0a192f',
          850: '#112240',
          800: '#233554',
          700: '#495670',
          600: '#8892b0',
        },
        teal: {
          300: '#a7f3d0',
          400: '#64ffda',
          500: '#10b981',
          600: '#059669',
        },
        gold: {
          300: '#ffea70',
          400: '#ffd700',
          500: '#eab308',
          600: '#ca8a04',
        }
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-teal': '0 0 25px rgba(100, 255, 218, 0.4), 0 0 50px rgba(100, 255, 218, 0.2)',
        'neon-gold': '0 0 25px rgba(255, 215, 0, 0.4), 0 0 50px rgba(255, 215, 0, 0.2)',
        'neon-blue': '0 0 25px rgba(100, 255, 218, 0.3), 0 0 50px rgba(10, 25, 47, 0.8)',
        'glass-architectural': '0 20px 40px rgba(2, 12, 27, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 15px rgba(100, 255, 218, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(100, 255, 218, 0.6), 0 0 60px rgba(255, 215, 0, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
