import { memo, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout';
import {
  HomePage,
  AboutPage,
  WorkPage,
  ProjectDetailPage,
  ContactPage,
  NotFoundPage,
} from '@/pages';

/**
 * Main App component
 * Handles routing and scroll behavior
 */
const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useLayoutEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle initial load scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default memo(App);
