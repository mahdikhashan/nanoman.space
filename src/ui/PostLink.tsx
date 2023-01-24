import { Post } from '@/lib/types';
import Link from 'next/link';

type Props = Post;

export default function PostLink({
  slug,
  title,
  categories
}: Props) {
  return (
    <Link
      key={slug}
      href={{
        pathname: '/blog/[slug]',
        query: { slug }
      }}
      className="flex flex-row py-4 justify-between hover:text-orange-500"
    >
      <div>{title}</div>
      <div className="text-zinc-500">
        {categories.map((category: any) => category.name)}
      </div>
    </Link>
  );
}
