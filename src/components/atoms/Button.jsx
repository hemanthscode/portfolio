import React, { memo } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "./Icon";

const Button = ({ variant = "primary", size = "md", to, href, icon, children, className = "", disabled = false, loading = false, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 focus:ring-blue-500",
    secondary: "bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-gray-600",
    ghost: "text-gray-300 hover:bg-gray-800/50 hover:text-white focus:ring-gray-600"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const disabledStyles = disabled || loading ? "opacity-50 cursor-not-allowed" : "";
  
  const classNames = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  const content = (
    <>
      {icon && !loading && <Icon name={icon} size={size === "lg" ? 20 : 16} />}
      {loading && <Icon name="Loader2" size={size === "lg" ? 20 : 16} className="animate-spin" />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `${classNames} ${isActive && variant === "ghost" ? "text-blue-400" : ""}`}
        {...props}
      >
        {content}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={disabled || loading ? {} : { scale: 1.05 }}
      whileTap={disabled || loading ? {} : { scale: 0.95 }}
      className={classNames}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </motion.button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  to: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default memo(Button);