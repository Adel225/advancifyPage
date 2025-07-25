
import { ReactElement } from 'react';

// Renamed for clarity
export interface PostContent {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    description: string;
  };
  content: ReactElement; // The content is now a React Element (JSX)
}