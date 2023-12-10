import Head from 'next/head';

import { useRouter } from 'next/router';

import Header from './Header';
import Footer from './Footer';

export default function Container(props) {
  const { children, customMeta, renderBanner } = props;
  const meta = {
    title: 'Mahdi Khashan | Frontend Developer.',
    description: `Front-end developer, JavaScript enthusiast, and opensource enthusiast.`,
    image: 'https://mo.nanoman.space/static/images/mo-banner.png',
    type: 'website',
    ...customMeta
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mo.nanoman.space${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://mo.nanoman.space$${router.asPath}`}
        />
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

      <main className="min-h-screen mx-auto overflow-y-auto bg-gray-100 dark:bg-zinc-800 font-mono">
        <div className="mx-auto flex-grow">
          <div className="flex flex-col items-center gap-8 py-8">
            <div className='flex md:justify-center justify-start w-full px-6'>
            <Header />
            </div>
            {renderBanner && (
              <div className="row-start-2 mt-12 w-full" id="banner">
                {renderBanner()}
              </div>
            )}
            <div className="flex flex-row mt-20 items-center justify-between max-w-2xl px-6">
              {children}
            </div>
            <div className="mt-8 flex items-center justify-center">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
