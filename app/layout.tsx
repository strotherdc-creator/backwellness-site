import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Sturgeon Bay Chiropractor`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Staudenmaier Chiropractic Wellness Center in Sturgeon Bay, WI — chiropractic care for muscle strain, neck pain, chronic back pain, migraines, and more. Get your lifestyle back.",
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
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
