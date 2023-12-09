type Project = {
  id: number;
  name: string;
  icon: string;
  slug: string;
  github: string;
  website: string;
  description: string;
  skills: string[];
  featured: boolean;
  type: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: '99 Emails',
    icon: '/logo.svg',
    slug: '99-minutes-emails',
    github: 'https://github.com/mahdikhashan/99-minutes-emails',
    website: 'https://99-minutes-emails.vercel.app/',
    description: 'A user friendly, safe and available temporary email service.',
    skills: [
      'react',
      'typescript',
      'redux-saga',
      'chakra-ui',
      'vite',
      'vitest',
      'cypress',
      'storybook'
    ],
    featured: true,
    type: 'Side Project'
  },
  {
    id: 2,
    name: 'Aparat Python API',
    icon: '/package.png',
    slug: 'aparat-python',
    github: 'https://github.com/mahdikhashan/aparat-python',
    website: 'https://pypi.org/project/aparat-python/',
    description: 'Aparat VOD Platform API Wrapper',
    skills: ['python', 'REST-API', 'unit-test'],
    featured: true,
    type: 'Python Package'
  },
  {
    id: 3,
    name: 'Vue 3 Click Outside',
    icon: '/package.png',
    slug: 'vue3-click-outside',
    github: 'https://github.com/mahdikhashan/vue3-click-outside',
    website: 'https://www.npmjs.com/package/@mahdikhashan/vue3-click-outside',
    description:
      'Directive for Vue 3 to run a method on clicking outside of the binded element',
    skills: ['javascript', 'vue3', 'vue-test-utils', 'jest'],
    featured: true,
    type: 'NPM Package'
  },
  {
    id: 4,
    name: 'Vercel CORS Proxy',
    icon: '/package.png',
    slug: 'vercel-express-proxy',
    github: 'https://github.com/mahdikhashan/vercel-express-proxy',
    website: 'https://github.com/mahdikhashan/vercel-express-proxy',
    description: '🪞 Proxy server based on Express for Vercel platform',
    type: 'Template / CLI',
    featured: false,
    skills: ['javascript', 'node.js', 'express.js', 'vercel']
  },
  {
    id: 5,
    name: 'Vercel Express',
    icon: '/package.png',
    slug: 'vercel-express-template',
    github: 'https://github.com/mahdikhashan/vercel-express-template',
    website: 'https://github.com/mahdikhashan/vercel-express-template',
    description: '🔥 Express Server Template for Vercel',
    type: 'Template / CLI',
    featured: false,
    skills: ['javascript', 'node.js', 'express.js', 'vercel']
  },
  {
    id: 6,
    name: 'Veemoji',
    icon: '/package.png',
    slug: 'veemoji',
    github: 'https://github.com/mahdikhashan/veemoji',
    website: 'https://veemoji.surge.sh/',
    description: 'A dead simple emoji component library',
    type: 'NPM Package',
    featured: true,
    skills: ['javascript', 'vue', 'npm']
  }
];

export { projects, type Project };
