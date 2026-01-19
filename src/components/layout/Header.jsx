import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/utils/helpers';
import Icon from '@/components/common/Icon';
import Button from '@/components/common/Button';
import { NAV_ITEMS, EXTERNAL_LINKS } from '@/utils/constants';

/**
 * Header - Modern, responsive navigation
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        )}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 group-hover:rotate-3 duration-300">
                <Icon name="Code2" size={20} className="text-black sm:w-6 sm:h-6" />
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-bold text-white">
                Hemanth
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      'hover:scale-105',
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="secondary"
                size="md"
                href={EXTERNAL_LINKS.resume}
                icon="Download"
              >
                Resume
              </Button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative h-full flex flex-col px-6 sm:px-8 pt-24 pb-8 overflow-y-auto"
            >
              <nav className="flex flex-col gap-2 mb-8">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        cn(
                          'block px-5 py-4 text-lg font-bold rounded-xl transition-all duration-200',
                          isActive
                            ? 'text-white bg-white/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href={EXTERNAL_LINKS.resume}
                  icon="Download"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Header);
