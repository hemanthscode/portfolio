import React, { memo } from "react";
import Button from "../components/atoms/Button";
import { theme } from "../constants/theme";

/**
 * 404 page for handling invalid routes.
 * @returns {JSX.Element}
 * @example
 * <NotFoundPage />
 */
const NotFoundPage = () => (
  <section
    className={`w-full ${theme.spacing.container} ${theme.spacing.section} min-h-screen flex items-center justify-center ${theme.colors.background}`}
    aria-labelledby="not-found-heading"
    role="region"
  >
    <div className={`max-w-4xl mx-auto flex flex-col ${theme.spacing.gap.md} text-center`}>
      <h2 id="not-found-heading" className={`${theme.typography.heading.h2}`}>
        404 - Page Not Found
      </h2>
      <p className={`${theme.typography.body.base} ${theme.colors.text.secondary}`}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Button variant="primary" to="/" aria-label="Return to Home">
        Back to Home
      </Button>
    </div>
  </section>
);

export default memo(NotFoundPage);