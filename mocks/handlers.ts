import { rest } from 'msw';
import { Post } from '@/lib/types';

const butterCMS = (path) => {
  return new URL(path, 'https://api.buttercms.com/v2').toString();
};

export const handlers = [
  rest.get('https://api.nanoman.space/v2/here/', (_req, res, ctx) => {
    return res(
      ctx.json({
        this: 'that'
      })
    );
  }),
  // Post List
  rest.get(
    butterCMS(
      '/posts/*'
    ),
    (_req, res, ctx) => {
      return res(
        ctx.json<Pick<Post, 'slug'>>({
          slug: 'example-mock-data'
        })
      );
    }
  )
];
