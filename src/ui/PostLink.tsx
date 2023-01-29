'use client';

import { Post } from '@/lib/types';
import Link from 'next/link';

export type Props = Pick<Post, 'slug' | 'title' | 'categories'>;

export default function PostLink({
  slug,
  title,
  categories
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-row py-4 justify-between hover:text-orange-500 transition ease-in-out delay-50 hover:scale-[1.025]"
    >
      <div>{title}</div>
      <div className="text-zinc-500">
        {categories.map((category: any) => category.name)}
      </div>
    </Link>
  );
}
