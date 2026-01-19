import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Icon from '@/components/common/Icon';
import SectionHeader from '@/components/shared/SectionHeader';
import { projects, getCategories } from '@/data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = getCategories();
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Work"
          icon="Briefcase"
          title="Selected Projects"
          description="Real-world applications built with modern technologies"
        />

        {/* Filter Tabs - Fully Responsive */}
        <div className="mb-10 sm:mb-12">
          {/* Mobile: Scrollable horizontal */}
          <div className="flex sm:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-white/5 text-gray-300 border border-white/10'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Tablet & Desktop: Centered wrap */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Active indicator */}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </div>

          {/* Project Count */}
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-xs sm:text-sm text-gray-500 mt-4"
          >
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </motion.p>
        </div>

        {/* Projects Grid - Fully Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 sm:py-20"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Icon name="FolderX" size={32} className="text-gray-600 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-sm sm:text-base text-gray-400">
              No projects available in the "{activeFilter}" category
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Button variant="primary" size="lg" to="/contact" icon="MessageCircle">
            Start a Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);
