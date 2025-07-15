import React, { memo } from 'react';
import Card from '../atoms/Card';
import { projects } from '../../data';
import { containerPadding, typography } from '../../constants/theme';

/**
 * Work section displaying project cards
 * @returns {JSX.Element}
 */
const Work = () => (
  <section
    id="work"
    className={`flex w-full ${containerPadding} min-h-screen items-center justify-center py-12`}
    aria-labelledby="work-heading"
  >
    <div className="flex flex-col w-full max-w-6xl text-center gap-8">
      <h2 id="work-heading" className={typography.heading.h2}>
        My Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default memo(Work);