import React, { memo } from "react";
import Icon from "../atoms/Icon";
import { contactLinks } from "../../data";
import { theme } from "../../constants/theme";

/**
 * Footer component with social links and copyright.
 * @returns {JSX.Element}
 * @example
 * <Footer />
 */
const Footer = () => (
  <footer
    className={`w-full ${theme.spacing.container} ${theme.spacing.section} ${theme.colors.background} ${theme.colors.border} border-t`}
    aria-label="Site footer"
    role="contentinfo"
  >
    <div className={`max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center ${theme.spacing.gap.md}`}>
      <div className={`${theme.typography.body.sm} ${theme.colors.text.muted} text-center sm:text-left`}>
        © {new Date().getFullYear()} Hemanth. All rights reserved.
      </div>
      <nav aria-label="Social media links">
        <ul className={`flex items-center ${theme.spacing.gap.md}`}>
          {contactLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name}`}
                className={`${theme.colors.text.secondary} ${theme.transition.default} hover:${theme.colors.text.primary}`}
              >
                <Icon name={link.icon} size={22} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </footer>
);

export default memo(Footer);