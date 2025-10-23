"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Video } from "lucide-react";
import { VideoEmbed } from "./VideoEmbed";
import { LessonActions } from "@/components/lesson-actions";
import { useProgress } from "@/lib/progress-context";
import { MarkdownRenderer } from "./markdown-renderer";
import type { VideoResource } from "@/lib/types";

interface LessonViewProps {
  lessonId: string;
  title: string;
  content: string;
  category: string;
  videoResources?: VideoResource[];
  isLastLesson?: boolean;
  previousLesson?: {
    id: string;
    title: string;
  };
  nextLesson?: {
    id: string;
    title: string;
  };
}

export function LessonView({
  lessonId,
  title,
  content,
  category,
  videoResources = [],
  isLastLesson = false,
  previousLesson,
  nextLesson,
}: LessonViewProps) {
  const { setLastAccessed } = useProgress();

  // Track last accessed lesson
  useEffect(() => {
    setLastAccessed(lessonId);
  }, [lessonId, setLastAccessed]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <div className="flex-1">
          {previousLesson && (
            <Link
              href={`/${category}/${previousLesson.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="text-sm font-medium">{previousLesson.title}</div>
              </div>
            </Link>
          )}
        </div>

        <div className="flex-1 flex justify-end">
          {nextLesson && (
            <Link
              href={`/${category}/${nextLesson.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="text-sm font-medium">{nextLesson.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
          {category}
        </div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div data-tour="lesson-actions">
          <LessonActions lessonId={lessonId} />
        </div>
      </div>

      {/* Lesson Content */}
      <div className="mb-12" data-tour="lesson-content">
        <MarkdownRenderer content={content} />
      </div>

      {/* Video Resources Section - Only show on last lesson */}
      {isLastLesson && videoResources && videoResources.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Video className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Related Video Tutorials</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Congratulations on completing the {category.toUpperCase()} section! Here are some curated video tutorials to reinforce your learning:
          </p>
          <div className="space-y-6">
            {videoResources.map((video) => (
              <VideoEmbed key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="mb-8 pt-8 border-t border-border">
        <LessonActions lessonId={lessonId} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {previousLesson && (
            <Link
              href={`/${category}/${previousLesson.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="text-sm font-medium">{previousLesson.title}</div>
              </div>
            </Link>
          )}
        </div>

        <div className="flex-1 flex justify-end">
          {nextLesson && (
            <Link
              href={`/${category}/${nextLesson.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="text-sm font-medium">{nextLesson.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
