import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
