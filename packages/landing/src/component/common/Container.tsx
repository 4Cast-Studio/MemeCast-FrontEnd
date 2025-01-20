import styles from './Container.module.scss';

export type ContainerProps = {
  maxWidth: React.CSSProperties['maxWidth'];
  padding?: React.CSSProperties['padding'];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function Container(props: ContainerProps) {
  const { maxWidth, padding, className = '', style, children } = props;

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <div className={styles.body} style={{ maxWidth, padding }}>{ children }</div>
    </div>
  );
}
