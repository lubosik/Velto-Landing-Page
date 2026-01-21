"use client";

import Image from "next/image";
import { Heading1, BodyLarge, Body } from "@/components/ui/typography";
import { LoomEmbed } from "@/components/video/loom-embed";
import { RepConfig } from "@/types/rep";
import { trackHeroVideoPlay } from "@/lib/analytics";

interface HeroSectionProps {
  config: RepConfig;
  displayName?: string | null;
}

export function HeroSection({ config, displayName }: HeroSectionProps) {
  return (
    <div className="space-y-6">
      {/* Logo and Headline */}
      <div className="space-y-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <Image
            src="/velto-logo.jpeg"
            alt="Velto Logo"
            width={64}
            height={64}
            className="rounded-lg flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16"
            priority
          />
          <div className="flex-1 min-w-0">
            <Heading1 className="mb-2 text-2xl sm:text-3xl lg:text-4xl">{config.heroThankYouHeadline}</Heading1>
            {displayName ? (
              <BodyLarge className="text-gray-600">
                Thanks, {displayName}! {config.heroSubheadline}
              </BodyLarge>
            ) : (
              <BodyLarge className="text-gray-600">
                {config.heroSubheadline}
              </BodyLarge>
            )}
          </div>
        </div>

        {/* Human-first paragraph */}
        <div className="space-y-3 pt-2">
          <Body className="text-gray-700 leading-relaxed">
            Your call with {config.repName} is confirmed. This isn't a sales pitch—it's a
            conversation to see if Velto is the right fit for your team. We'll explore your
            current process, understand your goals, and you'll leave with a clear next step
            either way.
          </Body>
          <Body className="text-gray-600 text-sm">
            Below is a short video (60–120 seconds) to help you know what to expect. Then
            we've prepared answers to common questions so you can arrive fully informed.
          </Body>
        </div>
      </div>

      {/* Hero VSL */}
      <div className="pt-2">
        <LoomEmbed
          url={config.heroVslLoomUrl}
          title="Welcome & What to Expect on Our Call"
          aspectRatio="video"
          autoplay={false}
          thumbnailUrl={config.heroVslLoomThumbnailUrl}
          onPlay={() => trackHeroVideoPlay(config.repSlug)}
        />
      </div>
    </div>
  );
}
