import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nutrition",
  description:
    "Nutrition guidance in Sturgeon Bay, WI at Staudenmaier Chiropractic Wellness Center, SC — educational support for carbs, fiber, and healthy food choices as part of wellness care.",
};

const organicSources = [
  "Whole grains",
  "Vegetables",
  "Fruits",
  "Nuts",
];

const dietTips = [
  {
    title: "Legumes",
    text: "Beans and related legumes are budget-friendly building blocks that support a well-rounded diet.",
  },
  {
    title: "Fresh, fiber-rich produce",
    text: "Choose fresh vegetables and fruits when you can. Fiber-rich foods support everyday digestive comfort as part of a balanced plate.",
  },
  {
    title: "Low-fat dairy options",
    text: "Dairy can supply calcium and other nutrients. Lower-fat choices help many people fit dairy into a healthier overall pattern.",
  },
  {
    title: "Whole grains over refined",
    text: "Prefer whole grains to refined versions when practical — they tend to retain more of the nutrients found in the original grain.",
  },
  {
    title: "Limit added sugars",
    text: "Added sugars in sodas, pastries, and sweets offer little beyond empty calories. Aim to keep them as occasional treats rather than daily staples.",
  },
];

export default function NutritionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Wellness support</span>
          <h1>Nutrition Guidance in Sturgeon Bay</h1>
          <p className="muted prose">
            Carbohydrates, protein, and fat are all part of a healthy diet. The
            real challenge is reading labels and choosing carbs that support
            your goals — not cutting them out entirely. At {site.name}, we can
            help you think through practical nutrition steps alongside your
            care plan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Carbohydrates in everyday food</h2>
          <p>
            Much of the nourishment in meals comes from carbohydrates — a
            macronutrient alongside protein and fat. Carbs are common in
            plant-based foods, and they also appear heavily in refined products
            that rely on starches and sugars. Organic sources include:
          </p>
          <ul>
            {organicSources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Three kinds of carbohydrates</h2>
          <h3>Fiber</h3>
          <p>
            Fiber comes from chains of sugar molecules and includes both
            soluble and insoluble types. Helpful sources include lentils,
            almonds, peas, broccoli, and many other plant foods.
          </p>
          <h3>Sugars</h3>
          <p>
            Sugars fall into two broad groups: organic sugars found naturally
            in fruit, and added sugars in sodas, pastries, and sweets. Natural
            sugars often arrive with other nutrients; added sugars mainly
            supply energy with little else. Everyday foods such as carrots,
            bananas, and pineapples are examples of sources the body has long
            used for energy.
          </p>
          <h3>Starch</h3>
          <p>
            Starch also forms from chained sugar molecules. Natural sources
            include many vegetables and grains.
          </p>

          <h2>Glycemic index — a practical lens</h2>
          <p>
            The glycemic index ranks carbohydrate-containing foods by how they
            may affect blood sugar. Fruits, vegetables, and whole grains
            generally score well. White bread and white rice tend to score
            higher, so moderation is a useful default — not a total ban.
          </p>
          <p>
            Labels can be confusing. Claims such as &ldquo;healthy carbs&rdquo;
            or vague &ldquo;low fat&rdquo; wording are not tightly regulated by
            the FDA in the way many people assume, so it helps to look past
            marketing language and focus on whole-food ingredients.
          </p>

          <h2>Building a healthier plate</h2>
          <p>
            A healthy diet brings nutrients together — which starts with
            choosing foods that fit your goals. Practical places to start:
          </p>
          <div className="grid-3" style={{ marginTop: "1rem" }}>
            {dietTips.map((tip) => (
              <article className="card" key={tip.title}>
                <h3>{tip.title}</h3>
                <p className="muted">{tip.text}</p>
              </article>
            ))}
          </div>

          <h2>How we can help</h2>
          <p>
            Navigating food and nutrition can feel overwhelming. Watching
            sugars, grains, and fats is a solid start. If you want support
            reaching nutrition goals as part of wellness care, our team in
            Sturgeon Bay is ready to talk through next steps after we understand
            your situation.
          </p>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Nutrition guidance here is educational and individualized. Request
              an appointment to discuss whether nutrition support fits your care
              plan.
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
