import { useCallback, useState } from 'react';
import { Button } from '../basic/Button';
import { copyText } from '#/util/Navigator';
import IconCopy from './ButtonCopyIcon.svg';

import styles from './ButtonCopy.module.scss';

export type ButtonCopyProps = {
  text?: string;
  size?: number;
};

export function ButtonCopy(props: ButtonCopyProps) {
  const {
    text = '',
    size,
  } = props;

  const [copied, setCopied] = useState(false);

  const iconStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const handleCopyClick = useCallback(async () => {
    try {
      await copyText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Suppress error.
    }
  }, [text]);

  return (
    copied ? (
      <div className={styles.content}>Copied!</div>
    ) : (
      <Button onClick={handleCopyClick}>
        <img src={IconCopy} alt="Copy" style={iconStyle} className={styles.copy} />
      </Button>
    )
  );
}
