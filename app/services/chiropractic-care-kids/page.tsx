import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chiropractic Care for Kids",
  description:
    "Gentle pediatric chiropractic care in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC — supportive spinal care for growing children.",
};

const stressors = [
  "Birth stress — natural delivery or C-section",
  "Awkward sleep positions and tumbles in infancy",
  "Learning to crawl and walk — strains, twists, and falls",
  "Screen and TV posture as kids grow",
  "Contact sports and heavy backpacks",
  "Desk sitting at school",
  "Teen work and physical labor (painting, serving, and similar tasks)",
];

export default function ChiropracticCareKidsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pediatric care</span>
          <h1>Chiropractic Care for Kids in Sturgeon Bay</h1>
          <p className="muted prose">
            A child&apos;s nervous system helps regulate growth — from
            circulation and brain function to bone development. Spinal stress or
            misalignment can affect overall health, behavior, and development.
            At {site.name}, care for kids is gentle and noninvasive, with the
            goal of addressing concerns before patterns become hard-wired.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Why kids may need chiropractic attention</h2>
          <p>
            It can be hard to picture a child needing chiropractic care. Kids
            rarely describe chronic pain the way adults do, and they often seem
            to bounce back from bumps and falls. Still, growing bodies are under
            constant demand, and maintaining spinal health is part of supporting
            healthy development.
          </p>
          <p>
            Stress on the spine can begin early and continue through childhood
            and the teen years. Common stressors include:
          </p>
          <ul>
            {stressors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Children are resilient, but repeated impacts and postures can
            contribute to movement patterns that pull the spine out of
            comfortable alignment over time — and that can affect nervous system
            function during growth.
          </p>

          <h2>How can I tell if my child might benefit?</h2>
          <p>
            A child&apos;s spine can become misaligned without clear complaints
            of pain. Younger kids may not have the body awareness — or the words
            — to describe a subtle issue. Discomfort can show up as grumpiness,
            acting out, or frequent crying instead of a clear &ldquo;my back
            hurts.&rdquo; Spinal concerns can also relate to other childhood
            challenges; a thorough exam helps clarify what is going on.
          </p>

          <h2>What care looks like</h2>
          <p>
            Care begins with a thorough examination to understand the issue and
            whether treatment is appropriate. Even when a child is too young to
            communicate clearly or is shy, we take time to evaluate carefully
            before any adjustments.
          </p>
          <p>
            When care is indicated, adjustments are gentle and noninvasive.
            Children often relax afterward — and some even fall asleep — which
            many parents notice as a reassuring sign that their child felt at
            ease.
          </p>
          <p>
            If you have questions about your child&apos;s spinal health, call
            our Sturgeon Bay team to set up a consultation.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Wondering whether chiropractic care is appropriate for your child?
              Call {site.phone} to talk with our office.
            </p>
          </div>

          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
              Call {site.phone}
            </a>
            <Link className="btn btn-outline" href="/appointment">
              Appointment info
            </Link>
            <Link className="btn btn-outline" href="/services">
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
