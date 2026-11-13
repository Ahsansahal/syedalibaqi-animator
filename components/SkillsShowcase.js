"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const DEMO_MODES = [
  { id: "timeline", label: "GSAP Timeline" },
  { id: "scroll", label: "ScrollTrigger" },
  { id: "micro", label: "Micro-UI" },
];

export default function SkillsShowcase({ data }) {
  const sectionRef = useRef(null);
  const demoBoxRef = useRef(null);
  const scrollBarRef = useRef(null);
  const [activeMode, setActiveMode] = useState("timeline");

  // Scroll-triggered section reveals + live ScrollTrigger progress bar
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".skill-tier").forEach((tier) => {
          gsap.fromTo(
            tier,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: tier,
                start: "top 86%",
                once: true,
              },
            }
          );
        });

        if (scrollBarRef.current) {
          gsap.fromTo(
            scrollBarRef.current,
            { scaleX: 0.08 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.3,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Interactive GSAP micro-demonstration inside Primary Motion block
  useEffect(() => {
    const el = demoBoxRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray(".gsap-demo-bar");
      gsap.killTweensOf(bars);

      if (activeMode === "timeline") {
        gsap.fromTo(
          bars,
          { scaleX: 0.18, opacity: 0.45 },
          {
            scaleX: (i) => [0.95, 0.72, 0.88, 0.62][i] ?? 0.8,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "expo.out",
          }
        );
      } else if (activeMode === "scroll") {
        gsap.fromTo(
          bars,
          { xPercent: -12, scaleX: 0.4, opacity: 0.5 },
          {
            xPercent: 0,
            scaleX: (i) => [0.65, 0.92, 0.78, 1][i] ?? 0.8,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          }
        );
      } else {
        gsap.fromTo(
          bars,
          { scaleY: 0.4, scaleX: 0.5, opacity: 0.6 },
          {
            scaleY: 1,
            scaleX: (i) => [0.84, 0.96, 0.68, 0.9][i] ?? 0.85,
            opacity: 1,
            duration: 0.75,
            stagger: 0.05,
            ease: "elastic.out(1, 0.55)",
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [activeMode]);

  const { motion, webDesign, development } = data;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="mx-auto mt-28 max-w-[1440px] scroll-mt-28 px-6 md:mt-36 md:px-12"
    >
      {/* Section Header */}
      <div className="max-w-[840px]">
        <p className="font-display text-xs tracking-[0.26em] text-accent uppercase">
          Multidisciplinary Craft
        </p>
        <h2 className="mt-3 font-display text-[clamp(2rem,4.6vw,58px)] leading-[0.98] tracking-[-0.04em]">
          Visual Artist at Core. Motion, Web Design &amp; Code Complete.
        </h2>
      </div>

      {/* =================================================================== */}
      {/* A. PRIMARY — MOTION DESIGN & ANIMATION (Strongest Visual Prominence) */}
      {/* =================================================================== */}
      <div className="skill-tier mt-12 overflow-hidden rounded-[24px] bg-neutral-950/90 p-7 ring-1 ring-white/12 md:p-11">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left: Title + 10 Motion Skills */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs text-accent">{motion.priority}</span>
              <span className="h-px w-8 bg-accent/70" aria-hidden="true" />
              <span className="font-display text-xs tracking-[0.22em] text-accent uppercase">
                {motion.eyebrow}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] md:text-4xl">
              {motion.title}
            </h3>
            <p className="mt-3 max-w-[560px] text-base leading-relaxed text-muted md:text-lg">
              {motion.tagline}
            </p>

            {/* Clean Editorial 2-Column Motion Skill Grid */}
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {motion.skills.map((skill) => (
                <div
                  key={skill}
                  className="group flex items-center gap-3 border-b border-white/10 pb-3 transition-colors hover:border-accent/60"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
                    aria-hidden="true"
                  />
                  <span className="font-display text-[13px] tracking-[-0.01em] text-paper/95 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-paper md:text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Motion Reel Preview + Interactive GSAP Lab */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="overflow-hidden rounded-[18px] bg-black ring-1 ring-white/12">
              <VideoPlayer
                ambient
                src={motion.previewVideo.src}
                poster={motion.previewVideo.poster}
                title={motion.previewVideo.caption}
                aspect="16 / 9"
              />
            </div>

            {/* Interactive GSAP Live Demo Strip */}
            <div
              ref={demoBoxRef}
              className="rounded-[18px] bg-black/80 p-5 ring-1 ring-white/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-[10px] tracking-[0.2em] text-muted uppercase">
                  Interactive GSAP Preview
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DEMO_MODES.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveMode(m.id)}
                      className={`rounded-full px-3 py-1 font-display text-[10px] tracking-[0.08em] transition-colors ${
                        activeMode === m.id
                          ? "bg-accent text-ink"
                          : "bg-white/[0.06] text-paper/75 hover:text-paper"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {["Ease & Timing", "Stagger Sequence", "Viewport Scrub", "Transform GPU"].map(
                  (label, idx) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="w-28 shrink-0 text-[11px] text-muted">{label}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className={`gsap-demo-bar h-full origin-left rounded-full ${
                            idx === 0 ? "bg-accent" : "bg-paper/80"
                          }`}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Real ScrollTrigger Scrub Indicator */}
              <div className="mt-4 border-t border-white/10 pt-3">
                <div className="flex items-center justify-between text-[11px] text-muted">
                  <span>Live ScrollTrigger Progress</span>
                  <span className="text-accent">Active</span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.08]">
                  <div
                    ref={scrollBarRef}
                    className="h-full w-full origin-left rounded-full bg-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* B. SECONDARY — WEBSITE DESIGN & UI/UX                               */}
      {/* =================================================================== */}
      <div className="skill-tier mt-16 grid grid-cols-1 items-start gap-10 border-t border-white/12 pt-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="font-display text-xs text-accent">{webDesign.priority}</span>
            <span className="h-px w-8 bg-white/25" aria-hidden="true" />
            <span className="font-display text-xs tracking-[0.22em] text-muted uppercase">
              {webDesign.eyebrow}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] md:text-3xl">
            {webDesign.title}
          </h3>
          <p className="mt-3 max-w-[440px] text-base leading-relaxed text-muted">
            {webDesign.tagline}
          </p>

          {/* Compact Visual Triptych from Real Supplied Work */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {webDesign.previews.map((item) => (
              <Link
                key={item.src}
                href="/projects?category=website-design"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2.5 text-[10px] font-medium tracking-wider text-paper/90 uppercase">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-7 lg:pt-8">
          {webDesign.skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-between border-b border-white/10 py-3.5 transition-colors hover:border-white/35"
            >
              <span className="font-display text-sm tracking-[-0.01em] text-paper/90">
                {skill}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brown" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* =================================================================== */}
      {/* C. THIRD — WEBSITE DEVELOPMENT                                      */}
      {/* =================================================================== */}
      <div className="skill-tier mt-16 border-t border-white/12 pt-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-xs text-accent">{development.priority}</span>
              <span className="h-px w-8 bg-white/25" aria-hidden="true" />
              <span className="font-display text-xs tracking-[0.22em] text-muted uppercase">
                {development.eyebrow}
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] md:text-3xl">
              {development.title}
            </h3>
          </div>
          <p className="max-w-[480px] text-sm leading-relaxed text-muted md:text-base">
            {development.tagline}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {development.groups.map((group) => (
            <div
              key={group.label}
              className="border-t border-white/15 pt-5"
            >
              <p className="font-display text-[11px] tracking-[0.18em] text-brown uppercase">
                {group.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-base text-paper/90 transition-colors hover:text-accent"
                      >
                        <span>{item.name}</span>
                        <span
                          aria-hidden="true"
                          className="text-xs text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                        >
                          ↗
                        </span>
                      </Link>
                    ) : (
                      <span className="text-base text-paper/85">{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
