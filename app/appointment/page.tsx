import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointment",
  description: `Request an appointment with ${site.doctor.displayName} at ${site.name}. Call ${site.phone} to schedule in Sturgeon Bay, WI.`,
};

export default function AppointmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Schedule</span>
          <h1>Request an Appointment</h1>
          <p className="muted prose">
            Ready to move better? Appointments are scheduled by phone. There is
            no online booking form on this site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>Call to book</h2>
            <p>
              Reach our front desk to find a time that works for you. Ashley and
              Alex can help with scheduling questions for new and returning
              patients.
            </p>
            <div className="btn-row" style={{ marginTop: "0.5rem" }}>
              <a className="btn btn-gold" href={`tel:${site.phoneTel}`}>
                Call {site.phone}
              </a>
              <Link className="btn btn-outline" href="/contact">
                Contact & hours
              </Link>
            </div>
            <p className="muted" style={{ marginTop: "1.25rem", marginBottom: 0 }}>
              Prefer details first? See our{" "}
              <Link href="/patients">patients page</Link> for what to expect on
              a first visit.
            </p>
          </article>

          <article className="card">
            <h2>Office hours</h2>
            <table className="hours-table">
              <tbody>
                {site.hours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>
      </section>
    </>
  );
}
