// PixelInitializer.js
import  { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { useLocation } from 'react-router-dom';

export const PixelInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init('1091708408806565'); 
    ReactPixel.pageView();

    
    const unregister = ReactPixel.trackSingle('PageView');

    return () => {
      if (unregister) {
        unregister();
      }
    };
  }, [location]);

  return null;
};


