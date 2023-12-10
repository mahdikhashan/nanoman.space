import { Suspense, useEffect, useState } from 'react';

import Link from 'next/link';

import Container from '@/ui/Container';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsLinks = async () => {
      const response = await fetch('/api/getMdxFiles');
      const data = await response.json();
      return data.mdxFiles;
    };

    getPostsLinks().then((links) => setPosts(links));
  }, []);

  return (
    <Container>
      <div className="space-y-6 font-mono w-[90vw]">
        <div className="space-y-8">
          <div className="mt-12 max-w-screen-md space-y-4 prose">
            <h1 className="text-4xl dark:text-white">Blog</h1>
          </div>

          <div className="mt-22 max-w-full space-y-4">
            <h1 className="md:text-2xl font-semibold text-orange-500">
              Most Popular Posts
            </h1>
            <Suspense fallback={<span>loading...</span>}>
              <div className="flex flex-col divide-y-[1px] divide-zinc-700">
                {posts.map((post, index) => {
                  return (
                    <Link
                      key={index}
                      href={{
                        pathname: '/blog/[slug]',
                        query: { slug: post.link }
                      }}
                      className="flex flex-row py-4 justify-between hover:text-orange-500"
                    >
                      <div className="flex flex-col gap-3">
                        <span className="font-bold">{post.title}</span>
                      </div>
                      <div className="text-zinc-500">
                        {/* {post.categories.map((category: any) => category.name)} */}
                        {Math.floor(Math.random() * 100)} Views
                      </div>
                    </Link>
                  );
                })}
                {!posts.length && <div>No Popular Posts found.</div>}
              </div>
            </Suspense>
          </div>

          <div className="mt-22 max-w-screen-md space-y-4">
            <h1 className="md:text-2xl font-semibold text-orange-500">
              All Posts
            </h1>
            <Suspense fallback={null}>
              <div className="flex flex-col divide-y-[1px] divide-zinc-700">
                {posts.map((post, index) => (
                  <Link
                    key={index}
                    href={{
                      pathname: '/blog/[slug]',
                      query: { slug: post.link }
                    }}
                    className="flex flex-row py-4 justify-between hover:text-orange-500"
                  >
                    <div className="flex flex-col gap-3">
                      <span className="font-bold">{post.title}</span>
                    </div>
                    <div className="text-zinc-500">
                      {posts.map((link: any) => link.date)}
                    </div>
                  </Link>
                ))}
                {!posts.length && <div>No Popular Posts found.</div>}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </Container>
  );
}
