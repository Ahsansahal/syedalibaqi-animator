"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MotionHero({ data }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const videoRef = useRef(null);

  const [withSound, setWithSound] = useState(false);
  const [streamMounted, setStreamMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Animate subtle GPU transforms without hiding SSR / LCP elements at opacity: 0
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".hero-eyebrow", { y: 10 }, { y: 0, duration: 0.45 }, 0)
          .fromTo(
            ".hero-line-inner",
            { y: 18 },
            { y: 0, duration: 0.55, stagger: 0.06 },
            0.04
          )
          .fromTo(
            ".hero-fade",
            { y: 14 },
            { y: 0, duration: 0.55, stagger: 0.05 },
            0.1
          )
          .fromTo(
            stageRef.current,
            { y: 20, scale: 0.98 },
            { y: 0, scale: 0.98, duration: 0.6 },
            0.12
          );

        if (stageRef.current) {
          gsap.fromTo(
            stageRef.current,
            { scale: 0.97 },
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

  // Defer mounting the 36.8 MB showreel MP4 until after initial page load completes
  // so FCP, LCP (priority AVIF poster), fonts, and JS execute with zero video contention.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timerId = null;
    const activate = () => {
      timerId = window.setTimeout(() => setStreamMounted(true), 250);
    };

    if (document.readyState === "complete") {
      activate();
    } else {
      window.addEventListener("load", activate, { once: true });
    }

    return () => {
      window.removeEventListener("load", activate);
      if (timerId) window.clearTimeout(timerId);
    };
  }, []);

  // Track showreel stage visibility to pause when scrolled off-screen
  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(stageEl);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!streamMounted || withSound) return;
    const el = videoRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    if (inView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [streamMounted, inView, withSound]);

  const handleEnableSound = () => {
    setWithSound(true);
    setStreamMounted(true);
    requestAnimationFrame(() => {
      const el = videoRef.current;
      if (!el) return;
      el.muted = false;
      el.currentTime = 0;
      el.play().catch(() => {});
    });
  };

  return (
    <section
      ref={rootRef}
      className="relative mx-auto max-w-[1440px] overflow-hidden px-4 pt-4 sm:px-6 sm:pt-6 md:px-12 md:pt-10"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[320px] rounded-full bg-accent/12 blur-[120px] sm:h-[420px] sm:w-[420px]"
      />

      {/* Eyebrow */}
      <div className="hero-eyebrow flex flex-wrap items-center gap-2.5 sm:gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 font-display text-[10px] tracking-[0.14em] text-paper uppercase sm:gap-2.5 sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          <span>{data.eyebrow}</span>
        </span>
        <span className="text-[11px] tracking-[0.15em] text-muted uppercase sm:text-xs sm:tracking-[0.22em]">
          {data.subtitleTag || "Visual Art · Motion · Web Design & Code"}
        </span>
      </div>

      {/* Monumental Headline */}
      <h1 className="mt-6 font-display text-[clamp(1.92rem,7.8vw,108px)] leading-[0.94] tracking-[-0.045em] uppercase sm:mt-7 sm:leading-[0.92]">
        {data.heroLines.map((line, i) => (
          <span key={line} className="block py-0.5">
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
      <div className="mt-7 grid grid-cols-1 items-end gap-6 border-t border-white/12 pt-6 sm:mt-9 sm:gap-8 sm:pt-8 lg:grid-cols-12">
        <p className="hero-fade max-w-[680px] text-base leading-[1.58] font-light text-paper/85 sm:text-lg md:text-[21px] lg:col-span-7">
          {data.intro}
        </p>

        <div className="hero-fade flex flex-wrap items-center gap-3 sm:gap-3.5 lg:col-span-5 lg:justify-end">
          <Link
            href={data.primaryCta.href}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 font-display text-xs tracking-[0.12em] whitespace-nowrap text-ink uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:bg-paper sm:flex-initial sm:px-7 sm:py-4 sm:tracking-[0.14em]"
          >
            <span>{data.primaryCta.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href={data.secondaryCta.href}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3.5 font-display text-xs tracking-[0.12em] whitespace-nowrap text-paper uppercase transition-colors duration-300 hover:border-accent hover:text-accent sm:flex-initial sm:px-7 sm:py-4 sm:tracking-[0.14em]"
          >
            {data.secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* Featured Showreel Cinema Stage */}
      <div
        ref={stageRef}
        id="showreel"
        className="mt-10 scroll-mt-28 sm:mt-12 md:mt-16"
      >
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-neutral-950 ring-1 ring-white/12 sm:aspect-[16/9] sm:rounded-[22px] md:rounded-[28px]">
          {/* Preloaded AVIF/WebP LCP Poster Layer */}
          <Image
            src={data.showreel.poster}
            alt={data.showreel.title}
            fill
            priority
            sizes="(min-width: 1480px) 1344px, 95vw"
            className={`object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {streamMounted && (
            <video
              ref={videoRef}
              src={data.showreel.src}
              muted={!withSound}
              loop={!withSound}
              controls={withSound}
              autoPlay
              playsInline
              preload="auto"
              aria-label={data.showreel.title}
              onPlaying={() => setIsPlaying(true)}
              className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-500 ${
                isPlaying || withSound ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {!withSound && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />

              <div className="absolute inset-x-3.5 bottom-3.5 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5 md:inset-x-8 md:bottom-8">
                <div className="min-w-0">
                  <p className="font-display text-[9px] tracking-[0.2em] text-accent uppercase sm:text-[10px] md:text-xs">
                    {data.showreel.label}
                  </p>
                  <p className="mt-0.5 line-clamp-1 font-display text-xs tracking-[-0.02em] text-paper sm:mt-1 sm:line-clamp-none sm:text-base md:text-2xl">
                    {data.showreel.title}
                  </p>
                  <p className="mt-1 hidden text-sm text-paper/70 md:block">
                    {data.showreel.meta}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleEnableSound}
                  aria-label="Play featured showreel with sound"
                  className="inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-full bg-paper/95 px-3.5 py-2 font-display text-[10px] tracking-[0.12em] text-ink uppercase shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:bg-accent sm:min-h-[44px] sm:gap-3 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.14em]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4"
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
        <div className="mt-5 grid grid-cols-1 gap-3 border-b border-white/10 pb-5 sm:mt-6 sm:grid-cols-3 sm:gap-4 sm:pb-6">
          {data.priorities.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group flex min-h-[40px] min-w-0 items-center justify-between gap-3 py-1 transition-colors hover:text-accent"
            >
              <div className="flex min-w-0 items-baseline gap-2.5 sm:gap-3">
                <span className="shrink-0 font-display text-xs text-accent">{item.index}</span>
                <span className="font-display text-xs tracking-[0.04em] text-paper/90 group-hover:text-accent md:text-sm">
                  {item.label}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-sm text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
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
