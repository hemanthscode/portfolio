import React, { memo, useCallback, useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import DOMPurify from 'dompurify';
import { containerPadding, typography } from '../../constants/theme';

/**
 * Contact form with validation and sanitization
 * @returns {JSX.Element}
 */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submission:', {
      ...formData,
      timestamp: new Date().toISOString(),
    });
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  }, [formData, validateForm]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: DOMPurify.sanitize(value) }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  return (
    <section
      id="contact"
      className={`flex w-full ${containerPadding} min-h-screen items-center justify-center py-12`}
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col w-full max-w-3xl text-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 id="contact-heading" className={typography.heading.h2}>
            Get in Touch
          </h2>
          <p className={`${typography.body.base} max-w-xl mx-auto text-gray-500`}>
            Have a project in mind? Let’s collaborate! Send me a message and I’ll get back to you soon.
          </p>
        </div>
        <div className="flex flex-col w-full max-w-xl mx-auto gap-6 text-left">
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <div className="relative w-full">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 h-32 resize-none rounded-lg border bg-white ${typography.body.base} text-gray-800 ${errors.message ? 'border-error' : 'border-gray-300'}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className={`mt-1 ${typography.body.sm} text-error`}>{errors.message}</p>
            )}
          </div>
          <Button
            variant="primary"
            onClick={handleSubmit}
            aria-label="Submit contact form"
            className="self-center"
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);