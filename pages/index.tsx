import { Suspense } from 'react';

import { getPostsData } from '@/lib/api';
import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import Info from '@/ui/Info';
import PostLink from '@/ui/PostLink';
import ProjectLink from '@/ui/ProjectLink';
import Container from '@/ui/Container';

import { Post } from '@/types/buttercms';
import { projects } from '@/lib/projects';

export default function HomePage({
  posts,
  projects
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container>
      <div className="space-y-6">
        <div className="space-y-8">
          <div className="mt-12 max-w-screen-md space-y-4">
            <Info />
          </div>
          <div className="mt-22 max-w-screen-md space-y-4">
            <div className="flex flex-row items-end justify-between mb-5">
              <h1 className="md:text-2xl font-semibold text-orange-500">
                Recent Blog Posts
              </h1>
              <Link
                className="flex items-center hover:underline mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
                href="/blog"
              >
                Read all posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  ></path>
                </svg>
              </Link>
            </div>

            <Suspense fallback={null}>
              <div className="flex flex-col">
                {posts.map((post) => (
                  <>
                    <PostLink key={post.slug} {...post} />
                    <hr />
                  </>
                ))}
                {!posts.length && <div>No Blog Posts found.</div>}
              </div>
            </Suspense>
          </div>

          <div className="mt-32 max-w-screen-md space-y-4">
            <h1 className="md:text-2xl font-semibold text-orange-500 mb-5">
              Featured Projects
            </h1>
            <Suspense fallback={null}>
              <div className="flex-col space-y-2">
                {projects.map((project) => (
                  project.featured && <ProjectLink key={project.id} {...project} />
                ))}
                {!projects.length && <div>No Project found.</div>}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  if (process.env.NODE_ENV === 'development') {
    try {
      
      const blogPosts: Post[] = await (
        await fetch('http://localhost:3000/posts')
      ).json();

      return { props: { posts: blogPosts, projects } };
    } catch (e) {
      throw new Error('Development or Test Env: Could not get posts!');
    }
  } else {
    try {
      const blogPosts: Post[] = (await getPostsData()).posts;

      return { props: { posts: blogPosts, projects } };
    } catch (e) {
      throw new Error('Production: Could not get posts!');
    }
  }
}
