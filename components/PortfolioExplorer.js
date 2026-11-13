"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";
import VideoPlayer from "./VideoPlayer";

const SPAN_CLASS = {
  full: "lg:col-span-12",
  wide: "lg:col-span-8",
  narrow: "lg:col-span-4",
  lead: "lg:col-span-7",
  companion: "lg:col-span-5",
  half: "lg:col-span-6",
  third: "lg:col-span-4",
};

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
    ? "lg:col-span-8"
    : SPAN_CLASS[project.gridSpan] ?? "lg:col-span-6";
  const aspect = project.aspect || "16 / 10";
  const isGif = project.thumbnail?.endsWith(".gif");
  const mediaCount = project.media?.length ?? 0;

  return (
    <article className={`portfolio-card-item group flex flex-col ${span}`}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title}`}
        className="relative block w-full overflow-hidden rounded-[20px] bg-neutral-950 text-left ring-1 ring-white/10 focus-visible:outline-2 focus-visible:outline-accent"
        style={{ aspectRatio: aspect }}
      >
        {project.previewVideo ? (
          <VideoPlayer
            ambient
            priority={priority}
            sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
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
            sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

        {/* Subtle gallery / reel indicator */}
        {mediaCount > 1 && (
          <span className="pointer-events-none absolute top-3.5 left-3.5 rounded-full bg-black/65 px-3 py-1 font-display text-[10px] tracking-[0.12em] text-paper/90 uppercase backdrop-blur-sm ring-1 ring-white/15">
            {project.previewVideo ? `Reel + ${mediaCount - 1}` : `${mediaCount} Visuals`}
          </span>
        )}

        {/* Subtle hover action */}
        <div className="pointer-events-none absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/95 text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
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
      <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="font-display text-lg tracking-[-0.02em] text-paper transition-colors group-hover:text-accent md:text-xl">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="text-left focus-visible:outline-none"
            >
              {project.title}
            </button>
          </h3>
          <p className="mt-1 max-w-[560px] text-sm leading-relaxed text-muted md:text-[15px]">
            {project.shortSummary}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 text-xs text-paper/60">
          {project.tags?.slice(0, 2).map((tag, idx) => (
            <span key={tag}>
              {idx > 0 && <span className="mr-2 text-accent">·</span>}
              {tag}
            </span>
          ))}
        </div>
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

      {/* Category Filter Bar — All Work, Motion, Visual Art & Branding, Web Design, + 5 Independent Dev Tabs */}
      <div className="border-b border-white/12 pb-6">
        <div
          role="tablist"
          aria-label="Portfolio categories"
          className="flex flex-wrap items-center gap-2 md:gap-2.5"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleCategoryChange(cat.id, true)}
                className={`rounded-full px-4 py-2.5 font-display text-xs tracking-[0.05em] transition-all duration-200 md:px-5 ${
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

        {currentCategoryMeta?.tagline && (
          <p className="mt-5 text-sm text-muted md:text-base">
            {currentCategoryMeta.tagline}
          </p>
        )}
      </div>

      {/* Portfolio Content Stage */}
      <div ref={contentRef} className="mt-12">
        {activeCategory === "all" && groupedAllWork ? (
          <div className="space-y-24">
            {/* 01 — VISUAL ART, BRAND IDENTITY, PACKAGING & OOH CAMPAIGNS */}
            <div>
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-accent">01</span>
                  <h2 className="font-display text-xl tracking-[-0.03em] md:text-2xl">
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
              <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
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
            <div className="border-t border-white/12 pt-16">
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-accent">02</span>
                  <h2 className="font-display text-xl tracking-[-0.03em] md:text-2xl">
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
              <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
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
            <div className="border-t border-white/12 pt-16">
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-accent">03</span>
                  <h2 className="font-display text-xl tracking-[-0.03em] md:text-2xl">
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
              <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
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
            <div className="border-t border-white/12 pt-16">
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-accent">04</span>
                  <h2 className="font-display text-xl tracking-[-0.03em] md:text-2xl">
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
                        className="rounded-full bg-white/[0.05] px-3.5 py-1.5 font-display text-[11px] text-paper/80 ring-1 ring-white/10 transition-colors hover:text-accent"
                      >
                        {c.label} ↗
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
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
                  className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 font-display text-xs tracking-[0.14em] text-ink uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:bg-paper"
                >
                  <span>Expand All {projects.length} Portfolio Works</span>
                  <span aria-hidden="true">+</span>
                </button>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-display text-xs tracking-[0.14em] text-paper uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  <span>Open Full Portfolio Page</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            )}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
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
          <div className="portfolio-card-item grid grid-cols-1 gap-10 rounded-[24px] bg-neutral-950/90 p-7 ring-1 ring-white/12 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-black ring-1 ring-white/10 lg:col-span-6">
              <Image
                src={currentCategoryMeta.platformShowcase.previewVisual}
                alt={currentCategoryMeta.platformShowcase.previewCaption}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-[11px] tracking-[0.16em] text-paper/90 uppercase">
                {currentCategoryMeta.platformShowcase.previewCaption}
              </span>
            </div>

            <div className="lg:col-span-6">
              <span className="font-display text-xs tracking-[0.22em] text-accent uppercase">
                {currentCategoryMeta.platformShowcase.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.03em] md:text-4xl">
                {currentCategoryMeta.platformShowcase.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {currentCategoryMeta.platformShowcase.summary}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {currentCategoryMeta.platformShowcase.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2.5 text-sm text-paper/90">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {currentCategoryMeta.platformShowcase.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs text-paper/85 ring-1 ring-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs text-muted">
                {currentCategoryMeta.platformShowcase.note}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent px-6 py-3.5 font-display text-xs tracking-[0.14em] text-ink uppercase transition-colors hover:bg-paper"
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
