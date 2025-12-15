import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Esto hace scroll al inicio
  }, [pathname]);  // Cada vez que pathname cambie

  return null;
};

export default ScrollToTop;
