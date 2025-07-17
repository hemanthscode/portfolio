import React, { memo } from "react";
import About from "../components/organisms/About";

/**
 * About page rendering the About section.
 * @returns {JSX.Element}
 * @example
 * <AboutPage />
 */
const AboutPage = () => (
  <main role="main">
    <About />
  </main>
);

export default memo(AboutPage);