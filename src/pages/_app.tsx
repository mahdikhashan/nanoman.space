import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    );
  }
}
