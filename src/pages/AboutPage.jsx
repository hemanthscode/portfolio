import { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';
import { Skills, Experience } from '@/components/sections';
import { personal } from '@/data';

/**
 * About Page - Dedicated about page
 */
const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header with Badge */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              >
                <Icon name="User" size={16} className="text-blue-400" />
                <span className="text-sm text-gray-400 font-medium">About Me</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                {personal.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-blue-400 font-medium mb-3"
              >
                {personal.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
              >
                {personal.tagline}
              </motion.p>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Left Column - Bio */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Who I Am</h2>
                </div>
                <p className="text-base text-gray-400 leading-relaxed">
                  {personal.bio}
                </p>
              </motion.div>

              {/* Right Column - Description */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Icon name="Target" size={24} className="text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">What I Do</h2>
                </div>
                <p className="text-base text-gray-400 leading-relaxed">
                  {personal.description}
                </p>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
            >
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                <Icon name="GraduationCap" size={24} className="text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">BSc + MCA</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Education</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                <Icon name="Briefcase" size={24} className="text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">6 Months</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Experience</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                <Icon name="Code2" size={24} className="text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">MERN</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Stack</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                <Icon name="MapPin" size={24} className="text-orange-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">{personal.location}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Based In</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" to="/contact" icon="Mail">
                Get In Touch
              </Button>
              <Button variant="secondary" size="lg" to="/work" icon="Briefcase">
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Experience Sections */}
      <Skills />
      <Experience />
    </>
  );
};

export default memo(AboutPage);
