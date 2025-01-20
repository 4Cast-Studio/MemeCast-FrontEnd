import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TextDesign } from '#/component/common/TextDesign';
import { Container } from '#/component/common/Container';
import ImageAbout from '#/asset/about/Left.webp';
import { usePlatformSummary } from '#/hook/UsePlatformSummary';

import styles from './About.module.scss';

type DataItemProps = {
  name: string;
  value: number | null | undefined;
  usd?: boolean;
};

function DataItem(props: DataItemProps) {
  const { value, name, usd = false } = props;

  return (
    <div id={name} className={styles.item}>
      <CountUp
        start={0}
        end={value ?? 0}
        duration={4}
        enableScrollSpy
        scrollSpyOnce={true}
        scrollSpyDelay={500}
        prefix={usd ? '$' : undefined}
      >
        {
          ({ countUpRef }) => (
            <span ref={countUpRef} className={styles.value} />
          )
        }
      </CountUp>
      <div className={styles.name}>{ name }</div>
    </div>
  );
}

export function About() {
  const { platformSummary } = usePlatformSummary();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <Container maxWidth="1200px" padding="4em 1em" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.top}>
          <img src={ImageAbout} alt="" className={styles.image} />
          <div className={styles.right}>
            <div className={styles.title}>
              <TextDesign fontFamily="SAF">WELCOME TO&nbsp;</TextDesign>
              <TextDesign fontFamily="SAF" className={styles.gradient}>MEMECAST.AI</TextDesign>
            </div>
            <div className={styles.text}>
              Cook, trade and turn plays into outsized positions in memes and agents.
              With trading, gaming, and AI agents fused into memes, we unlock a whole new value layer.
            </div>
          </div>
        </div>
        <div ref={ref} className={styles.bottom}>
          {
            inView && (
              <>
                <DataItem name="Unique Wallets" value={platformSummary.walletsCount} />
                <DataItem name="Interactions" value={platformSummary.interactionsCount} />
                <DataItem name="Game Rounds" value={platformSummary.roundsCount} />
                <DataItem name="Gameplay Vol" value={platformSummary.totalVolumeUsd} usd />
                <DataItem name="Lottery Rewards" value={platformSummary.totalRewardsUsd} usd />
              </>
            )
          }
        </div>
      </div>
    </Container>
  );
}
