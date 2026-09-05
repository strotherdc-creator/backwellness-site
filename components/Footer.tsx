import Link from "next/link";
import Logo from "@/components/Logo";
import { formatAddress, mapsUrl, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
          <p className="footer-tagline">{site.tagline}</p>
          <p>
            Caring chiropractic wellness in Sturgeon Bay, Wisconsin — helping
            you get your lifestyle back.
          </p>
        </div>

        <div>
          <h3>Visit</h3>
          <p>
            <a href={mapsUrl()} target="_blank" rel="noopener noreferrer">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
            <br />
            Fax: {site.fax}
          </p>
        </div>

        <div>
          <h3>Hours</h3>
          <ul className="hours-list">
            {site.hours.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="footer-meta">
          {formatAddress()} · Production domain: {site.domain}
        </p>
      </div>
    </footer>
  );
}
