import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading2, Heading3, Body, BodyLarge } from "@/components/ui/typography";
import { MP4Video } from "@/components/video/mp4-video";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { RepConfig } from "@/types/rep";

interface ProductClaritySectionProps {
  config: RepConfig;
}

export function ProductClaritySection({ config }: ProductClaritySectionProps) {
  return (
    <Section variant="default" className="px-0">
      <div className="space-y-12">
        {/* What Velto Does - Boundaries First */}
        <div className="space-y-6">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <Heading2>What Velto Does (And Doesn't)</Heading2>
            <BodyLarge className="text-gray-700">
              Clear boundaries help you know if we're a fit. Here's exactly where
              Velto fits in your funnel.
            </BodyLarge>
          </div>

          {/* Boundaries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Card variant="outlined" padding="md" className="border-red-200 bg-red-50/30">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <Heading3 as="h4" className="text-lg mb-2">
                    We Don't Generate Leads
                  </Heading3>
                  <Body className="text-gray-700">
                    Velto doesn't create or source leads. You bring the leads—we
                    handle everything after they come in.
                  </Body>
                </div>
              </div>
            </Card>

            <Card variant="outlined" padding="md" className="border-red-200 bg-red-50/30">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <Heading3 as="h4" className="text-lg mb-2">
                    We Don't Close Deals
                  </Heading3>
                  <Body className="text-gray-700">
                    Your sales team handles closing. We qualify, score, and hand off
                    verified buyers ready to close.
                  </Body>
                </div>
              </div>
            </Card>
          </div>

          {/* What We Do - The Middle */}
          <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto border-2 border-velto-blue/20 bg-blue-50/20">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-velto-blue mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <Heading2 as="h3" className="mb-3">
                    We Handle the Middle: Qualification to Handoff
                  </Heading2>
                  <div className="space-y-3">
                    <Body className="text-gray-700">
                      Velto's AI voice caller, <strong>Sal</strong>, calls your inbound
                      and old leads, qualifies them through conversation, transcribes
                      everything, updates your CRM automatically, and scores each lead
                      by intent.
                    </Body>
                    <div className="flex items-center gap-2 text-velto-blue">
                      <ArrowRight className="w-5 h-5" />
                      <Body className="font-semibold">
                        You get verified buyers, not time-wasters
                      </Body>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Product Modules: Sal and ConvoIQ */}
        <div className="space-y-8">
          <div className="text-center">
            <Heading2>Our Products</Heading2>
            <Body className="text-gray-600 mt-2">
              Two tools that work together to transform your lead follow-up
            </Body>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sal Product Card */}
            <Card variant="elevated" padding="lg">
              <div className="space-y-4">
                <div>
                  <Heading3 className="text-2xl mb-2">Sal</Heading3>
                  <Body className="text-gray-600 italic">
                    AI Voice Caller
                  </Body>
                </div>
                <Body className="text-gray-700 leading-relaxed">
                  Sal calls your leads, has natural conversations, qualifies them,
                  transcribes everything, and updates your CRM automatically. Sal
                  identifies verified buyers, researchers, browsers, and time-wasters
                  so your team knows exactly who to prioritize.
                </Body>
                <div className="pt-2 space-y-2">
                  <Body className="font-semibold text-gray-900">What you get:</Body>
                  <ul className="space-y-1.5">
                    {[
                      "Automated lead qualification calls",
                      "Full conversation transcriptions",
                      "Automatic CRM updates",
                      "Intent scoring (verified buyers vs. time-wasters)",
                      "Handoff-ready leads for your closers",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-velto-blue mt-0.5 flex-shrink-0" />
                        <Body className="text-sm text-gray-700">{item}</Body>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* ConvoIQ Product Card */}
            <Card variant="elevated" padding="lg">
              <div className="space-y-4">
                <div>
                  <Heading3 className="text-2xl mb-2">ConvoIQ</Heading3>
                  <Body className="text-gray-600 italic">
                    Call Analytics Dashboard
                  </Body>
                </div>
                <Body className="text-gray-700 leading-relaxed">
                  ConvoIQ is your command center for sales performance. See how fast
                  your team responds, track follow-up metrics, view a leaderboard, and
                  get insights that help you coach your team to close more deals.
                </Body>
                <div className="pt-2 space-y-2">
                  <Body className="font-semibold text-gray-900">What you get:</Body>
                  <ul className="space-y-1.5">
                    {[
                      "Real-time call performance metrics",
                      "Follow-up speed tracking",
                      "Team leaderboard",
                      "Data-driven coaching insights",
                      "Accountability and visibility",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-velto-blue mt-0.5 flex-shrink-0" />
                        <Body className="text-sm text-gray-700">{item}</Body>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Outcomes Language */}
        <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50/50 to-white">
          <div className="space-y-4">
            <Heading2 as="h3" className="text-center">
              What This Means for Your Team
            </Heading2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Time Reclaimed",
                  description: "Your team stops chasing unqualified leads and focuses on verified buyers.",
                },
                {
                  title: "Response Speed",
                  description: "Leads get called within minutes, not days. Speed wins deals.",
                },
                {
                  title: "Intent Clarity",
                  description: "Know exactly who's ready to buy vs. who's just browsing.",
                },
                {
                  title: "Team Accountability",
                  description: "ConvoIQ shows who's performing and who needs coaching.",
                },
              ].map((outcome, idx) => (
                <div key={idx} className="space-y-2">
                  <Heading3 as="h4" className="text-lg">
                    {outcome.title}
                  </Heading3>
                  <Body className="text-gray-700">{outcome.description}</Body>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* About Velto MP4 Video */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <Heading2>About Velto</Heading2>
            <Body className="text-gray-600">
              A quick overview of who we are and what we do
            </Body>
          </div>
          <MP4Video
            src={config.aboutVeltoMp4Src}
            poster={config.aboutVeltoPoster}
            title="About Velto"
            aspectRatio="video"
            controls={true}
          />
        </div>
      </div>
    </Section>
  );
}
