import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Chiropractic care and wellness services at ${site.name}, including chiropractic, PiezoWave, spinal decompression, cold laser and LED therapy, postural screenings, nutrition, and detoxification.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Care options</span>
          <h1>Services</h1>
          <p className="muted prose">
            You do not have to live in pain. We are here to help you get your
            life back with chiropractic care and supportive wellness services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Conditions people often seek care for</h2>
            <p className="muted">
              Chiropractic treatment can be used to address a wide variety of
              physical issues.
            </p>
          </div>
          <div className="pill-list" style={{ marginBottom: "2.5rem" }}>
            {site.conditions.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="section-head">
            <h2>How we can help</h2>
          </div>
          <div className="grid-3">
            {site.services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p className="muted">{service.description}</p>
                {service.href !== "/services" ? (
                  <Link href={service.href} className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
                    Learn more
                  </Link>
                ) : null}
              </article>
            ))}
          </div>

          <div className="notice" style={{ marginTop: "2rem" }}>
            <p style={{ margin: 0 }}>
              Care plans are individualized. Call our office to discuss whether
              a service is appropriate for your situation after examination and
              consultation.
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
      </section>
    </>
  );
}
