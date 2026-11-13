import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SkillsShowcase from "@/components/SkillsShowcase";
import VideoPlayer from "@/components/VideoPlayer";
import { CvButton } from "@/components/ui";
import { about, marquees, site, skillsHierarchy, workflow } from "@/data/site";

export const metadata = {
  title: "About | Visual Artist, Motion Designer & Web Developer",
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial Profile Hero */}
      <section className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-6 sm:pt-10 md:px-12">
        <p className="font-display text-xs tracking-[0.22em] text-accent uppercase sm:tracking-[0.26em]">
          {about.eyebrow}
        </p>
        <h1 className="mt-3 max-w-[1080px] font-display text-[clamp(1.85rem,5.6vw,76px)] leading-[0.98] tracking-[-0.04em] sm:mt-4 sm:leading-[0.96]">
          {about.headline}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-white/12 pt-8 sm:mt-10 sm:gap-10 sm:pt-10 lg:grid-cols-12">
          <div className="min-w-0 space-y-5 text-base leading-relaxed text-muted sm:text-lg md:text-xl lg:col-span-8">
            {about.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div>
                <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                  Industries
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full bg-white/[0.04] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                  International Markets
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {about.markets.map((mkt) => (
                    <span
                      key={mkt}
                      className="rounded-full bg-white/[0.04] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                    >
                      {mkt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                Tools, Platforms &amp; Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {about.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white/[0.04] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-between rounded-[20px] bg-neutral-950/90 p-6 ring-1 ring-white/12 sm:rounded-[22px] sm:p-7 lg:col-span-4">
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                Direct Contact
              </p>
              <p className="mt-2 text-sm text-paper/80">{site.location}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block break-all font-display text-sm text-paper transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              {site.phones[0] && (
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="mt-2 block text-base text-muted transition-colors hover:text-accent"
                >
                  {site.phones[0].label}
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              <Link
                href="/projects"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-5 py-2.5 font-display text-xs tracking-[0.14em] text-ink uppercase transition-colors hover:bg-paper"
              >
                Explore Work →
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/25 px-5 py-2.5 font-display text-xs tracking-[0.14em] text-paper uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Skills Hierarchy */}
      <SkillsShowcase data={skillsHierarchy} />

      {/* Workflow */}
      <section className="mx-auto mt-20 max-w-[1440px] px-4 sm:mt-28 sm:px-6 md:px-12">
        <Reveal className="max-w-[680px]">
          <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
            Workflow
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-[-0.03em] sm:text-3xl md:text-4xl">
            From Visual Concept to Motion &amp; Live Web Build
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {workflow.map((w, idx) => (
            <Reveal
              key={w.step}
              delay={idx * 70}
              className="rounded-[20px] bg-neutral-950/85 p-6 ring-1 ring-white/10"
            >
              <span className="font-display text-xs text-accent">{w.step}</span>
              <h3 className="mt-5 font-display text-lg leading-snug">{w.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{w.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto mt-20 max-w-[1160px] px-4 text-center sm:mt-28 sm:px-6 md:px-12">
        <Reveal
          as="blockquote"
          className="font-display text-[clamp(1.4rem,4.2vw,50px)] leading-[1.15] tracking-[-0.03em] sm:leading-[1.1]"
        >
          {about.quote}
        </Reveal>
        <Reveal delay={100} className="mt-5 font-display text-sm text-accent md:text-base">
          {about.author}
        </Reveal>
      </section>

      {/* Featured Reel */}
      <section className="mx-auto mt-16 max-w-[1240px] px-4 text-center sm:mt-24 sm:px-6 md:px-12">
        <Reveal as="h2" className="font-display text-xl sm:text-2xl md:text-4xl">
          {about.reelHeading}
        </Reveal>
        <Reveal className="mt-6 overflow-hidden rounded-[18px] ring-1 ring-white/12 sm:mt-8 sm:rounded-[22px]">
          <VideoPlayer
            src={about.storyVideo.src}
            poster={about.storyVideo.poster}
            title={about.reelHeading}
            aspect="16 / 9"
          />
        </Reveal>
      </section>

      {site.cvUrl && (
        <section className="pt-16 text-center">
          <CvButton href={site.cvUrl} />
        </section>
      )}

      <section className="mt-24 pb-16">
        {marquees.map((m) => (
          <Marquee key={m.text} text={m.text} direction={m.direction} />
        ))}
      </section>
    </>
  );
}
