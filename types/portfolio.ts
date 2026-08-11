export interface Project {
  name: string;
  slug: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  client?: string;
  year?: string;
  repository?: string;
  liveUrl?: string;
}

export interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
}