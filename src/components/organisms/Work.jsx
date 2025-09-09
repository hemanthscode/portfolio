import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { projects } from "../../data";

const Work = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category || "Web"))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => (p.category || "Web") === filter);

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section id="work" className="py-20 lg:py-32 bg-gray-950 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-blue-500/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-purple-500/2 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full mb-6">
              <Icon name="Briefcase" size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 leading-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafted with passion, built with precision
            </p>
          </motion.div>
          
          {/* Filter Tabs */}
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-900/40 text-gray-300 hover:bg-gray-800/60 hover:text-white border border-gray-800/50 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid - Perfect Uniform Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 place-items-center">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={isReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
              Impressed by what you see?
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Let's collaborate and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contact" icon="MessageCircle" size="lg">
                Start a Project
              </Button>
              <Button variant="secondary" href="https://github.com/hemanthscode" icon="Github" size="lg">
                View All Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Work);