import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Detoxification",
  description:
    "Supportive detoxification approaches as part of wellness care at Staudenmaier Chiropractic Wellness Center, SC in Sturgeon Bay, WI. Discuss options with our team.",
};

export default function DetoxificationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Wellness support</span>
          <h1>Detoxification Support in Sturgeon Bay</h1>
          <p className="muted prose">
            Many people ask about detoxification as part of a broader wellness
            plan. At {site.name}, we discuss supportive approaches when they
            fit your situation — always with an educational, individualized
            focus rather than one-size-fits-all promises.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>A careful approach to &ldquo;detox&rdquo;</h2>
          <p>
            Your body already has built-in systems — including the liver,
            kidneys, digestive tract, and skin — that process and eliminate
            waste. Lifestyle factors such as diet, hydration, sleep, movement,
            and stress can influence how well you feel day to day. In a
            chiropractic wellness context, &ldquo;detoxification&rdquo; usually
            means supportive habits and, when appropriate, clinic-guided
            programs that aim to complement those natural processes — not replace
            medical care or claim to cure disease.
          </p>
          <p>
            We avoid extreme detox language. There is no universal cleanse that
            is right for everyone, and aggressive protocols can be
            inappropriate or uncomfortable for some people. Any recommendation
            starts with understanding your history and goals.
          </p>

          <h2>How this may fit with wellness care</h2>
          <p>
            Supportive detoxification conversations often sit alongside
            nutrition guidance, chiropractic wellness visits, and other services
            when they make sense for you. Topics we may cover include fiber-rich
            eating patterns, hydration, digestive comfort, and whether a
            short-term, clinic-recommended maintenance system is appropriate
            after evaluation.
          </p>
          <p>
            When a structured option is discussed, it is presented as a wellness
            tool for digestive and lifestyle support — not as a treatment for
            medical conditions. Suitability depends on your health status,
            medications, and what our examination and conversation reveal.
          </p>

          <h2>What to expect if you ask about detox</h2>
          <p>
            Plan on a conversation first. We will listen to your goals, review
            relevant history, and explain options in plain language — including
            when a referral to another provider is the better next step. You
            should leave with a clearer sense of whether a supportive approach
            belongs in your plan, and what realistic expectations look like.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Interested in discussing detoxification as part of wellness care?
              Request an appointment to talk with the team. Recommendations are
              individualized and educational — not medical guarantees.
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
