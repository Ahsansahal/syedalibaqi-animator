import PortfolioExplorer from "@/components/PortfolioExplorer";
import VideoPlayer from "@/components/VideoPlayer";
import { portfolioCategories, portfolioProjects } from "@/data/portfolio";
import { projects } from "@/data/site";

export const metadata = {
  title: "Portfolio | Visual Art, Motion Design, Website Design & Development",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Editorial Header — SSR visible immediately for fast FCP/LCP */}
      <header className="relative mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-12 md:pt-12">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              Visual Artist · Motion Designer · Website Designer &amp; Developer
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,6.8vw,92px)] leading-[0.92] tracking-[-0.045em] uppercase">
              {projects.title}
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-relaxed text-muted md:text-lg">
              {projects.intro}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-[18px] bg-neutral-950 ring-1 ring-white/12">
              <VideoPlayer
                ambient
                priority
                sizes="(min-width: 1024px) 32vw, 100vw"
                src={projects.headerVideo}
                poster={projects.headerImage}
                title="Motion Showreel Preview"
                aspect="16 / 9"
              />
            </div>
          </div>
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
