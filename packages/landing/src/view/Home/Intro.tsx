import { AdaptiveLink } from '#/component/common/AdaptiveLink';
import { ButtonCopy } from '#/component/common/ButtonCopy';
import { Container } from '#/component/common/Container';
import { TextDesign } from '#/component/common/TextDesign';
import ImageDexScreener from '#/asset/intro/DexScreener.webp';
import ImagePump from '#/asset/intro/Pump.webp';
import { Partners } from './Partners';

import styles from './Intro.module.scss';

const CONTRACT_ADDRESS = 'BAGuqhFjHs2LP4WyG9xKUe2hhfaZDH8pciMMfp32pump';

export function Intro() {
  return (
    <div>
      <Container maxWidth="1400px" padding="6em 1em" className={styles.container}>
        <div className={styles.main}>
          <TextDesign fontFamily="SAF" shadow className={styles.title}>Memes Re/Creation Layer powered by AI Agents</TextDesign>
          <TextDesign fontFamily="Pixel" className={styles.subtitle}>Turning Trenches into Thriving Cults with AI</TextDesign>
          <div className={styles.box}>
            <div className={styles.left}>
              <TextDesign fontFamily="Pixel" className={styles.text}>CA: { CONTRACT_ADDRESS }</TextDesign>
              <ButtonCopy text={CONTRACT_ADDRESS} size={20} />
            </div>
            <div className={styles.right}>
              <AdaptiveLink href="https://dexscreener.com/solana/fqva2hhrhwwxuaggxow6hojfhgrc9vmt6u2guaauozkx">
                <img src={ImageDexScreener} alt="DexScreener" className={styles.image} />
              </AdaptiveLink>
              <AdaptiveLink href="https://pump.fun/coin/BAGuqhFjHs2LP4WyG9xKUe2hhfaZDH8pciMMfp32pump">
                <img src={ImagePump} alt="Pump" className={styles.image} />
              </AdaptiveLink>
            </div>
          </div>
        </div>
      </Container>
      <Partners />
    </div>
  );
}
