import { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionHeader from '@/components/shared/SectionHeader';
import { CONTACT_CONTENT } from '@/data';
import { useAvailability } from '@/hooks';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = ({ showHeader = true }) => {
  const { config: availabilityConfig, message } = useAvailability();

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {showHeader && (
          <SectionHeader
            badge="Get In Touch"
            icon="MessageCircle"
            title={CONTACT_CONTENT.header.title}
            description={CONTACT_CONTENT.header.description}
          />
        )}

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Form (3 cols) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right - Info (2 cols) */}
          <div className="lg:col-span-2">
            <ContactInfo 
              availabilityConfig={availabilityConfig}
              message={message}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  showHeader: PropTypes.bool,
};

export default memo(Contact);
