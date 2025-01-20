import { useMemo } from 'react';
import classNames from 'classnames';

import styles from './TextDesign.module.scss';

export type TextDesignProps = {
  fontFamily: 'Pixel' | 'SAF';
  shadow?: boolean;
  borderColor?: React.CSSProperties['WebkitTextStrokeColor'];
  borderWidth?: React.CSSProperties['WebkitTextStrokeWidth'];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function TextDesign(props: TextDesignProps) {
  const { fontFamily, shadow = false, borderWidth = '2px', borderColor, className, style, children } = props;

  const divClassName = useMemo(() => {
    return classNames({
      [styles.text_saf as string]: fontFamily === 'SAF',
      [styles.text_pixel as string]: fontFamily === 'Pixel',
      [styles.text_shadow as string]: shadow,
    }, className);
  }, [fontFamily, shadow, className]);

  const divStyle = useMemo(() => {
    return {
      ...style,
      WebkitTextStroke: `${borderWidth} ${borderColor}`,
    };
  }, [style, borderWidth, borderColor]);

  return (
    <div className={divClassName} style={divStyle}>{ children }</div>
  );
}
