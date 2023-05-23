import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/shared/desktop/logo.svg';
import facebook from '../../public/assets/shared/desktop/icon-facebook.svg';
import twitter from '../../public/assets/shared/desktop/icon-twitter.svg';
import instagram from '../../public/assets/shared/desktop/icon-instagram.svg';
import styles from '../../styles/Footer.module.scss';
import navListData from '../../navListData.json';

function Footer() {
  return (
    <footer className={styles.main_footer}>
      <div className={styles.logo_container}>
        <Image
          src={logo}
          height={'58px'}
          width={'58px'}
          alt="logo"
          className="logo"
        />
      </div>

      <p className={styles.description_p}>
        Audiophile is an all in one stop to fulfill your audio needs. We&aspo;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&aspo;re open 7 days a week.
      </p>
      <p className={styles.copyright_p}>Copyright 2023. All Rights Reserved</p>

      <div className={styles.explicit_nav_list}>
        <li key="0">
          <h6>
            <Link href="/">Home</Link>
          </h6>
        </li>

        {navListData.map((element) => (
          <li key={element.id}>
            <h6>
              <Link href={element.pageLink}>{element.title}</Link>
            </h6>
          </li>
        ))}
      </div>
      <div className={styles.social_media_icons}>
        <Image
          src={facebook}
          height={'58px'}
          width={'58px'}
          alt="logo"
          className="logo"
        />
        <Image
          src={twitter}
          height={'58px'}
          width={'58px'}
          alt="logo"
          className="logo"
        />
        <Image
          src={instagram}
          height={'58px'}
          width={'58px'}
          alt="logo"
          className="logo"
        />
      </div>
    </footer>
  );
}

export default Footer;
