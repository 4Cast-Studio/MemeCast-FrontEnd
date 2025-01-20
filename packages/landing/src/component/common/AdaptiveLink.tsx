import { OpenInNew } from '@mui/icons-material';
import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router';

import styles from './AdaptiveLink.module.scss';

export type AdaptiveLinkProps = React.AriaAttributes & {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  color?: string | boolean;
  hoverColor?: string | boolean;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function AdaptiveLink(props: AdaptiveLinkProps) {
  const {
    href = '',
    target = '_blank',
    color,
    hoverColor,
    icon = false,
    onClick,
    'aria-label': ariaLabel,
    className = '',
    style,
    children,
  } = props;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    onClick?.();

    e.stopPropagation();
  }, [onClick]);

  const colorNormal = useMemo(() => {
    if (typeof color === 'string') {
      return color;
    } else if (color === true) {
      return 'var(--palette-link)';
    } else {
      return undefined;
    }
  }, [color]);

  const colorHover = useMemo(() => {
    if (typeof hoverColor === 'string') {
      return hoverColor;
    } else if (hoverColor === true) {
      return 'var(--palette-link)';
    } else {
      return colorNormal;
    }
  }, [hoverColor, colorNormal]);

  const mainStyle = useMemo(() => {
    return {
      ...style,
      color: hovered ? colorHover : colorNormal,
    };
  }, [style, hovered, colorHover, colorNormal]);

  if (href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a
        href={href}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel="noreferrer"
        aria-label={ariaLabel}
        className={`${styles.link} ${className}`}
        style={mainStyle}
      >
        { children }
        { icon && <OpenInNew className={styles.icon} /> }
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      className={`${styles.link} ${className}`}
      style={mainStyle}
    >
      { children }
      { icon && <OpenInNew className={styles.icon} /> }
    </Link>
  );
}
