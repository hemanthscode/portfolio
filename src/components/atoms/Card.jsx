import React, { memo, Suspense } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import LazyImage from "./LazyImage";
import { theme } from "../../constants/theme";

/**
 * Responsive project card with lazy-loaded image and action buttons.
 * @param {Object} props
 * @param {Object} props.project - Project data object.
 * @param {string} props.project.id - Unique project identifier.
 * @param {string} props.project.title - Project title.
 * @param {string} props.project.slug - Project URL slug.
 * @param {string} props.project.shortDescription - Brief project description.
 * @param {string | object} props.project.image - Project image source.
 * @param {string[]} props.project.technologies - List of technologies used.
 * @param {string} props.project.status - Project status (e.g., Completed, In Progress).
 * @param {string} props.project.liveLink - URL to live demo.
 * @param {string} props.project.codeLink - URL to source code.
 * @param {string[]} props.project.features - List of project features.
 * @param {string} props.project.lastUpdated - Last updated date.
 * @returns {JSX.Element}
 * @example
 * <Card project={{ id: "1", title: "Portfolio", ... }} />
 */
const Card = ({ project }) => (
  <article
    className={[
      "flex flex-col w-full min-h-[theme.spacing.cardMinHeight]",
      theme.colors.background,
      theme.borderRadius.default,
      theme.shadow.default,
      "overflow-hidden",
      theme.transition.default,
      theme.shadow.hover,
      "hover:-translate-y-1 hover:scale-[1.025]",
      "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-400",
    ].join(" ")}
    aria-labelledby={`project-title-${project.id}`}
    tabIndex={0}
    role="article"
  >
    <div className="relative w-full px-3 pt-3 pb-0 sm:px-4 sm:pt-4 bg-transparent">
      <div className="rounded-lg overflow-hidden aspect-[16/9] bg-gray-100">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
          }
        >
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-200"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Suspense>
      </div>
    </div>
    <div className={["flex flex-col flex-grow", theme.spacing.gap.sm, "p-4 sm:p-5"].join(" ")}>
      <h3
        id={`project-title-${project.id}`}
        className={[theme.typography.heading.h3, "line-clamp-1", "mb-1"].join(" ")}
        tabIndex={0}
      >
        {project.title}
      </h3>
      <p className={[theme.typography.body.sm, theme.colors.text.secondary, "line-clamp-2", "mb-2"].join(" ")}>
        {project.shortDescription}
      </p>
      <div className="flex flex-row items-center justify-center gap-2 mt-auto">
        <Button
          variant="ghost"
          to={`/work/${project.slug}`}
          icon="Info"
          aria-label={`View details of ${project.title}`}
          className="min-w-[2.5rem] sm:min-w-[5rem] p-2 sm:px-4 sm:py-2"
        >
          <span className="hidden sm:inline">Details</span>
        </Button>
        <Button
          variant="ghost"
          to={project.codeLink}
          target="_blank"
          icon="Github"
          disabled={!project.codeLink}
          aria-label={`View GitHub code of ${project.title}`}
          className="min-w-[2.5rem] sm:min-w-[5rem] p-2 sm:px-4 sm:py-2"
        >
          <span className="hidden sm:inline">Code</span>
        </Button>
        <Button
          variant="ghost"
          to={project.liveLink}
          target="_blank"
          icon="ExternalLink"
          disabled={!project.liveLink}
          aria-label={`View live demo of ${project.title}`}
          className="min-w-[2.5rem] sm:min-w-[5rem] p-2 sm:px-4 sm:py-2"
        >
          <span className="hidden sm:inline">Live</span>
        </Button>
      </div>
    </div>
  </article>
);

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    codeLink: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastUpdated: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(Card);