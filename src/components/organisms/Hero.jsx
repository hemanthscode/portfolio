import React, { memo } from "react";
import Button from "../atoms/Button";
import { theme } from "../../constants/theme";

/**
 * Hero section with headline and call-to-action buttons.
 * @returns {JSX.Element}
 * @example
 * <Hero />
 */
const Hero = () => (
  <section
    className={`w-full ${theme.spacing.container} ${theme.spacing.section} min-h-screen flex items-center justify-center ${theme.colors.background}`}
    aria-labelledby="hero-heading"
    role="region"
  >
    <div className={`max-w-4xl mx-auto flex flex-col ${theme.spacing.gap.md} text-center`}>
      <h1 id="hero-heading" className={`${theme.typography.heading.h1}`}>
        From Full Stack<br />
        <span className={`${theme.colors.text.success}`}>Foundations</span><br />
        To <span className={`${theme.colors.text.primary}`}>Infinite Iterations</span>
      </h1>
      <p className={`${theme.typography.body.base} max-w-2xl mx-auto ${theme.colors.text.secondary}`}>
        I live in the loop of build, break, learn, repeat. Every mistake refines my thinking.
        Every breakthrough expands my potential. Growth is the feature I ship with every release.
      </p>
      <div className={`grid ${theme.grid.buttonGrid} ${theme.spacing.gap.sm} max-w-xs mx-auto`}>
        <Button variant="primary" to="/work" aria-label="View projects">
          My Builds
        </Button>
        <Button variant="secondary" to="/contact" aria-label="Contact me">
          Say Hello
        </Button>
      </div>
    </div>
  </section>
);

export default memo(Hero);