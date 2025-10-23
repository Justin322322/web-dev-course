"use client";

import { useProgress } from "@/lib/progress-context";
import { CheckCircle2, BookmarkIcon, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";

// Store the last rendered percentage globally to persist across remounts
let globalLastPercentage: number | null = null;

export function ProgressTracker() {
  const { stats } = useProgress();
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    const bar = progressBarRef.current;
    const currentValue = stats.percentage;

    // First ever render across all mounts - set immediately without animation
    if (globalLastPercentage === null) {
      bar.style.transition = 'none';
      bar.style.width = `${currentValue}%`;
      globalLastPercentage = currentValue;
      return;
    }

    // Component remounted but value is the same - set immediately without animation
    if (globalLastPercentage === currentValue) {
      bar.style.transition = 'none';
      bar.style.width = `${currentValue}%`;
      return;
    }

    // Value actually changed - animate the change
    if (globalLastPercentage !== currentValue) {
      bar.style.transition = 'width 500ms ease-out';
      bar.style.width = `${currentValue}%`;
      globalLastPercentage = currentValue;
    }
  }, [stats.percentage]);

  return (
    <div className="space-y-4">
      {/* Overall Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Overall Progress</span>
          <span className="font-mono font-semibold">{stats.percentage}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-linear-to-r from-primary via-accent to-secondary"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-card border border-border rounded-lg p-2.5 text-center">
          <div className="flex items-center justify-center mb-1">
            <CheckCircle2 className="w-4 h-4 text-accent" />
          </div>
          <div className="text-xl font-bold font-mono">{stats.completed}</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Done</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-2.5 text-center">
          <div className="flex items-center justify-center mb-1">
            <BookmarkIcon className="w-4 h-4 text-primary" />
          </div>
          <div className="text-xl font-bold font-mono">{stats.bookmarked}</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Saved</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-2.5 text-center">
          <div className="flex items-center justify-center mb-1">
            <Trophy className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-xl font-bold font-mono">{stats.total}</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Total</div>
        </div>
      </div>
    </div>
  );
}
