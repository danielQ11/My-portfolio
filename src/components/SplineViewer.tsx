'use client';
import React, { useEffect, useState } from 'react';

interface SplineViewerProps {
  url: string;
  loading?: 'lazy' | 'eager';
  loadingAnimType?: 'spinner' | 'logo';
  autoplay?: string | boolean;
  style?: React.CSSProperties;
  className?: string;
}

const SplineViewer: React.FC<SplineViewerProps> = ({
  url,
  loading = 'lazy',
  loadingAnimType = 'spinner',
  autoplay = 'true',
  style,
  className
}) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check if script is already loaded
    if (document.querySelector('script[src*="spline-viewer"]')) {
      setIsScriptLoaded(true);
      return;
    }

    // Check if script is already loading
    const existingScript = document.querySelector('script[src*="spline-viewer"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        setIsScriptLoaded(true);
      });
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js';
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    script.onerror = () => {
      console.error('Failed to load Spline viewer script');
    };

    document.head.appendChild(script);
  }, []);

  // Don't render until script is loaded and component is mounted
  if (!isMounted || !isScriptLoaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-900 ${className || ''}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '550px',
          ...style
        }}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  // Use React.createElement for the custom element with error handling
  return React.createElement('spline-viewer', {
    url,
    loading,
    'loading-anim-type': loadingAnimType,
    autoplay,
    style: {
      width: '100%',
      height: '100%',
      ...style
    },
    className
  });
};

export default SplineViewer;
