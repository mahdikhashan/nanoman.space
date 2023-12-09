import { type Photo } from "react-photo-album"

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

type HeaderItem = {
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

type PhotoImage = Photo
