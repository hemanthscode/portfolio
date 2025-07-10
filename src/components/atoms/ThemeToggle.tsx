// src/components/atoms/ThemeToggle.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@contexts/ThemeContext';
import Icon from './Icon';
import { useReducedMotion } from 'framer-motion';

/**
 * A theme toggle button for switching between light and dark modes.
 * @returns A styled theme toggle button.
 */
const ThemeToggle: FC = () => {
  const { theme, colors, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-3 rounded-md bg-[${colors.primary}/0.1] hover:bg-[${colors.accent}/0.2] focus:ring-2 focus:ring-[${colors.primary}] transition-default`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size="md" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;