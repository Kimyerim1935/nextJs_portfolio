import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet"></link>
        <meta property="og:title" content="<HappyRim/>" />
        <meta property="og:description" content="Yerim's Portfolio" />
        <meta property="og:url" content="https://next-js-portfolio-lake-eta.vercel.app/" />
        <meta property="og:image" content="/coding.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
