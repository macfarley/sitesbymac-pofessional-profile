export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  completedDate: string;
}

export interface Experience {
  id: string;
  title: string;
  company?: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
}
