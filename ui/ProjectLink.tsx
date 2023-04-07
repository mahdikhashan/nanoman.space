import type { Project } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';

type Props = Project;

export default function ProjectLink({ name, description, website, icon }: Props) {
  return (
    <Link
      href={website}
      target="_blank"
      className="flex gap-5 space-y-1.5 rounded-lg border border-black/10 dark:border-white/10 px-4 py-3 hover:border-black/20 dark:hover:border-white/20 dark:bg-zinc-800 bg-white transition ease-in-out delay-50 hover:scale-[1.025]"
    >
      <img src={icon} alt={name} style={{ width: "50px", height: "50px" }} />
      <div>
        <div>{name}</div>
        <div className="line-clamp-3 text-sm text-zinc-400">{description}</div>
      </div>
    </Link>
  );
}
