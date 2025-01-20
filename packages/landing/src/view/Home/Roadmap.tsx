import { useMemo } from 'react';
import { Trans } from 'react-i18next';
import classNames from 'classnames';
import { Container } from '#/component/common/Container';
import { SectionHeader } from '#/component/common/SectionHeader';
import { TextDesign } from '#/component/common/TextDesign';
import { UnorderedList } from '#/component/common/UnorderedList';
import IconCheck from '#/asset/roadmap/Check.svg';

import styles from './Roadmap.module.scss';

type RoadmapItemProps = {
  step: string;
  placement: 'top' | 'bottom';
  name: string;
  list: {
    text: string;
    check?: boolean;
  }[];
};

function RoadmapItem(props: RoadmapItemProps) {
  const { placement, name, list, step } = props;

  return (
    <div className={classNames(styles.item, { [styles.item_top as string]: placement === 'top' })}>
      {
        placement === 'top' ? (
          <div className={styles.content}>
            <TextDesign fontFamily="Pixel" className={styles.name}>{ name }</TextDesign>
            <UnorderedList className={styles.list}>
              {
                list.map((item, index) => (
                  <div key={index}>
                    <Trans>{ item.text }</Trans>
                    { item.check === true && <img src={IconCheck} alt="Check" className={styles.check} /> }
                  </div>
                ))
              }
            </UnorderedList>
          </div>
        ) : (
          <div className={styles.empty} />
        )
      }
      <div className={styles.middle}>
        <TextDesign fontFamily="SAF" borderColor="#00384D" className={styles.index}>{ step }</TextDesign>
        {
          step !== '4' && (
            <div className={styles.line}>
              <div className={styles.circle} />
              <div className={styles.dash} />
              <div className={styles.circle} />
            </div>
          )
        }
      </div>
      {
        placement === 'bottom' ? (
          <div className={styles.content}>
            <TextDesign fontFamily="Pixel" className={styles.name}>{ name }</TextDesign>
            <UnorderedList className={styles.list}>
              {
                list.map((item, index) => (
                  <div key={index}>
                    <Trans>{ item.text }</Trans>
                    { item.check === true && <img src={IconCheck} alt="Check" className={styles.check} /> }
                  </div>
                ))
              }
            </UnorderedList>
          </div>
        ) : (
          <div className={styles.empty} />
        )
      }
    </div>
  );
}

export function Roadmap() {
  const items: RoadmapItemProps[] = useMemo(() => {
    return [{
      step: '1',
      placement: 'top',
      name: 'BLASTOFF',
      list: [{
        text: 'Launch UP or DOWN Game on Mainnet',
        check: true,
      }, {
        text: 'Launch Task & Reward Program',
        check: true,
      }, {
        text: 'Launch Multiple Tier Referral Program',
        check: true,
      }, {
        text: 'Launch Revenue Sharing Program',
        check: true,
      }],
    }, {
      step: '2',
      placement: 'bottom',
      name: 'IGNITION',
      list: [{
        text: 'Launch Meme Crash Game',
        check: true,
      }, {
        text: 'Launched OG NFT Collection',
        check: true,
      }, {
        text: 'Partnered with Major NFT Collections, Communities, and Projects',
        check: true,
      }, {
        text: 'Integrated Games across Other Platforms',
        check: true,
      }],
    }, {
      step: '3',
      placement: 'top',
      name: 'ORBIT',
      list: [{
        text: 'TGE',
      }, {
        text: 'Complete Season 1 Reward Distribution',
      }, {
        text: 'AI Agents Integration',
      }, {
        text: 'Memes and Agents Tokens Integration with Games',
      }],
    }, {
      step: '4',
      placement: 'bottom',
      name: 'MOON',
      list: [{
        text: 'AI Agent Launchpad',
      }, {
        text: 'Launch of Meme2Earn',
      }, {
        text: 'More Innovative Meme Games',
      }, {
        text: 'TG Mini App',
      }, {
        text: 'Multi-Chain Expansion: Hyperliquid & Base Chain',
      }, {
        text: 'More Meme Re/Creation Integration & Ecosystem Growth',
      }],
    }];
  }, []);

  return (
    <Container maxWidth="1500px" padding="4em 1em" className={styles.container}>
      <SectionHeader
        title="ROADMAP"
        borderColor="#00384D"
        shadowColor="#00658B"
        star="Black"
        className={styles.title}
      />
      <div className={styles.main}>
        {
          items.map((item, index) => (
            <RoadmapItem key={index} {...item} />
          ))
        }
      </div>
    </Container>
  );
}
