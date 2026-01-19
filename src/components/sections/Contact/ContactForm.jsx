import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import Icon from '@/components/common/Icon';
import { EMAIL_CONFIG, MESSAGES } from '@/utils/constants';
import { isValidEmail, sanitizeInput } from '@/utils/helpers';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Min 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus({ type: 'error', message: MESSAGES.error.validation });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          message: sanitizeInput(formData.message),
        },
        EMAIL_CONFIG.publicKey
      );
      setStatus({ type: 'success', message: MESSAGES.success.contactForm });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: MESSAGES.error.contactForm });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 h-full">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
          <p className="text-gray-400">I'll respond within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input
              name="name"
              label="Your Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <Input
              name="email"
              type="email"
              label="Your Email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </div>

          <Textarea
            name="message"
            label="Your Message"
            placeholder="Tell me about your project or just say hello..."
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            rows={6}
            maxLength={1000}
            showCharCount
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            icon={isSubmitting ? 'Loader2' : 'Send'}
            fullWidth
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl border flex items-start gap-3 ${
                status.type === 'success'
                  ? 'bg-green-500/10 border-green-500/20'
                  : 'bg-red-500/10 border-red-500/20'
              }`}
            >
              <Icon
                name={status.type === 'success' ? 'CheckCircle' : 'AlertCircle'}
                size={20}
                className={`flex-shrink-0 mt-0.5 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
              />
              <div>
                <p className={`font-medium mb-1 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.type === 'success' ? 'Message Sent!' : 'Error Occurred'}
                </p>
                <p className="text-sm text-gray-400">{status.message}</p>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default memo(ContactForm);
