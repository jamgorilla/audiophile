// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html>
      <Head>
        <link rel="icon" href="/assets/music-note-icon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}