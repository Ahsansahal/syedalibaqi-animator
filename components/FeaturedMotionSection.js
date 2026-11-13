"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_LAYOUT = [
  { id: "evo-icl-superpower-motion", col: "lg:col-span-8", aspect: "16 / 9" },
  { id: "animated-album-canvas-ai", col: "lg:col-span-4", aspect: "9 / 13.4" },
  { id: "oral-reconstruction-symposium-lisbon", col: "lg:col-span-5", aspect: "16 / 10" },
  { id: "staar-surgical-project-bronze", col: "lg:col-span-7", aspect: "16 / 9" },
  { id: "ocl-vision-motion-campaign", col: "lg:col-span-6", aspect: "16 / 9" },
  { id: "grenade-motion-films", col: "lg:col-span-6 lg:mt-10", aspect: "16 / 9" },
];

export default function FeaturedMotionSection({ projects }) {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredItems = FEATURED_LAYOUT.map((slot) => {
    const project = projects.find((p) => p.id === slot.id);
    return project ? { ...project, slotCol: slot.col, slotAspect: slot.aspect } : null;
  }).filter(Boolean);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".motion-card-reveal").forEach((card) => {
          gsap.fromTo(
            card,
            { y: 42, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured-motion"
      className="mx-auto mt-28 max-w-[1440px] scroll-mt-28 px-6 md:mt-36 md:px-12"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col justify-between gap-6 border-b border-white/12 pb-8 md:flex-row md:items-end">
        <div>
          <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
            01 · Primary Focus
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.6vw,60px)] leading-[0.96] tracking-[-0.04em]">
            Featured Motion Work
          </h2>
        </div>

        <Link
          href="/projects?category=motion-animation"
          className="inline-flex items-center gap-2 font-display text-xs tracking-[0.16em] text-paper/85 uppercase transition-colors hover:text-accent"
        >
          <span>All Motion &amp; Showreels</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Asymmetrical Editorial Motion Grid */}
      <div className="mt-12 grid grid-cols-1 gap-y-12 md:gap-x-8 lg:grid-cols-12">
        {featuredItems.map((project) => (
          <article
            key={project.id}
            className={`motion-card-reveal group flex min-w-0 flex-col ${project.slotCol}`}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Play ${project.title}`}
              className="relative block w-full overflow-hidden rounded-[20px] bg-neutral-950 text-left ring-1 ring-white/10 focus-visible:outline-2 focus-visible:outline-accent"
              style={{ aspectRatio: project.slotAspect }}
            >
              <VideoPlayer
                ambient
                src={project.previewVideo}
                poster={project.thumbnail}
                title={project.title}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Subtle play indicator on hover */}
              <div className="pointer-events-none absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/95 text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            {/* Clean Editorial Caption */}
            <div className="mt-4 min-w-0">
              <h3 className="font-display text-lg tracking-[-0.02em] text-paper transition-colors group-hover:text-accent md:text-xl">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-left focus-visible:outline-none"
                >
                  {project.title}
                </button>
              </h3>
              <p className="mt-1 max-w-[560px] text-sm leading-relaxed text-muted md:text-[15px]">
                {project.shortSummary}
              </p>

              {project.tags?.length > 0 && (
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-wide text-paper/65">
                  {project.tags.slice(0, 3).map((t, idx) => (
                    <span key={t}>
                      {idx > 0 && <span className="mr-2 text-accent">·</span>}
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
