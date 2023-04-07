import { rest } from 'msw';
import { Category, Post } from '@/types/buttercms';

import PostsResponse from './responses/posts.json';
import ProjectsResponse from './responses/projects.json';

const butterCMS = (path) => {
  return new URL(path, 'https://api.buttercms.com/v2').toString();
};

export const handlers = [
  rest.get('http://localhost:3000/posts', (_req, res, ctx) => {
    return res(
      ctx.json<Post[]>(PostsResponse)
    )
  }),

  rest.get('http://localhost:3000/projects', (_req, res, ctx) => {
    return res(
      ctx.json<Category[]>(ProjectsResponse)
    )
  }),

  rest.get('/get-jokes', (_req, res, ctx) => {
    return res(
      ctx.body("this is from mock")
    )
  }),

  rest.get('https://mo.nanoman.space/api/get-jokes', (_req, res, ctx) => {
    return res(
      ctx.json({
        funny: 'this is not a simple dad joke.'
      })
    )
  }),

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
