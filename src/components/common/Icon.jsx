import { memo } from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/utils/helpers';

/**
 * Icon component wrapping Lucide React icons
 * Provides consistent sizing and styling
 */
const Icon = ({ name, size = 24, className = '', strokeWidth = 2, ...props }) => {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons. Using AlertCircle as fallback.`);
    const FallbackIcon = LucideIcons.AlertCircle;
    return (
      <FallbackIcon
        size={size}
        strokeWidth={strokeWidth}
        className={cn('flex-shrink-0', className)}
        {...props}
      />
    );
  }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={cn('flex-shrink-0', className)}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default memo(Icon);
