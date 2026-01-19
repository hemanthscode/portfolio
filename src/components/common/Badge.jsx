import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';

/**
 * Badge component for status indicators
 * Supports different variants with semantic colors
 */
const Badge = ({ 
  children, 
  variant = 'neutral', 
  size = 'md',
  pulse = false,
  className = '' 
}) => {
  const variants = {
    success: 'bg-status-success/10 text-status-success border-status-success/20',
    progress: 'bg-status-progress/10 text-status-progress border-status-progress/20',
    warning: 'bg-status-warning/10 text-status-warning border-status-warning/20',
    featured: 'bg-status-featured/10 text-status-featured border-status-featured/20',
    error: 'bg-status-error/10 text-status-error border-status-error/20',
    neutral: 'bg-white/5 text-gray-400 border-white/10',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px] sm:text-xs',
    md: 'px-2.5 py-1 text-xs sm:text-sm',
    lg: 'px-3 py-1.5 text-sm sm:text-base',
  };

  const dotColors = {
    success: 'bg-status-success',
    progress: 'bg-status-progress',
    warning: 'bg-status-warning',
    featured: 'bg-status-featured',
    error: 'bg-status-error',
    neutral: 'bg-gray-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className={cn(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
            dotColors[variant]
          )}></span>
          <span className={cn(
            'relative inline-flex rounded-full h-2 w-2',
            dotColors[variant]
          )}></span>
        </span>
      )}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'progress', 'warning', 'featured', 'error', 'neutral']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  pulse: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(Badge);
