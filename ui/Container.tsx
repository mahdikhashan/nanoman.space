import { PropsWithChildren } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";


export default function Container(props) {
  const router = useRouter();
  const { children, customMeta } = props
  const meta = {
    title: "Mahdi Khashan | Frontend Developer.",
    description: `Front-end developer, JavaScript enthusiast, and opensource enthusiast.`,
    image: "https://mo.nanoman.space/static/images/mo-banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://mo.nanoman.space${router.asPath}`} />
        <link rel="canonical" href={`https://mo.nanoman.space$${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mahdi Khashan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@__nanoman__" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main
        id="skip"
        className="min-h-screen mx-auto overflow-y-auto max-w-3xl bg-gray-100 dark:bg-zinc-800 font-mono"
      >
        <div className="container mx-auto flex-grow">
          <div className="grid grid-cols-1 gap-y-8 p-4 md:py-8 md:px-12">
            <div className="row-start-1">
              <Header />
            </div>
            <div className="row-start-2 mt-12">{children}</div>
            <div className="row-start-3 row-end-4 mt-20 flex items-center justify-center">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
