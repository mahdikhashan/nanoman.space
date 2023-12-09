import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const blogPath = path.join(process.cwd(), 'pages', 'blog');
  const mdxFiles = fs
    .readdirSync(blogPath)
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => path.basename(file))
  res.json({ mdxFiles });
}
