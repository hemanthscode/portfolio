import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import Button from '@components/atoms/Button';
import { useTheme } from '@contexts/ThemeContext';

/**
 * A hero section with profile and call-to-action buttons.
 * @returns A styled hero section.
 */
const Hero: FC = () => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-[${colors.background}] to-[${colors.primary}/0.05] py-12 relative`}
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="relative inline-block mb-6" variants={childVariants}>
          <motion.img
            src="/assets/profile.jpg"
            alt="Your Name's profile"
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-[${colors.primary}] object-cover shadow-lg`}
            onError={(e) => (e.currentTarget.src = '/assets/placeholder.jpg')}
            loading="lazy"
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          />
          <div className={`absolute inset-0 rounded-full bg-[${colors.primary}/0.1] blur-xl -z-10`} />
        </motion.div>
        <motion.h1
          id="hero-heading"
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[${colors.text.primary}] mb-4 tracking-tight`}
          variants={childVariants}
        >
          Hey, I'm Your Name
        </motion.h1>
        <motion.p
          className={`text-lg sm:text-xl lg:text-2xl text-[${colors.text.secondary}] max-w-2xl mx-auto mb-8 leading-relaxed`}
          variants={childVariants}
        >
          A passionate web developer crafting modern, user-friendly experiences with React, TypeScript, and Tailwind CSS.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={childVariants}>
          <Button
            as={Link}
            to="/contact"
            className={`px-8 py-3 text-lg font-semibold bg-[${colors.primary}] text-white hover:bg-[${colors.primary}/0.9]`}
            aria-label="Contact me"
          >
            Get in Touch
          </Button>
          <Button
            as={Link}
            to="/work"
            variant="secondary"
            className={`px-8 py-3 text-lg font-semibold bg-[${colors.secondary}] text-white hover:bg-[${colors.secondary}/0.9]`}
            aria-label="View my projects"
          >
            View My Work
          </Button>
        </motion.div>
      </motion.div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[${colors.background}] to-transparent`}
      />
    </section>
  );
};

export default Hero;