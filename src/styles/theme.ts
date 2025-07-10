// src/styles/theme.ts
import { Theme } from '@/types/theme.types';

interface ThemeConfig {
  colors: {
    light: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
    dark: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
  };
  fontFamily: {
    sans: string[];
  };
  fontSize: Record<string, string>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  transition: {
    default: string;
    hover: string;
  };
}

export const theme: ThemeConfig = {
  colors: {
    light: {
      primary: '#1D4ED8',
      secondary: '#60A5FA',
      accent: '#F59E0B',
      background: '#F9FAFB',
      text: {
        primary: '#111827',
        secondary: '#6B7280',
      },
    },
    dark: {
      primary: '#3B82F6',
      secondary: '#9CA3AF',
      accent: '#F59E0B',
      background: '#0F172A',
      text: {
        primary: '#F9FAFB',
        secondary: '#D1D5DB',
      },
    },
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '5rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  transition: {
    default: 'all 0.3s ease-out',
    hover: 'transform 0.2s ease-out',
  },
};

// Apply theme variables to :root
const applyTheme = (themeMode: Theme) => {
  const colors = theme.colors[themeMode];
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        document.documentElement.style.setProperty(`--color-${key}-${subKey}`, subValue);
      });
    }
  });
};

export const initializeTheme = (themeMode: Theme) => {
  applyTheme(themeMode);
};