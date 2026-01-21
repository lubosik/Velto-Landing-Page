import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Heading2, Body } from "@/components/ui/typography";
import { SoftGradientBackground } from "@/components/ui/soft-gradient-background";
import { TwoColumnLayout } from "@/components/layout/two-column-layout";
import { getRepConfig, getAllRepSlugs } from "@/content/reps";
import { MP4Video } from "@/components/video/mp4-video";
import { HeroSection } from "@/components/sections/hero-section";
import { CallExpectationsAside } from "@/components/sections/call-expectations-aside";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { EngagementStoryboardsSection } from "@/components/sections/engagement-storyboards-section";
import { BreakoutVideosSection } from "@/components/sections/breakout-videos-section";
import { PastClientsSection } from "@/components/sections/past-clients-section";
import { SavePageHint } from "@/components/sections/save-page-hint";
import { CaseStudyConnector } from "@/components/ui/case-study-connector";
import { generateMetadata } from "./metadata";

export { generateMetadata };

// Generate static params for known rep slugs
export async function generateStaticParams() {
  const slugs = getAllRepSlugs();
  return slugs.map((slug) => ({
    repSlug: slug,
  }));
}

interface BookedPageProps {
  params: Promise<{ repSlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BookedPage({ params, searchParams }: BookedPageProps) {
  const { repSlug } = await params;
  const searchParamsResolved = await searchParams;
  
  // Get rep config - 404 if not found
  const repConfig = getRepConfig(repSlug);
  if (!repConfig) {
    notFound();
  }

  // Safely parse firstName from searchParams (optional, never breaks if missing)
  const firstName = searchParamsResolved.firstName;
  const firstNameString = Array.isArray(firstName) ? firstName[0] : firstName;
  const displayName = firstNameString && firstNameString.trim() 
    ? firstNameString.trim() 
    : null;

  return (
    <SoftGradientBackground>
      <main className="min-h-screen">
        <Section variant="default" className="pt-16 sm:pt-20">
          <TwoColumnLayout
            main={
              <div className="space-y-16">
                {/* 1. Hero Section with VSL - First to establish connection and set expectations */}
                <HeroSection config={repConfig} displayName={displayName} />

                {/* 2. Past Clients Section - Social proof early to build trust and credibility */}
                {repConfig.pastClients && repConfig.pastClients.length > 0 && (
                  <PastClientsSection clients={repConfig.pastClients} />
                )}

                {/* 3. About Velto MP4 Video - Who we are, after social proof */}
                <Section variant="default" className="px-0">
                  <div className="space-y-4 max-w-5xl mx-auto">
                    <div className="text-center space-y-2">
                      <Heading2>About Velto</Heading2>
                      <Body className="text-gray-600">
                        A quick overview of who we are and what we do
                      </Body>
                    </div>
                    <div className="max-w-4xl mx-auto">
                      <MP4Video
                        src={repConfig.aboutVeltoMp4Src}
                        poster={repConfig.aboutVeltoPoster}
                        title="About Velto"
                        aspectRatio="video"
                        controls={true}
                      />
                    </div>
                  </div>
                </Section>

                {/* 4. Product Showcase Section - What we do, after establishing who we are */}
                <ProductShowcaseSection />

                {/* Visual connector showing case study is about SAO */}
                <CaseStudyConnector />

                {/* 5. Case Study Section - More social proof with specific results */}
                <CaseStudySection
                  caseStudy={repConfig.caseStudy}
                  repSlug={repConfig.repSlug}
                />

                {/* 6. Breakout Videos Section - Objection handling after trust is built */}
                <BreakoutVideosSection
                  videos={repConfig.breakoutVideos}
                  repSlug={repConfig.repSlug}
                />

                {/* 7. Engagement Storyboards Section - Details after trust and objections handled */}
                <EngagementStoryboardsSection
                  pricingStoryboard={repConfig.pricingStoryboard}
                  phasesStoryboard={repConfig.phasesStoryboard}
                  repSlug={repConfig.repSlug}
                />

                {/* 8. Save Page Hint - Last, for convenience */}
                <SavePageHint />
              </div>
            }
            aside={<CallExpectationsAside config={repConfig} />}
          />
        </Section>
      </main>
    </SoftGradientBackground>
  );
}
