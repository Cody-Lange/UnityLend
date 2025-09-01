import { useEffect, useRef } from 'react';

export const useWebflowAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const initAnimations = () => {
      // Set up intersection observer for elements with data-w-id
      const animatedElements = document.querySelectorAll('[data-w-id]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Check if this is a Hero section element
            const isHeroElement = element.closest('.top-section') !== null ||
                                 element.getAttribute('data-w-id') === 'a22c0ce7-c5f2-252a-11a6-aa2c0b174c21' ||
                                 element.getAttribute('data-w-id') === '54fc40eb-0d5a-ecdd-340e-ff3c849a32c1';
            
            if (isHeroElement) {
              // Hero elements: only fade in with opacity, no transform animations
              element.style.transition = 'opacity 0.6s ease-out';
              element.style.opacity = '1';
              element.style.transform = 'none';
            } else {
              // Other elements: use subtle slide-up animation with fade-in
              element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
              element.style.opacity = '1';
              element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
            }
            
            // Stop observing this element once animated
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '30px'
      });

      animatedElements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
      };
    };

    // Initialize after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initAnimations();
      initialized.current = true;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
};
