import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { theme } from "../../constants/theme";

/**
 * Lazy-loaded image with responsive sizes and error handling.
 * @param {Object} props
 * @param {string | object} props.src - Image source (URL or imported module).
 * @param {string} props.alt - Image alt text.
 * @param {string} props.className - Tailwind classes.
 * @param {string} props.placeholder - Fallback image URL.
 * @param {Object} props.rest - Additional props for the image.
 * @returns {JSX.Element}
 * @example
 * <LazyImage src="/image.jpg" alt="Project image" className="w-full h-full" />
 */
const LazyImage = ({
  src,
  alt = "Image",
  className = "",
  placeholder = "https://via.placeholder.com/400x224?text=Loading...",
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const srcSet = typeof src === "string" ? `${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w` : undefined;
  const sizes = "(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px";

  return (
    <img
      src={hasError ? placeholder : typeof src === "string" ? src : src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`w-full h-full object-cover ${theme.transition.default} ${className}`}
      loading="lazy"
      onError={() => setHasError(true)}
      aria-describedby={hasError ? "image-error" : undefined}
      {...rest}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default memo(LazyImage);