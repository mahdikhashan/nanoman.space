import { Category } from '@/lib/types';
import Link from 'next/link';

type Props = Category;

export default function ProjectLink({ slug, name }: Props) {
  return (
    <Link
      href={`/`}
      key={slug}
      className="block space-y-1.5 rounded-lg border border-black/10 dark:border-white/10 px-4 py-3 hover:border-black/20 dark:hover:border-white/20 dark:bg-zinc-800 bg-white transition ease-in-out delay-50 hover:scale-[1.025]"
    >
      <div>{name}</div>
      <div className="line-clamp-3 text-sm text-zinc-400">{slug}</div>
    </Link>
  );
}
