import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import { EXPERIENCE_CONTENT } from '@/data';

const ProgressOverview = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto"
  >
    {EXPERIENCE_CONTENT.progressOverview.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.1 }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="group relative"
      >
        {/* Highlight Glow for Active Card */}
        {item.highlight && (
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
        )}
        
        {/* Card */}
        <div className={`relative text-center p-5 sm:p-6 rounded-xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} ${
          item.highlight ? 'ring-2 ring-green-500/50 shadow-lg shadow-green-500/20' : ''
        } transition-all duration-300 h-full`}>
          
          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Icon name={item.icon} size={28} className="text-white sm:w-8 sm:h-8" />
          </div>
          
          {/* Label */}
          <p className="text-base sm:text-lg font-bold text-white mb-2">
            {item.label}
          </p>
          
          {/* Duration */}
          <p className="text-xs sm:text-sm text-gray-400">
            {item.duration}
          </p>
          
          {/* Active Indicator */}
          {item.highlight && (
            <div className="absolute top-3 right-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default memo(ProgressOverview);
