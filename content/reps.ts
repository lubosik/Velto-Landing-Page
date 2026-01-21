import { RepConfig } from "@/types/rep";

export const reps: Record<string, RepConfig> = {
  lubosi: {
    repSlug: "lubosi",
    repName: "Lubosi Kongwa",
    pronouns: "he/him",
    calendarBookedTitle: "Discovery Call with Lubosi Kongwa",
    heroThankYouHeadline: "You're all set!",
    heroSubheadline: "Your call with Lubosi is confirmed",
    heroVslLoomUrl: "https://www.loom.com/embed/a1e6a8d55a4541df8f2ee9a9b19da8d6",
    heroVslLoomThumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/a1e6a8d55a4541df8f2ee9a9b19da8d6-e3a4b2ecf8895d2b-full-play.gif#t=0.1",
    aboutVeltoMp4Src: "/about-velto.mp4",
    aboutVeltoPoster: "/about-velto-thumbnail.png",
    breakoutVideos: [
      {
        id: "replace-sales-team",
        question: "Do you replace my sales team or compete with them?",
        loomUrl: "https://www.loom.com/embed/d054260262f6408d9d8d1386942e081c",
        loomThumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/d054260262f6408d9d8d1386942e081c-8ff9106949a682da-full-play.gif#t=0.1",
        lengthSeconds: 50,
        whyThisMatters: "We amplify your team, never replace them.",
        category: "Trust",
      },
      {
        id: "client-relationships",
        question: "Will this mess with client relationships or brand voice?",
        loomUrl: "https://www.loom.com/embed/b08fa7d17600475a87ed1abd0040e725",
        loomThumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/b08fa7d17600475a87ed1abd0040e725-207fb0137e2be356-full-play.gif#t=0.1",
        lengthSeconds: 45,
        whyThisMatters: "Your brand voice is sacred—we preserve it.",
        category: "Trust",
      },
      {
        id: "ai-willingness",
        question: "Are people actually willing to talk to an AI?",
        loomUrl: "https://www.loom.com/embed/77f391b80c684d91908eb69326190b00",
        loomThumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/77f391b80c684d91908eb69326190b00-e1705a5741bdf7bb-full-play.gif#t=0.1",
        lengthSeconds: 55,
        whyThisMatters: "Real conversations drive real results.",
        category: "Trust",
      },
      {
        id: "bespoke-solutions",
        question: "Do you offer other bespoke solutions if we need something custom?",
        loomUrl: "https://www.loom.com/embed/0245390944834d35a19e91f8c6c95f11",
        loomThumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/0245390944834d35a19e91f8c6c95f11-70194557e96efbdd-full-play.gif#t=0.1",
        lengthSeconds: 50,
        whyThisMatters: "Custom solutions for unique challenges.",
        category: "Process",
      },
      {
        id: "ai-agency",
        question: "Do you just build the tech and leave it to us, or do you monitor and manage it?",
        loomUrl: "https://www.loom.com/embed/f2a24372f6d94f3fae1d5ca286d907ce",
        loomThumbnailUrl: "https://cdn.loom.com/sessions/thumbnails/f2a24372f6d94f3fae1d5ca286d907ce-1cc036a38e9d6636-full-play.gif#t=0.1",
        lengthSeconds: 60,
        whyThisMatters: "We're a partner, not just a vendor.",
        category: "Process",
      },
    ],
    caseStudy: {
      title: "Oasis",
      metric: "804 verified buyers identified in 14 months",
      metricDisclaimer: "Numbers are from the case study and may vary by team.",
      link: "https://oasis-analytics-asset.vercel.app/",
    },
    pricingStoryboard: {
      title: "Pricing & Investment",
      link: "/coming-soon",
    },
    phasesStoryboard: {
      title: "Engagement Phases",
      link: "/coming-soon",
    },
    intakeForm: {
      enabled: false,
      embedUrl: "PASTE_INTAKE_FORM_EMBED_URL_HERE",
    },
    pastClients: [
      {
        name: "Idris Elba",
        title: "Media Team - Content System",
        description: "Working with Idris Elba's media team on a comprehensive content system, showcasing Velto's capabilities in the creative industry.",
        imageUrl: "/images/idris-elba.jpg",
        achievement: "Creative Industry Partnership",
        rating: 5,
      },
      {
        name: "Data Monsters",
        title: "NVIDIA Elite Partner of the Year",
        description: "Data Monsters, recognized as NVIDIA Elite Partner of the Year, leverages Velto's infrastructure for high-value technology solutions.",
        imageUrl: "/images/data-monsters-2.jpeg",
        achievement: "NVIDIA Elite Partner of the Year",
        rating: 5,
      },
    ],
  },
};

export function getRepConfig(repSlug: string): RepConfig | null {
  return reps[repSlug] || null;
}

export function getAllRepSlugs(): string[] {
  return Object.keys(reps);
}
