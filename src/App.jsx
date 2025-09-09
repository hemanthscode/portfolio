import React, { memo, useLayoutEffect, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/molecules/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const { pathname } = useLocation();

  // Disable browser scroll restoration and handle scroll on route change
  useLayoutEffect(() => {
    // Disable browser's default scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top immediately on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Ensure scroll to top on initial load and browser refresh
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    // Run on mount
    handleLoad();

    // Handle browser refresh
    window.addEventListener("load", handleLoad);

    // Cleanup event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default memo(App);