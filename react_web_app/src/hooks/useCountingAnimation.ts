import { useEffect, useRef, useState } from 'react';

interface CountingAnimationOptions {
  endValue: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export const useCountingAnimation = (options: CountingAnimationOptions) => {
  const { endValue, duration = 1200, delay = 0, suffix = '' } = options; // Even faster: 1.2s instead of 1.5s
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Reset animation state on component mount (handles refresh)
  useEffect(() => {
    setCount(0);
    setIsVisible(false);
    hasAnimated.current = false;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const startValue = 0;
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }
      
      if (elapsed < duration) {
        // Faster easing function for quicker counting
        const progress = elapsed / duration;
        const easeOut = 1 - Math.pow(1 - progress, 2.5); // More aggressive easing
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
        setCount(currentValue);
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration, delay]);

  return {
    elementRef,
    displayValue: `${count}${suffix}`,
    isAnimating: isVisible && count < endValue
  };
};
