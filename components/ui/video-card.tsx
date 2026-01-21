import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { ReactNode } from "react";

interface VideoCardProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  aspectRatio?: "video" | "square";
}

export function VideoCard({
  title,
  description,
  thumbnail,
  className,
  onClick,
  children,
  aspectRatio = "video",
}: VideoCardProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg overflow-hidden",
        "bg-gray-50 border border-gray-100",
        "transition-all duration-200",
        onClick && "cursor-pointer hover:shadow-soft-lg hover:border-gray-200",
        className
      )}
      onClick={onClick}
    >
      {children ? (
        children
      ) : (
        <>
          <div
            className={cn(
              "w-full flex items-center justify-center",
              "bg-gradient-to-br from-gray-50 to-gray-100",
              aspectClasses[aspectRatio]
            )}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title || "Video thumbnail"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-velto-blue/10 flex items-center justify-center group-hover:bg-velto-blue/20 transition-colors">
                  <Play className="w-8 h-8 text-velto-blue ml-1" fill="currentColor" />
                </div>
                {title && (
                  <p className="text-sm text-gray-600 font-medium">{title}</p>
                )}
              </div>
            )}
          </div>
          {(title || description) && (
            <div className="p-4 bg-white">
              {title && (
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
