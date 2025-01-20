import { SectionHeader } from '#/component/common/SectionHeader';
import { TextDesign } from '#/component/common/TextDesign';
import { Container } from '#/component/common/Container';
import ImageArrows from '#/asset/solution/Arrows.svg';
import GifCircle from '#/asset/solution/Circle.gif';

import styles from './Solution.module.scss';

export function Solution() {
  return (
    <Container maxWidth="1200px" padding="4em 1em" className={styles.container}>
      <SectionHeader
        title="SOLUTION"
        borderColor="#7B1FF6"
        shadowColor="#A561FF"
        className={styles.title}
      />
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.item}>
            <div className={styles.header}>
              <img src={ImageArrows} alt="" className={styles.arrows} />
              <TextDesign fontFamily="Pixel" className={styles.name}>MEMECAST</TextDesign>
            </div>
            <div className={styles.text}>
              The Re/Creation layer where creators, users, and communities cash in.
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.header}>
              <img src={ImageArrows} alt="" className={styles.arrows} />
              <TextDesign fontFamily="Pixel" className={styles.name}>PARTICIPANTS</TextDesign>
            </div>
            <div className={styles.text}>
              Users who grow their bags through memes, AI Agents, gaming and content creation.
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.header}>
              <img src={ImageArrows} alt="" className={styles.arrows} />
              <TextDesign fontFamily="Pixel" className={styles.name}>MEME DEVS</TextDesign>
            </div>
            <div className={styles.text}>
              Devs who build memes and communities with lasting growth and utility.
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={GifCircle} alt="" className={styles.gif} />
        </div>
      </div>
    </Container>
  );
}
