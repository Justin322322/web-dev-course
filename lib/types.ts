// Core data types for the course platform

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  category: 'html' | 'css' | 'javascript';
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  codeExamples: CodeExample[];
  videoResources: VideoResource[];
  duration: number; // estimated minutes
  difficulty: 'beginner' | 'intermediate';
}

export interface CodeExample {
  id: string;
  language: string;
  code: string;
  title?: string;
  description?: string;
}

export interface VideoResource {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  duration: number;
  description: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  topics?: string[];
}

export interface SearchDocument {
  id: string;
  type: 'lesson' | 'code' | 'video';
  title: string;
  content: string;
  category: 'html' | 'css' | 'javascript';
  difficulty: string;
  keywords: string[];
  sectionId: string;
  lessonId: string;
}

export interface UserProgress {
  completedLessons: string[]; // lesson IDs
  bookmarkedLessons: string[];
  lastAccessedLesson?: string;
  progressPercentage: number;
}
