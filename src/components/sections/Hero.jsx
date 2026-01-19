import { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';
import { personal } from '@/data';
import { useAvailability } from '@/hooks';

/**
 * Hero Section - Clean, focused landing with availability badge
 */
const Hero = () => {
  const { config: availabilityConfig, message } = useAvailability();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse-subtle" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <Badge 
              variant={availabilityConfig.variant}
              pulse={availabilityConfig.pulse}
              size="md"
            >
              {message}
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 sm:mb-12 lg:mb-14"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-5 sm:mb-6 leading-[1.1] tracking-tight">
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400 font-medium mb-5 sm:mb-6 px-2">
              {personal.title}
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-4">
              {personal.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Button
              variant="primary"
              size="lg"
              to="/work"
              icon="Briefcase"
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/contact"
              icon="MessageCircle"
              className="w-full sm:w-auto"
            >
              Let's Talk
            </Button>
          </motion.div>

          {/* Trusted By / Featured Skills (Optional subtle indicator) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 sm:mt-20 lg:mt-24"
          >
            <p className="text-xs sm:text-sm text-gray-600 mb-4 uppercase tracking-wider">
              Trusted Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-40 hover:opacity-60 transition-opacity">
              <Icon name="Code2" size={24} className="text-gray-400" />
              <Icon name="Database" size={24} className="text-gray-400" />
              <Icon name="Layers" size={24} className="text-gray-400" />
              <Icon name="Zap" size={24} className="text-gray-400" />
              <Icon name="Globe" size={24} className="text-gray-400" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden lg:flex absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3"
      >
        {/* Vertical Text */}
        <span className="text-[10px] font-bold bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">
          Scroll
        </span>
        
        {/* Animated Chevron */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <Icon 
            name="ChevronDown" 
            size={20} 
            className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
          />
        </motion.div>
        
        {/* Gradient Line */}
        <div className="w-px h-24 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent rounded-full" />
        
        {/* Glowing Dot */}
        <motion.div
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        />
      </motion.div>

      {/* Scroll Indicator - Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="lg:hidden absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          {/* Text with Gradient */}
          <span className="text-[10px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
            Scroll
          </span>
          
          {/* Animated Chevron */}
          <Icon 
            name="ChevronDown" 
            size={16} 
            className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]" 
          />
          
          {/* Glowing Dot */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)] mt-0.5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
