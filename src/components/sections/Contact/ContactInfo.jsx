import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';
import { personal, CONTACT_CONTENT } from '@/data';

const ContactInfo = ({ availabilityConfig, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="space-y-6 h-full flex flex-col"
    >
      {/* Availability Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
        <div className="mb-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
            Current Status
          </h4>
          <Badge 
            variant={availabilityConfig.variant} 
            pulse={availabilityConfig.pulse} 
            size="lg"
            className="w-full justify-center py-3"
          >
            {message}
          </Badge>
        </div>
      </div>

      {/* Contact Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex-1">
        <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-6">
          Contact Details
        </h4>
        
        <div className="space-y-5">
          {/* Email */}
          <a
            href={`mailto:${personal.contact.email}`}
            className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon name="Mail" size={18} className="text-blue-400" />
              <span className="text-xs text-gray-500 uppercase tracking-wide">Email</span>
            </div>
            <p className="text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors font-medium break-all">
              {personal.contact.email}
            </p>
          </a>

          {/* Location */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="MapPin" size={18} className="text-purple-400" />
              <span className="text-xs text-gray-500 uppercase tracking-wide">Location</span>
            </div>
            <p className="text-sm sm:text-base text-white font-medium">{personal.location}</p>
          </div>
        </div>

        {/* Quick Info - Enhanced for Mobile */}
        <div className="mt-6 pt-6 border-t border-white/10">
  <div className="space-y-4">
    {/* Response Time */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
        <Icon name="Clock" size={18} className="text-blue-400" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-1">Response Time</p>
        <p className="text-sm sm:text-base text-white font-bold">
          {CONTACT_CONTENT.availability.responseTime}
        </p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
        <Icon name="Calendar" size={18} className="text-purple-400" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-1">Working Hours</p>
        <p className="text-sm sm:text-base text-white font-bold">
          {CONTACT_CONTENT.availability.preferredHours}
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </motion.div>
  );
};

ContactInfo.propTypes = {
  availabilityConfig: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default memo(ContactInfo);
