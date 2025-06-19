// components/OptimizedImage.js
import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  sizes = '100vw',
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP and fallback sources
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;
    
    // Check if it's already optimized or external
    if (originalSrc.includes('.webp') || originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // Generate WebP version path
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return { webp: webpSrc, fallback: originalSrc };
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div 
      ref={imgRef}
      className={`image-container ${className}`}
      style={{ 
        width: width || 'auto', 
        height: height || 'auto',
        backgroundColor: isLoaded ? 'transparent' : '#f0f0f0'
      }}
    >
      {isInView && (
        <picture>
          {typeof optimizedSrc === 'object' && (
            <source srcSet={optimizedSrc.webp} type="image/webp" />
          )}
          <img
            src={typeof optimizedSrc === 'object' ? optimizedSrc.fallback : optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            sizes={sizes}
            onLoad={() => setIsLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease',
              opacity: isLoaded ? 1 : 0
            }}
          />
        </picture>
      )}
      {!isLoaded && !isInView && (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999'
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;