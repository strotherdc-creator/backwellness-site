"use client";

import { useEffect, useState } from "react";
import {
  googleFiveStarReviews,
  googleReviewsSummary,
  type GoogleReview,
} from "@/lib/reviews";

const INTERVAL_MS = 7000;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "star on" : "star"} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export default function ReviewsCarousel({
  reviews = googleFiveStarReviews,
}: {
  reviews?: GoogleReview[];
}) {
  const items = reviews.filter((r) => r.rating === 5);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (items.length <= 1 || paused || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [items.length, paused, reducedMotion]);

  if (items.length === 0) return null;

  const review = items[index];

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="5-star Google reviews"
    >
      <div className="reviews-carousel-meta">
        <Stars rating={5} />
        <p className="muted" style={{ margin: 0 }}>
          Showing 5-star Google reviews · clinic averages{" "}
          <strong>{googleReviewsSummary.rating}</strong> from{" "}
          <strong>{googleReviewsSummary.count}</strong> Google reviews
          {reducedMotion ? " · auto-rotate paused (reduced motion)" : ""}
        </p>
      </div>

      <figure
        className="review-slide card"
        key={`${review.author}-${index}`}
        aria-live={reducedMotion ? "polite" : "off"}
      >
        <Stars rating={review.rating} />
        <blockquote className="review-quote">
          <p>“{review.text}”</p>
        </blockquote>
        <figcaption className="review-byline">
          <strong>{review.author}</strong>
          <span className="muted">
            {review.source}
            {review.relativeTime ? ` · ${review.relativeTime}` : ""}
          </span>
        </figcaption>
      </figure>

      <div className="review-controls">
        <button
          type="button"
          className="btn btn-outline"
          aria-label="Previous review"
          onClick={() =>
            setIndex((i) => (i - 1 + items.length) % items.length)
          }
        >
          Previous
        </button>
        <div className="review-dots" role="tablist" aria-label="Reviews">
          {items.map((item, i) => (
            <button
              key={item.author + i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review by ${item.author}`}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline"
          aria-label="Next review"
          onClick={() => setIndex((i) => (i + 1) % items.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
