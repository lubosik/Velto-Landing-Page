export interface BreakoutVideo {
  id: string;
  question: string;
  loomUrl: string; // Placeholder: "PASTE_LOOM_EMBED_URL_HERE"
  loomThumbnailUrl?: string; // Optional thumbnail URL from Loom CDN
  lengthSeconds: number;
  whyThisMatters: string;
  category?: "Trust" | "Process" | "ROI" | "Integration" | "Compliance";
}

export interface CaseStudy {
  title: string;
  metric: string;
  metricDisclaimer?: string;
  link?: string;
  embedUrl?: string;
}

export interface Storyboard {
  title: string;
  link?: string;
  embedUrl?: string;
}

export interface IntakeForm {
  enabled: boolean;
  embedUrl?: string;
  link?: string;
}

export interface PastClient {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  achievement?: string;
  rating?: number;
}

export interface RepConfig {
  repSlug: string;
  repName: string;
  pronouns?: string;
  calendarBookedTitle: string;
  heroThankYouHeadline: string;
  heroSubheadline: string;
  heroVslLoomUrl: string; // Placeholder: "PASTE_LOOM_EMBED_URL_HERE"
  heroVslLoomThumbnailUrl?: string; // Optional thumbnail URL from Loom CDN
  aboutVeltoMp4Src: string; // Path to MP4 in /public or remote URL
  aboutVeltoPoster: string; // Path to poster image in /public or remote URL
  breakoutVideos: BreakoutVideo[];
  caseStudy: CaseStudy;
  pricingStoryboard: Storyboard;
  phasesStoryboard: Storyboard;
  intakeForm?: IntakeForm;
  pastClients?: PastClient[];
}
