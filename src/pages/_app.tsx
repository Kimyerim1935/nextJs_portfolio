import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
      return null
  }
  return (
      <ThemeProvider attribute='class'>
       <Component {...pageProps} />
     </ThemeProvider>
    )
}
