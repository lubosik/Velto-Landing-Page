import { Metadata } from "next";
import { getRepConfig } from "@/content/reps";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ repSlug: string }>;
}): Promise<Metadata> {
  const { repSlug } = await params;
  const repConfig = getRepConfig(repSlug);

  if (!repConfig) {
    return {
      title: "Page Not Found | Velto",
      description: "Booking confirmation page not found",
    };
  }

  const title = `Booked: Call with ${repConfig.repName} | Velto`;
  const description = `Your call with ${repConfig.repName} is confirmed. Learn about Velto's AI voice calling for sales teams before we talk.`;

  // Default to noindex unless explicitly enabled via env var
  const shouldIndex =
    process.env.NEXT_PUBLIC_INDEX_BOOKED_PAGES === "true" ||
    process.env.INDEX_BOOKED_PAGES === "true";

  return {
    title,
    description,
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
      googleBot: {
        index: shouldIndex,
        follow: shouldIndex,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Velto",
      // OG images will be handled by file-based opengraph-image
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // Twitter images will be handled by file-based twitter-image
    },
  };
}
