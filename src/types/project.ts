export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
