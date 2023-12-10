import { HeaderItem } from "@/types";

export const header: HeaderItem[] = [
  {
    name: 'Home',
    slug: ''
  },
  {
    name: 'About',
    slug: 'about',
    isDisabled: true
  },
  {
    name: 'Blog',
    slug: 'blog'
  },
  {
    name: 'Projects',
    slug: 'projects',
    items: [
      {
        name: 'Hooks',
        slug: 'hooks',
        description:
          'Preview the hooks available for Client and Server Components',
      },
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Travel',
    slug: 'travels'
  },
  {
    name: 'LinkedIn',
    slug: 'https://www.linkedin.com/in/mahdikhashan/',
    redirect: true,
    isDisabled: true
  },
  {
    name: 'Github',
    slug: 'https://github.com/mahdikhashan',
    redirect: true,
    isDisabled: true
  },
  {
    name: 'Twitter',
    slug: 'https://twitter.com/__nanoman__',
    redirect: true,
    isDisabled: false
  },
];
