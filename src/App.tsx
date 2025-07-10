// src/App.tsx
import { FC, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@contexts/ThemeContext';
import MainLayout from '@components/templates/MainLayout';
import HomePage from '@components/pages/HomePage';
import AboutPage from '@components/pages/AboutPage';
import WorkPage from '@components/pages/WorkPage';
import ContactPage from '@components/pages/ContactPage';
import NotFoundPage from '@components/pages/NotFoundPage';

/**
 * A component to handle scroll-to-top on route change.
 * @returns Null, as it only handles side effects.
 */
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  return null;
};

/**
 * The main application component with routing and theme provider.
 * @returns The application with routing and layout.
 */
const App: FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;