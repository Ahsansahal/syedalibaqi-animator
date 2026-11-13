"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";
import VideoPlayer from "./VideoPlayer";

const SPAN_CLASS = {
  full: "md:col-span-2 lg:col-span-12",
  wide: "md:col-span-2 lg:col-span-7 xl:col-span-8",
  narrow: "md:col-span-1 lg:col-span-5 xl:col-span-4",
  lead: "md:col-span-2 lg:col-span-7",
  companion: "md:col-span-2 lg:col-span-5",
  half: "md:col-span-1 lg:col-span-6",
  third: "md:col-span-1 lg:col-span-6 xl:col-span-4",
};

const PORTFOLIO_GRID_CLASS =
  "grid grid-cols-1 gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-12 lg:gap-x-7 xl:gap-x-8";

function SearchParamsSync({ validIds, onSelectCategory }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && validIds.has(cat)) {
      onSelectCategory(cat);
    } else if (!cat) {
      onSelectCategory("all");
    }
  }, [searchParams, validIds, onSelectCategory]);
  return null;
}

function EditorialProjectCard({ project, onOpen, forceWide = false, priority = false }) {
  const span = forceWide
    ? "md:col-span-2 lg:col-span-8"
    : SPAN_CLASS[project.gridSpan] ?? "md:col-span-1 lg:col-span-6";
  const aspect = project.aspect || "16 / 10";
  const isGif = project.thumbnail?.endsWith(".gif");
  const mediaCount = project.media?.length ?? 0;

  return (
    <article className={`portfolio-card-item group flex min-w-0 flex-col ${span}`}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title}`}
        className="relative block w-full overflow-hidden rounded-[18px] bg-neutral-950 text-left ring-1 ring-white/10 focus-visible:outline-2 focus-visible:outline-accent sm:rounded-[20px]"
        style={{ aspectRatio: aspect }}
      >
        {project.previewVideo ? (
          <VideoPlayer
            ambient
            priority={priority}
            sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
            src={project.previewVideo}
            poster={project.thumbnail}
            title={project.title}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={priority}
            unoptimized={isGif}
            sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

        {/* Subtle gallery / reel indicator */}
        {mediaCount > 1 && (
          <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-black/65 px-2.5 py-1 font-display text-[10px] tracking-[0.1em] text-paper/90 uppercase backdrop-blur-sm ring-1 ring-white/15 sm:top-3.5 sm:left-3.5 sm:px-3">
            {project.previewVideo ? `Reel + ${mediaCount - 1}` : `${mediaCount} Visuals`}
          </span>
        )}

        {/* Subtle action indicator — visible on touch screens, hover-reveal on desktop */}
        <div className="pointer-events-none absolute right-3.5 bottom-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-paper/95 text-ink opacity-90 shadow-lg transition-all duration-300 sm:right-4 sm:bottom-4 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:scale-105 sm:group-hover:opacity-100">
          {project.previewVideo ? (
            <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <span className="font-display text-xs" aria-hidden="true">
              ↗
            </span>
          )}
        </div>
      </button>

      {/* Clean Framing — Title + Crisp Short Summary + Subtle Tags */}
      <div className="mt-3.5 min-w-0 sm:mt-4">
        <h3 className="font-display text-base leading-snug tracking-[-0.02em] text-paper transition-colors group-hover:text-accent sm:text-lg md:text-xl">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left focus-visible:outline-none"
          >
            {project.title}
          </button>
        </h3>
        <p className="mt-1 max-w-[600px] text-sm leading-relaxed text-muted md:text-[15px]">
          {project.shortSummary}
        </p>

        {project.tags?.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-paper/65">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={tag}>
                {idx > 0 && <span className="mr-2 text-accent">·</span>}
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function PortfolioExplorer({
  categories,
  projects,
  initialCategory = "all",
  syncUrl = false,
  compactHomeAllWork = false,
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [expandedAllOnHome, setExpandedAllOnHome] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const contentRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const validCategoryIds = useMemo(
    () => new Set(categories.map((c) => c.id)),
    [categories]
  );

  const handleCategoryChange = useCallback(
    (catId, updateUrl = false) => {
      setActiveCategory(catId);
      if (syncUrl && updateUrl) {
        const nextUrl =
          catId === "all" ? pathname : `${pathname}?category=${encodeURIComponent(catId)}`;
        router.replace(nextUrl, { scroll: false });
      }
    },
    [pathname, router, syncUrl]
  );

  const currentCategoryMeta = useMemo(
    () => categories.find((c) => c.id === activeCategory) ?? categories[0],
    [categories, activeCategory]
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  const useCuratedSlice = compactHomeAllWork && !expandedAllOnHome;

  const groupedAllWork = useMemo(() => {
    if (activeCategory !== "all") return null;
    const pick = (cat) => {
      const allInCat = projects.filter((p) => p.category === cat);
      return useCuratedSlice ? allInCat.filter((p) => p.featuredHome) : allInCat;
    };
    return {
      motion: pick("motion-animation"),
      visualArt: pick("visual-art"),
      webDesign: pick("website-design"),
      dev: projects.filter((p) => p.category === "nextjs" || p.category === "reactjs"),
    };
  }, [activeCategory, projects, useCuratedSlice]);

  // Smooth GSAP category transition (skip initial mount so SSR/LCP cards stay visible immediately)
  const hasMountedRef = useRef(false);
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    const el = contentRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".portfolio-card-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.035,
            ease: "power3.out",
          }
        );
      } else {
        gsap.fromTo(
          el,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className="w-full">
      {syncUrl && (
        <Suspense fallback={null}>
          <SearchParamsSync
            validIds={validCategoryIds}
            onSelectCategory={(cat) => setActiveCategory(cat)}
          />
        </Suspense>
      )}

      {/* Category Filter Bar — Swipeable horizontal chip bar on mobile, wrapped row on tablet/desktop */}
      <div className="border-b border-white/12 pb-5 sm:pb-6">
        <div
          role="tablist"
          aria-label="Portfolio categories"
          className="no-scrollbar -mx-4 flex snap-x items-center gap-2 overflow-x-auto px-4 py-1 sm:mx-0 sm:px-0 md:flex-wrap md:gap-2.5 md:overflow-visible md:py-0"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={(e) => {
                  handleCategoryChange(cat.id, true);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }}
                className={`min-h-[42px] shrink-0 snap-start rounded-full px-4 py-2.5 font-display text-xs tracking-[0.05em] whitespace-nowrap transition-all duration-200 md:px-5 ${
                  isSelected
                    ? "bg-accent text-ink"
                    : "bg-white/[0.04] text-paper/80 ring-1 ring-white/10 hover:bg-white/[0.08] hover:text-paper"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 sm:mt-5">
          {currentCategoryMeta?.tagline && (
            <p className="text-sm text-muted md:text-base">
              {currentCategoryMeta.tagline}
            </p>
          )}
          <span className="shrink-0 font-display text-[10px] tracking-[0.14em] text-muted/80 uppercase md:hidden">
            Swipe →
          </span>
        </div>
      </div>

      {/* Portfolio Content Stage */}
      <div ref={contentRef} className="mt-10 sm:mt-12">
        {activeCategory === "all" && groupedAllWork ? (
          <div className="space-y-16 sm:space-y-24">
            {/* 01 — VISUAL ART, BRAND IDENTITY, PACKAGING & OOH CAMPAIGNS */}
            <div>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 sm:mb-8 sm:gap-4">
                <div className="flex min-w-0 items-baseline gap-3">
                  <span className="shrink-0 font-display text-xs text-accent">01</span>
                  <h2 className="font-display text-lg tracking-[-0.03em] sm:text-xl md:text-2xl">
                    Visual Art, Brand Identity, Packaging &amp; OOH Campaigns
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("visual-art", true)}
                  className="font-display text-xs tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent"
                >
                  Filter Visual Art &amp; Branding →
                </button>
              </div>
              <div className={PORTFOLIO_GRID_CLASS}>
                {groupedAllWork.visualArt.map((project, idx) => (
                  <EditorialProjectCard
                    key={project.id}
                    project={project}
                    priority={!compactHomeAllWork && idx < 2}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* 02 — MOTION DESIGN & ANIMATION */}
            <div className="border-t border-white/12 pt-12 sm:pt-16">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 sm:mb-8 sm:gap-4">
                <div className="flex min-w-0 items-baseline gap-3">
                  <span className="shrink-0 font-display text-xs text-accent">02</span>
                  <h2 className="font-display text-lg tracking-[-0.03em] sm:text-xl md:text-2xl">
                    Motion Design, Showreels &amp; Animation
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("motion-animation", true)}
                  className="font-display text-xs tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent"
                >
                  Filter Motion &amp; Animation →
                </button>
              </div>
              <div className={PORTFOLIO_GRID_CLASS}>
                {groupedAllWork.motion.map((project) => (
                  <EditorialProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* 03 — WEBSITE DESIGN, STOREFRONT UI & DESIGN SYSTEMS */}
            <div className="border-t border-white/12 pt-12 sm:pt-16">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 sm:mb-8 sm:gap-4">
                <div className="flex min-w-0 items-baseline gap-3">
                  <span className="shrink-0 font-display text-xs text-accent">03</span>
                  <h2 className="font-display text-lg tracking-[-0.03em] sm:text-xl md:text-2xl">
                    Website Design, Storefront UI &amp; Visual Systems
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("website-design", true)}
                  className="font-display text-xs tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent"
                >
                  View All Website Design →
                </button>
              </div>
              <div className={PORTFOLIO_GRID_CLASS}>
                {groupedAllWork.webDesign.map((project) => (
                  <EditorialProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* 04 — WEB DEVELOPMENT (5 Independent Platforms) */}
            <div className="border-t border-white/12 pt-12 sm:pt-16">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 sm:mb-8 sm:gap-4">
                <div className="flex min-w-0 items-baseline gap-3">
                  <span className="shrink-0 font-display text-xs text-accent">04</span>
                  <h2 className="font-display text-lg tracking-[-0.03em] sm:text-xl md:text-2xl">
                    Website Development &amp; Full-Stack Platforms
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["wordpress", "shopify", "reactjs", "nextjs", "laravel"].map((id) => {
                    const c = categories.find((item) => item.id === id);
                    if (!c) return null;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => handleCategoryChange(id, true)}
                        className="min-h-[36px] rounded-full bg-white/[0.05] px-3.5 py-1.5 font-display text-[11px] text-paper/80 ring-1 ring-white/10 transition-colors hover:text-accent"
                      >
                        {c.label} ↗
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className={PORTFOLIO_GRID_CLASS}>
                {groupedAllWork.dev.map((project) => (
                  <EditorialProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* Home Page Expand Bar — Expand All 41 Projects Inline or Open /projects */}
            {compactHomeAllWork && !expandedAllOnHome && (
              <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/12 pt-12">
                <button
                  type="button"
                  onClick={() => setExpandedAllOnHome(true)}
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 font-display text-xs tracking-[0.14em] text-ink uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:bg-paper sm:px-7 sm:py-4"
                >
                  <span>Expand All {projects.length} Portfolio Works</span>
                  <span aria-hidden="true">+</span>
                </button>
                <Link
                  href="/projects"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-display text-xs tracking-[0.14em] text-paper uppercase transition-colors hover:border-accent hover:text-accent sm:px-7 sm:py-4"
                >
                  <span>Open Full Portfolio Page</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            )}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className={PORTFOLIO_GRID_CLASS}>
            {filteredProjects.map((project, idx) => (
              <EditorialProjectCard
                key={project.id}
                project={project}
                priority={!compactHomeAllWork && idx < 2}
                onOpen={setSelectedProject}
                forceWide={filteredProjects.length === 1}
              />
            ))}
          </div>
        ) : currentCategoryMeta?.platformShowcase ? (
          /* Independent Platform Showcase (WordPress, Shopify, Laravel) */
          <div className="portfolio-card-item grid grid-cols-1 gap-7 rounded-[20px] bg-neutral-950/90 p-5 ring-1 ring-white/12 sm:gap-10 sm:rounded-[24px] sm:p-7 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-black ring-1 ring-white/10 sm:rounded-[18px] lg:col-span-6">
              <Image
                src={currentCategoryMeta.platformShowcase.previewVisual}
                alt={currentCategoryMeta.platformShowcase.previewCaption}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-3 font-display text-[10px] tracking-[0.14em] text-paper/90 uppercase sm:bottom-4 sm:left-4 sm:text-[11px] sm:tracking-[0.16em]">
                {currentCategoryMeta.platformShowcase.previewCaption}
              </span>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <span className="font-display text-xs tracking-[0.22em] text-accent uppercase">
                {currentCategoryMeta.platformShowcase.eyebrow}
              </span>
              <h2 className="mt-2.5 font-display text-xl leading-tight tracking-[-0.03em] sm:mt-3 sm:text-2xl md:text-4xl">
                {currentCategoryMeta.platformShowcase.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
                {currentCategoryMeta.platformShowcase.summary}
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
                {currentCategoryMeta.platformShowcase.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2.5 text-sm text-paper/90">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {currentCategoryMeta.platformShowcase.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted sm:mt-6">
                {currentCategoryMeta.platformShowcase.note}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-7">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 py-3 font-display text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:bg-paper sm:px-6 sm:py-3.5 sm:tracking-[0.14em]"
                >
                  Request Live {currentCategoryMeta.label} Links
                </Link>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("visual-art", true)}
                  className="font-display text-xs tracking-[0.14em] text-paper/80 uppercase transition-colors hover:text-accent"
                >
                  Explore Visual Art →
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
