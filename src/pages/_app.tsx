import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  const isServerSide = typeof window === "undefined";

  if (!isServerSide) return false;
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>)
}
