import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patients",
  description: `New patient information and what to expect at ${site.name} in Sturgeon Bay, WI.`,
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
                Our team will discuss your needs and help design a program that
                is right for you.
              </li>
              <li>
                Care focuses on spinal alignment and supporting healthy nervous
                system function.
              </li>
              <li>
                Depending on your visit, examinations, X-rays, or supportive
                therapies such as PiezoWave may be part of care when
                appropriate.
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
              New patients are welcome. Please call{" "}
              <a href={`tel:${site.phoneTel}`}>
                <strong>{site.phone}</strong>
              </a>{" "}
              to schedule. Our staff can help you understand what to bring and
              how to prepare for your first visit.
            </p>
            <p>
              We do not collect protected health information through this
              website. Please share personal health details only by phone or in
              person at the clinic.
            </p>
            <div className="btn-row" style={{ marginTop: "1rem" }}>
              <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                Call to schedule
              </a>
              <Link className="btn btn-outline" href="/contact">
                Office hours & location
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container prose">
          <h2>Education focus</h2>
          <p>
            Chiropractic is based on the understanding that your nervous system
            controls the function of every cell, tissue, organ, and system of
            your body. The 24 moving bones of the spine protect the spinal cord;
            when those bones lose normal position or motion, nervous system
            function can be affected.
          </p>
          <p>
            The chiropractic approach to better health is to detect, reduce, and
            help prevent nervous system dysfunction — supporting your goal to
            get your lifestyle back.
          </p>
        </div>
      </section>
    </>
  );
}
