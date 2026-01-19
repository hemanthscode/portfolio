import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Icon from '@/components/common/Icon';
import { ANIMATION_VARIANTS } from '@/utils/constants';

/**
 * Reusable section header component
 * Eliminates repeated header patterns across sections
 */
const SectionHeader = ({ 
  badge,
  icon,
  title, 
  subtitle, 
  description,
  centered = true,
  className = '' 
}) => {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6 ${centered ? '' : 'ml-0'}`}>
          {icon && <Icon name={icon} size={16} className="text-white" />}
          <span className="text-xs sm:text-sm text-gray-300">{badge}</span>
        </div>
      )}
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-300 font-medium mb-3 px-4">
          {subtitle}
        </p>
      )}
      
      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          {description}
        </p>
      )}
    </motion.div>
  );
};

SectionHeader.propTypes = {
  badge: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(SectionHeader);
