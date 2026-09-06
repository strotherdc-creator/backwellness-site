import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chiropractic Care for Kids",
  description:
    "Gentle pediatric chiropractic care in Sturgeon Bay, WI — supportive, noninvasive care for growing kids and active Door County families.",
};

const stressors = [
  "Birth stress — natural delivery or C-section",
  "Awkward sleep positions and tumbles in infancy",
  "Learning to crawl and walk — strains, twists, and falls",
  "Screen and TV posture as kids grow",
  "Contact sports and heavy backpacks",
  "Desk sitting at school",
  "Teen work and physical activity",
];

export default function ChiropracticCareKidsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pediatric care</span>
          <h1>Chiropractic Care for Kids in Sturgeon Bay</h1>
          <p className="muted prose">
            Growing bodies are busy — from learning to walk to sports, screens,
            and school desks. At {site.name}, care for kids is gentle and
            noninvasive, with the goal of supporting comfortable movement as
            they grow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Why families ask about chiropractic for kids</h2>
          <p>
            Kids rarely describe chronic pain the way adults do, and they often
            seem to bounce back from bumps and falls. Still, growing bodies are
            under constant demand. Parents often ask about posture, sports
            strains, or discomfort that shows up as irritability rather than a
            clear &ldquo;my back hurts.&rdquo;
          </p>
          <p>Common stressors through childhood and the teen years include:</p>
          <ul>
            {stressors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>How can I tell if my child might benefit?</h2>
          <p>
            A thorough exam helps clarify what is going on. Younger kids may not
            have the words to describe a subtle issue. We take time to listen to
            parents, evaluate carefully, and explain findings in plain language
            before any care begins.
          </p>

          <h2>What care looks like</h2>
          <p>
            Care starts with examination to understand the concern and whether
            treatment is appropriate. When care is indicated, adjustments are
            gentle and noninvasive. Children often relax afterward — which many
            parents notice as a reassuring sign that their child felt at ease.
          </p>
          <p>
            You decide what feels right for your family after we explain options.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Wondering whether chiropractic care is appropriate for your child?
              Call {site.phone} or request an appointment to talk with our
              office.
            </p>
          </div>

          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-gold" href="/appointment">
              Request an Appointment
            </Link>
            <a className="btn btn-outline" href={`tel:${site.phoneTel}`}>
              Call {site.phone}
            </a>
            <Link className="btn btn-outline" href="/services">
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
