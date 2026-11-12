import PortfolioExplorer from "@/components/PortfolioExplorer";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { portfolioCategories, portfolioProjects } from "@/data/portfolio";
import { projects } from "@/data/site";

export const metadata = {
  title: "Portfolio | Motion Design, Website Design & Full-Stack Development",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Editorial Motion-First Header */}
      <header className="relative mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-12 md:pt-12">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              Motion Designer &amp; Creative Developer
            </Reveal>
            <Reveal
              as="h1"
              delay={60}
              className="mt-3 font-display text-[clamp(2.4rem,6.8vw,92px)] leading-[0.92] tracking-[-0.045em] uppercase"
            >
              {projects.title}
            </Reveal>
            <Reveal
              delay={120}
              className="mt-5 max-w-[680px] text-base leading-relaxed text-muted md:text-lg"
            >
              <p>{projects.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-4">
            <div className="overflow-hidden rounded-[18px] bg-neutral-950 ring-1 ring-white/12">
              <VideoPlayer
                ambient
                src={projects.headerVideo}
                poster={projects.headerImage}
                title="Motion Showreel Preview"
                aspect="16 / 9"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Categorized Portfolio Explorer */}
      <section className="mx-auto max-w-[1440px] px-6 pt-4 pb-24 md:px-12">
        <PortfolioExplorer
          categories={portfolioCategories}
          projects={portfolioProjects}
          syncUrl
        />
      </section>
    </>
  );
}
