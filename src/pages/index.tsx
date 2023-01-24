import { Suspense } from 'react';

import { getCategories, getPostsData } from '@/lib/api';
import { InferGetServerSidePropsType } from 'next';

import Info from '@/ui/Info';
import PostLink from '@/ui/PostLink';
import ProjectLink from '@/ui/ProjectLink';
import Container from '@/ui/Container';
import { Category, Post } from '@/lib/types';

export default function HomePage({
  posts,
  projects
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <div className="space-y-8">
            <div className="mt-12 max-w-screen-md space-y-4">
              <Info />
            </div>
            <div className="mt-22 max-w-screen-md space-y-4">
              <h1 className="md:text-2xl font-semibold text-orange-500">
                Recent Blog Posts
              </h1>
              <Suspense fallback={null}>
                <div className="flex flex-col divide-y-[1px] divide-zinc-700">
                  {posts.map((post) => (
                    <PostLink key={post.slug} {...post} />
                  ))}
                  {!posts.length && <div>No Blog Posts found.</div>}
                </div>
              </Suspense>
            </div>

            <div className="mt-22 max-w-screen-md space-y-4">
              <h1 className="md:text-2xl font-semibold text-orange-500">
                Featured Projects
              </h1>
              <Suspense fallback={null}>
                <div className="flex-col space-y-2">
                  {projects.map((project) => (
                    <ProjectLink key={project.slug} {...project} />
                  ))}
                  {!projects.length && <div>No Project found.</div>}
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  // const res = await fetch('https://mo.nanoman.space/api/get-jokes')
  // const data = await res.status

  // console.log(data);

  // Server-side requests are mocked by `mocks/server.ts`.
  // const res = await fetch('https://mo.nanoman.space/api/get-jokes')
  // const book = await res.json()

  const env = process.env.NODE_ENV;

  if (env == 'development' || 'test') {
    try {
      const blogPosts: Post[] = await (
        await fetch('http://localhost:3000/posts')
      ).json();
      const projects: Category[] = await (
        await fetch('http://localhost:3000/projects')
      ).json();

      return { props: { posts: blogPosts, projects } };
    } catch (e) {
      throw new Error('Could not get posts!');
    }
  }

  if (env == 'production') {
    if (butterToken) {
      try {
        const blogPosts: Post[] = (await getPostsData()).posts;
        const projects: Category[] = await getCategories();

        return { props: { posts: blogPosts, projects } };
      } catch (e) {
        throw new Error('Could not get posts!');
      }
    }
  }

  return { props: { posts: [], projects: [] } };
}
