import { memo } from 'react';
import { motion } from 'framer-motion';
import GradientCard from '@/components/shared/GradientCard';
import { ABOUT_CONTENT } from '@/data';

/**
 * About Focus Areas - Enhanced with better animations
 */
const AboutFocusAreas = () => {
  return (
    <div className="mb-16 sm:mb-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-blue-400 uppercase tracking-wider">
            Specializations
          </span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
          What I Specialize In
        </h3>
        
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
          Core areas where I excel and continuously push my boundaries
        </p>
      </motion.div>

      {/* Focus Area Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {ABOUT_CONTENT.focusAreas.map((area, index) => (
          <GradientCard
            key={index}
            icon={area.icon}
            iconColor={area.iconColor}
            bgGradient={area.bgGradient}
            borderColor={area.borderColor}
            title={area.title}
            description={area.description}
            index={index}
          >
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {area.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </GradientCard>
        ))}
      </div>
    </div>
  );
};

export default memo(AboutFocusAreas);
