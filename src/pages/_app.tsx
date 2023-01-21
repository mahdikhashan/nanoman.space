import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import RootLayout from "@/ui/layouts/Default";
import type { AppProps } from "next/app";

import ErrorBoundary from "@/ui/ErrorBoundary";

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
      <RootLayout>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RootLayout>
    );
  }
}
