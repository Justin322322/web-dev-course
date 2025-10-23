"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProgress } from './types';
import {
  getUserProgress,
  markLessonComplete,
  markLessonIncomplete,
  toggleBookmark,
  updateLastAccessed,
} from './progress-tracker';

interface ProgressContextType {
  progress: UserProgress;
  completeLesson: (lessonId: string) => void;
  uncompleteLesson: (lessonId: string) => void;
  toggleLessonBookmark: (lessonId: string) => void;
  isCompleted: (lessonId: string) => boolean;
  isBookmarked: (lessonId: string) => boolean;
  setLastAccessed: (lessonId: string) => void;
  stats: {
    completed: number;
    total: number;
    percentage: number;
    bookmarked: number;
  };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    bookmarkedLessons: [],
    progressPercentage: 0,
  });
  const [isHydrated, setIsHydrated] = useState(false);

  // Load progress after hydration
  useEffect(() => {
    const loadProgress = () => {
      setIsHydrated(true);
      setProgress(getUserProgress());
    };
    
    // Use setTimeout to avoid cascading renders
    const timeoutId = setTimeout(loadProgress, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const completeLesson = (lessonId: string) => {
    const updated = markLessonComplete(lessonId);
    setProgress(updated);
  };

  const uncompleteLesson = (lessonId: string) => {
    const updated = markLessonIncomplete(lessonId);
    setProgress(updated);
  };

  const toggleLessonBookmark = (lessonId: string) => {
    const updated = toggleBookmark(lessonId);
    setProgress(updated);
  };

  const isCompleted = (lessonId: string) => {
    if (!isHydrated) return false;
    return progress.completedLessons.includes(lessonId);
  };

  const isBookmarked = (lessonId: string) => {
    if (!isHydrated) return false;
    return progress.bookmarkedLessons.includes(lessonId);
  };

  const setLastAccessed = (lessonId: string) => {
    updateLastAccessed(lessonId);
  };

  const stats = {
    completed: progress.completedLessons.length,
    total: 26,
    percentage: progress.progressPercentage,
    bookmarked: progress.bookmarkedLessons.length,
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson,
        uncompleteLesson,
        toggleLessonBookmark,
        isCompleted,
        isBookmarked,
        setLastAccessed,
        stats,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
