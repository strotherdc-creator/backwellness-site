import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointment",
  description: `Call ${site.phone} to book an appointment at ${site.name} in Sturgeon Bay, WI.`,
};

export default function AppointmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Schedule</span>
          <h1>Book an appointment</h1>
          <p className="muted prose">
            Appointments are scheduled by phone. There is no online booking form
            on this site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>Call to book</h2>
            <p>
              Reach our front desk to find a time that works for you. Ashley and
              Alex can help with scheduling questions.
            </p>
            <a
              className="btn btn-gold"
              href={`tel:${site.phoneTel}`}
              style={{ marginTop: "0.5rem" }}
            >
              Call {site.phone}
            </a>
            <p className="muted" style={{ marginTop: "1.25rem", marginBottom: 0 }}>
              Prefer email-style contact details? See our{" "}
              <Link href="/contact">contact page</Link> for address, fax, and
              hours.
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
