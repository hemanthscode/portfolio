import React, { memo } from "react";
import Card from "../atoms/Card";
import { projects } from "../../data";
import { theme } from "../../constants/theme";

/**
 * Work section displaying project cards in a responsive grid.
 * @returns {JSX.Element}
 * @example
 * <Work />
 */
const Work = () => (
  <section
    id="work"
    className={`w-full ${theme.spacing.container} ${theme.spacing.section} min-h-screen flex items-center justify-center ${theme.colors.background}`}
    aria-labelledby="work-heading"
    role="region"
  >
    <div className={`max-w-6xl mx-auto flex flex-col ${theme.spacing.gap.lg} text-center`}>
      <h2 id="work-heading" className={`${theme.typography.heading.h2}`}>
        My Work
      </h2>
      <div className={`grid ${theme.grid.projectGrid} ${theme.spacing.gap.md}`}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default memo(Work);