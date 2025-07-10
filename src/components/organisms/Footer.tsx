// src/components/organisms/Footer.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import Icon from '@components/atoms/Icon';
import { SOCIAL_LINKS } from '@utils/constants';
import { useTheme } from '@contexts/ThemeContext';

/**
 * A footer component with social links and navigation.
 * @returns A styled footer section.
 */
const Footer: FC = () => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <footer
      className={`py-12 bg-[${colors.background}] border-t border-[${colors.text.secondary}/0.2]`}
      role="contentinfo"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col items-center gap-6" variants={childVariants}>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map(({ href, name, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-[${colors.text.secondary}] hover:text-[${colors.accent}] transition-colors`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                variants={childVariants}
              >
                <Icon name={name} size="lg" />
              </motion.a>
            ))}
          </div>
          <motion.p
            className={`text-[${colors.text.secondary}] text-sm font-medium`}
            variants={childVariants}
          >
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </motion.p>
          <motion.div
            variants={childVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <Link
              to="/"
              className={`text-[${colors.text.secondary}] hover:text-[${colors.primary}] text-sm font-medium transition-colors flex items-center gap-2`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              Back to Top
              <Icon name="ArrowUp" size="sm" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;