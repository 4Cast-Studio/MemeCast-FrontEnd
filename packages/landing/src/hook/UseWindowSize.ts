import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const update = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  return {
    innerWidth,
    innerHeight,
  };
}
