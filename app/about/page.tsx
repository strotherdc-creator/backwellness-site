import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.doctor.name}, ${site.doctor.credentials}, and the team at ${site.name} in Sturgeon Bay, WI.`,
};

const staffPhotos: Record<string, { src: string; alt: string }> = {
  Ashley: {
    src: "/images/ashley-circle.webp",
    alt: "Ashley, Front Desk Receptionist & Chiropractic Technician",
  },
  Alex: {
    src: "/images/alex-circle.webp",
    alt: "Alex, Front Desk Receptionist / Radiologic Technician / PiezoWave",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-media">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Meet the team</span>
            <h1>About {site.shortName}</h1>
            <p className="muted prose">
              Caring chiropractic wellness in Sturgeon Bay — helping patients get
              their lifestyle back.
            </p>
          </div>
          <div className="media-frame media-frame-hero">
            <Image
              src="/images/team.jpg"
              alt={`${site.doctor.name} and the clinic team`}
              width={720}
              height={540}
              className="media-img"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2 feature-grid">
          <article className="card team-card card-lift">
            <div className="team-photo">
              <Image
                src="/images/team-meet.jpg"
                alt={site.doctor.name}
                width={480}
                height={600}
                className="media-img"
              />
            </div>
            <p className="role">Chiropractor</p>
            <h2>
              {site.doctor.name}, {site.doctor.credentials}
            </h2>
            <p>
              {site.doctor.displayName} (Dr. Luke Staudenmaier) has been a
              licensed chiropractor since {site.doctor.licensedSince}. Patients
              know him as &ldquo;Dr. Luke.&rdquo;
            </p>
            <p>
              If you are struggling with neck or back pain, headaches or
              migraines, carpal tunnel, sciatica, or related concerns, contact
              our team today.
            </p>
            <h3>Education</h3>
            <ul className="info-list">
              <li>Doctorate of Chiropractic — {site.doctor.college}</li>
              <li>{site.doctor.undergrad}</li>
              <li>{site.doctor.certification}</li>
            </ul>
            <h3>Licensure</h3>
            <ul className="info-list">
              {site.doctor.licensure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card card-lift">
            <div className="team-photo team-photo-sm">
              <Image
                src="/images/luke-circle.jpg"
                alt={site.doctor.name}
                width={280}
                height={280}
                className="media-img media-img-round"
              />
            </div>
            <h2>Memberships & associations</h2>
            <ul className="info-list">
              {site.doctor.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 style={{ marginTop: "1.75rem" }}>Training of a chiropractor</h2>
            <p>
              Chiropractic doctors complete a minimum of four years of schooling
              at a chiropractic college, generally preceded by undergraduate
              study in the basic sciences or related health care experience.
            </p>
            <p>
              Students of chiropractic care must spend a minimum of at least
              4,200 hours in training, including a minimum of 1,000 hours of
              fully supervised clinical training, as they learn diagnosis and
              treatment techniques to help restore the body to a more fully
              functioning state.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Our staff</p>
            <h2>Friendly faces ready to help</h2>
            <p className="muted">
              Scheduling, care support, and a welcoming visit experience.
            </p>
          </div>
          <div className="grid-2">
            {site.staff.map((person) => {
              const photo = staffPhotos[person.name];
              return (
                <article className="card team-card card-lift" key={person.name}>
                  {photo ? (
                    <div className="team-photo team-photo-sm">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={220}
                        height={220}
                        className="media-img media-img-round"
                      />
                    </div>
                  ) : null}
                  <p className="role">{person.role}</p>
                  <h3>{person.name}</h3>
                  <p>{person.summary}</p>
                </article>
              );
            })}
          </div>
          <div className="section-footer-actions">
            <Link className="btn btn-navy" href="/appointment">
              Schedule a visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
