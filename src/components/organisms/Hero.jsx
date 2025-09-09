import React, { memo } from "react";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import { personal } from "../../data";

const Hero = () => {
  return (
    <section className="above-fold bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full text-center mobile-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Available for work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-100 mb-6">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-normal mb-6">
              {personal.title}
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {personal.bio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              to="/work"
              icon="Briefcase"
              className="w-full sm:w-auto min-w-[200px]"
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/contact"
              icon="Mail"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-400">Fresher</span>
              <span className="text-sm text-gray-400">Open to Learn</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-purple-400">5+</span>
              <span className="text-sm text-gray-400">Academic Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-green-400">100%</span>
              <span className="text-sm text-gray-400">Dedication</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
