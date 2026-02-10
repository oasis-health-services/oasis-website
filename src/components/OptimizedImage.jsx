import React, { useState } from 'react';

/**
 * OptimizedImage Component
 * Automatically serves WebP with fallback to JPEG/PNG
 * Supports responsive images and lazy loading
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes,
  priority = false,
  objectFit = 'cover',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!src) {
    return null;
  }

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // If src is external URL, just use it directly
  if (src.startsWith('http')) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'loaded' : ''}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onLoad={handleLoad}
        style={objectFit ? { objectFit } : undefined}
        {...props}
      />
    );
  }

  // Generate WebP source from original
  const isAlreadyWebp = src.endsWith('.webp');
  const webpSrc = !isAlreadyWebp ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : null;

  // const getWebPSrc = (originalSrc) => {
  //   const ext = originalSrc.match(/\.(jpg|jpeg|png)$/i);
  //   if (!ext) return null;
  //   return originalSrc.replace(ext[0], '.webp');
  // };

  // const webpSrc = getWebPSrc(src);

  // Combine styles to prevent layout shift
  // const imgStyle = {
  //   ...(objectFit ? { objectFit } : {}),
  //   ...(width && height ? { aspectRatio: `${width} / ${height}` } : {}),
  // };

  // return (
  //   <picture className={className}>
  //     {/* WebP - Modern format with great compression */}
  //     {webpSrc && (
  //       <source
  //         type="image/webp"
  //         srcSet={webpSrc}
  //         sizes={sizes}
  //       />
  //     )}

  //     {/* Fallback - Original format (JPEG/PNG) */}
  //     <img
  //       src={src}
  //       alt={alt}
  //       className={`${className} ${isLoaded ? 'loaded' : ''}`}
  //       width={width}
  //       height={height}
  //       loading={priority ? 'eager' : loading}
  //       decoding="async"
  //       onLoad={handleLoad}
  //       style={imgStyle}
  //       {...props}
  //     />
  //   </picture>
  // );

  return (
    <picture className={className}>
      {/* try the webP version */}
      {!error && webpSrc && (
        <source srcSet={webpSrc} type="image/webp" onError={setError(true)} />
      )}

      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        style={{ objectFit }}
        {...props}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

    </picture>
  )
};

/**
 * Responsive Image Component
 * Serves different image sizes based on viewport
 */
export const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  ...props
}) => {
  if (!src) return null;

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc || baseSrc.startsWith('http')) return baseSrc;

    const ext = baseSrc.match(/\.(jpg|jpeg|png|webp)$/i);
    if (!ext) return baseSrc;

    const base = baseSrc.replace(ext[0], '');
    const format = ext[0];

    // Return srcset with multiple sizes
    return [
      `${base}-medium${format} 800w`,
      `${base}-large${format} 1200w`,
      `${base}-xlarge${format} 1920w`,
    ].join(', ');
  };

  const isAlreadyWebp = src.endsWith('.webp');
  const webpSrc = !isAlreadyWebp ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : null;


  return (
    <picture className={className}>

      {!error && webpSrc && (
        <source srcSet={generateSrcSet(webpSrc)} type="image/webp" sizes={sizes} onError={setError(true)} />
      )}

      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
