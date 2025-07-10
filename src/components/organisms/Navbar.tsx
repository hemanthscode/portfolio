// src/components/organisms/Navbar.tsx
import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useMediaQuery, Breakpoint } from '@hooks/useMediaQuery';
import { NAV_ITEMS } from '@utils/constants';
import Icon from '@components/atoms/Icon';
import ThemeToggle from '@components/atoms/ThemeToggle';
import { useTheme } from '@contexts/ThemeContext';
import { useReducedMotion } from 'framer-motion';

/**
 * A navigation bar component with responsive menu and theme toggle.
 * @returns A styled navigation bar.
 */
const Navbar: FC = () => {
  const { colors } = useTheme();
  const isMobile = useMediaQuery(Breakpoint.MD);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  useEffect(() => {
    document.body.style.overflow = isMobile && isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isMenuOpen]);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const menuVariants: Variants = useMemo(
    () => ({
      closed: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
      open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    }),
    [],
  );

  const itemVariants: Variants = useMemo(
    () => ({
      closed: { opacity: 0, x: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
      open: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
    }),
    [],
  );

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[${colors.background}/0.8] backdrop-blur-md border-b border-[${colors.primary}/0.1]`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <motion.img
                src="/assets/logo.svg"
                alt="Portfolio logo"
                className="h-8 w-8 transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <span
                className={`text-xl font-bold text-[${colors.primary}] group-hover:text-[${colors.primary}/0.8] transition-colors`}
              >
                Portfolio
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`relative text-[${colors.text.secondary}] hover:text-[${colors.primary}] text-base font-medium transition-colors duration-200 py-2 group`}
                >
                  {item.label}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[${colors.primary}]`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                </Link>
              ))}
              <ThemeToggle />
            </div>
            <motion.button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg text-[${colors.text.primary}] hover:bg-[${colors.primary}/0.1] transition-colors`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size="md" />
            </motion.button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 bg-[${colors.background}/0.95] backdrop-blur-md`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            id="mobile-menu"
          >
            <motion.div
              className="flex flex-col items-center justify-center min-h-screen gap-8 px-4"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1, ease: 'easeInOut' }}
                >
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`text-2xl font-semibold text-[${colors.text.primary}] hover:text-[${colors.primary}] transition-colors py-4`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                transition={{ delay: NAV_ITEMS.length * 0.1, ease: 'easeInOut' }}
              >
                <ThemeToggle />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;