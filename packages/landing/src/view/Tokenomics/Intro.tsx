import { useMemo } from 'react';
import { TextDesign } from '#/component/common/TextDesign';
import { Container } from '#/component/common/Container';
import ImageIntro from './IntroImage.webp';
import IconArrow from './IntroArrow.svg';

import styles from './Intro.module.scss';

export function Intro() {
  const items = useMemo(() => {
    return [{
      name: 'LIQUIDITY POOL: 86%',
      text: [
        'Fairly launched and accessible to all, promoting broad distribution and fostering community ownership from Day 1.',
      ],
    }, {
      name: 'AIRDROP & COMMUNITY INCENTIVES: 10%',
      text: [
        'Designed to reward active participation and support the ecosystem’s sustained growth over the long term.',
      ],
    }, {
      name: 'TEAM: 4%',
      text: [
        'Represents the team’s long-term commitment to continuously developing and improving the platform.',
        'Locked for 3 months and vested over 9 months to ensure long-term alignment with the project’s goals and to minimize market disruption.',
      ],
    }];
  }, []);

  return (
    <Container maxWidth="1400px" padding="6em 1em 4em" className={styles.container}>
      <TextDesign fontFamily="Pixel" className={styles.title}>MEMECAST.AI TOKENOMICS</TextDesign>
      <div className={styles.content}>
        <img src={ImageIntro} alt="" className={styles.image} />
        <div className={styles.rows}>
          {
            items.map((item, index) => (
              <div key={index} className={styles.row}>
                <img src={IconArrow} alt="Arrow" className={styles.arrow} />
                <TextDesign fontFamily="Pixel" className={styles.name}>{ item.name }</TextDesign>
                <div />
                <div>
                  {
                    item.text.map((text, idx) => (
                      <div key={idx} className={styles.text}>{ text }</div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
}
