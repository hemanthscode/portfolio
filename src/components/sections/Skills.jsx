import { memo } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';
import SectionHeader from '@/components/shared/SectionHeader';
import { skillCategories, coreCompetencies } from '@/data';
import { SKILL_LEVEL } from '@/utils/constants';

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Skills"
          icon="Layers"
          title="Tech Arsenal"
          description="Tools and technologies I work with"
        />

        {/* Core Competencies - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {coreCompetencies.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Gradient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              
              {/* Card */}
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  {/* Icon - Centered on mobile */}
                  <div className="w-14 h-14 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon name={comp.icon} size={28} className="text-white sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  
                  {/* Content - Centered on mobile */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {comp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      {comp.description}
                    </p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {comp.skills.map(skill => (
                        <span
                          key={skill}
                          className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Categories - Fully Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {Object.values(skillCategories).map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={cat.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gray-100 transition-colors">
                    {cat.name}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map(skill => {
                    const level = SKILL_LEVEL[skill.level] || SKILL_LEVEL.INTERMEDIATE;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm text-gray-300 truncate flex-1">
                          {skill.name}
                        </span>
                        <Badge variant={level.variant} size="sm">
                          {level.label}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
