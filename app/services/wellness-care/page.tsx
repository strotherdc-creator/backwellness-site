import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wellness Care",
  description:
    "Chiropractic wellness care in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC — preventive spinal care to support mobility and nervous system function.",
};

export default function WellnessCarePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Prevention &amp; maintenance</span>
          <h1>Wellness Care in Sturgeon Bay</h1>
          <p className="muted prose">
            Not feeling sick is not the same as feeling as well as you could.
            Many people wait until pain or illness shows up before seeking
            chiropractic care — and many assume a slow decline with age is
            inevitable. Wellness care focuses on spinal health and mobility so
            you can support how your body functions day to day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>How lifestyle shapes wellness</h2>
          <p>
            Everyday choices — diet, posture, desk work, and even how we hold
            emotional tension — can create quiet stress on the spine and nervous
            system long before obvious symptoms appear. Hours at a desk, how you
            hold your head, or chronically tensed shoulders can affect the neck
            and back and, over time, how the body feels overall.
          </p>
          <p>
            Your spinal column houses the nerves that carry messages throughout
            the body. When vertebrae lose their normal position or motion, and
            when chronic muscle tension persists, that messaging can be
            affected. Even when you do not feel &ldquo;sick,&rdquo; a little
            extra attention can help keep daily habits from turning into larger
            problems.
          </p>

          <h2>Why wellness care matters</h2>
          <p>
            Health can be thought of as the body functioning properly — not only
            the absence of feeling ill. If nervous system communication is
            limited, systems may not work as well as they could. Through regular
            wellness care aimed at spinal health and mobility, people often
            report more energy and fewer illnesses. Those experiences are
            individual and not a guarantee, but they are a common reason people
            stay on a maintenance schedule.
          </p>
          <p>
            When nervous system function is supported, related areas people
            notice in daily life can include digestion, blood flow, lung
            capacity, heartbeat awareness, skin tone, and overall mobility —
            reflecting how interconnected the spine and body are.
          </p>

          <h2>Chiropractic as part of a wellness plan</h2>
          <p>
            Regular, gentle adjustments are a preventive approach: they help
            address the cumulative effects of daily life before small issues
            become harder to manage. A thorough evaluation of your history and
            current physical state can help catch concerns early and guide a
            plan suited to you.
          </p>
          <p>
            At {site.name}, wellness care is about supporting peak function so
            you can keep doing what matters — not waiting until you feel broken
            to start.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Ready to talk about a wellness care plan? Call our Sturgeon Bay
              office to schedule a consultation with {site.doctor.displayName}{" "}
              and the team.
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
