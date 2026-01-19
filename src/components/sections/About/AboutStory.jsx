import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import { ABOUT_CONTENT } from '@/data';

/**
 * About Story Component - Enhanced with gradient accents
 */
const AboutStory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mb-16 sm:mb-20"
    >
      <div className="relative group">
        {/* Gradient Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
        
        {/* Main Card */}
        <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-300">
          {/* Header with Icon */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="User" size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {ABOUT_CONTENT.story.title}
            </h3>
          </div>

          {/* Story Content */}
          <div className="space-y-4 sm:space-y-5">
            {ABOUT_CONTENT.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

export default memo(AboutStory);
