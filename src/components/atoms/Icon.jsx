import React, { memo } from "react";
import * as Icons from "lucide-react";
import PropTypes from "prop-types";
import { theme } from "../../constants/theme";

/**
 * Icon component using Lucide icons.
 * @param {Object} props
 * @param {string} props.name - Lucide icon name (e.g., "Mail", "Github").
 * @param {number} props.size - Icon size in pixels.
 * @param {string} props.className - Additional Tailwind classes.
 * @param {Object} props.rest - Additional props for the icon.
 * @returns {JSX.Element}
 * @example
 * <Icon name="Mail" size={24} className="text-gray-600" />
 */
const Icon = ({ name, size = 24, className = "", ...rest }) => {
  const LucideIcon = Icons[name] || Icons.HelpCircle;
  return (
    <LucideIcon
      size={size}
      className={`${theme.transition.default} ${theme.colors.text.primary} ${className}`}
      strokeWidth={2}
      {...rest}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Icon);