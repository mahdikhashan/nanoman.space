export type Post = {
  status: string,
  created: string,
  updated: string,
  published: string,
  title: string,
  slug: string,
  body: string,
  summary: string,
  seo_title: string,
  meta_description: string,
  featured_image_alt: string,
  url: string,
  featured_image: unknown,
  tags: Tag[],
  categories: Category[],
  author: Author
};

export type Category = {
  name: string,
  slug: string
};

export type Author = {
  bio: string,
  email: string,
  slug: string,
  title: string,
  last_name: string,
  first_name: string,
  facebook_url: string,
  linkedin_url: string,
  instagram_url: string,
  pinterest_url: string,
  profile_image: string,
  twitter_handle: string
};

export type Tag = {};

export type Views = {
  total: number;
};