"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

const WEB_FEATURED_IDS = [
  { id: "fabulatte-digital-landing", col: "lg:col-span-7", aspect: "16 / 10" },
  { id: "rezilo-digital-product-system", col: "lg:col-span-5", aspect: "4 / 3.35" },
  { id: "desi-chai-london-system", col: "lg:col-span-6", aspect: "16 / 9" },
  { id: "tratech-digital-system", col: "lg:col-span-6", aspect: "16 / 9" },
];

const DEV_TAB_IDS = ["wordpress", "shopify", "reactjs", "nextjs", "laravel"];

export default function HomePortfolioSections({ categories, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDevTab, setActiveDevTab] = useState("nextjs");
  const devPanelRef = useRef(null);

  const webFeatured = useMemo(
    () =>
      WEB_FEATURED_IDS.map((slot) => {
        const p = projects.find((item) => item.id === slot.id);
        return p ? { ...p, slotCol: slot.col, slotAspect: slot.aspect } : null;
      }).filter(Boolean),
    [projects]
  );

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
      {/* =================================================================== */}
      {/* 04. WEBSITE DESIGN PORTFOLIO                                        */}
      {/* =================================================================== */}
      <section
        id="website-design-portfolio"
        className="mx-auto mt-28 max-w-[1440px] scroll-mt-28 px-6 md:mt-36 md:px-12"
      >
        <div className="flex flex-col justify-between gap-6 border-b border-white/12 pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              02 · Website Design &amp; UI/UX
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.2vw,54px)] leading-[0.98] tracking-[-0.04em]">
              Website Design &amp; Visual Systems
            </h2>
          </div>

          <Link
            href="/projects?category=website-design"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.16em] text-paper/85 uppercase transition-colors hover:text-accent"
          >
            <span>Explore Website Design</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
          {webFeatured.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col ${project.slotCol}`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`Inspect ${project.title}`}
                className="relative block w-full overflow-hidden rounded-[20px] bg-neutral-950 text-left ring-1 ring-white/10 focus-visible:outline-2 focus-visible:outline-accent"
                style={{ aspectRatio: project.slotAspect }}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-85" />
              </button>

              <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="font-display text-lg tracking-[-0.02em] text-paper transition-colors group-hover:text-accent md:text-xl">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-left focus-visible:outline-none"
                    >
                      {project.title}
                    </button>
                  </h3>
                  <p className="mt-1 max-w-[540px] text-sm leading-relaxed text-muted md:text-[15px]">
                    {project.shortSummary}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2 text-xs text-paper/60">
                  {project.tags?.slice(0, 2).map((t, idx) => (
                    <span key={t}>
                      {idx > 0 && <span className="mr-2 text-accent">·</span>}
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =================================================================== */}
      {/* 05. DEVELOPMENT PORTFOLIO (5 Independent Platform Tabs)             */}
      {/* =================================================================== */}
      <section
        id="development-portfolio"
        className="mx-auto mt-28 max-w-[1440px] scroll-mt-28 px-6 md:mt-36 md:px-12"
      >
        <div className="flex flex-col justify-between gap-6 border-b border-white/12 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
              03 · Website Development
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.2vw,54px)] leading-[0.98] tracking-[-0.04em]">
              Development by Platform
            </h2>
          </div>

          {/* Separate Functional Platform Tabs */}
          <div
            role="tablist"
            aria-label="Development platforms"
            className="flex flex-wrap items-center gap-2"
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
                  className={`rounded-full px-5 py-2.5 font-display text-xs tracking-[0.06em] transition-all duration-200 ${
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
        <div ref={devPanelRef} className="mt-10">
          {activeDevProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {activeDevProjects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-1 gap-8 lg:col-span-12 lg:grid-cols-12 lg:items-center"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Inspect ${project.title}`}
                    className="group relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-neutral-950 text-left ring-1 ring-white/12 lg:col-span-7"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </button>

                  <div className="lg:col-span-5">
                    <span className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                      {project.categoryLabel}
                    </span>
                    <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.03em] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {project.shortSummary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="rounded-full bg-paper px-6 py-3 font-display text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:bg-accent"
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
            <div className="grid grid-cols-1 gap-8 rounded-[22px] bg-neutral-950/90 p-7 ring-1 ring-white/10 md:p-10 lg:grid-cols-12 lg:items-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-black ring-1 ring-white/10 lg:col-span-6">
                <Image
                  src={activeDevMeta.platformShowcase.previewVisual}
                  alt={activeDevMeta.platformShowcase.previewCaption}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display text-[11px] tracking-[0.16em] text-paper/90 uppercase">
                  {activeDevMeta.platformShowcase.previewCaption}
                </span>
              </div>

              <div className="lg:col-span-6">
                <span className="font-display text-xs tracking-[0.22em] text-accent uppercase">
                  {activeDevMeta.platformShowcase.eyebrow}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.03em] md:text-3xl">
                  {activeDevMeta.platformShowcase.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {activeDevMeta.platformShowcase.summary}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
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

                <div className="mt-6 flex flex-wrap gap-2">
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
                    className="rounded-full bg-accent px-6 py-3 font-display text-xs tracking-[0.14em] text-ink uppercase transition-colors hover:bg-paper"
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
