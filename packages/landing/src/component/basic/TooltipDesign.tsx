import { styled, Tooltip as TooltipInternal, type TooltipProps as TooltipInternalProps, tooltipClasses } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import IconInfo from './Tooltip.svg';

import styles from './Tooltip.module.scss';

const StyledTooltip = styled(({ className, ...props }: TooltipInternalProps) => (
  <TooltipInternal {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#70BCD6',
    fontFamily: 'inherit',
    fontSize: '0.9em',
    fontWeight: 400,
    border: '1px solid #00658B',
    borderRadius: '100em',
    padding: '0 1em',
    color: '#00658B',
  },
  [`& .${tooltipClasses.arrow}`]: {
    'color': '#70BCD6',
    '&::before': {
      border: '1px solid #00658B',
      transformOrigin: '120% 0',
    },
  },
}));

export type TooltipDesignProps = {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  disabled?: boolean;
  content?: React.ReactNode;
  placement?: TooltipInternalProps['placement'];
  arrow?: boolean;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function TooltipDesign(props: TooltipDesignProps) {
  const {
    content, visible, onVisibleChange, disabled = false, placement = 'top', arrow = true,
    prepend, append, size = 10, className = '', style, children,
  } = props;

  const [visibleInternal, setVisibleInternal] = useState(false);

  const open = useMemo(() => {
    return !disabled && (visible ?? visibleInternal);
  }, [visible, disabled, visibleInternal]);

  const handleOpen = useCallback(() => {
    setVisibleInternal(true);

    onVisibleChange?.(true);
  }, [onVisibleChange]);

  const handleClose = useCallback(() => {
    setVisibleInternal(false);

    onVisibleChange?.(false);
  }, [onVisibleChange]);

  const title = useMemo(() => {
    if (content === '') {
      return '';
    }

    if (typeof content === 'string') {
      return <div style={{ whiteSpace: 'pre-wrap' }}>{ content }</div>;
    }

    return content;
  }, [content]);

  const imgStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <StyledTooltip
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      title={title}
      placement={placement}
      arrow={arrow}
    >
      <span className={`${styles.tooltip} ${className}`} style={style}>
        { (prepend === true) ? <img src={IconInfo} alt="Info" style={imgStyle} className={styles.icon} /> : prepend }
        { children }
        { (append === true) ? <img src={IconInfo} alt="Info" style={imgStyle} className={styles.icon} /> : append }
      </span>
    </StyledTooltip>
  );
}
