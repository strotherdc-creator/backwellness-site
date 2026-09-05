import type { Metadata } from "next";
import { formatAddress, mapsUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} at ${formatAddress()}. Phone ${site.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact</h1>
          <p className="muted prose">
            Visit us in Sturgeon Bay or call the office. We do not collect
            patient forms or PHI through this website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>Clinic location</h2>
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
            <div className="btn-row">
              <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                Call now
              </a>
              <a
                className="btn btn-outline"
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Hours</h2>
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
          </article>
        </div>
      </section>
    </>
  );
}
