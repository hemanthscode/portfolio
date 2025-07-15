import React, { memo } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';
import LazyImage from '../components/atoms/LazyImage';
import { projects } from '../data/';
import NotFoundPage from './NotFoundPage';
import { containerPadding, typography } from '../constants/theme';

/**
 * Individual project page
 * @returns {JSX.Element}
 */
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFoundPage />;

  return (
    <section
      className={`flex w-full ${containerPadding} min-h-screen items-center justify-center py-12 bg-gray-50`}
      aria-labelledby="project-heading"
    >
      <div className="flex flex-col w-full max-w-5xl gap-8">
        <NavLink
          to="/work"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          aria-label="Back to work page"
        >
          <Icon name="ArrowLeft" size={20} />
          Back to Work
        </NavLink>
        <div className="flex flex-col w-full rounded-xl bg-white shadow-lg overflow-hidden">
          <div className="relative w-full h-96">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            <h2 id="project-heading" className="absolute bottom-6 left-6 text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
          <div className="flex flex-col w-full p-8 gap-6">
            <div className="flex flex-col gap-4">
              <h3 className={typography.heading.h3}>Overview</h3>
              <p className={`${typography.body.base} text-gray-500`}>{project.detailedDescription}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className={typography.heading.h3}>Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className={typography.heading.h3}>Features</h3>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className={typography.body.base}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className={typography.heading.h3}>Status</h3>
              <p className={`${typography.body.base} text-gray-500`}>
                {project.status} (Last updated: {project.lastUpdated})
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="primary"
                to={project.liveLink}
                target="_blank"
                icon="ExternalLink"
                disabled={!project.liveLink}
                aria-label={`View live demo of ${project.title}`}
              >
                Live Demo
              </Button>
              <Button
                variant="secondary"
                to={project.codeLink}
                target="_blank"
                icon="Github"
                disabled={!project.codeLink}
                aria-label={`View GitHub code of ${project.title}`}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectPage);