"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Heading2, Body, BodySmall } from "@/components/ui/typography";
import { LoomEmbed } from "@/components/video/loom-embed";
import { Play } from "lucide-react";
import { BreakoutVideo } from "@/types/rep";
import {
  trackBreakoutAccordionOpen,
  trackBreakoutVideoLoad,
} from "@/lib/analytics";

interface BreakoutVideosSectionProps {
  videos: BreakoutVideo[];
  repSlug: string;
}

export function BreakoutVideosSection({
  videos,
  repSlug,
}: BreakoutVideosSectionProps) {
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [openedItems, setOpenedItems] = useState<Set<string>>(new Set());

  const handleItemToggle = (videoId: string, isOpen: boolean, question: string) => {
    if (isOpen) {
      setOpenedItems((prev) => new Set(prev).add(videoId));
      trackBreakoutAccordionOpen(repSlug, videoId, question);
    }
  };

  const handleWatchClick = (videoId: string, question: string) => {
    setLoadedVideos((prev) => new Set(prev).add(videoId));
    trackBreakoutVideoLoad(repSlug, videoId, question);
  };

  // Group videos by category for better organization
  const videosByCategory = videos.reduce((acc, video) => {
    const category = video.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(video);
    return acc;
  }, {} as Record<string, BreakoutVideo[]>);

  const categoryOrder = ["Trust", "Process", "ROI", "Integration", "Compliance", "General"];

  return (
    <Section variant="default" className="px-0">
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <Heading2>Quick Answers Before We Talk</Heading2>
          <Body className="text-gray-600 max-w-2xl mx-auto">
            We've prepared short video answers to the most common questions. Click any
            question to see a brief explanation, then watch the 30–60 second video answer.
          </Body>
        </div>

        <Accordion>
          {categoryOrder.map((category) => {
            const categoryVideos = videosByCategory[category];
            if (!categoryVideos || categoryVideos.length === 0) return null;

            return (
              <div key={category} className="space-y-3">
                {categoryVideos.map((video) => {
                  const isItemOpen = openedItems.has(video.id);
                  const isVideoLoaded = loadedVideos.has(video.id);
                  const shouldShowVideo = isItemOpen && isVideoLoaded;

                  return (
                    <AccordionItem
                      key={video.id}
                      id={video.id}
                      question={video.question}
                      whyThisMatters={video.whyThisMatters}
                      onToggle={(isOpen) =>
                        handleItemToggle(video.id, isOpen, video.question)
                      }
                    >
                      <div className="space-y-4">
                        {!isVideoLoaded ? (
                          <div className="space-y-3">
                            <Body className="text-gray-700">
                              Watch a {video.lengthSeconds}-second video answer to this
                              question.
                            </Body>
                            <button
                              onClick={() => handleWatchClick(video.id, video.question)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-velto-blue text-white rounded-lg hover:bg-velto-blue-hover transition-colors font-medium text-sm"
                            >
                              <Play className="w-4 h-4" fill="currentColor" />
                              Watch {video.lengthSeconds}s Answer
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <LoomEmbed
                              url={video.loomUrl}
                              title={video.question}
                              aspectRatio="video"
                              thumbnailUrl={video.loomThumbnailUrl}
                              autoplay={false}
                            />
                            {video.category && (
                              <BodySmall className="text-gray-500">
                                Category: {video.category}
                              </BodySmall>
                            )}
                          </div>
                        )}
                      </div>
                    </AccordionItem>
                  );
                })}
              </div>
            );
          })}
        </Accordion>

        <div className="pt-4 border-t border-gray-200">
          <BodySmall className="text-gray-600 text-center">
            Have more questions? We'll cover everything in detail on our call.
          </BodySmall>
        </div>
      </div>
    </Section>
  );
}
