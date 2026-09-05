import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cold Laser & LED Therapy",
  description:
    "Cold laser and LED light therapy in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC.",
};

const conditions = [
  "Neck pain",
  "Low back pain",
  "Foot pain",
  "Carpal tunnel syndrome",
  "Knee pain",
  "Various tendonitis",
  "Painful joints",
  "Fibromyalgia",
  "Arthritis",
  "Bursitis",
  "Various forms of acute and chronic pain",
];

export default function LaserLedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Light therapy</span>
          <h1>Cold Laser and LED Therapy in Sturgeon Bay</h1>
          <p className="muted prose">
            Laser therapy is often utilized to treat a wide array of conditions
            and pain. Cold laser and LED light therapy uses a light-emitting
            device that can be applied to many different parts of the body as a
            non-invasive supportive treatment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>How it may help</h2>
          <p>
            Neuropathy, diabetic neuropathy, RSD, and carpal tunnel syndrome
            have been treated with laser therapy at clinics that offer this
            modality. In addition to simple back and neck pain, laser therapy
            has been utilized for inflammatory conditions such as arthritis,
            tendonitis, and sprains, as well as wound management, shoulder and
            neck injuries, and muscle and joint pain.
          </p>
          <p>
            Laser therapy is non-thermal and noninvasive. Care is commonly
            completed across a series of sessions (often described as about 10
            to 12), depending on the condition and response.
          </p>

          <h2>Cold laser therapy</h2>
          <p>
            When tissues are damaged, cells can begin to die and scar tissue
            formation may begin — consequences that can slow or limit healing.
            Modern cold laser units are engineered to produce wavelengths of
            light intended to stimulate damaged cells, help address formed scar
            tissue, and support the healing process.
          </p>
          <p>
            Units are often handheld. Treatment time depends on the condition
            and the size of the area affected. A major advantage is the ability
            to penetrate deep into tissues and joints while also treating
            conditions closer to the skin surface. People typically report
            little or no sensation during treatment.
          </p>

          <h2>Conditions commonly treated</h2>
          <ul>
            {conditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
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
