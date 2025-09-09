import React, { memo, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LazyImage = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-gray-800 ${className}`}>
      {!loaded && !error && inView && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
          <span>Failed to load</span>
        </div>
      )}
      
      {!inView && (
        <div className="absolute inset-0 bg-gray-800"></div>
      )}
      
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          sizes="(max-width: 640px) 100vw, 50vw"
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default memo(LazyImage);