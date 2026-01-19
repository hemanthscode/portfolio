import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/helpers';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';
import { NAV_ITEMS, SOCIAL_LINKS, SITE_CONFIG } from '@/utils/constants';
import { FOOTER_CONTENT } from '@/data';
import { useAvailability } from '@/hooks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { config: availabilityConfig } = useAvailability();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Brand Section - Centered on mobile, left on desktop */}
            <div className="lg:col-span-1 text-center md:text-left">
              <Link
                to="/"
                className="inline-flex items-center gap-3 group mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 group-hover:rotate-3 duration-300">
                  <Icon name="Code2" size={20} className="text-black" />
                </div>
                <span className="text-xl font-bold text-white">
                  {SITE_CONFIG.name}
                </span>
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                {SITE_CONFIG.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center',
                      'bg-white/5 hover:bg-white hover:border-white',
                      'text-white hover:text-black',
                      'transition-all duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
                    )}
                    aria-label={social.ariaLabel}
                  >
                    <Icon name={social.icon} size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links - Centered on mobile */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Quick Links
              </h3>
              <nav className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services - Centered on mobile */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {FOOTER_CONTENT.services.map((service, i) => (
                  <li 
                    key={i} 
                    className="text-sm text-gray-400 flex items-start gap-2 justify-center md:justify-start"
                  >
                    <Icon name="Check" size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-left">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Status - Centered on mobile */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {/* Availability Badge */}
                <div className="flex justify-center md:justify-start">
                  <Badge 
                    variant={availabilityConfig.variant}
                    pulse={availabilityConfig.pulse}
                    size="md"
                  >
                    {availabilityConfig.label}
                  </Badge>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Icon name="MessageCircle" size={16} />
                  Start a Project
                </Link>

                {/* Quick Contact */}
                <div className="pt-4 space-y-2">
                  <a
                    href={`mailto:${SITE_CONFIG.email || 'hello@example.com'}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors justify-center md:justify-start"
                  >
                    <Icon name="Mail" size={14} />
                    <span>Email Me</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.find(s => s.name === 'LinkedIn')?.href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors justify-center md:justify-start"
                  >
                    <Icon name="Linkedin" size={14} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Always centered content */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col items-center gap-3 text-sm">
            {/* Copyright - Centered */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-center">
              <p>© {currentYear} {SITE_CONFIG.name}. {FOOTER_CONTENT.copyright.text}</p>
              <span className="hidden sm:inline text-gray-600">•</span>
              <p>{FOOTER_CONTENT.copyright.builtWith}</p>
            </div>

            {/* Made with love */}
            <p className="text-xs text-gray-600 flex items-center gap-1.5">
              Made with 
              <Icon name="Heart" size={12} className="text-red-500 animate-pulse" />
              in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
