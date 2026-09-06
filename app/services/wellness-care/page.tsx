import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wellness Care",
  description:
    "Ongoing chiropractic wellness care in Sturgeon Bay, WI — supportive visits to help you stay mobile, comfortable, and active with Dr. Luke.",
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
            Many people wait until pain shows up before seeking care. Wellness
            visits focus on keeping you moving — so desk work, hobbies, and
            Door County life stay within reach.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>How daily life adds up</h2>
          <p>
            Everyday choices — posture, desk work, lifting, and stress — can
            create quiet strain on the spine and joints long before obvious
            symptoms appear. Hours at a computer or chronically tensed shoulders
            can affect how your neck and back feel over time.
          </p>
          <p>
            A little attention early can help keep small habits from turning
            into larger limits on what you can do.
          </p>

          <h2>Why wellness visits matter</h2>
          <p>
            Wellness care is about supporting how you move and feel day to day —
            not waiting until you feel broken to start. Regular, gentle
            chiropractic visits can help you maintain mobility and catch
            concerns earlier, as part of a plan that fits your goals.
          </p>
          <p>
            Individual experiences vary. There are no guarantees. Your doctor
            will help decide whether a maintenance schedule makes sense after
            evaluation.
          </p>

          <h2>Chiropractic as part of a wellness plan</h2>
          <p>
            At {site.name}, wellness care starts with listening and a clear
            evaluation. From there, {site.doctor.displayName} explains options
            in plain language — and you decide what feels right for your life.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Ready to talk about a wellness care plan? Request an appointment
              with {site.doctor.displayName} and the Sturgeon Bay team.
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
