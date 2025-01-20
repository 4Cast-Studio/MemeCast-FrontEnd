import { useMemo } from 'react';

import styles from './SlidingCarousel.module.scss';
import classNames from 'classnames';

export type SlidingCarouselProps = {
  direction: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function SlidingCarousel(props: SlidingCarouselProps) {
  const { direction, className, style, children } = props;

  const contentClass = useMemo(() => {
    return (direction === 'left') ? styles.content_left : styles.content_right;
  }, [direction]);

  return (
    <div className={classNames(styles.pane, className)} style={style}>
      <div className={contentClass}>
        <div className={styles.animate}>{ children }</div>
        <div className={styles.animate}>{ children }</div>
      </div>
    </div>
  );
}
