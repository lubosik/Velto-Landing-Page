"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading2, Heading3, Body, BodyLarge, BodySmall } from "@/components/ui/typography";
import { Modal } from "@/components/ui/modal";
import { ExternalLink, TrendingUp } from "lucide-react";
import { CaseStudy } from "@/types/rep";
import { trackCaseStudyOpen } from "@/lib/analytics";

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
  repSlug: string;
}

export function CaseStudySection({
  caseStudy,
  repSlug,
}: CaseStudySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    trackCaseStudyOpen(repSlug, caseStudy.title);
    if (caseStudy.embedUrl) {
      setIsModalOpen(true);
    } else if (caseStudy.link) {
      window.open(caseStudy.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <Section variant="default" className="px-0">
        <Card
          variant="elevated"
          padding="lg"
          className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50/50 to-white border-2 border-velto-blue/20 cursor-pointer hover:shadow-soft-lg transition-all"
          onClick={handleOpen}
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-velto-blue/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-velto-blue" />
                  </div>
                  <div>
                    <Heading2 as="h3" className="text-2xl">
                      {caseStudy.title} Case Study
                    </Heading2>
                    <BodySmall className="text-gray-500">
                      Real results from a real client
                    </BodySmall>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <BodyLarge className="text-velto-blue font-bold text-2xl mb-1">
                      {caseStudy.metric}
                    </BodyLarge>
                    {caseStudy.metricDisclaimer && (
                      <BodySmall className="text-gray-500 italic">
                        {caseStudy.metricDisclaimer}
                      </BodySmall>
                    )}
                  </div>

                  <Body className="text-gray-700">
                    See how {caseStudy.title} used Velto to identify verified buyers,
                    improve follow-up speed, and hand off ready-to-close leads to their
                    sales team.
                  </Body>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-velto-blue/10 hover:bg-velto-blue/20 flex items-center justify-center transition-colors">
                  <ExternalLink className="w-6 h-6 text-velto-blue" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <BodySmall className="text-gray-600 flex items-center gap-2">
                <span>Click to view full case study</span>
                <ExternalLink className="w-4 h-4" />
              </BodySmall>
            </div>
          </div>
        </Card>
      </Section>

      {/* Modal for embedded case study */}
      {caseStudy.embedUrl && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`${caseStudy.title} Case Study`}
          size="xl"
        >
          <div className="aspect-video w-full">
            <iframe
              src={caseStudy.embedUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
              title={`${caseStudy.title} Case Study`}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
