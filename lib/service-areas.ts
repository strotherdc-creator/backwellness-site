export type ServiceArea = {
  slug: string;
  name: string;
  county: string;
  driveMinutes: number | null;
  /** Regional page (e.g. Door County) — not a single town */
  regional?: boolean;
  /** Short hooks for unique page copy — patient-facing, no ranking claims */
  blurbHooks: {
    community: string;
    driveContext: string;
    careNote: string;
  };
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "sturgeon-bay",
    name: "Sturgeon Bay",
    county: "Door County",
    driveMinutes: 0,
    blurbHooks: {
      community:
        "Our clinic is based in Sturgeon Bay, so local patients can reach us without a long drive across the peninsula.",
      driveContext: "We are right here in town at 30 North 18th Avenue Suite 3.",
      careNote:
        "Whether you are dealing with neck or back discomfort, headaches, or want supportive wellness care, our Sturgeon Bay team is here to help you move better.",
    },
  },
  {
    slug: "carlsville",
    name: "Carlsville",
    county: "Door County",
    driveMinutes: 15,
    blurbHooks: {
      community:
        "Carlsville sits just north of Sturgeon Bay along the peninsula corridor many Door County residents travel daily.",
      driveContext:
        "Our Sturgeon Bay office is about 15 minutes from Carlsville for most drives.",
      careNote:
        "Patients from Carlsville often combine a visit with other errands in Sturgeon Bay — call ahead so we can help you find a convenient appointment time.",
    },
  },
  {
    slug: "brussels",
    name: "Brussels",
    county: "Door County",
    driveMinutes: 15,
    blurbHooks: {
      community:
        "Brussels and the southern Door County towns are a short trip inland from Sturgeon Bay.",
      driveContext:
        "Plan on about 15 minutes from Brussels to our Sturgeon Bay chiropractic office.",
      careNote:
        "If you live in Brussels and are looking for chiropractic care closer than Green Bay, our Door County clinic is a practical option for many families.",
    },
  },
  {
    slug: "forestville",
    name: "Forestville",
    county: "Door County",
    driveMinutes: 25,
    blurbHooks: {
      community:
        "Forestville is in southern Door County, with easy highway access toward Sturgeon Bay.",
      driveContext:
        "The drive from Forestville to our office is typically about 25 minutes.",
      careNote:
        "We welcome Forestville patients seeking chiropractic care, PiezoWave therapy, or other wellness services without traveling outside the county.",
    },
  },
  {
    slug: "little-sturgeon",
    name: "Little Sturgeon",
    county: "Door County",
    driveMinutes: 20,
    blurbHooks: {
      community:
        "Little Sturgeon is a quiet Door County community southwest of Sturgeon Bay near the bay shoreline.",
      driveContext:
        "Expect roughly 20 minutes from Little Sturgeon to our Suite 3 office on North 18th Avenue.",
      careNote:
        "Neighbors in Little Sturgeon who want consistent spinal care can schedule weekday visits that fit around work and family routines.",
    },
  },
  {
    slug: "maplewood",
    name: "Maplewood",
    county: "Door County",
    driveMinutes: 20,
    blurbHooks: {
      community:
        "Maplewood is a small Door County community with a short drive into Sturgeon Bay for shopping, work, and healthcare.",
      driveContext:
        "Our Sturgeon Bay clinic is about 20 minutes from Maplewood for most routes.",
      careNote:
        "Maplewood residents looking for chiropractic care in Door County can call our office to discuss hours and what to expect on a first visit.",
    },
  },
  {
    slug: "jacksonport",
    name: "Jacksonport",
    county: "Door County",
    driveMinutes: 20,
    blurbHooks: {
      community:
        "Jacksonport sits on Door County’s eastern shore, a familiar stop between Sturgeon Bay and the northern peninsula towns.",
      driveContext:
        "Driving from Jacksonport to our Sturgeon Bay office usually takes about 20 minutes.",
      careNote:
        "Year-round and seasonal residents in Jacksonport use our clinic for chiropractic care and supportive therapies without leaving Door County.",
    },
  },
  {
    slug: "egg-harbor",
    name: "Egg Harbor",
    county: "Door County",
    driveMinutes: 25,
    blurbHooks: {
      community:
        "Egg Harbor is one of Door County’s well-known western shore communities, with a steady mix of locals and visitors.",
      driveContext:
        "The trip from Egg Harbor to Sturgeon Bay is typically about 25 minutes.",
      careNote:
        "If you live or stay in Egg Harbor and need chiropractic care during your week, our Sturgeon Bay team can help you plan a visit around our weekday hours.",
    },
  },
  {
    slug: "baileys-harbor",
    name: "Baileys Harbor",
    county: "Door County",
    driveMinutes: 28,
    blurbHooks: {
      community:
        "Baileys Harbor anchors the eastern side of mid-Door County, with scenic drives south toward Sturgeon Bay.",
      driveContext:
        "Plan on about 28 minutes from Baileys Harbor to our Sturgeon Bay chiropractic office.",
      careNote:
        "Patients from Baileys Harbor often appreciate having a Door County chiropractic option within a half-hour drive for ongoing care.",
    },
  },
  {
    slug: "fish-creek",
    name: "Fish Creek",
    county: "Door County",
    driveMinutes: 35,
    blurbHooks: {
      community:
        "Fish Creek is a popular Door County village on the western shore, still within an easy drive of Sturgeon Bay for many residents.",
      driveContext:
        "From Fish Creek, the drive to our office is typically around 35 minutes — still within about a 40-minute service area.",
      careNote:
        "Fish Creek patients who prefer not to travel farther north or out of county can visit us in Sturgeon Bay for chiropractic and wellness services.",
    },
  },
  {
    slug: "algoma",
    name: "Algoma",
    county: "Kewaunee County",
    driveMinutes: 30,
    blurbHooks: {
      community:
        "Algoma is just south of Door County in Kewaunee County, along Lake Michigan and Highway 42.",
      driveContext:
        "Our Sturgeon Bay office is about 30 minutes from Algoma for most drives.",
      careNote:
        "Algoma residents looking for chiropractic care a short trip north into Door County are welcome to call Staudenmaier Chiropractic for an appointment.",
    },
  },
  {
    slug: "door-county",
    name: "Door County",
    county: "Door County",
    driveMinutes: null,
    regional: true,
    blurbHooks: {
      community:
        "Door County stretches from Sturgeon Bay to the tip of the peninsula — our clinic serves communities across the southern and mid-peninsula within about a 40-minute drive.",
      driveContext:
        "We are based in Sturgeon Bay, a central hub for many Door County towns listed on this site.",
      careNote:
        "Wherever you live in our Door County service area, you can reach our office by phone to ask about hours, services, and whether a visit makes sense for your situation.",
    },
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getAllServiceAreaSlugs(): string[] {
  return serviceAreas.map((area) => area.slug);
}

/** Town names only (excludes regional Door County entry) for areaServed / listings */
export function getTownServiceAreas(): ServiceArea[] {
  return serviceAreas.filter((area) => !area.regional);
}

export function getRegionalServiceAreas(): ServiceArea[] {
  return serviceAreas.filter((area) => area.regional);
}

export function driveLabel(area: ServiceArea): string {
  if (area.regional || area.driveMinutes === null) {
    return "Regional";
  }
  if (area.driveMinutes === 0) {
    return "Home office";
  }
  return `About ${area.driveMinutes} min`;
}

export function formatDriveSentence(area: ServiceArea): string {
  if (area.regional || area.driveMinutes === null) {
    return area.blurbHooks.driveContext;
  }
  if (area.driveMinutes === 0) {
    return "We are right here in Sturgeon Bay — no out-of-town drive required.";
  }
  return `Our Sturgeon Bay office is about ${area.driveMinutes} minutes from ${area.name}.`;
}
