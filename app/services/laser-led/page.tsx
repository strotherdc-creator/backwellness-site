import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cold Laser & LED Therapy",
  description:
    "Cold laser and LED light therapy for neuropathy, pain, soft-tissue injuries, and related concerns at Staudenmaier Chiropractic Wellness Center, SC in Sturgeon Bay, WI.",
};

const conditions = [
  "Neuropathy (including diabetic neuropathy)",
  "RSD",
  "Carpal tunnel",
  "Back pain",
  "Neck pain",
  "Arthritis",
  "Tendonitis",
  "Sprains",
  "Wound care (ulcers, pressure sores, burns)",
  "Shoulder and rotator cuff concerns",
  "Post-surgical scarring",
  "Knee pain",
  "Plantar fasciitis",
  "Muscle and joint pain",
  "Stiffness",
  "Soft-tissue injuries",
  "Tenosynovitis",
  "Trigeminal neuralgia",
  "Fibromyalgia",
  "Bursitis",
  "Acute and chronic pain",
];

export default function LaserLedPage() {
  return (
    <>
      <section className="page-hero page-hero-media">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Light therapy</span>
            <h1>Cold Laser and LED Therapy in Sturgeon Bay</h1>
            <p className="muted prose">
              Cold laser and LED light therapy uses a light-emitting device that
              can be applied to many different parts of the body. Care is
              non-thermal and noninvasive. Some approaches may combine light
              with electric stimulation when appropriate.
            </p>
          </div>
          <div className="media-frame media-frame-hero">
            <Image
              src="/images/spinal-posture.jpg"
              alt="Supportive care for back and musculoskeletal pain"
              width={640}
              height={640}
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
            Laser therapy is often utilized to treat a wide array of conditions
            and pain. Modern cold laser and LED units are handheld devices that
            deliver light as a non-invasive supportive treatment. Treatment may
            address deep tissue as well as conditions closer to the skin
            surface.
          </p>
          <p>
            When tissues are damaged, cells can begin to die and scar tissue
            formation may begin — consequences that can slow or limit healing.
            Cold laser units are engineered to produce wavelengths of light
            intended to stimulate damaged cells, help break up formed scar
            tissue, reduce pain and swelling, and support the healing process —
            as described for this modality on our source clinic materials.
          </p>

          <h2>Who it&apos;s for</h2>
          <p>
            Neuropathy, diabetic neuropathy, RSD, and carpal tunnel syndrome
            have been treated with laser therapy at clinics that offer this
            modality. In addition to back and neck pain, laser therapy has been
            utilized for inflammatory conditions such as arthritis, tendonitis,
            and sprains, as well as wound management, shoulder injuries, and
            muscle and joint pain.
          </p>
          <p>Conditions listed in connection with this care include:</p>
          <ul>
            {conditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="media-inline">
            <Image
              src="/images/highlighted-spine.webp"
              alt="Clinical care focused on musculoskeletal recovery"
              width={640}
              height={480}
              className="media-img"
            />
          </div>

          <h2>What to expect</h2>
          <p>
            Units are often handheld. Treatment time depends on the condition
            and the size of the area affected. A major advantage is the ability
            to penetrate deep into tissues and joints while also treating
            conditions closer to the skin surface.
          </p>
          <p>
            People typically report little or no sensation during treatment.
            Care is commonly completed across a series of sessions — often
            described as about 10 to 12 — depending on the condition and
            response.
          </p>
          <p>
            Cold laser and LED therapy is non-thermal and noninvasive. Your
            doctor will discuss whether it fits your individualized plan after
            examination.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Individual results vary. Light therapy is a supportive option
              within a care plan — not a guaranteed cure for any condition.
            </p>
          </div>

          <p style={{ marginTop: "2rem" }}>
            Curious whether cold laser or LED therapy may help with your
            concerns? Call our Sturgeon Bay team.
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
