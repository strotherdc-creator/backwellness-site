import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Patient reviews and feedback for ${site.name}. Find us on Google or call the clinic.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Patient feedback</span>
          <h1>Reviews</h1>
          <p className="muted prose">
            We appreciate hearing from patients and the Sturgeon Bay community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "46rem" }}>
          <article className="card">
            <h2>Find us on Google</h2>
            <p>
              For current patient reviews, please search for{" "}
              <strong>{site.name}</strong> on Google or visit the clinic listing
              associated with our Sturgeon Bay address:
            </p>
            <p>
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <div className="notice">
              <p style={{ margin: 0 }}>
                This page intentionally does not invent patient quotes, star
                ratings, or fake testimonials. If you would like to share
                feedback about your experience, please leave a Google review or
                call the office at{" "}
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>.
              </p>
            </div>
            <div className="btn-row" style={{ marginTop: "1.25rem" }}>
              <a className="btn btn-navy" href={`tel:${site.phoneTel}`}>
                Call the clinic
              </a>
              <a
                className="btn btn-outline"
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  `${site.name} Sturgeon Bay`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Search Google reviews
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
