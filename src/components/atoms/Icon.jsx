import React, { memo } from "react";
import * as Lucide from "lucide-react";
import PropTypes from "prop-types";

const Icon = ({ name, size = 24, className = "", ...props }) => {
  const LucideIcon = Lucide[name] || Lucide.AlertCircle;

  return (
    <LucideIcon
      size={size}
      className={`inline-block ${className}`}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};

export default memo(Icon);