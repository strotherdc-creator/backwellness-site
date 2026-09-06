export const site = {
  name: "Staudenmaier Chiropractic Wellness Center, SC",
  shortName: "Staudenmaier Chiropractic",
  tagline: "Move Better. Live Better.",
  domain: "backwellness-site.vercel.app",
  sourceSite: "https://www.backtowellness.org",
  email: "DrLuke@backtowellness.org",
  doctor: {
    name: "Dr. Luke Staudenmaier",
    credentials: "DC, CCST",
    displayName: "Dr. Luke",
    licensedSince: 1994,
    college: "Logan College of Chiropractic",
    undergrad: "University of Wisconsin - Stevens Point",
    certification: "Chiropractic Certification in Spinal Trauma (CCST)",
    licensure: ["Wisconsin", "Montana"],
    memberships: [
      "Chiropractic Society of Wisconsin member",
      "Door County Fish, Farm & Game Club",
      "Foundation for Chiropractic Progress member",
      "International Chiropractors Association",
      "Sturgeon Bay Rotary Club",
      "Wisconsin Chiropractors Association",
    ],
  },
  staff: [
    {
      name: "Ashley",
      role: "Front Desk Receptionist & Chiropractic Technician",
      summary:
        "Ashley is a Chiropractic Technician and Front Desk Receptionist who has a heart for patient care. She answers phones, schedules appointments, and handles billing and insurance. Ashley assists patients with their needs for chiropractic care.",
    },
    {
      name: "Alex",
      role: "Front Desk Receptionist / Radiologic Technician / PiezoWave",
      summary:
        "Alex joined the office in June 2025 as a Front Desk Receptionist and quickly became our Chiropractic Radiologic Technician. She assists with examinations, takes X-rays, and administers specialized therapies. Alex is also the primary technician for PiezoWave Acoustic Sound Therapy.",
    },
  ],
  address: {
    line1: "30 North 18th Avenue Suite 3",
    city: "Sturgeon Bay",
    state: "WI",
    zip: "54235",
  },
  phone: "(920) 743-7255",
  phoneTel: "+19207437255",
  fax: "(920) 743-7256",
  hours: [
    { day: "Monday", time: "7:30am – 6:00pm" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "7:30am – 6:00pm" },
    { day: "Thursday", time: "8:00am – 5:00pm" },
    { day: "Friday", time: "7:30am – 5:00pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  conditions: [
    "Muscle strain",
    "Neck pain",
    "Chronic back pain",
    "Migraines and headaches",
    "Carpal tunnel",
    "Pain due to injury or muscle strain",
  ],
  services: [
    {
      title: "Chiropractic Care",
      href: "/services/chiropractic",
      description:
        "Personalized adjustments to help with muscle strain, neck and back pain, headaches, and everyday mobility.",
    },
    {
      title: "PiezoWave (MyACT)",
      href: "/services/piezowave",
      description:
        "An option for stubborn muscle, tendon, and joint problems when a simple adjustment is not the whole answer.",
    },
    {
      title: "Spinal Decompression",
      href: "/services/spinal-decompression",
      description:
        "Gentle, non-surgical care that may help with certain disc-related neck and low back concerns.",
    },
    {
      title: "Cold Laser & LED Therapy",
      href: "/services/laser-led",
      description:
        "Light-based therapy that can support soft-tissue comfort as part of a care plan.",
    },
    {
      title: "Postural Screenings",
      href: "/services/postural-screenings",
      description:
        "A practical look at how you stand and sit — and whether posture may be adding to discomfort.",
    },
    {
      title: "Nutrition",
      href: "/services/nutrition",
      description:
        "Practical nutrition guidance to support how you feel day to day as part of your care plan.",
    },
    {
      title: "Wellness Care",
      href: "/services/wellness-care",
      description:
        "Ongoing chiropractic visits to support mobility, comfort, and staying active over time.",
    },
    {
      title: "Chiropractic Care for Kids",
      href: "/services/chiropractic-care-kids",
      description:
        "Gentle, noninvasive chiropractic care sized for growing kids and active families.",
    },
    {
      title: "Detoxification",
      href: "/services/detoxification",
      description:
        "Educational wellness conversations about supportive habits — discussed only when they fit you.",
    },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/service-area", label: "Service Area" },
    { href: "/patients", label: "Patients" },
    { href: "/reviews", label: "Reviews" },
    { href: "/appointment", label: "Appointment" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export function formatAddress(): string {
  const { line1, city, state, zip } = site.address;
  return `${line1}, ${city}, ${state} ${zip}`;
}

export function mapsUrl(): string {
  return `https://maps.google.com/?q=${encodeURIComponent(formatAddress())}`;
}
