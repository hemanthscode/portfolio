import React, { memo, useState, useRef } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";
import { theme } from "../../constants/theme";

const initialForm = { name: "", email: "", message: "" };

/**
 * Contact section with form and toast notifications.
 * @returns {JSX.Element}
 * @example
 * <Contact />
 */
const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const toastTimer = useRef();

  const clearToast = () => {
    setToast({ type: "", message: "" });
  };

  const showToast = (type, message) => {
    clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(clearToast, 5000);
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
    clearToast();
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(form.email.trim()))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
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

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      showToast("error", "Service error: Contact admin.");
      setSending(false);
      return;
    }

    const payload = {
      name: DOMPurify.sanitize(form.name.trim()),
      email: DOMPurify.sanitize(form.email.trim()),
      message: DOMPurify.sanitize(form.message.trim()),
      time: new Date().toISOString(),
      title: "Portfolio Contact Form",
    };

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        payload,
        VITE_EMAILJS_PUBLIC_KEY
      );
      setForm(initialForm);
      showToast("success", "Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error("EmailJS error:", err);
      showToast("error", "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`w-full ${theme.spacing.container} ${theme.spacing.section} min-h-screen flex items-center justify-center ${theme.colors.background}`}
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className={`max-w-3xl mx-auto flex flex-col ${theme.spacing.gap.lg} text-center`}>
        <div className={`flex flex-col ${theme.spacing.gap.sm}`}>
          <h2 id="contact-heading" className={`${theme.typography.heading.h2}`}>
            Get in Touch
          </h2>
          <p className={`${theme.typography.body.base} max-w-xl mx-auto ${theme.colors.text.secondary}`}>
            Have a project in mind? Let&apos;s collaborate! Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>
        <div
          className={`w-full max-w-xl mx-auto flex flex-col ${theme.spacing.gap.md} text-left`}
          role="form"
          aria-label="Contact form"
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
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 h-32 resize-none ${theme.borderRadius.default} ${theme.colors.border} ${theme.colors.background} ${theme.typography.body.base} ${theme.colors.text.primary} placeholder-gray-500 focus:outline-none focus:ring-2 ${theme.colors.focusRing} ${theme.transition.default} ${
                errors.message ? theme.colors.error : ""
              } disabled:opacity-50`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              disabled={sending}
              required
            />
            {errors.message && (
              <p
                id="message-error"
                className={`${theme.typography.body.sm} mt-1 ${theme.colors.text.error}`}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(errors.message) }}
              />
            )}
          </div>
          <Button
            variant="primary"
            type="submit"
            aria-label={sending ? "Sending message..." : "Submit contact form"}
            className={`self-center min-w-32 ${sending ? "cursor-not-allowed" : ""}`}
            disabled={sending}
            onClick={handleSubmit}
          >
            {sending ? (
              <span className="flex items-center gap-2">
                <Icon name="LoaderCircle" size={16} className="animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
          {toast.message && (
            <div
              role="status"
              aria-live="polite"
              className={`p-4 ${theme.borderRadius.default} ${theme.colors.border} ${theme.shadow.default} animate-fade-in ${theme.typography.body.sm} text-center ${
                toast.type === "success"
                  ? theme.colors.toastSuccess
                  : theme.colors.toastError
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon
                  name={toast.type === "success" ? "CheckCircle" : "AlertCircle"}
                  size={20}
                  className={toast.type === "success" ? theme.colors.text.success : theme.colors.text.error}
                />
                <span>{toast.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);