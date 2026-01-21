import { Section } from "@/components/ui/section";
import { Heading1, BodyLarge, Body } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-gray-50/30">
      <Section variant="default" className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-velto-blue/10 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-velto-blue" />
          </div>
          
          <Heading1>Coming Soon</Heading1>
          
          <BodyLarge className="text-gray-700">
            We're putting the finishing touches on this content. Check back soon for detailed information about our engagement phases and pricing.
          </BodyLarge>
          
          <Card variant="elevated" padding="lg" className="mt-8">
            <Body className="text-gray-600 mb-4">
              In the meantime, feel free to reach out if you have any questions. We'd love to discuss how we can help your team.
            </Body>
            <Link
              href="/booked/lubosi"
              className="inline-flex items-center text-velto-blue hover:text-velto-blue/80 font-medium transition-colors"
            >
              ← Back to confirmation page
            </Link>
          </Card>
        </div>
      </Section>
    </div>
  );
}
