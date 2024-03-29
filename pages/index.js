import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import heroImage from '../public/assets/home/desktop/image-hero.jpg';
import heroImageTablet from '../public/assets/home/tablet/image-header.jpg';
import heroImageMobile from '../public/assets/home/mobile/image-header.jpg';
import zx9Speaker from '../public/assets/home/desktop/image-speaker-zx9.png';
import BestAudio from '../components/section/BestAudio';
import Link from 'next/link';
import { useState } from 'react';
import NavList from '../components/mainNavigation/NavList';
import navListDataIndex from '../navListData.json';

export default function Home() {
  const [numvalue, setNumvalue] = useState(1);

  // Handles stepper button clicks
  function stepper(e) {
    const change = e.target.innerHTML;
    const max = 50;
    const min = 1;

    if (change === ' - ' && numvalue > min) {
      setNumvalue((prev) => prev - 1);
    } else if (change === ' + ' && numvalue < max) {
      setNumvalue((prev) => prev + 1);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_section}>
          <Image
            src={heroImage}
            className={styles.desktop_hero_image}
            alt="hero-image-earphones-big"
            priority={true}
            quality={100}
            layout="responsive"
          />
          <Image
            src={heroImageTablet}
            className={styles.tablet_hero_image}
            alt="hero-image-earphones"
            priority={true}
            quality={100}
            layout="responsive"
          />
          <Image
            src={heroImageMobile}
            className={styles.mobile_hero_image}
            alt="hero-image-earphones"
            priority={true}
            quality={100}
            layout="responsive"
          />

          <div className={styles.hero_text_container}>
            <p className={`overline ${styles.hero_title_overline}`}>
              New XXX Product
            </p>
            <h1 className={styles.hero_title}>
              XX99 Mark II<br></br>Headphones
            </h1>
            <p className={styles.hero_paragraph}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href={'/products/4'}>
              <button
                className={`btn-type-1 ${styles.hero_see_product_button}`}
              >
                See product
              </button>
            </Link>
          </div>
        </div>

        <NavList navigationArray={navListDataIndex} />

        <div className={styles.advertisment_zx9_speaker}>
          <div className={styles.zx9_speaker_image_container}>
            <Image
              src={zx9Speaker}
              alt="zx9-speaker"
              quality={100}
              width={756}
              height={918}
              layout="responsive"
            />
          </div>
          <div className={styles.zx9_speaker_text}>
            <h1>ZX9 Speaker</h1>
            <p className={styles.zx9_speaker_paragraph}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href={'/products/6'}>
              <button className={`btn-type-1 ${styles.zx9_see_product_button}`}>
                See product
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.advertisment_zx7_speaker}>
          <div className={styles.zx7_speaker_text}>
            <h2>ZX7 Speaker</h2>
            <Link href={'/products/5'}>
              <button className={`btn-type-2 ${styles.zx7_see_product_button}`}>
                See product
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.earphone_container_grid}>
          <div className={styles.earphone_background_image_container}></div>
          <div className={styles.earphone_title_n_button}>
            <h2>YX1 Earphones</h2>
            <Link href={'/products/1'}>
              <button className={`btn-type-2 ${styles.yx1_see_product_button}`}>
                See product
              </button>
            </Link>
          </div>
        </div>

        <BestAudio />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
