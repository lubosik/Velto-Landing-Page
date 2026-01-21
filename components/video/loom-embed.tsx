"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface LoomEmbedProps {
  url: string;
  title?: string;
  className?: string;
  aspectRatio?: "video" | "square";
  autoplay?: boolean;
  thumbnailUrl?: string; // Optional Loom thumbnail URL
  onPlay?: () => void;
}

export function LoomEmbed({
  url,
  title,
  className,
  aspectRatio = "video",
  autoplay = false,
  thumbnailUrl,
  onPlay,
}: LoomEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Extract Loom video ID from various URL formats
  const extractLoomId = (loomUrl: string): string | null => {
    if (!loomUrl || loomUrl === "PASTE_LOOM_EMBED_URL_HERE") {
      return null;
    }

    // Handle different Loom URL formats
    // https://www.loom.com/embed/abc123 (embed URL)
    // https://www.loom.com/share/abc123 (share URL)
    // https://loom.com/share/abc123
    // abc123 (just the ID)
    const embedMatch = loomUrl.match(/loom\.com\/embed\/([a-zA-Z0-9]+)/);
    if (embedMatch) return embedMatch[1];
    
    const shareMatch = loomUrl.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (shareMatch) return shareMatch[1];
    
    // If it's just an ID
    const idMatch = loomUrl.match(/^([a-zA-Z0-9]+)$/);
    return idMatch ? idMatch[1] : null;
  };

  const loomId = extractLoomId(url);

  // If no valid Loom URL, show placeholder
  if (!loomId) {
    return (
      <div
        className={cn(
          "relative rounded-lg overflow-hidden",
          "bg-gradient-to-br from-gray-50 to-gray-100",
          "border border-gray-200",
          "flex items-center justify-center",
          aspectRatio === "video" ? "aspect-video" : "aspect-square",
          className
        )}
      >
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-velto-blue/10 flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-velto-blue ml-1" fill="currentColor" />
          </div>
          <p className="text-sm text-gray-600 font-medium mb-2">
            {title || "Video Placeholder"}
          </p>
          <p className="text-xs text-gray-500">
            Loom URL not configured
          </p>
        </div>
      </div>
    );
  }

  const embedUrl = `https://www.loom.com/embed/${loomId}${autoplay ? "?autoplay=true" : ""}`;

  const handlePlay = () => {
    setIsLoaded(true);
    setHasPlayed(true);
    onPlay?.();
  };

  if (!isLoaded) {
    return (
      <div
        className={cn(
          "relative rounded-lg overflow-hidden",
          "bg-gradient-to-br from-gray-50 to-gray-100",
          "border border-gray-200",
          "cursor-pointer group transition-all duration-200",
          "hover:shadow-soft-lg hover:border-gray-300",
          aspectRatio === "video" ? "aspect-video" : "aspect-square",
          className
        )}
        onClick={handlePlay}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handlePlay();
          }
        }}
        aria-label={`Play video: ${title || "Loom video"}`}
      >
        {thumbnailUrl ? (
          <>
            <img
              src={thumbnailUrl}
              alt={title || "Video thumbnail"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-velto-blue/90 group-hover:bg-velto-blue flex items-center justify-center transition-all opacity-100 group-hover:scale-110">
                <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
              </div>
            </div>
            {title && (
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-white font-medium drop-shadow-lg">{title}</p>
                <p className="text-xs text-white/80 drop-shadow">Click to play</p>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-velto-blue/10 group-hover:bg-velto-blue/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                <Play className="w-10 h-10 text-velto-blue ml-1" fill="currentColor" />
              </div>
              {title && (
                <p className="text-sm text-gray-700 font-medium mb-1">{title}</p>
              )}
              <p className="text-xs text-gray-500">Click to play</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden",
        "bg-gray-900",
        "border border-gray-200",
        aspectRatio === "video" ? "aspect-video" : "aspect-square",
        className
      )}
    >
      <iframe
        src={embedUrl}
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title={title || "Loom video"}
        allow="autoplay; encrypted-media"
      />
    </div>
  );
}
