// src/components/organisms/Contact.tsx
import { FC, FormEvent, useState, useMemo } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icon';
import { useTheme } from '@contexts/ThemeContext';
import { useReducedMotion } from 'framer-motion';

/**
 * A contact form section with submission feedback.
 * @returns A styled contact form section.
 */
const Contact: FC = () => {
  const { colors } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Placeholder for API call
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const inputStyles = useMemo(
    () =>
      `block w-full rounded-md border border-[${colors.text.secondary}/0.3] bg-[${colors.background}] text-[${colors.text.primary}] shadow-sm focus:border-[${colors.primary}] focus:ring-2 focus:ring-[${colors.primary}/0.5] transition-default py-3 px-4`,
    [colors],
  );

  return (
    <section
      className={`py-20 bg-[${colors.background}]`}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="contact-heading"
          className={`text-4xl sm:text-5xl font-bold text-[${colors.text.primary}] mb-12 text-center tracking-tight`}
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          noValidate
        >
          <motion.div variants={childVariants}>
            <label
              htmlFor="name"
              className={`block text-sm font-medium text-[${colors.text.secondary}] mb-2`}
            >
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputStyles}
              required
              aria-required="true"
              whileFocus={shouldReduceMotion ? {} : { boxShadow: `0 0 0 3px ${colors.primary}/0.2` }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-[${colors.text.secondary}] mb-2`}
            >
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputStyles}
              required
              aria-required="true"
              whileFocus={shouldReduceMotion ? {} : { boxShadow: `0 0 0 3px ${colors.primary}/0.2` }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <label
              htmlFor="message"
              className={`block text-sm font-medium text-[${colors.text.secondary}] mb-2`}
            >
              Message
            </label>
            <motion.textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputStyles} resize-y min-h-[120px]`}
              rows={6}
              required
              aria-required="true"
              whileFocus={shouldReduceMotion ? {} : { boxShadow: `0 0 0 3px ${colors.primary}/0.2` }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <Button
              type="submit"
              className={`w-full py-3 text-lg font-semibold flex items-center justify-center gap-2 bg-[${colors.primary}] text-white hover:bg-[${colors.primary}/0.9]`}
              aria-label="Send message"
            >
              Send Message
              <Icon name="Send" size="sm" />
            </Button>
          </motion.div>
          <AnimatePresence>
            {status !== 'idle' && (
              <motion.div
                className={`text-center text-sm font-medium ${
                  status === 'success'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {status === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;