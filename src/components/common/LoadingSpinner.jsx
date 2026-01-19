import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';
import Icon from './Icon';

/**
 * Loading spinner component for async operations
 * Black & white themed with customizable size
 */
const LoadingSpinner = ({
  size = 'md',
  fullScreen = false,
  text = '',
  className = '',
}) => {
  const sizes = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <Icon
            name="Loader2"
            size={sizes[size]}
            className="text-white animate-spin"
          />
          {text && (
            <p className={cn('text-white font-medium', textSizes[size])}>
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      <Icon
        name="Loader2"
        size={sizes[size]}
        className="text-white animate-spin"
      />
      {text && (
        <p className={cn('text-gray-400', textSizes[size])}>
          {text}
        </p>
      )}
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default memo(LoadingSpinner);
