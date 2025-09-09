export const theme = {
  colors: {
    primary: {
      main: '#3b82f6',
      dark: '#2563eb',
      light: '#60a5fa'
    },
    secondary: {
      main: '#8b5cf6',
      dark: '#7c3aed',
      light: '#a78bfa'
    },
    background: {
      default: '#030712',
      paper: '#111827'
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db'
    }
  },
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  },
  typography: {
    h1: '3rem',
    h2: '2.25rem',
    h3: '1.875rem',
    body: '1rem',
    caption: '0.875rem'
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
      accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
    }
  }
};