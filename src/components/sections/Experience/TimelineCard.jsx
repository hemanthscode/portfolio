import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';

const TimelineCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="relative"
  >
    {/* Connection Line */}
    {index > 0 && (
      <div className="hidden lg:block absolute left-7 -top-8 w-0.5 h-8 bg-gradient-to-b from-transparent via-white/20 to-white/20" />
    )}

    <div className={cn(
      'relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl group',
      `bg-gradient-to-br ${item.bgGradient}`,
      `border-2 ${item.borderColor}`,
      'hover:border-white/30 transition-all duration-300'
    )}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6">
        {/* Icon - Centered on mobile */}
        <div className={cn(
          'w-16 h-16 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0',
          `bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor}`,
          'group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'
        )}>
          <Icon name={item.icon} size={32} className={`${item.iconColor} sm:w-7 sm:h-7`} />
        </div>

        {/* Content - Centered on mobile */}
        <div className="flex-1 min-w-0 text-center sm:text-left">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
            <Badge variant={item.status?.variant || 'neutral'} pulse={item.status?.pulse} size="sm">
              {item.year}
            </Badge>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs sm:text-sm text-gray-400 font-medium">{item.period}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
            {item.title || item.role || item.degree}
          </h3>
          
          {/* Organization */}
          <p className="text-sm sm:text-base text-gray-300 font-medium mb-2">
            {item.organization || item.institution || item.company}
          </p>
          
          {/* Location */}
          <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 justify-center sm:justify-start">
            <Icon name="MapPin" size={14} />
            {item.location}
          </p>
        </div>
      </div>

      {/* Story */}
      {item.story && (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border-l-4 border-blue-400/50">
          <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
            "{item.story}"
          </p>
        </div>
      )}

      {/* Learnings */}
      {item.learnings?.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm sm:text-base font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-yellow-400/20 flex items-center justify-center">
              <Icon name="Lightbulb" size={14} className="text-yellow-400" />
            </div>
            What I Learned
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {item.learnings.map((learning, i) => (
              <div key={i} className="flex gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Icon name="Check" size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-relaxed">{learning}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Takeaway */}
      {item.keyTakeaway && (
        <div className="pt-5 border-t-2 border-white/10">
          <div className="flex gap-3 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
              <Icon name="Star" size={16} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1.5 uppercase tracking-wider font-bold">
                Key Takeaway
              </p>
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                {item.keyTakeaway}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

TimelineCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(TimelineCard);
