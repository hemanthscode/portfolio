import { memo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { cn } from '@/utils/helpers';
import Icon from './Icon';

/**
 * Lazy loading image component with loading states
 * Optimized for performance with Intersection Observer
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = '16/9',
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (loading !== 'lazy') {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (observerRef.current && imgRef.current) {
            observerRef.current.unobserve(imgRef.current);
          }
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden bg-gray-900', containerClassName)}
      style={{ aspectRatio }}
    >
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-900"
          >
            <div className="flex flex-col items-center gap-3">
              <Icon name="Loader2" size={32} className="text-gray-600 animate-spin" />
              <span className="text-xs text-gray-600">Loading...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <Icon name="ImageOff" size={32} className="text-gray-600" />
            <span className="text-xs text-gray-500">Failed to load image</span>
          </div>
        </div>
      )}

      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-300',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          {...props}
        />
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  aspectRatio: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
};

export default memo(LazyImage);
