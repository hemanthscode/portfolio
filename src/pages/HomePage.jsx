import React, { memo, Suspense, lazy } from "react";

const Hero = lazy(() => import("../components/organisms/Hero"));
const About = lazy(() => import("../components/organisms/About"));
const Work = lazy(() => import("../components/organisms/Work"));
const Contact = lazy(() => import("../components/organisms/Contact"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-950">
    <div className="w-8 h-8 border-2 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <div>
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  </Suspense>
);

export default memo(HomePage);
