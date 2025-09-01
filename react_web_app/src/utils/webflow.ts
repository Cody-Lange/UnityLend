// Utility functions for managing Webflow interactions in React

export const initializeWebflow = () => {
  if (typeof window !== 'undefined') {
    console.log('Starting Webflow initialization...');
    
    // Set the necessary classes on html element
    const htmlElement = document.documentElement;
    htmlElement.classList.add('w-mod-js');
    
    // Check for touch support and add class if needed
    if ('ontouchstart' in window || ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch)) {
      htmlElement.classList.add('w-mod-touch');
    }
    
    // Initialize Webflow if available
    if (window.Webflow) {
      console.log('Webflow found, initializing...');
      
      try {
        // Destroy existing Webflow instance
        if (typeof window.Webflow.destroy === 'function') {
          window.Webflow.destroy();
        }
        
        // Reinitialize Webflow
        window.Webflow.ready();
        
        // Initialize interactions with proper error handling
        if (window.Webflow.require) {
          try {
            const ix2 = window.Webflow.require('ix2');
            if (ix2 && typeof ix2.init === 'function') {
              ix2.init();
              console.log('Webflow IX2 initialized');
            }
          } catch (e) {
            console.log('Webflow IX2 not available:', e);
          }
        }
        
        // Force a redraw to trigger animations - with proper error handling
        setTimeout(() => {
          try {
            const webflowAny = window.Webflow as any;
            if (webflowAny.redraw) {
              if (typeof webflowAny.redraw === 'function') {
                webflowAny.redraw();
              } else if (typeof webflowAny.redraw.up === 'function') {
                webflowAny.redraw.up();
              }
              console.log('Webflow redraw triggered');
            }
          } catch (e) {
            console.log('Error during Webflow redraw:', e);
          }
        }, 100);
        
      } catch (e) {
        console.log('Error initializing Webflow:', e);
      }
      
    } else {
      console.log('Webflow not found');
    }
  }
};

export const destroyWebflow = () => {
  if (typeof window !== 'undefined' && window.Webflow) {
    window.Webflow.destroy();
  }
};

// Hook for using Webflow in React components
export const useWebflow = () => {
  const reinitialize = () => {
    initializeWebflow();
  };

  return { reinitialize };
};
