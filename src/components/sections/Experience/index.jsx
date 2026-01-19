import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionHeader from '@/components/shared/SectionHeader';
import { personal, EXPERIENCE_CONTENT } from '@/data';
import { TIMELINE_STATUS } from '@/utils/constants';
import TimelineCard from './TimelineCard';
import ProgressOverview from './ProgressOverview';

// Phase Label Component
const PhaseLabel = ({ phase, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-3 mb-6 sm:mb-8"
  >
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/50" />
      <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
        Phase {index + 1}
      </span>
    </div>
    <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
    <span className="text-xs text-gray-500 uppercase tracking-wide hidden sm:inline">{phase}</span>
  </motion.div>
);

PhaseLabel.propTypes = {
  phase: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

// Build Timeline Helper
const buildTimeline = () => {
  const timeline = [];
  
  personal.education.forEach(edu => {
    const styling = edu.status === 'ONGOING'
      ? EXPERIENCE_CONTENT.timeline.advancedEducation
      : EXPERIENCE_CONTENT.timeline.education;
    
    timeline.push({
      ...edu,
      ...styling,
      status: TIMELINE_STATUS[edu.status] || TIMELINE_STATUS.COMPLETED,
    });
  });

  personal.experience.forEach(exp => {
    timeline.push({
      ...exp,
      ...EXPERIENCE_CONTENT.timeline.experience,
      status: TIMELINE_STATUS[exp.status] || TIMELINE_STATUS.COMPLETED,
    });
  });

  return timeline.sort((a, b) => (a.startDate || '0').localeCompare(b.startDate || '0'));
};

// Main Component
const Experience = ({ showHeader = true }) => {
  const timelineItems = buildTimeline();

  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header */}
        {showHeader && (
          <div className="mb-12 sm:mb-16">
            <SectionHeader
              badge={EXPERIENCE_CONTENT.header.title}
              icon="Map"
              title={EXPERIENCE_CONTENT.header.subtitle}
              description={EXPERIENCE_CONTENT.header.description}
            />
            <div className="mt-10 sm:mt-12">
              <ProgressOverview />
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="space-y-10 sm:space-y-12">
          {timelineItems.map((item, i) => (
            <div key={item.id || i}>
              <PhaseLabel phase={item.phase} index={i} />
              <TimelineCard item={item} index={i} />
            </div>
          ))}
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border-2 border-green-500/30 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full" />
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {EXPERIENCE_CONTENT.currentStatus.title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {EXPERIENCE_CONTENT.currentStatus.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  showHeader: PropTypes.bool,
};

export default memo(Experience);
