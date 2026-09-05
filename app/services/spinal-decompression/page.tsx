import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spinal Decompression",
  description:
    "Spinal decompression in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC.",
};

export default function SpinalDecompressionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Non-surgical option</span>
          <h1>Spinal Decompression in Sturgeon Bay</h1>
          <p className="muted prose">
            Whether you have lower back pain, a pinched nerve, sciatica,
            radiating pain into the arms or legs, neck pain, or symptoms related
            to damaged or degenerative discs, spinal stenosis, or post-operative
            complications of the lumbar and cervical spine, spinal decompression
            may be an option to discuss after evaluation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>What it is</h2>
          <p>
            This gentle, non-surgical procedure can provide lower back and neck
            pain relief and sciatica pain relief, and is used for bulging,
            herniated, or degenerative disc disease in the neck and lumbar
            regions.
          </p>
          <p>
            Gentle distractive forces create decompression of the spine with
            unloading due to distraction and proper positioning, aiming to
            improve blood flow and nutrient exchange to the injured area. You
            experience several cycles of stretch and relaxation that graduate to
            a peak over several minutes.
          </p>

          <h2>How long does treatment take?</h2>
          <p>
            Therapy sessions typically last less than 20 minutes, often about 3
            times a week for 1 month, transitioning from passive to active
            treatments as you respond. Many patients feel pain relief with as
            few as 6–10 treatments. Most patients are released from treatment
            after about 8 weeks.
          </p>
          <p>
            A complete program targeting the function of stabilization
            ligaments, tendons, and muscles is a vital part of spinal
            decompression. Exercise and adjunctive therapies such as heat,
            muscle stimulation, ultrasound, and cold therapy can assist
            rehabilitation. The goal is not only to help the disc, but also to
            enhance muscular control and support of the back and neck.
          </p>
          <p>
            Regular home exercise and periodic visits help maintain spinal
            health and reduce the probability of recurrence.
          </p>

          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
              Call {site.phone}
            </a>
            <Link className="btn btn-outline" href="/services">
              All services
            </Link>
            <Link className="btn btn-outline" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
