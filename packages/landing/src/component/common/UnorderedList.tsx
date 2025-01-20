import { Children, useMemo } from 'react';

import styles from './UnorderedList.module.scss';

export type UnorderedListProps = {
  margin?: React.CSSProperties['margin'];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function UnorderedList(props: UnorderedListProps) {
  const { margin = 0, className = '', style, children = [] } = props;

  const ulStyle = useMemo(() => {
    return {
      ...style,
      '--unordered-list-margin': margin,
    };
  }, [margin, style]);

  return (
    <ul className={`${styles.list} ${className}`} style={ulStyle}>
      {
        Children.map(children, (item, index) => (
          <li key={index}>{ item }</li>
        ))
      }
    </ul>
  );
}
