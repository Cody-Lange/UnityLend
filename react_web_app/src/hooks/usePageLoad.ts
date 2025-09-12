import { useState, useEffect } from 'react';

export const usePageLoad = (delay: number = 100) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loaded;
};
