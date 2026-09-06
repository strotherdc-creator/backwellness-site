"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  googleFiveStarReviews,
  googleReviewsSummary,
  type GoogleReview,
} from "@/lib/reviews";

const INTERVAL_MS = 10000;

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
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(Date.now());

  const go = useCallback(
    (next: number) => {
      if (count <= 0) return;
      setIndex(((next % count) + count) % count);
      startedAt.current = Date.now();
      setProgress(0);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1 || paused || reducedMotion) return;

    startedAt.current = Date.now();
    setProgress(0);
    const tick = window.setInterval(() => {
      const elapsed = Date.now() - startedAt.current;
      setProgress(Math.min(1, elapsed / INTERVAL_MS));
      if (elapsed >= INTERVAL_MS) {
        startedAt.current = Date.now();
        setProgress(0);
        setIndex((i) => (i + 1) % count);
      }
    }, 50);

    return () => window.clearInterval(tick);
  }, [count, paused, reducedMotion]);

  if (count === 0) return null;

  const review = items[index];
  const autoPlaying = !paused && !reducedMotion && count > 1;

  return (
    <div
      ref={rootRef}
      className="reviews-carousel"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        const next = e.relatedTarget as Node | null;
        if (next && rootRef.current?.contains(next)) return;
        setPaused(false);
      }}
      aria-roledescription="carousel"
      aria-label="5-star Google reviews"
    >
      <div className="reviews-carousel-meta">
        <Stars rating={5} />
        <p className="muted" style={{ margin: 0 }}>
          Google rating <strong>{googleReviewsSummary.rating}</strong> ·{" "}
          <strong>{googleReviewsSummary.count}</strong> reviews
        </p>
      </div>

      <div className="review-viewport">
        <figure
          className={`review-slide card${reducedMotion ? "" : " review-slide-animate"}`}
          key={`${review.author}-${index}`}
          aria-live="polite"
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
      </div>

      <div
        className="review-progress"
        role="presentation"
        aria-hidden
      >
        <span
          className="review-progress-bar"
          style={{
            width: `${(autoPlaying ? progress : 0) * 100}%`,
            transition: reducedMotion ? "none" : undefined,
          }}
        />
      </div>

      <div className="review-controls">
        <button
          type="button"
          className="btn btn-outline"
          aria-label="Previous review"
          onClick={() => go(index - 1)}
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
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline"
          aria-label="Next review"
          onClick={() => go(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
