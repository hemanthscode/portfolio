import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { buttonVariants } from "../../constants/theme";

/**
 * Versatile button with internal/external link support
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} props.variant - Button style variant
 * @param {string} props.to - Navigation or external URL
 * @param {string} props.target - Link target (_self, _blank, etc.)
 * @param {string} props.icon - Lucide icon name
 * @param {string} props.className - Additional Tailwind classes
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} props.disabled - Disable button
 * @param {string} props.type - Button type (button, submit, reset)
 * @returns {JSX.Element}
 */
const Button = ({
  variant = "primary",
  to,
  target = "_self",
  icon,
  className = "",
  children,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const buttonStyles = `${baseStyles} ${
    buttonVariants[variant] || buttonVariants.primary
  } ${className}`;

  const isExternal = to && /^https?:\/\//.test(to);

  const content = (
    <>
      {icon && <Icon name={icon} size={20} className="mr-2" />}
      {children}
    </>
  );

  const commonProps = {
    className: buttonStyles,
    "aria-label": children?.toString() || "Button",
    "aria-disabled": disabled,
    disabled,
    ...props,
  };

  // If no 'to' prop, render as button element (for forms)
  if (!to) {
    return (
      <button
        type={type}
        {...commonProps}
      >
        {content}
      </button>
    );
  }

  // External link
  if (isExternal) {
    return (
      <a
        href={to}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  // Internal navigation link
  return (
    <NavLink 
      to={to} 
      {...commonProps}
    >
      {content}
    </NavLink>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  to: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default memo(Button);