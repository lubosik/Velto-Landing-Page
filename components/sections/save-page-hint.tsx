import { Section } from "@/components/ui/section";
import { BodySmall } from "@/components/ui/typography";
import { Bookmark } from "lucide-react";

export function SavePageHint() {
  return (
    <Section variant="narrow" className="px-0 py-8">
      <div className="flex items-center gap-2 text-gray-500">
        <Bookmark className="w-4 h-4 flex-shrink-0" />
        <BodySmall>
          <strong className="text-gray-700">Tip:</strong> Bookmark this page or save the
          link to return to these resources anytime.
        </BodySmall>
      </div>
    </Section>
  );
}
