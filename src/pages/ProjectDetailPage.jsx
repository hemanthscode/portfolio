import { memo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import LazyImage from '@/components/common/LazyImage';
import Card from '@/components/common/Card';
import { getProjectBySlug, projects } from '@/data';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              size="md"
              to="/work"
              icon="ArrowLeft"
              className="mb-8"
            >
              Back to Projects
            </Button>

            {/* Project Header */}
            <div className="mb-8">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg text-sm text-green-400 font-medium">
                  {project.status}
                </span>
                <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-400 font-medium">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                {project.title}
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-4xl">
                {project.tagline || project.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.liveLink && (
                <Button
                  variant="primary"
                  size="lg"
                  href={project.liveLink}
                  icon="ExternalLink"
                >
                  View Live Site
                </Button>
              )}
              <Button
                variant="secondary"
                size="lg"
                href={project.codeLink}
                icon="Github"
              >
                Source Code
              </Button>
            </div>

            {/* Project Image - Full Landscape */}
            {project.image && (
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Metadata */}
      <section className="py-8 sm:py-12 bg-gray-950 border-y border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <Icon name="Calendar" size={20} className="text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Year</p>
              <p className="text-base sm:text-lg text-white font-bold">{project.year}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <Icon name="Clock" size={20} className="text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Duration</p>
              <p className="text-base sm:text-lg text-white font-bold">{project.duration || 'N/A'}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <Icon name="User" size={20} className="text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Role</p>
              <p className="text-base sm:text-lg text-white font-bold">{project.role || 'Solo Dev'}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <Icon name="Tag" size={20} className="text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Category</p>
              <p className="text-base sm:text-lg text-white font-bold">{project.category}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {/* Overview */}
            {project.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-blue-400" />
                  </div>
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            )}

            {/* Challenge, Solution, Outcome */}
            {(project.challenge || project.solution || project.outcome) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {project.challenge && (
                  <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Icon name="Target" size={24} className="text-red-400" />
                      The Challenge
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">{project.challenge}</p>
                  </div>
                )}

                {project.solution && (
                  <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Icon name="Lightbulb" size={24} className="text-blue-400" />
                      The Solution
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">{project.solution}</p>
                  </div>
                )}

                {project.outcome && (
                  <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Icon name="CheckCircle" size={24} className="text-green-400" />
                      The Outcome
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">{project.outcome}</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-purple-400" />
                  </div>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <Icon name="Check" size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                  <Icon name="Code2" size={20} className="text-yellow-400" />
                </div>
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Metrics */}
            {project.metrics && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-green-400" />
                  </div>
                  Project Metrics
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-sm text-gray-500 mb-2 capitalize">{key}</p>
                      <p className="text-2xl font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-950 border-t border-white/10">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                Related Projects
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Card key={relatedProject.id} project={relatedProject} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Like What You See?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              Let's collaborate and bring your ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact" icon="MessageCircle">
                Start a Project
              </Button>
              <Button variant="secondary" size="lg" to="/work" icon="Briefcase">
                View All Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default memo(ProjectDetailPage);
