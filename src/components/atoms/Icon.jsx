import React, { memo } from 'react';
import * as Icons from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Icon component using Lucide icons
 * @param {Object} props
 * @param {string} props.name - Lucide icon name
 * @param {number} props.size - Icon size in pixels
 * @param {string} props.className - Additional Tailwind classes
 * @returns {JSX.Element}
 */
const Icon = ({ name, size = 24, className = '', ...props }) => {
  const LucideIcon = Icons[name] || Icons.HelpCircle;
  return <LucideIcon size={size} color="currentColor" strokeWidth={2} className={className} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Icon);