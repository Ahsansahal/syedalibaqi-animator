import { Barlow, Unbounded } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

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
  title: {
    default: `${site.name} | Visual Artist, Motion Designer & Web Developer`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} — Multidisciplinary Visual Artist, Motion Designer, Website Designer & Full-Stack Developer in London specializing in visual storytelling, brand campaigns, GSAP animations, UI/UX website design, and WordPress, Shopify, React.js, Next.js & Laravel development.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
