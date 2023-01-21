import Link from "next/link";

import { getCategories, getPostsData } from "@/lib/api";
import { InferGetStaticPropsType } from "next";

import { BsSearch } from "react-icons/bs";
import Container from "@/ui/Container";
import { Suspense } from "react";

export default function BlogPage({
  posts,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Container>
        <div className="space-y-6 font-mono">
          <div className="space-y-8">
            <div className="mt-12 max-w-screen-md space-y-4">
              <h1 className="text-4xl">All Blog Posts</h1>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <BsSearch />
                </span>
                <input
                  className="placeholder:text-slate-400 block bg-white dark:bg-zinc-700 w-full border border-slate-300 dark:border-transparent rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for posts..."
                  type="text"
                  name="search"
                />
              </label>
            </div>

            <div className="mt-22 max-w-screen-md space-y-4">
              <h1 className="md:text-2xl font-semibold text-orange-500">
                Most Popular Posts
              </h1>
              <Suspense fallback={null}>
                <div className="flex flex-col divide-y-[1px] divide-zinc-700">
                  {posts.map((post: any) => (
                    <Link
                      key={post.slug}
                      href={{
                        pathname: "/blog/[slug]",
                        query: { slug: post.slug },
                      }}
                      className="flex flex-row py-4 justify-between hover:text-orange-500"
                    >
                      <div>{post.title}</div>
                      <div className="text-zinc-500">
                        {post.categories.map((category: any) => category.name)}
                      </div>
                    </Link>
                  ))}
                  {!posts.length && <div>No Popular Posts found.</div>}
                </div>
              </Suspense>
            </div>

            <div className="mt-22 max-w-screen-md space-y-4">
              <h1 className="md:text-2xl font-semibold text-orange-500">
                All Posts
              </h1>
              <Suspense fallback={null}>
                <div className="flex-col space-y-2">
                  {projects.map((project: any) => (
                    <Link
                      href={`/`}
                      key={project}
                      className="block space-y-1.5 rounded-lg border border-black/10 dark:border-white/10 px-4 py-3 hover:border-black/20 dark:hover:border-white/20 dark:bg-zinc-800 bg-white"
                    >
                      <div>{project.name}</div>
                      <div className="line-clamp-3 text-sm text-zinc-400">
                        {project.slug}
                      </div>
                    </Link>
                  ))}
                  {!projects.length && <div>No Posts found.</div>}
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const blogPosts = (await getPostsData()).posts;
      const projects = await getCategories();

      return { props: { posts: blogPosts, projects } };
    } catch (e) {
      // throw new Error("Could not get posts!");
    }
  }

  return { props: { posts: [], projects: [] } };
}