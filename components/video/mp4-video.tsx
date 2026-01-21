"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface MP4VideoProps {
  src: string; // Path to MP4 in /public or remote URL
  poster?: string; // Path to poster image in /public or remote URL
  title?: string;
  className?: string;
  aspectRatio?: "video" | "square";
  autoplay?: boolean;
  controls?: boolean;
  onPlay?: () => void;
}

export function MP4Video({
  src,
  poster,
  title,
  className,
  aspectRatio = "video",
  autoplay = false,
  controls = true,
  onPlay,
}: MP4VideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasInteracted(true);
      onPlay?.();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // If src is not configured or is placeholder, show placeholder UI
  if (!src || src === "PASTE_MP4_URL_HERE" || src.startsWith("PASTE")) {
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
            MP4 video not configured
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden",
        "bg-gray-900 border border-gray-200",
        aspectRatio === "video" ? "aspect-video" : "aspect-square",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        controls={controls && hasInteracted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        aria-label={title || "Video"}
      />

      {/* Custom Controls Overlay */}
      {controls && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors group pointer-events-none">
          {!hasInteracted && (
            <button
              onClick={handlePlay}
              className="w-20 h-20 rounded-full bg-velto-blue/90 hover:bg-velto-blue flex items-center justify-center transition-all opacity-100 group-hover:scale-110 pointer-events-auto"
              aria-label="Play video"
            >
              <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
            </button>
          )}

          {hasInteracted && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" fill="currentColor" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                )}
              </button>
              <button
                onClick={handleToggleMute}
                className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
