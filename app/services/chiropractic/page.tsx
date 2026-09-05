import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chiropractic Care",
  description:
    "Chiropractic care in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC — spinal alignment and nervous system-focused care to help you get your lifestyle back.",
};

export default function ChiropracticPage() {
  const { doctor } = site;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{site.tagline}</span>
          <h1>Chiropractic Care in Sturgeon Bay</h1>
          <p className="muted prose">
            Chiropractic care is the practice of using spinal alignment to
            alleviate a wide variety of physical ailments — including muscle
            strain, neck pain, chronic back pain, and more. By adjusting the
            position of the spinal column toward its proper shape, chiropractic
            offers a non-invasive approach to pain relief.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Who it&apos;s for</h2>
          <p>
            Many people think of chiropractic as something only for back pain,
            but care can address a wide variety of physical issues. People often
            seek chiropractic for:
          </p>
          <ul>
            {site.conditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            At {site.name}, our team is ready to meet with you to discuss your
            needs and help design a program that is right for you.
          </p>

          <h2>How chiropractic works</h2>
          <p>
            Chiropractic is based on the scientific fact that your nervous
            system controls the function of every cell, tissue, organ, and
            system of your body. Your nervous system consists of your brain,
            spinal cord, and millions of nerves.
          </p>
          <p>
            While your brain is protected by the skull, your spinal cord is
            protected by the 24 moving bones of the spine. Everyday activities
            can cause these spinal bones to lose their normal position or
            motion. That can result in nervous system dysfunction. The
            chiropractic approach is to detect, reduce, and help prevent that
            dysfunction.
          </p>

          <h2>What to expect</h2>
          <p>
            After discussing your concerns and evaluating your spine and nervous
            system function, we help design a care program tailored to you. The
            goal is not only to address pain, but to support better function so
            you can get your lifestyle back.
          </p>
          <p>
            You do not have to live in pain. We are here to help you get your
            life back with chiropractic care focused on spinal alignment and
            nervous system function.
          </p>

          <h2>Training &amp; credentials</h2>
          <p>
            Chiropractic doctors complete a minimum of four years of schooling
            at a chiropractic college, generally preceded by an undergraduate
            degree in the basic sciences or several years of experience in a
            prior relevant health care field. Students of chiropractic must
            complete a minimum of 4,200 hours of instruction and a minimum of
            1,000 hours of fully supervised clinical training as they learn
            appropriate diagnosis and treatment techniques.
          </p>
          <p>
            {doctor.displayName} ({doctor.name}, {doctor.credentials}) attended{" "}
            {doctor.college} after undergraduate study at {doctor.undergrad}. He
            has been licensed since {doctor.licensedSince} and holds{" "}
            {doctor.certification}. Licensure includes{" "}
            {doctor.licensure.join(" and ")}.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Ready to get your lifestyle back? Call our Sturgeon Bay office to
              schedule with {doctor.displayName} and the team.
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
