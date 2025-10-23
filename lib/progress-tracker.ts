import { UserProgress } from './types';

const STORAGE_KEY = 'webdev-arcade-progress';

/**
 * Get user progress from local storage
 */
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return {
      completedLessons: [],
      bookmarkedLessons: [],
      progressPercentage: 0,
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }

  return {
    completedLessons: [],
    bookmarkedLessons: [],
    progressPercentage: 0,
  };
}

/**
 * Save user progress to local storage
 */
export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

/**
 * Mark a lesson as completed
 */
export function markLessonComplete(lessonId: string): UserProgress {
  const progress = getUserProgress();
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.lastAccessedLesson = lessonId;
    progress.progressPercentage = calculateProgressPercentage(progress.completedLessons.length);
    saveUserProgress(progress);
  }
  
  return progress;
}

/**
 * Mark a lesson as incomplete
 */
export function markLessonIncomplete(lessonId: string): UserProgress {
  const progress = getUserProgress();
  
  progress.completedLessons = progress.completedLessons.filter(id => id !== lessonId);
  progress.progressPercentage = calculateProgressPercentage(progress.completedLessons.length);
  saveUserProgress(progress);
  
  return progress;
}

/**
 * Toggle bookmark status for a lesson
 */
export function toggleBookmark(lessonId: string): UserProgress {
  const progress = getUserProgress();
  
  if (progress.bookmarkedLessons.includes(lessonId)) {
    progress.bookmarkedLessons = progress.bookmarkedLessons.filter(id => id !== lessonId);
  } else {
    progress.bookmarkedLessons.push(lessonId);
  }
  
  saveUserProgress(progress);
  return progress;
}

/**
 * Check if a lesson is completed
 */
export function isLessonCompleted(lessonId: string): boolean {
  const progress = getUserProgress();
  return progress.completedLessons.includes(lessonId);
}

/**
 * Check if a lesson is bookmarked
 */
export function isLessonBookmarked(lessonId: string): boolean {
  const progress = getUserProgress();
  return progress.bookmarkedLessons.includes(lessonId);
}

/**
 * Update last accessed lesson
 */
export function updateLastAccessed(lessonId: string): void {
  const progress = getUserProgress();
  progress.lastAccessedLesson = lessonId;
  saveUserProgress(progress);
}

/**
 * Calculate progress percentage based on total lessons
 * Assuming 15 total lessons (5 per category)
 */
function calculateProgressPercentage(completedCount: number): number {
  const totalLessons = 15;
  return Math.round((completedCount / totalLessons) * 100);
}

/**
 * Get progress statistics
 */
export function getProgressStats(): {
  completed: number;
  total: number;
  percentage: number;
  bookmarked: number;
} {
  const progress = getUserProgress();
  const totalLessons = 15;
  
  return {
    completed: progress.completedLessons.length,
    total: totalLessons,
    percentage: progress.progressPercentage,
    bookmarked: progress.bookmarkedLessons.length,
  };
}
