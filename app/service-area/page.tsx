import type { Metadata } from "next";
import Link from "next/link";
import {
  driveLabel,
  getRegionalServiceAreas,
  getTownServiceAreas,
} from "@/lib/service-areas";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area | Door County & Nearby Towns",
  description: `Chiropractic care near Door County communities from our Sturgeon Bay office. We serve towns within about a 40-minute drive, including Egg Harbor, Fish Creek, Algoma, and more. Call ${site.phone}.`,
};

export default function ServiceAreaIndexPage() {
  const towns = getTownServiceAreas();
  const regional = getRegionalServiceAreas();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Where we serve</span>
          <h1>Service area</h1>
          <p className="muted prose">
            {site.shortName} is located in Sturgeon Bay and welcomes patients
            from Door County communities and nearby Algoma — generally within
            about a 40-minute drive of our office. Drive times below are
            approximate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Door County region</p>
            <h2>Regional overview</h2>
            <p className="muted">
              Learn how our Sturgeon Bay clinic fits into care across the
              peninsula.
            </p>
          </div>
          <div className="grid-3" style={{ marginBottom: "2.75rem" }}>
            {regional.map((area) => (
              <article className="card card-premium" key={area.slug}>
                <p className="section-kicker">{area.county}</p>
                <h3>{area.name}</h3>
                <p className="muted">{area.blurbHooks.community}</p>
                <Link href={`/service-area/${area.slug}`} className="card-link">
                  Door County overview →
                </Link>
              </article>
            ))}
          </div>

          <div className="section-head">
            <p className="section-kicker">Towns & communities</p>
            <h2>Communities we serve</h2>
            <p className="muted">
              Select a town for directions context, what to expect, and how to
              reach our office.
            </p>
          </div>
          <div className="grid-3">
            {towns.map((area) => (
              <article className="card" key={area.slug}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    alignItems: "baseline",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3 style={{ marginBottom: 0 }}>{area.name}</h3>
                  <span className="pill">{driveLabel(area)}</span>
                </div>
                <p className="muted" style={{ marginBottom: "0.75rem" }}>
                  {area.county}
                  {area.driveMinutes !== null && area.driveMinutes > 0
                    ? ` · ~${area.driveMinutes} min from our office`
                    : area.driveMinutes === 0
                      ? " · Our home office"
                      : ""}
                </p>
                <p className="muted">{area.blurbHooks.driveContext}</p>
                <Link href={`/service-area/${area.slug}`} className="card-link">
                  Care near {area.name} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="card card-premium">
            <h2>Visit or call our Sturgeon Bay office</h2>
            <p className="muted">
              {formatAddress()}
              <br />
              Phone:{" "}
              <a href={`tel:${site.phoneTel}`}>
                <strong>{site.phone}</strong>
              </a>
            </p>
            <div className="btn-row">
              <Link className="btn btn-gold" href="/appointment">
                Request an Appointment
              </Link>
              <a className="btn btn-outline" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
              <Link className="btn btn-outline" href="/contact">
                Contact & hours
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
