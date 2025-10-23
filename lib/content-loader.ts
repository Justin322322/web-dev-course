import fs from 'fs';
import path from 'path';
import { parseMarkdown, ParsedMarkdown } from './markdown';
import { getVideosForLesson } from './video-loader';
import type { VideoResource } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

export interface LessonMetadata {
  id: string;
  category: 'html' | 'css' | 'javascript';
  title: string;
  description?: string;
  order: number;
  filename: string;
  videoResources?: VideoResource[];
}

/**
 * Get all lesson files for a category
 */
export function getLessonFiles(category: 'html' | 'css' | 'javascript'): string[] {
  const categoryPath = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  return fs.readdirSync(categoryPath)
    .filter(file => file.endsWith('.md'))
    .sort();
}

/**
 * Get lesson metadata from filename
 */
export function getLessonMetadata(
  category: 'html' | 'css' | 'javascript',
  filename: string
): LessonMetadata {
  const match = filename.match(/^(\d+)-(.+)\.md$/);
  const order = match ? parseInt(match[1]) : 0;
  const slug = match ? match[2] : filename.replace('.md', '');
  
  return {
    id: `${category}-${slug}`,
    category,
    title: slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    order,
    filename,
  };
}

/**
 * Get all lessons for a category
 */
export function getLessons(category: 'html' | 'css' | 'javascript'): LessonMetadata[] {
  const files = getLessonFiles(category);
  return files.map(file => getLessonMetadata(category, file));
}

/**
 * Load lesson content by ID
 */
export async function loadLesson(
  category: 'html' | 'css' | 'javascript',
  lessonId: string
): Promise<(LessonMetadata & ParsedMarkdown) | null> {
  const lessons = getLessons(category);
  const lesson = lessons.find(l => l.id === lessonId);
  
  if (!lesson) {
    return null;
  }
  
  const filePath = path.join(contentDirectory, category, lesson.filename);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const parsed = await parseMarkdown(fileContent);
  
  // Load relevant videos for this lesson
  const videoResources = getVideosForLesson(category, lessonId, fileContent);
  
  return {
    ...lesson,
    ...parsed,
    title: parsed.data.title || lesson.title,
    description: parsed.data.description,
    videoResources,
  };
}

/**
 * Get all lessons across all categories
 */
export function getAllLessons(): LessonMetadata[] {
  const categories: Array<'html' | 'css' | 'javascript'> = ['html', 'css', 'javascript'];
  return categories.flatMap(category => getLessons(category));
}
