import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import * as gtag from '../libs/gtags';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
      return null
  }
  return (
    <ThemeProvider attribute='class'>
       <Component {...pageProps} />
     </ThemeProvider>)
}
