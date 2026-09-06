import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Sturgeon Bay, Wisconsin</span>
            <h1>{site.tagline}</h1>
            <p className="hero-lead">
              Welcome to {site.name}. Our outstanding team is here to help you
              reach your healthcare goals with chiropractic care focused on
              spinal alignment and nervous system function.
            </p>
            <div className="btn-row hero-actions">
              <a className="btn btn-accent" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
              <Link className="btn btn-outline-light" href="/appointment">
                Book an Appointment
              </Link>
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
            <h2>How we can help</h2>
            <ul>
              {site.conditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Welcome</p>
            <h2>Chiropractic care in Sturgeon Bay</h2>
            <p className="muted">
              Chiropractic care is the practice of using spinal alignment to
              alleviate a wide variety of physical ailments, including muscle
              strain, neck pain, chronic back pain, and more. This is
              accomplished by adjusting the position of the spinal column to its
              proper shape, providing a non-invasive solution for pain relief.
            </p>
          </div>
          <div className="grid-2 feature-grid">
            <article className="card card-lift">
              <h3>How can chiropractic care help you?</h3>
              <p>
                Many people dismiss chiropractic as being something only for
                back pain, but chiropractic treatment can be used to address a
                wide variety of physical issues — including migraines and
                headaches, chronic pain, carpal tunnel, and pain due to injury
                or muscle strain.
              </p>
              <p>
                At {site.name}, our chiropractic team is ready to meet with you
                to discuss your needs and help design a program that is right
                for you.
              </p>
            </article>
            <article className="card card-lift">
              <h3>The nervous system connection</h3>
              <p>
                Chiropractic is based on the scientific fact that your nervous
                system controls the function of every cell, tissue, organ, and
                system of your body. Your nervous system consists of your brain,
                spinal cord, and millions of nerves.
              </p>
              <p>
                While your brain is protected by the skull, your spinal cord is
                protected by the 24 moving bones of the spine. Everyday
                activities can cause these spinal bones to lose their normal
                position or motion, which can result in nervous system
                dysfunction. The chiropractic approach is to detect, reduce, and
                help prevent that dysfunction.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-media">
            <div className="media-frame">
              <Image
                src="/images/highlighted-spine.webp"
                alt="Spinal assessment and alignment-focused care"
                width={720}
                height={540}
                className="media-img"
              />
            </div>
            <div>
              <p className="section-kicker">Focused care</p>
              <h2>Support for your spine and lifestyle</h2>
              <p className="muted">
                From gentle adjustments to PiezoWave, spinal decompression, and
                cold laser &amp; LED therapy, we offer options that can be part
                of an individualized plan after examination.
              </p>
              <div className="btn-row" style={{ marginTop: "1.25rem" }}>
                <Link className="btn btn-navy" href="/about">
                  Meet Dr. Luke &amp; team
                </Link>
                <Link className="btn btn-outline" href="/services">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Services</p>
            <h2>Services to support your lifestyle</h2>
            <p className="muted">
              You do not have to live in pain. Explore supportive options
              offered at our Sturgeon Bay clinic.
            </p>
          </div>
          <div className="grid-3">
            {site.services.slice(0, 3).map((service, index) => (
              <article className="card card-premium" key={service.title}>
                <div className="card-icon">{String(index + 1).padStart(2, "0")}</div>
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

      <section className="section section-tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 style={{ marginBottom: "0.4rem" }}>Ready to feel better?</h2>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.85)" }}>
                Call our office to schedule with {site.doctor.displayName} and
                the team.
              </p>
            </div>
            <div className="btn-row">
              <a className="btn btn-accent" href={`tel:${site.phoneTel}`}>
                {site.phone}
              </a>
              <Link className="btn btn-outline-light" href="/contact">
                Contact & hours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
