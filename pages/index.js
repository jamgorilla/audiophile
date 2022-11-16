import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import arrowRight from '../public/assets/shared/desktop/icon-arrow-right.svg'
import PlusMinus from '../components/elements/PlusMinus'
import { useState } from 'react'


export default function Home() {

  const [numvalue, setNumvalue] = useState(1);

  function stepper(e) {
    const change = e.target.innerHTML;
    console.log(e.target.innerHTML)
    const max = 5;
    const min = 1;
    
    if (change === " - " && numvalue > min) {
      setNumvalue((prev) => prev-1);
    } else if (change === " + " && numvalue < max) {
      setNumvalue((prev) => prev+1);
    }

  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>

      <main className={styles.main}>
        
        <h1>Homepage</h1>
        <h2>Homepage</h2>
        <h3>Homepage</h3>
        <h4>Homepage</h4>
        <h5>Homepage</h5>
        <h6>Homepage</h6>
        <p className='overline'>Homepage</p>
        <p className='sub-title'>Homepage</p>
        <p>Homepage</p>
        <button className='btn-type-1'>See product</button>
        <button className='btn-type-2'>See product</button>
        <button className='btn-type-3'>Shop&nbsp;&nbsp;
          <Image
            src={ arrowRight }
            alt="arrow-right"
          />
        </button>

      <label className="text-btn-label" htmlFor="test">Name</label>
      <input type='text' id="test" placeholder='Insert your name' />

      <label className="radio-btn-label" htmlFor="radio-test">
      <input type="radio" id="radio-test" name="radio-btn" value="money"/>
          e-Money
      </label>

      

      <PlusMinus stepper={ stepper } defaultValue={ numvalue }/>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
