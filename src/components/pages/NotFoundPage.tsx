// src/components/pages/NotFoundPage.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@components/atoms/Button';
import { useTheme } from '@contexts/ThemeContext';

/**
 * A 404 page for handling invalid routes.
 * @returns A styled 404 page.
 */
const NotFoundPage: FC = () => {
  const { colors } = useTheme();

  return (
    <section
      className={`py-20 bg-[${colors.background}] text-center min-h-screen flex items-center justify-center`}
      aria-labelledby="not-found-heading"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1
          id="not-found-heading"
          className={`text-4xl sm:text-5xl font-bold text-[${colors.text.primary}] mb-4 tracking-tight`}
        >
          404 - Page Not Found
        </h1>
        <p className={`text-lg sm:text-xl text-[${colors.text.secondary}] mb-6 leading-relaxed`}>
          The page you're looking for doesn't exist.
        </p>
        <Button
          as={Link}
          to="/"
          className={`px-8 py-3 text-lg font-semibold bg-[${colors.primary}] text-white hover:bg-[${colors.primary}/0.9]`}
          aria-label="Return to home page"
        >
          Back to Home
        </Button>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;