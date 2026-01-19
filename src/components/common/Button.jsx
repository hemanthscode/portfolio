import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';
import Icon from './Icon';

/**
 * Versatile Button component supporting links, external links, and buttons
 * Black & white themed with subtle hover effects
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200 border border-white',
    secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-black active:bg-gray-100',
    ghost: 'bg-transparent text-white hover:bg-white/10 active:bg-white/20',
    outline: 'bg-transparent text-white border border-gray-700 hover:border-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
    md: 'px-4 py-2.5 text-sm rounded-lg gap-2',
    lg: 'px-6 py-3 text-base rounded-lg gap-2',
    xl: 'px-8 py-4 text-lg rounded-xl gap-3',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && (
        <Icon name="Loader2" size={iconSizes[size]} className="animate-spin" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <Icon name={icon} size={iconSizes[size]} />
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === 'right' && (
        <Icon name={icon} size={iconSizes[size]} />
      )}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      {...props}
    >
      {content}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  to: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default memo(Button);
