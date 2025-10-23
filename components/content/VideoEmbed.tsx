"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Clock, User } from "lucide-react";
import type { VideoResource } from "@/lib/types";

interface VideoEmbedProps {
    video: VideoResource;
}

export function VideoEmbed({ video }: VideoEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [hasError, setHasError] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Lazy loading with Intersection Observer
    useEffect(() => {
        const currentContainer = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            {
                rootMargin: "100px", // Start loading 100px before the video comes into view
            }
        );

        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, [isVisible]);

    const handleLoadVideo = () => {
        setIsLoaded(true);
    };

    const formatDuration = (minutes: number): string => {
        if (minutes < 60) {
            return `${minutes} min`;
        }
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    };

    return (
        <div
            ref={containerRef}
            className="my-8 rounded-lg border border-border bg-card overflow-hidden shadow-lg"
        >
            {/* Video Metadata Header */}
            <div className="p-4 bg-muted/50 border-b border-border">
                <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                        <svg
                            className="w-5 h-5 text-red-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                            {video.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{video.channel}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{formatDuration(video.duration)}</span>
                            </div>
                        </div>
                        {video.description && (
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                {video.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Video Player Container */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                {!isLoaded && isVisible && (
                    <button
                        onClick={handleLoadVideo}
                        className="absolute inset-0 w-full h-full bg-black/80 hover:bg-black/70 transition-colors group cursor-pointer"
                        aria-label={`Play video: ${video.title}`}
                    >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transition-all group-hover:scale-110">
                                <Play className="w-10 h-10 text-white ml-1" fill="white" />
                            </div>
                            <div className="text-white text-center px-4">
                                <p className="font-semibold mb-1">Click to load video</p>
                                <p className="text-sm text-gray-300">
                                    Video will be loaded from YouTube
                                </p>
                            </div>
                        </div>
                        {/* Thumbnail background */}
                        <Image
                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                            alt={video.title}
                            fill
                            className="object-cover opacity-40"
                            unoptimized
                        />
                    </button>
                )}

                {!isLoaded && !isVisible && (
                    <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                            <svg
                                className="w-12 h-12 mx-auto mb-2 opacity-50"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <p className="text-sm">Video will load when visible</p>
                        </div>
                    </div>
                )}

                {isLoaded && (
                    <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        onError={() => setHasError(true)}
                    />
                )}

                {hasError && (
                    <div className="absolute inset-0 w-full h-full bg-destructive/10 flex items-center justify-center">
                        <div className="text-center p-6">
                            <svg
                                className="w-12 h-12 mx-auto mb-3 text-destructive"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <p className="font-semibold text-destructive mb-1">
                                Video Unavailable
                            </p>
                            <p className="text-sm text-muted-foreground">
                                This video may have been removed or is temporarily unavailable.
                            </p>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-sm text-primary hover:underline"
                            >
                                Try opening on YouTube
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
