import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Lazy-loaded image with responsive sizes and error handling
 * @param {Object} props
 * @param {string | object} props.src - Image source (URL or imported module)
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - Tailwind classes
 * @param {string} props.placeholder - Fallback image URL
 * @returns {JSX.Element}
 */
const LazyImage = ({ src, alt = 'Image', className = '', placeholder = 'https://via.placeholder.com/400x224?text=Loading...' }) => {
  const [hasError, setHasError] = useState(false);

  // Use src directly for local imports; add query params for URLs
  const srcSet = typeof src === 'string' ? `${src}?w=400 400w, ${src}?w=800 800w` : undefined;
  const sizes = typeof src === 'string' ? '(max-width: 640px) 400px, 800px' : undefined;

  return (
    <img
      src={hasError ? placeholder : typeof src === 'string' ? src : src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
      onError={() => setHasError(true)}
      aria-describedby={hasError ? 'image-error' : undefined}
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