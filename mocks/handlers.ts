import { rest } from 'msw';
import { Post } from '@/lib/types';

export const handlers = [
  rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(
      ctx.json<Pick<Post, 'slug'>>({
        slug: 'example'
      })
    );
  })
];
