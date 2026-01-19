/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // Black & White Palette
        black: {
          DEFAULT: '#000000',
          light: '#0a0a0a',
        },
        gray: {
          950: '#0a0a0a',
          900: '#1a1a1a',
          850: '#1f1f1f',
          800: '#262626',
          750: '#2d2d2d',
          700: '#333333',
          650: '#404040',
          600: '#4d4d4d',
          500: '#666666',
          400: '#808080',
          300: '#999999',
          200: '#b3b3b3',
          100: '#cccccc',
          50: '#e6e6e6',
        },
        white: {
          DEFAULT: '#ffffff',
          dark: '#f5f5f5',
        },

        // Status Colors - FLAT STRUCTURE (Works with JIT)
        'status-success': '#22c55e',
        'status-success-light': '#4ade80',
        'status-success-dark': '#16a34a',
        
        'status-progress': '#3b82f6',
        'status-progress-light': '#60a5fa',
        'status-progress-dark': '#2563eb',
        
        'status-warning': '#f59e0b',
        'status-warning-light': '#fbbf24',
        'status-warning-dark': '#d97706',
        
        'status-featured': '#8b5cf6',
        'status-featured-light': '#a78bfa',
        'status-featured-dark': '#7c3aed',
        
        'status-error': '#ef4444',
        'status-error-light': '#f87171',
        'status-error-dark': '#dc2626',
        
        'status-neutral': '#6b7280',
        'status-neutral-light': '#9ca3af',
        'status-neutral-dark': '#4b5563',

        // Shorthand
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },

      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 currentColor' },
          '50%': { opacity: '0.8', boxShadow: '0 0 8px 2px currentColor' },
        },
      },

      backdropBlur: {
        xs: '2px',
      },
    },
  },

  plugins: [],
};
