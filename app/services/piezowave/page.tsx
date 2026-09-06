import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PiezoWave Therapy (MyACT)",
  description:
    "PiezoWave therapy in Sturgeon Bay, WI — a supportive option for stubborn muscle, tendon, and joint problems when chiropractic care alone may not be enough.",
};

const advantages = [
  "Locates and alleviates musculoskeletal pain",
  "Non-invasive",
  "May reduce reliance on pain medications",
  "Outpatient treatment",
  "Short therapy time of about 10–20 minutes",
  "Only 6–12 treatments needed in most cases, depending on severity and at the doctor's discretion",
];

const indications = [
  "Carpal Tunnel Syndrome",
  "Tennis Elbow & Golfer's Elbow",
  "Calcific tendonitis of the shoulder & Frozen Shoulder",
  "Trigger point treatment",
  "Greater Trochanteric pain syndrome",
  "Patella tip syndrome",
  "Medial Tibial Stress Syndrome – Shin Splints",
  "Plantar Fasciitis",
  "Achilles Tendinopathy",
  "Sacroiliac Joint Pain",
  "Soft tissue, muscle, or ligament issues",
];

const faqs: { q: string; a: string[] }[] = [
  {
    q: "How does it work?",
    a: [
      "The mechanical energy that myofascial acoustic compression therapy provides encourages and stimulates fibroblasts and growth factors to promote healing and increase cell metabolism and local blood flow to the affected area.",
      "The treatment uses pressure sound waves, not electric shocks. PiezoWave Pain Treatment deeply penetrates tissue for healing that cannot be achieved through manual adjustments alone.",
    ],
  },
  {
    q: "What to expect from the treatment?",
    a: [
      "About 200–4,000 pulse waves will be delivered to the treatment area, with benefits often noted across 6–10 treatments. It can take up to 6 weeks after treatment for maximum results, with best results when sessions are about 7 days apart. Some areas may take as few as 6 treatments; more chronic issues could require up to 12.",
      "Reported effects include facilitating healing, reducing pain, stimulating the washing away of Substance-P (a pain-producing chemical), increasing collagen production, increasing microcirculation and tissue metabolism, helping dissolve calcific fibroblasts, reducing muscle tension, and improving function and range of motion.",
    ],
  },
  {
    q: "How long does each treatment take?",
    a: [
      "Treatments can take up to 20 minutes. Most care plans include 6–12 total treatments.",
    ],
  },
  {
    q: "How many treatments are required?",
    a: [
      "Many conditions need six to twelve sessions depending on severity and at the doctor's discretion. Treatments can be done five to ten days apart depending on tissue response and patient tolerance.",
      "At our clinic, many patients report a positive benefit with just one treatment. For patients who do not respond positively, we consider other modes of therapy and make appropriate referrals when needed.",
    ],
  },
  {
    q: "Does it hurt?",
    a: [
      "Depending on the patient's current level of pain and the area of treatment, discomfort varies. Intensity is adjusted to patient tolerance. Overall, the sensation is more uncomfortable than painful; some discomfort can indicate the treatment is affecting the intended tissue.",
    ],
  },
  {
    q: "Will there be pain after treatment?",
    a: [
      "Many patients experience immediate pain relief. Soreness in the area can appear within two to four hours and may last from a few hours to a couple of days. Intense soreness in the following day or two can be normal and usually dissipates.",
      "Staying hydrated may help reduce soreness. Do not use ice on the area if you experience this soreness — an inflammatory response is a desired effect of treatment. Anti-inflammatory medications such as Advil, Ibuprofen, Aleve, or Motrin are generally not recommended for this reason. Many patients report good results with Tylenol; take medication only as appropriate for you or as advised by your doctor.",
    ],
  },
  {
    q: "Is physical activity allowed after treatment?",
    a: [
      "We recommend refraining from physical activity, especially involving the treated area, for 48 hours after every treatment.",
    ],
  },
  {
    q: "How is PiezoWave different from ultrasound?",
    a: [
      "Like ultrasound, PiezoWave is non-invasive. It can penetrate precise depths between about 0.5 mm and 3 cm — deeper than standard ultrasound. PiezoWave does not create tissue heating; it creates mechanical pressure that produces a controlled inflammatory response and can help identify trigger points in muscle tissue.",
    ],
  },
  {
    q: "Is it safe?",
    a: [
      "PiezoWave is a non-invasive option that may be considered as an alternative to more invasive procedures such as surgery and injections when used appropriately. Suitability depends on your evaluation.",
    ],
  },
  {
    q: "Are there any contraindications?",
    a: [
      "Because it does not generate heat like ultrasound, it can be suitable in some post-surgical situations. It is not indicated with certain conditions, including: epiphyseal plate in the shockwave entry window/focus; pregnancy; heart or circulatory problems; blood-thinning medications and blood clotting disorders; infections; tumor tissue; lung tissue in the focal area; and treatment of the head or brain.",
    ],
  },
  {
    q: "Why choose PiezoWave Pain Treatment?",
    a: [
      "Safe, patient-guided focused therapy; no anesthesia; non-invasive; no downtime; outpatient treatment; and comparatively low treatment costs relative to invasive options.",
    ],
  },
];

export default function PiezoWavePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Myofascial Acoustic Compression Therapy</span>
          <h1>PiezoWave Therapy (MyACT) in Sturgeon Bay</h1>
          <p className="muted prose">
            PiezoWave (Myofascial Acoustic Compression Therapy) is a tool{" "}
            {site.doctor.displayName} may recommend for stubborn muscle, tendon,
            and joint problems. Acoustic waves target tissue at varying depths —
            a focused option that can support comfort and mobility as part of a
            broader care plan, not a stand-alone brand promise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Advantages of MyACT</h2>
          <ul>
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>
            The PiezoWave2 therapy was developed by Richard Wolf, a leader in
            lithotripsy therapy. While standard lithotripsy is used to shatter
            large kidney stones into fragments small enough to pass with minimal
            discomfort, PiezoWave therapy is used to address many common soft
            tissue issues.
          </p>

          <h2>How does PiezoWave2 therapy work?</h2>
          <p>
            The PiezoWave2 machine delivers thousands of high-energy sound-wave
            impulses to the affected tissue. These impulses are thought to cause
            microtrauma to scar tissue and arthritic areas. As a result, they
            can stimulate the body&apos;s natural metabolic activity, create a
            healthy inflammatory response, and stimulate healing.
          </p>
          <p>
            The machine helps the doctor identify very specific areas of injury
            and then deliver a series of impulses precisely where they are most
            effective. There is typically no pain or discomfort in areas that
            are not injured. In many instances there can be an immediate
            reduction of pain as well as improved mobility and function. Because
            it is non-invasive, anesthesia is not needed. The most common minor
            side effect following treatment is soreness in the treated area that
            normally dissipates in a short amount of time.
          </p>

          <h2>Who can benefit?</h2>
          <p>
            People with any of the following conditions may benefit from
            PiezoWave treatments:
          </p>
          <ul>
            {indications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>PiezoWave2 pain treatment</h2>
          <p>
            PiezoWave can be useful when an injury has become stubborn or
            slow to settle. It may help support strength and mobility in
            affected soft tissue as part of an individualized plan. Ask our
            Sturgeon Bay team whether this option fits your situation after
            examination — results vary, and it is not a guaranteed cure.
          </p>
          <div className="notice">
            <p style={{ margin: 0 }}>
              PiezoWave2 Pain Treatments are not covered by insurance policies
              currently.
            </p>
          </div>

          <h2>Frequently asked questions</h2>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                {item.a.map((para) => (
                  <p key={para.slice(0, 48)}>{para}</p>
                ))}
              </details>
            ))}
          </div>

          <p style={{ marginTop: "2rem" }}>
            Questions about treatment details, side effects, or payment options?
            Request an appointment or call our Sturgeon Bay office.
          </p>
          <div className="btn-row">
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
