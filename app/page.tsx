import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const problems = [
  {
    title: "Back & neck pain",
    body: "When sitting, driving, sleeping, or getting through a workday feels harder than it should.",
  },
  {
    title: "Stiff joints",
    body: "When shoulders, hips, or knees make hobbies, yard work, or daily errands tougher.",
  },
  {
    title: "Mobility & independence",
    body: "When you want to keep walking, traveling, and staying active with family and friends.",
  },
  {
    title: "Stubborn muscle & tendon issues",
    body: "When a nagging spot keeps limiting what you can do — even after you have tried to wait it out.",
  },
];

const approachPoints = [
  "Listens first — so care fits your life, not a one-size plan",
  "Personalized, gentle chiropractic care",
  "Clear explanations so you understand what is going on",
  "More options when a simple adjustment is not the whole answer",
];

const advancedOptions = [
  {
    title: "Chiropractic Care",
    href: "/services/chiropractic",
    description:
      "Personalized adjustments and care focused on helping you move and function better.",
  },
  {
    title: "PiezoWave",
    href: "/services/piezowave",
    description:
      "An option for stubborn muscle, tendon, and joint problems when extra help may be useful.",
  },
  {
    title: "Spinal Decompression",
    href: "/services/spinal-decompression",
    description:
      "Gentle, non-surgical care that may help with certain disc-related neck and low back concerns.",
  },
  {
    title: "Cold Laser & LED",
    href: "/services/laser-led",
    description:
      "Light-based therapy that can support soft-tissue comfort as part of a care plan.",
  },
];

const visitSteps = [
  {
    title: "We Listen",
    body: "We learn what is happening and what it is preventing you from doing — work, hobbies, sleep, or staying independent.",
  },
  {
    title: "We Evaluate",
    body: "We do an appropriate exam. On-site X-ray is available when it is clinically indicated — not automatically for every patient.",
  },
  {
    title: "We Explain",
    body: "We share findings, discuss options, and make a recommendation. You decide what feels right for you.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Chiropractic Care in Sturgeon Bay &amp; Door County
            </span>
            <h1>{site.tagline}</h1>
            <p className="hero-lead">
              Your back, neck, joints, or mobility shouldn&apos;t decide what
              you&apos;re able to do with your life.
            </p>
            <p className="hero-lead" style={{ marginTop: "0.85rem" }}>
              {site.doctor.displayName} helps Door County patients keep doing
              what matters through personalized chiropractic care — and
              additional options when appropriate.
            </p>
            <div className="btn-row hero-actions">
              <Link className="btn btn-accent" href="/appointment">
                Request an Appointment
              </Link>
              <a className="btn btn-outline-light" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <div className="hero-card-media">
              <Image
                src="/images/team-meet.jpg"
                alt={`${site.doctor.name}, chiropractor in Sturgeon Bay`}
                width={640}
                height={800}
                className="media-img"
                priority
              />
            </div>
            <h2>Hometown care you can trust</h2>
            <ul>
              <li>Serving Door County since 1994</li>
              <li>UnitedHealthcare preferred provider</li>
              <li>On-site X-ray when clinically indicated</li>
              <li>Personalized, gentle care with {site.doctor.displayName}</li>
            </ul>
          </aside>
        </div>
      </section>

      <div className="trust-strip" role="list">
        <div className="container trust-strip-inner">
          <span role="listitem">Serving Door County Since 1994</span>
          <span className="trust-strip-sep" aria-hidden="true">
            ·
          </span>
          <span role="listitem">UnitedHealthcare Preferred</span>
          <span className="trust-strip-sep" aria-hidden="true">
            ·
          </span>
          <span role="listitem">On-Site X-Ray</span>
          <span className="trust-strip-sep" aria-hidden="true">
            ·
          </span>
          <span role="listitem">New Patients Welcome</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Real-life problems</p>
            <h2>When pain or stiffness gets in the way of life</h2>
            <p className="muted">
              Physical problems show up in work, hobbies, sleep, family time,
              and staying independent. If something is limiting what you can do,
              you are in the right place.
            </p>
          </div>
          <div className="grid-2">
            {problems.map((item) => (
              <article className="card card-lift" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-media">
            <div className="media-frame">
              <Image
                src="/images/highlighted-spine.webp"
                alt="Spinal assessment highlighting vertebral alignment during chiropractic care"
                width={720}
                height={540}
                className="media-img"
              />
            </div>
            <div>
              <p className="section-kicker">Why Dr. Luke</p>
              <h2>An experienced local guide — not a one-size plan</h2>
              <p className="muted">
                For 30+ years, {site.doctor.displayName} has helped Door County
                patients solve real movement problems. He listens, evaluates, and
                explains — then builds care around you.
              </p>
              <ul className="info-list" style={{ marginTop: "1rem" }}>
                {approachPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="btn-row" style={{ marginTop: "1.25rem" }}>
                <Link className="btn btn-navy" href="/about">
                  Meet Dr. Luke &amp; team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "46rem" }}>
          <div className="section-head">
            <p className="section-kicker">Google reviews</p>
            <h2>What patients are saying</h2>
            <p className="muted">
              Real 5-star Google reviews from our patients.
            </p>
          </div>
          <ReviewsCarousel />
          <div className="section-footer-actions">
            <Link className="btn btn-outline" href="/reviews">
              More reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Treatment philosophy</p>
            <h2>The right approach for the right problem</h2>
            <p className="muted">
              We examine carefully, explain what we find, and recommend options.
              You stay in charge of the decision.
            </p>
          </div>
          <div className="grid-3">
            <article className="card card-premium">
              <div className="card-icon">01</div>
              <h3>Examine</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                We look at your history, concerns, and what your body is telling
                us — so recommendations fit the problem.
              </p>
            </article>
            <article className="card card-premium">
              <div className="card-icon">02</div>
              <h3>Explain</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                You hear findings in plain language. No pressure. No mystery.
              </p>
            </article>
            <article className="card card-premium">
              <div className="card-icon">03</div>
              <h3>You decide</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                We recommend options. You choose the path that makes sense for
                your goals and comfort.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Care options</p>
            <h2>Advanced options when you need more than an adjustment</h2>
            <p className="muted">
              Chiropractic care comes first. When a problem needs more,{" "}
              {site.doctor.displayName} can add tools that may help —
              including PiezoWave for stubborn muscle, tendon, and joint issues.
            </p>
          </div>
          <div className="grid-2">
            {advancedOptions.map((service) => (
              <article className="card card-premium" key={service.title}>
                <h3>{service.title}</h3>
                <p className="muted">{service.description}</p>
                <Link className="card-link" href={service.href}>
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
          <div className="section-footer-actions">
            <Link className="btn btn-navy" href="/services">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Your first visit</p>
            <h2>Understand what&apos;s going on. Know what to do next.</h2>
            <p className="muted">
              A clear first visit helps you leave with answers — not guesses.
            </p>
          </div>
          <div className="grid-3">
            {visitSteps.map((step, index) => (
              <article className="card card-premium" key={step.title}>
                <div className="card-icon">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{step.title}</h3>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Insurance &amp; payment</p>
            <h2>Help understanding benefits and expected costs</h2>
            <p className="muted">
              We are a UnitedHealthcare preferred provider. Our team can help
              you understand benefits and what to expect — with clear, practical
              answers before care begins.
            </p>
          </div>
          <div className="card" style={{ maxWidth: "40rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Have questions about coverage or payment? Call us. We are happy to
              walk through it with you.
            </p>
            <div className="btn-row">
              <a className="btn btn-navy" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
              <Link className="btn btn-outline" href="/contact">
                Contact the office
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 style={{ marginBottom: "0.4rem" }}>
                Hometown care for Door County
              </h2>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.85)" }}>
                Ready to move better? Request an appointment with{" "}
                {site.doctor.displayName}, or call the office today.
              </p>
            </div>
            <div className="btn-row">
              <Link className="btn btn-accent" href="/appointment">
                Request an Appointment
              </Link>
              <a className="btn btn-outline-light" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
