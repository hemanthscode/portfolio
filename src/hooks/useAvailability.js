import { useMemo } from 'react';
import { AVAILABILITY_STATUS } from '@/utils/constants';
import { personal } from '@/data';

/**
 * Custom hook for availability status
 * Returns configuration and dynamic message based on current status
 */
export const useAvailability = () => {
  const config = useMemo(() => {
    return AVAILABILITY_STATUS[personal.availability] || AVAILABILITY_STATUS.AVAILABLE;
  }, []);

  // Dynamic messages based on availability
  const messages = useMemo(() => {
    const messageMap = {
      AVAILABLE: [
        '✨ Open to New Opportunities',
        '🚀 Available for Projects',
        '💡 Ready to Build',
        '⚡ Open for Work',
        '🎯 Available Now',
        '🌟 Let\'s Collaborate',
      ],
      BUSY: [
        '🔥 Currently Building',
        '⚙️ Active on Projects',
        '💼 Limited Availability',
        '🚧 Selective Projects',
        '📊 Partially Available',
      ],
      UNAVAILABLE: [
        '🔒 Fully Booked',
        '⏸️ Not Available',
        '📅 Schedule Full',
        '🚫 Currently Unavailable',
      ],
    };

    const statusMessages = messageMap[personal.availability] || messageMap.AVAILABLE;
    return statusMessages[Math.floor(Math.random() * statusMessages.length)];
  }, []);

  return {
    config,
    message: messages,
  };
};
