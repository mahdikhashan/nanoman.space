type Item = {
  name: string;
  slug: string;
  isDisabled?: boolean;
  redirect?: boolean;
  items?: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const header: Item[] = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'About',
    slug: '/about'
  },
  {
    name: 'Projects',
    slug: '/projects',
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
    slug: 'twitter',
    redirect: true,
    isDisabled: true
  },
];
