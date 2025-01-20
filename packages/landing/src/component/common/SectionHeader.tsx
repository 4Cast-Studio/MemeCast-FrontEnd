import classNames from 'classnames';
import { useMemo } from 'react';
import ImageStarWhite from '#/asset/common/StarWhite.webp';
import ImageStarBlack from '#/asset/common/StarBlack.webp';
import { TextDesign } from './TextDesign';

import styles from './SectionHeader.module.scss';

export type SectionHeaderProps = {
  title: string;
  borderColor?: React.CSSProperties['WebkitTextStrokeColor'];
  shadowColor?: React.CSSProperties['color'];
  star?: 'White' | 'Black';
  className?: string;
};

export function SectionHeader(props: SectionHeaderProps) {
  const { title, borderColor, shadowColor, star = 'White', className } = props;

  const spanStyle = useMemo(() => {
    return {
      inset: '2px auto auto 4px',
      color: shadowColor,
      WebkitTextStroke: `1px ${borderColor}`,
      zIndex: -1,
    };
  }, [shadowColor, borderColor]);

  const imageSrc = useMemo(() => {
    return star === 'White' ? ImageStarWhite : ImageStarBlack;
  }, [star]);

  return (
    <div className={styles.pane}>
      <div className={styles.content}>
        <TextDesign
          fontFamily="SAF"
          borderWidth="1px"
          borderColor={borderColor}
          style={{ position: 'relative' }}
          className={classNames(styles.title, className)}
        >
          <span>{ title }</span>
          <span style={{ position: 'absolute', ...spanStyle }}>{ title }</span>
        </TextDesign>
        <img src={imageSrc} alt="Star" className={styles.star} />
        <img src={imageSrc} alt="Star" className={styles.star} />
        <img src={imageSrc} alt="Star" className={styles.star} />
        <img src={imageSrc} alt="Star" className={styles.star} />
      </div>
    </div>
  );
}
