import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Postural Screenings",
  description:
    "Postural screenings in Sturgeon Bay, WI — a practical, non-invasive look at how you stand and sit, and whether posture may be adding to discomfort.",
};

const whoBenefits = [
  "People who sit at a desk or computer for long hours",
  "Anyone noticing neck, shoulder, or back discomfort tied to posture",
  "Parents concerned about screen posture or backpack habits in kids and teens",
  "Individuals who want a wellness check focused on how they move",
  "Those recovering from an injury or returning to activity who want an alignment review",
];

export default function PosturalScreeningsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Assessment</span>
          <h1>Spinal &amp; Postural Screenings in Sturgeon Bay</h1>
          <p className="muted prose">
            How you stand and sit affects how you feel. A postural screening is
            a practical, non-invasive way to look at everyday positions — and to
            spot stress points that may relate to neck, shoulder, or back
            discomfort.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>What a postural screening is</h2>
          <p>
            In our clinic, a postural screening is an evaluation of how your
            spine and posture present in everyday positions. When posture is
            strained for long periods, the body often compensates with muscular
            imbalance — which can show up as aches, stiffness, or limited
            mobility.
          </p>
          <p>
            Screening is not a substitute for a full exam when one is needed,
            but it is a useful first step. It helps pinpoint areas of stress and
            guides whether further evaluation or care makes sense for you.
          </p>

          <h2>Who might benefit</h2>
          <p>Postural screenings can be helpful for many people, including:</p>
          <ul>
            {whoBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>What to expect</h2>
          <p>
            When you come in, you will meet with {site.doctor.displayName}. He
            performs a non-invasive, pain-free analysis to help identify stress
            points and to determine what approach — if any — fits your
            situation. Findings are explained in plain language. You decide next
            steps.
          </p>
          <p>
            From there, we can discuss chiropractic care, wellness visits, or
            other services offered at the clinic when appropriate.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Curious about your posture? Request an appointment or call our
              Sturgeon Bay office to schedule a screening or consultation.
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
