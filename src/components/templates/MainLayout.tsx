// src/components/templates/MainLayout.tsx
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@components/organisms/Navbar';
import Footer from '@components/organisms/Footer';
import { useTheme } from '@contexts/ThemeContext';

/**
 * Props for the MainLayout component.
 */
interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * A main layout template with navigation and footer.
 * @param props - The layout props.
 * @returns A styled layout with header, main content, and footer.
 */
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen bg-[${colors.background}] text-[${colors.text.primary}]`}
      role="document"
    >
      <Navbar />
      <main className="flex-grow">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;