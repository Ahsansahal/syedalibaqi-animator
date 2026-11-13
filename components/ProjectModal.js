"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function ProjectModal({ project, onClose }) {
  const media = project?.media ?? [];
  const [index, setIndex] = useState(0);
  const stripRef = useRef(null);
  const dialogRef = useRef(null);

  const step = useCallback(
    (delta) => {
      if (media.length <= 1) return;
      setIndex((i) => (i + delta + media.length) % media.length);
    },
    [media.length]
  );

  useEffect(() => {
    setIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.fromTo(
      el,
      { y: 20, scale: 0.98, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.32, ease: "power3.out" }
    );
  }, [project?.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, step]);

  useEffect(() => {
    const activeThumb = stripRef.current?.children?.[index];
    activeThumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [index]);

  if (!project) return null;

  const activeItem = media[index] ?? null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2.5 backdrop-blur-md sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative flex max-h-[92dvh] w-full max-w-[1340px] flex-col overflow-hidden rounded-[18px] bg-neutral-950 shadow-2xl ring-1 ring-white/15 sm:rounded-[22px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-ink/95 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4 md:px-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="font-display text-[10px] tracking-[0.18em] text-accent uppercase sm:text-[11px] sm:tracking-[0.2em]">
                {project.categoryLabel}
              </span>
              {media.length > 0 && (
                <span className="text-xs text-muted">
                  {index + 1} / {media.length}
                </span>
              )}
            </div>
            <h2 className="mt-1 line-clamp-2 font-display text-base leading-snug tracking-[-0.02em] sm:truncate sm:text-lg md:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-2xl leading-none text-paper ring-1 ring-white/15 transition-colors hover:bg-accent hover:text-ink"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content Grid */}
        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12">
          {/* Left / Main Media Viewer */}
          <div className="flex flex-col justify-between border-b border-white/10 bg-black p-3 sm:p-4 md:p-6 lg:col-span-8 lg:border-r lg:border-b-0">
            <div className="relative flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-[12px] bg-neutral-950 sm:min-h-[280px] sm:rounded-[14px] md:min-h-[440px]">
              {activeItem ? (
                activeItem.type === "video" ? (
                  <div className="w-full">
                    <VideoPlayer
                      key={activeItem.src}
                      src={activeItem.src}
                      poster={activeItem.poster}
                      title={activeItem.title || project.title}
                      aspect={
                        activeItem.w && activeItem.h
                          ? `${activeItem.w} / ${activeItem.h}`
                          : "16 / 9"
                      }
                      fit="contain"
                      className="max-h-[52dvh] sm:max-h-[62dvh]"
                    />
                  </div>
                ) : (
                  <div className="relative h-[34dvh] min-h-[220px] w-full sm:h-[44dvh] md:h-[56dvh]">
                    <Image
                      key={activeItem.src}
                      src={activeItem.src}
                      alt={activeItem.title || `${project.title} — visual ${index + 1}`}
                      fill
                      unoptimized={activeItem.src.endsWith(".gif")}
                      sizes="(min-width: 1024px) 840px, 100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                )
              ) : null}

              {media.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous slide"
                    className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-2xl text-paper ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next slide"
                    className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-2xl text-paper ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {media.length > 1 && (
              <div
                ref={stripRef}
                className="mt-4 flex gap-2.5 overflow-x-auto pt-1 pb-1 [scrollbar-width:thin]"
              >
                {media.map((item, i) => {
                  const thumbSrc = item.type === "video" ? item.poster : item.src;
                  return (
                    <button
                      key={`${item.src}-${i}`}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`View asset ${i + 1}`}
                      aria-current={i === index}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-all md:h-16 md:w-24 ${
                        i === index
                          ? "opacity-100 ring-2 ring-accent"
                          : "opacity-50 ring-1 ring-white/15 hover:opacity-90"
                      }`}
                    >
                      {thumbSrc ? (
                        <Image
                          src={thumbSrc}
                          alt=""
                          fill
                          unoptimized={thumbSrc.endsWith(".gif")}
                          sizes="100px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-neutral-900 text-[10px] text-muted uppercase">
                          Video
                        </span>
                      )}
                      {item.type === "video" && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/35">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Project Details Panel */}
          <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-4">
            <div>
              <h3 className="font-display text-lg leading-snug">Overview</h3>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
                {(Array.isArray(project.description)
                  ? project.description
                  : [project.description]
                ).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {project.deliverables?.length > 0 && (
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-display text-[11px] tracking-[0.2em] text-paper/90 uppercase">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tags?.length > 0 && (
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-display text-[11px] tracking-[0.2em] text-paper/90 uppercase">
                    Focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-paper/85 ring-1 ring-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
              {project.caseStudyHref && (
                <Link
                  href={project.caseStudyHref}
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 font-display text-xs tracking-[0.14em] text-paper uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  Read Case Study →
                </Link>
              )}
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3.5 font-display text-xs tracking-[0.14em] text-ink uppercase transition-colors hover:bg-paper"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
