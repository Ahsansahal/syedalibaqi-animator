"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MotionHero({ data }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const [withSound, setWithSound] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          ".hero-eyebrow",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 }
        )
          .fromTo(
            ".hero-line-inner",
            { yPercent: 112 },
            { yPercent: 0, duration: 0.9, stagger: 0.1 },
            "-=0.35"
          )
          .fromTo(
            ".hero-fade",
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, stagger: 0.08 },
            "-=0.45"
          )
          .fromTo(
            stageRef.current,
            { y: 36, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 0.96, duration: 0.9 },
            "-=0.55"
          );

        if (stageRef.current) {
          gsap.fromTo(
            stageRef.current,
            { scale: 0.96 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: stageRef.current,
                start: "top 88%",
                end: "top 30%",
                scrub: 0.5,
              },
            }
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || withSound) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [withSound]);

  const handleEnableSound = () => {
    const el = videoRef.current;
    if (!el) return;
    setWithSound(true);
    el.muted = false;
    el.currentTime = 0;
    el.play().catch(() => {});
  };

  return (
    <section
      ref={rootRef}
      className="relative mx-auto max-w-[1440px] overflow-hidden px-6 pt-6 md:px-12 md:pt-10"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-accent/12 blur-[130px]"
      />

      {/* Eyebrow */}
      <div className="hero-eyebrow flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-display text-[11px] tracking-[0.2em] text-paper uppercase">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          {data.eyebrow}
        </span>
        <span className="text-xs tracking-[0.22em] text-muted uppercase">
          Motion · Design · Code
        </span>
      </div>

      {/* Monumental Split-Masked Headline */}
      <h1 className="mt-7 font-display text-[clamp(2.35rem,7.8vw,108px)] leading-[0.9] tracking-[-0.045em] uppercase">
        {data.heroLines.map((line, i) => (
          <span key={line} className="block overflow-hidden py-0.5">
            <span
              className={`hero-line-inner block ${
                i === 1 ? "text-accent" : "text-paper"
              }`}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>

      {/* Supporting Intro + Clear CTAs */}
      <div className="mt-9 grid grid-cols-1 items-end gap-8 border-t border-white/12 pt-8 lg:grid-cols-12">
        <p className="hero-fade max-w-[680px] text-lg leading-[1.55] font-light text-paper/85 md:text-[21px] lg:col-span-7">
          {data.intro}
        </p>

        <div className="hero-fade flex flex-wrap items-center gap-3.5 lg:col-span-5 lg:justify-end">
          <Link
            href={data.primaryCta.href}
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 font-display text-xs tracking-[0.14em] text-ink uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:bg-paper"
          >
            <span>{data.primaryCta.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href={data.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-display text-xs tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {data.secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* Featured Showreel Cinema Stage */}
      <div
        ref={stageRef}
        id="showreel"
        className="mt-12 scroll-mt-32 md:mt-16"
      >
        <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[22px] bg-neutral-950 ring-1 ring-white/12 md:rounded-[28px]">
          <video
            ref={videoRef}
            src={data.showreel.src}
            poster={data.showreel.poster}
            muted={!withSound}
            loop={!withSound}
            controls={withSound}
            playsInline
            preload="metadata"
            aria-label={data.showreel.title}
            className="block h-full w-full object-cover"
          />

          {!withSound && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

              <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 md:inset-x-8 md:bottom-8">
                <div>
                  <p className="font-display text-[10px] tracking-[0.24em] text-accent uppercase md:text-xs">
                    {data.showreel.label}
                  </p>
                  <p className="mt-1 font-display text-base tracking-[-0.02em] text-paper md:text-2xl">
                    {data.showreel.title}
                  </p>
                  <p className="mt-1 hidden text-sm text-paper/70 sm:block">
                    {data.showreel.meta}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleEnableSound}
                  aria-label="Play featured showreel with sound"
                  className="inline-flex items-center gap-3 rounded-full bg-paper/95 px-5 py-3 font-display text-[11px] tracking-[0.14em] text-ink uppercase shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:bg-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Play Reel</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Subtle 01 / 02 / 03 Priority Strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-b border-white/10 pb-6 sm:grid-cols-3">
          {data.priorities.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group flex items-center justify-between gap-3 py-1 transition-colors hover:text-accent"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xs text-accent">{item.index}</span>
                <span className="font-display text-xs tracking-[0.06em] text-paper/90 group-hover:text-accent md:text-sm">
                  {item.label}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="text-sm text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
