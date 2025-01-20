import { Drawer as DrawerInternal, type DrawerProps as DrawerInternalProps } from '@mui/material';
import { useCallback, useMemo } from 'react';

import styles from './Drawer.module.scss';

const sx = {
  '& .MuiDrawer-paper': {
    background: 'none',
    color: 'white',
  },
};

export type DrawerProps = {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  placement?: DrawerInternalProps['anchor'];
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function Drawer(props: DrawerProps) {
  const {
    visible = false, onVisibleChange, placement = 'left', zIndex, className = '', style, children,
  } = props;

  const handleClose = useCallback(() => {
    onVisibleChange?.(false);
  }, [onVisibleChange]);

  const slotProps = useMemo(() => {
    return {
      root: {
        style: {
          zIndex,
        },
      },
    };
  }, [zIndex]);

  return (
    <DrawerInternal
      open={visible}
      onClose={handleClose}
      sx={sx}
      anchor={placement}
      slotProps={slotProps}
    >
      <div className={`${styles.drawer} ${className}`} style={style}>{ children }</div>
    </DrawerInternal>
  );
}
