"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading2, Heading3, Body, BodySmall } from "@/components/ui/typography";
import { Modal } from "@/components/ui/modal";
import { ExternalLink, DollarSign, Layers } from "lucide-react";
import { Storyboard } from "@/types/rep";
import { trackPricingOpen, trackPhasesOpen } from "@/lib/analytics";

interface EngagementStoryboardsSectionProps {
  pricingStoryboard: Storyboard;
  phasesStoryboard: Storyboard;
  repSlug: string;
}

export function EngagementStoryboardsSection({
  pricingStoryboard,
  phasesStoryboard,
  repSlug,
}: EngagementStoryboardsSectionProps) {
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [phasesModalOpen, setPhasesModalOpen] = useState(false);

  const handlePricingOpen = () => {
    trackPricingOpen(repSlug);
    if (pricingStoryboard.embedUrl) {
      setPricingModalOpen(true);
    } else if (pricingStoryboard.link) {
      window.open(pricingStoryboard.link, "_blank", "noopener,noreferrer");
    }
  };

  const handlePhasesOpen = () => {
    trackPhasesOpen(repSlug);
    if (phasesStoryboard.embedUrl) {
      setPhasesModalOpen(true);
    } else if (phasesStoryboard.link) {
      window.open(phasesStoryboard.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <Section variant="default" className="px-0">
        <div className="space-y-6">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <Heading2>How the Engagement Works</Heading2>
            <Body className="text-gray-600">
              Understand the phases, timeline, and investment before we talk
            </Body>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Phases Storyboard */}
            <Card
              variant="elevated"
              padding="lg"
              className="cursor-pointer hover:shadow-soft-lg transition-all border-2 border-gray-100 hover:border-velto-blue/20"
              onClick={handlePhasesOpen}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-velto-blue/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-velto-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Heading3 className="text-lg sm:text-xl">{phasesStoryboard.title}</Heading3>
                    <BodySmall className="text-gray-500">
                      Setup, integration, QA, tuning, reporting
                    </BodySmall>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>

                <Body className="text-gray-700">
                  See the typical engagement phases: from initial setup through
                  integration, quality assurance, tuning, and ongoing reporting. Understand
                  the timeline and what's included at each stage.
                </Body>

                <div className="pt-2 border-t border-gray-100">
                  <BodySmall className="text-gray-600 flex items-center gap-2">
                    <span>View phases storyboard</span>
                    <ExternalLink className="w-4 h-4" />
                  </BodySmall>
                </div>
              </div>
            </Card>

            {/* Pricing Storyboard */}
            <Card
              variant="elevated"
              padding="lg"
              className="cursor-pointer hover:shadow-soft-lg transition-all border-2 border-gray-100 hover:border-velto-blue/20"
              onClick={handlePricingOpen}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-velto-blue/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-velto-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Heading3 className="text-lg sm:text-xl">{pricingStoryboard.title}</Heading3>
                    <BodySmall className="text-gray-500">
                      Investment and what's included
                    </BodySmall>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>

                <Body className="text-gray-700">
                  Understand the investment structure and what's included. We'll cover
                  your specific pricing and package options on the call, but this gives
                  you a framework to think about the investment.
                </Body>

                <div className="pt-2 border-t border-gray-100">
                  <BodySmall className="text-gray-600 flex items-center gap-2">
                    <span>View pricing storyboard</span>
                    <ExternalLink className="w-4 h-4" />
                  </BodySmall>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card variant="outlined" padding="md" className="bg-blue-50/30 border-blue-100">
              <BodySmall className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Note:</strong> These storyboards provide
                a framework. Actual pricing, phases, and timelines are customized to your
                team's needs and will be discussed in detail on our call.
              </BodySmall>
            </Card>
          </div>
        </div>
      </Section>

      {/* Modals for embedded storyboards */}
      {phasesStoryboard.embedUrl && (
        <Modal
          isOpen={phasesModalOpen}
          onClose={() => setPhasesModalOpen(false)}
          title={phasesStoryboard.title}
          size="xl"
        >
          <div className="aspect-video w-full">
            <iframe
              src={phasesStoryboard.embedUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
              title={phasesStoryboard.title}
            />
          </div>
        </Modal>
      )}

      {pricingStoryboard.embedUrl && (
        <Modal
          isOpen={pricingModalOpen}
          onClose={() => setPricingModalOpen(false)}
          title={pricingStoryboard.title}
          size="xl"
        >
          <div className="aspect-video w-full">
            <iframe
              src={pricingStoryboard.embedUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
              title={pricingStoryboard.title}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
