import { memo } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { ArrowRight } from 'lucide-react';
import { getCategoryIcon } from '@/utils/helpers';
import { containerVariants, itemVariants, buttonVariants } from '@/utils/animations';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const WorkTimeline = () => {
  const { work } = usePortfolioStore();
  const featuredProjects = work.projects.filter(project => project.featured);

  return (
    <motion.section
      className={`py-12 sm:py-16 lg:py-20 bg-background ${containerPadding}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="work-title"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm sm:text-base font-medium mb-4">
            <Icon
              icon={getCategoryIcon(work.projects[0]?.category || 'web')}
              className="w-5 h-5 mr-2"
              aria-hidden="true"
            />
            <Typography variant={TypographyVariant.Span}>
              {work.title || 'My Work'}
            </Typography>
          </div>
          <Typography
            variant={TypographyVariant.H2}
            id="work-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text"
          >
            Featured
            <span className="text-primary"> Projects</span>
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className="text-accent mt-2 max-w-2xl mx-auto text-base sm:text-lg"
          >
            {work.description || 'Innovative solutions crafted with modern technologies.'}
          </Typography>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2"
            aria-hidden="true"
          />
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'} mb-8 sm:mb-12 relative`}
                variants={itemVariants}
              >
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        icon={getCategoryIcon(project.category)}
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                      <Typography
                        variant={TypographyVariant.Span}
                        className="text-xs sm:text-sm font-medium text-gray-600 uppercase"
                      >
                        {project.category}
                      </Typography>
                    </div>
                    <Typography
                      variant={TypographyVariant.H3}
                      className="text-lg sm:text-xl font-bold text-text"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant={TypographyVariant.P}
                      className="text-sm sm:text-base text-accent mt-2"
                    >
                      {project.description}
                    </Typography>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      {project.live !== '#' && (
                        <Button
                          href={project.live}
                          variant={Variant.Primary}
                          size={Size.Small}
                          ariaLabel={`View live demo of ${project.title}`}
                          className="flex-1"
                        >
                          Demo
                        </Button>
                      )}
                      <Button
                        href={project.githubUrl}
                        variant={Variant.Outline}
                        size={Size.Small}
                        ariaLabel={`View ${project.title} code on GitHub`}
                        className="flex-1"
                      >
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden sm:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 top-6"
                  aria-hidden="true"
                />
              </motion.div>
            ))
          ) : (
            <Typography
              variant={TypographyVariant.P}
              className="text-accent text-center"
            >
              No featured projects available.
            </Typography>
          )}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants}>
            <Button
              to="/work"
              variant={Variant.Primary}
              size={Size.Large}
              ariaLabel="View all projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3"
            >
              View All Projects
              <Icon
                icon={ArrowRight}
                className="ml-2 w-5 h-5"
                aria-hidden="true"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(WorkTimeline);