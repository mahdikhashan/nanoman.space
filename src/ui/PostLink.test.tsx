import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import PostLink from './PostLink';
import type { Props as PostLinkProps } from './PostLink';
import { Category } from '@/lib/types';

const categories: Category[] = 
  [{ name: 'example-category', slug: 'example-category-slug' }]

const post: PostLinkProps = 
  { slug: 'example-test-post', categories: categories, title: 'example-test-tile' }

describe('<PostLink />', () => {
  test('renders correctly', () => {
    const { container } = render(<PostLink {...post} />);
    expect(container).toMatchSnapshot();
  })
})
