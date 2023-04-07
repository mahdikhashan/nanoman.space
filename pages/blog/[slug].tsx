import Container from '@/ui/Container';
import { getPost, getPostsData } from '@/lib/api';
import type { Post, Views } from '@/types/buttercms';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const PostTitle = ({ title }: Pick<Post, 'title'>) => {
  return (
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {title}
      </h1>
  );
};

export default function Post({ title, body, author, updated, slug }: Post) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <>
      <Container>
        <PostTitle title={title} />
        <div className="flex flex-col items-start justify-between w-full mt-4 md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {`${author.first_name} ${author.last_name}`} / {format(new Date(updated), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {readingTime(body).text} • <span>{views} views</span>
          </p>
        </div>
        <div
          className="prose lg:prose-xl mt-5 dark:text-white"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </Container>
    </>
  );
}

// pages/blog/[slug].ts

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking'
    };
  }

  // Call an external API endpoint to get posts
  const blogPosts = (await getPostsData()).posts;

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug }
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const blogPost: Post = await getPost(params.slug);

      return { props: { ...blogPost } };
    } catch (e) {
      throw new Error('Could not get posts!');
    }
  }

  return { props: { post: {} } };
}
