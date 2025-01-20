import { TextDesign } from '#/component/common/TextDesign';
import ImageRocket from '#/asset/driven/Rocket.webp';
import ImagePaint from '#/asset/driven/Paint.webp';
import IconRobot from '#/asset/driven/Robot.svg';

import styles from './Driven.module.scss';

export function Driven() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={ImageRocket} alt="Rocket" className={styles.rocket} />
          <TextDesign fontFamily="Pixel" className={styles.name}>Meme Launch and Trade</TextDesign>
        </div>
        <div className={styles.right}>
          <img src={ImagePaint} alt="Paint" className={styles.paint} />
          <TextDesign fontFamily="Pixel" className={styles.name}>Meme Recreation</TextDesign>
        </div>
      </div>
      <div className={styles.bottom}>
        <img src={IconRobot} alt="Robot" className={styles.icon} />
        <TextDesign fontFamily="Pixel" className={styles.text}>Driven By AI Agents</TextDesign>
        <img src={IconRobot} alt="Robot" className={styles.icon} />
      </div>
    </div>
  );
}
