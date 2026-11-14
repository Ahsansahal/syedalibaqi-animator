"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { websiteServices } from "@/data/site";
import {
  webPortfolioCategories,
  webPortfolioProjects,
} from "@/data/webPortfolio";

/**
 * Portfolio & Connected Capabilities section, styled strictly with the
 * established Wix theme tokens (bg-ink, text-paper, accent, line, Unbounded + Barlow).
 *
 * Separate Portfolio Categories:
 * 1. Animation & Motion Design
 * 2. Custom Website Design
 * 3. WordPress
 * 4. Shopify
 * 5. React.js
 * 6. Next.js
 * 7. Laravel
 */
const CUSTOM_SUB_IDS = ["reactjs", "nextjs", "laravel"];

export default function WebDevelopmentPortfolio({
  showHeading = true,
  showCapabilities = false,
  initialCategory = "all",
  headingTag: HeadingTag = "h2",
}) {
  const isInitialSub = CUSTOM_SUB_IDS.includes(initialCategory);
  const [activeCategory, setActiveCategory] = useState(
    isInitialSub ? "custom-website-design" : initialCategory
  );
  const [activeSubCategory, setActiveSubCategory] = useState(
    isInitialSub ? initialCategory : "all"
  );
  const [lightboxState, setLightboxState] = useState(null); // { slides, index }

  const filtered = webPortfolioProjects.filter((p) => {
    if (activeCategory === "all") return true;
    if (p.category !== activeCategory) return false;
    if (activeCategory === "custom-website-design" && activeSubCategory !== "all") {
      return (p.subCategory || "design") === activeSubCategory;
    }
    return true;
  });

  const activeCategoryMeta = webPortfolioCategories.find(
    (c) => c.id === activeCategory
  );
  const activeSubMeta = activeCategoryMeta?.subCategories?.find(
    (s) => s.id === activeSubCategory
  );

  const closeLightbox = useCallback(() => setLightboxState(null), []);
  const stepLightbox = useCallback((d) => {
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index + d + prev.slides.length) % prev.slides.length,
          }
        : null
    );
  }, []);

  return (
    <div>
      {showHeading && (
        <Reveal className="mx-auto max-w-[980px] text-center">
          <HeadingTag className="font-display text-3xl leading-[0.95] tracking-[-0.04em] md:text-[56px]">
            {websiteServices.title}
          </HeadingTag>
          <p className="mx-auto mt-6 max-w-[820px] text-lg leading-[1.45] text-muted md:text-xl">
            {websiteServices.lead}
          </p>
        </Reveal>
      )}

      {showCapabilities && (
        <Reveal className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 1. Custom Website Design */}
          <div className="rounded-[26px] border border-line bg-ink p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-xl text-paper md:text-2xl">
                {websiteServices.designGroup.heading}
              </h3>
              <Link
                href={websiteServices.designGroup.href}
                className="font-display text-xs text-accent transition-colors hover:text-paper"
              >
                Explore Design →
              </Link>
            </div>
            <p className="mt-3 text-base leading-[1.45] text-muted">
              {websiteServices.designGroup.summary}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {websiteServices.designGroup.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-base text-paper/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Website Development (Custom Website Development w/ React.js, Next.js & Laravel + WordPress + Shopify) */}
          <div className="rounded-[26px] border border-line bg-ink p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-xl text-paper md:text-2xl">
                {websiteServices.developmentGroup.heading}
              </h3>
              <Link
                href="/website-design-development"
                className="font-display text-xs text-accent transition-colors hover:text-paper"
              >
                All Services →
              </Link>
            </div>
            <p className="mt-3 text-base leading-[1.45] text-muted">
              {websiteServices.developmentGroup.summary}
            </p>

            {/* Custom Website Development group including React.js, Next.js & Laravel */}
            <div className="mt-6 rounded-[20px] border border-line p-5">
              <Link
                href={websiteServices.developmentGroup.customDevelopment.href}
                className="font-display text-sm text-paper transition-colors hover:text-accent"
              >
                {websiteServices.developmentGroup.customDevelopment.label} →
              </Link>
              <p className="mt-1.5 text-sm leading-[1.45] text-muted">
                {websiteServices.developmentGroup.customDevelopment.detail}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {websiteServices.developmentGroup.customDevelopment.frameworks.map((fw) => (
                  <Link
                    key={fw.href}
                    href={fw.href}
                    className="border border-line px-3.5 py-1.5 font-display text-xs text-paper transition-colors hover:border-accent hover:text-accent"
                  >
                    {fw.shortLabel} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Dedicated CMS & E-Commerce Platforms */}
            <ul className="mt-5 space-y-3.5">
              {websiteServices.developmentGroup.platforms.map((tech) => (
                <li
                  key={tech.href}
                  className="flex flex-col gap-1 border-b border-line/60 pb-3.5 last:border-b-0 last:pb-0"
                >
                  <Link
                    href={tech.href}
                    className="font-display text-sm text-paper transition-colors hover:text-accent"
                  >
                    {tech.label} →
                  </Link>
                  <span className="text-sm leading-[1.45] text-muted">{tech.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {/* Portfolio Categories (+ Nested React.js, Next.js & Laravel within Custom Website Design & Development) */}
      <div
        role="tablist"
        aria-label="Portfolio Categories"
        className="mt-14 flex flex-wrap items-center justify-center gap-3"
      >
        {webPortfolioCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveSubCategory("all");
              }}
              className={`border px-5 py-2.5 font-display text-xs tracking-wide transition-colors duration-200 md:text-[13px] ${
                isSelected
                  ? "border-accent bg-accent text-ink"
                  : "border-line bg-ink text-paper hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {activeCategory === "custom-website-design" &&
        activeCategoryMeta?.subCategories?.length > 0 && (
          <div
            role="tablist"
            aria-label="Custom Website Development Technologies"
            className="mt-5 flex flex-wrap items-center justify-center gap-2.5"
          >
            <span className="mr-1 font-display text-[11px] tracking-wide text-muted uppercase">
              Included within Custom Websites:
            </span>
            {activeCategoryMeta.subCategories.map((sub) => {
              const isSubSelected = activeSubCategory === sub.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  role="tab"
                  aria-selected={isSubSelected}
                  onClick={() => setActiveSubCategory(sub.id)}
                  className={`border px-4 py-1.5 font-display text-xs transition-colors duration-200 ${
                    isSubSelected
                      ? "border-paper bg-paper text-ink"
                      : "border-line bg-ink text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        )}

      {activeCategory !== "all" && (activeSubMeta?.href || activeCategoryMeta?.href) && (
        <div className="mt-5 text-center">
          <Link
            href={activeSubMeta?.href || activeCategoryMeta.href}
            className="font-display text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            View dedicated{" "}
            {activeSubMeta && activeSubMeta.id !== "all" && activeSubMeta.id !== "design"
              ? `${activeSubMeta.label} Custom Website Development`
              : activeCategoryMeta.label}{" "}
            page →
          </Link>
        </div>
      )}

      {/* Project grid */}
      <div className="mt-14 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[26px] border border-line bg-ink transition-colors duration-300 hover:border-paper/60"
          >
            <button
              type="button"
              onClick={() =>
                setLightboxState({ slides: project.slides, index: 0 })
              }
              aria-label={`Preview ${project.name}`}
              className="relative block aspect-[16/10] w-full overflow-hidden bg-neutral-950 text-left focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Image
                src={project.preview}
                alt={project.name}
                fill
                unoptimized={project.preview.endsWith(".gif")}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {project.hasVideo && (
                <span
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35"
                  aria-hidden="true"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/80 ring-1 ring-paper/50 transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-paper">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              )}
              {project.slides.length > 1 && (
                <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-ink/85 px-3 py-1 font-display text-[11px] text-paper ring-1 ring-line">
                  {project.slides.length} {project.hasVideo ? "items" : "screens"}
                </span>
              )}
            </button>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <Link
                  href={project.categoryHref || "/website-design-development"}
                  className="inline-block font-display text-[11px] tracking-wide text-accent uppercase transition-colors hover:text-paper"
                >
                  {project.platform}
                </Link>
                <h3 className="mt-2 font-display text-lg leading-snug text-paper">
                  <Link
                    href={`/projects/${project.id}`}
                    className="transition-colors hover:text-accent"
                  >
                    {project.name}
                  </Link>
                </h3>
                {project.description && (
                  <p className="mt-3 text-base leading-[1.45] text-muted">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-4 text-sm">
                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="font-display text-xs text-paper transition-colors hover:text-accent"
                  >
                    Project Details →
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxState({ slides: project.slides, index: 0 })
                    }
                    className="font-display text-xs text-muted transition-colors hover:text-paper"
                  >
                    {project.hasVideo ? "Play Reel" : "Quick Preview"}
                  </button>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs text-accent underline-offset-4 hover:underline"
                  >
                    {project.liveLabel || "Live Website"} ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {lightboxState && (
        <Lightbox
          items={lightboxState.slides}
          index={lightboxState.index}
          onClose={closeLightbox}
          onStep={stepLightbox}
        />
      )}
    </div>
  );
}
