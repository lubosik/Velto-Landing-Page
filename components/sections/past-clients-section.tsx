import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading2, Heading3, Body, BodySmall } from "@/components/ui/typography";
import { Star } from "lucide-react";
import Image from "next/image";
import { PastClient } from "@/types/rep";

interface PastClientsSectionProps {
  clients: PastClient[];
}

export function PastClientsSection({ clients }: PastClientsSectionProps) {
  return (
    <Section variant="default" className="px-0">
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <Heading2>Past Clients</Heading2>
          <Body className="text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with industry leaders across
            technology and creative sectors.
          </Body>
        </div>

        <div className="space-y-6">
          {clients.map((client, idx) => (
            <Card key={idx} variant="elevated" padding="lg" className="max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
                    {client.imageUrl && client.imageUrl.startsWith("http") ? (
                      <Image
                        src={client.imageUrl}
                        alt={client.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : client.imageUrl && client.imageUrl.startsWith("/") ? (
                      <Image
                        src={client.imageUrl}
                        alt={client.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-2xl font-bold">{client.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2 w-full">
                      <div className="flex-1">
                        {client.name === "Data Monsters" ? (
                          <Heading3 className="text-xl sm:text-2xl mb-1">
                            <a
                              href="https://www.datamonsters.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-900 hover:text-velto-blue transition-colors underline decoration-2 underline-offset-2"
                            >
                              {client.name}
                            </a>
                          </Heading3>
                        ) : (
                          <Heading3 className="text-xl sm:text-2xl mb-1">{client.name}</Heading3>
                        )}
                        <BodySmall className="text-gray-600 mb-2">
                          {client.title}
                        </BodySmall>
                        {client.achievement && (
                          <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-velto-blue/10 text-velto-blue rounded-md text-sm font-medium mt-2">
                            {client.achievement}
                          </div>
                        )}
                      </div>
                      {client.rating && (
                        <div className="flex items-center gap-1 flex-shrink-0 mt-2 sm:mt-0">
                          {[...Array(client.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <Body className="text-gray-700 leading-relaxed">
                      {client.description}
                    </Body>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
