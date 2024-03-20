
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { useLocation } from 'react-router-dom';

export const PixelInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init('399644826353113');
    ReactPixel.pageView();

    // Rastrear um evento com um nome válido
    fbq('track', 'PageView');

    return () => {
      // Limpeza opcional, se necessário
    };
  }, [location]);

  return null;
};



