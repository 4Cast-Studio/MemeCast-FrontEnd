import { useMemo } from 'react';
import classNames from 'classnames';
import { SectionHeader } from '#/component/common/SectionHeader';
import { TextDesign } from '#/component/common/TextDesign';
import IconGame from '#/asset/features/Game.svg';
import IconRocket from '#/asset/features/Rocket.svg';
import IconCoin from '#/asset/features/Coin.svg';
import IconAgent from '#/asset/features/Agent.svg';
import IconPaint from '#/asset/features/Paint.svg';

import styles from './Features.module.scss';
import { Container } from '#/component/common/Container';

type FeatureItemProps = {
  placement: 'left' | 'right';
  src: string;
  name: string;
  descriptions: string[];
};

function FeatureItem(props: FeatureItemProps) {
  const { placement, src, name, descriptions } = props;

  const itemClassName = useMemo(() => {
    return classNames(styles.item, {
      [styles.item_right as string]: placement === 'right',
    });
  }, [placement]);

  const iconClassName = useMemo(() => {
    return classNames(styles.icon, {
      [styles.icon_left as string]: placement === 'left',
      [styles.icon_right as string]: placement === 'right',
    });
  }, [placement]);

  const contentClassName = useMemo(() => {
    return classNames(styles.content, {
      [styles.content_left as string]: placement === 'left',
      [styles.content_right as string]: placement === 'right',
    });
  }, [placement]);

  return (
    <div className={itemClassName}>
      <div className={iconClassName}>
        <img src={src} alt="" className={styles.image} />
      </div>
      <div className={contentClassName}>
        <div className={styles.inner}>
          <TextDesign fontFamily="Pixel" className={styles.name}>{ name }</TextDesign>
          {
            descriptions.length > 1 ? (
              descriptions.map((item, index) => (
                <div key={index} className={styles.description}>{ item }</div>
              ))
            ) : (
              <div className={styles.description}>{ descriptions[0] ?? '' }</div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const items: FeatureItemProps[] = useMemo(() => ([{
    placement: 'left',
    src: IconGame,
    name: 'AI-POWERED RE/CREATION',
    descriptions: [
      'Memes evolve on MEMECAST, fueled by gameplay, trading, community power, and AI, forming a positive-sum eco that continuously boosts their value',
    ],
  }, {
    placement: 'right',
    src: IconRocket,
    name: 'LAUNCH AND TRADE MEMES & AGENTS',
    descriptions: [
      'Launch meme tokens instantly with AI agents,',
      'trade tokens, chat, and follow your crew – track what they’re buying, selling, or playing.',
    ],
  }, {
    placement: 'left',
    src: IconCoin,
    name: 'MULTIPLIER FOR MEMES AND AGENTS',
    descriptions: [
      'On MEMECAST, every play is a hyper-leverage tool to pump your bags. Wins trigger token buys, injecting liquidity and boosting value for all holders, while losses reinvest a portion of fees into the pool for sustainable growth.',
    ],
  }, {
    placement: 'right',
    src: IconPaint,
    name: 'MEME 2 EARN',
    descriptions: [
      'Create memes, use AI Agents to produce content, and earn rewards for driving engagement and boosting community awareness.',
    ],
  }, {
    placement: 'left',
    src: IconAgent,
    name: 'AI AGENTS DRIVEN',
    descriptions: [
      'AI Agents powering the platform—from token launches to engagement and gameplay.',
      'Use AI agents as your degen allies—launch tokens, trade, automate tasks, analyze trends and get advice to stack bigger bags!',
    ],
  }]), []);

  return (
    <Container maxWidth="1200px" padding="4em 1em" className={styles.container}>
      <div className={styles.main}>
        <SectionHeader
          title="FEATURES"
          borderColor="#00384D"
          shadowColor="#00658B"
          className={styles.title}
        />
        <TextDesign fontFamily="Pixel" className={styles.subtitle}>
          MEMES ARE REBORN, TOKENS GAIN LIFE, AND DEGENS ARE TURNED INTO WHALES.
        </TextDesign>
        {
          items.map((item, index) => (
            <FeatureItem
              key={index}
              placement={item.placement}
              src={item.src}
              name={item.name}
              descriptions={item.descriptions}
            />
          ))
        }
      </div>
    </Container>
  );
}
