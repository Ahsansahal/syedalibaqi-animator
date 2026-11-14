import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import WebDevelopmentPortfolio from "@/components/WebDevelopmentPortfolio";
import { PrimaryButton, SectionMarker } from "@/components/ui";
import galleries from "@/data/galleries";
import { buildPageMetadata } from "@/data/seo";
import { home, marquees, site } from "@/data/site";

export const metadata = buildPageMetadata({
  title: `${site.name} | Animation, Motion Design & Custom Website Design & Development`,
  absoluteTitle: true,
  description: `${site.positioningStatement} Explore showreels, motion-driven brand campaigns, and custom websites by ${site.name} in London.`,
  path: "/",
  keywords: [
    "Animation and Motion Design",
    "Motion Designer London",
    "Custom Website Design and Development",
    "Website Designer and Developer",
    "Syed Ali Abdul Baqi",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* Hero – oversized stacked name, bleeding past the 980px grid like the original */}
      <section className="mx-auto max-w-[1440px] px-6 pt-6 md:px-12">
        <Reveal as="h1" className="font-display text-hero uppercase">
          {home.heroLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Reveal>
        <Reveal delay={120} className="mt-8 max-w-[820px]">
          <p className="text-lg leading-[1.45] text-muted md:text-xl">
            {home.positioningStatement}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-xs tracking-wide">
            <Link
              href="/work"
              className="text-paper transition-colors hover:text-accent"
            >
              01 · Animation &amp; Motion Design →
            </Link>
            <Link
              href="/website-design-development"
              className="text-paper transition-colors hover:text-accent"
            >
              02 · Custom Website Design &amp; Development →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Showreel */}
      <section className="mt-12 flex flex-col items-center md:mt-12">
        <SectionMarker label={home.showreel.label} href="#showreel" />
        <Reveal id="showreel" className="mt-24 w-full max-w-[1191px] scroll-mt-32 px-4 md:px-0">
          <VideoPlayer
            src={home.showreel.src}
            poster={home.showreel.poster}
            title={home.showreel.title}
            aspect="1191 / 671"
          />
        </Reveal>
        <Reveal className="mt-36">
          <PrimaryButton href={home.projectsButton.href}>
            {home.projectsButton.label}
          </PrimaryButton>
        </Reveal>
      </section>

      {/* Glimpse gallery (Animation & Creative Portfolio) */}
      <section className="mt-32 flex flex-col items-center">
        <SectionMarker label={home.glimpseLabel} href="#glimpse" />
        <div id="glimpse" className="mx-auto mt-24 w-full max-w-[1611px] scroll-mt-32 px-4 md:px-10">
          <ProGallery
            items={galleries.homeGlimpse}
            layout="masonry"
            columns={3}
            gap={35}
            radius={30}
            showInfo="hover"
          />
        </div>
      </section>

      {/* Connected Custom Website Design & Development + 7-Category Portfolio */}
      <section className="mt-32 flex flex-col items-center">
        <SectionMarker label={home.webPortfolioLabel} href="#web-portfolio" />
        <div
          id="web-portfolio"
          className="mx-auto mt-16 w-full max-w-[1611px] scroll-mt-32 px-4 md:px-10"
        >
          <WebDevelopmentPortfolio showHeading showCapabilities />
        </div>
      </section>

      {/* Scrolling service marquees */}
      <section className="mt-24 space-y-0 pb-32">
        {marquees.map((m) => (
          <Marquee key={m.text} text={m.text} direction={m.direction} />
        ))}
      </section>
    </>
  );
}
