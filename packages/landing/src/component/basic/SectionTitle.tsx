import styles from './SectionTitle.module.scss';

export type SectionTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

export function SectionTitle(props: SectionTitleProps) {
  const { children, className } = props;

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.dots}>
        <div className={styles.small} />
        <div className={styles.medium} />
        <div className={styles.large} />
      </div>
      <div className={styles.center}>
        { children }
      </div>
      <div className={styles.dots}>
        <div className={styles.large} />
        <div className={styles.medium} />
        <div className={styles.small} />
      </div>
    </div>
  );
}
