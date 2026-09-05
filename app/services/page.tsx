import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Chiropractic care and wellness services at ${site.name}, including chiropractic, PiezoWave, spinal decompression, cold laser and LED therapy, postural screenings, nutrition, wellness care, chiropractic for kids, and detoxification.`,
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
              You do not have to live in pain. We are here to help you get your
              life back with chiropractic care and supportive wellness services.
            </p>
          </div>
          <div className="media-frame media-frame-hero">
            <Image
              src="/images/highlighted-spine.webp"
              alt="Spinal care and wellness services"
              width={720}
              height={540}
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
            <h2>Conditions people often seek care for</h2>
            <p className="muted">
              Chiropractic treatment can be used to address a wide variety of
              physical issues.
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
                Call our office to discuss whether a service is appropriate for
                your situation after examination and consultation.
              </p>
              <div className="notice" style={{ marginTop: "1.25rem" }}>
                <p style={{ margin: 0 }}>
                  No service is a guaranteed cure. Your doctor will help design a
                  program that is right for you.
                </p>
              </div>
              <div className="btn-row" style={{ marginTop: "1.5rem" }}>
                <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                  Call {site.phone}
                </a>
                <Link className="btn btn-outline" href="/appointment">
                  Appointment info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
