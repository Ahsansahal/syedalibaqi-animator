import Link from "next/link";
import HomePortfolioSections from "@/components/HomePortfolioSections";
import Marquee from "@/components/Marquee";
import MotionHero from "@/components/MotionHero";
import PortfolioExplorer from "@/components/PortfolioExplorer";
import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import SkillsShowcase from "@/components/SkillsShowcase";
import galleries from "@/data/galleries";
import { portfolioCategories, portfolioProjects } from "@/data/portfolio";
import {
  about,
  contact,
  home,
  marquees,
  site,
  skillsHierarchy,
  workflow,
} from "@/data/site";

export default function HomePage() {
  const primaryPhone = site.phones[0];

  return (
    <>
      {/* 01. Hero / Visual Artist + Motion + Web Designer & Developer + Showreel */}
      <MotionHero data={home} />

      {/* 02. Signature Visual Artist & Web Creator Statement (Directly Below Hero) */}
      <section
        id="artist-statement"
        className="mx-auto mt-14 max-w-[1160px] px-4 text-center sm:mt-20 sm:px-6 md:mt-28 md:px-12"
      >
        <Reveal className="space-y-6 font-display text-[clamp(0.98rem,1.9vw,24px)] leading-[1.68] font-normal tracking-[-0.015em] text-paper/95 sm:space-y-8">
          {home.artistStatement.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </Reveal>

        <Reveal delay={100} className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-2.5">
          {about.markets.map((mkt) => (
            <span
              key={mkt}
              className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-accent/95 ring-1 ring-white/12 sm:px-3.5"
            >
              {mkt}
            </span>
          ))}
        </Reveal>
      </section>

      {/* 03. Full 41-Work Portfolio Showcase Directly on the Home Page */}
      <section
        id="portfolio"
        className="mx-auto mt-16 max-w-[1440px] scroll-mt-24 px-4 sm:mt-24 sm:scroll-mt-28 sm:px-6 md:mt-32 md:px-12"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/12 pb-6 sm:mb-10 sm:gap-6 sm:pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              Selected Portfolio · {portfolioProjects.length} Curated Works
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4.6vw,60px)] leading-[0.98] tracking-[-0.04em]">
              Visual Art, Motion, Web Design &amp; Builds
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.16em] text-paper/85 uppercase transition-colors hover:text-accent"
          >
            <span>Dedicated Portfolio Page</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <PortfolioExplorer
          categories={portfolioCategories}
          projects={portfolioProjects}
        />
      </section>

      {/* 03. Visual Art, Packaging, OOH & Campaign Glimpse Wall */}
      <section
        id="visual-wall"
        className="mx-auto mt-20 max-w-[1440px] scroll-mt-24 px-4 sm:mt-28 sm:scroll-mt-28 sm:px-6 md:mt-36 md:px-12"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/12 pb-6 sm:mb-12 sm:gap-6 sm:pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              Visual Artist Gallery · Brand, OOH &amp; Campaign Craft
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4.2vw,54px)] leading-[0.98] tracking-[-0.04em]">
              Selected Visuals &amp; Brand Touchpoints
            </h2>
          </div>

          <Link
            href="/projects?category=visual-art"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.16em] text-paper/85 uppercase transition-colors hover:text-accent"
          >
            <span>Explore Visual Art &amp; Branding</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ProGallery
          items={galleries.homeGlimpse}
          layout="masonry"
          columns={4}
          gap={20}
          radius={16}
          showInfo="hover"
        />
      </section>

      {/* 04. Dedicated Website Development by Platform (5 Independent Tabs) */}
      <HomePortfolioSections
        categories={portfolioCategories}
        projects={portfolioProjects}
      />

      {/* 05. Multidisciplinary Craft & Skills */}
      <SkillsShowcase data={skillsHierarchy} />

      {/* 06. Multidisciplinary Story, Industries, International Markets & Workflow */}
      <section
        id="about-workflow"
        className="mx-auto mt-20 max-w-[1440px] scroll-mt-24 px-4 sm:mt-28 sm:scroll-mt-28 sm:px-6 md:mt-36 md:px-12"
      >
        <div className="grid grid-cols-1 gap-10 border-t border-white/12 pt-12 sm:gap-12 sm:pt-16 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              {about.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,4vw,50px)] leading-[1.04] tracking-[-0.04em]">
              {about.headline}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
              {about.bio.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Industries & International Markets from Visual Artist Profile */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div>
                <p className="font-display text-[11px] tracking-[0.2em] text-accent uppercase">
                  Industries
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-paper/85 ring-1 ring-white/10"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-display text-[11px] tracking-[0.2em] text-accent uppercase">
                  International Markets
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.markets.map((mkt) => (
                    <span
                      key={mkt}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-paper/85 ring-1 ring-white/10"
                    >
                      {mkt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5">
            {workflow.map((w, idx) => (
              <Reveal
                key={w.step}
                delay={idx * 70}
                className="flex flex-col justify-between rounded-[20px] bg-neutral-950/85 p-6 ring-1 ring-white/10"
              >
                <span className="font-display text-xs text-accent">{w.step}</span>
                <div className="mt-6">
                  <h3 className="font-display text-base tracking-[-0.02em] text-paper">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kinetic Marquees */}
      <section className="mt-16 space-y-0 sm:mt-24">
        {marquees.map((m) => (
          <Marquee key={m.text} text={m.text} direction={m.direction} />
        ))}
      </section>

      {/* 07. Contact / Let's Work Together */}
      <section
        id="contact-cta"
        className="mx-auto mt-16 max-w-[1440px] px-4 pb-10 sm:mt-24 sm:px-6 sm:pb-12 md:mt-32 md:px-12"
      >
        <Reveal className="overflow-hidden rounded-[20px] bg-neutral-950/90 p-6 ring-1 ring-white/12 sm:rounded-[26px] sm:p-8 md:p-14">
          <div className="grid grid-cols-1 items-end gap-8 sm:gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
                Let&apos;s Work Together
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.7rem,5vw,64px)] leading-[0.98] tracking-[-0.04em] sm:mt-4">
                {contact.taglineTop}{" "}
                <span className="text-accent">{contact.taglineBottom}</span>
              </h2>
              <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-muted sm:text-base md:text-lg">
                {contact.summary}
              </p>
            </div>

            <div className="flex min-w-0 flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-display text-xs tracking-[0.14em] whitespace-nowrap text-ink uppercase transition-colors hover:bg-paper sm:flex-initial sm:px-7 sm:py-4"
                >
                  <span>Get in Touch</span>
                  <span aria-hidden="true">↗</span>
                </Link>
                {primaryPhone?.whatsapp && (
                  <a
                    href={`https://wa.me/${primaryPhone.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-display text-xs tracking-[0.14em] whitespace-nowrap text-paper uppercase transition-colors hover:border-[#25D366] hover:text-[#25D366] sm:flex-initial sm:py-4"
                  >
                    WhatsApp
                  </a>
                )}
              </div>

              <div className="flex flex-col gap-1 text-sm text-muted lg:text-right">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-display text-xs tracking-wide text-paper/90 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                {primaryPhone && (
                  <a
                    href={`tel:${primaryPhone.tel}`}
                    className="transition-colors hover:text-accent"
                  >
                    {primaryPhone.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
