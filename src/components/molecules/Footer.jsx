import React, { memo } from 'react';
import Icon from '../atoms/Icon';
import { contactLinks } from '../../data';
import { containerPadding, typography } from '../../constants/theme';

/**
 * Footer component with social links
 * @returns {JSX.Element}
 */
const Footer = () => (
  <footer className={`flex w-full ${containerPadding} py-8 bg-white`}>
    <div className="flex flex-col w-full max-w-7xl mx-auto sm:flex-row justify-between items-center gap-6">
      <div className={`${typography.body.sm} text-center sm:text-left text-gray-600`}>
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
      <ul className="flex items-center gap-6">
        {contactLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name}`}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Icon name={link.icon} size={22} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default memo(Footer);