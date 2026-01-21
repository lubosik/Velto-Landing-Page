import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading2, Heading3, Body, BodyLarge } from "@/components/ui/typography";
import { CheckCircle2, Sparkles, Users, TrendingUp, Zap } from "lucide-react";

export function ProductShowcaseSection() {
  return (
    <Section variant="default" className="px-0">
      <div className="space-y-12 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <Heading2>An Example of What's Possible</Heading2>
          <BodyLarge className="text-gray-700 max-w-3xl mx-auto">
            Here's a real example of what we've built. Not to limit what's possible, but to show you what an AI employee can do for your team.
          </BodyLarge>
        </div>

        <Card variant="elevated" padding="lg" className="border-2 border-velto-blue/20 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-velto-blue/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-velto-blue" />
              </div>
              <div className="flex-1">
                <Heading3 className="text-xl sm:text-2xl mb-3">Meet SAO, Your AI Employee</Heading3>
                <Body className="text-gray-700 leading-relaxed mb-6">
                  So here's the thing about SAO. It's not just software. Think of SAO like a dedicated team member who never sleeps, never forgets, and never misses an opportunity. SAO handles all those conversations your sales team doesn't have time for. It qualifies leads with the same care a human would, and only hands off the most promising opportunities. And when it does, they're ready to close.
                </Body>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                    <Users className="w-6 h-6 text-velto-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <Body className="font-semibold text-gray-900 mb-1">How Your Sales Team Uses SAO</Body>
                      <Body className="text-gray-700 leading-relaxed">
                        Your team gets to focus on what they do best, closing deals. Meanwhile SAO handles all the initial conversations, qualification, and follow ups. When SAO finds a verified buyer, your team gets a warm handoff with full context. No cold calls. No wasted time on tire kickers.
                      </Body>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-velto-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <Body className="font-semibold text-gray-900 mb-1">The System Behind It</Body>
                      <Body className="text-gray-700 leading-relaxed">
                        SAO runs on infrastructure that learns from every conversation. It adapts to your brand voice and integrates seamlessly with your CRM. It's like having a sales assistant who gets smarter every day, understands your business deeply, and works 24/7 without ever burning out.
                      </Body>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                    <Zap className="w-6 h-6 text-velto-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <Body className="font-semibold text-gray-900 mb-1">What This Means for You</Body>
                      <Body className="text-gray-700 leading-relaxed">
                        Imagine never missing a lead again. Imagine your sales team only talking to people who are genuinely ready to buy. Imagine having complete visibility into every conversation, every qualification, every opportunity. All automatically organized and ready for action.
                      </Body>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Body className="text-gray-600 italic leading-relaxed">
                    <strong className="text-gray-900 not-italic">Remember:</strong> This is just one example. We're constantly innovating and building new capabilities. Whatever your unique challenge is, we can build a solution that fits. Whether it's an AI employee like SAO, a custom automation system, or something entirely new. The possibilities are endless.
                  </Body>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Body className="text-gray-600 max-w-2xl mx-auto">
            This is what's possible when you work with a team that's always pushing boundaries. 
            Let's explore what we can build specifically for you.
          </Body>
        </div>
      </div>
    </Section>
  );
}
