import { useMemo } from 'react';

export type MenuConfig = {
  title: string;
  path: string;
  children?: MenuConfig[];
};

export function useMenu() {
  const menus: MenuConfig[] = useMemo(() => {
    return [];
  }, []);

  return {
    menus,
  };
}
