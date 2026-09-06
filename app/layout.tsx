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
    "Move Better. Live Better. Hometown chiropractic care in Sturgeon Bay and Door County with Dr. Luke Staudenmaier — personalized, gentle care since 1994. Serving Door County communities within about a 40-minute drive.",
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
