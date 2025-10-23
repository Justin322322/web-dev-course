import fs from 'fs';
import path from 'path';
import type { VideoResource } from './types';

interface CuratedVideos {
  html: VideoResource[];
  css: VideoResource[];
  javascript: VideoResource[];
}

let cachedVideos: CuratedVideos | null = null;

/**
 * Load all curated videos from JSON file
 */
export function loadCuratedVideos(): CuratedVideos {
  if (cachedVideos) {
    return cachedVideos;
  }

  try {
    const videosPath = path.join(process.cwd(), 'content', 'videos', 'curated-videos.json');
    const fileContent = fs.readFileSync(videosPath, 'utf-8');
    cachedVideos = JSON.parse(fileContent);
    return cachedVideos as CuratedVideos;
  } catch (error) {
    console.error('Error loading curated videos:', error);
    return { html: [], css: [], javascript: [] };
  }
}

/**
 * Get videos for a specific category
 */
export function getVideosByCategory(
  category: 'html' | 'css' | 'javascript'
): VideoResource[] {
  const videos = loadCuratedVideos();
  return videos[category] || [];
}

/**
 * Get videos relevant to a specific lesson based on topics
 * This matches video topics with lesson content
 */
export function getVideosForLesson(
  category: 'html' | 'css' | 'javascript',
  lessonId: string,
  lessonContent?: string
): VideoResource[] {
  const allVideos = getVideosByCategory(category);
  
  // Extract topic keywords from lesson ID
  const lessonTopics = lessonId
    .replace(`${category}-`, '')
    .split('-')
    .filter(word => word.length > 3); // Filter out short words
  
  // If we have lesson content, extract additional keywords
  const contentKeywords = lessonContent
    ? extractKeywords(lessonContent)
    : [];
  
  const allKeywords = [...lessonTopics, ...contentKeywords];
  
  // Score videos based on topic relevance
  const scoredVideos = allVideos.map(video => {
    let score = 0;
    
    // Check if video topics match lesson keywords
    if (video.topics) {
      video.topics.forEach(topic => {
        allKeywords.forEach(keyword => {
          if (topic.includes(keyword) || keyword.includes(topic)) {
            score += 2;
          }
        });
      });
    }
    
    // Check title and description for keyword matches
    const searchText = `${video.title} ${video.description}`.toLowerCase();
    allKeywords.forEach(keyword => {
      if (searchText.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    
    return { video, score };
  });
  
  // Return videos with score > 0, sorted by score (highest first)
  return scoredVideos
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3) // Limit to top 3 most relevant videos
    .map(item => item.video);
}

/**
 * Extract keywords from lesson content
 */
function extractKeywords(content: string): string[] {
  // Simple keyword extraction - look for common web dev terms
  const commonTerms = [
    'html', 'css', 'javascript', 'js',
    'element', 'tag', 'attribute', 'selector',
    'property', 'value', 'function', 'variable',
    'array', 'object', 'dom', 'event',
    'flexbox', 'grid', 'responsive', 'layout',
    'form', 'input', 'button', 'link',
    'class', 'id', 'style', 'script'
  ];
  
  const lowerContent = content.toLowerCase();
  return commonTerms.filter(term => lowerContent.includes(term));
}

/**
 * Get a specific video by ID
 */
export function getVideoById(videoId: string): VideoResource | null {
  const videos = loadCuratedVideos();
  const allVideos = [...videos.html, ...videos.css, ...videos.javascript];
  return allVideos.find(video => video.id === videoId) || null;
}
