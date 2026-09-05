import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spinal Decompression",
  description:
    "Gentle non-surgical spinal decompression for lower back and neck pain, sciatica, and disc-related concerns at Staudenmaier Chiropractic Wellness Center, SC in Sturgeon Bay, WI.",
};

const whoItsFor = [
  "Lower back pain",
  "Neck pain",
  "Sciatica",
  "Arm or leg radiating pain",
  "Bulging discs",
  "Herniated discs",
  "Degenerative disc disease",
  "Spinal stenosis",
  "Post-operative issues of the lumbar or cervical spine",
  "Lumbar and cervical syndromes",
];

const programElements = [
  "Stabilization work for ligaments, tendons, and muscles",
  "Heat therapy",
  "Muscle stimulation",
  "Ultrasound",
  "Cold therapy",
  "Home exercise guidance",
  "Periodic maintenance visits as appropriate",
];

export default function SpinalDecompressionPage() {
  return (
    <>
      <section className="page-hero page-hero-media">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Non-surgical option</span>
            <h1>Spinal Decompression in Sturgeon Bay</h1>
            <p className="muted prose">
              Gentle, non-surgical spinal decompression may be discussed after
              evaluation for lower back or neck pain, sciatica, radiating pain
              into the arms or legs, bulging, herniated, or degenerative discs,
              spinal stenosis, post-operative concerns, and lumbar or cervical
              syndromes.
            </p>
          </div>
          <div className="media-frame media-frame-hero">
            <Image
              src="/images/highlighted-spine.webp"
              alt="Spinal assessment focused on alignment and back care"
              width={640}
              height={480}
              className="media-img"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>What it is</h2>
          <p>
            Spinal decompression is a gentle, non-surgical procedure used to
            help with lower back and neck pain relief and sciatica pain relief,
            and for bulging, herniated, or degenerative disc disease in the neck
            and lumbar regions.
          </p>
          <p>
            Gentle distractive forces create decompression of the spine with
            unloading due to distraction and proper positioning. The goal is to
            improve blood flow and nutrient exchange to the injured area. During
            a session, you experience several cycles of stretch and relaxation
            that graduate to a peak over several minutes.
          </p>

          <div className="media-inline">
            <Image
              src="/images/spinal-posture.jpg"
              alt="Person experiencing lower back discomfort"
              width={480}
              height={480}
              className="media-img media-img-square"
            />
          </div>

          <h2>Who it&apos;s for</h2>
          <p>
            After examination and consultation, spinal decompression may be an
            option to discuss if you are dealing with concerns such as:
          </p>
          <ul>
            {whoItsFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>What to expect</h2>
          <p>
            Therapy sessions typically last less than 20 minutes and are often
            scheduled about 3 times a week for about 1 month. Care commonly
            transitions from passive to active treatments as you respond.
          </p>
          <p>
            Many patients feel pain relief with as few as 6–10 visits. Most
            patients are released from treatment after about 8 weeks. Individual
            response varies, and your doctor will guide the plan based on your
            evaluation and progress.
          </p>

          <h2>Program of care</h2>
          <p>
            A complete program targeting the function of stabilization
            ligaments, tendons, and muscles is a vital part of spinal
            decompression. Exercise and adjunctive therapies can assist
            rehabilitation. The goal is not only to help the disc, but also to
            enhance muscular control and support of the back and neck.
          </p>
          <ul>
            {programElements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Regular home exercise and periodic visits help maintain spinal
            health and reduce the probability of recurrence.
          </p>

          <div className="media-inline">
            <Image
              src="/images/weights.jpg"
              alt="Active care and strengthening as part of recovery"
              width={480}
              height={480}
              className="media-img media-img-square"
            />
          </div>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Results and visit counts vary. Spinal decompression is offered as
              part of an individualized care plan after examination — not a
              guaranteed cure.
            </p>
          </div>

          <p style={{ marginTop: "2rem" }}>
            Questions about whether spinal decompression is appropriate for you?
            Contact our Sturgeon Bay office.
          </p>
          <div className="btn-row">
            <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
              Call {site.phone}
            </a>
            <Link className="btn btn-outline" href="/appointment">
              Appointment info
            </Link>
            <Link className="btn btn-outline" href="/services">
              All services
            </Link>
            <Link className="btn btn-outline" href="/contact">
              Contact & hours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
