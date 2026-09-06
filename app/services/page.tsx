import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Chiropractic care and supportive options at ${site.name} in Sturgeon Bay — personalized care to help Door County patients move better and live better.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-media">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Care options</span>
            <h1>Services</h1>
            <p className="muted prose">
              Chiropractic care comes first. When a problem needs more,{" "}
              {site.doctor.displayName} can add supportive options that may help
              — so you can move better in the activities that matter.
            </p>
          </div>
          <div className="media-frame media-frame-hero">
            <Image
              src="/images/chiropractic-care.jpg"
              alt="Dr. Luke performing chiropractic care for a patient in Sturgeon Bay"
              width={1280}
              height={1700}
              className="media-img"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Conditions</p>
            <h2>When pain or stiffness gets in the way</h2>
            <p className="muted">
              People often seek care for concerns like these — and for the work,
              hobbies, and daily life they limit.
            </p>
          </div>
          <div className="pill-list" style={{ marginBottom: "2.75rem" }}>
            {site.conditions.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="section-head">
            <p className="section-kicker">How we can help</p>
            <h2>Explore our services</h2>
          </div>
          <div className="grid-3">
            {site.services.map((service, index) => (
              <article className="card card-premium" key={service.title}>
                <div className="card-icon">{String(index + 1).padStart(2, "0")}</div>
                <h3>{service.title}</h3>
                <p className="muted">{service.description}</p>
                <Link href={service.href} className="card-link">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>

          <div className="split-media" style={{ marginTop: "3rem" }}>
            <div className="media-frame">
              <Image
                src="/images/fruits.jpg"
                alt="Nutrition and wellness support"
                width={640}
                height={640}
                className="media-img media-img-square"
              />
            </div>
            <div>
              <p className="section-kicker">Personalized plans</p>
              <h2>Care plans are individualized</h2>
              <p className="muted">
                We examine carefully, explain what we find, and recommend
                options. You stay in charge of the decision.
              </p>
              <div className="notice" style={{ marginTop: "1.25rem" }}>
                <p style={{ margin: 0 }}>
                  No service is a guaranteed cure. Your doctor will help design a
                  program that is right for you.
                </p>
              </div>
              <div className="btn-row" style={{ marginTop: "1.5rem" }}>
                <Link className="btn btn-gold" href="/appointment">
                  Request an Appointment
                </Link>
                <a className="btn btn-outline" href={`tel:${site.phoneTel}`}>
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
