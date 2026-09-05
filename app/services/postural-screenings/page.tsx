import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Postural Screenings",
  description:
    "Spinal and postural screenings in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC — a non-invasive look at alignment and stress points.",
};

const whoBenefits = [
  "People who sit at a desk or computer for long hours",
  "Anyone noticing neck, shoulder, or back discomfort tied to posture",
  "Parents concerned about screen posture or backpack habits in kids and teens",
  "Individuals who want a wellness check focused on spinal alignment",
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
            Correct spinal alignment and function matter for how you move and
            feel. A postural screening is a practical, non-invasive way to look
            at how you stand and sit — and to identify stress points or
            misalignments that may relate to discomfort or nervous system
            strain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>What a postural screening is</h2>
          <p>
            In a chiropractic wellness setting, a postural screening is an
            evaluation of how your spine and posture present in everyday
            positions. When the spine loses its normal alignment or motion, the
            body often compensates with muscular imbalance. That can show up as
            aches and pains — and, because nerves travel through the spine, it
            can also affect how messages move between the brain and the rest of
            the body.
          </p>
          <p>
            Screening is not a substitute for a full exam when one is needed,
            but it is a useful first step: it helps pinpoint areas of stress and
            guides whether further evaluation or care makes sense for you.
          </p>

          <h2>Who might benefit</h2>
          <p>
            Postural screenings can be helpful for many people, including:
          </p>
          <ul>
            {whoBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>What to expect</h2>
          <p>
            When you come in for an evaluation, you will meet with{" "}
            {site.doctor.displayName}. He performs a non-invasive, pain-free
            analysis of your spine to help identify stress points and
            misalignments and to determine what approach — if any — fits your
            situation.
          </p>
          <p>
            This step supports finding contributors to current complaints and
            catching patterns early so new issues are less likely to take hold.
            From there, we can discuss chiropractic care, wellness visits, or
            other services offered at the clinic when appropriate.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Curious about your posture or spinal alignment? Call our Sturgeon
              Bay office to schedule a screening or consultation.
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
