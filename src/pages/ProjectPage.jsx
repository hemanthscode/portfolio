import React, { memo, Suspense } from "react";
import { useParams, NavLink } from "react-router-dom";
import Button from "../components/atoms/Button";
import Icon from "../components/atoms/Icon";
import LazyImage from "../components/atoms/LazyImage";
import { projects } from "../data";
import NotFoundPage from "./NotFoundPage";
import { theme } from "../constants/theme";
import PropTypes from "prop-types";

/**
 * Feature card for displaying project features.
 * @param {Object} props
 * @param {string} props.feature - Feature description.
 * @param {number} props.index - Feature index for numbering.
 * @returns {JSX.Element}
 */
const FeatureCard = ({ feature, index }) => (
  <div
    className={`flex items-start gap-4 p-4 ${theme.colors.featureBackground} ${theme.borderRadius.default}`}
  >
    <div
      className={`${theme.colors.iconBackground} ${theme.borderRadius.full} p-2 mt-1`}
    >
      <Icon name="CheckCircle" size={16} className={theme.colors.text.accent} />
    </div>
    <div>
      <h3 className={`font-semibold ${theme.colors.text.primary} mb-1`}>
        Feature {index + 1}
      </h3>
      <p className={theme.colors.text.secondary}>{feature}</p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  feature: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

/**
 * Project page displaying detailed project information.
 * @returns {JSX.Element}
 * @example
 * <ProjectPage />
 */
const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFoundPage />;

  return (
    <main
      className={`min-h-screen ${theme.colors.background} ${theme.spacing.headerOffset}`}
      role="main"
    >
      <header
        className={`${theme.colors.border} border-b ${theme.colors.background}/80 ${theme.colors.backdropBlur} sticky top-0 z-40`}
      >
        <div
          className={`max-w-7xl mx-auto ${theme.spacing.container} ${theme.spacing.navPadding}`}
        >
          <div className="flex items-center justify-between">
            <NavLink
              to="/work"
              className={`inline-flex items-center ${theme.spacing.gap.sm} ${theme.colors.text.secondary} hover:${theme.colors.text.primary} ${theme.transition.default} font-medium`}
              aria-label="Back to work"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="hidden sm:inline">Back to Work</span>
            </NavLink>
            <div className={`flex items-center ${theme.spacing.gap.sm}`}>
              <div
                className={`w-3 h-3 ${theme.borderRadius.full} ${
                  project.status === "Completed"
                    ? theme.colors.statusCompleted
                    : theme.colors.statusInProgress
                }`}
              ></div>
              <span
                className={`${theme.typography.body.sm} font-medium ${theme.colors.text.secondary}`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </header>
      <article
        className={`max-w-6xl mx-auto ${theme.spacing.container} ${theme.spacing.section} lg:${theme.spacing.sectionLarge}`}
      >
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className={theme.typography.heading.h1}>{project.title}</h1>
            <p
              className={`${theme.typography.body.base} font-light leading-relaxed mb-8`}
            >
              {project.shortDescription}
            </p>
            <div
              className={`flex flex-wrap justify-center ${theme.spacing.gap.md} ${theme.typography.body.sm} ${theme.colors.text.muted} mb-8`}
            >
              <span>Last updated: {project.lastUpdated}</span>
              <span>•</span>
              <span>{project.technologies.length} Technologies</span>
              <span>•</span>
              <span>{project.features.length} Features</span>
            </div>
            <div
              className={`flex flex-col sm:flex-row ${theme.spacing.gap.md} justify-center`}
            >
              <Button
                variant="primary"
                to={project.liveLink}
                target="_blank"
                icon="ExternalLink"
                disabled={!project.liveLink}
                className={`${theme.shadow.default} ${theme.shadow.hover}`}
              >
                View Live Demo
              </Button>
              <Button
                variant="secondary"
                to={project.codeLink}
                target="_blank"
                icon="Github"
                disabled={!project.codeLink}
                className={`${theme.shadow.default} ${theme.shadow.hover}`}
              >
                View Source Code
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`mb-16 ${theme.borderRadius.large} overflow-hidden ${theme.shadow.large}`}
        >
          <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200">
            <Suspense
              fallback={
                <div className="w-full h-full animate-pulse bg-gray-200" />
              }
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </Suspense>
          </div>
        </div>
        <div
          className={`grid ${theme.grid.contentGrid} ${theme.spacing.gap.lg}`}
        >
          <div className="lg:col-span-8">
            <section className="mb-12">
              <h2 className={`${theme.typography.heading.h2} mb-6 pb-3`}>
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className={`${theme.colors.text.secondary} leading-relaxed`}>
                  {project.detailedDescription}
                </p>
              </div>
            </section>
            <section className="mb-12">
              <h2 className={`${theme.typography.heading.h2} mb-6 pb-3`}>
                Key Features
              </h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </section>
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div
                className={`${theme.colors.cardBackground} ${theme.borderRadius.default} p-6 ${theme.colors.border}`}
              >
                <h3
                  className={`font-bold ${theme.colors.text.primary} mb-4 flex items-center ${theme.spacing.gap.sm}`}
                >
                  <Icon name="Info" size={20} />
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4
                      className={`font-medium ${theme.colors.text.primary} mb-1`}
                    >
                      Status
                    </h4>
                    <div
                      className={`flex items-center ${theme.spacing.gap.sm}`}
                    >
                      <Icon
                        name={
                          project.status === "Completed"
                            ? "CheckCircle"
                            : "Clock"
                        }
                        size={16}
                        className={
                          project.status === "Completed"
                            ? theme.colors.text.success
                            : theme.colors.text.warning
                        }
                      />
                      <span className={theme.colors.text.secondary}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`font-medium ${theme.colors.text.primary} mb-1`}
                    >
                      Last Updated
                    </h4>
                    <p className={theme.colors.text.secondary}>
                      {project.lastUpdated}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${theme.colors.background} ${theme.borderRadius.default} p-6 ${theme.colors.border} ${theme.shadow.default}`}
              >
                <h3
                  className={`font-bold ${theme.colors.text.primary} mb-4 flex items-center ${theme.spacing.gap.sm}`}
                >
                  <Icon name="Zap" size={20} />
                  Tech Stack
                </h3>
                <div className="space-y-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className={`flex items-center ${theme.spacing.gap.sm} p-3 ${theme.colors.featureBackground} ${theme.borderRadius.default}`}
                    >
                      <Icon
                        name={
                          tech === "React"
                            ? "React"
                            : tech === "Node.js"
                            ? "Nodejs"
                            : "Zap"
                        }
                        size={18}
                        className={theme.colors.text.accent}
                      />
                      <span
                        className={`font-medium ${theme.colors.text.primary}`}
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`${theme.colors.actionBackground} ${theme.borderRadius.default} p-6 ${theme.colors.border}`}
              >
                <h3 className={`font-bold ${theme.colors.text.primary} mb-4`}>
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    to={project.liveLink}
                    target="_blank"
                    icon="ExternalLink"
                    disabled={!project.liveLink}
                    className="w-full justify-center"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="secondary"
                    to={project.codeLink}
                    target="_blank"
                    icon="Github"
                    disabled={!project.codeLink}
                    className="w-full justify-center"
                  >
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
};

export default memo(ProjectPage);
