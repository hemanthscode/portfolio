import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";
import { contactLinks } from "../../data";
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';

/**
 * Contact section with EmailJS form and social links.
 * @returns {JSX.Element} Contact component
 */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS configuration is missing from .env');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setForm({ ...form, [name]: sanitizedValue });
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "All fields are required" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: "error", message: "Invalid email format" });
      return;
    }
    setLoading(true);

    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setStatus({ 
        type: "success", 
        message: "Thanks for reaching out! I'll get back to you within 24 hours." 
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "Failed to send message. Please try again later." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 mobile-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full mb-6">
            <Icon name="Mail" size={16} className="text-blue-400" />
            <span className="text-sm text-gray-300">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 mobile-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center lg:text-left">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none transition-colors duration-200"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  icon={loading ? "Loader2" : "Send"}
                  className="w-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'} rounded-xl flex items-start gap-3`}
                  >
                    <Icon name={status.type === 'success' ? "CheckCircle" : "AlertCircle"} size={20} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 mobile-center">
            {/* Contact Methods */}
            <div>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300 flex-shrink-0">
                      <Icon name={link.icon} size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                        {link.name}
                      </h4>
                      <p className="text-sm text-gray-400 truncate">{link.label}</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Availability */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <h4 className="text-lg font-bold text-gray-100">Available for work</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently accepting new projects and collaborations.
                </p>
              </div>

              {/* Response Time */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={20} className="text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-100 mb-2">Quick Response</h4>
                <p className="text-sm text-gray-400">I typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);