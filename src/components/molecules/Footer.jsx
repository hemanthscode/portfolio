import React, { memo } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Icon from "../atoms/Icon";
import { navLinks, contactLinks } from "../../data";

/**
 * Footer component with social links, navigation, and services.
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mobile-center">
            {/* Brand Section */}
            <div className="lg:col-span-2 mobile-center">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Icon name="Code2" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-gray-100">Hemanth</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6 text-center md:text-left">
                A passionate full-stack developer crafting digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                {contactLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon 
                      name={social.icon} 
                      size={20} 
                      className="text-gray-400 group-hover:text-white transition-colors duration-200" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="mobile-center">
              <h3 className="text-lg font-bold text-gray-100 mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Resume
                </a>
              </nav>
            </div>

            {/* Services */}
            <div className="mobile-center">
              <h3 className="text-lg font-bold text-gray-100 mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "React Applications", 
                  "API Development",
                  "UI/UX Design",
                  "Consultation"
                ].map((service) => (
                  <li key={service} className="text-gray-400">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 mobile-center">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400 mobile-center-text">
            <p>© {currentYear} Hemanth. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <span>Made with ❤️ in India</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);