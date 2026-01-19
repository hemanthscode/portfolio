import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import { ABOUT_CONTENT } from '@/data';

/**
 * About Work Approach - Enhanced with gradient accents
 */
const AboutWorkApproach = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 sm:mb-20"
    >
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-4">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-purple-400 uppercase tracking-wider">
            Methodology
          </span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
          How I Work
        </h3>
        
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
          My approach to building exceptional software
        </p>
      </div>

      {/* Approach Cards */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {ABOUT_CONTENT.workApproach.map((approach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative"
          >
            {/* Gradient Glow on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            
            {/* Main Card */}
            <div className="relative p-5 sm:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon name={approach.icon} size={22} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {approach.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {approach.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(AboutWorkApproach);
