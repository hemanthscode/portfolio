import React, { memo } from 'react';
import Button from '../atoms/Button';
import { containerPadding, typography } from '../../constants/theme';

/**
 * Hero section with headline and CTAs
 * @returns {JSX.Element}
 */
const Hero = () => (
  <section className={`flex w-full ${containerPadding} min-h-screen items-center justify-center`}>
    <div className="flex flex-col w-full max-w-4xl text-center gap-6">
      <h1 className={typography.heading.h1}>
        From Full Stack<br />
        <span className="text-gray-700">Foundations</span><br />
        To <span className="text-gray-900">Infinite Iterations</span>
      </h1>
      <p className={`${typography.body.base} max-w-2xl mx-auto text-gray-500`}>
        I live in the loop of build, break, learn, repeat. Every mistake refines my thinking.
        Every breakthrough expands my potential. Growth is the feature I ship with every release.
      </p>
      <div className="grid w-full max-w-xs mx-auto grid-cols-1 sm:grid-cols-2 gap-4">
        <Button variant="primary" to="/work" aria-label="View projects">
          My Builds
        </Button>
        <Button variant="secondary" to="/contact" aria-label="Contact">
          Say Hello
        </Button>
      </div>
    </div>
  </section>
);

export default memo(Hero);