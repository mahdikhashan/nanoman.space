// @ts-nocheck

import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router'

import { getPost, getPostsData } from '@/lib/api';

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <p>slug: {slug}</p>
      <div className='max-w-screen-md'>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </>
  )
}

// pages/blog/[slug].ts

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  // Call an external API endpoint to get posts
  const blogPosts = (await getPostsData()).posts;

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  
  if (butterToken) {
    try {
      const blogPost = (await getPost(params.slug));

      return { props: { post: blogPost } };
    } catch (e) {
      throw new Error("Could not get posts!");
    }
  }

  return { props: { posts: [], projects: [] } };
}
