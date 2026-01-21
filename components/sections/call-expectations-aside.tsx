import { Card } from "@/components/ui/card";
import { Heading3, BodySmall } from "@/components/ui/typography";
import { CheckCircle2, Calendar, MessageSquare, Lightbulb } from "lucide-react";
import { RepConfig } from "@/types/rep";

interface CallExpectationsAsideProps {
  config: RepConfig;
}

export function CallExpectationsAside({ config }: CallExpectationsAsideProps) {
  return (
    <div className="space-y-4">
      <Card variant="elevated" padding="md">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-velto-blue mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <Heading3 as="h4" className="mb-2 text-base">
                Next Steps
              </Heading3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Check your calendar for the meeting invite from {config.repName}.</p>
                <p className="text-gray-500 italic">
                  Meeting time and calendar link will be added when available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card variant="elevated" padding="md">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-velto-blue mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <Heading3 as="h4" className="mb-3 text-base">
                What We'll Cover
              </Heading3>
              <div className="text-sm text-gray-600 space-y-3">
                <p>
                  I'll get to know more about you, and you'll get to know more about me and what we do.
                </p>
                <p>
                  We'll go through how you're operating and whether there's a genuine need and interest. If there is, we can move to the next stage of the process.
                </p>
                <p className="text-gray-500 italic text-xs">
                  I'm not asking you to put any money down on this call or anything like that—just to get to know each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card variant="elevated" padding="md">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-velto-blue mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <Heading3 as="h4" className="mb-3 text-base">
                How to Prepare
              </Heading3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  No prep required, but if you want to maximize value, think about:
                </p>
                <ul className="space-y-1.5 mt-2 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-velto-blue">•</span>
                    <span>Where your leads come from</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-velto-blue">•</span>
                    <span>Which CRM you use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-velto-blue">•</span>
                    <span>Average monthly inbound volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-velto-blue">•</span>
                    <span>Current follow-up process</span>
                  </li>
                </ul>
                <p className="text-gray-500 italic mt-3 text-xs">
                  This is optional—we'll guide the conversation either way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card variant="outlined" padding="md" className="bg-blue-50/30 border-blue-100">
        <BodySmall className="text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Remember:</strong> This is exploratory. We
          won't pitch if it's not a match, and you'll leave with clarity either way.
        </BodySmall>
      </Card>
    </div>
  );
}
