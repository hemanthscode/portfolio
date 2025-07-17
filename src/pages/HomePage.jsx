import React, { memo, Suspense, lazy } from "react";
import { theme } from "../constants/theme";

const Hero = lazy(() => import("../components/organisms/Hero"));
const About = lazy(() => import("../components/organisms/About"));
const Work = lazy(() => import("../components/organisms/Work"));
const Contact = lazy(() => import("../components/organisms/Contact"));

/**
 * Home page combining Hero, About, Work, and Contact sections.
 * @returns {JSX.Element}
 * @example
 * <HomePage />
 */
const HomePage = () => (
  <main className={`flex flex-col w-full ${theme.spacing.gap.lg} ${theme.spacing.container}`} role="main">
    <Suspense fallback={<div className={`min-h-screen ${theme.colors.background} animate-pulse`} />}>
      <Hero />
      <About />
      <Work />
      <Contact />
    </Suspense>
  </main>
);

export default memo(HomePage);