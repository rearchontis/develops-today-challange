import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export interface PostProps {
  title: string;
  body: string;
  id?: number;
}

export interface PostsProps {
  posts: PostProps[];
}
