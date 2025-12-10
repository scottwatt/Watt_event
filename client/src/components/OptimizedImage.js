// components/OptimizedImage.js - Fixed to Allow CSS Override
import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
  style = {}
}) => {
  // Handle paths - if it starts with / or http, use as-is
  // Otherwise, assume it's relative to public folder
  const imageSrc = src.startsWith('/') || src.startsWith('http') 
    ? src 
    : `/${src}`;

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      sizes={sizes}
      style={{
        display: 'block',
        ...style // Allow custom styles to override defaults
      }}
      onError={(e) => {
        console.error('Image failed to load:', src);
        e.target.style.background = '#ddd';
      }}
    />
  );
};

export default OptimizedImage;