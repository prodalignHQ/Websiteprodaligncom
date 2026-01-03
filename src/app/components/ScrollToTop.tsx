import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Only restore scroll position if we're going back to home page with saved position
    if (pathname === '/' && state && typeof state.scrollY === 'number') {
      // Use requestAnimationFrame for more reliable scroll positioning
      requestAnimationFrame(() => {
        window.scrollTo(0, state.scrollY);
      });
    } else {
      // For all other cases, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}