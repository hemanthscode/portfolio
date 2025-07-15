import React, { memo, Suspense } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import LazyImage from "./LazyImage";
import { typography } from "../../constants/theme";

/**
 * Compact project card with clear, visible elements
 * @param {Object} props
 * @param {Object} props.project - Project data
 * @returns {JSX.Element}
 */
const Card = ({ project }) => (
  <article
    className="flex flex-col w-full max-w-sm h-96 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    aria-labelledby={`project-title-${project.id}`}
  >
    <div className="h-48 p-4">
      <Suspense
        fallback={
          <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />
        }
      >
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Suspense>
    </div>
    <div className="flex flex-col flex-grow gap-4 p-4">
      <h3
        id={`project-title-${project.id}`}
        className={`${typography.heading.h3} text-gray-900`}
      >
        {project.title}
      </h3>
      <p className={`${typography.body.sm} text-gray-600`}>
        {project.shortDescription}
      </p>
      <div className="flex items-center justify-center gap-4 mt-auto">
        <Button
          variant="ghost"
          to={`/work/${project.slug}`}
          icon="Info"
          aria-label={`View details of ${project.title}`}
        />
        <Button
          variant="ghost"
          to={project.codeLink}
          target="_blank"
          icon="Github"
          disabled={!project.codeLink}
          aria-label={`View GitHub code of ${project.title}`}
        />
        <Button
          variant="ghost"
          to={project.liveLink}
          target="_blank"
          icon="ExternalLink"
          disabled={!project.liveLink}
          aria-label={`View live demo of ${project.title}`}
        />
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
