import { type Photo } from "react-photo-album"

export type Category = { name: string }
export type Post = {
  title: string,
  slug: string,
  categories: Category[]
}

export type Project = {
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

export type HeaderItem = {
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

export type PhotoImage = Photo
