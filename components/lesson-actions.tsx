"use client";

import { useProgress } from "@/lib/progress-context";
import { CheckCircle2, Circle, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

interface LessonActionsProps {
  lessonId: string;
}

export function LessonActions({ lessonId }: LessonActionsProps) {
  const { isCompleted, isBookmarked, completeLesson, uncompleteLesson, toggleLessonBookmark } = useProgress();
  
  const completed = isCompleted(lessonId);
  const bookmarked = isBookmarked(lessonId);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleToggleComplete = () => {
    if (completed) {
      uncompleteLesson(lessonId);
    } else {
      completeLesson(lessonId);
      triggerConfetti();
    }
  };

  const handleToggleBookmark = () => {
    toggleLessonBookmark(lessonId);
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={handleToggleComplete}
        variant={completed ? "default" : "outline"}
        size="sm"
        className="gap-2"
      >
        {completed ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Completed
          </>
        ) : (
          <>
            <Circle className="w-4 h-4" />
            Mark Complete
          </>
        )}
      </Button>

      <Button
        onClick={handleToggleBookmark}
        variant={bookmarked ? "secondary" : "outline"}
        size="sm"
        className="gap-2"
      >
        {bookmarked ? (
          <>
            <BookmarkCheck className="w-4 h-4" />
            Bookmarked
          </>
        ) : (
          <>
            <Bookmark className="w-4 h-4" />
            Bookmark
          </>
        )}
      </Button>
    </div>
  );
}
