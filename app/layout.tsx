import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Sturgeon Bay Chiropractor`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Door County chiropractor in Sturgeon Bay, WI — Staudenmaier Chiropractic Wellness Center offers chiropractic care for muscle strain, neck pain, chronic back pain, migraines, and more. Serving Door County communities within about a 40-minute drive. Get your lifestyle back.",
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessJsonLd />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
