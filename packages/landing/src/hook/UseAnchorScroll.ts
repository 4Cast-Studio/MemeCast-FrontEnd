import { useEffect } from 'react';
import { useUrl } from './UseUrl';

export function useAnchorScroll() {
  const { hash } = useUrl();

  useEffect(() => {
    if (hash === '') {
      return;
    }

    const element = document.getElementById(hash);

    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);
}
