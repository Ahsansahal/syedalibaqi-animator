import { Barlow, Unbounded } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getRootGraphSchema } from "@/data/seo";
import { site } from "@/data/site";
import "./globals.css";

// Barlow (ExtraLight) is the body font on the original site. Headings use the
// commercial "Benzin" font; Unbounded is a close free substitute.
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-barlow",
});
const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Animation, Motion Design & Custom Website Design & Development`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} — London-based Motion Designer & Website Designer-Developer. ${site.positioningStatement}`,
  openGraph: {
    siteName: site.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: site.defaultOgImage,
        alt: `${site.name} — Animation, Motion Design & Custom Website Design & Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [site.defaultOgImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${barlow.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={getRootGraphSchema()} />
        <Header />
        <main className="flex-1 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
