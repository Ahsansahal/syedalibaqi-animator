"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { webPortfolioCategories, webPortfolioProjects } from "@/data/webPortfolio";

/**
 * Separate Website Design & Development portfolio section, styled strictly
 * with the original Wix theme tokens (bg-ink, text-paper, accent, line, Unbounded + Barlow).
 */
export default function WebDevelopmentPortfolio({ showHeading = true }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxState, setLightboxState] = useState(null); // { slides, index }

  const filtered =
    activeCategory === "all"
      ? webPortfolioProjects
      : webPortfolioProjects.filter((p) => p.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxState(null), []);
  const stepLightbox = useCallback((d) => {
    setLightboxState((prev) =>
      prev ? { ...prev, index: (prev.index + d + prev.slides.length) % prev.slides.length } : null
    );
  }, []);

  return (
    <div>
      {showHeading && (
        <Reveal className="mx-auto max-w-[980px] text-center">
          <h2 className="font-display text-3xl leading-[0.95] tracking-[-0.04em] md:text-[56px]">
            Website Design &amp; Development
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-lg leading-[1.4] text-muted md:text-xl">
            Website UI/UX layouts, online storefront visuals, design systems, and platform builds across WordPress, Shopify, React.js, Next.js, and Laravel.
          </p>
        </Reveal>
      )}

      {/* Category filters matching the original dark / red-accent Wix palette */}
      <div
        role="tablist"
        aria-label="Website Design and Development Categories"
        className="mt-12 flex flex-wrap items-center justify-center gap-3"
      >
        {webPortfolioCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(cat.id)}
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

      {/* Project grid */}
      <div className="mt-14 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[26px] border border-line bg-ink transition-colors duration-300 hover:border-paper/60"
          >
            <button
              type="button"
              onClick={() => setLightboxState({ slides: project.slides, index: 0 })}
              aria-label={`Preview ${project.name}`}
              className="relative block aspect-[16/10] w-full overflow-hidden bg-neutral-950 text-left focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Image
                src={project.preview}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {project.slides.length > 1 && (
                <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-ink/85 px-3 py-1 font-display text-[11px] text-paper ring-1 ring-line">
                  {project.slides.length} screens
                </span>
              )}
            </button>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="font-display text-[11px] tracking-wide text-accent uppercase">
                  {project.platform}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug text-paper">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="mt-3 text-base leading-[1.45] text-muted">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-4 text-sm">
                <button
                  type="button"
                  onClick={() => setLightboxState({ slides: project.slides, index: 0 })}
                  className="font-display text-xs text-paper transition-colors hover:text-accent"
                >
                  View Preview →
                </button>
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
