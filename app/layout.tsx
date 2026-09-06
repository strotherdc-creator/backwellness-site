import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const defaultTitle = `${site.name} | Sturgeon Bay Chiropractor`;
const defaultDescription =
  "Move Better. Live Better. Hometown chiropractic care in Sturgeon Bay and Door County with Dr. Luke Staudenmaier — personalized, gentle care since 1994. Serving Door County communities within about a 40-minute drive.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${site.shortName}`,
  },
  description: defaultDescription,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Luke Staudenmaier — Staudenmaier Chiropractic Wellness Center. Move Better. Live Better.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/og-default.jpg"],
  },
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
