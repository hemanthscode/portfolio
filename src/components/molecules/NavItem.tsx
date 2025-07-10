// src/components/molecules/NavItem.tsx
import { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem as NavItemType } from '@/types/nav.types';
import { useTheme } from '@contexts/ThemeContext';

/**
 * Props for the NavItem component.
 */
interface NavItemProps extends NavItemType {}

/**
 * A navigation item combining NavLink with theme-aware styling.
 * @param props - The navigation item props.
 * @returns A styled navigation link.
 */
const NavItem: FC<NavItemProps> = ({ label, href }) => {
  const { colors } = useTheme();

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <NavLink
      to={href}
      onClick={handleClick}
      className={({ isActive }: { isActive: boolean }) =>
        `px-4 py-2 rounded-md text-base font-medium transition-default min-h-[48px] flex items-center ${
          isActive
            ? `bg-[${colors.primary}/0.1] text-[${colors.primary}] font-semibold`
            : `text-[${colors.text.secondary}] hover:bg-[${colors.primary}/0.1] hover:text-[${colors.primary}]`
        }`
      }
      aria-current={undefined} // Will be set dynamically in render function
    >
      {({ isActive }: { isActive: boolean }) => (
        <span aria-current={isActive ? 'page' : undefined}>{label}</span>
      )}
    </NavLink>
  );
};

export default NavItem;