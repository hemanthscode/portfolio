import React, { memo } from "react";
import { motion } from "framer-motion";
import LazyImage from "../atoms/LazyImage";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { personal, skills } from "../../data";
import profile from "../../assets/Profile.jpg";

const About = () => {
const stats = [
  { number: "Fresher", label: "Open to Learn", icon: "GraduationCap", gradient: "from-blue-500 to-cyan-500" },
  { number: "5+", label: "Academic Projects", icon: "Briefcase", gradient: "from-purple-500 to-pink-500" },
  { number: "100%", label: "Dedication", icon: "Heart", gradient: "from-emerald-500 to-teal-500" },
  { number: "Ongoing", label: "Internship Experience", icon: "Clock", gradient: "from-amber-500 to-orange-500" }
];


  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-950 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-500/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-purple-500/2 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full mb-6">
              <Icon name="User" size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300 font-medium">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 leading-tight">
              Get to <span className="gradient-text">Know Me</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Profile Image - Clean & Professional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl shadow-black/40">
                <LazyImage
                  src={profile}
                  alt="Hemanth - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-white text-sm font-semibold">Available for Work</span>
                    </div>
                    <p className="text-white/80 text-xs">Ready for new opportunities</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <Icon name="Zap" size={16} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4 leading-tight">
                Hello, I'm <span className="gradient-text">{personal.name}</span>
              </h3>
              <p className="text-lg text-blue-400 font-semibold mb-6">{personal.title}</p>
              <div className="space-y-4">
                <p className="text-base text-gray-300 leading-relaxed">
                  {personal.bio}
                </p>
                <p className="text-base text-gray-400 leading-relaxed">
                  Based in {personal.location}, I'm passionate about transforming ideas into reality through code. 
                  I believe in creating solutions that are not just functional, but also beautiful and user-friendly.
                </p>
              </div>
            </div>

            {/* Stats Grid - Fixed Heights */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 text-center hover:bg-gray-800/60 transition-all duration-300 h-24 flex flex-col justify-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center`}>
                      <Icon name={stat.icon} size={12} className="text-white" />
                    </div>
                    <span className={`text-lg font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" to="/contact" icon="MessageCircle" className="sm:flex-1">
                Let's Work Together
              </Button>
              <Button variant="secondary" size="lg" href="https://github.com/hemanthscode" icon="Github" className="sm:flex-1">
                View GitHub
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 text-center hover:bg-gray-800/60 hover:border-gray-700/60 transition-all duration-300 group h-20 flex flex-col justify-center"
              >
                <h4 className="font-semibold text-gray-200 text-sm group-hover:text-blue-400 transition-colors duration-300 mb-1">
                  {skill.name}
                </h4>
                <p className="text-xs text-gray-500">{skill.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
              Ready to Start Something Great?
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              I'm always excited to work on interesting projects. Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contact" icon="MessageCircle" size="lg">
                Get In Touch
              </Button>
              <Button variant="secondary" to="/work" icon="Eye" size="lg">
                View My Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(About);