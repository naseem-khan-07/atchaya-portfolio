export interface Achievement {
  id: string;
  badgeText: string;
  title: string;
  event: string;
  role: string;
  year: string;
  description: string;
  tag: string;
  highlight?: boolean;
  galleryImages?: string[];
  galleryTitle?: string;
  galleryCaption?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface ProjectPlaceholder {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
}

export interface BeyondCodeItem {
  id: string;
  title: string;
  category: 'EDITING' | 'COMMUNICATION' | 'DANCE';
  tagline: string;
  description: string;
  icon: string;
  badge: string;
}

export interface TimelineStage {
  step: number;
  stage: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface CreativeCraftItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface InternshipExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  points: string[];
}
