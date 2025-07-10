import { FC, useState, useMemo } from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import ProjectCard from '@components/molecules/ProjectCard';
import Button from '@components/atoms/Button';
import { PROJECTS, ProjectCategory } from '@utils/constants';
import { useTheme } from '@contexts/ThemeContext';
import { capitalize } from '@utils/formatters';

/**
 * A work section displaying filtered project cards.
 * @returns A styled work section.
 */
const Work: FC = () => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const [category, setCategory] = useState<ProjectCategory>(ProjectCategory.All);
  const categories = Object.values(ProjectCategory);
  const filteredProjects = useMemo(
    () =>
      category === ProjectCategory.All
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === category),
    [category],
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      className={`py-20 bg-[${colors.background}]`}
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="work-heading"
          className={`text-4xl sm:text-5xl font-bold text-[${colors.text.primary}] mb-12 text-center tracking-tight`}
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 text-base font-medium ${
                category === cat
                  ? `bg-[${colors.primary}] text-white`
                  : `bg-[${colors.primary}/0.1] text-[${colors.primary}] hover:bg-[${colors.primary}/0.2]`
              }`}
              aria-pressed={category === cat}
            >
              {capitalize(cat)}
            </Button>
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;