import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';
import format from 'date-fns/format';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const blogPath = path.join(process.cwd(), 'pages', 'blog');
  const mdxFiles = fs
    .readdirSync(blogPath)
    .filter((file) => path.extname(file) === '.mdx');

  const filesWithDate = mdxFiles
    .map((file) => {
      const filePath = path.join(blogPath, file);
      const stat = fs.statSync(filePath);
      const formattedDate = format(stat.mtime, 'MMMM dd yyyy');
      const baseFilename = path.basename(file, path.extname(file));
      return { file: baseFilename, date: formattedDate };
    })

  const transformedLinks = filesWithDate.map(link => ({
      ...link,
      file: undefined,
      link: link.file,
      title: link.file.replace(/-/g, ' ').replace(/\b\w/, match => match.toUpperCase())
    }));
  
  res.json({ mdxFiles: transformedLinks });
}
