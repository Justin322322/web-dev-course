// Re-export progress tracking utilities for easier imports
export {
  getUserProgress,
  saveUserProgress,
  markLessonComplete,
  markLessonIncomplete,
  toggleBookmark,
  isLessonCompleted,
  isLessonBookmarked,
  updateLastAccessed,
  getProgressStats,
} from './progress-tracker';

export { ProgressProvider, useProgress } from './progress-context';
