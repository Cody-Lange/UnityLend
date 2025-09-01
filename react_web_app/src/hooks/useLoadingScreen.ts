import { useEffect } from 'react';

export const useLoadingScreen = () => {
  useEffect(() => {
    const hideLoadingScreen = () => {
      const loadingScreen = document.querySelector('.page-intro-cover') as HTMLElement;
      if (loadingScreen) {
        // Add transition for smooth fade out
        loadingScreen.style.transition = 'opacity 0.5s ease-out, visibility 0.5s ease-out';
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        // Remove from DOM after animation completes
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }
    };

    // Also hide loading screen when page is fully loaded
    const handlePageLoad = () => {
      hideLoadingScreen();
    };

    // Hide loading screen after a short delay
    const timer = setTimeout(() => {
      hideLoadingScreen();
    }, 3000); // 3 seconds

    // Listen for page load event as backup
    if (document.readyState === 'complete') {
      hideLoadingScreen();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);
};
