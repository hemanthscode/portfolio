import { useState, useRef } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import DOMPurify from 'dompurify';
import emailjs from '@emailjs/browser';
import { containerPadding, typography } from '../../constants/theme';

const initialForm = { name: '', email: '', message: '' };


function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);
  const toastTimer = useRef();

  const clearToast = () => {
    setToast({ type: '', message: '' });
  };

  const showToast = (type, message) => {
    clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(clearToast, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: null })); // clear field error
    clearToast(); // hide toast when user starts typing
  };

  const validate = () => {
    let errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(form.email.trim()))
      errs.email = 'Valid email is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearToast();
    setSending(true);

    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      setSending(false);
      return;
    }

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      showToast('error', 'Service error: Contact admin.');
      setSending(false);
      return;
    }

    const payload = {
      name: DOMPurify.sanitize(form.name.trim()),
      email: DOMPurify.sanitize(form.email.trim()),
      message: DOMPurify.sanitize(form.message.trim()),
      time: new Date().toISOString(),
      title: 'Portfolio Contact Form',
    };

    try {
      await emailjs.send(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, payload, VITE_EMAILJS_PUBLIC_KEY);

      setForm(initialForm);
      showToast('success', "Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error(err);
      showToast('error', 'Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`flex w-full ${containerPadding} min-h-screen items-center justify-center py-12 bg-gray-50`}
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col w-full max-w-3xl text-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 id="contact-heading" className={typography.heading.h2}>
            Get in Touch
          </h2>
          <p className={`${typography.body.base} max-w-xl mx-auto text-gray-500`}>
            Have a project in mind? Let&apos;s collaborate! Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <form
          className="flex flex-col w-full max-w-xl mx-auto gap-6 text-left"
          onSubmit={handleSubmit}
          noValidate
        >
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
            disabled={sending}
            required
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
            disabled={sending}
            required
          />
          <div className="relative w-full">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 h-32 resize-none rounded-lg border bg-white ${typography.body.base} text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              } disabled:opacity-50`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={sending}
              required
            />
            {errors.message && (
              <p id="message-error" className={`${typography.body.sm} mt-1 text-red-500`}>
                {errors.message}
              </p>
            )}
          </div>
          <Button
            variant="primary"
            type="submit"
            aria-label={sending ? 'Sending message...' : 'Submit contact form'}
            className={`self-center min-w-32 ${sending ? 'cursor-not-allowed' : ''}`}
            disabled={sending}
          >
            {sending ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </Button>

          {toast.message && (
            <div
              role="status"
              aria-live="polite"
              className={`
                ${typography.body.sm}
                text-center p-4 rounded-lg border shadow-sm animate-fade-in
                ${toast.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                ${toast.type === 'error' ? 'bg-red-50 text-red-700 border-red-200' : ''}
              `}
            >
              <div className="flex items-center justify-center gap-2">
                {toast.type === 'success'
                  ? <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  : toast.type === 'error'
                  ? <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  : null}
                <span>{toast.message}</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
