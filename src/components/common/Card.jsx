import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';
import Icon from './Icon';
import Button from './Button';
import Badge from './Badge';
import { PROJECT_STATUS } from '@/utils/constants';

/**
 * Project card component for displaying portfolio items
 * With integrated status badge system
 */
const Card = ({ project, index = 0, className = '' }) => {
  const statusConfig = PROJECT_STATUS[project.status] || PROJECT_STATUS.COMPLETED;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'group relative flex flex-col h-full rounded-xl overflow-hidden',
        'bg-gray-900 border border-gray-800',
        'transition-all duration-300',
        'hover:border-white/30 hover:shadow-lg hover:shadow-white/5',
        className
      )}
    >
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <Icon name="Code2" size={20} className="text-white" />
            </div>
          </div>
          
          <Badge 
            variant={statusConfig.variant}
            size="sm"
            pulse={statusConfig.pulse}
          >
            {statusConfig.label}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1 group-hover:text-gray-300 transition-colors">
          {project.tagline || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2.5 py-1 text-xs text-gray-500">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-gray-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Icon name="Calendar" size={12} />
              {project.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Folder" size={12} />
              {project.category}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="ghost"
              size="sm"
              to={`/work/${project.slug}`}
              icon="Eye"
              className="text-xs"
            >
              View
            </Button>
            {project.liveLink && (
              <Button
                variant="ghost"
                size="sm"
                href={project.liveLink}
                icon="ExternalLink"
                className="text-xs"
              >
                Live
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              href={project.codeLink}
              icon="Github"
              className="text-xs"
            >
              Code
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string,
    tagline: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    codeLink: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Card);
