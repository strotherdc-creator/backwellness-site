import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patients",
  description: `New patient information and what to expect at ${site.name} in Sturgeon Bay, WI — personalized chiropractic care with Dr. Luke.`,
};

export default function PatientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Patient information</span>
          <h1>For patients</h1>
          <p className="muted prose">
            Practical information to help you prepare for your visit. For
            scheduling or billing questions, call the office — Ashley and Alex
            are happy to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>What to expect</h2>
            <ul className="info-list">
              <li>
                We listen first — so care fits your life, not a one-size plan.
              </li>
              <li>
                We evaluate with an appropriate exam. On-site X-ray is available
                when it is clinically indicated.
              </li>
              <li>
                We explain findings in plain language and recommend options. You
                decide what feels right.
              </li>
              <li>
                Supportive options such as PiezoWave may be part of care when
                appropriate — as tools, not the whole plan.
              </li>
              <li>
                Ashley assists with scheduling, billing, and insurance questions
                at the front desk.
              </li>
            </ul>
          </article>

          <article className="card">
            <h2>New patients</h2>
            <p>
              New patients are welcome. Request an appointment by phone at{" "}
              <a href={`tel:${site.phoneTel}`}>
                <strong>{site.phone}</strong>
              </a>
              . Our staff can help you understand what to bring and how to
              prepare for your first visit.
            </p>
            <p>
              We do not collect protected health information through this
              website. Please share personal health details only by phone or in
              person at the clinic.
            </p>
            <div className="btn-row" style={{ marginTop: "1rem" }}>
              <Link className="btn btn-gold" href="/appointment">
                Request an Appointment
              </Link>
              <a className="btn btn-outline" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container prose">
          <h2>How we approach care</h2>
          <p>
            Pain, stiffness, or limited mobility should not decide what you can
            do at work, at home, or around Door County. {site.doctor.displayName}{" "}
            focuses on personalized, gentle chiropractic care — listening,
            evaluating, and explaining so you leave with clear next steps.
          </p>
          <p>
            When a problem needs more than an adjustment, we may discuss
            additional options. You stay in charge of the decision.
          </p>
        </div>
      </section>
    </>
  );
}
