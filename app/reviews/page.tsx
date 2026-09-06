import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { googleReviewsSummary } from "@/lib/reviews";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Reviews",
  description: `5-star Google reviews for ${site.name} in Sturgeon Bay, WI.`,
};

const googleSearchHref = `https://www.google.com/search?q=${encodeURIComponent(
  `${googleReviewsSummary.placeQuery} reviews`
)}`;

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Patient feedback</span>
          <h1>Reviews</h1>
          <p className="muted prose">
            Real 5-star Google reviews from Door County patients of{" "}
            {site.shortName} — hometown care with {site.doctor.displayName}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "46rem" }}>
          <ReviewsCarousel />

          <div className="btn-row" style={{ marginTop: "1.75rem" }}>
            <Link className="btn btn-navy" href="/appointment">
              Request an Appointment
            </Link>
            <a className="btn btn-outline" href={`tel:${site.phoneTel}`}>
              Call {site.phone}
            </a>
            <a
              className="btn btn-outline"
              href={googleSearchHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              See all Google reviews
            </a>
          </div>

          <p className="muted" style={{ marginTop: "1.25rem", fontSize: "0.95rem" }}>
            Reviews are quoted from the clinic’s public Google listing. Only
            5-star reviews appear in this carousel.
          </p>
        </div>
      </section>
    </>
  );
}
