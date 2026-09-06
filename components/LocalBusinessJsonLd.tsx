import { getTownServiceAreas } from "@/lib/service-areas";
import { site } from "@/lib/site";

/** Schema.org LocalBusiness / Chiropractor JSON-LD for search engines */
export default function LocalBusinessJsonLd() {
  const baseUrl = `https://${site.domain}`;
  const towns = getTownServiceAreas();

  const openingHoursSpecification = site.hours
    .filter((h) => h.time.toLowerCase() !== "closed")
    .map((h) => {
      // Parse "7:30am – 6:00pm" style ranges into 24h for schema
      const range = h.time.replace(/\s/g, " ").split(/[–—-]/);
      const opens = to24h(range[0]?.trim() ?? "");
      const closes = to24h(range[1]?.trim() ?? "");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens,
        closes,
      };
    })
    .filter((spec) => spec.opens && spec.closes);

  const data = {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    name: site.name,
    url: baseUrl,
    telephone: site.phone,
    email: site.email,
    image: `${baseUrl}/images/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification,
    areaServed: [
      ...towns.map((t) => ({
        "@type": "City",
        name: t.name,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: t.county,
        },
      })),
      {
        "@type": "AdministrativeArea",
        name: "Door County",
      },
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function to24h(label: string): string {
  const m = label.match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!m) return "";
  let hour = Number(m[1]);
  const minute = m[2];
  const meridiem = m[3].toLowerCase();
  if (meridiem === "pm" && hour < 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}
