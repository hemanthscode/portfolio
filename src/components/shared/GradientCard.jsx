import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';
import Icon from '@/components/common/Icon';

/**
 * Reusable gradient card component
 * Eliminates repeated gradient card patterns
 */
const GradientCard = ({
  icon,
  iconColor,
  bgGradient,
  borderColor,
  title,
  description,
  children,
  index = 0,
  className = '',
  hoverable = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={hoverable ? { y: -5 } : {}}
      className={cn(
        'relative p-5 sm:p-6 rounded-xl sm:rounded-2xl',
        `bg-gradient-to-br ${bgGradient}`,
        `border ${borderColor}`,
        hoverable && 'hover:border-white/30',
        'transition-all duration-300 group',
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div
          className={cn(
            'w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl mb-4 sm:mb-5',
            `bg-gradient-to-br ${bgGradient}`,
            `border ${borderColor}`,
            'flex items-center justify-center',
            'group-hover:scale-110 transition-transform duration-300'
          )}
        >
          <Icon name={icon} size={24} className={iconColor} />
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
          {description}
        </p>
      )}

      {/* Custom children content */}
      {children}
    </motion.div>
  );
};

GradientCard.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  bgGradient: PropTypes.string,
  borderColor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  index: PropTypes.number,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
};

export default memo(GradientCard);
