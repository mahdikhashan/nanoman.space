import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectLink from './ProjectLink';
import { Project } from '@/lib/projects';

const project: Project = {
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
  type: 'sideproject'
};

describe('<ProjectLink />', () => {
  test('renders correctly', () => {
    const { container } = render(<ProjectLink {...project} />);
    expect(container).toMatchSnapshot();
  });
});
