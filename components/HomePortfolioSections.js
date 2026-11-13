"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

const DEV_TAB_IDS = ["wordpress", "shopify", "reactjs", "nextjs", "laravel"];

export default function HomePortfolioSections({ categories, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDevTab, setActiveDevTab] = useState("wordpress");
  const devPanelRef = useRef(null);
  const mountedRef = useRef(false);

  const devTabs = useMemo(
    () =>
      DEV_TAB_IDS.map((id) => categories.find((c) => c.id === id)).filter(Boolean),
    [categories]
  );

  const activeDevMeta = useMemo(
    () => devTabs.find((c) => c.id === activeDevTab) ?? devTabs[0],
    [devTabs, activeDevTab]
  );

  const activeDevProjects = useMemo(
    () => projects.filter((p) => p.category === activeDevTab),
    [projects, activeDevTab]
  );

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const el = devPanelRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.fromTo(
      el,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [activeDevTab]);

  return (
    <>
      <section
        id="development-portfolio"
        className="mx-auto mt-20 max-w-[1440px] scroll-mt-28 px-4 sm:mt-28 sm:px-6 md:mt-36 md:px-12"
      >
        <div className="flex flex-col justify-between gap-5 border-b border-white/12 pb-6 sm:gap-6 sm:pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              Website Engineering · 5 Independent Platforms
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4.2vw,54px)] leading-[0.98] tracking-[-0.04em]">
              Website Development by Platform
            </h2>
          </div>

          {/* Separate Functional Platform Tabs — swipeable on narrow mobile, wrapped on tablet/desktop */}
          <div
            role="tablist"
            aria-label="Development platforms"
            className="no-scrollbar -mx-4 flex snap-x items-center gap-2 overflow-x-auto px-4 py-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:py-0"
          >
            {devTabs.map((tab) => {
              const active = activeDevTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveDevTab(tab.id)}
                  className={`min-h-[42px] shrink-0 snap-start rounded-full px-4 py-2.5 font-display text-xs tracking-[0.06em] whitespace-nowrap transition-all duration-200 sm:px-5 ${
                    active
                      ? "bg-accent text-ink"
                      : "bg-white/[0.05] text-paper/80 ring-1 ring-white/10 hover:text-paper"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Independent Platform Panel */}
        <div ref={devPanelRef} className="mt-8 sm:mt-10">
          {activeDevProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {activeDevProjects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-1 gap-6 sm:gap-8 lg:col-span-12 lg:grid-cols-12 lg:items-center"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Inspect ${project.title}`}
                    className="group relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-neutral-950 text-left ring-1 ring-white/12 sm:rounded-[20px] lg:col-span-7"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </button>

                  <div className="min-w-0 lg:col-span-5">
                    <span className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                      {project.categoryLabel}
                    </span>
                    <h3 className="mt-2.5 font-display text-xl leading-tight tracking-[-0.03em] sm:mt-3 sm:text-2xl md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                      {project.shortSummary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="min-h-[44px] rounded-full bg-paper px-6 py-3 font-display text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:bg-accent"
                      >
                        Inspect Screens
                      </button>
                      <Link
                        href={`/projects?category=${encodeURIComponent(activeDevTab)}`}
                        className="font-display text-xs tracking-[0.14em] text-paper/80 uppercase transition-colors hover:text-accent"
                      >
                        Open {activeDevMeta?.label} View →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeDevMeta?.platformShowcase ? (
            <div className="grid grid-cols-1 gap-6 rounded-[20px] bg-neutral-950/90 p-5 ring-1 ring-white/10 sm:gap-8 sm:rounded-[22px] sm:p-7 md:p-10 lg:grid-cols-12 lg:items-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-black ring-1 ring-white/10 sm:rounded-[16px] lg:col-span-6">
                <Image
                  src={activeDevMeta.platformShowcase.previewVisual}
                  alt={activeDevMeta.platformShowcase.previewCaption}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display text-[10px] tracking-[0.14em] text-paper/90 uppercase sm:bottom-4 sm:left-4 sm:text-[11px] sm:tracking-[0.16em]">
                  {activeDevMeta.platformShowcase.previewCaption}
                </span>
              </div>

              <div className="min-w-0 lg:col-span-6">
                <span className="font-display text-xs tracking-[0.22em] text-accent uppercase">
                  {activeDevMeta.platformShowcase.eyebrow}
                </span>
                <h3 className="mt-2.5 font-display text-xl leading-tight tracking-[-0.03em] sm:mt-3 sm:text-2xl md:text-3xl">
                  {activeDevMeta.platformShowcase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {activeDevMeta.platformShowcase.summary}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:grid-cols-2">
                  {activeDevMeta.platformShowcase.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-2.5 text-sm text-paper/90"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {activeDevMeta.platformShowcase.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-paper/80 ring-1 ring-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs text-muted">
                  {activeDevMeta.platformShowcase.note}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 py-3 font-display text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:bg-paper sm:px-6 sm:tracking-[0.14em]"
                  >
                    Request Live {activeDevMeta.label} Links
                  </Link>
                  <Link
                    href={`/projects?category=${encodeURIComponent(activeDevTab)}`}
                    className="font-display text-xs tracking-[0.14em] text-paper/80 uppercase transition-colors hover:text-accent"
                  >
                    Category Page →
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
