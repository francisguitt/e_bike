
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { useLocation } from 'react-router-dom';

export const PixelInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init('399644826353113');

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

// import { useEffect } from 'react';
// import ReactPixel from 'react-facebook-pixel';
// import { useLocation } from 'react-router-dom';

// export const PixelInitializer = () => {
//   const location = useLocation();

//   useEffect(() => {
//     ReactPixel.init('399644826353113');
//     ReactPixel.pageView();

//     // Rastreia um evento com o nome 'PageView'
//     //fbq('track', 'PageView');

//     return () => {
//       // Limpeza opcional, mas pode não ser necessária
//       // ReactPixel.clear();
//     };
//   }, [location]);

//   return null;
// };
