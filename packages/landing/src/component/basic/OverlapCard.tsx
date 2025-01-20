import styles from './OverlapCard.module.scss';

export type OverlapCardPorps = {
  className?: string;
};

export function OverlapCard(props: OverlapCardPorps) {
  const { className = '' } = props;

  return (
    <div className={styles.main}>
      <div className={`${styles.card} ${className}`} />
      <div className={styles.back} />
    </div>
  );
}
