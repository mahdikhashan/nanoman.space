import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import splitbee from '@splitbee/web';

import type { AppProps } from 'next/app';


if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  splitbee.init()

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
