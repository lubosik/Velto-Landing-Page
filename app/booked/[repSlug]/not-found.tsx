import Link from "next/link";
import { Heading1, Body } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SoftGradientBackground } from "@/components/ui/soft-gradient-background";

export default function NotFound() {
  return (
    <SoftGradientBackground>
      <main className="min-h-screen flex items-center justify-center">
        <Section variant="narrow">
          <Card variant="elevated" padding="lg" className="text-center">
            <Heading1 className="mb-4">Page Not Found</Heading1>
            <Body className="mb-6 text-gray-600">
              We couldn't find the booking confirmation page you're looking for.
            </Body>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-velto-blue text-white rounded-lg hover:bg-velto-blue-hover transition-colors font-medium"
            >
              Return Home
            </Link>
          </Card>
        </Section>
      </main>
    </SoftGradientBackground>
  );
}
