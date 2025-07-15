/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{jsx,js}'];
export const theme = {
  extend: {
    colors: {
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2a44',
        900: '#111827',
      },
      error: '#6b7280', // Monochromatic error color
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    spacing: {
      18: '4.5rem',
      28: '7rem',
      96: '24rem',
    },
    borderRadius: {
      'xl': '0.75rem',
    },
    boxShadow: {
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
    },
  },
};
export const plugins = [];