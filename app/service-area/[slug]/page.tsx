import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatDriveSentence,
  getAllServiceAreaSlugs,
  getServiceArea,
  getTownServiceAreas,
  type ServiceArea,
} from "@/lib/service-areas";
import { formatAddress, mapsUrl, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};

  if (area.regional) {
    return {
      title: "Door County Chiropractor | Sturgeon Bay Clinic",
      description: `Chiropractic care for Door County from our Sturgeon Bay office. We serve peninsula communities within about a 40-minute drive. Call ${site.phone}.`,
    };
  }

  const driveBit =
    area.driveMinutes === 0
      ? "our home office in Sturgeon Bay"
      : `about ${area.driveMinutes} minutes from ${area.name}`;

  return {
    title: `Chiropractor near ${area.name}, WI`,
    description: `Chiropractic care near ${area.name} (${area.county}). ${site.shortName} is ${driveBit}. Call ${site.phone} to schedule.`,
  };
}

function pageTitle(area: ServiceArea): string {
  if (area.regional) {
    return "Chiropractic care serving Door County";
  }
  if (area.driveMinutes === 0) {
    return "Chiropractor in Sturgeon Bay, Wisconsin";
  }
  return `Chiropractic care near ${area.name}`;
}

function introParagraph(area: ServiceArea): string {
  if (area.regional) {
    return `${site.shortName} is based in Sturgeon Bay and welcomes patients from across our Door County service area — towns generally within about a 40-minute drive of the clinic.`;
  }
  if (area.driveMinutes === 0) {
    return `Looking for a chiropractor in Sturgeon Bay? ${site.name} provides chiropractic and wellness services right here in town at ${site.address.line1}.`;
  }
  return `If you live in ${area.name} or nearby in ${area.county}, ${site.shortName} in Sturgeon Bay is a practical option for chiropractic care. ${formatDriveSentence(area)}`;
}

export default async function ServiceAreaSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const otherTowns = getTownServiceAreas()
    .filter((t) => t.slug !== area.slug)
    .slice(0, 6);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            {area.regional ? "Door County region" : area.county}
          </span>
          <h1>{pageTitle(area)}</h1>
          <p className="muted prose">{introParagraph(area)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>
              {area.regional
                ? "Serving the peninsula from Sturgeon Bay"
                : `Care for ${area.name} patients`}
            </h2>
            <p>{area.blurbHooks.community}</p>
            <p>{formatDriveSentence(area)}</p>
            <p>{area.blurbHooks.careNote}</p>
            <p className="muted">
              Care plans are individualized after examination and consultation.
              No service is a guaranteed cure — your doctor will help design a
              program that is right for you.
            </p>
            <div className="btn-row" style={{ marginTop: "1.25rem" }}>
              <Link className="btn btn-gold" href="/services">
                View our services
              </Link>
              <Link className="btn btn-outline" href="/appointment">
                Appointment info
              </Link>
            </div>
          </article>

          <article className="card">
            <h2>Visit our office</h2>
            <p>
              <strong>{site.name}</strong>
              <br />
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${site.phoneTel}`}>
                <strong>{site.phone}</strong>
              </a>
              <br />
              Fax: {site.fax}
            </p>
            <h3 style={{ fontSize: "1.05rem", marginTop: "1.25rem" }}>Hours</h3>
            <table className="hours-table">
              <tbody>
                {site.hours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="btn-row" style={{ marginTop: "1.25rem" }}>
              <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
              <a
                className="btn btn-outline"
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
              <Link className="btn btn-outline" href="/contact">
                Contact
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Nearby communities</p>
            <h2>Other towns in our service area</h2>
          </div>
          <div className="pill-list" style={{ marginBottom: "1.5rem" }}>
            {otherTowns.map((t) => (
              <Link className="pill" key={t.slug} href={`/service-area/${t.slug}`}>
                {t.name}
              </Link>
            ))}
            <Link className="pill" href="/service-area">
              All service areas
            </Link>
            {!area.regional && (
              <Link className="pill" href="/service-area/door-county">
                Door County overview
              </Link>
            )}
          </div>
          <p className="muted" style={{ margin: 0 }}>
            Office address: {formatAddress()}
          </p>
        </div>
      </section>
    </>
  );
}
