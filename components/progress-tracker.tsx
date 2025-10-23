"use client";

import { useProgress } from "@/lib/progress-context";
import { CheckCircle2, BookmarkIcon, Trophy } from "lucide-react";

export function ProgressTracker() {
  const { stats } = useProgress();

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
            className="h-full bg-linear-to-r from-primary via-accent to-secondary transition-all duration-500"
            style={{ width: `${stats.percentage}%` }}
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
