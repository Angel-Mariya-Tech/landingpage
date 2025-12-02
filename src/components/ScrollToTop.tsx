import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll immediately and smoothly to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Also ensure scroll after a brief delay for any lazy-loaded content
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};
