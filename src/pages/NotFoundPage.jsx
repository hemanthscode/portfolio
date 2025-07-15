import React, { memo } from 'react';
import Button from '../components/atoms/Button';
import { containerPadding, typography } from '../constants/theme';

/**
 * 404 page for handling invalid routes
 * @returns {JSX.Element}
 */
const NotFoundPage = () => (
  <section className={`flex w-full ${containerPadding} min-h-screen items-center justify-center bg-gray-50`}>
    <div className="flex flex-col w-full max-w-4xl text-center gap-6">
      <h2 className={typography.heading.h2}>404 - Page Not Found</h2>
      <p className={`${typography.body.base} text-gray-500`}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Button
        variant="primary"
        to="/"
        aria-label="Return to Home"
      >
        Back to Home
      </Button>
    </div>
  </section>
);

export default memo(NotFoundPage);