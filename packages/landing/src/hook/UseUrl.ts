import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';

export type ParsedSearchParams = {
  [key: string]: string[];
};

export function useUrl() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const param = useMemo(() => {
    const map: ParsedSearchParams = {};

    for (const key of Array.from(searchParams.keys())) {
      map[key] = searchParams.getAll(key);
    }

    return map;
  }, [searchParams]);

  const updateParam = useCallback((newParam: ParsedSearchParams) => {
    const newSearchParams = new URLSearchParams(searchParams);

    for (const [key, values] of Object.entries(newParam)) {
      newSearchParams.delete(key);

      for (const value of values) {
        newSearchParams.append(key, value);
      }
    }

    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);

  const processedHash = useMemo(() => {
    return (hash.length > 0) ? hash.substring(1) : '';
  }, [hash]);

  return {
    navigate,
    pathname,
    hash: processedHash,
    param,
    updateParam,
  };
}
