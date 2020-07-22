import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export interface PostProps {
  title: string;
  text: string;
  id: string;
}

export interface PostsProps {
  posts: PostProps[];
}
