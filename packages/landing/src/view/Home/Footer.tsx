import { useMemo } from 'react';
import { Url } from '#/util/Url';
import { Container } from '#/component/common/Container';
import { AdaptiveLink } from '#/component/common/AdaptiveLink';
import { TextDesign } from '#/component/common/TextDesign';
import { TooltipDesign } from '#/component/basic/TooltipDesign';
import ImageLogo from '#/asset/logo/Logo.webp';
import IconShield from '#/asset/footer/Shield.svg';
import IconTwitter from '#/asset/contact/Twitter.svg';
import IconDiscord from '#/asset/contact/Disbord.svg';
import IconZealy from '#/asset/contact/Zealy.svg';
import IconTelegram from '#/asset/contact/Telegram.svg';
import IconDocument from '#/asset/contact/Document.svg';
import IconTerms from '#/asset/contact/TermsOfUse.svg';
import IconPrivacy from '#/asset/contact/Privacy.svg';

import styles from './Footer.module.scss';

export function Footer() {
  const links = useMemo(() => {
    return [{
      label: 'Twitter',
      src: IconTwitter,
      url: Url.contact.twitter,
    }, {
      label: 'Discord',
      src: IconDiscord,
      url: Url.contact.discord,
    }, {
      label: 'Zealy',
      src: IconZealy,
      url: Url.contact.zealy,
    }, {
      label: 'Telegram',
      src: IconTelegram,
      url: Url.contact.telegram,
    }, {
      label: 'Documentation',
      src: IconDocument,
      url: Url.docs.home,
    }, {
      label: 'Terms of Use',
      src: IconTerms,
      url: Url.file.termsOfUse,
    }, {
      label: 'Privacy Policy',
      src: IconPrivacy,
      url: Url.file.privacyPolicy,
    }];
  }, []);

  return (
    <Container maxWidth="1400px" className={styles.footer}>
      <Container maxWidth="900px" className={styles.pane}>
        <div className={styles.box}>
          <TextDesign fontFamily="Pixel" className={styles.text}>READY TO JOIN TRENCHES?</TextDesign>
          <AdaptiveLink href={Url.app.home} className={styles.start}>
            <TextDesign fontFamily="Pixel">START</TextDesign>
          </AdaptiveLink>
        </div>
      </Container>
      <div className={styles.main}>
        <img src={ImageLogo} alt="Logo" className={styles.logo} />
        <div className={styles.row}>
          <img src={IconShield} alt="Shield" className={styles.shield} />
          <div className={styles.audit}>Audited by FYEO</div>
        </div>
        <div className={styles.links}>
          {
            links.map((item, index) => (
              <TooltipDesign
                key={index}
                content={item.label}
              >
                <AdaptiveLink href={item.url} className={styles.item}>
                  <img src={item.src} alt="" className={styles.icon} />
                </AdaptiveLink>
              </TooltipDesign>
            ))
          }
        </div>
        <div className={styles.copyright}>© { new Date().getFullYear() } MEMECAST.AI</div>
      </div>
    </Container>
  );
}
