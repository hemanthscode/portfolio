// src/components/atoms/Icon.tsx
import { FC, SVGProps } from 'react';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useTheme } from '@contexts/ThemeContext';

/**
 * Supported Lucide icon names.
 */
type IconName =
  | 'Code'
  | 'FileCode'
  | 'Brush'
  | 'Server'
  | 'Moon'
  | 'Sun'
  | 'Menu'
  | 'X'
  | 'ArrowUp'
  | 'ArrowRight'
  | 'Send'
  | 'Github'
  | 'Linkedin'
  | 'Circle';

/**
 * Props for the Icon component.
 */
interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A reusable icon component using Lucide icons with theme support.
 * @param props - The icon props.
 * @returns A styled Lucide icon.
 */
const Icon: FC<IconProps> = ({ name, size = 'md', className = '', ...props }) => {
  const { colors } = useTheme();
  const IconComponent: LucideIcon = (LucideIcons[name] as LucideIcon) || LucideIcons.Circle;

  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <IconComponent
      className={`${sizeStyles[size]} text-[${colors.text.primary}] ${className}`}
      role="img"
      aria-hidden={props['aria-label'] ? undefined : 'true'}
      {...(props['aria-label'] ? { 'aria-label': props['aria-label'] } : {})}
      {...props}
    />
  );
};

export default Icon;