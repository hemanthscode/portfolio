// src/contexts/ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeColors } from '@/types/theme.types';
import { initializeTheme } from '@styles/theme';

/**
 * Interface for ThemeContext values.
 */
interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

/**
 * Theme context for managing light/dark mode.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Provides theme context to the application, managing light/dark mode and colors.
 * @param children - The child components to render within the context.
 */
export function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as Theme) || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      initializeTheme(theme); // Apply theme variables
    } catch (error) {
      console.error('Failed to persist theme:', error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const colors: ThemeColors = {
    primary: theme === 'light' ? '#1D4ED8' : '#3B82F6',
    secondary: theme === 'light' ? '#60A5FA' : '#9CA3AF',
    accent: '#F59E0B',
    background: theme === 'light' ? '#F9FAFB' : '#0F172A',
    text: {
      primary: theme === 'light' ? '#111827' : '#F9FAFB',
      secondary: theme === 'light' ? '#6B7280' : '#D1D5DB',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context.
 * @throws Error if used outside ThemeProvider.
 * @returns Theme context values.
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}