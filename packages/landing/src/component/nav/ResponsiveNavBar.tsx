import { Close, DensityMedium } from '@mui/icons-material';
import { useState } from 'react';
import ImageDiscord from '#/asset/contact/Disbord.svg';
import ImageTwitter from '#/asset/contact/Twitter.svg';
import Logo from '#/asset/logo/Logo.webp';
import { useWindowSize } from '#/hook/UseWindowSize';
import { Pathname } from '#/util/Pathname';
import { Url } from '#/util/Url';
import { Button } from '../basic/Button';
import { AdaptiveLink } from '../common/AdaptiveLink';
import { Drawer } from '../common/Drawer';
import { TextDesign } from '../common/TextDesign';

import styles from './ResponsiveNavBar.module.scss';

function Full() {
  return (
    <div className={styles.full}>
      <AdaptiveLink href="/">
        <img src={Logo} alt="MemeCast" className={styles.logo} />
      </AdaptiveLink>
      <div className={styles.right}>
        <AdaptiveLink href="/#AboutUs" className={styles.jump}>About Us</AdaptiveLink>
        <AdaptiveLink href="/#Features" className={styles.jump}>Features</AdaptiveLink>
        <AdaptiveLink href="/#Solution" className={styles.jump}>Solution</AdaptiveLink>
        <AdaptiveLink href="/#Roadmap" className={styles.jump}>Roadmap</AdaptiveLink>
        <AdaptiveLink href={Pathname.Tokenomics} className={styles.jump}>Tokenomics</AdaptiveLink>
        <AdaptiveLink href={Url.contact.twitter} className={styles.social}>
          <img src={ImageTwitter} alt="X" className={styles.contact} />
        </AdaptiveLink>
        <AdaptiveLink href={Url.contact.discord} className={styles.social}>
          <img src={ImageDiscord} alt="Discord" className={styles.contact} />
        </AdaptiveLink>
        <AdaptiveLink href={Url.app.home} className={styles.launch}>
          <TextDesign fontFamily="Pixel">LAUNCH APP</TextDesign>
        </AdaptiveLink>
      </div>
    </div>
  );
}

function Collapsed() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.collapsed}>
        <AdaptiveLink href="/">
          <img src={Logo} alt="MemeCast" className={styles.logo} />
        </AdaptiveLink>
        <Button onClick={() => setVisible(true)} title="menu" className={styles.button}>
          <DensityMedium className={styles.icon} />
        </Button>
      </div>
      <Drawer visible={visible} onVisibleChange={setVisible} placement="right" className={styles.container}>
        <div className={styles.drawer}>
          <div className={styles.row}>
            <AdaptiveLink href="/">
              <img src={Logo} alt="MemeCast" className={styles.logo} />
            </AdaptiveLink>
            <Button onClick={() => setVisible(false)} title="menu">
              <Close className={styles.icon} />
            </Button>
          </div>
          <div className={styles.contacts}>
            <AdaptiveLink href={Url.app.home}>
              <Button className={styles.launch}>LAUNCH APP</Button>
            </AdaptiveLink>
            <AdaptiveLink href="/#AboutUs" className={styles.jump}>About Us</AdaptiveLink>
            <AdaptiveLink href="/#Features" className={styles.jump}>Features</AdaptiveLink>
            <AdaptiveLink href="/#Solution" className={styles.jump}>Solution</AdaptiveLink>
            <AdaptiveLink href="/#Roadmap" className={styles.jump}>Roadmap</AdaptiveLink>
            <AdaptiveLink href={Pathname.Tokenomics} className={styles.jump}>Tokenomics</AdaptiveLink>
            <AdaptiveLink href={Url.contact.twitter} className={styles.text}>
              Twitter
            </AdaptiveLink>
            <AdaptiveLink href={Url.contact.discord} className={styles.text}>
              Discord
            </AdaptiveLink>
            <AdaptiveLink href={Url.contact.zealy} className={styles.text}>
              Zealy
            </AdaptiveLink>
            <AdaptiveLink href={Url.contact.telegram} className={styles.text}>
              Telegram
            </AdaptiveLink>
            <AdaptiveLink href={Url.docs.home} className={styles.text}>
              Documentation
            </AdaptiveLink>
            <AdaptiveLink href={Url.file.termsOfUse} className={styles.text}>
              Terms of Use
            </AdaptiveLink>
            <AdaptiveLink href={Url.file.privacyPolicy} className={styles.text}>
              Privacy Policy
            </AdaptiveLink>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export function ResponsiveNavBar() {
  const { innerWidth } = useWindowSize();

  return (innerWidth <= 1200) ? <Collapsed /> : <Full />;
}
