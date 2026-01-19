import { memo } from 'react';
import { motion } from 'framer-motion';
import { Contact } from '@/components/sections';
import SectionHeader from '@/components/shared/SectionHeader';

/**
 * Contact Page - Dedicated contact page
 */
const ContactPage = () => {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-black border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeader
              badge="Contact"
              icon="Mail"
              title="Let's Work Together"
              description="Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and let's create something amazing."
            />
          </motion.div>
        </div>
      </section>

      <Contact showHeader={false} />
    </>
  );
};

export default memo(ContactPage);
