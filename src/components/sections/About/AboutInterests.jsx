import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import { ABOUT_CONTENT } from '@/data';

/**
 * About Interests - Ultra-minimal, maximum impact
 */
const AboutInterests = () => {
  return (
    <div className="relative">
      {/* Simple Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Beyond Code
        </h3>
        <p className="text-gray-500 text-sm">What drives me when I'm offline</p>
      </motion.div>

      {/* Clean Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {ABOUT_CONTENT.interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="group cursor-default"
          >
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center">
              <Icon 
                name={interest.icon} 
                size={24} 
                className={`${interest.color} mx-auto mb-3`} 
              />
              <p className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {interest.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-xs sm:text-sm text-gray-500 mt-8 max-w-2xl mx-auto"
      >
        {ABOUT_CONTENT.interestsClosing}
      </motion.p>
    </div>
  );
};

export default memo(AboutInterests);
