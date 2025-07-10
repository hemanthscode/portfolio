import { FC, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Project } from '@/types/project.types';
import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icon';
import { useTheme } from '@contexts/ThemeContext';
import { capitalize } from '@utils/formatters';

/**
 * Props for the ProjectCard component.
 */
interface ProjectCardProps extends Project {}

/**
 * A project card displaying project details with theme-aware styling.
 * @param props - The project props.
 * @returns A styled project card.
 */
const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, link, category }) => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const cardStyles = useMemo(
    () =>
      `bg-[${colors.background}] rounded-lg shadow-lg overflow-hidden h-[28rem] flex flex-col border border-[${colors.primary}/0.1]`,
    [colors],
  );

  return (
    <motion.div
      className={cardStyles}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      role="article"
      aria-labelledby={`project-title-${title}`}
    >
      <img
        src={image}
        alt={`Preview of ${title}`}
        className="w-full h-48 object-cover"
        onError={(e) => (e.currentTarget.src = '/assets/placeholder.jpg')}
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3
          id={`project-title-${title}`}
          className={`text-xl font-semibold text-[${colors.text.primary}] mb-2 line-clamp-2`}
        >
          {title}
        </h3>
        <p className={`text-[${colors.text.secondary}] text-sm mb-3`}>{capitalize(category)}</p>
        <p className={`text-[${colors.text.secondary}] mb-4 text-base line-clamp-3 flex-grow`}>
          {description}
        </p>
        <div className="mt-auto">
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-base font-medium flex items-center justify-center gap-2 bg-[${colors.primary}] text-white hover:bg-[${colors.primary}/0.9]`}
            aria-label={`View ${title} project`}
          >
            View Project
            <Icon name="ArrowRight" size="sm" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;