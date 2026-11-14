import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { CvButton } from "@/components/ui";
import { buildPageMetadata, getBreadcrumbSchema } from "@/data/seo";
import { about, marquees, site, websiteServices } from "@/data/site";

export const metadata = buildPageMetadata({
  title: "About Syed Ali Abdul Baqi — Motion Designer & Website Designer-Developer",
  description: `${about.positioningStatement} Learn about ${site.name}'s background in animation, motion design, and full-stack custom website development in London.`,
  path: "/about",
  image: about.storyVideo.poster,
  keywords: [
    "Website Designer and Developer",
    "Motion Designer London",
    "Custom Website Design and Development",
    "Full-Stack Website Developer London",
    "Syed Ali Abdul Baqi",
  ],
  type: "profile",
});

export default function AboutPage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${site.url}/about`,
    name: `About ${site.name}`,
    description: about.positioningStatement,
    mainEntity: { "@id": `${site.url}/#person` },
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Ali", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={profileSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="mx-auto max-w-[1116px] px-6 pt-10">
        <Reveal
          as="blockquote"
          className="font-display text-[clamp(3rem,12vw,150px)] leading-[0.8] tracking-[-0.03em]"
        >
          {about.quote}
        </Reveal>
        <Reveal delay={150} className="mt-6 text-right font-display text-xl md:text-[30px]">
          {about.author}
        </Reveal>
      </section>

      <section className="mt-12 text-center">
        <Reveal as="h1" className="font-display text-5xl md:text-[83px]">
          {about.storyHeading}
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-[1239px] px-4">
          <VideoPlayer
            ambient
            src={about.storyVideo.src}
            poster={about.storyVideo.poster}
            title={about.storyHeading}
            aspect="1239 / 552"
          />
        </Reveal>
      </section>

      {/* Positioning Statement & Story */}
      <section className="mx-auto mt-20 max-w-[980px] px-6">
        <Reveal className="text-center">
          <p className="font-display text-xl leading-[1.35] text-paper md:text-2xl">
            {about.positioningStatement}
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-[820px] space-y-6 text-center text-lg leading-[1.5] text-muted md:text-xl">
          {about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      {/* Three Professional Priorities + Website Development Technologies */}
      <section className="mx-auto mt-24 max-w-[1280px] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl md:text-4xl">
            Specializations &amp; Capabilities
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {about.specializations.map((spec, idx) => (
            <Reveal
              key={spec.order}
              delay={idx * 80}
              className="flex flex-col justify-between rounded-[26px] border border-line bg-ink p-8 md:p-9"
            >
              <div>
                <p className="font-display text-[11px] tracking-wide text-accent uppercase">
                  {spec.order} · {spec.tag}
                </p>
                <h3 className="mt-3 font-display text-lg leading-snug break-words text-paper md:text-xl">
                  {spec.title}
                </h3>
                <p className="mt-4 text-base leading-[1.5] text-muted">
                  {spec.description}
                </p>
                {spec.frameworks?.length > 0 && (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {spec.frameworks.map((fw) => (
                      <Link
                        key={fw.href}
                        href={fw.href}
                        className="border border-line px-3 py-1 font-display text-[11px] text-paper transition-colors hover:border-accent hover:text-accent"
                      >
                        {fw.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-8 border-t border-line/70 pt-5">
                <Link
                  href={spec.href}
                  className="inline-block font-display text-xs text-paper transition-colors hover:text-accent"
                >
                  {spec.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Direct Links to Development Technologies */}
        <Reveal className="mt-10 rounded-[26px] border border-line bg-ink p-8 text-center md:p-10">
          <h3 className="font-display text-lg text-paper md:text-xl">
            Website Development Technologies
          </h3>
          <p className="mx-auto mt-3 max-w-[720px] text-base leading-[1.5] text-muted md:text-lg">
            Custom-coded websites (including React.js, Next.js, and Laravel) alongside dedicated CMS and e-commerce platforms:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 text-left lg:grid-cols-12">
            {/* Custom Website Development (including React.js, Next.js & Laravel) */}
            <div className="flex flex-col justify-between rounded-[20px] border border-line p-6 md:p-7 lg:col-span-7">
              <div>
                <p className="font-display text-[11px] tracking-wide text-accent uppercase">
                  Custom-Coded Frontend &amp; Full-Stack
                </p>
                <h4 className="mt-2 font-display text-base text-paper md:text-lg">
                  <Link
                    href={websiteServices.developmentGroup.customDevelopment.href}
                    className="transition-colors hover:text-accent"
                  >
                    {websiteServices.developmentGroup.customDevelopment.label} →
                  </Link>
                </h4>
                <p className="mt-2 text-sm leading-[1.5] text-muted md:text-base">
                  {websiteServices.developmentGroup.customDevelopment.detail}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line/70 pt-4">
                {websiteServices.developmentGroup.customDevelopment.frameworks.map((fw) => (
                  <Link
                    key={fw.href}
                    href={fw.href}
                    className="border border-line px-4 py-2 font-display text-xs text-paper transition-colors hover:border-accent hover:text-accent"
                  >
                    {fw.shortLabel} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Dedicated CMS & E-Commerce Platforms */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {websiteServices.developmentGroup.platforms.map((platform) => (
                <Link
                  key={platform.href}
                  href={platform.href}
                  className="group flex flex-col justify-between rounded-[20px] border border-line p-6 transition-colors hover:border-accent"
                >
                  <div>
                    <p className="font-display text-[11px] tracking-wide text-accent uppercase">
                      Platform Development
                    </p>
                    <h4 className="mt-2 font-display text-base text-paper transition-colors group-hover:text-accent">
                      {platform.label} →
                    </h4>
                    <p className="mt-2 text-sm leading-[1.45] text-muted">
                      {platform.detail}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-20 text-center">
        <CvButton href={site.cvUrl} />
      </section>

      <section className="pb-24">
        {marquees.map((m) => (
          <Marquee key={m.text} text={m.text} direction={m.direction} />
        ))}
      </section>
    </>
  );
}
