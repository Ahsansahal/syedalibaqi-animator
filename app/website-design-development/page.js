import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import WebDevelopmentPortfolio from "@/components/WebDevelopmentPortfolio";
import { PrimaryButton } from "@/components/ui";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
  getServicePageSchema,
} from "@/data/seo";
import { site, websiteServices } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "Custom Website Design & Development",
  description:
    "Custom website design and full-stack website development by Syed Ali Abdul Baqi in London — responsive business websites, creative landing pages, and custom builds across WordPress, Shopify, React.js, Next.js, and Laravel.",
  path: "/website-design-development",
  image: "/images/2520e1_df45268cd7af4af0ba0f16b493d144b1_mv2.png",
  keywords: [
    "Custom Website Design",
    "Custom Website Development",
    "Website Designer and Developer",
    "Custom Business Website Development",
    "Responsive Website Design",
  ],
});

export default function WebsiteDesignDevelopmentPage() {
  const serviceSchema = getServicePageSchema({
    name: "Custom Website Design & Development",
    description: websiteServices.lead,
    path: "/website-design-development",
    capabilities: [
      ...websiteServices.designGroup.items,
      websiteServices.developmentGroup.customDevelopment.label,
      ...websiteServices.developmentGroup.customDevelopment.frameworks.map((f) => f.label),
      ...websiteServices.developmentGroup.platforms.map((t) => t.label),
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Custom Website Design & Development",
      path: "/website-design-development",
    },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Page Hero */}
      <section className="mx-auto max-w-[1120px] px-6 pt-16 pb-16 text-center">
        <Reveal>
          <p className="font-display text-xs tracking-widest text-accent uppercase">
            Connected Design &amp; Full-Stack Engineering
          </p>
        </Reveal>
        <Reveal as="h1" className="mt-5 font-display text-page-title">
          <span className="block">Custom Website</span>
          <span className="block">Design &amp; Development</span>
        </Reveal>
        <Reveal
          delay={120}
          className="mx-auto mt-10 max-w-[820px] space-y-4 text-lg leading-[1.5] text-muted md:text-xl"
        >
          <p>{websiteServices.lead}</p>
          <p className="text-paper/90">{site.positioningStatement}</p>
        </Reveal>
      </section>

      {/* 1. Custom Website Design + 2. Website Development Technologies */}
      <section
        id="technologies"
        className="mx-auto max-w-[1360px] scroll-mt-32 px-6 pb-20 md:px-10"
      >
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-12">
          {/* 1. Custom Website Design */}
          <Reveal className="flex flex-col justify-between rounded-[26px] border border-line bg-ink p-8 md:p-10 lg:col-span-5">
            <div>
              <p className="font-display text-[11px] tracking-wide text-accent uppercase">
                Visual Craft &amp; Responsive Structure
              </p>
              <h2 className="mt-3 font-display text-2xl text-paper md:text-3xl">
                {websiteServices.designGroup.heading}
              </h2>
              <p className="mt-4 text-base leading-[1.5] text-muted md:text-lg">
                {websiteServices.designGroup.summary}
              </p>
              <ul className="mt-7 space-y-3">
                {websiteServices.designGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-paper md:text-lg"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-line/70 pt-5">
              <Link
                href={websiteServices.designGroup.href}
                className="font-display text-xs text-paper transition-colors hover:text-accent"
              >
                Explore Custom Website Design Portfolio →
              </Link>
            </div>
          </Reveal>

          {/* 2. Website Development (Custom Website Development w/ React.js, Next.js & Laravel + WordPress & Shopify) */}
          <Reveal
            delay={100}
            className="rounded-[26px] border border-line bg-ink p-8 md:p-10 lg:col-span-7"
          >
            <p className="font-display text-[11px] tracking-wide text-accent uppercase">
              Custom Code &amp; Dedicated Platforms
            </p>
            <h2 className="mt-3 font-display text-2xl text-paper md:text-3xl">
              {websiteServices.developmentGroup.heading}
            </h2>
            <p className="mt-4 text-base leading-[1.5] text-muted md:text-lg">
              {websiteServices.developmentGroup.summary}
            </p>

            {/* Custom Website Development — including React.js, Next.js & Laravel */}
            <div className="mt-7 rounded-[22px] border border-line p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg text-paper md:text-xl">
                  <Link
                    href={websiteServices.developmentGroup.customDevelopment.href}
                    className="transition-colors hover:text-accent"
                  >
                    {websiteServices.developmentGroup.customDevelopment.label} →
                  </Link>
                </h3>
                <span className="font-display text-[11px] tracking-wide text-accent uppercase">
                  Custom-Coded Builds
                </span>
              </div>
              <p className="mt-2 text-sm leading-[1.5] text-muted md:text-base">
                {websiteServices.developmentGroup.customDevelopment.detail}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {websiteServices.developmentGroup.customDevelopment.frameworks.map((fw) => (
                  <Link
                    key={fw.href}
                    href={fw.href}
                    className="group flex flex-col justify-between rounded-[18px] border border-line p-4 transition-colors duration-200 hover:border-accent"
                  >
                    <div>
                      <h4 className="font-display text-sm text-paper transition-colors group-hover:text-accent">
                        {fw.shortLabel}
                      </h4>
                      <p className="mt-2 text-xs leading-[1.45] text-muted">
                        {fw.detail}
                      </p>
                    </div>
                    <span className="mt-4 font-display text-[11px] text-accent">
                      View {fw.shortLabel} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dedicated CMS & E-Commerce Platforms (WordPress & Shopify) */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {websiteServices.developmentGroup.platforms.map((tech) => (
                <Link
                  key={tech.href}
                  href={tech.href}
                  className="group flex flex-col justify-between rounded-[20px] border border-line p-5 transition-colors duration-200 hover:border-accent"
                >
                  <div>
                    <h3 className="font-display text-base text-paper transition-colors group-hover:text-accent">
                      {tech.label}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.45] text-muted">
                      {tech.detail}
                    </p>
                  </div>
                  <span className="mt-4 font-display text-[11px] text-accent">
                    View {tech.shortLabel} Work →
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="mx-auto max-w-[1611px] border-t border-line px-6 pt-20 pb-20 md:px-10">
        <Reveal className="mx-auto max-w-[980px] text-center">
          <h2 className="font-display text-3xl leading-[0.95] tracking-[-0.04em] md:text-[48px]">
            Selected Portfolio by Category &amp; Platform
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-lg leading-[1.45] text-muted">
            Browse real project examples across Animation &amp; Motion Design, Custom Website Design &amp; Development (including React.js, Next.js, and Laravel), WordPress, and Shopify.
          </p>
        </Reveal>
        <WebDevelopmentPortfolio showHeading={false} />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[980px] border-t border-line px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-2xl md:text-4xl">
            Planning a Custom Website or Motion-Driven Experience?
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-lg text-muted">
            Share your goals and requirements to discuss the right design direction and development stack for your project.
          </p>
          <div className="mt-10">
            <PrimaryButton href="/contact">Discuss Your Project</PrimaryButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
