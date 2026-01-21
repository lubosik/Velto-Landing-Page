// Lightweight analytics utility - no vendor lock-in
// Can be wired to Segment, GA, or any analytics provider later

type EventName =
  | "hero_video_play"
  | "breakout_accordion_open"
  | "breakout_video_load"
  | "case_study_open"
  | "pricing_open"
  | "phases_open"
  | "intake_form_start"
  | "intake_form_submit";

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

class Analytics {
  private enabled: boolean;

  constructor() {
    // Enable analytics in production or when explicitly enabled
    this.enabled =
      process.env.NODE_ENV === "production" ||
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
  }

  track(eventName: EventName, properties?: EventProperties) {
    if (!this.enabled) {
      // In development, log to console for debugging
      console.log("[Analytics]", eventName, properties);
      return;
    }

    // TODO: Wire to your analytics provider
    // Example: segment.track(eventName, properties);
    // Example: gtag('event', eventName, properties);
    // Example: window.plausible?.(eventName, { props: properties });

    // For now, log to console (can be replaced with actual provider)
    console.log("[Analytics]", eventName, properties);
  }
}

export const analytics = new Analytics();

// Convenience functions for common events
export const trackHeroVideoPlay = (repSlug: string) => {
  analytics.track("hero_video_play", { repSlug });
};

export const trackBreakoutAccordionOpen = (
  repSlug: string,
  videoId: string,
  question: string
) => {
  analytics.track("breakout_accordion_open", { repSlug, videoId, question });
};

export const trackBreakoutVideoLoad = (
  repSlug: string,
  videoId: string,
  question: string
) => {
  analytics.track("breakout_video_load", { repSlug, videoId, question });
};

export const trackCaseStudyOpen = (repSlug: string, caseStudyTitle: string) => {
  analytics.track("case_study_open", { repSlug, caseStudyTitle });
};

export const trackPricingOpen = (repSlug: string) => {
  analytics.track("pricing_open", { repSlug });
};

export const trackPhasesOpen = (repSlug: string) => {
  analytics.track("phases_open", { repSlug });
};

export const trackIntakeFormStart = (repSlug: string) => {
  analytics.track("intake_form_start", { repSlug });
};

export const trackIntakeFormSubmit = (repSlug: string) => {
  analytics.track("intake_form_submit", { repSlug });
};
