// src/components/atoms/Button.tsx
import { FC, ButtonHTMLAttributes, ElementType, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '@contexts/ThemeContext';

/**
 * Props for the Button component.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  as?: ElementType;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  className?: string;
}

/**
 * A reusable button component with primary/secondary variants and theme support.
 * @param props - The button props.
 * @returns A styled button or link element.
 */
const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  href,
  to,
  target,
  rel,
  disabled,
  ...props
}) => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = useMemo(
    () =>
      'inline-flex items-center justify-center px-4 py-2 rounded-md font-sans font-semibold text-base transition-default focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    [],
  );

  const variantStyles = useMemo(() => {
    if (variant === 'primary') {
      return `bg-[${colors.primary}] text-white hover:bg-[${colors.primary}/0.9] dark:hover:bg-[${colors.primary}/0.8] focus:ring-[${colors.primary}]`;
    }
    return `bg-[${colors.secondary}] text-white hover:bg-[${colors.secondary}/0.9] dark:hover:bg-[${colors.secondary}/0.8] focus:ring-[${colors.secondary}]`;
  }, [variant, colors]);

  const linkProps = useMemo(
    () => (to ? { to, as: Link } : href ? { href, target, rel } : {}),
    [to, href, target, rel],
  );

  return (
    <motion.div
      whileHover={shouldReduceMotion || disabled ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion || disabled ? {} : { scale: 0.95 }}
      className={disabled ? 'pointer-events-none' : ''}
    >
      <Component
        className={`${baseStyles} ${variantStyles} ${className}`}
        aria-disabled={disabled ? 'true' : undefined}
        {...linkProps}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;