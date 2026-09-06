import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chiropractic Care",
  description:
    "Chiropractic care in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC — personalized spinal adjustments to help Door County patients move better and live better.",
};

export default function ChiropracticPage() {
  const { doctor } = site;

  return (
    <>
      <section className="page-hero page-hero-media">
        <div className="container page-hero-grid">
          <div>
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
          <div className="media-frame media-frame-hero">
            <Image
              src="/images/chiropractic-care.jpg"
              alt="Dr. Luke performing a chiropractic adjustment for a patient in Sturgeon Bay"
              width={1280}
              height={1700}
              className="media-img"
              priority
            />
          </div>
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
            Your nervous system helps coordinate how your body moves and
            functions. It includes your brain, spinal cord, and the nerves that
            connect throughout your body. Your spinal column protects the spinal
            cord while allowing everyday motion.
          </p>
          <p>
            Daily activities can leave spinal joints stiff, irritated, or out of
            their preferred motion. When that happens, you may feel pain, limited
            mobility, or related muscle tension. Chiropractic care focuses on
            evaluating those areas and using gentle adjustments to support better
            movement and comfort.
          </p>

          <div className="media-inline">
            <Image
              src="/images/chiropractic-adjustment-2.jpg"
              alt="Close-up of a chiropractic adjustment with hands supporting the patient"
              width={1280}
              height={1700}
              className="media-img"
            />
          </div>

          <h2>What to expect</h2>
          <p>
            After discussing your concerns and evaluating your spine and how you
            move, we help design a care program tailored to you. The goal is not
            only to address pain, but to support better function so you can move
            better in the activities that matter at home, work, and around Door
            County.
          </p>
          <p>
            You do not have to push through every day in pain. {doctor.displayName}{" "}
            and our hometown team are here to help with chiropractic care focused
            on spinal alignment, comfort, and practical next steps.
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
              Ready to move better? Call our Sturgeon Bay office to schedule with{" "}
              {doctor.displayName} and the team.
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
