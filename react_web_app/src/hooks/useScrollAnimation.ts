import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
  distance?: string;
  duration?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<T>(null);
  
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -100px 0px',
    animationClass = 'animate-in',
    delay = 0,
    distance = '80px',
    duration = 1600
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state - Aave style with larger distance and smoother easing
    element.style.opacity = '0';
    element.style.transform = `translate3d(0, ${distance}, 0)`;
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    
    // Force reset on page load/refresh
    element.classList.remove(animationClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (element) {
                element.style.opacity = '1';
                element.style.transform = 'translate3d(0, 0, 0)';
                element.classList.add(animationClass);
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, animationClass, delay, distance, duration]);

  return elementRef;
};

// Hook for stagger animations (multiple elements) - Aave style
export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  staggerDelay: number = 200,
  options?: { threshold?: number; rootMargin?: string }
) => {
  const containerRef = useRef<T>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -80px 0px' } = options || {};

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animatedElements = container.querySelectorAll('[data-animate]');
    
    animatedElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translate3d(0, 60px, 0)';
      htmlElement.style.transition = `opacity 1400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}ms, transform 1400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}ms`;
      // Force reset on page load/refresh
      htmlElement.classList.remove('animate-in');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((element) => {
              const htmlElement = element as HTMLElement;
              htmlElement.style.opacity = '1';
              htmlElement.style.transform = 'translate3d(0, 0, 0)';
              htmlElement.classList.add('animate-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
  }, [staggerDelay, threshold, rootMargin]);

  return containerRef;
};
