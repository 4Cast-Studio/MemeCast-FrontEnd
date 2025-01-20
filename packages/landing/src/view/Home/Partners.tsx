import { SlidingCarousel } from '#/component/common/SlidingCarousel';
import { partners } from '#/util/Partner';

import styles from './Partners.module.scss';

export function Partners() {
  return (
    <div className={styles.pane}>
      <SlidingCarousel direction="left">
        <div className={styles.items}>
          {
            partners.map((item) => (
              <img key={item.name} src={item.src} alt={item.name} className={styles.image} />
            ))
          }
        </div>
      </SlidingCarousel>
    </div>
  );
}
