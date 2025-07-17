import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { theme } from "../../constants/theme";

/**
 * Versatile button with internal/external link support.
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} props.variant - Button style variant.
 * @param {string} props.to - Navigation or external URL.
 * @param {string} props.target - Link target (_self, _blank, etc.).
 * @param {string} props.icon - Lucide icon name.
 * @param {string} props.className - Additional Tailwind classes.
 * @param {React.ReactNode} props.children - Button content.
 * @param {boolean} props.disabled - Disable button.
 * @param {string} props.type - Button type (button, submit, reset).
 * @param {Object} props.rest - Additional props for the underlying element.
 * @returns {JSX.Element}
 * @example
 * <Button variant="primary" to="/work" icon="ExternalLink">View Work</Button>
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
  ...rest
}) => {
  const isDisabled = disabled || to === "#" || to === "";
  const baseStyles = `inline-flex items-center justify-center px-4 py-2 ${theme.borderRadius.default} ${theme.typography.body.base} ${theme.transition.default} disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme.colors.focusRing}`;
  const buttonStyles = `${baseStyles} ${theme.colors[variant] || theme.colors.primary} ${className}`;
  const iconStyles = variant === "primary" ? theme.colors.iconPrimary : theme.colors.iconSecondary;
  const isExternal = to && /^https?:\/\//.test(to);

  const content = (
    <>
      {icon && <Icon name={icon} size={20} className={`mr-2 ${iconStyles}`} />}
      {children}
    </>
  );

  const commonProps = {
    className: buttonStyles,
    "aria-label": typeof children === "string" ? children : rest["aria-label"] || "Button",
    "aria-disabled": isDisabled,
    disabled: isDisabled,
    ...rest,
  };

  if (!to) {
    return (
      <button type={type} {...commonProps}>
        {content}
      </button>
    );
  }

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

  return (
    <NavLink to={to} end {...commonProps}>
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