import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from '@/components/common/Button';
import SectionHeader from '@/components/shared/SectionHeader';
import { personal, ABOUT_CONTENT } from '@/data';
import AboutStory from './AboutStory';
import AboutFocusAreas from './AboutFocusAreas';
import AboutWorkApproach from './AboutWorkApproach';
import AboutInterests from './AboutInterests';
import Icon from '@/components/common/Icon';

/**
 * About Section - Main component (Enhanced)
 */
const About = ({ showHeader = true }) => {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl opacity-50 animate-pulse-subtle" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-50 animate-pulse-subtle" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        {showHeader && (
          <SectionHeader
            badge="About Me"
            icon="User"
            title={ABOUT_CONTENT.header.title}
            description={ABOUT_CONTENT.header.tagline}
          />
        )}

        {/* Story */}
        <AboutStory />

        {/* Focus Areas */}
        <AboutFocusAreas />

        {/* Work Approach */}
        <AboutWorkApproach />

        {/* Stats Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          {/* Stats Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-green-400 uppercase tracking-wider">
                Achievements
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              By the Numbers
            </h3>
            
            <p className="text-sm sm:text-base text-gray-400 px-4">
              A snapshot of my journey so far
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {personal.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                {/* Gradient Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
                
                {/* Stat Card */}
                <div className="relative p-5 sm:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon name={stat.icon} size={22} className="text-white" />
                  </div>
                  
                  {/* Value */}
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {stat.value}
                  </p>
                  
                  {/* Description */}
                  <p className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <AboutInterests />

        {/* CTA - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            href={personal.resume.url}
            icon="Download"
          >
            Download Resume
          </Button>
          <Button
            variant="secondary"
            size="lg"
            to="/contact"
            icon="MessageCircle"
          >
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

About.propTypes = {
  showHeader: PropTypes.bool,
};

export default memo(About);
