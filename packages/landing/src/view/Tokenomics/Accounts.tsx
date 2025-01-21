import { useMemo } from 'react';
import { Container } from '#/component/common/Container';
import { TextDesign } from '#/component/common/TextDesign';

import styles from './Accounts.module.scss';

export function Accounts() {
  const walletsDev = useMemo(() => {
    return [
      '3zz7sXo5v3zjqEm1CTGjkpE58fHJ8jk7gkdruSmntih3',
    ];
  }, []);

  const wallets = useMemo(() => {
    return [
      '3qurVW1H24qrN8zHuU8eRZ5smXsP2hmPAupfqRodFmmK',
      '7ryeCePzJB6FpAKpHxZnvMqDw4daGHbA1fx4uePphQ4R',
      'DFmwALZr2z59m5HfZg1euoegdCtbWv6kuB6BFzdEi8gL',
      'DV5qzHX6BdHsWJsKVE6aAPC6h9mXLiLMm29XDMj4NxCR',
      '4Gfa5tR1zoXYzSooedguXCV9ZKciNbCUp2uL8H5zQvam',
      '9z7PwRZxNfYX8NoAUXJx2tfodAa3WwYfNzdbNWSLksSf',
      '7S6ZDR3jiFW7r7HpFTwAoGjVUkQmUT3iz8bW9KU61jbM',
      'HNn9Gvnqe2CTiTrkwaw1Adv5n6Y7TzKecYmKH4uv3VM7',
      '6rT9jqWovnfXqW5ML5sgpxsJuUpMzCUfPVv9kMvnzeJy',
      '4cqLdDSZLXgAnmFwT9ahMMt55U9K3ogXZ7Khyv84G5sy',
    ];
  }, []);

  return (
    <Container maxWidth="900px" padding="3em 1em" className={styles.pane}>
      <TextDesign fontFamily="Pixel" className={styles.title}>TEAM ESCROW ACCROUNTS</TextDesign>
      <div className={styles.table}>
        {
          walletsDev.map((wallet, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.name}>Escrow Account (dev)</div>
              <div className={styles.wallet}>{ wallet }</div>
            </div>
          ))
        }
        {
          wallets.map((wallet, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.name}>Escrow Account</div>
              <div className={styles.wallet}>{ wallet }</div>
            </div>
          ))
        }
      </div>
    </Container>
  );
}
