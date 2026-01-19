import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import SectionHeader from '@/components/shared/SectionHeader';
import { projects, getCategories } from '@/data';

/**
 * Work Page - Portfolio showcase page
 */
const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = getCategories();

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-black border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <SectionHeader
              badge="Portfolio"
              icon="Briefcase"
              title="My Work"
              description="A collection of real-world applications built with modern web technologies, featuring full-stack development, microservices, and AI integration."
            />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-white mb-1">{projects.length}+</p>
                <p className="text-xs sm:text-sm text-gray-400">Projects</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-white mb-1">{categories.length - 1}</p>
                <p className="text-xs sm:text-sm text-gray-400">Categories</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-xs sm:text-sm text-gray-400">Open Source</p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Icon name="FolderX" size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-sm sm:text-base text-gray-400">No projects found in this category</p>
            </motion.div>
          )}

          <div className="text-center">
            <Button variant="primary" size="lg" to="/contact" icon="MessageCircle">
              Let's Build Something Together
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(WorkPage);
